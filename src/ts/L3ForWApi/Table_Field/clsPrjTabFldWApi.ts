/**
 * 类名:clsPrjTabFldWApi
 * 表名:PrjTabFld(00050019)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/15 10:07:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程表字段(PrjTabFld)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月15日.
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
import { prjTabFldCache, isFuncMapCache } from '@/views/Table_Field/PrjTabFldVueShare';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { PrimaryType_func } from '@/ts/L3ForWApi/Table_Field/clsPrimaryTypeWApi';
import { clsPrimaryTypeEN } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeEN';
import { FieldType_func } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { vFieldTab_Sim2_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_Sim2WApi';
import { clsvFieldTab_Sim2EN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_Sim2EN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const prjTabFld_Controller = 'PrjTabFldApi';
export const prjTabFld_ConstructorName = 'prjTabFld';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function PrjTabFld_GetObjBymIdAsync(lngmId: number): Promise<clsPrjTabFldEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsPrjTabFldWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
      const objPrjTabFld = PrjTabFld_GetObjFromJsonObj(returnObj);
      return objPrjTabFld;
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsPrjTabFldWApi.GetObjBymIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjTabFldEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjTabFldCache: clsPrjTabFldEN = JSON.parse(strTempObj);
    return objPrjTabFldCache;
  }
  try {
    const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(lngmId);
    if (objPrjTabFld != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjTabFld));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjTabFld;
    }
    return objPrjTabFld;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjBymIdCache(
  lngmId: number,
  strTabId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsPrjTabFldWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  try {
    const arrPrjTabFldSel = arrPrjTabFldObjLstCache.filter((x) => x.mId == lngmId);
    let objPrjTabFld: clsPrjTabFldEN;
    if (arrPrjTabFldSel.length > 0) {
      objPrjTabFld = arrPrjTabFldSel[0];
      return objPrjTabFld;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjTabFldConst = await PrjTabFld_GetObjBymIdAsync(lngmId);
        if (objPrjTabFldConst != null) {
          PrjTabFld_ReFreshThisCache(strTabId);
          return objPrjTabFldConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPrjTabFld:所给的对象
 * @returns 对象
 */
export async function PrjTabFld_UpdateObjInLstCache(
  objPrjTabFld: clsPrjTabFldEN,
  strTabId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
    const obj = arrPrjTabFldObjLstCache.find(
      (x) => x.tabId == objPrjTabFld.tabId && x.fldId == objPrjTabFld.fldId,
    );
    if (obj != null) {
      objPrjTabFld.mId = obj.mId;
      ObjectAssign(obj, objPrjTabFld);
    } else {
      arrPrjTabFldObjLstCache.push(objPrjTabFld);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabFld_SortFunDefa(a: clsPrjTabFldEN, b: clsPrjTabFldEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabFld_SortFunDefa2Fld(a: clsPrjTabFldEN, b: clsPrjTabFldEN): number {
  if (a.tabId == b.tabId) return a.fldId.localeCompare(b.fldId);
  else return a.tabId.localeCompare(b.tabId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabFld_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabFldEN.con_mId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return a.mId - b.mId;
        };
      case clsPrjTabFldEN.con_TabId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsPrjTabFldEN.con_FldId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsPrjTabFldEN.con_PrjId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsPrjTabFldEN.con_FieldTypeId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsPrjTabFldEN.con_IsTabNullable:
        return (a: clsPrjTabFldEN) => {
          if (a.isTabNullable == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsTabUnique:
        return (a: clsPrjTabFldEN) => {
          if (a.isTabUnique == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsTabForeignKey:
        return (a: clsPrjTabFldEN) => {
          if (a.isTabForeignKey == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsSortFld:
        return (a: clsPrjTabFldEN) => {
          if (a.isSortFld == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsGeneProp:
        return (a: clsPrjTabFldEN) => {
          if (a.isGeneProp == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsForExtendClass:
        return (a: clsPrjTabFldEN) => {
          if (a.isForExtendClass == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_CtlTypeIdDu:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.ctlTypeIdDu == null) return -1;
          if (b.ctlTypeIdDu == null) return 1;
          return a.ctlTypeIdDu.localeCompare(b.ctlTypeIdDu);
        };
      case clsPrjTabFldEN.con_FldDispUnitStyleId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.fldDispUnitStyleId == null) return -1;
          if (b.fldDispUnitStyleId == null) return 1;
          return a.fldDispUnitStyleId.localeCompare(b.fldDispUnitStyleId);
        };
      case clsPrjTabFldEN.con_InFldId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.inFldId == null) return -1;
          if (b.inFldId == null) return 1;
          return a.inFldId.localeCompare(b.inFldId);
        };
      case clsPrjTabFldEN.con_DnPathId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.dnPathId == null) return -1;
          if (b.dnPathId == null) return 1;
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsPrjTabFldEN.con_KeyId4Test:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.keyId4Test == null) return -1;
          if (b.keyId4Test == null) return 1;
          return a.keyId4Test.localeCompare(b.keyId4Test);
        };
      case clsPrjTabFldEN.con_DisplayFormat:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.displayFormat == null) return -1;
          if (b.displayFormat == null) return 1;
          return a.displayFormat.localeCompare(b.displayFormat);
        };
      case clsPrjTabFldEN.con_IsParentObj:
        return (a: clsPrjTabFldEN) => {
          if (a.isParentObj == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_PrimaryTypeId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return a.primaryTypeId.localeCompare(b.primaryTypeId);
        };
      case clsPrjTabFldEN.con_ForeignKeyTabId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.foreignKeyTabId == null) return -1;
          if (b.foreignKeyTabId == null) return 1;
          return a.foreignKeyTabId.localeCompare(b.foreignKeyTabId);
        };
      case clsPrjTabFldEN.con_FldOpTypeId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return a.fldOpTypeId.localeCompare(b.fldOpTypeId);
        };
      case clsPrjTabFldEN.con_SequenceNumber:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return a.sequenceNumber - b.sequenceNumber;
        };
      case clsPrjTabFldEN.con_MemoInTab:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.memoInTab == null) return -1;
          if (b.memoInTab == null) return 1;
          return a.memoInTab.localeCompare(b.memoInTab);
        };
      case clsPrjTabFldEN.con_ErrMsg:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsPrjTabFldEN.con_UpdDate:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjTabFldEN.con_UpdUser:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPrjTabFldEN.con_Memo:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTabFld]中不存在!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjTabFldEN.con_mId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return b.mId - a.mId;
        };
      case clsPrjTabFldEN.con_TabId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsPrjTabFldEN.con_FldId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsPrjTabFldEN.con_PrjId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsPrjTabFldEN.con_FieldTypeId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsPrjTabFldEN.con_IsTabNullable:
        return (b: clsPrjTabFldEN) => {
          if (b.isTabNullable == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsTabUnique:
        return (b: clsPrjTabFldEN) => {
          if (b.isTabUnique == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsTabForeignKey:
        return (b: clsPrjTabFldEN) => {
          if (b.isTabForeignKey == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsSortFld:
        return (b: clsPrjTabFldEN) => {
          if (b.isSortFld == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsGeneProp:
        return (b: clsPrjTabFldEN) => {
          if (b.isGeneProp == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_IsForExtendClass:
        return (b: clsPrjTabFldEN) => {
          if (b.isForExtendClass == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_CtlTypeIdDu:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.ctlTypeIdDu == null) return -1;
          if (a.ctlTypeIdDu == null) return 1;
          return b.ctlTypeIdDu.localeCompare(a.ctlTypeIdDu);
        };
      case clsPrjTabFldEN.con_FldDispUnitStyleId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.fldDispUnitStyleId == null) return -1;
          if (a.fldDispUnitStyleId == null) return 1;
          return b.fldDispUnitStyleId.localeCompare(a.fldDispUnitStyleId);
        };
      case clsPrjTabFldEN.con_InFldId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.inFldId == null) return -1;
          if (a.inFldId == null) return 1;
          return b.inFldId.localeCompare(a.inFldId);
        };
      case clsPrjTabFldEN.con_DnPathId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.dnPathId == null) return -1;
          if (a.dnPathId == null) return 1;
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsPrjTabFldEN.con_KeyId4Test:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.keyId4Test == null) return -1;
          if (a.keyId4Test == null) return 1;
          return b.keyId4Test.localeCompare(a.keyId4Test);
        };
      case clsPrjTabFldEN.con_DisplayFormat:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.displayFormat == null) return -1;
          if (a.displayFormat == null) return 1;
          return b.displayFormat.localeCompare(a.displayFormat);
        };
      case clsPrjTabFldEN.con_IsParentObj:
        return (b: clsPrjTabFldEN) => {
          if (b.isParentObj == true) return 1;
          else return -1;
        };
      case clsPrjTabFldEN.con_PrimaryTypeId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return b.primaryTypeId.localeCompare(a.primaryTypeId);
        };
      case clsPrjTabFldEN.con_ForeignKeyTabId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.foreignKeyTabId == null) return -1;
          if (a.foreignKeyTabId == null) return 1;
          return b.foreignKeyTabId.localeCompare(a.foreignKeyTabId);
        };
      case clsPrjTabFldEN.con_FldOpTypeId:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return b.fldOpTypeId.localeCompare(a.fldOpTypeId);
        };
      case clsPrjTabFldEN.con_SequenceNumber:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          return b.sequenceNumber - a.sequenceNumber;
        };
      case clsPrjTabFldEN.con_MemoInTab:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.memoInTab == null) return -1;
          if (a.memoInTab == null) return 1;
          return b.memoInTab.localeCompare(a.memoInTab);
        };
      case clsPrjTabFldEN.con_ErrMsg:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsPrjTabFldEN.con_UpdDate:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjTabFldEN.con_UpdUser:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPrjTabFldEN.con_Memo:
        return (a: clsPrjTabFldEN, b: clsPrjTabFldEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTabFld]中不存在!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjTabFld_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjTabFldEN.con_mId:
      return (obj: clsPrjTabFldEN) => {
        return obj.mId === value;
      };
    case clsPrjTabFldEN.con_TabId:
      return (obj: clsPrjTabFldEN) => {
        return obj.tabId === value;
      };
    case clsPrjTabFldEN.con_FldId:
      return (obj: clsPrjTabFldEN) => {
        return obj.fldId === value;
      };
    case clsPrjTabFldEN.con_PrjId:
      return (obj: clsPrjTabFldEN) => {
        return obj.prjId === value;
      };
    case clsPrjTabFldEN.con_FieldTypeId:
      return (obj: clsPrjTabFldEN) => {
        return obj.fieldTypeId === value;
      };
    case clsPrjTabFldEN.con_IsTabNullable:
      return (obj: clsPrjTabFldEN) => {
        return obj.isTabNullable === value;
      };
    case clsPrjTabFldEN.con_IsTabUnique:
      return (obj: clsPrjTabFldEN) => {
        return obj.isTabUnique === value;
      };
    case clsPrjTabFldEN.con_IsTabForeignKey:
      return (obj: clsPrjTabFldEN) => {
        return obj.isTabForeignKey === value;
      };
    case clsPrjTabFldEN.con_IsSortFld:
      return (obj: clsPrjTabFldEN) => {
        return obj.isSortFld === value;
      };
    case clsPrjTabFldEN.con_IsGeneProp:
      return (obj: clsPrjTabFldEN) => {
        return obj.isGeneProp === value;
      };
    case clsPrjTabFldEN.con_IsForExtendClass:
      return (obj: clsPrjTabFldEN) => {
        return obj.isForExtendClass === value;
      };
    case clsPrjTabFldEN.con_CtlTypeIdDu:
      return (obj: clsPrjTabFldEN) => {
        return obj.ctlTypeIdDu === value;
      };
    case clsPrjTabFldEN.con_FldDispUnitStyleId:
      return (obj: clsPrjTabFldEN) => {
        return obj.fldDispUnitStyleId === value;
      };
    case clsPrjTabFldEN.con_InFldId:
      return (obj: clsPrjTabFldEN) => {
        return obj.inFldId === value;
      };
    case clsPrjTabFldEN.con_DnPathId:
      return (obj: clsPrjTabFldEN) => {
        return obj.dnPathId === value;
      };
    case clsPrjTabFldEN.con_KeyId4Test:
      return (obj: clsPrjTabFldEN) => {
        return obj.keyId4Test === value;
      };
    case clsPrjTabFldEN.con_DisplayFormat:
      return (obj: clsPrjTabFldEN) => {
        return obj.displayFormat === value;
      };
    case clsPrjTabFldEN.con_IsParentObj:
      return (obj: clsPrjTabFldEN) => {
        return obj.isParentObj === value;
      };
    case clsPrjTabFldEN.con_PrimaryTypeId:
      return (obj: clsPrjTabFldEN) => {
        return obj.primaryTypeId === value;
      };
    case clsPrjTabFldEN.con_ForeignKeyTabId:
      return (obj: clsPrjTabFldEN) => {
        return obj.foreignKeyTabId === value;
      };
    case clsPrjTabFldEN.con_FldOpTypeId:
      return (obj: clsPrjTabFldEN) => {
        return obj.fldOpTypeId === value;
      };
    case clsPrjTabFldEN.con_SequenceNumber:
      return (obj: clsPrjTabFldEN) => {
        return obj.sequenceNumber === value;
      };
    case clsPrjTabFldEN.con_MemoInTab:
      return (obj: clsPrjTabFldEN) => {
        return obj.memoInTab === value;
      };
    case clsPrjTabFldEN.con_ErrMsg:
      return (obj: clsPrjTabFldEN) => {
        return obj.errMsg === value;
      };
    case clsPrjTabFldEN.con_UpdDate:
      return (obj: clsPrjTabFldEN) => {
        return obj.updDate === value;
      };
    case clsPrjTabFldEN.con_UpdUser:
      return (obj: clsPrjTabFldEN) => {
        return obj.updUser === value;
      };
    case clsPrjTabFldEN.con_Memo:
      return (obj: clsPrjTabFldEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjTabFld]中不存在!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strTabId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function PrjTabFld_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strTabIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strTabIdClassfy) == true) {
    const strMsg = Format('参数:[strTabIdClassfy]不能为空!(In clsPrjTabFldWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabIdClassfy]的长度:[{0}]不正确!(clsPrjTabFldWApi.func)',
      strTabIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsPrjTabFldEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjTabFldEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjTabFldEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objPrjTabFld = await PrjTabFld_GetObjBymIdCache(lngmId, strTabIdClassfy);
  if (objPrjTabFld == null) return '';
  if (objPrjTabFld.GetFldValue(strOutFldName) == null) return '';
  return objPrjTabFld.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strTabId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function PrjTabFld_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strTabIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strTabIdClassfy) == true) {
    const strMsg = Format('参数:[strTabIdClassfy]不能为空!(In clsPrjTabFldWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabIdClassfy]的长度:[{0}]不正确!(clsPrjTabFldWApi.funcKey)',
      strTabIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsPrjTabFldEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrPrjTabFld = await PrjTabFld_GetObjLstCache(strTabIdClassfy);
  if (arrPrjTabFld == null) return [];
  let arrPrjTabFldSel = arrPrjTabFld;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjTabFldSel = arrPrjTabFldSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjTabFldSel = arrPrjTabFldSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjTabFldSel = arrPrjTabFldSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjTabFldSel = arrPrjTabFldSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjTabFldSel = arrPrjTabFldSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjTabFldSel = arrPrjTabFldSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjTabFldSel = arrPrjTabFldSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjTabFldSel = arrPrjTabFldSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjTabFldSel.length == 0) return [];
  return arrPrjTabFldSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabFld_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjTabFldEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
      const objPrjTabFld = PrjTabFld_GetObjFromJsonObj(returnObj);
      return objPrjTabFld;
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjLstClientCache(strTabId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPrjTabFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsPrjTabFldEN.WhereFormat, strTabId);
  } else {
    strWhereCond = Format("TabId='{0}'", strTabId);
  }
  const strKey = Format('{0}_{1}', clsPrjTabFldEN._CurrTabName, strTabId);
  if (IsNullOrEmpty(clsPrjTabFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjTabFldExObjLstCache: Array<clsPrjTabFldEN> = CacheHelper.Get(strKey);
    const arrPrjTabFldObjLstT = PrjTabFld_GetObjLstByJSONObjLst(arrPrjTabFldExObjLstCache);
    return arrPrjTabFldObjLstT;
  }
  try {
    const arrPrjTabFldExObjLst = await PrjTabFld_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjTabFldExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabFldExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjLstlocalStorage(strTabId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPrjTabFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsPrjTabFldEN.WhereFormat, strTabId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPrjTabFldEN.con_TabId, strTabId);
  }
  const strKey = Format('{0}_{1}', clsPrjTabFldEN._CurrTabName, strTabId);
  if (IsNullOrEmpty(clsPrjTabFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjTabFldExObjLstCache: Array<clsPrjTabFldEN> = JSON.parse(strTempObjLst);
    const arrPrjTabFldObjLstT = PrjTabFld_GetObjLstByJSONObjLst(arrPrjTabFldExObjLstCache);
    return arrPrjTabFldObjLstT;
  }
  try {
    const arrPrjTabFldExObjLst = await PrjTabFld_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsPrjTabFldEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrPrjTabFldExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabFldExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjLstlocalStoragePureCache(strTabId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPrjTabFldEN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjTabFldObjLstCache: Array<clsPrjTabFldEN> = JSON.parse(strTempObjLst);
    return arrPrjTabFldObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjTabFld_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjTabFldEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
          prjTabFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabFld_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjLstsessionStorage(strTabId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsPrjTabFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsPrjTabFldEN.WhereFormat, strTabId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsPrjTabFldEN.con_TabId, strTabId);
  }
  const strKey = Format('{0}_{1}', clsPrjTabFldEN._CurrTabName, strTabId);
  if (IsNullOrEmpty(clsPrjTabFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjTabFldExObjLstCache: Array<clsPrjTabFldEN> = JSON.parse(strTempObjLst);
    const arrPrjTabFldObjLstT = PrjTabFld_GetObjLstByJSONObjLst(arrPrjTabFldExObjLstCache);
    return arrPrjTabFldObjLstT;
  }
  try {
    const arrPrjTabFldExObjLst = await PrjTabFld_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsPrjTabFldEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjTabFldExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabFldExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjLstsessionStoragePureCache(strTabId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsPrjTabFldEN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjTabFldObjLstCache: Array<clsPrjTabFldEN> = JSON.parse(strTempObjLst);
    return arrPrjTabFldObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjTabFld_GetObjLstCache(strTabId: string): Promise<Array<clsPrjTabFldEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In clsPrjTabFldWApi.PrjTabFld_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确！(clsPrjTabFldWApi.PrjTabFld_GetObjLstCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrPrjTabFldObjLstCache;
  switch (clsPrjTabFldEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstsessionStorage(strTabId);
      break;
    case '03': //localStorage
      arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstlocalStorage(strTabId);
      break;
    case '02': //ClientCache
      arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstClientCache(strTabId);
      break;
    default:
      arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstClientCache(strTabId);
      break;
  }
  return arrPrjTabFldObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjTabFld_GetObjLstPureCache(strTabId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjTabFldObjLstCache;
  switch (clsPrjTabFldEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstsessionStoragePureCache(strTabId);
      break;
    case '03': //localStorage
      arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstlocalStoragePureCache(strTabId);
      break;
    case '02': //ClientCache
      arrPrjTabFldObjLstCache = null;
      break;
    default:
      arrPrjTabFldObjLstCache = null;
      break;
  }
  return arrPrjTabFldObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjTabFld_GetSubObjLstCache(
  objPrjTabFldCond: ConditionCollection,
  strTabId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  let arrPrjTabFldSel = arrPrjTabFldObjLstCache;
  if (objPrjTabFldCond.GetConditions().length == 0) return arrPrjTabFldSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objPrjTabFldCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjTabFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjTabFldCond),
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabFldEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function PrjTabFld_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsPrjTabFldEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
          prjTabFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabFld_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjLstBymIdLstCache(arrmIdLst: Array<number>, strTabId: string) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
    const arrPrjTabFldSel = arrPrjTabFldObjLstCache.filter((x) => arrmIdLst.indexOf(x.mId) > -1);
    return arrPrjTabFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjTabFldEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
          prjTabFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabFld_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjTabFldEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
          prjTabFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabFld_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strTabId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTabFldEN>();
  const arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  if (arrPrjTabFldObjLstCache.length == 0) return arrPrjTabFldObjLstCache;
  let arrPrjTabFldSel = arrPrjTabFldObjLstCache;
  const objPrjTabFldCond = objPagerPara.conditionCollection;
  if (objPrjTabFldCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsPrjTabFldEN>();
  }
  //console.log("clsPrjTabFldWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objPrjTabFldCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjTabFldSel.length == 0) return arrPrjTabFldSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjTabFldSel = arrPrjTabFldSel.sort(PrjTabFld_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjTabFldSel = arrPrjTabFldSel.sort(objPagerPara.sortFun);
    }
    arrPrjTabFldSel = arrPrjTabFldSel.slice(intStart, intEnd);
    return arrPrjTabFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabFldEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjTabFld_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabFldEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTabFldEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
          prjTabFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabFld_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_DelPrjTabFldsAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelPrjTabFldsAsync';
  const strAction = 'DelPrjTabFlds';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strTabId: string,
): Promise<Array<clsPrjTabFldENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrPrjTabFldObjLst = await PrjTabFld_GetObjLstCache(strTabId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsPrjTabFldENEx>();
  const arrPrjTabFldExObjLst = arrPrjTabFldObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.tabId}`;
    if (prjTabFldCache[cacheKey]) {
      const oldObj = prjTabFldCache[cacheKey];
      return oldObj;
    } else {
      const newObj = PrjTabFld_CopyToEx(obj);
      arrNewObj.push(newObj);
      prjTabFldCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await PrjTabFld_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjTabFldEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrPrjTabFldExObjLst) {
      await PrjTabFld_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.tabId}`;
      prjTabFldCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrPrjTabFldExObjLst.length == 0) return arrPrjTabFldExObjLst;
  let arrPrjTabFldSel: Array<clsPrjTabFldENEx> = arrPrjTabFldExObjLst;
  const objPrjTabFldCond = objPagerPara.conditionCollection;
  if (objPrjTabFldCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrPrjTabFldExObjLst;
  }
  try {
    for (const objCondition of objPrjTabFldCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjTabFldSel.length == 0) return arrPrjTabFldSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrPrjTabFldSel = arrPrjTabFldSel.sort(
        PrjTabFld_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjTabFldSel = arrPrjTabFldSel.sort(objPagerPara.sortFun);
    }
    arrPrjTabFldSel = arrPrjTabFldSel.slice(intStart, intEnd);
    return arrPrjTabFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabFldENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objPrjTabFldENS:源对象
 * @returns 目标对象=>clsPrjTabFldEN:objPrjTabFldENT
 **/
export function PrjTabFld_CopyToEx(objPrjTabFldENS: clsPrjTabFldEN): clsPrjTabFldENEx {
  const strThisFuncName = PrjTabFld_CopyToEx.name;
  const objPrjTabFldENT = new clsPrjTabFldENEx();
  try {
    ObjectAssign(objPrjTabFldENT, objPrjTabFldENS);
    return objPrjTabFldENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabFldENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjTabFld_FuncMapByFldName(strFldName: string, objPrjTabFldEx: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjTabFldEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjTabFldENEx.con_FldName:
      return PrjTabFld_FuncMapFldName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_Caption:
      return PrjTabFld_FuncMapCaption(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_PrimaryTypeName:
      return PrjTabFld_FuncMapPrimaryTypeName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_FieldTypeName:
      return PrjTabFld_FuncMapFieldTypeName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_DataTypeName:
      return PrjTabFld_FuncMapDataTypeName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_FldLength:
      return PrjTabFld_FuncMapFldLength(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_TabName:
      return PrjTabFld_FuncMapTabName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_ForeignKeyTabName:
      return PrjTabFld_FuncMapForeignKeyTabName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_DataTypeId:
      return PrjTabFld_FuncMapDataTypeId(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_FldPrecision:
      return PrjTabFld_FuncMapFldPrecision(objPrjTabFldEx);
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
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabFld_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabFldENEx.con_FldName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsPrjTabFldENEx.con_FldNameEx:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.fldNameEx === null && b.fldNameEx === null) return 0;
          if (a.fldNameEx === null) return -1;
          if (b.fldNameEx === null) return 1;
          return a.fldNameEx.localeCompare(b.fldNameEx);
        };
      case clsPrjTabFldENEx.con_Caption:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.caption.localeCompare(b.caption);
        };
      case clsPrjTabFldENEx.con_PrimaryTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.primaryTypeName.localeCompare(b.primaryTypeName);
        };
      case clsPrjTabFldENEx.con_FieldTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.fieldTypeName === null && b.fieldTypeName === null) return 0;
          if (a.fieldTypeName === null) return -1;
          if (b.fieldTypeName === null) return 1;
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsPrjTabFldENEx.con_DataTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsPrjTabFldENEx.con_FldLength:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.fldLength - b.fldLength;
        };
      case clsPrjTabFldENEx.con_TabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsPrjTabFldENEx.con_ForeignKeyTabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.foreignKeyTabName.localeCompare(b.foreignKeyTabName);
        };
      case clsPrjTabFldENEx.con_DataTypeId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsPrjTabFldENEx.con_FldPrecision:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.fldPrecision - b.fldPrecision;
        };
      case clsPrjTabFldENEx.con_ErrorLevelId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.errorLevelId - b.errorLevelId;
        };
      case clsPrjTabFldENEx.con_TabCheckErrorTypeId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.tabCheckErrorTypeId.localeCompare(b.tabCheckErrorTypeId);
        };
      case clsPrjTabFldENEx.con_TypeNameSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.typeNameSql === null && b.typeNameSql === null) return 0;
          if (a.typeNameSql === null) return -1;
          if (b.typeNameSql === null) return 1;
          return a.typeNameSql.localeCompare(b.typeNameSql);
        };
      case clsPrjTabFldENEx.con_LengthSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.lengthSql - b.lengthSql;
        };
      case clsPrjTabFldENEx.con_PrecisionSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.precisionSql - b.precisionSql;
        };
      case clsPrjTabFldENEx.con_IsNullableSql:
        return (a: clsPrjTabFldENEx) => {
          if (a.isNullableSql == true) return 1;
          else return -1;
        };
      case clsPrjTabFldENEx.con_SourceTabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.sourceTabName === null && b.sourceTabName === null) return 0;
          if (a.sourceTabName === null) return -1;
          if (b.sourceTabName === null) return 1;
          return a.sourceTabName.localeCompare(b.sourceTabName);
        };
      case clsPrjTabFldENEx.con_ConvFldName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.convFldName.localeCompare(b.convFldName);
        };
      case clsPrjTabFldENEx.con_TrClass:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsPrjTabFldENEx.con_TdClass:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return -1;
          if (b.tdClass === null) return 1;
          return a.tdClass.localeCompare(b.tdClass);
        };
      case clsPrjTabFldENEx.con_IsNeedAddConvFldName:
        return (a: clsPrjTabFldENEx) => {
          if (a.isNeedAddConvFldName == true) return 1;
          else return -1;
        };
      case clsPrjTabFldENEx.con_DnPathDivStr:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.dnPathDivStr === null && b.dnPathDivStr === null) return 0;
          if (a.dnPathDivStr === null) return -1;
          if (b.dnPathDivStr === null) return 1;
          return a.dnPathDivStr.localeCompare(b.dnPathDivStr);
        };
      case clsPrjTabFldENEx.con_Checked:
        return (a: clsPrjTabFldENEx) => {
          if (a.checked == true) return 1;
          else return -1;
        };
      case clsPrjTabFldENEx.con_CmPrjId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        return PrjTabFld_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjTabFldENEx.con_FldName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsPrjTabFldENEx.con_FldNameEx:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.fldNameEx === null && b.fldNameEx === null) return 0;
          if (a.fldNameEx === null) return 1;
          if (b.fldNameEx === null) return -1;
          return b.fldNameEx.localeCompare(a.fldNameEx);
        };
      case clsPrjTabFldENEx.con_Caption:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.caption.localeCompare(a.caption);
        };
      case clsPrjTabFldENEx.con_PrimaryTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.primaryTypeName.localeCompare(a.primaryTypeName);
        };
      case clsPrjTabFldENEx.con_FieldTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.fieldTypeName === null && b.fieldTypeName === null) return 0;
          if (a.fieldTypeName === null) return 1;
          if (b.fieldTypeName === null) return -1;
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsPrjTabFldENEx.con_DataTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsPrjTabFldENEx.con_FldLength:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.fldLength - a.fldLength;
        };
      case clsPrjTabFldENEx.con_TabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsPrjTabFldENEx.con_ForeignKeyTabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.foreignKeyTabName.localeCompare(a.foreignKeyTabName);
        };
      case clsPrjTabFldENEx.con_DataTypeId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsPrjTabFldENEx.con_FldPrecision:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.fldPrecision - a.fldPrecision;
        };
      case clsPrjTabFldENEx.con_ErrorLevelId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.errorLevelId - a.errorLevelId;
        };
      case clsPrjTabFldENEx.con_TabCheckErrorTypeId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.tabCheckErrorTypeId.localeCompare(a.tabCheckErrorTypeId);
        };
      case clsPrjTabFldENEx.con_TypeNameSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.typeNameSql === null && b.typeNameSql === null) return 0;
          if (a.typeNameSql === null) return 1;
          if (b.typeNameSql === null) return -1;
          return b.typeNameSql.localeCompare(a.typeNameSql);
        };
      case clsPrjTabFldENEx.con_LengthSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.lengthSql - a.lengthSql;
        };
      case clsPrjTabFldENEx.con_PrecisionSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.precisionSql - a.precisionSql;
        };
      case clsPrjTabFldENEx.con_IsNullableSql:
        return (b: clsPrjTabFldENEx) => {
          if (b.isNullableSql == true) return 1;
          else return -1;
        };
      case clsPrjTabFldENEx.con_SourceTabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.sourceTabName === null && b.sourceTabName === null) return 0;
          if (a.sourceTabName === null) return 1;
          if (b.sourceTabName === null) return -1;
          return b.sourceTabName.localeCompare(a.sourceTabName);
        };
      case clsPrjTabFldENEx.con_ConvFldName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.convFldName.localeCompare(a.convFldName);
        };
      case clsPrjTabFldENEx.con_TrClass:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsPrjTabFldENEx.con_TdClass:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return 1;
          if (b.tdClass === null) return -1;
          return b.tdClass.localeCompare(a.tdClass);
        };
      case clsPrjTabFldENEx.con_IsNeedAddConvFldName:
        return (b: clsPrjTabFldENEx) => {
          if (b.isNeedAddConvFldName == true) return 1;
          else return -1;
        };
      case clsPrjTabFldENEx.con_DnPathDivStr:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.dnPathDivStr === null && b.dnPathDivStr === null) return 0;
          if (a.dnPathDivStr === null) return 1;
          if (b.dnPathDivStr === null) return -1;
          return b.dnPathDivStr.localeCompare(a.dnPathDivStr);
        };
      case clsPrjTabFldENEx.con_Checked:
        return (b: clsPrjTabFldENEx) => {
          if (b.checked == true) return 1;
          else return -1;
        };
      case clsPrjTabFldENEx.con_CmPrjId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        return PrjTabFld_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapFldName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.fldName) == true) {
      const vFieldTabSimFldId = objPrjTabFld.fldId;
      if (IsNullOrEmpty(objPrjTabFld.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objPrjTabFld.prjId,
      );
      objPrjTabFld.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapCaption(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapCaption.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.caption) == true) {
      const vFieldTabSimFldId = objPrjTabFld.fldId;
      if (IsNullOrEmpty(objPrjTabFld.prjId) == true) {
        const strMsg = `函数映射[Caption]数据出错,prjId不能为空!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimCaption = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_Caption,
        vFieldTabSimFldId,
        objPrjTabFld.prjId,
      );
      objPrjTabFld.caption = vFieldTabSimCaption;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001377)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapPrimaryTypeName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapPrimaryTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.primaryTypeName) == true) {
      const PrimaryTypePrimaryTypeId = objPrjTabFld.primaryTypeId;
      const PrimaryTypePrimaryTypeName = await PrimaryType_func(
        clsPrimaryTypeEN.con_PrimaryTypeId,
        clsPrimaryTypeEN.con_PrimaryTypeName,
        PrimaryTypePrimaryTypeId,
      );
      objPrjTabFld.primaryTypeName = PrimaryTypePrimaryTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001378)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapFieldTypeName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapFieldTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.fieldTypeName) == true) {
      const FieldTypeFieldTypeId = objPrjTabFld.fieldTypeId;
      const FieldTypeFieldTypeName = await FieldType_func(
        clsFieldTypeEN.con_FieldTypeId,
        clsFieldTypeEN.con_FieldTypeName,
        FieldTypeFieldTypeId,
      );
      objPrjTabFld.fieldTypeName = FieldTypeFieldTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001348)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapDataTypeName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.dataTypeName) == true) {
      const vFieldTabSimFldId = objPrjTabFld.fldId;
      if (IsNullOrEmpty(objPrjTabFld.prjId) == true) {
        const strMsg = `函数映射[DataTypeName]数据出错,prjId不能为空!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimDataTypeId = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_DataTypeId,
        vFieldTabSimFldId,
        objPrjTabFld.prjId,
      );
      const DataTypeAbbrDataTypeId = vFieldTabSimDataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objPrjTabFld.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001349)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapFldLength(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapFldLength.name;
  try {
    if (objPrjTabFld.fldLength == 0) {
      const vFieldTabSim2FldId = objPrjTabFld.fldId;
      if (IsNullOrEmpty(objPrjTabFld.prjId) == true) {
        const strMsg = `函数映射[FldLength]数据出错,prjId不能为空!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSim2FldLength = await vFieldTab_Sim2_func(
        clsvFieldTab_Sim2EN.con_FldId,
        clsvFieldTab_Sim2EN.con_FldLength,
        vFieldTabSim2FldId,
        objPrjTabFld.prjId,
      );
      objPrjTabFld.fldLength = vFieldTabSim2FldLength;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001379)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapTabName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.tabName) == true) {
      const vPrjTabSimTabId = objPrjTabFld.tabId;
      if (IsNullOrEmpty(objPrjTabFld.prjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,prjId不能为空!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objPrjTabFld.prjId,
      );
      objPrjTabFld.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapDataTypeId(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapDataTypeId.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.dataTypeId) == true) {
      const vFieldTabSimFldId = objPrjTabFld.fldId;
      if (IsNullOrEmpty(objPrjTabFld.prjId) == true) {
        const strMsg = `函数映射[DataTypeId]数据出错,prjId不能为空!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimDataTypeId = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_DataTypeId,
        vFieldTabSimFldId,
        objPrjTabFld.prjId,
      );
      objPrjTabFld.dataTypeId = vFieldTabSimDataTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001370)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapFldPrecision(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapFldPrecision.name;
  try {
    if (objPrjTabFld.fldPrecision == 0) {
      const vFieldTabSim2FldId = objPrjTabFld.fldId;
      if (IsNullOrEmpty(objPrjTabFld.prjId) == true) {
        const strMsg = `函数映射[FldPrecision]数据出错,prjId不能为空!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSim2FldPrecision = await vFieldTab_Sim2_func(
        clsvFieldTab_Sim2EN.con_FldId,
        clsvFieldTab_Sim2EN.con_FldPrecision,
        vFieldTabSim2FldId,
        objPrjTabFld.prjId,
      );
      objPrjTabFld.fldPrecision = vFieldTabSim2FldPrecision;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001380)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFld_FuncMapForeignKeyTabName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFld_FuncMapForeignKeyTabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.foreignKeyTabName) == true) {
      const vPrjTabSimTabId = objPrjTabFld.foreignKeyTabId;
      if (IsNullOrEmpty(objPrjTabFld.prjId) == true) {
        const strMsg = `函数映射[ForeignKeyTabName]数据出错,prjId不能为空!(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objPrjTabFld.prjId,
      );
      objPrjTabFld.foreignKeyTabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001381)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_DelPrjTabFldsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelPrjTabFldsByCondAsync';
  const strAction = 'DelPrjTabFldsByCond';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabFld_AddNewRecordAsync(
  objPrjTabFldEN: clsPrjTabFldEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjTabFldEN);
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabFldEN, config);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabFld_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabFld_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjTabFldEN);
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabFld_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjTabFldEN);
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_AddNewObjSave(
  objPrjTabFldEN: clsPrjTabFldEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjTabFld_CheckPropertyNew(objPrjTabFldEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjTabFld_CheckUniCond4Add(objPrjTabFldEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await PrjTabFld_AddNewRecordAsync(objPrjTabFldEN);
    if (returnBool == true) {
      PrjTabFld_ReFreshCache(objPrjTabFldEN.tabId);
    } else {
      const strInfo = `添加[工程表字段(PrjTabFld)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objPrjTabFldEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function PrjTabFld_CheckUniCond4Add(objPrjTabFldEN: clsPrjTabFldEN): Promise<boolean> {
  const strUniquenessCondition = PrjTabFld_GetUniCondStr(objPrjTabFldEN);
  const bolIsExistCondition = await PrjTabFld_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjTabFld_CheckUniCond4Update(
  objPrjTabFldEN: clsPrjTabFldEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjTabFld_GetUniCondStr4Update(objPrjTabFldEN);
  const bolIsExistCondition = await PrjTabFld_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjTabFld_UpdateObjSave(objPrjTabFldEN: clsPrjTabFldEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjTabFldEN.sfUpdFldSetStr = objPrjTabFldEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrjTabFldEN.mId == 0 || objPrjTabFldEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjTabFld_CheckProperty4Update(objPrjTabFldEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjTabFld_CheckUniCond4Update(objPrjTabFldEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await PrjTabFld_UpdateRecordAsync(objPrjTabFldEN);
    if (returnBool == true) {
      PrjTabFld_ReFreshCache(objPrjTabFldEN.tabId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjTabFld_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objPrjTabFldEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabFld_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjTabFldEN);
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabFld_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objPrjTabFldEN);
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjTabFld_AddNewRecordWithReturnKeyAsync(
  objPrjTabFldEN: clsPrjTabFldEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabFldEN, config);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTabFld_UpdateRecordAsync(
  objPrjTabFldEN: clsPrjTabFldEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjTabFldEN.sfUpdFldSetStr === undefined ||
    objPrjTabFldEN.sfUpdFldSetStr === null ||
    objPrjTabFldEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabFldEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabFldEN, config);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTabFld_EditRecordExAsync(
  objPrjTabFldEN: clsPrjTabFldEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjTabFldEN.sfUpdFldSetStr === undefined ||
    objPrjTabFldEN.sfUpdFldSetStr === null ||
    objPrjTabFldEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabFldEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabFldEN, config);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabFld_UpdateWithConditionAsync(
  objPrjTabFldEN: clsPrjTabFldEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjTabFldEN.sfUpdFldSetStr === undefined ||
    objPrjTabFldEN.sfUpdFldSetStr === null ||
    objPrjTabFldEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabFldEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);
  objPrjTabFldEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabFldEN, config);
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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_IsExistRecordCache(
  objPrjTabFldCond: ConditionCollection,
  strTabId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  if (arrPrjTabFldObjLstCache == null) return false;
  let arrPrjTabFldSel = arrPrjTabFldObjLstCache;
  if (objPrjTabFldCond.GetConditions().length == 0)
    return arrPrjTabFldSel.length > 0 ? true : false;
  try {
    for (const objCondition of objPrjTabFldCond.GetConditions()) {
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
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjTabFldSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjTabFldCond),
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_IsExistCache(lngmId: number, strTabId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  if (arrPrjTabFldObjLstCache == null) return false;
  try {
    const arrPrjTabFldSel = arrPrjTabFldObjLstCache.filter((x) => x.mId == lngmId);
    if (arrPrjTabFldSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
 * @param objPrjTabFldCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjTabFld_GetRecCountByCondCache(
  objPrjTabFldCond: ConditionCollection,
  strTabId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjTabFldObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  if (arrPrjTabFldObjLstCache == null) return 0;
  let arrPrjTabFldSel = arrPrjTabFldObjLstCache;
  if (objPrjTabFldCond.GetConditions().length == 0) return arrPrjTabFldSel.length;
  try {
    for (const objCondition of objPrjTabFldCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjTabFldSel = arrPrjTabFldSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjTabFldSel = arrPrjTabFldSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjTabFldSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjTabFldCond),
      prjTabFld_ConstructorName,
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
export async function PrjTabFld_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjTabFld_Controller, strAction);

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
        prjTabFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabFld_ConstructorName,
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
export function PrjTabFld_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjTabFld_ReFreshCache(strTabId: string): void {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsPrjTabFldWApi.clsPrjTabFldWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsPrjTabFldWApi.clsPrjTabFldWApi.ReFreshCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsPrjTabFldEN._CurrTabName, strTabId);
  switch (clsPrjTabFldEN.CacheModeId) {
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
  clsPrjTabFldEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PrjTabFld_ReFreshThisCache(strTabId: string): void {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsPrjTabFldWApi.PrjTabFld_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsPrjTabFldWApi.PrjTabFld_ReFreshThisCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsPrjTabFldEN._CurrTabName, strTabId);
    switch (clsPrjTabFldEN.CacheModeId) {
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
    clsPrjTabFldEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function PrjTabFld_GetLastRefreshTime(): string {
  if (clsPrjTabFldEN._RefreshTimeLst.length == 0) return '';
  return clsPrjTabFldEN._RefreshTimeLst[clsPrjTabFldEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTabFld_CheckPropertyNew(pobjPrjTabFldEN: clsPrjTabFldEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjTabFldEN.tabId) === true || pobjPrjTabFldEN.tabId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.fldId) === true || pobjPrjTabFldEN.fldId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[字段Id]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.prjId) === true || pobjPrjTabFldEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fieldTypeId) === true ||
    pobjPrjTabFldEN.fieldTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段类型Id]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabFldEN.isTabNullable ||
    (pobjPrjTabFldEN.isTabNullable != null && pobjPrjTabFldEN.isTabNullable.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否表中可空]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabFldEN.isForExtendClass ||
    (pobjPrjTabFldEN.isForExtendClass != null && pobjPrjTabFldEN.isForExtendClass.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[用于扩展类]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.primaryTypeId) === true ||
    pobjPrjTabFldEN.primaryTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[主键类型ID]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldOpTypeId) === true ||
    pobjPrjTabFldEN.fldOpTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段操作类型Id]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjTabFldEN.tabId) == false && GetStrLen(pobjPrjTabFldEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.tabId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.fldId) == false && GetStrLen(pobjPrjTabFldEN.fldId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.fldId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.prjId) == false && GetStrLen(pobjPrjTabFldEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.prjId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fieldTypeId) == false &&
    GetStrLen(pobjPrjTabFldEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.fieldTypeId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.ctlTypeIdDu) == false &&
    GetStrLen(pobjPrjTabFldEN.ctlTypeIdDu) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型Id_du(ctlTypeIdDu)]的长度不能超过2(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.ctlTypeIdDu}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldDispUnitStyleId) == false &&
    GetStrLen(pobjPrjTabFldEN.fldDispUnitStyleId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段显示单元样式Id(fldDispUnitStyleId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.fldDispUnitStyleId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.inFldId) == false && GetStrLen(pobjPrjTabFldEN.inFldId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[In字段Id(inFldId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.inFldId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.dnPathId) == false && GetStrLen(pobjPrjTabFldEN.dnPathId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[DN路径Id(dnPathId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.dnPathId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.keyId4Test) == false &&
    GetStrLen(pobjPrjTabFldEN.keyId4Test) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[测试关键字Id(keyId4Test)]的长度不能超过50(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.keyId4Test}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.displayFormat) == false &&
    GetStrLen(pobjPrjTabFldEN.displayFormat) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[显示格式(displayFormat)]的长度不能超过50(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.displayFormat}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.primaryTypeId) == false &&
    GetStrLen(pobjPrjTabFldEN.primaryTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.primaryTypeId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.foreignKeyTabId) == false &&
    GetStrLen(pobjPrjTabFldEN.foreignKeyTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[外键表ID(foreignKeyTabId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.foreignKeyTabId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldOpTypeId) == false &&
    GetStrLen(pobjPrjTabFldEN.fldOpTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段操作类型Id(fldOpTypeId)]的长度不能超过4(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.fldOpTypeId}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.memoInTab) == false &&
    GetStrLen(pobjPrjTabFldEN.memoInTab) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表中说明(memoInTab)]的长度不能超过1000(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.memoInTab}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.errMsg) == false && GetStrLen(pobjPrjTabFldEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.errMsg}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.updDate) == false && GetStrLen(pobjPrjTabFldEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.updDate}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.updUser) == false && GetStrLen(pobjPrjTabFldEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.updUser}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.memo) == false && GetStrLen(pobjPrjTabFldEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.memo}(clsPrjTabFldBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPrjTabFldEN.mId &&
    undefined !== pobjPrjTabFldEN.mId &&
    tzDataType.isNumber(pobjPrjTabFldEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjPrjTabFldEN.mId}], 非法,应该为数值型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.tabId) == false &&
    undefined !== pobjPrjTabFldEN.tabId &&
    tzDataType.isString(pobjPrjTabFldEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjPrjTabFldEN.tabId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldId) == false &&
    undefined !== pobjPrjTabFldEN.fldId &&
    tzDataType.isString(pobjPrjTabFldEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjPrjTabFldEN.fldId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.prjId) == false &&
    undefined !== pobjPrjTabFldEN.prjId &&
    tzDataType.isString(pobjPrjTabFldEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjPrjTabFldEN.prjId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fieldTypeId) == false &&
    undefined !== pobjPrjTabFldEN.fieldTypeId &&
    tzDataType.isString(pobjPrjTabFldEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段类型Id(fieldTypeId)]的值:[${pobjPrjTabFldEN.fieldTypeId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isTabNullable &&
    undefined !== pobjPrjTabFldEN.isTabNullable &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isTabNullable) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否表中可空(isTabNullable)]的值:[${pobjPrjTabFldEN.isTabNullable}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isTabUnique &&
    undefined !== pobjPrjTabFldEN.isTabUnique &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isTabUnique) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否表中唯一(isTabUnique)]的值:[${pobjPrjTabFldEN.isTabUnique}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isTabForeignKey &&
    undefined !== pobjPrjTabFldEN.isTabForeignKey &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isTabForeignKey) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否表外键(isTabForeignKey)]的值:[${pobjPrjTabFldEN.isTabForeignKey}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isSortFld &&
    undefined !== pobjPrjTabFldEN.isSortFld &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isSortFld) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否排序字段(isSortFld)]的值:[${pobjPrjTabFldEN.isSortFld}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isGeneProp &&
    undefined !== pobjPrjTabFldEN.isGeneProp &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isGeneProp) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否生成属性(isGeneProp)]的值:[${pobjPrjTabFldEN.isGeneProp}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isForExtendClass &&
    undefined !== pobjPrjTabFldEN.isForExtendClass &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isForExtendClass) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用于扩展类(isForExtendClass)]的值:[${pobjPrjTabFldEN.isForExtendClass}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.ctlTypeIdDu) == false &&
    undefined !== pobjPrjTabFldEN.ctlTypeIdDu &&
    tzDataType.isString(pobjPrjTabFldEN.ctlTypeIdDu) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型Id_du(ctlTypeIdDu)]的值:[${pobjPrjTabFldEN.ctlTypeIdDu}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldDispUnitStyleId) == false &&
    undefined !== pobjPrjTabFldEN.fldDispUnitStyleId &&
    tzDataType.isString(pobjPrjTabFldEN.fldDispUnitStyleId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段显示单元样式Id(fldDispUnitStyleId)]的值:[${pobjPrjTabFldEN.fldDispUnitStyleId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.inFldId) == false &&
    undefined !== pobjPrjTabFldEN.inFldId &&
    tzDataType.isString(pobjPrjTabFldEN.inFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[In字段Id(inFldId)]的值:[${pobjPrjTabFldEN.inFldId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.dnPathId) == false &&
    undefined !== pobjPrjTabFldEN.dnPathId &&
    tzDataType.isString(pobjPrjTabFldEN.dnPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DN路径Id(dnPathId)]的值:[${pobjPrjTabFldEN.dnPathId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.keyId4Test) == false &&
    undefined !== pobjPrjTabFldEN.keyId4Test &&
    tzDataType.isString(pobjPrjTabFldEN.keyId4Test) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[测试关键字Id(keyId4Test)]的值:[${pobjPrjTabFldEN.keyId4Test}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.displayFormat) == false &&
    undefined !== pobjPrjTabFldEN.displayFormat &&
    tzDataType.isString(pobjPrjTabFldEN.displayFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[显示格式(displayFormat)]的值:[${pobjPrjTabFldEN.displayFormat}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isParentObj &&
    undefined !== pobjPrjTabFldEN.isParentObj &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isParentObj) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否父对象(isParentObj)]的值:[${pobjPrjTabFldEN.isParentObj}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.primaryTypeId) == false &&
    undefined !== pobjPrjTabFldEN.primaryTypeId &&
    tzDataType.isString(pobjPrjTabFldEN.primaryTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[主键类型ID(primaryTypeId)]的值:[${pobjPrjTabFldEN.primaryTypeId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.foreignKeyTabId) == false &&
    undefined !== pobjPrjTabFldEN.foreignKeyTabId &&
    tzDataType.isString(pobjPrjTabFldEN.foreignKeyTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[外键表ID(foreignKeyTabId)]的值:[${pobjPrjTabFldEN.foreignKeyTabId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldOpTypeId) == false &&
    undefined !== pobjPrjTabFldEN.fldOpTypeId &&
    tzDataType.isString(pobjPrjTabFldEN.fldOpTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段操作类型Id(fldOpTypeId)]的值:[${pobjPrjTabFldEN.fldOpTypeId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.sequenceNumber &&
    undefined !== pobjPrjTabFldEN.sequenceNumber &&
    tzDataType.isNumber(pobjPrjTabFldEN.sequenceNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[顺序号(sequenceNumber)]的值:[${pobjPrjTabFldEN.sequenceNumber}], 非法,应该为数值型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.memoInTab) == false &&
    undefined !== pobjPrjTabFldEN.memoInTab &&
    tzDataType.isString(pobjPrjTabFldEN.memoInTab) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表中说明(memoInTab)]的值:[${pobjPrjTabFldEN.memoInTab}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.errMsg) == false &&
    undefined !== pobjPrjTabFldEN.errMsg &&
    tzDataType.isString(pobjPrjTabFldEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjPrjTabFldEN.errMsg}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.updDate) == false &&
    undefined !== pobjPrjTabFldEN.updDate &&
    tzDataType.isString(pobjPrjTabFldEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPrjTabFldEN.updDate}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.updUser) == false &&
    undefined !== pobjPrjTabFldEN.updUser &&
    tzDataType.isString(pobjPrjTabFldEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjPrjTabFldEN.updUser}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.memo) == false &&
    undefined !== pobjPrjTabFldEN.memo &&
    tzDataType.isString(pobjPrjTabFldEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjTabFldEN.memo}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.tabId) == false &&
    pobjPrjTabFldEN.tabId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.tabId) != 8
  ) {
    throw '(errid:Watl000415)字段[表ID]作为外键字段,长度应该为8(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldId) == false &&
    pobjPrjTabFldEN.fldId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.fldId) != 8
  ) {
    throw '(errid:Watl000415)字段[字段Id]作为外键字段,长度应该为8(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.prjId) == false &&
    pobjPrjTabFldEN.prjId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fieldTypeId) == false &&
    pobjPrjTabFldEN.fieldTypeId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.fieldTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[字段类型Id]作为外键字段,长度应该为2(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.inFldId) == false &&
    pobjPrjTabFldEN.inFldId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.inFldId) != 8
  ) {
    throw '(errid:Watl000415)字段[In字段Id]作为外键字段,长度应该为8(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.dnPathId) == false &&
    pobjPrjTabFldEN.dnPathId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.dnPathId) != 8
  ) {
    throw '(errid:Watl000415)字段[DN路径Id]作为外键字段,长度应该为8(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.primaryTypeId) == false &&
    pobjPrjTabFldEN.primaryTypeId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.primaryTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[主键类型ID]作为外键字段,长度应该为2(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTabFld_CheckProperty4Update(pobjPrjTabFldEN: clsPrjTabFldEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjTabFldEN.tabId) == false && GetStrLen(pobjPrjTabFldEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.tabId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.fldId) == false && GetStrLen(pobjPrjTabFldEN.fldId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.fldId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.prjId) == false && GetStrLen(pobjPrjTabFldEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.prjId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fieldTypeId) == false &&
    GetStrLen(pobjPrjTabFldEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.fieldTypeId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.ctlTypeIdDu) == false &&
    GetStrLen(pobjPrjTabFldEN.ctlTypeIdDu) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型Id_du(ctlTypeIdDu)]的长度不能超过2(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.ctlTypeIdDu}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldDispUnitStyleId) == false &&
    GetStrLen(pobjPrjTabFldEN.fldDispUnitStyleId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段显示单元样式Id(fldDispUnitStyleId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.fldDispUnitStyleId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.inFldId) == false && GetStrLen(pobjPrjTabFldEN.inFldId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[In字段Id(inFldId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.inFldId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.dnPathId) == false && GetStrLen(pobjPrjTabFldEN.dnPathId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[DN路径Id(dnPathId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.dnPathId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.keyId4Test) == false &&
    GetStrLen(pobjPrjTabFldEN.keyId4Test) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[测试关键字Id(keyId4Test)]的长度不能超过50(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.keyId4Test}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.displayFormat) == false &&
    GetStrLen(pobjPrjTabFldEN.displayFormat) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[显示格式(displayFormat)]的长度不能超过50(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.displayFormat}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.primaryTypeId) == false &&
    GetStrLen(pobjPrjTabFldEN.primaryTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.primaryTypeId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.foreignKeyTabId) == false &&
    GetStrLen(pobjPrjTabFldEN.foreignKeyTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[外键表ID(foreignKeyTabId)]的长度不能超过8(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.foreignKeyTabId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldOpTypeId) == false &&
    GetStrLen(pobjPrjTabFldEN.fldOpTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段操作类型Id(fldOpTypeId)]的长度不能超过4(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.fldOpTypeId}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.memoInTab) == false &&
    GetStrLen(pobjPrjTabFldEN.memoInTab) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表中说明(memoInTab)]的长度不能超过1000(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.memoInTab}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.errMsg) == false && GetStrLen(pobjPrjTabFldEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.errMsg}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.updDate) == false && GetStrLen(pobjPrjTabFldEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.updDate}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.updUser) == false && GetStrLen(pobjPrjTabFldEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.updUser}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabFldEN.memo) == false && GetStrLen(pobjPrjTabFldEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程表字段(PrjTabFld))!值:${pobjPrjTabFldEN.memo}(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPrjTabFldEN.mId &&
    undefined !== pobjPrjTabFldEN.mId &&
    tzDataType.isNumber(pobjPrjTabFldEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjPrjTabFldEN.mId}], 非法,应该为数值型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.tabId) == false &&
    undefined !== pobjPrjTabFldEN.tabId &&
    tzDataType.isString(pobjPrjTabFldEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjPrjTabFldEN.tabId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldId) == false &&
    undefined !== pobjPrjTabFldEN.fldId &&
    tzDataType.isString(pobjPrjTabFldEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjPrjTabFldEN.fldId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.prjId) == false &&
    undefined !== pobjPrjTabFldEN.prjId &&
    tzDataType.isString(pobjPrjTabFldEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjPrjTabFldEN.prjId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fieldTypeId) == false &&
    undefined !== pobjPrjTabFldEN.fieldTypeId &&
    tzDataType.isString(pobjPrjTabFldEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段类型Id(fieldTypeId)]的值:[${pobjPrjTabFldEN.fieldTypeId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isTabNullable &&
    undefined !== pobjPrjTabFldEN.isTabNullable &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isTabNullable) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否表中可空(isTabNullable)]的值:[${pobjPrjTabFldEN.isTabNullable}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isTabUnique &&
    undefined !== pobjPrjTabFldEN.isTabUnique &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isTabUnique) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否表中唯一(isTabUnique)]的值:[${pobjPrjTabFldEN.isTabUnique}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isTabForeignKey &&
    undefined !== pobjPrjTabFldEN.isTabForeignKey &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isTabForeignKey) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否表外键(isTabForeignKey)]的值:[${pobjPrjTabFldEN.isTabForeignKey}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isSortFld &&
    undefined !== pobjPrjTabFldEN.isSortFld &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isSortFld) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否排序字段(isSortFld)]的值:[${pobjPrjTabFldEN.isSortFld}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isGeneProp &&
    undefined !== pobjPrjTabFldEN.isGeneProp &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isGeneProp) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否生成属性(isGeneProp)]的值:[${pobjPrjTabFldEN.isGeneProp}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isForExtendClass &&
    undefined !== pobjPrjTabFldEN.isForExtendClass &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isForExtendClass) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用于扩展类(isForExtendClass)]的值:[${pobjPrjTabFldEN.isForExtendClass}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.ctlTypeIdDu) == false &&
    undefined !== pobjPrjTabFldEN.ctlTypeIdDu &&
    tzDataType.isString(pobjPrjTabFldEN.ctlTypeIdDu) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型Id_du(ctlTypeIdDu)]的值:[${pobjPrjTabFldEN.ctlTypeIdDu}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldDispUnitStyleId) == false &&
    undefined !== pobjPrjTabFldEN.fldDispUnitStyleId &&
    tzDataType.isString(pobjPrjTabFldEN.fldDispUnitStyleId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段显示单元样式Id(fldDispUnitStyleId)]的值:[${pobjPrjTabFldEN.fldDispUnitStyleId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.inFldId) == false &&
    undefined !== pobjPrjTabFldEN.inFldId &&
    tzDataType.isString(pobjPrjTabFldEN.inFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[In字段Id(inFldId)]的值:[${pobjPrjTabFldEN.inFldId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.dnPathId) == false &&
    undefined !== pobjPrjTabFldEN.dnPathId &&
    tzDataType.isString(pobjPrjTabFldEN.dnPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DN路径Id(dnPathId)]的值:[${pobjPrjTabFldEN.dnPathId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.keyId4Test) == false &&
    undefined !== pobjPrjTabFldEN.keyId4Test &&
    tzDataType.isString(pobjPrjTabFldEN.keyId4Test) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[测试关键字Id(keyId4Test)]的值:[${pobjPrjTabFldEN.keyId4Test}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.displayFormat) == false &&
    undefined !== pobjPrjTabFldEN.displayFormat &&
    tzDataType.isString(pobjPrjTabFldEN.displayFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[显示格式(displayFormat)]的值:[${pobjPrjTabFldEN.displayFormat}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.isParentObj &&
    undefined !== pobjPrjTabFldEN.isParentObj &&
    tzDataType.isBoolean(pobjPrjTabFldEN.isParentObj) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否父对象(isParentObj)]的值:[${pobjPrjTabFldEN.isParentObj}], 非法,应该为布尔型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.primaryTypeId) == false &&
    undefined !== pobjPrjTabFldEN.primaryTypeId &&
    tzDataType.isString(pobjPrjTabFldEN.primaryTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[主键类型ID(primaryTypeId)]的值:[${pobjPrjTabFldEN.primaryTypeId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.foreignKeyTabId) == false &&
    undefined !== pobjPrjTabFldEN.foreignKeyTabId &&
    tzDataType.isString(pobjPrjTabFldEN.foreignKeyTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[外键表ID(foreignKeyTabId)]的值:[${pobjPrjTabFldEN.foreignKeyTabId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldOpTypeId) == false &&
    undefined !== pobjPrjTabFldEN.fldOpTypeId &&
    tzDataType.isString(pobjPrjTabFldEN.fldOpTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段操作类型Id(fldOpTypeId)]的值:[${pobjPrjTabFldEN.fldOpTypeId}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabFldEN.sequenceNumber &&
    undefined !== pobjPrjTabFldEN.sequenceNumber &&
    tzDataType.isNumber(pobjPrjTabFldEN.sequenceNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[顺序号(sequenceNumber)]的值:[${pobjPrjTabFldEN.sequenceNumber}], 非法,应该为数值型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.memoInTab) == false &&
    undefined !== pobjPrjTabFldEN.memoInTab &&
    tzDataType.isString(pobjPrjTabFldEN.memoInTab) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表中说明(memoInTab)]的值:[${pobjPrjTabFldEN.memoInTab}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.errMsg) == false &&
    undefined !== pobjPrjTabFldEN.errMsg &&
    tzDataType.isString(pobjPrjTabFldEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjPrjTabFldEN.errMsg}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.updDate) == false &&
    undefined !== pobjPrjTabFldEN.updDate &&
    tzDataType.isString(pobjPrjTabFldEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPrjTabFldEN.updDate}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.updUser) == false &&
    undefined !== pobjPrjTabFldEN.updUser &&
    tzDataType.isString(pobjPrjTabFldEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjPrjTabFldEN.updUser}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.memo) == false &&
    undefined !== pobjPrjTabFldEN.memo &&
    tzDataType.isString(pobjPrjTabFldEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjTabFldEN.memo}], 非法,应该为字符型(In 工程表字段(PrjTabFld))!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjPrjTabFldEN.mId ||
    (pobjPrjTabFldEN.mId != null && pobjPrjTabFldEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 工程表字段)!(clsPrjTabFldBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.tabId) == false &&
    pobjPrjTabFldEN.tabId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.tabId) != 8
  ) {
    throw '(errid:Watl000418)字段[表ID]作为外键字段,长度应该为8(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fldId) == false &&
    pobjPrjTabFldEN.fldId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.fldId) != 8
  ) {
    throw '(errid:Watl000418)字段[字段Id]作为外键字段,长度应该为8(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.prjId) == false &&
    pobjPrjTabFldEN.prjId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.fieldTypeId) == false &&
    pobjPrjTabFldEN.fieldTypeId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.fieldTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[字段类型Id]作为外键字段,长度应该为2(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.inFldId) == false &&
    pobjPrjTabFldEN.inFldId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.inFldId) != 8
  ) {
    throw '(errid:Watl000418)字段[In字段Id]作为外键字段,长度应该为8(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.dnPathId) == false &&
    pobjPrjTabFldEN.dnPathId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.dnPathId) != 8
  ) {
    throw '(errid:Watl000418)字段[DN路径Id]作为外键字段,长度应该为8(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabFldEN.primaryTypeId) == false &&
    pobjPrjTabFldEN.primaryTypeId != '[nuull]' &&
    GetStrLen(pobjPrjTabFldEN.primaryTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[主键类型ID]作为外键字段,长度应该为2(In 工程表字段)!(clsPrjTabFldBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTabFld_GetJSONStrByObj(pobjPrjTabFldEN: clsPrjTabFldEN): string {
  pobjPrjTabFldEN.sfUpdFldSetStr = pobjPrjTabFldEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjTabFldEN);
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
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjTabFld_GetObjLstByJSONStr(strJSON: string): Array<clsPrjTabFldEN> {
  let arrPrjTabFldObjLst = new Array<clsPrjTabFldEN>();
  if (strJSON === '') {
    return arrPrjTabFldObjLst;
  }
  try {
    arrPrjTabFldObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjTabFldObjLst;
  }
  return arrPrjTabFldObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjTabFldObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjTabFld_GetObjLstByJSONObjLst(
  arrPrjTabFldObjLstS: Array<clsPrjTabFldEN>,
): Array<clsPrjTabFldEN> {
  const arrPrjTabFldObjLst = new Array<clsPrjTabFldEN>();
  for (const objInFor of arrPrjTabFldObjLstS) {
    const obj1 = PrjTabFld_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjTabFldObjLst.push(obj1);
  }
  return arrPrjTabFldObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTabFld_GetObjByJSONStr(strJSON: string): clsPrjTabFldEN {
  let pobjPrjTabFldEN = new clsPrjTabFldEN();
  if (strJSON === '') {
    return pobjPrjTabFldEN;
  }
  try {
    pobjPrjTabFldEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjTabFldEN;
  }
  return pobjPrjTabFldEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjTabFld_GetCombineCondition(objPrjTabFldCond: clsPrjTabFldEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string = objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTabFldEN.con_mId,
      objPrjTabFldCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_TabId,
      objPrjTabFldCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_FldId,
      objPrjTabFldCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_PrjId,
      objPrjTabFldCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_FieldTypeId,
      objPrjTabFldCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_IsTabNullable,
    ) == true
  ) {
    if (objPrjTabFldCond.isTabNullable == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabFldEN.con_IsTabNullable);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabFldEN.con_IsTabNullable);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_IsTabUnique,
    ) == true
  ) {
    if (objPrjTabFldCond.isTabUnique == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabFldEN.con_IsTabUnique);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabFldEN.con_IsTabUnique);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_IsTabForeignKey,
    ) == true
  ) {
    if (objPrjTabFldCond.isTabForeignKey == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabFldEN.con_IsTabForeignKey);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabFldEN.con_IsTabForeignKey);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_IsSortFld,
    ) == true
  ) {
    if (objPrjTabFldCond.isSortFld == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabFldEN.con_IsSortFld);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabFldEN.con_IsSortFld);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_IsGeneProp,
    ) == true
  ) {
    if (objPrjTabFldCond.isGeneProp == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabFldEN.con_IsGeneProp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabFldEN.con_IsGeneProp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_IsForExtendClass,
    ) == true
  ) {
    if (objPrjTabFldCond.isForExtendClass == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabFldEN.con_IsForExtendClass);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabFldEN.con_IsForExtendClass);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_CtlTypeIdDu,
    ) == true
  ) {
    const strComparisonOpCtlTypeIdDu: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_CtlTypeIdDu];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_CtlTypeIdDu,
      objPrjTabFldCond.ctlTypeIdDu,
      strComparisonOpCtlTypeIdDu,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_FldDispUnitStyleId,
    ) == true
  ) {
    const strComparisonOpFldDispUnitStyleId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_FldDispUnitStyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_FldDispUnitStyleId,
      objPrjTabFldCond.fldDispUnitStyleId,
      strComparisonOpFldDispUnitStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_InFldId,
    ) == true
  ) {
    const strComparisonOpInFldId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_InFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_InFldId,
      objPrjTabFldCond.inFldId,
      strComparisonOpInFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_DnPathId,
    ) == true
  ) {
    const strComparisonOpDnPathId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_DnPathId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_DnPathId,
      objPrjTabFldCond.dnPathId,
      strComparisonOpDnPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_KeyId4Test,
    ) == true
  ) {
    const strComparisonOpKeyId4Test: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_KeyId4Test];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_KeyId4Test,
      objPrjTabFldCond.keyId4Test,
      strComparisonOpKeyId4Test,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_DisplayFormat,
    ) == true
  ) {
    const strComparisonOpDisplayFormat: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_DisplayFormat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_DisplayFormat,
      objPrjTabFldCond.displayFormat,
      strComparisonOpDisplayFormat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_IsParentObj,
    ) == true
  ) {
    if (objPrjTabFldCond.isParentObj == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabFldEN.con_IsParentObj);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabFldEN.con_IsParentObj);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_PrimaryTypeId,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_PrimaryTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_PrimaryTypeId,
      objPrjTabFldCond.primaryTypeId,
      strComparisonOpPrimaryTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_ForeignKeyTabId,
    ) == true
  ) {
    const strComparisonOpForeignKeyTabId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_ForeignKeyTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_ForeignKeyTabId,
      objPrjTabFldCond.foreignKeyTabId,
      strComparisonOpForeignKeyTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_FldOpTypeId,
    ) == true
  ) {
    const strComparisonOpFldOpTypeId: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_FldOpTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_FldOpTypeId,
      objPrjTabFldCond.fldOpTypeId,
      strComparisonOpFldOpTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_SequenceNumber,
    ) == true
  ) {
    const strComparisonOpSequenceNumber: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_SequenceNumber];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTabFldEN.con_SequenceNumber,
      objPrjTabFldCond.sequenceNumber,
      strComparisonOpSequenceNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_MemoInTab,
    ) == true
  ) {
    const strComparisonOpMemoInTab: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_MemoInTab];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_MemoInTab,
      objPrjTabFldCond.memoInTab,
      strComparisonOpMemoInTab,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_ErrMsg,
      objPrjTabFldCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_UpdDate,
      objPrjTabFldCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_UpdUser,
      objPrjTabFldCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabFldCond.dicFldComparisonOp,
      clsPrjTabFldEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjTabFldCond.dicFldComparisonOp[clsPrjTabFldEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabFldEN.con_Memo,
      objPrjTabFldCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTabFld(工程表字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTabFld_GetUniCondStr(objPrjTabFldEN: clsPrjTabFldEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId = '{0}'", objPrjTabFldEN.tabId);
  strWhereCond += Format(" and FldId = '{0}'", objPrjTabFldEN.fldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTabFld(工程表字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTabFld_GetUniCondStr4Update(objPrjTabFldEN: clsPrjTabFldEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objPrjTabFldEN.mId);
  strWhereCond += Format(" and TabId = '{0}'", objPrjTabFldEN.tabId);
  strWhereCond += Format(" and FldId = '{0}'", objPrjTabFldEN.fldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjTabFldENS:源对象
 * @param objPrjTabFldENT:目标对象
 */
export function PrjTabFld_GetObjFromJsonObj(objPrjTabFldENS: clsPrjTabFldEN): clsPrjTabFldEN {
  const objPrjTabFldENT: clsPrjTabFldEN = new clsPrjTabFldEN();
  ObjectAssign(objPrjTabFldENT, objPrjTabFldENS);
  return objPrjTabFldENT;
}
