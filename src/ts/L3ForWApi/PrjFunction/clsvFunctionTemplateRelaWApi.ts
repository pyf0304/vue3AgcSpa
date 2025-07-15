/**
 * 类名:clsvFunctionTemplateRelaWApi
 * 表名:vFunctionTemplateRela(00050317)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:13
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
 * v函数与模板关系(vFunctionTemplateRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vFunctionTemplateRela_Controller = 'vFunctionTemplateRelaApi';
export const vFunctionTemplateRela_ConstructorName = 'vFunctionTemplateRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vFunctionTemplateRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvFunctionTemplateRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvFunctionTemplateRelaWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
      const objvFunctionTemplateRela = vFunctionTemplateRela_GetObjFromJsonObj(returnObj);
      return objvFunctionTemplateRela;
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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function vFunctionTemplateRela_SortFunDefa(
  a: clsvFunctionTemplateRelaEN,
  b: clsvFunctionTemplateRelaEN,
): number {
  return a.mId - b.mId;
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
export function vFunctionTemplateRela_SortFunDefa2Fld(
  a: clsvFunctionTemplateRelaEN,
  b: clsvFunctionTemplateRelaEN,
): number {
  if (a.functionTemplateId == b.functionTemplateId)
    return a.functionTemplateName.localeCompare(b.functionTemplateName);
  else return a.functionTemplateId.localeCompare(b.functionTemplateId);
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
export function vFunctionTemplateRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunctionTemplateRelaEN.con_mId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.mId - b.mId;
        };
      case clsvFunctionTemplateRelaEN.con_FunctionTemplateId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.functionTemplateId.localeCompare(b.functionTemplateId);
        };
      case clsvFunctionTemplateRelaEN.con_FunctionTemplateName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.functionTemplateName.localeCompare(b.functionTemplateName);
        };
      case clsvFunctionTemplateRelaEN.con_CreateUserId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.createUserId.localeCompare(b.createUserId);
        };
      case clsvFunctionTemplateRelaEN.con_CodeTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_CodeTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.codeTypeName == null) return -1;
          if (b.codeTypeName == null) return 1;
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_CodeTypeENName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.codeTypeENName == null) return -1;
          if (b.codeTypeENName == null) return 1;
          return a.codeTypeENName.localeCompare(b.codeTypeENName);
        };
      case clsvFunctionTemplateRelaEN.con_RegionTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.regionTypeId == null) return -1;
          if (b.regionTypeId == null) return 1;
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_RegionTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.regionTypeName == null) return -1;
          if (b.regionTypeName == null) return 1;
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_FuncId4GC:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsvFunctionTemplateRelaEN.con_FuncName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsvFunctionTemplateRelaEN.con_FuncId4Code:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.funcId4Code == null) return -1;
          if (b.funcId4Code == null) return 1;
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsvFunctionTemplateRelaEN.con_FuncName4Code:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.funcName4Code == null) return -1;
          if (b.funcName4Code == null) return 1;
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsvFunctionTemplateRelaEN.con_FuncCHName4Code:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.funcCHName4Code == null) return -1;
          if (b.funcCHName4Code == null) return 1;
          return a.funcCHName4Code.localeCompare(b.funcCHName4Code);
        };
      case clsvFunctionTemplateRelaEN.con_ProgLangTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_ProgLangTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_SqlDsTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.sqlDsTypeId == null) return -1;
          if (b.sqlDsTypeId == null) return 1;
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_SqlDsTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.sqlDsTypeName == null) return -1;
          if (b.sqlDsTypeName == null) return 1;
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_ReturnTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_FuncTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.funcTypeId == null) return -1;
          if (b.funcTypeId == null) return 1;
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_FuncTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.funcTypeName == null) return -1;
          if (b.funcTypeName == null) return 1;
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_IsTemplate:
        return (a: clsvFunctionTemplateRelaEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsvFunctionTemplateRelaEN.con_FunctionSignature:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.functionSignature == null) return -1;
          if (b.functionSignature == null) return 1;
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsvFunctionTemplateRelaEN.con_ReturnTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.returnTypeName == null) return -1;
          if (b.returnTypeName == null) return 1;
          return a.returnTypeName.localeCompare(b.returnTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_IsGeneCode:
        return (a: clsvFunctionTemplateRelaEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      case clsvFunctionTemplateRelaEN.con_OrderNum:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvFunctionTemplateRelaEN.con_UpdDate:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvFunctionTemplateRelaEN.con_UpdUser:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvFunctionTemplateRelaEN.con_Memo:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvFunctionTemplateRelaEN.con_Order4FuncNum:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return a.order4FuncNum - b.order4FuncNum;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRela]中不存在!(in ${vFunctionTemplateRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFunctionTemplateRelaEN.con_mId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.mId - a.mId;
        };
      case clsvFunctionTemplateRelaEN.con_FunctionTemplateId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.functionTemplateId.localeCompare(a.functionTemplateId);
        };
      case clsvFunctionTemplateRelaEN.con_FunctionTemplateName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.functionTemplateName.localeCompare(a.functionTemplateName);
        };
      case clsvFunctionTemplateRelaEN.con_CreateUserId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.createUserId.localeCompare(a.createUserId);
        };
      case clsvFunctionTemplateRelaEN.con_CodeTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_CodeTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.codeTypeName == null) return -1;
          if (a.codeTypeName == null) return 1;
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_CodeTypeENName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.codeTypeENName == null) return -1;
          if (a.codeTypeENName == null) return 1;
          return b.codeTypeENName.localeCompare(a.codeTypeENName);
        };
      case clsvFunctionTemplateRelaEN.con_RegionTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.regionTypeId == null) return -1;
          if (a.regionTypeId == null) return 1;
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_RegionTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.regionTypeName == null) return -1;
          if (a.regionTypeName == null) return 1;
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_FuncId4GC:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsvFunctionTemplateRelaEN.con_FuncName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsvFunctionTemplateRelaEN.con_FuncId4Code:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.funcId4Code == null) return -1;
          if (a.funcId4Code == null) return 1;
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsvFunctionTemplateRelaEN.con_FuncName4Code:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.funcName4Code == null) return -1;
          if (a.funcName4Code == null) return 1;
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsvFunctionTemplateRelaEN.con_FuncCHName4Code:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.funcCHName4Code == null) return -1;
          if (a.funcCHName4Code == null) return 1;
          return b.funcCHName4Code.localeCompare(a.funcCHName4Code);
        };
      case clsvFunctionTemplateRelaEN.con_ProgLangTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_ProgLangTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_SqlDsTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.sqlDsTypeId == null) return -1;
          if (a.sqlDsTypeId == null) return 1;
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_SqlDsTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.sqlDsTypeName == null) return -1;
          if (a.sqlDsTypeName == null) return 1;
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_ReturnTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_FuncTypeId:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.funcTypeId == null) return -1;
          if (a.funcTypeId == null) return 1;
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsvFunctionTemplateRelaEN.con_FuncTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.funcTypeName == null) return -1;
          if (a.funcTypeName == null) return 1;
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_IsTemplate:
        return (b: clsvFunctionTemplateRelaEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsvFunctionTemplateRelaEN.con_FunctionSignature:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.functionSignature == null) return -1;
          if (a.functionSignature == null) return 1;
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsvFunctionTemplateRelaEN.con_ReturnTypeName:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.returnTypeName == null) return -1;
          if (a.returnTypeName == null) return 1;
          return b.returnTypeName.localeCompare(a.returnTypeName);
        };
      case clsvFunctionTemplateRelaEN.con_IsGeneCode:
        return (b: clsvFunctionTemplateRelaEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      case clsvFunctionTemplateRelaEN.con_OrderNum:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvFunctionTemplateRelaEN.con_UpdDate:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvFunctionTemplateRelaEN.con_UpdUser:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvFunctionTemplateRelaEN.con_Memo:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvFunctionTemplateRelaEN.con_Order4FuncNum:
        return (a: clsvFunctionTemplateRelaEN, b: clsvFunctionTemplateRelaEN) => {
          return b.order4FuncNum - a.order4FuncNum;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRela]中不存在!(in ${vFunctionTemplateRela_ConstructorName}.${strThisFuncName})`;
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
export async function vFunctionTemplateRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFunctionTemplateRelaEN.con_mId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.mId === value;
      };
    case clsvFunctionTemplateRelaEN.con_FunctionTemplateId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.functionTemplateId === value;
      };
    case clsvFunctionTemplateRelaEN.con_FunctionTemplateName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.functionTemplateName === value;
      };
    case clsvFunctionTemplateRelaEN.con_CreateUserId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.createUserId === value;
      };
    case clsvFunctionTemplateRelaEN.con_CodeTypeId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.codeTypeId === value;
      };
    case clsvFunctionTemplateRelaEN.con_CodeTypeName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.codeTypeName === value;
      };
    case clsvFunctionTemplateRelaEN.con_CodeTypeENName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.codeTypeENName === value;
      };
    case clsvFunctionTemplateRelaEN.con_RegionTypeId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.regionTypeId === value;
      };
    case clsvFunctionTemplateRelaEN.con_RegionTypeName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.regionTypeName === value;
      };
    case clsvFunctionTemplateRelaEN.con_FuncId4GC:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.funcId4GC === value;
      };
    case clsvFunctionTemplateRelaEN.con_FuncName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.funcName === value;
      };
    case clsvFunctionTemplateRelaEN.con_FuncId4Code:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.funcId4Code === value;
      };
    case clsvFunctionTemplateRelaEN.con_FuncName4Code:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.funcName4Code === value;
      };
    case clsvFunctionTemplateRelaEN.con_FuncCHName4Code:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.funcCHName4Code === value;
      };
    case clsvFunctionTemplateRelaEN.con_ProgLangTypeId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.progLangTypeId === value;
      };
    case clsvFunctionTemplateRelaEN.con_ProgLangTypeName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.progLangTypeName === value;
      };
    case clsvFunctionTemplateRelaEN.con_SqlDsTypeId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsvFunctionTemplateRelaEN.con_SqlDsTypeName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.sqlDsTypeName === value;
      };
    case clsvFunctionTemplateRelaEN.con_ReturnTypeId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.returnTypeId === value;
      };
    case clsvFunctionTemplateRelaEN.con_FuncTypeId:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.funcTypeId === value;
      };
    case clsvFunctionTemplateRelaEN.con_FuncTypeName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.funcTypeName === value;
      };
    case clsvFunctionTemplateRelaEN.con_IsTemplate:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.isTemplate === value;
      };
    case clsvFunctionTemplateRelaEN.con_FunctionSignature:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.functionSignature === value;
      };
    case clsvFunctionTemplateRelaEN.con_ReturnTypeName:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.returnTypeName === value;
      };
    case clsvFunctionTemplateRelaEN.con_IsGeneCode:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.isGeneCode === value;
      };
    case clsvFunctionTemplateRelaEN.con_OrderNum:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.orderNum === value;
      };
    case clsvFunctionTemplateRelaEN.con_UpdDate:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.updDate === value;
      };
    case clsvFunctionTemplateRelaEN.con_UpdUser:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.updUser === value;
      };
    case clsvFunctionTemplateRelaEN.con_Memo:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.memo === value;
      };
    case clsvFunctionTemplateRelaEN.con_Order4FuncNum:
      return (obj: clsvFunctionTemplateRelaEN) => {
        return obj.order4FuncNum === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRela]中不存在!(in ${vFunctionTemplateRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vFunctionTemplateRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFunctionTemplateRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFunctionTemplateRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
      const objvFunctionTemplateRela = vFunctionTemplateRela_GetObjFromJsonObj(returnObj);
      return objvFunctionTemplateRela;
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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
          vFunctionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
          vFunctionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
          vFunctionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
          vFunctionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunctionTemplateRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunctionTemplateRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
          vFunctionTemplateRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export async function vFunctionTemplateRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Controller, strAction);

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
        vFunctionTemplateRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_ConstructorName,
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
export function vFunctionTemplateRela_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function vFunctionTemplateRela_GetJSONStrByObj(
  pobjvFunctionTemplateRelaEN: clsvFunctionTemplateRelaEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFunctionTemplateRelaEN);
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
export function vFunctionTemplateRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFunctionTemplateRelaEN> {
  let arrvFunctionTemplateRelaObjLst = new Array<clsvFunctionTemplateRelaEN>();
  if (strJSON === '') {
    return arrvFunctionTemplateRelaObjLst;
  }
  try {
    arrvFunctionTemplateRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFunctionTemplateRelaObjLst;
  }
  return arrvFunctionTemplateRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFunctionTemplateRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFunctionTemplateRela_GetObjLstByJSONObjLst(
  arrvFunctionTemplateRelaObjLstS: Array<clsvFunctionTemplateRelaEN>,
): Array<clsvFunctionTemplateRelaEN> {
  const arrvFunctionTemplateRelaObjLst = new Array<clsvFunctionTemplateRelaEN>();
  for (const objInFor of arrvFunctionTemplateRelaObjLstS) {
    const obj1 = vFunctionTemplateRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFunctionTemplateRelaObjLst.push(obj1);
  }
  return arrvFunctionTemplateRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunctionTemplateRela_GetObjByJSONStr(strJSON: string): clsvFunctionTemplateRelaEN {
  let pobjvFunctionTemplateRelaEN = new clsvFunctionTemplateRelaEN();
  if (strJSON === '') {
    return pobjvFunctionTemplateRelaEN;
  }
  try {
    pobjvFunctionTemplateRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFunctionTemplateRelaEN;
  }
  return pobjvFunctionTemplateRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFunctionTemplateRela_GetCombineCondition(
  objvFunctionTemplateRelaCond: clsvFunctionTemplateRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunctionTemplateRelaEN.con_mId,
      objvFunctionTemplateRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FunctionTemplateId,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_FunctionTemplateId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FunctionTemplateId,
      objvFunctionTemplateRelaCond.functionTemplateId,
      strComparisonOpFunctionTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FunctionTemplateName,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_FunctionTemplateName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FunctionTemplateName,
      objvFunctionTemplateRelaCond.functionTemplateName,
      strComparisonOpFunctionTemplateName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_CreateUserId,
    ) == true
  ) {
    const strComparisonOpCreateUserId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_CreateUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_CreateUserId,
      objvFunctionTemplateRelaCond.createUserId,
      strComparisonOpCreateUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_CodeTypeId,
      objvFunctionTemplateRelaCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_CodeTypeName,
    ) == true
  ) {
    const strComparisonOpCodeTypeName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_CodeTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_CodeTypeName,
      objvFunctionTemplateRelaCond.codeTypeName,
      strComparisonOpCodeTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_CodeTypeENName,
    ) == true
  ) {
    const strComparisonOpCodeTypeENName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_CodeTypeENName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_CodeTypeENName,
      objvFunctionTemplateRelaCond.codeTypeENName,
      strComparisonOpCodeTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_RegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_RegionTypeId,
      objvFunctionTemplateRelaCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_RegionTypeName,
    ) == true
  ) {
    const strComparisonOpRegionTypeName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_RegionTypeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_RegionTypeName,
      objvFunctionTemplateRelaCond.regionTypeName,
      strComparisonOpRegionTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_FuncId4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FuncId4GC,
      objvFunctionTemplateRelaCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FuncName,
      objvFunctionTemplateRelaCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FuncId4Code,
      objvFunctionTemplateRelaCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FuncName4Code,
    ) == true
  ) {
    const strComparisonOpFuncName4Code: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_FuncName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FuncName4Code,
      objvFunctionTemplateRelaCond.funcName4Code,
      strComparisonOpFuncName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FuncCHName4Code,
    ) == true
  ) {
    const strComparisonOpFuncCHName4Code: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_FuncCHName4Code
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FuncCHName4Code,
      objvFunctionTemplateRelaCond.funcCHName4Code,
      strComparisonOpFuncCHName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_ProgLangTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_ProgLangTypeId,
      objvFunctionTemplateRelaCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_ProgLangTypeName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_ProgLangTypeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_ProgLangTypeName,
      objvFunctionTemplateRelaCond.progLangTypeName,
      strComparisonOpProgLangTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_SqlDsTypeId,
      objvFunctionTemplateRelaCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_SqlDsTypeName,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_SqlDsTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_SqlDsTypeName,
      objvFunctionTemplateRelaCond.sqlDsTypeName,
      strComparisonOpSqlDsTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_ReturnTypeId,
      objvFunctionTemplateRelaCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FuncTypeId,
      objvFunctionTemplateRelaCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FuncTypeName,
    ) == true
  ) {
    const strComparisonOpFuncTypeName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_FuncTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FuncTypeName,
      objvFunctionTemplateRelaCond.funcTypeName,
      strComparisonOpFuncTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_IsTemplate,
    ) == true
  ) {
    if (objvFunctionTemplateRelaCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunctionTemplateRelaEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunctionTemplateRelaEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_FunctionSignature
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_FunctionSignature,
      objvFunctionTemplateRelaCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_ReturnTypeName,
    ) == true
  ) {
    const strComparisonOpReturnTypeName: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaEN.con_ReturnTypeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_ReturnTypeName,
      objvFunctionTemplateRelaCond.returnTypeName,
      strComparisonOpReturnTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_IsGeneCode,
    ) == true
  ) {
    if (objvFunctionTemplateRelaCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunctionTemplateRelaEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunctionTemplateRelaEN.con_IsGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunctionTemplateRelaEN.con_OrderNum,
      objvFunctionTemplateRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_UpdDate,
      objvFunctionTemplateRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_UpdUser,
      objvFunctionTemplateRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaEN.con_Memo,
      objvFunctionTemplateRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaEN.con_Order4FuncNum,
    ) == true
  ) {
    const strComparisonOpOrder4FuncNum: string =
      objvFunctionTemplateRelaCond.dicFldComparisonOp[clsvFunctionTemplateRelaEN.con_Order4FuncNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunctionTemplateRelaEN.con_Order4FuncNum,
      objvFunctionTemplateRelaCond.order4FuncNum,
      strComparisonOpOrder4FuncNum,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFunctionTemplateRelaENS:源对象
 * @param objvFunctionTemplateRelaENT:目标对象
 */
export function vFunctionTemplateRela_GetObjFromJsonObj(
  objvFunctionTemplateRelaENS: clsvFunctionTemplateRelaEN,
): clsvFunctionTemplateRelaEN {
  const objvFunctionTemplateRelaENT: clsvFunctionTemplateRelaEN = new clsvFunctionTemplateRelaEN();
  ObjectAssign(objvFunctionTemplateRelaENT, objvFunctionTemplateRelaENS);
  return objvFunctionTemplateRelaENT;
}
