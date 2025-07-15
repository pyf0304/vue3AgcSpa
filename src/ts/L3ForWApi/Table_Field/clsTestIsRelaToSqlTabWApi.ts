/**
 * 类名:clsTestIsRelaToSqlTabWApi
 * 表名:TestIsRelaToSqlTab(00050212)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 09:50:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 测试与SQL表不相关(TestIsRelaToSqlTab)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsTestIsRelaToSqlTabEN } from '@/ts/L0Entity/Table_Field/clsTestIsRelaToSqlTabEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const testIsRelaToSqlTab_Controller = 'TestIsRelaToSqlTabApi';
export const testIsRelaToSqlTab_ConstructorName = 'testIsRelaToSqlTab';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function TestIsRelaToSqlTab_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsTestIsRelaToSqlTabEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空！(In clsTestIsRelaToSqlTabWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
      const objTestIsRelaToSqlTab = TestIsRelaToSqlTab_GetObjFromJsonObj(returnObj);
      return objTestIsRelaToSqlTab;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function TestIsRelaToSqlTab_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空！(In clsTestIsRelaToSqlTabWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstCache();
  try {
    const arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objTestIsRelaToSqlTab: clsTestIsRelaToSqlTabEN;
    if (arrTestIsRelaToSqlTabSel.length > 0) {
      objTestIsRelaToSqlTab = arrTestIsRelaToSqlTabSel[0];
      return objTestIsRelaToSqlTab;
    } else {
      if (bolTryAsyncOnce == true) {
        const objTestIsRelaToSqlTabConst = await TestIsRelaToSqlTab_GetObjBymIdAsync(lngmId);
        if (objTestIsRelaToSqlTabConst != null) {
          TestIsRelaToSqlTab_ReFreshThisCache();
          return objTestIsRelaToSqlTabConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function TestIsRelaToSqlTab_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空！(In clsTestIsRelaToSqlTabWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsTestIsRelaToSqlTabEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objTestIsRelaToSqlTabCache: clsTestIsRelaToSqlTabEN = JSON.parse(strTempObj);
    return objTestIsRelaToSqlTabCache;
  }
  try {
    const objTestIsRelaToSqlTab = await TestIsRelaToSqlTab_GetObjBymIdAsync(lngmId);
    if (objTestIsRelaToSqlTab != null) {
      localStorage.setItem(strKey, JSON.stringify(objTestIsRelaToSqlTab));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objTestIsRelaToSqlTab;
    }
    return objTestIsRelaToSqlTab;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objTestIsRelaToSqlTab:所给的对象
 * @returns 对象
 */
export async function TestIsRelaToSqlTab_UpdateObjInLstCache(
  objTestIsRelaToSqlTab: clsTestIsRelaToSqlTabEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstCache();
    const obj = arrTestIsRelaToSqlTabObjLstCache.find(
      (x) => x.tabId == objTestIsRelaToSqlTab.tabId && x.userId == objTestIsRelaToSqlTab.userId,
    );
    if (obj != null) {
      objTestIsRelaToSqlTab.mId = obj.mId;
      ObjectAssign(obj, objTestIsRelaToSqlTab);
    } else {
      arrTestIsRelaToSqlTabObjLstCache.push(objTestIsRelaToSqlTab);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段，不能生成此函数！*/

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function TestIsRelaToSqlTab_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsTestIsRelaToSqlTabEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsTestIsRelaToSqlTabEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsTestIsRelaToSqlTabEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objTestIsRelaToSqlTab = await TestIsRelaToSqlTab_GetObjBymIdCache(lngmId);
  if (objTestIsRelaToSqlTab == null) return '';
  if (objTestIsRelaToSqlTab.GetFldValue(strOutFldName) == null) return '';
  return objTestIsRelaToSqlTab.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TestIsRelaToSqlTab_SortFunDefa(
  a: clsTestIsRelaToSqlTabEN,
  b: clsTestIsRelaToSqlTabEN,
): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TestIsRelaToSqlTab_SortFunDefa2Fld(
  a: clsTestIsRelaToSqlTabEN,
  b: clsTestIsRelaToSqlTabEN,
): number {
  if (a.userId == b.userId) return a.tabId.localeCompare(b.tabId);
  else return a.userId.localeCompare(b.userId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TestIsRelaToSqlTab_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTestIsRelaToSqlTabEN.con_mId:
        return (a: clsTestIsRelaToSqlTabEN, b: clsTestIsRelaToSqlTabEN) => {
          return a.mId - b.mId;
        };
      case clsTestIsRelaToSqlTabEN.con_UserId:
        return (a: clsTestIsRelaToSqlTabEN, b: clsTestIsRelaToSqlTabEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsTestIsRelaToSqlTabEN.con_TabId:
        return (a: clsTestIsRelaToSqlTabEN, b: clsTestIsRelaToSqlTabEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TestIsRelaToSqlTab]中不存在！(in ${testIsRelaToSqlTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTestIsRelaToSqlTabEN.con_mId:
        return (a: clsTestIsRelaToSqlTabEN, b: clsTestIsRelaToSqlTabEN) => {
          return b.mId - a.mId;
        };
      case clsTestIsRelaToSqlTabEN.con_UserId:
        return (a: clsTestIsRelaToSqlTabEN, b: clsTestIsRelaToSqlTabEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsTestIsRelaToSqlTabEN.con_TabId:
        return (a: clsTestIsRelaToSqlTabEN, b: clsTestIsRelaToSqlTabEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TestIsRelaToSqlTab]中不存在！(in ${testIsRelaToSqlTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function TestIsRelaToSqlTab_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTestIsRelaToSqlTabEN.con_mId:
      return (obj: clsTestIsRelaToSqlTabEN) => {
        return obj.mId === value;
      };
    case clsTestIsRelaToSqlTabEN.con_UserId:
      return (obj: clsTestIsRelaToSqlTabEN) => {
        return obj.userId === value;
      };
    case clsTestIsRelaToSqlTabEN.con_TabId:
      return (obj: clsTestIsRelaToSqlTabEN) => {
        return obj.tabId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TestIsRelaToSqlTab]中不存在！(in ${testIsRelaToSqlTab_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function TestIsRelaToSqlTab_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsTestIsRelaToSqlTabEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrTestIsRelaToSqlTab = await TestIsRelaToSqlTab_GetObjLstCache();
  if (arrTestIsRelaToSqlTab == null) return [];
  let arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTab;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrTestIsRelaToSqlTabSel.length == 0) return [];
  return arrTestIsRelaToSqlTabSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TestIsRelaToSqlTab_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
export async function TestIsRelaToSqlTab_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
export async function TestIsRelaToSqlTab_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTestIsRelaToSqlTabEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
      const objTestIsRelaToSqlTab = TestIsRelaToSqlTab_GetObjFromJsonObj(returnObj);
      return objTestIsRelaToSqlTab;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTestIsRelaToSqlTabEN._CurrTabName;
  if (IsNullOrEmpty(clsTestIsRelaToSqlTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTestIsRelaToSqlTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrTestIsRelaToSqlTabExObjLstCache: Array<clsTestIsRelaToSqlTabEN> =
      CacheHelper.Get(strKey);
    const arrTestIsRelaToSqlTabObjLstT = TestIsRelaToSqlTab_GetObjLstByJSONObjLst(
      arrTestIsRelaToSqlTabExObjLstCache,
    );
    return arrTestIsRelaToSqlTabObjLstT;
  }
  try {
    const arrTestIsRelaToSqlTabExObjLst = await TestIsRelaToSqlTab_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrTestIsRelaToSqlTabExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrTestIsRelaToSqlTabExObjLst.length,
    );
    console.log(strInfo);
    return arrTestIsRelaToSqlTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTestIsRelaToSqlTabEN._CurrTabName;
  if (IsNullOrEmpty(clsTestIsRelaToSqlTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTestIsRelaToSqlTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTestIsRelaToSqlTabExObjLstCache: Array<clsTestIsRelaToSqlTabEN> =
      JSON.parse(strTempObjLst);
    const arrTestIsRelaToSqlTabObjLstT = TestIsRelaToSqlTab_GetObjLstByJSONObjLst(
      arrTestIsRelaToSqlTabExObjLstCache,
    );
    return arrTestIsRelaToSqlTabObjLstT;
  }
  try {
    const arrTestIsRelaToSqlTabExObjLst = await TestIsRelaToSqlTab_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrTestIsRelaToSqlTabExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrTestIsRelaToSqlTabExObjLst.length,
    );
    console.log(strInfo);
    return arrTestIsRelaToSqlTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.如果本地不存在就返回null，不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsTestIsRelaToSqlTabEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTestIsRelaToSqlTabObjLstCache: Array<clsTestIsRelaToSqlTabEN> =
      JSON.parse(strTempObjLst);
    return arrTestIsRelaToSqlTabObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTestIsRelaToSqlTabEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
          testIsRelaToSqlTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TestIsRelaToSqlTab_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTestIsRelaToSqlTabEN._CurrTabName;
  if (IsNullOrEmpty(clsTestIsRelaToSqlTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTestIsRelaToSqlTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTestIsRelaToSqlTabExObjLstCache: Array<clsTestIsRelaToSqlTabEN> =
      JSON.parse(strTempObjLst);
    const arrTestIsRelaToSqlTabObjLstT = TestIsRelaToSqlTab_GetObjLstByJSONObjLst(
      arrTestIsRelaToSqlTabExObjLstCache,
    );
    return arrTestIsRelaToSqlTabObjLstT;
  }
  try {
    const arrTestIsRelaToSqlTabExObjLst = await TestIsRelaToSqlTab_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrTestIsRelaToSqlTabExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrTestIsRelaToSqlTabExObjLst.length,
    );
    console.log(strInfo);
    return arrTestIsRelaToSqlTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsTestIsRelaToSqlTabEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTestIsRelaToSqlTabObjLstCache: Array<clsTestIsRelaToSqlTabEN> =
      JSON.parse(strTempObjLst);
    return arrTestIsRelaToSqlTabObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstCache(): Promise<Array<clsTestIsRelaToSqlTabEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrTestIsRelaToSqlTabObjLstCache;
  switch (clsTestIsRelaToSqlTabEN.CacheModeId) {
    case '04': //sessionStorage
      arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstClientCache();
      break;
    default:
      arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstClientCache();
      break;
  }
  return arrTestIsRelaToSqlTabObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrTestIsRelaToSqlTabObjLstCache;
  switch (clsTestIsRelaToSqlTabEN.CacheModeId) {
    case '04': //sessionStorage
      arrTestIsRelaToSqlTabObjLstCache =
        await TestIsRelaToSqlTab_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrTestIsRelaToSqlTabObjLstCache = null;
      break;
    default:
      arrTestIsRelaToSqlTabObjLstCache = null;
      break;
  }
  return arrTestIsRelaToSqlTabObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TestIsRelaToSqlTab_GetSubObjLstCache(
  objTestIsRelaToSqlTabCond: clsTestIsRelaToSqlTabEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstCache();
  let arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabObjLstCache;
  if (
    objTestIsRelaToSqlTabCond.sfFldComparisonOp == null ||
    objTestIsRelaToSqlTabCond.sfFldComparisonOp == ''
  )
    return arrTestIsRelaToSqlTabSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTestIsRelaToSqlTabCond.sfFldComparisonOp,
  );
  //console.log("clsTestIsRelaToSqlTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTestIsRelaToSqlTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTestIsRelaToSqlTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrTestIsRelaToSqlTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTestIsRelaToSqlTabCond),
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTestIsRelaToSqlTabEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsTestIsRelaToSqlTabEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
          testIsRelaToSqlTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TestIsRelaToSqlTab_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function TestIsRelaToSqlTab_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstCache();
    const arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrTestIsRelaToSqlTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      testIsRelaToSqlTab_ConstructorName,
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
export async function TestIsRelaToSqlTab_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTestIsRelaToSqlTabEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
          testIsRelaToSqlTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TestIsRelaToSqlTab_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表，获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTestIsRelaToSqlTabEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
          testIsRelaToSqlTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TestIsRelaToSqlTab_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function TestIsRelaToSqlTab_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsTestIsRelaToSqlTabEN>();
  const arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstCache();
  if (arrTestIsRelaToSqlTabObjLstCache.length == 0) return arrTestIsRelaToSqlTabObjLstCache;
  let arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objTestIsRelaToSqlTabCond = new clsTestIsRelaToSqlTabEN();
  ObjectAssign(objTestIsRelaToSqlTabCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsTestIsRelaToSqlTabWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTestIsRelaToSqlTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTestIsRelaToSqlTabSel.length == 0) return arrTestIsRelaToSqlTabSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.sort(
        TestIsRelaToSqlTab_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.sort(objPagerPara.sortFun);
    }
    arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.slice(intStart, intEnd);
    return arrTestIsRelaToSqlTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTestIsRelaToSqlTabEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function TestIsRelaToSqlTab_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTestIsRelaToSqlTabEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTestIsRelaToSqlTabEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
          testIsRelaToSqlTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TestIsRelaToSqlTab_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * 调用WebApi来删除记录，根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function TestIsRelaToSqlTab_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, lngmId);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function TestIsRelaToSqlTab_DelTestIsRelaToSqlTabsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTestIsRelaToSqlTabsAsync';
  const strAction = 'DelTestIsRelaToSqlTabs';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function TestIsRelaToSqlTab_DelTestIsRelaToSqlTabsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTestIsRelaToSqlTabsByCondAsync';
  const strAction = 'DelTestIsRelaToSqlTabsByCond';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * 调用WebApi来添加记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objTestIsRelaToSqlTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TestIsRelaToSqlTab_AddNewRecordAsync(
  objTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objTestIsRelaToSqlTabEN);
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTestIsRelaToSqlTabEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型，不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objTestIsRelaToSqlTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TestIsRelaToSqlTab_AddNewRecordWithReturnKeyAsync(
  objTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTestIsRelaToSqlTabEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objTestIsRelaToSqlTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TestIsRelaToSqlTab_UpdateRecordAsync(
  objTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTestIsRelaToSqlTabEN.sfUpdFldSetStr === undefined ||
    objTestIsRelaToSqlTabEN.sfUpdFldSetStr === null ||
    objTestIsRelaToSqlTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objTestIsRelaToSqlTabEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTestIsRelaToSqlTabEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * @param objTestIsRelaToSqlTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TestIsRelaToSqlTab_UpdateWithConditionAsync(
  objTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTestIsRelaToSqlTabEN.sfUpdFldSetStr === undefined ||
    objTestIsRelaToSqlTabEN.sfUpdFldSetStr === null ||
    objTestIsRelaToSqlTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objTestIsRelaToSqlTabEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);
  objTestIsRelaToSqlTabEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTestIsRelaToSqlTabEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TestIsRelaToSqlTab_IsExistRecordCache(
  objTestIsRelaToSqlTabCond: clsTestIsRelaToSqlTabEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstCache();
  if (arrTestIsRelaToSqlTabObjLstCache == null) return false;
  let arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabObjLstCache;
  if (
    objTestIsRelaToSqlTabCond.sfFldComparisonOp == null ||
    objTestIsRelaToSqlTabCond.sfFldComparisonOp == ''
  )
    return arrTestIsRelaToSqlTabSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTestIsRelaToSqlTabCond.sfFldComparisonOp,
  );
  //console.log("clsTestIsRelaToSqlTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTestIsRelaToSqlTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTestIsRelaToSqlTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTestIsRelaToSqlTabSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objTestIsRelaToSqlTabCond),
      testIsRelaToSqlTab_ConstructorName,
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
export async function TestIsRelaToSqlTab_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function TestIsRelaToSqlTab_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstCache();
  if (arrTestIsRelaToSqlTabObjLstCache == null) return false;
  try {
    const arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrTestIsRelaToSqlTabSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      testIsRelaToSqlTab_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function TestIsRelaToSqlTab_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
export async function TestIsRelaToSqlTab_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
 * @param objTestIsRelaToSqlTabCond:条件对象
 * @returns 对象列表记录数
 */
export async function TestIsRelaToSqlTab_GetRecCountByCondCache(
  objTestIsRelaToSqlTabCond: clsTestIsRelaToSqlTabEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrTestIsRelaToSqlTabObjLstCache = await TestIsRelaToSqlTab_GetObjLstCache();
  if (arrTestIsRelaToSqlTabObjLstCache == null) return 0;
  let arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabObjLstCache;
  if (
    objTestIsRelaToSqlTabCond.sfFldComparisonOp == null ||
    objTestIsRelaToSqlTabCond.sfFldComparisonOp == ''
  )
    return arrTestIsRelaToSqlTabSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTestIsRelaToSqlTabCond.sfFldComparisonOp,
  );
  //console.log("clsTestIsRelaToSqlTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTestIsRelaToSqlTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTestIsRelaToSqlTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTestIsRelaToSqlTabSel = arrTestIsRelaToSqlTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrTestIsRelaToSqlTabSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTestIsRelaToSqlTabCond),
      testIsRelaToSqlTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增，不需要生成获取最大关键字函数！*/
/*该表的关键字类型不是字符型带前缀自增，不需要生成获取最大关键字函数！*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function TestIsRelaToSqlTab_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(testIsRelaToSqlTab_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        testIsRelaToSqlTab_ConstructorName,
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
export function TestIsRelaToSqlTab_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TestIsRelaToSqlTab_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsTestIsRelaToSqlTabEN._CurrTabName;
  switch (clsTestIsRelaToSqlTabEN.CacheModeId) {
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
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function TestIsRelaToSqlTab_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsTestIsRelaToSqlTabEN._CurrTabName;
    switch (clsTestIsRelaToSqlTabEN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功！');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/* 该表的下拉框功能没有设置，不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TestIsRelaToSqlTab_CheckPropertyNew(
  pobjTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.tabId) === true ||
    pobjTestIsRelaToSqlTabEN.tabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000058)字段[表ID]不能为空(In 测试与SQL表不相关)!(clsTestIsRelaToSqlTabBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.userId) == false &&
    GetStrLen(pobjTestIsRelaToSqlTabEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000059)字段[用户Id(userId)]的长度不能超过18(In 测试与SQL表不相关(TestIsRelaToSqlTab))!值:$(pobjTestIsRelaToSqlTabEN.userId)(clsTestIsRelaToSqlTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.tabId) == false &&
    GetStrLen(pobjTestIsRelaToSqlTabEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000059)字段[表ID(tabId)]的长度不能超过8(In 测试与SQL表不相关(TestIsRelaToSqlTab))!值:$(pobjTestIsRelaToSqlTabEN.tabId)(clsTestIsRelaToSqlTabBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTestIsRelaToSqlTabEN.mId &&
    undefined !== pobjTestIsRelaToSqlTabEN.mId &&
    tzDataType.isNumber(pobjTestIsRelaToSqlTabEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[mId(mId)]的值:[$(pobjTestIsRelaToSqlTabEN.mId)], 非法，应该为数值型(In 测试与SQL表不相关(TestIsRelaToSqlTab))!(clsTestIsRelaToSqlTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.userId) == false &&
    undefined !== pobjTestIsRelaToSqlTabEN.userId &&
    tzDataType.isString(pobjTestIsRelaToSqlTabEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[用户Id(userId)]的值:[$(pobjTestIsRelaToSqlTabEN.userId)], 非法，应该为字符型(In 测试与SQL表不相关(TestIsRelaToSqlTab))!(clsTestIsRelaToSqlTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.tabId) == false &&
    undefined !== pobjTestIsRelaToSqlTabEN.tabId &&
    tzDataType.isString(pobjTestIsRelaToSqlTabEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[表ID(tabId)]的值:[$(pobjTestIsRelaToSqlTabEN.tabId)], 非法，应该为字符型(In 测试与SQL表不相关(TestIsRelaToSqlTab))!(clsTestIsRelaToSqlTabBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TestIsRelaToSqlTab_CheckProperty4Update(
  pobjTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.userId) == false &&
    GetStrLen(pobjTestIsRelaToSqlTabEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000062)字段[用户Id(userId)]的长度不能超过18(In 测试与SQL表不相关(TestIsRelaToSqlTab))!值:$(pobjTestIsRelaToSqlTabEN.userId)(clsTestIsRelaToSqlTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.tabId) == false &&
    GetStrLen(pobjTestIsRelaToSqlTabEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000062)字段[表ID(tabId)]的长度不能超过8(In 测试与SQL表不相关(TestIsRelaToSqlTab))!值:$(pobjTestIsRelaToSqlTabEN.tabId)(clsTestIsRelaToSqlTabBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTestIsRelaToSqlTabEN.mId &&
    undefined !== pobjTestIsRelaToSqlTabEN.mId &&
    tzDataType.isNumber(pobjTestIsRelaToSqlTabEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[mId(mId)]的值:[$(pobjTestIsRelaToSqlTabEN.mId)], 非法，应该为数值型(In 测试与SQL表不相关(TestIsRelaToSqlTab))!(clsTestIsRelaToSqlTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.userId) == false &&
    undefined !== pobjTestIsRelaToSqlTabEN.userId &&
    tzDataType.isString(pobjTestIsRelaToSqlTabEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[用户Id(userId)]的值:[$(pobjTestIsRelaToSqlTabEN.userId)], 非法，应该为字符型(In 测试与SQL表不相关(TestIsRelaToSqlTab))!(clsTestIsRelaToSqlTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTestIsRelaToSqlTabEN.tabId) == false &&
    undefined !== pobjTestIsRelaToSqlTabEN.tabId &&
    tzDataType.isString(pobjTestIsRelaToSqlTabEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[表ID(tabId)]的值:[$(pobjTestIsRelaToSqlTabEN.tabId)], 非法，应该为字符型(In 测试与SQL表不相关(TestIsRelaToSqlTab))!(clsTestIsRelaToSqlTabBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (
    null === pobjTestIsRelaToSqlTabEN.mId ||
    (pobjTestIsRelaToSqlTabEN.mId != null && pobjTestIsRelaToSqlTabEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 测试与SQL表不相关)!(clsTestIsRelaToSqlTabBL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TestIsRelaToSqlTab_GetJSONStrByObj(
  pobjTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
): string {
  pobjTestIsRelaToSqlTabEN.sfUpdFldSetStr = pobjTestIsRelaToSqlTabEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTestIsRelaToSqlTabEN);
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
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function TestIsRelaToSqlTab_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsTestIsRelaToSqlTabEN> {
  let arrTestIsRelaToSqlTabObjLst = new Array<clsTestIsRelaToSqlTabEN>();
  if (strJSON === '') {
    return arrTestIsRelaToSqlTabObjLst;
  }
  try {
    arrTestIsRelaToSqlTabObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTestIsRelaToSqlTabObjLst;
  }
  return arrTestIsRelaToSqlTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTestIsRelaToSqlTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TestIsRelaToSqlTab_GetObjLstByJSONObjLst(
  arrTestIsRelaToSqlTabObjLstS: Array<clsTestIsRelaToSqlTabEN>,
): Array<clsTestIsRelaToSqlTabEN> {
  const arrTestIsRelaToSqlTabObjLst = new Array<clsTestIsRelaToSqlTabEN>();
  for (const objInFor of arrTestIsRelaToSqlTabObjLstS) {
    const obj1 = TestIsRelaToSqlTab_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTestIsRelaToSqlTabObjLst.push(obj1);
  }
  return arrTestIsRelaToSqlTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TestIsRelaToSqlTab_GetObjByJSONStr(strJSON: string): clsTestIsRelaToSqlTabEN {
  let pobjTestIsRelaToSqlTabEN = new clsTestIsRelaToSqlTabEN();
  if (strJSON === '') {
    return pobjTestIsRelaToSqlTabEN;
  }
  try {
    pobjTestIsRelaToSqlTabEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTestIsRelaToSqlTabEN;
  }
  return pobjTestIsRelaToSqlTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TestIsRelaToSqlTab_GetCombineCondition(
  objTestIsRelaToSqlTabCond: clsTestIsRelaToSqlTabEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTestIsRelaToSqlTabCond.dicFldComparisonOp,
      clsTestIsRelaToSqlTabEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objTestIsRelaToSqlTabCond.dicFldComparisonOp[clsTestIsRelaToSqlTabEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTestIsRelaToSqlTabEN.con_mId,
      objTestIsRelaToSqlTabCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTestIsRelaToSqlTabCond.dicFldComparisonOp,
      clsTestIsRelaToSqlTabEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objTestIsRelaToSqlTabCond.dicFldComparisonOp[clsTestIsRelaToSqlTabEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTestIsRelaToSqlTabEN.con_UserId,
      objTestIsRelaToSqlTabCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTestIsRelaToSqlTabCond.dicFldComparisonOp,
      clsTestIsRelaToSqlTabEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objTestIsRelaToSqlTabCond.dicFldComparisonOp[clsTestIsRelaToSqlTabEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTestIsRelaToSqlTabEN.con_TabId,
      objTestIsRelaToSqlTabCond.tabId,
      strComparisonOpTabId,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TestIsRelaToSqlTab(测试与SQL表不相关),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TestIsRelaToSqlTab_GetUniCondStr(
  objTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId = '{0}'", objTestIsRelaToSqlTabEN.tabId);
  strWhereCond += Format(" and UserId = '{0}'", objTestIsRelaToSqlTabEN.userId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TestIsRelaToSqlTab(测试与SQL表不相关),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TestIsRelaToSqlTab_GetUniCondStr4Update(
  objTestIsRelaToSqlTabEN: clsTestIsRelaToSqlTabEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objTestIsRelaToSqlTabEN.mId);
  strWhereCond += Format(" and TabId = '{0}'", objTestIsRelaToSqlTabEN.tabId);
  strWhereCond += Format(" and UserId = '{0}'", objTestIsRelaToSqlTabEN.userId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTestIsRelaToSqlTabENS:源对象
 * @param objTestIsRelaToSqlTabENT:目标对象
 */
export function TestIsRelaToSqlTab_GetObjFromJsonObj(
  objTestIsRelaToSqlTabENS: clsTestIsRelaToSqlTabEN,
): clsTestIsRelaToSqlTabEN {
  const objTestIsRelaToSqlTabENT: clsTestIsRelaToSqlTabEN = new clsTestIsRelaToSqlTabEN();
  ObjectAssign(objTestIsRelaToSqlTabENT, objTestIsRelaToSqlTabENS);
  return objTestIsRelaToSqlTabENT;
}
