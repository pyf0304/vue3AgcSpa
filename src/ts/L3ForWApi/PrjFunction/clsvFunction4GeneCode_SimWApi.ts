/**
 * 类名:clsvFunction4GeneCode_SimWApi
 * 表名:vFunction4GeneCode_Sim(00050605)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/15 11:49:05
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v函数4GC_Sim(vFunction4GeneCode_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年10月15日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vFunction4GeneCode_Sim_Controller = 'vFunction4GeneCode_SimApi';
export const vFunction4GeneCode_Sim_ConstructorName = 'vFunction4GeneCode_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4GC:关键字
 * @returns 对象
 **/
export async function vFunction4GeneCode_Sim_GetObjByFuncId4GCAsync(
  strFuncId4GC: string,
): Promise<clsvFunction4GeneCode_SimEN | null> {
  const strThisFuncName = 'GetObjByFuncId4GCAsync';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunction4GeneCode_SimWApi.GetObjByFuncId4GCAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunction4GeneCode_SimWApi.GetObjByFuncId4GCAsync)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4GC';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
      const objvFunction4GeneCode_Sim = vFunction4GeneCode_Sim_GetObjFromJsonObj(returnObj);
      return objvFunction4GeneCode_Sim;
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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strFuncId4GC:所给的关键字
 * @returns 对象
 */
export async function vFunction4GeneCode_Sim_GetObjByFuncId4GCCache(
  strFuncId4GC: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncId4GCCache';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunction4GeneCode_SimWApi.GetObjByFuncId4GCCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunction4GeneCode_SimWApi.GetObjByFuncId4GCCache)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
  try {
    const arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache.filter(
      (x) => x.funcId4GC == strFuncId4GC,
    );
    let objvFunction4GeneCode_Sim: clsvFunction4GeneCode_SimEN;
    if (arrvFunction4GeneCode_SimSel.length > 0) {
      objvFunction4GeneCode_Sim = arrvFunction4GeneCode_SimSel[0];
      return objvFunction4GeneCode_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFunction4GeneCode_SimConst = await vFunction4GeneCode_Sim_GetObjByFuncId4GCAsync(
          strFuncId4GC,
        );
        if (objvFunction4GeneCode_SimConst != null) {
          vFunction4GeneCode_Sim_ReFreshThisCache();
          return objvFunction4GeneCode_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4GC,
      vFunction4GeneCode_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFuncId4GC:所给的关键字
 * @returns 对象
 */
export async function vFunction4GeneCode_Sim_GetObjByFuncId4GClocalStorage(strFuncId4GC: string) {
  const strThisFuncName = 'GetObjByFuncId4GClocalStorage';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunction4GeneCode_SimWApi.GetObjByFuncId4GClocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunction4GeneCode_SimWApi.GetObjByFuncId4GClocalStorage)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFunction4GeneCode_SimEN._CurrTabName, strFuncId4GC);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFunction4GeneCode_SimCache: clsvFunction4GeneCode_SimEN = JSON.parse(strTempObj);
    return objvFunction4GeneCode_SimCache;
  }
  try {
    const objvFunction4GeneCode_Sim = await vFunction4GeneCode_Sim_GetObjByFuncId4GCAsync(
      strFuncId4GC,
    );
    if (objvFunction4GeneCode_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFunction4GeneCode_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFunction4GeneCode_Sim;
    }
    return objvFunction4GeneCode_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4GC,
      vFunction4GeneCode_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFuncId4GC:所给的关键字
 * @returns 对象
 */
export async function vFunction4GeneCode_Sim_GetNameByFuncId4GCCache(strFuncId4GC: string) {
  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunction4GeneCode_SimWApi.GetNameByFuncId4GCCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunction4GeneCode_SimWApi.GetNameByFuncId4GCCache)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
  if (arrvFunction4GeneCode_SimObjLstCache == null) return '';
  try {
    const arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache.filter(
      (x) => x.funcId4GC == strFuncId4GC,
    );
    let objvFunction4GeneCode_Sim: clsvFunction4GeneCode_SimEN;
    if (arrvFunction4GeneCode_SimSel.length > 0) {
      objvFunction4GeneCode_Sim = arrvFunction4GeneCode_SimSel[0];
      return objvFunction4GeneCode_Sim.funcName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFuncId4GC,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vFunction4GeneCode_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvFunction4GeneCode_SimEN.con_FuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFunction4GeneCode_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFunction4GeneCode_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncId4GC = strInValue;
  if (IsNullOrEmpty(strFuncId4GC) == true) {
    return '';
  }
  const objvFunction4GeneCode_Sim = await vFunction4GeneCode_Sim_GetObjByFuncId4GCCache(
    strFuncId4GC,
  );
  if (objvFunction4GeneCode_Sim == null) return '';
  if (objvFunction4GeneCode_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvFunction4GeneCode_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4GeneCode_Sim_SortFunDefa(
  a: clsvFunction4GeneCode_SimEN,
  b: clsvFunction4GeneCode_SimEN,
): number {
  return a.funcId4GC.localeCompare(b.funcId4GC);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4GeneCode_Sim_SortFunDefa2Fld(
  a: clsvFunction4GeneCode_SimEN,
  b: clsvFunction4GeneCode_SimEN,
): number {
  if (a.funcName == b.funcName) return a.funcId4Code.localeCompare(b.funcId4Code);
  else return a.funcName.localeCompare(b.funcName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4GeneCode_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunction4GeneCode_SimEN.con_FuncId4GC:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsvFunction4GeneCode_SimEN.con_FuncName:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsvFunction4GeneCode_SimEN.con_FuncId4Code:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          if (a.funcId4Code == null) return -1;
          if (b.funcId4Code == null) return 1;
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsvFunction4GeneCode_SimEN.con_SqlDsTypeId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsvFunction4GeneCode_SimEN.con_FeatureId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          if (a.featureId == null) return -1;
          if (b.featureId == null) return 1;
          return a.featureId.localeCompare(b.featureId);
        };
      case clsvFunction4GeneCode_SimEN.con_InUse:
        return (a: clsvFunction4GeneCode_SimEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvFunction4GeneCode_SimEN.con_FuncGCTypeId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return a.funcGCTypeId.localeCompare(b.funcGCTypeId);
        };
      case clsvFunction4GeneCode_SimEN.con_TemplateNum:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return a.templateNum - b.templateNum;
        };
      case clsvFunction4GeneCode_SimEN.con_ProgLangTypeId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          if (a.funcCodeTypeId == null) return -1;
          if (b.funcCodeTypeId == null) return 1;
          return a.funcCodeTypeId.localeCompare(b.funcCodeTypeId);
        };
      case clsvFunction4GeneCode_SimEN.con_UsedTimes:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return a.usedTimes - b.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunction4GeneCode_Sim]中不存在!(in ${vFunction4GeneCode_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFunction4GeneCode_SimEN.con_FuncId4GC:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsvFunction4GeneCode_SimEN.con_FuncName:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsvFunction4GeneCode_SimEN.con_FuncId4Code:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          if (b.funcId4Code == null) return -1;
          if (a.funcId4Code == null) return 1;
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsvFunction4GeneCode_SimEN.con_SqlDsTypeId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsvFunction4GeneCode_SimEN.con_FeatureId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          if (b.featureId == null) return -1;
          if (a.featureId == null) return 1;
          return b.featureId.localeCompare(a.featureId);
        };
      case clsvFunction4GeneCode_SimEN.con_InUse:
        return (b: clsvFunction4GeneCode_SimEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvFunction4GeneCode_SimEN.con_FuncGCTypeId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return b.funcGCTypeId.localeCompare(a.funcGCTypeId);
        };
      case clsvFunction4GeneCode_SimEN.con_TemplateNum:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return b.templateNum - a.templateNum;
        };
      case clsvFunction4GeneCode_SimEN.con_ProgLangTypeId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          if (b.funcCodeTypeId == null) return -1;
          if (a.funcCodeTypeId == null) return 1;
          return b.funcCodeTypeId.localeCompare(a.funcCodeTypeId);
        };
      case clsvFunction4GeneCode_SimEN.con_UsedTimes:
        return (a: clsvFunction4GeneCode_SimEN, b: clsvFunction4GeneCode_SimEN) => {
          return b.usedTimes - a.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunction4GeneCode_Sim]中不存在!(in ${vFunction4GeneCode_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFunction4GeneCode_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFunction4GeneCode_SimEN.con_FuncId4GC:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.funcId4GC === value;
      };
    case clsvFunction4GeneCode_SimEN.con_FuncName:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.funcName === value;
      };
    case clsvFunction4GeneCode_SimEN.con_FuncId4Code:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.funcId4Code === value;
      };
    case clsvFunction4GeneCode_SimEN.con_SqlDsTypeId:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsvFunction4GeneCode_SimEN.con_FeatureId:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.featureId === value;
      };
    case clsvFunction4GeneCode_SimEN.con_InUse:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.inUse === value;
      };
    case clsvFunction4GeneCode_SimEN.con_FuncGCTypeId:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.funcGCTypeId === value;
      };
    case clsvFunction4GeneCode_SimEN.con_TemplateNum:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.templateNum === value;
      };
    case clsvFunction4GeneCode_SimEN.con_ProgLangTypeId:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.progLangTypeId === value;
      };
    case clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.funcCodeTypeId === value;
      };
    case clsvFunction4GeneCode_SimEN.con_UsedTimes:
      return (obj: clsvFunction4GeneCode_SimEN) => {
        return obj.usedTimes === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFunction4GeneCode_Sim]中不存在!(in ${vFunction4GeneCode_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vFunction4GeneCode_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvFunction4GeneCode_SimEN.con_FuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFunction4GeneCode_Sim = await vFunction4GeneCode_Sim_GetObjLstCache();
  if (arrvFunction4GeneCode_Sim == null) return [];
  let arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFunction4GeneCode_SimSel.length == 0) return [];
  return arrvFunction4GeneCode_SimSel.map((x) => x.funcId4GC);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFunction4GeneCode_Sim_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFunction4GeneCode_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFunction4GeneCode_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
      const objvFunction4GeneCode_Sim = vFunction4GeneCode_Sim_GetObjFromJsonObj(returnObj);
      return objvFunction4GeneCode_Sim;
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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFunction4GeneCode_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvFunction4GeneCode_SimEN.WhereFormat) == false) {
    strWhereCond = clsvFunction4GeneCode_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvFunction4GeneCode_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunction4GeneCode_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFunction4GeneCode_SimExObjLstCache: Array<clsvFunction4GeneCode_SimEN> =
      CacheHelper.Get(strKey);
    const arrvFunction4GeneCode_SimObjLstT = vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(
      arrvFunction4GeneCode_SimExObjLstCache,
    );
    return arrvFunction4GeneCode_SimObjLstT;
  }
  try {
    const arrvFunction4GeneCode_SimExObjLst = await vFunction4GeneCode_Sim_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvFunction4GeneCode_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunction4GeneCode_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunction4GeneCode_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFunction4GeneCode_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvFunction4GeneCode_SimEN.WhereFormat) == false) {
    strWhereCond = clsvFunction4GeneCode_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvFunction4GeneCode_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunction4GeneCode_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFunction4GeneCode_SimExObjLstCache: Array<clsvFunction4GeneCode_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvFunction4GeneCode_SimObjLstT = vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(
      arrvFunction4GeneCode_SimExObjLstCache,
    );
    return arrvFunction4GeneCode_SimObjLstT;
  }
  try {
    const arrvFunction4GeneCode_SimExObjLst = await vFunction4GeneCode_Sim_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvFunction4GeneCode_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunction4GeneCode_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunction4GeneCode_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFunction4GeneCode_SimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFunction4GeneCode_SimObjLstCache: Array<clsvFunction4GeneCode_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvFunction4GeneCode_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFunction4GeneCode_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFunction4GeneCode_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
          vFunction4GeneCode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFunction4GeneCode_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvFunction4GeneCode_SimEN.WhereFormat) == false) {
    strWhereCond = clsvFunction4GeneCode_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvFunction4GeneCode_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunction4GeneCode_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFunction4GeneCode_SimExObjLstCache: Array<clsvFunction4GeneCode_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvFunction4GeneCode_SimObjLstT = vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(
      arrvFunction4GeneCode_SimExObjLstCache,
    );
    return arrvFunction4GeneCode_SimObjLstT;
  }
  try {
    const arrvFunction4GeneCode_SimExObjLst = await vFunction4GeneCode_Sim_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvFunction4GeneCode_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunction4GeneCode_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunction4GeneCode_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFunction4GeneCode_SimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFunction4GeneCode_SimObjLstCache: Array<clsvFunction4GeneCode_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvFunction4GeneCode_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunction4GeneCode_Sim_GetObjLstCache(): Promise<
  Array<clsvFunction4GeneCode_SimEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvFunction4GeneCode_SimObjLstCache;
  switch (clsvFunction4GeneCode_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstClientCache();
      break;
    default:
      arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstClientCache();
      break;
  }
  return arrvFunction4GeneCode_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunction4GeneCode_Sim_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFunction4GeneCode_SimObjLstCache;
  switch (clsvFunction4GeneCode_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFunction4GeneCode_SimObjLstCache =
        await vFunction4GeneCode_Sim_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvFunction4GeneCode_SimObjLstCache =
        await vFunction4GeneCode_Sim_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvFunction4GeneCode_SimObjLstCache = null;
      break;
    default:
      arrvFunction4GeneCode_SimObjLstCache = null;
      break;
  }
  return arrvFunction4GeneCode_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncId4GCCond:条件对象
 * @returns 对象列表子集
 */
export async function vFunction4GeneCode_Sim_GetSubObjLstCache(
  objvFunction4GeneCode_SimCond: clsvFunction4GeneCode_SimEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
  let arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache;
  if (
    objvFunction4GeneCode_SimCond.sfFldComparisonOp == null ||
    objvFunction4GeneCode_SimCond.sfFldComparisonOp == ''
  )
    return arrvFunction4GeneCode_SimSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunction4GeneCode_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunction4GeneCode_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunction4GeneCode_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunction4GeneCode_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFunction4GeneCode_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFunction4GeneCode_SimCond),
      vFunction4GeneCode_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunction4GeneCode_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncId4GC:关键字列表
 * @returns 对象列表
 **/
export async function vFunction4GeneCode_Sim_GetObjLstByFuncId4GCLstAsync(
  arrFuncId4GC: Array<string>,
): Promise<Array<clsvFunction4GeneCode_SimEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4GCLstAsync';
  const strAction = 'GetObjLstByFuncId4GCLst';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
          vFunction4GeneCode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrFuncId4GCLst:关键字列表
 * @returns 对象列表
 */
export async function vFunction4GeneCode_Sim_GetObjLstByFuncId4GCLstCache(
  arrFuncId4GCLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFuncId4GCLstCache';
  try {
    const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
    const arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache.filter(
      (x) => arrFuncId4GCLst.indexOf(x.funcId4GC) > -1,
    );
    return arrvFunction4GeneCode_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncId4GCLst.join(','),
      vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFunction4GeneCode_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
          vFunction4GeneCode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFunction4GeneCode_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
          vFunction4GeneCode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunction4GeneCode_SimEN>();
  const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
  if (arrvFunction4GeneCode_SimObjLstCache.length == 0) return arrvFunction4GeneCode_SimObjLstCache;
  let arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFunction4GeneCode_SimCond = new clsvFunction4GeneCode_SimEN();
  ObjectAssign(objvFunction4GeneCode_SimCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFunction4GeneCode_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunction4GeneCode_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunction4GeneCode_SimSel.length == 0) return arrvFunction4GeneCode_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.sort(
        vFunction4GeneCode_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.sort(objPagerPara.sortFun);
    }
    arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.slice(intStart, intEnd);
    return arrvFunction4GeneCode_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFunction4GeneCode_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunction4GeneCode_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFunction4GeneCode_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunction4GeneCode_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunction4GeneCode_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
          vFunction4GeneCode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
 * @param objstrFuncId4GCCond:条件对象
 * @returns 对象列表子集
 */
export async function vFunction4GeneCode_Sim_IsExistRecordCache(
  objvFunction4GeneCode_SimCond: clsvFunction4GeneCode_SimEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
  if (arrvFunction4GeneCode_SimObjLstCache == null) return false;
  let arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache;
  if (
    objvFunction4GeneCode_SimCond.sfFldComparisonOp == null ||
    objvFunction4GeneCode_SimCond.sfFldComparisonOp == ''
  )
    return arrvFunction4GeneCode_SimSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunction4GeneCode_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunction4GeneCode_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunction4GeneCode_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunction4GeneCode_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunction4GeneCode_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFunction4GeneCode_SimCond),
      vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
 * @param strFuncId4GC:所给的关键字
 * @returns 对象
 */
export async function vFunction4GeneCode_Sim_IsExistCache(strFuncId4GC: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
  if (arrvFunction4GeneCode_SimObjLstCache == null) return false;
  try {
    const arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache.filter(
      (x) => x.funcId4GC == strFuncId4GC,
    );
    if (arrvFunction4GeneCode_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncId4GC,
      vFunction4GeneCode_Sim_ConstructorName,
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
 * @param strFuncId4GC:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFunction4GeneCode_Sim_IsExistAsync(strFuncId4GC: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
export async function vFunction4GeneCode_Sim_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_Sim_Controller, strAction);

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
        vFunction4GeneCode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_Sim_ConstructorName,
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
 * @param objvFunction4GeneCode_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFunction4GeneCode_Sim_GetRecCountByCondCache(
  objvFunction4GeneCode_SimCond: clsvFunction4GeneCode_SimEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
  if (arrvFunction4GeneCode_SimObjLstCache == null) return 0;
  let arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache;
  if (
    objvFunction4GeneCode_SimCond.sfFldComparisonOp == null ||
    objvFunction4GeneCode_SimCond.sfFldComparisonOp == ''
  )
    return arrvFunction4GeneCode_SimSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunction4GeneCode_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunction4GeneCode_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunction4GeneCode_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunction4GeneCode_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFunction4GeneCode_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFunction4GeneCode_SimCond),
      vFunction4GeneCode_Sim_ConstructorName,
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
export function vFunction4GeneCode_Sim_GetWebApiUrl(
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
export function vFunction4GeneCode_Sim_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvFunction4GeneCode_SimEN._CurrTabName;
    switch (clsvFunction4GeneCode_SimEN.CacheModeId) {
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
    clsvFunction4GeneCode_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vFunction4GeneCode_Sim_GetLastRefreshTime(): string {
  if (clsvFunction4GeneCode_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvFunction4GeneCode_SimEN._RefreshTimeLst[
    clsvFunction4GeneCode_SimEN._RefreshTimeLst.length - 1
  ];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strFuncCodeTypeId:
*/
export async function vFunction4GeneCode_Sim_BindDdl_FuncId4GCByFuncCodeTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strFuncCodeTypeId: string,
) {
  if (IsNullOrEmpty(strFuncCodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncCodeTypeId]不能为空！(In clsvFunction4GeneCode_SimWApi.BindDdl_FuncId4GCByFuncCodeTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncCodeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFuncCodeTypeId]的长度:[{0}]不正确！(clsvFunction4GeneCode_SimWApi.BindDdl_FuncId4GCByFuncCodeTypeIdInDiv)',
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
  let arrObjLstSel = await vFunction4GeneCode_Sim_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.funcCodeTypeId == strFuncCodeTypeId);
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvFunction4GeneCode_SimEN.con_FuncId4GC,
    clsvFunction4GeneCode_SimEN.con_FuncName,
    'v函数4GC_Sim',
  );
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunction4GeneCode_Sim_GetJSONStrByObj(
  pobjvFunction4GeneCode_SimEN: clsvFunction4GeneCode_SimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFunction4GeneCode_SimEN);
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
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFunction4GeneCode_Sim_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFunction4GeneCode_SimEN> {
  let arrvFunction4GeneCode_SimObjLst = new Array<clsvFunction4GeneCode_SimEN>();
  if (strJSON === '') {
    return arrvFunction4GeneCode_SimObjLst;
  }
  try {
    arrvFunction4GeneCode_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFunction4GeneCode_SimObjLst;
  }
  return arrvFunction4GeneCode_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFunction4GeneCode_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFunction4GeneCode_Sim_GetObjLstByJSONObjLst(
  arrvFunction4GeneCode_SimObjLstS: Array<clsvFunction4GeneCode_SimEN>,
): Array<clsvFunction4GeneCode_SimEN> {
  const arrvFunction4GeneCode_SimObjLst = new Array<clsvFunction4GeneCode_SimEN>();
  for (const objInFor of arrvFunction4GeneCode_SimObjLstS) {
    const obj1 = vFunction4GeneCode_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFunction4GeneCode_SimObjLst.push(obj1);
  }
  return arrvFunction4GeneCode_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunction4GeneCode_Sim_GetObjByJSONStr(
  strJSON: string,
): clsvFunction4GeneCode_SimEN {
  let pobjvFunction4GeneCode_SimEN = new clsvFunction4GeneCode_SimEN();
  if (strJSON === '') {
    return pobjvFunction4GeneCode_SimEN;
  }
  try {
    pobjvFunction4GeneCode_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFunction4GeneCode_SimEN;
  }
  return pobjvFunction4GeneCode_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFunction4GeneCode_Sim_GetCombineCondition(
  objvFunction4GeneCode_SimCond: clsvFunction4GeneCode_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_FuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[clsvFunction4GeneCode_SimEN.con_FuncId4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCode_SimEN.con_FuncId4GC,
      objvFunction4GeneCode_SimCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[clsvFunction4GeneCode_SimEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCode_SimEN.con_FuncName,
      objvFunction4GeneCode_SimCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[clsvFunction4GeneCode_SimEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCode_SimEN.con_FuncId4Code,
      objvFunction4GeneCode_SimCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[clsvFunction4GeneCode_SimEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCode_SimEN.con_SqlDsTypeId,
      objvFunction4GeneCode_SimCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[clsvFunction4GeneCode_SimEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCode_SimEN.con_FeatureId,
      objvFunction4GeneCode_SimCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_InUse,
    ) == true
  ) {
    if (objvFunction4GeneCode_SimCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunction4GeneCode_SimEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunction4GeneCode_SimEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_FuncGCTypeId,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeId: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[
        clsvFunction4GeneCode_SimEN.con_FuncGCTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCode_SimEN.con_FuncGCTypeId,
      objvFunction4GeneCode_SimCond.funcGCTypeId,
      strComparisonOpFuncGCTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_TemplateNum,
    ) == true
  ) {
    const strComparisonOpTemplateNum: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[clsvFunction4GeneCode_SimEN.con_TemplateNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4GeneCode_SimEN.con_TemplateNum,
      objvFunction4GeneCode_SimCond.templateNum,
      strComparisonOpTemplateNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[
        clsvFunction4GeneCode_SimEN.con_ProgLangTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCode_SimEN.con_ProgLangTypeId,
      objvFunction4GeneCode_SimCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId,
    ) == true
  ) {
    const strComparisonOpFuncCodeTypeId: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[
        clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId,
      objvFunction4GeneCode_SimCond.funcCodeTypeId,
      strComparisonOpFuncCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4GeneCode_SimCond.dicFldComparisonOp,
      clsvFunction4GeneCode_SimEN.con_UsedTimes,
    ) == true
  ) {
    const strComparisonOpUsedTimes: string =
      objvFunction4GeneCode_SimCond.dicFldComparisonOp[clsvFunction4GeneCode_SimEN.con_UsedTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4GeneCode_SimEN.con_UsedTimes,
      objvFunction4GeneCode_SimCond.usedTimes,
      strComparisonOpUsedTimes,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFunction4GeneCode_SimENS:源对象
 * @param objvFunction4GeneCode_SimENT:目标对象
 */
export function vFunction4GeneCode_Sim_GetObjFromJsonObj(
  objvFunction4GeneCode_SimENS: clsvFunction4GeneCode_SimEN,
): clsvFunction4GeneCode_SimEN {
  const objvFunction4GeneCode_SimENT: clsvFunction4GeneCode_SimEN =
    new clsvFunction4GeneCode_SimEN();
  ObjectAssign(objvFunction4GeneCode_SimENT, objvFunction4GeneCode_SimENS);
  return objvFunction4GeneCode_SimENT;
}
