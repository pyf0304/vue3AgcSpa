/**
 * 类名:clsViewFeatureFldsWApi
 * 表名:ViewFeatureFlds(00050453)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:07
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
 * 界面功能字段(ViewFeatureFlds)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { viewFeatureFldsCache, isFuncMapCache } from '@/views/RegionManage/ViewFeatureFldsVueShare';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
import { FeatureRegionFlds_func } from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { PrjFeature_func } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { FieldType_func } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const viewFeatureFlds_Controller = 'ViewFeatureFldsApi';
export const viewFeatureFlds_ConstructorName = 'viewFeatureFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function ViewFeatureFlds_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsViewFeatureFldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsViewFeatureFldsWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
      const objViewFeatureFlds = ViewFeatureFlds_GetObjFromJsonObj(returnObj);
      return objViewFeatureFlds;
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsViewFeatureFldsWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewFeatureFldsEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewFeatureFldsCache: clsViewFeatureFldsEN = JSON.parse(strTempObj);
    return objViewFeatureFldsCache;
  }
  try {
    const objViewFeatureFlds = await ViewFeatureFlds_GetObjBymIdAsync(lngmId);
    if (objViewFeatureFlds != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewFeatureFlds));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewFeatureFlds;
    }
    return objViewFeatureFlds;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjBymIdCache(
  lngmId: number,
  strViewFeatureId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsViewFeatureFldsWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
  try {
    const arrViewFeatureFldsSel = arrViewFeatureFldsObjLstCache.filter((x) => x.mId == lngmId);
    let objViewFeatureFlds: clsViewFeatureFldsEN;
    if (arrViewFeatureFldsSel.length > 0) {
      objViewFeatureFlds = arrViewFeatureFldsSel[0];
      return objViewFeatureFlds;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewFeatureFldsConst = await ViewFeatureFlds_GetObjBymIdAsync(lngmId);
        if (objViewFeatureFldsConst != null) {
          ViewFeatureFlds_ReFreshThisCache(strViewFeatureId);
          return objViewFeatureFldsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objViewFeatureFlds:所给的对象
 * @returns 对象
 */
export async function ViewFeatureFlds_UpdateObjInLstCache(
  objViewFeatureFlds: clsViewFeatureFldsEN,
  strViewFeatureId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
    const obj = arrViewFeatureFldsObjLstCache.find(
      (x) =>
        x.viewFeatureId == objViewFeatureFlds.viewFeatureId &&
        x.fieldTypeId == objViewFeatureFlds.fieldTypeId,
    );
    if (obj != null) {
      objViewFeatureFlds.mId = obj.mId;
      ObjectAssign(obj, objViewFeatureFlds);
    } else {
      arrViewFeatureFldsObjLstCache.push(objViewFeatureFlds);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
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
export function ViewFeatureFlds_SortFunDefa(
  a: clsViewFeatureFldsEN,
  b: clsViewFeatureFldsEN,
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
export function ViewFeatureFlds_SortFunDefa2Fld(
  a: clsViewFeatureFldsEN,
  b: clsViewFeatureFldsEN,
): number {
  if (a.viewFeatureId == b.viewFeatureId) return a.fieldTypeId.localeCompare(b.fieldTypeId);
  else return a.viewFeatureId.localeCompare(b.viewFeatureId);
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
export function ViewFeatureFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewFeatureFldsEN.con_mId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return a.mId - b.mId;
        };
      case clsViewFeatureFldsEN.con_ViewFeatureId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return a.viewFeatureId.localeCompare(b.viewFeatureId);
        };
      case clsViewFeatureFldsEN.con_FieldTypeId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsViewFeatureFldsEN.con_ReleFldId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.releFldId == null) return -1;
          if (b.releFldId == null) return 1;
          return a.releFldId.localeCompare(b.releFldId);
        };
      case clsViewFeatureFldsEN.con_FuncName:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.funcName == null) return -1;
          if (b.funcName == null) return 1;
          return a.funcName.localeCompare(b.funcName);
        };
      case clsViewFeatureFldsEN.con_LabelCaption:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.labelCaption == null) return -1;
          if (b.labelCaption == null) return 1;
          return a.labelCaption.localeCompare(b.labelCaption);
        };
      case clsViewFeatureFldsEN.con_CtlTypeId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.ctlTypeId == null) return -1;
          if (b.ctlTypeId == null) return 1;
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsViewFeatureFldsEN.con_VarId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.varId == null) return -1;
          if (b.varId == null) return 1;
          return a.varId.localeCompare(b.varId);
        };
      case clsViewFeatureFldsEN.con_CtrlId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.ctrlId == null) return -1;
          if (b.ctrlId == null) return 1;
          return a.ctrlId.localeCompare(b.ctrlId);
        };
      case clsViewFeatureFldsEN.con_DefaultValue:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsViewFeatureFldsEN.con_OrderNum:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsViewFeatureFldsEN.con_CssClass:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.cssClass == null) return -1;
          if (b.cssClass == null) return 1;
          return a.cssClass.localeCompare(b.cssClass);
        };
      case clsViewFeatureFldsEN.con_DdlItemsOptionId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.ddlItemsOptionId == null) return -1;
          if (b.ddlItemsOptionId == null) return 1;
          return a.ddlItemsOptionId.localeCompare(b.ddlItemsOptionId);
        };
      case clsViewFeatureFldsEN.con_DsTabId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.dsTabId == null) return -1;
          if (b.dsTabId == null) return 1;
          return a.dsTabId.localeCompare(b.dsTabId);
        };
      case clsViewFeatureFldsEN.con_FldIdCond2:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.fldIdCond2 == null) return -1;
          if (b.fldIdCond2 == null) return 1;
          return a.fldIdCond2.localeCompare(b.fldIdCond2);
        };
      case clsViewFeatureFldsEN.con_FldIdCond1:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.fldIdCond1 == null) return -1;
          if (b.fldIdCond1 == null) return 1;
          return a.fldIdCond1.localeCompare(b.fldIdCond1);
        };
      case clsViewFeatureFldsEN.con_VarIdCond2:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.varIdCond2 == null) return -1;
          if (b.varIdCond2 == null) return 1;
          return a.varIdCond2.localeCompare(b.varIdCond2);
        };
      case clsViewFeatureFldsEN.con_VarIdCond1:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.varIdCond1 == null) return -1;
          if (b.varIdCond1 == null) return 1;
          return a.varIdCond1.localeCompare(b.varIdCond1);
        };
      case clsViewFeatureFldsEN.con_TabFeatureId4Ddl:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.tabFeatureId4Ddl == null) return -1;
          if (b.tabFeatureId4Ddl == null) return 1;
          return a.tabFeatureId4Ddl.localeCompare(b.tabFeatureId4Ddl);
        };
      case clsViewFeatureFldsEN.con_ViewImplId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.viewImplId == null) return -1;
          if (b.viewImplId == null) return 1;
          return a.viewImplId.localeCompare(b.viewImplId);
        };
      case clsViewFeatureFldsEN.con_Text:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.text == null) return -1;
          if (b.text == null) return 1;
          return a.text.localeCompare(b.text);
        };
      case clsViewFeatureFldsEN.con_DsCondStr:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.dsCondStr == null) return -1;
          if (b.dsCondStr == null) return 1;
          return a.dsCondStr.localeCompare(b.dsCondStr);
        };
      case clsViewFeatureFldsEN.con_DsSqlStr:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.dsSqlStr == null) return -1;
          if (b.dsSqlStr == null) return 1;
          return a.dsSqlStr.localeCompare(b.dsSqlStr);
        };
      case clsViewFeatureFldsEN.con_ItemsString:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.itemsString == null) return -1;
          if (b.itemsString == null) return 1;
          return a.itemsString.localeCompare(b.itemsString);
        };
      case clsViewFeatureFldsEN.con_PrjId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsViewFeatureFldsEN.con_UpdUser:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsViewFeatureFldsEN.con_UpdDate:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewFeatureFldsEN.con_InUse:
        return (a: clsViewFeatureFldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsViewFeatureFldsEN.con_Memo:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewFeatureFlds]中不存在!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewFeatureFldsEN.con_mId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return b.mId - a.mId;
        };
      case clsViewFeatureFldsEN.con_ViewFeatureId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return b.viewFeatureId.localeCompare(a.viewFeatureId);
        };
      case clsViewFeatureFldsEN.con_FieldTypeId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsViewFeatureFldsEN.con_ReleFldId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.releFldId == null) return -1;
          if (a.releFldId == null) return 1;
          return b.releFldId.localeCompare(a.releFldId);
        };
      case clsViewFeatureFldsEN.con_FuncName:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.funcName == null) return -1;
          if (a.funcName == null) return 1;
          return b.funcName.localeCompare(a.funcName);
        };
      case clsViewFeatureFldsEN.con_LabelCaption:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.labelCaption == null) return -1;
          if (a.labelCaption == null) return 1;
          return b.labelCaption.localeCompare(a.labelCaption);
        };
      case clsViewFeatureFldsEN.con_CtlTypeId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.ctlTypeId == null) return -1;
          if (a.ctlTypeId == null) return 1;
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsViewFeatureFldsEN.con_VarId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.varId == null) return -1;
          if (a.varId == null) return 1;
          return b.varId.localeCompare(a.varId);
        };
      case clsViewFeatureFldsEN.con_CtrlId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.ctrlId == null) return -1;
          if (a.ctrlId == null) return 1;
          return b.ctrlId.localeCompare(a.ctrlId);
        };
      case clsViewFeatureFldsEN.con_DefaultValue:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsViewFeatureFldsEN.con_OrderNum:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsViewFeatureFldsEN.con_CssClass:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.cssClass == null) return -1;
          if (a.cssClass == null) return 1;
          return b.cssClass.localeCompare(a.cssClass);
        };
      case clsViewFeatureFldsEN.con_DdlItemsOptionId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.ddlItemsOptionId == null) return -1;
          if (a.ddlItemsOptionId == null) return 1;
          return b.ddlItemsOptionId.localeCompare(a.ddlItemsOptionId);
        };
      case clsViewFeatureFldsEN.con_DsTabId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.dsTabId == null) return -1;
          if (a.dsTabId == null) return 1;
          return b.dsTabId.localeCompare(a.dsTabId);
        };
      case clsViewFeatureFldsEN.con_FldIdCond2:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.fldIdCond2 == null) return -1;
          if (a.fldIdCond2 == null) return 1;
          return b.fldIdCond2.localeCompare(a.fldIdCond2);
        };
      case clsViewFeatureFldsEN.con_FldIdCond1:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.fldIdCond1 == null) return -1;
          if (a.fldIdCond1 == null) return 1;
          return b.fldIdCond1.localeCompare(a.fldIdCond1);
        };
      case clsViewFeatureFldsEN.con_VarIdCond2:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.varIdCond2 == null) return -1;
          if (a.varIdCond2 == null) return 1;
          return b.varIdCond2.localeCompare(a.varIdCond2);
        };
      case clsViewFeatureFldsEN.con_VarIdCond1:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.varIdCond1 == null) return -1;
          if (a.varIdCond1 == null) return 1;
          return b.varIdCond1.localeCompare(a.varIdCond1);
        };
      case clsViewFeatureFldsEN.con_TabFeatureId4Ddl:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.tabFeatureId4Ddl == null) return -1;
          if (a.tabFeatureId4Ddl == null) return 1;
          return b.tabFeatureId4Ddl.localeCompare(a.tabFeatureId4Ddl);
        };
      case clsViewFeatureFldsEN.con_ViewImplId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.viewImplId == null) return -1;
          if (a.viewImplId == null) return 1;
          return b.viewImplId.localeCompare(a.viewImplId);
        };
      case clsViewFeatureFldsEN.con_Text:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.text == null) return -1;
          if (a.text == null) return 1;
          return b.text.localeCompare(a.text);
        };
      case clsViewFeatureFldsEN.con_DsCondStr:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.dsCondStr == null) return -1;
          if (a.dsCondStr == null) return 1;
          return b.dsCondStr.localeCompare(a.dsCondStr);
        };
      case clsViewFeatureFldsEN.con_DsSqlStr:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.dsSqlStr == null) return -1;
          if (a.dsSqlStr == null) return 1;
          return b.dsSqlStr.localeCompare(a.dsSqlStr);
        };
      case clsViewFeatureFldsEN.con_ItemsString:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.itemsString == null) return -1;
          if (a.itemsString == null) return 1;
          return b.itemsString.localeCompare(a.itemsString);
        };
      case clsViewFeatureFldsEN.con_PrjId:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsViewFeatureFldsEN.con_UpdUser:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsViewFeatureFldsEN.con_UpdDate:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewFeatureFldsEN.con_InUse:
        return (b: clsViewFeatureFldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsViewFeatureFldsEN.con_Memo:
        return (a: clsViewFeatureFldsEN, b: clsViewFeatureFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewFeatureFlds]中不存在!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
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
export async function ViewFeatureFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewFeatureFldsEN.con_mId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.mId === value;
      };
    case clsViewFeatureFldsEN.con_ViewFeatureId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.viewFeatureId === value;
      };
    case clsViewFeatureFldsEN.con_FieldTypeId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.fieldTypeId === value;
      };
    case clsViewFeatureFldsEN.con_ReleFldId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.releFldId === value;
      };
    case clsViewFeatureFldsEN.con_FuncName:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.funcName === value;
      };
    case clsViewFeatureFldsEN.con_LabelCaption:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.labelCaption === value;
      };
    case clsViewFeatureFldsEN.con_CtlTypeId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.ctlTypeId === value;
      };
    case clsViewFeatureFldsEN.con_VarId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.varId === value;
      };
    case clsViewFeatureFldsEN.con_CtrlId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.ctrlId === value;
      };
    case clsViewFeatureFldsEN.con_DefaultValue:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.defaultValue === value;
      };
    case clsViewFeatureFldsEN.con_OrderNum:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.orderNum === value;
      };
    case clsViewFeatureFldsEN.con_CssClass:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.cssClass === value;
      };
    case clsViewFeatureFldsEN.con_DdlItemsOptionId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.ddlItemsOptionId === value;
      };
    case clsViewFeatureFldsEN.con_DsTabId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.dsTabId === value;
      };
    case clsViewFeatureFldsEN.con_FldIdCond2:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.fldIdCond2 === value;
      };
    case clsViewFeatureFldsEN.con_FldIdCond1:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.fldIdCond1 === value;
      };
    case clsViewFeatureFldsEN.con_VarIdCond2:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.varIdCond2 === value;
      };
    case clsViewFeatureFldsEN.con_VarIdCond1:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.varIdCond1 === value;
      };
    case clsViewFeatureFldsEN.con_TabFeatureId4Ddl:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.tabFeatureId4Ddl === value;
      };
    case clsViewFeatureFldsEN.con_ViewImplId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.viewImplId === value;
      };
    case clsViewFeatureFldsEN.con_Text:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.text === value;
      };
    case clsViewFeatureFldsEN.con_DsCondStr:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.dsCondStr === value;
      };
    case clsViewFeatureFldsEN.con_DsSqlStr:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.dsSqlStr === value;
      };
    case clsViewFeatureFldsEN.con_ItemsString:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.itemsString === value;
      };
    case clsViewFeatureFldsEN.con_PrjId:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.prjId === value;
      };
    case clsViewFeatureFldsEN.con_UpdUser:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.updUser === value;
      };
    case clsViewFeatureFldsEN.con_UpdDate:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.updDate === value;
      };
    case clsViewFeatureFldsEN.con_InUse:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.inUse === value;
      };
    case clsViewFeatureFldsEN.con_Memo:
      return (obj: clsViewFeatureFldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewFeatureFlds]中不存在!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
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
 @param strViewFeatureId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function ViewFeatureFlds_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strViewFeatureIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strViewFeatureIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureIdClassfy]不能为空!(In clsViewFeatureFldsWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureIdClassfy]的长度:[{0}]不正确!(clsViewFeatureFldsWApi.func)',
      strViewFeatureIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsViewFeatureFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewFeatureFldsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewFeatureFldsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objViewFeatureFlds = await ViewFeatureFlds_GetObjBymIdCache(
    lngmId,
    strViewFeatureIdClassfy,
  );
  if (objViewFeatureFlds == null) return '';
  if (objViewFeatureFlds.GetFldValue(strOutFldName) == null) return '';
  return objViewFeatureFlds.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strViewFeatureId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function ViewFeatureFlds_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strViewFeatureIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strViewFeatureIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureIdClassfy]不能为空!(In clsViewFeatureFldsWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureIdClassfy]的长度:[{0}]不正确!(clsViewFeatureFldsWApi.funcKey)',
      strViewFeatureIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsViewFeatureFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrViewFeatureFlds = await ViewFeatureFlds_GetObjLstCache(strViewFeatureIdClassfy);
  if (arrViewFeatureFlds == null) return [];
  let arrViewFeatureFldsSel = arrViewFeatureFlds;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewFeatureFldsSel.length == 0) return [];
  return arrViewFeatureFldsSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewFeatureFlds_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewFeatureFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
      const objViewFeatureFlds = ViewFeatureFlds_GetObjFromJsonObj(returnObj);
      return objViewFeatureFlds;
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjLstClientCache(strViewFeatureId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewFeatureFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewFeatureFldsEN.WhereFormat, strViewFeatureId);
  } else {
    strWhereCond = Format("ViewFeatureId='{0}'", strViewFeatureId);
  }
  const strKey = Format('{0}_{1}', clsViewFeatureFldsEN._CurrTabName, strViewFeatureId);
  if (IsNullOrEmpty(clsViewFeatureFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewFeatureFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewFeatureFldsExObjLstCache: Array<clsViewFeatureFldsEN> = CacheHelper.Get(strKey);
    const arrViewFeatureFldsObjLstT = ViewFeatureFlds_GetObjLstByJSONObjLst(
      arrViewFeatureFldsExObjLstCache,
    );
    return arrViewFeatureFldsObjLstT;
  }
  try {
    const arrViewFeatureFldsExObjLst = await ViewFeatureFlds_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewFeatureFldsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewFeatureFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrViewFeatureFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjLstlocalStorage(strViewFeatureId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewFeatureFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewFeatureFldsEN.WhereFormat, strViewFeatureId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewFeatureFldsEN.con_ViewFeatureId, strViewFeatureId);
  }
  const strKey = Format('{0}_{1}', clsViewFeatureFldsEN._CurrTabName, strViewFeatureId);
  if (IsNullOrEmpty(clsViewFeatureFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewFeatureFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewFeatureFldsExObjLstCache: Array<clsViewFeatureFldsEN> = JSON.parse(strTempObjLst);
    const arrViewFeatureFldsObjLstT = ViewFeatureFlds_GetObjLstByJSONObjLst(
      arrViewFeatureFldsExObjLstCache,
    );
    return arrViewFeatureFldsObjLstT;
  }
  try {
    const arrViewFeatureFldsExObjLst = await ViewFeatureFlds_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewFeatureFldsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewFeatureFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrViewFeatureFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjLstlocalStoragePureCache(strViewFeatureId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewFeatureFldsEN._CurrTabName, strViewFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewFeatureFldsObjLstCache: Array<clsViewFeatureFldsEN> = JSON.parse(strTempObjLst);
    return arrViewFeatureFldsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewFeatureFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewFeatureFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
          viewFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjLstsessionStorage(strViewFeatureId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewFeatureFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewFeatureFldsEN.WhereFormat, strViewFeatureId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewFeatureFldsEN.con_ViewFeatureId, strViewFeatureId);
  }
  const strKey = Format('{0}_{1}', clsViewFeatureFldsEN._CurrTabName, strViewFeatureId);
  if (IsNullOrEmpty(clsViewFeatureFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewFeatureFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewFeatureFldsExObjLstCache: Array<clsViewFeatureFldsEN> = JSON.parse(strTempObjLst);
    const arrViewFeatureFldsObjLstT = ViewFeatureFlds_GetObjLstByJSONObjLst(
      arrViewFeatureFldsExObjLstCache,
    );
    return arrViewFeatureFldsObjLstT;
  }
  try {
    const arrViewFeatureFldsExObjLst = await ViewFeatureFlds_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewFeatureFldsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewFeatureFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrViewFeatureFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjLstsessionStoragePureCache(strViewFeatureId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewFeatureFldsEN._CurrTabName, strViewFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewFeatureFldsObjLstCache: Array<clsViewFeatureFldsEN> = JSON.parse(strTempObjLst);
    return arrViewFeatureFldsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewFeatureFlds_GetObjLstCache(
  strViewFeatureId: string,
): Promise<Array<clsViewFeatureFldsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空！(In clsViewFeatureFldsWApi.ViewFeatureFlds_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确！(clsViewFeatureFldsWApi.ViewFeatureFlds_GetObjLstCache)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrViewFeatureFldsObjLstCache;
  switch (clsViewFeatureFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstsessionStorage(
        strViewFeatureId,
      );
      break;
    case '03': //localStorage
      arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstlocalStorage(strViewFeatureId);
      break;
    case '02': //ClientCache
      arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstClientCache(strViewFeatureId);
      break;
    default:
      arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstClientCache(strViewFeatureId);
      break;
  }
  return arrViewFeatureFldsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewFeatureFlds_GetObjLstPureCache(strViewFeatureId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewFeatureFldsObjLstCache;
  switch (clsViewFeatureFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstsessionStoragePureCache(
        strViewFeatureId,
      );
      break;
    case '03': //localStorage
      arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstlocalStoragePureCache(
        strViewFeatureId,
      );
      break;
    case '02': //ClientCache
      arrViewFeatureFldsObjLstCache = null;
      break;
    default:
      arrViewFeatureFldsObjLstCache = null;
      break;
  }
  return arrViewFeatureFldsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewFeatureFlds_GetSubObjLstCache(
  objViewFeatureFldsCond: ConditionCollection,
  strViewFeatureId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
  let arrViewFeatureFldsSel = arrViewFeatureFldsObjLstCache;
  if (objViewFeatureFldsCond.GetConditions().length == 0) return arrViewFeatureFldsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objViewFeatureFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewFeatureFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewFeatureFldsCond),
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewFeatureFldsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function ViewFeatureFlds_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsViewFeatureFldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
          viewFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strViewFeatureId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
    const arrViewFeatureFldsSel = arrViewFeatureFldsObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrViewFeatureFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewFeatureFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
          viewFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewFeatureFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
          viewFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strViewFeatureId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewFeatureFldsEN>();
  const arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
  if (arrViewFeatureFldsObjLstCache.length == 0) return arrViewFeatureFldsObjLstCache;
  let arrViewFeatureFldsSel = arrViewFeatureFldsObjLstCache;
  const objViewFeatureFldsCond = objPagerPara.conditionCollection;
  if (objViewFeatureFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsViewFeatureFldsEN>();
  }
  //console.log("clsViewFeatureFldsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objViewFeatureFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewFeatureFldsSel.length == 0) return arrViewFeatureFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewFeatureFldsSel = arrViewFeatureFldsSel.sort(
        ViewFeatureFlds_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewFeatureFldsSel = arrViewFeatureFldsSel.sort(objPagerPara.sortFun);
    }
    arrViewFeatureFldsSel = arrViewFeatureFldsSel.slice(intStart, intEnd);
    return arrViewFeatureFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewFeatureFldsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewFeatureFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewFeatureFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewFeatureFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
          viewFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_DelViewFeatureFldssAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewFeatureFldssAsync';
  const strAction = 'DelViewFeatureFldss';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strViewFeatureId: string,
): Promise<Array<clsViewFeatureFldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrViewFeatureFldsObjLst = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsViewFeatureFldsENEx>();
  const arrViewFeatureFldsExObjLst = arrViewFeatureFldsObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.viewFeatureId}`;
    if (viewFeatureFldsCache[cacheKey]) {
      const oldObj = viewFeatureFldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ViewFeatureFlds_CopyToEx(obj);
      arrNewObj.push(newObj);
      viewFeatureFldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ViewFeatureFlds_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewFeatureFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrViewFeatureFldsExObjLst) {
      await ViewFeatureFlds_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.viewFeatureId}`;
      viewFeatureFldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrViewFeatureFldsExObjLst.length == 0) return arrViewFeatureFldsExObjLst;
  let arrViewFeatureFldsSel: Array<clsViewFeatureFldsENEx> = arrViewFeatureFldsExObjLst;
  const objViewFeatureFldsCond = objPagerPara.conditionCollection;
  if (objViewFeatureFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrViewFeatureFldsExObjLst;
  }
  try {
    for (const objCondition of objViewFeatureFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewFeatureFldsSel.length == 0) return arrViewFeatureFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrViewFeatureFldsSel = arrViewFeatureFldsSel.sort(
        ViewFeatureFlds_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewFeatureFldsSel = arrViewFeatureFldsSel.sort(objPagerPara.sortFun);
    }
    arrViewFeatureFldsSel = arrViewFeatureFldsSel.slice(intStart, intEnd);
    return arrViewFeatureFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewFeatureFldsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objViewFeatureFldsENS:源对象
 * @returns 目标对象=>clsViewFeatureFldsEN:objViewFeatureFldsENT
 **/
export function ViewFeatureFlds_CopyToEx(
  objViewFeatureFldsENS: clsViewFeatureFldsEN,
): clsViewFeatureFldsENEx {
  const strThisFuncName = ViewFeatureFlds_CopyToEx.name;
  const objViewFeatureFldsENT = new clsViewFeatureFldsENEx();
  try {
    ObjectAssign(objViewFeatureFldsENT, objViewFeatureFldsENS);
    return objViewFeatureFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewFeatureFldsENT;
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
export function ViewFeatureFlds_FuncMapByFldName(
  strFldName: string,
  objViewFeatureFldsEx: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFlds_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsViewFeatureFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewFeatureFldsENEx.con_FeatureName:
      return ViewFeatureFlds_FuncMapFeatureName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_FldName:
      return ViewFeatureFlds_FuncMapFldName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_FeatureId:
      return ViewFeatureFlds_FuncMapFeatureId(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_CsType:
      return ViewFeatureFlds_FuncMapCsType(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_Caption:
      return ViewFeatureFlds_FuncMapCaption(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_SeqNum:
      return ViewFeatureFlds_FuncMapSeqNum(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_GroupName:
      return ViewFeatureFlds_FuncMapGroupName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_FieldTypeName:
      return ViewFeatureFlds_FuncMapFieldTypeName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_RelaTabName:
      return ViewFeatureFlds_FuncMapRelaTabName(objViewFeatureFldsEx);
    case clsViewFeatureFldsENEx.con_DsTabName:
      return ViewFeatureFlds_FuncMapDsTabName(objViewFeatureFldsEx);
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
export function ViewFeatureFlds_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewFeatureFldsENEx.con_FeatureName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsViewFeatureFldsENEx.con_FldName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsViewFeatureFldsENEx.con_FeatureId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsViewFeatureFldsENEx.con_CsType:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.csType.localeCompare(b.csType);
        };
      case clsViewFeatureFldsENEx.con_Caption:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.caption.localeCompare(b.caption);
        };
      case clsViewFeatureFldsENEx.con_SeqNum:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.seqNum - b.seqNum;
        };
      case clsViewFeatureFldsENEx.con_GroupName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.groupName.localeCompare(b.groupName);
        };
      case clsViewFeatureFldsENEx.con_FieldTypeName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          if (a.fieldTypeName === null && b.fieldTypeName === null) return 0;
          if (a.fieldTypeName === null) return -1;
          if (b.fieldTypeName === null) return 1;
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsViewFeatureFldsENEx.con_RelaTabName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          if (a.relaTabName === null && b.relaTabName === null) return 0;
          if (a.relaTabName === null) return -1;
          if (b.relaTabName === null) return 1;
          return a.relaTabName.localeCompare(b.relaTabName);
        };
      case clsViewFeatureFldsENEx.con_RegionId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsViewFeatureFldsENEx.con_DsTabName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          if (a.dsTabName === null && b.dsTabName === null) return 0;
          if (a.dsTabName === null) return -1;
          if (b.dsTabName === null) return 1;
          return a.dsTabName.localeCompare(b.dsTabName);
        };
      case clsViewFeatureFldsENEx.con_CmPrjId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        return ViewFeatureFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewFeatureFldsENEx.con_FeatureName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsViewFeatureFldsENEx.con_FldName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsViewFeatureFldsENEx.con_FeatureId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsViewFeatureFldsENEx.con_CsType:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.csType.localeCompare(a.csType);
        };
      case clsViewFeatureFldsENEx.con_Caption:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.caption.localeCompare(a.caption);
        };
      case clsViewFeatureFldsENEx.con_SeqNum:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.seqNum - a.seqNum;
        };
      case clsViewFeatureFldsENEx.con_GroupName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.groupName.localeCompare(a.groupName);
        };
      case clsViewFeatureFldsENEx.con_FieldTypeName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          if (a.fieldTypeName === null && b.fieldTypeName === null) return 0;
          if (a.fieldTypeName === null) return 1;
          if (b.fieldTypeName === null) return -1;
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsViewFeatureFldsENEx.con_RelaTabName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          if (a.relaTabName === null && b.relaTabName === null) return 0;
          if (a.relaTabName === null) return 1;
          if (b.relaTabName === null) return -1;
          return b.relaTabName.localeCompare(a.relaTabName);
        };
      case clsViewFeatureFldsENEx.con_RegionId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsViewFeatureFldsENEx.con_DsTabName:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          if (a.dsTabName === null && b.dsTabName === null) return 0;
          if (a.dsTabName === null) return 1;
          if (b.dsTabName === null) return -1;
          return b.dsTabName.localeCompare(a.dsTabName);
        };
      case clsViewFeatureFldsENEx.con_CmPrjId:
        return (a: clsViewFeatureFldsENEx, b: clsViewFeatureFldsENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        return ViewFeatureFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapFeatureName(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFlds_FuncMapFeatureName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.featureName) == true) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      if (IsNullOrEmpty(objViewFeatureFlds.regionId) == true) {
        const strMsg = `函数映射[FeatureName]数据出错,regionId不能为空!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FeatureRegionFldsFeatureId = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_FeatureId,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      const PrjFeatureFeatureId = FeatureRegionFldsFeatureId;
      const PrjFeatureFeatureName = await PrjFeature_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureName,
        PrjFeatureFeatureId,
      );
      objViewFeatureFlds.featureName = PrjFeatureFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001341)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapFldName(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFlds_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.fldName) == true) {
      const vFieldTabSimFldId = objViewFeatureFlds.releFldId;
      if (IsNullOrEmpty(objViewFeatureFlds.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objViewFeatureFlds.prjId,
      );
      objViewFeatureFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapFeatureId(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFlds_FuncMapFeatureId.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.featureId) == true) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      if (IsNullOrEmpty(objViewFeatureFlds.regionId) == true) {
        const strMsg = `函数映射[FeatureId]数据出错,regionId不能为空!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FeatureRegionFldsFeatureId = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_FeatureId,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      objViewFeatureFlds.featureId = FeatureRegionFldsFeatureId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001390)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapCsType(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFlds_FuncMapCsType.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.csType) == true) {
      const vFieldTabSimFldId = objViewFeatureFlds.releFldId;
      if (IsNullOrEmpty(objViewFeatureFlds.prjId) == true) {
        const strMsg = `函数映射[CsType]数据出错,prjId不能为空!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimDataTypeId = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_DataTypeId,
        vFieldTabSimFldId,
        objViewFeatureFlds.prjId,
      );
      const DataTypeAbbrDataTypeId = vFieldTabSimDataTypeId;
      const DataTypeAbbrCsType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_CsType,
        DataTypeAbbrDataTypeId,
      );
      objViewFeatureFlds.csType = DataTypeAbbrCsType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001367)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapCaption(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFlds_FuncMapCaption.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.caption) == true) {
      const vFieldTabSimFldId = objViewFeatureFlds.releFldId;
      if (IsNullOrEmpty(objViewFeatureFlds.prjId) == true) {
        const strMsg = `函数映射[Caption]数据出错,prjId不能为空!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimCaption = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_Caption,
        vFieldTabSimFldId,
        objViewFeatureFlds.prjId,
      );
      objViewFeatureFlds.caption = vFieldTabSimCaption;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001377)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapSeqNum(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFlds_FuncMapSeqNum.name;
  try {
    if (objViewFeatureFlds.seqNum == 0) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      if (IsNullOrEmpty(objViewFeatureFlds.regionId) == true) {
        const strMsg = `函数映射[SeqNum]数据出错,regionId不能为空!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FeatureRegionFldsSeqNum = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_SeqNum,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      objViewFeatureFlds.seqNum = FeatureRegionFldsSeqNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001391)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapGroupName(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFlds_FuncMapGroupName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.groupName) == true) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      if (IsNullOrEmpty(objViewFeatureFlds.regionId) == true) {
        const strMsg = `函数映射[GroupName]数据出错,regionId不能为空!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FeatureRegionFldsGroupName = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_GroupName,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      objViewFeatureFlds.groupName = FeatureRegionFldsGroupName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001310)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapRelaTabName(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFlds_FuncMapRelaTabName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.relaTabName) == true) {
      const FeatureRegionFldsViewFeatureId = objViewFeatureFlds.viewFeatureId;
      if (IsNullOrEmpty(objViewFeatureFlds.regionId) == true) {
        const strMsg = `函数映射[RelaTabName]数据出错,regionId不能为空!(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FeatureRegionFldsReleTabId = await FeatureRegionFlds_func(
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        clsFeatureRegionFldsEN.con_ReleTabId,
        FeatureRegionFldsViewFeatureId,
        objViewFeatureFlds.regionId,
      );
      const vPrjTabSimTabId = FeatureRegionFldsReleTabId;
      objViewFeatureFlds.relaTabName = vPrjTabSimTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001299)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapDsTabName(objViewFeatureFlds: clsViewFeatureFldsENEx) {
  const strThisFuncName = ViewFeatureFlds_FuncMapDsTabName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.dsTabName) == true) {
      const vPrjTabSimTabId = objViewFeatureFlds.dsTabId;
      objViewFeatureFlds.dsTabName = vPrjTabSimTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001392)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewFeatureFldsS:源对象
 **/
export async function ViewFeatureFlds_FuncMapFieldTypeName(
  objViewFeatureFlds: clsViewFeatureFldsENEx,
) {
  const strThisFuncName = ViewFeatureFlds_FuncMapFieldTypeName.name;
  try {
    if (IsNullOrEmpty(objViewFeatureFlds.fieldTypeName) == true) {
      const FieldTypeFieldTypeId = objViewFeatureFlds.fieldTypeId;
      const FieldTypeFieldTypeName = await FieldType_func(
        clsFieldTypeEN.con_FieldTypeId,
        clsFieldTypeEN.con_FieldTypeName,
        FieldTypeFieldTypeId,
      );
      objViewFeatureFlds.fieldTypeName = FieldTypeFieldTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001348)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_DelViewFeatureFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewFeatureFldssByCondAsync';
  const strAction = 'DelViewFeatureFldssByCond';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewFeatureFlds_AddNewRecordAsync(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewFeatureFldsEN);
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewFeatureFldsEN, config);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewFeatureFlds_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewFeatureFlds_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewFeatureFldsEN);
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewFeatureFlds_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewFeatureFldsEN);
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_AddNewObjSave(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ViewFeatureFlds_CheckPropertyNew(objViewFeatureFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewFeatureFlds_CheckUniCond4Add(objViewFeatureFldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await ViewFeatureFlds_AddNewRecordAsync(objViewFeatureFldsEN);
    if (returnBool == true) {
      ViewFeatureFlds_ReFreshCache(objViewFeatureFldsEN.viewFeatureId);
    } else {
      const strInfo = `添加[界面功能字段(ViewFeatureFlds)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objViewFeatureFldsEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ViewFeatureFlds_CheckUniCond4Add(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewFeatureFlds_GetUniCondStr(objViewFeatureFldsEN);
  const bolIsExistCondition = await ViewFeatureFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewFeatureFlds_CheckUniCond4Update(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewFeatureFlds_GetUniCondStr4Update(objViewFeatureFldsEN);
  const bolIsExistCondition = await ViewFeatureFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewFeatureFlds_UpdateObjSave(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objViewFeatureFldsEN.sfUpdFldSetStr = objViewFeatureFldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objViewFeatureFldsEN.mId == 0 || objViewFeatureFldsEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ViewFeatureFlds_CheckProperty4Update(objViewFeatureFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewFeatureFlds_CheckUniCond4Update(objViewFeatureFldsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ViewFeatureFlds_UpdateRecordAsync(objViewFeatureFldsEN);
    if (returnBool == true) {
      ViewFeatureFlds_ReFreshCache(objViewFeatureFldsEN.viewFeatureId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${viewFeatureFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objViewFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewFeatureFlds_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewFeatureFldsEN);
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewFeatureFlds_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objViewFeatureFldsEN);
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewFeatureFlds_AddNewRecordWithReturnKeyAsync(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewFeatureFldsEN, config);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewFeatureFlds_UpdateRecordAsync(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewFeatureFldsEN.sfUpdFldSetStr === undefined ||
    objViewFeatureFldsEN.sfUpdFldSetStr === null ||
    objViewFeatureFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewFeatureFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewFeatureFldsEN, config);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewFeatureFlds_EditRecordExAsync(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objViewFeatureFldsEN.sfUpdFldSetStr === undefined ||
    objViewFeatureFldsEN.sfUpdFldSetStr === null ||
    objViewFeatureFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewFeatureFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewFeatureFldsEN, config);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewFeatureFlds_UpdateWithConditionAsync(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewFeatureFldsEN.sfUpdFldSetStr === undefined ||
    objViewFeatureFldsEN.sfUpdFldSetStr === null ||
    objViewFeatureFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewFeatureFldsEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);
  objViewFeatureFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewFeatureFldsEN, config);
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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_IsExistRecordCache(
  objViewFeatureFldsCond: ConditionCollection,
  strViewFeatureId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
  if (arrViewFeatureFldsObjLstCache == null) return false;
  let arrViewFeatureFldsSel = arrViewFeatureFldsObjLstCache;
  if (objViewFeatureFldsCond.GetConditions().length == 0)
    return arrViewFeatureFldsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objViewFeatureFldsCond.GetConditions()) {
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
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewFeatureFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewFeatureFldsCond),
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_IsExistCache(lngmId: number, strViewFeatureId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
  if (arrViewFeatureFldsObjLstCache == null) return false;
  try {
    const arrViewFeatureFldsSel = arrViewFeatureFldsObjLstCache.filter((x) => x.mId == lngmId);
    if (arrViewFeatureFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
 * @param objViewFeatureFldsCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewFeatureFlds_GetRecCountByCondCache(
  objViewFeatureFldsCond: ConditionCollection,
  strViewFeatureId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewFeatureFldsObjLstCache = await ViewFeatureFlds_GetObjLstCache(strViewFeatureId);
  if (arrViewFeatureFldsObjLstCache == null) return 0;
  let arrViewFeatureFldsSel = arrViewFeatureFldsObjLstCache;
  if (objViewFeatureFldsCond.GetConditions().length == 0) return arrViewFeatureFldsSel.length;
  try {
    for (const objCondition of objViewFeatureFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewFeatureFldsSel = arrViewFeatureFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewFeatureFldsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewFeatureFldsCond),
      viewFeatureFlds_ConstructorName,
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
export async function ViewFeatureFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewFeatureFlds_Controller, strAction);

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
        viewFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewFeatureFlds_ConstructorName,
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
export function ViewFeatureFlds_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewFeatureFlds_ReFreshCache(strViewFeatureId: string): void {
  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In clsViewFeatureFldsWApi.clsViewFeatureFldsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(clsViewFeatureFldsWApi.clsViewFeatureFldsWApi.ReFreshCache)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsViewFeatureFldsEN._CurrTabName, strViewFeatureId);
  switch (clsViewFeatureFldsEN.CacheModeId) {
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
  clsViewFeatureFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ViewFeatureFlds_ReFreshThisCache(strViewFeatureId: string): void {
  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In clsViewFeatureFldsWApi.ViewFeatureFlds_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(clsViewFeatureFldsWApi.ViewFeatureFlds_ReFreshThisCache)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsViewFeatureFldsEN._CurrTabName, strViewFeatureId);
    switch (clsViewFeatureFldsEN.CacheModeId) {
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
    clsViewFeatureFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ViewFeatureFlds_GetLastRefreshTime(): string {
  if (clsViewFeatureFldsEN._RefreshTimeLst.length == 0) return '';
  return clsViewFeatureFldsEN._RefreshTimeLst[clsViewFeatureFldsEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewFeatureFlds_CheckPropertyNew(pobjViewFeatureFldsEN: clsViewFeatureFldsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewFeatureFldsEN.viewFeatureId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[界面功能Id]不能为空(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fieldTypeId) === true ||
    pobjViewFeatureFldsEN.fieldTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段类型Id]不能为空(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.prjId) === true ||
    pobjViewFeatureFldsEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewFeatureFldsEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewFeatureId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.viewFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面功能Id(viewFeatureId)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.viewFeatureId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fieldTypeId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.fieldTypeId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.releFldId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.releFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[相关字段Id(releFldId)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.releFldId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.funcName) == false &&
    GetStrLen(pobjViewFeatureFldsEN.funcName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数名(funcName)]的长度不能超过100(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.funcName}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.labelCaption) == false &&
    GetStrLen(pobjViewFeatureFldsEN.labelCaption) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[标签标题(labelCaption)]的长度不能超过150(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.labelCaption}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.ctlTypeId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id(varId)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.varId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ctrlId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.ctrlId) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件Id(ctrlId)]的长度不能超过50(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.ctrlId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.defaultValue) == false &&
    GetStrLen(pobjViewFeatureFldsEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缺省值(defaultValue)]的长度不能超过50(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.defaultValue}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.cssClass) == false &&
    GetStrLen(pobjViewFeatureFldsEN.cssClass) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[样式表(cssClass)]的长度不能超过50(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.cssClass}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.ddlItemsOptionId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsTabId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.dsTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源表ID(dsTabId)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.dsTabId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fldIdCond2) == false &&
    GetStrLen(pobjViewFeatureFldsEN.fldIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id_条件2(fldIdCond2)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.fldIdCond2}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fldIdCond1) == false &&
    GetStrLen(pobjViewFeatureFldsEN.fldIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id_条件1(fldIdCond1)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.fldIdCond1}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond2) == false &&
    GetStrLen(pobjViewFeatureFldsEN.varIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源字段_条件1(varIdCond2)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.varIdCond2}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond1) == false &&
    GetStrLen(pobjViewFeatureFldsEN.varIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id_条件1(varIdCond1)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.varIdCond1}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.tabFeatureId4Ddl) == false &&
    GetStrLen(pobjViewFeatureFldsEN.tabFeatureId4Ddl) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉框表功能Id(tabFeatureId4Ddl)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.tabFeatureId4Ddl}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewImplId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.viewImplId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面实现Id(viewImplId)]的长度不能超过4(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.viewImplId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.text) == false &&
    GetStrLen(pobjViewFeatureFldsEN.text) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[文本(text)]的长度不能超过30(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.text}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsCondStr) == false &&
    GetStrLen(pobjViewFeatureFldsEN.dsCondStr) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源条件串(dsCondStr)]的长度不能超过50(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.dsCondStr}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsSqlStr) == false &&
    GetStrLen(pobjViewFeatureFldsEN.dsSqlStr) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源SQL串(dsSqlStr)]的长度不能超过200(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.dsSqlStr}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.itemsString) == false &&
    GetStrLen(pobjViewFeatureFldsEN.itemsString) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[列表项串(itemsString)]的长度不能超过200(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.itemsString}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.prjId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.prjId}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.updUser) == false &&
    GetStrLen(pobjViewFeatureFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.updUser}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.updDate) == false &&
    GetStrLen(pobjViewFeatureFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.updDate}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.memo) == false &&
    GetStrLen(pobjViewFeatureFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.memo}(clsViewFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewFeatureFldsEN.mId &&
    undefined !== pobjViewFeatureFldsEN.mId &&
    tzDataType.isNumber(pobjViewFeatureFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjViewFeatureFldsEN.mId}], 非法,应该为数值型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewFeatureId) == false &&
    undefined !== pobjViewFeatureFldsEN.viewFeatureId &&
    tzDataType.isString(pobjViewFeatureFldsEN.viewFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面功能Id(viewFeatureId)]的值:[${pobjViewFeatureFldsEN.viewFeatureId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fieldTypeId) == false &&
    undefined !== pobjViewFeatureFldsEN.fieldTypeId &&
    tzDataType.isString(pobjViewFeatureFldsEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段类型Id(fieldTypeId)]的值:[${pobjViewFeatureFldsEN.fieldTypeId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.releFldId) == false &&
    undefined !== pobjViewFeatureFldsEN.releFldId &&
    tzDataType.isString(pobjViewFeatureFldsEN.releFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[相关字段Id(releFldId)]的值:[${pobjViewFeatureFldsEN.releFldId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.funcName) == false &&
    undefined !== pobjViewFeatureFldsEN.funcName &&
    tzDataType.isString(pobjViewFeatureFldsEN.funcName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数名(funcName)]的值:[${pobjViewFeatureFldsEN.funcName}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.labelCaption) == false &&
    undefined !== pobjViewFeatureFldsEN.labelCaption &&
    tzDataType.isString(pobjViewFeatureFldsEN.labelCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[标签标题(labelCaption)]的值:[${pobjViewFeatureFldsEN.labelCaption}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ctlTypeId) == false &&
    undefined !== pobjViewFeatureFldsEN.ctlTypeId &&
    tzDataType.isString(pobjViewFeatureFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjViewFeatureFldsEN.ctlTypeId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varId) == false &&
    undefined !== pobjViewFeatureFldsEN.varId &&
    tzDataType.isString(pobjViewFeatureFldsEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id(varId)]的值:[${pobjViewFeatureFldsEN.varId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ctrlId) == false &&
    undefined !== pobjViewFeatureFldsEN.ctrlId &&
    tzDataType.isString(pobjViewFeatureFldsEN.ctrlId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件Id(ctrlId)]的值:[${pobjViewFeatureFldsEN.ctrlId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.defaultValue) == false &&
    undefined !== pobjViewFeatureFldsEN.defaultValue &&
    tzDataType.isString(pobjViewFeatureFldsEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缺省值(defaultValue)]的值:[${pobjViewFeatureFldsEN.defaultValue}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewFeatureFldsEN.orderNum &&
    undefined !== pobjViewFeatureFldsEN.orderNum &&
    tzDataType.isNumber(pobjViewFeatureFldsEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjViewFeatureFldsEN.orderNum}], 非法,应该为数值型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.cssClass) == false &&
    undefined !== pobjViewFeatureFldsEN.cssClass &&
    tzDataType.isString(pobjViewFeatureFldsEN.cssClass) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[样式表(cssClass)]的值:[${pobjViewFeatureFldsEN.cssClass}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ddlItemsOptionId) == false &&
    undefined !== pobjViewFeatureFldsEN.ddlItemsOptionId &&
    tzDataType.isString(pobjViewFeatureFldsEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[${pobjViewFeatureFldsEN.ddlItemsOptionId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsTabId) == false &&
    undefined !== pobjViewFeatureFldsEN.dsTabId &&
    tzDataType.isString(pobjViewFeatureFldsEN.dsTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源表ID(dsTabId)]的值:[${pobjViewFeatureFldsEN.dsTabId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fldIdCond2) == false &&
    undefined !== pobjViewFeatureFldsEN.fldIdCond2 &&
    tzDataType.isString(pobjViewFeatureFldsEN.fldIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id_条件2(fldIdCond2)]的值:[${pobjViewFeatureFldsEN.fldIdCond2}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fldIdCond1) == false &&
    undefined !== pobjViewFeatureFldsEN.fldIdCond1 &&
    tzDataType.isString(pobjViewFeatureFldsEN.fldIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id_条件1(fldIdCond1)]的值:[${pobjViewFeatureFldsEN.fldIdCond1}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond2) == false &&
    undefined !== pobjViewFeatureFldsEN.varIdCond2 &&
    tzDataType.isString(pobjViewFeatureFldsEN.varIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源字段_条件1(varIdCond2)]的值:[${pobjViewFeatureFldsEN.varIdCond2}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond1) == false &&
    undefined !== pobjViewFeatureFldsEN.varIdCond1 &&
    tzDataType.isString(pobjViewFeatureFldsEN.varIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id_条件1(varIdCond1)]的值:[${pobjViewFeatureFldsEN.varIdCond1}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.tabFeatureId4Ddl) == false &&
    undefined !== pobjViewFeatureFldsEN.tabFeatureId4Ddl &&
    tzDataType.isString(pobjViewFeatureFldsEN.tabFeatureId4Ddl) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉框表功能Id(tabFeatureId4Ddl)]的值:[${pobjViewFeatureFldsEN.tabFeatureId4Ddl}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewImplId) == false &&
    undefined !== pobjViewFeatureFldsEN.viewImplId &&
    tzDataType.isString(pobjViewFeatureFldsEN.viewImplId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面实现Id(viewImplId)]的值:[${pobjViewFeatureFldsEN.viewImplId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.text) == false &&
    undefined !== pobjViewFeatureFldsEN.text &&
    tzDataType.isString(pobjViewFeatureFldsEN.text) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文本(text)]的值:[${pobjViewFeatureFldsEN.text}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsCondStr) == false &&
    undefined !== pobjViewFeatureFldsEN.dsCondStr &&
    tzDataType.isString(pobjViewFeatureFldsEN.dsCondStr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源条件串(dsCondStr)]的值:[${pobjViewFeatureFldsEN.dsCondStr}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsSqlStr) == false &&
    undefined !== pobjViewFeatureFldsEN.dsSqlStr &&
    tzDataType.isString(pobjViewFeatureFldsEN.dsSqlStr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源SQL串(dsSqlStr)]的值:[${pobjViewFeatureFldsEN.dsSqlStr}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.itemsString) == false &&
    undefined !== pobjViewFeatureFldsEN.itemsString &&
    tzDataType.isString(pobjViewFeatureFldsEN.itemsString) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[列表项串(itemsString)]的值:[${pobjViewFeatureFldsEN.itemsString}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.prjId) == false &&
    undefined !== pobjViewFeatureFldsEN.prjId &&
    tzDataType.isString(pobjViewFeatureFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjViewFeatureFldsEN.prjId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.updUser) == false &&
    undefined !== pobjViewFeatureFldsEN.updUser &&
    tzDataType.isString(pobjViewFeatureFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjViewFeatureFldsEN.updUser}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.updDate) == false &&
    undefined !== pobjViewFeatureFldsEN.updDate &&
    tzDataType.isString(pobjViewFeatureFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjViewFeatureFldsEN.updDate}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewFeatureFldsEN.inUse &&
    undefined !== pobjViewFeatureFldsEN.inUse &&
    tzDataType.isBoolean(pobjViewFeatureFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjViewFeatureFldsEN.inUse}], 非法,应该为布尔型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.memo) == false &&
    undefined !== pobjViewFeatureFldsEN.memo &&
    tzDataType.isString(pobjViewFeatureFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjViewFeatureFldsEN.memo}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewFeatureId) == false &&
    pobjViewFeatureFldsEN.viewFeatureId != '[nuull]' &&
    GetStrLen(pobjViewFeatureFldsEN.viewFeatureId) != 8
  ) {
    throw '(errid:Watl000415)字段[界面功能Id]作为外键字段,长度应该为8(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fieldTypeId) == false &&
    pobjViewFeatureFldsEN.fieldTypeId != '[nuull]' &&
    GetStrLen(pobjViewFeatureFldsEN.fieldTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[字段类型Id]作为外键字段,长度应该为2(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.prjId) == false &&
    pobjViewFeatureFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjViewFeatureFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewFeatureFlds_CheckProperty4Update(pobjViewFeatureFldsEN: clsViewFeatureFldsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewFeatureId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.viewFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面功能Id(viewFeatureId)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.viewFeatureId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fieldTypeId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.fieldTypeId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.releFldId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.releFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[相关字段Id(releFldId)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.releFldId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.funcName) == false &&
    GetStrLen(pobjViewFeatureFldsEN.funcName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数名(funcName)]的长度不能超过100(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.funcName}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.labelCaption) == false &&
    GetStrLen(pobjViewFeatureFldsEN.labelCaption) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[标签标题(labelCaption)]的长度不能超过150(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.labelCaption}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.ctlTypeId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id(varId)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.varId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ctrlId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.ctrlId) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件Id(ctrlId)]的长度不能超过50(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.ctrlId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.defaultValue) == false &&
    GetStrLen(pobjViewFeatureFldsEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缺省值(defaultValue)]的长度不能超过50(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.defaultValue}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.cssClass) == false &&
    GetStrLen(pobjViewFeatureFldsEN.cssClass) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[样式表(cssClass)]的长度不能超过50(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.cssClass}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.ddlItemsOptionId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsTabId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.dsTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源表ID(dsTabId)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.dsTabId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fldIdCond2) == false &&
    GetStrLen(pobjViewFeatureFldsEN.fldIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id_条件2(fldIdCond2)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.fldIdCond2}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fldIdCond1) == false &&
    GetStrLen(pobjViewFeatureFldsEN.fldIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id_条件1(fldIdCond1)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.fldIdCond1}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond2) == false &&
    GetStrLen(pobjViewFeatureFldsEN.varIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源字段_条件1(varIdCond2)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.varIdCond2}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond1) == false &&
    GetStrLen(pobjViewFeatureFldsEN.varIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id_条件1(varIdCond1)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.varIdCond1}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.tabFeatureId4Ddl) == false &&
    GetStrLen(pobjViewFeatureFldsEN.tabFeatureId4Ddl) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉框表功能Id(tabFeatureId4Ddl)]的长度不能超过8(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.tabFeatureId4Ddl}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewImplId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.viewImplId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面实现Id(viewImplId)]的长度不能超过4(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.viewImplId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.text) == false &&
    GetStrLen(pobjViewFeatureFldsEN.text) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[文本(text)]的长度不能超过30(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.text}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsCondStr) == false &&
    GetStrLen(pobjViewFeatureFldsEN.dsCondStr) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源条件串(dsCondStr)]的长度不能超过50(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.dsCondStr}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsSqlStr) == false &&
    GetStrLen(pobjViewFeatureFldsEN.dsSqlStr) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源SQL串(dsSqlStr)]的长度不能超过200(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.dsSqlStr}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.itemsString) == false &&
    GetStrLen(pobjViewFeatureFldsEN.itemsString) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[列表项串(itemsString)]的长度不能超过200(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.itemsString}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.prjId) == false &&
    GetStrLen(pobjViewFeatureFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.prjId}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.updUser) == false &&
    GetStrLen(pobjViewFeatureFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.updUser}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.updDate) == false &&
    GetStrLen(pobjViewFeatureFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.updDate}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.memo) == false &&
    GetStrLen(pobjViewFeatureFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面功能字段(ViewFeatureFlds))!值:${pobjViewFeatureFldsEN.memo}(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewFeatureFldsEN.mId &&
    undefined !== pobjViewFeatureFldsEN.mId &&
    tzDataType.isNumber(pobjViewFeatureFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjViewFeatureFldsEN.mId}], 非法,应该为数值型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewFeatureId) == false &&
    undefined !== pobjViewFeatureFldsEN.viewFeatureId &&
    tzDataType.isString(pobjViewFeatureFldsEN.viewFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面功能Id(viewFeatureId)]的值:[${pobjViewFeatureFldsEN.viewFeatureId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fieldTypeId) == false &&
    undefined !== pobjViewFeatureFldsEN.fieldTypeId &&
    tzDataType.isString(pobjViewFeatureFldsEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段类型Id(fieldTypeId)]的值:[${pobjViewFeatureFldsEN.fieldTypeId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.releFldId) == false &&
    undefined !== pobjViewFeatureFldsEN.releFldId &&
    tzDataType.isString(pobjViewFeatureFldsEN.releFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[相关字段Id(releFldId)]的值:[${pobjViewFeatureFldsEN.releFldId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.funcName) == false &&
    undefined !== pobjViewFeatureFldsEN.funcName &&
    tzDataType.isString(pobjViewFeatureFldsEN.funcName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数名(funcName)]的值:[${pobjViewFeatureFldsEN.funcName}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.labelCaption) == false &&
    undefined !== pobjViewFeatureFldsEN.labelCaption &&
    tzDataType.isString(pobjViewFeatureFldsEN.labelCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[标签标题(labelCaption)]的值:[${pobjViewFeatureFldsEN.labelCaption}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ctlTypeId) == false &&
    undefined !== pobjViewFeatureFldsEN.ctlTypeId &&
    tzDataType.isString(pobjViewFeatureFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjViewFeatureFldsEN.ctlTypeId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varId) == false &&
    undefined !== pobjViewFeatureFldsEN.varId &&
    tzDataType.isString(pobjViewFeatureFldsEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id(varId)]的值:[${pobjViewFeatureFldsEN.varId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ctrlId) == false &&
    undefined !== pobjViewFeatureFldsEN.ctrlId &&
    tzDataType.isString(pobjViewFeatureFldsEN.ctrlId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件Id(ctrlId)]的值:[${pobjViewFeatureFldsEN.ctrlId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.defaultValue) == false &&
    undefined !== pobjViewFeatureFldsEN.defaultValue &&
    tzDataType.isString(pobjViewFeatureFldsEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缺省值(defaultValue)]的值:[${pobjViewFeatureFldsEN.defaultValue}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewFeatureFldsEN.orderNum &&
    undefined !== pobjViewFeatureFldsEN.orderNum &&
    tzDataType.isNumber(pobjViewFeatureFldsEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjViewFeatureFldsEN.orderNum}], 非法,应该为数值型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.cssClass) == false &&
    undefined !== pobjViewFeatureFldsEN.cssClass &&
    tzDataType.isString(pobjViewFeatureFldsEN.cssClass) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[样式表(cssClass)]的值:[${pobjViewFeatureFldsEN.cssClass}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.ddlItemsOptionId) == false &&
    undefined !== pobjViewFeatureFldsEN.ddlItemsOptionId &&
    tzDataType.isString(pobjViewFeatureFldsEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[${pobjViewFeatureFldsEN.ddlItemsOptionId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsTabId) == false &&
    undefined !== pobjViewFeatureFldsEN.dsTabId &&
    tzDataType.isString(pobjViewFeatureFldsEN.dsTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源表ID(dsTabId)]的值:[${pobjViewFeatureFldsEN.dsTabId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fldIdCond2) == false &&
    undefined !== pobjViewFeatureFldsEN.fldIdCond2 &&
    tzDataType.isString(pobjViewFeatureFldsEN.fldIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id_条件2(fldIdCond2)]的值:[${pobjViewFeatureFldsEN.fldIdCond2}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fldIdCond1) == false &&
    undefined !== pobjViewFeatureFldsEN.fldIdCond1 &&
    tzDataType.isString(pobjViewFeatureFldsEN.fldIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id_条件1(fldIdCond1)]的值:[${pobjViewFeatureFldsEN.fldIdCond1}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond2) == false &&
    undefined !== pobjViewFeatureFldsEN.varIdCond2 &&
    tzDataType.isString(pobjViewFeatureFldsEN.varIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源字段_条件1(varIdCond2)]的值:[${pobjViewFeatureFldsEN.varIdCond2}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.varIdCond1) == false &&
    undefined !== pobjViewFeatureFldsEN.varIdCond1 &&
    tzDataType.isString(pobjViewFeatureFldsEN.varIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id_条件1(varIdCond1)]的值:[${pobjViewFeatureFldsEN.varIdCond1}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.tabFeatureId4Ddl) == false &&
    undefined !== pobjViewFeatureFldsEN.tabFeatureId4Ddl &&
    tzDataType.isString(pobjViewFeatureFldsEN.tabFeatureId4Ddl) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉框表功能Id(tabFeatureId4Ddl)]的值:[${pobjViewFeatureFldsEN.tabFeatureId4Ddl}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewImplId) == false &&
    undefined !== pobjViewFeatureFldsEN.viewImplId &&
    tzDataType.isString(pobjViewFeatureFldsEN.viewImplId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面实现Id(viewImplId)]的值:[${pobjViewFeatureFldsEN.viewImplId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.text) == false &&
    undefined !== pobjViewFeatureFldsEN.text &&
    tzDataType.isString(pobjViewFeatureFldsEN.text) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文本(text)]的值:[${pobjViewFeatureFldsEN.text}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsCondStr) == false &&
    undefined !== pobjViewFeatureFldsEN.dsCondStr &&
    tzDataType.isString(pobjViewFeatureFldsEN.dsCondStr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源条件串(dsCondStr)]的值:[${pobjViewFeatureFldsEN.dsCondStr}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.dsSqlStr) == false &&
    undefined !== pobjViewFeatureFldsEN.dsSqlStr &&
    tzDataType.isString(pobjViewFeatureFldsEN.dsSqlStr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源SQL串(dsSqlStr)]的值:[${pobjViewFeatureFldsEN.dsSqlStr}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.itemsString) == false &&
    undefined !== pobjViewFeatureFldsEN.itemsString &&
    tzDataType.isString(pobjViewFeatureFldsEN.itemsString) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[列表项串(itemsString)]的值:[${pobjViewFeatureFldsEN.itemsString}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.prjId) == false &&
    undefined !== pobjViewFeatureFldsEN.prjId &&
    tzDataType.isString(pobjViewFeatureFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjViewFeatureFldsEN.prjId}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.updUser) == false &&
    undefined !== pobjViewFeatureFldsEN.updUser &&
    tzDataType.isString(pobjViewFeatureFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjViewFeatureFldsEN.updUser}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.updDate) == false &&
    undefined !== pobjViewFeatureFldsEN.updDate &&
    tzDataType.isString(pobjViewFeatureFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjViewFeatureFldsEN.updDate}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewFeatureFldsEN.inUse &&
    undefined !== pobjViewFeatureFldsEN.inUse &&
    tzDataType.isBoolean(pobjViewFeatureFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjViewFeatureFldsEN.inUse}], 非法,应该为布尔型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.memo) == false &&
    undefined !== pobjViewFeatureFldsEN.memo &&
    tzDataType.isString(pobjViewFeatureFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjViewFeatureFldsEN.memo}], 非法,应该为字符型(In 界面功能字段(ViewFeatureFlds))!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjViewFeatureFldsEN.mId ||
    (pobjViewFeatureFldsEN.mId != null && pobjViewFeatureFldsEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 界面功能字段)!(clsViewFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.viewFeatureId) == false &&
    pobjViewFeatureFldsEN.viewFeatureId != '[nuull]' &&
    GetStrLen(pobjViewFeatureFldsEN.viewFeatureId) != 8
  ) {
    throw '(errid:Watl000418)字段[界面功能Id]作为外键字段,长度应该为8(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.fieldTypeId) == false &&
    pobjViewFeatureFldsEN.fieldTypeId != '[nuull]' &&
    GetStrLen(pobjViewFeatureFldsEN.fieldTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[字段类型Id]作为外键字段,长度应该为2(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewFeatureFldsEN.prjId) == false &&
    pobjViewFeatureFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjViewFeatureFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 界面功能字段)!(clsViewFeatureFldsBL:CheckPropertyNew)';
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
export function ViewFeatureFlds_GetJSONStrByObj(
  pobjViewFeatureFldsEN: clsViewFeatureFldsEN,
): string {
  pobjViewFeatureFldsEN.sfUpdFldSetStr = pobjViewFeatureFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewFeatureFldsEN);
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
export function ViewFeatureFlds_GetObjLstByJSONStr(strJSON: string): Array<clsViewFeatureFldsEN> {
  let arrViewFeatureFldsObjLst = new Array<clsViewFeatureFldsEN>();
  if (strJSON === '') {
    return arrViewFeatureFldsObjLst;
  }
  try {
    arrViewFeatureFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewFeatureFldsObjLst;
  }
  return arrViewFeatureFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewFeatureFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewFeatureFlds_GetObjLstByJSONObjLst(
  arrViewFeatureFldsObjLstS: Array<clsViewFeatureFldsEN>,
): Array<clsViewFeatureFldsEN> {
  const arrViewFeatureFldsObjLst = new Array<clsViewFeatureFldsEN>();
  for (const objInFor of arrViewFeatureFldsObjLstS) {
    const obj1 = ViewFeatureFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewFeatureFldsObjLst.push(obj1);
  }
  return arrViewFeatureFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewFeatureFlds_GetObjByJSONStr(strJSON: string): clsViewFeatureFldsEN {
  let pobjViewFeatureFldsEN = new clsViewFeatureFldsEN();
  if (strJSON === '') {
    return pobjViewFeatureFldsEN;
  }
  try {
    pobjViewFeatureFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewFeatureFldsEN;
  }
  return pobjViewFeatureFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewFeatureFlds_GetCombineCondition(
  objViewFeatureFldsCond: clsViewFeatureFldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewFeatureFldsEN.con_mId,
      objViewFeatureFldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_ViewFeatureId,
    ) == true
  ) {
    const strComparisonOpViewFeatureId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_ViewFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_ViewFeatureId,
      objViewFeatureFldsCond.viewFeatureId,
      strComparisonOpViewFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_FieldTypeId,
      objViewFeatureFldsCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_ReleFldId,
    ) == true
  ) {
    const strComparisonOpReleFldId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_ReleFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_ReleFldId,
      objViewFeatureFldsCond.releFldId,
      strComparisonOpReleFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_FuncName,
      objViewFeatureFldsCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_LabelCaption,
    ) == true
  ) {
    const strComparisonOpLabelCaption: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_LabelCaption];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_LabelCaption,
      objViewFeatureFldsCond.labelCaption,
      strComparisonOpLabelCaption,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_CtlTypeId,
      objViewFeatureFldsCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_VarId,
    ) == true
  ) {
    const strComparisonOpVarId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_VarId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_VarId,
      objViewFeatureFldsCond.varId,
      strComparisonOpVarId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_CtrlId,
    ) == true
  ) {
    const strComparisonOpCtrlId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_CtrlId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_CtrlId,
      objViewFeatureFldsCond.ctrlId,
      strComparisonOpCtrlId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_DefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_DefaultValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_DefaultValue,
      objViewFeatureFldsCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewFeatureFldsEN.con_OrderNum,
      objViewFeatureFldsCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_CssClass,
    ) == true
  ) {
    const strComparisonOpCssClass: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_CssClass];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_CssClass,
      objViewFeatureFldsCond.cssClass,
      strComparisonOpCssClass,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_DdlItemsOptionId,
    ) == true
  ) {
    const strComparisonOpDdlItemsOptionId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_DdlItemsOptionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_DdlItemsOptionId,
      objViewFeatureFldsCond.ddlItemsOptionId,
      strComparisonOpDdlItemsOptionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_DsTabId,
    ) == true
  ) {
    const strComparisonOpDsTabId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_DsTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_DsTabId,
      objViewFeatureFldsCond.dsTabId,
      strComparisonOpDsTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_FldIdCond2,
    ) == true
  ) {
    const strComparisonOpFldIdCond2: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_FldIdCond2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_FldIdCond2,
      objViewFeatureFldsCond.fldIdCond2,
      strComparisonOpFldIdCond2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_FldIdCond1,
    ) == true
  ) {
    const strComparisonOpFldIdCond1: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_FldIdCond1];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_FldIdCond1,
      objViewFeatureFldsCond.fldIdCond1,
      strComparisonOpFldIdCond1,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_VarIdCond2,
    ) == true
  ) {
    const strComparisonOpVarIdCond2: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_VarIdCond2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_VarIdCond2,
      objViewFeatureFldsCond.varIdCond2,
      strComparisonOpVarIdCond2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_VarIdCond1,
    ) == true
  ) {
    const strComparisonOpVarIdCond1: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_VarIdCond1];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_VarIdCond1,
      objViewFeatureFldsCond.varIdCond1,
      strComparisonOpVarIdCond1,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_TabFeatureId4Ddl,
    ) == true
  ) {
    const strComparisonOpTabFeatureId4Ddl: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_TabFeatureId4Ddl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_TabFeatureId4Ddl,
      objViewFeatureFldsCond.tabFeatureId4Ddl,
      strComparisonOpTabFeatureId4Ddl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_ViewImplId,
    ) == true
  ) {
    const strComparisonOpViewImplId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_ViewImplId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_ViewImplId,
      objViewFeatureFldsCond.viewImplId,
      strComparisonOpViewImplId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_Text,
    ) == true
  ) {
    const strComparisonOpText: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_Text];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_Text,
      objViewFeatureFldsCond.text,
      strComparisonOpText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_DsCondStr,
    ) == true
  ) {
    const strComparisonOpDsCondStr: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_DsCondStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_DsCondStr,
      objViewFeatureFldsCond.dsCondStr,
      strComparisonOpDsCondStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_DsSqlStr,
    ) == true
  ) {
    const strComparisonOpDsSqlStr: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_DsSqlStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_DsSqlStr,
      objViewFeatureFldsCond.dsSqlStr,
      strComparisonOpDsSqlStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_ItemsString,
    ) == true
  ) {
    const strComparisonOpItemsString: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_ItemsString];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_ItemsString,
      objViewFeatureFldsCond.itemsString,
      strComparisonOpItemsString,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_PrjId,
      objViewFeatureFldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_UpdUser,
      objViewFeatureFldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_UpdDate,
      objViewFeatureFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_InUse,
    ) == true
  ) {
    if (objViewFeatureFldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewFeatureFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewFeatureFldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewFeatureFldsCond.dicFldComparisonOp,
      clsViewFeatureFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewFeatureFldsCond.dicFldComparisonOp[clsViewFeatureFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewFeatureFldsEN.con_Memo,
      objViewFeatureFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewFeatureFlds(界面功能字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewFeatureId: 界面功能Id(要求唯一的字段)
 * @param strFieldTypeId: 字段类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewFeatureFlds_GetUniCondStr(objViewFeatureFldsEN: clsViewFeatureFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewFeatureId = '{0}'", objViewFeatureFldsEN.viewFeatureId);
  strWhereCond += Format(" and FieldTypeId = '{0}'", objViewFeatureFldsEN.fieldTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewFeatureFlds(界面功能字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewFeatureId: 界面功能Id(要求唯一的字段)
 * @param strFieldTypeId: 字段类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewFeatureFlds_GetUniCondStr4Update(
  objViewFeatureFldsEN: clsViewFeatureFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objViewFeatureFldsEN.mId);
  strWhereCond += Format(" and ViewFeatureId = '{0}'", objViewFeatureFldsEN.viewFeatureId);
  strWhereCond += Format(" and FieldTypeId = '{0}'", objViewFeatureFldsEN.fieldTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewFeatureFldsENS:源对象
 * @param objViewFeatureFldsENT:目标对象
 */
export function ViewFeatureFlds_GetObjFromJsonObj(
  objViewFeatureFldsENS: clsViewFeatureFldsEN,
): clsViewFeatureFldsEN {
  const objViewFeatureFldsENT: clsViewFeatureFldsEN = new clsViewFeatureFldsEN();
  ObjectAssign(objViewFeatureFldsENT, objViewFeatureFldsENS);
  return objViewFeatureFldsENT;
}
