/**
 * 类名:clsPrjTabWApi
 * 表名:PrjTab(00050009)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:22
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
 * 工程表(PrjTab)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { FuncModule_Agc_func } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { SQLDSType_func } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { TabState_func } from '@/ts/L3ForWApi/Table_Field/clsTabStateWApi';
import { clsTabStateEN } from '@/ts/L0Entity/Table_Field/clsTabStateEN';
import { TabMainType_func } from '@/ts/L3ForWApi/Table_Field/clsTabMainTypeWApi';
import { clsTabMainTypeEN } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
import { TabType_func } from '@/ts/L3ForWApi/Table_Field/clsTabTypeWApi';
import { clsTabTypeEN } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const prjTab_Controller = 'PrjTabApi';
export const prjTab_ConstructorName = 'prjTab';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export async function PrjTab_GetObjByTabIdAsync(strTabId: string): Promise<clsPrjTabEN | null> {
  const strThisFuncName = 'GetObjByTabIdAsync';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsPrjTabWApi.GetObjByTabIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsPrjTabWApi.GetObjByTabIdAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabId';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
      const objPrjTab = PrjTab_GetObjFromJsonObj(returnObj);
      return objPrjTab;
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByTabIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTab_SortFunDefa(a: clsPrjTabEN, b: clsPrjTabEN): number {
  return a.tabId.localeCompare(b.tabId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTab_SortFunDefa2Fld(a: clsPrjTabEN, b: clsPrjTabEN): number {
  if (a.tabName == b.tabName) return a.tabCnName.localeCompare(b.tabCnName);
  else return a.tabName.localeCompare(b.tabName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTab_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabEN.con_TabId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsPrjTabEN.con_TabName:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsPrjTabEN.con_TabCnName:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.tabCnName == null) return -1;
          if (b.tabCnName == null) return 1;
          return a.tabCnName.localeCompare(b.tabCnName);
        };
      case clsPrjTabEN.con_PrjId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsPrjTabEN.con_SqlDsTypeId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.sqlDsTypeId == null) return -1;
          if (b.sqlDsTypeId == null) return 1;
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsPrjTabEN.con_TabStateId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.tabStateId.localeCompare(b.tabStateId);
        };
      case clsPrjTabEN.con_FuncModuleAgcId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.funcModuleAgcId == null) return -1;
          if (b.funcModuleAgcId == null) return 1;
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsPrjTabEN.con_IsReleToSqlTab:
        return (a: clsPrjTabEN) => {
          if (a.isReleToSqlTab == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_Keyword:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.keyword == null) return -1;
          if (b.keyword == null) return 1;
          return a.keyword.localeCompare(b.keyword);
        };
      case clsPrjTabEN.con_TabTypeId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.tabTypeId.localeCompare(b.tabTypeId);
        };
      case clsPrjTabEN.con_TabMainTypeId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.tabMainTypeId.localeCompare(b.tabMainTypeId);
        };
      case clsPrjTabEN.con_RelaTabId4View:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.relaTabId4View == null) return -1;
          if (b.relaTabId4View == null) return 1;
          return a.relaTabId4View.localeCompare(b.relaTabId4View);
        };
      case clsPrjTabEN.con_IsNeedGeneIndexer:
        return (a: clsPrjTabEN) => {
          if (a.isNeedGeneIndexer == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_ParentClass:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.parentClass == null) return -1;
          if (b.parentClass == null) return 1;
          return a.parentClass.localeCompare(b.parentClass);
        };
      case clsPrjTabEN.con_IsShare:
        return (a: clsPrjTabEN) => {
          if (a.isShare == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsUseDelSign:
        return (a: clsPrjTabEN) => {
          if (a.isUseDelSign == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsUseCache:
        return (a: clsPrjTabEN) => {
          if (a.isUseCache == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsMultiKeyClassify:
        return (a: clsPrjTabEN) => {
          if (a.isMultiKeyClassify == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_CacheClassifyField:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.cacheClassifyField == null) return -1;
          if (b.cacheClassifyField == null) return 1;
          return a.cacheClassifyField.localeCompare(b.cacheClassifyField);
        };
      case clsPrjTabEN.con_CacheClassifyField2:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.cacheClassifyField2 == null) return -1;
          if (b.cacheClassifyField2 == null) return 1;
          return a.cacheClassifyField2.localeCompare(b.cacheClassifyField2);
        };
      case clsPrjTabEN.con_CacheModeId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.cacheModeId == null) return -1;
          if (b.cacheModeId == null) return 1;
          return a.cacheModeId.localeCompare(b.cacheModeId);
        };
      case clsPrjTabEN.con_CacheClassifyFieldTS:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.cacheClassifyFieldTS == null) return -1;
          if (b.cacheClassifyFieldTS == null) return 1;
          return a.cacheClassifyFieldTS.localeCompare(b.cacheClassifyFieldTS);
        };
      case clsPrjTabEN.con_CacheClassifyField2TS:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.cacheClassifyField2TS == null) return -1;
          if (b.cacheClassifyField2TS == null) return 1;
          return a.cacheClassifyField2TS.localeCompare(b.cacheClassifyField2TS);
        };
      case clsPrjTabEN.con_ParaVar2TS:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.paraVar2TS == null) return -1;
          if (b.paraVar2TS == null) return 1;
          return a.paraVar2TS.localeCompare(b.paraVar2TS);
        };
      case clsPrjTabEN.con_ParaVar1TS:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.paraVar1TS == null) return -1;
          if (b.paraVar1TS == null) return 1;
          return a.paraVar1TS.localeCompare(b.paraVar1TS);
        };
      case clsPrjTabEN.con_WhereFormat:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.whereFormat == null) return -1;
          if (b.whereFormat == null) return 1;
          return a.whereFormat.localeCompare(b.whereFormat);
        };
      case clsPrjTabEN.con_WhereFormatBack:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.whereFormatBack == null) return -1;
          if (b.whereFormatBack == null) return 1;
          return a.whereFormatBack.localeCompare(b.whereFormatBack);
        };
      case clsPrjTabEN.con_IsRefresh4RelaView:
        return (a: clsPrjTabEN) => {
          if (a.isRefresh4RelaView == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_TabRecNum:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.tabRecNum - b.tabRecNum;
        };
      case clsPrjTabEN.con_KeyId4Test:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.keyId4Test == null) return -1;
          if (b.keyId4Test == null) return 1;
          return a.keyId4Test.localeCompare(b.keyId4Test);
        };
      case clsPrjTabEN.con_ErrMsg:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsPrjTabEN.con_FldNum:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.fldNum - b.fldNum;
        };
      case clsPrjTabEN.con_UpdUserId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsPrjTabEN.con_UpdDate:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjTabEN.con_Memo:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsPrjTabEN.con_OrderNum4Refer:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return a.orderNum4Refer - b.orderNum4Refer;
        };
      case clsPrjTabEN.con_IsChecked:
        return (a: clsPrjTabEN) => {
          if (a.isChecked == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_Owner:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.owner == null) return -1;
          if (b.owner == null) return 1;
          return a.owner.localeCompare(b.owner);
        };
      case clsPrjTabEN.con_TabEnName:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.tabEnName == null) return -1;
          if (b.tabEnName == null) return 1;
          return a.tabEnName.localeCompare(b.tabEnName);
        };
      case clsPrjTabEN.con_IsNeedTransCode:
        return (a: clsPrjTabEN) => {
          if (a.isNeedTransCode == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_TabNameB:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.tabNameB == null) return -1;
          if (b.tabNameB == null) return 1;
          return a.tabNameB.localeCompare(b.tabNameB);
        };
      case clsPrjTabEN.con_RelaViewId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.relaViewId == null) return -1;
          if (b.relaViewId == null) return 1;
          return a.relaViewId.localeCompare(b.relaViewId);
        };
      case clsPrjTabEN.con_DataBaseName:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (a.dataBaseName == null) return -1;
          if (b.dataBaseName == null) return 1;
          return a.dataBaseName.localeCompare(b.dataBaseName);
        };
      case clsPrjTabEN.con_IsNationStandard:
        return (a: clsPrjTabEN) => {
          if (a.isNationStandard == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsParaTab:
        return (a: clsPrjTabEN) => {
          if (a.isParaTab == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsArchive:
        return (a: clsPrjTabEN) => {
          if (a.isArchive == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTab]中不存在!(in ${prjTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjTabEN.con_TabId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsPrjTabEN.con_TabName:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsPrjTabEN.con_TabCnName:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.tabCnName == null) return -1;
          if (a.tabCnName == null) return 1;
          return b.tabCnName.localeCompare(a.tabCnName);
        };
      case clsPrjTabEN.con_PrjId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsPrjTabEN.con_SqlDsTypeId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.sqlDsTypeId == null) return -1;
          if (a.sqlDsTypeId == null) return 1;
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsPrjTabEN.con_TabStateId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.tabStateId.localeCompare(a.tabStateId);
        };
      case clsPrjTabEN.con_FuncModuleAgcId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.funcModuleAgcId == null) return -1;
          if (a.funcModuleAgcId == null) return 1;
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsPrjTabEN.con_IsReleToSqlTab:
        return (b: clsPrjTabEN) => {
          if (b.isReleToSqlTab == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_Keyword:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.keyword == null) return -1;
          if (a.keyword == null) return 1;
          return b.keyword.localeCompare(a.keyword);
        };
      case clsPrjTabEN.con_TabTypeId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.tabTypeId.localeCompare(a.tabTypeId);
        };
      case clsPrjTabEN.con_TabMainTypeId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.tabMainTypeId.localeCompare(a.tabMainTypeId);
        };
      case clsPrjTabEN.con_RelaTabId4View:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.relaTabId4View == null) return -1;
          if (a.relaTabId4View == null) return 1;
          return b.relaTabId4View.localeCompare(a.relaTabId4View);
        };
      case clsPrjTabEN.con_IsNeedGeneIndexer:
        return (b: clsPrjTabEN) => {
          if (b.isNeedGeneIndexer == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_ParentClass:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.parentClass == null) return -1;
          if (a.parentClass == null) return 1;
          return b.parentClass.localeCompare(a.parentClass);
        };
      case clsPrjTabEN.con_IsShare:
        return (b: clsPrjTabEN) => {
          if (b.isShare == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsUseDelSign:
        return (b: clsPrjTabEN) => {
          if (b.isUseDelSign == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsUseCache:
        return (b: clsPrjTabEN) => {
          if (b.isUseCache == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsMultiKeyClassify:
        return (b: clsPrjTabEN) => {
          if (b.isMultiKeyClassify == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_CacheClassifyField:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.cacheClassifyField == null) return -1;
          if (a.cacheClassifyField == null) return 1;
          return b.cacheClassifyField.localeCompare(a.cacheClassifyField);
        };
      case clsPrjTabEN.con_CacheClassifyField2:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.cacheClassifyField2 == null) return -1;
          if (a.cacheClassifyField2 == null) return 1;
          return b.cacheClassifyField2.localeCompare(a.cacheClassifyField2);
        };
      case clsPrjTabEN.con_CacheModeId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.cacheModeId == null) return -1;
          if (a.cacheModeId == null) return 1;
          return b.cacheModeId.localeCompare(a.cacheModeId);
        };
      case clsPrjTabEN.con_CacheClassifyFieldTS:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.cacheClassifyFieldTS == null) return -1;
          if (a.cacheClassifyFieldTS == null) return 1;
          return b.cacheClassifyFieldTS.localeCompare(a.cacheClassifyFieldTS);
        };
      case clsPrjTabEN.con_CacheClassifyField2TS:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.cacheClassifyField2TS == null) return -1;
          if (a.cacheClassifyField2TS == null) return 1;
          return b.cacheClassifyField2TS.localeCompare(a.cacheClassifyField2TS);
        };
      case clsPrjTabEN.con_ParaVar2TS:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.paraVar2TS == null) return -1;
          if (a.paraVar2TS == null) return 1;
          return b.paraVar2TS.localeCompare(a.paraVar2TS);
        };
      case clsPrjTabEN.con_ParaVar1TS:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.paraVar1TS == null) return -1;
          if (a.paraVar1TS == null) return 1;
          return b.paraVar1TS.localeCompare(a.paraVar1TS);
        };
      case clsPrjTabEN.con_WhereFormat:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.whereFormat == null) return -1;
          if (a.whereFormat == null) return 1;
          return b.whereFormat.localeCompare(a.whereFormat);
        };
      case clsPrjTabEN.con_WhereFormatBack:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.whereFormatBack == null) return -1;
          if (a.whereFormatBack == null) return 1;
          return b.whereFormatBack.localeCompare(a.whereFormatBack);
        };
      case clsPrjTabEN.con_IsRefresh4RelaView:
        return (b: clsPrjTabEN) => {
          if (b.isRefresh4RelaView == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_TabRecNum:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.tabRecNum - a.tabRecNum;
        };
      case clsPrjTabEN.con_KeyId4Test:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.keyId4Test == null) return -1;
          if (a.keyId4Test == null) return 1;
          return b.keyId4Test.localeCompare(a.keyId4Test);
        };
      case clsPrjTabEN.con_ErrMsg:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsPrjTabEN.con_FldNum:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.fldNum - a.fldNum;
        };
      case clsPrjTabEN.con_UpdUserId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsPrjTabEN.con_UpdDate:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjTabEN.con_Memo:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsPrjTabEN.con_OrderNum4Refer:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          return b.orderNum4Refer - a.orderNum4Refer;
        };
      case clsPrjTabEN.con_IsChecked:
        return (b: clsPrjTabEN) => {
          if (b.isChecked == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_Owner:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.owner == null) return -1;
          if (a.owner == null) return 1;
          return b.owner.localeCompare(a.owner);
        };
      case clsPrjTabEN.con_TabEnName:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.tabEnName == null) return -1;
          if (a.tabEnName == null) return 1;
          return b.tabEnName.localeCompare(a.tabEnName);
        };
      case clsPrjTabEN.con_IsNeedTransCode:
        return (b: clsPrjTabEN) => {
          if (b.isNeedTransCode == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_TabNameB:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.tabNameB == null) return -1;
          if (a.tabNameB == null) return 1;
          return b.tabNameB.localeCompare(a.tabNameB);
        };
      case clsPrjTabEN.con_RelaViewId:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.relaViewId == null) return -1;
          if (a.relaViewId == null) return 1;
          return b.relaViewId.localeCompare(a.relaViewId);
        };
      case clsPrjTabEN.con_DataBaseName:
        return (a: clsPrjTabEN, b: clsPrjTabEN) => {
          if (b.dataBaseName == null) return -1;
          if (a.dataBaseName == null) return 1;
          return b.dataBaseName.localeCompare(a.dataBaseName);
        };
      case clsPrjTabEN.con_IsNationStandard:
        return (b: clsPrjTabEN) => {
          if (b.isNationStandard == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsParaTab:
        return (b: clsPrjTabEN) => {
          if (b.isParaTab == true) return 1;
          else return -1;
        };
      case clsPrjTabEN.con_IsArchive:
        return (b: clsPrjTabEN) => {
          if (b.isArchive == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTab]中不存在!(in ${prjTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjTab_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjTabEN.con_TabId:
      return (obj: clsPrjTabEN) => {
        return obj.tabId === value;
      };
    case clsPrjTabEN.con_TabName:
      return (obj: clsPrjTabEN) => {
        return obj.tabName === value;
      };
    case clsPrjTabEN.con_TabCnName:
      return (obj: clsPrjTabEN) => {
        return obj.tabCnName === value;
      };
    case clsPrjTabEN.con_PrjId:
      return (obj: clsPrjTabEN) => {
        return obj.prjId === value;
      };
    case clsPrjTabEN.con_SqlDsTypeId:
      return (obj: clsPrjTabEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsPrjTabEN.con_TabStateId:
      return (obj: clsPrjTabEN) => {
        return obj.tabStateId === value;
      };
    case clsPrjTabEN.con_FuncModuleAgcId:
      return (obj: clsPrjTabEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsPrjTabEN.con_IsReleToSqlTab:
      return (obj: clsPrjTabEN) => {
        return obj.isReleToSqlTab === value;
      };
    case clsPrjTabEN.con_Keyword:
      return (obj: clsPrjTabEN) => {
        return obj.keyword === value;
      };
    case clsPrjTabEN.con_TabTypeId:
      return (obj: clsPrjTabEN) => {
        return obj.tabTypeId === value;
      };
    case clsPrjTabEN.con_TabMainTypeId:
      return (obj: clsPrjTabEN) => {
        return obj.tabMainTypeId === value;
      };
    case clsPrjTabEN.con_RelaTabId4View:
      return (obj: clsPrjTabEN) => {
        return obj.relaTabId4View === value;
      };
    case clsPrjTabEN.con_IsNeedGeneIndexer:
      return (obj: clsPrjTabEN) => {
        return obj.isNeedGeneIndexer === value;
      };
    case clsPrjTabEN.con_ParentClass:
      return (obj: clsPrjTabEN) => {
        return obj.parentClass === value;
      };
    case clsPrjTabEN.con_IsShare:
      return (obj: clsPrjTabEN) => {
        return obj.isShare === value;
      };
    case clsPrjTabEN.con_IsUseDelSign:
      return (obj: clsPrjTabEN) => {
        return obj.isUseDelSign === value;
      };
    case clsPrjTabEN.con_IsUseCache:
      return (obj: clsPrjTabEN) => {
        return obj.isUseCache === value;
      };
    case clsPrjTabEN.con_IsMultiKeyClassify:
      return (obj: clsPrjTabEN) => {
        return obj.isMultiKeyClassify === value;
      };
    case clsPrjTabEN.con_CacheClassifyField:
      return (obj: clsPrjTabEN) => {
        return obj.cacheClassifyField === value;
      };
    case clsPrjTabEN.con_CacheClassifyField2:
      return (obj: clsPrjTabEN) => {
        return obj.cacheClassifyField2 === value;
      };
    case clsPrjTabEN.con_CacheModeId:
      return (obj: clsPrjTabEN) => {
        return obj.cacheModeId === value;
      };
    case clsPrjTabEN.con_CacheClassifyFieldTS:
      return (obj: clsPrjTabEN) => {
        return obj.cacheClassifyFieldTS === value;
      };
    case clsPrjTabEN.con_CacheClassifyField2TS:
      return (obj: clsPrjTabEN) => {
        return obj.cacheClassifyField2TS === value;
      };
    case clsPrjTabEN.con_ParaVar2TS:
      return (obj: clsPrjTabEN) => {
        return obj.paraVar2TS === value;
      };
    case clsPrjTabEN.con_ParaVar1TS:
      return (obj: clsPrjTabEN) => {
        return obj.paraVar1TS === value;
      };
    case clsPrjTabEN.con_WhereFormat:
      return (obj: clsPrjTabEN) => {
        return obj.whereFormat === value;
      };
    case clsPrjTabEN.con_WhereFormatBack:
      return (obj: clsPrjTabEN) => {
        return obj.whereFormatBack === value;
      };
    case clsPrjTabEN.con_IsRefresh4RelaView:
      return (obj: clsPrjTabEN) => {
        return obj.isRefresh4RelaView === value;
      };
    case clsPrjTabEN.con_TabRecNum:
      return (obj: clsPrjTabEN) => {
        return obj.tabRecNum === value;
      };
    case clsPrjTabEN.con_KeyId4Test:
      return (obj: clsPrjTabEN) => {
        return obj.keyId4Test === value;
      };
    case clsPrjTabEN.con_ErrMsg:
      return (obj: clsPrjTabEN) => {
        return obj.errMsg === value;
      };
    case clsPrjTabEN.con_FldNum:
      return (obj: clsPrjTabEN) => {
        return obj.fldNum === value;
      };
    case clsPrjTabEN.con_UpdUserId:
      return (obj: clsPrjTabEN) => {
        return obj.updUserId === value;
      };
    case clsPrjTabEN.con_UpdDate:
      return (obj: clsPrjTabEN) => {
        return obj.updDate === value;
      };
    case clsPrjTabEN.con_Memo:
      return (obj: clsPrjTabEN) => {
        return obj.memo === value;
      };
    case clsPrjTabEN.con_OrderNum4Refer:
      return (obj: clsPrjTabEN) => {
        return obj.orderNum4Refer === value;
      };
    case clsPrjTabEN.con_IsChecked:
      return (obj: clsPrjTabEN) => {
        return obj.isChecked === value;
      };
    case clsPrjTabEN.con_Owner:
      return (obj: clsPrjTabEN) => {
        return obj.owner === value;
      };
    case clsPrjTabEN.con_TabEnName:
      return (obj: clsPrjTabEN) => {
        return obj.tabEnName === value;
      };
    case clsPrjTabEN.con_IsNeedTransCode:
      return (obj: clsPrjTabEN) => {
        return obj.isNeedTransCode === value;
      };
    case clsPrjTabEN.con_TabNameB:
      return (obj: clsPrjTabEN) => {
        return obj.tabNameB === value;
      };
    case clsPrjTabEN.con_RelaViewId:
      return (obj: clsPrjTabEN) => {
        return obj.relaViewId === value;
      };
    case clsPrjTabEN.con_DataBaseName:
      return (obj: clsPrjTabEN) => {
        return obj.dataBaseName === value;
      };
    case clsPrjTabEN.con_IsNationStandard:
      return (obj: clsPrjTabEN) => {
        return obj.isNationStandard === value;
      };
    case clsPrjTabEN.con_IsParaTab:
      return (obj: clsPrjTabEN) => {
        return obj.isParaTab === value;
      };
    case clsPrjTabEN.con_IsArchive:
      return (obj: clsPrjTabEN) => {
        return obj.isArchive === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjTab]中不存在!(in ${prjTab_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[PrjTab__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTab_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
export async function PrjTab_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
export async function PrjTab_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
export async function PrjTab_GetFirstObjAsync(strWhereCond: string): Promise<clsPrjTabEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
      const objPrjTab = PrjTab_GetObjFromJsonObj(returnObj);
      return objPrjTab;
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjTab_GetObjLstAsync(strWhereCond: string): Promise<Array<clsPrjTabEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
          prjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTabId:关键字列表
 * @returns 对象列表
 **/
export async function PrjTab_GetObjLstByTabIdLstAsync(
  arrTabId: Array<string>,
): Promise<Array<clsPrjTabEN>> {
  const strThisFuncName = 'GetObjLstByTabIdLstAsync';
  const strAction = 'GetObjLstByTabIdLst';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByTabIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function PrjTab_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjTabEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
          prjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
export async function PrjTab_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjTabEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
          prjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjTab_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTabEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
          prjTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
 * @param strTabId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjTab_DelRecordAsync(strTabId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjTab_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTabId);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
 * @param arrTabId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjTab_DelPrjTabsAsync(arrTabId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelPrjTabsAsync';
  const strAction = 'DelPrjTabs';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objPrjTabENS:源对象
 * @returns 目标对象=>clsPrjTabEN:objPrjTabENT
 **/
export function PrjTab_CopyToEx(objPrjTabENS: clsPrjTabEN): clsPrjTabENEx {
  const strThisFuncName = PrjTab_CopyToEx.name;
  const objPrjTabENT = new clsPrjTabENEx();
  try {
    ObjectAssign(objPrjTabENT, objPrjTabENS);
    return objPrjTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjTab_FuncMapByFldName(strFldName: string, objPrjTabEx: clsPrjTabENEx) {
  const strThisFuncName = PrjTab_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjTabEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjTabENEx.con_FuncModuleName:
      return PrjTab_FuncMapFuncModuleName(objPrjTabEx);
    case clsPrjTabENEx.con_SqlDsTypeName:
      return PrjTab_FuncMapSqlDsTypeName(objPrjTabEx);
    case clsPrjTabENEx.con_TabStateName:
      return PrjTab_FuncMapTabStateName(objPrjTabEx);
    case clsPrjTabENEx.con_TabMainTypeName:
      return PrjTab_FuncMapTabMainTypeName(objPrjTabEx);
    case clsPrjTabENEx.con_TabTypeName:
      return PrjTab_FuncMapTabTypeName(objPrjTabEx);
    case clsPrjTabENEx.con_RelaTabName4View:
      return PrjTab_FuncMapRelaTabName4View(objPrjTabEx);
    case clsPrjTabENEx.con_PrjName:
      return PrjTab_FuncMapPrjName(objPrjTabEx);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTab_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabENEx.con_FuncModuleName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.funcModuleName.localeCompare(b.funcModuleName);
        };
      case clsPrjTabENEx.con_SqlDsTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsPrjTabENEx.con_TabStateName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.tabStateName.localeCompare(b.tabStateName);
        };
      case clsPrjTabENEx.con_TabMainTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.tabMainTypeName === null && b.tabMainTypeName === null) return 0;
          if (a.tabMainTypeName === null) return -1;
          if (b.tabMainTypeName === null) return 1;
          return a.tabMainTypeName.localeCompare(b.tabMainTypeName);
        };
      case clsPrjTabENEx.con_TabTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.tabTypeName.localeCompare(b.tabTypeName);
        };
      case clsPrjTabENEx.con_DateTimeSim:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return -1;
          if (b.dateTimeSim === null) return 1;
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsPrjTabENEx.con_RelaTabName4View:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.relaTabName4View === null && b.relaTabName4View === null) return 0;
          if (a.relaTabName4View === null) return -1;
          if (b.relaTabName4View === null) return 1;
          return a.relaTabName4View.localeCompare(b.relaTabName4View);
        };
      case clsPrjTabENEx.con_PrjName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsPrjTabENEx.con_TabFeatureConstraint:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.tabFeatureConstraint === null && b.tabFeatureConstraint === null) return 0;
          if (a.tabFeatureConstraint === null) return -1;
          if (b.tabFeatureConstraint === null) return 1;
          return a.tabFeatureConstraint.localeCompare(b.tabFeatureConstraint);
        };
      case clsPrjTabENEx.con_TabNameEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.tabNameEx === null && b.tabNameEx === null) return 0;
          if (a.tabNameEx === null) return -1;
          if (b.tabNameEx === null) return 1;
          return a.tabNameEx.localeCompare(b.tabNameEx);
        };
      case clsPrjTabENEx.con_TabTypeNameEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.tabTypeNameEx === null && b.tabTypeNameEx === null) return 0;
          if (a.tabTypeNameEx === null) return -1;
          if (b.tabTypeNameEx === null) return 1;
          return a.tabTypeNameEx.localeCompare(b.tabTypeNameEx);
        };
      case clsPrjTabENEx.con_CacheClassifyField4TSEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.cacheClassifyField4TSEx === null && b.cacheClassifyField4TSEx === null) return 0;
          if (a.cacheClassifyField4TSEx === null) return -1;
          if (b.cacheClassifyField4TSEx === null) return 1;
          return a.cacheClassifyField4TSEx.localeCompare(b.cacheClassifyField4TSEx);
        };
      case clsPrjTabENEx.con_CacheClassifyFieldEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.cacheClassifyFieldEx === null && b.cacheClassifyFieldEx === null) return 0;
          if (a.cacheClassifyFieldEx === null) return -1;
          if (b.cacheClassifyFieldEx === null) return 1;
          return a.cacheClassifyFieldEx.localeCompare(b.cacheClassifyFieldEx);
        };
      case clsPrjTabENEx.con_CmPrjNames:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.cmPrjNames === null && b.cmPrjNames === null) return 0;
          if (a.cmPrjNames === null) return -1;
          if (b.cmPrjNames === null) return 1;
          return a.cmPrjNames.localeCompare(b.cmPrjNames);
        };
      case clsPrjTabENEx.con_PrimaryTypeNameEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.primaryTypeNameEx === null && b.primaryTypeNameEx === null) return 0;
          if (a.primaryTypeNameEx === null) return -1;
          if (b.primaryTypeNameEx === null) return 1;
          return a.primaryTypeNameEx.localeCompare(b.primaryTypeNameEx);
        };
      case clsPrjTabENEx.con_PrimaryTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.primaryTypeName.localeCompare(b.primaryTypeName);
        };
      case clsPrjTabENEx.con_TrClass:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsPrjTabENEx.con_KeyFldNames:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.keyFldNames === null && b.keyFldNames === null) return 0;
          if (a.keyFldNames === null) return -1;
          if (b.keyFldNames === null) return 1;
          return a.keyFldNames.localeCompare(b.keyFldNames);
        };
      case clsPrjTabENEx.con_PrimaryTypeId:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.primaryTypeId.localeCompare(b.primaryTypeId);
        };
      case clsPrjTabENEx.con_IncludeFldId:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.includeFldId.localeCompare(b.includeFldId);
        };
      case clsPrjTabENEx.con_FeatureId:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsPrjTabENEx.con_Checked:
        return (a: clsPrjTabENEx) => {
          if (a.checked == true) return 1;
          else return -1;
        };
      default:
        return PrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjTabENEx.con_FuncModuleName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.funcModuleName.localeCompare(a.funcModuleName);
        };
      case clsPrjTabENEx.con_SqlDsTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsPrjTabENEx.con_TabStateName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.tabStateName.localeCompare(a.tabStateName);
        };
      case clsPrjTabENEx.con_TabMainTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.tabMainTypeName === null && b.tabMainTypeName === null) return 0;
          if (a.tabMainTypeName === null) return 1;
          if (b.tabMainTypeName === null) return -1;
          return b.tabMainTypeName.localeCompare(a.tabMainTypeName);
        };
      case clsPrjTabENEx.con_TabTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.tabTypeName.localeCompare(a.tabTypeName);
        };
      case clsPrjTabENEx.con_DateTimeSim:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return 1;
          if (b.dateTimeSim === null) return -1;
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsPrjTabENEx.con_RelaTabName4View:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.relaTabName4View === null && b.relaTabName4View === null) return 0;
          if (a.relaTabName4View === null) return 1;
          if (b.relaTabName4View === null) return -1;
          return b.relaTabName4View.localeCompare(a.relaTabName4View);
        };
      case clsPrjTabENEx.con_PrjName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsPrjTabENEx.con_TabFeatureConstraint:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.tabFeatureConstraint === null && b.tabFeatureConstraint === null) return 0;
          if (a.tabFeatureConstraint === null) return 1;
          if (b.tabFeatureConstraint === null) return -1;
          return b.tabFeatureConstraint.localeCompare(a.tabFeatureConstraint);
        };
      case clsPrjTabENEx.con_TabNameEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.tabNameEx === null && b.tabNameEx === null) return 0;
          if (a.tabNameEx === null) return 1;
          if (b.tabNameEx === null) return -1;
          return b.tabNameEx.localeCompare(a.tabNameEx);
        };
      case clsPrjTabENEx.con_TabTypeNameEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.tabTypeNameEx === null && b.tabTypeNameEx === null) return 0;
          if (a.tabTypeNameEx === null) return 1;
          if (b.tabTypeNameEx === null) return -1;
          return b.tabTypeNameEx.localeCompare(a.tabTypeNameEx);
        };
      case clsPrjTabENEx.con_CacheClassifyField4TSEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.cacheClassifyField4TSEx === null && b.cacheClassifyField4TSEx === null) return 0;
          if (a.cacheClassifyField4TSEx === null) return 1;
          if (b.cacheClassifyField4TSEx === null) return -1;
          return b.cacheClassifyField4TSEx.localeCompare(a.cacheClassifyField4TSEx);
        };
      case clsPrjTabENEx.con_CacheClassifyFieldEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.cacheClassifyFieldEx === null && b.cacheClassifyFieldEx === null) return 0;
          if (a.cacheClassifyFieldEx === null) return 1;
          if (b.cacheClassifyFieldEx === null) return -1;
          return b.cacheClassifyFieldEx.localeCompare(a.cacheClassifyFieldEx);
        };
      case clsPrjTabENEx.con_CmPrjNames:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.cmPrjNames === null && b.cmPrjNames === null) return 0;
          if (a.cmPrjNames === null) return 1;
          if (b.cmPrjNames === null) return -1;
          return b.cmPrjNames.localeCompare(a.cmPrjNames);
        };
      case clsPrjTabENEx.con_PrimaryTypeNameEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.primaryTypeNameEx === null && b.primaryTypeNameEx === null) return 0;
          if (a.primaryTypeNameEx === null) return 1;
          if (b.primaryTypeNameEx === null) return -1;
          return b.primaryTypeNameEx.localeCompare(a.primaryTypeNameEx);
        };
      case clsPrjTabENEx.con_PrimaryTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.primaryTypeName.localeCompare(a.primaryTypeName);
        };
      case clsPrjTabENEx.con_TrClass:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsPrjTabENEx.con_KeyFldNames:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          if (a.keyFldNames === null && b.keyFldNames === null) return 0;
          if (a.keyFldNames === null) return 1;
          if (b.keyFldNames === null) return -1;
          return b.keyFldNames.localeCompare(a.keyFldNames);
        };
      case clsPrjTabENEx.con_PrimaryTypeId:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.primaryTypeId.localeCompare(a.primaryTypeId);
        };
      case clsPrjTabENEx.con_IncludeFldId:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.includeFldId.localeCompare(a.includeFldId);
        };
      case clsPrjTabENEx.con_FeatureId:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsPrjTabENEx.con_Checked:
        return (b: clsPrjTabENEx) => {
          if (b.checked == true) return 1;
          else return -1;
        };
      default:
        return PrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTab_FuncMapFuncModuleName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTab_FuncMapFuncModuleName.name;
  try {
    if (IsNullOrEmpty(objPrjTab.funcModuleName) == true) {
      const FuncModuleAgcFuncModuleAgcId = objPrjTab.funcModuleAgcId;
      if (IsNullOrEmpty(objPrjTab.prjId) == true) {
        const strMsg = `函数映射[FuncModuleName]数据出错,prjId不能为空!(in ${prjTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FuncModuleAgcFuncModuleName = await FuncModule_Agc_func(
        clsFuncModule_AgcEN.con_FuncModuleAgcId,
        clsFuncModule_AgcEN.con_FuncModuleName,
        FuncModuleAgcFuncModuleAgcId,
        objPrjTab.prjId,
      );
      objPrjTab.funcModuleName = FuncModuleAgcFuncModuleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001372)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTab_FuncMapSqlDsTypeName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTab_FuncMapSqlDsTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTab.sqlDsTypeName) == true) {
      const SQLDSTypeSqlDsTypeId = objPrjTab.sqlDsTypeId;
      const SQLDSTypeSqlDsTypeName = await SQLDSType_func(
        clsSQLDSTypeEN.con_SqlDsTypeId,
        clsSQLDSTypeEN.con_SqlDsTypeName,
        SQLDSTypeSqlDsTypeId,
      );
      objPrjTab.sqlDsTypeName = SQLDSTypeSqlDsTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001323)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTab_FuncMapTabStateName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTab_FuncMapTabStateName.name;
  try {
    if (IsNullOrEmpty(objPrjTab.tabStateName) == true) {
      const TabStateTabStateId = objPrjTab.tabStateId;
      const TabStateTabStateName = await TabState_func(
        clsTabStateEN.con_TabStateId,
        clsTabStateEN.con_TabStateName,
        TabStateTabStateId,
      );
      objPrjTab.tabStateName = TabStateTabStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001373)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTab_FuncMapTabMainTypeName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTab_FuncMapTabMainTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTab.tabMainTypeName) == true) {
      const TabMainTypeTabMainTypeId = objPrjTab.tabMainTypeId;
      const TabMainTypeTabMainTypeName = await TabMainType_func(
        clsTabMainTypeEN.con_TabMainTypeId,
        clsTabMainTypeEN.con_TabMainTypeName,
        TabMainTypeTabMainTypeId,
      );
      objPrjTab.tabMainTypeName = TabMainTypeTabMainTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001374)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTab_FuncMapTabTypeName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTab_FuncMapTabTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTab.tabTypeName) == true) {
      const TabTypeTabTypeId = objPrjTab.tabTypeId;
      const TabTypeTabTypeName = await TabType_func(
        clsTabTypeEN.con_TabTypeId,
        clsTabTypeEN.con_TabTypeName,
        TabTypeTabTypeId,
      );
      objPrjTab.tabTypeName = TabTypeTabTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001375)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTab_FuncMapRelaTabName4View(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTab_FuncMapRelaTabName4View.name;
  try {
    if (IsNullOrEmpty(objPrjTab.relaTabName4View) == true) {
      const vPrjTabSimTabId = objPrjTab.relaTabId4View;
      objPrjTab.relaTabName4View = vPrjTabSimTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001376)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTab_FuncMapPrjName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTab_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objPrjTab.prjName) == true) {
      const ProjectsPrjId = objPrjTab.prjId;
      const ProjectsPrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        ProjectsPrjId,
      );
      objPrjTab.prjName = ProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001315)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTab_ConstructorName,
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
export async function PrjTab_DelPrjTabsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelPrjTabsByCondAsync';
  const strAction = 'DelPrjTabsByCond';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
 * @param objPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTab_AddNewRecordAsync(objPrjTabEN: clsPrjTabEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objPrjTabEN.tabId === null || objPrjTabEN.tabId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjTabEN);
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabEN, config);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
 * @param objPrjTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTab_AddNewRecordWithMaxIdAsync(objPrjTabEN: clsPrjTabEN): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabEN, config);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
export async function PrjTab_AddNewObjSave(objPrjTabEN: clsPrjTabEN): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjTab_CheckPropertyNew(objPrjTabEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjTab_CheckUniCond4Add(objPrjTabEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await PrjTab_AddNewRecordWithMaxIdAsync(objPrjTabEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //PrjTab_ReFreshCache();
    } else {
      const strInfo = `添加[工程表(PrjTab)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function PrjTab_CheckUniCond4Add(objPrjTabEN: clsPrjTabEN): Promise<boolean> {
  const strUniquenessCondition = PrjTab_GetUniCondStr(objPrjTabEN);
  const bolIsExistCondition = await PrjTab_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjTab_CheckUniCond4Update(objPrjTabEN: clsPrjTabEN): Promise<boolean> {
  const strUniquenessCondition = PrjTab_GetUniCondStr4Update(objPrjTabEN);
  const bolIsExistCondition = await PrjTab_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjTab_UpdateObjSave(objPrjTabEN: clsPrjTabEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjTabEN.sfUpdFldSetStr = objPrjTabEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrjTabEN.tabId == '' || objPrjTabEN.tabId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjTab_CheckProperty4Update(objPrjTabEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjTab_CheckUniCond4Update(objPrjTabEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await PrjTab_UpdateRecordAsync(objPrjTabEN);
    if (returnBool == true) {
      //PrjTab_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPrjTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjTab_AddNewRecordWithReturnKeyAsync(
  objPrjTabEN: clsPrjTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabEN, config);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
 * @param objPrjTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTab_UpdateRecordAsync(objPrjTabEN: clsPrjTabEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjTabEN.sfUpdFldSetStr === undefined ||
    objPrjTabEN.sfUpdFldSetStr === null ||
    objPrjTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabEN.tabId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabEN, config);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
 * @param objPrjTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTab_EditRecordExAsync(objPrjTabEN: clsPrjTabEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjTabEN.sfUpdFldSetStr === undefined ||
    objPrjTabEN.sfUpdFldSetStr === null ||
    objPrjTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabEN.tabId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabEN, config);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
 * @param objPrjTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTab_UpdateWithConditionAsync(
  objPrjTabEN: clsPrjTabEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjTabEN.sfUpdFldSetStr === undefined ||
    objPrjTabEN.sfUpdFldSetStr === null ||
    objPrjTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objPrjTabEN.tabId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);
  objPrjTabEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabEN, config);
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function PrjTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strTabId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjTab_IsExistAsync(strTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
export async function PrjTab_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function PrjTab_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
export async function PrjTab_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjTab_Controller, strAction);

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
        prjTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTab_ConstructorName,
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
export function PrjTab_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function PrjTab_BindDdl_TabIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsPrjTabWApi.BindDdl_TabIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsPrjTabWApi.BindDdl_TabIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_TabIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabIdInDivCache");
  const strCondition = `prjId = '${strPrjId}'`;
  let arrObjLstSel = await PrjTab_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.tabName.localeCompare(y.tabName));
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjTabEN.con_TabId,
    clsPrjTabEN.con_TabName,
    '工程表...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function PrjTab_GetArrPrjTabByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsPrjTabWApi.BindDdl_TabIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsPrjTabWApi.BindDdl_TabIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabIdInDivCache");
  const arrPrjTab = new Array<clsPrjTabEN>();
  const strCondition = `prjId = '${strPrjId}'`;
  let arrObjLstSel = await PrjTab_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    return x.tabName.localeCompare(y.tabName);
  });
  const obj0 = new clsPrjTabEN();
  obj0.tabId = '0';
  obj0.tabName = '选工程表...';
  arrPrjTab.push(obj0);
  arrObjLstSel.forEach((x) => arrPrjTab.push(x));
  return arrPrjTab;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTab_CheckPropertyNew(pobjPrjTabEN: clsPrjTabEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjTabEN.tabName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[表名]不能为空(In 工程表)!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.prjId) === true || pobjPrjTabEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 工程表)!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabStateId) === true ||
    pobjPrjTabEN.tabStateId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[表状态ID]不能为空(In 工程表)!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabEN.isReleToSqlTab ||
    (pobjPrjTabEN.isReleToSqlTab != null && pobjPrjTabEN.isReleToSqlTab.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否与SQL表相关]不能为空(In 工程表)!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabTypeId) === true || pobjPrjTabEN.tabTypeId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[表类型Id]不能为空(In 工程表)!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabMainTypeId) === true ||
    pobjPrjTabEN.tabMainTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[表主类型Id]不能为空(In 工程表)!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjTabEN.isNeedTransCode ||
    (pobjPrjTabEN.isNeedTransCode != null && pobjPrjTabEN.isNeedTransCode.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否需要转换代码]不能为空(In 工程表)!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjTabEN.tabId) == false && GetStrLen(pobjPrjTabEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabName) == false && GetStrLen(pobjPrjTabEN.tabName) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[表名(tabName)]的长度不能超过100(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabName}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabCnName) == false && GetStrLen(pobjPrjTabEN.tabCnName) > 200) {
    throw new Error(
      `(errid:Watl000413)字段[表中文名(tabCnName)]的长度不能超过200(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabCnName}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.prjId) == false && GetStrLen(pobjPrjTabEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 工程表(PrjTab))!值:${pobjPrjTabEN.prjId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.sqlDsTypeId) == false && GetStrLen(pobjPrjTabEN.sqlDsTypeId) > 2) {
    throw new Error(
      `(errid:Watl000413)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 工程表(PrjTab))!值:${pobjPrjTabEN.sqlDsTypeId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabStateId) == false && GetStrLen(pobjPrjTabEN.tabStateId) > 2) {
    throw new Error(
      `(errid:Watl000413)字段[表状态ID(tabStateId)]的长度不能超过2(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabStateId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.funcModuleAgcId) == false &&
    GetStrLen(pobjPrjTabEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.funcModuleAgcId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.keyword) == false && GetStrLen(pobjPrjTabEN.keyword) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[关键字(keyword)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.keyword}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabTypeId) == false && GetStrLen(pobjPrjTabEN.tabTypeId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[表类型Id(tabTypeId)]的长度不能超过4(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabTypeId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabMainTypeId) == false &&
    GetStrLen(pobjPrjTabEN.tabMainTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表主类型Id(tabMainTypeId)]的长度不能超过4(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabMainTypeId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.relaTabId4View) == false &&
    GetStrLen(pobjPrjTabEN.relaTabId4View) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[视图的相关表ID(relaTabId4View)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.relaTabId4View}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.parentClass) == false &&
    GetStrLen(pobjPrjTabEN.parentClass) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[父类(parentClass)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.parentClass}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField) == false &&
    GetStrLen(pobjPrjTabEN.cacheClassifyField) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缓存分类字段(cacheClassifyField)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheClassifyField}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField2) == false &&
    GetStrLen(pobjPrjTabEN.cacheClassifyField2) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缓存分类字段2(cacheClassifyField2)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheClassifyField2}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.cacheModeId) == false && GetStrLen(pobjPrjTabEN.cacheModeId) > 2) {
    throw new Error(
      `(errid:Watl000413)字段[缓存方式Id(cacheModeId)]的长度不能超过2(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheModeId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyFieldTS) == false &&
    GetStrLen(pobjPrjTabEN.cacheClassifyFieldTS) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缓存分类字段_TS(cacheClassifyFieldTS)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheClassifyFieldTS}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField2TS) == false &&
    GetStrLen(pobjPrjTabEN.cacheClassifyField2TS) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缓存分类字段2_TS(cacheClassifyField2TS)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheClassifyField2TS}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.paraVar2TS) == false && GetStrLen(pobjPrjTabEN.paraVar2TS) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[参数变量2_TS(paraVar2TS)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.paraVar2TS}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.paraVar1TS) == false && GetStrLen(pobjPrjTabEN.paraVar1TS) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[参数变量_TS(paraVar1TS)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.paraVar1TS}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.whereFormat) == false &&
    GetStrLen(pobjPrjTabEN.whereFormat) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缓存条件格式(whereFormat)]的长度不能超过500(In 工程表(PrjTab))!值:${pobjPrjTabEN.whereFormat}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.whereFormatBack) == false &&
    GetStrLen(pobjPrjTabEN.whereFormatBack) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[后台缓存条件格式(whereFormatBack)]的长度不能超过500(In 工程表(PrjTab))!值:${pobjPrjTabEN.whereFormatBack}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.keyId4Test) == false && GetStrLen(pobjPrjTabEN.keyId4Test) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[测试关键字Id(keyId4Test)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.keyId4Test}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.errMsg) == false && GetStrLen(pobjPrjTabEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 工程表(PrjTab))!值:${pobjPrjTabEN.errMsg}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.updUserId) == false && GetStrLen(pobjPrjTabEN.updUserId) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程表(PrjTab))!值:${pobjPrjTabEN.updUserId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.updDate) == false && GetStrLen(pobjPrjTabEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程表(PrjTab))!值:${pobjPrjTabEN.updDate}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.memo) == false && GetStrLen(pobjPrjTabEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程表(PrjTab))!值:${pobjPrjTabEN.memo}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.owner) == false && GetStrLen(pobjPrjTabEN.owner) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[拥有者(owner)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.owner}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabEnName) == false && GetStrLen(pobjPrjTabEN.tabEnName) > 200) {
    throw new Error(
      `(errid:Watl000413)字段[表英文详细名(tabEnName)]的长度不能超过200(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabEnName}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabNameB) == false && GetStrLen(pobjPrjTabEN.tabNameB) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[表名_后备(tabNameB)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabNameB}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.relaViewId) == false && GetStrLen(pobjPrjTabEN.relaViewId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[RelaViewId(relaViewId)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.relaViewId}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.dataBaseName) == false &&
    GetStrLen(pobjPrjTabEN.dataBaseName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据库名(dataBaseName)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.dataBaseName}(clsPrjTabBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabId) == false &&
    undefined !== pobjPrjTabEN.tabId &&
    tzDataType.isString(pobjPrjTabEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjPrjTabEN.tabId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabName) == false &&
    undefined !== pobjPrjTabEN.tabName &&
    tzDataType.isString(pobjPrjTabEN.tabName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表名(tabName)]的值:[${pobjPrjTabEN.tabName}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabCnName) == false &&
    undefined !== pobjPrjTabEN.tabCnName &&
    tzDataType.isString(pobjPrjTabEN.tabCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表中文名(tabCnName)]的值:[${pobjPrjTabEN.tabCnName}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.prjId) == false &&
    undefined !== pobjPrjTabEN.prjId &&
    tzDataType.isString(pobjPrjTabEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjPrjTabEN.prjId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.sqlDsTypeId) == false &&
    undefined !== pobjPrjTabEN.sqlDsTypeId &&
    tzDataType.isString(pobjPrjTabEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源类型Id(sqlDsTypeId)]的值:[${pobjPrjTabEN.sqlDsTypeId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabStateId) == false &&
    undefined !== pobjPrjTabEN.tabStateId &&
    tzDataType.isString(pobjPrjTabEN.tabStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表状态ID(tabStateId)]的值:[${pobjPrjTabEN.tabStateId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.funcModuleAgcId) == false &&
    undefined !== pobjPrjTabEN.funcModuleAgcId &&
    tzDataType.isString(pobjPrjTabEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjPrjTabEN.funcModuleAgcId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isReleToSqlTab &&
    undefined !== pobjPrjTabEN.isReleToSqlTab &&
    tzDataType.isBoolean(pobjPrjTabEN.isReleToSqlTab) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否与SQL表相关(isReleToSqlTab)]的值:[${pobjPrjTabEN.isReleToSqlTab}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.keyword) == false &&
    undefined !== pobjPrjTabEN.keyword &&
    tzDataType.isString(pobjPrjTabEN.keyword) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关键字(keyword)]的值:[${pobjPrjTabEN.keyword}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabTypeId) == false &&
    undefined !== pobjPrjTabEN.tabTypeId &&
    tzDataType.isString(pobjPrjTabEN.tabTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表类型Id(tabTypeId)]的值:[${pobjPrjTabEN.tabTypeId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabMainTypeId) == false &&
    undefined !== pobjPrjTabEN.tabMainTypeId &&
    tzDataType.isString(pobjPrjTabEN.tabMainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表主类型Id(tabMainTypeId)]的值:[${pobjPrjTabEN.tabMainTypeId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.relaTabId4View) == false &&
    undefined !== pobjPrjTabEN.relaTabId4View &&
    tzDataType.isString(pobjPrjTabEN.relaTabId4View) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[视图的相关表ID(relaTabId4View)]的值:[${pobjPrjTabEN.relaTabId4View}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isNeedGeneIndexer &&
    undefined !== pobjPrjTabEN.isNeedGeneIndexer &&
    tzDataType.isBoolean(pobjPrjTabEN.isNeedGeneIndexer) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要生成索引器(isNeedGeneIndexer)]的值:[${pobjPrjTabEN.isNeedGeneIndexer}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.parentClass) == false &&
    undefined !== pobjPrjTabEN.parentClass &&
    tzDataType.isString(pobjPrjTabEN.parentClass) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[父类(parentClass)]的值:[${pobjPrjTabEN.parentClass}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isShare &&
    undefined !== pobjPrjTabEN.isShare &&
    tzDataType.isBoolean(pobjPrjTabEN.isShare) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否共享(isShare)]的值:[${pobjPrjTabEN.isShare}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isUseDelSign &&
    undefined !== pobjPrjTabEN.isUseDelSign &&
    tzDataType.isBoolean(pobjPrjTabEN.isUseDelSign) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否使用删除标记(isUseDelSign)]的值:[${pobjPrjTabEN.isUseDelSign}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isUseCache &&
    undefined !== pobjPrjTabEN.isUseCache &&
    tzDataType.isBoolean(pobjPrjTabEN.isUseCache) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否使用Cache(isUseCache)]的值:[${pobjPrjTabEN.isUseCache}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isMultiKeyClassify &&
    undefined !== pobjPrjTabEN.isMultiKeyClassify &&
    tzDataType.isBoolean(pobjPrjTabEN.isMultiKeyClassify) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否可以多个关键字分类共存(isMultiKeyClassify)]的值:[${pobjPrjTabEN.isMultiKeyClassify}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField) == false &&
    undefined !== pobjPrjTabEN.cacheClassifyField &&
    tzDataType.isString(pobjPrjTabEN.cacheClassifyField) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存分类字段(cacheClassifyField)]的值:[${pobjPrjTabEN.cacheClassifyField}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField2) == false &&
    undefined !== pobjPrjTabEN.cacheClassifyField2 &&
    tzDataType.isString(pobjPrjTabEN.cacheClassifyField2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存分类字段2(cacheClassifyField2)]的值:[${pobjPrjTabEN.cacheClassifyField2}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheModeId) == false &&
    undefined !== pobjPrjTabEN.cacheModeId &&
    tzDataType.isString(pobjPrjTabEN.cacheModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存方式Id(cacheModeId)]的值:[${pobjPrjTabEN.cacheModeId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyFieldTS) == false &&
    undefined !== pobjPrjTabEN.cacheClassifyFieldTS &&
    tzDataType.isString(pobjPrjTabEN.cacheClassifyFieldTS) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存分类字段_TS(cacheClassifyFieldTS)]的值:[${pobjPrjTabEN.cacheClassifyFieldTS}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField2TS) == false &&
    undefined !== pobjPrjTabEN.cacheClassifyField2TS &&
    tzDataType.isString(pobjPrjTabEN.cacheClassifyField2TS) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存分类字段2_TS(cacheClassifyField2TS)]的值:[${pobjPrjTabEN.cacheClassifyField2TS}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.paraVar2TS) == false &&
    undefined !== pobjPrjTabEN.paraVar2TS &&
    tzDataType.isString(pobjPrjTabEN.paraVar2TS) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[参数变量2_TS(paraVar2TS)]的值:[${pobjPrjTabEN.paraVar2TS}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.paraVar1TS) == false &&
    undefined !== pobjPrjTabEN.paraVar1TS &&
    tzDataType.isString(pobjPrjTabEN.paraVar1TS) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[参数变量_TS(paraVar1TS)]的值:[${pobjPrjTabEN.paraVar1TS}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.whereFormat) == false &&
    undefined !== pobjPrjTabEN.whereFormat &&
    tzDataType.isString(pobjPrjTabEN.whereFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缓存条件格式(whereFormat)]的值:[${pobjPrjTabEN.whereFormat}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.whereFormatBack) == false &&
    undefined !== pobjPrjTabEN.whereFormatBack &&
    tzDataType.isString(pobjPrjTabEN.whereFormatBack) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[后台缓存条件格式(whereFormatBack)]的值:[${pobjPrjTabEN.whereFormatBack}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isRefresh4RelaView &&
    undefined !== pobjPrjTabEN.isRefresh4RelaView &&
    tzDataType.isBoolean(pobjPrjTabEN.isRefresh4RelaView) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否刷新相关视图(isRefresh4RelaView)]的值:[${pobjPrjTabEN.isRefresh4RelaView}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.tabRecNum &&
    undefined !== pobjPrjTabEN.tabRecNum &&
    tzDataType.isNumber(pobjPrjTabEN.tabRecNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[记录数(tabRecNum)]的值:[${pobjPrjTabEN.tabRecNum}], 非法,应该为数值型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.keyId4Test) == false &&
    undefined !== pobjPrjTabEN.keyId4Test &&
    tzDataType.isString(pobjPrjTabEN.keyId4Test) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[测试关键字Id(keyId4Test)]的值:[${pobjPrjTabEN.keyId4Test}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.errMsg) == false &&
    undefined !== pobjPrjTabEN.errMsg &&
    tzDataType.isString(pobjPrjTabEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjPrjTabEN.errMsg}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.fldNum &&
    undefined !== pobjPrjTabEN.fldNum &&
    tzDataType.isNumber(pobjPrjTabEN.fldNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段数(fldNum)]的值:[${pobjPrjTabEN.fldNum}], 非法,应该为数值型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.updUserId) == false &&
    undefined !== pobjPrjTabEN.updUserId &&
    tzDataType.isString(pobjPrjTabEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjPrjTabEN.updUserId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.updDate) == false &&
    undefined !== pobjPrjTabEN.updDate &&
    tzDataType.isString(pobjPrjTabEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPrjTabEN.updDate}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.memo) == false &&
    undefined !== pobjPrjTabEN.memo &&
    tzDataType.isString(pobjPrjTabEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjTabEN.memo}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.orderNum4Refer &&
    undefined !== pobjPrjTabEN.orderNum4Refer &&
    tzDataType.isNumber(pobjPrjTabEN.orderNum4Refer) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[引用序号(orderNum4Refer)]的值:[${pobjPrjTabEN.orderNum4Refer}], 非法,应该为数值型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isChecked &&
    undefined !== pobjPrjTabEN.isChecked &&
    tzDataType.isBoolean(pobjPrjTabEN.isChecked) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否核实(isChecked)]的值:[${pobjPrjTabEN.isChecked}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.owner) == false &&
    undefined !== pobjPrjTabEN.owner &&
    tzDataType.isString(pobjPrjTabEN.owner) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[拥有者(owner)]的值:[${pobjPrjTabEN.owner}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabEnName) == false &&
    undefined !== pobjPrjTabEN.tabEnName &&
    tzDataType.isString(pobjPrjTabEN.tabEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表英文详细名(tabEnName)]的值:[${pobjPrjTabEN.tabEnName}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isNeedTransCode &&
    undefined !== pobjPrjTabEN.isNeedTransCode &&
    tzDataType.isBoolean(pobjPrjTabEN.isNeedTransCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要转换代码(isNeedTransCode)]的值:[${pobjPrjTabEN.isNeedTransCode}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabNameB) == false &&
    undefined !== pobjPrjTabEN.tabNameB &&
    tzDataType.isString(pobjPrjTabEN.tabNameB) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表名_后备(tabNameB)]的值:[${pobjPrjTabEN.tabNameB}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.relaViewId) == false &&
    undefined !== pobjPrjTabEN.relaViewId &&
    tzDataType.isString(pobjPrjTabEN.relaViewId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[RelaViewId(relaViewId)]的值:[${pobjPrjTabEN.relaViewId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.dataBaseName) == false &&
    undefined !== pobjPrjTabEN.dataBaseName &&
    tzDataType.isString(pobjPrjTabEN.dataBaseName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据库名(dataBaseName)]的值:[${pobjPrjTabEN.dataBaseName}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isNationStandard &&
    undefined !== pobjPrjTabEN.isNationStandard &&
    tzDataType.isBoolean(pobjPrjTabEN.isNationStandard) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否国标(isNationStandard)]的值:[${pobjPrjTabEN.isNationStandard}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isParaTab &&
    undefined !== pobjPrjTabEN.isParaTab &&
    tzDataType.isBoolean(pobjPrjTabEN.isParaTab) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否参数表(isParaTab)]的值:[${pobjPrjTabEN.isParaTab}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjTabEN.isArchive &&
    undefined !== pobjPrjTabEN.isArchive &&
    tzDataType.isBoolean(pobjPrjTabEN.isArchive) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否存档(isArchive)]的值:[${pobjPrjTabEN.isArchive}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPrjTabEN.prjId) == false &&
    pobjPrjTabEN.prjId != '[nuull]' &&
    GetStrLen(pobjPrjTabEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 工程表)!(clsPrjTabBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.relaTabId4View) == false &&
    pobjPrjTabEN.relaTabId4View != '[nuull]' &&
    GetStrLen(pobjPrjTabEN.relaTabId4View) != 8
  ) {
    throw '(errid:Watl000415)字段[视图的相关表ID]作为外键字段,长度应该为8(In 工程表)!(clsPrjTabBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTab_CheckProperty4Update(pobjPrjTabEN: clsPrjTabEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjTabEN.tabId) == false && GetStrLen(pobjPrjTabEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabName) == false && GetStrLen(pobjPrjTabEN.tabName) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[表名(tabName)]的长度不能超过100(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabName}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabCnName) == false && GetStrLen(pobjPrjTabEN.tabCnName) > 200) {
    throw new Error(
      `(errid:Watl000416)字段[表中文名(tabCnName)]的长度不能超过200(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabCnName}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.prjId) == false && GetStrLen(pobjPrjTabEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 工程表(PrjTab))!值:${pobjPrjTabEN.prjId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.sqlDsTypeId) == false && GetStrLen(pobjPrjTabEN.sqlDsTypeId) > 2) {
    throw new Error(
      `(errid:Watl000416)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 工程表(PrjTab))!值:${pobjPrjTabEN.sqlDsTypeId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabStateId) == false && GetStrLen(pobjPrjTabEN.tabStateId) > 2) {
    throw new Error(
      `(errid:Watl000416)字段[表状态ID(tabStateId)]的长度不能超过2(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabStateId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.funcModuleAgcId) == false &&
    GetStrLen(pobjPrjTabEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.funcModuleAgcId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.keyword) == false && GetStrLen(pobjPrjTabEN.keyword) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[关键字(keyword)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.keyword}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabTypeId) == false && GetStrLen(pobjPrjTabEN.tabTypeId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[表类型Id(tabTypeId)]的长度不能超过4(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabTypeId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabMainTypeId) == false &&
    GetStrLen(pobjPrjTabEN.tabMainTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表主类型Id(tabMainTypeId)]的长度不能超过4(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabMainTypeId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.relaTabId4View) == false &&
    GetStrLen(pobjPrjTabEN.relaTabId4View) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[视图的相关表ID(relaTabId4View)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.relaTabId4View}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.parentClass) == false &&
    GetStrLen(pobjPrjTabEN.parentClass) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[父类(parentClass)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.parentClass}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField) == false &&
    GetStrLen(pobjPrjTabEN.cacheClassifyField) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缓存分类字段(cacheClassifyField)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheClassifyField}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField2) == false &&
    GetStrLen(pobjPrjTabEN.cacheClassifyField2) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缓存分类字段2(cacheClassifyField2)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheClassifyField2}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.cacheModeId) == false && GetStrLen(pobjPrjTabEN.cacheModeId) > 2) {
    throw new Error(
      `(errid:Watl000416)字段[缓存方式Id(cacheModeId)]的长度不能超过2(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheModeId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyFieldTS) == false &&
    GetStrLen(pobjPrjTabEN.cacheClassifyFieldTS) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缓存分类字段_TS(cacheClassifyFieldTS)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheClassifyFieldTS}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField2TS) == false &&
    GetStrLen(pobjPrjTabEN.cacheClassifyField2TS) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缓存分类字段2_TS(cacheClassifyField2TS)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.cacheClassifyField2TS}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.paraVar2TS) == false && GetStrLen(pobjPrjTabEN.paraVar2TS) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[参数变量2_TS(paraVar2TS)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.paraVar2TS}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.paraVar1TS) == false && GetStrLen(pobjPrjTabEN.paraVar1TS) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[参数变量_TS(paraVar1TS)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.paraVar1TS}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.whereFormat) == false &&
    GetStrLen(pobjPrjTabEN.whereFormat) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缓存条件格式(whereFormat)]的长度不能超过500(In 工程表(PrjTab))!值:${pobjPrjTabEN.whereFormat}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.whereFormatBack) == false &&
    GetStrLen(pobjPrjTabEN.whereFormatBack) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[后台缓存条件格式(whereFormatBack)]的长度不能超过500(In 工程表(PrjTab))!值:${pobjPrjTabEN.whereFormatBack}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.keyId4Test) == false && GetStrLen(pobjPrjTabEN.keyId4Test) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[测试关键字Id(keyId4Test)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.keyId4Test}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.errMsg) == false && GetStrLen(pobjPrjTabEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 工程表(PrjTab))!值:${pobjPrjTabEN.errMsg}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.updUserId) == false && GetStrLen(pobjPrjTabEN.updUserId) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程表(PrjTab))!值:${pobjPrjTabEN.updUserId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.updDate) == false && GetStrLen(pobjPrjTabEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程表(PrjTab))!值:${pobjPrjTabEN.updDate}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.memo) == false && GetStrLen(pobjPrjTabEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程表(PrjTab))!值:${pobjPrjTabEN.memo}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.owner) == false && GetStrLen(pobjPrjTabEN.owner) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[拥有者(owner)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.owner}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabEnName) == false && GetStrLen(pobjPrjTabEN.tabEnName) > 200) {
    throw new Error(
      `(errid:Watl000416)字段[表英文详细名(tabEnName)]的长度不能超过200(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabEnName}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.tabNameB) == false && GetStrLen(pobjPrjTabEN.tabNameB) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[表名_后备(tabNameB)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.tabNameB}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjTabEN.relaViewId) == false && GetStrLen(pobjPrjTabEN.relaViewId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[RelaViewId(relaViewId)]的长度不能超过8(In 工程表(PrjTab))!值:${pobjPrjTabEN.relaViewId}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.dataBaseName) == false &&
    GetStrLen(pobjPrjTabEN.dataBaseName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据库名(dataBaseName)]的长度不能超过50(In 工程表(PrjTab))!值:${pobjPrjTabEN.dataBaseName}(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabId) == false &&
    undefined !== pobjPrjTabEN.tabId &&
    tzDataType.isString(pobjPrjTabEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjPrjTabEN.tabId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabName) == false &&
    undefined !== pobjPrjTabEN.tabName &&
    tzDataType.isString(pobjPrjTabEN.tabName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表名(tabName)]的值:[${pobjPrjTabEN.tabName}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabCnName) == false &&
    undefined !== pobjPrjTabEN.tabCnName &&
    tzDataType.isString(pobjPrjTabEN.tabCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表中文名(tabCnName)]的值:[${pobjPrjTabEN.tabCnName}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.prjId) == false &&
    undefined !== pobjPrjTabEN.prjId &&
    tzDataType.isString(pobjPrjTabEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjPrjTabEN.prjId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.sqlDsTypeId) == false &&
    undefined !== pobjPrjTabEN.sqlDsTypeId &&
    tzDataType.isString(pobjPrjTabEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源类型Id(sqlDsTypeId)]的值:[${pobjPrjTabEN.sqlDsTypeId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabStateId) == false &&
    undefined !== pobjPrjTabEN.tabStateId &&
    tzDataType.isString(pobjPrjTabEN.tabStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表状态ID(tabStateId)]的值:[${pobjPrjTabEN.tabStateId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.funcModuleAgcId) == false &&
    undefined !== pobjPrjTabEN.funcModuleAgcId &&
    tzDataType.isString(pobjPrjTabEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjPrjTabEN.funcModuleAgcId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isReleToSqlTab &&
    undefined !== pobjPrjTabEN.isReleToSqlTab &&
    tzDataType.isBoolean(pobjPrjTabEN.isReleToSqlTab) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否与SQL表相关(isReleToSqlTab)]的值:[${pobjPrjTabEN.isReleToSqlTab}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.keyword) == false &&
    undefined !== pobjPrjTabEN.keyword &&
    tzDataType.isString(pobjPrjTabEN.keyword) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关键字(keyword)]的值:[${pobjPrjTabEN.keyword}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabTypeId) == false &&
    undefined !== pobjPrjTabEN.tabTypeId &&
    tzDataType.isString(pobjPrjTabEN.tabTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表类型Id(tabTypeId)]的值:[${pobjPrjTabEN.tabTypeId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabMainTypeId) == false &&
    undefined !== pobjPrjTabEN.tabMainTypeId &&
    tzDataType.isString(pobjPrjTabEN.tabMainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表主类型Id(tabMainTypeId)]的值:[${pobjPrjTabEN.tabMainTypeId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.relaTabId4View) == false &&
    undefined !== pobjPrjTabEN.relaTabId4View &&
    tzDataType.isString(pobjPrjTabEN.relaTabId4View) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[视图的相关表ID(relaTabId4View)]的值:[${pobjPrjTabEN.relaTabId4View}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isNeedGeneIndexer &&
    undefined !== pobjPrjTabEN.isNeedGeneIndexer &&
    tzDataType.isBoolean(pobjPrjTabEN.isNeedGeneIndexer) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要生成索引器(isNeedGeneIndexer)]的值:[${pobjPrjTabEN.isNeedGeneIndexer}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.parentClass) == false &&
    undefined !== pobjPrjTabEN.parentClass &&
    tzDataType.isString(pobjPrjTabEN.parentClass) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[父类(parentClass)]的值:[${pobjPrjTabEN.parentClass}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isShare &&
    undefined !== pobjPrjTabEN.isShare &&
    tzDataType.isBoolean(pobjPrjTabEN.isShare) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否共享(isShare)]的值:[${pobjPrjTabEN.isShare}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isUseDelSign &&
    undefined !== pobjPrjTabEN.isUseDelSign &&
    tzDataType.isBoolean(pobjPrjTabEN.isUseDelSign) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否使用删除标记(isUseDelSign)]的值:[${pobjPrjTabEN.isUseDelSign}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isUseCache &&
    undefined !== pobjPrjTabEN.isUseCache &&
    tzDataType.isBoolean(pobjPrjTabEN.isUseCache) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否使用Cache(isUseCache)]的值:[${pobjPrjTabEN.isUseCache}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isMultiKeyClassify &&
    undefined !== pobjPrjTabEN.isMultiKeyClassify &&
    tzDataType.isBoolean(pobjPrjTabEN.isMultiKeyClassify) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否可以多个关键字分类共存(isMultiKeyClassify)]的值:[${pobjPrjTabEN.isMultiKeyClassify}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField) == false &&
    undefined !== pobjPrjTabEN.cacheClassifyField &&
    tzDataType.isString(pobjPrjTabEN.cacheClassifyField) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存分类字段(cacheClassifyField)]的值:[${pobjPrjTabEN.cacheClassifyField}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField2) == false &&
    undefined !== pobjPrjTabEN.cacheClassifyField2 &&
    tzDataType.isString(pobjPrjTabEN.cacheClassifyField2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存分类字段2(cacheClassifyField2)]的值:[${pobjPrjTabEN.cacheClassifyField2}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheModeId) == false &&
    undefined !== pobjPrjTabEN.cacheModeId &&
    tzDataType.isString(pobjPrjTabEN.cacheModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存方式Id(cacheModeId)]的值:[${pobjPrjTabEN.cacheModeId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyFieldTS) == false &&
    undefined !== pobjPrjTabEN.cacheClassifyFieldTS &&
    tzDataType.isString(pobjPrjTabEN.cacheClassifyFieldTS) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存分类字段_TS(cacheClassifyFieldTS)]的值:[${pobjPrjTabEN.cacheClassifyFieldTS}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.cacheClassifyField2TS) == false &&
    undefined !== pobjPrjTabEN.cacheClassifyField2TS &&
    tzDataType.isString(pobjPrjTabEN.cacheClassifyField2TS) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存分类字段2_TS(cacheClassifyField2TS)]的值:[${pobjPrjTabEN.cacheClassifyField2TS}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.paraVar2TS) == false &&
    undefined !== pobjPrjTabEN.paraVar2TS &&
    tzDataType.isString(pobjPrjTabEN.paraVar2TS) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[参数变量2_TS(paraVar2TS)]的值:[${pobjPrjTabEN.paraVar2TS}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.paraVar1TS) == false &&
    undefined !== pobjPrjTabEN.paraVar1TS &&
    tzDataType.isString(pobjPrjTabEN.paraVar1TS) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[参数变量_TS(paraVar1TS)]的值:[${pobjPrjTabEN.paraVar1TS}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.whereFormat) == false &&
    undefined !== pobjPrjTabEN.whereFormat &&
    tzDataType.isString(pobjPrjTabEN.whereFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缓存条件格式(whereFormat)]的值:[${pobjPrjTabEN.whereFormat}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.whereFormatBack) == false &&
    undefined !== pobjPrjTabEN.whereFormatBack &&
    tzDataType.isString(pobjPrjTabEN.whereFormatBack) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[后台缓存条件格式(whereFormatBack)]的值:[${pobjPrjTabEN.whereFormatBack}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isRefresh4RelaView &&
    undefined !== pobjPrjTabEN.isRefresh4RelaView &&
    tzDataType.isBoolean(pobjPrjTabEN.isRefresh4RelaView) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否刷新相关视图(isRefresh4RelaView)]的值:[${pobjPrjTabEN.isRefresh4RelaView}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.tabRecNum &&
    undefined !== pobjPrjTabEN.tabRecNum &&
    tzDataType.isNumber(pobjPrjTabEN.tabRecNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[记录数(tabRecNum)]的值:[${pobjPrjTabEN.tabRecNum}], 非法,应该为数值型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.keyId4Test) == false &&
    undefined !== pobjPrjTabEN.keyId4Test &&
    tzDataType.isString(pobjPrjTabEN.keyId4Test) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[测试关键字Id(keyId4Test)]的值:[${pobjPrjTabEN.keyId4Test}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.errMsg) == false &&
    undefined !== pobjPrjTabEN.errMsg &&
    tzDataType.isString(pobjPrjTabEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjPrjTabEN.errMsg}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.fldNum &&
    undefined !== pobjPrjTabEN.fldNum &&
    tzDataType.isNumber(pobjPrjTabEN.fldNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段数(fldNum)]的值:[${pobjPrjTabEN.fldNum}], 非法,应该为数值型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.updUserId) == false &&
    undefined !== pobjPrjTabEN.updUserId &&
    tzDataType.isString(pobjPrjTabEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjPrjTabEN.updUserId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.updDate) == false &&
    undefined !== pobjPrjTabEN.updDate &&
    tzDataType.isString(pobjPrjTabEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPrjTabEN.updDate}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.memo) == false &&
    undefined !== pobjPrjTabEN.memo &&
    tzDataType.isString(pobjPrjTabEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjTabEN.memo}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.orderNum4Refer &&
    undefined !== pobjPrjTabEN.orderNum4Refer &&
    tzDataType.isNumber(pobjPrjTabEN.orderNum4Refer) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[引用序号(orderNum4Refer)]的值:[${pobjPrjTabEN.orderNum4Refer}], 非法,应该为数值型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isChecked &&
    undefined !== pobjPrjTabEN.isChecked &&
    tzDataType.isBoolean(pobjPrjTabEN.isChecked) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否核实(isChecked)]的值:[${pobjPrjTabEN.isChecked}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.owner) == false &&
    undefined !== pobjPrjTabEN.owner &&
    tzDataType.isString(pobjPrjTabEN.owner) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[拥有者(owner)]的值:[${pobjPrjTabEN.owner}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabEnName) == false &&
    undefined !== pobjPrjTabEN.tabEnName &&
    tzDataType.isString(pobjPrjTabEN.tabEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表英文详细名(tabEnName)]的值:[${pobjPrjTabEN.tabEnName}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isNeedTransCode &&
    undefined !== pobjPrjTabEN.isNeedTransCode &&
    tzDataType.isBoolean(pobjPrjTabEN.isNeedTransCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要转换代码(isNeedTransCode)]的值:[${pobjPrjTabEN.isNeedTransCode}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.tabNameB) == false &&
    undefined !== pobjPrjTabEN.tabNameB &&
    tzDataType.isString(pobjPrjTabEN.tabNameB) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表名_后备(tabNameB)]的值:[${pobjPrjTabEN.tabNameB}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.relaViewId) == false &&
    undefined !== pobjPrjTabEN.relaViewId &&
    tzDataType.isString(pobjPrjTabEN.relaViewId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[RelaViewId(relaViewId)]的值:[${pobjPrjTabEN.relaViewId}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.dataBaseName) == false &&
    undefined !== pobjPrjTabEN.dataBaseName &&
    tzDataType.isString(pobjPrjTabEN.dataBaseName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据库名(dataBaseName)]的值:[${pobjPrjTabEN.dataBaseName}], 非法,应该为字符型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isNationStandard &&
    undefined !== pobjPrjTabEN.isNationStandard &&
    tzDataType.isBoolean(pobjPrjTabEN.isNationStandard) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否国标(isNationStandard)]的值:[${pobjPrjTabEN.isNationStandard}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isParaTab &&
    undefined !== pobjPrjTabEN.isParaTab &&
    tzDataType.isBoolean(pobjPrjTabEN.isParaTab) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否参数表(isParaTab)]的值:[${pobjPrjTabEN.isParaTab}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjTabEN.isArchive &&
    undefined !== pobjPrjTabEN.isArchive &&
    tzDataType.isBoolean(pobjPrjTabEN.isArchive) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否存档(isArchive)]的值:[${pobjPrjTabEN.isArchive}], 非法,应该为布尔型(In 工程表(PrjTab))!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjPrjTabEN.tabId) === true || pobjPrjTabEN.tabId.toString() === '0') {
    throw new Error(
      `(errid:Watl000064)字段[表ID]不能为空(In 工程表)!(clsPrjTabBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPrjTabEN.prjId) == false &&
    pobjPrjTabEN.prjId != '[nuull]' &&
    GetStrLen(pobjPrjTabEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 工程表)!(clsPrjTabBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjTabEN.relaTabId4View) == false &&
    pobjPrjTabEN.relaTabId4View != '[nuull]' &&
    GetStrLen(pobjPrjTabEN.relaTabId4View) != 8
  ) {
    throw '(errid:Watl000418)字段[视图的相关表ID]作为外键字段,长度应该为8(In 工程表)!(clsPrjTabBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTab_GetJSONStrByObj(pobjPrjTabEN: clsPrjTabEN): string {
  pobjPrjTabEN.sfUpdFldSetStr = pobjPrjTabEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjTabEN);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjTab_GetObjLstByJSONStr(strJSON: string): Array<clsPrjTabEN> {
  let arrPrjTabObjLst = new Array<clsPrjTabEN>();
  if (strJSON === '') {
    return arrPrjTabObjLst;
  }
  try {
    arrPrjTabObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjTabObjLst;
  }
  return arrPrjTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjTab_GetObjLstByJSONObjLst(
  arrPrjTabObjLstS: Array<clsPrjTabEN>,
): Array<clsPrjTabEN> {
  const arrPrjTabObjLst = new Array<clsPrjTabEN>();
  for (const objInFor of arrPrjTabObjLstS) {
    const obj1 = PrjTab_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjTabObjLst.push(obj1);
  }
  return arrPrjTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTab_GetObjByJSONStr(strJSON: string): clsPrjTabEN {
  let pobjPrjTabEN = new clsPrjTabEN();
  if (strJSON === '') {
    return pobjPrjTabEN;
  }
  try {
    pobjPrjTabEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjTabEN;
  }
  return pobjPrjTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjTab_GetCombineCondition(objPrjTabCond: clsPrjTabEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(objPrjTabCond.dicFldComparisonOp, clsPrjTabEN.con_TabId) ==
    true
  ) {
    const strComparisonOpTabId: string = objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_TabId,
      objPrjTabCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_TabName,
      objPrjTabCond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_TabCnName,
    ) == true
  ) {
    const strComparisonOpTabCnName: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_TabCnName,
      objPrjTabCond.tabCnName,
      strComparisonOpTabCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objPrjTabCond.dicFldComparisonOp, clsPrjTabEN.con_PrjId) ==
    true
  ) {
    const strComparisonOpPrjId: string = objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_PrjId,
      objPrjTabCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_SqlDsTypeId,
      objPrjTabCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_TabStateId,
    ) == true
  ) {
    const strComparisonOpTabStateId: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_TabStateId,
      objPrjTabCond.tabStateId,
      strComparisonOpTabStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_FuncModuleAgcId,
      objPrjTabCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsReleToSqlTab,
    ) == true
  ) {
    if (objPrjTabCond.isReleToSqlTab == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsReleToSqlTab);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsReleToSqlTab);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_Keyword,
    ) == true
  ) {
    const strComparisonOpKeyword: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_Keyword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_Keyword,
      objPrjTabCond.keyword,
      strComparisonOpKeyword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_TabTypeId,
    ) == true
  ) {
    const strComparisonOpTabTypeId: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_TabTypeId,
      objPrjTabCond.tabTypeId,
      strComparisonOpTabTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_TabMainTypeId,
    ) == true
  ) {
    const strComparisonOpTabMainTypeId: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabMainTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_TabMainTypeId,
      objPrjTabCond.tabMainTypeId,
      strComparisonOpTabMainTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_RelaTabId4View,
    ) == true
  ) {
    const strComparisonOpRelaTabId4View: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_RelaTabId4View];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_RelaTabId4View,
      objPrjTabCond.relaTabId4View,
      strComparisonOpRelaTabId4View,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsNeedGeneIndexer,
    ) == true
  ) {
    if (objPrjTabCond.isNeedGeneIndexer == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsNeedGeneIndexer);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsNeedGeneIndexer);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_ParentClass,
    ) == true
  ) {
    const strComparisonOpParentClass: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_ParentClass];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_ParentClass,
      objPrjTabCond.parentClass,
      strComparisonOpParentClass,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsShare,
    ) == true
  ) {
    if (objPrjTabCond.isShare == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsShare);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsShare);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsUseDelSign,
    ) == true
  ) {
    if (objPrjTabCond.isUseDelSign == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsUseDelSign);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsUseDelSign);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsUseCache,
    ) == true
  ) {
    if (objPrjTabCond.isUseCache == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsUseCache);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsUseCache);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsMultiKeyClassify,
    ) == true
  ) {
    if (objPrjTabCond.isMultiKeyClassify == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsMultiKeyClassify);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsMultiKeyClassify);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_CacheClassifyField,
    ) == true
  ) {
    const strComparisonOpCacheClassifyField: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_CacheClassifyField];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_CacheClassifyField,
      objPrjTabCond.cacheClassifyField,
      strComparisonOpCacheClassifyField,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_CacheClassifyField2,
    ) == true
  ) {
    const strComparisonOpCacheClassifyField2: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_CacheClassifyField2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_CacheClassifyField2,
      objPrjTabCond.cacheClassifyField2,
      strComparisonOpCacheClassifyField2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_CacheModeId,
    ) == true
  ) {
    const strComparisonOpCacheModeId: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_CacheModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_CacheModeId,
      objPrjTabCond.cacheModeId,
      strComparisonOpCacheModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_CacheClassifyFieldTS,
    ) == true
  ) {
    const strComparisonOpCacheClassifyFieldTS: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_CacheClassifyFieldTS];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_CacheClassifyFieldTS,
      objPrjTabCond.cacheClassifyFieldTS,
      strComparisonOpCacheClassifyFieldTS,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_CacheClassifyField2TS,
    ) == true
  ) {
    const strComparisonOpCacheClassifyField2TS: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_CacheClassifyField2TS];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_CacheClassifyField2TS,
      objPrjTabCond.cacheClassifyField2TS,
      strComparisonOpCacheClassifyField2TS,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_ParaVar2TS,
    ) == true
  ) {
    const strComparisonOpParaVar2TS: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_ParaVar2TS];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_ParaVar2TS,
      objPrjTabCond.paraVar2TS,
      strComparisonOpParaVar2TS,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_ParaVar1TS,
    ) == true
  ) {
    const strComparisonOpParaVar1TS: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_ParaVar1TS];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_ParaVar1TS,
      objPrjTabCond.paraVar1TS,
      strComparisonOpParaVar1TS,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_WhereFormat,
    ) == true
  ) {
    const strComparisonOpWhereFormat: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_WhereFormat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_WhereFormat,
      objPrjTabCond.whereFormat,
      strComparisonOpWhereFormat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_WhereFormatBack,
    ) == true
  ) {
    const strComparisonOpWhereFormatBack: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_WhereFormatBack];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_WhereFormatBack,
      objPrjTabCond.whereFormatBack,
      strComparisonOpWhereFormatBack,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsRefresh4RelaView,
    ) == true
  ) {
    if (objPrjTabCond.isRefresh4RelaView == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsRefresh4RelaView);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsRefresh4RelaView);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_TabRecNum,
    ) == true
  ) {
    const strComparisonOpTabRecNum: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabRecNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTabEN.con_TabRecNum,
      objPrjTabCond.tabRecNum,
      strComparisonOpTabRecNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_KeyId4Test,
    ) == true
  ) {
    const strComparisonOpKeyId4Test: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_KeyId4Test];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_KeyId4Test,
      objPrjTabCond.keyId4Test,
      strComparisonOpKeyId4Test,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string = objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_ErrMsg,
      objPrjTabCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_FldNum,
    ) == true
  ) {
    const strComparisonOpFldNum: string = objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_FldNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTabEN.con_FldNum,
      objPrjTabCond.fldNum,
      strComparisonOpFldNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_UpdUserId,
      objPrjTabCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_UpdDate,
      objPrjTabCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objPrjTabCond.dicFldComparisonOp, clsPrjTabEN.con_Memo) ==
    true
  ) {
    const strComparisonOpMemo: string = objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_Memo,
      objPrjTabCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_OrderNum4Refer,
    ) == true
  ) {
    const strComparisonOpOrderNum4Refer: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_OrderNum4Refer];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjTabEN.con_OrderNum4Refer,
      objPrjTabCond.orderNum4Refer,
      strComparisonOpOrderNum4Refer,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsChecked,
    ) == true
  ) {
    if (objPrjTabCond.isChecked == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsChecked);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsChecked);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(objPrjTabCond.dicFldComparisonOp, clsPrjTabEN.con_Owner) ==
    true
  ) {
    const strComparisonOpOwner: string = objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_Owner];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_Owner,
      objPrjTabCond.owner,
      strComparisonOpOwner,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_TabEnName,
    ) == true
  ) {
    const strComparisonOpTabEnName: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabEnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_TabEnName,
      objPrjTabCond.tabEnName,
      strComparisonOpTabEnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsNeedTransCode,
    ) == true
  ) {
    if (objPrjTabCond.isNeedTransCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsNeedTransCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsNeedTransCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_TabNameB,
    ) == true
  ) {
    const strComparisonOpTabNameB: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_TabNameB];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_TabNameB,
      objPrjTabCond.tabNameB,
      strComparisonOpTabNameB,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_RelaViewId,
    ) == true
  ) {
    const strComparisonOpRelaViewId: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_RelaViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_RelaViewId,
      objPrjTabCond.relaViewId,
      strComparisonOpRelaViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_DataBaseName,
    ) == true
  ) {
    const strComparisonOpDataBaseName: string =
      objPrjTabCond.dicFldComparisonOp[clsPrjTabEN.con_DataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabEN.con_DataBaseName,
      objPrjTabCond.dataBaseName,
      strComparisonOpDataBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsNationStandard,
    ) == true
  ) {
    if (objPrjTabCond.isNationStandard == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsNationStandard);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsNationStandard);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsParaTab,
    ) == true
  ) {
    if (objPrjTabCond.isParaTab == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsParaTab);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsParaTab);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabCond.dicFldComparisonOp,
      clsPrjTabEN.con_IsArchive,
    ) == true
  ) {
    if (objPrjTabCond.isArchive == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsArchive);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsArchive);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTab(工程表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabName: 表名(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTab_GetUniCondStr(objPrjTabEN: clsPrjTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabName = '{0}'", objPrjTabEN.tabName);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjTabEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTab(工程表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabName: 表名(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTab_GetUniCondStr4Update(objPrjTabEN: clsPrjTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId <> '{0}'", objPrjTabEN.tabId);
  strWhereCond += Format(" and TabName = '{0}'", objPrjTabEN.tabName);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjTabEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjTabENS:源对象
 * @param objPrjTabENT:目标对象
 */
export function PrjTab_GetObjFromJsonObj(objPrjTabENS: clsPrjTabEN): clsPrjTabEN {
  const objPrjTabENT: clsPrjTabEN = new clsPrjTabEN();
  ObjectAssign(objPrjTabENT, objPrjTabENS);
  return objPrjTabENT;
}
