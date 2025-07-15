/**
 * 类名:clsvFuncParaRelaWApi
 * 表名:vFuncParaRela(00050499)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/15 03:15:15
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
 * vFuncParaRela(vFuncParaRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月15日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvFuncParaRelaENEx } from '@/ts/L0Entity/PrjFunction/clsvFuncParaRelaENEx';
import { clsvFuncParaRelaEN } from '@/ts/L0Entity/PrjFunction/clsvFuncParaRelaEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const vFuncParaRela_Controller = 'vFuncParaRelaApi';
export const vFuncParaRela_ConstructorName = 'vFuncParaRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vFuncParaRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvFuncParaRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvFuncParaRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
      const objvFuncParaRela = vFuncParaRela_GetObjFromJsonObj(returnObj);
      return objvFuncParaRela;
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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncParaRela_SortFunDefa(a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncParaRela_SortFunDefa2Fld(
  a: clsvFuncParaRelaEN,
  b: clsvFuncParaRelaEN,
): number {
  if (a.funcParaId4Code == b.funcParaId4Code) return a.paraName.localeCompare(b.paraName);
  else return a.funcParaId4Code.localeCompare(b.funcParaId4Code);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncParaRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFuncParaRelaEN.con_mId:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return a.mId - b.mId;
        };
      case clsvFuncParaRelaEN.con_FuncParaId4Code:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return a.funcParaId4Code.localeCompare(b.funcParaId4Code);
        };
      case clsvFuncParaRelaEN.con_ParaName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.paraName == null) return -1;
          if (b.paraName == null) return 1;
          return a.paraName.localeCompare(b.paraName);
        };
      case clsvFuncParaRelaEN.con_ParaCnName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.paraCnName == null) return -1;
          if (b.paraCnName == null) return 1;
          return a.paraCnName.localeCompare(b.paraCnName);
        };
      case clsvFuncParaRelaEN.con_DataTypeId:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.dataTypeId == null) return -1;
          if (b.dataTypeId == null) return 1;
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsvFuncParaRelaEN.con_DataTypeName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.dataTypeName == null) return -1;
          if (b.dataTypeName == null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsvFuncParaRelaEN.con_DataCnName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.dataCnName == null) return -1;
          if (b.dataCnName == null) return 1;
          return a.dataCnName.localeCompare(b.dataCnName);
        };
      case clsvFuncParaRelaEN.con_CsType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.csType == null) return -1;
          if (b.csType == null) return 1;
          return a.csType.localeCompare(b.csType);
        };
      case clsvFuncParaRelaEN.con_JavaType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.javaType == null) return -1;
          if (b.javaType == null) return 1;
          return a.javaType.localeCompare(b.javaType);
        };
      case clsvFuncParaRelaEN.con_JavaObjType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.javaObjType == null) return -1;
          if (b.javaObjType == null) return 1;
          return a.javaObjType.localeCompare(b.javaObjType);
        };
      case clsvFuncParaRelaEN.con_SwiftType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.swiftType == null) return -1;
          if (b.swiftType == null) return 1;
          return a.swiftType.localeCompare(b.swiftType);
        };
      case clsvFuncParaRelaEN.con_IsNeedQuote:
        return (a: clsvFuncParaRelaEN) => {
          if (a.isNeedQuote == true) return 1;
          else return -1;
        };
      case clsvFuncParaRelaEN.con_OraDbType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.oraDbType == null) return -1;
          if (b.oraDbType == null) return 1;
          return a.oraDbType.localeCompare(b.oraDbType);
        };
      case clsvFuncParaRelaEN.con_MySqlType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.mySqlType == null) return -1;
          if (b.mySqlType == null) return 1;
          return a.mySqlType.localeCompare(b.mySqlType);
        };
      case clsvFuncParaRelaEN.con_ParameterType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.parameterType == null) return -1;
          if (b.parameterType == null) return 1;
          return a.parameterType.localeCompare(b.parameterType);
        };
      case clsvFuncParaRelaEN.con_ParameterTypeFullName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.parameterTypeFullName == null) return -1;
          if (b.parameterTypeFullName == null) return 1;
          return a.parameterTypeFullName.localeCompare(b.parameterTypeFullName);
        };
      case clsvFuncParaRelaEN.con_IsByRef:
        return (a: clsvFuncParaRelaEN) => {
          if (a.isByRef == true) return 1;
          else return -1;
        };
      case clsvFuncParaRelaEN.con_PrjId:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvFuncParaRelaEN.con_FuncId4Code:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsvFuncParaRelaEN.con_FuncName4Code:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsvFuncParaRelaEN.con_FunctionSignature:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.functionSignature == null) return -1;
          if (b.functionSignature == null) return 1;
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsvFuncParaRelaEN.con_IsAsyncFunc:
        return (a: clsvFuncParaRelaEN) => {
          if (a.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsvFuncParaRelaEN.con_IsSysFunction:
        return (a: clsvFuncParaRelaEN) => {
          if (a.isSysFunction == true) return 1;
          else return -1;
        };
      case clsvFuncParaRelaEN.con_OrderNum:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvFuncParaRelaEN.con_UpdDate:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvFuncParaRelaEN.con_UpdUser:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvFuncParaRelaEN.con_Memo:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFuncParaRela]中不存在!(in ${vFuncParaRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFuncParaRelaEN.con_mId:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return b.mId - a.mId;
        };
      case clsvFuncParaRelaEN.con_FuncParaId4Code:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return b.funcParaId4Code.localeCompare(a.funcParaId4Code);
        };
      case clsvFuncParaRelaEN.con_ParaName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.paraName == null) return -1;
          if (a.paraName == null) return 1;
          return b.paraName.localeCompare(a.paraName);
        };
      case clsvFuncParaRelaEN.con_ParaCnName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.paraCnName == null) return -1;
          if (a.paraCnName == null) return 1;
          return b.paraCnName.localeCompare(a.paraCnName);
        };
      case clsvFuncParaRelaEN.con_DataTypeId:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.dataTypeId == null) return -1;
          if (a.dataTypeId == null) return 1;
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsvFuncParaRelaEN.con_DataTypeName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.dataTypeName == null) return -1;
          if (a.dataTypeName == null) return 1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsvFuncParaRelaEN.con_DataCnName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.dataCnName == null) return -1;
          if (a.dataCnName == null) return 1;
          return b.dataCnName.localeCompare(a.dataCnName);
        };
      case clsvFuncParaRelaEN.con_CsType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.csType == null) return -1;
          if (a.csType == null) return 1;
          return b.csType.localeCompare(a.csType);
        };
      case clsvFuncParaRelaEN.con_JavaType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.javaType == null) return -1;
          if (a.javaType == null) return 1;
          return b.javaType.localeCompare(a.javaType);
        };
      case clsvFuncParaRelaEN.con_JavaObjType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.javaObjType == null) return -1;
          if (a.javaObjType == null) return 1;
          return b.javaObjType.localeCompare(a.javaObjType);
        };
      case clsvFuncParaRelaEN.con_SwiftType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.swiftType == null) return -1;
          if (a.swiftType == null) return 1;
          return b.swiftType.localeCompare(a.swiftType);
        };
      case clsvFuncParaRelaEN.con_IsNeedQuote:
        return (b: clsvFuncParaRelaEN) => {
          if (b.isNeedQuote == true) return 1;
          else return -1;
        };
      case clsvFuncParaRelaEN.con_OraDbType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.oraDbType == null) return -1;
          if (a.oraDbType == null) return 1;
          return b.oraDbType.localeCompare(a.oraDbType);
        };
      case clsvFuncParaRelaEN.con_MySqlType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.mySqlType == null) return -1;
          if (a.mySqlType == null) return 1;
          return b.mySqlType.localeCompare(a.mySqlType);
        };
      case clsvFuncParaRelaEN.con_ParameterType:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.parameterType == null) return -1;
          if (a.parameterType == null) return 1;
          return b.parameterType.localeCompare(a.parameterType);
        };
      case clsvFuncParaRelaEN.con_ParameterTypeFullName:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.parameterTypeFullName == null) return -1;
          if (a.parameterTypeFullName == null) return 1;
          return b.parameterTypeFullName.localeCompare(a.parameterTypeFullName);
        };
      case clsvFuncParaRelaEN.con_IsByRef:
        return (b: clsvFuncParaRelaEN) => {
          if (b.isByRef == true) return 1;
          else return -1;
        };
      case clsvFuncParaRelaEN.con_PrjId:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvFuncParaRelaEN.con_FuncId4Code:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsvFuncParaRelaEN.con_FuncName4Code:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsvFuncParaRelaEN.con_FunctionSignature:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.functionSignature == null) return -1;
          if (a.functionSignature == null) return 1;
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsvFuncParaRelaEN.con_IsAsyncFunc:
        return (b: clsvFuncParaRelaEN) => {
          if (b.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsvFuncParaRelaEN.con_IsSysFunction:
        return (b: clsvFuncParaRelaEN) => {
          if (b.isSysFunction == true) return 1;
          else return -1;
        };
      case clsvFuncParaRelaEN.con_OrderNum:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvFuncParaRelaEN.con_UpdDate:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvFuncParaRelaEN.con_UpdUser:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvFuncParaRelaEN.con_Memo:
        return (a: clsvFuncParaRelaEN, b: clsvFuncParaRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFuncParaRela]中不存在!(in ${vFuncParaRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFuncParaRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFuncParaRelaEN.con_mId:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.mId === value;
      };
    case clsvFuncParaRelaEN.con_FuncParaId4Code:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.funcParaId4Code === value;
      };
    case clsvFuncParaRelaEN.con_ParaName:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.paraName === value;
      };
    case clsvFuncParaRelaEN.con_ParaCnName:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.paraCnName === value;
      };
    case clsvFuncParaRelaEN.con_DataTypeId:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.dataTypeId === value;
      };
    case clsvFuncParaRelaEN.con_DataTypeName:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.dataTypeName === value;
      };
    case clsvFuncParaRelaEN.con_DataCnName:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.dataCnName === value;
      };
    case clsvFuncParaRelaEN.con_CsType:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.csType === value;
      };
    case clsvFuncParaRelaEN.con_JavaType:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.javaType === value;
      };
    case clsvFuncParaRelaEN.con_JavaObjType:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.javaObjType === value;
      };
    case clsvFuncParaRelaEN.con_SwiftType:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.swiftType === value;
      };
    case clsvFuncParaRelaEN.con_IsNeedQuote:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.isNeedQuote === value;
      };
    case clsvFuncParaRelaEN.con_OraDbType:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.oraDbType === value;
      };
    case clsvFuncParaRelaEN.con_MySqlType:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.mySqlType === value;
      };
    case clsvFuncParaRelaEN.con_ParameterType:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.parameterType === value;
      };
    case clsvFuncParaRelaEN.con_ParameterTypeFullName:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.parameterTypeFullName === value;
      };
    case clsvFuncParaRelaEN.con_IsByRef:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.isByRef === value;
      };
    case clsvFuncParaRelaEN.con_PrjId:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.prjId === value;
      };
    case clsvFuncParaRelaEN.con_FuncId4Code:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.funcId4Code === value;
      };
    case clsvFuncParaRelaEN.con_FuncName4Code:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.funcName4Code === value;
      };
    case clsvFuncParaRelaEN.con_FunctionSignature:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.functionSignature === value;
      };
    case clsvFuncParaRelaEN.con_IsAsyncFunc:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.isAsyncFunc === value;
      };
    case clsvFuncParaRelaEN.con_IsSysFunction:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.isSysFunction === value;
      };
    case clsvFuncParaRelaEN.con_OrderNum:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.orderNum === value;
      };
    case clsvFuncParaRelaEN.con_UpdDate:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.updDate === value;
      };
    case clsvFuncParaRelaEN.con_UpdUser:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.updUser === value;
      };
    case clsvFuncParaRelaEN.con_Memo:
      return (obj: clsvFuncParaRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFuncParaRela]中不存在!(in ${vFuncParaRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vFuncParaRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFuncParaRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export async function vFuncParaRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export async function vFuncParaRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export async function vFuncParaRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFuncParaRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
      const objvFuncParaRela = vFuncParaRela_GetObjFromJsonObj(returnObj);
      return objvFuncParaRela;
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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export async function vFuncParaRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
          vFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vFuncParaRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
          vFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function vFuncParaRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFuncParaRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
          vFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export async function vFuncParaRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
          vFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export async function vFuncParaRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFuncParaRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFuncParaRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
          vFuncParaRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
 * @param objvFuncParaRelaENS:源对象
 * @returns 目标对象=>clsvFuncParaRelaEN:objvFuncParaRelaENT
 **/
export function vFuncParaRela_CopyToEx(
  objvFuncParaRelaENS: clsvFuncParaRelaEN,
): clsvFuncParaRelaENEx {
  const strThisFuncName = vFuncParaRela_CopyToEx.name;
  const objvFuncParaRelaENT = new clsvFuncParaRelaENEx();
  try {
    ObjectAssign(objvFuncParaRelaENT, objvFuncParaRelaENS);
    return objvFuncParaRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFuncParaRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFuncParaRelaENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vFuncParaRelaEx_FuncMapByFldName(
  strFldName: string,
  objvFuncParaRelaEx: clsvFuncParaRelaENEx,
) {
  const strThisFuncName = vFuncParaRelaEx_FuncMapByFldName.name;
  console.log(objvFuncParaRelaEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvFuncParaRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncParaRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vFuncParaRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vFuncParaRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objvFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vFuncParaRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
 * @param objvFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vFuncParaRela_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvFuncParaRelaEN);
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
 * @param objvFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vFuncParaRela_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvFuncParaRelaEN);
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objvFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vFuncParaRela_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objvFuncParaRelaEN);
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
 * @param objvFuncParaRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function vFuncParaRela_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objvFuncParaRelaEN);
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export async function vFuncParaRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFuncParaRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export async function vFuncParaRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFuncParaRela_Controller, strAction);

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
        vFuncParaRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ConstructorName,
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
export function vFuncParaRela_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFuncParaRela_GetJSONStrByObj(pobjvFuncParaRelaEN: clsvFuncParaRelaEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFuncParaRelaEN);
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
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFuncParaRela_GetObjLstByJSONStr(strJSON: string): Array<clsvFuncParaRelaEN> {
  let arrvFuncParaRelaObjLst = new Array<clsvFuncParaRelaEN>();
  if (strJSON === '') {
    return arrvFuncParaRelaObjLst;
  }
  try {
    arrvFuncParaRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFuncParaRelaObjLst;
  }
  return arrvFuncParaRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFuncParaRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFuncParaRela_GetObjLstByJSONObjLst(
  arrvFuncParaRelaObjLstS: Array<clsvFuncParaRelaEN>,
): Array<clsvFuncParaRelaEN> {
  const arrvFuncParaRelaObjLst = new Array<clsvFuncParaRelaEN>();
  for (const objInFor of arrvFuncParaRelaObjLstS) {
    const obj1 = vFuncParaRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFuncParaRelaObjLst.push(obj1);
  }
  return arrvFuncParaRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFuncParaRela_GetObjByJSONStr(strJSON: string): clsvFuncParaRelaEN {
  let pobjvFuncParaRelaEN = new clsvFuncParaRelaEN();
  if (strJSON === '') {
    return pobjvFuncParaRelaEN;
  }
  try {
    pobjvFuncParaRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFuncParaRelaEN;
  }
  return pobjvFuncParaRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFuncParaRela_GetCombineCondition(
  objvFuncParaRelaCond: clsvFuncParaRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFuncParaRelaEN.con_mId,
      objvFuncParaRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_FuncParaId4Code,
    ) == true
  ) {
    const strComparisonOpFuncParaId4Code: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_FuncParaId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_FuncParaId4Code,
      objvFuncParaRelaCond.funcParaId4Code,
      strComparisonOpFuncParaId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_ParaName,
    ) == true
  ) {
    const strComparisonOpParaName: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_ParaName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_ParaName,
      objvFuncParaRelaCond.paraName,
      strComparisonOpParaName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_ParaCnName,
    ) == true
  ) {
    const strComparisonOpParaCnName: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_ParaCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_ParaCnName,
      objvFuncParaRelaCond.paraCnName,
      strComparisonOpParaCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_DataTypeId,
      objvFuncParaRelaCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_DataTypeName,
    ) == true
  ) {
    const strComparisonOpDataTypeName: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_DataTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_DataTypeName,
      objvFuncParaRelaCond.dataTypeName,
      strComparisonOpDataTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_DataCnName,
    ) == true
  ) {
    const strComparisonOpDataCnName: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_DataCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_DataCnName,
      objvFuncParaRelaCond.dataCnName,
      strComparisonOpDataCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_CsType,
    ) == true
  ) {
    const strComparisonOpCsType: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_CsType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_CsType,
      objvFuncParaRelaCond.csType,
      strComparisonOpCsType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_JavaType,
    ) == true
  ) {
    const strComparisonOpJavaType: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_JavaType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_JavaType,
      objvFuncParaRelaCond.javaType,
      strComparisonOpJavaType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_JavaObjType,
    ) == true
  ) {
    const strComparisonOpJavaObjType: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_JavaObjType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_JavaObjType,
      objvFuncParaRelaCond.javaObjType,
      strComparisonOpJavaObjType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_SwiftType,
    ) == true
  ) {
    const strComparisonOpSwiftType: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_SwiftType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_SwiftType,
      objvFuncParaRelaCond.swiftType,
      strComparisonOpSwiftType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_IsNeedQuote,
    ) == true
  ) {
    if (objvFuncParaRelaCond.isNeedQuote == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFuncParaRelaEN.con_IsNeedQuote);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFuncParaRelaEN.con_IsNeedQuote);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_OraDbType,
    ) == true
  ) {
    const strComparisonOpOraDbType: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_OraDbType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_OraDbType,
      objvFuncParaRelaCond.oraDbType,
      strComparisonOpOraDbType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_MySqlType,
    ) == true
  ) {
    const strComparisonOpMySqlType: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_MySqlType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_MySqlType,
      objvFuncParaRelaCond.mySqlType,
      strComparisonOpMySqlType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_ParameterType,
    ) == true
  ) {
    const strComparisonOpParameterType: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_ParameterType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_ParameterType,
      objvFuncParaRelaCond.parameterType,
      strComparisonOpParameterType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_ParameterTypeFullName,
    ) == true
  ) {
    const strComparisonOpParameterTypeFullName: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_ParameterTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_ParameterTypeFullName,
      objvFuncParaRelaCond.parameterTypeFullName,
      strComparisonOpParameterTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_IsByRef,
    ) == true
  ) {
    if (objvFuncParaRelaCond.isByRef == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFuncParaRelaEN.con_IsByRef);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFuncParaRelaEN.con_IsByRef);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_PrjId,
      objvFuncParaRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_FuncId4Code,
      objvFuncParaRelaCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_FuncName4Code,
    ) == true
  ) {
    const strComparisonOpFuncName4Code: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_FuncName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_FuncName4Code,
      objvFuncParaRelaCond.funcName4Code,
      strComparisonOpFuncName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_FunctionSignature,
      objvFuncParaRelaCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_IsAsyncFunc,
    ) == true
  ) {
    if (objvFuncParaRelaCond.isAsyncFunc == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFuncParaRelaEN.con_IsAsyncFunc);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFuncParaRelaEN.con_IsAsyncFunc);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_IsSysFunction,
    ) == true
  ) {
    if (objvFuncParaRelaCond.isSysFunction == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFuncParaRelaEN.con_IsSysFunction);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFuncParaRelaEN.con_IsSysFunction);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFuncParaRelaEN.con_OrderNum,
      objvFuncParaRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_UpdDate,
      objvFuncParaRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_UpdUser,
      objvFuncParaRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRelaCond.dicFldComparisonOp,
      clsvFuncParaRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvFuncParaRelaCond.dicFldComparisonOp[clsvFuncParaRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRelaEN.con_Memo,
      objvFuncParaRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFuncParaRelaENS:源对象
 * @param objvFuncParaRelaENT:目标对象
 */
export function vFuncParaRela_GetObjFromJsonObj(
  objvFuncParaRelaENS: clsvFuncParaRelaEN,
): clsvFuncParaRelaEN {
  const objvFuncParaRelaENT: clsvFuncParaRelaEN = new clsvFuncParaRelaEN();
  ObjectAssign(objvFuncParaRelaENT, objvFuncParaRelaENS);
  return objvFuncParaRelaENT;
}
