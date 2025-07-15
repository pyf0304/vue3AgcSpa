/**
 * 类名:clsSqlDataSynWApi
 * 表名:SqlDataSyn(00050269)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:55
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:数据同步(DataSynch)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * Sql数据同步(SqlDataSyn)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsSqlDataSynEN } from '@/ts/L0Entity/DataSynch/clsSqlDataSynEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sqlDataSyn_Controller = 'SqlDataSynApi';
export const sqlDataSyn_ConstructorName = 'sqlDataSyn';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export async function SqlDataSyn_GetObjByTabIdAsync(
  strTabId: string,
): Promise<clsSqlDataSynEN | null> {
  const strThisFuncName = 'GetObjByTabIdAsync';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsSqlDataSynWApi.GetObjByTabIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsSqlDataSynWApi.GetObjByTabIdAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabId';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
      const objSqlDataSyn = SqlDataSyn_GetObjFromJsonObj(returnObj);
      return objSqlDataSyn;
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByTabIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByTabIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function SqlDataSyn_SortFunDefa(a: clsSqlDataSynEN, b: clsSqlDataSynEN): number {
  return a.tabId.localeCompare(b.tabId);
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
export function SqlDataSyn_SortFunDefa2Fld(a: clsSqlDataSynEN, b: clsSqlDataSynEN): number {
  if (a.tabName == b.tabName) return a.tabCnName.localeCompare(b.tabCnName);
  else return a.tabName.localeCompare(b.tabName);
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
export function SqlDataSyn_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSqlDataSynEN.con_TabId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsSqlDataSynEN.con_TabName:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsSqlDataSynEN.con_TabCnName:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return a.tabCnName.localeCompare(b.tabCnName);
        };
      case clsSqlDataSynEN.con_TabEnName:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.tabEnName == null) return -1;
          if (b.tabEnName == null) return 1;
          return a.tabEnName.localeCompare(b.tabEnName);
        };
      case clsSqlDataSynEN.con_SqlData:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.sqlData == null) return -1;
          if (b.sqlData == null) return 1;
          return a.sqlData.localeCompare(b.sqlData);
        };
      case clsSqlDataSynEN.con_SqlCommandTypeId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.sqlCommandTypeId == null) return -1;
          if (b.sqlCommandTypeId == null) return 1;
          return a.sqlCommandTypeId.localeCompare(b.sqlCommandTypeId);
        };
      case clsSqlDataSynEN.con_SqlCommandText:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.sqlCommandText == null) return -1;
          if (b.sqlCommandText == null) return 1;
          return a.sqlCommandText.localeCompare(b.sqlCommandText);
        };
      case clsSqlDataSynEN.con_SqlDataRecNum:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return a.sqlDataRecNum - b.sqlDataRecNum;
        };
      case clsSqlDataSynEN.con_TargetTabCondition:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.targetTabCondition == null) return -1;
          if (b.targetTabCondition == null) return 1;
          return a.targetTabCondition.localeCompare(b.targetTabCondition);
        };
      case clsSqlDataSynEN.con_TargetTabRecNum:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return a.targetTabRecNum - b.targetTabRecNum;
        };
      case clsSqlDataSynEN.con_DataSynDate:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.dataSynDate == null) return -1;
          if (b.dataSynDate == null) return 1;
          return a.dataSynDate.localeCompare(b.dataSynDate);
        };
      case clsSqlDataSynEN.con_PrimaryTypeId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return a.primaryTypeId.localeCompare(b.primaryTypeId);
        };
      case clsSqlDataSynEN.con_RecExclusiveWayId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return a.recExclusiveWayId.localeCompare(b.recExclusiveWayId);
        };
      case clsSqlDataSynEN.con_TextResouce:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.textResouce == null) return -1;
          if (b.textResouce == null) return 1;
          return a.textResouce.localeCompare(b.textResouce);
        };
      case clsSqlDataSynEN.con_TextResourceTypeId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.textResourceTypeId == null) return -1;
          if (b.textResourceTypeId == null) return 1;
          return a.textResourceTypeId.localeCompare(b.textResourceTypeId);
        };
      case clsSqlDataSynEN.con_AnalysisDate:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.analysisDate == null) return -1;
          if (b.analysisDate == null) return 1;
          return a.analysisDate.localeCompare(b.analysisDate);
        };
      case clsSqlDataSynEN.con_PrjId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsSqlDataSynEN.con_ErrMsg:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsSqlDataSynEN.con_UpdDate:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSqlDataSynEN.con_UpdUserId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsSqlDataSynEN.con_Memo:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SqlDataSyn]中不存在!(in ${sqlDataSyn_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSqlDataSynEN.con_TabId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsSqlDataSynEN.con_TabName:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsSqlDataSynEN.con_TabCnName:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return b.tabCnName.localeCompare(a.tabCnName);
        };
      case clsSqlDataSynEN.con_TabEnName:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.tabEnName == null) return -1;
          if (a.tabEnName == null) return 1;
          return b.tabEnName.localeCompare(a.tabEnName);
        };
      case clsSqlDataSynEN.con_SqlData:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.sqlData == null) return -1;
          if (a.sqlData == null) return 1;
          return b.sqlData.localeCompare(a.sqlData);
        };
      case clsSqlDataSynEN.con_SqlCommandTypeId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.sqlCommandTypeId == null) return -1;
          if (a.sqlCommandTypeId == null) return 1;
          return b.sqlCommandTypeId.localeCompare(a.sqlCommandTypeId);
        };
      case clsSqlDataSynEN.con_SqlCommandText:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.sqlCommandText == null) return -1;
          if (a.sqlCommandText == null) return 1;
          return b.sqlCommandText.localeCompare(a.sqlCommandText);
        };
      case clsSqlDataSynEN.con_SqlDataRecNum:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return b.sqlDataRecNum - a.sqlDataRecNum;
        };
      case clsSqlDataSynEN.con_TargetTabCondition:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.targetTabCondition == null) return -1;
          if (a.targetTabCondition == null) return 1;
          return b.targetTabCondition.localeCompare(a.targetTabCondition);
        };
      case clsSqlDataSynEN.con_TargetTabRecNum:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return b.targetTabRecNum - a.targetTabRecNum;
        };
      case clsSqlDataSynEN.con_DataSynDate:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.dataSynDate == null) return -1;
          if (a.dataSynDate == null) return 1;
          return b.dataSynDate.localeCompare(a.dataSynDate);
        };
      case clsSqlDataSynEN.con_PrimaryTypeId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return b.primaryTypeId.localeCompare(a.primaryTypeId);
        };
      case clsSqlDataSynEN.con_RecExclusiveWayId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return b.recExclusiveWayId.localeCompare(a.recExclusiveWayId);
        };
      case clsSqlDataSynEN.con_TextResouce:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.textResouce == null) return -1;
          if (a.textResouce == null) return 1;
          return b.textResouce.localeCompare(a.textResouce);
        };
      case clsSqlDataSynEN.con_TextResourceTypeId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.textResourceTypeId == null) return -1;
          if (a.textResourceTypeId == null) return 1;
          return b.textResourceTypeId.localeCompare(a.textResourceTypeId);
        };
      case clsSqlDataSynEN.con_AnalysisDate:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.analysisDate == null) return -1;
          if (a.analysisDate == null) return 1;
          return b.analysisDate.localeCompare(a.analysisDate);
        };
      case clsSqlDataSynEN.con_PrjId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsSqlDataSynEN.con_ErrMsg:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsSqlDataSynEN.con_UpdDate:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSqlDataSynEN.con_UpdUserId:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsSqlDataSynEN.con_Memo:
        return (a: clsSqlDataSynEN, b: clsSqlDataSynEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SqlDataSyn]中不存在!(in ${sqlDataSyn_ConstructorName}.${strThisFuncName})`;
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
export async function SqlDataSyn_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSqlDataSynEN.con_TabId:
      return (obj: clsSqlDataSynEN) => {
        return obj.tabId === value;
      };
    case clsSqlDataSynEN.con_TabName:
      return (obj: clsSqlDataSynEN) => {
        return obj.tabName === value;
      };
    case clsSqlDataSynEN.con_TabCnName:
      return (obj: clsSqlDataSynEN) => {
        return obj.tabCnName === value;
      };
    case clsSqlDataSynEN.con_TabEnName:
      return (obj: clsSqlDataSynEN) => {
        return obj.tabEnName === value;
      };
    case clsSqlDataSynEN.con_SqlData:
      return (obj: clsSqlDataSynEN) => {
        return obj.sqlData === value;
      };
    case clsSqlDataSynEN.con_SqlCommandTypeId:
      return (obj: clsSqlDataSynEN) => {
        return obj.sqlCommandTypeId === value;
      };
    case clsSqlDataSynEN.con_SqlCommandText:
      return (obj: clsSqlDataSynEN) => {
        return obj.sqlCommandText === value;
      };
    case clsSqlDataSynEN.con_SqlDataRecNum:
      return (obj: clsSqlDataSynEN) => {
        return obj.sqlDataRecNum === value;
      };
    case clsSqlDataSynEN.con_TargetTabCondition:
      return (obj: clsSqlDataSynEN) => {
        return obj.targetTabCondition === value;
      };
    case clsSqlDataSynEN.con_TargetTabRecNum:
      return (obj: clsSqlDataSynEN) => {
        return obj.targetTabRecNum === value;
      };
    case clsSqlDataSynEN.con_DataSynDate:
      return (obj: clsSqlDataSynEN) => {
        return obj.dataSynDate === value;
      };
    case clsSqlDataSynEN.con_PrimaryTypeId:
      return (obj: clsSqlDataSynEN) => {
        return obj.primaryTypeId === value;
      };
    case clsSqlDataSynEN.con_RecExclusiveWayId:
      return (obj: clsSqlDataSynEN) => {
        return obj.recExclusiveWayId === value;
      };
    case clsSqlDataSynEN.con_TextResouce:
      return (obj: clsSqlDataSynEN) => {
        return obj.textResouce === value;
      };
    case clsSqlDataSynEN.con_TextResourceTypeId:
      return (obj: clsSqlDataSynEN) => {
        return obj.textResourceTypeId === value;
      };
    case clsSqlDataSynEN.con_AnalysisDate:
      return (obj: clsSqlDataSynEN) => {
        return obj.analysisDate === value;
      };
    case clsSqlDataSynEN.con_PrjId:
      return (obj: clsSqlDataSynEN) => {
        return obj.prjId === value;
      };
    case clsSqlDataSynEN.con_ErrMsg:
      return (obj: clsSqlDataSynEN) => {
        return obj.errMsg === value;
      };
    case clsSqlDataSynEN.con_UpdDate:
      return (obj: clsSqlDataSynEN) => {
        return obj.updDate === value;
      };
    case clsSqlDataSynEN.con_UpdUserId:
      return (obj: clsSqlDataSynEN) => {
        return obj.updUserId === value;
      };
    case clsSqlDataSynEN.con_Memo:
      return (obj: clsSqlDataSynEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SqlDataSyn]中不存在!(in ${sqlDataSyn_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[SqlDataSyn__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SqlDataSyn_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSqlDataSynEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
      const objSqlDataSyn = SqlDataSyn_GetObjFromJsonObj(returnObj);
      return objSqlDataSyn;
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSqlDataSynEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
          sqlDataSyn_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlDataSyn_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param arrTabId:关键字列表
 * @returns 对象列表
 **/
export async function SqlDataSyn_GetObjLstByTabIdLstAsync(
  arrTabId: Array<string>,
): Promise<Array<clsSqlDataSynEN>> {
  const strThisFuncName = 'GetObjLstByTabIdLstAsync';
  const strAction = 'GetObjLstByTabIdLst';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlDataSyn_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlDataSyn_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByTabIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function SqlDataSyn_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSqlDataSynEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
          sqlDataSyn_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlDataSyn_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSqlDataSynEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
          sqlDataSyn_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlDataSyn_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSqlDataSynEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSqlDataSynEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
          sqlDataSyn_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SqlDataSyn_GetObjLstByJSONObjLst(returnObjLst);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param strTabId:关键字
 * @returns 获取删除的结果
 **/
export async function SqlDataSyn_DelRecordAsync(strTabId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTabId);

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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param arrTabId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SqlDataSyn_DelSqlDataSynsAsync(arrTabId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelSqlDataSynsAsync';
  const strAction = 'DelSqlDataSyns';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_DelSqlDataSynsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSqlDataSynsByCondAsync';
  const strAction = 'DelSqlDataSynsByCond';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param objSqlDataSynEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SqlDataSyn_AddNewRecordAsync(
  objSqlDataSynEN: clsSqlDataSynEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSqlDataSynEN.tabId === null || objSqlDataSynEN.tabId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSqlDataSynEN);
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlDataSynEN, config);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param objSqlDataSynEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SqlDataSyn_AddNewRecordWithMaxIdAsync(
  objSqlDataSynEN: clsSqlDataSynEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlDataSynEN, config);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param objSqlDataSynEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SqlDataSyn_AddNewRecordWithReturnKeyAsync(
  objSqlDataSynEN: clsSqlDataSynEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlDataSynEN, config);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param objSqlDataSynEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SqlDataSyn_UpdateRecordAsync(
  objSqlDataSynEN: clsSqlDataSynEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSqlDataSynEN.sfUpdFldSetStr === undefined ||
    objSqlDataSynEN.sfUpdFldSetStr === null ||
    objSqlDataSynEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objSqlDataSynEN.tabId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlDataSynEN, config);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param objSqlDataSynEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SqlDataSyn_UpdateWithConditionAsync(
  objSqlDataSynEN: clsSqlDataSynEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSqlDataSynEN.sfUpdFldSetStr === undefined ||
    objSqlDataSynEN.sfUpdFldSetStr === null ||
    objSqlDataSynEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objSqlDataSynEN.tabId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);
  objSqlDataSynEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSqlDataSynEN, config);
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
 * @param strTabId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SqlDataSyn_IsExistAsync(strTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export async function SqlDataSyn_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sqlDataSyn_Controller, strAction);

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
        sqlDataSyn_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sqlDataSyn_ConstructorName,
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
export function SqlDataSyn_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SqlDataSyn_CheckPropertyNew(pobjSqlDataSynEN: clsSqlDataSynEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSqlDataSynEN.tabName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[表名]不能为空(In Sql数据同步)!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjSqlDataSynEN.tabCnName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[表中文名]不能为空(In Sql数据同步)!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.primaryTypeId) === true ||
    pobjSqlDataSynEN.primaryTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[主键类型ID]不能为空(In Sql数据同步)!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.recExclusiveWayId) === true ||
    pobjSqlDataSynEN.recExclusiveWayId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[记录排他方式Id]不能为空(In Sql数据同步)!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjSqlDataSynEN.prjId) === true || pobjSqlDataSynEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In Sql数据同步)!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjSqlDataSynEN.tabId) == false && GetStrLen(pobjSqlDataSynEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.tabId)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabName) == false &&
    GetStrLen(pobjSqlDataSynEN.tabName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表名(tabName)]的长度不能超过100(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.tabName)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabCnName) == false &&
    GetStrLen(pobjSqlDataSynEN.tabCnName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表中文名(tabCnName)]的长度不能超过200(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.tabCnName)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabEnName) == false &&
    GetStrLen(pobjSqlDataSynEN.tabEnName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表英文详细名(tabEnName)]的长度不能超过200(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.tabEnName)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlCommandTypeId) == false &&
    GetStrLen(pobjSqlDataSynEN.sqlCommandTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Sql命令类型Id(sqlCommandTypeId)]的长度不能超过2(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.sqlCommandTypeId)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlCommandText) == false &&
    GetStrLen(pobjSqlDataSynEN.sqlCommandText) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Sql命令内容(sqlCommandText)]的长度不能超过200(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.sqlCommandText)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.targetTabCondition) == false &&
    GetStrLen(pobjSqlDataSynEN.targetTabCondition) > 300
  ) {
    throw new Error(
      '(errid:Watl000413)字段[目标表有效记录条件(targetTabCondition)]的长度不能超过300(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.targetTabCondition)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.dataSynDate) == false &&
    GetStrLen(pobjSqlDataSynEN.dataSynDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据同步日期(dataSynDate)]的长度不能超过14(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.dataSynDate)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.primaryTypeId) == false &&
    GetStrLen(pobjSqlDataSynEN.primaryTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.primaryTypeId)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.recExclusiveWayId) == false &&
    GetStrLen(pobjSqlDataSynEN.recExclusiveWayId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[记录排他方式Id(recExclusiveWayId)]的长度不能超过4(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.recExclusiveWayId)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.textResouce) == false &&
    GetStrLen(pobjSqlDataSynEN.textResouce) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文本来源(textResouce)]的长度不能超过100(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.textResouce)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.textResourceTypeId) == false &&
    GetStrLen(pobjSqlDataSynEN.textResourceTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文本来源类型Id(textResourceTypeId)]的长度不能超过2(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.textResourceTypeId)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.analysisDate) == false &&
    GetStrLen(pobjSqlDataSynEN.analysisDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分析日期(analysisDate)]的长度不能超过20(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.analysisDate)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlDataSynEN.prjId) == false && GetStrLen(pobjSqlDataSynEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.prjId)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.errMsg) == false &&
    GetStrLen(pobjSqlDataSynEN.errMsg) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.errMsg)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.updDate) == false &&
    GetStrLen(pobjSqlDataSynEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.updDate)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.updUserId) == false &&
    GetStrLen(pobjSqlDataSynEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.updUserId)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSqlDataSynEN.memo) == false && GetStrLen(pobjSqlDataSynEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.memo)(clsSqlDataSynBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabId) == false &&
    undefined !== pobjSqlDataSynEN.tabId &&
    tzDataType.isString(pobjSqlDataSynEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjSqlDataSynEN.tabId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabName) == false &&
    undefined !== pobjSqlDataSynEN.tabName &&
    tzDataType.isString(pobjSqlDataSynEN.tabName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表名(tabName)]的值:[$(pobjSqlDataSynEN.tabName)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabCnName) == false &&
    undefined !== pobjSqlDataSynEN.tabCnName &&
    tzDataType.isString(pobjSqlDataSynEN.tabCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表中文名(tabCnName)]的值:[$(pobjSqlDataSynEN.tabCnName)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabEnName) == false &&
    undefined !== pobjSqlDataSynEN.tabEnName &&
    tzDataType.isString(pobjSqlDataSynEN.tabEnName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表英文详细名(tabEnName)]的值:[$(pobjSqlDataSynEN.tabEnName)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlData) == false &&
    undefined !== pobjSqlDataSynEN.sqlData &&
    tzDataType.isString(pobjSqlDataSynEN.sqlData) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql表数据(sqlData)]的值:[$(pobjSqlDataSynEN.sqlData)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlCommandTypeId) == false &&
    undefined !== pobjSqlDataSynEN.sqlCommandTypeId &&
    tzDataType.isString(pobjSqlDataSynEN.sqlCommandTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql命令类型Id(sqlCommandTypeId)]的值:[$(pobjSqlDataSynEN.sqlCommandTypeId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlCommandText) == false &&
    undefined !== pobjSqlDataSynEN.sqlCommandText &&
    tzDataType.isString(pobjSqlDataSynEN.sqlCommandText) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql命令内容(sqlCommandText)]的值:[$(pobjSqlDataSynEN.sqlCommandText)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSqlDataSynEN.sqlDataRecNum &&
    undefined !== pobjSqlDataSynEN.sqlDataRecNum &&
    tzDataType.isNumber(pobjSqlDataSynEN.sqlDataRecNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql数据记录数(sqlDataRecNum)]的值:[$(pobjSqlDataSynEN.sqlDataRecNum)], 非法,应该为数值型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.targetTabCondition) == false &&
    undefined !== pobjSqlDataSynEN.targetTabCondition &&
    tzDataType.isString(pobjSqlDataSynEN.targetTabCondition) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[目标表有效记录条件(targetTabCondition)]的值:[$(pobjSqlDataSynEN.targetTabCondition)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSqlDataSynEN.targetTabRecNum &&
    undefined !== pobjSqlDataSynEN.targetTabRecNum &&
    tzDataType.isNumber(pobjSqlDataSynEN.targetTabRecNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[目标表记录数(targetTabRecNum)]的值:[$(pobjSqlDataSynEN.targetTabRecNum)], 非法,应该为数值型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.dataSynDate) == false &&
    undefined !== pobjSqlDataSynEN.dataSynDate &&
    tzDataType.isString(pobjSqlDataSynEN.dataSynDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据同步日期(dataSynDate)]的值:[$(pobjSqlDataSynEN.dataSynDate)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.primaryTypeId) == false &&
    undefined !== pobjSqlDataSynEN.primaryTypeId &&
    tzDataType.isString(pobjSqlDataSynEN.primaryTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主键类型ID(primaryTypeId)]的值:[$(pobjSqlDataSynEN.primaryTypeId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.recExclusiveWayId) == false &&
    undefined !== pobjSqlDataSynEN.recExclusiveWayId &&
    tzDataType.isString(pobjSqlDataSynEN.recExclusiveWayId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[记录排他方式Id(recExclusiveWayId)]的值:[$(pobjSqlDataSynEN.recExclusiveWayId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.textResouce) == false &&
    undefined !== pobjSqlDataSynEN.textResouce &&
    tzDataType.isString(pobjSqlDataSynEN.textResouce) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文本来源(textResouce)]的值:[$(pobjSqlDataSynEN.textResouce)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.textResourceTypeId) == false &&
    undefined !== pobjSqlDataSynEN.textResourceTypeId &&
    tzDataType.isString(pobjSqlDataSynEN.textResourceTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文本来源类型Id(textResourceTypeId)]的值:[$(pobjSqlDataSynEN.textResourceTypeId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.analysisDate) == false &&
    undefined !== pobjSqlDataSynEN.analysisDate &&
    tzDataType.isString(pobjSqlDataSynEN.analysisDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分析日期(analysisDate)]的值:[$(pobjSqlDataSynEN.analysisDate)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.prjId) == false &&
    undefined !== pobjSqlDataSynEN.prjId &&
    tzDataType.isString(pobjSqlDataSynEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjSqlDataSynEN.prjId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.errMsg) == false &&
    undefined !== pobjSqlDataSynEN.errMsg &&
    tzDataType.isString(pobjSqlDataSynEN.errMsg) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[错误信息(errMsg)]的值:[$(pobjSqlDataSynEN.errMsg)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.updDate) == false &&
    undefined !== pobjSqlDataSynEN.updDate &&
    tzDataType.isString(pobjSqlDataSynEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSqlDataSynEN.updDate)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.updUserId) == false &&
    undefined !== pobjSqlDataSynEN.updUserId &&
    tzDataType.isString(pobjSqlDataSynEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjSqlDataSynEN.updUserId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.memo) == false &&
    undefined !== pobjSqlDataSynEN.memo &&
    tzDataType.isString(pobjSqlDataSynEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjSqlDataSynEN.memo)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SqlDataSyn_CheckProperty4Update(pobjSqlDataSynEN: clsSqlDataSynEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjSqlDataSynEN.tabId) == false && GetStrLen(pobjSqlDataSynEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.tabId)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabName) == false &&
    GetStrLen(pobjSqlDataSynEN.tabName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表名(tabName)]的长度不能超过100(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.tabName)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabCnName) == false &&
    GetStrLen(pobjSqlDataSynEN.tabCnName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表中文名(tabCnName)]的长度不能超过200(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.tabCnName)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabEnName) == false &&
    GetStrLen(pobjSqlDataSynEN.tabEnName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表英文详细名(tabEnName)]的长度不能超过200(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.tabEnName)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlCommandTypeId) == false &&
    GetStrLen(pobjSqlDataSynEN.sqlCommandTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Sql命令类型Id(sqlCommandTypeId)]的长度不能超过2(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.sqlCommandTypeId)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlCommandText) == false &&
    GetStrLen(pobjSqlDataSynEN.sqlCommandText) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Sql命令内容(sqlCommandText)]的长度不能超过200(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.sqlCommandText)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.targetTabCondition) == false &&
    GetStrLen(pobjSqlDataSynEN.targetTabCondition) > 300
  ) {
    throw new Error(
      '(errid:Watl000416)字段[目标表有效记录条件(targetTabCondition)]的长度不能超过300(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.targetTabCondition)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.dataSynDate) == false &&
    GetStrLen(pobjSqlDataSynEN.dataSynDate) > 14
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据同步日期(dataSynDate)]的长度不能超过14(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.dataSynDate)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.primaryTypeId) == false &&
    GetStrLen(pobjSqlDataSynEN.primaryTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.primaryTypeId)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.recExclusiveWayId) == false &&
    GetStrLen(pobjSqlDataSynEN.recExclusiveWayId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[记录排他方式Id(recExclusiveWayId)]的长度不能超过4(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.recExclusiveWayId)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.textResouce) == false &&
    GetStrLen(pobjSqlDataSynEN.textResouce) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文本来源(textResouce)]的长度不能超过100(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.textResouce)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.textResourceTypeId) == false &&
    GetStrLen(pobjSqlDataSynEN.textResourceTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文本来源类型Id(textResourceTypeId)]的长度不能超过2(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.textResourceTypeId)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.analysisDate) == false &&
    GetStrLen(pobjSqlDataSynEN.analysisDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分析日期(analysisDate)]的长度不能超过20(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.analysisDate)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlDataSynEN.prjId) == false && GetStrLen(pobjSqlDataSynEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.prjId)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.errMsg) == false &&
    GetStrLen(pobjSqlDataSynEN.errMsg) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.errMsg)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.updDate) == false &&
    GetStrLen(pobjSqlDataSynEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.updDate)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.updUserId) == false &&
    GetStrLen(pobjSqlDataSynEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.updUserId)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSqlDataSynEN.memo) == false && GetStrLen(pobjSqlDataSynEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In Sql数据同步(SqlDataSyn))!值:$(pobjSqlDataSynEN.memo)(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabId) == false &&
    undefined !== pobjSqlDataSynEN.tabId &&
    tzDataType.isString(pobjSqlDataSynEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjSqlDataSynEN.tabId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabName) == false &&
    undefined !== pobjSqlDataSynEN.tabName &&
    tzDataType.isString(pobjSqlDataSynEN.tabName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表名(tabName)]的值:[$(pobjSqlDataSynEN.tabName)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabCnName) == false &&
    undefined !== pobjSqlDataSynEN.tabCnName &&
    tzDataType.isString(pobjSqlDataSynEN.tabCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表中文名(tabCnName)]的值:[$(pobjSqlDataSynEN.tabCnName)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.tabEnName) == false &&
    undefined !== pobjSqlDataSynEN.tabEnName &&
    tzDataType.isString(pobjSqlDataSynEN.tabEnName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表英文详细名(tabEnName)]的值:[$(pobjSqlDataSynEN.tabEnName)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlData) == false &&
    undefined !== pobjSqlDataSynEN.sqlData &&
    tzDataType.isString(pobjSqlDataSynEN.sqlData) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql表数据(sqlData)]的值:[$(pobjSqlDataSynEN.sqlData)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlCommandTypeId) == false &&
    undefined !== pobjSqlDataSynEN.sqlCommandTypeId &&
    tzDataType.isString(pobjSqlDataSynEN.sqlCommandTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql命令类型Id(sqlCommandTypeId)]的值:[$(pobjSqlDataSynEN.sqlCommandTypeId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.sqlCommandText) == false &&
    undefined !== pobjSqlDataSynEN.sqlCommandText &&
    tzDataType.isString(pobjSqlDataSynEN.sqlCommandText) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql命令内容(sqlCommandText)]的值:[$(pobjSqlDataSynEN.sqlCommandText)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSqlDataSynEN.sqlDataRecNum &&
    undefined !== pobjSqlDataSynEN.sqlDataRecNum &&
    tzDataType.isNumber(pobjSqlDataSynEN.sqlDataRecNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql数据记录数(sqlDataRecNum)]的值:[$(pobjSqlDataSynEN.sqlDataRecNum)], 非法,应该为数值型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.targetTabCondition) == false &&
    undefined !== pobjSqlDataSynEN.targetTabCondition &&
    tzDataType.isString(pobjSqlDataSynEN.targetTabCondition) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[目标表有效记录条件(targetTabCondition)]的值:[$(pobjSqlDataSynEN.targetTabCondition)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSqlDataSynEN.targetTabRecNum &&
    undefined !== pobjSqlDataSynEN.targetTabRecNum &&
    tzDataType.isNumber(pobjSqlDataSynEN.targetTabRecNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[目标表记录数(targetTabRecNum)]的值:[$(pobjSqlDataSynEN.targetTabRecNum)], 非法,应该为数值型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.dataSynDate) == false &&
    undefined !== pobjSqlDataSynEN.dataSynDate &&
    tzDataType.isString(pobjSqlDataSynEN.dataSynDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据同步日期(dataSynDate)]的值:[$(pobjSqlDataSynEN.dataSynDate)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.primaryTypeId) == false &&
    undefined !== pobjSqlDataSynEN.primaryTypeId &&
    tzDataType.isString(pobjSqlDataSynEN.primaryTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主键类型ID(primaryTypeId)]的值:[$(pobjSqlDataSynEN.primaryTypeId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.recExclusiveWayId) == false &&
    undefined !== pobjSqlDataSynEN.recExclusiveWayId &&
    tzDataType.isString(pobjSqlDataSynEN.recExclusiveWayId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[记录排他方式Id(recExclusiveWayId)]的值:[$(pobjSqlDataSynEN.recExclusiveWayId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.textResouce) == false &&
    undefined !== pobjSqlDataSynEN.textResouce &&
    tzDataType.isString(pobjSqlDataSynEN.textResouce) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文本来源(textResouce)]的值:[$(pobjSqlDataSynEN.textResouce)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.textResourceTypeId) == false &&
    undefined !== pobjSqlDataSynEN.textResourceTypeId &&
    tzDataType.isString(pobjSqlDataSynEN.textResourceTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文本来源类型Id(textResourceTypeId)]的值:[$(pobjSqlDataSynEN.textResourceTypeId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.analysisDate) == false &&
    undefined !== pobjSqlDataSynEN.analysisDate &&
    tzDataType.isString(pobjSqlDataSynEN.analysisDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分析日期(analysisDate)]的值:[$(pobjSqlDataSynEN.analysisDate)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.prjId) == false &&
    undefined !== pobjSqlDataSynEN.prjId &&
    tzDataType.isString(pobjSqlDataSynEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjSqlDataSynEN.prjId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.errMsg) == false &&
    undefined !== pobjSqlDataSynEN.errMsg &&
    tzDataType.isString(pobjSqlDataSynEN.errMsg) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[错误信息(errMsg)]的值:[$(pobjSqlDataSynEN.errMsg)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.updDate) == false &&
    undefined !== pobjSqlDataSynEN.updDate &&
    tzDataType.isString(pobjSqlDataSynEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSqlDataSynEN.updDate)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.updUserId) == false &&
    undefined !== pobjSqlDataSynEN.updUserId &&
    tzDataType.isString(pobjSqlDataSynEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjSqlDataSynEN.updUserId)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSqlDataSynEN.memo) == false &&
    undefined !== pobjSqlDataSynEN.memo &&
    tzDataType.isString(pobjSqlDataSynEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjSqlDataSynEN.memo)], 非法,应该为字符型(In Sql数据同步(SqlDataSyn))!(clsSqlDataSynBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjSqlDataSynEN.tabId) === true || pobjSqlDataSynEN.tabId.toString() === '0') {
    throw new Error(
      '(errid:Watl000064)字段[表ID]不能为空(In Sql数据同步)!(clsSqlDataSynBL:CheckProperty4Update)',
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
export function SqlDataSyn_GetJSONStrByObj(pobjSqlDataSynEN: clsSqlDataSynEN): string {
  pobjSqlDataSynEN.sfUpdFldSetStr = pobjSqlDataSynEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSqlDataSynEN);
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
export function SqlDataSyn_GetObjLstByJSONStr(strJSON: string): Array<clsSqlDataSynEN> {
  let arrSqlDataSynObjLst = new Array<clsSqlDataSynEN>();
  if (strJSON === '') {
    return arrSqlDataSynObjLst;
  }
  try {
    arrSqlDataSynObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSqlDataSynObjLst;
  }
  return arrSqlDataSynObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSqlDataSynObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SqlDataSyn_GetObjLstByJSONObjLst(
  arrSqlDataSynObjLstS: Array<clsSqlDataSynEN>,
): Array<clsSqlDataSynEN> {
  const arrSqlDataSynObjLst = new Array<clsSqlDataSynEN>();
  for (const objInFor of arrSqlDataSynObjLstS) {
    const obj1 = SqlDataSyn_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSqlDataSynObjLst.push(obj1);
  }
  return arrSqlDataSynObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SqlDataSyn_GetObjByJSONStr(strJSON: string): clsSqlDataSynEN {
  let pobjSqlDataSynEN = new clsSqlDataSynEN();
  if (strJSON === '') {
    return pobjSqlDataSynEN;
  }
  try {
    pobjSqlDataSynEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSqlDataSynEN;
  }
  return pobjSqlDataSynEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SqlDataSyn_GetCombineCondition(objSqlDataSynCond: clsSqlDataSynEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_TabId,
      objSqlDataSynCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_TabName,
      objSqlDataSynCond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_TabCnName,
    ) == true
  ) {
    const strComparisonOpTabCnName: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_TabCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_TabCnName,
      objSqlDataSynCond.tabCnName,
      strComparisonOpTabCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_TabEnName,
    ) == true
  ) {
    const strComparisonOpTabEnName: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_TabEnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_TabEnName,
      objSqlDataSynCond.tabEnName,
      strComparisonOpTabEnName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_SqlCommandTypeId,
    ) == true
  ) {
    const strComparisonOpSqlCommandTypeId: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_SqlCommandTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_SqlCommandTypeId,
      objSqlDataSynCond.sqlCommandTypeId,
      strComparisonOpSqlCommandTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_SqlCommandText,
    ) == true
  ) {
    const strComparisonOpSqlCommandText: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_SqlCommandText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_SqlCommandText,
      objSqlDataSynCond.sqlCommandText,
      strComparisonOpSqlCommandText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_SqlDataRecNum,
    ) == true
  ) {
    const strComparisonOpSqlDataRecNum: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_SqlDataRecNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSqlDataSynEN.con_SqlDataRecNum,
      objSqlDataSynCond.sqlDataRecNum,
      strComparisonOpSqlDataRecNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_TargetTabCondition,
    ) == true
  ) {
    const strComparisonOpTargetTabCondition: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_TargetTabCondition];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_TargetTabCondition,
      objSqlDataSynCond.targetTabCondition,
      strComparisonOpTargetTabCondition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_TargetTabRecNum,
    ) == true
  ) {
    const strComparisonOpTargetTabRecNum: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_TargetTabRecNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSqlDataSynEN.con_TargetTabRecNum,
      objSqlDataSynCond.targetTabRecNum,
      strComparisonOpTargetTabRecNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_DataSynDate,
    ) == true
  ) {
    const strComparisonOpDataSynDate: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_DataSynDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_DataSynDate,
      objSqlDataSynCond.dataSynDate,
      strComparisonOpDataSynDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_PrimaryTypeId,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeId: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_PrimaryTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_PrimaryTypeId,
      objSqlDataSynCond.primaryTypeId,
      strComparisonOpPrimaryTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_RecExclusiveWayId,
    ) == true
  ) {
    const strComparisonOpRecExclusiveWayId: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_RecExclusiveWayId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_RecExclusiveWayId,
      objSqlDataSynCond.recExclusiveWayId,
      strComparisonOpRecExclusiveWayId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_TextResouce,
    ) == true
  ) {
    const strComparisonOpTextResouce: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_TextResouce];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_TextResouce,
      objSqlDataSynCond.textResouce,
      strComparisonOpTextResouce,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_TextResourceTypeId,
    ) == true
  ) {
    const strComparisonOpTextResourceTypeId: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_TextResourceTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_TextResourceTypeId,
      objSqlDataSynCond.textResourceTypeId,
      strComparisonOpTextResourceTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_AnalysisDate,
    ) == true
  ) {
    const strComparisonOpAnalysisDate: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_AnalysisDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_AnalysisDate,
      objSqlDataSynCond.analysisDate,
      strComparisonOpAnalysisDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_PrjId,
      objSqlDataSynCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_ErrMsg,
      objSqlDataSynCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_UpdDate,
      objSqlDataSynCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_UpdUserId,
      objSqlDataSynCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSqlDataSynCond.dicFldComparisonOp,
      clsSqlDataSynEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSqlDataSynCond.dicFldComparisonOp[clsSqlDataSynEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSqlDataSynEN.con_Memo,
      objSqlDataSynCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSqlDataSynENS:源对象
 * @param objSqlDataSynENT:目标对象
 */
export function SqlDataSyn_GetObjFromJsonObj(objSqlDataSynENS: clsSqlDataSynEN): clsSqlDataSynEN {
  const objSqlDataSynENT: clsSqlDataSynEN = new clsSqlDataSynEN();
  ObjectAssign(objSqlDataSynENT, objSqlDataSynENS);
  return objSqlDataSynENT;
}
