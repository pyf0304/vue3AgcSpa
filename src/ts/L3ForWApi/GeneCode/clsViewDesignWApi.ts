/**
 * 类名:clsViewDesignWApi
 * 表名:ViewDesign(00050429)
 * 版本:2023.06.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/27 15:16:23
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面设计(ViewDesign)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月27日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsViewDesignEN } from '@/ts/L0Entity/GeneCode/clsViewDesignEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewDesign_Controller = 'ViewDesignApi';
export const viewDesign_ConstructorName = 'viewDesign';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewDesignId:关键字
 * @returns 对象
 **/
export async function ViewDesign_GetObjByViewDesignIdAsync(
  strViewDesignId: string,
): Promise<clsViewDesignEN | null> {
  const strThisFuncName = 'GetObjByViewDesignIdAsync';

  if (IsNullOrEmpty(strViewDesignId) == true) {
    const strMsg = Format(
      '参数:[strViewDesignId]不能为空！(In clsViewDesignWApi.GetObjByViewDesignIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewDesignId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strViewDesignId]的长度:[{0}]不正确！(clsViewDesignWApi.GetObjByViewDesignIdAsync)',
      strViewDesignId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewDesignId';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewDesignId,
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
      const objViewDesign = ViewDesign_GetObjFromJsonObj(returnObj);
      return objViewDesign;
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param strViewDesignId:所给的关键字
 * @returns 对象
 */
export async function ViewDesign_GetObjByViewDesignIdCache(
  strViewDesignId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewDesignIdCache';

  if (IsNullOrEmpty(strViewDesignId) == true) {
    const strMsg = Format(
      '参数:[strViewDesignId]不能为空！(In clsViewDesignWApi.GetObjByViewDesignIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewDesignId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strViewDesignId]的长度:[{0}]不正确！(clsViewDesignWApi.GetObjByViewDesignIdCache)',
      strViewDesignId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
  try {
    const arrViewDesignSel = arrViewDesignObjLstCache.filter(
      (x) => x.viewDesignId == strViewDesignId,
    );
    let objViewDesign: clsViewDesignEN;
    if (arrViewDesignSel.length > 0) {
      objViewDesign = arrViewDesignSel[0];
      return objViewDesign;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewDesignConst = await ViewDesign_GetObjByViewDesignIdAsync(strViewDesignId);
        if (objViewDesignConst != null) {
          ViewDesign_ReFreshThisCache();
          return objViewDesignConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewDesignId,
      viewDesign_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strViewDesignId:所给的关键字
 * @returns 对象
 */
export async function ViewDesign_GetObjByViewDesignIdlocalStorage(strViewDesignId: string) {
  const strThisFuncName = 'GetObjByViewDesignIdlocalStorage';

  if (IsNullOrEmpty(strViewDesignId) == true) {
    const strMsg = Format(
      '参数:[strViewDesignId]不能为空！(In clsViewDesignWApi.GetObjByViewDesignIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewDesignId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strViewDesignId]的长度:[{0}]不正确！(clsViewDesignWApi.GetObjByViewDesignIdlocalStorage)',
      strViewDesignId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewDesignEN._CurrTabName, strViewDesignId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewDesignCache: clsViewDesignEN = JSON.parse(strTempObj);
    return objViewDesignCache;
  }
  try {
    const objViewDesign = await ViewDesign_GetObjByViewDesignIdAsync(strViewDesignId);
    if (objViewDesign != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewDesign));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewDesign;
    }
    return objViewDesign;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewDesignId,
      viewDesign_ConstructorName,
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
 * @param objViewDesign:所给的对象
 * @returns 对象
 */
export async function ViewDesign_UpdateObjInLstCache(objViewDesign: clsViewDesignEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
    const obj = arrViewDesignObjLstCache.find(
      (x) => x.viewDesignName == objViewDesign.viewDesignName,
    );
    if (obj != null) {
      objViewDesign.viewDesignId = obj.viewDesignId;
      ObjectAssign(obj, objViewDesign);
    } else {
      arrViewDesignObjLstCache.push(objViewDesign);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewDesign_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strViewDesignId:所给的关键字
 * @returns 对象
 */
export async function ViewDesign_GetNameByViewDesignIdCache(strViewDesignId: string) {
  if (IsNullOrEmpty(strViewDesignId) == true) {
    const strMsg = Format(
      '参数:[strViewDesignId]不能为空！(In clsViewDesignWApi.GetNameByViewDesignIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewDesignId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strViewDesignId]的长度:[{0}]不正确！(clsViewDesignWApi.GetNameByViewDesignIdCache)',
      strViewDesignId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
  if (arrViewDesignObjLstCache == null) return '';
  try {
    const arrViewDesignSel = arrViewDesignObjLstCache.filter(
      (x) => x.viewDesignId == strViewDesignId,
    );
    let objViewDesign: clsViewDesignEN;
    if (arrViewDesignSel.length > 0) {
      objViewDesign = arrViewDesignSel[0];
      return objViewDesign.viewDesignName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strViewDesignId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function ViewDesign_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsViewDesignEN.con_ViewDesignId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewDesignEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewDesignEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewDesignId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objViewDesign = await ViewDesign_GetObjByViewDesignIdCache(strViewDesignId);
  if (objViewDesign == null) return '';
  if (objViewDesign.GetFldValue(strOutFldName) == null) return '';
  return objViewDesign.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewDesign_SortFunDefa(a: clsViewDesignEN, b: clsViewDesignEN): number {
  return a.viewDesignId.localeCompare(b.viewDesignId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewDesign_SortFunDefa2Fld(a: clsViewDesignEN, b: clsViewDesignEN): number {
  if (a.viewDesignName == b.viewDesignName) return a.memo.localeCompare(b.memo);
  else return a.viewDesignName.localeCompare(b.viewDesignName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewDesign_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewDesignEN.con_ViewDesignId:
        return (a: clsViewDesignEN, b: clsViewDesignEN) => {
          return a.viewDesignId.localeCompare(b.viewDesignId);
        };
      case clsViewDesignEN.con_ViewDesignName:
        return (a: clsViewDesignEN, b: clsViewDesignEN) => {
          return a.viewDesignName.localeCompare(b.viewDesignName);
        };
      case clsViewDesignEN.con_Memo:
        return (a: clsViewDesignEN, b: clsViewDesignEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewDesign]中不存在！(in ${viewDesign_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewDesignEN.con_ViewDesignId:
        return (a: clsViewDesignEN, b: clsViewDesignEN) => {
          return b.viewDesignId.localeCompare(a.viewDesignId);
        };
      case clsViewDesignEN.con_ViewDesignName:
        return (a: clsViewDesignEN, b: clsViewDesignEN) => {
          return b.viewDesignName.localeCompare(a.viewDesignName);
        };
      case clsViewDesignEN.con_Memo:
        return (a: clsViewDesignEN, b: clsViewDesignEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewDesign]中不存在！(in ${viewDesign_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewDesign_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewDesignEN.con_ViewDesignId:
      return (obj: clsViewDesignEN) => {
        return obj.viewDesignId === value;
      };
    case clsViewDesignEN.con_ViewDesignName:
      return (obj: clsViewDesignEN) => {
        return obj.viewDesignName === value;
      };
    case clsViewDesignEN.con_Memo:
      return (obj: clsViewDesignEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewDesign]中不存在！(in ${viewDesign_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function ViewDesign_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsViewDesignEN.con_ViewDesignId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewDesign = await ViewDesign_GetObjLstCache();
  if (arrViewDesign == null) return [];
  let arrViewDesignSel = arrViewDesign;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewDesignSel = arrViewDesignSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewDesignSel = arrViewDesignSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewDesignSel.length == 0) return [];
  return arrViewDesignSel.map((x) => x.viewDesignId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewDesign_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export async function ViewDesign_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export async function ViewDesign_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewDesignEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
      const objViewDesign = ViewDesign_GetObjFromJsonObj(returnObj);
      return objViewDesign;
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export async function ViewDesign_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewDesignEN._CurrTabName;
  if (IsNullOrEmpty(clsViewDesignEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewDesignEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrViewDesignExObjLstCache: Array<clsViewDesignEN> = CacheHelper.Get(strKey);
    const arrViewDesignObjLstT = ViewDesign_GetObjLstByJSONObjLst(arrViewDesignExObjLstCache);
    return arrViewDesignObjLstT;
  }
  try {
    const arrViewDesignExObjLst = await ViewDesign_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewDesignExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrViewDesignExObjLst.length,
    );
    console.log(strInfo);
    return arrViewDesignExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewDesign_ConstructorName,
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
export async function ViewDesign_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewDesignEN._CurrTabName;
  if (IsNullOrEmpty(clsViewDesignEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewDesignEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewDesignExObjLstCache: Array<clsViewDesignEN> = JSON.parse(strTempObjLst);
    const arrViewDesignObjLstT = ViewDesign_GetObjLstByJSONObjLst(arrViewDesignExObjLstCache);
    return arrViewDesignObjLstT;
  }
  try {
    const arrViewDesignExObjLst = await ViewDesign_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewDesignExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrViewDesignExObjLst.length,
    );
    console.log(strInfo);
    return arrViewDesignExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewDesign_ConstructorName,
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
export async function ViewDesign_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewDesignEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewDesignObjLstCache: Array<clsViewDesignEN> = JSON.parse(strTempObjLst);
    return arrViewDesignObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewDesign_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewDesignEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
          viewDesign_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDesign_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export async function ViewDesign_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewDesignEN._CurrTabName;
  if (IsNullOrEmpty(clsViewDesignEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewDesignEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewDesignExObjLstCache: Array<clsViewDesignEN> = JSON.parse(strTempObjLst);
    const arrViewDesignObjLstT = ViewDesign_GetObjLstByJSONObjLst(arrViewDesignExObjLstCache);
    return arrViewDesignObjLstT;
  }
  try {
    const arrViewDesignExObjLst = await ViewDesign_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewDesignExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrViewDesignExObjLst.length,
    );
    console.log(strInfo);
    return arrViewDesignExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewDesign_ConstructorName,
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
export async function ViewDesign_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewDesignEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewDesignObjLstCache: Array<clsViewDesignEN> = JSON.parse(strTempObjLst);
    return arrViewDesignObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewDesign_GetObjLstCache(): Promise<Array<clsViewDesignEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrViewDesignObjLstCache;
  switch (clsViewDesignEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewDesignObjLstCache = await ViewDesign_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrViewDesignObjLstCache = await ViewDesign_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrViewDesignObjLstCache = await ViewDesign_GetObjLstClientCache();
      break;
    default:
      arrViewDesignObjLstCache = await ViewDesign_GetObjLstClientCache();
      break;
  }
  return arrViewDesignObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewDesign_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewDesignObjLstCache;
  switch (clsViewDesignEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewDesignObjLstCache = await ViewDesign_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrViewDesignObjLstCache = await ViewDesign_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrViewDesignObjLstCache = null;
      break;
    default:
      arrViewDesignObjLstCache = null;
      break;
  }
  return arrViewDesignObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewDesignIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewDesign_GetSubObjLstCache(objViewDesignCond: clsViewDesignEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
  let arrViewDesignSel = arrViewDesignObjLstCache;
  if (objViewDesignCond.sfFldComparisonOp == null || objViewDesignCond.sfFldComparisonOp == '')
    return arrViewDesignSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewDesignCond.sfFldComparisonOp,
  );
  //console.log("clsViewDesignWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewDesignCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewDesignCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewDesignSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewDesignCond),
      viewDesign_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewDesignEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewDesignId:关键字列表
 * @returns 对象列表
 **/
export async function ViewDesign_GetObjLstByViewDesignIdLstAsync(
  arrViewDesignId: Array<string>,
): Promise<Array<clsViewDesignEN>> {
  const strThisFuncName = 'GetObjLstByViewDesignIdLstAsync';
  const strAction = 'GetObjLstByViewDesignIdLst';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewDesignId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewDesign_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDesign_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param arrstrViewDesignIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewDesign_GetObjLstByViewDesignIdLstCache(
  arrViewDesignIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByViewDesignIdLstCache';
  try {
    const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
    const arrViewDesignSel = arrViewDesignObjLstCache.filter(
      (x) => arrViewDesignIdLst.indexOf(x.viewDesignId) > -1,
    );
    return arrViewDesignSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewDesignIdLst.join(','),
      viewDesign_ConstructorName,
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
export async function ViewDesign_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewDesignEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
          viewDesign_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDesign_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export async function ViewDesign_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewDesignEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
          viewDesign_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDesign_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export async function ViewDesign_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewDesignEN>();
  const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
  if (arrViewDesignObjLstCache.length == 0) return arrViewDesignObjLstCache;
  let arrViewDesignSel = arrViewDesignObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objViewDesignCond = new clsViewDesignEN();
  ObjectAssign(objViewDesignCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsViewDesignWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewDesignCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewDesignSel.length == 0) return arrViewDesignSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewDesignSel = arrViewDesignSel.sort(ViewDesign_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrViewDesignSel = arrViewDesignSel.sort(objPagerPara.sortFun);
    }
    arrViewDesignSel = arrViewDesignSel.slice(intStart, intEnd);
    return arrViewDesignSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewDesign_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewDesignEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewDesign_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewDesignEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewDesignEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
          viewDesign_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDesign_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param strViewDesignId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewDesign_DelRecordAsync(strViewDesignId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewDesign_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, strViewDesignId);

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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param arrViewDesignId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewDesign_DelViewDesignsAsync(
  arrViewDesignId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewDesignsAsync';
  const strAction = 'DelViewDesigns';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewDesignId, config);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export async function ViewDesign_DelViewDesignsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelViewDesignsByCondAsync';
  const strAction = 'DelViewDesignsByCond';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param objViewDesignEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewDesign_AddNewRecordAsync(
  objViewDesignEN: clsViewDesignEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewDesignEN);
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDesignEN, config);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * 调用WebApi来添加记录，关键字用最大关键字，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objViewDesignEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewDesign_AddNewRecordWithMaxIdAsync(
  objViewDesignEN: clsViewDesignEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDesignEN, config);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewDesignEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewDesign_AddNewRecordWithReturnKeyAsync(
  objViewDesignEN: clsViewDesignEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDesignEN, config);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param objViewDesignEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewDesign_UpdateRecordAsync(
  objViewDesignEN: clsViewDesignEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewDesignEN.sfUpdFldSetStr === undefined ||
    objViewDesignEN.sfUpdFldSetStr === null ||
    objViewDesignEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objViewDesignEN.viewDesignId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDesignEN, config);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param objViewDesignEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewDesign_UpdateWithConditionAsync(
  objViewDesignEN: clsViewDesignEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewDesignEN.sfUpdFldSetStr === undefined ||
    objViewDesignEN.sfUpdFldSetStr === null ||
    objViewDesignEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objViewDesignEN.viewDesignId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);
  objViewDesignEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDesignEN, config);
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param objstrViewDesignIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewDesign_IsExistRecordCache(objViewDesignCond: clsViewDesignEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
  if (arrViewDesignObjLstCache == null) return false;
  let arrViewDesignSel = arrViewDesignObjLstCache;
  if (objViewDesignCond.sfFldComparisonOp == null || objViewDesignCond.sfFldComparisonOp == '')
    return arrViewDesignSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewDesignCond.sfFldComparisonOp,
  );
  //console.log("clsViewDesignWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewDesignCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewDesignCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewDesignSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewDesignCond),
      viewDesign_ConstructorName,
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
export async function ViewDesign_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param strViewDesignId:所给的关键字
 * @returns 对象
 */
export async function ViewDesign_IsExistCache(strViewDesignId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
  if (arrViewDesignObjLstCache == null) return false;
  try {
    const arrViewDesignSel = arrViewDesignObjLstCache.filter(
      (x) => x.viewDesignId == strViewDesignId,
    );
    if (arrViewDesignSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewDesignId,
      viewDesign_ConstructorName,
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
 * @param strViewDesignId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewDesign_IsExistAsync(strViewDesignId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewDesignId,
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export async function ViewDesign_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
 * @param objViewDesignCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewDesign_GetRecCountByCondCache(objViewDesignCond: clsViewDesignEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewDesignObjLstCache = await ViewDesign_GetObjLstCache();
  if (arrViewDesignObjLstCache == null) return 0;
  let arrViewDesignSel = arrViewDesignObjLstCache;
  if (objViewDesignCond.sfFldComparisonOp == null || objViewDesignCond.sfFldComparisonOp == '')
    return arrViewDesignSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewDesignCond.sfFldComparisonOp,
  );
  //console.log("clsViewDesignWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewDesignCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewDesignCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewDesignSel = arrViewDesignSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewDesignSel = arrViewDesignSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewDesignSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewDesignCond),
      viewDesign_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function ViewDesign_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增，不需要生成获取最大关键字函数！*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function ViewDesign_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewDesign_Controller, strAction);

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
        viewDesign_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewDesign_ConstructorName,
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
export function ViewDesign_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewDesign_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsViewDesignEN._CurrTabName;
  switch (clsViewDesignEN.CacheModeId) {
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
export function ViewDesign_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsViewDesignEN._CurrTabName;
    switch (clsViewDesignEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ViewDesign_BindDdl_ViewDesignIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_ViewDesignIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewDesignIdInDivCache");
  const arrObjLstSel = await ViewDesign_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsViewDesignEN.con_ViewDesignId,
    clsViewDesignEN.con_ViewDesignName,
    '界面设计',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewDesign_CheckPropertyNew(pobjViewDesignEN: clsViewDesignEN) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (IsNullOrEmpty(pobjViewDesignEN.viewDesignName) === true) {
    throw new Error(
      '(errid:Watl000058)字段[界面设计名]不能为空(In 界面设计)!(clsViewDesignBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjViewDesignEN.viewDesignId) == false &&
    GetStrLen(pobjViewDesignEN.viewDesignId) > 4
  ) {
    throw new Error(
      '(errid:Watl000059)字段[界面设计Id(viewDesignId)]的长度不能超过4(In 界面设计(ViewDesign))!值:$(pobjViewDesignEN.viewDesignId)(clsViewDesignBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDesignEN.viewDesignName) == false &&
    GetStrLen(pobjViewDesignEN.viewDesignName) > 30
  ) {
    throw new Error(
      '(errid:Watl000059)字段[界面设计名(viewDesignName)]的长度不能超过30(In 界面设计(ViewDesign))!值:$(pobjViewDesignEN.viewDesignName)(clsViewDesignBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewDesignEN.memo) == false && GetStrLen(pobjViewDesignEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000059)字段[说明(memo)]的长度不能超过1000(In 界面设计(ViewDesign))!值:$(pobjViewDesignEN.memo)(clsViewDesignBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewDesignEN.viewDesignId) == false &&
    undefined !== pobjViewDesignEN.viewDesignId &&
    tzDataType.isString(pobjViewDesignEN.viewDesignId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[界面设计Id(viewDesignId)]的值:[$(pobjViewDesignEN.viewDesignId)], 非法，应该为字符型(In 界面设计(ViewDesign))!(clsViewDesignBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDesignEN.viewDesignName) == false &&
    undefined !== pobjViewDesignEN.viewDesignName &&
    tzDataType.isString(pobjViewDesignEN.viewDesignName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[界面设计名(viewDesignName)]的值:[$(pobjViewDesignEN.viewDesignName)], 非法，应该为字符型(In 界面设计(ViewDesign))!(clsViewDesignBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDesignEN.memo) == false &&
    undefined !== pobjViewDesignEN.memo &&
    tzDataType.isString(pobjViewDesignEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[说明(memo)]的值:[$(pobjViewDesignEN.memo)], 非法，应该为字符型(In 界面设计(ViewDesign))!(clsViewDesignBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewDesign_CheckProperty4Update(pobjViewDesignEN: clsViewDesignEN) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjViewDesignEN.viewDesignId) == false &&
    GetStrLen(pobjViewDesignEN.viewDesignId) > 4
  ) {
    throw new Error(
      '(errid:Watl000062)字段[界面设计Id(viewDesignId)]的长度不能超过4(In 界面设计(ViewDesign))!值:$(pobjViewDesignEN.viewDesignId)(clsViewDesignBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDesignEN.viewDesignName) == false &&
    GetStrLen(pobjViewDesignEN.viewDesignName) > 30
  ) {
    throw new Error(
      '(errid:Watl000062)字段[界面设计名(viewDesignName)]的长度不能超过30(In 界面设计(ViewDesign))!值:$(pobjViewDesignEN.viewDesignName)(clsViewDesignBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewDesignEN.memo) == false && GetStrLen(pobjViewDesignEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000062)字段[说明(memo)]的长度不能超过1000(In 界面设计(ViewDesign))!值:$(pobjViewDesignEN.memo)(clsViewDesignBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewDesignEN.viewDesignId) == false &&
    undefined !== pobjViewDesignEN.viewDesignId &&
    tzDataType.isString(pobjViewDesignEN.viewDesignId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[界面设计Id(viewDesignId)]的值:[$(pobjViewDesignEN.viewDesignId)], 非法，应该为字符型(In 界面设计(ViewDesign))!(clsViewDesignBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDesignEN.viewDesignName) == false &&
    undefined !== pobjViewDesignEN.viewDesignName &&
    tzDataType.isString(pobjViewDesignEN.viewDesignName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[界面设计名(viewDesignName)]的值:[$(pobjViewDesignEN.viewDesignName)], 非法，应该为字符型(In 界面设计(ViewDesign))!(clsViewDesignBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDesignEN.memo) == false &&
    undefined !== pobjViewDesignEN.memo &&
    tzDataType.isString(pobjViewDesignEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[说明(memo)]的值:[$(pobjViewDesignEN.memo)], 非法，应该为字符型(In 界面设计(ViewDesign))!(clsViewDesignBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (IsNullOrEmpty(pobjViewDesignEN.viewDesignId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[界面设计Id]不能为空(In 界面设计)!(clsViewDesignBL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewDesign_GetJSONStrByObj(pobjViewDesignEN: clsViewDesignEN): string {
  pobjViewDesignEN.sfUpdFldSetStr = pobjViewDesignEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewDesignEN);
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
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewDesign_GetObjLstByJSONStr(strJSON: string): Array<clsViewDesignEN> {
  let arrViewDesignObjLst = new Array<clsViewDesignEN>();
  if (strJSON === '') {
    return arrViewDesignObjLst;
  }
  try {
    arrViewDesignObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewDesignObjLst;
  }
  return arrViewDesignObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewDesignObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewDesign_GetObjLstByJSONObjLst(
  arrViewDesignObjLstS: Array<clsViewDesignEN>,
): Array<clsViewDesignEN> {
  const arrViewDesignObjLst = new Array<clsViewDesignEN>();
  for (const objInFor of arrViewDesignObjLstS) {
    const obj1 = ViewDesign_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewDesignObjLst.push(obj1);
  }
  return arrViewDesignObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewDesign_GetObjByJSONStr(strJSON: string): clsViewDesignEN {
  let pobjViewDesignEN = new clsViewDesignEN();
  if (strJSON === '') {
    return pobjViewDesignEN;
  }
  try {
    pobjViewDesignEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewDesignEN;
  }
  return pobjViewDesignEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewDesign_GetCombineCondition(objViewDesignCond: clsViewDesignEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDesignCond.dicFldComparisonOp,
      clsViewDesignEN.con_ViewDesignId,
    ) == true
  ) {
    const strComparisonOpViewDesignId: string =
      objViewDesignCond.dicFldComparisonOp[clsViewDesignEN.con_ViewDesignId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDesignEN.con_ViewDesignId,
      objViewDesignCond.viewDesignId,
      strComparisonOpViewDesignId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDesignCond.dicFldComparisonOp,
      clsViewDesignEN.con_ViewDesignName,
    ) == true
  ) {
    const strComparisonOpViewDesignName: string =
      objViewDesignCond.dicFldComparisonOp[clsViewDesignEN.con_ViewDesignName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDesignEN.con_ViewDesignName,
      objViewDesignCond.viewDesignName,
      strComparisonOpViewDesignName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDesignCond.dicFldComparisonOp,
      clsViewDesignEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewDesignCond.dicFldComparisonOp[clsViewDesignEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDesignEN.con_Memo,
      objViewDesignCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewDesign(界面设计),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewDesignName: 界面设计名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewDesign_GetUniCondStr(objViewDesignEN: clsViewDesignEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewDesignName = '{0}'", objViewDesignEN.viewDesignName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewDesign(界面设计),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewDesignName: 界面设计名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewDesign_GetUniCondStr4Update(objViewDesignEN: clsViewDesignEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewDesignId <> '{0}'", objViewDesignEN.viewDesignId);
  strWhereCond += Format(" and ViewDesignName = '{0}'", objViewDesignEN.viewDesignName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewDesignENS:源对象
 * @param objViewDesignENT:目标对象
 */
export function ViewDesign_GetObjFromJsonObj(objViewDesignENS: clsViewDesignEN): clsViewDesignEN {
  const objViewDesignENT: clsViewDesignEN = new clsViewDesignEN();
  ObjectAssign(objViewDesignENT, objViewDesignENS);
  return objViewDesignENT;
}
