/**
 * 类名:clsvFunction4CodeWApi
 * 表名:vFunction4Code(00050387)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:37
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v函数4Code(vFunction4Code)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4CodeEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFunction4Code_Controller = 'vFunction4CodeApi';
export const vFunction4Code_ConstructorName = 'vFunction4Code';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4Code:关键字
 * @returns 对象
 **/
export async function vFunction4Code_GetObjByFuncId4CodeAsync(
  strFuncId4Code: string,
): Promise<clsvFunction4CodeEN | null> {
  const strThisFuncName = 'GetObjByFuncId4CodeAsync';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFunction4CodeWApi.GetObjByFuncId4CodeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFunction4CodeWApi.GetObjByFuncId4CodeAsync)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4Code';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
      const objvFunction4Code = vFunction4Code_GetObjFromJsonObj(returnObj);
      return objvFunction4Code;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFuncId4CodeCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByFuncId4CodelocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByFuncId4CodeCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4Code_SortFunDefa(a: clsvFunction4CodeEN, b: clsvFunction4CodeEN): number {
  return a.funcId4Code.localeCompare(b.funcId4Code);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4Code_SortFunDefa2Fld(
  a: clsvFunction4CodeEN,
  b: clsvFunction4CodeEN,
): number {
  if (a.funcName4Code == b.funcName4Code) return a.funcCHName4Code.localeCompare(b.funcCHName4Code);
  else return a.funcName4Code.localeCompare(b.funcName4Code);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4Code_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunction4CodeEN.con_FuncId4Code:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsvFunction4CodeEN.con_FuncName4Code:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsvFunction4CodeEN.con_FuncCHName4Code:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.funcCHName4Code == null) return -1;
          if (b.funcCHName4Code == null) return 1;
          return a.funcCHName4Code.localeCompare(b.funcCHName4Code);
        };
      case clsvFunction4CodeEN.con_PrevFuncId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.prevFuncId == null) return -1;
          if (b.prevFuncId == null) return 1;
          return a.prevFuncId.localeCompare(b.prevFuncId);
        };
      case clsvFunction4CodeEN.con_RootFuncId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.rootFuncId == null) return -1;
          if (b.rootFuncId == null) return 1;
          return a.rootFuncId.localeCompare(b.rootFuncId);
        };
      case clsvFunction4CodeEN.con_ApplicationTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsvFunction4CodeEN.con_ApplicationTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.applicationTypeName == null) return -1;
          if (b.applicationTypeName == null) return 1;
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsvFunction4CodeEN.con_FuncGCTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.funcGCTypeId.localeCompare(b.funcGCTypeId);
        };
      case clsvFunction4CodeEN.con_FuncGCTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.funcGCTypeName == null) return -1;
          if (b.funcGCTypeName == null) return 1;
          return a.funcGCTypeName.localeCompare(b.funcGCTypeName);
        };
      case clsvFunction4CodeEN.con_FuncGCTypeENName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.funcGCTypeENName == null) return -1;
          if (b.funcGCTypeENName == null) return 1;
          return a.funcGCTypeENName.localeCompare(b.funcGCTypeENName);
        };
      case clsvFunction4CodeEN.con_FunctionSignature:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsvFunction4CodeEN.con_FunctionSignatureSim:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.functionSignatureSim == null) return -1;
          if (b.functionSignatureSim == null) return 1;
          return a.functionSignatureSim.localeCompare(b.functionSignatureSim);
        };
      case clsvFunction4CodeEN.con_ReturnType:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.returnType.localeCompare(b.returnType);
        };
      case clsvFunction4CodeEN.con_ReturnTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsvFunction4CodeEN.con_ReturnTypeNameCustom:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.returnTypeNameCustom == null) return -1;
          if (b.returnTypeNameCustom == null) return 1;
          return a.returnTypeNameCustom.localeCompare(b.returnTypeNameCustom);
        };
      case clsvFunction4CodeEN.con_CodeTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsvFunction4CodeEN.con_CodeTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.codeTypeName == null) return -1;
          if (b.codeTypeName == null) return 1;
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsvFunction4CodeEN.con_ProgLangTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.progLangTypeId == null) return -1;
          if (b.progLangTypeId == null) return 1;
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvFunction4CodeEN.con_FuncAccessModeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.funcAccessModeId == null) return -1;
          if (b.funcAccessModeId == null) return 1;
          return a.funcAccessModeId.localeCompare(b.funcAccessModeId);
        };
      case clsvFunction4CodeEN.con_FuncAccessModeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.funcAccessModeName == null) return -1;
          if (b.funcAccessModeName == null) return 1;
          return a.funcAccessModeName.localeCompare(b.funcAccessModeName);
        };
      case clsvFunction4CodeEN.con_TabName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.tabName == null) return -1;
          if (b.tabName == null) return 1;
          return a.tabName.localeCompare(b.tabName);
        };
      case clsvFunction4CodeEN.con_TabId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.tabId == null) return -1;
          if (b.tabId == null) return 1;
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvFunction4CodeEN.con_FuncPurposeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.funcPurposeId.localeCompare(b.funcPurposeId);
        };
      case clsvFunction4CodeEN.con_FuncPurposeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.funcPurposeName == null) return -1;
          if (b.funcPurposeName == null) return 1;
          return a.funcPurposeName.localeCompare(b.funcPurposeName);
        };
      case clsvFunction4CodeEN.con_FuncTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsvFunction4CodeEN.con_FuncTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsvFunction4CodeEN.con_IsAsyncFunc:
        return (a: clsvFunction4CodeEN) => {
          if (a.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsvFunction4CodeEN.con_IsSysFunction:
        return (a: clsvFunction4CodeEN) => {
          if (a.isSysFunction == true) return 1;
          else return -1;
        };
      case clsvFunction4CodeEN.con_OrderNum:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvFunction4CodeEN.con_PrjId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvFunction4CodeEN.con_UpdDate:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvFunction4CodeEN.con_UpdUser:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvFunction4CodeEN.con_Memo:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvFunction4CodeEN.con_ReturnTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.returnTypeName == null) return -1;
          if (b.returnTypeName == null) return 1;
          return a.returnTypeName.localeCompare(b.returnTypeName);
        };
      case clsvFunction4CodeEN.con_TabName2:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.tabName2 == null) return -1;
          if (b.tabName2 == null) return 1;
          return a.tabName2.localeCompare(b.tabName2);
        };
      case clsvFunction4CodeEN.con_Func4GCCount:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.func4GCCount - b.func4GCCount;
        };
      case clsvFunction4CodeEN.con_ParaNum:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.paraNum - b.paraNum;
        };
      case clsvFunction4CodeEN.con_FeatureCount:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return a.featureCount - b.featureCount;
        };
      case clsvFunction4CodeEN.con_ClsName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (a.clsName == null) return -1;
          if (b.clsName == null) return 1;
          return a.clsName.localeCompare(b.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunction4Code]中不存在!(in ${vFunction4Code_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFunction4CodeEN.con_FuncId4Code:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsvFunction4CodeEN.con_FuncName4Code:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsvFunction4CodeEN.con_FuncCHName4Code:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.funcCHName4Code == null) return -1;
          if (a.funcCHName4Code == null) return 1;
          return b.funcCHName4Code.localeCompare(a.funcCHName4Code);
        };
      case clsvFunction4CodeEN.con_PrevFuncId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.prevFuncId == null) return -1;
          if (a.prevFuncId == null) return 1;
          return b.prevFuncId.localeCompare(a.prevFuncId);
        };
      case clsvFunction4CodeEN.con_RootFuncId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.rootFuncId == null) return -1;
          if (a.rootFuncId == null) return 1;
          return b.rootFuncId.localeCompare(a.rootFuncId);
        };
      case clsvFunction4CodeEN.con_ApplicationTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsvFunction4CodeEN.con_ApplicationTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.applicationTypeName == null) return -1;
          if (a.applicationTypeName == null) return 1;
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsvFunction4CodeEN.con_FuncGCTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.funcGCTypeId.localeCompare(a.funcGCTypeId);
        };
      case clsvFunction4CodeEN.con_FuncGCTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.funcGCTypeName == null) return -1;
          if (a.funcGCTypeName == null) return 1;
          return b.funcGCTypeName.localeCompare(a.funcGCTypeName);
        };
      case clsvFunction4CodeEN.con_FuncGCTypeENName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.funcGCTypeENName == null) return -1;
          if (a.funcGCTypeENName == null) return 1;
          return b.funcGCTypeENName.localeCompare(a.funcGCTypeENName);
        };
      case clsvFunction4CodeEN.con_FunctionSignature:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsvFunction4CodeEN.con_FunctionSignatureSim:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.functionSignatureSim == null) return -1;
          if (a.functionSignatureSim == null) return 1;
          return b.functionSignatureSim.localeCompare(a.functionSignatureSim);
        };
      case clsvFunction4CodeEN.con_ReturnType:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.returnType.localeCompare(a.returnType);
        };
      case clsvFunction4CodeEN.con_ReturnTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsvFunction4CodeEN.con_ReturnTypeNameCustom:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.returnTypeNameCustom == null) return -1;
          if (a.returnTypeNameCustom == null) return 1;
          return b.returnTypeNameCustom.localeCompare(a.returnTypeNameCustom);
        };
      case clsvFunction4CodeEN.con_CodeTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsvFunction4CodeEN.con_CodeTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.codeTypeName == null) return -1;
          if (a.codeTypeName == null) return 1;
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsvFunction4CodeEN.con_ProgLangTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.progLangTypeId == null) return -1;
          if (a.progLangTypeId == null) return 1;
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvFunction4CodeEN.con_FuncAccessModeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.funcAccessModeId == null) return -1;
          if (a.funcAccessModeId == null) return 1;
          return b.funcAccessModeId.localeCompare(a.funcAccessModeId);
        };
      case clsvFunction4CodeEN.con_FuncAccessModeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.funcAccessModeName == null) return -1;
          if (a.funcAccessModeName == null) return 1;
          return b.funcAccessModeName.localeCompare(a.funcAccessModeName);
        };
      case clsvFunction4CodeEN.con_TabName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.tabName == null) return -1;
          if (a.tabName == null) return 1;
          return b.tabName.localeCompare(a.tabName);
        };
      case clsvFunction4CodeEN.con_TabId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.tabId == null) return -1;
          if (a.tabId == null) return 1;
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvFunction4CodeEN.con_FuncPurposeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.funcPurposeId.localeCompare(a.funcPurposeId);
        };
      case clsvFunction4CodeEN.con_FuncPurposeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.funcPurposeName == null) return -1;
          if (a.funcPurposeName == null) return 1;
          return b.funcPurposeName.localeCompare(a.funcPurposeName);
        };
      case clsvFunction4CodeEN.con_FuncTypeId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsvFunction4CodeEN.con_FuncTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsvFunction4CodeEN.con_IsAsyncFunc:
        return (b: clsvFunction4CodeEN) => {
          if (b.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsvFunction4CodeEN.con_IsSysFunction:
        return (b: clsvFunction4CodeEN) => {
          if (b.isSysFunction == true) return 1;
          else return -1;
        };
      case clsvFunction4CodeEN.con_OrderNum:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvFunction4CodeEN.con_PrjId:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvFunction4CodeEN.con_UpdDate:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvFunction4CodeEN.con_UpdUser:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvFunction4CodeEN.con_Memo:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvFunction4CodeEN.con_ReturnTypeName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.returnTypeName == null) return -1;
          if (a.returnTypeName == null) return 1;
          return b.returnTypeName.localeCompare(a.returnTypeName);
        };
      case clsvFunction4CodeEN.con_TabName2:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.tabName2 == null) return -1;
          if (a.tabName2 == null) return 1;
          return b.tabName2.localeCompare(a.tabName2);
        };
      case clsvFunction4CodeEN.con_Func4GCCount:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.func4GCCount - a.func4GCCount;
        };
      case clsvFunction4CodeEN.con_ParaNum:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.paraNum - a.paraNum;
        };
      case clsvFunction4CodeEN.con_FeatureCount:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          return b.featureCount - a.featureCount;
        };
      case clsvFunction4CodeEN.con_ClsName:
        return (a: clsvFunction4CodeEN, b: clsvFunction4CodeEN) => {
          if (b.clsName == null) return -1;
          if (a.clsName == null) return 1;
          return b.clsName.localeCompare(a.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunction4Code]中不存在!(in ${vFunction4Code_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFunction4Code_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFunction4CodeEN.con_FuncId4Code:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcId4Code === value;
      };
    case clsvFunction4CodeEN.con_FuncName4Code:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcName4Code === value;
      };
    case clsvFunction4CodeEN.con_FuncCHName4Code:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcCHName4Code === value;
      };
    case clsvFunction4CodeEN.con_PrevFuncId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.prevFuncId === value;
      };
    case clsvFunction4CodeEN.con_RootFuncId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.rootFuncId === value;
      };
    case clsvFunction4CodeEN.con_ApplicationTypeId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.applicationTypeId === value;
      };
    case clsvFunction4CodeEN.con_ApplicationTypeName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.applicationTypeName === value;
      };
    case clsvFunction4CodeEN.con_FuncGCTypeId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcGCTypeId === value;
      };
    case clsvFunction4CodeEN.con_FuncGCTypeName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcGCTypeName === value;
      };
    case clsvFunction4CodeEN.con_FuncGCTypeENName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcGCTypeENName === value;
      };
    case clsvFunction4CodeEN.con_FunctionSignature:
      return (obj: clsvFunction4CodeEN) => {
        return obj.functionSignature === value;
      };
    case clsvFunction4CodeEN.con_FunctionSignatureSim:
      return (obj: clsvFunction4CodeEN) => {
        return obj.functionSignatureSim === value;
      };
    case clsvFunction4CodeEN.con_ReturnType:
      return (obj: clsvFunction4CodeEN) => {
        return obj.returnType === value;
      };
    case clsvFunction4CodeEN.con_ReturnTypeId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.returnTypeId === value;
      };
    case clsvFunction4CodeEN.con_ReturnTypeNameCustom:
      return (obj: clsvFunction4CodeEN) => {
        return obj.returnTypeNameCustom === value;
      };
    case clsvFunction4CodeEN.con_CodeTypeId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.codeTypeId === value;
      };
    case clsvFunction4CodeEN.con_CodeTypeName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.codeTypeName === value;
      };
    case clsvFunction4CodeEN.con_ProgLangTypeId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.progLangTypeId === value;
      };
    case clsvFunction4CodeEN.con_FuncAccessModeId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcAccessModeId === value;
      };
    case clsvFunction4CodeEN.con_FuncAccessModeName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcAccessModeName === value;
      };
    case clsvFunction4CodeEN.con_TabName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.tabName === value;
      };
    case clsvFunction4CodeEN.con_TabId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.tabId === value;
      };
    case clsvFunction4CodeEN.con_FuncPurposeId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcPurposeId === value;
      };
    case clsvFunction4CodeEN.con_FuncPurposeName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcPurposeName === value;
      };
    case clsvFunction4CodeEN.con_FuncTypeId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcTypeId === value;
      };
    case clsvFunction4CodeEN.con_FuncTypeName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.funcTypeName === value;
      };
    case clsvFunction4CodeEN.con_IsAsyncFunc:
      return (obj: clsvFunction4CodeEN) => {
        return obj.isAsyncFunc === value;
      };
    case clsvFunction4CodeEN.con_IsSysFunction:
      return (obj: clsvFunction4CodeEN) => {
        return obj.isSysFunction === value;
      };
    case clsvFunction4CodeEN.con_OrderNum:
      return (obj: clsvFunction4CodeEN) => {
        return obj.orderNum === value;
      };
    case clsvFunction4CodeEN.con_PrjId:
      return (obj: clsvFunction4CodeEN) => {
        return obj.prjId === value;
      };
    case clsvFunction4CodeEN.con_UpdDate:
      return (obj: clsvFunction4CodeEN) => {
        return obj.updDate === value;
      };
    case clsvFunction4CodeEN.con_UpdUser:
      return (obj: clsvFunction4CodeEN) => {
        return obj.updUser === value;
      };
    case clsvFunction4CodeEN.con_Memo:
      return (obj: clsvFunction4CodeEN) => {
        return obj.memo === value;
      };
    case clsvFunction4CodeEN.con_ReturnTypeName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.returnTypeName === value;
      };
    case clsvFunction4CodeEN.con_TabName2:
      return (obj: clsvFunction4CodeEN) => {
        return obj.tabName2 === value;
      };
    case clsvFunction4CodeEN.con_Func4GCCount:
      return (obj: clsvFunction4CodeEN) => {
        return obj.func4GCCount === value;
      };
    case clsvFunction4CodeEN.con_ParaNum:
      return (obj: clsvFunction4CodeEN) => {
        return obj.paraNum === value;
      };
    case clsvFunction4CodeEN.con_FeatureCount:
      return (obj: clsvFunction4CodeEN) => {
        return obj.featureCount === value;
      };
    case clsvFunction4CodeEN.con_ClsName:
      return (obj: clsvFunction4CodeEN) => {
        return obj.clsName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFunction4Code]中不存在!(in ${vFunction4Code_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vFunction4Code__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFunction4Code_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFunction4CodeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
      const objvFunction4Code = vFunction4Code_GetObjFromJsonObj(returnObj);
      return objvFunction4Code;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFunction4CodeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
          vFunction4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_GetObjLstByFuncId4CodeLstAsync(
  arrFuncId4Code: Array<string>,
): Promise<Array<clsvFunction4CodeEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4CodeLstAsync';
  const strAction = 'GetObjLstByFuncId4CodeLst';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
          vFunction4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFunction4CodeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
          vFunction4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFunction4CodeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
          vFunction4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunction4CodeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunction4CodeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
          vFunction4Code_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_IsExistAsync(strFuncId4Code: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
export async function vFunction4Code_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFunction4Code_Controller, strAction);

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
        vFunction4Code_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vFunction4Code_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunction4Code_GetJSONStrByObj(pobjvFunction4CodeEN: clsvFunction4CodeEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFunction4CodeEN);
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
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFunction4Code_GetObjLstByJSONStr(strJSON: string): Array<clsvFunction4CodeEN> {
  let arrvFunction4CodeObjLst = new Array<clsvFunction4CodeEN>();
  if (strJSON === '') {
    return arrvFunction4CodeObjLst;
  }
  try {
    arrvFunction4CodeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFunction4CodeObjLst;
  }
  return arrvFunction4CodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFunction4CodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFunction4Code_GetObjLstByJSONObjLst(
  arrvFunction4CodeObjLstS: Array<clsvFunction4CodeEN>,
): Array<clsvFunction4CodeEN> {
  const arrvFunction4CodeObjLst = new Array<clsvFunction4CodeEN>();
  for (const objInFor of arrvFunction4CodeObjLstS) {
    const obj1 = vFunction4Code_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFunction4CodeObjLst.push(obj1);
  }
  return arrvFunction4CodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunction4Code_GetObjByJSONStr(strJSON: string): clsvFunction4CodeEN {
  let pobjvFunction4CodeEN = new clsvFunction4CodeEN();
  if (strJSON === '') {
    return pobjvFunction4CodeEN;
  }
  try {
    pobjvFunction4CodeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFunction4CodeEN;
  }
  return pobjvFunction4CodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFunction4Code_GetCombineCondition(
  objvFunction4CodeCond: clsvFunction4CodeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncId4Code,
      objvFunction4CodeCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncName4Code,
    ) == true
  ) {
    const strComparisonOpFuncName4Code: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncName4Code,
      objvFunction4CodeCond.funcName4Code,
      strComparisonOpFuncName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncCHName4Code,
    ) == true
  ) {
    const strComparisonOpFuncCHName4Code: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncCHName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncCHName4Code,
      objvFunction4CodeCond.funcCHName4Code,
      strComparisonOpFuncCHName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_PrevFuncId,
    ) == true
  ) {
    const strComparisonOpPrevFuncId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_PrevFuncId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_PrevFuncId,
      objvFunction4CodeCond.prevFuncId,
      strComparisonOpPrevFuncId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_RootFuncId,
    ) == true
  ) {
    const strComparisonOpRootFuncId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_RootFuncId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_RootFuncId,
      objvFunction4CodeCond.rootFuncId,
      strComparisonOpRootFuncId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4CodeEN.con_ApplicationTypeId,
      objvFunction4CodeCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ApplicationTypeName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ApplicationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_ApplicationTypeName,
      objvFunction4CodeCond.applicationTypeName,
      strComparisonOpApplicationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncGCTypeId,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncGCTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncGCTypeId,
      objvFunction4CodeCond.funcGCTypeId,
      strComparisonOpFuncGCTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncGCTypeName,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncGCTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncGCTypeName,
      objvFunction4CodeCond.funcGCTypeName,
      strComparisonOpFuncGCTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncGCTypeENName,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeENName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncGCTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncGCTypeENName,
      objvFunction4CodeCond.funcGCTypeENName,
      strComparisonOpFuncGCTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FunctionSignature,
      objvFunction4CodeCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FunctionSignatureSim,
    ) == true
  ) {
    const strComparisonOpFunctionSignatureSim: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FunctionSignatureSim];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FunctionSignatureSim,
      objvFunction4CodeCond.functionSignatureSim,
      strComparisonOpFunctionSignatureSim,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ReturnType,
    ) == true
  ) {
    const strComparisonOpReturnType: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ReturnType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_ReturnType,
      objvFunction4CodeCond.returnType,
      strComparisonOpReturnType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_ReturnTypeId,
      objvFunction4CodeCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ReturnTypeNameCustom,
    ) == true
  ) {
    const strComparisonOpReturnTypeNameCustom: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ReturnTypeNameCustom];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_ReturnTypeNameCustom,
      objvFunction4CodeCond.returnTypeNameCustom,
      strComparisonOpReturnTypeNameCustom,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_CodeTypeId,
      objvFunction4CodeCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_CodeTypeName,
    ) == true
  ) {
    const strComparisonOpCodeTypeName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_CodeTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_CodeTypeName,
      objvFunction4CodeCond.codeTypeName,
      strComparisonOpCodeTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_ProgLangTypeId,
      objvFunction4CodeCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncAccessModeId,
    ) == true
  ) {
    const strComparisonOpFuncAccessModeId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncAccessModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncAccessModeId,
      objvFunction4CodeCond.funcAccessModeId,
      strComparisonOpFuncAccessModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncAccessModeName,
    ) == true
  ) {
    const strComparisonOpFuncAccessModeName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncAccessModeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncAccessModeName,
      objvFunction4CodeCond.funcAccessModeName,
      strComparisonOpFuncAccessModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_TabName,
      objvFunction4CodeCond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_TabId,
      objvFunction4CodeCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncPurposeId,
    ) == true
  ) {
    const strComparisonOpFuncPurposeId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncPurposeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncPurposeId,
      objvFunction4CodeCond.funcPurposeId,
      strComparisonOpFuncPurposeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncPurposeName,
    ) == true
  ) {
    const strComparisonOpFuncPurposeName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncPurposeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncPurposeName,
      objvFunction4CodeCond.funcPurposeName,
      strComparisonOpFuncPurposeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncTypeId,
      objvFunction4CodeCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FuncTypeName,
    ) == true
  ) {
    const strComparisonOpFuncTypeName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FuncTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_FuncTypeName,
      objvFunction4CodeCond.funcTypeName,
      strComparisonOpFuncTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_IsAsyncFunc,
    ) == true
  ) {
    if (objvFunction4CodeCond.isAsyncFunc == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunction4CodeEN.con_IsAsyncFunc);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunction4CodeEN.con_IsAsyncFunc);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_IsSysFunction,
    ) == true
  ) {
    if (objvFunction4CodeCond.isSysFunction == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunction4CodeEN.con_IsSysFunction);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunction4CodeEN.con_IsSysFunction);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4CodeEN.con_OrderNum,
      objvFunction4CodeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_PrjId,
      objvFunction4CodeCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_UpdDate,
      objvFunction4CodeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_UpdUser,
      objvFunction4CodeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_Memo,
      objvFunction4CodeCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ReturnTypeName,
    ) == true
  ) {
    const strComparisonOpReturnTypeName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ReturnTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_ReturnTypeName,
      objvFunction4CodeCond.returnTypeName,
      strComparisonOpReturnTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_TabName2,
    ) == true
  ) {
    const strComparisonOpTabName2: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_TabName2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_TabName2,
      objvFunction4CodeCond.tabName2,
      strComparisonOpTabName2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_Func4GCCount,
    ) == true
  ) {
    const strComparisonOpFunc4GCCount: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_Func4GCCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4CodeEN.con_Func4GCCount,
      objvFunction4CodeCond.func4GCCount,
      strComparisonOpFunc4GCCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ParaNum,
    ) == true
  ) {
    const strComparisonOpParaNum: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ParaNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4CodeEN.con_ParaNum,
      objvFunction4CodeCond.paraNum,
      strComparisonOpParaNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_FeatureCount,
    ) == true
  ) {
    const strComparisonOpFeatureCount: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_FeatureCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4CodeEN.con_FeatureCount,
      objvFunction4CodeCond.featureCount,
      strComparisonOpFeatureCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4CodeCond.dicFldComparisonOp,
      clsvFunction4CodeEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objvFunction4CodeCond.dicFldComparisonOp[clsvFunction4CodeEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4CodeEN.con_ClsName,
      objvFunction4CodeCond.clsName,
      strComparisonOpClsName,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFunction4CodeENS:源对象
 * @param objvFunction4CodeENT:目标对象
 */
export function vFunction4Code_GetObjFromJsonObj(
  objvFunction4CodeENS: clsvFunction4CodeEN,
): clsvFunction4CodeEN {
  const objvFunction4CodeENT: clsvFunction4CodeEN = new clsvFunction4CodeEN();
  ObjectAssign(objvFunction4CodeENT, objvFunction4CodeENS);
  return objvFunction4CodeENT;
}
