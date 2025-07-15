/**
 * 类名:clsvFunction4GeneCodeWApi
 * 表名:vFunction4GeneCode(00050315)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:11
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
 * v函数4GeneCode(vFunction4GeneCode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCodeEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFunction4GeneCode_Controller = 'vFunction4GeneCodeApi';
export const vFunction4GeneCode_ConstructorName = 'vFunction4GeneCode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4GC:关键字
 * @returns 对象
 **/
export async function vFunction4GeneCode_GetObjByFuncId4GCAsync(
  strFuncId4GC: string,
): Promise<clsvFunction4GeneCodeEN | null> {
  const strThisFuncName = 'GetObjByFuncId4GCAsync';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunction4GeneCodeWApi.GetObjByFuncId4GCAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunction4GeneCodeWApi.GetObjByFuncId4GCAsync)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4GC';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
      const objvFunction4GeneCode = vFunction4GeneCode_GetObjFromJsonObj(returnObj);
      return objvFunction4GeneCode;
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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFuncId4GCCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByFuncId4GClocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByFuncId4GCCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4GeneCode_SortFunDefa(
  a: clsvFunction4GeneCodeEN,
  b: clsvFunction4GeneCodeEN,
): number {
  return a.funcId4GC.localeCompare(b.funcId4GC);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4GeneCode_SortFunDefa2Fld(
  a: clsvFunction4GeneCodeEN,
  b: clsvFunction4GeneCodeEN,
): number {
  if (a.funcName == b.funcName) return a.funcId4Code.localeCompare(b.funcId4Code);
  else return a.funcName.localeCompare(b.funcName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4GeneCode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunction4GeneCodeEN.con_FuncId4GC:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsvFunction4GeneCodeEN.con_FuncName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsvFunction4GeneCodeEN.con_FuncId4Code:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcId4Code == null) return -1;
          if (b.funcId4Code == null) return 1;
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsvFunction4GeneCodeEN.con_FuncName4Code:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcName4Code == null) return -1;
          if (b.funcName4Code == null) return 1;
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsvFunction4GeneCodeEN.con_FuncCHName4Code:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcCHName4Code == null) return -1;
          if (b.funcCHName4Code == null) return 1;
          return a.funcCHName4Code.localeCompare(b.funcCHName4Code);
        };
      case clsvFunction4GeneCodeEN.con_FunctionSignatureSim:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.functionSignatureSim == null) return -1;
          if (b.functionSignatureSim == null) return 1;
          return a.functionSignatureSim.localeCompare(b.functionSignatureSim);
        };
      case clsvFunction4GeneCodeEN.con_FeatureId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.featureId == null) return -1;
          if (b.featureId == null) return 1;
          return a.featureId.localeCompare(b.featureId);
        };
      case clsvFunction4GeneCodeEN.con_FeatureName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.featureName == null) return -1;
          if (b.featureName == null) return 1;
          return a.featureName.localeCompare(b.featureName);
        };
      case clsvFunction4GeneCodeEN.con_FeatureDescription:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.featureDescription == null) return -1;
          if (b.featureDescription == null) return 1;
          return a.featureDescription.localeCompare(b.featureDescription);
        };
      case clsvFunction4GeneCodeEN.con_FeatureTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.featureTypeName == null) return -1;
          if (b.featureTypeName == null) return 1;
          return a.featureTypeName.localeCompare(b.featureTypeName);
        };
      case clsvFunction4GeneCodeEN.con_ProgLangTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvFunction4GeneCodeEN.con_ProgLangTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsvFunction4GeneCodeEN.con_SqlDsTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsvFunction4GeneCodeEN.con_SqlDsTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.sqlDsTypeName == null) return -1;
          if (b.sqlDsTypeName == null) return 1;
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsvFunction4GeneCodeEN.con_FuncGCTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.funcGCTypeId.localeCompare(b.funcGCTypeId);
        };
      case clsvFunction4GeneCodeEN.con_FuncGCTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcGCTypeName == null) return -1;
          if (b.funcGCTypeName == null) return 1;
          return a.funcGCTypeName.localeCompare(b.funcGCTypeName);
        };
      case clsvFunction4GeneCodeEN.con_FuncGCTypeENName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcGCTypeENName == null) return -1;
          if (b.funcGCTypeENName == null) return 1;
          return a.funcGCTypeENName.localeCompare(b.funcGCTypeENName);
        };
      case clsvFunction4GeneCodeEN.con_PrjId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvFunction4GeneCodeEN.con_ReturnTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsvFunction4GeneCodeEN.con_FuncTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcTypeId == null) return -1;
          if (b.funcTypeId == null) return 1;
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsvFunction4GeneCodeEN.con_FuncTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcTypeName == null) return -1;
          if (b.funcTypeName == null) return 1;
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsvFunction4GeneCodeEN.con_IsTemplate:
        return (a: clsvFunction4GeneCodeEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsvFunction4GeneCodeEN.con_FunctionSignature:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.functionSignature == null) return -1;
          if (b.functionSignature == null) return 1;
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsvFunction4GeneCodeEN.con_FuncCode:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcCode == null) return -1;
          if (b.funcCode == null) return 1;
          return a.funcCode.localeCompare(b.funcCode);
        };
      case clsvFunction4GeneCodeEN.con_UserId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvFunction4GeneCodeEN.con_OrderNum:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvFunction4GeneCodeEN.con_InUse:
        return (a: clsvFunction4GeneCodeEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvFunction4GeneCodeEN.con_CodeText:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.codeText == null) return -1;
          if (b.codeText == null) return 1;
          return a.codeText.localeCompare(b.codeText);
        };
      case clsvFunction4GeneCodeEN.con_UpdDate:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvFunction4GeneCodeEN.con_UpdUser:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvFunction4GeneCodeEN.con_Memo:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvFunction4GeneCodeEN.con_ParsedWords:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.parsedWords == null) return -1;
          if (b.parsedWords == null) return 1;
          return a.parsedWords.localeCompare(b.parsedWords);
        };
      case clsvFunction4GeneCodeEN.con_ParsedWordsExcluded:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.parsedWordsExcluded == null) return -1;
          if (b.parsedWordsExcluded == null) return 1;
          return a.parsedWordsExcluded.localeCompare(b.parsedWordsExcluded);
        };
      case clsvFunction4GeneCodeEN.con_WordVector:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.wordVector == null) return -1;
          if (b.wordVector == null) return 1;
          return a.wordVector.localeCompare(b.wordVector);
        };
      case clsvFunction4GeneCodeEN.con_IsFuncTemplate:
        return (a: clsvFunction4GeneCodeEN) => {
          if (a.isFuncTemplate == true) return 1;
          else return -1;
        };
      case clsvFunction4GeneCodeEN.con_ReturnTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.returnTypeName == null) return -1;
          if (b.returnTypeName == null) return 1;
          return a.returnTypeName.localeCompare(b.returnTypeName);
        };
      case clsvFunction4GeneCodeEN.con_TemplateNum:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.templateNum - b.templateNum;
        };
      case clsvFunction4GeneCodeEN.con_Order4FeatureNum:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return a.order4FeatureNum - b.order4FeatureNum;
        };
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeENName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcCodeTypeENName == null) return -1;
          if (b.funcCodeTypeENName == null) return 1;
          return a.funcCodeTypeENName.localeCompare(b.funcCodeTypeENName);
        };
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcCodeTypeId == null) return -1;
          if (b.funcCodeTypeId == null) return 1;
          return a.funcCodeTypeId.localeCompare(b.funcCodeTypeId);
        };
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.funcCodeTypeName == null) return -1;
          if (b.funcCodeTypeName == null) return 1;
          return a.funcCodeTypeName.localeCompare(b.funcCodeTypeName);
        };
      case clsvFunction4GeneCodeEN.con_ProgLangTypeId4FuncCodeType:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (a.progLangTypeId4FuncCodeType == null) return -1;
          if (b.progLangTypeId4FuncCodeType == null) return 1;
          return a.progLangTypeId4FuncCodeType.localeCompare(b.progLangTypeId4FuncCodeType);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunction4GeneCode]中不存在!(in ${vFunction4GeneCode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFunction4GeneCodeEN.con_FuncId4GC:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsvFunction4GeneCodeEN.con_FuncName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsvFunction4GeneCodeEN.con_FuncId4Code:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcId4Code == null) return -1;
          if (a.funcId4Code == null) return 1;
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsvFunction4GeneCodeEN.con_FuncName4Code:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcName4Code == null) return -1;
          if (a.funcName4Code == null) return 1;
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsvFunction4GeneCodeEN.con_FuncCHName4Code:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcCHName4Code == null) return -1;
          if (a.funcCHName4Code == null) return 1;
          return b.funcCHName4Code.localeCompare(a.funcCHName4Code);
        };
      case clsvFunction4GeneCodeEN.con_FunctionSignatureSim:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.functionSignatureSim == null) return -1;
          if (a.functionSignatureSim == null) return 1;
          return b.functionSignatureSim.localeCompare(a.functionSignatureSim);
        };
      case clsvFunction4GeneCodeEN.con_FeatureId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.featureId == null) return -1;
          if (a.featureId == null) return 1;
          return b.featureId.localeCompare(a.featureId);
        };
      case clsvFunction4GeneCodeEN.con_FeatureName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.featureName == null) return -1;
          if (a.featureName == null) return 1;
          return b.featureName.localeCompare(a.featureName);
        };
      case clsvFunction4GeneCodeEN.con_FeatureDescription:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.featureDescription == null) return -1;
          if (a.featureDescription == null) return 1;
          return b.featureDescription.localeCompare(a.featureDescription);
        };
      case clsvFunction4GeneCodeEN.con_FeatureTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.featureTypeName == null) return -1;
          if (a.featureTypeName == null) return 1;
          return b.featureTypeName.localeCompare(a.featureTypeName);
        };
      case clsvFunction4GeneCodeEN.con_ProgLangTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvFunction4GeneCodeEN.con_ProgLangTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsvFunction4GeneCodeEN.con_SqlDsTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsvFunction4GeneCodeEN.con_SqlDsTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.sqlDsTypeName == null) return -1;
          if (a.sqlDsTypeName == null) return 1;
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsvFunction4GeneCodeEN.con_FuncGCTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.funcGCTypeId.localeCompare(a.funcGCTypeId);
        };
      case clsvFunction4GeneCodeEN.con_FuncGCTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcGCTypeName == null) return -1;
          if (a.funcGCTypeName == null) return 1;
          return b.funcGCTypeName.localeCompare(a.funcGCTypeName);
        };
      case clsvFunction4GeneCodeEN.con_FuncGCTypeENName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcGCTypeENName == null) return -1;
          if (a.funcGCTypeENName == null) return 1;
          return b.funcGCTypeENName.localeCompare(a.funcGCTypeENName);
        };
      case clsvFunction4GeneCodeEN.con_PrjId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvFunction4GeneCodeEN.con_ReturnTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsvFunction4GeneCodeEN.con_FuncTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcTypeId == null) return -1;
          if (a.funcTypeId == null) return 1;
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsvFunction4GeneCodeEN.con_FuncTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcTypeName == null) return -1;
          if (a.funcTypeName == null) return 1;
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsvFunction4GeneCodeEN.con_IsTemplate:
        return (b: clsvFunction4GeneCodeEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsvFunction4GeneCodeEN.con_FunctionSignature:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.functionSignature == null) return -1;
          if (a.functionSignature == null) return 1;
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsvFunction4GeneCodeEN.con_FuncCode:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcCode == null) return -1;
          if (a.funcCode == null) return 1;
          return b.funcCode.localeCompare(a.funcCode);
        };
      case clsvFunction4GeneCodeEN.con_UserId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvFunction4GeneCodeEN.con_OrderNum:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvFunction4GeneCodeEN.con_InUse:
        return (b: clsvFunction4GeneCodeEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvFunction4GeneCodeEN.con_CodeText:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.codeText == null) return -1;
          if (a.codeText == null) return 1;
          return b.codeText.localeCompare(a.codeText);
        };
      case clsvFunction4GeneCodeEN.con_UpdDate:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvFunction4GeneCodeEN.con_UpdUser:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvFunction4GeneCodeEN.con_Memo:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvFunction4GeneCodeEN.con_ParsedWords:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.parsedWords == null) return -1;
          if (a.parsedWords == null) return 1;
          return b.parsedWords.localeCompare(a.parsedWords);
        };
      case clsvFunction4GeneCodeEN.con_ParsedWordsExcluded:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.parsedWordsExcluded == null) return -1;
          if (a.parsedWordsExcluded == null) return 1;
          return b.parsedWordsExcluded.localeCompare(a.parsedWordsExcluded);
        };
      case clsvFunction4GeneCodeEN.con_WordVector:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.wordVector == null) return -1;
          if (a.wordVector == null) return 1;
          return b.wordVector.localeCompare(a.wordVector);
        };
      case clsvFunction4GeneCodeEN.con_IsFuncTemplate:
        return (b: clsvFunction4GeneCodeEN) => {
          if (b.isFuncTemplate == true) return 1;
          else return -1;
        };
      case clsvFunction4GeneCodeEN.con_ReturnTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.returnTypeName == null) return -1;
          if (a.returnTypeName == null) return 1;
          return b.returnTypeName.localeCompare(a.returnTypeName);
        };
      case clsvFunction4GeneCodeEN.con_TemplateNum:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.templateNum - a.templateNum;
        };
      case clsvFunction4GeneCodeEN.con_Order4FeatureNum:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          return b.order4FeatureNum - a.order4FeatureNum;
        };
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeENName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcCodeTypeENName == null) return -1;
          if (a.funcCodeTypeENName == null) return 1;
          return b.funcCodeTypeENName.localeCompare(a.funcCodeTypeENName);
        };
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeId:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcCodeTypeId == null) return -1;
          if (a.funcCodeTypeId == null) return 1;
          return b.funcCodeTypeId.localeCompare(a.funcCodeTypeId);
        };
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeName:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.funcCodeTypeName == null) return -1;
          if (a.funcCodeTypeName == null) return 1;
          return b.funcCodeTypeName.localeCompare(a.funcCodeTypeName);
        };
      case clsvFunction4GeneCodeEN.con_ProgLangTypeId4FuncCodeType:
        return (a: clsvFunction4GeneCodeEN, b: clsvFunction4GeneCodeEN) => {
          if (b.progLangTypeId4FuncCodeType == null) return -1;
          if (a.progLangTypeId4FuncCodeType == null) return 1;
          return b.progLangTypeId4FuncCodeType.localeCompare(a.progLangTypeId4FuncCodeType);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunction4GeneCode]中不存在!(in ${vFunction4GeneCode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFunction4GeneCode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFunction4GeneCodeEN.con_FuncId4GC:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcId4GC === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcName === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncId4Code:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcId4Code === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncName4Code:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcName4Code === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncCHName4Code:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcCHName4Code === value;
      };
    case clsvFunction4GeneCodeEN.con_FunctionSignatureSim:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.functionSignatureSim === value;
      };
    case clsvFunction4GeneCodeEN.con_FeatureId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.featureId === value;
      };
    case clsvFunction4GeneCodeEN.con_FeatureName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.featureName === value;
      };
    case clsvFunction4GeneCodeEN.con_FeatureDescription:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.featureDescription === value;
      };
    case clsvFunction4GeneCodeEN.con_FeatureTypeName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.featureTypeName === value;
      };
    case clsvFunction4GeneCodeEN.con_ProgLangTypeId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.progLangTypeId === value;
      };
    case clsvFunction4GeneCodeEN.con_ProgLangTypeName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.progLangTypeName === value;
      };
    case clsvFunction4GeneCodeEN.con_SqlDsTypeId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsvFunction4GeneCodeEN.con_SqlDsTypeName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.sqlDsTypeName === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncGCTypeId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcGCTypeId === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncGCTypeName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcGCTypeName === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncGCTypeENName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcGCTypeENName === value;
      };
    case clsvFunction4GeneCodeEN.con_PrjId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.prjId === value;
      };
    case clsvFunction4GeneCodeEN.con_ReturnTypeId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.returnTypeId === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncTypeId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcTypeId === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncTypeName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcTypeName === value;
      };
    case clsvFunction4GeneCodeEN.con_IsTemplate:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.isTemplate === value;
      };
    case clsvFunction4GeneCodeEN.con_FunctionSignature:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.functionSignature === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncCode:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcCode === value;
      };
    case clsvFunction4GeneCodeEN.con_UserId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.userId === value;
      };
    case clsvFunction4GeneCodeEN.con_OrderNum:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.orderNum === value;
      };
    case clsvFunction4GeneCodeEN.con_InUse:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.inUse === value;
      };
    case clsvFunction4GeneCodeEN.con_CodeText:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.codeText === value;
      };
    case clsvFunction4GeneCodeEN.con_UpdDate:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.updDate === value;
      };
    case clsvFunction4GeneCodeEN.con_UpdUser:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.updUser === value;
      };
    case clsvFunction4GeneCodeEN.con_Memo:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.memo === value;
      };
    case clsvFunction4GeneCodeEN.con_ParsedWords:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.parsedWords === value;
      };
    case clsvFunction4GeneCodeEN.con_ParsedWordsExcluded:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.parsedWordsExcluded === value;
      };
    case clsvFunction4GeneCodeEN.con_WordVector:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.wordVector === value;
      };
    case clsvFunction4GeneCodeEN.con_IsFuncTemplate:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.isFuncTemplate === value;
      };
    case clsvFunction4GeneCodeEN.con_ReturnTypeName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.returnTypeName === value;
      };
    case clsvFunction4GeneCodeEN.con_TemplateNum:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.templateNum === value;
      };
    case clsvFunction4GeneCodeEN.con_Order4FeatureNum:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.order4FeatureNum === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncCodeTypeENName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcCodeTypeENName === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncCodeTypeId:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcCodeTypeId === value;
      };
    case clsvFunction4GeneCodeEN.con_FuncCodeTypeName:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.funcCodeTypeName === value;
      };
    case clsvFunction4GeneCodeEN.con_ProgLangTypeId4FuncCodeType:
      return (obj: clsvFunction4GeneCodeEN) => {
        return obj.progLangTypeId4FuncCodeType === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFunction4GeneCode]中不存在!(in ${vFunction4GeneCode_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vFunction4GeneCode__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFunction4GeneCode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFunction4GeneCodeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
      const objvFunction4GeneCode = vFunction4GeneCode_GetObjFromJsonObj(returnObj);
      return objvFunction4GeneCode;
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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
          vFunction4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_GetObjLstByFuncId4GCLstAsync(
  arrFuncId4GC: Array<string>,
): Promise<Array<clsvFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4GCLstAsync';
  const strAction = 'GetObjLstByFuncId4GCLst';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
          vFunction4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
          vFunction4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
          vFunction4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunction4GeneCodeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunction4GeneCodeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
          vFunction4GeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_IsExistAsync(strFuncId4GC: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export async function vFunction4GeneCode_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Controller, strAction);

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
        vFunction4GeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_ConstructorName,
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
export function vFunction4GeneCode_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunction4GeneCode_GetJSONStrByObj(
  pobjvFunction4GeneCodeEN: clsvFunction4GeneCodeEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFunction4GeneCodeEN);
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
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFunction4GeneCode_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFunction4GeneCodeEN> {
  let arrvFunction4GeneCodeObjLst = new Array<clsvFunction4GeneCodeEN>();
  if (strJSON === '') {
    return arrvFunction4GeneCodeObjLst;
  }
  try {
    arrvFunction4GeneCodeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFunction4GeneCodeObjLst;
  }
  return arrvFunction4GeneCodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFunction4GeneCodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFunction4GeneCode_GetObjLstByJSONObjLst(
  arrvFunction4GeneCodeObjLstS: Array<clsvFunction4GeneCodeEN>,
): Array<clsvFunction4GeneCodeEN> {
  const arrvFunction4GeneCodeObjLst = new Array<clsvFunction4GeneCodeEN>();
  for (const objInFor of arrvFunction4GeneCodeObjLstS) {
    const obj1 = vFunction4GeneCode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFunction4GeneCodeObjLst.push(obj1);
  }
  return arrvFunction4GeneCodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunction4GeneCode_GetObjByJSONStr(strJSON: string): clsvFunction4GeneCodeEN {
  let pobjvFunction4GeneCodeEN = new clsvFunction4GeneCodeEN();
  if (strJSON === '') {
    return pobjvFunction4GeneCodeEN;
  }
  try {
    pobjvFunction4GeneCodeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFunction4GeneCodeEN;
  }
  return pobjvFunction4GeneCodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFunction4GeneCode_GetCombineCondition(
  objvFunction4GeneCodeCond: clsvFunction4GeneCodeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncId4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncId4GC,
      objvFunction4GeneCodeCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncName,
      objvFunction4GeneCodeCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncId4Code,
      objvFunction4GeneCodeCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncName4Code,
    ) == true
  ) {
    const strComparisonOpFuncName4Code: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncName4Code,
      objvFunction4GeneCodeCond.funcName4Code,
      strComparisonOpFuncName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncCHName4Code,
    ) == true
  ) {
    const strComparisonOpFuncCHName4Code: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncCHName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncCHName4Code,
      objvFunction4GeneCodeCond.funcCHName4Code,
      strComparisonOpFuncCHName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FunctionSignatureSim,
    ) == true
  ) {
    const strComparisonOpFunctionSignatureSim: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[
        clsvFunction4GeneCodeEN.con_FunctionSignatureSim
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FunctionSignatureSim,
      objvFunction4GeneCodeCond.functionSignatureSim,
      strComparisonOpFunctionSignatureSim,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FeatureId,
      objvFunction4GeneCodeCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FeatureName,
    ) == true
  ) {
    const strComparisonOpFeatureName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FeatureName,
      objvFunction4GeneCodeCond.featureName,
      strComparisonOpFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FeatureDescription,
    ) == true
  ) {
    const strComparisonOpFeatureDescription: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FeatureDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FeatureDescription,
      objvFunction4GeneCodeCond.featureDescription,
      strComparisonOpFeatureDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FeatureTypeName,
    ) == true
  ) {
    const strComparisonOpFeatureTypeName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FeatureTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FeatureTypeName,
      objvFunction4GeneCodeCond.featureTypeName,
      strComparisonOpFeatureTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_ProgLangTypeId,
      objvFunction4GeneCodeCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_ProgLangTypeName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_ProgLangTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_ProgLangTypeName,
      objvFunction4GeneCodeCond.progLangTypeName,
      strComparisonOpProgLangTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_SqlDsTypeId,
      objvFunction4GeneCodeCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_SqlDsTypeName,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_SqlDsTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_SqlDsTypeName,
      objvFunction4GeneCodeCond.sqlDsTypeName,
      strComparisonOpSqlDsTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncGCTypeId,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncGCTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncGCTypeId,
      objvFunction4GeneCodeCond.funcGCTypeId,
      strComparisonOpFuncGCTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncGCTypeName,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncGCTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncGCTypeName,
      objvFunction4GeneCodeCond.funcGCTypeName,
      strComparisonOpFuncGCTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncGCTypeENName,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeENName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncGCTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncGCTypeENName,
      objvFunction4GeneCodeCond.funcGCTypeENName,
      strComparisonOpFuncGCTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_PrjId,
      objvFunction4GeneCodeCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_ReturnTypeId,
      objvFunction4GeneCodeCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncTypeId,
      objvFunction4GeneCodeCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncTypeName,
    ) == true
  ) {
    const strComparisonOpFuncTypeName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncTypeName,
      objvFunction4GeneCodeCond.funcTypeName,
      strComparisonOpFuncTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_IsTemplate,
    ) == true
  ) {
    if (objvFunction4GeneCodeCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunction4GeneCodeEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunction4GeneCodeEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FunctionSignature,
      objvFunction4GeneCodeCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_UserId,
      objvFunction4GeneCodeCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4GeneCodeEN.con_OrderNum,
      objvFunction4GeneCodeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_InUse,
    ) == true
  ) {
    if (objvFunction4GeneCodeCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunction4GeneCodeEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunction4GeneCodeEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_CodeText,
    ) == true
  ) {
    const strComparisonOpCodeText: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_CodeText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_CodeText,
      objvFunction4GeneCodeCond.codeText,
      strComparisonOpCodeText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_UpdDate,
      objvFunction4GeneCodeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_UpdUser,
      objvFunction4GeneCodeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_Memo,
      objvFunction4GeneCodeCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_ParsedWords,
    ) == true
  ) {
    const strComparisonOpParsedWords: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_ParsedWords];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_ParsedWords,
      objvFunction4GeneCodeCond.parsedWords,
      strComparisonOpParsedWords,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_ParsedWordsExcluded,
    ) == true
  ) {
    const strComparisonOpParsedWordsExcluded: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_ParsedWordsExcluded];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_ParsedWordsExcluded,
      objvFunction4GeneCodeCond.parsedWordsExcluded,
      strComparisonOpParsedWordsExcluded,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_WordVector,
    ) == true
  ) {
    const strComparisonOpWordVector: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_WordVector];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_WordVector,
      objvFunction4GeneCodeCond.wordVector,
      strComparisonOpWordVector,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_IsFuncTemplate,
    ) == true
  ) {
    if (objvFunction4GeneCodeCond.isFuncTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunction4GeneCodeEN.con_IsFuncTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunction4GeneCodeEN.con_IsFuncTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_ReturnTypeName,
    ) == true
  ) {
    const strComparisonOpReturnTypeName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_ReturnTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_ReturnTypeName,
      objvFunction4GeneCodeCond.returnTypeName,
      strComparisonOpReturnTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_TemplateNum,
    ) == true
  ) {
    const strComparisonOpTemplateNum: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_TemplateNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4GeneCodeEN.con_TemplateNum,
      objvFunction4GeneCodeCond.templateNum,
      strComparisonOpTemplateNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_Order4FeatureNum,
    ) == true
  ) {
    const strComparisonOpOrder4FeatureNum: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_Order4FeatureNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4GeneCodeEN.con_Order4FeatureNum,
      objvFunction4GeneCodeCond.order4FeatureNum,
      strComparisonOpOrder4FeatureNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncCodeTypeENName,
    ) == true
  ) {
    const strComparisonOpFuncCodeTypeENName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncCodeTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncCodeTypeENName,
      objvFunction4GeneCodeCond.funcCodeTypeENName,
      strComparisonOpFuncCodeTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncCodeTypeId,
    ) == true
  ) {
    const strComparisonOpFuncCodeTypeId: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncCodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncCodeTypeId,
      objvFunction4GeneCodeCond.funcCodeTypeId,
      strComparisonOpFuncCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_FuncCodeTypeName,
    ) == true
  ) {
    const strComparisonOpFuncCodeTypeName: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[clsvFunction4GeneCodeEN.con_FuncCodeTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_FuncCodeTypeName,
      objvFunction4GeneCodeCond.funcCodeTypeName,
      strComparisonOpFuncCodeTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCodeCond.dicFldComparisonOp,
      clsvFunction4GeneCodeEN.con_ProgLangTypeId4FuncCodeType,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId4FuncCodeType: string =
      objvFunction4GeneCodeCond.dicFldComparisonOp[
        clsvFunction4GeneCodeEN.con_ProgLangTypeId4FuncCodeType
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCodeEN.con_ProgLangTypeId4FuncCodeType,
      objvFunction4GeneCodeCond.progLangTypeId4FuncCodeType,
      strComparisonOpProgLangTypeId4FuncCodeType,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFunction4GeneCodeENS:源对象
 * @param objvFunction4GeneCodeENT:目标对象
 */
export function vFunction4GeneCode_GetObjFromJsonObj(
  objvFunction4GeneCodeENS: clsvFunction4GeneCodeEN,
): clsvFunction4GeneCodeEN {
  const objvFunction4GeneCodeENT: clsvFunction4GeneCodeEN = new clsvFunction4GeneCodeEN();
  ObjectAssign(objvFunction4GeneCodeENT, objvFunction4GeneCodeENS);
  return objvFunction4GeneCodeENT;
}
