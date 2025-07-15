/**
 * 类名:clsFunction4GeneCodeWApi
 * 表名:Function4GeneCode(00050311)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/15 23:51:51
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
 * 函数4GeneCode(Function4GeneCode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月15日.
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
import { clsFunction4GeneCodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeENEx';
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { vFunction4Code_Sim_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_SimWApi';
import { clsvFunction4Code_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_SimEN';
import { FunctionType_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';
import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
import { FuncGCType_func } from '@/ts/L3ForWApi/PrjFunction/clsFuncGCTypeWApi';
import { clsFuncGCTypeEN } from '@/ts/L0Entity/PrjFunction/clsFuncGCTypeEN';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { SQLDSType_func } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { vPrjFeatureSim_func } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import { clsvPrjFeatureSimEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const function4GeneCode_Controller = 'Function4GeneCodeApi';
export const function4GeneCode_ConstructorName = 'function4GeneCode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4GC:关键字
 * @returns 对象
 **/
export async function Function4GeneCode_GetObjByFuncId4GCAsync(
  strFuncId4GC: string,
): Promise<clsFunction4GeneCodeEN | null> {
  const strThisFuncName = 'GetObjByFuncId4GCAsync';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsFunction4GeneCodeWApi.GetObjByFuncId4GCAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsFunction4GeneCodeWApi.GetObjByFuncId4GCAsync)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4GC';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4GC,
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
      const objFunction4GeneCode = Function4GeneCode_GetObjFromJsonObj(returnObj);
      return objFunction4GeneCode;
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFuncId4GClocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByFuncId4GCCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function Function4GeneCode_SortFunDefa(
  a: clsFunction4GeneCodeEN,
  b: clsFunction4GeneCodeEN,
): number {
  return a.funcId4GC.localeCompare(b.funcId4GC);
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
export function Function4GeneCode_SortFunDefa2Fld(
  a: clsFunction4GeneCodeEN,
  b: clsFunction4GeneCodeEN,
): number {
  if (a.funcName == b.funcName) return a.funcId4Code.localeCompare(b.funcId4Code);
  else return a.funcName.localeCompare(b.funcName);
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
export function Function4GeneCode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunction4GeneCodeEN.con_FuncId4GC:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsFunction4GeneCodeEN.con_FuncName:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsFunction4GeneCodeEN.con_FuncId4Code:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.funcId4Code == null) return -1;
          if (b.funcId4Code == null) return 1;
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsFunction4GeneCodeEN.con_FuncName4GC:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.funcName4GC == null) return -1;
          if (b.funcName4GC == null) return 1;
          return a.funcName4GC.localeCompare(b.funcName4GC);
        };
      case clsFunction4GeneCodeEN.con_FuncCHName4GC:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.funcCHName4GC == null) return -1;
          if (b.funcCHName4GC == null) return 1;
          return a.funcCHName4GC.localeCompare(b.funcCHName4GC);
        };
      case clsFunction4GeneCodeEN.con_FeatureId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.featureId == null) return -1;
          if (b.featureId == null) return 1;
          return a.featureId.localeCompare(b.featureId);
        };
      case clsFunction4GeneCodeEN.con_ProgLangTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsFunction4GeneCodeEN.con_FuncCodeTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.funcCodeTypeId == null) return -1;
          if (b.funcCodeTypeId == null) return 1;
          return a.funcCodeTypeId.localeCompare(b.funcCodeTypeId);
        };
      case clsFunction4GeneCodeEN.con_SqlDsTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsFunction4GeneCodeEN.con_FuncGCTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return a.funcGCTypeId.localeCompare(b.funcGCTypeId);
        };
      case clsFunction4GeneCodeEN.con_PrjId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFunction4GeneCodeEN.con_ReturnTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsFunction4GeneCodeEN.con_FuncTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.funcTypeId == null) return -1;
          if (b.funcTypeId == null) return 1;
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsFunction4GeneCodeEN.con_IsTemplate:
        return (a: clsFunction4GeneCodeEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsFunction4GeneCodeEN.con_FunctionSignature:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.functionSignature == null) return -1;
          if (b.functionSignature == null) return 1;
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsFunction4GeneCodeEN.con_FuncCode:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.funcCode == null) return -1;
          if (b.funcCode == null) return 1;
          return a.funcCode.localeCompare(b.funcCode);
        };
      case clsFunction4GeneCodeEN.con_UserId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsFunction4GeneCodeEN.con_OrderNum:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsFunction4GeneCodeEN.con_InUse:
        return (a: clsFunction4GeneCodeEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsFunction4GeneCodeEN.con_PrimaryTypeIds:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.primaryTypeIds == null) return -1;
          if (b.primaryTypeIds == null) return 1;
          return a.primaryTypeIds.localeCompare(b.primaryTypeIds);
        };
      case clsFunction4GeneCodeEN.con_CodeText:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.codeText == null) return -1;
          if (b.codeText == null) return 1;
          return a.codeText.localeCompare(b.codeText);
        };
      case clsFunction4GeneCodeEN.con_UsedTimes:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return a.usedTimes - b.usedTimes;
        };
      case clsFunction4GeneCodeEN.con_UpdDate:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFunction4GeneCodeEN.con_UpdUser:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFunction4GeneCodeEN.con_Memo:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsFunction4GeneCodeEN.con_ParsedWords:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.parsedWords == null) return -1;
          if (b.parsedWords == null) return 1;
          return a.parsedWords.localeCompare(b.parsedWords);
        };
      case clsFunction4GeneCodeEN.con_ParsedWordsExcluded:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.parsedWordsExcluded == null) return -1;
          if (b.parsedWordsExcluded == null) return 1;
          return a.parsedWordsExcluded.localeCompare(b.parsedWordsExcluded);
        };
      case clsFunction4GeneCodeEN.con_WordVector:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (a.wordVector == null) return -1;
          if (b.wordVector == null) return 1;
          return a.wordVector.localeCompare(b.wordVector);
        };
      case clsFunction4GeneCodeEN.con_IsFuncTemplate:
        return (a: clsFunction4GeneCodeEN) => {
          if (a.isFuncTemplate == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Function4GeneCode]中不存在!(in ${function4GeneCode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFunction4GeneCodeEN.con_FuncId4GC:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsFunction4GeneCodeEN.con_FuncName:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsFunction4GeneCodeEN.con_FuncId4Code:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.funcId4Code == null) return -1;
          if (a.funcId4Code == null) return 1;
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsFunction4GeneCodeEN.con_FuncName4GC:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.funcName4GC == null) return -1;
          if (a.funcName4GC == null) return 1;
          return b.funcName4GC.localeCompare(a.funcName4GC);
        };
      case clsFunction4GeneCodeEN.con_FuncCHName4GC:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.funcCHName4GC == null) return -1;
          if (a.funcCHName4GC == null) return 1;
          return b.funcCHName4GC.localeCompare(a.funcCHName4GC);
        };
      case clsFunction4GeneCodeEN.con_FeatureId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.featureId == null) return -1;
          if (a.featureId == null) return 1;
          return b.featureId.localeCompare(a.featureId);
        };
      case clsFunction4GeneCodeEN.con_ProgLangTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsFunction4GeneCodeEN.con_FuncCodeTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.funcCodeTypeId == null) return -1;
          if (a.funcCodeTypeId == null) return 1;
          return b.funcCodeTypeId.localeCompare(a.funcCodeTypeId);
        };
      case clsFunction4GeneCodeEN.con_SqlDsTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsFunction4GeneCodeEN.con_FuncGCTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return b.funcGCTypeId.localeCompare(a.funcGCTypeId);
        };
      case clsFunction4GeneCodeEN.con_PrjId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFunction4GeneCodeEN.con_ReturnTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsFunction4GeneCodeEN.con_FuncTypeId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.funcTypeId == null) return -1;
          if (a.funcTypeId == null) return 1;
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsFunction4GeneCodeEN.con_IsTemplate:
        return (b: clsFunction4GeneCodeEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsFunction4GeneCodeEN.con_FunctionSignature:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.functionSignature == null) return -1;
          if (a.functionSignature == null) return 1;
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsFunction4GeneCodeEN.con_FuncCode:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.funcCode == null) return -1;
          if (a.funcCode == null) return 1;
          return b.funcCode.localeCompare(a.funcCode);
        };
      case clsFunction4GeneCodeEN.con_UserId:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsFunction4GeneCodeEN.con_OrderNum:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsFunction4GeneCodeEN.con_InUse:
        return (b: clsFunction4GeneCodeEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsFunction4GeneCodeEN.con_PrimaryTypeIds:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.primaryTypeIds == null) return -1;
          if (a.primaryTypeIds == null) return 1;
          return b.primaryTypeIds.localeCompare(a.primaryTypeIds);
        };
      case clsFunction4GeneCodeEN.con_CodeText:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.codeText == null) return -1;
          if (a.codeText == null) return 1;
          return b.codeText.localeCompare(a.codeText);
        };
      case clsFunction4GeneCodeEN.con_UsedTimes:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          return b.usedTimes - a.usedTimes;
        };
      case clsFunction4GeneCodeEN.con_UpdDate:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFunction4GeneCodeEN.con_UpdUser:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFunction4GeneCodeEN.con_Memo:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsFunction4GeneCodeEN.con_ParsedWords:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.parsedWords == null) return -1;
          if (a.parsedWords == null) return 1;
          return b.parsedWords.localeCompare(a.parsedWords);
        };
      case clsFunction4GeneCodeEN.con_ParsedWordsExcluded:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.parsedWordsExcluded == null) return -1;
          if (a.parsedWordsExcluded == null) return 1;
          return b.parsedWordsExcluded.localeCompare(a.parsedWordsExcluded);
        };
      case clsFunction4GeneCodeEN.con_WordVector:
        return (a: clsFunction4GeneCodeEN, b: clsFunction4GeneCodeEN) => {
          if (b.wordVector == null) return -1;
          if (a.wordVector == null) return 1;
          return b.wordVector.localeCompare(a.wordVector);
        };
      case clsFunction4GeneCodeEN.con_IsFuncTemplate:
        return (b: clsFunction4GeneCodeEN) => {
          if (b.isFuncTemplate == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Function4GeneCode]中不存在!(in ${function4GeneCode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByFuncId4GCCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function Function4GeneCode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFunction4GeneCodeEN.con_FuncId4GC:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcId4GC === value;
      };
    case clsFunction4GeneCodeEN.con_FuncName:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcName === value;
      };
    case clsFunction4GeneCodeEN.con_FuncId4Code:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcId4Code === value;
      };
    case clsFunction4GeneCodeEN.con_FuncName4GC:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcName4GC === value;
      };
    case clsFunction4GeneCodeEN.con_FuncCHName4GC:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcCHName4GC === value;
      };
    case clsFunction4GeneCodeEN.con_FeatureId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.featureId === value;
      };
    case clsFunction4GeneCodeEN.con_ProgLangTypeId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.progLangTypeId === value;
      };
    case clsFunction4GeneCodeEN.con_FuncCodeTypeId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcCodeTypeId === value;
      };
    case clsFunction4GeneCodeEN.con_SqlDsTypeId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsFunction4GeneCodeEN.con_FuncGCTypeId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcGCTypeId === value;
      };
    case clsFunction4GeneCodeEN.con_PrjId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.prjId === value;
      };
    case clsFunction4GeneCodeEN.con_ReturnTypeId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.returnTypeId === value;
      };
    case clsFunction4GeneCodeEN.con_FuncTypeId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcTypeId === value;
      };
    case clsFunction4GeneCodeEN.con_IsTemplate:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.isTemplate === value;
      };
    case clsFunction4GeneCodeEN.con_FunctionSignature:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.functionSignature === value;
      };
    case clsFunction4GeneCodeEN.con_FuncCode:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.funcCode === value;
      };
    case clsFunction4GeneCodeEN.con_UserId:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.userId === value;
      };
    case clsFunction4GeneCodeEN.con_OrderNum:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.orderNum === value;
      };
    case clsFunction4GeneCodeEN.con_InUse:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.inUse === value;
      };
    case clsFunction4GeneCodeEN.con_PrimaryTypeIds:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.primaryTypeIds === value;
      };
    case clsFunction4GeneCodeEN.con_CodeText:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.codeText === value;
      };
    case clsFunction4GeneCodeEN.con_UsedTimes:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.usedTimes === value;
      };
    case clsFunction4GeneCodeEN.con_UpdDate:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.updDate === value;
      };
    case clsFunction4GeneCodeEN.con_UpdUser:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.updUser === value;
      };
    case clsFunction4GeneCodeEN.con_Memo:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.memo === value;
      };
    case clsFunction4GeneCodeEN.con_ParsedWords:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.parsedWords === value;
      };
    case clsFunction4GeneCodeEN.con_ParsedWordsExcluded:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.parsedWordsExcluded === value;
      };
    case clsFunction4GeneCodeEN.con_WordVector:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.wordVector === value;
      };
    case clsFunction4GeneCodeEN.con_IsFuncTemplate:
      return (obj: clsFunction4GeneCodeEN) => {
        return obj.isFuncTemplate === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Function4GeneCode]中不存在!(in ${function4GeneCode_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[Function4GeneCode__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Function4GeneCode_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFunction4GeneCodeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
      const objFunction4GeneCode = Function4GeneCode_GetObjFromJsonObj(returnObj);
      return objFunction4GeneCode;
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
          function4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param arrFuncId4GC:关键字列表
 * @returns 对象列表
 **/
export async function Function4GeneCode_GetObjLstByFuncId4GCLstAsync(
  arrFuncId4GC: Array<string>,
): Promise<Array<clsFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4GCLstAsync';
  const strAction = 'GetObjLstByFuncId4GCLst';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId4GC, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          function4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByFuncId4GCLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function Function4GeneCode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
          function4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
          function4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunction4GeneCodeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
          function4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Function4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param strFuncId4GC:关键字
 * @returns 获取删除的结果
 **/
export async function Function4GeneCode_DelRecordAsync(strFuncId4GC: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncId4GC);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param arrFuncId4GC:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Function4GeneCode_DelFunction4GeneCodesAsync(
  arrFuncId4GC: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFunction4GeneCodesAsync';
  const strAction = 'DelFunction4GeneCodes';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId4GC, config);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param objFunction4GeneCodeENS:源对象
 * @returns 目标对象=>clsFunction4GeneCodeEN:objFunction4GeneCodeENT
 **/
export function Function4GeneCode_CopyToEx(
  objFunction4GeneCodeENS: clsFunction4GeneCodeEN,
): clsFunction4GeneCodeENEx {
  const strThisFuncName = Function4GeneCode_CopyToEx.name;
  const objFunction4GeneCodeENT = new clsFunction4GeneCodeENEx();
  try {
    ObjectAssign(objFunction4GeneCodeENT, objFunction4GeneCodeENS);
    return objFunction4GeneCodeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFunction4GeneCodeENT;
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
export function Function4GeneCode_FuncMapByFldName(
  strFldName: string,
  objFunction4GeneCodeEx: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFunction4GeneCodeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFunction4GeneCodeENEx.con_CodeTypeName:
      return Function4GeneCode_FuncMapCodeTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_FuncName4Code:
      return Function4GeneCode_FuncMapFuncName4Code(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_FuncTypeName:
      return Function4GeneCode_FuncMapFuncTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_FuncGCTypeName:
      return Function4GeneCode_FuncMapFuncGCTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_ProgLangTypeName:
      return Function4GeneCode_FuncMapProgLangTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_SqlDsTypeName:
      return Function4GeneCode_FuncMapSqlDsTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_ParentFeatureName:
      return Function4GeneCode_FuncMapParentFeatureName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_FeatureName:
      return Function4GeneCode_FuncMapFeatureName(objFunction4GeneCodeEx);
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
export function Function4GeneCode_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunction4GeneCodeENEx.con_CodeTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsFunction4GeneCodeENEx.con_FuncName4Code:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsFunction4GeneCodeENEx.con_FuncTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsFunction4GeneCodeENEx.con_FuncGCTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          if (a.funcGCTypeName === null && b.funcGCTypeName === null) return 0;
          if (a.funcGCTypeName === null) return -1;
          if (b.funcGCTypeName === null) return 1;
          return a.funcGCTypeName.localeCompare(b.funcGCTypeName);
        };
      case clsFunction4GeneCodeENEx.con_ProgLangTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsFunction4GeneCodeENEx.con_SqlDsTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsFunction4GeneCodeENEx.con_ParentFeatureName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          if (a.parentFeatureName === null && b.parentFeatureName === null) return 0;
          if (a.parentFeatureName === null) return -1;
          if (b.parentFeatureName === null) return 1;
          return a.parentFeatureName.localeCompare(b.parentFeatureName);
        };
      case clsFunction4GeneCodeENEx.con_FeatureName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      default:
        return Function4GeneCode_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFunction4GeneCodeENEx.con_CodeTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsFunction4GeneCodeENEx.con_FuncName4Code:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsFunction4GeneCodeENEx.con_FuncTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsFunction4GeneCodeENEx.con_FuncGCTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          if (a.funcGCTypeName === null && b.funcGCTypeName === null) return 0;
          if (a.funcGCTypeName === null) return 1;
          if (b.funcGCTypeName === null) return -1;
          return b.funcGCTypeName.localeCompare(a.funcGCTypeName);
        };
      case clsFunction4GeneCodeENEx.con_ProgLangTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsFunction4GeneCodeENEx.con_SqlDsTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsFunction4GeneCodeENEx.con_ParentFeatureName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          if (a.parentFeatureName === null && b.parentFeatureName === null) return 0;
          if (a.parentFeatureName === null) return 1;
          if (b.parentFeatureName === null) return -1;
          return b.parentFeatureName.localeCompare(a.parentFeatureName);
        };
      case clsFunction4GeneCodeENEx.con_FeatureName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      default:
        return Function4GeneCode_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCode_FuncMapCodeTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.codeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objFunction4GeneCode.funcCodeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objFunction4GeneCode.codeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001309)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCode_FuncMapFuncName4Code(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapFuncName4Code.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.funcName4Code) == true) {
      const vFunction4CodeSimFuncId4Code = objFunction4GeneCode.funcId4Code;
      const vFunction4CodeSimFuncName4Code = await vFunction4Code_Sim_func(
        clsvFunction4Code_SimEN.con_FuncId4Code,
        clsvFunction4Code_SimEN.con_FuncName4Code,
        vFunction4CodeSimFuncId4Code,
      );
      objFunction4GeneCode.funcName4Code = vFunction4CodeSimFuncName4Code;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001360)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCode_FuncMapFuncTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapFuncTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.funcTypeName) == true) {
      const FunctionTypeFuncTypeId = objFunction4GeneCode.funcTypeId;
      const FunctionTypeFuncTypeName = await FunctionType_func(
        clsFunctionTypeEN.con_FuncTypeId,
        clsFunctionTypeEN.con_FuncTypeName,
        FunctionTypeFuncTypeId,
      );
      objFunction4GeneCode.funcTypeName = FunctionTypeFuncTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001353)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCode_FuncMapFuncGCTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapFuncGCTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.funcGCTypeName) == true) {
      const FuncGCTypeFuncGCTypeId = objFunction4GeneCode.funcGCTypeId;
      const FuncGCTypeFuncGCTypeName = await FuncGCType_func(
        clsFuncGCTypeEN.con_FuncGCTypeId,
        clsFuncGCTypeEN.con_FuncGCTypeName,
        FuncGCTypeFuncGCTypeId,
      );
      objFunction4GeneCode.funcGCTypeName = FuncGCTypeFuncGCTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001517)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCode_FuncMapProgLangTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.progLangTypeName) == true) {
      const ProgLangTypeProgLangTypeId = objFunction4GeneCode.progLangTypeId;
      const ProgLangTypeProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangTypeProgLangTypeId,
      );
      objFunction4GeneCode.progLangTypeName = ProgLangTypeProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCode_FuncMapSqlDsTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapSqlDsTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.sqlDsTypeName) == true) {
      const SQLDSTypeSqlDsTypeId = objFunction4GeneCode.sqlDsTypeId;
      const SQLDSTypeSqlDsTypeName = await SQLDSType_func(
        clsSQLDSTypeEN.con_SqlDsTypeId,
        clsSQLDSTypeEN.con_SqlDsTypeName,
        SQLDSTypeSqlDsTypeId,
      );
      objFunction4GeneCode.sqlDsTypeName = SQLDSTypeSqlDsTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001323)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCode_FuncMapParentFeatureName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapParentFeatureName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.parentFeatureName) == true) {
      const vPrjFeatureSimFeatureId = objFunction4GeneCode.featureId;
      const vPrjFeatureSimParentFeatureName = await vPrjFeatureSim_func(
        clsvPrjFeatureSimEN.con_FeatureId,
        clsvPrjFeatureSimEN.con_ParentFeatureName,
        vPrjFeatureSimFeatureId,
      );
      objFunction4GeneCode.parentFeatureName = vPrjFeatureSimParentFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001383)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCode_FuncMapFeatureName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCode_FuncMapFeatureName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.featureName) == true) {
      const vPrjFeatureSimFeatureId = objFunction4GeneCode.featureId;
      const vPrjFeatureSimFeatureName = await vPrjFeatureSim_func(
        clsvPrjFeatureSimEN.con_FeatureId,
        clsvPrjFeatureSimEN.con_FeatureName,
        vPrjFeatureSimFeatureId,
      );
      objFunction4GeneCode.featureName = vPrjFeatureSimFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001341)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_DelFunction4GeneCodesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFunction4GeneCodesByCondAsync';
  const strAction = 'DelFunction4GeneCodesByCond';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param objFunction4GeneCodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Function4GeneCode_AddNewRecordAsync(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFunction4GeneCodeEN);
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4GeneCodeEN, config);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param objFunction4GeneCodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Function4GeneCode_AddNewRecordWithMaxIdAsync(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4GeneCodeEN, config);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_AddNewObjSave(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    Function4GeneCode_CheckPropertyNew(objFunction4GeneCodeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${function4GeneCode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await Function4GeneCode_CheckUniCond4Add(objFunction4GeneCodeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await Function4GeneCode_AddNewRecordWithMaxIdAsync(objFunction4GeneCodeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //Function4GeneCode_ReFreshCache();
    } else {
      const strInfo = `添加[函数4GeneCode(Function4GeneCode)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${function4GeneCode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function Function4GeneCode_CheckUniCond4Add(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<boolean> {
  const strUniquenessCondition = Function4GeneCode_GetUniCondStr(objFunction4GeneCodeEN);
  const bolIsExistCondition = await Function4GeneCode_IsExistRecordAsync(strUniquenessCondition);
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
export async function Function4GeneCode_CheckUniCond4Update(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<boolean> {
  const strUniquenessCondition = Function4GeneCode_GetUniCondStr4Update(objFunction4GeneCodeEN);
  const bolIsExistCondition = await Function4GeneCode_IsExistRecordAsync(strUniquenessCondition);
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
export async function Function4GeneCode_UpdateObjSave(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFunction4GeneCodeEN.sfUpdFldSetStr = objFunction4GeneCodeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFunction4GeneCodeEN.funcId4GC == '' || objFunction4GeneCodeEN.funcId4GC == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    Function4GeneCode_CheckProperty4Update(objFunction4GeneCodeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${function4GeneCode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await Function4GeneCode_CheckUniCond4Update(objFunction4GeneCodeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await Function4GeneCode_UpdateRecordAsync(objFunction4GeneCodeEN);
    if (returnBool == true) {
      //Function4GeneCode_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${function4GeneCode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFunction4GeneCodeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Function4GeneCode_AddNewRecordWithReturnKeyAsync(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4GeneCodeEN, config);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param objFunction4GeneCodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Function4GeneCode_UpdateRecordAsync(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFunction4GeneCodeEN.sfUpdFldSetStr === undefined ||
    objFunction4GeneCodeEN.sfUpdFldSetStr === null ||
    objFunction4GeneCodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunction4GeneCodeEN.funcId4GC,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4GeneCodeEN, config);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param objFunction4GeneCodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Function4GeneCode_EditRecordExAsync(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFunction4GeneCodeEN.sfUpdFldSetStr === undefined ||
    objFunction4GeneCodeEN.sfUpdFldSetStr === null ||
    objFunction4GeneCodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunction4GeneCodeEN.funcId4GC,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4GeneCodeEN, config);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param objFunction4GeneCodeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Function4GeneCode_UpdateWithConditionAsync(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFunction4GeneCodeEN.sfUpdFldSetStr === undefined ||
    objFunction4GeneCodeEN.sfUpdFldSetStr === null ||
    objFunction4GeneCodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunction4GeneCodeEN.funcId4GC,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);
  objFunction4GeneCodeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunction4GeneCodeEN, config);
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
 * @param strFuncId4GC:关键字
 * @returns 是否存在?存在返回True
 **/
export async function Function4GeneCode_IsExistAsync(strFuncId4GC: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4GC,
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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export async function Function4GeneCode_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(function4GeneCode_Controller, strAction);

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
        function4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        function4GeneCode_ConstructorName,
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
export function Function4GeneCode_GetWebApiUrl(strController: string, strAction: string): string {
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

 * @param strFuncCodeTypeId:
*/
export async function Function4GeneCode_BindDdl_FuncId4GCByFuncCodeTypeIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strFuncCodeTypeId: string,
) {
  if (IsNullOrEmpty(strFuncCodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncCodeTypeId]不能为空！(In clsFunction4GeneCodeWApi.BindDdl_FuncId4GCByFuncCodeTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncCodeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFuncCodeTypeId]的长度:[{0}]不正确！(clsFunction4GeneCodeWApi.BindDdl_FuncId4GCByFuncCodeTypeIdInDiv)',
      strFuncCodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_FuncId4GCByFuncCodeTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncId4GCByFuncCodeTypeIdInDivCache");
  const strCondition = `funcCodeTypeId = '${strFuncCodeTypeId}'`;
  const arrObjLstSel = await Function4GeneCode_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFunction4GeneCodeEN.con_FuncId4GC,
    clsFunction4GeneCodeEN.con_FuncName,
    '函数4GeneCode...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strFuncCodeTypeId:
*/
export async function Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId(
  strFuncCodeTypeId: string,
) {
  if (IsNullOrEmpty(strFuncCodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncCodeTypeId]不能为空！(In clsFunction4GeneCodeWApi.BindDdl_FuncId4GCByFuncCodeTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncCodeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFuncCodeTypeId]的长度:[{0}]不正确！(clsFunction4GeneCodeWApi.BindDdl_FuncId4GCByFuncCodeTypeIdInDiv)',
      strFuncCodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncId4GCByFuncCodeTypeIdInDivCache");
  const arrFunction4GeneCode = new Array<clsFunction4GeneCodeEN>();
  const strCondition = `funcCodeTypeId = '${strFuncCodeTypeId}'`;
  const arrObjLstSel = await Function4GeneCode_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return null;
  const obj0 = new clsFunction4GeneCodeEN();
  obj0.funcId4GC = '0';
  obj0.funcName = '选函数4GeneCode...';
  arrFunction4GeneCode.push(obj0);
  arrObjLstSel.forEach((x) => arrFunction4GeneCode.push(x));
  return arrFunction4GeneCode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Function4GeneCode_CheckPropertyNew(
  pobjFunction4GeneCodeEN: clsFunction4GeneCodeEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[函数名]不能为空(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.progLangTypeId) === true ||
    pobjFunction4GeneCodeEN.progLangTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[编程语言类型Id]不能为空(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.sqlDsTypeId) === true ||
    pobjFunction4GeneCodeEN.sqlDsTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[数据源类型Id]不能为空(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcGCTypeId) === true ||
    pobjFunction4GeneCodeEN.funcGCTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数生成代码类型Id]不能为空(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFunction4GeneCodeEN.orderNum ||
    (pobjFunction4GeneCodeEN.orderNum != null && pobjFunction4GeneCodeEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcId4GC) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcId4GC) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数ID(funcId4GC)]的长度不能超过10(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcId4GC}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数名(funcName)]的长度不能超过100(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcName}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcId4Code) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数Id4Code(funcId4Code)]的长度不能超过8(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcId4Code}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName4GC) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcName4GC) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数名4生成代码(funcName4GC)]的长度不能超过50(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcName4GC}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCHName4GC) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcCHName4GC) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数中文名4生成代码(funcCHName4GC)]的长度不能超过50(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcCHName4GC}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.featureId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能Id(featureId)]的长度不能超过4(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.featureId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.progLangTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.progLangTypeId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCodeTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcCodeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数代码类型Id(funcCodeTypeId)]的长度不能超过4(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcCodeTypeId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.sqlDsTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.sqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.sqlDsTypeId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcGCTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcGCTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数生成代码类型Id(funcGCTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcGCTypeId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.prjId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.prjId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.returnTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.returnTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[返回类型ID(returnTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.returnTypeId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数类型Id(funcTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcTypeId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.functionSignature) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.functionSignature) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数签名(functionSignature)]的长度不能超过500(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.functionSignature}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.userId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.userId}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.primaryTypeIds) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.primaryTypeIds) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[主键类型s(primaryTypeIds)]的长度不能超过50(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.primaryTypeIds}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.codeText) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.codeText) > 8000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码文本(codeText)]的长度不能超过8000(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.codeText}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.updDate) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.updDate}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.updUser) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.updUser}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.memo) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.memo}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.parsedWords) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.parsedWords) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[分析的词(parsedWords)]的长度不能超过500(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.parsedWords}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.parsedWordsExcluded) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.parsedWordsExcluded) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[剔除后的词组(parsedWordsExcluded)]的长度不能超过500(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.parsedWordsExcluded}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.wordVector) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.wordVector) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[词向量(wordVector)]的长度不能超过500(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.wordVector}(clsFunction4GeneCodeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcId4GC) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcId4GC &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcId4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数ID(funcId4GC)]的值:[${pobjFunction4GeneCodeEN.funcId4GC}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcName &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数名(funcName)]的值:[${pobjFunction4GeneCodeEN.funcName}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcId4Code) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcId4Code &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数Id4Code(funcId4Code)]的值:[${pobjFunction4GeneCodeEN.funcId4Code}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName4GC) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcName4GC &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcName4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数名4生成代码(funcName4GC)]的值:[${pobjFunction4GeneCodeEN.funcName4GC}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCHName4GC) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcCHName4GC &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcCHName4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数中文名4生成代码(funcCHName4GC)]的值:[${pobjFunction4GeneCodeEN.funcCHName4GC}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.featureId) == false &&
    undefined !== pobjFunction4GeneCodeEN.featureId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能Id(featureId)]的值:[${pobjFunction4GeneCodeEN.featureId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.progLangTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.progLangTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjFunction4GeneCodeEN.progLangTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCodeTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcCodeTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcCodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数代码类型Id(funcCodeTypeId)]的值:[${pobjFunction4GeneCodeEN.funcCodeTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.sqlDsTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.sqlDsTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源类型Id(sqlDsTypeId)]的值:[${pobjFunction4GeneCodeEN.sqlDsTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcGCTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcGCTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcGCTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数生成代码类型Id(funcGCTypeId)]的值:[${pobjFunction4GeneCodeEN.funcGCTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.prjId) == false &&
    undefined !== pobjFunction4GeneCodeEN.prjId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjFunction4GeneCodeEN.prjId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.returnTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.returnTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.returnTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[返回类型ID(returnTypeId)]的值:[${pobjFunction4GeneCodeEN.returnTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数类型Id(funcTypeId)]的值:[${pobjFunction4GeneCodeEN.funcTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.isTemplate &&
    undefined !== pobjFunction4GeneCodeEN.isTemplate &&
    tzDataType.isBoolean(pobjFunction4GeneCodeEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否模板(isTemplate)]的值:[${pobjFunction4GeneCodeEN.isTemplate}], 非法,应该为布尔型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.functionSignature) == false &&
    undefined !== pobjFunction4GeneCodeEN.functionSignature &&
    tzDataType.isString(pobjFunction4GeneCodeEN.functionSignature) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数签名(functionSignature)]的值:[${pobjFunction4GeneCodeEN.functionSignature}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCode) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcCode &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数代码(funcCode)]的值:[${pobjFunction4GeneCodeEN.funcCode}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.userId) == false &&
    undefined !== pobjFunction4GeneCodeEN.userId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户Id(userId)]的值:[${pobjFunction4GeneCodeEN.userId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.orderNum &&
    undefined !== pobjFunction4GeneCodeEN.orderNum &&
    tzDataType.isNumber(pobjFunction4GeneCodeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjFunction4GeneCodeEN.orderNum}], 非法,应该为数值型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.inUse &&
    undefined !== pobjFunction4GeneCodeEN.inUse &&
    tzDataType.isBoolean(pobjFunction4GeneCodeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjFunction4GeneCodeEN.inUse}], 非法,应该为布尔型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.primaryTypeIds) == false &&
    undefined !== pobjFunction4GeneCodeEN.primaryTypeIds &&
    tzDataType.isString(pobjFunction4GeneCodeEN.primaryTypeIds) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[主键类型s(primaryTypeIds)]的值:[${pobjFunction4GeneCodeEN.primaryTypeIds}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.codeText) == false &&
    undefined !== pobjFunction4GeneCodeEN.codeText &&
    tzDataType.isString(pobjFunction4GeneCodeEN.codeText) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码文本(codeText)]的值:[${pobjFunction4GeneCodeEN.codeText}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.usedTimes &&
    undefined !== pobjFunction4GeneCodeEN.usedTimes &&
    tzDataType.isNumber(pobjFunction4GeneCodeEN.usedTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用次数(usedTimes)]的值:[${pobjFunction4GeneCodeEN.usedTimes}], 非法,应该为数值型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.updDate) == false &&
    undefined !== pobjFunction4GeneCodeEN.updDate &&
    tzDataType.isString(pobjFunction4GeneCodeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFunction4GeneCodeEN.updDate}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.updUser) == false &&
    undefined !== pobjFunction4GeneCodeEN.updUser &&
    tzDataType.isString(pobjFunction4GeneCodeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFunction4GeneCodeEN.updUser}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.memo) == false &&
    undefined !== pobjFunction4GeneCodeEN.memo &&
    tzDataType.isString(pobjFunction4GeneCodeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFunction4GeneCodeEN.memo}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.parsedWords) == false &&
    undefined !== pobjFunction4GeneCodeEN.parsedWords &&
    tzDataType.isString(pobjFunction4GeneCodeEN.parsedWords) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[分析的词(parsedWords)]的值:[${pobjFunction4GeneCodeEN.parsedWords}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.parsedWordsExcluded) == false &&
    undefined !== pobjFunction4GeneCodeEN.parsedWordsExcluded &&
    tzDataType.isString(pobjFunction4GeneCodeEN.parsedWordsExcluded) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[剔除后的词组(parsedWordsExcluded)]的值:[${pobjFunction4GeneCodeEN.parsedWordsExcluded}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.wordVector) == false &&
    undefined !== pobjFunction4GeneCodeEN.wordVector &&
    tzDataType.isString(pobjFunction4GeneCodeEN.wordVector) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[词向量(wordVector)]的值:[${pobjFunction4GeneCodeEN.wordVector}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.isFuncTemplate &&
    undefined !== pobjFunction4GeneCodeEN.isFuncTemplate &&
    tzDataType.isBoolean(pobjFunction4GeneCodeEN.isFuncTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否函数模板(isFuncTemplate)]的值:[${pobjFunction4GeneCodeEN.isFuncTemplate}], 非法,应该为布尔型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCodeTypeId) == false &&
    pobjFunction4GeneCodeEN.funcCodeTypeId != '[nuull]' &&
    GetStrLen(pobjFunction4GeneCodeEN.funcCodeTypeId) != 4
  ) {
    throw '(errid:Watl000415)字段[函数代码类型Id]作为外键字段,长度应该为4(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.prjId) == false &&
    pobjFunction4GeneCodeEN.prjId != '[nuull]' &&
    GetStrLen(pobjFunction4GeneCodeEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.returnTypeId) == false &&
    pobjFunction4GeneCodeEN.returnTypeId != '[nuull]' &&
    GetStrLen(pobjFunction4GeneCodeEN.returnTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[返回类型ID]作为外键字段,长度应该为2(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcTypeId) == false &&
    pobjFunction4GeneCodeEN.funcTypeId != '[nuull]' &&
    GetStrLen(pobjFunction4GeneCodeEN.funcTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[函数类型Id]作为外键字段,长度应该为2(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Function4GeneCode_CheckProperty4Update(
  pobjFunction4GeneCodeEN: clsFunction4GeneCodeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcId4GC) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcId4GC) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数ID(funcId4GC)]的长度不能超过10(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcId4GC}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数名(funcName)]的长度不能超过100(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcName}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcId4Code) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcId4Code) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数Id4Code(funcId4Code)]的长度不能超过8(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcId4Code}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName4GC) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcName4GC) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数名4生成代码(funcName4GC)]的长度不能超过50(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcName4GC}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCHName4GC) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcCHName4GC) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数中文名4生成代码(funcCHName4GC)]的长度不能超过50(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcCHName4GC}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.featureId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能Id(featureId)]的长度不能超过4(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.featureId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.progLangTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.progLangTypeId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCodeTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcCodeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数代码类型Id(funcCodeTypeId)]的长度不能超过4(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcCodeTypeId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.sqlDsTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.sqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.sqlDsTypeId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcGCTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcGCTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数生成代码类型Id(funcGCTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcGCTypeId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.prjId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.prjId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.returnTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.returnTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[返回类型ID(returnTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.returnTypeId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcTypeId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.funcTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数类型Id(funcTypeId)]的长度不能超过2(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.funcTypeId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.functionSignature) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.functionSignature) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数签名(functionSignature)]的长度不能超过500(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.functionSignature}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.userId) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.userId}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.primaryTypeIds) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.primaryTypeIds) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[主键类型s(primaryTypeIds)]的长度不能超过50(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.primaryTypeIds}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.codeText) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.codeText) > 8000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码文本(codeText)]的长度不能超过8000(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.codeText}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.updDate) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.updDate}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.updUser) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.updUser}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.memo) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.memo}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.parsedWords) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.parsedWords) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[分析的词(parsedWords)]的长度不能超过500(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.parsedWords}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.parsedWordsExcluded) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.parsedWordsExcluded) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[剔除后的词组(parsedWordsExcluded)]的长度不能超过500(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.parsedWordsExcluded}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.wordVector) == false &&
    GetStrLen(pobjFunction4GeneCodeEN.wordVector) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[词向量(wordVector)]的长度不能超过500(In 函数4GeneCode(Function4GeneCode))!值:${pobjFunction4GeneCodeEN.wordVector}(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcId4GC) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcId4GC &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcId4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数ID(funcId4GC)]的值:[${pobjFunction4GeneCodeEN.funcId4GC}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcName &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数名(funcName)]的值:[${pobjFunction4GeneCodeEN.funcName}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcId4Code) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcId4Code &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcId4Code) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数Id4Code(funcId4Code)]的值:[${pobjFunction4GeneCodeEN.funcId4Code}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcName4GC) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcName4GC &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcName4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数名4生成代码(funcName4GC)]的值:[${pobjFunction4GeneCodeEN.funcName4GC}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCHName4GC) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcCHName4GC &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcCHName4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数中文名4生成代码(funcCHName4GC)]的值:[${pobjFunction4GeneCodeEN.funcCHName4GC}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.featureId) == false &&
    undefined !== pobjFunction4GeneCodeEN.featureId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能Id(featureId)]的值:[${pobjFunction4GeneCodeEN.featureId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.progLangTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.progLangTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjFunction4GeneCodeEN.progLangTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCodeTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcCodeTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcCodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数代码类型Id(funcCodeTypeId)]的值:[${pobjFunction4GeneCodeEN.funcCodeTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.sqlDsTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.sqlDsTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源类型Id(sqlDsTypeId)]的值:[${pobjFunction4GeneCodeEN.sqlDsTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcGCTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcGCTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcGCTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数生成代码类型Id(funcGCTypeId)]的值:[${pobjFunction4GeneCodeEN.funcGCTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.prjId) == false &&
    undefined !== pobjFunction4GeneCodeEN.prjId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjFunction4GeneCodeEN.prjId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.returnTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.returnTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.returnTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[返回类型ID(returnTypeId)]的值:[${pobjFunction4GeneCodeEN.returnTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcTypeId) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcTypeId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数类型Id(funcTypeId)]的值:[${pobjFunction4GeneCodeEN.funcTypeId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.isTemplate &&
    undefined !== pobjFunction4GeneCodeEN.isTemplate &&
    tzDataType.isBoolean(pobjFunction4GeneCodeEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否模板(isTemplate)]的值:[${pobjFunction4GeneCodeEN.isTemplate}], 非法,应该为布尔型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.functionSignature) == false &&
    undefined !== pobjFunction4GeneCodeEN.functionSignature &&
    tzDataType.isString(pobjFunction4GeneCodeEN.functionSignature) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数签名(functionSignature)]的值:[${pobjFunction4GeneCodeEN.functionSignature}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCode) == false &&
    undefined !== pobjFunction4GeneCodeEN.funcCode &&
    tzDataType.isString(pobjFunction4GeneCodeEN.funcCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数代码(funcCode)]的值:[${pobjFunction4GeneCodeEN.funcCode}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.userId) == false &&
    undefined !== pobjFunction4GeneCodeEN.userId &&
    tzDataType.isString(pobjFunction4GeneCodeEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户Id(userId)]的值:[${pobjFunction4GeneCodeEN.userId}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.orderNum &&
    undefined !== pobjFunction4GeneCodeEN.orderNum &&
    tzDataType.isNumber(pobjFunction4GeneCodeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjFunction4GeneCodeEN.orderNum}], 非法,应该为数值型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.inUse &&
    undefined !== pobjFunction4GeneCodeEN.inUse &&
    tzDataType.isBoolean(pobjFunction4GeneCodeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjFunction4GeneCodeEN.inUse}], 非法,应该为布尔型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.primaryTypeIds) == false &&
    undefined !== pobjFunction4GeneCodeEN.primaryTypeIds &&
    tzDataType.isString(pobjFunction4GeneCodeEN.primaryTypeIds) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[主键类型s(primaryTypeIds)]的值:[${pobjFunction4GeneCodeEN.primaryTypeIds}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.codeText) == false &&
    undefined !== pobjFunction4GeneCodeEN.codeText &&
    tzDataType.isString(pobjFunction4GeneCodeEN.codeText) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码文本(codeText)]的值:[${pobjFunction4GeneCodeEN.codeText}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.usedTimes &&
    undefined !== pobjFunction4GeneCodeEN.usedTimes &&
    tzDataType.isNumber(pobjFunction4GeneCodeEN.usedTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用次数(usedTimes)]的值:[${pobjFunction4GeneCodeEN.usedTimes}], 非法,应该为数值型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.updDate) == false &&
    undefined !== pobjFunction4GeneCodeEN.updDate &&
    tzDataType.isString(pobjFunction4GeneCodeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFunction4GeneCodeEN.updDate}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.updUser) == false &&
    undefined !== pobjFunction4GeneCodeEN.updUser &&
    tzDataType.isString(pobjFunction4GeneCodeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFunction4GeneCodeEN.updUser}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.memo) == false &&
    undefined !== pobjFunction4GeneCodeEN.memo &&
    tzDataType.isString(pobjFunction4GeneCodeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFunction4GeneCodeEN.memo}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.parsedWords) == false &&
    undefined !== pobjFunction4GeneCodeEN.parsedWords &&
    tzDataType.isString(pobjFunction4GeneCodeEN.parsedWords) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[分析的词(parsedWords)]的值:[${pobjFunction4GeneCodeEN.parsedWords}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.parsedWordsExcluded) == false &&
    undefined !== pobjFunction4GeneCodeEN.parsedWordsExcluded &&
    tzDataType.isString(pobjFunction4GeneCodeEN.parsedWordsExcluded) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[剔除后的词组(parsedWordsExcluded)]的值:[${pobjFunction4GeneCodeEN.parsedWordsExcluded}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.wordVector) == false &&
    undefined !== pobjFunction4GeneCodeEN.wordVector &&
    tzDataType.isString(pobjFunction4GeneCodeEN.wordVector) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[词向量(wordVector)]的值:[${pobjFunction4GeneCodeEN.wordVector}], 非法,应该为字符型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFunction4GeneCodeEN.isFuncTemplate &&
    undefined !== pobjFunction4GeneCodeEN.isFuncTemplate &&
    tzDataType.isBoolean(pobjFunction4GeneCodeEN.isFuncTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否函数模板(isFuncTemplate)]的值:[${pobjFunction4GeneCodeEN.isFuncTemplate}], 非法,应该为布尔型(In 函数4GeneCode(Function4GeneCode))!(clsFunction4GeneCodeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcCodeTypeId) == false &&
    pobjFunction4GeneCodeEN.funcCodeTypeId != '[nuull]' &&
    GetStrLen(pobjFunction4GeneCodeEN.funcCodeTypeId) != 4
  ) {
    throw '(errid:Watl000418)字段[函数代码类型Id]作为外键字段,长度应该为4(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.prjId) == false &&
    pobjFunction4GeneCodeEN.prjId != '[nuull]' &&
    GetStrLen(pobjFunction4GeneCodeEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.returnTypeId) == false &&
    pobjFunction4GeneCodeEN.returnTypeId != '[nuull]' &&
    GetStrLen(pobjFunction4GeneCodeEN.returnTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[返回类型ID]作为外键字段,长度应该为2(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFunction4GeneCodeEN.funcTypeId) == false &&
    pobjFunction4GeneCodeEN.funcTypeId != '[nuull]' &&
    GetStrLen(pobjFunction4GeneCodeEN.funcTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[函数类型Id]作为外键字段,长度应该为2(In 函数4GeneCode)!(clsFunction4GeneCodeBL:CheckPropertyNew)';
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
export function Function4GeneCode_GetJSONStrByObj(
  pobjFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): string {
  pobjFunction4GeneCodeEN.sfUpdFldSetStr = pobjFunction4GeneCodeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFunction4GeneCodeEN);
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
export function Function4GeneCode_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFunction4GeneCodeEN> {
  let arrFunction4GeneCodeObjLst = new Array<clsFunction4GeneCodeEN>();
  if (strJSON === '') {
    return arrFunction4GeneCodeObjLst;
  }
  try {
    arrFunction4GeneCodeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFunction4GeneCodeObjLst;
  }
  return arrFunction4GeneCodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFunction4GeneCodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Function4GeneCode_GetObjLstByJSONObjLst(
  arrFunction4GeneCodeObjLstS: Array<clsFunction4GeneCodeEN>,
): Array<clsFunction4GeneCodeEN> {
  const arrFunction4GeneCodeObjLst = new Array<clsFunction4GeneCodeEN>();
  for (const objInFor of arrFunction4GeneCodeObjLstS) {
    const obj1 = Function4GeneCode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFunction4GeneCodeObjLst.push(obj1);
  }
  return arrFunction4GeneCodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Function4GeneCode_GetObjByJSONStr(strJSON: string): clsFunction4GeneCodeEN {
  let pobjFunction4GeneCodeEN = new clsFunction4GeneCodeEN();
  if (strJSON === '') {
    return pobjFunction4GeneCodeEN;
  }
  try {
    pobjFunction4GeneCodeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFunction4GeneCodeEN;
  }
  return pobjFunction4GeneCodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Function4GeneCode_GetCombineCondition(
  objFunction4GeneCodeCond: clsFunction4GeneCodeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FuncId4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FuncId4GC,
      objFunction4GeneCodeCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FuncName,
      objFunction4GeneCodeCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FuncId4Code,
      objFunction4GeneCodeCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FuncName4GC,
    ) == true
  ) {
    const strComparisonOpFuncName4GC: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FuncName4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FuncName4GC,
      objFunction4GeneCodeCond.funcName4GC,
      strComparisonOpFuncName4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FuncCHName4GC,
    ) == true
  ) {
    const strComparisonOpFuncCHName4GC: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FuncCHName4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FuncCHName4GC,
      objFunction4GeneCodeCond.funcCHName4GC,
      strComparisonOpFuncCHName4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FeatureId,
      objFunction4GeneCodeCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_ProgLangTypeId,
      objFunction4GeneCodeCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FuncCodeTypeId,
    ) == true
  ) {
    const strComparisonOpFuncCodeTypeId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FuncCodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FuncCodeTypeId,
      objFunction4GeneCodeCond.funcCodeTypeId,
      strComparisonOpFuncCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_SqlDsTypeId,
      objFunction4GeneCodeCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FuncGCTypeId,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FuncGCTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FuncGCTypeId,
      objFunction4GeneCodeCond.funcGCTypeId,
      strComparisonOpFuncGCTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_PrjId,
      objFunction4GeneCodeCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_ReturnTypeId,
      objFunction4GeneCodeCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FuncTypeId,
      objFunction4GeneCodeCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_IsTemplate,
    ) == true
  ) {
    if (objFunction4GeneCodeCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_FunctionSignature,
      objFunction4GeneCodeCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_UserId,
      objFunction4GeneCodeCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFunction4GeneCodeEN.con_OrderNum,
      objFunction4GeneCodeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_InUse,
    ) == true
  ) {
    if (objFunction4GeneCodeCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_PrimaryTypeIds,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeIds: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_PrimaryTypeIds];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_PrimaryTypeIds,
      objFunction4GeneCodeCond.primaryTypeIds,
      strComparisonOpPrimaryTypeIds,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_CodeText,
    ) == true
  ) {
    const strComparisonOpCodeText: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_CodeText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_CodeText,
      objFunction4GeneCodeCond.codeText,
      strComparisonOpCodeText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_UsedTimes,
    ) == true
  ) {
    const strComparisonOpUsedTimes: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_UsedTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFunction4GeneCodeEN.con_UsedTimes,
      objFunction4GeneCodeCond.usedTimes,
      strComparisonOpUsedTimes,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_UpdDate,
      objFunction4GeneCodeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_UpdUser,
      objFunction4GeneCodeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_Memo,
      objFunction4GeneCodeCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_ParsedWords,
    ) == true
  ) {
    const strComparisonOpParsedWords: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_ParsedWords];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_ParsedWords,
      objFunction4GeneCodeCond.parsedWords,
      strComparisonOpParsedWords,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_ParsedWordsExcluded,
    ) == true
  ) {
    const strComparisonOpParsedWordsExcluded: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_ParsedWordsExcluded];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_ParsedWordsExcluded,
      objFunction4GeneCodeCond.parsedWordsExcluded,
      strComparisonOpParsedWordsExcluded,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_WordVector,
    ) == true
  ) {
    const strComparisonOpWordVector: string =
      objFunction4GeneCodeCond.dicFldComparisonOp[clsFunction4GeneCodeEN.con_WordVector];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunction4GeneCodeEN.con_WordVector,
      objFunction4GeneCodeCond.wordVector,
      strComparisonOpWordVector,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunction4GeneCodeCond.dicFldComparisonOp,
      clsFunction4GeneCodeEN.con_IsFuncTemplate,
    ) == true
  ) {
    if (objFunction4GeneCodeCond.isFuncTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_IsFuncTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_IsFuncTemplate);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Function4GeneCode(函数4GeneCode),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFuncName: 函数名(要求唯一的字段)
 * @param strFuncCodeTypeId: 函数代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Function4GeneCode_GetUniCondStr(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncName = '{0}'", objFunction4GeneCodeEN.funcName);
  strWhereCond += Format(" and FuncCodeTypeId = '{0}'", objFunction4GeneCodeEN.funcCodeTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Function4GeneCode(函数4GeneCode),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFuncName: 函数名(要求唯一的字段)
 * @param strFuncCodeTypeId: 函数代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Function4GeneCode_GetUniCondStr4Update(
  objFunction4GeneCodeEN: clsFunction4GeneCodeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncId4GC <> '{0}'", objFunction4GeneCodeEN.funcId4GC);
  strWhereCond += Format(" and FuncName = '{0}'", objFunction4GeneCodeEN.funcName);
  strWhereCond += Format(" and FuncCodeTypeId = '{0}'", objFunction4GeneCodeEN.funcCodeTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFunction4GeneCodeENS:源对象
 * @param objFunction4GeneCodeENT:目标对象
 */
export function Function4GeneCode_GetObjFromJsonObj(
  objFunction4GeneCodeENS: clsFunction4GeneCodeEN,
): clsFunction4GeneCodeEN {
  const objFunction4GeneCodeENT: clsFunction4GeneCodeEN = new clsFunction4GeneCodeEN();
  ObjectAssign(objFunction4GeneCodeENT, objFunction4GeneCodeENS);
  return objFunction4GeneCodeENT;
}
