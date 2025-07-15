/**
 * 类名:clsDetailRegionFldsWApi
 * 表名:DetailRegionFlds(00050544)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:59:04
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
 * 详细区域字段(DetailRegionFlds)
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
import {
  detailRegionFldsCache,
  isFuncMapCache,
} from '@/views/RegionManage/DetailRegionFldsVueShare';
import { clsDetailRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsENEx';
import { clsDetailRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { InOutType_func } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const detailRegionFlds_Controller = 'DetailRegionFldsApi';
export const detailRegionFlds_ConstructorName = 'detailRegionFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function DetailRegionFlds_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsDetailRegionFldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsDetailRegionFldsWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
      const objDetailRegionFlds = DetailRegionFlds_GetObjFromJsonObj(returnObj);
      return objDetailRegionFlds;
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsDetailRegionFldsWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDetailRegionFldsEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDetailRegionFldsCache: clsDetailRegionFldsEN = JSON.parse(strTempObj);
    return objDetailRegionFldsCache;
  }
  try {
    const objDetailRegionFlds = await DetailRegionFlds_GetObjBymIdAsync(lngmId);
    if (objDetailRegionFlds != null) {
      localStorage.setItem(strKey, JSON.stringify(objDetailRegionFlds));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDetailRegionFlds;
    }
    return objDetailRegionFlds;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjBymIdCache(
  lngmId: number,
  strRegionId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsDetailRegionFldsWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
  try {
    const arrDetailRegionFldsSel = arrDetailRegionFldsObjLstCache.filter((x) => x.mId == lngmId);
    let objDetailRegionFlds: clsDetailRegionFldsEN;
    if (arrDetailRegionFldsSel.length > 0) {
      objDetailRegionFlds = arrDetailRegionFldsSel[0];
      return objDetailRegionFlds;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDetailRegionFldsConst = await DetailRegionFlds_GetObjBymIdAsync(lngmId);
        if (objDetailRegionFldsConst != null) {
          DetailRegionFlds_ReFreshThisCache(strRegionId);
          return objDetailRegionFldsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objDetailRegionFlds:所给的对象
 * @returns 对象
 */
export async function DetailRegionFlds_UpdateObjInLstCache(
  objDetailRegionFlds: clsDetailRegionFldsEN,
  strRegionId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
    const obj = arrDetailRegionFldsObjLstCache.find(
      (x) =>
        x.regionId == objDetailRegionFlds.regionId &&
        x.fldId == objDetailRegionFlds.fldId &&
        x.outFldId == objDetailRegionFlds.outFldId,
    );
    if (obj != null) {
      objDetailRegionFlds.mId = obj.mId;
      ObjectAssign(obj, objDetailRegionFlds);
    } else {
      arrDetailRegionFldsObjLstCache.push(objDetailRegionFlds);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
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
export function DetailRegionFlds_SortFunDefa(
  a: clsDetailRegionFldsEN,
  b: clsDetailRegionFldsEN,
): number {
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
export function DetailRegionFlds_SortFunDefa2Fld(
  a: clsDetailRegionFldsEN,
  b: clsDetailRegionFldsEN,
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
export function DetailRegionFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDetailRegionFldsEN.con_mId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.mId - b.mId;
        };
      case clsDetailRegionFldsEN.con_RegionId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsDetailRegionFldsEN.con_FldId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.fldId == null) return -1;
          if (b.fldId == null) return 1;
          return a.fldId.localeCompare(b.fldId);
        };
      case clsDetailRegionFldsEN.con_OutFldId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.outFldId == null) return -1;
          if (b.outFldId == null) return 1;
          return a.outFldId.localeCompare(b.outFldId);
        };
      case clsDetailRegionFldsEN.con_LabelCaption:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.labelCaption == null) return -1;
          if (b.labelCaption == null) return 1;
          return a.labelCaption.localeCompare(b.labelCaption);
        };
      case clsDetailRegionFldsEN.con_CtlTypeId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsDetailRegionFldsEN.con_ColSpan:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.colSpan - b.colSpan;
        };
      case clsDetailRegionFldsEN.con_ColIndex:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.colIndex - b.colIndex;
        };
      case clsDetailRegionFldsEN.con_Width:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.width - b.width;
        };
      case clsDetailRegionFldsEN.con_IsMultiRow:
        return (a: clsDetailRegionFldsEN) => {
          if (a.isMultiRow == true) return 1;
          else return -1;
        };
      case clsDetailRegionFldsEN.con_SeqNum:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsDetailRegionFldsEN.con_InOutTypeId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.inOutTypeId == null) return -1;
          if (b.inOutTypeId == null) return 1;
          return a.inOutTypeId.localeCompare(b.inOutTypeId);
        };
      case clsDetailRegionFldsEN.con_InUse:
        return (a: clsDetailRegionFldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsDetailRegionFldsEN.con_ChangeEvent:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.changeEvent == null) return -1;
          if (b.changeEvent == null) return 1;
          return a.changeEvent.localeCompare(b.changeEvent);
        };
      case clsDetailRegionFldsEN.con_ClickEvent:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.clickEvent == null) return -1;
          if (b.clickEvent == null) return 1;
          return a.clickEvent.localeCompare(b.clickEvent);
        };
      case clsDetailRegionFldsEN.con_VarId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.varId == null) return -1;
          if (b.varId == null) return 1;
          return a.varId.localeCompare(b.varId);
        };
      case clsDetailRegionFldsEN.con_ErrMsg:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsDetailRegionFldsEN.con_PrjId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsDetailRegionFldsEN.con_UpdUser:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDetailRegionFldsEN.con_UpdDate:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDetailRegionFldsEN.con_Memo:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DetailRegionFlds]中不存在!(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDetailRegionFldsEN.con_mId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.mId - a.mId;
        };
      case clsDetailRegionFldsEN.con_RegionId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsDetailRegionFldsEN.con_FldId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.fldId == null) return -1;
          if (a.fldId == null) return 1;
          return b.fldId.localeCompare(a.fldId);
        };
      case clsDetailRegionFldsEN.con_OutFldId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.outFldId == null) return -1;
          if (a.outFldId == null) return 1;
          return b.outFldId.localeCompare(a.outFldId);
        };
      case clsDetailRegionFldsEN.con_LabelCaption:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.labelCaption == null) return -1;
          if (a.labelCaption == null) return 1;
          return b.labelCaption.localeCompare(a.labelCaption);
        };
      case clsDetailRegionFldsEN.con_CtlTypeId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsDetailRegionFldsEN.con_ColSpan:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.colSpan - a.colSpan;
        };
      case clsDetailRegionFldsEN.con_ColIndex:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.colIndex - a.colIndex;
        };
      case clsDetailRegionFldsEN.con_Width:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.width - a.width;
        };
      case clsDetailRegionFldsEN.con_IsMultiRow:
        return (b: clsDetailRegionFldsEN) => {
          if (b.isMultiRow == true) return 1;
          else return -1;
        };
      case clsDetailRegionFldsEN.con_SeqNum:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsDetailRegionFldsEN.con_InOutTypeId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.inOutTypeId == null) return -1;
          if (a.inOutTypeId == null) return 1;
          return b.inOutTypeId.localeCompare(a.inOutTypeId);
        };
      case clsDetailRegionFldsEN.con_InUse:
        return (b: clsDetailRegionFldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsDetailRegionFldsEN.con_ChangeEvent:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.changeEvent == null) return -1;
          if (a.changeEvent == null) return 1;
          return b.changeEvent.localeCompare(a.changeEvent);
        };
      case clsDetailRegionFldsEN.con_ClickEvent:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.clickEvent == null) return -1;
          if (a.clickEvent == null) return 1;
          return b.clickEvent.localeCompare(a.clickEvent);
        };
      case clsDetailRegionFldsEN.con_VarId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.varId == null) return -1;
          if (a.varId == null) return 1;
          return b.varId.localeCompare(a.varId);
        };
      case clsDetailRegionFldsEN.con_ErrMsg:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsDetailRegionFldsEN.con_PrjId:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsDetailRegionFldsEN.con_UpdUser:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDetailRegionFldsEN.con_UpdDate:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDetailRegionFldsEN.con_Memo:
        return (a: clsDetailRegionFldsEN, b: clsDetailRegionFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DetailRegionFlds]中不存在!(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
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
export async function DetailRegionFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDetailRegionFldsEN.con_mId:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.mId === value;
      };
    case clsDetailRegionFldsEN.con_RegionId:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.regionId === value;
      };
    case clsDetailRegionFldsEN.con_FldId:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.fldId === value;
      };
    case clsDetailRegionFldsEN.con_OutFldId:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.outFldId === value;
      };
    case clsDetailRegionFldsEN.con_LabelCaption:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.labelCaption === value;
      };
    case clsDetailRegionFldsEN.con_CtlTypeId:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.ctlTypeId === value;
      };
    case clsDetailRegionFldsEN.con_ColSpan:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.colSpan === value;
      };
    case clsDetailRegionFldsEN.con_ColIndex:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.colIndex === value;
      };
    case clsDetailRegionFldsEN.con_Width:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.width === value;
      };
    case clsDetailRegionFldsEN.con_IsMultiRow:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.isMultiRow === value;
      };
    case clsDetailRegionFldsEN.con_SeqNum:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.seqNum === value;
      };
    case clsDetailRegionFldsEN.con_InOutTypeId:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.inOutTypeId === value;
      };
    case clsDetailRegionFldsEN.con_InUse:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.inUse === value;
      };
    case clsDetailRegionFldsEN.con_ChangeEvent:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.changeEvent === value;
      };
    case clsDetailRegionFldsEN.con_ClickEvent:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.clickEvent === value;
      };
    case clsDetailRegionFldsEN.con_VarId:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.varId === value;
      };
    case clsDetailRegionFldsEN.con_ErrMsg:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.errMsg === value;
      };
    case clsDetailRegionFldsEN.con_PrjId:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.prjId === value;
      };
    case clsDetailRegionFldsEN.con_UpdUser:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.updUser === value;
      };
    case clsDetailRegionFldsEN.con_UpdDate:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.updDate === value;
      };
    case clsDetailRegionFldsEN.con_Memo:
      return (obj: clsDetailRegionFldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DetailRegionFlds]中不存在!(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
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
export async function DetailRegionFlds_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strRegionIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsDetailRegionFldsWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsDetailRegionFldsWApi.func)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsDetailRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDetailRegionFldsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDetailRegionFldsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objDetailRegionFlds = await DetailRegionFlds_GetObjBymIdCache(lngmId, strRegionIdClassfy);
  if (objDetailRegionFlds == null) return '';
  if (objDetailRegionFlds.GetFldValue(strOutFldName) == null) return '';
  return objDetailRegionFlds.GetFldValue(strOutFldName).toString();
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
export async function DetailRegionFlds_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strRegionIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsDetailRegionFldsWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsDetailRegionFldsWApi.funcKey)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsDetailRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrDetailRegionFlds = await DetailRegionFlds_GetObjLstCache(strRegionIdClassfy);
  if (arrDetailRegionFlds == null) return [];
  let arrDetailRegionFldsSel = arrDetailRegionFlds;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDetailRegionFldsSel.length == 0) return [];
  return arrDetailRegionFldsSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DetailRegionFlds_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDetailRegionFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
      const objDetailRegionFlds = DetailRegionFlds_GetObjFromJsonObj(returnObj);
      return objDetailRegionFlds;
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjLstClientCache(strRegionId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDetailRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDetailRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("RegionId='{0}'", strRegionId);
  }
  const strKey = Format('{0}_{1}', clsDetailRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsDetailRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDetailRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDetailRegionFldsExObjLstCache: Array<clsDetailRegionFldsEN> = CacheHelper.Get(strKey);
    const arrDetailRegionFldsObjLstT = DetailRegionFlds_GetObjLstByJSONObjLst(
      arrDetailRegionFldsExObjLstCache,
    );
    return arrDetailRegionFldsObjLstT;
  }
  try {
    const arrDetailRegionFldsExObjLst = await DetailRegionFlds_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDetailRegionFldsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDetailRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrDetailRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjLstlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDetailRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDetailRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsDetailRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsDetailRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsDetailRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDetailRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDetailRegionFldsExObjLstCache: Array<clsDetailRegionFldsEN> =
      JSON.parse(strTempObjLst);
    const arrDetailRegionFldsObjLstT = DetailRegionFlds_GetObjLstByJSONObjLst(
      arrDetailRegionFldsExObjLstCache,
    );
    return arrDetailRegionFldsObjLstT;
  }
  try {
    const arrDetailRegionFldsExObjLst = await DetailRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsDetailRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrDetailRegionFldsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDetailRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrDetailRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjLstlocalStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsDetailRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDetailRegionFldsObjLstCache: Array<clsDetailRegionFldsEN> = JSON.parse(strTempObjLst);
    return arrDetailRegionFldsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DetailRegionFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDetailRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
          detailRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DetailRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjLstsessionStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDetailRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDetailRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsDetailRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsDetailRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsDetailRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDetailRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDetailRegionFldsExObjLstCache: Array<clsDetailRegionFldsEN> =
      JSON.parse(strTempObjLst);
    const arrDetailRegionFldsObjLstT = DetailRegionFlds_GetObjLstByJSONObjLst(
      arrDetailRegionFldsExObjLstCache,
    );
    return arrDetailRegionFldsObjLstT;
  }
  try {
    const arrDetailRegionFldsExObjLst = await DetailRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsDetailRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrDetailRegionFldsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDetailRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrDetailRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjLstsessionStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsDetailRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDetailRegionFldsObjLstCache: Array<clsDetailRegionFldsEN> = JSON.parse(strTempObjLst);
    return arrDetailRegionFldsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DetailRegionFlds_GetObjLstCache(
  strRegionId: string,
): Promise<Array<clsDetailRegionFldsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空！(In clsDetailRegionFldsWApi.DetailRegionFlds_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确！(clsDetailRegionFldsWApi.DetailRegionFlds_GetObjLstCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrDetailRegionFldsObjLstCache;
  switch (clsDetailRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstsessionStorage(strRegionId);
      break;
    case '03': //localStorage
      arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstlocalStorage(strRegionId);
      break;
    case '02': //ClientCache
      arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstClientCache(strRegionId);
      break;
    default:
      arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstClientCache(strRegionId);
      break;
  }
  return arrDetailRegionFldsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DetailRegionFlds_GetObjLstPureCache(strRegionId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDetailRegionFldsObjLstCache;
  switch (clsDetailRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstsessionStoragePureCache(
        strRegionId,
      );
      break;
    case '03': //localStorage
      arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstlocalStoragePureCache(
        strRegionId,
      );
      break;
    case '02': //ClientCache
      arrDetailRegionFldsObjLstCache = null;
      break;
    default:
      arrDetailRegionFldsObjLstCache = null;
      break;
  }
  return arrDetailRegionFldsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DetailRegionFlds_GetSubObjLstCache(
  objDetailRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
  let arrDetailRegionFldsSel = arrDetailRegionFldsObjLstCache;
  if (objDetailRegionFldsCond.GetConditions().length == 0) return arrDetailRegionFldsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objDetailRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDetailRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDetailRegionFldsCond),
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDetailRegionFldsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function DetailRegionFlds_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsDetailRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
          detailRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DetailRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
    const arrDetailRegionFldsSel = arrDetailRegionFldsObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrDetailRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDetailRegionFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
          detailRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DetailRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDetailRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
          detailRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DetailRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDetailRegionFldsEN>();
  const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
  if (arrDetailRegionFldsObjLstCache.length == 0) return arrDetailRegionFldsObjLstCache;
  let arrDetailRegionFldsSel = arrDetailRegionFldsObjLstCache;
  const objDetailRegionFldsCond = objPagerPara.conditionCollection;
  if (objDetailRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsDetailRegionFldsEN>();
  }
  //console.log("clsDetailRegionFldsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objDetailRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDetailRegionFldsSel.length == 0) return arrDetailRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDetailRegionFldsSel = arrDetailRegionFldsSel.sort(
        DetailRegionFlds_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDetailRegionFldsSel = arrDetailRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrDetailRegionFldsSel = arrDetailRegionFldsSel.slice(intStart, intEnd);
    return arrDetailRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDetailRegionFldsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DetailRegionFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDetailRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDetailRegionFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
          detailRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DetailRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_DelDetailRegionFldssAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDetailRegionFldssAsync';
  const strAction = 'DelDetailRegionFldss';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
): Promise<Array<clsDetailRegionFldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrDetailRegionFldsObjLst = await DetailRegionFlds_GetObjLstCache(strRegionId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsDetailRegionFldsENEx>();
  const arrDetailRegionFldsExObjLst = arrDetailRegionFldsObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.regionId}`;
    if (detailRegionFldsCache[cacheKey]) {
      const oldObj = detailRegionFldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = DetailRegionFlds_CopyToEx(obj);
      arrNewObj.push(newObj);
      detailRegionFldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await DetailRegionFlds_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDetailRegionFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrDetailRegionFldsExObjLst) {
      await DetailRegionFlds_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.regionId}`;
      detailRegionFldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrDetailRegionFldsExObjLst.length == 0) return arrDetailRegionFldsExObjLst;
  let arrDetailRegionFldsSel: Array<clsDetailRegionFldsENEx> = arrDetailRegionFldsExObjLst;
  const objDetailRegionFldsCond = objPagerPara.conditionCollection;
  if (objDetailRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrDetailRegionFldsExObjLst;
  }
  try {
    for (const objCondition of objDetailRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDetailRegionFldsSel.length == 0) return arrDetailRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrDetailRegionFldsSel = arrDetailRegionFldsSel.sort(
        DetailRegionFlds_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDetailRegionFldsSel = arrDetailRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrDetailRegionFldsSel = arrDetailRegionFldsSel.slice(intStart, intEnd);
    return arrDetailRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDetailRegionFldsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objDetailRegionFldsENS:源对象
 * @returns 目标对象=>clsDetailRegionFldsEN:objDetailRegionFldsENT
 **/
export function DetailRegionFlds_CopyToEx(
  objDetailRegionFldsENS: clsDetailRegionFldsEN,
): clsDetailRegionFldsENEx {
  const strThisFuncName = DetailRegionFlds_CopyToEx.name;
  const objDetailRegionFldsENT = new clsDetailRegionFldsENEx();
  try {
    ObjectAssign(objDetailRegionFldsENT, objDetailRegionFldsENS);
    return objDetailRegionFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDetailRegionFldsENT;
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
export function DetailRegionFlds_FuncMapByFldName(
  strFldName: string,
  objDetailRegionFldsEx: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFlds_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsDetailRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDetailRegionFldsENEx.con_FldName:
      return DetailRegionFlds_FuncMapFldName(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_CtlTypeName:
      return DetailRegionFlds_FuncMapCtlTypeName(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_InOutTypeName:
      return DetailRegionFlds_FuncMapInOutTypeName(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_CtlCnName:
      return DetailRegionFlds_FuncMapCtlCnName(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_CtlTypeAbbr:
      return DetailRegionFlds_FuncMapCtlTypeAbbr(objDetailRegionFldsEx);
    case clsDetailRegionFldsENEx.con_OutFldName:
      return DetailRegionFlds_FuncMapOutFldName(objDetailRegionFldsEx);
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
export function DetailRegionFlds_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDetailRegionFldsENEx.con_TabName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsDetailRegionFldsENEx.con_FldName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsDetailRegionFldsENEx.con_CtlTypeName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsDetailRegionFldsENEx.con_InOutTypeName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.inOutTypeName.localeCompare(b.inOutTypeName);
        };
      case clsDetailRegionFldsENEx.con_CtlCnName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.ctlCnName.localeCompare(b.ctlCnName);
        };
      case clsDetailRegionFldsENEx.con_ViewIds:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.viewIds.localeCompare(b.viewIds);
        };
      case clsDetailRegionFldsENEx.con_CtlTypeAbbr:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.ctlTypeAbbr.localeCompare(b.ctlTypeAbbr);
        };
      case clsDetailRegionFldsENEx.con_FldNameV2:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.fldNameV2.localeCompare(b.fldNameV2);
        };
      case clsDetailRegionFldsENEx.con_TrClass:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsDetailRegionFldsENEx.con_TdClass:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return -1;
          if (b.tdClass === null) return 1;
          return a.tdClass.localeCompare(b.tdClass);
        };
      case clsDetailRegionFldsENEx.con_TabId:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsDetailRegionFldsENEx.con_OutFldName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return -1;
          if (b.outFldName === null) return 1;
          return a.outFldName.localeCompare(b.outFldName);
        };
      case clsDetailRegionFldsENEx.con_DnPathIdEx:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.dnPathIdEx.localeCompare(b.dnPathIdEx);
        };
      case clsDetailRegionFldsENEx.con_DnPathId:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsDetailRegionFldsENEx.con_IsUseFunc:
        return (a: clsDetailRegionFldsENEx) => {
          if (a.isUseFunc == true) return 1;
          else return -1;
        };
      case clsDetailRegionFldsENEx.con_DataPropertyName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          if (a.dataPropertyName === null && b.dataPropertyName === null) return 0;
          if (a.dataPropertyName === null) return -1;
          if (b.dataPropertyName === null) return 1;
          return a.dataPropertyName.localeCompare(b.dataPropertyName);
        };
      default:
        return DetailRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDetailRegionFldsENEx.con_TabName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsDetailRegionFldsENEx.con_FldName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsDetailRegionFldsENEx.con_CtlTypeName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsDetailRegionFldsENEx.con_InOutTypeName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.inOutTypeName.localeCompare(a.inOutTypeName);
        };
      case clsDetailRegionFldsENEx.con_CtlCnName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.ctlCnName.localeCompare(a.ctlCnName);
        };
      case clsDetailRegionFldsENEx.con_ViewIds:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.viewIds.localeCompare(a.viewIds);
        };
      case clsDetailRegionFldsENEx.con_CtlTypeAbbr:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.ctlTypeAbbr.localeCompare(a.ctlTypeAbbr);
        };
      case clsDetailRegionFldsENEx.con_FldNameV2:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.fldNameV2.localeCompare(a.fldNameV2);
        };
      case clsDetailRegionFldsENEx.con_TrClass:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsDetailRegionFldsENEx.con_TdClass:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return 1;
          if (b.tdClass === null) return -1;
          return b.tdClass.localeCompare(a.tdClass);
        };
      case clsDetailRegionFldsENEx.con_TabId:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsDetailRegionFldsENEx.con_OutFldName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return 1;
          if (b.outFldName === null) return -1;
          return b.outFldName.localeCompare(a.outFldName);
        };
      case clsDetailRegionFldsENEx.con_DnPathIdEx:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.dnPathIdEx.localeCompare(a.dnPathIdEx);
        };
      case clsDetailRegionFldsENEx.con_DnPathId:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsDetailRegionFldsENEx.con_IsUseFunc:
        return (b: clsDetailRegionFldsENEx) => {
          if (b.isUseFunc == true) return 1;
          else return -1;
        };
      case clsDetailRegionFldsENEx.con_DataPropertyName:
        return (a: clsDetailRegionFldsENEx, b: clsDetailRegionFldsENEx) => {
          if (a.dataPropertyName === null && b.dataPropertyName === null) return 0;
          if (a.dataPropertyName === null) return 1;
          if (b.dataPropertyName === null) return -1;
          return b.dataPropertyName.localeCompare(a.dataPropertyName);
        };
      default:
        return DetailRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFlds_FuncMapFldName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFlds_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.fldName) == true) {
      const vFieldTabSimFldId = objDetailRegionFlds.fldId;
      if (IsNullOrEmpty(objDetailRegionFlds.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objDetailRegionFlds.prjId,
      );
      objDetailRegionFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFlds_FuncMapCtlTypeName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFlds_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.ctlTypeName) == true) {
      const CtlTypeCtlTypeId = objDetailRegionFlds.ctlTypeId;
      const CtlTypeCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeCtlTypeId,
      );
      objDetailRegionFlds.ctlTypeName = CtlTypeCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFlds_FuncMapInOutTypeName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFlds_FuncMapInOutTypeName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.inOutTypeName) == true) {
      const InOutTypeInOutTypeId = objDetailRegionFlds.inOutTypeId;
      const InOutTypeInOutTypeName = await InOutType_func(
        clsInOutTypeEN.con_InOutTypeId,
        clsInOutTypeEN.con_InOutTypeName,
        InOutTypeInOutTypeId,
      );
      objDetailRegionFlds.inOutTypeName = InOutTypeInOutTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001302)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFlds_FuncMapCtlCnName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFlds_FuncMapCtlCnName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.ctlCnName) == true) {
      const CtlTypeCtlTypeId = objDetailRegionFlds.ctlTypeId;
      const CtlTypeCtlCnName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlCnName,
        CtlTypeCtlTypeId,
      );
      objDetailRegionFlds.ctlCnName = CtlTypeCtlCnName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001303)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFlds_FuncMapCtlTypeAbbr(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFlds_FuncMapCtlTypeAbbr.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.ctlTypeAbbr) == true) {
      const CtlTypeCtlTypeId = objDetailRegionFlds.ctlTypeId;
      const CtlTypeCtlTypeAbbr = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeAbbr,
        CtlTypeCtlTypeId,
      );
      objDetailRegionFlds.ctlTypeAbbr = CtlTypeCtlTypeAbbr;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001304)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDetailRegionFldsS:源对象
 **/
export async function DetailRegionFlds_FuncMapOutFldName(
  objDetailRegionFlds: clsDetailRegionFldsENEx,
) {
  const strThisFuncName = DetailRegionFlds_FuncMapOutFldName.name;
  try {
    if (IsNullOrEmpty(objDetailRegionFlds.outFldName) == true) {
      const vFieldTabSimFldId = objDetailRegionFlds.outFldId;
      if (IsNullOrEmpty(objDetailRegionFlds.prjId) == true) {
        const strMsg = `函数映射[OutFldName]数据出错,prjId不能为空!(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objDetailRegionFlds.prjId,
      );
      objDetailRegionFlds.outFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001305)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_DelDetailRegionFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDetailRegionFldssByCondAsync';
  const strAction = 'DelDetailRegionFldssByCond';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DetailRegionFlds_AddNewRecordAsync(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDetailRegionFldsEN);
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDetailRegionFldsEN, config);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DetailRegionFlds_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DetailRegionFlds_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDetailRegionFldsEN);
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DetailRegionFlds_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDetailRegionFldsEN);
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_AddNewObjSave(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DetailRegionFlds_CheckPropertyNew(objDetailRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DetailRegionFlds_CheckUniCond4Add(objDetailRegionFldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await DetailRegionFlds_AddNewRecordAsync(objDetailRegionFldsEN);
    if (returnBool == true) {
      DetailRegionFlds_ReFreshCache(objDetailRegionFldsEN.regionId);
    } else {
      const strInfo = `添加[详细区域字段(DetailRegionFlds)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objDetailRegionFldsEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function DetailRegionFlds_CheckUniCond4Add(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = DetailRegionFlds_GetUniCondStr(objDetailRegionFldsEN);
  const bolIsExistCondition = await DetailRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function DetailRegionFlds_CheckUniCond4Update(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = DetailRegionFlds_GetUniCondStr4Update(objDetailRegionFldsEN);
  const bolIsExistCondition = await DetailRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function DetailRegionFlds_UpdateObjSave(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDetailRegionFldsEN.sfUpdFldSetStr = objDetailRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objDetailRegionFldsEN.mId == 0 || objDetailRegionFldsEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DetailRegionFlds_CheckProperty4Update(objDetailRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DetailRegionFlds_CheckUniCond4Update(objDetailRegionFldsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await DetailRegionFlds_UpdateRecordAsync(objDetailRegionFldsEN);
    if (returnBool == true) {
      DetailRegionFlds_ReFreshCache(objDetailRegionFldsEN.regionId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${detailRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objDetailRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DetailRegionFlds_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDetailRegionFldsEN);
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DetailRegionFlds_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objDetailRegionFldsEN);
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DetailRegionFlds_AddNewRecordWithReturnKeyAsync(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDetailRegionFldsEN, config);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DetailRegionFlds_UpdateRecordAsync(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDetailRegionFldsEN.sfUpdFldSetStr === undefined ||
    objDetailRegionFldsEN.sfUpdFldSetStr === null ||
    objDetailRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDetailRegionFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDetailRegionFldsEN, config);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DetailRegionFlds_EditRecordExAsync(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDetailRegionFldsEN.sfUpdFldSetStr === undefined ||
    objDetailRegionFldsEN.sfUpdFldSetStr === null ||
    objDetailRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDetailRegionFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDetailRegionFldsEN, config);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DetailRegionFlds_UpdateWithConditionAsync(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDetailRegionFldsEN.sfUpdFldSetStr === undefined ||
    objDetailRegionFldsEN.sfUpdFldSetStr === null ||
    objDetailRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDetailRegionFldsEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);
  objDetailRegionFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDetailRegionFldsEN, config);
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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_IsExistRecordCache(
  objDetailRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
  if (arrDetailRegionFldsObjLstCache == null) return false;
  let arrDetailRegionFldsSel = arrDetailRegionFldsObjLstCache;
  if (objDetailRegionFldsCond.GetConditions().length == 0)
    return arrDetailRegionFldsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objDetailRegionFldsCond.GetConditions()) {
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
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDetailRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDetailRegionFldsCond),
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_IsExistCache(lngmId: number, strRegionId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
  if (arrDetailRegionFldsObjLstCache == null) return false;
  try {
    const arrDetailRegionFldsSel = arrDetailRegionFldsObjLstCache.filter((x) => x.mId == lngmId);
    if (arrDetailRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
 * @param objDetailRegionFldsCond:条件对象
 * @returns 对象列表记录数
 */
export async function DetailRegionFlds_GetRecCountByCondCache(
  objDetailRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
  if (arrDetailRegionFldsObjLstCache == null) return 0;
  let arrDetailRegionFldsSel = arrDetailRegionFldsObjLstCache;
  if (objDetailRegionFldsCond.GetConditions().length == 0) return arrDetailRegionFldsSel.length;
  try {
    for (const objCondition of objDetailRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDetailRegionFldsSel = arrDetailRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDetailRegionFldsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDetailRegionFldsCond),
      detailRegionFlds_ConstructorName,
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
export async function DetailRegionFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(detailRegionFlds_Controller, strAction);

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
        detailRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        detailRegionFlds_ConstructorName,
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
export function DetailRegionFlds_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DetailRegionFlds_ReFreshCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsDetailRegionFldsWApi.clsDetailRegionFldsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsDetailRegionFldsWApi.clsDetailRegionFldsWApi.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsDetailRegionFldsEN._CurrTabName, strRegionId);
  switch (clsDetailRegionFldsEN.CacheModeId) {
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
  clsDetailRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function DetailRegionFlds_ReFreshThisCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsDetailRegionFldsWApi.DetailRegionFlds_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsDetailRegionFldsWApi.DetailRegionFlds_ReFreshThisCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsDetailRegionFldsEN._CurrTabName, strRegionId);
    switch (clsDetailRegionFldsEN.CacheModeId) {
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
    clsDetailRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function DetailRegionFlds_GetLastRefreshTime(): string {
  if (clsDetailRegionFldsEN._RefreshTimeLst.length == 0) return '';
  return clsDetailRegionFldsEN._RefreshTimeLst[clsDetailRegionFldsEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DetailRegionFlds_CheckPropertyNew(pobjDetailRegionFldsEN: clsDetailRegionFldsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDetailRegionFldsEN.regionId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域Id]不能为空(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.ctlTypeId) === true ||
    pobjDetailRegionFldsEN.ctlTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[控件类型号]不能为空(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.prjId) === true ||
    pobjDetailRegionFldsEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDetailRegionFldsEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.regionId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.regionId}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.fldId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.fldId}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.outFldId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.outFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[OutFldId(outFldId)]的长度不能超过8(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.outFldId}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.labelCaption) == false &&
    GetStrLen(pobjDetailRegionFldsEN.labelCaption) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[标签标题(labelCaption)]的长度不能超过150(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.labelCaption}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.ctlTypeId}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.inOutTypeId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.inOutTypeId}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.changeEvent) == false &&
    GetStrLen(pobjDetailRegionFldsEN.changeEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Change事件(changeEvent)]的长度不能超过50(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.changeEvent}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.clickEvent) == false &&
    GetStrLen(pobjDetailRegionFldsEN.clickEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Click事件(clickEvent)]的长度不能超过50(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.clickEvent}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.varId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id(varId)]的长度不能超过8(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.varId}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjDetailRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.errMsg}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.prjId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.prjId}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.updUser) == false &&
    GetStrLen(pobjDetailRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.updUser}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.updDate) == false &&
    GetStrLen(pobjDetailRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.updDate}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.memo) == false &&
    GetStrLen(pobjDetailRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.memo}(clsDetailRegionFldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDetailRegionFldsEN.mId &&
    undefined !== pobjDetailRegionFldsEN.mId &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjDetailRegionFldsEN.mId}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.regionId) == false &&
    undefined !== pobjDetailRegionFldsEN.regionId &&
    tzDataType.isString(pobjDetailRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域Id(regionId)]的值:[${pobjDetailRegionFldsEN.regionId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.fldId) == false &&
    undefined !== pobjDetailRegionFldsEN.fldId &&
    tzDataType.isString(pobjDetailRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjDetailRegionFldsEN.fldId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.outFldId) == false &&
    undefined !== pobjDetailRegionFldsEN.outFldId &&
    tzDataType.isString(pobjDetailRegionFldsEN.outFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[OutFldId(outFldId)]的值:[${pobjDetailRegionFldsEN.outFldId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.labelCaption) == false &&
    undefined !== pobjDetailRegionFldsEN.labelCaption &&
    tzDataType.isString(pobjDetailRegionFldsEN.labelCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[标签标题(labelCaption)]的值:[${pobjDetailRegionFldsEN.labelCaption}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjDetailRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjDetailRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjDetailRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.colSpan &&
    undefined !== pobjDetailRegionFldsEN.colSpan &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.colSpan) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[跨列数(colSpan)]的值:[${pobjDetailRegionFldsEN.colSpan}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.colIndex &&
    undefined !== pobjDetailRegionFldsEN.colIndex &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.colIndex) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[列序号(colIndex)]的值:[${pobjDetailRegionFldsEN.colIndex}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.width &&
    undefined !== pobjDetailRegionFldsEN.width &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[宽(width)]的值:[${pobjDetailRegionFldsEN.width}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.isMultiRow &&
    undefined !== pobjDetailRegionFldsEN.isMultiRow &&
    tzDataType.isBoolean(pobjDetailRegionFldsEN.isMultiRow) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否多行(isMultiRow)]的值:[${pobjDetailRegionFldsEN.isMultiRow}], 非法,应该为布尔型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.seqNum &&
    undefined !== pobjDetailRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段序号(seqNum)]的值:[${pobjDetailRegionFldsEN.seqNum}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.inOutTypeId) == false &&
    undefined !== pobjDetailRegionFldsEN.inOutTypeId &&
    tzDataType.isString(pobjDetailRegionFldsEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjDetailRegionFldsEN.inOutTypeId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.inUse &&
    undefined !== pobjDetailRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjDetailRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjDetailRegionFldsEN.inUse}], 非法,应该为布尔型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.changeEvent) == false &&
    undefined !== pobjDetailRegionFldsEN.changeEvent &&
    tzDataType.isString(pobjDetailRegionFldsEN.changeEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Change事件(changeEvent)]的值:[${pobjDetailRegionFldsEN.changeEvent}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.clickEvent) == false &&
    undefined !== pobjDetailRegionFldsEN.clickEvent &&
    tzDataType.isString(pobjDetailRegionFldsEN.clickEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Click事件(clickEvent)]的值:[${pobjDetailRegionFldsEN.clickEvent}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.varId) == false &&
    undefined !== pobjDetailRegionFldsEN.varId &&
    tzDataType.isString(pobjDetailRegionFldsEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id(varId)]的值:[${pobjDetailRegionFldsEN.varId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.errMsg) == false &&
    undefined !== pobjDetailRegionFldsEN.errMsg &&
    tzDataType.isString(pobjDetailRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjDetailRegionFldsEN.errMsg}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.prjId) == false &&
    undefined !== pobjDetailRegionFldsEN.prjId &&
    tzDataType.isString(pobjDetailRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjDetailRegionFldsEN.prjId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.updUser) == false &&
    undefined !== pobjDetailRegionFldsEN.updUser &&
    tzDataType.isString(pobjDetailRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDetailRegionFldsEN.updUser}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.updDate) == false &&
    undefined !== pobjDetailRegionFldsEN.updDate &&
    tzDataType.isString(pobjDetailRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDetailRegionFldsEN.updDate}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.memo) == false &&
    undefined !== pobjDetailRegionFldsEN.memo &&
    tzDataType.isString(pobjDetailRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDetailRegionFldsEN.memo}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.regionId) == false &&
    pobjDetailRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjDetailRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000415)字段[区域Id]作为外键字段,长度应该为10(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.ctlTypeId) == false &&
    pobjDetailRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjDetailRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[控件类型号]作为外键字段,长度应该为2(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.inOutTypeId) == false &&
    pobjDetailRegionFldsEN.inOutTypeId != '[nuull]' &&
    GetStrLen(pobjDetailRegionFldsEN.inOutTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[INOUT类型ID]作为外键字段,长度应该为2(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DetailRegionFlds_CheckProperty4Update(
  pobjDetailRegionFldsEN: clsDetailRegionFldsEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.regionId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.regionId}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.fldId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.fldId}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.outFldId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.outFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[OutFldId(outFldId)]的长度不能超过8(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.outFldId}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.labelCaption) == false &&
    GetStrLen(pobjDetailRegionFldsEN.labelCaption) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[标签标题(labelCaption)]的长度不能超过150(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.labelCaption}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.ctlTypeId}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.inOutTypeId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.inOutTypeId}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.changeEvent) == false &&
    GetStrLen(pobjDetailRegionFldsEN.changeEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Change事件(changeEvent)]的长度不能超过50(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.changeEvent}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.clickEvent) == false &&
    GetStrLen(pobjDetailRegionFldsEN.clickEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Click事件(clickEvent)]的长度不能超过50(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.clickEvent}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.varId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id(varId)]的长度不能超过8(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.varId}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjDetailRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.errMsg}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.prjId) == false &&
    GetStrLen(pobjDetailRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.prjId}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.updUser) == false &&
    GetStrLen(pobjDetailRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.updUser}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.updDate) == false &&
    GetStrLen(pobjDetailRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.updDate}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.memo) == false &&
    GetStrLen(pobjDetailRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 详细区域字段(DetailRegionFlds))!值:${pobjDetailRegionFldsEN.memo}(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDetailRegionFldsEN.mId &&
    undefined !== pobjDetailRegionFldsEN.mId &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjDetailRegionFldsEN.mId}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.regionId) == false &&
    undefined !== pobjDetailRegionFldsEN.regionId &&
    tzDataType.isString(pobjDetailRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域Id(regionId)]的值:[${pobjDetailRegionFldsEN.regionId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.fldId) == false &&
    undefined !== pobjDetailRegionFldsEN.fldId &&
    tzDataType.isString(pobjDetailRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjDetailRegionFldsEN.fldId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.outFldId) == false &&
    undefined !== pobjDetailRegionFldsEN.outFldId &&
    tzDataType.isString(pobjDetailRegionFldsEN.outFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[OutFldId(outFldId)]的值:[${pobjDetailRegionFldsEN.outFldId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.labelCaption) == false &&
    undefined !== pobjDetailRegionFldsEN.labelCaption &&
    tzDataType.isString(pobjDetailRegionFldsEN.labelCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[标签标题(labelCaption)]的值:[${pobjDetailRegionFldsEN.labelCaption}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjDetailRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjDetailRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjDetailRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.colSpan &&
    undefined !== pobjDetailRegionFldsEN.colSpan &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.colSpan) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[跨列数(colSpan)]的值:[${pobjDetailRegionFldsEN.colSpan}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.colIndex &&
    undefined !== pobjDetailRegionFldsEN.colIndex &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.colIndex) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[列序号(colIndex)]的值:[${pobjDetailRegionFldsEN.colIndex}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.width &&
    undefined !== pobjDetailRegionFldsEN.width &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[宽(width)]的值:[${pobjDetailRegionFldsEN.width}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.isMultiRow &&
    undefined !== pobjDetailRegionFldsEN.isMultiRow &&
    tzDataType.isBoolean(pobjDetailRegionFldsEN.isMultiRow) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否多行(isMultiRow)]的值:[${pobjDetailRegionFldsEN.isMultiRow}], 非法,应该为布尔型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.seqNum &&
    undefined !== pobjDetailRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjDetailRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段序号(seqNum)]的值:[${pobjDetailRegionFldsEN.seqNum}], 非法,应该为数值型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.inOutTypeId) == false &&
    undefined !== pobjDetailRegionFldsEN.inOutTypeId &&
    tzDataType.isString(pobjDetailRegionFldsEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjDetailRegionFldsEN.inOutTypeId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDetailRegionFldsEN.inUse &&
    undefined !== pobjDetailRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjDetailRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjDetailRegionFldsEN.inUse}], 非法,应该为布尔型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.changeEvent) == false &&
    undefined !== pobjDetailRegionFldsEN.changeEvent &&
    tzDataType.isString(pobjDetailRegionFldsEN.changeEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Change事件(changeEvent)]的值:[${pobjDetailRegionFldsEN.changeEvent}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.clickEvent) == false &&
    undefined !== pobjDetailRegionFldsEN.clickEvent &&
    tzDataType.isString(pobjDetailRegionFldsEN.clickEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Click事件(clickEvent)]的值:[${pobjDetailRegionFldsEN.clickEvent}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.varId) == false &&
    undefined !== pobjDetailRegionFldsEN.varId &&
    tzDataType.isString(pobjDetailRegionFldsEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id(varId)]的值:[${pobjDetailRegionFldsEN.varId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.errMsg) == false &&
    undefined !== pobjDetailRegionFldsEN.errMsg &&
    tzDataType.isString(pobjDetailRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjDetailRegionFldsEN.errMsg}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.prjId) == false &&
    undefined !== pobjDetailRegionFldsEN.prjId &&
    tzDataType.isString(pobjDetailRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjDetailRegionFldsEN.prjId}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.updUser) == false &&
    undefined !== pobjDetailRegionFldsEN.updUser &&
    tzDataType.isString(pobjDetailRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDetailRegionFldsEN.updUser}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.updDate) == false &&
    undefined !== pobjDetailRegionFldsEN.updDate &&
    tzDataType.isString(pobjDetailRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDetailRegionFldsEN.updDate}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.memo) == false &&
    undefined !== pobjDetailRegionFldsEN.memo &&
    tzDataType.isString(pobjDetailRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDetailRegionFldsEN.memo}], 非法,应该为字符型(In 详细区域字段(DetailRegionFlds))!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjDetailRegionFldsEN.mId ||
    (pobjDetailRegionFldsEN.mId != null && pobjDetailRegionFldsEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 详细区域字段)!(clsDetailRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.regionId) == false &&
    pobjDetailRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjDetailRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000418)字段[区域Id]作为外键字段,长度应该为10(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.ctlTypeId) == false &&
    pobjDetailRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjDetailRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[控件类型号]作为外键字段,长度应该为2(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDetailRegionFldsEN.inOutTypeId) == false &&
    pobjDetailRegionFldsEN.inOutTypeId != '[nuull]' &&
    GetStrLen(pobjDetailRegionFldsEN.inOutTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[INOUT类型ID]作为外键字段,长度应该为2(In 详细区域字段)!(clsDetailRegionFldsBL:CheckPropertyNew)';
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
export function DetailRegionFlds_GetJSONStrByObj(
  pobjDetailRegionFldsEN: clsDetailRegionFldsEN,
): string {
  pobjDetailRegionFldsEN.sfUpdFldSetStr = pobjDetailRegionFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDetailRegionFldsEN);
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
export function DetailRegionFlds_GetObjLstByJSONStr(strJSON: string): Array<clsDetailRegionFldsEN> {
  let arrDetailRegionFldsObjLst = new Array<clsDetailRegionFldsEN>();
  if (strJSON === '') {
    return arrDetailRegionFldsObjLst;
  }
  try {
    arrDetailRegionFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDetailRegionFldsObjLst;
  }
  return arrDetailRegionFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDetailRegionFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DetailRegionFlds_GetObjLstByJSONObjLst(
  arrDetailRegionFldsObjLstS: Array<clsDetailRegionFldsEN>,
): Array<clsDetailRegionFldsEN> {
  const arrDetailRegionFldsObjLst = new Array<clsDetailRegionFldsEN>();
  for (const objInFor of arrDetailRegionFldsObjLstS) {
    const obj1 = DetailRegionFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDetailRegionFldsObjLst.push(obj1);
  }
  return arrDetailRegionFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DetailRegionFlds_GetObjByJSONStr(strJSON: string): clsDetailRegionFldsEN {
  let pobjDetailRegionFldsEN = new clsDetailRegionFldsEN();
  if (strJSON === '') {
    return pobjDetailRegionFldsEN;
  }
  try {
    pobjDetailRegionFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDetailRegionFldsEN;
  }
  return pobjDetailRegionFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DetailRegionFlds_GetCombineCondition(
  objDetailRegionFldsCond: clsDetailRegionFldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDetailRegionFldsEN.con_mId,
      objDetailRegionFldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_RegionId,
      objDetailRegionFldsCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_FldId,
      objDetailRegionFldsCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_OutFldId,
    ) == true
  ) {
    const strComparisonOpOutFldId: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_OutFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_OutFldId,
      objDetailRegionFldsCond.outFldId,
      strComparisonOpOutFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_LabelCaption,
    ) == true
  ) {
    const strComparisonOpLabelCaption: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_LabelCaption];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_LabelCaption,
      objDetailRegionFldsCond.labelCaption,
      strComparisonOpLabelCaption,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_CtlTypeId,
      objDetailRegionFldsCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_ColSpan,
    ) == true
  ) {
    const strComparisonOpColSpan: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_ColSpan];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDetailRegionFldsEN.con_ColSpan,
      objDetailRegionFldsCond.colSpan,
      strComparisonOpColSpan,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_ColIndex,
    ) == true
  ) {
    const strComparisonOpColIndex: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_ColIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDetailRegionFldsEN.con_ColIndex,
      objDetailRegionFldsCond.colIndex,
      strComparisonOpColIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDetailRegionFldsEN.con_Width,
      objDetailRegionFldsCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_IsMultiRow,
    ) == true
  ) {
    if (objDetailRegionFldsCond.isMultiRow == true) {
      strWhereCond += Format(" And {0} = '1'", clsDetailRegionFldsEN.con_IsMultiRow);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDetailRegionFldsEN.con_IsMultiRow);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_SeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_SeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDetailRegionFldsEN.con_SeqNum,
      objDetailRegionFldsCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_InOutTypeId,
    ) == true
  ) {
    const strComparisonOpInOutTypeId: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_InOutTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_InOutTypeId,
      objDetailRegionFldsCond.inOutTypeId,
      strComparisonOpInOutTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_InUse,
    ) == true
  ) {
    if (objDetailRegionFldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsDetailRegionFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDetailRegionFldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_ChangeEvent,
    ) == true
  ) {
    const strComparisonOpChangeEvent: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_ChangeEvent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_ChangeEvent,
      objDetailRegionFldsCond.changeEvent,
      strComparisonOpChangeEvent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_ClickEvent,
    ) == true
  ) {
    const strComparisonOpClickEvent: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_ClickEvent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_ClickEvent,
      objDetailRegionFldsCond.clickEvent,
      strComparisonOpClickEvent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_VarId,
    ) == true
  ) {
    const strComparisonOpVarId: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_VarId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_VarId,
      objDetailRegionFldsCond.varId,
      strComparisonOpVarId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_ErrMsg,
      objDetailRegionFldsCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_PrjId,
      objDetailRegionFldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_UpdUser,
      objDetailRegionFldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_UpdDate,
      objDetailRegionFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDetailRegionFldsCond.dicFldComparisonOp,
      clsDetailRegionFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDetailRegionFldsCond.dicFldComparisonOp[clsDetailRegionFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDetailRegionFldsEN.con_Memo,
      objDetailRegionFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DetailRegionFlds(详细区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strOutFldId: OutFldId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DetailRegionFlds_GetUniCondStr(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RegionId = '{0}'", objDetailRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objDetailRegionFldsEN.fldId);
  strWhereCond += Format(" and OutFldId = '{0}'", objDetailRegionFldsEN.outFldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DetailRegionFlds(详细区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strOutFldId: OutFldId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DetailRegionFlds_GetUniCondStr4Update(
  objDetailRegionFldsEN: clsDetailRegionFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objDetailRegionFldsEN.mId);
  strWhereCond += Format(" and RegionId = '{0}'", objDetailRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objDetailRegionFldsEN.fldId);
  strWhereCond += Format(" and OutFldId = '{0}'", objDetailRegionFldsEN.outFldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDetailRegionFldsENS:源对象
 * @param objDetailRegionFldsENT:目标对象
 */
export function DetailRegionFlds_GetObjFromJsonObj(
  objDetailRegionFldsENS: clsDetailRegionFldsEN,
): clsDetailRegionFldsEN {
  const objDetailRegionFldsENT: clsDetailRegionFldsEN = new clsDetailRegionFldsEN();
  ObjectAssign(objDetailRegionFldsENT, objDetailRegionFldsENS);
  return objDetailRegionFldsENT;
}
