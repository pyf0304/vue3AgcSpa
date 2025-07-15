/**
 * 类名:clsGCVariablePrjIdRelaWApi
 * 表名:GCVariablePrjIdRela(00050617)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:50
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * GCVariablePrjIdRela(GCVariablePrjIdRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  gCVariablePrjIdRelaCache,
  isFuncMapCache,
} from '@/views/GeneCode/GCVariablePrjIdRelaVueShare';
import { clsGCVariablePrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaENEx';
import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';
import { GCVariable_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { GCVariableType_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const gCVariablePrjIdRela_Controller = 'GCVariablePrjIdRelaApi';
export const gCVariablePrjIdRela_ConstructorName = 'gCVariablePrjIdRela';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function GCVariablePrjIdRela_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    varId: arrKey[0],
    prjId: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.varId) == true) {
    const strMsg = '关键字段(varId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.prjId) == true) {
    const strMsg = '关键字段(prjId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strVarId:关键字
 * @returns 对象
 **/
export async function GCVariablePrjIdRela_GetObjByKeyLstAsync(
  strVarId: string,
  strPrjId: string,
): Promise<clsGCVariablePrjIdRelaEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format(
      '参数:[strVarId]不能为空!(In clsGCVariablePrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.GetObjByKeyLstAsync)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsGCVariablePrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.GetObjByKeyLstAsync)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
      strPrjId,
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
      const objGCVariablePrjIdRela = GCVariablePrjIdRela_GetObjFromJsonObj(returnObj);
      return objGCVariablePrjIdRela;
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function GCVariablePrjIdRela_GetObjByKeyLstlocalStorage(
  strVarId: string,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjByKeyLstlocalStorage';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format(
      '参数:[strVarId]不能为空!(In clsGCVariablePrjIdRelaWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.GetObjByKeyLstlocalStorage)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsGCVariablePrjIdRelaWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.GetObjByKeyLstlocalStorage)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsGCVariablePrjIdRelaEN._CurrTabName, strVarId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objGCVariablePrjIdRelaCache: clsGCVariablePrjIdRelaEN = JSON.parse(strTempObj);
    return objGCVariablePrjIdRelaCache;
  }
  try {
    const objGCVariablePrjIdRela = await GCVariablePrjIdRela_GetObjByKeyLstAsync(
      strVarId,
      strPrjId,
    );
    if (objGCVariablePrjIdRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objGCVariablePrjIdRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objGCVariablePrjIdRela;
    }
    return objGCVariablePrjIdRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVarId,
      gCVariablePrjIdRela_ConstructorName,
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
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function GCVariablePrjIdRela_GetObjByKeyLstCache(
  strVarId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyLstCache';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format(
      '参数:[strVarId]不能为空!(In clsGCVariablePrjIdRelaWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.GetObjByKeyLstCache)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsGCVariablePrjIdRelaWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.GetObjByKeyLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  try {
    const arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaObjLstCache.filter(
      (x) => x.varId == strVarId && x.prjId == strPrjId,
    );
    let objGCVariablePrjIdRela: clsGCVariablePrjIdRelaEN;
    if (arrGCVariablePrjIdRelaSel.length > 0) {
      objGCVariablePrjIdRela = arrGCVariablePrjIdRelaSel[0];
      return objGCVariablePrjIdRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objGCVariablePrjIdRelaConst = await GCVariablePrjIdRela_GetObjByKeyLstAsync(
          strVarId,
          strPrjId,
        );
        if (objGCVariablePrjIdRelaConst != null) {
          GCVariablePrjIdRela_ReFreshThisCache(strPrjId);
          return objGCVariablePrjIdRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVarId,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objGCVariablePrjIdRela:所给的对象
 * @returns 对象
 */
export async function GCVariablePrjIdRela_UpdateObjInLstCache(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
    const obj = arrGCVariablePrjIdRelaObjLstCache.find(
      (x) => x.varId == objGCVariablePrjIdRela.varId,
    );
    if (obj != null) {
      objGCVariablePrjIdRela.varId = obj.varId;
      ObjectAssign(obj, objGCVariablePrjIdRela);
    } else {
      arrGCVariablePrjIdRelaObjLstCache.push(objGCVariablePrjIdRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCVariablePrjIdRela_SortFunDefa(
  a: clsGCVariablePrjIdRelaEN,
  b: clsGCVariablePrjIdRelaEN,
): number {
  return a.varId.localeCompare(b.varId);
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
export function GCVariablePrjIdRela_SortFunDefa2Fld(
  a: clsGCVariablePrjIdRelaEN,
  b: clsGCVariablePrjIdRelaEN,
): number {
  if (a.fldId == b.fldId) return a.updUser.localeCompare(b.updUser);
  else return a.fldId.localeCompare(b.fldId);
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
export function GCVariablePrjIdRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCVariablePrjIdRelaEN.con_VarId:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          return a.varId.localeCompare(b.varId);
        };
      case clsGCVariablePrjIdRelaEN.con_PrjId:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsGCVariablePrjIdRelaEN.con_FldId:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          if (a.fldId == null) return -1;
          if (b.fldId == null) return 1;
          return a.fldId.localeCompare(b.fldId);
        };
      case clsGCVariablePrjIdRelaEN.con_UpdUser:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCVariablePrjIdRelaEN.con_UpdDate:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCVariablePrjIdRelaEN.con_Memo:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCVariablePrjIdRela]中不存在!(in ${gCVariablePrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCVariablePrjIdRelaEN.con_VarId:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          return b.varId.localeCompare(a.varId);
        };
      case clsGCVariablePrjIdRelaEN.con_PrjId:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsGCVariablePrjIdRelaEN.con_FldId:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          if (b.fldId == null) return -1;
          if (a.fldId == null) return 1;
          return b.fldId.localeCompare(a.fldId);
        };
      case clsGCVariablePrjIdRelaEN.con_UpdUser:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCVariablePrjIdRelaEN.con_UpdDate:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCVariablePrjIdRelaEN.con_Memo:
        return (a: clsGCVariablePrjIdRelaEN, b: clsGCVariablePrjIdRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCVariablePrjIdRela]中不存在!(in ${gCVariablePrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GCVariablePrjIdRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCVariablePrjIdRelaEN.con_VarId:
      return (obj: clsGCVariablePrjIdRelaEN) => {
        return obj.varId === value;
      };
    case clsGCVariablePrjIdRelaEN.con_PrjId:
      return (obj: clsGCVariablePrjIdRelaEN) => {
        return obj.prjId === value;
      };
    case clsGCVariablePrjIdRelaEN.con_FldId:
      return (obj: clsGCVariablePrjIdRelaEN) => {
        return obj.fldId === value;
      };
    case clsGCVariablePrjIdRelaEN.con_UpdUser:
      return (obj: clsGCVariablePrjIdRelaEN) => {
        return obj.updUser === value;
      };
    case clsGCVariablePrjIdRelaEN.con_UpdDate:
      return (obj: clsGCVariablePrjIdRelaEN) => {
        return obj.updDate === value;
      };
    case clsGCVariablePrjIdRelaEN.con_Memo:
      return (obj: clsGCVariablePrjIdRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCVariablePrjIdRela]中不存在!(in ${gCVariablePrjIdRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function GCVariablePrjIdRela_func(
  strInFldName1: string,
  strInFldName2: string,
  strOutFldName: string,
  strInValue1: string,
  strInValue2: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName1 != clsGCVariablePrjIdRelaEN.con_VarId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName1);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName2 != clsGCVariablePrjIdRelaEN.con_PrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName2);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsGCVariablePrjIdRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsGCVariablePrjIdRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strVarId = strInValue1;
  if (IsNullOrEmpty(strVarId) == true) {
    return '';
  }
  const strPrjId = strInValue2;
  if (IsNullOrEmpty(strPrjId) == true) {
    return '';
  }
  const objGCVariablePrjIdRela = await GCVariablePrjIdRela_GetObjByKeyLstCache(strVarId, strPrjId);
  if (objGCVariablePrjIdRela == null) return '';
  if (objGCVariablePrjIdRela.GetFldValue(strOutFldName) == null) return '';
  return objGCVariablePrjIdRela.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function GCVariablePrjIdRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsGCVariablePrjIdRelaWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsGCVariablePrjIdRelaEN.con_VarId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName == clsGCVariablePrjIdRelaEN.con_PrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrGCVariablePrjIdRela = await GCVariablePrjIdRela_GetObjLstCache(strPrjIdClassfy);
  if (arrGCVariablePrjIdRela == null) return [];
  let arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrGCVariablePrjIdRelaSel.length == 0) return [];
  return arrGCVariablePrjIdRela.map((x) => `${x.varId}|${x.prjId}`);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCVariablePrjIdRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGCVariablePrjIdRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
      const objGCVariablePrjIdRela = GCVariablePrjIdRela_GetObjFromJsonObj(returnObj);
      return objGCVariablePrjIdRela;
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsGCVariablePrjIdRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsGCVariablePrjIdRelaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsGCVariablePrjIdRelaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsGCVariablePrjIdRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariablePrjIdRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrGCVariablePrjIdRelaExObjLstCache: Array<clsGCVariablePrjIdRelaEN> =
      CacheHelper.Get(strKey);
    const arrGCVariablePrjIdRelaObjLstT = GCVariablePrjIdRela_GetObjLstByJSONObjLst(
      arrGCVariablePrjIdRelaExObjLstCache,
    );
    return arrGCVariablePrjIdRelaObjLstT;
  }
  try {
    const arrGCVariablePrjIdRelaExObjLst = await GCVariablePrjIdRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrGCVariablePrjIdRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariablePrjIdRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariablePrjIdRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsGCVariablePrjIdRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsGCVariablePrjIdRelaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsGCVariablePrjIdRelaEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsGCVariablePrjIdRelaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsGCVariablePrjIdRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariablePrjIdRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCVariablePrjIdRelaExObjLstCache: Array<clsGCVariablePrjIdRelaEN> =
      JSON.parse(strTempObjLst);
    const arrGCVariablePrjIdRelaObjLstT = GCVariablePrjIdRela_GetObjLstByJSONObjLst(
      arrGCVariablePrjIdRelaExObjLstCache,
    );
    return arrGCVariablePrjIdRelaObjLstT;
  }
  try {
    const arrGCVariablePrjIdRelaExObjLst = await GCVariablePrjIdRela_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsGCVariablePrjIdRelaEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrGCVariablePrjIdRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariablePrjIdRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariablePrjIdRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsGCVariablePrjIdRelaEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCVariablePrjIdRelaObjLstCache: Array<clsGCVariablePrjIdRelaEN> =
      JSON.parse(strTempObjLst);
    return arrGCVariablePrjIdRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GCVariablePrjIdRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGCVariablePrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
          gCVariablePrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariablePrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsGCVariablePrjIdRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsGCVariablePrjIdRelaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsGCVariablePrjIdRelaEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsGCVariablePrjIdRelaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsGCVariablePrjIdRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariablePrjIdRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCVariablePrjIdRelaExObjLstCache: Array<clsGCVariablePrjIdRelaEN> =
      JSON.parse(strTempObjLst);
    const arrGCVariablePrjIdRelaObjLstT = GCVariablePrjIdRela_GetObjLstByJSONObjLst(
      arrGCVariablePrjIdRelaExObjLstCache,
    );
    return arrGCVariablePrjIdRelaObjLstT;
  }
  try {
    const arrGCVariablePrjIdRelaExObjLst = await GCVariablePrjIdRela_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsGCVariablePrjIdRelaEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrGCVariablePrjIdRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariablePrjIdRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariablePrjIdRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsGCVariablePrjIdRelaEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCVariablePrjIdRelaObjLstCache: Array<clsGCVariablePrjIdRelaEN> =
      JSON.parse(strTempObjLst);
    return arrGCVariablePrjIdRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCVariablePrjIdRela_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsGCVariablePrjIdRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsGCVariablePrjIdRelaWApi.GCVariablePrjIdRela_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsGCVariablePrjIdRelaWApi.GCVariablePrjIdRela_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrGCVariablePrjIdRelaObjLstCache;
  switch (clsGCVariablePrjIdRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstsessionStorage(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrGCVariablePrjIdRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCVariablePrjIdRela_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrGCVariablePrjIdRelaObjLstCache;
  switch (clsGCVariablePrjIdRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCVariablePrjIdRelaObjLstCache =
        await GCVariablePrjIdRela_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrGCVariablePrjIdRelaObjLstCache = null;
      break;
    default:
      arrGCVariablePrjIdRelaObjLstCache = null;
      break;
  }
  return arrGCVariablePrjIdRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrVarIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCVariablePrjIdRela_GetSubObjLstCache(
  objGCVariablePrjIdRelaCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  let arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaObjLstCache;
  if (objGCVariablePrjIdRelaCond.GetConditions().length == 0) return arrGCVariablePrjIdRelaSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objGCVariablePrjIdRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCVariablePrjIdRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCVariablePrjIdRelaCond),
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariablePrjIdRelaEN>();
}

/// <summary>
/// 把多个关键字段的值连接起来,用|连接(Join)--GCVariablePrjIdRela(GCVariablePrjIdRela)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
/// </summary>
/// <param name = "objGCVariablePrjIdRelaEN">需要连接的对象</param>
/// <returns></returns>
export function GCVariablePrjIdRela_JoinByKeyLst(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): string {
  //检测记录是否存在
  const strResult = `${objGCVariablePrjIdRelaEN.varId}|${objGCVariablePrjIdRelaEN.prjId}`;
  return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrVarIdLst:关键字列表
 * @returns 对象列表
 */
export async function GCVariablePrjIdRela_GetObjLstByKeyLstsCache(
  arrKeysLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByKeyLstsCache';
  try {
    const arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
    const arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaObjLstCache.filter(
      (x) => arrKeysLst.indexOf(GCVariablePrjIdRela_JoinByKeyLst(x)) > -1,
    );
    return arrGCVariablePrjIdRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeysLst.join(','),
      gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCVariablePrjIdRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
          gCVariablePrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariablePrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCVariablePrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
          gCVariablePrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariablePrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCVariablePrjIdRelaEN>();
  const arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  if (arrGCVariablePrjIdRelaObjLstCache.length == 0) return arrGCVariablePrjIdRelaObjLstCache;
  let arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaObjLstCache;
  const objGCVariablePrjIdRelaCond = objPagerPara.conditionCollection;
  if (objGCVariablePrjIdRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsGCVariablePrjIdRelaEN>();
  }
  //console.log("clsGCVariablePrjIdRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objGCVariablePrjIdRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCVariablePrjIdRelaSel.length == 0) return arrGCVariablePrjIdRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.sort(
        GCVariablePrjIdRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.sort(objPagerPara.sortFun);
    }
    arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.slice(intStart, intEnd);
    return arrGCVariablePrjIdRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariablePrjIdRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GCVariablePrjIdRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCVariablePrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCVariablePrjIdRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
          gCVariablePrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariablePrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param strVarId,strPrjId:关键字列表
 * @returns 获取删除的结果
 **/
export async function GCVariablePrjIdRela_DelRecKeyLstAsync(
  strVarId: string,
  strPrjId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
      strPrjId,
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export async function GCVariablePrjIdRela_DelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyLsts, config);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsGCVariablePrjIdRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrGCVariablePrjIdRelaObjLst = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsGCVariablePrjIdRelaENEx>();
  const arrGCVariablePrjIdRelaExObjLst = arrGCVariablePrjIdRelaObjLst.map((obj) => {
    const cacheKey = `${obj.varId}_${obj.prjId}_${obj.prjId}`;
    if (gCVariablePrjIdRelaCache[cacheKey]) {
      const oldObj = gCVariablePrjIdRelaCache[cacheKey];
      return oldObj;
    } else {
      const newObj = GCVariablePrjIdRela_CopyToEx(obj);
      arrNewObj.push(newObj);
      gCVariablePrjIdRelaCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await GCVariablePrjIdRela_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCVariablePrjIdRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrGCVariablePrjIdRelaExObjLst) {
      await GCVariablePrjIdRela_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.varId}_${newObj.prjId}_${newObj.prjId}`;
      gCVariablePrjIdRelaCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrGCVariablePrjIdRelaExObjLst.length == 0) return arrGCVariablePrjIdRelaExObjLst;
  let arrGCVariablePrjIdRelaSel: Array<clsGCVariablePrjIdRelaENEx> = arrGCVariablePrjIdRelaExObjLst;
  const objGCVariablePrjIdRelaCond = objPagerPara.conditionCollection;
  if (objGCVariablePrjIdRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrGCVariablePrjIdRelaExObjLst;
  }
  try {
    for (const objCondition of objGCVariablePrjIdRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCVariablePrjIdRelaSel.length == 0) return arrGCVariablePrjIdRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.sort(
        GCVariablePrjIdRela_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.sort(objPagerPara.sortFun);
    }
    arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.slice(intStart, intEnd);
    return arrGCVariablePrjIdRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariablePrjIdRelaENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objGCVariablePrjIdRelaENS:源对象
 * @returns 目标对象=>clsGCVariablePrjIdRelaEN:objGCVariablePrjIdRelaENT
 **/
export function GCVariablePrjIdRela_CopyToEx(
  objGCVariablePrjIdRelaENS: clsGCVariablePrjIdRelaEN,
): clsGCVariablePrjIdRelaENEx {
  const strThisFuncName = GCVariablePrjIdRela_CopyToEx.name;
  const objGCVariablePrjIdRelaENT = new clsGCVariablePrjIdRelaENEx();
  try {
    ObjectAssign(objGCVariablePrjIdRelaENT, objGCVariablePrjIdRelaENS);
    return objGCVariablePrjIdRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCVariablePrjIdRelaENT;
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
export function GCVariablePrjIdRela_FuncMapByFldName(
  strFldName: string,
  objGCVariablePrjIdRelaEx: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCVariablePrjIdRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGCVariablePrjIdRelaENEx.con_DataTypeName:
      return GCVariablePrjIdRela_FuncMapDataTypeName(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_CsType:
      return GCVariablePrjIdRela_FuncMapCsType(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_VarName:
      return GCVariablePrjIdRela_FuncMapVarName(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_VarTypeId:
      return GCVariablePrjIdRela_FuncMapVarTypeId(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_TypeScriptType:
      return GCVariablePrjIdRela_FuncMapTypeScriptType(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_DataTypeId:
      return GCVariablePrjIdRela_FuncMapDataTypeId(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_VarTypeName:
      return GCVariablePrjIdRela_FuncMapVarTypeName(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_FldName:
      return GCVariablePrjIdRela_FuncMapFldName(objGCVariablePrjIdRelaEx);
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
export function GCVariablePrjIdRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCVariablePrjIdRelaENEx.con_PrjName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsGCVariablePrjIdRelaENEx.con_DataTypeName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsGCVariablePrjIdRelaENEx.con_CsType:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.csType.localeCompare(b.csType);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.varName === null && b.varName === null) return 0;
          if (a.varName === null) return -1;
          if (b.varName === null) return 1;
          return a.varName.localeCompare(b.varName);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarTypeId:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.varTypeId === null && b.varTypeId === null) return 0;
          if (a.varTypeId === null) return -1;
          if (b.varTypeId === null) return 1;
          return a.varTypeId.localeCompare(b.varTypeId);
        };
      case clsGCVariablePrjIdRelaENEx.con_TypeScriptType:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.typeScriptType === null && b.typeScriptType === null) return 0;
          if (a.typeScriptType === null) return -1;
          if (b.typeScriptType === null) return 1;
          return a.typeScriptType.localeCompare(b.typeScriptType);
        };
      case clsGCVariablePrjIdRelaENEx.con_DataTypeId:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarTypeName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.varTypeName === null && b.varTypeName === null) return 0;
          if (a.varTypeName === null) return -1;
          if (b.varTypeName === null) return 1;
          return a.varTypeName.localeCompare(b.varTypeName);
        };
      case clsGCVariablePrjIdRelaENEx.con_FldName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      default:
        return GCVariablePrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGCVariablePrjIdRelaENEx.con_PrjName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsGCVariablePrjIdRelaENEx.con_DataTypeName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsGCVariablePrjIdRelaENEx.con_CsType:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.csType.localeCompare(a.csType);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.varName === null && b.varName === null) return 0;
          if (a.varName === null) return 1;
          if (b.varName === null) return -1;
          return b.varName.localeCompare(a.varName);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarTypeId:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.varTypeId === null && b.varTypeId === null) return 0;
          if (a.varTypeId === null) return 1;
          if (b.varTypeId === null) return -1;
          return b.varTypeId.localeCompare(a.varTypeId);
        };
      case clsGCVariablePrjIdRelaENEx.con_TypeScriptType:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.typeScriptType === null && b.typeScriptType === null) return 0;
          if (a.typeScriptType === null) return 1;
          if (b.typeScriptType === null) return -1;
          return b.typeScriptType.localeCompare(a.typeScriptType);
        };
      case clsGCVariablePrjIdRelaENEx.con_DataTypeId:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarTypeName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          if (a.varTypeName === null && b.varTypeName === null) return 0;
          if (a.varTypeName === null) return 1;
          if (b.varTypeName === null) return -1;
          return b.varTypeName.localeCompare(a.varTypeName);
        };
      case clsGCVariablePrjIdRelaENEx.con_FldName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      default:
        return GCVariablePrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRela_FuncMapVarName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapVarName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varName) == true) {
      const GCVariableVarId = objGCVariablePrjIdRela.varId;
      const GCVariableVarName = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarName,
        GCVariableVarId,
      );
      objGCVariablePrjIdRela.varName = GCVariableVarName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001366)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRela_FuncMapCsType(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapCsType.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.csType) == true) {
      const GCVariableVarId = objGCVariablePrjIdRela.varId;
      const GCVariableDataTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_DataTypeId,
        GCVariableVarId,
      );
      const DataTypeAbbrDataTypeId = GCVariableDataTypeId;
      const DataTypeAbbrCsType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_CsType,
        DataTypeAbbrDataTypeId,
      );
      objGCVariablePrjIdRela.csType = DataTypeAbbrCsType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001367)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRela_FuncMapDataTypeName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.dataTypeName) == true) {
      const GCVariableVarId = objGCVariablePrjIdRela.varId;
      const GCVariableDataTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_DataTypeId,
        GCVariableVarId,
      );
      const DataTypeAbbrDataTypeId = GCVariableDataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objGCVariablePrjIdRela.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001349)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRela_FuncMapVarTypeId(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapVarTypeId.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varTypeId) == true) {
      const GCVariableVarId = objGCVariablePrjIdRela.varId;
      const GCVariableVarTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarTypeId,
        GCVariableVarId,
      );
      objGCVariablePrjIdRela.varTypeId = GCVariableVarTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001368)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRela_FuncMapVarTypeName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapVarTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varTypeName) == true) {
      const GCVariableVarId = objGCVariablePrjIdRela.varId;
      const GCVariableVarTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarTypeId,
        GCVariableVarId,
      );
      const GCVariableTypeVarTypeId = GCVariableVarTypeId;
      const GCVariableTypeVarTypeName = await GCVariableType_func(
        clsGCVariableTypeEN.con_VarTypeId,
        clsGCVariableTypeEN.con_VarTypeName,
        GCVariableTypeVarTypeId,
      );
      objGCVariablePrjIdRela.varTypeName = GCVariableTypeVarTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001362)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRela_FuncMapTypeScriptType(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapTypeScriptType.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.typeScriptType) == true) {
      const GCVariableVarId = objGCVariablePrjIdRela.varId;
      const GCVariableDataTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_DataTypeId,
        GCVariableVarId,
      );
      const DataTypeAbbrDataTypeId = GCVariableDataTypeId;
      const DataTypeAbbrTypeScriptType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_TypeScriptType,
        DataTypeAbbrDataTypeId,
      );
      objGCVariablePrjIdRela.typeScriptType = DataTypeAbbrTypeScriptType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001369)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRela_FuncMapDataTypeId(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapDataTypeId.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.dataTypeId) == true) {
      const GCVariableVarId = objGCVariablePrjIdRela.varId;
      const GCVariableDataTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_DataTypeId,
        GCVariableVarId,
      );
      objGCVariablePrjIdRela.dataTypeId = GCVariableDataTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001370)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRela_FuncMapFldName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRela_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.fldName) == true) {
      const vFieldTabSimFldId = objGCVariablePrjIdRela.fldId;
      if (IsNullOrEmpty(objGCVariablePrjIdRela.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${gCVariablePrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objGCVariablePrjIdRela.prjId,
      );
      objGCVariablePrjIdRela.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_DelGCVariablePrjIdRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelGCVariablePrjIdRelasByCondAsync';
  const strAction = 'DelGCVariablePrjIdRelasByCond';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param objGCVariablePrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCVariablePrjIdRela_AddNewRecordAsync(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objGCVariablePrjIdRelaEN.varId === null || objGCVariablePrjIdRelaEN.varId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objGCVariablePrjIdRelaEN);
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariablePrjIdRelaEN, config);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param objGCVariablePrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCVariablePrjIdRela_AddNewRecordWithMaxIdAsync(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariablePrjIdRelaEN, config);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_AddNewObjSave(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    GCVariablePrjIdRela_CheckPropertyNew(objGCVariablePrjIdRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCVariablePrjIdRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await GCVariablePrjIdRela_IsExistAsync(
      objGCVariablePrjIdRelaEN.varId,
      objGCVariablePrjIdRelaEN.prjId,
    );
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objGCVariablePrjIdRelaEN.varId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await GCVariablePrjIdRela_AddNewRecordAsync(objGCVariablePrjIdRelaEN);
    if (returnBool == true) {
      GCVariablePrjIdRela_ReFreshCache(objGCVariablePrjIdRelaEN.prjId);
    } else {
      const strInfo = `添加[GCVariablePrjIdRela(GCVariablePrjIdRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    let strReturnKeyLst = '';
    strReturnKeyLst += `${objGCVariablePrjIdRelaEN.varId}`;
    strReturnKeyLst += `|${objGCVariablePrjIdRelaEN.prjId}`;
    return { keyword: strReturnKeyLst, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${gCVariablePrjIdRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function GCVariablePrjIdRela_UpdateObjSave(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objGCVariablePrjIdRelaEN.sfUpdFldSetStr = objGCVariablePrjIdRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objGCVariablePrjIdRelaEN.varId == '' || objGCVariablePrjIdRelaEN.varId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    GCVariablePrjIdRela_CheckProperty4Update(objGCVariablePrjIdRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCVariablePrjIdRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await GCVariablePrjIdRela_UpdateRecordAsync(objGCVariablePrjIdRelaEN);
    if (returnBool == true) {
      GCVariablePrjIdRela_ReFreshCache(objGCVariablePrjIdRelaEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${gCVariablePrjIdRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGCVariablePrjIdRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCVariablePrjIdRela_AddNewRecordWithReturnKeyAsync(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariablePrjIdRelaEN, config);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param objGCVariablePrjIdRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCVariablePrjIdRela_UpdateRecordAsync(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === null ||
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCVariablePrjIdRelaEN.varId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariablePrjIdRelaEN, config);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param objGCVariablePrjIdRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCVariablePrjIdRela_EditRecordExAsync(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === null ||
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCVariablePrjIdRelaEN.varId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariablePrjIdRelaEN, config);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param objGCVariablePrjIdRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCVariablePrjIdRela_UpdateWithConditionAsync(
  objGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === null ||
    objGCVariablePrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCVariablePrjIdRelaEN.varId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);
  objGCVariablePrjIdRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariablePrjIdRelaEN, config);
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param objstrVarIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCVariablePrjIdRela_IsExistRecordCache(
  objGCVariablePrjIdRelaCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  if (arrGCVariablePrjIdRelaObjLstCache == null) return false;
  let arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaObjLstCache;
  if (objGCVariablePrjIdRelaCond.GetConditions().length == 0)
    return arrGCVariablePrjIdRelaSel.length > 0 ? true : false;
  try {
    for (const objCondition of objGCVariablePrjIdRelaCond.GetConditions()) {
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
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCVariablePrjIdRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objGCVariablePrjIdRelaCond),
      gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function GCVariablePrjIdRela_IsExistCache(strVarId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  if (arrGCVariablePrjIdRelaObjLstCache == null) return false;
  try {
    const arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaObjLstCache.filter(
      (x) => x.varId == strVarId && x.prjId == strPrjId,
    );
    if (arrGCVariablePrjIdRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strVarId,
      gCVariablePrjIdRela_ConstructorName,
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
 * @param strVarId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCVariablePrjIdRela_IsExistAsync(
  strVarId: string,
  strPrjId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
      strPrjId,
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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
 * @param objGCVariablePrjIdRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function GCVariablePrjIdRela_GetRecCountByCondCache(
  objGCVariablePrjIdRelaCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrGCVariablePrjIdRelaObjLstCache = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  if (arrGCVariablePrjIdRelaObjLstCache == null) return 0;
  let arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaObjLstCache;
  if (objGCVariablePrjIdRelaCond.GetConditions().length == 0)
    return arrGCVariablePrjIdRelaSel.length;
  try {
    for (const objCondition of objGCVariablePrjIdRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariablePrjIdRelaSel = arrGCVariablePrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCVariablePrjIdRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCVariablePrjIdRelaCond),
      gCVariablePrjIdRela_ConstructorName,
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
export async function GCVariablePrjIdRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCVariablePrjIdRela_Controller, strAction);

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
        gCVariablePrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRela_ConstructorName,
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
export function GCVariablePrjIdRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCVariablePrjIdRela_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsGCVariablePrjIdRelaWApi.clsGCVariablePrjIdRelaWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.clsGCVariablePrjIdRelaWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsGCVariablePrjIdRelaEN._CurrTabName, strPrjId);
  switch (clsGCVariablePrjIdRelaEN.CacheModeId) {
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
  clsGCVariablePrjIdRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function GCVariablePrjIdRela_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsGCVariablePrjIdRelaWApi.GCVariablePrjIdRela_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsGCVariablePrjIdRelaWApi.GCVariablePrjIdRela_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsGCVariablePrjIdRelaEN._CurrTabName, strPrjId);
    switch (clsGCVariablePrjIdRelaEN.CacheModeId) {
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
    clsGCVariablePrjIdRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function GCVariablePrjIdRela_GetLastRefreshTime(): string {
  if (clsGCVariablePrjIdRelaEN._RefreshTimeLst.length == 0) return '';
  return clsGCVariablePrjIdRelaEN._RefreshTimeLst[
    clsGCVariablePrjIdRelaEN._RefreshTimeLst.length - 1
  ];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCVariablePrjIdRela_CheckPropertyNew(
  pobjGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.varId) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id(varId)]的长度不能超过8(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.varId}(clsGCVariablePrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.prjId) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.prjId}(clsGCVariablePrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.fldId) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.fldId}(clsGCVariablePrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.updUser) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.updUser}(clsGCVariablePrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.updDate}(clsGCVariablePrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.memo) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.memo}(clsGCVariablePrjIdRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.varId) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.varId &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id(varId)]的值:[${pobjGCVariablePrjIdRelaEN.varId}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.prjId) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.prjId &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjGCVariablePrjIdRelaEN.prjId}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.fldId) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.fldId &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjGCVariablePrjIdRelaEN.fldId}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.updUser) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.updUser &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjGCVariablePrjIdRelaEN.updUser}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.updDate) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.updDate &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGCVariablePrjIdRelaEN.updDate}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.memo) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.memo &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjGCVariablePrjIdRelaEN.memo}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.varId) == false &&
    pobjGCVariablePrjIdRelaEN.varId != '[nuull]' &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.varId) != 8
  ) {
    throw '(errid:Watl000415)字段[变量Id]作为外键字段,长度应该为8(In GCVariablePrjIdRela)!(clsGCVariablePrjIdRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCVariablePrjIdRela_CheckProperty4Update(
  pobjGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.varId) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id(varId)]的长度不能超过8(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.varId}(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.prjId) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.prjId}(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.fldId) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.fldId}(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.updUser) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.updUser}(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.updDate}(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.memo) == false &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In GCVariablePrjIdRela(GCVariablePrjIdRela))!值:${pobjGCVariablePrjIdRelaEN.memo}(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.varId) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.varId &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id(varId)]的值:[${pobjGCVariablePrjIdRelaEN.varId}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.prjId) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.prjId &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjGCVariablePrjIdRelaEN.prjId}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.fldId) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.fldId &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjGCVariablePrjIdRelaEN.fldId}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.updUser) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.updUser &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjGCVariablePrjIdRelaEN.updUser}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.updDate) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.updDate &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGCVariablePrjIdRelaEN.updDate}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.memo) == false &&
    undefined !== pobjGCVariablePrjIdRelaEN.memo &&
    tzDataType.isString(pobjGCVariablePrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjGCVariablePrjIdRelaEN.memo}], 非法,应该为字符型(In GCVariablePrjIdRela(GCVariablePrjIdRela))!(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.varId) === true ||
    pobjGCVariablePrjIdRelaEN.varId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[变量Id]不能为空(In GCVariablePrjIdRela)!(clsGCVariablePrjIdRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjGCVariablePrjIdRelaEN.varId) == false &&
    pobjGCVariablePrjIdRelaEN.varId != '[nuull]' &&
    GetStrLen(pobjGCVariablePrjIdRelaEN.varId) != 8
  ) {
    throw '(errid:Watl000418)字段[变量Id]作为外键字段,长度应该为8(In GCVariablePrjIdRela)!(clsGCVariablePrjIdRelaBL:CheckPropertyNew)';
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
export function GCVariablePrjIdRela_GetJSONStrByObj(
  pobjGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
): string {
  pobjGCVariablePrjIdRelaEN.sfUpdFldSetStr = pobjGCVariablePrjIdRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCVariablePrjIdRelaEN);
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
export function GCVariablePrjIdRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsGCVariablePrjIdRelaEN> {
  let arrGCVariablePrjIdRelaObjLst = new Array<clsGCVariablePrjIdRelaEN>();
  if (strJSON === '') {
    return arrGCVariablePrjIdRelaObjLst;
  }
  try {
    arrGCVariablePrjIdRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCVariablePrjIdRelaObjLst;
  }
  return arrGCVariablePrjIdRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCVariablePrjIdRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCVariablePrjIdRela_GetObjLstByJSONObjLst(
  arrGCVariablePrjIdRelaObjLstS: Array<clsGCVariablePrjIdRelaEN>,
): Array<clsGCVariablePrjIdRelaEN> {
  const arrGCVariablePrjIdRelaObjLst = new Array<clsGCVariablePrjIdRelaEN>();
  for (const objInFor of arrGCVariablePrjIdRelaObjLstS) {
    const obj1 = GCVariablePrjIdRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCVariablePrjIdRelaObjLst.push(obj1);
  }
  return arrGCVariablePrjIdRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCVariablePrjIdRela_GetObjByJSONStr(strJSON: string): clsGCVariablePrjIdRelaEN {
  let pobjGCVariablePrjIdRelaEN = new clsGCVariablePrjIdRelaEN();
  if (strJSON === '') {
    return pobjGCVariablePrjIdRelaEN;
  }
  try {
    pobjGCVariablePrjIdRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCVariablePrjIdRelaEN;
  }
  return pobjGCVariablePrjIdRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCVariablePrjIdRela_GetCombineCondition(
  objGCVariablePrjIdRelaCond: clsGCVariablePrjIdRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariablePrjIdRelaCond.dicFldComparisonOp,
      clsGCVariablePrjIdRelaEN.con_VarId,
    ) == true
  ) {
    const strComparisonOpVarId: string =
      objGCVariablePrjIdRelaCond.dicFldComparisonOp[clsGCVariablePrjIdRelaEN.con_VarId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariablePrjIdRelaEN.con_VarId,
      objGCVariablePrjIdRelaCond.varId,
      strComparisonOpVarId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariablePrjIdRelaCond.dicFldComparisonOp,
      clsGCVariablePrjIdRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objGCVariablePrjIdRelaCond.dicFldComparisonOp[clsGCVariablePrjIdRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariablePrjIdRelaEN.con_PrjId,
      objGCVariablePrjIdRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariablePrjIdRelaCond.dicFldComparisonOp,
      clsGCVariablePrjIdRelaEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objGCVariablePrjIdRelaCond.dicFldComparisonOp[clsGCVariablePrjIdRelaEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariablePrjIdRelaEN.con_FldId,
      objGCVariablePrjIdRelaCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariablePrjIdRelaCond.dicFldComparisonOp,
      clsGCVariablePrjIdRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCVariablePrjIdRelaCond.dicFldComparisonOp[clsGCVariablePrjIdRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariablePrjIdRelaEN.con_UpdUser,
      objGCVariablePrjIdRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariablePrjIdRelaCond.dicFldComparisonOp,
      clsGCVariablePrjIdRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCVariablePrjIdRelaCond.dicFldComparisonOp[clsGCVariablePrjIdRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariablePrjIdRelaEN.con_UpdDate,
      objGCVariablePrjIdRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariablePrjIdRelaCond.dicFldComparisonOp,
      clsGCVariablePrjIdRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objGCVariablePrjIdRelaCond.dicFldComparisonOp[clsGCVariablePrjIdRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariablePrjIdRelaEN.con_Memo,
      objGCVariablePrjIdRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCVariablePrjIdRelaENS:源对象
 * @param objGCVariablePrjIdRelaENT:目标对象
 */
export function GCVariablePrjIdRela_GetObjFromJsonObj(
  objGCVariablePrjIdRelaENS: clsGCVariablePrjIdRelaEN,
): clsGCVariablePrjIdRelaEN {
  const objGCVariablePrjIdRelaENT: clsGCVariablePrjIdRelaEN = new clsGCVariablePrjIdRelaEN();
  ObjectAssign(objGCVariablePrjIdRelaENT, objGCVariablePrjIdRelaENS);
  return objGCVariablePrjIdRelaENT;
}
