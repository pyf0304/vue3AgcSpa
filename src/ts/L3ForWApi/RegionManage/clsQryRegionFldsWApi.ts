/**
 * 类名:clsQryRegionFldsWApi
 * 表名:QryRegionFlds(00050115)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:58:55
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
 * 查询区域字段(QryRegionFlds)
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
import { qryRegionFldsCache, isFuncMapCache } from '@/views/RegionManage/QryRegionFldsVueShare';
import { clsQryRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx';
import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
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

export const qryRegionFlds_Controller = 'QryRegionFldsApi';
export const qryRegionFlds_ConstructorName = 'qryRegionFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function QryRegionFlds_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsQryRegionFldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsQryRegionFldsWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
      const objQryRegionFlds = QryRegionFlds_GetObjFromJsonObj(returnObj);
      return objQryRegionFlds;
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsQryRegionFldsWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsQryRegionFldsEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objQryRegionFldsCache: clsQryRegionFldsEN = JSON.parse(strTempObj);
    return objQryRegionFldsCache;
  }
  try {
    const objQryRegionFlds = await QryRegionFlds_GetObjBymIdAsync(lngmId);
    if (objQryRegionFlds != null) {
      localStorage.setItem(strKey, JSON.stringify(objQryRegionFlds));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objQryRegionFlds;
    }
    return objQryRegionFlds;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjBymIdCache(
  lngmId: number,
  strRegionId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsQryRegionFldsWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
  try {
    const arrQryRegionFldsSel = arrQryRegionFldsObjLstCache.filter((x) => x.mId == lngmId);
    let objQryRegionFlds: clsQryRegionFldsEN;
    if (arrQryRegionFldsSel.length > 0) {
      objQryRegionFlds = arrQryRegionFldsSel[0];
      return objQryRegionFlds;
    } else {
      if (bolTryAsyncOnce == true) {
        const objQryRegionFldsConst = await QryRegionFlds_GetObjBymIdAsync(lngmId);
        if (objQryRegionFldsConst != null) {
          QryRegionFlds_ReFreshThisCache(strRegionId);
          return objQryRegionFldsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      qryRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objQryRegionFlds:所给的对象
 * @returns 对象
 */
export async function QryRegionFlds_UpdateObjInLstCache(
  objQryRegionFlds: clsQryRegionFldsEN,
  strRegionId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
    const obj = arrQryRegionFldsObjLstCache.find(
      (x) =>
        x.regionId == objQryRegionFlds.regionId &&
        x.fldId == objQryRegionFlds.fldId &&
        x.outFldId == objQryRegionFlds.outFldId,
    );
    if (obj != null) {
      objQryRegionFlds.mId = obj.mId;
      ObjectAssign(obj, objQryRegionFlds);
    } else {
      arrQryRegionFldsObjLstCache.push(objQryRegionFlds);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qryRegionFlds_ConstructorName,
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
export function QryRegionFlds_SortFunDefa(a: clsQryRegionFldsEN, b: clsQryRegionFldsEN): number {
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
export function QryRegionFlds_SortFunDefa2Fld(
  a: clsQryRegionFldsEN,
  b: clsQryRegionFldsEN,
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
export function QryRegionFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQryRegionFldsEN.con_mId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return a.mId - b.mId;
        };
      case clsQryRegionFldsEN.con_RegionId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsQryRegionFldsEN.con_FldId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.fldId == null) return -1;
          if (b.fldId == null) return 1;
          return a.fldId.localeCompare(b.fldId);
        };
      case clsQryRegionFldsEN.con_OutFldId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.outFldId == null) return -1;
          if (b.outFldId == null) return 1;
          return a.outFldId.localeCompare(b.outFldId);
        };
      case clsQryRegionFldsEN.con_LabelCaption:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.labelCaption == null) return -1;
          if (b.labelCaption == null) return 1;
          return a.labelCaption.localeCompare(b.labelCaption);
        };
      case clsQryRegionFldsEN.con_CtlTypeId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.ctlTypeId == null) return -1;
          if (b.ctlTypeId == null) return 1;
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsQryRegionFldsEN.con_VarId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.varId == null) return -1;
          if (b.varId == null) return 1;
          return a.varId.localeCompare(b.varId);
        };
      case clsQryRegionFldsEN.con_DsTabId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.dsTabId == null) return -1;
          if (b.dsTabId == null) return 1;
          return a.dsTabId.localeCompare(b.dsTabId);
        };
      case clsQryRegionFldsEN.con_TabFeatureId4Ddl:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.tabFeatureId4Ddl == null) return -1;
          if (b.tabFeatureId4Ddl == null) return 1;
          return a.tabFeatureId4Ddl.localeCompare(b.tabFeatureId4Ddl);
        };
      case clsQryRegionFldsEN.con_FldIdCond1:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.fldIdCond1 == null) return -1;
          if (b.fldIdCond1 == null) return 1;
          return a.fldIdCond1.localeCompare(b.fldIdCond1);
        };
      case clsQryRegionFldsEN.con_VarIdCond1:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.varIdCond1 == null) return -1;
          if (b.varIdCond1 == null) return 1;
          return a.varIdCond1.localeCompare(b.varIdCond1);
        };
      case clsQryRegionFldsEN.con_FldIdCond2:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.fldIdCond2 == null) return -1;
          if (b.fldIdCond2 == null) return 1;
          return a.fldIdCond2.localeCompare(b.fldIdCond2);
        };
      case clsQryRegionFldsEN.con_VarIdCond2:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.varIdCond2 == null) return -1;
          if (b.varIdCond2 == null) return 1;
          return a.varIdCond2.localeCompare(b.varIdCond2);
        };
      case clsQryRegionFldsEN.con_QueryOptionId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.queryOptionId == null) return -1;
          if (b.queryOptionId == null) return 1;
          return a.queryOptionId.localeCompare(b.queryOptionId);
        };
      case clsQryRegionFldsEN.con_DdlItemsOptionId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.ddlItemsOptionId == null) return -1;
          if (b.ddlItemsOptionId == null) return 1;
          return a.ddlItemsOptionId.localeCompare(b.ddlItemsOptionId);
        };
      case clsQryRegionFldsEN.con_DsSqlStr:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.dsSqlStr == null) return -1;
          if (b.dsSqlStr == null) return 1;
          return a.dsSqlStr.localeCompare(b.dsSqlStr);
        };
      case clsQryRegionFldsEN.con_ItemsString:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.itemsString == null) return -1;
          if (b.itemsString == null) return 1;
          return a.itemsString.localeCompare(b.itemsString);
        };
      case clsQryRegionFldsEN.con_DsCondStr:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.dsCondStr == null) return -1;
          if (b.dsCondStr == null) return 1;
          return a.dsCondStr.localeCompare(b.dsCondStr);
        };
      case clsQryRegionFldsEN.con_ColSpan:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return a.colSpan - b.colSpan;
        };
      case clsQryRegionFldsEN.con_Width:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return a.width - b.width;
        };
      case clsQryRegionFldsEN.con_SeqNum:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsQryRegionFldsEN.con_ChangeEvent:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.changeEvent == null) return -1;
          if (b.changeEvent == null) return 1;
          return a.changeEvent.localeCompare(b.changeEvent);
        };
      case clsQryRegionFldsEN.con_ClickEvent:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.clickEvent == null) return -1;
          if (b.clickEvent == null) return 1;
          return a.clickEvent.localeCompare(b.clickEvent);
        };
      case clsQryRegionFldsEN.con_InUse:
        return (a: clsQryRegionFldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsQryRegionFldsEN.con_ErrMsg:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsQryRegionFldsEN.con_PrjId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsQryRegionFldsEN.con_UpdUser:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsQryRegionFldsEN.con_UpdDate:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsQryRegionFldsEN.con_Memo:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QryRegionFlds]中不存在!(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQryRegionFldsEN.con_mId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return b.mId - a.mId;
        };
      case clsQryRegionFldsEN.con_RegionId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsQryRegionFldsEN.con_FldId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.fldId == null) return -1;
          if (a.fldId == null) return 1;
          return b.fldId.localeCompare(a.fldId);
        };
      case clsQryRegionFldsEN.con_OutFldId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.outFldId == null) return -1;
          if (a.outFldId == null) return 1;
          return b.outFldId.localeCompare(a.outFldId);
        };
      case clsQryRegionFldsEN.con_LabelCaption:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.labelCaption == null) return -1;
          if (a.labelCaption == null) return 1;
          return b.labelCaption.localeCompare(a.labelCaption);
        };
      case clsQryRegionFldsEN.con_CtlTypeId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.ctlTypeId == null) return -1;
          if (a.ctlTypeId == null) return 1;
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsQryRegionFldsEN.con_VarId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.varId == null) return -1;
          if (a.varId == null) return 1;
          return b.varId.localeCompare(a.varId);
        };
      case clsQryRegionFldsEN.con_DsTabId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.dsTabId == null) return -1;
          if (a.dsTabId == null) return 1;
          return b.dsTabId.localeCompare(a.dsTabId);
        };
      case clsQryRegionFldsEN.con_TabFeatureId4Ddl:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.tabFeatureId4Ddl == null) return -1;
          if (a.tabFeatureId4Ddl == null) return 1;
          return b.tabFeatureId4Ddl.localeCompare(a.tabFeatureId4Ddl);
        };
      case clsQryRegionFldsEN.con_FldIdCond1:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.fldIdCond1 == null) return -1;
          if (a.fldIdCond1 == null) return 1;
          return b.fldIdCond1.localeCompare(a.fldIdCond1);
        };
      case clsQryRegionFldsEN.con_VarIdCond1:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.varIdCond1 == null) return -1;
          if (a.varIdCond1 == null) return 1;
          return b.varIdCond1.localeCompare(a.varIdCond1);
        };
      case clsQryRegionFldsEN.con_FldIdCond2:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.fldIdCond2 == null) return -1;
          if (a.fldIdCond2 == null) return 1;
          return b.fldIdCond2.localeCompare(a.fldIdCond2);
        };
      case clsQryRegionFldsEN.con_VarIdCond2:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.varIdCond2 == null) return -1;
          if (a.varIdCond2 == null) return 1;
          return b.varIdCond2.localeCompare(a.varIdCond2);
        };
      case clsQryRegionFldsEN.con_QueryOptionId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.queryOptionId == null) return -1;
          if (a.queryOptionId == null) return 1;
          return b.queryOptionId.localeCompare(a.queryOptionId);
        };
      case clsQryRegionFldsEN.con_DdlItemsOptionId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.ddlItemsOptionId == null) return -1;
          if (a.ddlItemsOptionId == null) return 1;
          return b.ddlItemsOptionId.localeCompare(a.ddlItemsOptionId);
        };
      case clsQryRegionFldsEN.con_DsSqlStr:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.dsSqlStr == null) return -1;
          if (a.dsSqlStr == null) return 1;
          return b.dsSqlStr.localeCompare(a.dsSqlStr);
        };
      case clsQryRegionFldsEN.con_ItemsString:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.itemsString == null) return -1;
          if (a.itemsString == null) return 1;
          return b.itemsString.localeCompare(a.itemsString);
        };
      case clsQryRegionFldsEN.con_DsCondStr:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.dsCondStr == null) return -1;
          if (a.dsCondStr == null) return 1;
          return b.dsCondStr.localeCompare(a.dsCondStr);
        };
      case clsQryRegionFldsEN.con_ColSpan:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return b.colSpan - a.colSpan;
        };
      case clsQryRegionFldsEN.con_Width:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return b.width - a.width;
        };
      case clsQryRegionFldsEN.con_SeqNum:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsQryRegionFldsEN.con_ChangeEvent:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.changeEvent == null) return -1;
          if (a.changeEvent == null) return 1;
          return b.changeEvent.localeCompare(a.changeEvent);
        };
      case clsQryRegionFldsEN.con_ClickEvent:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.clickEvent == null) return -1;
          if (a.clickEvent == null) return 1;
          return b.clickEvent.localeCompare(a.clickEvent);
        };
      case clsQryRegionFldsEN.con_InUse:
        return (b: clsQryRegionFldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsQryRegionFldsEN.con_ErrMsg:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsQryRegionFldsEN.con_PrjId:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsQryRegionFldsEN.con_UpdUser:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsQryRegionFldsEN.con_UpdDate:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsQryRegionFldsEN.con_Memo:
        return (a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QryRegionFlds]中不存在!(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
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
export async function QryRegionFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQryRegionFldsEN.con_mId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.mId === value;
      };
    case clsQryRegionFldsEN.con_RegionId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.regionId === value;
      };
    case clsQryRegionFldsEN.con_FldId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.fldId === value;
      };
    case clsQryRegionFldsEN.con_OutFldId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.outFldId === value;
      };
    case clsQryRegionFldsEN.con_LabelCaption:
      return (obj: clsQryRegionFldsEN) => {
        return obj.labelCaption === value;
      };
    case clsQryRegionFldsEN.con_CtlTypeId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.ctlTypeId === value;
      };
    case clsQryRegionFldsEN.con_VarId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.varId === value;
      };
    case clsQryRegionFldsEN.con_DsTabId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.dsTabId === value;
      };
    case clsQryRegionFldsEN.con_TabFeatureId4Ddl:
      return (obj: clsQryRegionFldsEN) => {
        return obj.tabFeatureId4Ddl === value;
      };
    case clsQryRegionFldsEN.con_FldIdCond1:
      return (obj: clsQryRegionFldsEN) => {
        return obj.fldIdCond1 === value;
      };
    case clsQryRegionFldsEN.con_VarIdCond1:
      return (obj: clsQryRegionFldsEN) => {
        return obj.varIdCond1 === value;
      };
    case clsQryRegionFldsEN.con_FldIdCond2:
      return (obj: clsQryRegionFldsEN) => {
        return obj.fldIdCond2 === value;
      };
    case clsQryRegionFldsEN.con_VarIdCond2:
      return (obj: clsQryRegionFldsEN) => {
        return obj.varIdCond2 === value;
      };
    case clsQryRegionFldsEN.con_QueryOptionId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.queryOptionId === value;
      };
    case clsQryRegionFldsEN.con_DdlItemsOptionId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.ddlItemsOptionId === value;
      };
    case clsQryRegionFldsEN.con_DsSqlStr:
      return (obj: clsQryRegionFldsEN) => {
        return obj.dsSqlStr === value;
      };
    case clsQryRegionFldsEN.con_ItemsString:
      return (obj: clsQryRegionFldsEN) => {
        return obj.itemsString === value;
      };
    case clsQryRegionFldsEN.con_DsCondStr:
      return (obj: clsQryRegionFldsEN) => {
        return obj.dsCondStr === value;
      };
    case clsQryRegionFldsEN.con_ColSpan:
      return (obj: clsQryRegionFldsEN) => {
        return obj.colSpan === value;
      };
    case clsQryRegionFldsEN.con_Width:
      return (obj: clsQryRegionFldsEN) => {
        return obj.width === value;
      };
    case clsQryRegionFldsEN.con_SeqNum:
      return (obj: clsQryRegionFldsEN) => {
        return obj.seqNum === value;
      };
    case clsQryRegionFldsEN.con_ChangeEvent:
      return (obj: clsQryRegionFldsEN) => {
        return obj.changeEvent === value;
      };
    case clsQryRegionFldsEN.con_ClickEvent:
      return (obj: clsQryRegionFldsEN) => {
        return obj.clickEvent === value;
      };
    case clsQryRegionFldsEN.con_InUse:
      return (obj: clsQryRegionFldsEN) => {
        return obj.inUse === value;
      };
    case clsQryRegionFldsEN.con_ErrMsg:
      return (obj: clsQryRegionFldsEN) => {
        return obj.errMsg === value;
      };
    case clsQryRegionFldsEN.con_PrjId:
      return (obj: clsQryRegionFldsEN) => {
        return obj.prjId === value;
      };
    case clsQryRegionFldsEN.con_UpdUser:
      return (obj: clsQryRegionFldsEN) => {
        return obj.updUser === value;
      };
    case clsQryRegionFldsEN.con_UpdDate:
      return (obj: clsQryRegionFldsEN) => {
        return obj.updDate === value;
      };
    case clsQryRegionFldsEN.con_Memo:
      return (obj: clsQryRegionFldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QryRegionFlds]中不存在!(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
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
export async function QryRegionFlds_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strRegionIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsQryRegionFldsWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsQryRegionFldsWApi.func)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsQryRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsQryRegionFldsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsQryRegionFldsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objQryRegionFlds = await QryRegionFlds_GetObjBymIdCache(lngmId, strRegionIdClassfy);
  if (objQryRegionFlds == null) return '';
  if (objQryRegionFlds.GetFldValue(strOutFldName) == null) return '';
  return objQryRegionFlds.GetFldValue(strOutFldName).toString();
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
export async function QryRegionFlds_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strRegionIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsQryRegionFldsWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsQryRegionFldsWApi.funcKey)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsQryRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrQryRegionFlds = await QryRegionFlds_GetObjLstCache(strRegionIdClassfy);
  if (arrQryRegionFlds == null) return [];
  let arrQryRegionFldsSel = arrQryRegionFlds;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrQryRegionFldsSel.length == 0) return [];
  return arrQryRegionFldsSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QryRegionFlds_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQryRegionFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
      const objQryRegionFlds = QryRegionFlds_GetObjFromJsonObj(returnObj);
      return objQryRegionFlds;
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjLstClientCache(strRegionId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsQryRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsQryRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("RegionId='{0}'", strRegionId);
  }
  const strKey = Format('{0}_{1}', clsQryRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsQryRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQryRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrQryRegionFldsExObjLstCache: Array<clsQryRegionFldsEN> = CacheHelper.Get(strKey);
    const arrQryRegionFldsObjLstT = QryRegionFlds_GetObjLstByJSONObjLst(
      arrQryRegionFldsExObjLstCache,
    );
    return arrQryRegionFldsObjLstT;
  }
  try {
    const arrQryRegionFldsExObjLst = await QryRegionFlds_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrQryRegionFldsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQryRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrQryRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjLstlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsQryRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsQryRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsQryRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsQryRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsQryRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQryRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQryRegionFldsExObjLstCache: Array<clsQryRegionFldsEN> = JSON.parse(strTempObjLst);
    const arrQryRegionFldsObjLstT = QryRegionFlds_GetObjLstByJSONObjLst(
      arrQryRegionFldsExObjLstCache,
    );
    return arrQryRegionFldsObjLstT;
  }
  try {
    const arrQryRegionFldsExObjLst = await QryRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsQryRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrQryRegionFldsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQryRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrQryRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjLstlocalStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsQryRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQryRegionFldsObjLstCache: Array<clsQryRegionFldsEN> = JSON.parse(strTempObjLst);
    return arrQryRegionFldsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function QryRegionFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQryRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
          qryRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QryRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjLstsessionStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsQryRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsQryRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsQryRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsQryRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsQryRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQryRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQryRegionFldsExObjLstCache: Array<clsQryRegionFldsEN> = JSON.parse(strTempObjLst);
    const arrQryRegionFldsObjLstT = QryRegionFlds_GetObjLstByJSONObjLst(
      arrQryRegionFldsExObjLstCache,
    );
    return arrQryRegionFldsObjLstT;
  }
  try {
    const arrQryRegionFldsExObjLst = await QryRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsQryRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrQryRegionFldsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQryRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrQryRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjLstsessionStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsQryRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQryRegionFldsObjLstCache: Array<clsQryRegionFldsEN> = JSON.parse(strTempObjLst);
    return arrQryRegionFldsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QryRegionFlds_GetObjLstCache(
  strRegionId: string,
): Promise<Array<clsQryRegionFldsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空！(In clsQryRegionFldsWApi.QryRegionFlds_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确！(clsQryRegionFldsWApi.QryRegionFlds_GetObjLstCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrQryRegionFldsObjLstCache;
  switch (clsQryRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstsessionStorage(strRegionId);
      break;
    case '03': //localStorage
      arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstlocalStorage(strRegionId);
      break;
    case '02': //ClientCache
      arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstClientCache(strRegionId);
      break;
    default:
      arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstClientCache(strRegionId);
      break;
  }
  return arrQryRegionFldsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QryRegionFlds_GetObjLstPureCache(strRegionId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrQryRegionFldsObjLstCache;
  switch (clsQryRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstsessionStoragePureCache(
        strRegionId,
      );
      break;
    case '03': //localStorage
      arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstlocalStoragePureCache(strRegionId);
      break;
    case '02': //ClientCache
      arrQryRegionFldsObjLstCache = null;
      break;
    default:
      arrQryRegionFldsObjLstCache = null;
      break;
  }
  return arrQryRegionFldsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QryRegionFlds_GetSubObjLstCache(
  objQryRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
  let arrQryRegionFldsSel = arrQryRegionFldsObjLstCache;
  if (objQryRegionFldsCond.GetConditions().length == 0) return arrQryRegionFldsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objQryRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQryRegionFldsSel = arrQryRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrQryRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQryRegionFldsCond),
      qryRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQryRegionFldsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function QryRegionFlds_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsQryRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
          qryRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QryRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
    const arrQryRegionFldsSel = arrQryRegionFldsObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrQryRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQryRegionFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
          qryRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QryRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQryRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
          qryRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QryRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsQryRegionFldsEN>();
  const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
  if (arrQryRegionFldsObjLstCache.length == 0) return arrQryRegionFldsObjLstCache;
  let arrQryRegionFldsSel = arrQryRegionFldsObjLstCache;
  const objQryRegionFldsCond = objPagerPara.conditionCollection;
  if (objQryRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsQryRegionFldsEN>();
  }
  //console.log("clsQryRegionFldsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objQryRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQryRegionFldsSel = arrQryRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQryRegionFldsSel.length == 0) return arrQryRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQryRegionFldsSel = arrQryRegionFldsSel.sort(
        QryRegionFlds_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQryRegionFldsSel = arrQryRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrQryRegionFldsSel = arrQryRegionFldsSel.slice(intStart, intEnd);
    return arrQryRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qryRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQryRegionFldsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QryRegionFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQryRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQryRegionFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
          qryRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QryRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_DelQryRegionFldssAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelQryRegionFldssAsync';
  const strAction = 'DelQryRegionFldss';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
): Promise<Array<clsQryRegionFldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrQryRegionFldsObjLst = await QryRegionFlds_GetObjLstCache(strRegionId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsQryRegionFldsENEx>();
  const arrQryRegionFldsExObjLst = arrQryRegionFldsObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.regionId}`;
    if (qryRegionFldsCache[cacheKey]) {
      const oldObj = qryRegionFldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = QryRegionFlds_CopyToEx(obj);
      arrNewObj.push(newObj);
      qryRegionFldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await QryRegionFlds_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQryRegionFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrQryRegionFldsExObjLst) {
      await QryRegionFlds_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.regionId}`;
      qryRegionFldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrQryRegionFldsExObjLst.length == 0) return arrQryRegionFldsExObjLst;
  let arrQryRegionFldsSel: Array<clsQryRegionFldsENEx> = arrQryRegionFldsExObjLst;
  const objQryRegionFldsCond = objPagerPara.conditionCollection;
  if (objQryRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrQryRegionFldsExObjLst;
  }
  try {
    for (const objCondition of objQryRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQryRegionFldsSel = arrQryRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQryRegionFldsSel.length == 0) return arrQryRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrQryRegionFldsSel = arrQryRegionFldsSel.sort(
        QryRegionFlds_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQryRegionFldsSel = arrQryRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrQryRegionFldsSel = arrQryRegionFldsSel.slice(intStart, intEnd);
    return arrQryRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qryRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQryRegionFldsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objQryRegionFldsENS:源对象
 * @returns 目标对象=>clsQryRegionFldsEN:objQryRegionFldsENT
 **/
export function QryRegionFlds_CopyToEx(
  objQryRegionFldsENS: clsQryRegionFldsEN,
): clsQryRegionFldsENEx {
  const strThisFuncName = QryRegionFlds_CopyToEx.name;
  const objQryRegionFldsENT = new clsQryRegionFldsENEx();
  try {
    ObjectAssign(objQryRegionFldsENT, objQryRegionFldsENS);
    return objQryRegionFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQryRegionFldsENT;
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
export function QryRegionFlds_FuncMapByFldName(
  strFldName: string,
  objQryRegionFldsEx: clsQryRegionFldsENEx,
) {
  const strThisFuncName = QryRegionFlds_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQryRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQryRegionFldsENEx.con_FldName:
      return QryRegionFlds_FuncMapFldName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_CtlTypeName:
      return QryRegionFlds_FuncMapCtlTypeName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_OutFldName:
      return QryRegionFlds_FuncMapOutFldName(objQryRegionFldsEx);
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
export function QryRegionFlds_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQryRegionFldsENEx.con_TabName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsQryRegionFldsENEx.con_FldName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsQryRegionFldsENEx.con_CtlTypeName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsQryRegionFldsENEx.con_Event:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.event === null && b.event === null) return 0;
          if (a.event === null) return -1;
          if (b.event === null) return 1;
          return a.event.localeCompare(b.event);
        };
      case clsQryRegionFldsENEx.con_FldNameV2:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.fldNameV2.localeCompare(b.fldNameV2);
        };
      case clsQryRegionFldsENEx.con_TrClass:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsQryRegionFldsENEx.con_TdClass:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return -1;
          if (b.tdClass === null) return 1;
          return a.tdClass.localeCompare(b.tdClass);
        };
      case clsQryRegionFldsENEx.con_OutFldName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return -1;
          if (b.outFldName === null) return 1;
          return a.outFldName.localeCompare(b.outFldName);
        };
      case clsQryRegionFldsENEx.con_TabId:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsQryRegionFldsENEx.con_DnPathIdEx:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.dnPathIdEx.localeCompare(b.dnPathIdEx);
        };
      case clsQryRegionFldsENEx.con_DnPathId:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsQryRegionFldsENEx.con_IsUseFunc:
        return (a: clsQryRegionFldsENEx) => {
          if (a.isUseFunc == true) return 1;
          else return -1;
        };
      case clsQryRegionFldsENEx.con_DataPropertyName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.dataPropertyName === null && b.dataPropertyName === null) return 0;
          if (a.dataPropertyName === null) return -1;
          if (b.dataPropertyName === null) return 1;
          return a.dataPropertyName.localeCompare(b.dataPropertyName);
        };
      default:
        return QryRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQryRegionFldsENEx.con_TabName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsQryRegionFldsENEx.con_FldName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsQryRegionFldsENEx.con_CtlTypeName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsQryRegionFldsENEx.con_Event:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.event === null && b.event === null) return 0;
          if (a.event === null) return 1;
          if (b.event === null) return -1;
          return b.event.localeCompare(a.event);
        };
      case clsQryRegionFldsENEx.con_FldNameV2:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.fldNameV2.localeCompare(a.fldNameV2);
        };
      case clsQryRegionFldsENEx.con_TrClass:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsQryRegionFldsENEx.con_TdClass:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return 1;
          if (b.tdClass === null) return -1;
          return b.tdClass.localeCompare(a.tdClass);
        };
      case clsQryRegionFldsENEx.con_OutFldName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return 1;
          if (b.outFldName === null) return -1;
          return b.outFldName.localeCompare(a.outFldName);
        };
      case clsQryRegionFldsENEx.con_TabId:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsQryRegionFldsENEx.con_DnPathIdEx:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.dnPathIdEx.localeCompare(a.dnPathIdEx);
        };
      case clsQryRegionFldsENEx.con_DnPathId:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsQryRegionFldsENEx.con_IsUseFunc:
        return (b: clsQryRegionFldsENEx) => {
          if (b.isUseFunc == true) return 1;
          else return -1;
        };
      case clsQryRegionFldsENEx.con_DataPropertyName:
        return (a: clsQryRegionFldsENEx, b: clsQryRegionFldsENEx) => {
          if (a.dataPropertyName === null && b.dataPropertyName === null) return 0;
          if (a.dataPropertyName === null) return 1;
          if (b.dataPropertyName === null) return -1;
          return b.dataPropertyName.localeCompare(a.dataPropertyName);
        };
      default:
        return QryRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFlds_FuncMapFldName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFlds_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.fldName) == true) {
      const vFieldTabSimFldId = objQryRegionFlds.fldId;
      if (IsNullOrEmpty(objQryRegionFlds.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objQryRegionFlds.prjId,
      );
      objQryRegionFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFlds_FuncMapCtlTypeName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFlds_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.ctlTypeName) == true) {
      const CtlTypeCtlTypeId = objQryRegionFlds.ctlTypeId;
      const CtlTypeCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeCtlTypeId,
      );
      objQryRegionFlds.ctlTypeName = CtlTypeCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFlds_FuncMapOutFldName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFlds_FuncMapOutFldName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.outFldName) == true) {
      const vFieldTabSimFldId = objQryRegionFlds.outFldId;
      if (IsNullOrEmpty(objQryRegionFlds.prjId) == true) {
        const strMsg = `函数映射[OutFldName]数据出错,prjId不能为空!(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objQryRegionFlds.prjId,
      );
      objQryRegionFlds.outFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001305)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_DelQryRegionFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelQryRegionFldssByCondAsync';
  const strAction = 'DelQryRegionFldssByCond';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QryRegionFlds_AddNewRecordAsync(
  objQryRegionFldsEN: clsQryRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objQryRegionFldsEN);
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQryRegionFldsEN, config);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QryRegionFlds_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QryRegionFlds_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objQryRegionFldsEN);
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QryRegionFlds_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objQryRegionFldsEN);
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_AddNewObjSave(
  objQryRegionFldsEN: clsQryRegionFldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    QryRegionFlds_CheckPropertyNew(objQryRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await QryRegionFlds_CheckUniCond4Add(objQryRegionFldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await QryRegionFlds_AddNewRecordAsync(objQryRegionFldsEN);
    if (returnBool == true) {
      QryRegionFlds_ReFreshCache(objQryRegionFldsEN.regionId);
    } else {
      const strInfo = `添加[查询区域字段(QryRegionFlds)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objQryRegionFldsEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function QryRegionFlds_CheckUniCond4Add(
  objQryRegionFldsEN: clsQryRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = QryRegionFlds_GetUniCondStr(objQryRegionFldsEN);
  const bolIsExistCondition = await QryRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function QryRegionFlds_CheckUniCond4Update(
  objQryRegionFldsEN: clsQryRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = QryRegionFlds_GetUniCondStr4Update(objQryRegionFldsEN);
  const bolIsExistCondition = await QryRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function QryRegionFlds_UpdateObjSave(
  objQryRegionFldsEN: clsQryRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objQryRegionFldsEN.sfUpdFldSetStr = objQryRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objQryRegionFldsEN.mId == 0 || objQryRegionFldsEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    QryRegionFlds_CheckProperty4Update(objQryRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await QryRegionFlds_CheckUniCond4Update(objQryRegionFldsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await QryRegionFlds_UpdateRecordAsync(objQryRegionFldsEN);
    if (returnBool == true) {
      QryRegionFlds_ReFreshCache(objQryRegionFldsEN.regionId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${qryRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objQryRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QryRegionFlds_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objQryRegionFldsEN);
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QryRegionFlds_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objQryRegionFldsEN);
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QryRegionFlds_AddNewRecordWithReturnKeyAsync(
  objQryRegionFldsEN: clsQryRegionFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQryRegionFldsEN, config);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QryRegionFlds_UpdateRecordAsync(
  objQryRegionFldsEN: clsQryRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQryRegionFldsEN.sfUpdFldSetStr === undefined ||
    objQryRegionFldsEN.sfUpdFldSetStr === null ||
    objQryRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQryRegionFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQryRegionFldsEN, config);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QryRegionFlds_EditRecordExAsync(
  objQryRegionFldsEN: clsQryRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objQryRegionFldsEN.sfUpdFldSetStr === undefined ||
    objQryRegionFldsEN.sfUpdFldSetStr === null ||
    objQryRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQryRegionFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQryRegionFldsEN, config);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QryRegionFlds_UpdateWithConditionAsync(
  objQryRegionFldsEN: clsQryRegionFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQryRegionFldsEN.sfUpdFldSetStr === undefined ||
    objQryRegionFldsEN.sfUpdFldSetStr === null ||
    objQryRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQryRegionFldsEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);
  objQryRegionFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQryRegionFldsEN, config);
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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_IsExistRecordCache(
  objQryRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
  if (arrQryRegionFldsObjLstCache == null) return false;
  let arrQryRegionFldsSel = arrQryRegionFldsObjLstCache;
  if (objQryRegionFldsCond.GetConditions().length == 0)
    return arrQryRegionFldsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objQryRegionFldsCond.GetConditions()) {
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
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQryRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objQryRegionFldsCond),
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_IsExistCache(lngmId: number, strRegionId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
  if (arrQryRegionFldsObjLstCache == null) return false;
  try {
    const arrQryRegionFldsSel = arrQryRegionFldsObjLstCache.filter((x) => x.mId == lngmId);
    if (arrQryRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
 * @param objQryRegionFldsCond:条件对象
 * @returns 对象列表记录数
 */
export async function QryRegionFlds_GetRecCountByCondCache(
  objQryRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
  if (arrQryRegionFldsObjLstCache == null) return 0;
  let arrQryRegionFldsSel = arrQryRegionFldsObjLstCache;
  if (objQryRegionFldsCond.GetConditions().length == 0) return arrQryRegionFldsSel.length;
  try {
    for (const objCondition of objQryRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrQryRegionFldsSel = arrQryRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQryRegionFldsSel = arrQryRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrQryRegionFldsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQryRegionFldsCond),
      qryRegionFlds_ConstructorName,
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
export async function QryRegionFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qryRegionFlds_Controller, strAction);

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
        qryRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qryRegionFlds_ConstructorName,
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
export function QryRegionFlds_GetWebApiUrl(strController: string, strAction: string): string {
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
export function QryRegionFlds_ReFreshCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsQryRegionFldsWApi.clsQryRegionFldsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsQryRegionFldsWApi.clsQryRegionFldsWApi.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsQryRegionFldsEN._CurrTabName, strRegionId);
  switch (clsQryRegionFldsEN.CacheModeId) {
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
  clsQryRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function QryRegionFlds_ReFreshThisCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsQryRegionFldsWApi.QryRegionFlds_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsQryRegionFldsWApi.QryRegionFlds_ReFreshThisCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsQryRegionFldsEN._CurrTabName, strRegionId);
    switch (clsQryRegionFldsEN.CacheModeId) {
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
    clsQryRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function QryRegionFlds_GetLastRefreshTime(): string {
  if (clsQryRegionFldsEN._RefreshTimeLst.length == 0) return '';
  return clsQryRegionFldsEN._RefreshTimeLst[clsQryRegionFldsEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QryRegionFlds_CheckPropertyNew(pobjQryRegionFldsEN: clsQryRegionFldsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjQryRegionFldsEN.regionId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域Id]不能为空(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.prjId) === true ||
    pobjQryRegionFldsEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjQryRegionFldsEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.regionId) == false &&
    GetStrLen(pobjQryRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.regionId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldId) == false &&
    GetStrLen(pobjQryRegionFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.fldId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.outFldId) == false &&
    GetStrLen(pobjQryRegionFldsEN.outFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[OutFldId(outFldId)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.outFldId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.labelCaption) == false &&
    GetStrLen(pobjQryRegionFldsEN.labelCaption) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[标签标题(labelCaption)]的长度不能超过150(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.labelCaption}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjQryRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.ctlTypeId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varId) == false &&
    GetStrLen(pobjQryRegionFldsEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id(varId)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.varId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsTabId) == false &&
    GetStrLen(pobjQryRegionFldsEN.dsTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源表ID(dsTabId)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.dsTabId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.tabFeatureId4Ddl) == false &&
    GetStrLen(pobjQryRegionFldsEN.tabFeatureId4Ddl) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉框表功能Id(tabFeatureId4Ddl)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.tabFeatureId4Ddl}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldIdCond1) == false &&
    GetStrLen(pobjQryRegionFldsEN.fldIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id_条件1(fldIdCond1)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.fldIdCond1}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond1) == false &&
    GetStrLen(pobjQryRegionFldsEN.varIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id_条件1(varIdCond1)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.varIdCond1}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldIdCond2) == false &&
    GetStrLen(pobjQryRegionFldsEN.fldIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id_条件2(fldIdCond2)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.fldIdCond2}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond2) == false &&
    GetStrLen(pobjQryRegionFldsEN.varIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源字段_条件1(varIdCond2)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.varIdCond2}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.queryOptionId) == false &&
    GetStrLen(pobjQryRegionFldsEN.queryOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[查询方式Id(queryOptionId)]的长度不能超过2(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.queryOptionId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjQryRegionFldsEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.ddlItemsOptionId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsSqlStr) == false &&
    GetStrLen(pobjQryRegionFldsEN.dsSqlStr) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源SQL串(dsSqlStr)]的长度不能超过200(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.dsSqlStr}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.itemsString) == false &&
    GetStrLen(pobjQryRegionFldsEN.itemsString) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[列表项串(itemsString)]的长度不能超过200(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.itemsString}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsCondStr) == false &&
    GetStrLen(pobjQryRegionFldsEN.dsCondStr) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源条件串(dsCondStr)]的长度不能超过50(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.dsCondStr}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.changeEvent) == false &&
    GetStrLen(pobjQryRegionFldsEN.changeEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Change事件(changeEvent)]的长度不能超过50(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.changeEvent}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.clickEvent) == false &&
    GetStrLen(pobjQryRegionFldsEN.clickEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Click事件(clickEvent)]的长度不能超过50(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.clickEvent}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjQryRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.errMsg}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.prjId) == false &&
    GetStrLen(pobjQryRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.prjId}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.updUser) == false &&
    GetStrLen(pobjQryRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.updUser}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.updDate) == false &&
    GetStrLen(pobjQryRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.updDate}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.memo) == false &&
    GetStrLen(pobjQryRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.memo}(clsQryRegionFldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjQryRegionFldsEN.mId &&
    undefined !== pobjQryRegionFldsEN.mId &&
    tzDataType.isNumber(pobjQryRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjQryRegionFldsEN.mId}], 非法,应该为数值型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.regionId) == false &&
    undefined !== pobjQryRegionFldsEN.regionId &&
    tzDataType.isString(pobjQryRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域Id(regionId)]的值:[${pobjQryRegionFldsEN.regionId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldId) == false &&
    undefined !== pobjQryRegionFldsEN.fldId &&
    tzDataType.isString(pobjQryRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjQryRegionFldsEN.fldId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.outFldId) == false &&
    undefined !== pobjQryRegionFldsEN.outFldId &&
    tzDataType.isString(pobjQryRegionFldsEN.outFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[OutFldId(outFldId)]的值:[${pobjQryRegionFldsEN.outFldId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.labelCaption) == false &&
    undefined !== pobjQryRegionFldsEN.labelCaption &&
    tzDataType.isString(pobjQryRegionFldsEN.labelCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[标签标题(labelCaption)]的值:[${pobjQryRegionFldsEN.labelCaption}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjQryRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjQryRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjQryRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varId) == false &&
    undefined !== pobjQryRegionFldsEN.varId &&
    tzDataType.isString(pobjQryRegionFldsEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id(varId)]的值:[${pobjQryRegionFldsEN.varId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsTabId) == false &&
    undefined !== pobjQryRegionFldsEN.dsTabId &&
    tzDataType.isString(pobjQryRegionFldsEN.dsTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源表ID(dsTabId)]的值:[${pobjQryRegionFldsEN.dsTabId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.tabFeatureId4Ddl) == false &&
    undefined !== pobjQryRegionFldsEN.tabFeatureId4Ddl &&
    tzDataType.isString(pobjQryRegionFldsEN.tabFeatureId4Ddl) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉框表功能Id(tabFeatureId4Ddl)]的值:[${pobjQryRegionFldsEN.tabFeatureId4Ddl}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldIdCond1) == false &&
    undefined !== pobjQryRegionFldsEN.fldIdCond1 &&
    tzDataType.isString(pobjQryRegionFldsEN.fldIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id_条件1(fldIdCond1)]的值:[${pobjQryRegionFldsEN.fldIdCond1}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond1) == false &&
    undefined !== pobjQryRegionFldsEN.varIdCond1 &&
    tzDataType.isString(pobjQryRegionFldsEN.varIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id_条件1(varIdCond1)]的值:[${pobjQryRegionFldsEN.varIdCond1}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldIdCond2) == false &&
    undefined !== pobjQryRegionFldsEN.fldIdCond2 &&
    tzDataType.isString(pobjQryRegionFldsEN.fldIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id_条件2(fldIdCond2)]的值:[${pobjQryRegionFldsEN.fldIdCond2}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond2) == false &&
    undefined !== pobjQryRegionFldsEN.varIdCond2 &&
    tzDataType.isString(pobjQryRegionFldsEN.varIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源字段_条件1(varIdCond2)]的值:[${pobjQryRegionFldsEN.varIdCond2}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.queryOptionId) == false &&
    undefined !== pobjQryRegionFldsEN.queryOptionId &&
    tzDataType.isString(pobjQryRegionFldsEN.queryOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[查询方式Id(queryOptionId)]的值:[${pobjQryRegionFldsEN.queryOptionId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ddlItemsOptionId) == false &&
    undefined !== pobjQryRegionFldsEN.ddlItemsOptionId &&
    tzDataType.isString(pobjQryRegionFldsEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[${pobjQryRegionFldsEN.ddlItemsOptionId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsSqlStr) == false &&
    undefined !== pobjQryRegionFldsEN.dsSqlStr &&
    tzDataType.isString(pobjQryRegionFldsEN.dsSqlStr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源SQL串(dsSqlStr)]的值:[${pobjQryRegionFldsEN.dsSqlStr}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.itemsString) == false &&
    undefined !== pobjQryRegionFldsEN.itemsString &&
    tzDataType.isString(pobjQryRegionFldsEN.itemsString) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[列表项串(itemsString)]的值:[${pobjQryRegionFldsEN.itemsString}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsCondStr) == false &&
    undefined !== pobjQryRegionFldsEN.dsCondStr &&
    tzDataType.isString(pobjQryRegionFldsEN.dsCondStr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源条件串(dsCondStr)]的值:[${pobjQryRegionFldsEN.dsCondStr}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQryRegionFldsEN.colSpan &&
    undefined !== pobjQryRegionFldsEN.colSpan &&
    tzDataType.isNumber(pobjQryRegionFldsEN.colSpan) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[跨列数(colSpan)]的值:[${pobjQryRegionFldsEN.colSpan}], 非法,应该为数值型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQryRegionFldsEN.width &&
    undefined !== pobjQryRegionFldsEN.width &&
    tzDataType.isNumber(pobjQryRegionFldsEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[宽(width)]的值:[${pobjQryRegionFldsEN.width}], 非法,应该为数值型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQryRegionFldsEN.seqNum &&
    undefined !== pobjQryRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjQryRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段序号(seqNum)]的值:[${pobjQryRegionFldsEN.seqNum}], 非法,应该为数值型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.changeEvent) == false &&
    undefined !== pobjQryRegionFldsEN.changeEvent &&
    tzDataType.isString(pobjQryRegionFldsEN.changeEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Change事件(changeEvent)]的值:[${pobjQryRegionFldsEN.changeEvent}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.clickEvent) == false &&
    undefined !== pobjQryRegionFldsEN.clickEvent &&
    tzDataType.isString(pobjQryRegionFldsEN.clickEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Click事件(clickEvent)]的值:[${pobjQryRegionFldsEN.clickEvent}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQryRegionFldsEN.inUse &&
    undefined !== pobjQryRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjQryRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjQryRegionFldsEN.inUse}], 非法,应该为布尔型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.errMsg) == false &&
    undefined !== pobjQryRegionFldsEN.errMsg &&
    tzDataType.isString(pobjQryRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjQryRegionFldsEN.errMsg}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.prjId) == false &&
    undefined !== pobjQryRegionFldsEN.prjId &&
    tzDataType.isString(pobjQryRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjQryRegionFldsEN.prjId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.updUser) == false &&
    undefined !== pobjQryRegionFldsEN.updUser &&
    tzDataType.isString(pobjQryRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjQryRegionFldsEN.updUser}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.updDate) == false &&
    undefined !== pobjQryRegionFldsEN.updDate &&
    tzDataType.isString(pobjQryRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQryRegionFldsEN.updDate}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.memo) == false &&
    undefined !== pobjQryRegionFldsEN.memo &&
    tzDataType.isString(pobjQryRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjQryRegionFldsEN.memo}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.regionId) == false &&
    pobjQryRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjQryRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000415)字段[区域Id]作为外键字段,长度应该为10(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ctlTypeId) == false &&
    pobjQryRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjQryRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[控件类型号]作为外键字段,长度应该为2(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ddlItemsOptionId) == false &&
    pobjQryRegionFldsEN.ddlItemsOptionId != '[nuull]' &&
    GetStrLen(pobjQryRegionFldsEN.ddlItemsOptionId) != 2
  ) {
    throw '(errid:Watl000415)字段[下拉框列表选项ID]作为外键字段,长度应该为2(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.prjId) == false &&
    pobjQryRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjQryRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QryRegionFlds_CheckProperty4Update(pobjQryRegionFldsEN: clsQryRegionFldsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.regionId) == false &&
    GetStrLen(pobjQryRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.regionId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldId) == false &&
    GetStrLen(pobjQryRegionFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.fldId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.outFldId) == false &&
    GetStrLen(pobjQryRegionFldsEN.outFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[OutFldId(outFldId)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.outFldId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.labelCaption) == false &&
    GetStrLen(pobjQryRegionFldsEN.labelCaption) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[标签标题(labelCaption)]的长度不能超过150(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.labelCaption}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjQryRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.ctlTypeId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varId) == false &&
    GetStrLen(pobjQryRegionFldsEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id(varId)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.varId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsTabId) == false &&
    GetStrLen(pobjQryRegionFldsEN.dsTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源表ID(dsTabId)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.dsTabId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.tabFeatureId4Ddl) == false &&
    GetStrLen(pobjQryRegionFldsEN.tabFeatureId4Ddl) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉框表功能Id(tabFeatureId4Ddl)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.tabFeatureId4Ddl}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldIdCond1) == false &&
    GetStrLen(pobjQryRegionFldsEN.fldIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id_条件1(fldIdCond1)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.fldIdCond1}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond1) == false &&
    GetStrLen(pobjQryRegionFldsEN.varIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id_条件1(varIdCond1)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.varIdCond1}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldIdCond2) == false &&
    GetStrLen(pobjQryRegionFldsEN.fldIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id_条件2(fldIdCond2)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.fldIdCond2}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond2) == false &&
    GetStrLen(pobjQryRegionFldsEN.varIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源字段_条件1(varIdCond2)]的长度不能超过8(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.varIdCond2}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.queryOptionId) == false &&
    GetStrLen(pobjQryRegionFldsEN.queryOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[查询方式Id(queryOptionId)]的长度不能超过2(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.queryOptionId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjQryRegionFldsEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.ddlItemsOptionId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsSqlStr) == false &&
    GetStrLen(pobjQryRegionFldsEN.dsSqlStr) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源SQL串(dsSqlStr)]的长度不能超过200(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.dsSqlStr}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.itemsString) == false &&
    GetStrLen(pobjQryRegionFldsEN.itemsString) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[列表项串(itemsString)]的长度不能超过200(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.itemsString}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsCondStr) == false &&
    GetStrLen(pobjQryRegionFldsEN.dsCondStr) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源条件串(dsCondStr)]的长度不能超过50(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.dsCondStr}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.changeEvent) == false &&
    GetStrLen(pobjQryRegionFldsEN.changeEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Change事件(changeEvent)]的长度不能超过50(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.changeEvent}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.clickEvent) == false &&
    GetStrLen(pobjQryRegionFldsEN.clickEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Click事件(clickEvent)]的长度不能超过50(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.clickEvent}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjQryRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.errMsg}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.prjId) == false &&
    GetStrLen(pobjQryRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.prjId}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.updUser) == false &&
    GetStrLen(pobjQryRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.updUser}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.updDate) == false &&
    GetStrLen(pobjQryRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.updDate}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.memo) == false &&
    GetStrLen(pobjQryRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 查询区域字段(QryRegionFlds))!值:${pobjQryRegionFldsEN.memo}(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjQryRegionFldsEN.mId &&
    undefined !== pobjQryRegionFldsEN.mId &&
    tzDataType.isNumber(pobjQryRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjQryRegionFldsEN.mId}], 非法,应该为数值型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.regionId) == false &&
    undefined !== pobjQryRegionFldsEN.regionId &&
    tzDataType.isString(pobjQryRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域Id(regionId)]的值:[${pobjQryRegionFldsEN.regionId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldId) == false &&
    undefined !== pobjQryRegionFldsEN.fldId &&
    tzDataType.isString(pobjQryRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjQryRegionFldsEN.fldId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.outFldId) == false &&
    undefined !== pobjQryRegionFldsEN.outFldId &&
    tzDataType.isString(pobjQryRegionFldsEN.outFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[OutFldId(outFldId)]的值:[${pobjQryRegionFldsEN.outFldId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.labelCaption) == false &&
    undefined !== pobjQryRegionFldsEN.labelCaption &&
    tzDataType.isString(pobjQryRegionFldsEN.labelCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[标签标题(labelCaption)]的值:[${pobjQryRegionFldsEN.labelCaption}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjQryRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjQryRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjQryRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varId) == false &&
    undefined !== pobjQryRegionFldsEN.varId &&
    tzDataType.isString(pobjQryRegionFldsEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id(varId)]的值:[${pobjQryRegionFldsEN.varId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsTabId) == false &&
    undefined !== pobjQryRegionFldsEN.dsTabId &&
    tzDataType.isString(pobjQryRegionFldsEN.dsTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源表ID(dsTabId)]的值:[${pobjQryRegionFldsEN.dsTabId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.tabFeatureId4Ddl) == false &&
    undefined !== pobjQryRegionFldsEN.tabFeatureId4Ddl &&
    tzDataType.isString(pobjQryRegionFldsEN.tabFeatureId4Ddl) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉框表功能Id(tabFeatureId4Ddl)]的值:[${pobjQryRegionFldsEN.tabFeatureId4Ddl}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldIdCond1) == false &&
    undefined !== pobjQryRegionFldsEN.fldIdCond1 &&
    tzDataType.isString(pobjQryRegionFldsEN.fldIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id_条件1(fldIdCond1)]的值:[${pobjQryRegionFldsEN.fldIdCond1}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond1) == false &&
    undefined !== pobjQryRegionFldsEN.varIdCond1 &&
    tzDataType.isString(pobjQryRegionFldsEN.varIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id_条件1(varIdCond1)]的值:[${pobjQryRegionFldsEN.varIdCond1}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.fldIdCond2) == false &&
    undefined !== pobjQryRegionFldsEN.fldIdCond2 &&
    tzDataType.isString(pobjQryRegionFldsEN.fldIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id_条件2(fldIdCond2)]的值:[${pobjQryRegionFldsEN.fldIdCond2}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.varIdCond2) == false &&
    undefined !== pobjQryRegionFldsEN.varIdCond2 &&
    tzDataType.isString(pobjQryRegionFldsEN.varIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源字段_条件1(varIdCond2)]的值:[${pobjQryRegionFldsEN.varIdCond2}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.queryOptionId) == false &&
    undefined !== pobjQryRegionFldsEN.queryOptionId &&
    tzDataType.isString(pobjQryRegionFldsEN.queryOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[查询方式Id(queryOptionId)]的值:[${pobjQryRegionFldsEN.queryOptionId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ddlItemsOptionId) == false &&
    undefined !== pobjQryRegionFldsEN.ddlItemsOptionId &&
    tzDataType.isString(pobjQryRegionFldsEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[${pobjQryRegionFldsEN.ddlItemsOptionId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsSqlStr) == false &&
    undefined !== pobjQryRegionFldsEN.dsSqlStr &&
    tzDataType.isString(pobjQryRegionFldsEN.dsSqlStr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源SQL串(dsSqlStr)]的值:[${pobjQryRegionFldsEN.dsSqlStr}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.itemsString) == false &&
    undefined !== pobjQryRegionFldsEN.itemsString &&
    tzDataType.isString(pobjQryRegionFldsEN.itemsString) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[列表项串(itemsString)]的值:[${pobjQryRegionFldsEN.itemsString}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.dsCondStr) == false &&
    undefined !== pobjQryRegionFldsEN.dsCondStr &&
    tzDataType.isString(pobjQryRegionFldsEN.dsCondStr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源条件串(dsCondStr)]的值:[${pobjQryRegionFldsEN.dsCondStr}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQryRegionFldsEN.colSpan &&
    undefined !== pobjQryRegionFldsEN.colSpan &&
    tzDataType.isNumber(pobjQryRegionFldsEN.colSpan) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[跨列数(colSpan)]的值:[${pobjQryRegionFldsEN.colSpan}], 非法,应该为数值型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQryRegionFldsEN.width &&
    undefined !== pobjQryRegionFldsEN.width &&
    tzDataType.isNumber(pobjQryRegionFldsEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[宽(width)]的值:[${pobjQryRegionFldsEN.width}], 非法,应该为数值型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQryRegionFldsEN.seqNum &&
    undefined !== pobjQryRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjQryRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段序号(seqNum)]的值:[${pobjQryRegionFldsEN.seqNum}], 非法,应该为数值型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.changeEvent) == false &&
    undefined !== pobjQryRegionFldsEN.changeEvent &&
    tzDataType.isString(pobjQryRegionFldsEN.changeEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Change事件(changeEvent)]的值:[${pobjQryRegionFldsEN.changeEvent}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.clickEvent) == false &&
    undefined !== pobjQryRegionFldsEN.clickEvent &&
    tzDataType.isString(pobjQryRegionFldsEN.clickEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Click事件(clickEvent)]的值:[${pobjQryRegionFldsEN.clickEvent}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQryRegionFldsEN.inUse &&
    undefined !== pobjQryRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjQryRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjQryRegionFldsEN.inUse}], 非法,应该为布尔型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.errMsg) == false &&
    undefined !== pobjQryRegionFldsEN.errMsg &&
    tzDataType.isString(pobjQryRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjQryRegionFldsEN.errMsg}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.prjId) == false &&
    undefined !== pobjQryRegionFldsEN.prjId &&
    tzDataType.isString(pobjQryRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjQryRegionFldsEN.prjId}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.updUser) == false &&
    undefined !== pobjQryRegionFldsEN.updUser &&
    tzDataType.isString(pobjQryRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjQryRegionFldsEN.updUser}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.updDate) == false &&
    undefined !== pobjQryRegionFldsEN.updDate &&
    tzDataType.isString(pobjQryRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQryRegionFldsEN.updDate}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.memo) == false &&
    undefined !== pobjQryRegionFldsEN.memo &&
    tzDataType.isString(pobjQryRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjQryRegionFldsEN.memo}], 非法,应该为字符型(In 查询区域字段(QryRegionFlds))!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjQryRegionFldsEN.mId ||
    (pobjQryRegionFldsEN.mId != null && pobjQryRegionFldsEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 查询区域字段)!(clsQryRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.regionId) == false &&
    pobjQryRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjQryRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000418)字段[区域Id]作为外键字段,长度应该为10(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ctlTypeId) == false &&
    pobjQryRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjQryRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[控件类型号]作为外键字段,长度应该为2(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.ddlItemsOptionId) == false &&
    pobjQryRegionFldsEN.ddlItemsOptionId != '[nuull]' &&
    GetStrLen(pobjQryRegionFldsEN.ddlItemsOptionId) != 2
  ) {
    throw '(errid:Watl000418)字段[下拉框列表选项ID]作为外键字段,长度应该为2(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQryRegionFldsEN.prjId) == false &&
    pobjQryRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjQryRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 查询区域字段)!(clsQryRegionFldsBL:CheckPropertyNew)';
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
export function QryRegionFlds_GetJSONStrByObj(pobjQryRegionFldsEN: clsQryRegionFldsEN): string {
  pobjQryRegionFldsEN.sfUpdFldSetStr = pobjQryRegionFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQryRegionFldsEN);
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
export function QryRegionFlds_GetObjLstByJSONStr(strJSON: string): Array<clsQryRegionFldsEN> {
  let arrQryRegionFldsObjLst = new Array<clsQryRegionFldsEN>();
  if (strJSON === '') {
    return arrQryRegionFldsObjLst;
  }
  try {
    arrQryRegionFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQryRegionFldsObjLst;
  }
  return arrQryRegionFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQryRegionFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QryRegionFlds_GetObjLstByJSONObjLst(
  arrQryRegionFldsObjLstS: Array<clsQryRegionFldsEN>,
): Array<clsQryRegionFldsEN> {
  const arrQryRegionFldsObjLst = new Array<clsQryRegionFldsEN>();
  for (const objInFor of arrQryRegionFldsObjLstS) {
    const obj1 = QryRegionFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQryRegionFldsObjLst.push(obj1);
  }
  return arrQryRegionFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QryRegionFlds_GetObjByJSONStr(strJSON: string): clsQryRegionFldsEN {
  let pobjQryRegionFldsEN = new clsQryRegionFldsEN();
  if (strJSON === '') {
    return pobjQryRegionFldsEN;
  }
  try {
    pobjQryRegionFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQryRegionFldsEN;
  }
  return pobjQryRegionFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QryRegionFlds_GetCombineCondition(
  objQryRegionFldsCond: clsQryRegionFldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQryRegionFldsEN.con_mId,
      objQryRegionFldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_RegionId,
      objQryRegionFldsCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_FldId,
      objQryRegionFldsCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_OutFldId,
    ) == true
  ) {
    const strComparisonOpOutFldId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_OutFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_OutFldId,
      objQryRegionFldsCond.outFldId,
      strComparisonOpOutFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_LabelCaption,
    ) == true
  ) {
    const strComparisonOpLabelCaption: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_LabelCaption];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_LabelCaption,
      objQryRegionFldsCond.labelCaption,
      strComparisonOpLabelCaption,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_CtlTypeId,
      objQryRegionFldsCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_VarId,
    ) == true
  ) {
    const strComparisonOpVarId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_VarId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_VarId,
      objQryRegionFldsCond.varId,
      strComparisonOpVarId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_DsTabId,
    ) == true
  ) {
    const strComparisonOpDsTabId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_DsTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_DsTabId,
      objQryRegionFldsCond.dsTabId,
      strComparisonOpDsTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_TabFeatureId4Ddl,
    ) == true
  ) {
    const strComparisonOpTabFeatureId4Ddl: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_TabFeatureId4Ddl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_TabFeatureId4Ddl,
      objQryRegionFldsCond.tabFeatureId4Ddl,
      strComparisonOpTabFeatureId4Ddl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_FldIdCond1,
    ) == true
  ) {
    const strComparisonOpFldIdCond1: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_FldIdCond1];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_FldIdCond1,
      objQryRegionFldsCond.fldIdCond1,
      strComparisonOpFldIdCond1,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_VarIdCond1,
    ) == true
  ) {
    const strComparisonOpVarIdCond1: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_VarIdCond1];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_VarIdCond1,
      objQryRegionFldsCond.varIdCond1,
      strComparisonOpVarIdCond1,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_FldIdCond2,
    ) == true
  ) {
    const strComparisonOpFldIdCond2: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_FldIdCond2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_FldIdCond2,
      objQryRegionFldsCond.fldIdCond2,
      strComparisonOpFldIdCond2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_VarIdCond2,
    ) == true
  ) {
    const strComparisonOpVarIdCond2: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_VarIdCond2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_VarIdCond2,
      objQryRegionFldsCond.varIdCond2,
      strComparisonOpVarIdCond2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_QueryOptionId,
    ) == true
  ) {
    const strComparisonOpQueryOptionId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_QueryOptionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_QueryOptionId,
      objQryRegionFldsCond.queryOptionId,
      strComparisonOpQueryOptionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_DdlItemsOptionId,
    ) == true
  ) {
    const strComparisonOpDdlItemsOptionId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_DdlItemsOptionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_DdlItemsOptionId,
      objQryRegionFldsCond.ddlItemsOptionId,
      strComparisonOpDdlItemsOptionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_DsSqlStr,
    ) == true
  ) {
    const strComparisonOpDsSqlStr: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_DsSqlStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_DsSqlStr,
      objQryRegionFldsCond.dsSqlStr,
      strComparisonOpDsSqlStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_ItemsString,
    ) == true
  ) {
    const strComparisonOpItemsString: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_ItemsString];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_ItemsString,
      objQryRegionFldsCond.itemsString,
      strComparisonOpItemsString,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_DsCondStr,
    ) == true
  ) {
    const strComparisonOpDsCondStr: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_DsCondStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_DsCondStr,
      objQryRegionFldsCond.dsCondStr,
      strComparisonOpDsCondStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_ColSpan,
    ) == true
  ) {
    const strComparisonOpColSpan: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_ColSpan];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQryRegionFldsEN.con_ColSpan,
      objQryRegionFldsCond.colSpan,
      strComparisonOpColSpan,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQryRegionFldsEN.con_Width,
      objQryRegionFldsCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_SeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_SeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQryRegionFldsEN.con_SeqNum,
      objQryRegionFldsCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_ChangeEvent,
    ) == true
  ) {
    const strComparisonOpChangeEvent: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_ChangeEvent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_ChangeEvent,
      objQryRegionFldsCond.changeEvent,
      strComparisonOpChangeEvent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_ClickEvent,
    ) == true
  ) {
    const strComparisonOpClickEvent: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_ClickEvent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_ClickEvent,
      objQryRegionFldsCond.clickEvent,
      strComparisonOpClickEvent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_InUse,
    ) == true
  ) {
    if (objQryRegionFldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsQryRegionFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQryRegionFldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_ErrMsg,
      objQryRegionFldsCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_PrjId,
      objQryRegionFldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_UpdUser,
      objQryRegionFldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_UpdDate,
      objQryRegionFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQryRegionFldsCond.dicFldComparisonOp,
      clsQryRegionFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objQryRegionFldsCond.dicFldComparisonOp[clsQryRegionFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQryRegionFldsEN.con_Memo,
      objQryRegionFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QryRegionFlds(查询区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strOutFldId: OutFldId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QryRegionFlds_GetUniCondStr(objQryRegionFldsEN: clsQryRegionFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RegionId = '{0}'", objQryRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objQryRegionFldsEN.fldId);
  strWhereCond += Format(" and OutFldId = '{0}'", objQryRegionFldsEN.outFldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QryRegionFlds(查询区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strOutFldId: OutFldId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QryRegionFlds_GetUniCondStr4Update(objQryRegionFldsEN: clsQryRegionFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objQryRegionFldsEN.mId);
  strWhereCond += Format(" and RegionId = '{0}'", objQryRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objQryRegionFldsEN.fldId);
  strWhereCond += Format(" and OutFldId = '{0}'", objQryRegionFldsEN.outFldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQryRegionFldsENS:源对象
 * @param objQryRegionFldsENT:目标对象
 */
export function QryRegionFlds_GetObjFromJsonObj(
  objQryRegionFldsENS: clsQryRegionFldsEN,
): clsQryRegionFldsEN {
  const objQryRegionFldsENT: clsQryRegionFldsEN = new clsQryRegionFldsEN();
  ObjectAssign(objQryRegionFldsENT, objQryRegionFldsENS);
  return objQryRegionFldsENT;
}
