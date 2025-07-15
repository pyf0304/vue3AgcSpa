/**
 * 类名:clsDGRegionFldsWApi
 * 表名:DGRegionFlds(00050113)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:59:01
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
 * DG区域字段(DGRegionFlds)
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
import { dGRegionFldsCache, isFuncMapCache } from '@/views/RegionManage/DGRegionFldsVueShare';
import { clsDGRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx';
import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';
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

export const dGRegionFlds_Controller = 'DGRegionFldsApi';
export const dGRegionFlds_ConstructorName = 'dGRegionFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function DGRegionFlds_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsDGRegionFldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsDGRegionFldsWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
      const objDGRegionFlds = DGRegionFlds_GetObjFromJsonObj(returnObj);
      return objDGRegionFlds;
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsDGRegionFldsWApi.GetObjBymIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDGRegionFldsEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDGRegionFldsCache: clsDGRegionFldsEN = JSON.parse(strTempObj);
    return objDGRegionFldsCache;
  }
  try {
    const objDGRegionFlds = await DGRegionFlds_GetObjBymIdAsync(lngmId);
    if (objDGRegionFlds != null) {
      localStorage.setItem(strKey, JSON.stringify(objDGRegionFlds));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDGRegionFlds;
    }
    return objDGRegionFlds;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjBymIdCache(
  lngmId: number,
  strRegionId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsDGRegionFldsWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
  try {
    const arrDGRegionFldsSel = arrDGRegionFldsObjLstCache.filter((x) => x.mId == lngmId);
    let objDGRegionFlds: clsDGRegionFldsEN;
    if (arrDGRegionFldsSel.length > 0) {
      objDGRegionFlds = arrDGRegionFldsSel[0];
      return objDGRegionFlds;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDGRegionFldsConst = await DGRegionFlds_GetObjBymIdAsync(lngmId);
        if (objDGRegionFldsConst != null) {
          DGRegionFlds_ReFreshThisCache(strRegionId);
          return objDGRegionFldsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      dGRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objDGRegionFlds:所给的对象
 * @returns 对象
 */
export async function DGRegionFlds_UpdateObjInLstCache(
  objDGRegionFlds: clsDGRegionFldsEN,
  strRegionId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
    const obj = arrDGRegionFldsObjLstCache.find(
      (x) =>
        x.regionId == objDGRegionFlds.regionId &&
        x.fldId == objDGRegionFlds.fldId &&
        x.outFldId == objDGRegionFlds.outFldId,
    );
    if (obj != null) {
      objDGRegionFlds.mId = obj.mId;
      ObjectAssign(obj, objDGRegionFlds);
    } else {
      arrDGRegionFldsObjLstCache.push(objDGRegionFlds);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      dGRegionFlds_ConstructorName,
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
export function DGRegionFlds_SortFunDefa(a: clsDGRegionFldsEN, b: clsDGRegionFldsEN): number {
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
export function DGRegionFlds_SortFunDefa2Fld(a: clsDGRegionFldsEN, b: clsDGRegionFldsEN): number {
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
export function DGRegionFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDGRegionFldsEN.con_mId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return a.mId - b.mId;
        };
      case clsDGRegionFldsEN.con_RegionId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsDGRegionFldsEN.con_FldId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.fldId == null) return -1;
          if (b.fldId == null) return 1;
          return a.fldId.localeCompare(b.fldId);
        };
      case clsDGRegionFldsEN.con_OutFldId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.outFldId == null) return -1;
          if (b.outFldId == null) return 1;
          return a.outFldId.localeCompare(b.outFldId);
        };
      case clsDGRegionFldsEN.con_SortExpression:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.sortExpression == null) return -1;
          if (b.sortExpression == null) return 1;
          return a.sortExpression.localeCompare(b.sortExpression);
        };
      case clsDGRegionFldsEN.con_SeqNum:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsDGRegionFldsEN.con_HeaderText:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.headerText == null) return -1;
          if (b.headerText == null) return 1;
          return a.headerText.localeCompare(b.headerText);
        };
      case clsDGRegionFldsEN.con_ToolTipText:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.toolTipText == null) return -1;
          if (b.toolTipText == null) return 1;
          return a.toolTipText.localeCompare(b.toolTipText);
        };
      case clsDGRegionFldsEN.con_CtlTypeId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsDGRegionFldsEN.con_DgFuncTypeId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.dgFuncTypeId == null) return -1;
          if (b.dgFuncTypeId == null) return 1;
          return a.dgFuncTypeId.localeCompare(b.dgFuncTypeId);
        };
      case clsDGRegionFldsEN.con_IsNeedSort:
        return (a: clsDGRegionFldsEN) => {
          if (a.isNeedSort == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_IsDefaultSort:
        return (a: clsDGRegionFldsEN) => {
          if (a.isDefaultSort == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_IsTransToChkBox:
        return (a: clsDGRegionFldsEN) => {
          if (a.isTransToChkBox == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_IsVisible:
        return (a: clsDGRegionFldsEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_IsFuncFld:
        return (a: clsDGRegionFldsEN) => {
          if (a.isFuncFld == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_InUse:
        return (a: clsDGRegionFldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_ErrMsg:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsDGRegionFldsEN.con_PrjId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsDGRegionFldsEN.con_UpdUser:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDGRegionFldsEN.con_UpdDate:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDGRegionFldsEN.con_Memo:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DGRegionFlds]中不存在!(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDGRegionFldsEN.con_mId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return b.mId - a.mId;
        };
      case clsDGRegionFldsEN.con_RegionId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsDGRegionFldsEN.con_FldId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.fldId == null) return -1;
          if (a.fldId == null) return 1;
          return b.fldId.localeCompare(a.fldId);
        };
      case clsDGRegionFldsEN.con_OutFldId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.outFldId == null) return -1;
          if (a.outFldId == null) return 1;
          return b.outFldId.localeCompare(a.outFldId);
        };
      case clsDGRegionFldsEN.con_SortExpression:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.sortExpression == null) return -1;
          if (a.sortExpression == null) return 1;
          return b.sortExpression.localeCompare(a.sortExpression);
        };
      case clsDGRegionFldsEN.con_SeqNum:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsDGRegionFldsEN.con_HeaderText:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.headerText == null) return -1;
          if (a.headerText == null) return 1;
          return b.headerText.localeCompare(a.headerText);
        };
      case clsDGRegionFldsEN.con_ToolTipText:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.toolTipText == null) return -1;
          if (a.toolTipText == null) return 1;
          return b.toolTipText.localeCompare(a.toolTipText);
        };
      case clsDGRegionFldsEN.con_CtlTypeId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsDGRegionFldsEN.con_DgFuncTypeId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.dgFuncTypeId == null) return -1;
          if (a.dgFuncTypeId == null) return 1;
          return b.dgFuncTypeId.localeCompare(a.dgFuncTypeId);
        };
      case clsDGRegionFldsEN.con_IsNeedSort:
        return (b: clsDGRegionFldsEN) => {
          if (b.isNeedSort == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_IsDefaultSort:
        return (b: clsDGRegionFldsEN) => {
          if (b.isDefaultSort == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_IsTransToChkBox:
        return (b: clsDGRegionFldsEN) => {
          if (b.isTransToChkBox == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_IsVisible:
        return (b: clsDGRegionFldsEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_IsFuncFld:
        return (b: clsDGRegionFldsEN) => {
          if (b.isFuncFld == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_InUse:
        return (b: clsDGRegionFldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsEN.con_ErrMsg:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsDGRegionFldsEN.con_PrjId:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsDGRegionFldsEN.con_UpdUser:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDGRegionFldsEN.con_UpdDate:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDGRegionFldsEN.con_Memo:
        return (a: clsDGRegionFldsEN, b: clsDGRegionFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DGRegionFlds]中不存在!(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
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
export async function DGRegionFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDGRegionFldsEN.con_mId:
      return (obj: clsDGRegionFldsEN) => {
        return obj.mId === value;
      };
    case clsDGRegionFldsEN.con_RegionId:
      return (obj: clsDGRegionFldsEN) => {
        return obj.regionId === value;
      };
    case clsDGRegionFldsEN.con_FldId:
      return (obj: clsDGRegionFldsEN) => {
        return obj.fldId === value;
      };
    case clsDGRegionFldsEN.con_OutFldId:
      return (obj: clsDGRegionFldsEN) => {
        return obj.outFldId === value;
      };
    case clsDGRegionFldsEN.con_SortExpression:
      return (obj: clsDGRegionFldsEN) => {
        return obj.sortExpression === value;
      };
    case clsDGRegionFldsEN.con_SeqNum:
      return (obj: clsDGRegionFldsEN) => {
        return obj.seqNum === value;
      };
    case clsDGRegionFldsEN.con_HeaderText:
      return (obj: clsDGRegionFldsEN) => {
        return obj.headerText === value;
      };
    case clsDGRegionFldsEN.con_ToolTipText:
      return (obj: clsDGRegionFldsEN) => {
        return obj.toolTipText === value;
      };
    case clsDGRegionFldsEN.con_CtlTypeId:
      return (obj: clsDGRegionFldsEN) => {
        return obj.ctlTypeId === value;
      };
    case clsDGRegionFldsEN.con_DgFuncTypeId:
      return (obj: clsDGRegionFldsEN) => {
        return obj.dgFuncTypeId === value;
      };
    case clsDGRegionFldsEN.con_IsNeedSort:
      return (obj: clsDGRegionFldsEN) => {
        return obj.isNeedSort === value;
      };
    case clsDGRegionFldsEN.con_IsDefaultSort:
      return (obj: clsDGRegionFldsEN) => {
        return obj.isDefaultSort === value;
      };
    case clsDGRegionFldsEN.con_IsTransToChkBox:
      return (obj: clsDGRegionFldsEN) => {
        return obj.isTransToChkBox === value;
      };
    case clsDGRegionFldsEN.con_IsVisible:
      return (obj: clsDGRegionFldsEN) => {
        return obj.isVisible === value;
      };
    case clsDGRegionFldsEN.con_IsFuncFld:
      return (obj: clsDGRegionFldsEN) => {
        return obj.isFuncFld === value;
      };
    case clsDGRegionFldsEN.con_InUse:
      return (obj: clsDGRegionFldsEN) => {
        return obj.inUse === value;
      };
    case clsDGRegionFldsEN.con_ErrMsg:
      return (obj: clsDGRegionFldsEN) => {
        return obj.errMsg === value;
      };
    case clsDGRegionFldsEN.con_PrjId:
      return (obj: clsDGRegionFldsEN) => {
        return obj.prjId === value;
      };
    case clsDGRegionFldsEN.con_UpdUser:
      return (obj: clsDGRegionFldsEN) => {
        return obj.updUser === value;
      };
    case clsDGRegionFldsEN.con_UpdDate:
      return (obj: clsDGRegionFldsEN) => {
        return obj.updDate === value;
      };
    case clsDGRegionFldsEN.con_Memo:
      return (obj: clsDGRegionFldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DGRegionFlds]中不存在!(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
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
export async function DGRegionFlds_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strRegionIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsDGRegionFldsWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsDGRegionFldsWApi.func)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsDGRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDGRegionFldsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDGRegionFldsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objDGRegionFlds = await DGRegionFlds_GetObjBymIdCache(lngmId, strRegionIdClassfy);
  if (objDGRegionFlds == null) return '';
  if (objDGRegionFlds.GetFldValue(strOutFldName) == null) return '';
  return objDGRegionFlds.GetFldValue(strOutFldName).toString();
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
export async function DGRegionFlds_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strRegionIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsDGRegionFldsWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsDGRegionFldsWApi.funcKey)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsDGRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrDGRegionFlds = await DGRegionFlds_GetObjLstCache(strRegionIdClassfy);
  if (arrDGRegionFlds == null) return [];
  let arrDGRegionFldsSel = arrDGRegionFlds;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDGRegionFldsSel.length == 0) return [];
  return arrDGRegionFldsSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DGRegionFlds_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDGRegionFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
      const objDGRegionFlds = DGRegionFlds_GetObjFromJsonObj(returnObj);
      return objDGRegionFlds;
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjLstClientCache(strRegionId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDGRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDGRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("RegionId='{0}'", strRegionId);
  }
  const strKey = Format('{0}_{1}', clsDGRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsDGRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDGRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDGRegionFldsExObjLstCache: Array<clsDGRegionFldsEN> = CacheHelper.Get(strKey);
    const arrDGRegionFldsObjLstT = DGRegionFlds_GetObjLstByJSONObjLst(arrDGRegionFldsExObjLstCache);
    return arrDGRegionFldsObjLstT;
  }
  try {
    const arrDGRegionFldsExObjLst = await DGRegionFlds_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDGRegionFldsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDGRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrDGRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjLstlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDGRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDGRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsDGRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsDGRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsDGRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDGRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDGRegionFldsExObjLstCache: Array<clsDGRegionFldsEN> = JSON.parse(strTempObjLst);
    const arrDGRegionFldsObjLstT = DGRegionFlds_GetObjLstByJSONObjLst(arrDGRegionFldsExObjLstCache);
    return arrDGRegionFldsObjLstT;
  }
  try {
    const arrDGRegionFldsExObjLst = await DGRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsDGRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrDGRegionFldsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDGRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrDGRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjLstlocalStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsDGRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDGRegionFldsObjLstCache: Array<clsDGRegionFldsEN> = JSON.parse(strTempObjLst);
    return arrDGRegionFldsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DGRegionFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDGRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
          dGRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DGRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjLstsessionStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDGRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsDGRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsDGRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsDGRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsDGRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDGRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDGRegionFldsExObjLstCache: Array<clsDGRegionFldsEN> = JSON.parse(strTempObjLst);
    const arrDGRegionFldsObjLstT = DGRegionFlds_GetObjLstByJSONObjLst(arrDGRegionFldsExObjLstCache);
    return arrDGRegionFldsObjLstT;
  }
  try {
    const arrDGRegionFldsExObjLst = await DGRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsDGRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrDGRegionFldsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDGRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrDGRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjLstsessionStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsDGRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDGRegionFldsObjLstCache: Array<clsDGRegionFldsEN> = JSON.parse(strTempObjLst);
    return arrDGRegionFldsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DGRegionFlds_GetObjLstCache(
  strRegionId: string,
): Promise<Array<clsDGRegionFldsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空！(In clsDGRegionFldsWApi.DGRegionFlds_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确！(clsDGRegionFldsWApi.DGRegionFlds_GetObjLstCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrDGRegionFldsObjLstCache;
  switch (clsDGRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstsessionStorage(strRegionId);
      break;
    case '03': //localStorage
      arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstlocalStorage(strRegionId);
      break;
    case '02': //ClientCache
      arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstClientCache(strRegionId);
      break;
    default:
      arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstClientCache(strRegionId);
      break;
  }
  return arrDGRegionFldsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DGRegionFlds_GetObjLstPureCache(strRegionId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDGRegionFldsObjLstCache;
  switch (clsDGRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstsessionStoragePureCache(strRegionId);
      break;
    case '03': //localStorage
      arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstlocalStoragePureCache(strRegionId);
      break;
    case '02': //ClientCache
      arrDGRegionFldsObjLstCache = null;
      break;
    default:
      arrDGRegionFldsObjLstCache = null;
      break;
  }
  return arrDGRegionFldsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DGRegionFlds_GetSubObjLstCache(
  objDGRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
  let arrDGRegionFldsSel = arrDGRegionFldsObjLstCache;
  if (objDGRegionFldsCond.GetConditions().length == 0) return arrDGRegionFldsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objDGRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDGRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDGRegionFldsCond),
      dGRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDGRegionFldsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function DGRegionFlds_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsDGRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
          dGRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DGRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
    const arrDGRegionFldsSel = arrDGRegionFldsObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrDGRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDGRegionFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
          dGRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DGRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDGRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
          dGRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DGRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDGRegionFldsEN>();
  const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
  if (arrDGRegionFldsObjLstCache.length == 0) return arrDGRegionFldsObjLstCache;
  let arrDGRegionFldsSel = arrDGRegionFldsObjLstCache;
  const objDGRegionFldsCond = objPagerPara.conditionCollection;
  if (objDGRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsDGRegionFldsEN>();
  }
  //console.log("clsDGRegionFldsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objDGRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDGRegionFldsSel.length == 0) return arrDGRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDGRegionFldsSel = arrDGRegionFldsSel.sort(
        DGRegionFlds_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDGRegionFldsSel = arrDGRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrDGRegionFldsSel = arrDGRegionFldsSel.slice(intStart, intEnd);
    return arrDGRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dGRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDGRegionFldsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DGRegionFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDGRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDGRegionFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
          dGRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DGRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_DelDGRegionFldssAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelDGRegionFldssAsync';
  const strAction = 'DelDGRegionFldss';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
): Promise<Array<clsDGRegionFldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrDGRegionFldsObjLst = await DGRegionFlds_GetObjLstCache(strRegionId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsDGRegionFldsENEx>();
  const arrDGRegionFldsExObjLst = arrDGRegionFldsObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.regionId}`;
    if (dGRegionFldsCache[cacheKey]) {
      const oldObj = dGRegionFldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = DGRegionFlds_CopyToEx(obj);
      arrNewObj.push(newObj);
      dGRegionFldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await DGRegionFlds_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDGRegionFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrDGRegionFldsExObjLst) {
      await DGRegionFlds_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.regionId}`;
      dGRegionFldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrDGRegionFldsExObjLst.length == 0) return arrDGRegionFldsExObjLst;
  let arrDGRegionFldsSel: Array<clsDGRegionFldsENEx> = arrDGRegionFldsExObjLst;
  const objDGRegionFldsCond = objPagerPara.conditionCollection;
  if (objDGRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrDGRegionFldsExObjLst;
  }
  try {
    for (const objCondition of objDGRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDGRegionFldsSel.length == 0) return arrDGRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrDGRegionFldsSel = arrDGRegionFldsSel.sort(
        DGRegionFlds_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDGRegionFldsSel = arrDGRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrDGRegionFldsSel = arrDGRegionFldsSel.slice(intStart, intEnd);
    return arrDGRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dGRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDGRegionFldsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objDGRegionFldsENS:源对象
 * @returns 目标对象=>clsDGRegionFldsEN:objDGRegionFldsENT
 **/
export function DGRegionFlds_CopyToEx(objDGRegionFldsENS: clsDGRegionFldsEN): clsDGRegionFldsENEx {
  const strThisFuncName = DGRegionFlds_CopyToEx.name;
  const objDGRegionFldsENT = new clsDGRegionFldsENEx();
  try {
    ObjectAssign(objDGRegionFldsENT, objDGRegionFldsENS);
    return objDGRegionFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDGRegionFldsENT;
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
export function DGRegionFlds_FuncMapByFldName(
  strFldName: string,
  objDGRegionFldsEx: clsDGRegionFldsENEx,
) {
  const strThisFuncName = DGRegionFlds_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsDGRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDGRegionFldsENEx.con_FldName:
      return DGRegionFlds_FuncMapFldName(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_CtlTypeName:
      return DGRegionFlds_FuncMapCtlTypeName(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_OutFldName:
      return DGRegionFlds_FuncMapOutFldName(objDGRegionFldsEx);
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
export function DGRegionFlds_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDGRegionFldsENEx.con_FldName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsDGRegionFldsENEx.con_TabName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsDGRegionFldsENEx.con_CtlTypeName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsDGRegionFldsENEx.con_TdClass:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return -1;
          if (b.tdClass === null) return 1;
          return a.tdClass.localeCompare(b.tdClass);
        };
      case clsDGRegionFldsENEx.con_TrClass:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsDGRegionFldsENEx.con_FldNameV2:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.fldNameV2.localeCompare(b.fldNameV2);
        };
      case clsDGRegionFldsENEx.con_DnPathIdEx:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.dnPathIdEx.localeCompare(b.dnPathIdEx);
        };
      case clsDGRegionFldsENEx.con_TabId:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsDGRegionFldsENEx.con_OutFldName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return -1;
          if (b.outFldName === null) return 1;
          return a.outFldName.localeCompare(b.outFldName);
        };
      case clsDGRegionFldsENEx.con_DnPathId:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsDGRegionFldsENEx.con_IsUseFunc:
        return (a: clsDGRegionFldsENEx) => {
          if (a.isUseFunc == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsENEx.con_DataPropertyName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          if (a.dataPropertyName === null && b.dataPropertyName === null) return 0;
          if (a.dataPropertyName === null) return -1;
          if (b.dataPropertyName === null) return 1;
          return a.dataPropertyName.localeCompare(b.dataPropertyName);
        };
      default:
        return DGRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDGRegionFldsENEx.con_FldName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsDGRegionFldsENEx.con_TabName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsDGRegionFldsENEx.con_CtlTypeName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsDGRegionFldsENEx.con_TdClass:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return 1;
          if (b.tdClass === null) return -1;
          return b.tdClass.localeCompare(a.tdClass);
        };
      case clsDGRegionFldsENEx.con_TrClass:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsDGRegionFldsENEx.con_FldNameV2:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.fldNameV2.localeCompare(a.fldNameV2);
        };
      case clsDGRegionFldsENEx.con_DnPathIdEx:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.dnPathIdEx.localeCompare(a.dnPathIdEx);
        };
      case clsDGRegionFldsENEx.con_TabId:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsDGRegionFldsENEx.con_OutFldName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return 1;
          if (b.outFldName === null) return -1;
          return b.outFldName.localeCompare(a.outFldName);
        };
      case clsDGRegionFldsENEx.con_DnPathId:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsDGRegionFldsENEx.con_IsUseFunc:
        return (b: clsDGRegionFldsENEx) => {
          if (b.isUseFunc == true) return 1;
          else return -1;
        };
      case clsDGRegionFldsENEx.con_DataPropertyName:
        return (a: clsDGRegionFldsENEx, b: clsDGRegionFldsENEx) => {
          if (a.dataPropertyName === null && b.dataPropertyName === null) return 0;
          if (a.dataPropertyName === null) return 1;
          if (b.dataPropertyName === null) return -1;
          return b.dataPropertyName.localeCompare(a.dataPropertyName);
        };
      default:
        return DGRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFlds_FuncMapFldName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFlds_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.fldName) == true) {
      const vFieldTabSimFldId = objDGRegionFlds.fldId;
      if (IsNullOrEmpty(objDGRegionFlds.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objDGRegionFlds.prjId,
      );
      objDGRegionFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFlds_FuncMapCtlTypeName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFlds_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.ctlTypeName) == true) {
      const CtlTypeCtlTypeId = objDGRegionFlds.ctlTypeId;
      const CtlTypeCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeCtlTypeId,
      );
      objDGRegionFlds.ctlTypeName = CtlTypeCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFlds_FuncMapOutFldName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFlds_FuncMapOutFldName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.outFldName) == true) {
      const vFieldTabSimFldId = objDGRegionFlds.outFldId;
      if (IsNullOrEmpty(objDGRegionFlds.prjId) == true) {
        const strMsg = `函数映射[OutFldName]数据出错,prjId不能为空!(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objDGRegionFlds.prjId,
      );
      objDGRegionFlds.outFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001305)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_DelDGRegionFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDGRegionFldssByCondAsync';
  const strAction = 'DelDGRegionFldssByCond';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DGRegionFlds_AddNewRecordAsync(
  objDGRegionFldsEN: clsDGRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDGRegionFldsEN);
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDGRegionFldsEN, config);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DGRegionFlds_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DGRegionFlds_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDGRegionFldsEN);
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DGRegionFlds_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDGRegionFldsEN);
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_AddNewObjSave(
  objDGRegionFldsEN: clsDGRegionFldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DGRegionFlds_CheckPropertyNew(objDGRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DGRegionFlds_CheckUniCond4Add(objDGRegionFldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await DGRegionFlds_AddNewRecordAsync(objDGRegionFldsEN);
    if (returnBool == true) {
      DGRegionFlds_ReFreshCache(objDGRegionFldsEN.regionId);
    } else {
      const strInfo = `添加[DG区域字段(DGRegionFlds)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objDGRegionFldsEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function DGRegionFlds_CheckUniCond4Add(
  objDGRegionFldsEN: clsDGRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = DGRegionFlds_GetUniCondStr(objDGRegionFldsEN);
  const bolIsExistCondition = await DGRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function DGRegionFlds_CheckUniCond4Update(
  objDGRegionFldsEN: clsDGRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = DGRegionFlds_GetUniCondStr4Update(objDGRegionFldsEN);
  const bolIsExistCondition = await DGRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function DGRegionFlds_UpdateObjSave(
  objDGRegionFldsEN: clsDGRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDGRegionFldsEN.sfUpdFldSetStr = objDGRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objDGRegionFldsEN.mId == 0 || objDGRegionFldsEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DGRegionFlds_CheckProperty4Update(objDGRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DGRegionFlds_CheckUniCond4Update(objDGRegionFldsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await DGRegionFlds_UpdateRecordAsync(objDGRegionFldsEN);
    if (returnBool == true) {
      DGRegionFlds_ReFreshCache(objDGRegionFldsEN.regionId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${dGRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objDGRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DGRegionFlds_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDGRegionFldsEN);
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DGRegionFlds_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objDGRegionFldsEN);
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DGRegionFlds_AddNewRecordWithReturnKeyAsync(
  objDGRegionFldsEN: clsDGRegionFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDGRegionFldsEN, config);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DGRegionFlds_UpdateRecordAsync(
  objDGRegionFldsEN: clsDGRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDGRegionFldsEN.sfUpdFldSetStr === undefined ||
    objDGRegionFldsEN.sfUpdFldSetStr === null ||
    objDGRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objDGRegionFldsEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDGRegionFldsEN, config);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DGRegionFlds_EditRecordExAsync(
  objDGRegionFldsEN: clsDGRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDGRegionFldsEN.sfUpdFldSetStr === undefined ||
    objDGRegionFldsEN.sfUpdFldSetStr === null ||
    objDGRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objDGRegionFldsEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDGRegionFldsEN, config);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DGRegionFlds_UpdateWithConditionAsync(
  objDGRegionFldsEN: clsDGRegionFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDGRegionFldsEN.sfUpdFldSetStr === undefined ||
    objDGRegionFldsEN.sfUpdFldSetStr === null ||
    objDGRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objDGRegionFldsEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);
  objDGRegionFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDGRegionFldsEN, config);
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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_IsExistRecordCache(
  objDGRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
  if (arrDGRegionFldsObjLstCache == null) return false;
  let arrDGRegionFldsSel = arrDGRegionFldsObjLstCache;
  if (objDGRegionFldsCond.GetConditions().length == 0)
    return arrDGRegionFldsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objDGRegionFldsCond.GetConditions()) {
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
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDGRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDGRegionFldsCond),
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_IsExistCache(lngmId: number, strRegionId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
  if (arrDGRegionFldsObjLstCache == null) return false;
  try {
    const arrDGRegionFldsSel = arrDGRegionFldsObjLstCache.filter((x) => x.mId == lngmId);
    if (arrDGRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
 * @param objDGRegionFldsCond:条件对象
 * @returns 对象列表记录数
 */
export async function DGRegionFlds_GetRecCountByCondCache(
  objDGRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
  if (arrDGRegionFldsObjLstCache == null) return 0;
  let arrDGRegionFldsSel = arrDGRegionFldsObjLstCache;
  if (objDGRegionFldsCond.GetConditions().length == 0) return arrDGRegionFldsSel.length;
  try {
    for (const objCondition of objDGRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDGRegionFldsSel = arrDGRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDGRegionFldsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDGRegionFldsCond),
      dGRegionFlds_ConstructorName,
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
export async function DGRegionFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dGRegionFlds_Controller, strAction);

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
        dGRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dGRegionFlds_ConstructorName,
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
export function DGRegionFlds_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DGRegionFlds_ReFreshCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsDGRegionFldsWApi.clsDGRegionFldsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsDGRegionFldsWApi.clsDGRegionFldsWApi.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsDGRegionFldsEN._CurrTabName, strRegionId);
  switch (clsDGRegionFldsEN.CacheModeId) {
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
  clsDGRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function DGRegionFlds_ReFreshThisCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsDGRegionFldsWApi.DGRegionFlds_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsDGRegionFldsWApi.DGRegionFlds_ReFreshThisCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsDGRegionFldsEN._CurrTabName, strRegionId);
    switch (clsDGRegionFldsEN.CacheModeId) {
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
    clsDGRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function DGRegionFlds_GetLastRefreshTime(): string {
  if (clsDGRegionFldsEN._RefreshTimeLst.length == 0) return '';
  return clsDGRegionFldsEN._RefreshTimeLst[clsDGRegionFldsEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DGRegionFlds_CheckPropertyNew(pobjDGRegionFldsEN: clsDGRegionFldsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDGRegionFldsEN.regionId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域Id]不能为空(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjDGRegionFldsEN.seqNum ||
    (pobjDGRegionFldsEN.seqNum != null && pobjDGRegionFldsEN.seqNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段序号]不能为空(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.ctlTypeId) === true ||
    pobjDGRegionFldsEN.ctlTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[控件类型号]不能为空(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjDGRegionFldsEN.isNeedSort ||
    (pobjDGRegionFldsEN.isNeedSort != null && pobjDGRegionFldsEN.isNeedSort.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否需要排序]不能为空(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.prjId) === true ||
    pobjDGRegionFldsEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDGRegionFldsEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.regionId) == false &&
    GetStrLen(pobjDGRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.regionId}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDGRegionFldsEN.fldId) == false && GetStrLen(pobjDGRegionFldsEN.fldId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.fldId}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.outFldId) == false &&
    GetStrLen(pobjDGRegionFldsEN.outFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[OutFldId(outFldId)]的长度不能超过8(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.outFldId}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.sortExpression) == false &&
    GetStrLen(pobjDGRegionFldsEN.sortExpression) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[排序表达式(sortExpression)]的长度不能超过50(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.sortExpression}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.headerText) == false &&
    GetStrLen(pobjDGRegionFldsEN.headerText) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[列头(headerText)]的长度不能超过100(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.headerText}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.toolTipText) == false &&
    GetStrLen(pobjDGRegionFldsEN.toolTipText) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[提示文字(toolTipText)]的长度不能超过150(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.toolTipText}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjDGRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.ctlTypeId}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.dgFuncTypeId) == false &&
    GetStrLen(pobjDGRegionFldsEN.dgFuncTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Dg功能类型Id(dgFuncTypeId)]的长度不能超过4(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.dgFuncTypeId}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjDGRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.errMsg}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDGRegionFldsEN.prjId) == false && GetStrLen(pobjDGRegionFldsEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.prjId}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.updUser) == false &&
    GetStrLen(pobjDGRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.updUser}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.updDate) == false &&
    GetStrLen(pobjDGRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.updDate}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.memo) == false &&
    GetStrLen(pobjDGRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.memo}(clsDGRegionFldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDGRegionFldsEN.mId &&
    undefined !== pobjDGRegionFldsEN.mId &&
    tzDataType.isNumber(pobjDGRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjDGRegionFldsEN.mId}], 非法,应该为数值型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.regionId) == false &&
    undefined !== pobjDGRegionFldsEN.regionId &&
    tzDataType.isString(pobjDGRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域Id(regionId)]的值:[${pobjDGRegionFldsEN.regionId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.fldId) == false &&
    undefined !== pobjDGRegionFldsEN.fldId &&
    tzDataType.isString(pobjDGRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjDGRegionFldsEN.fldId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.outFldId) == false &&
    undefined !== pobjDGRegionFldsEN.outFldId &&
    tzDataType.isString(pobjDGRegionFldsEN.outFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[OutFldId(outFldId)]的值:[${pobjDGRegionFldsEN.outFldId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.sortExpression) == false &&
    undefined !== pobjDGRegionFldsEN.sortExpression &&
    tzDataType.isString(pobjDGRegionFldsEN.sortExpression) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[排序表达式(sortExpression)]的值:[${pobjDGRegionFldsEN.sortExpression}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.seqNum &&
    undefined !== pobjDGRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjDGRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段序号(seqNum)]的值:[${pobjDGRegionFldsEN.seqNum}], 非法,应该为数值型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.headerText) == false &&
    undefined !== pobjDGRegionFldsEN.headerText &&
    tzDataType.isString(pobjDGRegionFldsEN.headerText) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[列头(headerText)]的值:[${pobjDGRegionFldsEN.headerText}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.toolTipText) == false &&
    undefined !== pobjDGRegionFldsEN.toolTipText &&
    tzDataType.isString(pobjDGRegionFldsEN.toolTipText) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[提示文字(toolTipText)]的值:[${pobjDGRegionFldsEN.toolTipText}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjDGRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjDGRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjDGRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.dgFuncTypeId) == false &&
    undefined !== pobjDGRegionFldsEN.dgFuncTypeId &&
    tzDataType.isString(pobjDGRegionFldsEN.dgFuncTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Dg功能类型Id(dgFuncTypeId)]的值:[${pobjDGRegionFldsEN.dgFuncTypeId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isNeedSort &&
    undefined !== pobjDGRegionFldsEN.isNeedSort &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isNeedSort) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要排序(isNeedSort)]的值:[${pobjDGRegionFldsEN.isNeedSort}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isDefaultSort &&
    undefined !== pobjDGRegionFldsEN.isDefaultSort &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isDefaultSort) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否默认排序(isDefaultSort)]的值:[${pobjDGRegionFldsEN.isDefaultSort}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isTransToChkBox &&
    undefined !== pobjDGRegionFldsEN.isTransToChkBox &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isTransToChkBox) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否转换成CheckBox(isTransToChkBox)]的值:[${pobjDGRegionFldsEN.isTransToChkBox}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isVisible &&
    undefined !== pobjDGRegionFldsEN.isVisible &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjDGRegionFldsEN.isVisible}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isFuncFld &&
    undefined !== pobjDGRegionFldsEN.isFuncFld &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isFuncFld) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否功能字段(isFuncFld)]的值:[${pobjDGRegionFldsEN.isFuncFld}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.inUse &&
    undefined !== pobjDGRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjDGRegionFldsEN.inUse}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.errMsg) == false &&
    undefined !== pobjDGRegionFldsEN.errMsg &&
    tzDataType.isString(pobjDGRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjDGRegionFldsEN.errMsg}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.prjId) == false &&
    undefined !== pobjDGRegionFldsEN.prjId &&
    tzDataType.isString(pobjDGRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjDGRegionFldsEN.prjId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.updUser) == false &&
    undefined !== pobjDGRegionFldsEN.updUser &&
    tzDataType.isString(pobjDGRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDGRegionFldsEN.updUser}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.updDate) == false &&
    undefined !== pobjDGRegionFldsEN.updDate &&
    tzDataType.isString(pobjDGRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDGRegionFldsEN.updDate}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.memo) == false &&
    undefined !== pobjDGRegionFldsEN.memo &&
    tzDataType.isString(pobjDGRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDGRegionFldsEN.memo}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.regionId) == false &&
    pobjDGRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjDGRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000415)字段[区域Id]作为外键字段,长度应该为10(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.ctlTypeId) == false &&
    pobjDGRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjDGRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[控件类型号]作为外键字段,长度应该为2(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.dgFuncTypeId) == false &&
    pobjDGRegionFldsEN.dgFuncTypeId != '[nuull]' &&
    GetStrLen(pobjDGRegionFldsEN.dgFuncTypeId) != 4
  ) {
    throw '(errid:Watl000415)字段[Dg功能类型Id]作为外键字段,长度应该为4(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.prjId) == false &&
    pobjDGRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjDGRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DGRegionFlds_CheckProperty4Update(pobjDGRegionFldsEN: clsDGRegionFldsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.regionId) == false &&
    GetStrLen(pobjDGRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.regionId}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDGRegionFldsEN.fldId) == false && GetStrLen(pobjDGRegionFldsEN.fldId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.fldId}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.outFldId) == false &&
    GetStrLen(pobjDGRegionFldsEN.outFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[OutFldId(outFldId)]的长度不能超过8(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.outFldId}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.sortExpression) == false &&
    GetStrLen(pobjDGRegionFldsEN.sortExpression) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[排序表达式(sortExpression)]的长度不能超过50(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.sortExpression}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.headerText) == false &&
    GetStrLen(pobjDGRegionFldsEN.headerText) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[列头(headerText)]的长度不能超过100(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.headerText}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.toolTipText) == false &&
    GetStrLen(pobjDGRegionFldsEN.toolTipText) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[提示文字(toolTipText)]的长度不能超过150(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.toolTipText}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjDGRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.ctlTypeId}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.dgFuncTypeId) == false &&
    GetStrLen(pobjDGRegionFldsEN.dgFuncTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Dg功能类型Id(dgFuncTypeId)]的长度不能超过4(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.dgFuncTypeId}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjDGRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.errMsg}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDGRegionFldsEN.prjId) == false && GetStrLen(pobjDGRegionFldsEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.prjId}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.updUser) == false &&
    GetStrLen(pobjDGRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.updUser}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.updDate) == false &&
    GetStrLen(pobjDGRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.updDate}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.memo) == false &&
    GetStrLen(pobjDGRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In DG区域字段(DGRegionFlds))!值:${pobjDGRegionFldsEN.memo}(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjDGRegionFldsEN.mId &&
    undefined !== pobjDGRegionFldsEN.mId &&
    tzDataType.isNumber(pobjDGRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjDGRegionFldsEN.mId}], 非法,应该为数值型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.regionId) == false &&
    undefined !== pobjDGRegionFldsEN.regionId &&
    tzDataType.isString(pobjDGRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域Id(regionId)]的值:[${pobjDGRegionFldsEN.regionId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.fldId) == false &&
    undefined !== pobjDGRegionFldsEN.fldId &&
    tzDataType.isString(pobjDGRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjDGRegionFldsEN.fldId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.outFldId) == false &&
    undefined !== pobjDGRegionFldsEN.outFldId &&
    tzDataType.isString(pobjDGRegionFldsEN.outFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[OutFldId(outFldId)]的值:[${pobjDGRegionFldsEN.outFldId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.sortExpression) == false &&
    undefined !== pobjDGRegionFldsEN.sortExpression &&
    tzDataType.isString(pobjDGRegionFldsEN.sortExpression) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[排序表达式(sortExpression)]的值:[${pobjDGRegionFldsEN.sortExpression}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.seqNum &&
    undefined !== pobjDGRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjDGRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段序号(seqNum)]的值:[${pobjDGRegionFldsEN.seqNum}], 非法,应该为数值型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.headerText) == false &&
    undefined !== pobjDGRegionFldsEN.headerText &&
    tzDataType.isString(pobjDGRegionFldsEN.headerText) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[列头(headerText)]的值:[${pobjDGRegionFldsEN.headerText}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.toolTipText) == false &&
    undefined !== pobjDGRegionFldsEN.toolTipText &&
    tzDataType.isString(pobjDGRegionFldsEN.toolTipText) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[提示文字(toolTipText)]的值:[${pobjDGRegionFldsEN.toolTipText}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjDGRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjDGRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjDGRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.dgFuncTypeId) == false &&
    undefined !== pobjDGRegionFldsEN.dgFuncTypeId &&
    tzDataType.isString(pobjDGRegionFldsEN.dgFuncTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Dg功能类型Id(dgFuncTypeId)]的值:[${pobjDGRegionFldsEN.dgFuncTypeId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isNeedSort &&
    undefined !== pobjDGRegionFldsEN.isNeedSort &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isNeedSort) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要排序(isNeedSort)]的值:[${pobjDGRegionFldsEN.isNeedSort}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isDefaultSort &&
    undefined !== pobjDGRegionFldsEN.isDefaultSort &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isDefaultSort) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否默认排序(isDefaultSort)]的值:[${pobjDGRegionFldsEN.isDefaultSort}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isTransToChkBox &&
    undefined !== pobjDGRegionFldsEN.isTransToChkBox &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isTransToChkBox) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否转换成CheckBox(isTransToChkBox)]的值:[${pobjDGRegionFldsEN.isTransToChkBox}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isVisible &&
    undefined !== pobjDGRegionFldsEN.isVisible &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjDGRegionFldsEN.isVisible}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.isFuncFld &&
    undefined !== pobjDGRegionFldsEN.isFuncFld &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.isFuncFld) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否功能字段(isFuncFld)]的值:[${pobjDGRegionFldsEN.isFuncFld}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjDGRegionFldsEN.inUse &&
    undefined !== pobjDGRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjDGRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjDGRegionFldsEN.inUse}], 非法,应该为布尔型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.errMsg) == false &&
    undefined !== pobjDGRegionFldsEN.errMsg &&
    tzDataType.isString(pobjDGRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjDGRegionFldsEN.errMsg}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.prjId) == false &&
    undefined !== pobjDGRegionFldsEN.prjId &&
    tzDataType.isString(pobjDGRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjDGRegionFldsEN.prjId}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.updUser) == false &&
    undefined !== pobjDGRegionFldsEN.updUser &&
    tzDataType.isString(pobjDGRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDGRegionFldsEN.updUser}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.updDate) == false &&
    undefined !== pobjDGRegionFldsEN.updDate &&
    tzDataType.isString(pobjDGRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDGRegionFldsEN.updDate}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.memo) == false &&
    undefined !== pobjDGRegionFldsEN.memo &&
    tzDataType.isString(pobjDGRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDGRegionFldsEN.memo}], 非法,应该为字符型(In DG区域字段(DGRegionFlds))!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjDGRegionFldsEN.mId ||
    (pobjDGRegionFldsEN.mId != null && pobjDGRegionFldsEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In DG区域字段)!(clsDGRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.regionId) == false &&
    pobjDGRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjDGRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000418)字段[区域Id]作为外键字段,长度应该为10(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.ctlTypeId) == false &&
    pobjDGRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjDGRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[控件类型号]作为外键字段,长度应该为2(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.dgFuncTypeId) == false &&
    pobjDGRegionFldsEN.dgFuncTypeId != '[nuull]' &&
    GetStrLen(pobjDGRegionFldsEN.dgFuncTypeId) != 4
  ) {
    throw '(errid:Watl000418)字段[Dg功能类型Id]作为外键字段,长度应该为4(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjDGRegionFldsEN.prjId) == false &&
    pobjDGRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjDGRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In DG区域字段)!(clsDGRegionFldsBL:CheckPropertyNew)';
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
export function DGRegionFlds_GetJSONStrByObj(pobjDGRegionFldsEN: clsDGRegionFldsEN): string {
  pobjDGRegionFldsEN.sfUpdFldSetStr = pobjDGRegionFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDGRegionFldsEN);
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
export function DGRegionFlds_GetObjLstByJSONStr(strJSON: string): Array<clsDGRegionFldsEN> {
  let arrDGRegionFldsObjLst = new Array<clsDGRegionFldsEN>();
  if (strJSON === '') {
    return arrDGRegionFldsObjLst;
  }
  try {
    arrDGRegionFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDGRegionFldsObjLst;
  }
  return arrDGRegionFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDGRegionFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DGRegionFlds_GetObjLstByJSONObjLst(
  arrDGRegionFldsObjLstS: Array<clsDGRegionFldsEN>,
): Array<clsDGRegionFldsEN> {
  const arrDGRegionFldsObjLst = new Array<clsDGRegionFldsEN>();
  for (const objInFor of arrDGRegionFldsObjLstS) {
    const obj1 = DGRegionFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDGRegionFldsObjLst.push(obj1);
  }
  return arrDGRegionFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DGRegionFlds_GetObjByJSONStr(strJSON: string): clsDGRegionFldsEN {
  let pobjDGRegionFldsEN = new clsDGRegionFldsEN();
  if (strJSON === '') {
    return pobjDGRegionFldsEN;
  }
  try {
    pobjDGRegionFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDGRegionFldsEN;
  }
  return pobjDGRegionFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DGRegionFlds_GetCombineCondition(objDGRegionFldsCond: clsDGRegionFldsEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDGRegionFldsEN.con_mId,
      objDGRegionFldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_RegionId,
      objDGRegionFldsCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_FldId,
      objDGRegionFldsCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_OutFldId,
    ) == true
  ) {
    const strComparisonOpOutFldId: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_OutFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_OutFldId,
      objDGRegionFldsCond.outFldId,
      strComparisonOpOutFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_SortExpression,
    ) == true
  ) {
    const strComparisonOpSortExpression: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_SortExpression];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_SortExpression,
      objDGRegionFldsCond.sortExpression,
      strComparisonOpSortExpression,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_SeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_SeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDGRegionFldsEN.con_SeqNum,
      objDGRegionFldsCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_HeaderText,
    ) == true
  ) {
    const strComparisonOpHeaderText: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_HeaderText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_HeaderText,
      objDGRegionFldsCond.headerText,
      strComparisonOpHeaderText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_ToolTipText,
    ) == true
  ) {
    const strComparisonOpToolTipText: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_ToolTipText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_ToolTipText,
      objDGRegionFldsCond.toolTipText,
      strComparisonOpToolTipText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_CtlTypeId,
      objDGRegionFldsCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_DgFuncTypeId,
    ) == true
  ) {
    const strComparisonOpDgFuncTypeId: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_DgFuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_DgFuncTypeId,
      objDGRegionFldsCond.dgFuncTypeId,
      strComparisonOpDgFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_IsNeedSort,
    ) == true
  ) {
    if (objDGRegionFldsCond.isNeedSort == true) {
      strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_IsNeedSort);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_IsNeedSort);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_IsDefaultSort,
    ) == true
  ) {
    if (objDGRegionFldsCond.isDefaultSort == true) {
      strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_IsDefaultSort);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_IsDefaultSort);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_IsTransToChkBox,
    ) == true
  ) {
    if (objDGRegionFldsCond.isTransToChkBox == true) {
      strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_IsTransToChkBox);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_IsTransToChkBox);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_IsVisible,
    ) == true
  ) {
    if (objDGRegionFldsCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_IsFuncFld,
    ) == true
  ) {
    if (objDGRegionFldsCond.isFuncFld == true) {
      strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_IsFuncFld);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_IsFuncFld);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_InUse,
    ) == true
  ) {
    if (objDGRegionFldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_ErrMsg,
      objDGRegionFldsCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_PrjId,
      objDGRegionFldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_UpdUser,
      objDGRegionFldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_UpdDate,
      objDGRegionFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDGRegionFldsCond.dicFldComparisonOp,
      clsDGRegionFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDGRegionFldsCond.dicFldComparisonOp[clsDGRegionFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDGRegionFldsEN.con_Memo,
      objDGRegionFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DGRegionFlds(DG区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strOutFldId: OutFldId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DGRegionFlds_GetUniCondStr(objDGRegionFldsEN: clsDGRegionFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RegionId = '{0}'", objDGRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objDGRegionFldsEN.fldId);
  strWhereCond += Format(" and OutFldId = '{0}'", objDGRegionFldsEN.outFldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DGRegionFlds(DG区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strOutFldId: OutFldId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DGRegionFlds_GetUniCondStr4Update(objDGRegionFldsEN: clsDGRegionFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objDGRegionFldsEN.mId);
  strWhereCond += Format(" and RegionId = '{0}'", objDGRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objDGRegionFldsEN.fldId);
  strWhereCond += Format(" and OutFldId = '{0}'", objDGRegionFldsEN.outFldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDGRegionFldsENS:源对象
 * @param objDGRegionFldsENT:目标对象
 */
export function DGRegionFlds_GetObjFromJsonObj(
  objDGRegionFldsENS: clsDGRegionFldsEN,
): clsDGRegionFldsEN {
  const objDGRegionFldsENT: clsDGRegionFldsEN = new clsDGRegionFldsEN();
  ObjectAssign(objDGRegionFldsENT, objDGRegionFldsENS);
  return objDGRegionFldsENT;
}
