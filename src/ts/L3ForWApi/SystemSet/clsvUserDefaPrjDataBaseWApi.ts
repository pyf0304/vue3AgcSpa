/**
 * 类名:clsvUserDefaPrjDataBaseWApi
 * 表名:vUserDefaPrjDataBase(00050275)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:18
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v用户默认数据库(vUserDefaPrjDataBase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvUserDefaPrjDataBaseEN } from '@/ts/L0Entity/SystemSet/clsvUserDefaPrjDataBaseEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vUserDefaPrjDataBase_Controller = 'vUserDefaPrjDataBaseApi';
export const vUserDefaPrjDataBase_ConstructorName = 'vUserDefaPrjDataBase';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vUserDefaPrjDataBase_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvUserDefaPrjDataBaseEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvUserDefaPrjDataBaseWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
      const objvUserDefaPrjDataBase = vUserDefaPrjDataBase_GetObjFromJsonObj(returnObj);
      return objvUserDefaPrjDataBase;
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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function vUserDefaPrjDataBase_SortFunDefa(
  a: clsvUserDefaPrjDataBaseEN,
  b: clsvUserDefaPrjDataBaseEN,
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
export function vUserDefaPrjDataBase_SortFunDefa2Fld(
  a: clsvUserDefaPrjDataBaseEN,
  b: clsvUserDefaPrjDataBaseEN,
): number {
  if (a.prjId == b.prjId) return a.prjName.localeCompare(b.prjName);
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
export function vUserDefaPrjDataBase_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvUserDefaPrjDataBaseEN.con_mId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return a.mId - b.mId;
        };
      case clsvUserDefaPrjDataBaseEN.con_PrjId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvUserDefaPrjDataBaseEN.con_PrjName:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsvUserDefaPrjDataBaseEN.con_UserId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvUserDefaPrjDataBaseEN.con_UserName:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
        };
      case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseName:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (a.prjDataBaseName == null) return -1;
          if (b.prjDataBaseName == null) return 1;
          return a.prjDataBaseName.localeCompare(b.prjDataBaseName);
        };
      case clsvUserDefaPrjDataBaseEN.con_DataBaseName:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return a.dataBaseName.localeCompare(b.dataBaseName);
        };
      case clsvUserDefaPrjDataBaseEN.con_IpAddress:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return a.ipAddress.localeCompare(b.ipAddress);
        };
      case clsvUserDefaPrjDataBaseEN.con_DataBaseUserId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (a.dataBaseUserId == null) return -1;
          if (b.dataBaseUserId == null) return 1;
          return a.dataBaseUserId.localeCompare(b.dataBaseUserId);
        };
      case clsvUserDefaPrjDataBaseEN.con_UpdUserId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsvUserDefaPrjDataBaseEN.con_UpdDate:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvUserDefaPrjDataBaseEN.con_Memo:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vUserDefaPrjDataBase]中不存在!(in ${vUserDefaPrjDataBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvUserDefaPrjDataBaseEN.con_mId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return b.mId - a.mId;
        };
      case clsvUserDefaPrjDataBaseEN.con_PrjId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvUserDefaPrjDataBaseEN.con_PrjName:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsvUserDefaPrjDataBaseEN.con_UserId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvUserDefaPrjDataBaseEN.con_UserName:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return b.prjDataBaseId.localeCompare(a.prjDataBaseId);
        };
      case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseName:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (b.prjDataBaseName == null) return -1;
          if (a.prjDataBaseName == null) return 1;
          return b.prjDataBaseName.localeCompare(a.prjDataBaseName);
        };
      case clsvUserDefaPrjDataBaseEN.con_DataBaseName:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return b.dataBaseName.localeCompare(a.dataBaseName);
        };
      case clsvUserDefaPrjDataBaseEN.con_IpAddress:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          return b.ipAddress.localeCompare(a.ipAddress);
        };
      case clsvUserDefaPrjDataBaseEN.con_DataBaseUserId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (b.dataBaseUserId == null) return -1;
          if (a.dataBaseUserId == null) return 1;
          return b.dataBaseUserId.localeCompare(a.dataBaseUserId);
        };
      case clsvUserDefaPrjDataBaseEN.con_UpdUserId:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsvUserDefaPrjDataBaseEN.con_UpdDate:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvUserDefaPrjDataBaseEN.con_Memo:
        return (a: clsvUserDefaPrjDataBaseEN, b: clsvUserDefaPrjDataBaseEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vUserDefaPrjDataBase]中不存在!(in ${vUserDefaPrjDataBase_ConstructorName}.${strThisFuncName})`;
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
export async function vUserDefaPrjDataBase_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvUserDefaPrjDataBaseEN.con_mId:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.mId === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_PrjId:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.prjId === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_PrjName:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.prjName === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_UserId:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.userId === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_UserName:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.userName === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseId:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.prjDataBaseId === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseName:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.prjDataBaseName === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_DataBaseName:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.dataBaseName === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_IpAddress:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.ipAddress === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_DataBaseUserId:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.dataBaseUserId === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_UpdUserId:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.updUserId === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_UpdDate:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.updDate === value;
      };
    case clsvUserDefaPrjDataBaseEN.con_Memo:
      return (obj: clsvUserDefaPrjDataBaseEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vUserDefaPrjDataBase]中不存在!(in ${vUserDefaPrjDataBase_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vUserDefaPrjDataBase__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vUserDefaPrjDataBase_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvUserDefaPrjDataBaseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
      const objvUserDefaPrjDataBase = vUserDefaPrjDataBase_GetObjFromJsonObj(returnObj);
      return objvUserDefaPrjDataBase;
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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvUserDefaPrjDataBaseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
          vUserDefaPrjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserDefaPrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvUserDefaPrjDataBaseEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
          vUserDefaPrjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserDefaPrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvUserDefaPrjDataBaseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
          vUserDefaPrjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserDefaPrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvUserDefaPrjDataBaseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
          vUserDefaPrjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserDefaPrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvUserDefaPrjDataBaseEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvUserDefaPrjDataBaseEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
          vUserDefaPrjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserDefaPrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
export async function vUserDefaPrjDataBase_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vUserDefaPrjDataBase_Controller, strAction);

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
        vUserDefaPrjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserDefaPrjDataBase_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vUserDefaPrjDataBase_GetWebApiUrl(
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vUserDefaPrjDataBase_GetJSONStrByObj(
  pobjvUserDefaPrjDataBaseEN: clsvUserDefaPrjDataBaseEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvUserDefaPrjDataBaseEN);
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
export function vUserDefaPrjDataBase_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvUserDefaPrjDataBaseEN> {
  let arrvUserDefaPrjDataBaseObjLst = new Array<clsvUserDefaPrjDataBaseEN>();
  if (strJSON === '') {
    return arrvUserDefaPrjDataBaseObjLst;
  }
  try {
    arrvUserDefaPrjDataBaseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvUserDefaPrjDataBaseObjLst;
  }
  return arrvUserDefaPrjDataBaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvUserDefaPrjDataBaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vUserDefaPrjDataBase_GetObjLstByJSONObjLst(
  arrvUserDefaPrjDataBaseObjLstS: Array<clsvUserDefaPrjDataBaseEN>,
): Array<clsvUserDefaPrjDataBaseEN> {
  const arrvUserDefaPrjDataBaseObjLst = new Array<clsvUserDefaPrjDataBaseEN>();
  for (const objInFor of arrvUserDefaPrjDataBaseObjLstS) {
    const obj1 = vUserDefaPrjDataBase_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvUserDefaPrjDataBaseObjLst.push(obj1);
  }
  return arrvUserDefaPrjDataBaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vUserDefaPrjDataBase_GetObjByJSONStr(strJSON: string): clsvUserDefaPrjDataBaseEN {
  let pobjvUserDefaPrjDataBaseEN = new clsvUserDefaPrjDataBaseEN();
  if (strJSON === '') {
    return pobjvUserDefaPrjDataBaseEN;
  }
  try {
    pobjvUserDefaPrjDataBaseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvUserDefaPrjDataBaseEN;
  }
  return pobjvUserDefaPrjDataBaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vUserDefaPrjDataBase_GetCombineCondition(
  objvUserDefaPrjDataBaseCond: clsvUserDefaPrjDataBaseEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserDefaPrjDataBaseEN.con_mId,
      objvUserDefaPrjDataBaseCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_PrjId,
      objvUserDefaPrjDataBaseCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_PrjName,
    ) == true
  ) {
    const strComparisonOpPrjName: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_PrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_PrjName,
      objvUserDefaPrjDataBaseCond.prjName,
      strComparisonOpPrjName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_UserId,
      objvUserDefaPrjDataBaseCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_UserName,
      objvUserDefaPrjDataBaseCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_PrjDataBaseId,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseId: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_PrjDataBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_PrjDataBaseId,
      objvUserDefaPrjDataBaseCond.prjDataBaseId,
      strComparisonOpPrjDataBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_PrjDataBaseName,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseName: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_PrjDataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_PrjDataBaseName,
      objvUserDefaPrjDataBaseCond.prjDataBaseName,
      strComparisonOpPrjDataBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_DataBaseName,
    ) == true
  ) {
    const strComparisonOpDataBaseName: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_DataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_DataBaseName,
      objvUserDefaPrjDataBaseCond.dataBaseName,
      strComparisonOpDataBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_IpAddress,
    ) == true
  ) {
    const strComparisonOpIpAddress: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_IpAddress];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_IpAddress,
      objvUserDefaPrjDataBaseCond.ipAddress,
      strComparisonOpIpAddress,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_DataBaseUserId,
    ) == true
  ) {
    const strComparisonOpDataBaseUserId: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_DataBaseUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_DataBaseUserId,
      objvUserDefaPrjDataBaseCond.dataBaseUserId,
      strComparisonOpDataBaseUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_UpdUserId,
      objvUserDefaPrjDataBaseCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_UpdDate,
      objvUserDefaPrjDataBaseCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp,
      clsvUserDefaPrjDataBaseEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvUserDefaPrjDataBaseCond.dicFldComparisonOp[clsvUserDefaPrjDataBaseEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserDefaPrjDataBaseEN.con_Memo,
      objvUserDefaPrjDataBaseCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvUserDefaPrjDataBaseENS:源对象
 * @param objvUserDefaPrjDataBaseENT:目标对象
 */
export function vUserDefaPrjDataBase_GetObjFromJsonObj(
  objvUserDefaPrjDataBaseENS: clsvUserDefaPrjDataBaseEN,
): clsvUserDefaPrjDataBaseEN {
  const objvUserDefaPrjDataBaseENT: clsvUserDefaPrjDataBaseEN = new clsvUserDefaPrjDataBaseEN();
  ObjectAssign(objvUserDefaPrjDataBaseENT, objvUserDefaPrjDataBaseENS);
  return objvUserDefaPrjDataBaseENT;
}
