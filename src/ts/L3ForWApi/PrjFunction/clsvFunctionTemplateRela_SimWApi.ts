/**
 * 类名:clsvFunctionTemplateRela_SimWApi
 * 表名:vFunctionTemplateRela_Sim(00050604)
 * 版本:2025.05.12.1(服务器:PYF-AI)
 * 日期:2025/05/17 17:11:07
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
 * v函数模板关系_Sim(vFunctionTemplateRela_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月17日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
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
import {
  vFunctionTemplateRela_SimCache,
  isFuncMapCache,
} from '@/views/PrjFunction/vFunctionTemplateRela_SimVueShare';
import { clsvFunctionTemplateRela_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimENEx';
import { clsvFunctionTemplateRela_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimEN';
import { vFunction4GeneCode_Sim_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { SQLDSType_func } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vFunctionTemplateRela_Sim_Controller = 'vFunctionTemplateRela_SimApi';
export const vFunctionTemplateRela_Sim_ConstructorName = 'vFunctionTemplateRela_Sim';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function vFunctionTemplateRela_Sim_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    functionTemplateId: arrKey[0],
    funcId4GC: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.functionTemplateId) == true) {
    const strMsg = '关键字段(functionTemplateId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.funcId4GC) == true) {
    const strMsg = '关键字段(funcId4GC)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFunctionTemplateId:关键字
 * @returns 对象
 **/
export async function vFunctionTemplateRela_Sim_GetObjByKeyLstAsync(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
): Promise<clsvFunctionTemplateRela_SimEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstAsync)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstAsync)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFunctionTemplateId,
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
      const objvFunctionTemplateRela_Sim = vFunctionTemplateRela_Sim_GetObjFromJsonObj(returnObj);
      return objvFunctionTemplateRela_Sim;
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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function vFunctionTemplateRela_Sim_GetObjByKeyLstlocalStorage(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
) {
  const strThisFuncName = 'GetObjByKeyLstlocalStorage';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstlocalStorage)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstlocalStorage)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRela_SimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFunctionTemplateRela_SimCache: clsvFunctionTemplateRela_SimEN =
      JSON.parse(strTempObj);
    return objvFunctionTemplateRela_SimCache;
  }
  try {
    const objvFunctionTemplateRela_Sim = await vFunctionTemplateRela_Sim_GetObjByKeyLstAsync(
      strFunctionTemplateId,
      strFuncId4GC,
    );
    if (objvFunctionTemplateRela_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFunctionTemplateRela_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFunctionTemplateRela_Sim;
    }
    return objvFunctionTemplateRela_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFunctionTemplateId,
      vFunctionTemplateRela_Sim_ConstructorName,
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
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function vFunctionTemplateRela_Sim_GetObjByKeyLstCache(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyLstCache';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstCache)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunctionTemplateRela_SimWApi.GetObjByKeyLstCache)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFunctionTemplateRela_SimObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
    strFunctionTemplateId,
  );
  try {
    const arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId && x.funcId4GC == strFuncId4GC,
    );
    let objvFunctionTemplateRela_Sim: clsvFunctionTemplateRela_SimEN;
    if (arrvFunctionTemplateRela_SimSel.length > 0) {
      objvFunctionTemplateRela_Sim = arrvFunctionTemplateRela_SimSel[0];
      return objvFunctionTemplateRela_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFunctionTemplateRela_SimConst =
          await vFunctionTemplateRela_Sim_GetObjByKeyLstAsync(strFunctionTemplateId, strFuncId4GC);
        if (objvFunctionTemplateRela_SimConst != null) {
          vFunctionTemplateRela_Sim_ReFreshThisCache(strFunctionTemplateId);
          return objvFunctionTemplateRela_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFunctionTemplateId,
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunctionTemplateRela_Sim_SortFunDefa(
  a: clsvFunctionTemplateRela_SimEN,
  b: clsvFunctionTemplateRela_SimEN,
): number {
  return a.functionTemplateId.localeCompare(b.functionTemplateId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunctionTemplateRela_Sim_SortFunDefa2Fld(
  a: clsvFunctionTemplateRela_SimEN,
  b: clsvFunctionTemplateRela_SimEN,
): number {
  if (a.codeTypeId == b.codeTypeId) return a.regionTypeId.localeCompare(b.regionTypeId);
  else return a.codeTypeId.localeCompare(b.codeTypeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunctionTemplateRela_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          return a.functionTemplateId.localeCompare(b.functionTemplateId);
        };
      case clsvFunctionTemplateRela_SimEN.con_FuncId4GC:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsvFunctionTemplateRela_SimEN.con_CodeTypeId:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsvFunctionTemplateRela_SimEN.con_RegionTypeId:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          if (a.regionTypeId == null) return -1;
          if (b.regionTypeId == null) return 1;
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsvFunctionTemplateRela_SimEN.con_SqlDsTypeId:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          if (a.sqlDsTypeId == null) return -1;
          if (b.sqlDsTypeId == null) return 1;
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsvFunctionTemplateRela_SimEN.con_IsGeneCode:
        return (a: clsvFunctionTemplateRela_SimEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRela_Sim]中不存在!(in ${vFunctionTemplateRela_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          return b.functionTemplateId.localeCompare(a.functionTemplateId);
        };
      case clsvFunctionTemplateRela_SimEN.con_FuncId4GC:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsvFunctionTemplateRela_SimEN.con_CodeTypeId:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsvFunctionTemplateRela_SimEN.con_RegionTypeId:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          if (b.regionTypeId == null) return -1;
          if (a.regionTypeId == null) return 1;
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsvFunctionTemplateRela_SimEN.con_SqlDsTypeId:
        return (a: clsvFunctionTemplateRela_SimEN, b: clsvFunctionTemplateRela_SimEN) => {
          if (b.sqlDsTypeId == null) return -1;
          if (a.sqlDsTypeId == null) return 1;
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsvFunctionTemplateRela_SimEN.con_IsGeneCode:
        return (b: clsvFunctionTemplateRela_SimEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRela_Sim]中不存在!(in ${vFunctionTemplateRela_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFunctionTemplateRela_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId:
      return (obj: clsvFunctionTemplateRela_SimEN) => {
        return obj.functionTemplateId === value;
      };
    case clsvFunctionTemplateRela_SimEN.con_FuncId4GC:
      return (obj: clsvFunctionTemplateRela_SimEN) => {
        return obj.funcId4GC === value;
      };
    case clsvFunctionTemplateRela_SimEN.con_CodeTypeId:
      return (obj: clsvFunctionTemplateRela_SimEN) => {
        return obj.codeTypeId === value;
      };
    case clsvFunctionTemplateRela_SimEN.con_RegionTypeId:
      return (obj: clsvFunctionTemplateRela_SimEN) => {
        return obj.regionTypeId === value;
      };
    case clsvFunctionTemplateRela_SimEN.con_SqlDsTypeId:
      return (obj: clsvFunctionTemplateRela_SimEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsvFunctionTemplateRela_SimEN.con_IsGeneCode:
      return (obj: clsvFunctionTemplateRela_SimEN) => {
        return obj.isGeneCode === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRela_Sim]中不存在!(in ${vFunctionTemplateRela_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vFunctionTemplateRela_Sim_func(
  strInFldName1: string,
  strInFldName2: string,
  strOutFldName: string,
  strInValue1: string,
  strInValue2: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName1 != clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName1);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName2 != clsvFunctionTemplateRela_SimEN.con_FuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName2);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFunctionTemplateRela_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFunctionTemplateRela_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFunctionTemplateId = strInValue1;
  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    return '';
  }
  const strFuncId4GC = strInValue2;
  if (IsNullOrEmpty(strFuncId4GC) == true) {
    return '';
  }
  const objvFunctionTemplateRela_Sim = await vFunctionTemplateRela_Sim_GetObjByKeyLstCache(
    strFunctionTemplateId,
    strFuncId4GC,
  );
  if (objvFunctionTemplateRela_Sim == null) return '';
  if (objvFunctionTemplateRela_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvFunctionTemplateRela_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strFunctionTemplateId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vFunctionTemplateRela_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strFunctionTemplateIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strFunctionTemplateIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateIdClassfy]不能为空!(In clsvFunctionTemplateRela_SimWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateIdClassfy]的长度:[{0}]不正确!(clsvFunctionTemplateRela_SimWApi.funcKey)',
      strFunctionTemplateIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName == clsvFunctionTemplateRela_SimEN.con_FuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFunctionTemplateRela_Sim = await vFunctionTemplateRela_Sim_GetObjLstCache(
    strFunctionTemplateIdClassfy,
  );
  if (arrvFunctionTemplateRela_Sim == null) return [];
  let arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFunctionTemplateRela_SimSel.length == 0) return [];
  return arrvFunctionTemplateRela_Sim.map((x) => `${x.functionTemplateId}|${x.funcId4GC}`);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFunctionTemplateRela_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFunctionTemplateRela_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
      const objvFunctionTemplateRela_Sim = vFunctionTemplateRela_Sim_GetObjFromJsonObj(returnObj);
      return objvFunctionTemplateRela_Sim;
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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetObjLstClientCache(
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFunctionTemplateRela_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFunctionTemplateRela_SimEN.WhereFormat, strFunctionTemplateId);
  } else {
    strWhereCond = Format("FunctionTemplateId='{0}'", strFunctionTemplateId);
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRela_SimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (IsNullOrEmpty(clsvFunctionTemplateRela_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunctionTemplateRela_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFunctionTemplateRela_SimExObjLstCache: Array<clsvFunctionTemplateRela_SimEN> =
      CacheHelper.Get(strKey);
    const arrvFunctionTemplateRela_SimObjLstT = vFunctionTemplateRela_Sim_GetObjLstByJSONObjLst(
      arrvFunctionTemplateRela_SimExObjLstCache,
    );
    return arrvFunctionTemplateRela_SimObjLstT;
  }
  try {
    const arrvFunctionTemplateRela_SimExObjLst = await vFunctionTemplateRela_Sim_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvFunctionTemplateRela_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunctionTemplateRela_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunctionTemplateRela_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetObjLstlocalStorage(
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFunctionTemplateRela_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFunctionTemplateRela_SimEN.WhereFormat, strFunctionTemplateId);
  } else {
    strWhereCond = Format(
      "{0}='{1}'",
      clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
      strFunctionTemplateId,
    );
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRela_SimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (IsNullOrEmpty(clsvFunctionTemplateRela_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunctionTemplateRela_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFunctionTemplateRela_SimExObjLstCache: Array<clsvFunctionTemplateRela_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvFunctionTemplateRela_SimObjLstT = vFunctionTemplateRela_Sim_GetObjLstByJSONObjLst(
      arrvFunctionTemplateRela_SimExObjLstCache,
    );
    return arrvFunctionTemplateRela_SimObjLstT;
  }
  try {
    const arrvFunctionTemplateRela_SimExObjLst = await vFunctionTemplateRela_Sim_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvFunctionTemplateRela_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunctionTemplateRela_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunctionTemplateRela_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetObjLstlocalStoragePureCache(
  strFunctionTemplateId: string,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRela_SimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFunctionTemplateRela_SimObjLstCache: Array<clsvFunctionTemplateRela_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvFunctionTemplateRela_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFunctionTemplateRela_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFunctionTemplateRela_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
          vFunctionTemplateRela_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetObjLstsessionStorage(
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFunctionTemplateRela_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFunctionTemplateRela_SimEN.WhereFormat, strFunctionTemplateId);
  } else {
    strWhereCond = Format(
      "{0}='{1}'",
      clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
      strFunctionTemplateId,
    );
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRela_SimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (IsNullOrEmpty(clsvFunctionTemplateRela_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunctionTemplateRela_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFunctionTemplateRela_SimExObjLstCache: Array<clsvFunctionTemplateRela_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvFunctionTemplateRela_SimObjLstT = vFunctionTemplateRela_Sim_GetObjLstByJSONObjLst(
      arrvFunctionTemplateRela_SimExObjLstCache,
    );
    return arrvFunctionTemplateRela_SimObjLstT;
  }
  try {
    const arrvFunctionTemplateRela_SimExObjLst = await vFunctionTemplateRela_Sim_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvFunctionTemplateRela_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunctionTemplateRela_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunctionTemplateRela_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetObjLstsessionStoragePureCache(
  strFunctionTemplateId: string,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRela_SimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFunctionTemplateRela_SimObjLstCache: Array<clsvFunctionTemplateRela_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvFunctionTemplateRela_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRela_Sim_GetObjLstCache(
  strFunctionTemplateId: string,
): Promise<Array<clsvFunctionTemplateRela_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空！(In clsvFunctionTemplateRela_SimWApi.vFunctionTemplateRela_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确！(clsvFunctionTemplateRela_SimWApi.vFunctionTemplateRela_Sim_GetObjLstCache)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvFunctionTemplateRela_SimObjLstCache;
  switch (clsvFunctionTemplateRela_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFunctionTemplateRela_SimObjLstCache =
        await vFunctionTemplateRela_Sim_GetObjLstsessionStorage(strFunctionTemplateId);
      break;
    case '03': //localStorage
      arrvFunctionTemplateRela_SimObjLstCache =
        await vFunctionTemplateRela_Sim_GetObjLstlocalStorage(strFunctionTemplateId);
      break;
    case '02': //ClientCache
      arrvFunctionTemplateRela_SimObjLstCache =
        await vFunctionTemplateRela_Sim_GetObjLstClientCache(strFunctionTemplateId);
      break;
    default:
      arrvFunctionTemplateRela_SimObjLstCache =
        await vFunctionTemplateRela_Sim_GetObjLstClientCache(strFunctionTemplateId);
      break;
  }
  return arrvFunctionTemplateRela_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRela_Sim_GetObjLstPureCache(strFunctionTemplateId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFunctionTemplateRela_SimObjLstCache;
  switch (clsvFunctionTemplateRela_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFunctionTemplateRela_SimObjLstCache =
        await vFunctionTemplateRela_Sim_GetObjLstsessionStoragePureCache(strFunctionTemplateId);
      break;
    case '03': //localStorage
      arrvFunctionTemplateRela_SimObjLstCache =
        await vFunctionTemplateRela_Sim_GetObjLstlocalStoragePureCache(strFunctionTemplateId);
      break;
    case '02': //ClientCache
      arrvFunctionTemplateRela_SimObjLstCache = null;
      break;
    default:
      arrvFunctionTemplateRela_SimObjLstCache = null;
      break;
  }
  return arrvFunctionTemplateRela_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFunctionTemplateIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFunctionTemplateRela_Sim_GetSubObjLstCache(
  objvFunctionTemplateRela_SimCond: ConditionCollection,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFunctionTemplateRela_SimObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
    strFunctionTemplateId,
  );
  let arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimObjLstCache;
  if (objvFunctionTemplateRela_SimCond.GetConditions().length == 0)
    return arrvFunctionTemplateRela_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvFunctionTemplateRela_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFunctionTemplateRela_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFunctionTemplateRela_SimCond),
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunctionTemplateRela_SimEN>();
}

/// <summary>
/// 把多个关键字段的值连接起来,用|连接(Join)--vFunctionTemplateRela_Sim(v函数模板关系_Sim)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
/// </summary>
/// <param name = "objvFunctionTemplateRela_SimEN">需要连接的对象</param>
/// <returns></returns>
export function vFunctionTemplateRela_Sim_JoinByKeyLst(
  objvFunctionTemplateRela_SimEN: clsvFunctionTemplateRela_SimEN,
): string {
  //检测记录是否存在
  const strResult = `${objvFunctionTemplateRela_SimEN.functionTemplateId}|${objvFunctionTemplateRela_SimEN.funcId4GC}`;
  return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrFunctionTemplateIdLst:关键字列表
 * @returns 对象列表
 */
export async function vFunctionTemplateRela_Sim_GetObjLstByKeyLstsCache(
  arrKeysLst: Array<string>,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjLstByKeyLstsCache';
  try {
    const arrvFunctionTemplateRela_SimObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
      strFunctionTemplateId,
    );
    const arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimObjLstCache.filter(
      (x) => arrKeysLst.indexOf(vFunctionTemplateRela_Sim_JoinByKeyLst(x)) > -1,
    );
    return arrvFunctionTemplateRela_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeysLst.join(','),
      vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFunctionTemplateRela_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
          vFunctionTemplateRela_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFunctionTemplateRela_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
          vFunctionTemplateRela_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunctionTemplateRela_SimEN>();
  const arrvFunctionTemplateRela_SimObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
    strFunctionTemplateId,
  );
  if (arrvFunctionTemplateRela_SimObjLstCache.length == 0)
    return arrvFunctionTemplateRela_SimObjLstCache;
  let arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimObjLstCache;
  const objvFunctionTemplateRela_SimCond = objPagerPara.conditionCollection;
  if (objvFunctionTemplateRela_SimCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsvFunctionTemplateRela_SimEN>();
  }
  //console.log("clsvFunctionTemplateRela_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objvFunctionTemplateRela_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunctionTemplateRela_SimSel.length == 0) return arrvFunctionTemplateRela_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.sort(
        vFunctionTemplateRela_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.sort(objPagerPara.sortFun);
    }
    arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.slice(intStart, intEnd);
    return arrvFunctionTemplateRela_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunctionTemplateRela_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFunctionTemplateRela_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunctionTemplateRela_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunctionTemplateRela_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
          vFunctionTemplateRela_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRela_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strFunctionTemplateId: string,
): Promise<Array<clsvFunctionTemplateRela_SimENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrvFunctionTemplateRela_SimObjLst = await vFunctionTemplateRela_Sim_GetObjLstCache(
    strFunctionTemplateId,
  );
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsvFunctionTemplateRela_SimENEx>();
  const arrvFunctionTemplateRela_SimExObjLst = arrvFunctionTemplateRela_SimObjLst.map((obj) => {
    const cacheKey = `${obj.functionTemplateId}_${obj.funcId4GC}_${obj.functionTemplateId}`;
    if (vFunctionTemplateRela_SimCache[cacheKey]) {
      const oldObj = vFunctionTemplateRela_SimCache[cacheKey];
      return oldObj;
    } else {
      const newObj = vFunctionTemplateRela_Sim_CopyToEx(obj);
      arrNewObj.push(newObj);
      vFunctionTemplateRela_SimCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await vFunctionTemplateRela_Sim_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvFunctionTemplateRela_SimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrvFunctionTemplateRela_SimExObjLst) {
      await vFunctionTemplateRela_Sim_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.functionTemplateId}_${newObj.funcId4GC}_${newObj.functionTemplateId}`;
      vFunctionTemplateRela_SimCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrvFunctionTemplateRela_SimExObjLst.length == 0) return arrvFunctionTemplateRela_SimExObjLst;
  let arrvFunctionTemplateRela_SimSel: Array<clsvFunctionTemplateRela_SimENEx> =
    arrvFunctionTemplateRela_SimExObjLst;
  const objvFunctionTemplateRela_SimCond = objPagerPara.conditionCollection;
  if (objvFunctionTemplateRela_SimCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrvFunctionTemplateRela_SimExObjLst;
  }
  try {
    for (const objCondition of objvFunctionTemplateRela_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunctionTemplateRela_SimSel.length == 0) return arrvFunctionTemplateRela_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.sort(
        vFunctionTemplateRela_Sim_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.sort(objPagerPara.sortFun);
    }
    arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.slice(intStart, intEnd);
    return arrvFunctionTemplateRela_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunctionTemplateRela_SimENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objvFunctionTemplateRela_SimENS:源对象
 * @returns 目标对象=>clsvFunctionTemplateRela_SimEN:objvFunctionTemplateRela_SimENT
 **/
export function vFunctionTemplateRela_Sim_CopyToEx(
  objvFunctionTemplateRela_SimENS: clsvFunctionTemplateRela_SimEN,
): clsvFunctionTemplateRela_SimENEx {
  const strThisFuncName = vFunctionTemplateRela_Sim_CopyToEx.name;
  const objvFunctionTemplateRela_SimENT = new clsvFunctionTemplateRela_SimENEx();
  try {
    ObjectAssign(objvFunctionTemplateRela_SimENT, objvFunctionTemplateRela_SimENS);
    return objvFunctionTemplateRela_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFunctionTemplateRela_SimENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vFunctionTemplateRela_Sim_FuncMapByFldName(
  strFldName: string,
  objvFunctionTemplateRela_SimEx: clsvFunctionTemplateRela_SimENEx,
) {
  const strThisFuncName = vFunctionTemplateRela_Sim_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvFunctionTemplateRela_SimEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeId:
      return vFunctionTemplateRela_Sim_FuncMapProgLangTypeId(objvFunctionTemplateRela_SimEx);
    case clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeName:
      return vFunctionTemplateRela_Sim_FuncMapProgLangTypeName(objvFunctionTemplateRela_SimEx);
    case clsvFunctionTemplateRela_SimENEx.con_SqlDsTypeName:
      return vFunctionTemplateRela_Sim_FuncMapSqlDsTypeName(objvFunctionTemplateRela_SimEx);
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
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunctionTemplateRela_Sim_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncTypeName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsvFunctionTemplateRela_SimENEx.con_SqlDsTypeName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.funcName.localeCompare(b.funcName);
        };
      default:
        return vFunctionTemplateRela_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncTypeName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsvFunctionTemplateRela_SimENEx.con_SqlDsTypeName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.funcName.localeCompare(a.funcName);
        };
      default:
        return vFunctionTemplateRela_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objvFunctionTemplateRela_SimS:源对象
 **/
export async function vFunctionTemplateRela_Sim_FuncMapProgLangTypeId(
  objvFunctionTemplateRela_Sim: clsvFunctionTemplateRela_SimENEx,
) {
  const strThisFuncName = vFunctionTemplateRela_Sim_FuncMapProgLangTypeId.name;
  try {
    if (IsNullOrEmpty(objvFunctionTemplateRela_Sim.progLangTypeId) == true) {
      const vFunction4GeneCodeSimFuncId4GC = objvFunctionTemplateRela_Sim.funcId4GC;
      const vFunction4GeneCodeSimFuncCodeTypeId = await vFunction4GeneCode_Sim_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId,
        vFunction4GeneCodeSimFuncId4GC,
      );
      const vCodeTypeSimCodeTypeId = vFunction4GeneCodeSimFuncCodeTypeId;
      const vCodeTypeSimProgLangTypeId = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_ProgLangTypeId,
        vCodeTypeSimCodeTypeId,
      );
      objvFunctionTemplateRela_Sim.progLangTypeId = vCodeTypeSimProgLangTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001389)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objvFunctionTemplateRela_SimS:源对象
 **/
export async function vFunctionTemplateRela_Sim_FuncMapProgLangTypeName(
  objvFunctionTemplateRela_Sim: clsvFunctionTemplateRela_SimENEx,
) {
  const strThisFuncName = vFunctionTemplateRela_Sim_FuncMapProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objvFunctionTemplateRela_Sim.progLangTypeName) == true) {
      const vFunction4GeneCodeSimFuncId4GC = objvFunctionTemplateRela_Sim.funcId4GC;
      const vFunction4GeneCodeSimFuncCodeTypeId = await vFunction4GeneCode_Sim_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId,
        vFunction4GeneCodeSimFuncId4GC,
      );
      const vCodeTypeSimCodeTypeId = vFunction4GeneCodeSimFuncCodeTypeId;
      const vCodeTypeSimProgLangTypeId = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_ProgLangTypeId,
        vCodeTypeSimCodeTypeId,
      );
      const ProgLangTypeProgLangTypeId = vCodeTypeSimProgLangTypeId;
      const ProgLangTypeProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangTypeProgLangTypeId,
      );
      objvFunctionTemplateRela_Sim.progLangTypeName = ProgLangTypeProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objvFunctionTemplateRela_SimS:源对象
 **/
export async function vFunctionTemplateRela_Sim_FuncMapSqlDsTypeName(
  objvFunctionTemplateRela_Sim: clsvFunctionTemplateRela_SimENEx,
) {
  const strThisFuncName = vFunctionTemplateRela_Sim_FuncMapSqlDsTypeName.name;
  try {
    if (IsNullOrEmpty(objvFunctionTemplateRela_Sim.sqlDsTypeName) == true) {
      const SQLDSTypeSqlDsTypeId = objvFunctionTemplateRela_Sim.sqlDsTypeId;
      const SQLDSTypeSqlDsTypeName = await SQLDSType_func(
        clsSQLDSTypeEN.con_SqlDsTypeId,
        clsSQLDSTypeEN.con_SqlDsTypeName,
        SQLDSTypeSqlDsTypeId,
      );
      objvFunctionTemplateRela_Sim.sqlDsTypeName = SQLDSTypeSqlDsTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001323)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrFunctionTemplateIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFunctionTemplateRela_Sim_IsExistRecordCache(
  objvFunctionTemplateRela_SimCond: ConditionCollection,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFunctionTemplateRela_SimObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
    strFunctionTemplateId,
  );
  if (arrvFunctionTemplateRela_SimObjLstCache == null) return false;
  let arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimObjLstCache;
  if (objvFunctionTemplateRela_SimCond.GetConditions().length == 0)
    return arrvFunctionTemplateRela_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvFunctionTemplateRela_SimCond.GetConditions()) {
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
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunctionTemplateRela_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFunctionTemplateRela_SimCond),
      vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function vFunctionTemplateRela_Sim_IsExistCache(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvFunctionTemplateRela_SimObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
    strFunctionTemplateId,
  );
  if (arrvFunctionTemplateRela_SimObjLstCache == null) return false;
  try {
    const arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId && x.funcId4GC == strFuncId4GC,
    );
    if (arrvFunctionTemplateRela_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFunctionTemplateId,
      vFunctionTemplateRela_Sim_ConstructorName,
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
 * @param strFunctionTemplateId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFunctionTemplateRela_Sim_IsExistAsync(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFunctionTemplateId,
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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
export async function vFunctionTemplateRela_Sim_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFunctionTemplateRela_Sim_Controller, strAction);

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
        vFunctionTemplateRela_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunctionTemplateRela_Sim_ConstructorName,
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
 * @param objvFunctionTemplateRela_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFunctionTemplateRela_Sim_GetRecCountByCondCache(
  objvFunctionTemplateRela_SimCond: ConditionCollection,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFunctionTemplateRela_SimObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
    strFunctionTemplateId,
  );
  if (arrvFunctionTemplateRela_SimObjLstCache == null) return 0;
  let arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimObjLstCache;
  if (objvFunctionTemplateRela_SimCond.GetConditions().length == 0)
    return arrvFunctionTemplateRela_SimSel.length;
  try {
    for (const objCondition of objvFunctionTemplateRela_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRela_SimSel = arrvFunctionTemplateRela_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFunctionTemplateRela_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFunctionTemplateRela_SimCond),
      vFunctionTemplateRela_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vFunctionTemplateRela_Sim_GetWebApiUrl(
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

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vFunctionTemplateRela_Sim_ReFreshThisCache(strFunctionTemplateId: string): void {
  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In clsvFunctionTemplateRela_SimWApi.vFunctionTemplateRela_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(clsvFunctionTemplateRela_SimWApi.vFunctionTemplateRela_Sim_ReFreshThisCache)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format(
      '{0}_{1}',
      clsvFunctionTemplateRela_SimEN._CurrTabName,
      strFunctionTemplateId,
    );
    switch (clsvFunctionTemplateRela_SimEN.CacheModeId) {
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
    clsvFunctionTemplateRela_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vFunctionTemplateRela_Sim_GetLastRefreshTime(): string {
  if (clsvFunctionTemplateRela_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvFunctionTemplateRela_SimEN._RefreshTimeLst[
    clsvFunctionTemplateRela_SimEN._RefreshTimeLst.length - 1
  ];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunctionTemplateRela_Sim_GetJSONStrByObj(
  pobjvFunctionTemplateRela_SimEN: clsvFunctionTemplateRela_SimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFunctionTemplateRela_SimEN);
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
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFunctionTemplateRela_Sim_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFunctionTemplateRela_SimEN> {
  let arrvFunctionTemplateRela_SimObjLst = new Array<clsvFunctionTemplateRela_SimEN>();
  if (strJSON === '') {
    return arrvFunctionTemplateRela_SimObjLst;
  }
  try {
    arrvFunctionTemplateRela_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFunctionTemplateRela_SimObjLst;
  }
  return arrvFunctionTemplateRela_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFunctionTemplateRela_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFunctionTemplateRela_Sim_GetObjLstByJSONObjLst(
  arrvFunctionTemplateRela_SimObjLstS: Array<clsvFunctionTemplateRela_SimEN>,
): Array<clsvFunctionTemplateRela_SimEN> {
  const arrvFunctionTemplateRela_SimObjLst = new Array<clsvFunctionTemplateRela_SimEN>();
  for (const objInFor of arrvFunctionTemplateRela_SimObjLstS) {
    const obj1 = vFunctionTemplateRela_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFunctionTemplateRela_SimObjLst.push(obj1);
  }
  return arrvFunctionTemplateRela_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunctionTemplateRela_Sim_GetObjByJSONStr(
  strJSON: string,
): clsvFunctionTemplateRela_SimEN {
  let pobjvFunctionTemplateRela_SimEN = new clsvFunctionTemplateRela_SimEN();
  if (strJSON === '') {
    return pobjvFunctionTemplateRela_SimEN;
  }
  try {
    pobjvFunctionTemplateRela_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFunctionTemplateRela_SimEN;
  }
  return pobjvFunctionTemplateRela_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFunctionTemplateRela_Sim_GetCombineCondition(
  objvFunctionTemplateRela_SimCond: clsvFunctionTemplateRela_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp,
      clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateId: string =
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp[
        clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
      objvFunctionTemplateRela_SimCond.functionTemplateId,
      strComparisonOpFunctionTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp,
      clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp[
        clsvFunctionTemplateRela_SimEN.con_FuncId4GC
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
      objvFunctionTemplateRela_SimCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp,
      clsvFunctionTemplateRela_SimEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp[
        clsvFunctionTemplateRela_SimEN.con_CodeTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRela_SimEN.con_CodeTypeId,
      objvFunctionTemplateRela_SimCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp,
      clsvFunctionTemplateRela_SimEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp[
        clsvFunctionTemplateRela_SimEN.con_RegionTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRela_SimEN.con_RegionTypeId,
      objvFunctionTemplateRela_SimCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp,
      clsvFunctionTemplateRela_SimEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp[
        clsvFunctionTemplateRela_SimEN.con_SqlDsTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRela_SimEN.con_SqlDsTypeId,
      objvFunctionTemplateRela_SimCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRela_SimCond.dicFldComparisonOp,
      clsvFunctionTemplateRela_SimEN.con_IsGeneCode,
    ) == true
  ) {
    if (objvFunctionTemplateRela_SimCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunctionTemplateRela_SimEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunctionTemplateRela_SimEN.con_IsGeneCode);
    }
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFunctionTemplateRela_SimENS:源对象
 * @param objvFunctionTemplateRela_SimENT:目标对象
 */
export function vFunctionTemplateRela_Sim_GetObjFromJsonObj(
  objvFunctionTemplateRela_SimENS: clsvFunctionTemplateRela_SimEN,
): clsvFunctionTemplateRela_SimEN {
  const objvFunctionTemplateRela_SimENT: clsvFunctionTemplateRela_SimEN =
    new clsvFunctionTemplateRela_SimEN();
  ObjectAssign(objvFunctionTemplateRela_SimENT, objvFunctionTemplateRela_SimENS);
  return objvFunctionTemplateRela_SimENT;
}
