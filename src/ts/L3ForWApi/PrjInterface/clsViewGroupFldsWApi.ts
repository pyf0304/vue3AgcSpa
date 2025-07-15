/**
 * 类名:clsViewGroupFldsWApi
 * 表名:ViewGroupFlds(00050136)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:57
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面组字段集合(ViewGroupFlds)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsViewGroupFldsEN } from '@/ts/L0Entity/PrjInterface/clsViewGroupFldsEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewGroupFlds_Controller = 'ViewGroupFldsApi';
export const viewGroupFlds_ConstructorName = 'viewGroupFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function ViewGroupFlds_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsViewGroupFldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsViewGroupFldsWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
      const objViewGroupFlds = ViewGroupFlds_GetObjFromJsonObj(returnObj);
      return objViewGroupFlds;
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewGroupFlds_SortFunDefa(a: clsViewGroupFldsEN, b: clsViewGroupFldsEN): number {
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
export function ViewGroupFlds_SortFunDefa2Fld(
  a: clsViewGroupFldsEN,
  b: clsViewGroupFldsEN,
): number {
  if (a.ctlTypeId == b.ctlTypeId) return a.ddlItemsOptionId.localeCompare(b.ddlItemsOptionId);
  else return a.ctlTypeId.localeCompare(b.ctlTypeId);
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
export function ViewGroupFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewGroupFldsEN.con_mId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return a.mId - b.mId;
        };
      case clsViewGroupFldsEN.con_CtlTypeId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (a.ctlTypeId == null) return -1;
          if (b.ctlTypeId == null) return 1;
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsViewGroupFldsEN.con_DdlItemsOptionId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return a.ddlItemsOptionId.localeCompare(b.ddlItemsOptionId);
        };
      case clsViewGroupFldsEN.con_DsCondStr:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (a.dsCondStr == null) return -1;
          if (b.dsCondStr == null) return 1;
          return a.dsCondStr.localeCompare(b.dsCondStr);
        };
      case clsViewGroupFldsEN.con_DsDataTextFieldId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (a.dsDataTextFieldId == null) return -1;
          if (b.dsDataTextFieldId == null) return 1;
          return a.dsDataTextFieldId.localeCompare(b.dsDataTextFieldId);
        };
      case clsViewGroupFldsEN.con_DsDataValueFieldId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (a.dsDataValueFieldId == null) return -1;
          if (b.dsDataValueFieldId == null) return 1;
          return a.dsDataValueFieldId.localeCompare(b.dsDataValueFieldId);
        };
      case clsViewGroupFldsEN.con_DsSqlStr:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (a.dsSqlStr == null) return -1;
          if (b.dsSqlStr == null) return 1;
          return a.dsSqlStr.localeCompare(b.dsSqlStr);
        };
      case clsViewGroupFldsEN.con_DsTabId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return a.dsTabId.localeCompare(b.dsTabId);
        };
      case clsViewGroupFldsEN.con_ItemsString:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (a.itemsString == null) return -1;
          if (b.itemsString == null) return 1;
          return a.itemsString.localeCompare(b.itemsString);
        };
      case clsViewGroupFldsEN.con_SeqNum:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsViewGroupFldsEN.con_TabFldId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return a.tabFldId - b.tabFldId;
        };
      case clsViewGroupFldsEN.con_UpdDate:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewGroupFldsEN.con_UserId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsViewGroupFldsEN.con_ViewGroupId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return a.viewGroupId.localeCompare(b.viewGroupId);
        };
      case clsViewGroupFldsEN.con_Memo:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewGroupFlds]中不存在!(in ${viewGroupFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewGroupFldsEN.con_mId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return b.mId - a.mId;
        };
      case clsViewGroupFldsEN.con_CtlTypeId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (b.ctlTypeId == null) return -1;
          if (a.ctlTypeId == null) return 1;
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsViewGroupFldsEN.con_DdlItemsOptionId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return b.ddlItemsOptionId.localeCompare(a.ddlItemsOptionId);
        };
      case clsViewGroupFldsEN.con_DsCondStr:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (b.dsCondStr == null) return -1;
          if (a.dsCondStr == null) return 1;
          return b.dsCondStr.localeCompare(a.dsCondStr);
        };
      case clsViewGroupFldsEN.con_DsDataTextFieldId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (b.dsDataTextFieldId == null) return -1;
          if (a.dsDataTextFieldId == null) return 1;
          return b.dsDataTextFieldId.localeCompare(a.dsDataTextFieldId);
        };
      case clsViewGroupFldsEN.con_DsDataValueFieldId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (b.dsDataValueFieldId == null) return -1;
          if (a.dsDataValueFieldId == null) return 1;
          return b.dsDataValueFieldId.localeCompare(a.dsDataValueFieldId);
        };
      case clsViewGroupFldsEN.con_DsSqlStr:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (b.dsSqlStr == null) return -1;
          if (a.dsSqlStr == null) return 1;
          return b.dsSqlStr.localeCompare(a.dsSqlStr);
        };
      case clsViewGroupFldsEN.con_DsTabId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return b.dsTabId.localeCompare(a.dsTabId);
        };
      case clsViewGroupFldsEN.con_ItemsString:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (b.itemsString == null) return -1;
          if (a.itemsString == null) return 1;
          return b.itemsString.localeCompare(a.itemsString);
        };
      case clsViewGroupFldsEN.con_SeqNum:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsViewGroupFldsEN.con_TabFldId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return b.tabFldId - a.tabFldId;
        };
      case clsViewGroupFldsEN.con_UpdDate:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewGroupFldsEN.con_UserId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsViewGroupFldsEN.con_ViewGroupId:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          return b.viewGroupId.localeCompare(a.viewGroupId);
        };
      case clsViewGroupFldsEN.con_Memo:
        return (a: clsViewGroupFldsEN, b: clsViewGroupFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewGroupFlds]中不存在!(in ${viewGroupFlds_ConstructorName}.${strThisFuncName})`;
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
export async function ViewGroupFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewGroupFldsEN.con_mId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.mId === value;
      };
    case clsViewGroupFldsEN.con_CtlTypeId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.ctlTypeId === value;
      };
    case clsViewGroupFldsEN.con_DdlItemsOptionId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.ddlItemsOptionId === value;
      };
    case clsViewGroupFldsEN.con_DsCondStr:
      return (obj: clsViewGroupFldsEN) => {
        return obj.dsCondStr === value;
      };
    case clsViewGroupFldsEN.con_DsDataTextFieldId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.dsDataTextFieldId === value;
      };
    case clsViewGroupFldsEN.con_DsDataValueFieldId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.dsDataValueFieldId === value;
      };
    case clsViewGroupFldsEN.con_DsSqlStr:
      return (obj: clsViewGroupFldsEN) => {
        return obj.dsSqlStr === value;
      };
    case clsViewGroupFldsEN.con_DsTabId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.dsTabId === value;
      };
    case clsViewGroupFldsEN.con_ItemsString:
      return (obj: clsViewGroupFldsEN) => {
        return obj.itemsString === value;
      };
    case clsViewGroupFldsEN.con_SeqNum:
      return (obj: clsViewGroupFldsEN) => {
        return obj.seqNum === value;
      };
    case clsViewGroupFldsEN.con_TabFldId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.tabFldId === value;
      };
    case clsViewGroupFldsEN.con_UpdDate:
      return (obj: clsViewGroupFldsEN) => {
        return obj.updDate === value;
      };
    case clsViewGroupFldsEN.con_UserId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.userId === value;
      };
    case clsViewGroupFldsEN.con_ViewGroupId:
      return (obj: clsViewGroupFldsEN) => {
        return obj.viewGroupId === value;
      };
    case clsViewGroupFldsEN.con_Memo:
      return (obj: clsViewGroupFldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewGroupFlds]中不存在!(in ${viewGroupFlds_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[ViewGroupFlds__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewGroupFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewGroupFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
      const objViewGroupFlds = ViewGroupFlds_GetObjFromJsonObj(returnObj);
      return objViewGroupFlds;
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewGroupFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
          viewGroupFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroupFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsViewGroupFldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
          viewGroupFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroupFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewGroupFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
          viewGroupFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroupFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewGroupFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
          viewGroupFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroupFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewGroupFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewGroupFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
          viewGroupFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroupFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_DelViewGroupFldssAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelViewGroupFldssAsync';
  const strAction = 'DelViewGroupFldss';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_DelViewGroupFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewGroupFldssByCondAsync';
  const strAction = 'DelViewGroupFldssByCond';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
 * @param objViewGroupFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewGroupFlds_AddNewRecordAsync(
  objViewGroupFldsEN: clsViewGroupFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewGroupFldsEN);
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupFldsEN, config);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
 * @param objViewGroupFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewGroupFlds_AddNewRecordWithReturnKeyAsync(
  objViewGroupFldsEN: clsViewGroupFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupFldsEN, config);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
 * @param objViewGroupFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewGroupFlds_UpdateRecordAsync(
  objViewGroupFldsEN: clsViewGroupFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewGroupFldsEN.sfUpdFldSetStr === undefined ||
    objViewGroupFldsEN.sfUpdFldSetStr === null ||
    objViewGroupFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewGroupFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupFldsEN, config);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
 * @param objViewGroupFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewGroupFlds_UpdateWithConditionAsync(
  objViewGroupFldsEN: clsViewGroupFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewGroupFldsEN.sfUpdFldSetStr === undefined ||
    objViewGroupFldsEN.sfUpdFldSetStr === null ||
    objViewGroupFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewGroupFldsEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);
  objViewGroupFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupFldsEN, config);
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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export async function ViewGroupFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewGroupFlds_Controller, strAction);

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
        viewGroupFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroupFlds_ConstructorName,
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
export function ViewGroupFlds_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewGroupFlds_CheckPropertyNew(pobjViewGroupFldsEN: clsViewGroupFldsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ddlItemsOptionId) === true ||
    pobjViewGroupFldsEN.ddlItemsOptionId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[下拉框列表选项ID]不能为空(In 界面组字段集合)!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsTabId) === true ||
    pobjViewGroupFldsEN.dsTabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[数据源表ID]不能为空(In 界面组字段集合)!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewGroupFldsEN.tabFldId ||
    (pobjViewGroupFldsEN.tabFldId != null && pobjViewGroupFldsEN.tabFldId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[表字段ID]不能为空(In 界面组字段集合)!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.userId) === true ||
    pobjViewGroupFldsEN.userId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[用户Id]不能为空(In 界面组字段集合)!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.viewGroupId) === true ||
    pobjViewGroupFldsEN.viewGroupId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[界面组ID]不能为空(In 界面组字段集合)!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjViewGroupFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.ctlTypeId)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjViewGroupFldsEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.ddlItemsOptionId)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsCondStr) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsCondStr) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据源条件串(dsCondStr)]的长度不能超过50(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsCondStr)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsDataTextFieldId) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsDataTextFieldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据源文本字段Id(dsDataTextFieldId)]的长度不能超过8(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsDataTextFieldId)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsDataValueFieldId) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsDataValueFieldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据源值字段Id(dsDataValueFieldId)]的长度不能超过8(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsDataValueFieldId)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsSqlStr) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsSqlStr) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据源SQL串(dsSqlStr)]的长度不能超过200(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsSqlStr)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsTabId) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据源表ID(dsTabId)]的长度不能超过8(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsTabId)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.itemsString) == false &&
    GetStrLen(pobjViewGroupFldsEN.itemsString) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[列表项串(itemsString)]的长度不能超过200(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.itemsString)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.updDate) == false &&
    GetStrLen(pobjViewGroupFldsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.updDate)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.userId) == false &&
    GetStrLen(pobjViewGroupFldsEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.userId)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.viewGroupId) == false &&
    GetStrLen(pobjViewGroupFldsEN.viewGroupId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面组ID(viewGroupId)]的长度不能超过8(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.viewGroupId)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.memo) == false &&
    GetStrLen(pobjViewGroupFldsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.memo)(clsViewGroupFldsBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewGroupFldsEN.mId &&
    undefined !== pobjViewGroupFldsEN.mId &&
    tzDataType.isNumber(pobjViewGroupFldsEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjViewGroupFldsEN.mId)], 非法,应该为数值型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ctlTypeId) == false &&
    undefined !== pobjViewGroupFldsEN.ctlTypeId &&
    tzDataType.isString(pobjViewGroupFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[$(pobjViewGroupFldsEN.ctlTypeId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ddlItemsOptionId) == false &&
    undefined !== pobjViewGroupFldsEN.ddlItemsOptionId &&
    tzDataType.isString(pobjViewGroupFldsEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[$(pobjViewGroupFldsEN.ddlItemsOptionId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsCondStr) == false &&
    undefined !== pobjViewGroupFldsEN.dsCondStr &&
    tzDataType.isString(pobjViewGroupFldsEN.dsCondStr) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据源条件串(dsCondStr)]的值:[$(pobjViewGroupFldsEN.dsCondStr)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsDataTextFieldId) == false &&
    undefined !== pobjViewGroupFldsEN.dsDataTextFieldId &&
    tzDataType.isString(pobjViewGroupFldsEN.dsDataTextFieldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据源文本字段Id(dsDataTextFieldId)]的值:[$(pobjViewGroupFldsEN.dsDataTextFieldId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsDataValueFieldId) == false &&
    undefined !== pobjViewGroupFldsEN.dsDataValueFieldId &&
    tzDataType.isString(pobjViewGroupFldsEN.dsDataValueFieldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据源值字段Id(dsDataValueFieldId)]的值:[$(pobjViewGroupFldsEN.dsDataValueFieldId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsSqlStr) == false &&
    undefined !== pobjViewGroupFldsEN.dsSqlStr &&
    tzDataType.isString(pobjViewGroupFldsEN.dsSqlStr) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据源SQL串(dsSqlStr)]的值:[$(pobjViewGroupFldsEN.dsSqlStr)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsTabId) == false &&
    undefined !== pobjViewGroupFldsEN.dsTabId &&
    tzDataType.isString(pobjViewGroupFldsEN.dsTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据源表ID(dsTabId)]的值:[$(pobjViewGroupFldsEN.dsTabId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.itemsString) == false &&
    undefined !== pobjViewGroupFldsEN.itemsString &&
    tzDataType.isString(pobjViewGroupFldsEN.itemsString) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[列表项串(itemsString)]的值:[$(pobjViewGroupFldsEN.itemsString)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewGroupFldsEN.seqNum &&
    undefined !== pobjViewGroupFldsEN.seqNum &&
    tzDataType.isNumber(pobjViewGroupFldsEN.seqNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字段序号(seqNum)]的值:[$(pobjViewGroupFldsEN.seqNum)], 非法,应该为数值型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewGroupFldsEN.tabFldId &&
    undefined !== pobjViewGroupFldsEN.tabFldId &&
    tzDataType.isNumber(pobjViewGroupFldsEN.tabFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表字段ID(tabFldId)]的值:[$(pobjViewGroupFldsEN.tabFldId)], 非法,应该为数值型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.updDate) == false &&
    undefined !== pobjViewGroupFldsEN.updDate &&
    tzDataType.isString(pobjViewGroupFldsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewGroupFldsEN.updDate)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.userId) == false &&
    undefined !== pobjViewGroupFldsEN.userId &&
    tzDataType.isString(pobjViewGroupFldsEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjViewGroupFldsEN.userId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.viewGroupId) == false &&
    undefined !== pobjViewGroupFldsEN.viewGroupId &&
    tzDataType.isString(pobjViewGroupFldsEN.viewGroupId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面组ID(viewGroupId)]的值:[$(pobjViewGroupFldsEN.viewGroupId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.memo) == false &&
    undefined !== pobjViewGroupFldsEN.memo &&
    tzDataType.isString(pobjViewGroupFldsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjViewGroupFldsEN.memo)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewGroupFlds_CheckProperty4Update(pobjViewGroupFldsEN: clsViewGroupFldsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjViewGroupFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.ctlTypeId)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjViewGroupFldsEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.ddlItemsOptionId)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsCondStr) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsCondStr) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据源条件串(dsCondStr)]的长度不能超过50(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsCondStr)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsDataTextFieldId) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsDataTextFieldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据源文本字段Id(dsDataTextFieldId)]的长度不能超过8(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsDataTextFieldId)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsDataValueFieldId) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsDataValueFieldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据源值字段Id(dsDataValueFieldId)]的长度不能超过8(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsDataValueFieldId)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsSqlStr) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsSqlStr) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据源SQL串(dsSqlStr)]的长度不能超过200(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsSqlStr)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsTabId) == false &&
    GetStrLen(pobjViewGroupFldsEN.dsTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据源表ID(dsTabId)]的长度不能超过8(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.dsTabId)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.itemsString) == false &&
    GetStrLen(pobjViewGroupFldsEN.itemsString) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[列表项串(itemsString)]的长度不能超过200(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.itemsString)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.updDate) == false &&
    GetStrLen(pobjViewGroupFldsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.updDate)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.userId) == false &&
    GetStrLen(pobjViewGroupFldsEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.userId)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.viewGroupId) == false &&
    GetStrLen(pobjViewGroupFldsEN.viewGroupId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面组ID(viewGroupId)]的长度不能超过8(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.viewGroupId)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.memo) == false &&
    GetStrLen(pobjViewGroupFldsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面组字段集合(ViewGroupFlds))!值:$(pobjViewGroupFldsEN.memo)(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewGroupFldsEN.mId &&
    undefined !== pobjViewGroupFldsEN.mId &&
    tzDataType.isNumber(pobjViewGroupFldsEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjViewGroupFldsEN.mId)], 非法,应该为数值型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ctlTypeId) == false &&
    undefined !== pobjViewGroupFldsEN.ctlTypeId &&
    tzDataType.isString(pobjViewGroupFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[$(pobjViewGroupFldsEN.ctlTypeId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.ddlItemsOptionId) == false &&
    undefined !== pobjViewGroupFldsEN.ddlItemsOptionId &&
    tzDataType.isString(pobjViewGroupFldsEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[$(pobjViewGroupFldsEN.ddlItemsOptionId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsCondStr) == false &&
    undefined !== pobjViewGroupFldsEN.dsCondStr &&
    tzDataType.isString(pobjViewGroupFldsEN.dsCondStr) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据源条件串(dsCondStr)]的值:[$(pobjViewGroupFldsEN.dsCondStr)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsDataTextFieldId) == false &&
    undefined !== pobjViewGroupFldsEN.dsDataTextFieldId &&
    tzDataType.isString(pobjViewGroupFldsEN.dsDataTextFieldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据源文本字段Id(dsDataTextFieldId)]的值:[$(pobjViewGroupFldsEN.dsDataTextFieldId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsDataValueFieldId) == false &&
    undefined !== pobjViewGroupFldsEN.dsDataValueFieldId &&
    tzDataType.isString(pobjViewGroupFldsEN.dsDataValueFieldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据源值字段Id(dsDataValueFieldId)]的值:[$(pobjViewGroupFldsEN.dsDataValueFieldId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsSqlStr) == false &&
    undefined !== pobjViewGroupFldsEN.dsSqlStr &&
    tzDataType.isString(pobjViewGroupFldsEN.dsSqlStr) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据源SQL串(dsSqlStr)]的值:[$(pobjViewGroupFldsEN.dsSqlStr)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.dsTabId) == false &&
    undefined !== pobjViewGroupFldsEN.dsTabId &&
    tzDataType.isString(pobjViewGroupFldsEN.dsTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据源表ID(dsTabId)]的值:[$(pobjViewGroupFldsEN.dsTabId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.itemsString) == false &&
    undefined !== pobjViewGroupFldsEN.itemsString &&
    tzDataType.isString(pobjViewGroupFldsEN.itemsString) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[列表项串(itemsString)]的值:[$(pobjViewGroupFldsEN.itemsString)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewGroupFldsEN.seqNum &&
    undefined !== pobjViewGroupFldsEN.seqNum &&
    tzDataType.isNumber(pobjViewGroupFldsEN.seqNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字段序号(seqNum)]的值:[$(pobjViewGroupFldsEN.seqNum)], 非法,应该为数值型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewGroupFldsEN.tabFldId &&
    undefined !== pobjViewGroupFldsEN.tabFldId &&
    tzDataType.isNumber(pobjViewGroupFldsEN.tabFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表字段ID(tabFldId)]的值:[$(pobjViewGroupFldsEN.tabFldId)], 非法,应该为数值型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.updDate) == false &&
    undefined !== pobjViewGroupFldsEN.updDate &&
    tzDataType.isString(pobjViewGroupFldsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewGroupFldsEN.updDate)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.userId) == false &&
    undefined !== pobjViewGroupFldsEN.userId &&
    tzDataType.isString(pobjViewGroupFldsEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjViewGroupFldsEN.userId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.viewGroupId) == false &&
    undefined !== pobjViewGroupFldsEN.viewGroupId &&
    tzDataType.isString(pobjViewGroupFldsEN.viewGroupId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面组ID(viewGroupId)]的值:[$(pobjViewGroupFldsEN.viewGroupId)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupFldsEN.memo) == false &&
    undefined !== pobjViewGroupFldsEN.memo &&
    tzDataType.isString(pobjViewGroupFldsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjViewGroupFldsEN.memo)], 非法,应该为字符型(In 界面组字段集合(ViewGroupFlds))!(clsViewGroupFldsBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjViewGroupFldsEN.mId ||
    (pobjViewGroupFldsEN.mId != null && pobjViewGroupFldsEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 界面组字段集合)!(clsViewGroupFldsBL:CheckProperty4Update)',
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
export function ViewGroupFlds_GetJSONStrByObj(pobjViewGroupFldsEN: clsViewGroupFldsEN): string {
  pobjViewGroupFldsEN.sfUpdFldSetStr = pobjViewGroupFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewGroupFldsEN);
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
export function ViewGroupFlds_GetObjLstByJSONStr(strJSON: string): Array<clsViewGroupFldsEN> {
  let arrViewGroupFldsObjLst = new Array<clsViewGroupFldsEN>();
  if (strJSON === '') {
    return arrViewGroupFldsObjLst;
  }
  try {
    arrViewGroupFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewGroupFldsObjLst;
  }
  return arrViewGroupFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewGroupFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewGroupFlds_GetObjLstByJSONObjLst(
  arrViewGroupFldsObjLstS: Array<clsViewGroupFldsEN>,
): Array<clsViewGroupFldsEN> {
  const arrViewGroupFldsObjLst = new Array<clsViewGroupFldsEN>();
  for (const objInFor of arrViewGroupFldsObjLstS) {
    const obj1 = ViewGroupFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewGroupFldsObjLst.push(obj1);
  }
  return arrViewGroupFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewGroupFlds_GetObjByJSONStr(strJSON: string): clsViewGroupFldsEN {
  let pobjViewGroupFldsEN = new clsViewGroupFldsEN();
  if (strJSON === '') {
    return pobjViewGroupFldsEN;
  }
  try {
    pobjViewGroupFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewGroupFldsEN;
  }
  return pobjViewGroupFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewGroupFlds_GetCombineCondition(
  objViewGroupFldsCond: clsViewGroupFldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewGroupFldsEN.con_mId,
      objViewGroupFldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_CtlTypeId,
      objViewGroupFldsCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_DdlItemsOptionId,
    ) == true
  ) {
    const strComparisonOpDdlItemsOptionId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_DdlItemsOptionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_DdlItemsOptionId,
      objViewGroupFldsCond.ddlItemsOptionId,
      strComparisonOpDdlItemsOptionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_DsCondStr,
    ) == true
  ) {
    const strComparisonOpDsCondStr: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_DsCondStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_DsCondStr,
      objViewGroupFldsCond.dsCondStr,
      strComparisonOpDsCondStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_DsDataTextFieldId,
    ) == true
  ) {
    const strComparisonOpDsDataTextFieldId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_DsDataTextFieldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_DsDataTextFieldId,
      objViewGroupFldsCond.dsDataTextFieldId,
      strComparisonOpDsDataTextFieldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_DsDataValueFieldId,
    ) == true
  ) {
    const strComparisonOpDsDataValueFieldId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_DsDataValueFieldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_DsDataValueFieldId,
      objViewGroupFldsCond.dsDataValueFieldId,
      strComparisonOpDsDataValueFieldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_DsSqlStr,
    ) == true
  ) {
    const strComparisonOpDsSqlStr: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_DsSqlStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_DsSqlStr,
      objViewGroupFldsCond.dsSqlStr,
      strComparisonOpDsSqlStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_DsTabId,
    ) == true
  ) {
    const strComparisonOpDsTabId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_DsTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_DsTabId,
      objViewGroupFldsCond.dsTabId,
      strComparisonOpDsTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_ItemsString,
    ) == true
  ) {
    const strComparisonOpItemsString: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_ItemsString];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_ItemsString,
      objViewGroupFldsCond.itemsString,
      strComparisonOpItemsString,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_SeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_SeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewGroupFldsEN.con_SeqNum,
      objViewGroupFldsCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_TabFldId,
    ) == true
  ) {
    const strComparisonOpTabFldId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_TabFldId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewGroupFldsEN.con_TabFldId,
      objViewGroupFldsCond.tabFldId,
      strComparisonOpTabFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_UpdDate,
      objViewGroupFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_UserId,
      objViewGroupFldsCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_ViewGroupId,
    ) == true
  ) {
    const strComparisonOpViewGroupId: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_ViewGroupId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_ViewGroupId,
      objViewGroupFldsCond.viewGroupId,
      strComparisonOpViewGroupId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupFldsCond.dicFldComparisonOp,
      clsViewGroupFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewGroupFldsCond.dicFldComparisonOp[clsViewGroupFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupFldsEN.con_Memo,
      objViewGroupFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewGroupFlds(界面组字段集合),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngTabFldId: 表字段ID(要求唯一的字段)
 * @param strViewGroupId: 界面组ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewGroupFlds_GetUniCondStr(objViewGroupFldsEN: clsViewGroupFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabFldId = '{0}'", objViewGroupFldsEN.tabFldId);
  strWhereCond += Format(" and ViewGroupId = '{0}'", objViewGroupFldsEN.viewGroupId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewGroupFlds(界面组字段集合),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngTabFldId: 表字段ID(要求唯一的字段)
 * @param strViewGroupId: 界面组ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewGroupFlds_GetUniCondStr4Update(objViewGroupFldsEN: clsViewGroupFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objViewGroupFldsEN.mId);
  strWhereCond += Format(" and TabFldId = '{0}'", objViewGroupFldsEN.tabFldId);
  strWhereCond += Format(" and ViewGroupId = '{0}'", objViewGroupFldsEN.viewGroupId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewGroupFldsENS:源对象
 * @param objViewGroupFldsENT:目标对象
 */
export function ViewGroupFlds_GetObjFromJsonObj(
  objViewGroupFldsENS: clsViewGroupFldsEN,
): clsViewGroupFldsEN {
  const objViewGroupFldsENT: clsViewGroupFldsEN = new clsViewGroupFldsEN();
  ObjectAssign(objViewGroupFldsENT, objViewGroupFldsENS);
  return objViewGroupFldsENT;
}
