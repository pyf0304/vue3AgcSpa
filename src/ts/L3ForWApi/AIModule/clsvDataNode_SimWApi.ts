/**
 * 类名:clsvDataNode_SimWApi
 * 表名:vDataNode_Sim(00050592)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/26 02:43:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vDataNode_Sim(vDataNode_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vDataNode_Sim_Controller = 'vDataNode_SimApi';
export const vDataNode_Sim_ConstructorName = 'vDataNode_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngDataNodeId:关键字
 * @returns 对象
 **/
export async function vDataNode_Sim_GetObjByDataNodeIdAsync(
  lngDataNodeId: number,
): Promise<clsvDataNode_SimEN | null> {
  const strThisFuncName = 'GetObjByDataNodeIdAsync';

  if (lngDataNodeId == 0) {
    const strMsg = Format(
      '参数:[lngDataNodeId]不能为空!(In clsvDataNode_SimWApi.GetObjByDataNodeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDataNodeId';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngDataNodeId,
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
      const objvDataNode_Sim = vDataNode_Sim_GetObjFromJsonObj(returnObj);
      return objvDataNode_Sim;
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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
 * @param lngDataNodeId:所给的关键字
 * @returns 对象
 */
export async function vDataNode_Sim_GetObjByDataNodeIdlocalStorage(lngDataNodeId: number) {
  const strThisFuncName = 'GetObjByDataNodeIdlocalStorage';

  if (lngDataNodeId == 0) {
    const strMsg = Format(
      '参数:[lngDataNodeId]不能为空!(In clsvDataNode_SimWApi.GetObjByDataNodeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvDataNode_SimEN._CurrTabName, lngDataNodeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvDataNode_SimCache: clsvDataNode_SimEN = JSON.parse(strTempObj);
    return objvDataNode_SimCache;
  }
  try {
    const objvDataNode_Sim = await vDataNode_Sim_GetObjByDataNodeIdAsync(lngDataNodeId);
    if (objvDataNode_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvDataNode_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvDataNode_Sim;
    }
    return objvDataNode_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngDataNodeId,
      vDataNode_Sim_ConstructorName,
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
 * @param lngDataNodeId:所给的关键字
 * @returns 对象
 */
export async function vDataNode_Sim_GetObjByDataNodeIdCache(
  lngDataNodeId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDataNodeIdCache';

  if (lngDataNodeId == 0) {
    const strMsg = Format(
      '参数:[lngDataNodeId]不能为空!(In clsvDataNode_SimWApi.GetObjByDataNodeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter(
      (x) => x.dataNodeId == lngDataNodeId,
    );
    let objvDataNode_Sim: clsvDataNode_SimEN;
    if (arrvDataNode_SimSel.length > 0) {
      objvDataNode_Sim = arrvDataNode_SimSel[0];
      return objvDataNode_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvDataNode_SimConst = await vDataNode_Sim_GetObjByDataNodeIdAsync(lngDataNodeId);
        if (objvDataNode_SimConst != null) {
          vDataNode_Sim_ReFreshThisCache(strPrjId);
          return objvDataNode_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngDataNodeId,
      vDataNode_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDataNode_Sim_SortFunDefa(a: clsvDataNode_SimEN, b: clsvDataNode_SimEN): number {
  return a.dataNodeId - b.dataNodeId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDataNode_Sim_SortFunDefa2Fld(
  a: clsvDataNode_SimEN,
  b: clsvDataNode_SimEN,
): number {
  if (a.dataNodeName == b.dataNodeName) return a.tabId.localeCompare(b.tabId);
  else return a.dataNodeName.localeCompare(b.dataNodeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDataNode_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvDataNode_SimEN.con_DataNodeId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.dataNodeId - b.dataNodeId;
        };
      case clsvDataNode_SimEN.con_DataNodeName:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          if (a.dataNodeName == null) return -1;
          if (b.dataNodeName == null) return 1;
          return a.dataNodeName.localeCompare(b.dataNodeName);
        };
      case clsvDataNode_SimEN.con_TabId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvDataNode_SimEN.con_FldId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsvDataNode_SimEN.con_KeyFldLst:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          if (a.keyFldLst == null) return -1;
          if (b.keyFldLst == null) return 1;
          return a.keyFldLst.localeCompare(b.keyFldLst);
        };
      case clsvDataNode_SimEN.con_DataNodeTypeId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.dataNodeTypeId.localeCompare(b.dataNodeTypeId);
        };
      case clsvDataNode_SimEN.con_VersionNo:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.versionNo - b.versionNo;
        };
      case clsvDataNode_SimEN.con_PrjId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvDataNode_SimEN.con_PosX:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.posX - b.posX;
        };
      case clsvDataNode_SimEN.con_PosY:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.posY - b.posY;
        };
      case clsvDataNode_SimEN.con_UsedTimes:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return a.usedTimes - b.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDataNode_Sim]中不存在!(in ${vDataNode_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvDataNode_SimEN.con_DataNodeId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.dataNodeId - a.dataNodeId;
        };
      case clsvDataNode_SimEN.con_DataNodeName:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          if (b.dataNodeName == null) return -1;
          if (a.dataNodeName == null) return 1;
          return b.dataNodeName.localeCompare(a.dataNodeName);
        };
      case clsvDataNode_SimEN.con_TabId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvDataNode_SimEN.con_FldId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsvDataNode_SimEN.con_KeyFldLst:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          if (b.keyFldLst == null) return -1;
          if (a.keyFldLst == null) return 1;
          return b.keyFldLst.localeCompare(a.keyFldLst);
        };
      case clsvDataNode_SimEN.con_DataNodeTypeId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.dataNodeTypeId.localeCompare(a.dataNodeTypeId);
        };
      case clsvDataNode_SimEN.con_VersionNo:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.versionNo - a.versionNo;
        };
      case clsvDataNode_SimEN.con_PrjId:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvDataNode_SimEN.con_PosX:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.posX - a.posX;
        };
      case clsvDataNode_SimEN.con_PosY:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.posY - a.posY;
        };
      case clsvDataNode_SimEN.con_UsedTimes:
        return (a: clsvDataNode_SimEN, b: clsvDataNode_SimEN) => {
          return b.usedTimes - a.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDataNode_Sim]中不存在!(in ${vDataNode_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param lngDataNodeId:所给的关键字
 * @returns 对象
 */
export async function vDataNode_Sim_GetNameByDataNodeIdCache(
  lngDataNodeId: number,
  strPrjId: string,
) {
  if (lngDataNodeId == 0) {
    const strMsg = Format(
      '参数:[lngDataNodeId]不能为空!(In clsvDataNode_SimWApi.GetNameByDataNodeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  if (arrvDataNode_SimObjLstCache == null) return '';
  try {
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter(
      (x) => x.dataNodeId == lngDataNodeId,
    );
    let objvDataNode_Sim: clsvDataNode_SimEN;
    if (arrvDataNode_SimSel.length > 0) {
      objvDataNode_Sim = arrvDataNode_SimSel[0];
      return objvDataNode_Sim.dataNodeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      lngDataNodeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vDataNode_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvDataNode_SimEN.con_DataNodeId:
      return (obj: clsvDataNode_SimEN) => {
        return obj.dataNodeId === value;
      };
    case clsvDataNode_SimEN.con_DataNodeName:
      return (obj: clsvDataNode_SimEN) => {
        return obj.dataNodeName === value;
      };
    case clsvDataNode_SimEN.con_TabId:
      return (obj: clsvDataNode_SimEN) => {
        return obj.tabId === value;
      };
    case clsvDataNode_SimEN.con_FldId:
      return (obj: clsvDataNode_SimEN) => {
        return obj.fldId === value;
      };
    case clsvDataNode_SimEN.con_KeyFldLst:
      return (obj: clsvDataNode_SimEN) => {
        return obj.keyFldLst === value;
      };
    case clsvDataNode_SimEN.con_DataNodeTypeId:
      return (obj: clsvDataNode_SimEN) => {
        return obj.dataNodeTypeId === value;
      };
    case clsvDataNode_SimEN.con_VersionNo:
      return (obj: clsvDataNode_SimEN) => {
        return obj.versionNo === value;
      };
    case clsvDataNode_SimEN.con_PrjId:
      return (obj: clsvDataNode_SimEN) => {
        return obj.prjId === value;
      };
    case clsvDataNode_SimEN.con_PosX:
      return (obj: clsvDataNode_SimEN) => {
        return obj.posX === value;
      };
    case clsvDataNode_SimEN.con_PosY:
      return (obj: clsvDataNode_SimEN) => {
        return obj.posY === value;
      };
    case clsvDataNode_SimEN.con_UsedTimes:
      return (obj: clsvDataNode_SimEN) => {
        return obj.usedTimes === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vDataNode_Sim]中不存在!(in ${vDataNode_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vDataNode_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvDataNode_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvDataNode_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvDataNode_SimEN.con_DataNodeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvDataNode_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvDataNode_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngDataNodeId = Number(strInValue);
  if (lngDataNodeId == 0) {
    return '';
  }
  const objvDataNode_Sim = await vDataNode_Sim_GetObjByDataNodeIdCache(
    lngDataNodeId,
    strPrjIdClassfy,
  );
  if (objvDataNode_Sim == null) return '';
  if (objvDataNode_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvDataNode_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vDataNode_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvDataNode_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvDataNode_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvDataNode_SimEN.con_DataNodeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvDataNode_Sim = await vDataNode_Sim_GetObjLstCache(strPrjIdClassfy);
  if (arrvDataNode_Sim == null) return [];
  let arrvDataNode_SimSel = arrvDataNode_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvDataNode_SimSel.length == 0) return [];
  return arrvDataNode_SimSel.map((x) => x.dataNodeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vDataNode_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvDataNode_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
      const objvDataNode_Sim = vDataNode_Sim_GetObjFromJsonObj(returnObj);
      return objvDataNode_Sim;
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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDataNode_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDataNode_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDataNode_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDataNode_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDataNode_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvDataNode_SimExObjLstCache: Array<clsvDataNode_SimEN> = CacheHelper.Get(strKey);
    const arrvDataNode_SimObjLstT = vDataNode_Sim_GetObjLstByJSONObjLst(
      arrvDataNode_SimExObjLstCache,
    );
    return arrvDataNode_SimObjLstT;
  }
  try {
    const arrvDataNode_SimExObjLst = await vDataNode_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvDataNode_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDataNode_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDataNode_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDataNode_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDataNode_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvDataNode_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDataNode_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDataNode_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDataNode_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvDataNode_SimExObjLstCache: Array<clsvDataNode_SimEN> = JSON.parse(strTempObjLst);
    const arrvDataNode_SimObjLstT = vDataNode_Sim_GetObjLstByJSONObjLst(
      arrvDataNode_SimExObjLstCache,
    );
    return arrvDataNode_SimObjLstT;
  }
  try {
    const arrvDataNode_SimExObjLst = await vDataNode_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvDataNode_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvDataNode_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDataNode_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDataNode_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvDataNode_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvDataNode_SimObjLstCache: Array<clsvDataNode_SimEN> = JSON.parse(strTempObjLst);
    return arrvDataNode_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vDataNode_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvDataNode_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
          vDataNode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDataNode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDataNode_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDataNode_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvDataNode_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDataNode_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDataNode_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDataNode_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvDataNode_SimExObjLstCache: Array<clsvDataNode_SimEN> = JSON.parse(strTempObjLst);
    const arrvDataNode_SimObjLstT = vDataNode_Sim_GetObjLstByJSONObjLst(
      arrvDataNode_SimExObjLstCache,
    );
    return arrvDataNode_SimObjLstT;
  }
  try {
    const arrvDataNode_SimExObjLst = await vDataNode_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvDataNode_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvDataNode_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDataNode_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDataNode_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvDataNode_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvDataNode_SimObjLstCache: Array<clsvDataNode_SimEN> = JSON.parse(strTempObjLst);
    return arrvDataNode_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vDataNode_Sim_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvDataNode_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvDataNode_SimWApi.vDataNode_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvDataNode_SimWApi.vDataNode_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvDataNode_SimObjLstCache;
  switch (clsvDataNode_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvDataNode_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vDataNode_Sim_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvDataNode_SimObjLstCache;
  switch (clsvDataNode_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvDataNode_SimObjLstCache = null;
      break;
    default:
      arrvDataNode_SimObjLstCache = null;
      break;
  }
  return arrvDataNode_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngDataNodeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vDataNode_Sim_GetSubObjLstCache(
  objvDataNode_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  let arrvDataNode_SimSel = arrvDataNode_SimObjLstCache;
  if (objvDataNode_SimCond.GetConditions().length == 0) return arrvDataNode_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvDataNode_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvDataNode_SimSel = arrvDataNode_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvDataNode_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvDataNode_SimCond),
      vDataNode_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvDataNode_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDataNodeId:关键字列表
 * @returns 对象列表
 **/
export async function vDataNode_Sim_GetObjLstByDataNodeIdLstAsync(
  arrDataNodeId: Array<string>,
): Promise<Array<clsvDataNode_SimEN>> {
  const strThisFuncName = 'GetObjLstByDataNodeIdLstAsync';
  const strAction = 'GetObjLstByDataNodeIdLst';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDataNodeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vDataNode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDataNode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
 * @param arrlngDataNodeIdLst:关键字列表
 * @returns 对象列表
 */
export async function vDataNode_Sim_GetObjLstByDataNodeIdLstCache(
  arrDataNodeIdLst: Array<number>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByDataNodeIdLstCache';
  try {
    const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter(
      (x) => arrDataNodeIdLst.indexOf(x.dataNodeId) > -1,
    );
    return arrvDataNode_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDataNodeIdLst.join(','),
      vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvDataNode_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
          vDataNode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDataNode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvDataNode_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
          vDataNode_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDataNode_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objlngDataNodeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vDataNode_Sim_IsExistRecordCache(
  objvDataNode_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  if (arrvDataNode_SimObjLstCache == null) return false;
  let arrvDataNode_SimSel = arrvDataNode_SimObjLstCache;
  if (objvDataNode_SimCond.GetConditions().length == 0)
    return arrvDataNode_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvDataNode_SimCond.GetConditions()) {
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
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvDataNode_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvDataNode_SimCond),
      vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
 * @param lngDataNodeId:所给的关键字
 * @returns 对象
 */
export async function vDataNode_Sim_IsExistCache(lngDataNodeId: number, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  if (arrvDataNode_SimObjLstCache == null) return false;
  try {
    const arrvDataNode_SimSel = arrvDataNode_SimObjLstCache.filter(
      (x) => x.dataNodeId == lngDataNodeId,
    );
    if (arrvDataNode_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngDataNodeId,
      vDataNode_Sim_ConstructorName,
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
 * @param lngDataNodeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vDataNode_Sim_IsExistAsync(lngDataNodeId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngDataNodeId,
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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
export async function vDataNode_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vDataNode_Sim_Controller, strAction);

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
        vDataNode_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDataNode_Sim_ConstructorName,
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
 * @param objvDataNode_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vDataNode_Sim_GetRecCountByCondCache(
  objvDataNode_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strPrjId);
  if (arrvDataNode_SimObjLstCache == null) return 0;
  let arrvDataNode_SimSel = arrvDataNode_SimObjLstCache;
  if (objvDataNode_SimCond.GetConditions().length == 0) return arrvDataNode_SimSel.length;
  try {
    for (const objCondition of objvDataNode_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvDataNode_SimSel = arrvDataNode_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDataNode_SimSel = arrvDataNode_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvDataNode_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvDataNode_SimCond),
      vDataNode_Sim_ConstructorName,
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
export function vDataNode_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vDataNode_Sim_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvDataNode_SimWApi.vDataNode_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvDataNode_SimWApi.vDataNode_Sim_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvDataNode_SimEN._CurrTabName, strPrjId);
    switch (clsvDataNode_SimEN.CacheModeId) {
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
    clsvDataNode_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vDataNode_Sim_GetLastRefreshTime(): string {
  if (clsvDataNode_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvDataNode_SimEN._RefreshTimeLst[clsvDataNode_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCmPrjId:
 * @param strPrjId:
*/
export async function vDataNode_Sim_BindDdl_DataNodeIdByCmPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsvDataNode_SimWApi.BindDdl_DataNodeIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsvDataNode_SimWApi.BindDdl_DataNodeIdByCmPrjIdInDiv)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvDataNode_SimWApi.BindDdl_DataNodeIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvDataNode_SimWApi.BindDdl_DataNodeIdByCmPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DataNodeIdByCmPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataNodeIdByCmPrjIdInDivCache");
  let arrObjLstSel = await vDataNode_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.dataNodeName.localeCompare(y.dataNodeName));
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvDataNode_SimEN.con_DataNodeId,
    clsvDataNode_SimEN.con_DataNodeName,
    'vDataNode_Sim...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCmPrjId:
 * @param strPrjId:
*/
export async function vDataNode_Sim_GetArrvDataNode_SimByCmPrjId(
  strCmPrjId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsvDataNode_SimWApi.BindDdl_DataNodeIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsvDataNode_SimWApi.BindDdl_DataNodeIdByCmPrjIdInDiv)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvDataNode_SimWApi.BindDdl_DataNodeIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvDataNode_SimWApi.BindDdl_DataNodeIdByCmPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DataNodeIdByCmPrjIdInDivCache");
  const arrvDataNode_Sim = new Array<clsvDataNode_SimEN>();
  let arrObjLstSel = await vDataNode_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.dataNodeName === null && y.dataNodeName === null) return 0;
    if (x.dataNodeName === null) return 1;
    if (y.dataNodeName === null) return -1;
    return x.dataNodeName.localeCompare(y.dataNodeName);
  });
  const obj0 = new clsvDataNode_SimEN();
  obj0.dataNodeId = 0;
  obj0.dataNodeName = '选vDataNode_Sim...';
  arrvDataNode_Sim.push(obj0);
  arrObjLstSel.forEach((x) => arrvDataNode_Sim.push(x));
  return arrvDataNode_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDataNode_Sim_GetJSONStrByObj(pobjvDataNode_SimEN: clsvDataNode_SimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvDataNode_SimEN);
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
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vDataNode_Sim_GetObjLstByJSONStr(strJSON: string): Array<clsvDataNode_SimEN> {
  let arrvDataNode_SimObjLst = new Array<clsvDataNode_SimEN>();
  if (strJSON === '') {
    return arrvDataNode_SimObjLst;
  }
  try {
    arrvDataNode_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvDataNode_SimObjLst;
  }
  return arrvDataNode_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvDataNode_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vDataNode_Sim_GetObjLstByJSONObjLst(
  arrvDataNode_SimObjLstS: Array<clsvDataNode_SimEN>,
): Array<clsvDataNode_SimEN> {
  const arrvDataNode_SimObjLst = new Array<clsvDataNode_SimEN>();
  for (const objInFor of arrvDataNode_SimObjLstS) {
    const obj1 = vDataNode_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvDataNode_SimObjLst.push(obj1);
  }
  return arrvDataNode_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDataNode_Sim_GetObjByJSONStr(strJSON: string): clsvDataNode_SimEN {
  let pobjvDataNode_SimEN = new clsvDataNode_SimEN();
  if (strJSON === '') {
    return pobjvDataNode_SimEN;
  }
  try {
    pobjvDataNode_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvDataNode_SimEN;
  }
  return pobjvDataNode_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vDataNode_Sim_GetCombineCondition(
  objvDataNode_SimCond: clsvDataNode_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_DataNodeId,
    ) == true
  ) {
    const strComparisonOpDataNodeId: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_DataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDataNode_SimEN.con_DataNodeId,
      objvDataNode_SimCond.dataNodeId,
      strComparisonOpDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_DataNodeName,
    ) == true
  ) {
    const strComparisonOpDataNodeName: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_DataNodeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDataNode_SimEN.con_DataNodeName,
      objvDataNode_SimCond.dataNodeName,
      strComparisonOpDataNodeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDataNode_SimEN.con_TabId,
      objvDataNode_SimCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDataNode_SimEN.con_FldId,
      objvDataNode_SimCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_KeyFldLst,
    ) == true
  ) {
    const strComparisonOpKeyFldLst: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_KeyFldLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDataNode_SimEN.con_KeyFldLst,
      objvDataNode_SimCond.keyFldLst,
      strComparisonOpKeyFldLst,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_DataNodeTypeId,
    ) == true
  ) {
    const strComparisonOpDataNodeTypeId: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_DataNodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDataNode_SimEN.con_DataNodeTypeId,
      objvDataNode_SimCond.dataNodeTypeId,
      strComparisonOpDataNodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_VersionNo,
    ) == true
  ) {
    const strComparisonOpVersionNo: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_VersionNo];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDataNode_SimEN.con_VersionNo,
      objvDataNode_SimCond.versionNo,
      strComparisonOpVersionNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDataNode_SimEN.con_PrjId,
      objvDataNode_SimCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_PosX,
    ) == true
  ) {
    const strComparisonOpPosX: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_PosX];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDataNode_SimEN.con_PosX,
      objvDataNode_SimCond.posX,
      strComparisonOpPosX,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_PosY,
    ) == true
  ) {
    const strComparisonOpPosY: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_PosY];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDataNode_SimEN.con_PosY,
      objvDataNode_SimCond.posY,
      strComparisonOpPosY,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDataNode_SimCond.dicFldComparisonOp,
      clsvDataNode_SimEN.con_UsedTimes,
    ) == true
  ) {
    const strComparisonOpUsedTimes: string =
      objvDataNode_SimCond.dicFldComparisonOp[clsvDataNode_SimEN.con_UsedTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDataNode_SimEN.con_UsedTimes,
      objvDataNode_SimCond.usedTimes,
      strComparisonOpUsedTimes,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvDataNode_SimENS:源对象
 * @param objvDataNode_SimENT:目标对象
 */
export function vDataNode_Sim_GetObjFromJsonObj(
  objvDataNode_SimENS: clsvDataNode_SimEN,
): clsvDataNode_SimEN {
  const objvDataNode_SimENT: clsvDataNode_SimEN = new clsvDataNode_SimEN();
  ObjectAssign(objvDataNode_SimENT, objvDataNode_SimENS);
  return objvDataNode_SimENT;
}
