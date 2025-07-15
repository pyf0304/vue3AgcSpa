/**
 * 类名:clsvFuncModuleViewNumWApi
 * 表名:vFuncModuleViewNum(00050290)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v模块-界面数(vFuncModuleViewNum)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvFuncModuleViewNumEN } from '@/ts/L0Entity/PrjManage/clsvFuncModuleViewNumEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFuncModuleViewNum_Controller = 'vFuncModuleViewNumApi';
export const vFuncModuleViewNum_ConstructorName = 'vFuncModuleViewNum';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncModuleAgcId:关键字
 * @returns 对象
 **/
export async function vFuncModuleViewNum_GetObjByFuncModuleAgcIdAsync(
  strFuncModuleAgcId: string,
): Promise<clsvFuncModuleViewNumEN | null> {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdAsync';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsvFuncModuleViewNumWApi.GetObjByFuncModuleAgcIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsvFuncModuleViewNumWApi.GetObjByFuncModuleAgcIdAsync)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncModuleAgcId';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncModuleAgcId,
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
      const objvFuncModuleViewNum = vFuncModuleViewNum_GetObjFromJsonObj(returnObj);
      return objvFuncModuleViewNum;
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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
 * @param strFuncModuleAgcId:所给的关键字
 * @returns 对象
 */
export async function vFuncModuleViewNum_GetObjByFuncModuleAgcIdCache(
  strFuncModuleAgcId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdCache';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsvFuncModuleViewNumWApi.GetObjByFuncModuleAgcIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsvFuncModuleViewNumWApi.GetObjByFuncModuleAgcIdCache)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstCache(strPrjId);
  try {
    const arrvFuncModuleViewNumSel = arrvFuncModuleViewNumObjLstCache.filter(
      (x) => x.funcModuleAgcId == strFuncModuleAgcId,
    );
    let objvFuncModuleViewNum: clsvFuncModuleViewNumEN;
    if (arrvFuncModuleViewNumSel.length > 0) {
      objvFuncModuleViewNum = arrvFuncModuleViewNumSel[0];
      return objvFuncModuleViewNum;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFuncModuleViewNumConst = await vFuncModuleViewNum_GetObjByFuncModuleAgcIdAsync(
          strFuncModuleAgcId,
        );
        if (objvFuncModuleViewNumConst != null) {
          vFuncModuleViewNum_ReFreshThisCache(strPrjId);
          return objvFuncModuleViewNumConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncModuleAgcId,
      vFuncModuleViewNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFuncModuleAgcId:所给的关键字
 * @returns 对象
 */
export async function vFuncModuleViewNum_GetObjByFuncModuleAgcIdlocalStorage(
  strFuncModuleAgcId: string,
) {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdlocalStorage';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsvFuncModuleViewNumWApi.GetObjByFuncModuleAgcIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsvFuncModuleViewNumWApi.GetObjByFuncModuleAgcIdlocalStorage)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFuncModuleViewNumEN._CurrTabName, strFuncModuleAgcId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFuncModuleViewNumCache: clsvFuncModuleViewNumEN = JSON.parse(strTempObj);
    return objvFuncModuleViewNumCache;
  }
  try {
    const objvFuncModuleViewNum = await vFuncModuleViewNum_GetObjByFuncModuleAgcIdAsync(
      strFuncModuleAgcId,
    );
    if (objvFuncModuleViewNum != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFuncModuleViewNum));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFuncModuleViewNum;
    }
    return objvFuncModuleViewNum;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncModuleAgcId,
      vFuncModuleViewNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vFuncModuleViewNum_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvFuncModuleViewNumWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvFuncModuleViewNumWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvFuncModuleViewNumEN.con_FuncModuleAgcId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFuncModuleViewNumEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFuncModuleViewNumEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncModuleAgcId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFuncModuleViewNum = await vFuncModuleViewNum_GetObjByFuncModuleAgcIdCache(
    strFuncModuleAgcId,
    strPrjIdClassfy,
  );
  if (objvFuncModuleViewNum == null) return '';
  if (objvFuncModuleViewNum.GetFldValue(strOutFldName) == null) return '';
  return objvFuncModuleViewNum.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncModuleViewNum_SortFunDefa(
  a: clsvFuncModuleViewNumEN,
  b: clsvFuncModuleViewNumEN,
): number {
  return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncModuleViewNum_SortFunDefa2Fld(
  a: clsvFuncModuleViewNumEN,
  b: clsvFuncModuleViewNumEN,
): number {
  if (a.viewNum == b.viewNum) return a.prjId.localeCompare(b.prjId);
  else return a.viewNum - b.viewNum;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncModuleViewNum_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFuncModuleViewNumEN.con_FuncModuleAgcId:
        return (a: clsvFuncModuleViewNumEN, b: clsvFuncModuleViewNumEN) => {
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsvFuncModuleViewNumEN.con_ViewNum:
        return (a: clsvFuncModuleViewNumEN, b: clsvFuncModuleViewNumEN) => {
          return a.viewNum - b.viewNum;
        };
      case clsvFuncModuleViewNumEN.con_PrjId:
        return (a: clsvFuncModuleViewNumEN, b: clsvFuncModuleViewNumEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFuncModuleViewNum]中不存在!(in ${vFuncModuleViewNum_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFuncModuleViewNumEN.con_FuncModuleAgcId:
        return (a: clsvFuncModuleViewNumEN, b: clsvFuncModuleViewNumEN) => {
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsvFuncModuleViewNumEN.con_ViewNum:
        return (a: clsvFuncModuleViewNumEN, b: clsvFuncModuleViewNumEN) => {
          return b.viewNum - a.viewNum;
        };
      case clsvFuncModuleViewNumEN.con_PrjId:
        return (a: clsvFuncModuleViewNumEN, b: clsvFuncModuleViewNumEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFuncModuleViewNum]中不存在!(in ${vFuncModuleViewNum_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFuncModuleViewNum_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFuncModuleViewNumEN.con_FuncModuleAgcId:
      return (obj: clsvFuncModuleViewNumEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsvFuncModuleViewNumEN.con_ViewNum:
      return (obj: clsvFuncModuleViewNumEN) => {
        return obj.viewNum === value;
      };
    case clsvFuncModuleViewNumEN.con_PrjId:
      return (obj: clsvFuncModuleViewNumEN) => {
        return obj.prjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFuncModuleViewNum]中不存在!(in ${vFuncModuleViewNum_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vFuncModuleViewNum_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvFuncModuleViewNumWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvFuncModuleViewNumWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvFuncModuleViewNumEN.con_FuncModuleAgcId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFuncModuleViewNum = await vFuncModuleViewNum_GetObjLstCache(strPrjIdClassfy);
  if (arrvFuncModuleViewNum == null) return [];
  let arrvFuncModuleViewNumSel = arrvFuncModuleViewNum;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFuncModuleViewNumSel.length == 0) return [];
  return arrvFuncModuleViewNumSel.map((x) => x.funcModuleAgcId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFuncModuleViewNum_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFuncModuleViewNumEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
      const objvFuncModuleViewNum = vFuncModuleViewNum_GetObjFromJsonObj(returnObj);
      return objvFuncModuleViewNum;
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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFuncModuleViewNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFuncModuleViewNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvFuncModuleViewNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFuncModuleViewNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncModuleViewNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFuncModuleViewNumExObjLstCache: Array<clsvFuncModuleViewNumEN> =
      CacheHelper.Get(strKey);
    const arrvFuncModuleViewNumObjLstT = vFuncModuleViewNum_GetObjLstByJSONObjLst(
      arrvFuncModuleViewNumExObjLstCache,
    );
    return arrvFuncModuleViewNumObjLstT;
  }
  try {
    const arrvFuncModuleViewNumExObjLst = await vFuncModuleViewNum_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvFuncModuleViewNumExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncModuleViewNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncModuleViewNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFuncModuleViewNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFuncModuleViewNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvFuncModuleViewNumEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvFuncModuleViewNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFuncModuleViewNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncModuleViewNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFuncModuleViewNumExObjLstCache: Array<clsvFuncModuleViewNumEN> =
      JSON.parse(strTempObjLst);
    const arrvFuncModuleViewNumObjLstT = vFuncModuleViewNum_GetObjLstByJSONObjLst(
      arrvFuncModuleViewNumExObjLstCache,
    );
    return arrvFuncModuleViewNumObjLstT;
  }
  try {
    const arrvFuncModuleViewNumExObjLst = await vFuncModuleViewNum_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvFuncModuleViewNumExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncModuleViewNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncModuleViewNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvFuncModuleViewNumEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFuncModuleViewNumObjLstCache: Array<clsvFuncModuleViewNumEN> =
      JSON.parse(strTempObjLst);
    return arrvFuncModuleViewNumObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFuncModuleViewNum_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFuncModuleViewNumEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
          vFuncModuleViewNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleViewNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFuncModuleViewNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFuncModuleViewNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvFuncModuleViewNumEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvFuncModuleViewNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFuncModuleViewNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncModuleViewNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFuncModuleViewNumExObjLstCache: Array<clsvFuncModuleViewNumEN> =
      JSON.parse(strTempObjLst);
    const arrvFuncModuleViewNumObjLstT = vFuncModuleViewNum_GetObjLstByJSONObjLst(
      arrvFuncModuleViewNumExObjLstCache,
    );
    return arrvFuncModuleViewNumObjLstT;
  }
  try {
    const arrvFuncModuleViewNumExObjLst = await vFuncModuleViewNum_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvFuncModuleViewNumExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncModuleViewNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncModuleViewNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvFuncModuleViewNumEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFuncModuleViewNumObjLstCache: Array<clsvFuncModuleViewNumEN> =
      JSON.parse(strTempObjLst);
    return arrvFuncModuleViewNumObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFuncModuleViewNum_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvFuncModuleViewNumEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvFuncModuleViewNumWApi.vFuncModuleViewNum_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvFuncModuleViewNumWApi.vFuncModuleViewNum_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvFuncModuleViewNumObjLstCache;
  switch (clsvFuncModuleViewNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvFuncModuleViewNumObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFuncModuleViewNum_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFuncModuleViewNumObjLstCache;
  switch (clsvFuncModuleViewNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrvFuncModuleViewNumObjLstCache = null;
      break;
    default:
      arrvFuncModuleViewNumObjLstCache = null;
      break;
  }
  return arrvFuncModuleViewNumObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncModuleAgcIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFuncModuleViewNum_GetSubObjLstCache(
  objvFuncModuleViewNumCond: clsvFuncModuleViewNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstCache(strPrjId);
  let arrvFuncModuleViewNumSel = arrvFuncModuleViewNumObjLstCache;
  if (
    objvFuncModuleViewNumCond.sfFldComparisonOp == null ||
    objvFuncModuleViewNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncModuleViewNumSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncModuleViewNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncModuleViewNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncModuleViewNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncModuleViewNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFuncModuleViewNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFuncModuleViewNumCond),
      vFuncModuleViewNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFuncModuleViewNumEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncModuleAgcId:关键字列表
 * @returns 对象列表
 **/
export async function vFuncModuleViewNum_GetObjLstByFuncModuleAgcIdLstAsync(
  arrFuncModuleAgcId: Array<string>,
): Promise<Array<clsvFuncModuleViewNumEN>> {
  const strThisFuncName = 'GetObjLstByFuncModuleAgcIdLstAsync';
  const strAction = 'GetObjLstByFuncModuleAgcIdLst';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncModuleAgcId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFuncModuleViewNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleViewNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
 * @param arrstrFuncModuleAgcIdLst:关键字列表
 * @returns 对象列表
 */
export async function vFuncModuleViewNum_GetObjLstByFuncModuleAgcIdLstCache(
  arrFuncModuleAgcIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByFuncModuleAgcIdLstCache';
  try {
    const arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstCache(strPrjId);
    const arrvFuncModuleViewNumSel = arrvFuncModuleViewNumObjLstCache.filter(
      (x) => arrFuncModuleAgcIdLst.indexOf(x.funcModuleAgcId) > -1,
    );
    return arrvFuncModuleViewNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncModuleAgcIdLst.join(','),
      vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFuncModuleViewNumEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
          vFuncModuleViewNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleViewNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFuncModuleViewNumEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
          vFuncModuleViewNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleViewNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFuncModuleViewNumEN>();
  const arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstCache(strPrjId);
  if (arrvFuncModuleViewNumObjLstCache.length == 0) return arrvFuncModuleViewNumObjLstCache;
  let arrvFuncModuleViewNumSel = arrvFuncModuleViewNumObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFuncModuleViewNumCond = new clsvFuncModuleViewNumEN();
  ObjectAssign(objvFuncModuleViewNumCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFuncModuleViewNumWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncModuleViewNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFuncModuleViewNumSel.length == 0) return arrvFuncModuleViewNumSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.sort(
        vFuncModuleViewNum_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.sort(objPagerPara.sortFun);
    }
    arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.slice(intStart, intEnd);
    return arrvFuncModuleViewNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFuncModuleViewNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFuncModuleViewNumEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFuncModuleViewNum_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFuncModuleViewNumEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFuncModuleViewNumEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
          vFuncModuleViewNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleViewNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
 * @param objstrFuncModuleAgcIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFuncModuleViewNum_IsExistRecordCache(
  objvFuncModuleViewNumCond: clsvFuncModuleViewNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstCache(strPrjId);
  if (arrvFuncModuleViewNumObjLstCache == null) return false;
  let arrvFuncModuleViewNumSel = arrvFuncModuleViewNumObjLstCache;
  if (
    objvFuncModuleViewNumCond.sfFldComparisonOp == null ||
    objvFuncModuleViewNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncModuleViewNumSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncModuleViewNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncModuleViewNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncModuleViewNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncModuleViewNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFuncModuleViewNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFuncModuleViewNumCond),
      vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
 * @param strFuncModuleAgcId:所给的关键字
 * @returns 对象
 */
export async function vFuncModuleViewNum_IsExistCache(
  strFuncModuleAgcId: string,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstCache(strPrjId);
  if (arrvFuncModuleViewNumObjLstCache == null) return false;
  try {
    const arrvFuncModuleViewNumSel = arrvFuncModuleViewNumObjLstCache.filter(
      (x) => x.funcModuleAgcId == strFuncModuleAgcId,
    );
    if (arrvFuncModuleViewNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncModuleAgcId,
      vFuncModuleViewNum_ConstructorName,
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
 * @param strFuncModuleAgcId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFuncModuleViewNum_IsExistAsync(
  strFuncModuleAgcId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncModuleAgcId,
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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
export async function vFuncModuleViewNum_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFuncModuleViewNum_Controller, strAction);

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
        vFuncModuleViewNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleViewNum_ConstructorName,
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
 * @param objvFuncModuleViewNumCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFuncModuleViewNum_GetRecCountByCondCache(
  objvFuncModuleViewNumCond: clsvFuncModuleViewNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFuncModuleViewNumObjLstCache = await vFuncModuleViewNum_GetObjLstCache(strPrjId);
  if (arrvFuncModuleViewNumObjLstCache == null) return 0;
  let arrvFuncModuleViewNumSel = arrvFuncModuleViewNumObjLstCache;
  if (
    objvFuncModuleViewNumCond.sfFldComparisonOp == null ||
    objvFuncModuleViewNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncModuleViewNumSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncModuleViewNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncModuleViewNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncModuleViewNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncModuleViewNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncModuleViewNumSel = arrvFuncModuleViewNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFuncModuleViewNumSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFuncModuleViewNumCond),
      vFuncModuleViewNum_ConstructorName,
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
export function vFuncModuleViewNum_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vFuncModuleViewNum_ReFreshThisCache(strPrjId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvFuncModuleViewNumEN._CurrTabName, strPrjId);
    switch (clsvFuncModuleViewNumEN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFuncModuleViewNum_GetJSONStrByObj(
  pobjvFuncModuleViewNumEN: clsvFuncModuleViewNumEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFuncModuleViewNumEN);
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFuncModuleViewNum_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFuncModuleViewNumEN> {
  let arrvFuncModuleViewNumObjLst = new Array<clsvFuncModuleViewNumEN>();
  if (strJSON === '') {
    return arrvFuncModuleViewNumObjLst;
  }
  try {
    arrvFuncModuleViewNumObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFuncModuleViewNumObjLst;
  }
  return arrvFuncModuleViewNumObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFuncModuleViewNumObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFuncModuleViewNum_GetObjLstByJSONObjLst(
  arrvFuncModuleViewNumObjLstS: Array<clsvFuncModuleViewNumEN>,
): Array<clsvFuncModuleViewNumEN> {
  const arrvFuncModuleViewNumObjLst = new Array<clsvFuncModuleViewNumEN>();
  for (const objInFor of arrvFuncModuleViewNumObjLstS) {
    const obj1 = vFuncModuleViewNum_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFuncModuleViewNumObjLst.push(obj1);
  }
  return arrvFuncModuleViewNumObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFuncModuleViewNum_GetObjByJSONStr(strJSON: string): clsvFuncModuleViewNumEN {
  let pobjvFuncModuleViewNumEN = new clsvFuncModuleViewNumEN();
  if (strJSON === '') {
    return pobjvFuncModuleViewNumEN;
  }
  try {
    pobjvFuncModuleViewNumEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFuncModuleViewNumEN;
  }
  return pobjvFuncModuleViewNumEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFuncModuleViewNum_GetCombineCondition(
  objvFuncModuleViewNumCond: clsvFuncModuleViewNumEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncModuleViewNumCond.dicFldComparisonOp,
      clsvFuncModuleViewNumEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objvFuncModuleViewNumCond.dicFldComparisonOp[clsvFuncModuleViewNumEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncModuleViewNumEN.con_FuncModuleAgcId,
      objvFuncModuleViewNumCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncModuleViewNumCond.dicFldComparisonOp,
      clsvFuncModuleViewNumEN.con_ViewNum,
    ) == true
  ) {
    const strComparisonOpViewNum: string =
      objvFuncModuleViewNumCond.dicFldComparisonOp[clsvFuncModuleViewNumEN.con_ViewNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFuncModuleViewNumEN.con_ViewNum,
      objvFuncModuleViewNumCond.viewNum,
      strComparisonOpViewNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncModuleViewNumCond.dicFldComparisonOp,
      clsvFuncModuleViewNumEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvFuncModuleViewNumCond.dicFldComparisonOp[clsvFuncModuleViewNumEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncModuleViewNumEN.con_PrjId,
      objvFuncModuleViewNumCond.prjId,
      strComparisonOpPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFuncModuleViewNumENS:源对象
 * @param objvFuncModuleViewNumENT:目标对象
 */
export function vFuncModuleViewNum_GetObjFromJsonObj(
  objvFuncModuleViewNumENS: clsvFuncModuleViewNumEN,
): clsvFuncModuleViewNumEN {
  const objvFuncModuleViewNumENT: clsvFuncModuleViewNumEN = new clsvFuncModuleViewNumEN();
  ObjectAssign(objvFuncModuleViewNumENT, objvFuncModuleViewNumENS);
  return objvFuncModuleViewNumENT;
}
