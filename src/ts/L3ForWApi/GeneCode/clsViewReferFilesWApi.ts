/**
 * 类名:clsViewReferFilesWApi
 * 表名:ViewReferFiles(00050465)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:49:59
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
 * 界面引用文件(ViewReferFiles)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsViewReferFilesEN } from '@/ts/L0Entity/GeneCode/clsViewReferFilesEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewReferFiles_Controller = 'ViewReferFilesApi';
export const viewReferFiles_ConstructorName = 'viewReferFiles';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function ViewReferFiles_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsViewReferFilesEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsViewReferFilesWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
      const objViewReferFiles = ViewReferFiles_GetObjFromJsonObj(returnObj);
      return objViewReferFiles;
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewReferFiles_SortFunDefa(a: clsViewReferFilesEN, b: clsViewReferFilesEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewReferFiles_SortFunDefa2Fld(
  a: clsViewReferFilesEN,
  b: clsViewReferFilesEN,
): number {
  if (a.viewId == b.viewId) return a.codeTypeId.localeCompare(b.codeTypeId);
  else return a.viewId.localeCompare(b.viewId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewReferFiles_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewReferFilesEN.con_mId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return a.mId - b.mId;
        };
      case clsViewReferFilesEN.con_ViewId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          if (a.viewId == null) return -1;
          if (b.viewId == null) return 1;
          return a.viewId.localeCompare(b.viewId);
        };
      case clsViewReferFilesEN.con_CodeTypeId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsViewReferFilesEN.con_ReferFileId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return a.referFileId.localeCompare(b.referFileId);
        };
      case clsViewReferFilesEN.con_InUse:
        return (a: clsViewReferFilesEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsViewReferFilesEN.con_OrderNum:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsViewReferFilesEN.con_IsTemplate:
        return (a: clsViewReferFilesEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsViewReferFilesEN.con_PrjId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsViewReferFilesEN.con_UpdDate:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewReferFilesEN.con_UpdUserId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsViewReferFilesEN.con_Memo:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewReferFiles]中不存在!(in ${viewReferFiles_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewReferFilesEN.con_mId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return b.mId - a.mId;
        };
      case clsViewReferFilesEN.con_ViewId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          if (b.viewId == null) return -1;
          if (a.viewId == null) return 1;
          return b.viewId.localeCompare(a.viewId);
        };
      case clsViewReferFilesEN.con_CodeTypeId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsViewReferFilesEN.con_ReferFileId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return b.referFileId.localeCompare(a.referFileId);
        };
      case clsViewReferFilesEN.con_InUse:
        return (b: clsViewReferFilesEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsViewReferFilesEN.con_OrderNum:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsViewReferFilesEN.con_IsTemplate:
        return (b: clsViewReferFilesEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsViewReferFilesEN.con_PrjId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsViewReferFilesEN.con_UpdDate:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewReferFilesEN.con_UpdUserId:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsViewReferFilesEN.con_Memo:
        return (a: clsViewReferFilesEN, b: clsViewReferFilesEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewReferFiles]中不存在!(in ${viewReferFiles_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewReferFiles_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewReferFilesEN.con_mId:
      return (obj: clsViewReferFilesEN) => {
        return obj.mId === value;
      };
    case clsViewReferFilesEN.con_ViewId:
      return (obj: clsViewReferFilesEN) => {
        return obj.viewId === value;
      };
    case clsViewReferFilesEN.con_CodeTypeId:
      return (obj: clsViewReferFilesEN) => {
        return obj.codeTypeId === value;
      };
    case clsViewReferFilesEN.con_ReferFileId:
      return (obj: clsViewReferFilesEN) => {
        return obj.referFileId === value;
      };
    case clsViewReferFilesEN.con_InUse:
      return (obj: clsViewReferFilesEN) => {
        return obj.inUse === value;
      };
    case clsViewReferFilesEN.con_OrderNum:
      return (obj: clsViewReferFilesEN) => {
        return obj.orderNum === value;
      };
    case clsViewReferFilesEN.con_IsTemplate:
      return (obj: clsViewReferFilesEN) => {
        return obj.isTemplate === value;
      };
    case clsViewReferFilesEN.con_PrjId:
      return (obj: clsViewReferFilesEN) => {
        return obj.prjId === value;
      };
    case clsViewReferFilesEN.con_UpdDate:
      return (obj: clsViewReferFilesEN) => {
        return obj.updDate === value;
      };
    case clsViewReferFilesEN.con_UpdUserId:
      return (obj: clsViewReferFilesEN) => {
        return obj.updUserId === value;
      };
    case clsViewReferFilesEN.con_Memo:
      return (obj: clsViewReferFilesEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewReferFiles]中不存在!(in ${viewReferFiles_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[ViewReferFiles__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewReferFiles_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewReferFilesEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
      const objViewReferFiles = ViewReferFiles_GetObjFromJsonObj(returnObj);
      return objViewReferFiles;
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewReferFilesEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
          viewReferFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function ViewReferFiles_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsViewReferFilesEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
          viewReferFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function ViewReferFiles_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewReferFilesEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
          viewReferFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewReferFilesEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
          viewReferFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewReferFilesEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewReferFilesEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
          viewReferFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_DelViewReferFilessAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewReferFilessAsync';
  const strAction = 'DelViewReferFiless';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_DelViewReferFilessByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewReferFilessByCondAsync';
  const strAction = 'DelViewReferFilessByCond';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * @param objViewReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewReferFiles_AddNewRecordAsync(
  objViewReferFilesEN: clsViewReferFilesEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewReferFilesEN);
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewReferFilesEN, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objViewReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewReferFiles_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objViewReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewReferFiles_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewReferFilesEN);
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objViewReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewReferFiles_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewReferFilesEN);
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objViewReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewReferFiles_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewReferFilesEN);
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objViewReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewReferFiles_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objViewReferFilesEN);
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * @param objViewReferFilesEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewReferFiles_AddNewRecordWithReturnKeyAsync(
  objViewReferFilesEN: clsViewReferFilesEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewReferFilesEN, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * @param objViewReferFilesEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewReferFiles_UpdateRecordAsync(
  objViewReferFilesEN: clsViewReferFilesEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewReferFilesEN.sfUpdFldSetStr === undefined ||
    objViewReferFilesEN.sfUpdFldSetStr === null ||
    objViewReferFilesEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewReferFilesEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewReferFilesEN, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * @param objViewReferFilesEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewReferFiles_UpdateWithConditionAsync(
  objViewReferFilesEN: clsViewReferFilesEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewReferFilesEN.sfUpdFldSetStr === undefined ||
    objViewReferFilesEN.sfUpdFldSetStr === null ||
    objViewReferFilesEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewReferFilesEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);
  objViewReferFilesEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewReferFilesEN, config);
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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewReferFiles_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export async function ViewReferFiles_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function ViewReferFiles_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewReferFiles_Controller, strAction);

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
        viewReferFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewReferFiles_ConstructorName,
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
export function ViewReferFiles_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewReferFiles_CheckPropertyNew(pobjViewReferFilesEN: clsViewReferFilesEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.codeTypeId) === true ||
    pobjViewReferFilesEN.codeTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[代码类型Id]不能为空(In 界面引用文件)!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.referFileId) === true ||
    pobjViewReferFilesEN.referFileId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[引用文件Id]不能为空(In 界面引用文件)!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewReferFilesEN.orderNum ||
    (pobjViewReferFilesEN.orderNum != null && pobjViewReferFilesEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[序号]不能为空(In 界面引用文件)!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewReferFilesEN.isTemplate ||
    (pobjViewReferFilesEN.isTemplate != null && pobjViewReferFilesEN.isTemplate.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否模板]不能为空(In 界面引用文件)!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.prjId) === true ||
    pobjViewReferFilesEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 界面引用文件)!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjViewReferFilesEN.updUserId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改用户Id]不能为空(In 界面引用文件)!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.viewId) == false &&
    GetStrLen(pobjViewReferFilesEN.viewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面Id(viewId)]的长度不能超过8(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.viewId)(clsViewReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.codeTypeId) == false &&
    GetStrLen(pobjViewReferFilesEN.codeTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.codeTypeId)(clsViewReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.referFileId) == false &&
    GetStrLen(pobjViewReferFilesEN.referFileId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[引用文件Id(referFileId)]的长度不能超过8(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.referFileId)(clsViewReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.prjId) == false &&
    GetStrLen(pobjViewReferFilesEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.prjId)(clsViewReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.updDate) == false &&
    GetStrLen(pobjViewReferFilesEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.updDate)(clsViewReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.updUserId) == false &&
    GetStrLen(pobjViewReferFilesEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.updUserId)(clsViewReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.memo) == false &&
    GetStrLen(pobjViewReferFilesEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.memo)(clsViewReferFilesBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewReferFilesEN.mId &&
    undefined !== pobjViewReferFilesEN.mId &&
    tzDataType.isNumber(pobjViewReferFilesEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjViewReferFilesEN.mId)], 非法,应该为数值型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.viewId) == false &&
    undefined !== pobjViewReferFilesEN.viewId &&
    tzDataType.isString(pobjViewReferFilesEN.viewId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面Id(viewId)]的值:[$(pobjViewReferFilesEN.viewId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.codeTypeId) == false &&
    undefined !== pobjViewReferFilesEN.codeTypeId &&
    tzDataType.isString(pobjViewReferFilesEN.codeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[$(pobjViewReferFilesEN.codeTypeId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.referFileId) == false &&
    undefined !== pobjViewReferFilesEN.referFileId &&
    tzDataType.isString(pobjViewReferFilesEN.referFileId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[引用文件Id(referFileId)]的值:[$(pobjViewReferFilesEN.referFileId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewReferFilesEN.inUse &&
    undefined !== pobjViewReferFilesEN.inUse &&
    tzDataType.isBoolean(pobjViewReferFilesEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjViewReferFilesEN.inUse)], 非法,应该为布尔型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewReferFilesEN.orderNum &&
    undefined !== pobjViewReferFilesEN.orderNum &&
    tzDataType.isNumber(pobjViewReferFilesEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjViewReferFilesEN.orderNum)], 非法,应该为数值型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewReferFilesEN.isTemplate &&
    undefined !== pobjViewReferFilesEN.isTemplate &&
    tzDataType.isBoolean(pobjViewReferFilesEN.isTemplate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否模板(isTemplate)]的值:[$(pobjViewReferFilesEN.isTemplate)], 非法,应该为布尔型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.prjId) == false &&
    undefined !== pobjViewReferFilesEN.prjId &&
    tzDataType.isString(pobjViewReferFilesEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjViewReferFilesEN.prjId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.updDate) == false &&
    undefined !== pobjViewReferFilesEN.updDate &&
    tzDataType.isString(pobjViewReferFilesEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewReferFilesEN.updDate)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.updUserId) == false &&
    undefined !== pobjViewReferFilesEN.updUserId &&
    tzDataType.isString(pobjViewReferFilesEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjViewReferFilesEN.updUserId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.memo) == false &&
    undefined !== pobjViewReferFilesEN.memo &&
    tzDataType.isString(pobjViewReferFilesEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjViewReferFilesEN.memo)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewReferFiles_CheckProperty4Update(pobjViewReferFilesEN: clsViewReferFilesEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.viewId) == false &&
    GetStrLen(pobjViewReferFilesEN.viewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面Id(viewId)]的长度不能超过8(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.viewId)(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.codeTypeId) == false &&
    GetStrLen(pobjViewReferFilesEN.codeTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.codeTypeId)(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.referFileId) == false &&
    GetStrLen(pobjViewReferFilesEN.referFileId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[引用文件Id(referFileId)]的长度不能超过8(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.referFileId)(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.prjId) == false &&
    GetStrLen(pobjViewReferFilesEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.prjId)(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.updDate) == false &&
    GetStrLen(pobjViewReferFilesEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.updDate)(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.updUserId) == false &&
    GetStrLen(pobjViewReferFilesEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.updUserId)(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.memo) == false &&
    GetStrLen(pobjViewReferFilesEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面引用文件(ViewReferFiles))!值:$(pobjViewReferFilesEN.memo)(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewReferFilesEN.mId &&
    undefined !== pobjViewReferFilesEN.mId &&
    tzDataType.isNumber(pobjViewReferFilesEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjViewReferFilesEN.mId)], 非法,应该为数值型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.viewId) == false &&
    undefined !== pobjViewReferFilesEN.viewId &&
    tzDataType.isString(pobjViewReferFilesEN.viewId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面Id(viewId)]的值:[$(pobjViewReferFilesEN.viewId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.codeTypeId) == false &&
    undefined !== pobjViewReferFilesEN.codeTypeId &&
    tzDataType.isString(pobjViewReferFilesEN.codeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[$(pobjViewReferFilesEN.codeTypeId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.referFileId) == false &&
    undefined !== pobjViewReferFilesEN.referFileId &&
    tzDataType.isString(pobjViewReferFilesEN.referFileId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[引用文件Id(referFileId)]的值:[$(pobjViewReferFilesEN.referFileId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewReferFilesEN.inUse &&
    undefined !== pobjViewReferFilesEN.inUse &&
    tzDataType.isBoolean(pobjViewReferFilesEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjViewReferFilesEN.inUse)], 非法,应该为布尔型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewReferFilesEN.orderNum &&
    undefined !== pobjViewReferFilesEN.orderNum &&
    tzDataType.isNumber(pobjViewReferFilesEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjViewReferFilesEN.orderNum)], 非法,应该为数值型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewReferFilesEN.isTemplate &&
    undefined !== pobjViewReferFilesEN.isTemplate &&
    tzDataType.isBoolean(pobjViewReferFilesEN.isTemplate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否模板(isTemplate)]的值:[$(pobjViewReferFilesEN.isTemplate)], 非法,应该为布尔型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.prjId) == false &&
    undefined !== pobjViewReferFilesEN.prjId &&
    tzDataType.isString(pobjViewReferFilesEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjViewReferFilesEN.prjId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.updDate) == false &&
    undefined !== pobjViewReferFilesEN.updDate &&
    tzDataType.isString(pobjViewReferFilesEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewReferFilesEN.updDate)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.updUserId) == false &&
    undefined !== pobjViewReferFilesEN.updUserId &&
    tzDataType.isString(pobjViewReferFilesEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjViewReferFilesEN.updUserId)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewReferFilesEN.memo) == false &&
    undefined !== pobjViewReferFilesEN.memo &&
    tzDataType.isString(pobjViewReferFilesEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjViewReferFilesEN.memo)], 非法,应该为字符型(In 界面引用文件(ViewReferFiles))!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjViewReferFilesEN.mId ||
    (pobjViewReferFilesEN.mId != null && pobjViewReferFilesEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 界面引用文件)!(clsViewReferFilesBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewReferFiles_GetJSONStrByObj(pobjViewReferFilesEN: clsViewReferFilesEN): string {
  pobjViewReferFilesEN.sfUpdFldSetStr = pobjViewReferFilesEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewReferFilesEN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewReferFiles_GetObjLstByJSONStr(strJSON: string): Array<clsViewReferFilesEN> {
  let arrViewReferFilesObjLst = new Array<clsViewReferFilesEN>();
  if (strJSON === '') {
    return arrViewReferFilesObjLst;
  }
  try {
    arrViewReferFilesObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewReferFilesObjLst;
  }
  return arrViewReferFilesObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewReferFilesObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewReferFiles_GetObjLstByJSONObjLst(
  arrViewReferFilesObjLstS: Array<clsViewReferFilesEN>,
): Array<clsViewReferFilesEN> {
  const arrViewReferFilesObjLst = new Array<clsViewReferFilesEN>();
  for (const objInFor of arrViewReferFilesObjLstS) {
    const obj1 = ViewReferFiles_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewReferFilesObjLst.push(obj1);
  }
  return arrViewReferFilesObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewReferFiles_GetObjByJSONStr(strJSON: string): clsViewReferFilesEN {
  let pobjViewReferFilesEN = new clsViewReferFilesEN();
  if (strJSON === '') {
    return pobjViewReferFilesEN;
  }
  try {
    pobjViewReferFilesEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewReferFilesEN;
  }
  return pobjViewReferFilesEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewReferFiles_GetCombineCondition(
  objViewReferFilesCond: clsViewReferFilesEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewReferFilesEN.con_mId,
      objViewReferFilesCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_ViewId,
    ) == true
  ) {
    const strComparisonOpViewId: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_ViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewReferFilesEN.con_ViewId,
      objViewReferFilesCond.viewId,
      strComparisonOpViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewReferFilesEN.con_CodeTypeId,
      objViewReferFilesCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_ReferFileId,
    ) == true
  ) {
    const strComparisonOpReferFileId: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_ReferFileId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewReferFilesEN.con_ReferFileId,
      objViewReferFilesCond.referFileId,
      strComparisonOpReferFileId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_InUse,
    ) == true
  ) {
    if (objViewReferFilesCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewReferFilesEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewReferFilesEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewReferFilesEN.con_OrderNum,
      objViewReferFilesCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_IsTemplate,
    ) == true
  ) {
    if (objViewReferFilesCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewReferFilesEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewReferFilesEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewReferFilesEN.con_PrjId,
      objViewReferFilesCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewReferFilesEN.con_UpdDate,
      objViewReferFilesCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewReferFilesEN.con_UpdUserId,
      objViewReferFilesCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewReferFilesCond.dicFldComparisonOp,
      clsViewReferFilesEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewReferFilesCond.dicFldComparisonOp[clsViewReferFilesEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewReferFilesEN.con_Memo,
      objViewReferFilesCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewReferFiles(界面引用文件),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strReferFileId: 引用文件Id(要求唯一的字段)
 * @param strViewId: 界面Id(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewReferFiles_GetUniCondStr(objViewReferFilesEN: clsViewReferFilesEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ReferFileId = '{0}'", objViewReferFilesEN.referFileId);
  strWhereCond += Format(" and ViewId = '{0}'", objViewReferFilesEN.viewId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objViewReferFilesEN.codeTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewReferFiles(界面引用文件),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strReferFileId: 引用文件Id(要求唯一的字段)
 * @param strViewId: 界面Id(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewReferFiles_GetUniCondStr4Update(
  objViewReferFilesEN: clsViewReferFilesEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objViewReferFilesEN.mId);
  strWhereCond += Format(" and ReferFileId = '{0}'", objViewReferFilesEN.referFileId);
  strWhereCond += Format(" and ViewId = '{0}'", objViewReferFilesEN.viewId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objViewReferFilesEN.codeTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewReferFilesENS:源对象
 * @param objViewReferFilesENT:目标对象
 */
export function ViewReferFiles_GetObjFromJsonObj(
  objViewReferFilesENS: clsViewReferFilesEN,
): clsViewReferFilesEN {
  const objViewReferFilesENT: clsViewReferFilesEN = new clsViewReferFilesEN();
  ObjectAssign(objViewReferFilesENT, objViewReferFilesENS);
  return objViewReferFilesENT;
}
