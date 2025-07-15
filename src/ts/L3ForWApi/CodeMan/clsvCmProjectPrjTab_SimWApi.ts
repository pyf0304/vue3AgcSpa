/**
 * 类名:clsvCmProjectPrjTab_SimWApi
 * 表名:vCmProjectPrjTab_Sim(00050639)
 * 版本:2025.07.05.1(服务器:WIN-SRV103-116)
 * 日期:2025/07/05 09:37:41
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vCmProjectPrjTab_Sim(vCmProjectPrjTab_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年07月05日.
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
import { clsvCmProjectPrjTab_SimEN } from '@/ts/L0Entity/CodeMan/clsvCmProjectPrjTab_SimEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vCmProjectPrjTab_Sim_Controller = 'vCmProjectPrjTab_SimApi';
export const vCmProjectPrjTab_Sim_ConstructorName = 'vCmProjectPrjTab_Sim';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function vCmProjectPrjTab_Sim_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    cmPrjId: arrKey[0],
    tabId: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.cmPrjId) == true) {
    const strMsg = '关键字段(cmPrjId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.tabId) == true) {
    const strMsg = '关键字段(tabId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmPrjId:关键字
 * @returns 对象
 **/
export async function vCmProjectPrjTab_Sim_GetObjByKeyLstAsync(
  strCmPrjId: string,
  strTabId: string,
): Promise<clsvCmProjectPrjTab_SimEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstAsync)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      strTabId,
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
      const objvCmProjectPrjTab_Sim = vCmProjectPrjTab_Sim_GetObjFromJsonObj(returnObj);
      return objvCmProjectPrjTab_Sim;
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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
 * @param strCmPrjId:所给的关键字
 * @returns 对象
 */
export async function vCmProjectPrjTab_Sim_GetObjByKeyLstlocalStorage(
  strCmPrjId: string,
  strTabId: string,
) {
  const strThisFuncName = 'GetObjByKeyLstlocalStorage';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstlocalStorage)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstlocalStorage)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvCmProjectPrjTab_SimEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvCmProjectPrjTab_SimCache: clsvCmProjectPrjTab_SimEN = JSON.parse(strTempObj);
    return objvCmProjectPrjTab_SimCache;
  }
  try {
    const objvCmProjectPrjTab_Sim = await vCmProjectPrjTab_Sim_GetObjByKeyLstAsync(
      strCmPrjId,
      strTabId,
    );
    if (objvCmProjectPrjTab_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvCmProjectPrjTab_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvCmProjectPrjTab_Sim;
    }
    return objvCmProjectPrjTab_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmPrjId,
      vCmProjectPrjTab_Sim_ConstructorName,
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
 * @param strCmPrjId:所给的关键字
 * @returns 对象
 */
export async function vCmProjectPrjTab_Sim_GetObjByKeyLstCache(
  strCmPrjId: string,
  strTabId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyLstCache';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.GetObjByKeyLstCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimObjLstCache.filter(
      (x) => x.cmPrjId == strCmPrjId && x.tabId == strTabId,
    );
    let objvCmProjectPrjTab_Sim: clsvCmProjectPrjTab_SimEN;
    if (arrvCmProjectPrjTab_SimSel.length > 0) {
      objvCmProjectPrjTab_Sim = arrvCmProjectPrjTab_SimSel[0];
      return objvCmProjectPrjTab_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvCmProjectPrjTab_SimConst = await vCmProjectPrjTab_Sim_GetObjByKeyLstAsync(
          strCmPrjId,
          strTabId,
        );
        if (objvCmProjectPrjTab_SimConst != null) {
          vCmProjectPrjTab_Sim_ReFreshThisCache(strPrjId);
          return objvCmProjectPrjTab_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmPrjId,
      vCmProjectPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCmProjectPrjTab_Sim_SortFunDefa(
  a: clsvCmProjectPrjTab_SimEN,
  b: clsvCmProjectPrjTab_SimEN,
): number {
  return a.cmPrjId.localeCompare(b.cmPrjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCmProjectPrjTab_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvCmProjectPrjTab_SimEN.con_CmPrjId:
        return (a: clsvCmProjectPrjTab_SimEN, b: clsvCmProjectPrjTab_SimEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsvCmProjectPrjTab_SimEN.con_TabId:
        return (a: clsvCmProjectPrjTab_SimEN, b: clsvCmProjectPrjTab_SimEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vCmProjectPrjTab_Sim]中不存在!(in ${vCmProjectPrjTab_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvCmProjectPrjTab_SimEN.con_CmPrjId:
        return (a: clsvCmProjectPrjTab_SimEN, b: clsvCmProjectPrjTab_SimEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsvCmProjectPrjTab_SimEN.con_TabId:
        return (a: clsvCmProjectPrjTab_SimEN, b: clsvCmProjectPrjTab_SimEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vCmProjectPrjTab_Sim]中不存在!(in ${vCmProjectPrjTab_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vCmProjectPrjTab_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvCmProjectPrjTab_SimEN.con_CmPrjId:
      return (obj: clsvCmProjectPrjTab_SimEN) => {
        return obj.cmPrjId === value;
      };
    case clsvCmProjectPrjTab_SimEN.con_TabId:
      return (obj: clsvCmProjectPrjTab_SimEN) => {
        return obj.tabId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vCmProjectPrjTab_Sim]中不存在!(in ${vCmProjectPrjTab_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vCmProjectPrjTab_Sim_func(
  strInFldName1: string,
  strInFldName2: string,
  strOutFldName: string,
  strInValue1: string,
  strInValue2: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvCmProjectPrjTab_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName1 != clsvCmProjectPrjTab_SimEN.con_CmPrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName1);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName2 != clsvCmProjectPrjTab_SimEN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName2);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvCmProjectPrjTab_SimEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvCmProjectPrjTab_SimEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCmPrjId = strInValue1;
  if (IsNullOrEmpty(strCmPrjId) == true) {
    return '';
  }
  const strTabId = strInValue2;
  if (IsNullOrEmpty(strTabId) == true) {
    return '';
  }
  const objvCmProjectPrjTab_Sim = await vCmProjectPrjTab_Sim_GetObjByKeyLstCache(
    strCmPrjId,
    strTabId,
    strPrjIdClassfy,
  );
  if (objvCmProjectPrjTab_Sim == null) return '';
  if (objvCmProjectPrjTab_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvCmProjectPrjTab_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vCmProjectPrjTab_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strPrjIdClassfy]不能为空!(In clsvCmProjectPrjTab_SimWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvCmProjectPrjTab_SimEN.con_CmPrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName == clsvCmProjectPrjTab_SimEN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvCmProjectPrjTab_Sim = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjIdClassfy);
  if (arrvCmProjectPrjTab_Sim == null) return [];
  let arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvCmProjectPrjTab_SimSel.length == 0) return [];
  return arrvCmProjectPrjTab_Sim.map((x) => `${x.cmPrjId}|${x.tabId}`);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vCmProjectPrjTab_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvCmProjectPrjTab_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
      const objvCmProjectPrjTab_Sim = vCmProjectPrjTab_Sim_GetObjFromJsonObj(returnObj);
      return objvCmProjectPrjTab_Sim;
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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvCmProjectPrjTab_SimEN._WhereFormat) == false) {
    strWhereCond = Format(clsvCmProjectPrjTab_SimEN._WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvCmProjectPrjTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvCmProjectPrjTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvCmProjectPrjTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvCmProjectPrjTab_SimExObjLstCache: Array<clsvCmProjectPrjTab_SimEN> =
      CacheHelper.Get(strKey);
    const arrvCmProjectPrjTab_SimObjLstT = vCmProjectPrjTab_Sim_GetObjLstByJSONObjLst(
      arrvCmProjectPrjTab_SimExObjLstCache,
    );
    return arrvCmProjectPrjTab_SimObjLstT;
  }
  try {
    const arrvCmProjectPrjTab_SimExObjLst = await vCmProjectPrjTab_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvCmProjectPrjTab_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvCmProjectPrjTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvCmProjectPrjTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvCmProjectPrjTab_SimEN._WhereFormat) == false) {
    strWhereCond = Format(clsvCmProjectPrjTab_SimEN._WhereFormat, strPrjId);
  } else {
    const strMsg = '分类字段为扩展字段,此时WhereFormat不能为空!';
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKey = Format('{0}_{1}', clsvCmProjectPrjTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvCmProjectPrjTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvCmProjectPrjTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvCmProjectPrjTab_SimExObjLstCache: Array<clsvCmProjectPrjTab_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvCmProjectPrjTab_SimObjLstT = vCmProjectPrjTab_Sim_GetObjLstByJSONObjLst(
      arrvCmProjectPrjTab_SimExObjLstCache,
    );
    return arrvCmProjectPrjTab_SimObjLstT;
  }
  try {
    const arrvCmProjectPrjTab_SimExObjLst = await vCmProjectPrjTab_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvCmProjectPrjTab_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvCmProjectPrjTab_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvCmProjectPrjTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvCmProjectPrjTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvCmProjectPrjTab_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvCmProjectPrjTab_SimObjLstCache: Array<clsvCmProjectPrjTab_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvCmProjectPrjTab_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vCmProjectPrjTab_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvCmProjectPrjTab_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
          vCmProjectPrjTab_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCmProjectPrjTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvCmProjectPrjTab_SimEN._WhereFormat) == false) {
    strWhereCond = Format(clsvCmProjectPrjTab_SimEN._WhereFormat, strPrjId);
  } else {
    const strMsg = '分类字段为扩展字段,此时WhereFormat不能为空!';
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKey = Format('{0}_{1}', clsvCmProjectPrjTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvCmProjectPrjTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvCmProjectPrjTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvCmProjectPrjTab_SimExObjLstCache: Array<clsvCmProjectPrjTab_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvCmProjectPrjTab_SimObjLstT = vCmProjectPrjTab_Sim_GetObjLstByJSONObjLst(
      arrvCmProjectPrjTab_SimExObjLstCache,
    );
    return arrvCmProjectPrjTab_SimObjLstT;
  }
  try {
    const arrvCmProjectPrjTab_SimExObjLst = await vCmProjectPrjTab_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvCmProjectPrjTab_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvCmProjectPrjTab_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvCmProjectPrjTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvCmProjectPrjTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvCmProjectPrjTab_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvCmProjectPrjTab_SimObjLstCache: Array<clsvCmProjectPrjTab_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvCmProjectPrjTab_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vCmProjectPrjTab_Sim_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvCmProjectPrjTab_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvCmProjectPrjTab_SimWApi.vCmProjectPrjTab_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvCmProjectPrjTab_SimWApi.vCmProjectPrjTab_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvCmProjectPrjTab_SimObjLstCache;
  switch (clsvCmProjectPrjTab_SimEN._CacheModeId) {
    case '04': //sessionStorage
      arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstsessionStorage(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstlocalStorage(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstClientCache(
        strPrjId,
      );
      break;
    default:
      arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstClientCache(
        strPrjId,
      );
      break;
  }
  return arrvCmProjectPrjTab_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vCmProjectPrjTab_Sim_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvCmProjectPrjTab_SimObjLstCache;
  switch (clsvCmProjectPrjTab_SimEN._CacheModeId) {
    case '04': //sessionStorage
      arrvCmProjectPrjTab_SimObjLstCache =
        await vCmProjectPrjTab_Sim_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvCmProjectPrjTab_SimObjLstCache =
        await vCmProjectPrjTab_Sim_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvCmProjectPrjTab_SimObjLstCache = null;
      break;
    default:
      arrvCmProjectPrjTab_SimObjLstCache = null;
      break;
  }
  return arrvCmProjectPrjTab_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCmPrjIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vCmProjectPrjTab_Sim_GetSubObjLstCache(
  objvCmProjectPrjTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  let arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimObjLstCache;
  if (objvCmProjectPrjTab_SimCond.GetConditions().length == 0) return arrvCmProjectPrjTab_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvCmProjectPrjTab_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvCmProjectPrjTab_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvCmProjectPrjTab_SimCond),
      vCmProjectPrjTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvCmProjectPrjTab_SimEN>();
}

/// <summary>
/// 把多个关键字段的值连接起来,用|连接(Join)--vCmProjectPrjTab_Sim(vCmProjectPrjTab_Sim)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
/// </summary>
/// <param name = "objvCmProjectPrjTab_SimEN">需要连接的对象</param>
/// <returns></returns>
export function vCmProjectPrjTab_Sim_JoinByKeyLst(
  objvCmProjectPrjTab_SimEN: clsvCmProjectPrjTab_SimEN,
): string {
  //检测记录是否存在
  const strResult = `${objvCmProjectPrjTab_SimEN.cmPrjId}|${objvCmProjectPrjTab_SimEN.tabId}`;
  return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrCmPrjIdLst:关键字列表
 * @returns 对象列表
 */
export async function vCmProjectPrjTab_Sim_GetObjLstByKeyLstsCache(
  arrKeysLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByKeyLstsCache';
  try {
    const arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
    const arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimObjLstCache.filter(
      (x) => arrKeysLst.indexOf(vCmProjectPrjTab_Sim_JoinByKeyLst(x)) > -1,
    );
    return arrvCmProjectPrjTab_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeysLst.join(','),
      vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvCmProjectPrjTab_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
          vCmProjectPrjTab_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCmProjectPrjTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvCmProjectPrjTab_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
          vCmProjectPrjTab_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCmProjectPrjTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
 * @param objstrCmPrjIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vCmProjectPrjTab_Sim_IsExistRecordCache(
  objvCmProjectPrjTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrvCmProjectPrjTab_SimObjLstCache == null) return false;
  let arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimObjLstCache;
  if (objvCmProjectPrjTab_SimCond.GetConditions().length == 0)
    return arrvCmProjectPrjTab_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvCmProjectPrjTab_SimCond.GetConditions()) {
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
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvCmProjectPrjTab_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvCmProjectPrjTab_SimCond),
      vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
 * @param strCmPrjId:所给的关键字
 * @returns 对象
 */
export async function vCmProjectPrjTab_Sim_IsExistCache(
  strCmPrjId: string,
  strTabId: string,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrvCmProjectPrjTab_SimObjLstCache == null) return false;
  try {
    const arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimObjLstCache.filter(
      (x) => x.cmPrjId == strCmPrjId && x.tabId == strTabId,
    );
    if (arrvCmProjectPrjTab_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCmPrjId,
      vCmProjectPrjTab_Sim_ConstructorName,
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
 * @param strCmPrjId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vCmProjectPrjTab_Sim_IsExistAsync(
  strCmPrjId: string,
  strTabId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      strTabId,
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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
export async function vCmProjectPrjTab_Sim_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vCmProjectPrjTab_Sim_Controller, strAction);

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
        vCmProjectPrjTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCmProjectPrjTab_Sim_ConstructorName,
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
 * @param objvCmProjectPrjTab_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vCmProjectPrjTab_Sim_GetRecCountByCondCache(
  objvCmProjectPrjTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvCmProjectPrjTab_SimObjLstCache = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  if (arrvCmProjectPrjTab_SimObjLstCache == null) return 0;
  let arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimObjLstCache;
  if (objvCmProjectPrjTab_SimCond.GetConditions().length == 0)
    return arrvCmProjectPrjTab_SimSel.length;
  try {
    for (const objCondition of objvCmProjectPrjTab_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvCmProjectPrjTab_SimSel = arrvCmProjectPrjTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvCmProjectPrjTab_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvCmProjectPrjTab_SimCond),
      vCmProjectPrjTab_Sim_ConstructorName,
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
export function vCmProjectPrjTab_Sim_GetWebApiUrl(
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
export function vCmProjectPrjTab_Sim_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvCmProjectPrjTab_SimWApi.vCmProjectPrjTab_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvCmProjectPrjTab_SimWApi.vCmProjectPrjTab_Sim_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvCmProjectPrjTab_SimEN._CurrTabName, strPrjId);
    switch (clsvCmProjectPrjTab_SimEN._CacheModeId) {
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
    clsvCmProjectPrjTab_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vCmProjectPrjTab_Sim_GetLastRefreshTime(): string {
  if (clsvCmProjectPrjTab_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvCmProjectPrjTab_SimEN._RefreshTimeLst[
    clsvCmProjectPrjTab_SimEN._RefreshTimeLst.length - 1
  ];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vCmProjectPrjTab_Sim_GetJSONStrByObj(
  pobjvCmProjectPrjTab_SimEN: clsvCmProjectPrjTab_SimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvCmProjectPrjTab_SimEN);
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
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vCmProjectPrjTab_Sim_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvCmProjectPrjTab_SimEN> {
  let arrvCmProjectPrjTab_SimObjLst = new Array<clsvCmProjectPrjTab_SimEN>();
  if (strJSON === '') {
    return arrvCmProjectPrjTab_SimObjLst;
  }
  try {
    arrvCmProjectPrjTab_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvCmProjectPrjTab_SimObjLst;
  }
  return arrvCmProjectPrjTab_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCmProjectPrjTab_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vCmProjectPrjTab_Sim_GetObjLstByJSONObjLst(
  arrvCmProjectPrjTab_SimObjLstS: Array<clsvCmProjectPrjTab_SimEN>,
): Array<clsvCmProjectPrjTab_SimEN> {
  const arrvCmProjectPrjTab_SimObjLst = new Array<clsvCmProjectPrjTab_SimEN>();
  for (const objInFor of arrvCmProjectPrjTab_SimObjLstS) {
    const obj1 = vCmProjectPrjTab_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvCmProjectPrjTab_SimObjLst.push(obj1);
  }
  return arrvCmProjectPrjTab_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vCmProjectPrjTab_Sim_GetObjByJSONStr(strJSON: string): clsvCmProjectPrjTab_SimEN {
  let pobjvCmProjectPrjTab_SimEN = new clsvCmProjectPrjTab_SimEN();
  if (strJSON === '') {
    return pobjvCmProjectPrjTab_SimEN;
  }
  try {
    pobjvCmProjectPrjTab_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvCmProjectPrjTab_SimEN;
  }
  return pobjvCmProjectPrjTab_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vCmProjectPrjTab_Sim_GetCombineCondition(
  objvCmProjectPrjTab_SimCond: clsvCmProjectPrjTab_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvCmProjectPrjTab_SimCond.dicFldComparisonOp,
      clsvCmProjectPrjTab_SimEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objvCmProjectPrjTab_SimCond.dicFldComparisonOp[clsvCmProjectPrjTab_SimEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCmProjectPrjTab_SimEN.con_CmPrjId,
      objvCmProjectPrjTab_SimCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCmProjectPrjTab_SimCond.dicFldComparisonOp,
      clsvCmProjectPrjTab_SimEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvCmProjectPrjTab_SimCond.dicFldComparisonOp[clsvCmProjectPrjTab_SimEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCmProjectPrjTab_SimEN.con_TabId,
      objvCmProjectPrjTab_SimCond.tabId,
      strComparisonOpTabId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCmProjectPrjTab_SimENS:源对象
 * @param objvCmProjectPrjTab_SimENT:目标对象
 */
export function vCmProjectPrjTab_Sim_GetObjFromJsonObj(
  objvCmProjectPrjTab_SimENS: clsvCmProjectPrjTab_SimEN,
): clsvCmProjectPrjTab_SimEN {
  const objvCmProjectPrjTab_SimENT: clsvCmProjectPrjTab_SimEN = new clsvCmProjectPrjTab_SimEN();
  ObjectAssign(objvCmProjectPrjTab_SimENT, objvCmProjectPrjTab_SimENS);
  return objvCmProjectPrjTab_SimENT;
}
