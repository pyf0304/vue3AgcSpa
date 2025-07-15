/**
 * 类名:clsvFuncParaRela_ParaNumWApi
 * 表名:vFuncParaRela_ParaNum(00050629)
 * 版本:2023.07.18.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/27 22:52:50
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
 * vFuncParaRela_ParaNum(vFuncParaRela_ParaNum)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年07月27日.
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
import { clsvFuncParaRela_ParaNumEN } from '@/ts/L0Entity/PrjFunction/clsvFuncParaRela_ParaNumEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFuncParaRela_ParaNum_Controller = 'vFuncParaRela_ParaNumApi';
export const vFuncParaRela_ParaNum_ConstructorName = 'vFuncParaRela_ParaNum';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4Code:关键字
 * @returns 对象
 **/
export async function vFuncParaRela_ParaNum_GetObjByFuncId4CodeAsync(
  strFuncId4Code: string,
): Promise<clsvFuncParaRela_ParaNumEN | null> {
  const strThisFuncName = 'GetObjByFuncId4CodeAsync';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFuncParaRela_ParaNumWApi.GetObjByFuncId4CodeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFuncParaRela_ParaNumWApi.GetObjByFuncId4CodeAsync)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4Code';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
      const objvFuncParaRela_ParaNum = vFuncParaRela_ParaNum_GetObjFromJsonObj(returnObj);
      return objvFuncParaRela_ParaNum;
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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFuncParaRela_ParaNum_GetObjByFuncId4CodeCache(
  strFuncId4Code: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncId4CodeCache';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFuncParaRela_ParaNumWApi.GetObjByFuncId4CodeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFuncParaRela_ParaNumWApi.GetObjByFuncId4CodeCache)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstCache();
  try {
    const arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumObjLstCache.filter(
      (x) => x.funcId4Code == strFuncId4Code,
    );
    let objvFuncParaRela_ParaNum: clsvFuncParaRela_ParaNumEN;
    if (arrvFuncParaRela_ParaNumSel.length > 0) {
      objvFuncParaRela_ParaNum = arrvFuncParaRela_ParaNumSel[0];
      return objvFuncParaRela_ParaNum;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFuncParaRela_ParaNumConst = await vFuncParaRela_ParaNum_GetObjByFuncId4CodeAsync(
          strFuncId4Code,
        );
        if (objvFuncParaRela_ParaNumConst != null) {
          vFuncParaRela_ParaNum_ReFreshThisCache();
          return objvFuncParaRela_ParaNumConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4Code,
      vFuncParaRela_ParaNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFuncParaRela_ParaNum_GetObjByFuncId4CodelocalStorage(
  strFuncId4Code: string,
) {
  const strThisFuncName = 'GetObjByFuncId4CodelocalStorage';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFuncParaRela_ParaNumWApi.GetObjByFuncId4CodelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFuncParaRela_ParaNumWApi.GetObjByFuncId4CodelocalStorage)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFuncParaRela_ParaNumEN._CurrTabName, strFuncId4Code);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFuncParaRela_ParaNumCache: clsvFuncParaRela_ParaNumEN = JSON.parse(strTempObj);
    return objvFuncParaRela_ParaNumCache;
  }
  try {
    const objvFuncParaRela_ParaNum = await vFuncParaRela_ParaNum_GetObjByFuncId4CodeAsync(
      strFuncId4Code,
    );
    if (objvFuncParaRela_ParaNum != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFuncParaRela_ParaNum));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFuncParaRela_ParaNum;
    }
    return objvFuncParaRela_ParaNum;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4Code,
      vFuncParaRela_ParaNum_ConstructorName,
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
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vFuncParaRela_ParaNum_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvFuncParaRela_ParaNumEN.con_FuncId4Code) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFuncParaRela_ParaNumEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFuncParaRela_ParaNumEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncId4Code = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFuncParaRela_ParaNum = await vFuncParaRela_ParaNum_GetObjByFuncId4CodeCache(
    strFuncId4Code,
  );
  if (objvFuncParaRela_ParaNum == null) return '';
  if (objvFuncParaRela_ParaNum.GetFldValue(strOutFldName) == null) return '';
  return objvFuncParaRela_ParaNum.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncParaRela_ParaNum_SortFunDefa(
  a: clsvFuncParaRela_ParaNumEN,
  b: clsvFuncParaRela_ParaNumEN,
): number {
  return a.funcId4Code.localeCompare(b.funcId4Code);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFuncParaRela_ParaNum_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFuncParaRela_ParaNumEN.con_FuncId4Code:
        return (a: clsvFuncParaRela_ParaNumEN, b: clsvFuncParaRela_ParaNumEN) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsvFuncParaRela_ParaNumEN.con_ParaNum:
        return (a: clsvFuncParaRela_ParaNumEN, b: clsvFuncParaRela_ParaNumEN) => {
          return a.paraNum - b.paraNum;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFuncParaRela_ParaNum]中不存在!(in ${vFuncParaRela_ParaNum_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFuncParaRela_ParaNumEN.con_FuncId4Code:
        return (a: clsvFuncParaRela_ParaNumEN, b: clsvFuncParaRela_ParaNumEN) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsvFuncParaRela_ParaNumEN.con_ParaNum:
        return (a: clsvFuncParaRela_ParaNumEN, b: clsvFuncParaRela_ParaNumEN) => {
          return b.paraNum - a.paraNum;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFuncParaRela_ParaNum]中不存在!(in ${vFuncParaRela_ParaNum_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFuncParaRela_ParaNum_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFuncParaRela_ParaNumEN.con_FuncId4Code:
      return (obj: clsvFuncParaRela_ParaNumEN) => {
        return obj.funcId4Code === value;
      };
    case clsvFuncParaRela_ParaNumEN.con_ParaNum:
      return (obj: clsvFuncParaRela_ParaNumEN) => {
        return obj.paraNum === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFuncParaRela_ParaNum]中不存在!(in ${vFuncParaRela_ParaNum_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vFuncParaRela_ParaNum_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvFuncParaRela_ParaNumEN.con_FuncId4Code) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFuncParaRela_ParaNum = await vFuncParaRela_ParaNum_GetObjLstCache();
  if (arrvFuncParaRela_ParaNum == null) return [];
  let arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNum;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFuncParaRela_ParaNumSel.length == 0) return [];
  return arrvFuncParaRela_ParaNumSel.map((x) => x.funcId4Code);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFuncParaRela_ParaNum_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFuncParaRela_ParaNumEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
      const objvFuncParaRela_ParaNum = vFuncParaRela_ParaNum_GetObjFromJsonObj(returnObj);
      return objvFuncParaRela_ParaNum;
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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFuncParaRela_ParaNumEN._CurrTabName;
  if (IsNullOrEmpty(clsvFuncParaRela_ParaNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncParaRela_ParaNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFuncParaRela_ParaNumExObjLstCache: Array<clsvFuncParaRela_ParaNumEN> =
      CacheHelper.Get(strKey);
    const arrvFuncParaRela_ParaNumObjLstT = vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(
      arrvFuncParaRela_ParaNumExObjLstCache,
    );
    return arrvFuncParaRela_ParaNumObjLstT;
  }
  try {
    const arrvFuncParaRela_ParaNumExObjLst = await vFuncParaRela_ParaNum_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvFuncParaRela_ParaNumExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncParaRela_ParaNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncParaRela_ParaNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFuncParaRela_ParaNumEN._CurrTabName;
  if (IsNullOrEmpty(clsvFuncParaRela_ParaNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncParaRela_ParaNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFuncParaRela_ParaNumExObjLstCache: Array<clsvFuncParaRela_ParaNumEN> =
      JSON.parse(strTempObjLst);
    const arrvFuncParaRela_ParaNumObjLstT = vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(
      arrvFuncParaRela_ParaNumExObjLstCache,
    );
    return arrvFuncParaRela_ParaNumObjLstT;
  }
  try {
    const arrvFuncParaRela_ParaNumExObjLst = await vFuncParaRela_ParaNum_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvFuncParaRela_ParaNumExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncParaRela_ParaNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncParaRela_ParaNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFuncParaRela_ParaNumEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFuncParaRela_ParaNumObjLstCache: Array<clsvFuncParaRela_ParaNumEN> =
      JSON.parse(strTempObjLst);
    return arrvFuncParaRela_ParaNumObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFuncParaRela_ParaNum_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFuncParaRela_ParaNumEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
          vFuncParaRela_ParaNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFuncParaRela_ParaNumEN._CurrTabName;
  if (IsNullOrEmpty(clsvFuncParaRela_ParaNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncParaRela_ParaNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFuncParaRela_ParaNumExObjLstCache: Array<clsvFuncParaRela_ParaNumEN> =
      JSON.parse(strTempObjLst);
    const arrvFuncParaRela_ParaNumObjLstT = vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(
      arrvFuncParaRela_ParaNumExObjLstCache,
    );
    return arrvFuncParaRela_ParaNumObjLstT;
  }
  try {
    const arrvFuncParaRela_ParaNumExObjLst = await vFuncParaRela_ParaNum_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvFuncParaRela_ParaNumExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncParaRela_ParaNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncParaRela_ParaNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFuncParaRela_ParaNumEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFuncParaRela_ParaNumObjLstCache: Array<clsvFuncParaRela_ParaNumEN> =
      JSON.parse(strTempObjLst);
    return arrvFuncParaRela_ParaNumObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFuncParaRela_ParaNum_GetObjLstCache(): Promise<
  Array<clsvFuncParaRela_ParaNumEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvFuncParaRela_ParaNumObjLstCache;
  switch (clsvFuncParaRela_ParaNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstClientCache();
      break;
    default:
      arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstClientCache();
      break;
  }
  return arrvFuncParaRela_ParaNumObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFuncParaRela_ParaNum_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFuncParaRela_ParaNumObjLstCache;
  switch (clsvFuncParaRela_ParaNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFuncParaRela_ParaNumObjLstCache =
        await vFuncParaRela_ParaNum_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvFuncParaRela_ParaNumObjLstCache =
        await vFuncParaRela_ParaNum_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvFuncParaRela_ParaNumObjLstCache = null;
      break;
    default:
      arrvFuncParaRela_ParaNumObjLstCache = null;
      break;
  }
  return arrvFuncParaRela_ParaNumObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncId4CodeCond:条件对象
 * @returns 对象列表子集
 */
export async function vFuncParaRela_ParaNum_GetSubObjLstCache(
  objvFuncParaRela_ParaNumCond: clsvFuncParaRela_ParaNumEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstCache();
  let arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumObjLstCache;
  if (
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp == null ||
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncParaRela_ParaNumSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncParaRela_ParaNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncParaRela_ParaNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncParaRela_ParaNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFuncParaRela_ParaNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFuncParaRela_ParaNumCond),
      vFuncParaRela_ParaNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFuncParaRela_ParaNumEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncId4Code:关键字列表
 * @returns 对象列表
 **/
export async function vFuncParaRela_ParaNum_GetObjLstByFuncId4CodeLstAsync(
  arrFuncId4Code: Array<string>,
): Promise<Array<clsvFuncParaRela_ParaNumEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4CodeLstAsync';
  const strAction = 'GetObjLstByFuncId4CodeLst';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId4Code, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFuncParaRela_ParaNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
 * @param arrstrFuncId4CodeLst:关键字列表
 * @returns 对象列表
 */
export async function vFuncParaRela_ParaNum_GetObjLstByFuncId4CodeLstCache(
  arrFuncId4CodeLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFuncId4CodeLstCache';
  try {
    const arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstCache();
    const arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumObjLstCache.filter(
      (x) => arrFuncId4CodeLst.indexOf(x.funcId4Code) > -1,
    );
    return arrvFuncParaRela_ParaNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncId4CodeLst.join(','),
      vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFuncParaRela_ParaNumEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
          vFuncParaRela_ParaNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFuncParaRela_ParaNumEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
          vFuncParaRela_ParaNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFuncParaRela_ParaNumEN>();
  const arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstCache();
  if (arrvFuncParaRela_ParaNumObjLstCache.length == 0) return arrvFuncParaRela_ParaNumObjLstCache;
  let arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFuncParaRela_ParaNumCond = new clsvFuncParaRela_ParaNumEN();
  ObjectAssign(objvFuncParaRela_ParaNumCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFuncParaRela_ParaNumWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncParaRela_ParaNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFuncParaRela_ParaNumSel.length == 0) return arrvFuncParaRela_ParaNumSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.sort(
        vFuncParaRela_ParaNum_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.sort(objPagerPara.sortFun);
    }
    arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.slice(intStart, intEnd);
    return arrvFuncParaRela_ParaNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFuncParaRela_ParaNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFuncParaRela_ParaNumEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFuncParaRela_ParaNum_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFuncParaRela_ParaNumEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFuncParaRela_ParaNumEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
          vFuncParaRela_ParaNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
 * @param objstrFuncId4CodeCond:条件对象
 * @returns 对象列表子集
 */
export async function vFuncParaRela_ParaNum_IsExistRecordCache(
  objvFuncParaRela_ParaNumCond: clsvFuncParaRela_ParaNumEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstCache();
  if (arrvFuncParaRela_ParaNumObjLstCache == null) return false;
  let arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumObjLstCache;
  if (
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp == null ||
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncParaRela_ParaNumSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncParaRela_ParaNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncParaRela_ParaNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncParaRela_ParaNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFuncParaRela_ParaNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFuncParaRela_ParaNumCond),
      vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFuncParaRela_ParaNum_IsExistCache(strFuncId4Code: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstCache();
  if (arrvFuncParaRela_ParaNumObjLstCache == null) return false;
  try {
    const arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumObjLstCache.filter(
      (x) => x.funcId4Code == strFuncId4Code,
    );
    if (arrvFuncParaRela_ParaNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncId4Code,
      vFuncParaRela_ParaNum_ConstructorName,
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
 * @param strFuncId4Code:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFuncParaRela_ParaNum_IsExistAsync(strFuncId4Code: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
export async function vFuncParaRela_ParaNum_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFuncParaRela_ParaNum_Controller, strAction);

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
        vFuncParaRela_ParaNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncParaRela_ParaNum_ConstructorName,
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
 * @param objvFuncParaRela_ParaNumCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFuncParaRela_ParaNum_GetRecCountByCondCache(
  objvFuncParaRela_ParaNumCond: clsvFuncParaRela_ParaNumEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFuncParaRela_ParaNumObjLstCache = await vFuncParaRela_ParaNum_GetObjLstCache();
  if (arrvFuncParaRela_ParaNumObjLstCache == null) return 0;
  let arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumObjLstCache;
  if (
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp == null ||
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncParaRela_ParaNumSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncParaRela_ParaNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncParaRela_ParaNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncParaRela_ParaNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncParaRela_ParaNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncParaRela_ParaNumSel = arrvFuncParaRela_ParaNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFuncParaRela_ParaNumSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFuncParaRela_ParaNumCond),
      vFuncParaRela_ParaNum_ConstructorName,
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
export function vFuncParaRela_ParaNum_GetWebApiUrl(
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
export function vFuncParaRela_ParaNum_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvFuncParaRela_ParaNumEN._CurrTabName;
    switch (clsvFuncParaRela_ParaNumEN.CacheModeId) {
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
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFuncParaRela_ParaNum_GetJSONStrByObj(
  pobjvFuncParaRela_ParaNumEN: clsvFuncParaRela_ParaNumEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFuncParaRela_ParaNumEN);
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
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFuncParaRela_ParaNum_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFuncParaRela_ParaNumEN> {
  let arrvFuncParaRela_ParaNumObjLst = new Array<clsvFuncParaRela_ParaNumEN>();
  if (strJSON === '') {
    return arrvFuncParaRela_ParaNumObjLst;
  }
  try {
    arrvFuncParaRela_ParaNumObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFuncParaRela_ParaNumObjLst;
  }
  return arrvFuncParaRela_ParaNumObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFuncParaRela_ParaNumObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFuncParaRela_ParaNum_GetObjLstByJSONObjLst(
  arrvFuncParaRela_ParaNumObjLstS: Array<clsvFuncParaRela_ParaNumEN>,
): Array<clsvFuncParaRela_ParaNumEN> {
  const arrvFuncParaRela_ParaNumObjLst = new Array<clsvFuncParaRela_ParaNumEN>();
  for (const objInFor of arrvFuncParaRela_ParaNumObjLstS) {
    const obj1 = vFuncParaRela_ParaNum_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFuncParaRela_ParaNumObjLst.push(obj1);
  }
  return arrvFuncParaRela_ParaNumObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFuncParaRela_ParaNum_GetObjByJSONStr(strJSON: string): clsvFuncParaRela_ParaNumEN {
  let pobjvFuncParaRela_ParaNumEN = new clsvFuncParaRela_ParaNumEN();
  if (strJSON === '') {
    return pobjvFuncParaRela_ParaNumEN;
  }
  try {
    pobjvFuncParaRela_ParaNumEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFuncParaRela_ParaNumEN;
  }
  return pobjvFuncParaRela_ParaNumEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFuncParaRela_ParaNum_GetCombineCondition(
  objvFuncParaRela_ParaNumCond: clsvFuncParaRela_ParaNumEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRela_ParaNumCond.dicFldComparisonOp,
      clsvFuncParaRela_ParaNumEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objvFuncParaRela_ParaNumCond.dicFldComparisonOp[clsvFuncParaRela_ParaNumEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncParaRela_ParaNumEN.con_FuncId4Code,
      objvFuncParaRela_ParaNumCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncParaRela_ParaNumCond.dicFldComparisonOp,
      clsvFuncParaRela_ParaNumEN.con_ParaNum,
    ) == true
  ) {
    const strComparisonOpParaNum: string =
      objvFuncParaRela_ParaNumCond.dicFldComparisonOp[clsvFuncParaRela_ParaNumEN.con_ParaNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFuncParaRela_ParaNumEN.con_ParaNum,
      objvFuncParaRela_ParaNumCond.paraNum,
      strComparisonOpParaNum,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFuncParaRela_ParaNumENS:源对象
 * @param objvFuncParaRela_ParaNumENT:目标对象
 */
export function vFuncParaRela_ParaNum_GetObjFromJsonObj(
  objvFuncParaRela_ParaNumENS: clsvFuncParaRela_ParaNumEN,
): clsvFuncParaRela_ParaNumEN {
  const objvFuncParaRela_ParaNumENT: clsvFuncParaRela_ParaNumEN = new clsvFuncParaRela_ParaNumEN();
  ObjectAssign(objvFuncParaRela_ParaNumENT, objvFuncParaRela_ParaNumENS);
  return objvFuncParaRela_ParaNumENT;
}
