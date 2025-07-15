/**
 * 类名:clsvFuncModuleTabNumWApi
 * 表名:vFuncModuleTabNum(00050289)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:33
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
 * v模块-表数(vFuncModuleTabNum)
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
import { clsvFuncModuleTabNumEN } from '@/ts/L0Entity/PrjManage/clsvFuncModuleTabNumEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFuncModuleTabNum_Controller = 'vFuncModuleTabNumApi';
export const vFuncModuleTabNum_ConstructorName = 'vFuncModuleTabNum';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncModuleAgcId:关键字
 * @returns 对象
 **/
export async function vFuncModuleTabNum_GetObjByFuncModuleAgcIdAsync(
  strFuncModuleAgcId: string,
): Promise<clsvFuncModuleTabNumEN | null> {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdAsync';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsvFuncModuleTabNumWApi.GetObjByFuncModuleAgcIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsvFuncModuleTabNumWApi.GetObjByFuncModuleAgcIdAsync)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncModuleAgcId';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
      const objvFuncModuleTabNum = vFuncModuleTabNum_GetObjFromJsonObj(returnObj);
      return objvFuncModuleTabNum;
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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjByFuncModuleAgcIdCache(
  strFuncModuleAgcId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdCache';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsvFuncModuleTabNumWApi.GetObjByFuncModuleAgcIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsvFuncModuleTabNumWApi.GetObjByFuncModuleAgcIdCache)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstCache(strPrjId);
  try {
    const arrvFuncModuleTabNumSel = arrvFuncModuleTabNumObjLstCache.filter(
      (x) => x.funcModuleAgcId == strFuncModuleAgcId,
    );
    let objvFuncModuleTabNum: clsvFuncModuleTabNumEN;
    if (arrvFuncModuleTabNumSel.length > 0) {
      objvFuncModuleTabNum = arrvFuncModuleTabNumSel[0];
      return objvFuncModuleTabNum;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFuncModuleTabNumConst = await vFuncModuleTabNum_GetObjByFuncModuleAgcIdAsync(
          strFuncModuleAgcId,
        );
        if (objvFuncModuleTabNumConst != null) {
          vFuncModuleTabNum_ReFreshThisCache(strPrjId);
          return objvFuncModuleTabNumConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncModuleAgcId,
      vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjByFuncModuleAgcIdlocalStorage(
  strFuncModuleAgcId: string,
) {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdlocalStorage';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsvFuncModuleTabNumWApi.GetObjByFuncModuleAgcIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsvFuncModuleTabNumWApi.GetObjByFuncModuleAgcIdlocalStorage)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFuncModuleTabNumEN._CurrTabName, strFuncModuleAgcId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFuncModuleTabNumCache: clsvFuncModuleTabNumEN = JSON.parse(strTempObj);
    return objvFuncModuleTabNumCache;
  }
  try {
    const objvFuncModuleTabNum = await vFuncModuleTabNum_GetObjByFuncModuleAgcIdAsync(
      strFuncModuleAgcId,
    );
    if (objvFuncModuleTabNum != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFuncModuleTabNum));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFuncModuleTabNum;
    }
    return objvFuncModuleTabNum;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncModuleAgcId,
      vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvFuncModuleTabNumWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvFuncModuleTabNumWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvFuncModuleTabNumEN.con_FuncModuleAgcId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFuncModuleTabNumEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFuncModuleTabNumEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncModuleAgcId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFuncModuleTabNum = await vFuncModuleTabNum_GetObjByFuncModuleAgcIdCache(
    strFuncModuleAgcId,
    strPrjIdClassfy,
  );
  if (objvFuncModuleTabNum == null) return '';
  if (objvFuncModuleTabNum.GetFldValue(strOutFldName) == null) return '';
  return objvFuncModuleTabNum.GetFldValue(strOutFldName).toString();
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
export function vFuncModuleTabNum_SortFunDefa(
  a: clsvFuncModuleTabNumEN,
  b: clsvFuncModuleTabNumEN,
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
export function vFuncModuleTabNum_SortFunDefa2Fld(
  a: clsvFuncModuleTabNumEN,
  b: clsvFuncModuleTabNumEN,
): number {
  if (a.tabNum == b.tabNum) return a.prjId.localeCompare(b.prjId);
  else return a.tabNum - b.tabNum;
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
export function vFuncModuleTabNum_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFuncModuleTabNumEN.con_FuncModuleAgcId:
        return (a: clsvFuncModuleTabNumEN, b: clsvFuncModuleTabNumEN) => {
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsvFuncModuleTabNumEN.con_TabNum:
        return (a: clsvFuncModuleTabNumEN, b: clsvFuncModuleTabNumEN) => {
          return a.tabNum - b.tabNum;
        };
      case clsvFuncModuleTabNumEN.con_PrjId:
        return (a: clsvFuncModuleTabNumEN, b: clsvFuncModuleTabNumEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFuncModuleTabNum]中不存在!(in ${vFuncModuleTabNum_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFuncModuleTabNumEN.con_FuncModuleAgcId:
        return (a: clsvFuncModuleTabNumEN, b: clsvFuncModuleTabNumEN) => {
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsvFuncModuleTabNumEN.con_TabNum:
        return (a: clsvFuncModuleTabNumEN, b: clsvFuncModuleTabNumEN) => {
          return b.tabNum - a.tabNum;
        };
      case clsvFuncModuleTabNumEN.con_PrjId:
        return (a: clsvFuncModuleTabNumEN, b: clsvFuncModuleTabNumEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFuncModuleTabNum]中不存在!(in ${vFuncModuleTabNum_ConstructorName}.${strThisFuncName})`;
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
export async function vFuncModuleTabNum_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFuncModuleTabNumEN.con_FuncModuleAgcId:
      return (obj: clsvFuncModuleTabNumEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsvFuncModuleTabNumEN.con_TabNum:
      return (obj: clsvFuncModuleTabNumEN) => {
        return obj.tabNum === value;
      };
    case clsvFuncModuleTabNumEN.con_PrjId:
      return (obj: clsvFuncModuleTabNumEN) => {
        return obj.prjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFuncModuleTabNum]中不存在!(in ${vFuncModuleTabNum_ConstructorName}.${strThisFuncName})`;
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
export async function vFuncModuleTabNum_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvFuncModuleTabNumWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvFuncModuleTabNumWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvFuncModuleTabNumEN.con_FuncModuleAgcId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFuncModuleTabNum = await vFuncModuleTabNum_GetObjLstCache(strPrjIdClassfy);
  if (arrvFuncModuleTabNum == null) return [];
  let arrvFuncModuleTabNumSel = arrvFuncModuleTabNum;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFuncModuleTabNumSel.length == 0) return [];
  return arrvFuncModuleTabNumSel.map((x) => x.funcModuleAgcId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFuncModuleTabNum_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFuncModuleTabNumEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
      const objvFuncModuleTabNum = vFuncModuleTabNum_GetObjFromJsonObj(returnObj);
      return objvFuncModuleTabNum;
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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFuncModuleTabNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFuncModuleTabNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvFuncModuleTabNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFuncModuleTabNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncModuleTabNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFuncModuleTabNumExObjLstCache: Array<clsvFuncModuleTabNumEN> =
      CacheHelper.Get(strKey);
    const arrvFuncModuleTabNumObjLstT = vFuncModuleTabNum_GetObjLstByJSONObjLst(
      arrvFuncModuleTabNumExObjLstCache,
    );
    return arrvFuncModuleTabNumObjLstT;
  }
  try {
    const arrvFuncModuleTabNumExObjLst = await vFuncModuleTabNum_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvFuncModuleTabNumExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncModuleTabNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncModuleTabNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFuncModuleTabNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFuncModuleTabNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvFuncModuleTabNumEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvFuncModuleTabNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFuncModuleTabNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncModuleTabNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFuncModuleTabNumExObjLstCache: Array<clsvFuncModuleTabNumEN> =
      JSON.parse(strTempObjLst);
    const arrvFuncModuleTabNumObjLstT = vFuncModuleTabNum_GetObjLstByJSONObjLst(
      arrvFuncModuleTabNumExObjLstCache,
    );
    return arrvFuncModuleTabNumObjLstT;
  }
  try {
    const arrvFuncModuleTabNumExObjLst = await vFuncModuleTabNum_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvFuncModuleTabNumExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncModuleTabNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncModuleTabNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvFuncModuleTabNumEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFuncModuleTabNumObjLstCache: Array<clsvFuncModuleTabNumEN> =
      JSON.parse(strTempObjLst);
    return arrvFuncModuleTabNumObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFuncModuleTabNum_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFuncModuleTabNumEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
          vFuncModuleTabNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleTabNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFuncModuleTabNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFuncModuleTabNumEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvFuncModuleTabNumEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvFuncModuleTabNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFuncModuleTabNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFuncModuleTabNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFuncModuleTabNumExObjLstCache: Array<clsvFuncModuleTabNumEN> =
      JSON.parse(strTempObjLst);
    const arrvFuncModuleTabNumObjLstT = vFuncModuleTabNum_GetObjLstByJSONObjLst(
      arrvFuncModuleTabNumExObjLstCache,
    );
    return arrvFuncModuleTabNumObjLstT;
  }
  try {
    const arrvFuncModuleTabNumExObjLst = await vFuncModuleTabNum_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvFuncModuleTabNumExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFuncModuleTabNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvFuncModuleTabNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvFuncModuleTabNumEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFuncModuleTabNumObjLstCache: Array<clsvFuncModuleTabNumEN> =
      JSON.parse(strTempObjLst);
    return arrvFuncModuleTabNumObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFuncModuleTabNum_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvFuncModuleTabNumEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvFuncModuleTabNumWApi.vFuncModuleTabNum_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvFuncModuleTabNumWApi.vFuncModuleTabNum_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvFuncModuleTabNumObjLstCache;
  switch (clsvFuncModuleTabNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvFuncModuleTabNumObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFuncModuleTabNum_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFuncModuleTabNumObjLstCache;
  switch (clsvFuncModuleTabNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrvFuncModuleTabNumObjLstCache = null;
      break;
    default:
      arrvFuncModuleTabNumObjLstCache = null;
      break;
  }
  return arrvFuncModuleTabNumObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncModuleAgcIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFuncModuleTabNum_GetSubObjLstCache(
  objvFuncModuleTabNumCond: clsvFuncModuleTabNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstCache(strPrjId);
  let arrvFuncModuleTabNumSel = arrvFuncModuleTabNumObjLstCache;
  if (
    objvFuncModuleTabNumCond.sfFldComparisonOp == null ||
    objvFuncModuleTabNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncModuleTabNumSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncModuleTabNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncModuleTabNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncModuleTabNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncModuleTabNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFuncModuleTabNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFuncModuleTabNumCond),
      vFuncModuleTabNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFuncModuleTabNumEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncModuleAgcId:关键字列表
 * @returns 对象列表
 **/
export async function vFuncModuleTabNum_GetObjLstByFuncModuleAgcIdLstAsync(
  arrFuncModuleAgcId: Array<string>,
): Promise<Array<clsvFuncModuleTabNumEN>> {
  const strThisFuncName = 'GetObjLstByFuncModuleAgcIdLstAsync';
  const strAction = 'GetObjLstByFuncModuleAgcIdLst';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
          vFuncModuleTabNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleTabNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjLstByFuncModuleAgcIdLstCache(
  arrFuncModuleAgcIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByFuncModuleAgcIdLstCache';
  try {
    const arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstCache(strPrjId);
    const arrvFuncModuleTabNumSel = arrvFuncModuleTabNumObjLstCache.filter(
      (x) => arrFuncModuleAgcIdLst.indexOf(x.funcModuleAgcId) > -1,
    );
    return arrvFuncModuleTabNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncModuleAgcIdLst.join(','),
      vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFuncModuleTabNumEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
          vFuncModuleTabNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleTabNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFuncModuleTabNumEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
          vFuncModuleTabNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleTabNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFuncModuleTabNumEN>();
  const arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstCache(strPrjId);
  if (arrvFuncModuleTabNumObjLstCache.length == 0) return arrvFuncModuleTabNumObjLstCache;
  let arrvFuncModuleTabNumSel = arrvFuncModuleTabNumObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFuncModuleTabNumCond = new clsvFuncModuleTabNumEN();
  ObjectAssign(objvFuncModuleTabNumCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFuncModuleTabNumWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncModuleTabNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFuncModuleTabNumSel.length == 0) return arrvFuncModuleTabNumSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.sort(
        vFuncModuleTabNum_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.sort(objPagerPara.sortFun);
    }
    arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.slice(intStart, intEnd);
    return arrvFuncModuleTabNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFuncModuleTabNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFuncModuleTabNumEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFuncModuleTabNum_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFuncModuleTabNumEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFuncModuleTabNumEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
          vFuncModuleTabNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFuncModuleTabNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_IsExistRecordCache(
  objvFuncModuleTabNumCond: clsvFuncModuleTabNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstCache(strPrjId);
  if (arrvFuncModuleTabNumObjLstCache == null) return false;
  let arrvFuncModuleTabNumSel = arrvFuncModuleTabNumObjLstCache;
  if (
    objvFuncModuleTabNumCond.sfFldComparisonOp == null ||
    objvFuncModuleTabNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncModuleTabNumSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncModuleTabNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncModuleTabNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncModuleTabNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncModuleTabNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFuncModuleTabNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFuncModuleTabNumCond),
      vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_IsExistCache(strFuncModuleAgcId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstCache(strPrjId);
  if (arrvFuncModuleTabNumObjLstCache == null) return false;
  try {
    const arrvFuncModuleTabNumSel = arrvFuncModuleTabNumObjLstCache.filter(
      (x) => x.funcModuleAgcId == strFuncModuleAgcId,
    );
    if (arrvFuncModuleTabNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncModuleAgcId,
      vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_IsExistAsync(strFuncModuleAgcId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
export async function vFuncModuleTabNum_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFuncModuleTabNum_Controller, strAction);

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
        vFuncModuleTabNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFuncModuleTabNum_ConstructorName,
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
 * @param objvFuncModuleTabNumCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFuncModuleTabNum_GetRecCountByCondCache(
  objvFuncModuleTabNumCond: clsvFuncModuleTabNumEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFuncModuleTabNumObjLstCache = await vFuncModuleTabNum_GetObjLstCache(strPrjId);
  if (arrvFuncModuleTabNumObjLstCache == null) return 0;
  let arrvFuncModuleTabNumSel = arrvFuncModuleTabNumObjLstCache;
  if (
    objvFuncModuleTabNumCond.sfFldComparisonOp == null ||
    objvFuncModuleTabNumCond.sfFldComparisonOp == ''
  )
    return arrvFuncModuleTabNumSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFuncModuleTabNumCond.sfFldComparisonOp,
  );
  //console.log("clsvFuncModuleTabNumWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFuncModuleTabNumCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFuncModuleTabNumCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFuncModuleTabNumSel = arrvFuncModuleTabNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFuncModuleTabNumSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFuncModuleTabNumCond),
      vFuncModuleTabNum_ConstructorName,
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
export function vFuncModuleTabNum_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vFuncModuleTabNum_ReFreshThisCache(strPrjId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvFuncModuleTabNumEN._CurrTabName, strPrjId);
    switch (clsvFuncModuleTabNumEN.CacheModeId) {
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
export function vFuncModuleTabNum_GetJSONStrByObj(
  pobjvFuncModuleTabNumEN: clsvFuncModuleTabNumEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFuncModuleTabNumEN);
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
export function vFuncModuleTabNum_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFuncModuleTabNumEN> {
  let arrvFuncModuleTabNumObjLst = new Array<clsvFuncModuleTabNumEN>();
  if (strJSON === '') {
    return arrvFuncModuleTabNumObjLst;
  }
  try {
    arrvFuncModuleTabNumObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFuncModuleTabNumObjLst;
  }
  return arrvFuncModuleTabNumObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFuncModuleTabNumObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFuncModuleTabNum_GetObjLstByJSONObjLst(
  arrvFuncModuleTabNumObjLstS: Array<clsvFuncModuleTabNumEN>,
): Array<clsvFuncModuleTabNumEN> {
  const arrvFuncModuleTabNumObjLst = new Array<clsvFuncModuleTabNumEN>();
  for (const objInFor of arrvFuncModuleTabNumObjLstS) {
    const obj1 = vFuncModuleTabNum_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFuncModuleTabNumObjLst.push(obj1);
  }
  return arrvFuncModuleTabNumObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFuncModuleTabNum_GetObjByJSONStr(strJSON: string): clsvFuncModuleTabNumEN {
  let pobjvFuncModuleTabNumEN = new clsvFuncModuleTabNumEN();
  if (strJSON === '') {
    return pobjvFuncModuleTabNumEN;
  }
  try {
    pobjvFuncModuleTabNumEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFuncModuleTabNumEN;
  }
  return pobjvFuncModuleTabNumEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFuncModuleTabNum_GetCombineCondition(
  objvFuncModuleTabNumCond: clsvFuncModuleTabNumEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncModuleTabNumCond.dicFldComparisonOp,
      clsvFuncModuleTabNumEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objvFuncModuleTabNumCond.dicFldComparisonOp[clsvFuncModuleTabNumEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncModuleTabNumEN.con_FuncModuleAgcId,
      objvFuncModuleTabNumCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncModuleTabNumCond.dicFldComparisonOp,
      clsvFuncModuleTabNumEN.con_TabNum,
    ) == true
  ) {
    const strComparisonOpTabNum: string =
      objvFuncModuleTabNumCond.dicFldComparisonOp[clsvFuncModuleTabNumEN.con_TabNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFuncModuleTabNumEN.con_TabNum,
      objvFuncModuleTabNumCond.tabNum,
      strComparisonOpTabNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFuncModuleTabNumCond.dicFldComparisonOp,
      clsvFuncModuleTabNumEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvFuncModuleTabNumCond.dicFldComparisonOp[clsvFuncModuleTabNumEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFuncModuleTabNumEN.con_PrjId,
      objvFuncModuleTabNumCond.prjId,
      strComparisonOpPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFuncModuleTabNumENS:源对象
 * @param objvFuncModuleTabNumENT:目标对象
 */
export function vFuncModuleTabNum_GetObjFromJsonObj(
  objvFuncModuleTabNumENS: clsvFuncModuleTabNumEN,
): clsvFuncModuleTabNumEN {
  const objvFuncModuleTabNumENT: clsvFuncModuleTabNumEN = new clsvFuncModuleTabNumEN();
  ObjectAssign(objvFuncModuleTabNumENT, objvFuncModuleTabNumENS);
  return objvFuncModuleTabNumENT;
}
