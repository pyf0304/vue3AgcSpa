/**
 * 类名:clsDict4GCWApi
 * 表名:Dict4GC(00050351)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:42
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
 * 生成代码字典(Dict4GC)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsDict4GCEN } from '@/ts/L0Entity/GeneCode/clsDict4GCEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const dict4GC_Controller = 'Dict4GCApi';
export const dict4GC_ConstructorName = 'dict4GC';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDictId:关键字
 * @returns 对象
 **/
export async function Dict4GC_GetObjByDictIdAsync(strDictId: string): Promise<clsDict4GCEN | null> {
  const strThisFuncName = 'GetObjByDictIdAsync';

  if (IsNullOrEmpty(strDictId) == true) {
    const strMsg = Format('参数:[strDictId]不能为空!(In clsDict4GCWApi.GetObjByDictIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strDictId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDictId]的长度:[{0}]不正确!(clsDict4GCWApi.GetObjByDictIdAsync)',
      strDictId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDictId';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDictId,
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
      const objDict4GC = Dict4GC_GetObjFromJsonObj(returnObj);
      return objDict4GC;
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByDictIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByDictIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByDictIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function Dict4GC_SortFunDefa(a: clsDict4GCEN, b: clsDict4GCEN): number {
  return a.dictId.localeCompare(b.dictId);
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
export function Dict4GC_SortFunDefa2Fld(a: clsDict4GCEN, b: clsDict4GCEN): number {
  if (a.dictValue == b.dictValue) return a.dictTypeId.localeCompare(b.dictTypeId);
  else return a.dictValue.localeCompare(b.dictValue);
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
export function Dict4GC_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDict4GCEN.con_DictId:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          return a.dictId.localeCompare(b.dictId);
        };
      case clsDict4GCEN.con_DictValue:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          return a.dictValue.localeCompare(b.dictValue);
        };
      case clsDict4GCEN.con_DictTypeId:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (a.dictTypeId == null) return -1;
          if (b.dictTypeId == null) return 1;
          return a.dictTypeId.localeCompare(b.dictTypeId);
        };
      case clsDict4GCEN.con_DictKey1:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          return a.dictKey1.localeCompare(b.dictKey1);
        };
      case clsDict4GCEN.con_DictKey2:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (a.dictKey2 == null) return -1;
          if (b.dictKey2 == null) return 1;
          return a.dictKey2.localeCompare(b.dictKey2);
        };
      case clsDict4GCEN.con_UpdDate:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDict4GCEN.con_UpdUser:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDict4GCEN.con_Memo:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Dict4GC]中不存在!(in ${dict4GC_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDict4GCEN.con_DictId:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          return b.dictId.localeCompare(a.dictId);
        };
      case clsDict4GCEN.con_DictValue:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          return b.dictValue.localeCompare(a.dictValue);
        };
      case clsDict4GCEN.con_DictTypeId:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (b.dictTypeId == null) return -1;
          if (a.dictTypeId == null) return 1;
          return b.dictTypeId.localeCompare(a.dictTypeId);
        };
      case clsDict4GCEN.con_DictKey1:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          return b.dictKey1.localeCompare(a.dictKey1);
        };
      case clsDict4GCEN.con_DictKey2:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (b.dictKey2 == null) return -1;
          if (a.dictKey2 == null) return 1;
          return b.dictKey2.localeCompare(a.dictKey2);
        };
      case clsDict4GCEN.con_UpdDate:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDict4GCEN.con_UpdUser:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDict4GCEN.con_Memo:
        return (a: clsDict4GCEN, b: clsDict4GCEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Dict4GC]中不存在!(in ${dict4GC_ConstructorName}.${strThisFuncName})`;
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
export async function Dict4GC_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDict4GCEN.con_DictId:
      return (obj: clsDict4GCEN) => {
        return obj.dictId === value;
      };
    case clsDict4GCEN.con_DictValue:
      return (obj: clsDict4GCEN) => {
        return obj.dictValue === value;
      };
    case clsDict4GCEN.con_DictTypeId:
      return (obj: clsDict4GCEN) => {
        return obj.dictTypeId === value;
      };
    case clsDict4GCEN.con_DictKey1:
      return (obj: clsDict4GCEN) => {
        return obj.dictKey1 === value;
      };
    case clsDict4GCEN.con_DictKey2:
      return (obj: clsDict4GCEN) => {
        return obj.dictKey2 === value;
      };
    case clsDict4GCEN.con_UpdDate:
      return (obj: clsDict4GCEN) => {
        return obj.updDate === value;
      };
    case clsDict4GCEN.con_UpdUser:
      return (obj: clsDict4GCEN) => {
        return obj.updUser === value;
      };
    case clsDict4GCEN.con_Memo:
      return (obj: clsDict4GCEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Dict4GC]中不存在!(in ${dict4GC_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[Dict4GC__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Dict4GC_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
export async function Dict4GC_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
export async function Dict4GC_GetFirstObjAsync(strWhereCond: string): Promise<clsDict4GCEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
      const objDict4GC = Dict4GC_GetObjFromJsonObj(returnObj);
      return objDict4GC;
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function Dict4GC_GetObjLstAsync(strWhereCond: string): Promise<Array<clsDict4GCEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
          dict4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Dict4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDictId:关键字列表
 * @returns 对象列表
 **/
export async function Dict4GC_GetObjLstByDictIdLstAsync(
  arrDictId: Array<string>,
): Promise<Array<clsDict4GCEN>> {
  const strThisFuncName = 'GetObjLstByDictIdLstAsync';
  const strAction = 'GetObjLstByDictIdLst';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDictId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dict4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Dict4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByDictIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function Dict4GC_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDict4GCEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
          dict4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Dict4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
export async function Dict4GC_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDict4GCEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
          dict4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Dict4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function Dict4GC_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDict4GCEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDict4GCEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
          dict4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Dict4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
 * @param strDictId:关键字
 * @returns 获取删除的结果
 **/
export async function Dict4GC_DelRecordAsync(strDictId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dict4GC_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDictId);

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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
 * @param arrDictId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Dict4GC_DelDict4GCsAsync(arrDictId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelDict4GCsAsync';
  const strAction = 'DelDict4GCs';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDictId, config);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
export async function Dict4GC_DelDict4GCsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelDict4GCsByCondAsync';
  const strAction = 'DelDict4GCsByCond';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
 * @param objDict4GCEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Dict4GC_AddNewRecordAsync(objDict4GCEN: clsDict4GCEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDict4GCEN);
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDict4GCEN, config);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
 * @param objDict4GCEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Dict4GC_AddNewRecordWithMaxIdAsync(
  objDict4GCEN: clsDict4GCEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDict4GCEN, config);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
 * @param objDict4GCEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Dict4GC_AddNewRecordWithReturnKeyAsync(
  objDict4GCEN: clsDict4GCEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDict4GCEN, config);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
 * @param objDict4GCEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Dict4GC_UpdateRecordAsync(objDict4GCEN: clsDict4GCEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDict4GCEN.sfUpdFldSetStr === undefined ||
    objDict4GCEN.sfUpdFldSetStr === null ||
    objDict4GCEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objDict4GCEN.dictId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDict4GCEN, config);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
 * @param objDict4GCEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Dict4GC_UpdateWithConditionAsync(
  objDict4GCEN: clsDict4GCEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDict4GCEN.sfUpdFldSetStr === undefined ||
    objDict4GCEN.sfUpdFldSetStr === null ||
    objDict4GCEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objDict4GCEN.dictId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);
  objDict4GCEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDict4GCEN, config);
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function Dict4GC_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strDictId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function Dict4GC_IsExistAsync(strDictId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDictId,
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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
export async function Dict4GC_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function Dict4GC_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function Dict4GC_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dict4GC_Controller, strAction);

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
        dict4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dict4GC_ConstructorName,
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
export function Dict4GC_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Dict4GC_CheckPropertyNew(pobjDict4GCEN: clsDict4GCEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDict4GCEN.dictValue) === true) {
    throw new Error(
      '(errid:Watl000411)字段[字典值]不能为空(In 生成代码字典)!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictKey1) === true) {
    throw new Error(
      '(errid:Watl000411)字段[字典关键字1]不能为空(In 生成代码字典)!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjDict4GCEN.dictId) == false && GetStrLen(pobjDict4GCEN.dictId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[字典Id(dictId)]的长度不能超过8(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictId)(clsDict4GCBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictValue) == false && GetStrLen(pobjDict4GCEN.dictValue) > 500) {
    throw new Error(
      '(errid:Watl000413)字段[字典值(dictValue)]的长度不能超过500(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictValue)(clsDict4GCBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictTypeId) == false && GetStrLen(pobjDict4GCEN.dictTypeId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[字典类型Id(dictTypeId)]的长度不能超过4(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictTypeId)(clsDict4GCBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictKey1) == false && GetStrLen(pobjDict4GCEN.dictKey1) > 50) {
    throw new Error(
      '(errid:Watl000413)字段[字典关键字1(dictKey1)]的长度不能超过50(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictKey1)(clsDict4GCBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictKey2) == false && GetStrLen(pobjDict4GCEN.dictKey2) > 50) {
    throw new Error(
      '(errid:Watl000413)字段[字典关键字2(dictKey2)]的长度不能超过50(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictKey2)(clsDict4GCBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.updDate) == false && GetStrLen(pobjDict4GCEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.updDate)(clsDict4GCBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.updUser) == false && GetStrLen(pobjDict4GCEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.updUser)(clsDict4GCBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.memo) == false && GetStrLen(pobjDict4GCEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.memo)(clsDict4GCBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictId) == false &&
    undefined !== pobjDict4GCEN.dictId &&
    tzDataType.isString(pobjDict4GCEN.dictId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字典Id(dictId)]的值:[$(pobjDict4GCEN.dictId)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictValue) == false &&
    undefined !== pobjDict4GCEN.dictValue &&
    tzDataType.isString(pobjDict4GCEN.dictValue) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字典值(dictValue)]的值:[$(pobjDict4GCEN.dictValue)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictTypeId) == false &&
    undefined !== pobjDict4GCEN.dictTypeId &&
    tzDataType.isString(pobjDict4GCEN.dictTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字典类型Id(dictTypeId)]的值:[$(pobjDict4GCEN.dictTypeId)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictKey1) == false &&
    undefined !== pobjDict4GCEN.dictKey1 &&
    tzDataType.isString(pobjDict4GCEN.dictKey1) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字典关键字1(dictKey1)]的值:[$(pobjDict4GCEN.dictKey1)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictKey2) == false &&
    undefined !== pobjDict4GCEN.dictKey2 &&
    tzDataType.isString(pobjDict4GCEN.dictKey2) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字典关键字2(dictKey2)]的值:[$(pobjDict4GCEN.dictKey2)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.updDate) == false &&
    undefined !== pobjDict4GCEN.updDate &&
    tzDataType.isString(pobjDict4GCEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjDict4GCEN.updDate)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.updUser) == false &&
    undefined !== pobjDict4GCEN.updUser &&
    tzDataType.isString(pobjDict4GCEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjDict4GCEN.updUser)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.memo) == false &&
    undefined !== pobjDict4GCEN.memo &&
    tzDataType.isString(pobjDict4GCEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjDict4GCEN.memo)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Dict4GC_CheckProperty4Update(pobjDict4GCEN: clsDict4GCEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjDict4GCEN.dictId) == false && GetStrLen(pobjDict4GCEN.dictId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[字典Id(dictId)]的长度不能超过8(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictId)(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictValue) == false && GetStrLen(pobjDict4GCEN.dictValue) > 500) {
    throw new Error(
      '(errid:Watl000416)字段[字典值(dictValue)]的长度不能超过500(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictValue)(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictTypeId) == false && GetStrLen(pobjDict4GCEN.dictTypeId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[字典类型Id(dictTypeId)]的长度不能超过4(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictTypeId)(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictKey1) == false && GetStrLen(pobjDict4GCEN.dictKey1) > 50) {
    throw new Error(
      '(errid:Watl000416)字段[字典关键字1(dictKey1)]的长度不能超过50(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictKey1)(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.dictKey2) == false && GetStrLen(pobjDict4GCEN.dictKey2) > 50) {
    throw new Error(
      '(errid:Watl000416)字段[字典关键字2(dictKey2)]的长度不能超过50(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.dictKey2)(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.updDate) == false && GetStrLen(pobjDict4GCEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.updDate)(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.updUser) == false && GetStrLen(pobjDict4GCEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.updUser)(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjDict4GCEN.memo) == false && GetStrLen(pobjDict4GCEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 生成代码字典(Dict4GC))!值:$(pobjDict4GCEN.memo)(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictId) == false &&
    undefined !== pobjDict4GCEN.dictId &&
    tzDataType.isString(pobjDict4GCEN.dictId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字典Id(dictId)]的值:[$(pobjDict4GCEN.dictId)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictValue) == false &&
    undefined !== pobjDict4GCEN.dictValue &&
    tzDataType.isString(pobjDict4GCEN.dictValue) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字典值(dictValue)]的值:[$(pobjDict4GCEN.dictValue)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictTypeId) == false &&
    undefined !== pobjDict4GCEN.dictTypeId &&
    tzDataType.isString(pobjDict4GCEN.dictTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字典类型Id(dictTypeId)]的值:[$(pobjDict4GCEN.dictTypeId)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictKey1) == false &&
    undefined !== pobjDict4GCEN.dictKey1 &&
    tzDataType.isString(pobjDict4GCEN.dictKey1) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字典关键字1(dictKey1)]的值:[$(pobjDict4GCEN.dictKey1)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.dictKey2) == false &&
    undefined !== pobjDict4GCEN.dictKey2 &&
    tzDataType.isString(pobjDict4GCEN.dictKey2) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字典关键字2(dictKey2)]的值:[$(pobjDict4GCEN.dictKey2)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.updDate) == false &&
    undefined !== pobjDict4GCEN.updDate &&
    tzDataType.isString(pobjDict4GCEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjDict4GCEN.updDate)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.updUser) == false &&
    undefined !== pobjDict4GCEN.updUser &&
    tzDataType.isString(pobjDict4GCEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjDict4GCEN.updUser)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDict4GCEN.memo) == false &&
    undefined !== pobjDict4GCEN.memo &&
    tzDataType.isString(pobjDict4GCEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjDict4GCEN.memo)], 非法,应该为字符型(In 生成代码字典(Dict4GC))!(clsDict4GCBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
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
export function Dict4GC_GetJSONStrByObj(pobjDict4GCEN: clsDict4GCEN): string {
  pobjDict4GCEN.sfUpdFldSetStr = pobjDict4GCEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDict4GCEN);
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
export function Dict4GC_GetObjLstByJSONStr(strJSON: string): Array<clsDict4GCEN> {
  let arrDict4GCObjLst = new Array<clsDict4GCEN>();
  if (strJSON === '') {
    return arrDict4GCObjLst;
  }
  try {
    arrDict4GCObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDict4GCObjLst;
  }
  return arrDict4GCObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDict4GCObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Dict4GC_GetObjLstByJSONObjLst(
  arrDict4GCObjLstS: Array<clsDict4GCEN>,
): Array<clsDict4GCEN> {
  const arrDict4GCObjLst = new Array<clsDict4GCEN>();
  for (const objInFor of arrDict4GCObjLstS) {
    const obj1 = Dict4GC_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDict4GCObjLst.push(obj1);
  }
  return arrDict4GCObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Dict4GC_GetObjByJSONStr(strJSON: string): clsDict4GCEN {
  let pobjDict4GCEN = new clsDict4GCEN();
  if (strJSON === '') {
    return pobjDict4GCEN;
  }
  try {
    pobjDict4GCEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDict4GCEN;
  }
  return pobjDict4GCEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Dict4GC_GetCombineCondition(objDict4GCCond: clsDict4GCEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDict4GCCond.dicFldComparisonOp,
      clsDict4GCEN.con_DictId,
    ) == true
  ) {
    const strComparisonOpDictId: string =
      objDict4GCCond.dicFldComparisonOp[clsDict4GCEN.con_DictId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDict4GCEN.con_DictId,
      objDict4GCCond.dictId,
      strComparisonOpDictId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDict4GCCond.dicFldComparisonOp,
      clsDict4GCEN.con_DictValue,
    ) == true
  ) {
    const strComparisonOpDictValue: string =
      objDict4GCCond.dicFldComparisonOp[clsDict4GCEN.con_DictValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDict4GCEN.con_DictValue,
      objDict4GCCond.dictValue,
      strComparisonOpDictValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDict4GCCond.dicFldComparisonOp,
      clsDict4GCEN.con_DictTypeId,
    ) == true
  ) {
    const strComparisonOpDictTypeId: string =
      objDict4GCCond.dicFldComparisonOp[clsDict4GCEN.con_DictTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDict4GCEN.con_DictTypeId,
      objDict4GCCond.dictTypeId,
      strComparisonOpDictTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDict4GCCond.dicFldComparisonOp,
      clsDict4GCEN.con_DictKey1,
    ) == true
  ) {
    const strComparisonOpDictKey1: string =
      objDict4GCCond.dicFldComparisonOp[clsDict4GCEN.con_DictKey1];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDict4GCEN.con_DictKey1,
      objDict4GCCond.dictKey1,
      strComparisonOpDictKey1,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDict4GCCond.dicFldComparisonOp,
      clsDict4GCEN.con_DictKey2,
    ) == true
  ) {
    const strComparisonOpDictKey2: string =
      objDict4GCCond.dicFldComparisonOp[clsDict4GCEN.con_DictKey2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDict4GCEN.con_DictKey2,
      objDict4GCCond.dictKey2,
      strComparisonOpDictKey2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDict4GCCond.dicFldComparisonOp,
      clsDict4GCEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDict4GCCond.dicFldComparisonOp[clsDict4GCEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDict4GCEN.con_UpdDate,
      objDict4GCCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDict4GCCond.dicFldComparisonOp,
      clsDict4GCEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDict4GCCond.dicFldComparisonOp[clsDict4GCEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDict4GCEN.con_UpdUser,
      objDict4GCCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDict4GCCond.dicFldComparisonOp,
      clsDict4GCEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objDict4GCCond.dicFldComparisonOp[clsDict4GCEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDict4GCEN.con_Memo,
      objDict4GCCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Dict4GC(生成代码字典),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDictValue: 字典值(要求唯一的字段)
 * @param strDictTypeId: 字典类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Dict4GC_GetUniCondStr(objDict4GCEN: clsDict4GCEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DictValue = '{0}'", objDict4GCEN.dictValue);
  strWhereCond += Format(" and DictTypeId = '{0}'", objDict4GCEN.dictTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Dict4GC(生成代码字典),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDictValue: 字典值(要求唯一的字段)
 * @param strDictTypeId: 字典类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Dict4GC_GetUniCondStr4Update(objDict4GCEN: clsDict4GCEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DictId <> '{0}'", objDict4GCEN.dictId);
  strWhereCond += Format(" and DictValue = '{0}'", objDict4GCEN.dictValue);
  strWhereCond += Format(" and DictTypeId = '{0}'", objDict4GCEN.dictTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDict4GCENS:源对象
 * @param objDict4GCENT:目标对象
 */
export function Dict4GC_GetObjFromJsonObj(objDict4GCENS: clsDict4GCEN): clsDict4GCEN {
  const objDict4GCENT: clsDict4GCEN = new clsDict4GCEN();
  ObjectAssign(objDict4GCENT, objDict4GCENS);
  return objDict4GCENT;
}
