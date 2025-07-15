/**
 * 类名:clsTabFeatureFldsWApi
 * 表名:TabFeatureFlds(00050455)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:27
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 表功能字段(TabFeatureFlds)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsTabFeatureFldsENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsENEx';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const tabFeatureFlds_Controller = 'TabFeatureFldsApi';
export const tabFeatureFlds_ConstructorName = 'tabFeatureFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function TabFeatureFlds_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsTabFeatureFldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsTabFeatureFldsWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
      const objTabFeatureFlds = TabFeatureFlds_GetObjFromJsonObj(returnObj);
      return objTabFeatureFlds;
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeatureFlds_SortFunDefa(a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeatureFlds_SortFunDefa2Fld(
  a: clsTabFeatureFldsEN,
  b: clsTabFeatureFldsEN,
): number {
  if (a.tabFeatureId == b.tabFeatureId) return a.fldId.localeCompare(b.fldId);
  else return a.tabFeatureId.localeCompare(b.tabFeatureId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeatureFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFeatureFldsEN.con_mId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return a.mId - b.mId;
        };
      case clsTabFeatureFldsEN.con_TabFeatureId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (a.tabFeatureId == null) return -1;
          if (b.tabFeatureId == null) return 1;
          return a.tabFeatureId.localeCompare(b.tabFeatureId);
        };
      case clsTabFeatureFldsEN.con_FldId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (a.fldId == null) return -1;
          if (b.fldId == null) return 1;
          return a.fldId.localeCompare(b.fldId);
        };
      case clsTabFeatureFldsEN.con_IsCurrTab:
        return (a: clsTabFeatureFldsEN) => {
          if (a.isCurrTab == true) return 1;
          else return -1;
        };
      case clsTabFeatureFldsEN.con_FieldTypeId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsTabFeatureFldsEN.con_FuncName:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (a.funcName == null) return -1;
          if (b.funcName == null) return 1;
          return a.funcName.localeCompare(b.funcName);
        };
      case clsTabFeatureFldsEN.con_ValueGivingModeId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (a.valueGivingModeId == null) return -1;
          if (b.valueGivingModeId == null) return 1;
          return a.valueGivingModeId.localeCompare(b.valueGivingModeId);
        };
      case clsTabFeatureFldsEN.con_DefaultValue:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsTabFeatureFldsEN.con_PrjId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsTabFeatureFldsEN.con_OrderNum:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsTabFeatureFldsEN.con_InUse:
        return (a: clsTabFeatureFldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsTabFeatureFldsEN.con_UpdUser:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsTabFeatureFldsEN.con_UpdDate:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsTabFeatureFldsEN.con_Memo:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabFeatureFlds]中不存在!(in ${tabFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTabFeatureFldsEN.con_mId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return b.mId - a.mId;
        };
      case clsTabFeatureFldsEN.con_TabFeatureId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (b.tabFeatureId == null) return -1;
          if (a.tabFeatureId == null) return 1;
          return b.tabFeatureId.localeCompare(a.tabFeatureId);
        };
      case clsTabFeatureFldsEN.con_FldId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (b.fldId == null) return -1;
          if (a.fldId == null) return 1;
          return b.fldId.localeCompare(a.fldId);
        };
      case clsTabFeatureFldsEN.con_IsCurrTab:
        return (b: clsTabFeatureFldsEN) => {
          if (b.isCurrTab == true) return 1;
          else return -1;
        };
      case clsTabFeatureFldsEN.con_FieldTypeId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsTabFeatureFldsEN.con_FuncName:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (b.funcName == null) return -1;
          if (a.funcName == null) return 1;
          return b.funcName.localeCompare(a.funcName);
        };
      case clsTabFeatureFldsEN.con_ValueGivingModeId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (b.valueGivingModeId == null) return -1;
          if (a.valueGivingModeId == null) return 1;
          return b.valueGivingModeId.localeCompare(a.valueGivingModeId);
        };
      case clsTabFeatureFldsEN.con_DefaultValue:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsTabFeatureFldsEN.con_PrjId:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsTabFeatureFldsEN.con_OrderNum:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsTabFeatureFldsEN.con_InUse:
        return (b: clsTabFeatureFldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsTabFeatureFldsEN.con_UpdUser:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsTabFeatureFldsEN.con_UpdDate:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsTabFeatureFldsEN.con_Memo:
        return (a: clsTabFeatureFldsEN, b: clsTabFeatureFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabFeatureFlds]中不存在!(in ${tabFeatureFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function TabFeatureFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTabFeatureFldsEN.con_mId:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.mId === value;
      };
    case clsTabFeatureFldsEN.con_TabFeatureId:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.tabFeatureId === value;
      };
    case clsTabFeatureFldsEN.con_FldId:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.fldId === value;
      };
    case clsTabFeatureFldsEN.con_IsCurrTab:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.isCurrTab === value;
      };
    case clsTabFeatureFldsEN.con_FieldTypeId:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.fieldTypeId === value;
      };
    case clsTabFeatureFldsEN.con_FuncName:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.funcName === value;
      };
    case clsTabFeatureFldsEN.con_ValueGivingModeId:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.valueGivingModeId === value;
      };
    case clsTabFeatureFldsEN.con_DefaultValue:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.defaultValue === value;
      };
    case clsTabFeatureFldsEN.con_PrjId:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.prjId === value;
      };
    case clsTabFeatureFldsEN.con_OrderNum:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.orderNum === value;
      };
    case clsTabFeatureFldsEN.con_InUse:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.inUse === value;
      };
    case clsTabFeatureFldsEN.con_UpdUser:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.updUser === value;
      };
    case clsTabFeatureFldsEN.con_UpdDate:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.updDate === value;
      };
    case clsTabFeatureFldsEN.con_Memo:
      return (obj: clsTabFeatureFldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TabFeatureFlds]中不存在!(in ${tabFeatureFlds_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[TabFeatureFlds__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabFeatureFlds_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTabFeatureFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
      const objTabFeatureFlds = TabFeatureFlds_GetObjFromJsonObj(returnObj);
      return objTabFeatureFlds;
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTabFeatureFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
          tabFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsTabFeatureFldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
          tabFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTabFeatureFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
          tabFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTabFeatureFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
          tabFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabFeatureFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabFeatureFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
          tabFeatureFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeatureFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_DelTabFeatureFldssAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTabFeatureFldssAsync';
  const strAction = 'DelTabFeatureFldss';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objTabFeatureFldsENS:源对象
 * @returns 目标对象=>clsTabFeatureFldsEN:objTabFeatureFldsENT
 **/
export function TabFeatureFlds_CopyToEx(
  objTabFeatureFldsENS: clsTabFeatureFldsEN,
): clsTabFeatureFldsENEx {
  const strThisFuncName = TabFeatureFlds_CopyToEx.name;
  const objTabFeatureFldsENT = new clsTabFeatureFldsENEx();
  try {
    ObjectAssign(objTabFeatureFldsENT, objTabFeatureFldsENS);
    return objTabFeatureFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objTabFeatureFldsENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function TabFeatureFlds_FuncMapByFldName(
  strFldName: string,
  objTabFeatureFldsEx: clsTabFeatureFldsENEx,
) {
  const strThisFuncName = TabFeatureFlds_FuncMapByFldName.name;
  console.log(objTabFeatureFldsEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsTabFeatureFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeatureFlds_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFeatureFldsENEx.con_IsForExtendClass:
        return (a: clsTabFeatureFldsENEx) => {
          if (a.isForExtendClass == true) return 1;
          else return -1;
        };
      default:
        return TabFeatureFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsTabFeatureFldsENEx.con_IsForExtendClass:
        return (b: clsTabFeatureFldsENEx) => {
          if (b.isForExtendClass == true) return 1;
          else return -1;
        };
      default:
        return TabFeatureFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function TabFeatureFlds_DelTabFeatureFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTabFeatureFldssByCondAsync';
  const strAction = 'DelTabFeatureFldssByCond';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeatureFlds_AddNewRecordAsync(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objTabFeatureFldsEN);
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureFldsEN, config);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeatureFlds_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeatureFlds_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objTabFeatureFldsEN);
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeatureFlds_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objTabFeatureFldsEN);
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function TabFeatureFlds_AddNewObjSave(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    TabFeatureFlds_CheckPropertyNew(objTabFeatureFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${tabFeatureFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await TabFeatureFlds_CheckUniCond4Add(objTabFeatureFldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await TabFeatureFlds_AddNewRecordAsync(objTabFeatureFldsEN);
    if (returnBool == true) {
      //TabFeatureFlds_ReFreshCache();
    } else {
      const strInfo = `添加[表功能字段(TabFeatureFlds)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objTabFeatureFldsEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${tabFeatureFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function TabFeatureFlds_CheckUniCond4Add(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = TabFeatureFlds_GetUniCondStr(objTabFeatureFldsEN);
  const bolIsExistCondition = await TabFeatureFlds_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function TabFeatureFlds_CheckUniCond4Update(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = TabFeatureFlds_GetUniCondStr4Update(objTabFeatureFldsEN);
  const bolIsExistCondition = await TabFeatureFlds_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function TabFeatureFlds_UpdateObjSave(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objTabFeatureFldsEN.sfUpdFldSetStr = objTabFeatureFldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objTabFeatureFldsEN.mId == 0 || objTabFeatureFldsEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    TabFeatureFlds_CheckProperty4Update(objTabFeatureFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${tabFeatureFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await TabFeatureFlds_CheckUniCond4Update(objTabFeatureFldsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await TabFeatureFlds_UpdateRecordAsync(objTabFeatureFldsEN);
    if (returnBool == true) {
      //TabFeatureFlds_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${tabFeatureFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeatureFlds_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objTabFeatureFldsEN);
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeatureFlds_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objTabFeatureFldsEN);
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * @param objTabFeatureFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TabFeatureFlds_AddNewRecordWithReturnKeyAsync(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureFldsEN, config);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabFeatureFlds_UpdateRecordAsync(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTabFeatureFldsEN.sfUpdFldSetStr === undefined ||
    objTabFeatureFldsEN.sfUpdFldSetStr === null ||
    objTabFeatureFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFeatureFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureFldsEN, config);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabFeatureFlds_EditRecordExAsync(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objTabFeatureFldsEN.sfUpdFldSetStr === undefined ||
    objTabFeatureFldsEN.sfUpdFldSetStr === null ||
    objTabFeatureFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFeatureFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureFldsEN, config);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
 * @param objTabFeatureFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabFeatureFlds_UpdateWithConditionAsync(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTabFeatureFldsEN.sfUpdFldSetStr === undefined ||
    objTabFeatureFldsEN.sfUpdFldSetStr === null ||
    objTabFeatureFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFeatureFldsEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);
  objTabFeatureFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureFldsEN, config);
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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export async function TabFeatureFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tabFeatureFlds_Controller, strAction);

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
        tabFeatureFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeatureFlds_ConstructorName,
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
export function TabFeatureFlds_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabFeatureFlds_CheckPropertyNew(pobjTabFeatureFldsEN: clsTabFeatureFldsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fieldTypeId) === true ||
    pobjTabFeatureFldsEN.fieldTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段类型Id]不能为空(In 表功能字段)!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.prjId) === true ||
    pobjTabFeatureFldsEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 表功能字段)!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureFldsEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 表功能字段)!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.tabFeatureId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.tabFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表功能Id(tabFeatureId)]的长度不能超过8(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.tabFeatureId}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fldId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.fldId}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fieldTypeId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.fieldTypeId}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.funcName) == false &&
    GetStrLen(pobjTabFeatureFldsEN.funcName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数名(funcName)]的长度不能超过100(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.funcName}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.valueGivingModeId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.valueGivingModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[给值方式Id(valueGivingModeId)]的长度不能超过2(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.valueGivingModeId}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.defaultValue) == false &&
    GetStrLen(pobjTabFeatureFldsEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缺省值(defaultValue)]的长度不能超过50(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.defaultValue}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.prjId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.prjId}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.updUser) == false &&
    GetStrLen(pobjTabFeatureFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.updUser}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.updDate) == false &&
    GetStrLen(pobjTabFeatureFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.updDate}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.memo) == false &&
    GetStrLen(pobjTabFeatureFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.memo}(clsTabFeatureFldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabFeatureFldsEN.mId &&
    undefined !== pobjTabFeatureFldsEN.mId &&
    tzDataType.isNumber(pobjTabFeatureFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjTabFeatureFldsEN.mId}], 非法,应该为数值型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.tabFeatureId) == false &&
    undefined !== pobjTabFeatureFldsEN.tabFeatureId &&
    tzDataType.isString(pobjTabFeatureFldsEN.tabFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表功能Id(tabFeatureId)]的值:[${pobjTabFeatureFldsEN.tabFeatureId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fldId) == false &&
    undefined !== pobjTabFeatureFldsEN.fldId &&
    tzDataType.isString(pobjTabFeatureFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjTabFeatureFldsEN.fldId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureFldsEN.isCurrTab &&
    undefined !== pobjTabFeatureFldsEN.isCurrTab &&
    tzDataType.isBoolean(pobjTabFeatureFldsEN.isCurrTab) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否当前表(isCurrTab)]的值:[${pobjTabFeatureFldsEN.isCurrTab}], 非法,应该为布尔型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fieldTypeId) == false &&
    undefined !== pobjTabFeatureFldsEN.fieldTypeId &&
    tzDataType.isString(pobjTabFeatureFldsEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段类型Id(fieldTypeId)]的值:[${pobjTabFeatureFldsEN.fieldTypeId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.funcName) == false &&
    undefined !== pobjTabFeatureFldsEN.funcName &&
    tzDataType.isString(pobjTabFeatureFldsEN.funcName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数名(funcName)]的值:[${pobjTabFeatureFldsEN.funcName}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.valueGivingModeId) == false &&
    undefined !== pobjTabFeatureFldsEN.valueGivingModeId &&
    tzDataType.isString(pobjTabFeatureFldsEN.valueGivingModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[给值方式Id(valueGivingModeId)]的值:[${pobjTabFeatureFldsEN.valueGivingModeId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.defaultValue) == false &&
    undefined !== pobjTabFeatureFldsEN.defaultValue &&
    tzDataType.isString(pobjTabFeatureFldsEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缺省值(defaultValue)]的值:[${pobjTabFeatureFldsEN.defaultValue}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.prjId) == false &&
    undefined !== pobjTabFeatureFldsEN.prjId &&
    tzDataType.isString(pobjTabFeatureFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjTabFeatureFldsEN.prjId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureFldsEN.orderNum &&
    undefined !== pobjTabFeatureFldsEN.orderNum &&
    tzDataType.isNumber(pobjTabFeatureFldsEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjTabFeatureFldsEN.orderNum}], 非法,应该为数值型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureFldsEN.inUse &&
    undefined !== pobjTabFeatureFldsEN.inUse &&
    tzDataType.isBoolean(pobjTabFeatureFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjTabFeatureFldsEN.inUse}], 非法,应该为布尔型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.updUser) == false &&
    undefined !== pobjTabFeatureFldsEN.updUser &&
    tzDataType.isString(pobjTabFeatureFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjTabFeatureFldsEN.updUser}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.updDate) == false &&
    undefined !== pobjTabFeatureFldsEN.updDate &&
    tzDataType.isString(pobjTabFeatureFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjTabFeatureFldsEN.updDate}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.memo) == false &&
    undefined !== pobjTabFeatureFldsEN.memo &&
    tzDataType.isString(pobjTabFeatureFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjTabFeatureFldsEN.memo}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fieldTypeId) == false &&
    pobjTabFeatureFldsEN.fieldTypeId != '[nuull]' &&
    GetStrLen(pobjTabFeatureFldsEN.fieldTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[字段类型Id]作为外键字段,长度应该为2(In 表功能字段)!(clsTabFeatureFldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabFeatureFlds_CheckProperty4Update(pobjTabFeatureFldsEN: clsTabFeatureFldsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.tabFeatureId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.tabFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表功能Id(tabFeatureId)]的长度不能超过8(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.tabFeatureId}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fldId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.fldId}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fieldTypeId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.fieldTypeId}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.funcName) == false &&
    GetStrLen(pobjTabFeatureFldsEN.funcName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数名(funcName)]的长度不能超过100(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.funcName}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.valueGivingModeId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.valueGivingModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[给值方式Id(valueGivingModeId)]的长度不能超过2(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.valueGivingModeId}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.defaultValue) == false &&
    GetStrLen(pobjTabFeatureFldsEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缺省值(defaultValue)]的长度不能超过50(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.defaultValue}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.prjId) == false &&
    GetStrLen(pobjTabFeatureFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.prjId}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.updUser) == false &&
    GetStrLen(pobjTabFeatureFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.updUser}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.updDate) == false &&
    GetStrLen(pobjTabFeatureFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.updDate}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.memo) == false &&
    GetStrLen(pobjTabFeatureFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 表功能字段(TabFeatureFlds))!值:${pobjTabFeatureFldsEN.memo}(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabFeatureFldsEN.mId &&
    undefined !== pobjTabFeatureFldsEN.mId &&
    tzDataType.isNumber(pobjTabFeatureFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjTabFeatureFldsEN.mId}], 非法,应该为数值型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.tabFeatureId) == false &&
    undefined !== pobjTabFeatureFldsEN.tabFeatureId &&
    tzDataType.isString(pobjTabFeatureFldsEN.tabFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表功能Id(tabFeatureId)]的值:[${pobjTabFeatureFldsEN.tabFeatureId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fldId) == false &&
    undefined !== pobjTabFeatureFldsEN.fldId &&
    tzDataType.isString(pobjTabFeatureFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjTabFeatureFldsEN.fldId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureFldsEN.isCurrTab &&
    undefined !== pobjTabFeatureFldsEN.isCurrTab &&
    tzDataType.isBoolean(pobjTabFeatureFldsEN.isCurrTab) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否当前表(isCurrTab)]的值:[${pobjTabFeatureFldsEN.isCurrTab}], 非法,应该为布尔型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fieldTypeId) == false &&
    undefined !== pobjTabFeatureFldsEN.fieldTypeId &&
    tzDataType.isString(pobjTabFeatureFldsEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段类型Id(fieldTypeId)]的值:[${pobjTabFeatureFldsEN.fieldTypeId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.funcName) == false &&
    undefined !== pobjTabFeatureFldsEN.funcName &&
    tzDataType.isString(pobjTabFeatureFldsEN.funcName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数名(funcName)]的值:[${pobjTabFeatureFldsEN.funcName}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.valueGivingModeId) == false &&
    undefined !== pobjTabFeatureFldsEN.valueGivingModeId &&
    tzDataType.isString(pobjTabFeatureFldsEN.valueGivingModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[给值方式Id(valueGivingModeId)]的值:[${pobjTabFeatureFldsEN.valueGivingModeId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.defaultValue) == false &&
    undefined !== pobjTabFeatureFldsEN.defaultValue &&
    tzDataType.isString(pobjTabFeatureFldsEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缺省值(defaultValue)]的值:[${pobjTabFeatureFldsEN.defaultValue}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.prjId) == false &&
    undefined !== pobjTabFeatureFldsEN.prjId &&
    tzDataType.isString(pobjTabFeatureFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjTabFeatureFldsEN.prjId}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureFldsEN.orderNum &&
    undefined !== pobjTabFeatureFldsEN.orderNum &&
    tzDataType.isNumber(pobjTabFeatureFldsEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjTabFeatureFldsEN.orderNum}], 非法,应该为数值型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureFldsEN.inUse &&
    undefined !== pobjTabFeatureFldsEN.inUse &&
    tzDataType.isBoolean(pobjTabFeatureFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjTabFeatureFldsEN.inUse}], 非法,应该为布尔型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.updUser) == false &&
    undefined !== pobjTabFeatureFldsEN.updUser &&
    tzDataType.isString(pobjTabFeatureFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjTabFeatureFldsEN.updUser}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.updDate) == false &&
    undefined !== pobjTabFeatureFldsEN.updDate &&
    tzDataType.isString(pobjTabFeatureFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjTabFeatureFldsEN.updDate}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.memo) == false &&
    undefined !== pobjTabFeatureFldsEN.memo &&
    tzDataType.isString(pobjTabFeatureFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjTabFeatureFldsEN.memo}], 非法,应该为字符型(In 表功能字段(TabFeatureFlds))!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjTabFeatureFldsEN.mId ||
    (pobjTabFeatureFldsEN.mId != null && pobjTabFeatureFldsEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 表功能字段)!(clsTabFeatureFldsBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjTabFeatureFldsEN.fieldTypeId) == false &&
    pobjTabFeatureFldsEN.fieldTypeId != '[nuull]' &&
    GetStrLen(pobjTabFeatureFldsEN.fieldTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[字段类型Id]作为外键字段,长度应该为2(In 表功能字段)!(clsTabFeatureFldsBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabFeatureFlds_GetJSONStrByObj(pobjTabFeatureFldsEN: clsTabFeatureFldsEN): string {
  pobjTabFeatureFldsEN.sfUpdFldSetStr = pobjTabFeatureFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTabFeatureFldsEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function TabFeatureFlds_GetObjLstByJSONStr(strJSON: string): Array<clsTabFeatureFldsEN> {
  let arrTabFeatureFldsObjLst = new Array<clsTabFeatureFldsEN>();
  if (strJSON === '') {
    return arrTabFeatureFldsObjLst;
  }
  try {
    arrTabFeatureFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTabFeatureFldsObjLst;
  }
  return arrTabFeatureFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTabFeatureFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TabFeatureFlds_GetObjLstByJSONObjLst(
  arrTabFeatureFldsObjLstS: Array<clsTabFeatureFldsEN>,
): Array<clsTabFeatureFldsEN> {
  const arrTabFeatureFldsObjLst = new Array<clsTabFeatureFldsEN>();
  for (const objInFor of arrTabFeatureFldsObjLstS) {
    const obj1 = TabFeatureFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTabFeatureFldsObjLst.push(obj1);
  }
  return arrTabFeatureFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabFeatureFlds_GetObjByJSONStr(strJSON: string): clsTabFeatureFldsEN {
  let pobjTabFeatureFldsEN = new clsTabFeatureFldsEN();
  if (strJSON === '') {
    return pobjTabFeatureFldsEN;
  }
  try {
    pobjTabFeatureFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTabFeatureFldsEN;
  }
  return pobjTabFeatureFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TabFeatureFlds_GetCombineCondition(
  objTabFeatureFldsCond: clsTabFeatureFldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFeatureFldsEN.con_mId,
      objTabFeatureFldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_TabFeatureId,
    ) == true
  ) {
    const strComparisonOpTabFeatureId: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_TabFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_TabFeatureId,
      objTabFeatureFldsCond.tabFeatureId,
      strComparisonOpTabFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_FldId,
      objTabFeatureFldsCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_IsCurrTab,
    ) == true
  ) {
    if (objTabFeatureFldsCond.isCurrTab == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureFldsEN.con_IsCurrTab);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureFldsEN.con_IsCurrTab);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_FieldTypeId,
      objTabFeatureFldsCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_FuncName,
      objTabFeatureFldsCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_ValueGivingModeId,
    ) == true
  ) {
    const strComparisonOpValueGivingModeId: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_ValueGivingModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_ValueGivingModeId,
      objTabFeatureFldsCond.valueGivingModeId,
      strComparisonOpValueGivingModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_DefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_DefaultValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_DefaultValue,
      objTabFeatureFldsCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_PrjId,
      objTabFeatureFldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFeatureFldsEN.con_OrderNum,
      objTabFeatureFldsCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_InUse,
    ) == true
  ) {
    if (objTabFeatureFldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureFldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_UpdUser,
      objTabFeatureFldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_UpdDate,
      objTabFeatureFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureFldsCond.dicFldComparisonOp,
      clsTabFeatureFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTabFeatureFldsCond.dicFldComparisonOp[clsTabFeatureFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureFldsEN.con_Memo,
      objTabFeatureFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabFeatureFlds(表功能字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabFeatureId: 表功能Id(要求唯一的字段)
 * @param strFieldTypeId: 字段类型Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFeatureFlds_GetUniCondStr(objTabFeatureFldsEN: clsTabFeatureFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabFeatureId = '{0}'", objTabFeatureFldsEN.tabFeatureId);
  strWhereCond += Format(" and FieldTypeId = '{0}'", objTabFeatureFldsEN.fieldTypeId);
  strWhereCond += Format(" and FldId = '{0}'", objTabFeatureFldsEN.fldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabFeatureFlds(表功能字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabFeatureId: 表功能Id(要求唯一的字段)
 * @param strFieldTypeId: 字段类型Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFeatureFlds_GetUniCondStr4Update(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objTabFeatureFldsEN.mId);
  strWhereCond += Format(" and TabFeatureId = '{0}'", objTabFeatureFldsEN.tabFeatureId);
  strWhereCond += Format(" and FieldTypeId = '{0}'", objTabFeatureFldsEN.fieldTypeId);
  strWhereCond += Format(" and FldId = '{0}'", objTabFeatureFldsEN.fldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTabFeatureFldsENS:源对象
 * @param objTabFeatureFldsENT:目标对象
 */
export function TabFeatureFlds_GetObjFromJsonObj(
  objTabFeatureFldsENS: clsTabFeatureFldsEN,
): clsTabFeatureFldsEN {
  const objTabFeatureFldsENT: clsTabFeatureFldsEN = new clsTabFeatureFldsEN();
  ObjectAssign(objTabFeatureFldsENT, objTabFeatureFldsENS);
  return objTabFeatureFldsENT;
}
