/**
 * 类名:clsProjectDatabaseRelWApi
 * 表名:ProjectDatabaseRel(00050177)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:29
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
 * 工程数据库关系(ProjectDatabaseRel)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
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
import { clsProjectDatabaseRelEN } from '@/ts/L0Entity/PrjManage/clsProjectDatabaseRelEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const projectDatabaseRel_Controller = 'ProjectDatabaseRelApi';
export const projectDatabaseRel_ConstructorName = 'projectDatabaseRel';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function ProjectDatabaseRel_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsProjectDatabaseRelEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsProjectDatabaseRelWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
      const objProjectDatabaseRel = ProjectDatabaseRel_GetObjFromJsonObj(returnObj);
      return objProjectDatabaseRel;
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsProjectDatabaseRelWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstCache();
  try {
    const arrProjectDatabaseRelSel = arrProjectDatabaseRelObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objProjectDatabaseRel: clsProjectDatabaseRelEN;
    if (arrProjectDatabaseRelSel.length > 0) {
      objProjectDatabaseRel = arrProjectDatabaseRelSel[0];
      return objProjectDatabaseRel;
    } else {
      if (bolTryAsyncOnce == true) {
        const objProjectDatabaseRelConst = await ProjectDatabaseRel_GetObjBymIdAsync(lngmId);
        if (objProjectDatabaseRelConst != null) {
          ProjectDatabaseRel_ReFreshThisCache();
          return objProjectDatabaseRelConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsProjectDatabaseRelWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsProjectDatabaseRelEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objProjectDatabaseRelCache: clsProjectDatabaseRelEN = JSON.parse(strTempObj);
    return objProjectDatabaseRelCache;
  }
  try {
    const objProjectDatabaseRel = await ProjectDatabaseRel_GetObjBymIdAsync(lngmId);
    if (objProjectDatabaseRel != null) {
      localStorage.setItem(strKey, JSON.stringify(objProjectDatabaseRel));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objProjectDatabaseRel;
    }
    return objProjectDatabaseRel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      projectDatabaseRel_ConstructorName,
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
 * @param objProjectDatabaseRel:所给的对象
 * @returns 对象
 */
export async function ProjectDatabaseRel_UpdateObjInLstCache(
  objProjectDatabaseRel: clsProjectDatabaseRelEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstCache();
    const obj = arrProjectDatabaseRelObjLstCache.find(
      (x) =>
        x.prjId == objProjectDatabaseRel.prjId &&
        x.prjDataBaseId == objProjectDatabaseRel.prjDataBaseId,
    );
    if (obj != null) {
      objProjectDatabaseRel.mId = obj.mId;
      ObjectAssign(obj, objProjectDatabaseRel);
    } else {
      arrProjectDatabaseRelObjLstCache.push(objProjectDatabaseRel);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      projectDatabaseRel_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
 * @returns 返回一个输出字段值
 */
export async function ProjectDatabaseRel_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsProjectDatabaseRelEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsProjectDatabaseRelEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsProjectDatabaseRelEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objProjectDatabaseRel = await ProjectDatabaseRel_GetObjBymIdCache(lngmId);
  if (objProjectDatabaseRel == null) return '';
  if (objProjectDatabaseRel.GetFldValue(strOutFldName) == null) return '';
  return objProjectDatabaseRel.GetFldValue(strOutFldName).toString();
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
export function ProjectDatabaseRel_SortFunDefa(
  a: clsProjectDatabaseRelEN,
  b: clsProjectDatabaseRelEN,
): number {
  return a.mId - b.mId;
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
export function ProjectDatabaseRel_SortFunDefa2Fld(
  a: clsProjectDatabaseRelEN,
  b: clsProjectDatabaseRelEN,
): number {
  if (a.prjId == b.prjId) return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
  else return a.prjId.localeCompare(b.prjId);
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
export function ProjectDatabaseRel_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsProjectDatabaseRelEN.con_mId:
        return (a: clsProjectDatabaseRelEN, b: clsProjectDatabaseRelEN) => {
          return a.mId - b.mId;
        };
      case clsProjectDatabaseRelEN.con_PrjId:
        return (a: clsProjectDatabaseRelEN, b: clsProjectDatabaseRelEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsProjectDatabaseRelEN.con_PrjDataBaseId:
        return (a: clsProjectDatabaseRelEN, b: clsProjectDatabaseRelEN) => {
          return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
        };
      case clsProjectDatabaseRelEN.con_Memo:
        return (a: clsProjectDatabaseRelEN, b: clsProjectDatabaseRelEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ProjectDatabaseRel]中不存在!(in ${projectDatabaseRel_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsProjectDatabaseRelEN.con_mId:
        return (a: clsProjectDatabaseRelEN, b: clsProjectDatabaseRelEN) => {
          return b.mId - a.mId;
        };
      case clsProjectDatabaseRelEN.con_PrjId:
        return (a: clsProjectDatabaseRelEN, b: clsProjectDatabaseRelEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsProjectDatabaseRelEN.con_PrjDataBaseId:
        return (a: clsProjectDatabaseRelEN, b: clsProjectDatabaseRelEN) => {
          return b.prjDataBaseId.localeCompare(a.prjDataBaseId);
        };
      case clsProjectDatabaseRelEN.con_Memo:
        return (a: clsProjectDatabaseRelEN, b: clsProjectDatabaseRelEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ProjectDatabaseRel]中不存在!(in ${projectDatabaseRel_ConstructorName}.${strThisFuncName})`;
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
export async function ProjectDatabaseRel_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsProjectDatabaseRelEN.con_mId:
      return (obj: clsProjectDatabaseRelEN) => {
        return obj.mId === value;
      };
    case clsProjectDatabaseRelEN.con_PrjId:
      return (obj: clsProjectDatabaseRelEN) => {
        return obj.prjId === value;
      };
    case clsProjectDatabaseRelEN.con_PrjDataBaseId:
      return (obj: clsProjectDatabaseRelEN) => {
        return obj.prjDataBaseId === value;
      };
    case clsProjectDatabaseRelEN.con_Memo:
      return (obj: clsProjectDatabaseRelEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ProjectDatabaseRel]中不存在!(in ${projectDatabaseRel_ConstructorName}.${strThisFuncName})`;
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
 * @returns 返回一个关键字值列表
 */
export async function ProjectDatabaseRel_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsProjectDatabaseRelEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrProjectDatabaseRel = await ProjectDatabaseRel_GetObjLstCache();
  if (arrProjectDatabaseRel == null) return [];
  let arrProjectDatabaseRelSel = arrProjectDatabaseRel;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrProjectDatabaseRelSel.length == 0) return [];
  return arrProjectDatabaseRelSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ProjectDatabaseRel_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsProjectDatabaseRelEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
      const objProjectDatabaseRel = ProjectDatabaseRel_GetObjFromJsonObj(returnObj);
      return objProjectDatabaseRel;
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProjectDatabaseRelEN._CurrTabName;
  if (IsNullOrEmpty(clsProjectDatabaseRelEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProjectDatabaseRelEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrProjectDatabaseRelExObjLstCache: Array<clsProjectDatabaseRelEN> =
      CacheHelper.Get(strKey);
    const arrProjectDatabaseRelObjLstT = ProjectDatabaseRel_GetObjLstByJSONObjLst(
      arrProjectDatabaseRelExObjLstCache,
    );
    return arrProjectDatabaseRelObjLstT;
  }
  try {
    const arrProjectDatabaseRelExObjLst = await ProjectDatabaseRel_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrProjectDatabaseRelExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProjectDatabaseRelExObjLst.length,
    );
    console.log(strInfo);
    return arrProjectDatabaseRelExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProjectDatabaseRelEN._CurrTabName;
  if (IsNullOrEmpty(clsProjectDatabaseRelEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProjectDatabaseRelEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrProjectDatabaseRelExObjLstCache: Array<clsProjectDatabaseRelEN> =
      JSON.parse(strTempObjLst);
    const arrProjectDatabaseRelObjLstT = ProjectDatabaseRel_GetObjLstByJSONObjLst(
      arrProjectDatabaseRelExObjLstCache,
    );
    return arrProjectDatabaseRelObjLstT;
  }
  try {
    const arrProjectDatabaseRelExObjLst = await ProjectDatabaseRel_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrProjectDatabaseRelExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProjectDatabaseRelExObjLst.length,
    );
    console.log(strInfo);
    return arrProjectDatabaseRelExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsProjectDatabaseRelEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrProjectDatabaseRelObjLstCache: Array<clsProjectDatabaseRelEN> =
      JSON.parse(strTempObjLst);
    return arrProjectDatabaseRelObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ProjectDatabaseRel_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsProjectDatabaseRelEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
          projectDatabaseRel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProjectDatabaseRel_GetObjLstByJSONObjLst(returnObjLst);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProjectDatabaseRelEN._CurrTabName;
  if (IsNullOrEmpty(clsProjectDatabaseRelEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProjectDatabaseRelEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrProjectDatabaseRelExObjLstCache: Array<clsProjectDatabaseRelEN> =
      JSON.parse(strTempObjLst);
    const arrProjectDatabaseRelObjLstT = ProjectDatabaseRel_GetObjLstByJSONObjLst(
      arrProjectDatabaseRelExObjLstCache,
    );
    return arrProjectDatabaseRelObjLstT;
  }
  try {
    const arrProjectDatabaseRelExObjLst = await ProjectDatabaseRel_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrProjectDatabaseRelExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProjectDatabaseRelExObjLst.length,
    );
    console.log(strInfo);
    return arrProjectDatabaseRelExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsProjectDatabaseRelEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrProjectDatabaseRelObjLstCache: Array<clsProjectDatabaseRelEN> =
      JSON.parse(strTempObjLst);
    return arrProjectDatabaseRelObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ProjectDatabaseRel_GetObjLstCache(): Promise<Array<clsProjectDatabaseRelEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrProjectDatabaseRelObjLstCache;
  switch (clsProjectDatabaseRelEN.CacheModeId) {
    case '04': //sessionStorage
      arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstClientCache();
      break;
    default:
      arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstClientCache();
      break;
  }
  return arrProjectDatabaseRelObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ProjectDatabaseRel_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrProjectDatabaseRelObjLstCache;
  switch (clsProjectDatabaseRelEN.CacheModeId) {
    case '04': //sessionStorage
      arrProjectDatabaseRelObjLstCache =
        await ProjectDatabaseRel_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrProjectDatabaseRelObjLstCache = null;
      break;
    default:
      arrProjectDatabaseRelObjLstCache = null;
      break;
  }
  return arrProjectDatabaseRelObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ProjectDatabaseRel_GetSubObjLstCache(
  objProjectDatabaseRelCond: clsProjectDatabaseRelEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstCache();
  let arrProjectDatabaseRelSel = arrProjectDatabaseRelObjLstCache;
  if (
    objProjectDatabaseRelCond.sfFldComparisonOp == null ||
    objProjectDatabaseRelCond.sfFldComparisonOp == ''
  )
    return arrProjectDatabaseRelSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objProjectDatabaseRelCond.sfFldComparisonOp,
  );
  //console.log("clsProjectDatabaseRelWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objProjectDatabaseRelCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objProjectDatabaseRelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrProjectDatabaseRelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objProjectDatabaseRelCond),
      projectDatabaseRel_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProjectDatabaseRelEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function ProjectDatabaseRel_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsProjectDatabaseRelEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
          projectDatabaseRel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProjectDatabaseRel_GetObjLstByJSONObjLst(returnObjLst);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstCache();
    const arrProjectDatabaseRelSel = arrProjectDatabaseRelObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrProjectDatabaseRelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsProjectDatabaseRelEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
          projectDatabaseRel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProjectDatabaseRel_GetObjLstByJSONObjLst(returnObjLst);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsProjectDatabaseRelEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
          projectDatabaseRel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProjectDatabaseRel_GetObjLstByJSONObjLst(returnObjLst);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsProjectDatabaseRelEN>();
  const arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstCache();
  if (arrProjectDatabaseRelObjLstCache.length == 0) return arrProjectDatabaseRelObjLstCache;
  let arrProjectDatabaseRelSel = arrProjectDatabaseRelObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objProjectDatabaseRelCond = new clsProjectDatabaseRelEN();
  ObjectAssign(objProjectDatabaseRelCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsProjectDatabaseRelWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objProjectDatabaseRelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrProjectDatabaseRelSel.length == 0) return arrProjectDatabaseRelSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.sort(
        ProjectDatabaseRel_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.sort(objPagerPara.sortFun);
    }
    arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.slice(intStart, intEnd);
    return arrProjectDatabaseRelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      projectDatabaseRel_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProjectDatabaseRelEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ProjectDatabaseRel_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsProjectDatabaseRelEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsProjectDatabaseRelEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
          projectDatabaseRel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ProjectDatabaseRel_GetObjLstByJSONObjLst(returnObjLst);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function ProjectDatabaseRel_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_DelProjectDatabaseRelsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelProjectDatabaseRelsAsync';
  const strAction = 'DelProjectDatabaseRels';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_DelProjectDatabaseRelsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelProjectDatabaseRelsByCondAsync';
  const strAction = 'DelProjectDatabaseRelsByCond';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
 * @param objProjectDatabaseRelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ProjectDatabaseRel_AddNewRecordAsync(
  objProjectDatabaseRelEN: clsProjectDatabaseRelEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objProjectDatabaseRelEN);
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectDatabaseRelEN, config);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objProjectDatabaseRelEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ProjectDatabaseRel_AddNewRecordWithReturnKeyAsync(
  objProjectDatabaseRelEN: clsProjectDatabaseRelEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectDatabaseRelEN, config);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
 * @param objProjectDatabaseRelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ProjectDatabaseRel_UpdateRecordAsync(
  objProjectDatabaseRelEN: clsProjectDatabaseRelEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objProjectDatabaseRelEN.sfUpdFldSetStr === undefined ||
    objProjectDatabaseRelEN.sfUpdFldSetStr === null ||
    objProjectDatabaseRelEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objProjectDatabaseRelEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectDatabaseRelEN, config);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
 * @param objProjectDatabaseRelEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ProjectDatabaseRel_UpdateWithConditionAsync(
  objProjectDatabaseRelEN: clsProjectDatabaseRelEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objProjectDatabaseRelEN.sfUpdFldSetStr === undefined ||
    objProjectDatabaseRelEN.sfUpdFldSetStr === null ||
    objProjectDatabaseRelEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objProjectDatabaseRelEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);
  objProjectDatabaseRelEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectDatabaseRelEN, config);
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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_IsExistRecordCache(
  objProjectDatabaseRelCond: clsProjectDatabaseRelEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstCache();
  if (arrProjectDatabaseRelObjLstCache == null) return false;
  let arrProjectDatabaseRelSel = arrProjectDatabaseRelObjLstCache;
  if (
    objProjectDatabaseRelCond.sfFldComparisonOp == null ||
    objProjectDatabaseRelCond.sfFldComparisonOp == ''
  )
    return arrProjectDatabaseRelSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objProjectDatabaseRelCond.sfFldComparisonOp,
  );
  //console.log("clsProjectDatabaseRelWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objProjectDatabaseRelCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objProjectDatabaseRelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrProjectDatabaseRelSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objProjectDatabaseRelCond),
      projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstCache();
  if (arrProjectDatabaseRelObjLstCache == null) return false;
  try {
    const arrProjectDatabaseRelSel = arrProjectDatabaseRelObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrProjectDatabaseRelSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
 * @param objProjectDatabaseRelCond:条件对象
 * @returns 对象列表记录数
 */
export async function ProjectDatabaseRel_GetRecCountByCondCache(
  objProjectDatabaseRelCond: clsProjectDatabaseRelEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrProjectDatabaseRelObjLstCache = await ProjectDatabaseRel_GetObjLstCache();
  if (arrProjectDatabaseRelObjLstCache == null) return 0;
  let arrProjectDatabaseRelSel = arrProjectDatabaseRelObjLstCache;
  if (
    objProjectDatabaseRelCond.sfFldComparisonOp == null ||
    objProjectDatabaseRelCond.sfFldComparisonOp == ''
  )
    return arrProjectDatabaseRelSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objProjectDatabaseRelCond.sfFldComparisonOp,
  );
  //console.log("clsProjectDatabaseRelWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objProjectDatabaseRelCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objProjectDatabaseRelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrProjectDatabaseRelSel = arrProjectDatabaseRelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrProjectDatabaseRelSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objProjectDatabaseRelCond),
      projectDatabaseRel_ConstructorName,
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
export async function ProjectDatabaseRel_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(projectDatabaseRel_Controller, strAction);

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
        projectDatabaseRel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projectDatabaseRel_ConstructorName,
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
export function ProjectDatabaseRel_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ProjectDatabaseRel_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsProjectDatabaseRelEN._CurrTabName;
  switch (clsProjectDatabaseRelEN.CacheModeId) {
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
export function ProjectDatabaseRel_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsProjectDatabaseRelEN._CurrTabName;
    switch (clsProjectDatabaseRelEN.CacheModeId) {
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
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ProjectDatabaseRel_CheckPropertyNew(
  pobjProjectDatabaseRelEN: clsProjectDatabaseRelEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjId) === true ||
    pobjProjectDatabaseRelEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 工程数据库关系)!(clsProjectDatabaseRelBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjDataBaseId) === true ||
    pobjProjectDatabaseRelEN.prjDataBaseId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[项目数据库Id]不能为空(In 工程数据库关系)!(clsProjectDatabaseRelBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjId) == false &&
    GetStrLen(pobjProjectDatabaseRelEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 工程数据库关系(ProjectDatabaseRel))!值:$(pobjProjectDatabaseRelEN.prjId)(clsProjectDatabaseRelBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjDataBaseId) == false &&
    GetStrLen(pobjProjectDatabaseRelEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 工程数据库关系(ProjectDatabaseRel))!值:$(pobjProjectDatabaseRelEN.prjDataBaseId)(clsProjectDatabaseRelBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.memo) == false &&
    GetStrLen(pobjProjectDatabaseRelEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程数据库关系(ProjectDatabaseRel))!值:$(pobjProjectDatabaseRelEN.memo)(clsProjectDatabaseRelBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjProjectDatabaseRelEN.mId &&
    undefined !== pobjProjectDatabaseRelEN.mId &&
    tzDataType.isNumber(pobjProjectDatabaseRelEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjProjectDatabaseRelEN.mId)], 非法,应该为数值型(In 工程数据库关系(ProjectDatabaseRel))!(clsProjectDatabaseRelBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjId) == false &&
    undefined !== pobjProjectDatabaseRelEN.prjId &&
    tzDataType.isString(pobjProjectDatabaseRelEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjProjectDatabaseRelEN.prjId)], 非法,应该为字符型(In 工程数据库关系(ProjectDatabaseRel))!(clsProjectDatabaseRelBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjDataBaseId) == false &&
    undefined !== pobjProjectDatabaseRelEN.prjDataBaseId &&
    tzDataType.isString(pobjProjectDatabaseRelEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjProjectDatabaseRelEN.prjDataBaseId)], 非法,应该为字符型(In 工程数据库关系(ProjectDatabaseRel))!(clsProjectDatabaseRelBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.memo) == false &&
    undefined !== pobjProjectDatabaseRelEN.memo &&
    tzDataType.isString(pobjProjectDatabaseRelEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjProjectDatabaseRelEN.memo)], 非法,应该为字符型(In 工程数据库关系(ProjectDatabaseRel))!(clsProjectDatabaseRelBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ProjectDatabaseRel_CheckProperty4Update(
  pobjProjectDatabaseRelEN: clsProjectDatabaseRelEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjId) == false &&
    GetStrLen(pobjProjectDatabaseRelEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 工程数据库关系(ProjectDatabaseRel))!值:$(pobjProjectDatabaseRelEN.prjId)(clsProjectDatabaseRelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjDataBaseId) == false &&
    GetStrLen(pobjProjectDatabaseRelEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 工程数据库关系(ProjectDatabaseRel))!值:$(pobjProjectDatabaseRelEN.prjDataBaseId)(clsProjectDatabaseRelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.memo) == false &&
    GetStrLen(pobjProjectDatabaseRelEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程数据库关系(ProjectDatabaseRel))!值:$(pobjProjectDatabaseRelEN.memo)(clsProjectDatabaseRelBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjProjectDatabaseRelEN.mId &&
    undefined !== pobjProjectDatabaseRelEN.mId &&
    tzDataType.isNumber(pobjProjectDatabaseRelEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjProjectDatabaseRelEN.mId)], 非法,应该为数值型(In 工程数据库关系(ProjectDatabaseRel))!(clsProjectDatabaseRelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjId) == false &&
    undefined !== pobjProjectDatabaseRelEN.prjId &&
    tzDataType.isString(pobjProjectDatabaseRelEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjProjectDatabaseRelEN.prjId)], 非法,应该为字符型(In 工程数据库关系(ProjectDatabaseRel))!(clsProjectDatabaseRelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.prjDataBaseId) == false &&
    undefined !== pobjProjectDatabaseRelEN.prjDataBaseId &&
    tzDataType.isString(pobjProjectDatabaseRelEN.prjDataBaseId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[项目数据库Id(prjDataBaseId)]的值:[$(pobjProjectDatabaseRelEN.prjDataBaseId)], 非法,应该为字符型(In 工程数据库关系(ProjectDatabaseRel))!(clsProjectDatabaseRelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjProjectDatabaseRelEN.memo) == false &&
    undefined !== pobjProjectDatabaseRelEN.memo &&
    tzDataType.isString(pobjProjectDatabaseRelEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjProjectDatabaseRelEN.memo)], 非法,应该为字符型(In 工程数据库关系(ProjectDatabaseRel))!(clsProjectDatabaseRelBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjProjectDatabaseRelEN.mId ||
    (pobjProjectDatabaseRelEN.mId != null && pobjProjectDatabaseRelEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 工程数据库关系)!(clsProjectDatabaseRelBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ProjectDatabaseRel_GetJSONStrByObj(
  pobjProjectDatabaseRelEN: clsProjectDatabaseRelEN,
): string {
  pobjProjectDatabaseRelEN.sfUpdFldSetStr = pobjProjectDatabaseRelEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjProjectDatabaseRelEN);
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
export function ProjectDatabaseRel_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsProjectDatabaseRelEN> {
  let arrProjectDatabaseRelObjLst = new Array<clsProjectDatabaseRelEN>();
  if (strJSON === '') {
    return arrProjectDatabaseRelObjLst;
  }
  try {
    arrProjectDatabaseRelObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrProjectDatabaseRelObjLst;
  }
  return arrProjectDatabaseRelObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrProjectDatabaseRelObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ProjectDatabaseRel_GetObjLstByJSONObjLst(
  arrProjectDatabaseRelObjLstS: Array<clsProjectDatabaseRelEN>,
): Array<clsProjectDatabaseRelEN> {
  const arrProjectDatabaseRelObjLst = new Array<clsProjectDatabaseRelEN>();
  for (const objInFor of arrProjectDatabaseRelObjLstS) {
    const obj1 = ProjectDatabaseRel_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrProjectDatabaseRelObjLst.push(obj1);
  }
  return arrProjectDatabaseRelObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ProjectDatabaseRel_GetObjByJSONStr(strJSON: string): clsProjectDatabaseRelEN {
  let pobjProjectDatabaseRelEN = new clsProjectDatabaseRelEN();
  if (strJSON === '') {
    return pobjProjectDatabaseRelEN;
  }
  try {
    pobjProjectDatabaseRelEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjProjectDatabaseRelEN;
  }
  return pobjProjectDatabaseRelEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ProjectDatabaseRel_GetCombineCondition(
  objProjectDatabaseRelCond: clsProjectDatabaseRelEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectDatabaseRelCond.dicFldComparisonOp,
      clsProjectDatabaseRelEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objProjectDatabaseRelCond.dicFldComparisonOp[clsProjectDatabaseRelEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsProjectDatabaseRelEN.con_mId,
      objProjectDatabaseRelCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectDatabaseRelCond.dicFldComparisonOp,
      clsProjectDatabaseRelEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objProjectDatabaseRelCond.dicFldComparisonOp[clsProjectDatabaseRelEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectDatabaseRelEN.con_PrjId,
      objProjectDatabaseRelCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectDatabaseRelCond.dicFldComparisonOp,
      clsProjectDatabaseRelEN.con_PrjDataBaseId,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseId: string =
      objProjectDatabaseRelCond.dicFldComparisonOp[clsProjectDatabaseRelEN.con_PrjDataBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectDatabaseRelEN.con_PrjDataBaseId,
      objProjectDatabaseRelCond.prjDataBaseId,
      strComparisonOpPrjDataBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectDatabaseRelCond.dicFldComparisonOp,
      clsProjectDatabaseRelEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objProjectDatabaseRelCond.dicFldComparisonOp[clsProjectDatabaseRelEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectDatabaseRelEN.con_Memo,
      objProjectDatabaseRelCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ProjectDatabaseRel(工程数据库关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ProjectDatabaseRel_GetUniCondStr(
  objProjectDatabaseRelEN: clsProjectDatabaseRelEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objProjectDatabaseRelEN.prjId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objProjectDatabaseRelEN.prjDataBaseId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ProjectDatabaseRel(工程数据库关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPrjDataBaseId: 项目数据库Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ProjectDatabaseRel_GetUniCondStr4Update(
  objProjectDatabaseRelEN: clsProjectDatabaseRelEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objProjectDatabaseRelEN.mId);
  strWhereCond += Format(" and PrjId = '{0}'", objProjectDatabaseRelEN.prjId);
  strWhereCond += Format(" and PrjDataBaseId = '{0}'", objProjectDatabaseRelEN.prjDataBaseId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objProjectDatabaseRelENS:源对象
 * @param objProjectDatabaseRelENT:目标对象
 */
export function ProjectDatabaseRel_GetObjFromJsonObj(
  objProjectDatabaseRelENS: clsProjectDatabaseRelEN,
): clsProjectDatabaseRelEN {
  const objProjectDatabaseRelENT: clsProjectDatabaseRelEN = new clsProjectDatabaseRelEN();
  ObjectAssign(objProjectDatabaseRelENT, objProjectDatabaseRelENS);
  return objProjectDatabaseRelENT;
}
