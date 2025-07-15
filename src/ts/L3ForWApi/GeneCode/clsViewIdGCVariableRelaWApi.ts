/**
 * 类名:clsViewIdGCVariableRelaWApi
 * 表名:ViewIdGCVariableRela(00050631)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面变量关系(ViewIdGCVariableRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsViewIdGCVariableRelaENEx } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaENEx';
import { clsViewIdGCVariableRelaEN } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaEN';
import { GCVariable_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
import { GCVariableType_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
import { RetrievalMethod_func } from '@/ts/L3ForWApi/SysPara/clsRetrievalMethodWApi';
import { clsRetrievalMethodEN } from '@/ts/L0Entity/SysPara/clsRetrievalMethodEN';
import { ViewInfo_func } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const viewIdGCVariableRela_Controller = 'ViewIdGCVariableRelaApi';
export const viewIdGCVariableRela_ConstructorName = 'viewIdGCVariableRela';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function ViewIdGCVariableRela_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    varId: arrKey[0],
    viewId: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.varId) == true) {
    const strMsg = '关键字段(varId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.viewId) == true) {
    const strMsg = '关键字段(viewId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strVarId:关键字
 * @returns 对象
 **/
export async function ViewIdGCVariableRela_GetObjByKeyLstAsync(
  strVarId: string,
  strViewId: string,
): Promise<clsViewIdGCVariableRelaEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format(
      '参数:[strVarId]不能为空!(In clsViewIdGCVariableRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsViewIdGCVariableRelaWApi.GetObjByKeyLstAsync)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strViewId) == true) {
    const strMsg = Format(
      '参数:[strViewId]不能为空!(In clsViewIdGCVariableRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsViewIdGCVariableRelaWApi.GetObjByKeyLstAsync)',
      strViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
      strViewId,
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
      const objViewIdGCVariableRela = ViewIdGCVariableRela_GetObjFromJsonObj(returnObj);
      return objViewIdGCVariableRela;
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByKeyLstlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByKeyLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewIdGCVariableRela_SortFunDefa(
  a: clsViewIdGCVariableRelaEN,
  b: clsViewIdGCVariableRelaEN,
): number {
  return a.varId.localeCompare(b.varId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewIdGCVariableRela_SortFunDefa2Fld(
  a: clsViewIdGCVariableRelaEN,
  b: clsViewIdGCVariableRelaEN,
): number {
  if (a.retrievalMethodId == b.retrievalMethodId)
    return a.regionTypeNames.localeCompare(b.regionTypeNames);
  else return a.retrievalMethodId.localeCompare(b.retrievalMethodId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewIdGCVariableRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewIdGCVariableRelaEN.con_IsUseInRegion:
        return (a: clsViewIdGCVariableRelaEN) => {
          if (a.isUseInRegion == true) return 1;
          else return -1;
        };
      case clsViewIdGCVariableRelaEN.con_VarId:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          return a.varId.localeCompare(b.varId);
        };
      case clsViewIdGCVariableRelaEN.con_ViewId:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          return a.viewId.localeCompare(b.viewId);
        };
      case clsViewIdGCVariableRelaEN.con_RetrievalMethodId:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          return a.retrievalMethodId.localeCompare(b.retrievalMethodId);
        };
      case clsViewIdGCVariableRelaEN.con_RegionTypeNames:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (a.regionTypeNames == null) return -1;
          if (b.regionTypeNames == null) return 1;
          return a.regionTypeNames.localeCompare(b.regionTypeNames);
        };
      case clsViewIdGCVariableRelaEN.con_ErrMsg:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsViewIdGCVariableRelaEN.con_PrjId:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsViewIdGCVariableRelaEN.con_UpdUser:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsViewIdGCVariableRelaEN.con_UpdDate:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewIdGCVariableRelaEN.con_Memo:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewIdGCVariableRela]中不存在!(in ${viewIdGCVariableRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewIdGCVariableRelaEN.con_IsUseInRegion:
        return (b: clsViewIdGCVariableRelaEN) => {
          if (b.isUseInRegion == true) return 1;
          else return -1;
        };
      case clsViewIdGCVariableRelaEN.con_VarId:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          return b.varId.localeCompare(a.varId);
        };
      case clsViewIdGCVariableRelaEN.con_ViewId:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          return b.viewId.localeCompare(a.viewId);
        };
      case clsViewIdGCVariableRelaEN.con_RetrievalMethodId:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          return b.retrievalMethodId.localeCompare(a.retrievalMethodId);
        };
      case clsViewIdGCVariableRelaEN.con_RegionTypeNames:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (b.regionTypeNames == null) return -1;
          if (a.regionTypeNames == null) return 1;
          return b.regionTypeNames.localeCompare(a.regionTypeNames);
        };
      case clsViewIdGCVariableRelaEN.con_ErrMsg:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsViewIdGCVariableRelaEN.con_PrjId:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsViewIdGCVariableRelaEN.con_UpdUser:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsViewIdGCVariableRelaEN.con_UpdDate:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewIdGCVariableRelaEN.con_Memo:
        return (a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewIdGCVariableRela]中不存在!(in ${viewIdGCVariableRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByVarIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewIdGCVariableRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewIdGCVariableRelaEN.con_IsUseInRegion:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.isUseInRegion === value;
      };
    case clsViewIdGCVariableRelaEN.con_VarId:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.varId === value;
      };
    case clsViewIdGCVariableRelaEN.con_ViewId:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.viewId === value;
      };
    case clsViewIdGCVariableRelaEN.con_RetrievalMethodId:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.retrievalMethodId === value;
      };
    case clsViewIdGCVariableRelaEN.con_RegionTypeNames:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.regionTypeNames === value;
      };
    case clsViewIdGCVariableRelaEN.con_ErrMsg:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.errMsg === value;
      };
    case clsViewIdGCVariableRelaEN.con_PrjId:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.prjId === value;
      };
    case clsViewIdGCVariableRelaEN.con_UpdUser:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.updUser === value;
      };
    case clsViewIdGCVariableRelaEN.con_UpdDate:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.updDate === value;
      };
    case clsViewIdGCVariableRelaEN.con_Memo:
      return (obj: clsViewIdGCVariableRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewIdGCVariableRela]中不存在!(in ${viewIdGCVariableRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ViewIdGCVariableRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewIdGCVariableRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewIdGCVariableRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
      const objViewIdGCVariableRela = ViewIdGCVariableRela_GetObjFromJsonObj(returnObj);
      return objViewIdGCVariableRela;
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewIdGCVariableRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
          viewIdGCVariableRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewIdGCVariableRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
//该表没有使用Cache,不需要生成[GetObjLstByVarIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function ViewIdGCVariableRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewIdGCVariableRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
          viewIdGCVariableRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewIdGCVariableRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewIdGCVariableRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
          viewIdGCVariableRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewIdGCVariableRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewIdGCVariableRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewIdGCVariableRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
          viewIdGCVariableRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewIdGCVariableRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param strVarId,strViewId:关键字列表
 * @returns 获取删除的结果
 **/
export async function ViewIdGCVariableRela_DelRecKeyLstAsync(
  strVarId: string,
  strViewId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
      strViewId,
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export async function ViewIdGCVariableRela_DelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyLsts, config);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param objViewIdGCVariableRelaENS:源对象
 * @returns 目标对象=>clsViewIdGCVariableRelaEN:objViewIdGCVariableRelaENT
 **/
export function ViewIdGCVariableRela_CopyToEx(
  objViewIdGCVariableRelaENS: clsViewIdGCVariableRelaEN,
): clsViewIdGCVariableRelaENEx {
  const strThisFuncName = ViewIdGCVariableRela_CopyToEx.name;
  const objViewIdGCVariableRelaENT = new clsViewIdGCVariableRelaENEx();
  try {
    ObjectAssign(objViewIdGCVariableRelaENT, objViewIdGCVariableRelaENS);
    return objViewIdGCVariableRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewIdGCVariableRelaENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ViewIdGCVariableRela_FuncMapByFldName(
  strFldName: string,
  objViewIdGCVariableRelaEx: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsViewIdGCVariableRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewIdGCVariableRelaENEx.con_VarName:
      return ViewIdGCVariableRela_FuncMapVarName(objViewIdGCVariableRelaEx);
    case clsViewIdGCVariableRelaENEx.con_VarTypeName:
      return ViewIdGCVariableRela_FuncMapVarTypeName(objViewIdGCVariableRelaEx);
    case clsViewIdGCVariableRelaENEx.con_RetrievalMethodName:
      return ViewIdGCVariableRela_FuncMapRetrievalMethodName(objViewIdGCVariableRelaEx);
    case clsViewIdGCVariableRelaENEx.con_ViewName:
      return ViewIdGCVariableRela_FuncMapViewName(objViewIdGCVariableRelaEx);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewIdGCVariableRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewIdGCVariableRelaENEx.con_VarName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          if (a.varName === null && b.varName === null) return 0;
          if (a.varName === null) return -1;
          if (b.varName === null) return 1;
          return a.varName.localeCompare(b.varName);
        };
      case clsViewIdGCVariableRelaENEx.con_VarTypeName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          if (a.varTypeName === null && b.varTypeName === null) return 0;
          if (a.varTypeName === null) return -1;
          if (b.varTypeName === null) return 1;
          return a.varTypeName.localeCompare(b.varTypeName);
        };
      case clsViewIdGCVariableRelaENEx.con_RetrievalMethodName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return a.retrievalMethodName.localeCompare(b.retrievalMethodName);
        };
      case clsViewIdGCVariableRelaENEx.con_ViewName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return a.viewName.localeCompare(b.viewName);
        };
      default:
        return ViewIdGCVariableRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewIdGCVariableRelaENEx.con_VarName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          if (a.varName === null && b.varName === null) return 0;
          if (a.varName === null) return 1;
          if (b.varName === null) return -1;
          return b.varName.localeCompare(a.varName);
        };
      case clsViewIdGCVariableRelaENEx.con_VarTypeName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          if (a.varTypeName === null && b.varTypeName === null) return 0;
          if (a.varTypeName === null) return 1;
          if (b.varTypeName === null) return -1;
          return b.varTypeName.localeCompare(a.varTypeName);
        };
      case clsViewIdGCVariableRelaENEx.con_RetrievalMethodName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return b.retrievalMethodName.localeCompare(a.retrievalMethodName);
        };
      case clsViewIdGCVariableRelaENEx.con_ViewName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return b.viewName.localeCompare(a.viewName);
        };
      default:
        return ViewIdGCVariableRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRela_FuncMapVarName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRela_FuncMapVarName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.varName) == true) {
      const GCVariableVarId = objViewIdGCVariableRela.varId;
      const GCVariableVarName = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarName,
        GCVariableVarId,
      );
      objViewIdGCVariableRela.varName = GCVariableVarName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001366)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRela_FuncMapVarTypeName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRela_FuncMapVarTypeName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.varTypeName) == true) {
      const GCVariableVarId = objViewIdGCVariableRela.varId;
      const GCVariableVarTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarTypeId,
        GCVariableVarId,
      );
      const GCVariableTypeVarTypeId = GCVariableVarTypeId;
      const GCVariableTypeVarTypeName = await GCVariableType_func(
        clsGCVariableTypeEN.con_VarTypeId,
        clsGCVariableTypeEN.con_VarTypeName,
        GCVariableTypeVarTypeId,
      );
      objViewIdGCVariableRela.varTypeName = GCVariableTypeVarTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001362)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRela_FuncMapRetrievalMethodName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRela_FuncMapRetrievalMethodName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.retrievalMethodName) == true) {
      const RetrievalMethodRetrievalMethodId = objViewIdGCVariableRela.retrievalMethodId;
      const RetrievalMethodRetrievalMethodName = await RetrievalMethod_func(
        clsRetrievalMethodEN.con_RetrievalMethodId,
        clsRetrievalMethodEN.con_RetrievalMethodName,
        RetrievalMethodRetrievalMethodId,
      );
      objViewIdGCVariableRela.retrievalMethodName = RetrievalMethodRetrievalMethodName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001393)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRela_FuncMapViewName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRela_FuncMapViewName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.viewName) == true) {
      const ViewInfoViewId = objViewIdGCVariableRela.viewId;
      if (IsNullOrEmpty(objViewIdGCVariableRela.prjId) == true) {
        const strMsg = `函数映射[ViewName]数据出错,prjId不能为空!(in ${viewIdGCVariableRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const ViewInfoViewName = await ViewInfo_func(
        clsViewInfoEN.con_ViewId,
        clsViewInfoEN.con_ViewName,
        ViewInfoViewId,
        objViewIdGCVariableRela.prjId,
      );
      objViewIdGCVariableRela.viewName = ViewInfoViewName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001306)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function ViewIdGCVariableRela_DelViewIdGCVariableRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewIdGCVariableRelasByCondAsync';
  const strAction = 'DelViewIdGCVariableRelasByCond';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param objViewIdGCVariableRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewIdGCVariableRela_AddNewRecordAsync(
  objViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objViewIdGCVariableRelaEN.varId === null || objViewIdGCVariableRelaEN.varId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewIdGCVariableRelaEN);
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewIdGCVariableRelaEN, config);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param objViewIdGCVariableRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewIdGCVariableRela_AddNewRecordWithMaxIdAsync(
  objViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewIdGCVariableRelaEN, config);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_AddNewObjSave(
  objViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ViewIdGCVariableRela_CheckPropertyNew(objViewIdGCVariableRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewIdGCVariableRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await ViewIdGCVariableRela_IsExistAsync(
      objViewIdGCVariableRelaEN.varId,
      objViewIdGCVariableRelaEN.viewId,
    );
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objViewIdGCVariableRelaEN.varId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await ViewIdGCVariableRela_AddNewRecordAsync(objViewIdGCVariableRelaEN);
    if (returnBool == true) {
      //ViewIdGCVariableRela_ReFreshCache();
    } else {
      const strInfo = `添加[界面变量关系(ViewIdGCVariableRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    let strReturnKeyLst = '';
    strReturnKeyLst += `${objViewIdGCVariableRelaEN.varId}`;
    strReturnKeyLst += `|${objViewIdGCVariableRelaEN.viewId}`;
    return { keyword: strReturnKeyLst, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${viewIdGCVariableRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function ViewIdGCVariableRela_UpdateObjSave(
  objViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objViewIdGCVariableRelaEN.sfUpdFldSetStr = objViewIdGCVariableRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objViewIdGCVariableRelaEN.varId == '' || objViewIdGCVariableRelaEN.varId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ViewIdGCVariableRela_CheckProperty4Update(objViewIdGCVariableRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewIdGCVariableRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await ViewIdGCVariableRela_UpdateRecordAsync(objViewIdGCVariableRelaEN);
    if (returnBool == true) {
      //ViewIdGCVariableRela_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${viewIdGCVariableRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewIdGCVariableRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewIdGCVariableRela_AddNewRecordWithReturnKeyAsync(
  objViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewIdGCVariableRelaEN, config);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param objViewIdGCVariableRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewIdGCVariableRela_UpdateRecordAsync(
  objViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === undefined ||
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === null ||
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewIdGCVariableRelaEN.varId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewIdGCVariableRelaEN, config);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param objViewIdGCVariableRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewIdGCVariableRela_EditRecordExAsync(
  objViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === undefined ||
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === null ||
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewIdGCVariableRelaEN.varId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewIdGCVariableRelaEN, config);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param objViewIdGCVariableRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewIdGCVariableRela_UpdateWithConditionAsync(
  objViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === undefined ||
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === null ||
    objViewIdGCVariableRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewIdGCVariableRelaEN.varId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);
  objViewIdGCVariableRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewIdGCVariableRelaEN, config);
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
 * @param strVarId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewIdGCVariableRela_IsExistAsync(
  strVarId: string,
  strViewId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
      strViewId,
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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export async function ViewIdGCVariableRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewIdGCVariableRela_Controller, strAction);

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
        viewIdGCVariableRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewIdGCVariableRela_ConstructorName,
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
export function ViewIdGCVariableRela_GetWebApiUrl(
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewIdGCVariableRela_CheckPropertyNew(
  pobjViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.retrievalMethodId) === true ||
    pobjViewIdGCVariableRelaEN.retrievalMethodId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[获取方式Id]不能为空(In 界面变量关系)!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.prjId) === true ||
    pobjViewIdGCVariableRelaEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 界面变量关系)!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.varId) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id(varId)]的长度不能超过8(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.varId}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.viewId) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.viewId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面Id(viewId)]的长度不能超过8(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.viewId}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.retrievalMethodId) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.retrievalMethodId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[获取方式Id(retrievalMethodId)]的长度不能超过2(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.retrievalMethodId}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.regionTypeNames) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.regionTypeNames) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型名s(regionTypeNames)]的长度不能超过100(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.regionTypeNames}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.errMsg) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.errMsg}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.prjId) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.prjId}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.updUser) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.updUser}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.updDate) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.updDate}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.memo) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.memo}(clsViewIdGCVariableRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewIdGCVariableRelaEN.isUseInRegion &&
    undefined !== pobjViewIdGCVariableRelaEN.isUseInRegion &&
    tzDataType.isBoolean(pobjViewIdGCVariableRelaEN.isUseInRegion) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在区域中使用(isUseInRegion)]的值:[${pobjViewIdGCVariableRelaEN.isUseInRegion}], 非法,应该为布尔型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.varId) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.varId &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id(varId)]的值:[${pobjViewIdGCVariableRelaEN.varId}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.viewId) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.viewId &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.viewId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面Id(viewId)]的值:[${pobjViewIdGCVariableRelaEN.viewId}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.retrievalMethodId) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.retrievalMethodId &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.retrievalMethodId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[获取方式Id(retrievalMethodId)]的值:[${pobjViewIdGCVariableRelaEN.retrievalMethodId}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.regionTypeNames) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.regionTypeNames &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.regionTypeNames) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型名s(regionTypeNames)]的值:[${pobjViewIdGCVariableRelaEN.regionTypeNames}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.errMsg) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.errMsg &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjViewIdGCVariableRelaEN.errMsg}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.prjId) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.prjId &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjViewIdGCVariableRelaEN.prjId}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.updUser) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.updUser &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjViewIdGCVariableRelaEN.updUser}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.updDate) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.updDate &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjViewIdGCVariableRelaEN.updDate}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.memo) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.memo &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjViewIdGCVariableRelaEN.memo}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.varId) == false &&
    pobjViewIdGCVariableRelaEN.varId != '[nuull]' &&
    GetStrLen(pobjViewIdGCVariableRelaEN.varId) != 8
  ) {
    throw '(errid:Watl000415)字段[变量Id]作为外键字段,长度应该为8(In 界面变量关系)!(clsViewIdGCVariableRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewIdGCVariableRela_CheckProperty4Update(
  pobjViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.varId) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id(varId)]的长度不能超过8(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.varId}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.viewId) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.viewId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面Id(viewId)]的长度不能超过8(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.viewId}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.retrievalMethodId) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.retrievalMethodId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[获取方式Id(retrievalMethodId)]的长度不能超过2(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.retrievalMethodId}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.regionTypeNames) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.regionTypeNames) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型名s(regionTypeNames)]的长度不能超过100(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.regionTypeNames}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.errMsg) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.errMsg}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.prjId) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.prjId}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.updUser) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.updUser}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.updDate) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.updDate}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.memo) == false &&
    GetStrLen(pobjViewIdGCVariableRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面变量关系(ViewIdGCVariableRela))!值:${pobjViewIdGCVariableRelaEN.memo}(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewIdGCVariableRelaEN.isUseInRegion &&
    undefined !== pobjViewIdGCVariableRelaEN.isUseInRegion &&
    tzDataType.isBoolean(pobjViewIdGCVariableRelaEN.isUseInRegion) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在区域中使用(isUseInRegion)]的值:[${pobjViewIdGCVariableRelaEN.isUseInRegion}], 非法,应该为布尔型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.varId) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.varId &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id(varId)]的值:[${pobjViewIdGCVariableRelaEN.varId}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.viewId) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.viewId &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.viewId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面Id(viewId)]的值:[${pobjViewIdGCVariableRelaEN.viewId}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.retrievalMethodId) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.retrievalMethodId &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.retrievalMethodId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[获取方式Id(retrievalMethodId)]的值:[${pobjViewIdGCVariableRelaEN.retrievalMethodId}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.regionTypeNames) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.regionTypeNames &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.regionTypeNames) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型名s(regionTypeNames)]的值:[${pobjViewIdGCVariableRelaEN.regionTypeNames}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.errMsg) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.errMsg &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjViewIdGCVariableRelaEN.errMsg}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.prjId) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.prjId &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjViewIdGCVariableRelaEN.prjId}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.updUser) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.updUser &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjViewIdGCVariableRelaEN.updUser}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.updDate) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.updDate &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjViewIdGCVariableRelaEN.updDate}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.memo) == false &&
    undefined !== pobjViewIdGCVariableRelaEN.memo &&
    tzDataType.isString(pobjViewIdGCVariableRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjViewIdGCVariableRelaEN.memo}], 非法,应该为字符型(In 界面变量关系(ViewIdGCVariableRela))!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.varId) === true ||
    pobjViewIdGCVariableRelaEN.varId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[变量Id]不能为空(In 界面变量关系)!(clsViewIdGCVariableRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewIdGCVariableRelaEN.varId) == false &&
    pobjViewIdGCVariableRelaEN.varId != '[nuull]' &&
    GetStrLen(pobjViewIdGCVariableRelaEN.varId) != 8
  ) {
    throw '(errid:Watl000418)字段[变量Id]作为外键字段,长度应该为8(In 界面变量关系)!(clsViewIdGCVariableRelaBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewIdGCVariableRela_GetJSONStrByObj(
  pobjViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
): string {
  pobjViewIdGCVariableRelaEN.sfUpdFldSetStr = pobjViewIdGCVariableRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewIdGCVariableRelaEN);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewIdGCVariableRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsViewIdGCVariableRelaEN> {
  let arrViewIdGCVariableRelaObjLst = new Array<clsViewIdGCVariableRelaEN>();
  if (strJSON === '') {
    return arrViewIdGCVariableRelaObjLst;
  }
  try {
    arrViewIdGCVariableRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewIdGCVariableRelaObjLst;
  }
  return arrViewIdGCVariableRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewIdGCVariableRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewIdGCVariableRela_GetObjLstByJSONObjLst(
  arrViewIdGCVariableRelaObjLstS: Array<clsViewIdGCVariableRelaEN>,
): Array<clsViewIdGCVariableRelaEN> {
  const arrViewIdGCVariableRelaObjLst = new Array<clsViewIdGCVariableRelaEN>();
  for (const objInFor of arrViewIdGCVariableRelaObjLstS) {
    const obj1 = ViewIdGCVariableRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewIdGCVariableRelaObjLst.push(obj1);
  }
  return arrViewIdGCVariableRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewIdGCVariableRela_GetObjByJSONStr(strJSON: string): clsViewIdGCVariableRelaEN {
  let pobjViewIdGCVariableRelaEN = new clsViewIdGCVariableRelaEN();
  if (strJSON === '') {
    return pobjViewIdGCVariableRelaEN;
  }
  try {
    pobjViewIdGCVariableRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewIdGCVariableRelaEN;
  }
  return pobjViewIdGCVariableRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewIdGCVariableRela_GetCombineCondition(
  objViewIdGCVariableRelaCond: clsViewIdGCVariableRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_IsUseInRegion,
    ) == true
  ) {
    if (objViewIdGCVariableRelaCond.isUseInRegion == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewIdGCVariableRelaEN.con_IsUseInRegion);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewIdGCVariableRelaEN.con_IsUseInRegion);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_VarId,
    ) == true
  ) {
    const strComparisonOpVarId: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[clsViewIdGCVariableRelaEN.con_VarId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_VarId,
      objViewIdGCVariableRelaCond.varId,
      strComparisonOpVarId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_ViewId,
    ) == true
  ) {
    const strComparisonOpViewId: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[clsViewIdGCVariableRelaEN.con_ViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_ViewId,
      objViewIdGCVariableRelaCond.viewId,
      strComparisonOpViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_RetrievalMethodId,
    ) == true
  ) {
    const strComparisonOpRetrievalMethodId: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[
        clsViewIdGCVariableRelaEN.con_RetrievalMethodId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_RetrievalMethodId,
      objViewIdGCVariableRelaCond.retrievalMethodId,
      strComparisonOpRetrievalMethodId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_RegionTypeNames,
    ) == true
  ) {
    const strComparisonOpRegionTypeNames: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[clsViewIdGCVariableRelaEN.con_RegionTypeNames];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_RegionTypeNames,
      objViewIdGCVariableRelaCond.regionTypeNames,
      strComparisonOpRegionTypeNames,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[clsViewIdGCVariableRelaEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_ErrMsg,
      objViewIdGCVariableRelaCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[clsViewIdGCVariableRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_PrjId,
      objViewIdGCVariableRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[clsViewIdGCVariableRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_UpdUser,
      objViewIdGCVariableRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[clsViewIdGCVariableRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_UpdDate,
      objViewIdGCVariableRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewIdGCVariableRelaCond.dicFldComparisonOp,
      clsViewIdGCVariableRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewIdGCVariableRelaCond.dicFldComparisonOp[clsViewIdGCVariableRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewIdGCVariableRelaEN.con_Memo,
      objViewIdGCVariableRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewIdGCVariableRelaENS:源对象
 * @param objViewIdGCVariableRelaENT:目标对象
 */
export function ViewIdGCVariableRela_GetObjFromJsonObj(
  objViewIdGCVariableRelaENS: clsViewIdGCVariableRelaEN,
): clsViewIdGCVariableRelaEN {
  const objViewIdGCVariableRelaENT: clsViewIdGCVariableRelaEN = new clsViewIdGCVariableRelaEN();
  ObjectAssign(objViewIdGCVariableRelaENT, objViewIdGCVariableRelaENS);
  return objViewIdGCVariableRelaENT;
}
