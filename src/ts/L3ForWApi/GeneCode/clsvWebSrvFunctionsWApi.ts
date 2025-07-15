/**
 * 类名:clsvWebSrvFunctionsWApi
 * 表名:vWebSrvFunctions(00050343)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vWebSrv函数(vWebSrvFunctions)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvWebSrvFunctionsEN } from '@/ts/L0Entity/GeneCode/clsvWebSrvFunctionsEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vWebSrvFunctions_Controller = 'vWebSrvFunctionsApi';
export const vWebSrvFunctions_ConstructorName = 'vWebSrvFunctions';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strWebSrvFunctionId:关键字
 * @returns 对象
 **/
export async function vWebSrvFunctions_GetObjByWebSrvFunctionIdAsync(
  strWebSrvFunctionId: string,
): Promise<clsvWebSrvFunctionsEN | null> {
  const strThisFuncName = 'GetObjByWebSrvFunctionIdAsync';

  if (IsNullOrEmpty(strWebSrvFunctionId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvFunctionId]不能为空!(In clsvWebSrvFunctionsWApi.GetObjByWebSrvFunctionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvFunctionId]的长度:[{0}]不正确!(clsvWebSrvFunctionsWApi.GetObjByWebSrvFunctionIdAsync)',
      strWebSrvFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByWebSrvFunctionId';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWebSrvFunctionId,
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
      const objvWebSrvFunctions = vWebSrvFunctions_GetObjFromJsonObj(returnObj);
      return objvWebSrvFunctions;
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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByWebSrvFunctionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByWebSrvFunctionIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByWebSrvFunctionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function vWebSrvFunctions_SortFunDefa(
  a: clsvWebSrvFunctionsEN,
  b: clsvWebSrvFunctionsEN,
): number {
  return a.webSrvFunctionId.localeCompare(b.webSrvFunctionId);
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
export function vWebSrvFunctions_SortFunDefa2Fld(
  a: clsvWebSrvFunctionsEN,
  b: clsvWebSrvFunctionsEN,
): number {
  if (a.webSrvClassId == b.webSrvClassId) return a.nameSpace.localeCompare(b.nameSpace);
  else return a.webSrvClassId.localeCompare(b.webSrvClassId);
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
export function vWebSrvFunctions_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvWebSrvFunctionsEN.con_WebSrvFunctionId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return a.webSrvFunctionId.localeCompare(b.webSrvFunctionId);
        };
      case clsvWebSrvFunctionsEN.con_WebSrvClassId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return a.webSrvClassId.localeCompare(b.webSrvClassId);
        };
      case clsvWebSrvFunctionsEN.con_NameSpace:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.nameSpace == null) return -1;
          if (b.nameSpace == null) return 1;
          return a.nameSpace.localeCompare(b.nameSpace);
        };
      case clsvWebSrvFunctionsEN.con_WebSrvUrl:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.webSrvUrl == null) return -1;
          if (b.webSrvUrl == null) return 1;
          return a.webSrvUrl.localeCompare(b.webSrvUrl);
        };
      case clsvWebSrvFunctionsEN.con_FuncModuleAgcId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.funcModuleAgcId == null) return -1;
          if (b.funcModuleAgcId == null) return 1;
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsvWebSrvFunctionsEN.con_PrjId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvWebSrvFunctionsEN.con_FunctionName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.functionName == null) return -1;
          if (b.functionName == null) return 1;
          return a.functionName.localeCompare(b.functionName);
        };
      case clsvWebSrvFunctionsEN.con_GetCustomAttributes:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return a.getCustomAttributes - b.getCustomAttributes;
        };
      case clsvWebSrvFunctionsEN.con_FunctionSignature:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsvWebSrvFunctionsEN.con_FuncTypeId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsvWebSrvFunctionsEN.con_FuncTypeName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsvWebSrvFunctionsEN.con_ReturnType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return a.returnType.localeCompare(b.returnType);
        };
      case clsvWebSrvFunctionsEN.con_ReturnTypeFullName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.returnTypeFullName == null) return -1;
          if (b.returnTypeFullName == null) return 1;
          return a.returnTypeFullName.localeCompare(b.returnTypeFullName);
        };
      case clsvWebSrvFunctionsEN.con_IsKnownType:
        return (a: clsvWebSrvFunctionsEN) => {
          if (a.isKnownType == true) return 1;
          else return -1;
        };
      case clsvWebSrvFunctionsEN.con_ReturnTypeId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsvWebSrvFunctionsEN.con_DataTypeName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.dataTypeName == null) return -1;
          if (b.dataTypeName == null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsvWebSrvFunctionsEN.con_DataTypeAbbr:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.dataTypeAbbr == null) return -1;
          if (b.dataTypeAbbr == null) return 1;
          return a.dataTypeAbbr.localeCompare(b.dataTypeAbbr);
        };
      case clsvWebSrvFunctionsEN.con_NetSysType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.netSysType == null) return -1;
          if (b.netSysType == null) return 1;
          return a.netSysType.localeCompare(b.netSysType);
        };
      case clsvWebSrvFunctionsEN.con_CsType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.csType == null) return -1;
          if (b.csType == null) return 1;
          return a.csType.localeCompare(b.csType);
        };
      case clsvWebSrvFunctionsEN.con_JavaType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.javaType == null) return -1;
          if (b.javaType == null) return 1;
          return a.javaType.localeCompare(b.javaType);
        };
      case clsvWebSrvFunctionsEN.con_JavaObjType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.javaObjType == null) return -1;
          if (b.javaObjType == null) return 1;
          return a.javaObjType.localeCompare(b.javaObjType);
        };
      case clsvWebSrvFunctionsEN.con_SwiftType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.swiftType == null) return -1;
          if (b.swiftType == null) return 1;
          return a.swiftType.localeCompare(b.swiftType);
        };
      case clsvWebSrvFunctionsEN.con_IsNeedQuote:
        return (a: clsvWebSrvFunctionsEN) => {
          if (a.isNeedQuote == true) return 1;
          else return -1;
        };
      case clsvWebSrvFunctionsEN.con_IsAsyncFunc:
        return (a: clsvWebSrvFunctionsEN) => {
          if (a.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsvWebSrvFunctionsEN.con_SourceFunction:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.sourceFunction == null) return -1;
          if (b.sourceFunction == null) return 1;
          return a.sourceFunction.localeCompare(b.sourceFunction);
        };
      case clsvWebSrvFunctionsEN.con_IsGeneCode:
        return (a: clsvWebSrvFunctionsEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      case clsvWebSrvFunctionsEN.con_ReturnValueDescription:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.returnValueDescription == null) return -1;
          if (b.returnValueDescription == null) return 1;
          return a.returnValueDescription.localeCompare(b.returnValueDescription);
        };
      case clsvWebSrvFunctionsEN.con_FuncParaLst:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.funcParaLst == null) return -1;
          if (b.funcParaLst == null) return 1;
          return a.funcParaLst.localeCompare(b.funcParaLst);
        };
      case clsvWebSrvFunctionsEN.con_UpdDate:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvWebSrvFunctionsEN.con_UpdUser:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvWebSrvFunctionsEN.con_Memo:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvWebSrvFunctionsEN.con_ClsName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (a.clsName == null) return -1;
          if (b.clsName == null) return 1;
          return a.clsName.localeCompare(b.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vWebSrvFunctions]中不存在!(in ${vWebSrvFunctions_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvWebSrvFunctionsEN.con_WebSrvFunctionId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return b.webSrvFunctionId.localeCompare(a.webSrvFunctionId);
        };
      case clsvWebSrvFunctionsEN.con_WebSrvClassId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return b.webSrvClassId.localeCompare(a.webSrvClassId);
        };
      case clsvWebSrvFunctionsEN.con_NameSpace:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.nameSpace == null) return -1;
          if (a.nameSpace == null) return 1;
          return b.nameSpace.localeCompare(a.nameSpace);
        };
      case clsvWebSrvFunctionsEN.con_WebSrvUrl:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.webSrvUrl == null) return -1;
          if (a.webSrvUrl == null) return 1;
          return b.webSrvUrl.localeCompare(a.webSrvUrl);
        };
      case clsvWebSrvFunctionsEN.con_FuncModuleAgcId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.funcModuleAgcId == null) return -1;
          if (a.funcModuleAgcId == null) return 1;
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsvWebSrvFunctionsEN.con_PrjId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvWebSrvFunctionsEN.con_FunctionName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.functionName == null) return -1;
          if (a.functionName == null) return 1;
          return b.functionName.localeCompare(a.functionName);
        };
      case clsvWebSrvFunctionsEN.con_GetCustomAttributes:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return b.getCustomAttributes - a.getCustomAttributes;
        };
      case clsvWebSrvFunctionsEN.con_FunctionSignature:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsvWebSrvFunctionsEN.con_FuncTypeId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsvWebSrvFunctionsEN.con_FuncTypeName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsvWebSrvFunctionsEN.con_ReturnType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          return b.returnType.localeCompare(a.returnType);
        };
      case clsvWebSrvFunctionsEN.con_ReturnTypeFullName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.returnTypeFullName == null) return -1;
          if (a.returnTypeFullName == null) return 1;
          return b.returnTypeFullName.localeCompare(a.returnTypeFullName);
        };
      case clsvWebSrvFunctionsEN.con_IsKnownType:
        return (b: clsvWebSrvFunctionsEN) => {
          if (b.isKnownType == true) return 1;
          else return -1;
        };
      case clsvWebSrvFunctionsEN.con_ReturnTypeId:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsvWebSrvFunctionsEN.con_DataTypeName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.dataTypeName == null) return -1;
          if (a.dataTypeName == null) return 1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsvWebSrvFunctionsEN.con_DataTypeAbbr:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.dataTypeAbbr == null) return -1;
          if (a.dataTypeAbbr == null) return 1;
          return b.dataTypeAbbr.localeCompare(a.dataTypeAbbr);
        };
      case clsvWebSrvFunctionsEN.con_NetSysType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.netSysType == null) return -1;
          if (a.netSysType == null) return 1;
          return b.netSysType.localeCompare(a.netSysType);
        };
      case clsvWebSrvFunctionsEN.con_CsType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.csType == null) return -1;
          if (a.csType == null) return 1;
          return b.csType.localeCompare(a.csType);
        };
      case clsvWebSrvFunctionsEN.con_JavaType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.javaType == null) return -1;
          if (a.javaType == null) return 1;
          return b.javaType.localeCompare(a.javaType);
        };
      case clsvWebSrvFunctionsEN.con_JavaObjType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.javaObjType == null) return -1;
          if (a.javaObjType == null) return 1;
          return b.javaObjType.localeCompare(a.javaObjType);
        };
      case clsvWebSrvFunctionsEN.con_SwiftType:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.swiftType == null) return -1;
          if (a.swiftType == null) return 1;
          return b.swiftType.localeCompare(a.swiftType);
        };
      case clsvWebSrvFunctionsEN.con_IsNeedQuote:
        return (b: clsvWebSrvFunctionsEN) => {
          if (b.isNeedQuote == true) return 1;
          else return -1;
        };
      case clsvWebSrvFunctionsEN.con_IsAsyncFunc:
        return (b: clsvWebSrvFunctionsEN) => {
          if (b.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsvWebSrvFunctionsEN.con_SourceFunction:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.sourceFunction == null) return -1;
          if (a.sourceFunction == null) return 1;
          return b.sourceFunction.localeCompare(a.sourceFunction);
        };
      case clsvWebSrvFunctionsEN.con_IsGeneCode:
        return (b: clsvWebSrvFunctionsEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      case clsvWebSrvFunctionsEN.con_ReturnValueDescription:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.returnValueDescription == null) return -1;
          if (a.returnValueDescription == null) return 1;
          return b.returnValueDescription.localeCompare(a.returnValueDescription);
        };
      case clsvWebSrvFunctionsEN.con_FuncParaLst:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.funcParaLst == null) return -1;
          if (a.funcParaLst == null) return 1;
          return b.funcParaLst.localeCompare(a.funcParaLst);
        };
      case clsvWebSrvFunctionsEN.con_UpdDate:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvWebSrvFunctionsEN.con_UpdUser:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvWebSrvFunctionsEN.con_Memo:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvWebSrvFunctionsEN.con_ClsName:
        return (a: clsvWebSrvFunctionsEN, b: clsvWebSrvFunctionsEN) => {
          if (b.clsName == null) return -1;
          if (a.clsName == null) return 1;
          return b.clsName.localeCompare(a.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vWebSrvFunctions]中不存在!(in ${vWebSrvFunctions_ConstructorName}.${strThisFuncName})`;
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
export async function vWebSrvFunctions_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvWebSrvFunctionsEN.con_WebSrvFunctionId:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.webSrvFunctionId === value;
      };
    case clsvWebSrvFunctionsEN.con_WebSrvClassId:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.webSrvClassId === value;
      };
    case clsvWebSrvFunctionsEN.con_NameSpace:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.nameSpace === value;
      };
    case clsvWebSrvFunctionsEN.con_WebSrvUrl:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.webSrvUrl === value;
      };
    case clsvWebSrvFunctionsEN.con_FuncModuleAgcId:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsvWebSrvFunctionsEN.con_PrjId:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.prjId === value;
      };
    case clsvWebSrvFunctionsEN.con_FunctionName:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.functionName === value;
      };
    case clsvWebSrvFunctionsEN.con_GetCustomAttributes:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.getCustomAttributes === value;
      };
    case clsvWebSrvFunctionsEN.con_FunctionSignature:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.functionSignature === value;
      };
    case clsvWebSrvFunctionsEN.con_FuncTypeId:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.funcTypeId === value;
      };
    case clsvWebSrvFunctionsEN.con_FuncTypeName:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.funcTypeName === value;
      };
    case clsvWebSrvFunctionsEN.con_ReturnType:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.returnType === value;
      };
    case clsvWebSrvFunctionsEN.con_ReturnTypeFullName:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.returnTypeFullName === value;
      };
    case clsvWebSrvFunctionsEN.con_IsKnownType:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.isKnownType === value;
      };
    case clsvWebSrvFunctionsEN.con_ReturnTypeId:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.returnTypeId === value;
      };
    case clsvWebSrvFunctionsEN.con_DataTypeName:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.dataTypeName === value;
      };
    case clsvWebSrvFunctionsEN.con_DataTypeAbbr:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.dataTypeAbbr === value;
      };
    case clsvWebSrvFunctionsEN.con_NetSysType:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.netSysType === value;
      };
    case clsvWebSrvFunctionsEN.con_CsType:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.csType === value;
      };
    case clsvWebSrvFunctionsEN.con_JavaType:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.javaType === value;
      };
    case clsvWebSrvFunctionsEN.con_JavaObjType:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.javaObjType === value;
      };
    case clsvWebSrvFunctionsEN.con_SwiftType:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.swiftType === value;
      };
    case clsvWebSrvFunctionsEN.con_IsNeedQuote:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.isNeedQuote === value;
      };
    case clsvWebSrvFunctionsEN.con_IsAsyncFunc:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.isAsyncFunc === value;
      };
    case clsvWebSrvFunctionsEN.con_SourceFunction:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.sourceFunction === value;
      };
    case clsvWebSrvFunctionsEN.con_IsGeneCode:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.isGeneCode === value;
      };
    case clsvWebSrvFunctionsEN.con_ReturnValueDescription:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.returnValueDescription === value;
      };
    case clsvWebSrvFunctionsEN.con_FuncParaLst:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.funcParaLst === value;
      };
    case clsvWebSrvFunctionsEN.con_UpdDate:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.updDate === value;
      };
    case clsvWebSrvFunctionsEN.con_UpdUser:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.updUser === value;
      };
    case clsvWebSrvFunctionsEN.con_Memo:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.memo === value;
      };
    case clsvWebSrvFunctionsEN.con_ClsName:
      return (obj: clsvWebSrvFunctionsEN) => {
        return obj.clsName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vWebSrvFunctions]中不存在!(in ${vWebSrvFunctions_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vWebSrvFunctions__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vWebSrvFunctions_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
export async function vWebSrvFunctions_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
export async function vWebSrvFunctions_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvWebSrvFunctionsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
      const objvWebSrvFunctions = vWebSrvFunctions_GetObjFromJsonObj(returnObj);
      return objvWebSrvFunctions;
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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
export async function vWebSrvFunctions_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
          vWebSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vWebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
 * @param arrWebSrvFunctionId:关键字列表
 * @returns 对象列表
 **/
export async function vWebSrvFunctions_GetObjLstByWebSrvFunctionIdLstAsync(
  arrWebSrvFunctionId: Array<string>,
): Promise<Array<clsvWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetObjLstByWebSrvFunctionIdLstAsync';
  const strAction = 'GetObjLstByWebSrvFunctionIdLst';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWebSrvFunctionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vWebSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vWebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByWebSrvFunctionIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function vWebSrvFunctions_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
          vWebSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vWebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
export async function vWebSrvFunctions_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
          vWebSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vWebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
export async function vWebSrvFunctions_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvWebSrvFunctionsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
          vWebSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vWebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
export async function vWebSrvFunctions_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
 * @param strWebSrvFunctionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vWebSrvFunctions_IsExistAsync(strWebSrvFunctionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWebSrvFunctionId,
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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
export async function vWebSrvFunctions_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vWebSrvFunctions_Controller, strAction);

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
        vWebSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vWebSrvFunctions_ConstructorName,
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
export function vWebSrvFunctions_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vWebSrvFunctions_GetJSONStrByObj(
  pobjvWebSrvFunctionsEN: clsvWebSrvFunctionsEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvWebSrvFunctionsEN);
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
export function vWebSrvFunctions_GetObjLstByJSONStr(strJSON: string): Array<clsvWebSrvFunctionsEN> {
  let arrvWebSrvFunctionsObjLst = new Array<clsvWebSrvFunctionsEN>();
  if (strJSON === '') {
    return arrvWebSrvFunctionsObjLst;
  }
  try {
    arrvWebSrvFunctionsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvWebSrvFunctionsObjLst;
  }
  return arrvWebSrvFunctionsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvWebSrvFunctionsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vWebSrvFunctions_GetObjLstByJSONObjLst(
  arrvWebSrvFunctionsObjLstS: Array<clsvWebSrvFunctionsEN>,
): Array<clsvWebSrvFunctionsEN> {
  const arrvWebSrvFunctionsObjLst = new Array<clsvWebSrvFunctionsEN>();
  for (const objInFor of arrvWebSrvFunctionsObjLstS) {
    const obj1 = vWebSrvFunctions_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvWebSrvFunctionsObjLst.push(obj1);
  }
  return arrvWebSrvFunctionsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vWebSrvFunctions_GetObjByJSONStr(strJSON: string): clsvWebSrvFunctionsEN {
  let pobjvWebSrvFunctionsEN = new clsvWebSrvFunctionsEN();
  if (strJSON === '') {
    return pobjvWebSrvFunctionsEN;
  }
  try {
    pobjvWebSrvFunctionsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvWebSrvFunctionsEN;
  }
  return pobjvWebSrvFunctionsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vWebSrvFunctions_GetCombineCondition(
  objvWebSrvFunctionsCond: clsvWebSrvFunctionsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_WebSrvFunctionId,
    ) == true
  ) {
    const strComparisonOpWebSrvFunctionId: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_WebSrvFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_WebSrvFunctionId,
      objvWebSrvFunctionsCond.webSrvFunctionId,
      strComparisonOpWebSrvFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_WebSrvClassId,
    ) == true
  ) {
    const strComparisonOpWebSrvClassId: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_WebSrvClassId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_WebSrvClassId,
      objvWebSrvFunctionsCond.webSrvClassId,
      strComparisonOpWebSrvClassId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_NameSpace,
    ) == true
  ) {
    const strComparisonOpNameSpace: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_NameSpace];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_NameSpace,
      objvWebSrvFunctionsCond.nameSpace,
      strComparisonOpNameSpace,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_WebSrvUrl,
    ) == true
  ) {
    const strComparisonOpWebSrvUrl: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_WebSrvUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_WebSrvUrl,
      objvWebSrvFunctionsCond.webSrvUrl,
      strComparisonOpWebSrvUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_FuncModuleAgcId,
      objvWebSrvFunctionsCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_PrjId,
      objvWebSrvFunctionsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_FunctionName,
    ) == true
  ) {
    const strComparisonOpFunctionName: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_FunctionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_FunctionName,
      objvWebSrvFunctionsCond.functionName,
      strComparisonOpFunctionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_GetCustomAttributes,
    ) == true
  ) {
    const strComparisonOpGetCustomAttributes: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_GetCustomAttributes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvWebSrvFunctionsEN.con_GetCustomAttributes,
      objvWebSrvFunctionsCond.getCustomAttributes,
      strComparisonOpGetCustomAttributes,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_FunctionSignature,
      objvWebSrvFunctionsCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_FuncTypeId,
      objvWebSrvFunctionsCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_FuncTypeName,
    ) == true
  ) {
    const strComparisonOpFuncTypeName: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_FuncTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_FuncTypeName,
      objvWebSrvFunctionsCond.funcTypeName,
      strComparisonOpFuncTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_ReturnType,
    ) == true
  ) {
    const strComparisonOpReturnType: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_ReturnType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_ReturnType,
      objvWebSrvFunctionsCond.returnType,
      strComparisonOpReturnType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_ReturnTypeFullName,
    ) == true
  ) {
    const strComparisonOpReturnTypeFullName: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_ReturnTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_ReturnTypeFullName,
      objvWebSrvFunctionsCond.returnTypeFullName,
      strComparisonOpReturnTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_IsKnownType,
    ) == true
  ) {
    if (objvWebSrvFunctionsCond.isKnownType == true) {
      strWhereCond += Format(" And {0} = '1'", clsvWebSrvFunctionsEN.con_IsKnownType);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvWebSrvFunctionsEN.con_IsKnownType);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_ReturnTypeId,
      objvWebSrvFunctionsCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_DataTypeName,
    ) == true
  ) {
    const strComparisonOpDataTypeName: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_DataTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_DataTypeName,
      objvWebSrvFunctionsCond.dataTypeName,
      strComparisonOpDataTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_DataTypeAbbr,
    ) == true
  ) {
    const strComparisonOpDataTypeAbbr: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_DataTypeAbbr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_DataTypeAbbr,
      objvWebSrvFunctionsCond.dataTypeAbbr,
      strComparisonOpDataTypeAbbr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_NetSysType,
    ) == true
  ) {
    const strComparisonOpNetSysType: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_NetSysType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_NetSysType,
      objvWebSrvFunctionsCond.netSysType,
      strComparisonOpNetSysType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_CsType,
    ) == true
  ) {
    const strComparisonOpCsType: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_CsType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_CsType,
      objvWebSrvFunctionsCond.csType,
      strComparisonOpCsType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_JavaType,
    ) == true
  ) {
    const strComparisonOpJavaType: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_JavaType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_JavaType,
      objvWebSrvFunctionsCond.javaType,
      strComparisonOpJavaType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_JavaObjType,
    ) == true
  ) {
    const strComparisonOpJavaObjType: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_JavaObjType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_JavaObjType,
      objvWebSrvFunctionsCond.javaObjType,
      strComparisonOpJavaObjType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_SwiftType,
    ) == true
  ) {
    const strComparisonOpSwiftType: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_SwiftType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_SwiftType,
      objvWebSrvFunctionsCond.swiftType,
      strComparisonOpSwiftType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_IsNeedQuote,
    ) == true
  ) {
    if (objvWebSrvFunctionsCond.isNeedQuote == true) {
      strWhereCond += Format(" And {0} = '1'", clsvWebSrvFunctionsEN.con_IsNeedQuote);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvWebSrvFunctionsEN.con_IsNeedQuote);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_IsAsyncFunc,
    ) == true
  ) {
    if (objvWebSrvFunctionsCond.isAsyncFunc == true) {
      strWhereCond += Format(" And {0} = '1'", clsvWebSrvFunctionsEN.con_IsAsyncFunc);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvWebSrvFunctionsEN.con_IsAsyncFunc);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_SourceFunction,
    ) == true
  ) {
    const strComparisonOpSourceFunction: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_SourceFunction];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_SourceFunction,
      objvWebSrvFunctionsCond.sourceFunction,
      strComparisonOpSourceFunction,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_IsGeneCode,
    ) == true
  ) {
    if (objvWebSrvFunctionsCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsvWebSrvFunctionsEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvWebSrvFunctionsEN.con_IsGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_ReturnValueDescription,
    ) == true
  ) {
    const strComparisonOpReturnValueDescription: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_ReturnValueDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_ReturnValueDescription,
      objvWebSrvFunctionsCond.returnValueDescription,
      strComparisonOpReturnValueDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_FuncParaLst,
    ) == true
  ) {
    const strComparisonOpFuncParaLst: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_FuncParaLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_FuncParaLst,
      objvWebSrvFunctionsCond.funcParaLst,
      strComparisonOpFuncParaLst,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_UpdDate,
      objvWebSrvFunctionsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_UpdUser,
      objvWebSrvFunctionsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_Memo,
      objvWebSrvFunctionsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvWebSrvFunctionsCond.dicFldComparisonOp,
      clsvWebSrvFunctionsEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objvWebSrvFunctionsCond.dicFldComparisonOp[clsvWebSrvFunctionsEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvWebSrvFunctionsEN.con_ClsName,
      objvWebSrvFunctionsCond.clsName,
      strComparisonOpClsName,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvWebSrvFunctionsENS:源对象
 * @param objvWebSrvFunctionsENT:目标对象
 */
export function vWebSrvFunctions_GetObjFromJsonObj(
  objvWebSrvFunctionsENS: clsvWebSrvFunctionsEN,
): clsvWebSrvFunctionsEN {
  const objvWebSrvFunctionsENT: clsvWebSrvFunctionsEN = new clsvWebSrvFunctionsEN();
  ObjectAssign(objvWebSrvFunctionsENT, objvWebSrvFunctionsENS);
  return objvWebSrvFunctionsENT;
}
