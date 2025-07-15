/**
 * 类名:clsFunction4CodeWApi
 * 表名:Function4Code(00050386)
 * 版本:2025.06.13.1(服务器:PYF-AI)
 * 日期:2025/06/14 12:23:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 函数4Code(Function4Code)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
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
import { clsFunction4CodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeENEx';
import { clsFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeEN';
import { FunctionType_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';
import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
import { FuncAccessMode_func } from '@/ts/L3ForWApi/PrjFunction/clsFuncAccessModeWApi';
import { clsFuncAccessModeEN } from '@/ts/L0Entity/PrjFunction/clsFuncAccessModeEN';
import { FunctionPurpose_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionPurposeWApi';
import { clsFunctionPurposeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionPurposeEN';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { vFunction4Code_Func4GcCount_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_Func4GcCountWApi';
import { clsvFunction4Code_Func4GcCountEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_Func4GcCountEN';
import { vFeatureFuncRela_FeatureCountByCode_func } from '@/ts/L3ForWApi/PrjFunction/clsvFeatureFuncRela_FeatureCountByCodeWApi';
import { clsvFeatureFuncRela_FeatureCountByCodeEN } from '@/ts/L0Entity/PrjFunction/clsvFeatureFuncRela_FeatureCountByCodeEN';
import { vFuncParaRela_ParaNum_func } from '@/ts/L3ForWApi/PrjFunction/clsvFuncParaRela_ParaNumWApi';
import { clsvFuncParaRela_ParaNumEN } from '@/ts/L0Entity/PrjFunction/clsvFuncParaRela_ParaNumEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const function4Code_Controller = 'Function4CodeApi';
export const function4Code_ConstructorName = 'function4Code';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4Code:关键字
 * @returns 对象
 **/
export async function Function4Code_GetObjByFuncId4CodeAsync(
  strFuncId4Code: string,
): Promise<clsFunction4CodeEN | null> {
  const strThisFuncName = 'GetObjByFuncId4CodeAsync';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsFunction4CodeWApi.GetObjByFuncId4CodeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsFunction4CodeWApi.GetObjByFuncId4CodeAsync)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4Code';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
      const objFunction4Code = Function4Code_GetObjFromJsonObj(returnObj);
      return objFunction4Code;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFuncId4CodelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByFuncId4CodeCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function Function4Code_SortFunDefa(a: clsFunction4CodeEN, b: clsFunction4CodeEN): number {
  return a.funcId4Code.localeCompare(b.funcId4Code);
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
export function Function4Code_SortFunDefa2Fld(
  a: clsFunction4CodeEN,
  b: clsFunction4CodeEN,
): number {
  if (a.funcName4Code == b.funcName4Code) return a.funcCHName4Code.localeCompare(b.funcCHName4Code);
  else return a.funcName4Code.localeCompare(b.funcName4Code);
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
export function Function4Code_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunction4CodeEN.con_FuncId4Code:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsFunction4CodeEN.con_FuncName4Code:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsFunction4CodeEN.con_FuncCHName4Code:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.funcCHName4Code == null) return -1;
          if (b.funcCHName4Code == null) return 1;
          return a.funcCHName4Code.localeCompare(b.funcCHName4Code);
        };
      case clsFunction4CodeEN.con_PrevFuncId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.prevFuncId == null) return -1;
          if (b.prevFuncId == null) return 1;
          return a.prevFuncId.localeCompare(b.prevFuncId);
        };
      case clsFunction4CodeEN.con_RootFuncId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return a.rootFuncId.localeCompare(b.rootFuncId);
        };
      case clsFunction4CodeEN.con_ApplicationTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsFunction4CodeEN.con_FuncGCTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.funcGCTypeId == null) return -1;
          if (b.funcGCTypeId == null) return 1;
          return a.funcGCTypeId.localeCompare(b.funcGCTypeId);
        };
      case clsFunction4CodeEN.con_FunctionSignature:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.functionSignature == null) return -1;
          if (b.functionSignature == null) return 1;
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsFunction4CodeEN.con_FunctionSignatureSim:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.functionSignatureSim == null) return -1;
          if (b.functionSignatureSim == null) return 1;
          return a.functionSignatureSim.localeCompare(b.functionSignatureSim);
        };
      case clsFunction4CodeEN.con_ReturnType:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.returnType == null) return -1;
          if (b.returnType == null) return 1;
          return a.returnType.localeCompare(b.returnType);
        };
      case clsFunction4CodeEN.con_ClsName:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.clsName == null) return -1;
          if (b.clsName == null) return 1;
          return a.clsName.localeCompare(b.clsName);
        };
      case clsFunction4CodeEN.con_ReturnTypeFullName:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.returnTypeFullName == null) return -1;
          if (b.returnTypeFullName == null) return 1;
          return a.returnTypeFullName.localeCompare(b.returnTypeFullName);
        };
      case clsFunction4CodeEN.con_ReturnTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsFunction4CodeEN.con_ReturnTypeNameCustom:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.returnTypeNameCustom == null) return -1;
          if (b.returnTypeNameCustom == null) return 1;
          return a.returnTypeNameCustom.localeCompare(b.returnTypeNameCustom);
        };
      case clsFunction4CodeEN.con_CodeTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsFunction4CodeEN.con_FuncAccessModeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.funcAccessModeId == null) return -1;
          if (b.funcAccessModeId == null) return 1;
          return a.funcAccessModeId.localeCompare(b.funcAccessModeId);
        };
      case clsFunction4CodeEN.con_TabName:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.tabName == null) return -1;
          if (b.tabName == null) return 1;
          return a.tabName.localeCompare(b.tabName);
        };
      case clsFunction4CodeEN.con_TabId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.tabId == null) return -1;
          if (b.tabId == null) return 1;
          return a.tabId.localeCompare(b.tabId);
        };
      case clsFunction4CodeEN.con_FuncPurposeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return a.funcPurposeId.localeCompare(b.funcPurposeId);
        };
      case clsFunction4CodeEN.con_FuncTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.funcTypeId == null) return -1;
          if (b.funcTypeId == null) return 1;
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsFunction4CodeEN.con_GetCustomAttributes:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return a.getCustomAttributes - b.getCustomAttributes;
        };
      case clsFunction4CodeEN.con_SourceFunction:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.sourceFunction == null) return -1;
          if (b.sourceFunction == null) return 1;
          return a.sourceFunction.localeCompare(b.sourceFunction);
        };
      case clsFunction4CodeEN.con_IsAsyncFunc:
        return (a: clsFunction4CodeEN) => {
          if (a.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsFunction4CodeEN.con_IsSysFunction:
        return (a: clsFunction4CodeEN) => {
          if (a.isSysFunction == true) return 1;
          else return -1;
        };
      case clsFunction4CodeEN.con_OrderNum:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsFunction4CodeEN.con_PrjId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFunction4CodeEN.con_IsTemplate:
        return (a: clsFunction4CodeEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsFunction4CodeEN.con_UpdDate:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFunction4CodeEN.con_UpdUser:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFunction4CodeEN.con_Memo:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsFunction4CodeEN.con_UsedTimes:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return a.usedTimes - b.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Function4Code]中不存在!(in ${function4Code_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFunction4CodeEN.con_FuncId4Code:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsFunction4CodeEN.con_FuncName4Code:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsFunction4CodeEN.con_FuncCHName4Code:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.funcCHName4Code == null) return -1;
          if (a.funcCHName4Code == null) return 1;
          return b.funcCHName4Code.localeCompare(a.funcCHName4Code);
        };
      case clsFunction4CodeEN.con_PrevFuncId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.prevFuncId == null) return -1;
          if (a.prevFuncId == null) return 1;
          return b.prevFuncId.localeCompare(a.prevFuncId);
        };
      case clsFunction4CodeEN.con_RootFuncId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return b.rootFuncId.localeCompare(a.rootFuncId);
        };
      case clsFunction4CodeEN.con_ApplicationTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsFunction4CodeEN.con_FuncGCTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.funcGCTypeId == null) return -1;
          if (a.funcGCTypeId == null) return 1;
          return b.funcGCTypeId.localeCompare(a.funcGCTypeId);
        };
      case clsFunction4CodeEN.con_FunctionSignature:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.functionSignature == null) return -1;
          if (a.functionSignature == null) return 1;
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsFunction4CodeEN.con_FunctionSignatureSim:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.functionSignatureSim == null) return -1;
          if (a.functionSignatureSim == null) return 1;
          return b.functionSignatureSim.localeCompare(a.functionSignatureSim);
        };
      case clsFunction4CodeEN.con_ReturnType:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.returnType == null) return -1;
          if (a.returnType == null) return 1;
          return b.returnType.localeCompare(a.returnType);
        };
      case clsFunction4CodeEN.con_ClsName:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.clsName == null) return -1;
          if (a.clsName == null) return 1;
          return b.clsName.localeCompare(a.clsName);
        };
      case clsFunction4CodeEN.con_ReturnTypeFullName:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.returnTypeFullName == null) return -1;
          if (a.returnTypeFullName == null) return 1;
          return b.returnTypeFullName.localeCompare(a.returnTypeFullName);
        };
      case clsFunction4CodeEN.con_ReturnTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsFunction4CodeEN.con_ReturnTypeNameCustom:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.returnTypeNameCustom == null) return -1;
          if (a.returnTypeNameCustom == null) return 1;
          return b.returnTypeNameCustom.localeCompare(a.returnTypeNameCustom);
        };
      case clsFunction4CodeEN.con_CodeTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsFunction4CodeEN.con_FuncAccessModeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.funcAccessModeId == null) return -1;
          if (a.funcAccessModeId == null) return 1;
          return b.funcAccessModeId.localeCompare(a.funcAccessModeId);
        };
      case clsFunction4CodeEN.con_TabName:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.tabName == null) return -1;
          if (a.tabName == null) return 1;
          return b.tabName.localeCompare(a.tabName);
        };
      case clsFunction4CodeEN.con_TabId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.tabId == null) return -1;
          if (a.tabId == null) return 1;
          return b.tabId.localeCompare(a.tabId);
        };
      case clsFunction4CodeEN.con_FuncPurposeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return b.funcPurposeId.localeCompare(a.funcPurposeId);
        };
      case clsFunction4CodeEN.con_FuncTypeId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.funcTypeId == null) return -1;
          if (a.funcTypeId == null) return 1;
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsFunction4CodeEN.con_GetCustomAttributes:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return b.getCustomAttributes - a.getCustomAttributes;
        };
      case clsFunction4CodeEN.con_SourceFunction:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.sourceFunction == null) return -1;
          if (a.sourceFunction == null) return 1;
          return b.sourceFunction.localeCompare(a.sourceFunction);
        };
      case clsFunction4CodeEN.con_IsAsyncFunc:
        return (b: clsFunction4CodeEN) => {
          if (b.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsFunction4CodeEN.con_IsSysFunction:
        return (b: clsFunction4CodeEN) => {
          if (b.isSysFunction == true) return 1;
          else return -1;
        };
      case clsFunction4CodeEN.con_OrderNum:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsFunction4CodeEN.con_PrjId:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFunction4CodeEN.con_IsTemplate:
        return (b: clsFunction4CodeEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsFunction4CodeEN.con_UpdDate:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFunction4CodeEN.con_UpdUser:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFunction4CodeEN.con_Memo:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsFunction4CodeEN.con_UsedTimes:
        return (a: clsFunction4CodeEN, b: clsFunction4CodeEN) => {
          return b.usedTimes - a.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Function4Code]中不存在!(in ${function4Code_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByFuncId4CodeCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function Function4Code_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFunction4CodeEN.con_FuncId4Code:
      return (obj: clsFunction4CodeEN) => {
        return obj.funcId4Code === value;
      };
    case clsFunction4CodeEN.con_FuncName4Code:
      return (obj: clsFunction4CodeEN) => {
        return obj.funcName4Code === value;
      };
    case clsFunction4CodeEN.con_FuncCHName4Code:
      return (obj: clsFunction4CodeEN) => {
        return obj.funcCHName4Code === value;
      };
    case clsFunction4CodeEN.con_PrevFuncId:
      return (obj: clsFunction4CodeEN) => {
        return obj.prevFuncId === value;
      };
    case clsFunction4CodeEN.con_RootFuncId:
      return (obj: clsFunction4CodeEN) => {
        return obj.rootFuncId === value;
      };
    case clsFunction4CodeEN.con_ApplicationTypeId:
      return (obj: clsFunction4CodeEN) => {
        return obj.applicationTypeId === value;
      };
    case clsFunction4CodeEN.con_FuncGCTypeId:
      return (obj: clsFunction4CodeEN) => {
        return obj.funcGCTypeId === value;
      };
    case clsFunction4CodeEN.con_FunctionSignature:
      return (obj: clsFunction4CodeEN) => {
        return obj.functionSignature === value;
      };
    case clsFunction4CodeEN.con_FunctionSignatureSim:
      return (obj: clsFunction4CodeEN) => {
        return obj.functionSignatureSim === value;
      };
    case clsFunction4CodeEN.con_ReturnType:
      return (obj: clsFunction4CodeEN) => {
        return obj.returnType === value;
      };
    case clsFunction4CodeEN.con_ClsName:
      return (obj: clsFunction4CodeEN) => {
        return obj.clsName === value;
      };
    case clsFunction4CodeEN.con_ReturnTypeFullName:
      return (obj: clsFunction4CodeEN) => {
        return obj.returnTypeFullName === value;
      };
    case clsFunction4CodeEN.con_ReturnTypeId:
      return (obj: clsFunction4CodeEN) => {
        return obj.returnTypeId === value;
      };
    case clsFunction4CodeEN.con_ReturnTypeNameCustom:
      return (obj: clsFunction4CodeEN) => {
        return obj.returnTypeNameCustom === value;
      };
    case clsFunction4CodeEN.con_CodeTypeId:
      return (obj: clsFunction4CodeEN) => {
        return obj.codeTypeId === value;
      };
    case clsFunction4CodeEN.con_FuncAccessModeId:
      return (obj: clsFunction4CodeEN) => {
        return obj.funcAccessModeId === value;
      };
    case clsFunction4CodeEN.con_TabName:
      return (obj: clsFunction4CodeEN) => {
        return obj.tabName === value;
      };
    case clsFunction4CodeEN.con_TabId:
      return (obj: clsFunction4CodeEN) => {
        return obj.tabId === value;
      };
    case clsFunction4CodeEN.con_FuncPurposeId:
      return (obj: clsFunction4CodeEN) => {
        return obj.funcPurposeId === value;
      };
    case clsFunction4CodeEN.con_FuncTypeId:
      return (obj: clsFunction4CodeEN) => {
        return obj.funcTypeId === value;
      };
    case clsFunction4CodeEN.con_GetCustomAttributes:
      return (obj: clsFunction4CodeEN) => {
        return obj.getCustomAttributes === value;
      };
    case clsFunction4CodeEN.con_SourceFunction:
      return (obj: clsFunction4CodeEN) => {
        return obj.sourceFunction === value;
      };
    case clsFunction4CodeEN.con_IsAsyncFunc:
      return (obj: clsFunction4CodeEN) => {
        return obj.isAsyncFunc === value;
      };
    case clsFunction4CodeEN.con_IsSysFunction:
      return (obj: clsFunction4CodeEN) => {
        return obj.isSysFunction === value;
      };
    case clsFunction4CodeEN.con_OrderNum:
      return (obj: clsFunction4CodeEN) => {
        return obj.orderNum === value;
      };
    case clsFunction4CodeEN.con_PrjId:
      return (obj: clsFunction4CodeEN) => {
        return obj.prjId === value;
      };
    case clsFunction4CodeEN.con_IsTemplate:
      return (obj: clsFunction4CodeEN) => {
        return obj.isTemplate === value;
      };
    case clsFunction4CodeEN.con_UpdDate:
      return (obj: clsFunction4CodeEN) => {
        return obj.updDate === value;
      };
    case clsFunction4CodeEN.con_UpdUser:
      return (obj: clsFunction4CodeEN) => {
        return obj.updUser === value;
      };
    case clsFunction4CodeEN.con_Memo:
      return (obj: clsFunction4CodeEN) => {
        return obj.memo === value;
      };
    case clsFunction4CodeEN.con_UsedTimes:
      return (obj: clsFunction4CodeEN) => {
        return obj.usedTimes === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Function4Code]中不存在!(in ${function4Code_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[Function4Code__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Function4Code_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFunction4CodeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
      const objFunction4Code = Function4Code_GetObjFromJsonObj(returnObj);
      return objFunction4Code;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFunction4CodeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
          function4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param arrFuncId4Code:关键字列表
 * @returns 对象列表
 **/
export async function Function4Code_GetObjLstByFuncId4CodeLstAsync(
  arrFuncId4Code: Array<string>,
): Promise<Array<clsFunction4CodeEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4CodeLstAsync';
  const strAction = 'GetObjLstByFuncId4CodeLst';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId4Code, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          function4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByFuncId4CodeLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function Function4Code_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFunction4CodeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
          function4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFunction4CodeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
          function4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunction4CodeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunction4CodeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
          function4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param strFuncId4Code:关键字
 * @returns 获取删除的结果
 **/
export async function Function4Code_DelRecordAsync(strFuncId4Code: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(function4Code_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncId4Code);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param arrFuncId4Code:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Function4Code_DelFunction4CodesAsync(
  arrFuncId4Code: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFunction4CodesAsync';
  const strAction = 'DelFunction4Codes';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId4Code, config);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param objFunction4CodeENS:源对象
 * @returns 目标对象=>clsFunction4CodeEN:objFunction4CodeENT
 **/
export function Function4Code_CopyToEx(
  objFunction4CodeENS: clsFunction4CodeEN,
): clsFunction4CodeENEx {
  const strThisFuncName = Function4Code_CopyToEx.name;
  const objFunction4CodeENT = new clsFunction4CodeENEx();
  try {
    ObjectAssign(objFunction4CodeENT, objFunction4CodeENS);
    return objFunction4CodeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFunction4CodeENT;
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
export function Function4Code_FuncMapByFldName(
  strFldName: string,
  objFunction4CodeEx: clsFunction4CodeENEx,
) {
  const strThisFuncName = Function4Code_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFunction4CodeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFunction4CodeENEx.con_FuncTypeName:
      return Function4Code_FuncMapFuncTypeName(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_FuncAccessModeName:
      return Function4Code_FuncMapFuncAccessModeName(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_FuncPurposeName:
      return Function4Code_FuncMapFuncPurposeName(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_ApplicationTypeSimName:
      return Function4Code_FuncMapApplicationTypeSimName(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_Func4GCCount:
      return Function4Code_FuncMapFunc4GCCount(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_FeatureCount:
      return Function4Code_FuncMapFeatureCount(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_ParaNum:
      return Function4Code_FuncMapParaNum(objFunction4CodeEx);
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
export function Function4Code_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunction4CodeENEx.con_FuncTypeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsFunction4CodeENEx.con_FuncAccessModeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.funcAccessModeName.localeCompare(b.funcAccessModeName);
        };
      case clsFunction4CodeENEx.con_FuncPurposeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.funcPurposeName.localeCompare(b.funcPurposeName);
        };
      case clsFunction4CodeENEx.con_ApplicationTypeSimName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          if (a.applicationTypeSimName === null && b.applicationTypeSimName === null) return 0;
          if (a.applicationTypeSimName === null) return -1;
          if (b.applicationTypeSimName === null) return 1;
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsFunction4CodeENEx.con_Func4GCCount:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.func4GCCount - b.func4GCCount;
        };
      case clsFunction4CodeENEx.con_FeatureCount:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.featureCount - b.featureCount;
        };
      case clsFunction4CodeENEx.con_ParaNum:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.paraNum - b.paraNum;
        };
      default:
        return Function4Code_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFunction4CodeENEx.con_FuncTypeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsFunction4CodeENEx.con_FuncAccessModeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.funcAccessModeName.localeCompare(a.funcAccessModeName);
        };
      case clsFunction4CodeENEx.con_FuncPurposeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.funcPurposeName.localeCompare(a.funcPurposeName);
        };
      case clsFunction4CodeENEx.con_ApplicationTypeSimName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          if (a.applicationTypeSimName === null && b.applicationTypeSimName === null) return 0;
          if (a.applicationTypeSimName === null) return 1;
          if (b.applicationTypeSimName === null) return -1;
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsFunction4CodeENEx.con_Func4GCCount:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.func4GCCount - a.func4GCCount;
        };
      case clsFunction4CodeENEx.con_FeatureCount:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.featureCount - a.featureCount;
        };
      case clsFunction4CodeENEx.con_ParaNum:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.paraNum - a.paraNum;
        };
      default:
        return Function4Code_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4Code_FuncMapFuncTypeName(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4Code_FuncMapFuncTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4Code.funcTypeName) == true) {
      const FunctionTypeFuncTypeId = objFunction4Code.funcTypeId;
      const FunctionTypeFuncTypeName = await FunctionType_func(
        clsFunctionTypeEN.con_FuncTypeId,
        clsFunctionTypeEN.con_FuncTypeName,
        FunctionTypeFuncTypeId,
      );
      objFunction4Code.funcTypeName = FunctionTypeFuncTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001353)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4Code_FuncMapFuncAccessModeName(
  objFunction4Code: clsFunction4CodeENEx,
) {
  const strThisFuncName = Function4Code_FuncMapFuncAccessModeName.name;
  try {
    if (IsNullOrEmpty(objFunction4Code.funcAccessModeName) == true) {
      const FuncAccessModeFuncAccessModeId = objFunction4Code.funcAccessModeId;
      const FuncAccessModeFuncAccessModeName = await FuncAccessMode_func(
        clsFuncAccessModeEN.con_FuncAccessModeId,
        clsFuncAccessModeEN.con_FuncAccessModeName,
        FuncAccessModeFuncAccessModeId,
      );
      objFunction4Code.funcAccessModeName = FuncAccessModeFuncAccessModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001354)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4Code_FuncMapFuncPurposeName(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4Code_FuncMapFuncPurposeName.name;
  try {
    if (IsNullOrEmpty(objFunction4Code.funcPurposeName) == true) {
      const FunctionPurposeFuncPurposeId = objFunction4Code.funcPurposeId;
      const FunctionPurposeFuncPurposeName = await FunctionPurpose_func(
        clsFunctionPurposeEN.con_FuncPurposeId,
        clsFunctionPurposeEN.con_FuncPurposeName,
        FunctionPurposeFuncPurposeId,
      );
      objFunction4Code.funcPurposeName = FunctionPurposeFuncPurposeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001352)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4Code_FuncMapApplicationTypeSimName(
  objFunction4Code: clsFunction4CodeENEx,
) {
  const strThisFuncName = Function4Code_FuncMapApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objFunction4Code.applicationTypeSimName) == true) {
      const ApplicationTypeApplicationTypeId = objFunction4Code.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationTypeApplicationTypeId,
      );
      objFunction4Code.applicationTypeSimName = ApplicationTypeApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001316)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4Code_FuncMapFunc4GCCount(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4Code_FuncMapFunc4GCCount.name;
  try {
    if (objFunction4Code.func4GCCount == 0) {
      const vFunction4CodeFunc4GcCountFuncId4Code = objFunction4Code.funcId4Code;
      const vFunction4CodeFunc4GcCountFunc4GCCount = await vFunction4Code_Func4GcCount_func(
        clsvFunction4Code_Func4GcCountEN.con_FuncId4Code,
        clsvFunction4Code_Func4GcCountEN.con_Func4GCCount,
        vFunction4CodeFunc4GcCountFuncId4Code,
      );
      objFunction4Code.func4GCCount = vFunction4CodeFunc4GcCountFunc4GCCount;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001355)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4Code_FuncMapFeatureCount(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4Code_FuncMapFeatureCount.name;
  try {
    if (objFunction4Code.featureCount == 0) {
      const vFeatureFuncRelaFeatureCountByCodeFuncId4Code = objFunction4Code.funcId4Code;
      if (objFunction4Code.applicationTypeId == 0) {
        const strMsg = `函数映射[FeatureCount]数据出错,applicationTypeId不能为空!(in ${function4Code_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFeatureFuncRelaFeatureCountByCodeFeatureCount =
        await vFeatureFuncRela_FeatureCountByCode_func(
          clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code,
          clsvFeatureFuncRela_FeatureCountByCodeEN.con_FeatureCount,
          vFeatureFuncRelaFeatureCountByCodeFuncId4Code,
          objFunction4Code.applicationTypeId,
        );
      objFunction4Code.featureCount = vFeatureFuncRelaFeatureCountByCodeFeatureCount;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001356)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4Code_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4Code_FuncMapParaNum(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4Code_FuncMapParaNum.name;
  try {
    if (objFunction4Code.paraNum == 0) {
      const vFuncParaRelaParaNumFuncId4Code = objFunction4Code.funcId4Code;
      const vFuncParaRelaParaNumParaNum = await vFuncParaRela_ParaNum_func(
        clsvFuncParaRela_ParaNumEN.con_FuncId4Code,
        clsvFuncParaRela_ParaNumEN.con_ParaNum,
        vFuncParaRelaParaNumFuncId4Code,
      );
      objFunction4Code.paraNum = vFuncParaRelaParaNumParaNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001357)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4Code_ConstructorName,
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
export async function Function4Code_DelFunction4CodesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFunction4CodesByCondAsync';
  const strAction = 'DelFunction4CodesByCond';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param objFunction4CodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Function4Code_AddNewRecordAsync(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFunction4CodeEN);
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4CodeEN, config);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param objFunction4CodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Function4Code_AddNewRecordWithMaxIdAsync(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4CodeEN, config);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_AddNewObjSave(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    Function4Code_CheckPropertyNew(objFunction4CodeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${function4Code_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await Function4Code_CheckUniCond4Add(objFunction4CodeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await Function4Code_AddNewRecordWithMaxIdAsync(objFunction4CodeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //Function4Code_ReFreshCache();
    } else {
      const strInfo = `添加[函数4Code(Function4Code)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${function4Code_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function Function4Code_CheckUniCond4Add(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<boolean> {
  const strUniquenessCondition = Function4Code_GetUniCondStr(objFunction4CodeEN);
  const bolIsExistCondition = await Function4Code_IsExistRecordAsync(strUniquenessCondition);
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
export async function Function4Code_CheckUniCond4Update(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<boolean> {
  const strUniquenessCondition = Function4Code_GetUniCondStr4Update(objFunction4CodeEN);
  const bolIsExistCondition = await Function4Code_IsExistRecordAsync(strUniquenessCondition);
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
export async function Function4Code_UpdateObjSave(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFunction4CodeEN.sfUpdFldSetStr = objFunction4CodeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFunction4CodeEN.funcId4Code == '' || objFunction4CodeEN.funcId4Code == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    Function4Code_CheckProperty4Update(objFunction4CodeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${function4Code_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await Function4Code_CheckUniCond4Update(objFunction4CodeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await Function4Code_UpdateRecordAsync(objFunction4CodeEN);
    if (returnBool == true) {
      //Function4Code_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${function4Code_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFunction4CodeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Function4Code_AddNewRecordWithReturnKeyAsync(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4CodeEN, config);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param objFunction4CodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Function4Code_UpdateRecordAsync(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFunction4CodeEN.sfUpdFldSetStr === undefined ||
    objFunction4CodeEN.sfUpdFldSetStr === null ||
    objFunction4CodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunction4CodeEN.funcId4Code,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4CodeEN, config);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param objFunction4CodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Function4Code_EditRecordExAsync(
  objFunction4CodeEN: clsFunction4CodeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFunction4CodeEN.sfUpdFldSetStr === undefined ||
    objFunction4CodeEN.sfUpdFldSetStr === null ||
    objFunction4CodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunction4CodeEN.funcId4Code,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4CodeEN, config);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param objFunction4CodeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Function4Code_UpdateWithConditionAsync(
  objFunction4CodeEN: clsFunction4CodeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFunction4CodeEN.sfUpdFldSetStr === undefined ||
    objFunction4CodeEN.sfUpdFldSetStr === null ||
    objFunction4CodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunction4CodeEN.funcId4Code,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);
  objFunction4CodeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4CodeEN, config);
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
 * @param strFuncId4Code:关键字
 * @returns 是否存在?存在返回True
 **/
export async function Function4Code_IsExistAsync(strFuncId4Code: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function Function4Code_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export async function Function4Code_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(function4Code_Controller, strAction);

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
        function4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4Code_ConstructorName,
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
export function Function4Code_GetWebApiUrl(strController: string, strAction: string): string {
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

 * @param strFuncPurposeId:
*/
export async function Function4Code_BindDdl_FuncId4CodeByFuncPurposeIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strFuncPurposeId: string,
) {
  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空！(In clsFunction4CodeWApi.BindDdl_FuncId4CodeByFuncPurposeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确！(clsFunction4CodeWApi.BindDdl_FuncId4CodeByFuncPurposeIdInDiv)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_FuncId4CodeByFuncPurposeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncId4CodeByFuncPurposeIdInDivCache");
  const strCondition = `funcPurposeId = '${strFuncPurposeId}'`;
  const arrObjLstSel = await Function4Code_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFunction4CodeEN.con_FuncId4Code,
    clsFunction4CodeEN.con_FuncName4Code,
    '函数4Code...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strFuncPurposeId:
*/
export async function Function4Code_GetArrFunction4CodeByFuncPurposeId(strFuncPurposeId: string) {
  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空！(In clsFunction4CodeWApi.BindDdl_FuncId4CodeByFuncPurposeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确！(clsFunction4CodeWApi.BindDdl_FuncId4CodeByFuncPurposeIdInDiv)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncId4CodeByFuncPurposeIdInDivCache");
  const arrFunction4Code = new Array<clsFunction4CodeEN>();
  const strCondition = `funcPurposeId = '${strFuncPurposeId}'`;
  const arrObjLstSel = await Function4Code_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return null;
  const obj0 = new clsFunction4CodeEN();
  obj0.funcId4Code = '0';
  obj0.funcName4Code = '选函数4Code...';
  arrFunction4Code.push(obj0);
  arrObjLstSel.forEach((x) => arrFunction4Code.push(x));
  return arrFunction4Code;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Function4Code_CheckPropertyNew(pobjFunction4CodeEN: clsFunction4CodeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFunction4CodeEN.funcName4Code) === true) {
    throw new Error(
      `(errid:Watl000411)字段[函数名4Code]不能为空(In 函数4Code)!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFunction4CodeEN.rootFuncId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[根函数Id]不能为空(In 函数4Code)!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFunction4CodeEN.applicationTypeId ||
    (pobjFunction4CodeEN.applicationTypeId != null &&
      pobjFunction4CodeEN.applicationTypeId.toString() === '') ||
    pobjFunction4CodeEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型ID]不能为空(In 函数4Code)!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcPurposeId) === true ||
    pobjFunction4CodeEN.funcPurposeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数用途Id]不能为空(In 函数4Code)!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFunction4CodeEN.getCustomAttributes ||
    (pobjFunction4CodeEN.getCustomAttributes != null &&
      pobjFunction4CodeEN.getCustomAttributes.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[GetCustomAttributes]不能为空(In 函数4Code)!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFunction4CodeEN.orderNum ||
    (pobjFunction4CodeEN.orderNum != null && pobjFunction4CodeEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 函数4Code)!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcId4Code) == false &&
    GetStrLen(pobjFunction4CodeEN.funcId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数Id4Code(funcId4Code)]的长度不能超过8(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcId4Code}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcName4Code) == false &&
    GetStrLen(pobjFunction4CodeEN.funcName4Code) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数名4Code(funcName4Code)]的长度不能超过100(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcName4Code}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcCHName4Code) == false &&
    GetStrLen(pobjFunction4CodeEN.funcCHName4Code) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数中文名4Code(funcCHName4Code)]的长度不能超过200(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcCHName4Code}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.prevFuncId) == false &&
    GetStrLen(pobjFunction4CodeEN.prevFuncId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[前函数Id(prevFuncId)]的长度不能超过8(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.prevFuncId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.rootFuncId) == false &&
    GetStrLen(pobjFunction4CodeEN.rootFuncId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[根函数Id(rootFuncId)]的长度不能超过8(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.rootFuncId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcGCTypeId) == false &&
    GetStrLen(pobjFunction4CodeEN.funcGCTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数生成代码类型Id(funcGCTypeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcGCTypeId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.functionSignature) == false &&
    GetStrLen(pobjFunction4CodeEN.functionSignature) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数签名(functionSignature)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.functionSignature}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.functionSignatureSim) == false &&
    GetStrLen(pobjFunction4CodeEN.functionSignatureSim) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数签名_Sim(functionSignatureSim)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.functionSignatureSim}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnType) == false &&
    GetStrLen(pobjFunction4CodeEN.returnType) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[返回类型(returnType)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.returnType}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.clsName) == false &&
    GetStrLen(pobjFunction4CodeEN.clsName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[类名(clsName)]的长度不能超过100(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.clsName}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeFullName) == false &&
    GetStrLen(pobjFunction4CodeEN.returnTypeFullName) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[返回类型全名(returnTypeFullName)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.returnTypeFullName}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeId) == false &&
    GetStrLen(pobjFunction4CodeEN.returnTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[返回类型ID(returnTypeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.returnTypeId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeNameCustom) == false &&
    GetStrLen(pobjFunction4CodeEN.returnTypeNameCustom) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[定制返回类型名(returnTypeNameCustom)]的长度不能超过50(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.returnTypeNameCustom}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.codeTypeId) == false &&
    GetStrLen(pobjFunction4CodeEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.codeTypeId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcAccessModeId) == false &&
    GetStrLen(pobjFunction4CodeEN.funcAccessModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数操作模式Id(funcAccessModeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcAccessModeId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.tabName) == false &&
    GetStrLen(pobjFunction4CodeEN.tabName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表名(tabName)]的长度不能超过100(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.tabName}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.tabId) == false &&
    GetStrLen(pobjFunction4CodeEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.tabId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcPurposeId) == false &&
    GetStrLen(pobjFunction4CodeEN.funcPurposeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数用途Id(funcPurposeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcPurposeId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcTypeId) == false &&
    GetStrLen(pobjFunction4CodeEN.funcTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数类型Id(funcTypeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcTypeId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.sourceFunction) == false &&
    GetStrLen(pobjFunction4CodeEN.sourceFunction) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[来源函数(sourceFunction)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.sourceFunction}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.prjId) == false &&
    GetStrLen(pobjFunction4CodeEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.prjId}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.updDate) == false &&
    GetStrLen(pobjFunction4CodeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.updDate}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.updUser) == false &&
    GetStrLen(pobjFunction4CodeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.updUser}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.memo) == false &&
    GetStrLen(pobjFunction4CodeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.memo}(clsFunction4CodeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcId4Code) == false &&
    undefined !== pobjFunction4CodeEN.funcId4Code &&
    tzDataType.isString(pobjFunction4CodeEN.funcId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数Id4Code(funcId4Code)]的值:[${pobjFunction4CodeEN.funcId4Code}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcName4Code) == false &&
    undefined !== pobjFunction4CodeEN.funcName4Code &&
    tzDataType.isString(pobjFunction4CodeEN.funcName4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数名4Code(funcName4Code)]的值:[${pobjFunction4CodeEN.funcName4Code}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcCHName4Code) == false &&
    undefined !== pobjFunction4CodeEN.funcCHName4Code &&
    tzDataType.isString(pobjFunction4CodeEN.funcCHName4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数中文名4Code(funcCHName4Code)]的值:[${pobjFunction4CodeEN.funcCHName4Code}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.prevFuncId) == false &&
    undefined !== pobjFunction4CodeEN.prevFuncId &&
    tzDataType.isString(pobjFunction4CodeEN.prevFuncId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[前函数Id(prevFuncId)]的值:[${pobjFunction4CodeEN.prevFuncId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.rootFuncId) == false &&
    undefined !== pobjFunction4CodeEN.rootFuncId &&
    tzDataType.isString(pobjFunction4CodeEN.rootFuncId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[根函数Id(rootFuncId)]的值:[${pobjFunction4CodeEN.rootFuncId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.applicationTypeId &&
    undefined !== pobjFunction4CodeEN.applicationTypeId &&
    tzDataType.isNumber(pobjFunction4CodeEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjFunction4CodeEN.applicationTypeId}], 非法,应该为数值型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcGCTypeId) == false &&
    undefined !== pobjFunction4CodeEN.funcGCTypeId &&
    tzDataType.isString(pobjFunction4CodeEN.funcGCTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数生成代码类型Id(funcGCTypeId)]的值:[${pobjFunction4CodeEN.funcGCTypeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.functionSignature) == false &&
    undefined !== pobjFunction4CodeEN.functionSignature &&
    tzDataType.isString(pobjFunction4CodeEN.functionSignature) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数签名(functionSignature)]的值:[${pobjFunction4CodeEN.functionSignature}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.functionSignatureSim) == false &&
    undefined !== pobjFunction4CodeEN.functionSignatureSim &&
    tzDataType.isString(pobjFunction4CodeEN.functionSignatureSim) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数签名_Sim(functionSignatureSim)]的值:[${pobjFunction4CodeEN.functionSignatureSim}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnType) == false &&
    undefined !== pobjFunction4CodeEN.returnType &&
    tzDataType.isString(pobjFunction4CodeEN.returnType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[返回类型(returnType)]的值:[${pobjFunction4CodeEN.returnType}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.clsName) == false &&
    undefined !== pobjFunction4CodeEN.clsName &&
    tzDataType.isString(pobjFunction4CodeEN.clsName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[类名(clsName)]的值:[${pobjFunction4CodeEN.clsName}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeFullName) == false &&
    undefined !== pobjFunction4CodeEN.returnTypeFullName &&
    tzDataType.isString(pobjFunction4CodeEN.returnTypeFullName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[返回类型全名(returnTypeFullName)]的值:[${pobjFunction4CodeEN.returnTypeFullName}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeId) == false &&
    undefined !== pobjFunction4CodeEN.returnTypeId &&
    tzDataType.isString(pobjFunction4CodeEN.returnTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[返回类型ID(returnTypeId)]的值:[${pobjFunction4CodeEN.returnTypeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeNameCustom) == false &&
    undefined !== pobjFunction4CodeEN.returnTypeNameCustom &&
    tzDataType.isString(pobjFunction4CodeEN.returnTypeNameCustom) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[定制返回类型名(returnTypeNameCustom)]的值:[${pobjFunction4CodeEN.returnTypeNameCustom}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.codeTypeId) == false &&
    undefined !== pobjFunction4CodeEN.codeTypeId &&
    tzDataType.isString(pobjFunction4CodeEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[${pobjFunction4CodeEN.codeTypeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcAccessModeId) == false &&
    undefined !== pobjFunction4CodeEN.funcAccessModeId &&
    tzDataType.isString(pobjFunction4CodeEN.funcAccessModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数操作模式Id(funcAccessModeId)]的值:[${pobjFunction4CodeEN.funcAccessModeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.tabName) == false &&
    undefined !== pobjFunction4CodeEN.tabName &&
    tzDataType.isString(pobjFunction4CodeEN.tabName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表名(tabName)]的值:[${pobjFunction4CodeEN.tabName}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.tabId) == false &&
    undefined !== pobjFunction4CodeEN.tabId &&
    tzDataType.isString(pobjFunction4CodeEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjFunction4CodeEN.tabId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcPurposeId) == false &&
    undefined !== pobjFunction4CodeEN.funcPurposeId &&
    tzDataType.isString(pobjFunction4CodeEN.funcPurposeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数用途Id(funcPurposeId)]的值:[${pobjFunction4CodeEN.funcPurposeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcTypeId) == false &&
    undefined !== pobjFunction4CodeEN.funcTypeId &&
    tzDataType.isString(pobjFunction4CodeEN.funcTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数类型Id(funcTypeId)]的值:[${pobjFunction4CodeEN.funcTypeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.getCustomAttributes &&
    undefined !== pobjFunction4CodeEN.getCustomAttributes &&
    tzDataType.isNumber(pobjFunction4CodeEN.getCustomAttributes) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[GetCustomAttributes(getCustomAttributes)]的值:[${pobjFunction4CodeEN.getCustomAttributes}], 非法,应该为数值型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.sourceFunction) == false &&
    undefined !== pobjFunction4CodeEN.sourceFunction &&
    tzDataType.isString(pobjFunction4CodeEN.sourceFunction) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[来源函数(sourceFunction)]的值:[${pobjFunction4CodeEN.sourceFunction}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.isAsyncFunc &&
    undefined !== pobjFunction4CodeEN.isAsyncFunc &&
    tzDataType.isBoolean(pobjFunction4CodeEN.isAsyncFunc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否异步函数(isAsyncFunc)]的值:[${pobjFunction4CodeEN.isAsyncFunc}], 非法,应该为布尔型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.isSysFunction &&
    undefined !== pobjFunction4CodeEN.isSysFunction &&
    tzDataType.isBoolean(pobjFunction4CodeEN.isSysFunction) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否系统函数(isSysFunction)]的值:[${pobjFunction4CodeEN.isSysFunction}], 非法,应该为布尔型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.orderNum &&
    undefined !== pobjFunction4CodeEN.orderNum &&
    tzDataType.isNumber(pobjFunction4CodeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjFunction4CodeEN.orderNum}], 非法,应该为数值型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.prjId) == false &&
    undefined !== pobjFunction4CodeEN.prjId &&
    tzDataType.isString(pobjFunction4CodeEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjFunction4CodeEN.prjId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.isTemplate &&
    undefined !== pobjFunction4CodeEN.isTemplate &&
    tzDataType.isBoolean(pobjFunction4CodeEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否模板(isTemplate)]的值:[${pobjFunction4CodeEN.isTemplate}], 非法,应该为布尔型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.updDate) == false &&
    undefined !== pobjFunction4CodeEN.updDate &&
    tzDataType.isString(pobjFunction4CodeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFunction4CodeEN.updDate}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.updUser) == false &&
    undefined !== pobjFunction4CodeEN.updUser &&
    tzDataType.isString(pobjFunction4CodeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFunction4CodeEN.updUser}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.memo) == false &&
    undefined !== pobjFunction4CodeEN.memo &&
    tzDataType.isString(pobjFunction4CodeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFunction4CodeEN.memo}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.usedTimes &&
    undefined !== pobjFunction4CodeEN.usedTimes &&
    tzDataType.isNumber(pobjFunction4CodeEN.usedTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用次数(usedTimes)]的值:[${pobjFunction4CodeEN.usedTimes}], 非法,应该为数值型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Function4Code_CheckProperty4Update(pobjFunction4CodeEN: clsFunction4CodeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcId4Code) == false &&
    GetStrLen(pobjFunction4CodeEN.funcId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数Id4Code(funcId4Code)]的长度不能超过8(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcId4Code}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcName4Code) == false &&
    GetStrLen(pobjFunction4CodeEN.funcName4Code) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数名4Code(funcName4Code)]的长度不能超过100(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcName4Code}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcCHName4Code) == false &&
    GetStrLen(pobjFunction4CodeEN.funcCHName4Code) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数中文名4Code(funcCHName4Code)]的长度不能超过200(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcCHName4Code}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.prevFuncId) == false &&
    GetStrLen(pobjFunction4CodeEN.prevFuncId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[前函数Id(prevFuncId)]的长度不能超过8(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.prevFuncId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.rootFuncId) == false &&
    GetStrLen(pobjFunction4CodeEN.rootFuncId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[根函数Id(rootFuncId)]的长度不能超过8(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.rootFuncId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcGCTypeId) == false &&
    GetStrLen(pobjFunction4CodeEN.funcGCTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数生成代码类型Id(funcGCTypeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcGCTypeId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.functionSignature) == false &&
    GetStrLen(pobjFunction4CodeEN.functionSignature) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数签名(functionSignature)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.functionSignature}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.functionSignatureSim) == false &&
    GetStrLen(pobjFunction4CodeEN.functionSignatureSim) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数签名_Sim(functionSignatureSim)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.functionSignatureSim}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnType) == false &&
    GetStrLen(pobjFunction4CodeEN.returnType) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[返回类型(returnType)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.returnType}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.clsName) == false &&
    GetStrLen(pobjFunction4CodeEN.clsName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[类名(clsName)]的长度不能超过100(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.clsName}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeFullName) == false &&
    GetStrLen(pobjFunction4CodeEN.returnTypeFullName) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[返回类型全名(returnTypeFullName)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.returnTypeFullName}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeId) == false &&
    GetStrLen(pobjFunction4CodeEN.returnTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[返回类型ID(returnTypeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.returnTypeId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeNameCustom) == false &&
    GetStrLen(pobjFunction4CodeEN.returnTypeNameCustom) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[定制返回类型名(returnTypeNameCustom)]的长度不能超过50(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.returnTypeNameCustom}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.codeTypeId) == false &&
    GetStrLen(pobjFunction4CodeEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.codeTypeId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcAccessModeId) == false &&
    GetStrLen(pobjFunction4CodeEN.funcAccessModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数操作模式Id(funcAccessModeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcAccessModeId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.tabName) == false &&
    GetStrLen(pobjFunction4CodeEN.tabName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表名(tabName)]的长度不能超过100(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.tabName}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.tabId) == false &&
    GetStrLen(pobjFunction4CodeEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.tabId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcPurposeId) == false &&
    GetStrLen(pobjFunction4CodeEN.funcPurposeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数用途Id(funcPurposeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcPurposeId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcTypeId) == false &&
    GetStrLen(pobjFunction4CodeEN.funcTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数类型Id(funcTypeId)]的长度不能超过2(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.funcTypeId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.sourceFunction) == false &&
    GetStrLen(pobjFunction4CodeEN.sourceFunction) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[来源函数(sourceFunction)]的长度不能超过500(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.sourceFunction}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.prjId) == false &&
    GetStrLen(pobjFunction4CodeEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.prjId}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.updDate) == false &&
    GetStrLen(pobjFunction4CodeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.updDate}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.updUser) == false &&
    GetStrLen(pobjFunction4CodeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.updUser}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.memo) == false &&
    GetStrLen(pobjFunction4CodeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数4Code(Function4Code))!值:${pobjFunction4CodeEN.memo}(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcId4Code) == false &&
    undefined !== pobjFunction4CodeEN.funcId4Code &&
    tzDataType.isString(pobjFunction4CodeEN.funcId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数Id4Code(funcId4Code)]的值:[${pobjFunction4CodeEN.funcId4Code}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcName4Code) == false &&
    undefined !== pobjFunction4CodeEN.funcName4Code &&
    tzDataType.isString(pobjFunction4CodeEN.funcName4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数名4Code(funcName4Code)]的值:[${pobjFunction4CodeEN.funcName4Code}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcCHName4Code) == false &&
    undefined !== pobjFunction4CodeEN.funcCHName4Code &&
    tzDataType.isString(pobjFunction4CodeEN.funcCHName4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数中文名4Code(funcCHName4Code)]的值:[${pobjFunction4CodeEN.funcCHName4Code}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.prevFuncId) == false &&
    undefined !== pobjFunction4CodeEN.prevFuncId &&
    tzDataType.isString(pobjFunction4CodeEN.prevFuncId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[前函数Id(prevFuncId)]的值:[${pobjFunction4CodeEN.prevFuncId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.rootFuncId) == false &&
    undefined !== pobjFunction4CodeEN.rootFuncId &&
    tzDataType.isString(pobjFunction4CodeEN.rootFuncId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[根函数Id(rootFuncId)]的值:[${pobjFunction4CodeEN.rootFuncId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.applicationTypeId &&
    undefined !== pobjFunction4CodeEN.applicationTypeId &&
    tzDataType.isNumber(pobjFunction4CodeEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjFunction4CodeEN.applicationTypeId}], 非法,应该为数值型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcGCTypeId) == false &&
    undefined !== pobjFunction4CodeEN.funcGCTypeId &&
    tzDataType.isString(pobjFunction4CodeEN.funcGCTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数生成代码类型Id(funcGCTypeId)]的值:[${pobjFunction4CodeEN.funcGCTypeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.functionSignature) == false &&
    undefined !== pobjFunction4CodeEN.functionSignature &&
    tzDataType.isString(pobjFunction4CodeEN.functionSignature) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数签名(functionSignature)]的值:[${pobjFunction4CodeEN.functionSignature}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.functionSignatureSim) == false &&
    undefined !== pobjFunction4CodeEN.functionSignatureSim &&
    tzDataType.isString(pobjFunction4CodeEN.functionSignatureSim) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数签名_Sim(functionSignatureSim)]的值:[${pobjFunction4CodeEN.functionSignatureSim}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnType) == false &&
    undefined !== pobjFunction4CodeEN.returnType &&
    tzDataType.isString(pobjFunction4CodeEN.returnType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[返回类型(returnType)]的值:[${pobjFunction4CodeEN.returnType}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.clsName) == false &&
    undefined !== pobjFunction4CodeEN.clsName &&
    tzDataType.isString(pobjFunction4CodeEN.clsName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[类名(clsName)]的值:[${pobjFunction4CodeEN.clsName}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeFullName) == false &&
    undefined !== pobjFunction4CodeEN.returnTypeFullName &&
    tzDataType.isString(pobjFunction4CodeEN.returnTypeFullName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[返回类型全名(returnTypeFullName)]的值:[${pobjFunction4CodeEN.returnTypeFullName}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeId) == false &&
    undefined !== pobjFunction4CodeEN.returnTypeId &&
    tzDataType.isString(pobjFunction4CodeEN.returnTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[返回类型ID(returnTypeId)]的值:[${pobjFunction4CodeEN.returnTypeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.returnTypeNameCustom) == false &&
    undefined !== pobjFunction4CodeEN.returnTypeNameCustom &&
    tzDataType.isString(pobjFunction4CodeEN.returnTypeNameCustom) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[定制返回类型名(returnTypeNameCustom)]的值:[${pobjFunction4CodeEN.returnTypeNameCustom}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.codeTypeId) == false &&
    undefined !== pobjFunction4CodeEN.codeTypeId &&
    tzDataType.isString(pobjFunction4CodeEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[${pobjFunction4CodeEN.codeTypeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcAccessModeId) == false &&
    undefined !== pobjFunction4CodeEN.funcAccessModeId &&
    tzDataType.isString(pobjFunction4CodeEN.funcAccessModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数操作模式Id(funcAccessModeId)]的值:[${pobjFunction4CodeEN.funcAccessModeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.tabName) == false &&
    undefined !== pobjFunction4CodeEN.tabName &&
    tzDataType.isString(pobjFunction4CodeEN.tabName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表名(tabName)]的值:[${pobjFunction4CodeEN.tabName}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.tabId) == false &&
    undefined !== pobjFunction4CodeEN.tabId &&
    tzDataType.isString(pobjFunction4CodeEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjFunction4CodeEN.tabId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcPurposeId) == false &&
    undefined !== pobjFunction4CodeEN.funcPurposeId &&
    tzDataType.isString(pobjFunction4CodeEN.funcPurposeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数用途Id(funcPurposeId)]的值:[${pobjFunction4CodeEN.funcPurposeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.funcTypeId) == false &&
    undefined !== pobjFunction4CodeEN.funcTypeId &&
    tzDataType.isString(pobjFunction4CodeEN.funcTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数类型Id(funcTypeId)]的值:[${pobjFunction4CodeEN.funcTypeId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.getCustomAttributes &&
    undefined !== pobjFunction4CodeEN.getCustomAttributes &&
    tzDataType.isNumber(pobjFunction4CodeEN.getCustomAttributes) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[GetCustomAttributes(getCustomAttributes)]的值:[${pobjFunction4CodeEN.getCustomAttributes}], 非法,应该为数值型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.sourceFunction) == false &&
    undefined !== pobjFunction4CodeEN.sourceFunction &&
    tzDataType.isString(pobjFunction4CodeEN.sourceFunction) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[来源函数(sourceFunction)]的值:[${pobjFunction4CodeEN.sourceFunction}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.isAsyncFunc &&
    undefined !== pobjFunction4CodeEN.isAsyncFunc &&
    tzDataType.isBoolean(pobjFunction4CodeEN.isAsyncFunc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否异步函数(isAsyncFunc)]的值:[${pobjFunction4CodeEN.isAsyncFunc}], 非法,应该为布尔型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.isSysFunction &&
    undefined !== pobjFunction4CodeEN.isSysFunction &&
    tzDataType.isBoolean(pobjFunction4CodeEN.isSysFunction) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否系统函数(isSysFunction)]的值:[${pobjFunction4CodeEN.isSysFunction}], 非法,应该为布尔型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.orderNum &&
    undefined !== pobjFunction4CodeEN.orderNum &&
    tzDataType.isNumber(pobjFunction4CodeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjFunction4CodeEN.orderNum}], 非法,应该为数值型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.prjId) == false &&
    undefined !== pobjFunction4CodeEN.prjId &&
    tzDataType.isString(pobjFunction4CodeEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjFunction4CodeEN.prjId}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.isTemplate &&
    undefined !== pobjFunction4CodeEN.isTemplate &&
    tzDataType.isBoolean(pobjFunction4CodeEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否模板(isTemplate)]的值:[${pobjFunction4CodeEN.isTemplate}], 非法,应该为布尔型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.updDate) == false &&
    undefined !== pobjFunction4CodeEN.updDate &&
    tzDataType.isString(pobjFunction4CodeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFunction4CodeEN.updDate}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.updUser) == false &&
    undefined !== pobjFunction4CodeEN.updUser &&
    tzDataType.isString(pobjFunction4CodeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFunction4CodeEN.updUser}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4CodeEN.memo) == false &&
    undefined !== pobjFunction4CodeEN.memo &&
    tzDataType.isString(pobjFunction4CodeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFunction4CodeEN.memo}], 非法,应该为字符型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4CodeEN.usedTimes &&
    undefined !== pobjFunction4CodeEN.usedTimes &&
    tzDataType.isNumber(pobjFunction4CodeEN.usedTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用次数(usedTimes)]的值:[${pobjFunction4CodeEN.usedTimes}], 非法,应该为数值型(In 函数4Code(Function4Code))!(clsFunction4CodeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Function4Code_GetJSONStrByObj(pobjFunction4CodeEN: clsFunction4CodeEN): string {
  pobjFunction4CodeEN.sfUpdFldSetStr = pobjFunction4CodeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFunction4CodeEN);
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
export function Function4Code_GetObjLstByJSONStr(strJSON: string): Array<clsFunction4CodeEN> {
  let arrFunction4CodeObjLst = new Array<clsFunction4CodeEN>();
  if (strJSON === '') {
    return arrFunction4CodeObjLst;
  }
  try {
    arrFunction4CodeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFunction4CodeObjLst;
  }
  return arrFunction4CodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFunction4CodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Function4Code_GetObjLstByJSONObjLst(
  arrFunction4CodeObjLstS: Array<clsFunction4CodeEN>,
): Array<clsFunction4CodeEN> {
  const arrFunction4CodeObjLst = new Array<clsFunction4CodeEN>();
  for (const objInFor of arrFunction4CodeObjLstS) {
    const obj1 = Function4Code_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFunction4CodeObjLst.push(obj1);
  }
  return arrFunction4CodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Function4Code_GetObjByJSONStr(strJSON: string): clsFunction4CodeEN {
  let pobjFunction4CodeEN = new clsFunction4CodeEN();
  if (strJSON === '') {
    return pobjFunction4CodeEN;
  }
  try {
    pobjFunction4CodeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFunction4CodeEN;
  }
  return pobjFunction4CodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Function4Code_GetCombineCondition(
  objFunction4CodeCond: clsFunction4CodeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FuncId4Code,
      objFunction4CodeCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FuncName4Code,
    ) == true
  ) {
    const strComparisonOpFuncName4Code: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FuncName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FuncName4Code,
      objFunction4CodeCond.funcName4Code,
      strComparisonOpFuncName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FuncCHName4Code,
    ) == true
  ) {
    const strComparisonOpFuncCHName4Code: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FuncCHName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FuncCHName4Code,
      objFunction4CodeCond.funcCHName4Code,
      strComparisonOpFuncCHName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_PrevFuncId,
    ) == true
  ) {
    const strComparisonOpPrevFuncId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_PrevFuncId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_PrevFuncId,
      objFunction4CodeCond.prevFuncId,
      strComparisonOpPrevFuncId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_RootFuncId,
    ) == true
  ) {
    const strComparisonOpRootFuncId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_RootFuncId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_RootFuncId,
      objFunction4CodeCond.rootFuncId,
      strComparisonOpRootFuncId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFunction4CodeEN.con_ApplicationTypeId,
      objFunction4CodeCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FuncGCTypeId,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FuncGCTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FuncGCTypeId,
      objFunction4CodeCond.funcGCTypeId,
      strComparisonOpFuncGCTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FunctionSignature,
      objFunction4CodeCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FunctionSignatureSim,
    ) == true
  ) {
    const strComparisonOpFunctionSignatureSim: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FunctionSignatureSim];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FunctionSignatureSim,
      objFunction4CodeCond.functionSignatureSim,
      strComparisonOpFunctionSignatureSim,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_ReturnType,
    ) == true
  ) {
    const strComparisonOpReturnType: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_ReturnType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_ReturnType,
      objFunction4CodeCond.returnType,
      strComparisonOpReturnType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_ClsName,
      objFunction4CodeCond.clsName,
      strComparisonOpClsName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_ReturnTypeFullName,
    ) == true
  ) {
    const strComparisonOpReturnTypeFullName: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_ReturnTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_ReturnTypeFullName,
      objFunction4CodeCond.returnTypeFullName,
      strComparisonOpReturnTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_ReturnTypeId,
      objFunction4CodeCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_ReturnTypeNameCustom,
    ) == true
  ) {
    const strComparisonOpReturnTypeNameCustom: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_ReturnTypeNameCustom];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_ReturnTypeNameCustom,
      objFunction4CodeCond.returnTypeNameCustom,
      strComparisonOpReturnTypeNameCustom,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_CodeTypeId,
      objFunction4CodeCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FuncAccessModeId,
    ) == true
  ) {
    const strComparisonOpFuncAccessModeId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FuncAccessModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FuncAccessModeId,
      objFunction4CodeCond.funcAccessModeId,
      strComparisonOpFuncAccessModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_TabName,
      objFunction4CodeCond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_TabId,
      objFunction4CodeCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FuncPurposeId,
    ) == true
  ) {
    const strComparisonOpFuncPurposeId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FuncPurposeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FuncPurposeId,
      objFunction4CodeCond.funcPurposeId,
      strComparisonOpFuncPurposeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_FuncTypeId,
      objFunction4CodeCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_GetCustomAttributes,
    ) == true
  ) {
    const strComparisonOpGetCustomAttributes: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_GetCustomAttributes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFunction4CodeEN.con_GetCustomAttributes,
      objFunction4CodeCond.getCustomAttributes,
      strComparisonOpGetCustomAttributes,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_SourceFunction,
    ) == true
  ) {
    const strComparisonOpSourceFunction: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_SourceFunction];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_SourceFunction,
      objFunction4CodeCond.sourceFunction,
      strComparisonOpSourceFunction,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_IsAsyncFunc,
    ) == true
  ) {
    if (objFunction4CodeCond.isAsyncFunc == true) {
      strWhereCond += Format(" And {0} = '1'", clsFunction4CodeEN.con_IsAsyncFunc);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFunction4CodeEN.con_IsAsyncFunc);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_IsSysFunction,
    ) == true
  ) {
    if (objFunction4CodeCond.isSysFunction == true) {
      strWhereCond += Format(" And {0} = '1'", clsFunction4CodeEN.con_IsSysFunction);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFunction4CodeEN.con_IsSysFunction);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFunction4CodeEN.con_OrderNum,
      objFunction4CodeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_PrjId,
      objFunction4CodeCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_IsTemplate,
    ) == true
  ) {
    if (objFunction4CodeCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsFunction4CodeEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFunction4CodeEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_UpdDate,
      objFunction4CodeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_UpdUser,
      objFunction4CodeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4CodeEN.con_Memo,
      objFunction4CodeCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4CodeCond.dicFldComparisonOp,
      clsFunction4CodeEN.con_UsedTimes,
    ) == true
  ) {
    const strComparisonOpUsedTimes: string =
      objFunction4CodeCond.dicFldComparisonOp[clsFunction4CodeEN.con_UsedTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFunction4CodeEN.con_UsedTimes,
      objFunction4CodeCond.usedTimes,
      strComparisonOpUsedTimes,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Function4Code(函数4Code),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFuncName4Code: 函数名4Code(要求唯一的字段)
 * @param strClsName: 类名(要求唯一的字段)
 * @param strFuncPurposeId: 函数用途Id(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Function4Code_GetUniCondStr(objFunction4CodeEN: clsFunction4CodeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncName4Code = '{0}'", objFunction4CodeEN.funcName4Code);
  strWhereCond += Format(" and ClsName = '{0}'", objFunction4CodeEN.clsName);
  strWhereCond += Format(" and FuncPurposeId = '{0}'", objFunction4CodeEN.funcPurposeId);
  strWhereCond += Format(" and PrjId = '{0}'", objFunction4CodeEN.prjId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objFunction4CodeEN.codeTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Function4Code(函数4Code),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFuncName4Code: 函数名4Code(要求唯一的字段)
 * @param strClsName: 类名(要求唯一的字段)
 * @param strFuncPurposeId: 函数用途Id(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Function4Code_GetUniCondStr4Update(objFunction4CodeEN: clsFunction4CodeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncId4Code <> '{0}'", objFunction4CodeEN.funcId4Code);
  strWhereCond += Format(" and FuncName4Code = '{0}'", objFunction4CodeEN.funcName4Code);
  strWhereCond += Format(" and ClsName = '{0}'", objFunction4CodeEN.clsName);
  strWhereCond += Format(" and FuncPurposeId = '{0}'", objFunction4CodeEN.funcPurposeId);
  strWhereCond += Format(" and PrjId = '{0}'", objFunction4CodeEN.prjId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objFunction4CodeEN.codeTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFunction4CodeENS:源对象
 * @param objFunction4CodeENT:目标对象
 */
export function Function4Code_GetObjFromJsonObj(
  objFunction4CodeENS: clsFunction4CodeEN,
): clsFunction4CodeEN {
  const objFunction4CodeENT: clsFunction4CodeEN = new clsFunction4CodeEN();
  ObjectAssign(objFunction4CodeENT, objFunction4CodeENS);
  return objFunction4CodeENT;
}
