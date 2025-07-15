import axios from 'axios';

import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '../CodeMan/clsCMProjectExWApi';

import { PrjTabFldEx_GetObjLstByTabIdCache } from './clsPrjTabFldExWApi';
import { TabFeatureEx_GetObjLstByTabIdCache } from './clsTabFeatureExWApi';
import { vPrjTabFldNumEx_GetFldNumByTabId } from './clsvPrjTabFldNumExWApi';
import { FieldTabEx_GetSpanByCacheClassifyField } from './clsFieldTabExWApi';

import {
  vPrjTabKeyFldV2Ex_GetKeyFldNames,
  vPrjTabKeyFldV2Ex_GetPrimaryTypeHtmlInfo,
  vPrjTabKeyFldV2Ex_GetPrimaryTypeName,
} from './clsvPrjTabKeyFldV2ExWApi';
import { vPrjTab_SimEx_func } from './clsvPrjTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { clsSQLDSTypeEN, enumSQLDSType } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { clsCacheModeEN } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';
import { clsTabMainTypeEN } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
import { clsTabStateEN } from '@/ts/L0Entity/Table_Field/clsTabStateEN';
import { clsTabTypeEN } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';

import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { vTabCheckStatus_Sim_GetObjLstCache } from '@/ts/L3ForWApi/LogManage/clsvTabCheckStatus_SimWApi';
import { SQLDSType_func } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { FuncModule_Agc_func } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { CacheMode_GetObjByCacheModeIdCache } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
import { PrimaryType_GetObjByPrimaryTypeIdCache } from '@/ts/L3ForWApi/Table_Field/clsPrimaryTypeWApi';
import {
  PrjTab_GetObjLstByJSONObjLst,
  PrjTab_GetObjLstByPagerAsync,
  PrjTab_SortFunByKey,
  PrjTab_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import { TabMainType_func } from '@/ts/L3ForWApi/Table_Field/clsTabMainTypeWApi';
import { TabState_func } from '@/ts/L3ForWApi/Table_Field/clsTabStateWApi';
import { TabType_func } from '@/ts/L3ForWApi/Table_Field/clsTabTypeWApi';

import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime, DateTime_GetDateTimeSim } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { GCVariable_GetObjByVarIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { GetBr_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { vCmProjectPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/CodeMan/clsvCmProjectPrjTab_SimWApi';
import { vPrjConstraint_SimEx_GetObjLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjConstraint_SimExWApi';

export const prjTabEx_Controller = 'PrjTabExApi';
export const prjTabEx_ConstructorName = 'prjTabEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objPrjTabENS">源对象</param>
/// <param name = "objPrjTabENT">目标对象</param>
export function PrjTabEx_CopyToEx(objPrjTabENS: clsPrjTabEN): clsPrjTabENEx {
  const objPrjTabENT = new clsPrjTabENEx();
  try {
    ObjectAssign(objPrjTabENT, objPrjTabENS);
    return objPrjTabENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabENT;
  }
}

export function PrjTabEx_SortFunByTabName(a: clsPrjTabEN, b: clsPrjTabEN): number {
  return a.tabName.localeCompare(b.tabName);
}

/// <summary>
/// 扩展删除表
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strTabId">表Id</param>
/// <returns>获取的相应对象列表</returns>
export async function PrjTabEx_DelRecordEx(strTabId: string): Promise<boolean> {
  const strThisFuncName = PrjTabEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjTabEx_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabEN>> {
  const strThisFuncName = PrjTabEx_GetObjLstByPagerAsync.name;
  const strAction = 'GetObjLstByPagerEx';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);

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
          prjTabEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTab_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 删除Sql表中某些字段
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strColumn_Name: 字段列名
 * @param strPrjDataBaseId: 工程数据库Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_AlterTab4DropColumn(
  strTabId: string,
  strColumn_Name: string,
  strPrjDataBaseId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabEx_AlterTab4DropColumn.name;
  const strAction = 'AlterTab4DropColumn';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strColumn_Name', strColumn_Name);
  // mapParam.add('strPrjDataBaseId', strPrjDataBaseId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strColumn_Name,
      strPrjDataBaseId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 向Sql表中添加字段
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param lngMid: lngMid
 * @param strPrjDataBaseId: 工程数据库Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_AlterTab4AddField(
  lngMid: number,
  strPrjDataBaseId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabEx_AlterTab4AddField.name;
  const strAction = 'AlterTab4AddField';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('lngMid', lngMid);
  // mapParam.add('strPrjDataBaseId', strPrjDataBaseId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngMid,
      strPrjDataBaseId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 根据代码系统的字段信息修改Sql字段信息
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param lngMid: lngMid
 * @param strPrjDataBaseId: 工程数据库Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_AlterTab4UpdateField(
  lngMid: number,
  strPrjDataBaseId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabEx_AlterTab4UpdateField.name;
  const strAction = 'AlterTab4UpdateField';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('lngMid', lngMid);
  // mapParam.add('strPrjDataBaseId', strPrjDataBaseId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngMid,
      strPrjDataBaseId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 根据表Id获取相关的视图表Id
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_GetRelaViewTabIdByTabId(
  strTabId: string,
  strPrjId: string,
): Promise<string> {
  const strThisFuncName = PrjTabEx_GetRelaViewTabIdByTabId.name;
  const strAction = 'GetRelaViewTabIdByTabId';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strPrjId', strPrjId);

  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strPrjId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 根据视图的表Id获取相关的主表Id
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strViewTabId: 代表视图的表Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_GetRelaTabIdByViewTabId(strViewTabId: string): Promise<string> {
  const strThisFuncName = PrjTabEx_GetRelaTabIdByViewTabId.name;
  const strAction = 'GetRelaTabIdByViewTabId';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewTabId', strViewTabId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewTabId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 获取给定表(视图)为主表的相关子结点表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_GetRelaViewTabIdLstByTabId(
  strTabId: string,
  strPrjId: string,
): Promise<Array<string>> {
  const strThisFuncName = PrjTabEx_GetRelaViewTabIdLstByTabId.name;
  const strAction = 'GetRelaViewTabIdLstByTabId';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strPrjId', strPrjId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strPrjId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnStrLst = data.returnStrLst.split(',');
      //console.log("returnStrLst", returnStrLst);
      return returnStrLst;
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 设置视图的所有字段的序号,根据视图的相关主表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strViewTabId: 代表视图的表Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_SetFldOrderNum4ViewByRelaTabId(
  strViewTabId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabEx_SetFldOrderNum4ViewByRelaTabId.name;
  const strAction = 'SetFldOrderNum4ViewByRelaTabId';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewTabId', strViewTabId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewTabId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function PrjTabEx_SetUpdDate(strTabId: string, strUserId: string): Promise<boolean> {
  const strThisFuncName = PrjTabEx_SetUpdDate.name;
  const strAction = 'SetUpdDate';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strUserId', strUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strUserId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function PrjTabEx_GetPrimaryTypeInfoBak(strTabId: string): Promise<string> {
  const arrPrjTabFld = await PrjTabFldEx_GetObjLstByTabIdCache(strTabId);
  const arrPrjTabFld_Sel = arrPrjTabFld.filter((x) => x.fieldTypeId == enumFieldType.KeyField_02);

  if (arrPrjTabFld_Sel.length == 0) return '';

  let strKeyFldName = '';
  let strPrimaryTypeId = '';
  //foreach (clsPrjTabFldEN objPrjTabFldEN in arrKeyFldLst)
  //{
  //    strKeyFldId += objPrjTabFldEN.fldId + ",";
  //    clsFieldTabEN objFieldTab = clsFieldTabBLEx.GetObjExByFldIDCache(objPrjTabFldEN.fldId, objPrjTabFldEN.prjId);
  //    strKeyFldName += objFieldTab.FldName + ",";
  //    strPrimaryTypeId = objPrjTabFldEN.primaryTypeId;
  //}
  for (const objPrjTabFld of arrPrjTabFld_Sel) {
    // strKeyFldId += objPrjTabFld.fldId;
    const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      objPrjTabFld.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab == null) continue;
    strKeyFldName += objFieldTab.fldName;
    strPrimaryTypeId = objPrjTabFld.primaryTypeId;
  }
  let strPrimaryTypeName = '';
  const objPrimaryType = await PrimaryType_GetObjByPrimaryTypeIdCache(strPrimaryTypeId);
  if (objPrimaryType == null) strPrimaryTypeName = '未知类型';
  else strPrimaryTypeName = objPrimaryType.primaryTypeName;
  const strReturn = Format(
    "<span class='text-primary' title='主键类型'>{0}</span><br/><span class='text-info' title='主键字段名'>{1}</span>",
    strPrimaryTypeName,
    strKeyFldName,
  );
  return strReturn;
}
/**
 * 把同一个工程的一个表复制到新表中,同时复制相关对象,以及该对象相关的字段。
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strSouPrjId: 源工程Id
 * @param strSouTabId: 源表Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_CopyPrjTabInSameProject(
  strSouPrjId: string,
  strSouCmPrjId: string,
  strSouTabId: string,
  strOpUserId: string,
): Promise<string> {
  const strThisFuncName = PrjTabEx_CopyPrjTabInSameProject.name;
  const strAction = 'CopyPrjTabInSameProject';
  const strUrl = GetWebApiUrl(prjTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strSouPrjId', strSouPrjId);
  // mapParam.add('strSouCmPrjId', strSouCmPrjId);
  // mapParam.add('strSouTabId', strSouTabId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSouPrjId,
      strSouCmPrjId,
      strSouTabId,
      strOpUserId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_FuncModuleName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_FuncModuleName.name;
  try {
    {
      const FuncModule_Agc_FuncModuleAgcId = objPrjTab.funcModuleAgcId;
      const FuncModule_Agc_FuncModuleName = await FuncModule_Agc_func(
        clsFuncModule_AgcEN.con_FuncModuleAgcId,
        clsFuncModule_AgcEN.con_FuncModuleName,
        FuncModule_Agc_FuncModuleAgcId,
        objPrjTab.prjId,
      );
      objPrjTab.funcModuleName = FuncModule_Agc_FuncModuleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000076)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_FldNum(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_FldNum.name;
  try {
    {
      const vPrjTabFldNum_FldNum = await vPrjTabFldNumEx_GetFldNumByTabId(objPrjTab.tabId);
      objPrjTab.fldNum = vPrjTabFldNum_FldNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000079)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_SqlDsTypeName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_SqlDsTypeName.name;
  try {
    {
      const SQLDSType_SQLDSTypeId = objPrjTab.sqlDsTypeId;
      const SQLDSType_SqlDsTypeName = await SQLDSType_func(
        clsSQLDSTypeEN.con_SqlDsTypeId,
        clsSQLDSTypeEN.con_SqlDsTypeName,
        SQLDSType_SQLDSTypeId,
      );
      objPrjTab.sqlDsTypeName = SQLDSType_SqlDsTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000080)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_TabStateName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_TabStateName.name;
  try {
    {
      const TabState_TabStateId = objPrjTab.tabStateId;
      const TabState_TabStateName = await TabState_func(
        clsTabStateEN.con_TabStateId,
        clsTabStateEN.con_TabStateName,
        TabState_TabStateId,
      );
      objPrjTab.tabStateName = TabState_TabStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000081)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_TabMainTypeName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_TabMainTypeName.name;
  try {
    {
      const TabMainType_TabMainTypeId = objPrjTab.tabMainTypeId;
      const TabMainType_TabMainTypeName = await TabMainType_func(
        clsTabMainTypeEN.con_TabMainTypeId,
        clsTabMainTypeEN.con_TabMainTypeName,
        TabMainType_TabMainTypeId,
      );
      objPrjTab.tabMainTypeName = TabMainType_TabMainTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000082)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_TabTypeName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_TabTypeName.name;
  try {
    {
      const TabType_TabTypeId = objPrjTab.tabTypeId;
      const TabType_TabTypeName = await TabType_func(
        clsTabTypeEN.con_TabTypeId,
        clsTabTypeEN.con_TabTypeName,
        TabType_TabTypeId,
      );
      objPrjTab.tabTypeName = TabType_TabTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000083)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_DateTimeSim(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_DateTimeSim.name;
  try {
    {
      const CommonDataNode_DateTimeSim = DateTime_GetDateTimeSim(objPrjTab.updDate);
      objPrjTab.dateTimeSim = CommonDataNode_DateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_RelaTabName4View(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_RelaTabName4View.name;
  try {
    if (IsNullOrEmpty(objPrjTab.relaTabName4View) == true) {
      if (IsNullOrEmpty(objPrjTab.relaTabId4View) == true) {
        objPrjTab.relaTabName4View = '';
      } else {
        const PrjTabTabIdV2 = objPrjTab.relaTabId4View;
        const PrjTabTabNameV2 = await vPrjTab_SimEx_func(
          clsPrjTabEN.con_TabId,
          clsPrjTabEN.con_TabName,
          PrjTabTabIdV2,
        );
        objPrjTab.relaTabName4View = PrjTabTabNameV2;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000085)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_PrjName(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_PrjName.name;
  try {
    {
      const Projects_PrjId = objPrjTab.prjId;
      const Projects_PrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        Projects_PrjId,
      );
      objPrjTab.prjName = Projects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjTabEx_GetObjExLstByPagerAsyncBak(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPrjTabObjLst = await PrjTab_GetObjLstByPagerAsync(objPagerPara);
  const arrPrjTabExObjLst = arrPrjTabObjLst.map(PrjTabEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjTabEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrPrjTabExObjLst) {
      await PrjTabEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPrjTabExObjLst.length == 0) return arrPrjTabExObjLst;
  let arrPrjTabSel: Array<clsPrjTabENEx> = arrPrjTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjTabSel = arrPrjTabSel.sort(PrjTabEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPrjTabSel = arrPrjTabSel.sort(objPagerPara.sortFun);
    }

    return arrPrjTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabENEx>();
}
/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabENEx.con_TabNameEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.tabNameEx.localeCompare(b.tabNameEx);
        };
      case clsPrjTabENEx.con_FuncModuleName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.funcModuleName.localeCompare(b.funcModuleName);
        };
      case clsPrjTabENEx.con_FldNum:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.fldNum - b.fldNum;
        };
      case clsPrjTabENEx.con_SqlDsTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsPrjTabENEx.con_TabStateName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.tabStateName.localeCompare(b.tabStateName);
        };
      case clsPrjTabENEx.con_TabMainTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.tabMainTypeName.localeCompare(b.tabMainTypeName);
        };
      case clsPrjTabENEx.con_TabTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.tabTypeName.localeCompare(b.tabTypeName);
        };
      case clsPrjTabENEx.con_DateTimeSim:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsPrjTabENEx.con_RelaTabName4View:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.relaTabName4View.localeCompare(b.relaTabName4View);
        };
      case clsPrjTabENEx.con_PrjName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsPrjTabENEx.con_CmPrjNames:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return a.cmPrjNames.localeCompare(b.cmPrjNames);
        };
      default:
        return PrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjTabENEx.con_TabNameEx:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.tabNameEx.localeCompare(a.tabNameEx);
        };
      case clsPrjTabENEx.con_FuncModuleName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.funcModuleName.localeCompare(a.funcModuleName);
        };
      case clsPrjTabENEx.con_FldNum:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.fldNum - a.fldNum;
        };
      case clsPrjTabENEx.con_SqlDsTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsPrjTabENEx.con_TabStateName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.tabStateName.localeCompare(a.tabStateName);
        };
      case clsPrjTabENEx.con_TabMainTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.tabMainTypeName.localeCompare(a.tabMainTypeName);
        };
      case clsPrjTabENEx.con_TabTypeName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.tabTypeName.localeCompare(a.tabTypeName);
        };
      case clsPrjTabENEx.con_DateTimeSim:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsPrjTabENEx.con_RelaTabName4View:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.relaTabName4View.localeCompare(a.relaTabName4View);
        };
      case clsPrjTabENEx.con_PrjName:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsPrjTabENEx.con_CmPrjNames:
        return (a: clsPrjTabENEx, b: clsPrjTabENEx) => {
          return b.cmPrjNames.localeCompare(a.cmPrjNames);
        };

      default:
        return PrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

export function PrjTabEx_FuncMapByFldName(strFldName: string, objPrjTabEx: clsPrjTabENEx) {
  const strThisFuncName = 'PrjTabEx_FuncMapByFldName';
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPrjTabEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjTabENEx.con_TabFeatureConstraint:
      return PrjTabEx_FuncMap_TabFeatureConstraint(objPrjTabEx);
    case clsPrjTabENEx.con_RelaTabName4View:
      return PrjTabEx_FuncMap_RelaTabName4View(objPrjTabEx);
    case clsPrjTabENEx.con_TabTypeNameEx:
      return PrjTabEx_FuncMap_TabTypeNameEx(objPrjTabEx);
    case clsPrjTabENEx.con_CacheClassifyField4TSEx:
      return PrjTabEx_FuncMapCacheClassifyField4TSEx(objPrjTabEx);
    case clsPrjTabENEx.con_CacheClassifyFieldEx:
      return PrjTabEx_FuncMapCacheClassifyFieldEx(objPrjTabEx);

    case clsPrjTabENEx.con_PrimaryTypeNameEx:
      return PrjTabEx_FuncMap_PrimaryTypeNameEx(objPrjTabEx);
    case clsPrjTabENEx.con_ErrMsg:
      return PrjTabEx_FuncMap_ErrMsg(objPrjTabEx);

    case clsPrjTabENEx.con_CmPrjNames:
      return PrjTabEx_FuncMap_CmPrjNames(objPrjTabEx, clsPrivateSessionStorage.cmPrjId);
    case clsPrjTabENEx.con_TabNameEx:
      return PrjTabEx_FuncMap_TabNameEx(objPrjTabEx);
    case clsPrjTabENEx.con_FuncModuleName:
      return PrjTabEx_FuncMap_FuncModuleName(objPrjTabEx);

    case clsPrjTabENEx.con_FldNum:
      return PrjTabEx_FuncMap_FldNum(objPrjTabEx);

    case clsPrjTabENEx.con_SqlDsTypeName:
      return PrjTabEx_FuncMap_SqlDsTypeName(objPrjTabEx);
    case clsPrjTabENEx.con_TabStateName:
      return PrjTabEx_FuncMap_TabStateName(objPrjTabEx);

    case clsPrjTabENEx.con_TabMainTypeName:
      return PrjTabEx_FuncMap_TabMainTypeName(objPrjTabEx);

    case clsPrjTabENEx.con_TabTypeName:
      return PrjTabEx_FuncMap_TabTypeName(objPrjTabEx);

    case clsPrjTabENEx.con_DateTimeSim:
      return PrjTabEx_FuncMap_DateTimeSim(objPrjTabEx);

    case clsPrjTabENEx.con_PrjName:
      return PrjTabEx_FuncMap_PrjName(objPrjTabEx);
    //case clsPrjTabENEx.con_TabNameEx:
    //    return PrjTabEx_FuncMap_TabName(objPrjTabEx);

    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabS:源对象
 **/
export async function PrjTabEx_FuncMap_TabNameEx(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_TabNameEx.name;
  try {
    if (IsNullOrEmpty(objPrjTab.relaTabName4View) == true) {
      await PrjTabEx_FuncMap_RelaTabName4View(objPrjTab);
    }
    if (IsNullOrEmpty(objPrjTab.tabNameEx) == true) {
      const spnIsShare = GetSpan_Empty('text-warning');
      let strIsShare = '';
      if (objPrjTab.isShare) {
        spnIsShare.innerText = '共享表，在其他工程中可以共享该表';
        strIsShare = Format('<br/>{0}', spnIsShare.outerHTML);
      }

      //strIsShare = Format("<br/>{0}", spnIsShare.outerHTML);

      const spnIsUseDelSign = GetSpan_Empty('text-primary');
      let strIsUseDelSign = '';
      if (objPrjTab.isUseDelSign) {
        spnIsUseDelSign.innerText = '使用删除标志，记录不能删除，仅设置删除标志';
        strIsUseDelSign = Format('<br/>{0}', spnIsUseDelSign.outerHTML);
      }

      //strIsShare = Format("<br/>{0}", spnIsShare.outerHTML);

      if (
        objPrjTab.sqlDsTypeId == enumSQLDSType.SqlView_02 &&
        IsNullOrEmpty(objPrjTab.relaTabName4View) == false
      ) {
        objPrjTab.tabNameEx = Format(
          "{0}<br/>{1}<br/><span class='text-danger'>主表:{2}</span>{3}{4}",
          objPrjTab.tabName,
          objPrjTab.tabCnName,
          objPrjTab.relaTabName4View,
          strIsShare,
          strIsUseDelSign,
        );
      } else {
        objPrjTab.tabNameEx = Format(
          '{0}<br/>{1}{2}{3}',
          objPrjTab.tabName,
          objPrjTab.tabCnName,
          strIsShare,
          strIsUseDelSign,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabEx_FuncMap_TabFeatureConstraint(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_TabNameEx.name;
  try {
    if (IsNullOrEmpty(objPrjTab.tabFeatureConstraint) == true) {
      const arrPrjConstraint = await vPrjConstraint_SimEx_GetObjLstByTabIdCache(
        objPrjTab.prjId,
        objPrjTab.tabId,
      );
      let strPrjConstraint = '';
      let i = 1;
      for (const objPrjConstraint of arrPrjConstraint) {
        if (i == 1) {
          strPrjConstraint += Format('{0}. {1}', i++, objPrjConstraint.constraintName);
        } else {
          strPrjConstraint += Format('<br/>{0}. {1}', i++, objPrjConstraint.constraintName);
        }
      }
      const arrTabFeature = await TabFeatureEx_GetObjLstByTabIdCache(
        clsPrivateSessionStorage.cmPrjId,
        objPrjTab.tabId,
      );
      let strTabFeature = '';
      let i2 = 1;
      for (const objTabFeature of arrTabFeature) {
        if (i2 == 1) {
          strTabFeature += Format(
            '{0}. {1}({2})',
            i2++,
            objTabFeature.tabFeatureName,
            objTabFeature.toolTipText ?? '',
          );
        } else {
          strTabFeature += Format(
            '<br/>{0}. {1}({2})',
            i2++,
            objTabFeature.tabFeatureName,
            objTabFeature.toolTipText ?? '',
          );
        }
      }
      let strTabFeatureConstraint = '';
      if (IsNullOrEmpty(strPrjConstraint) == false) {
        strTabFeatureConstraint += Format(
          "<span class='text-primary'>约束:</span><br/><span class='text-info'>{0}</span>",
          strPrjConstraint,
          strTabFeature,
        );
      }
      if (IsNullOrEmpty(strTabFeature) == false) {
        if (IsNullOrEmpty(strTabFeatureConstraint) == true) {
          strTabFeatureConstraint += Format(
            "<span class='text-primary'>表功能:</span><br/><span class='text-info'>{0}</span>",
            strTabFeature,
          );
        } else {
          strTabFeatureConstraint += Format(
            "<br/><span class='text-primary'>表功能:</span><br/><span class='text-info'>{0}</span>",
            strTabFeature,
          );
        }
      }
      objPrjTab.tabFeatureConstraint = strTabFeatureConstraint;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabEx_FuncMap_TabTypeNameEx(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_TabTypeNameEx.name;
  try {
    if (IsNullOrEmpty(objPrjTab.tabTypeNameEx) == true) {
      if (IsNullOrEmpty(objPrjTab.sqlDsTypeName) == true)
        await PrjTabEx_FuncMap_SqlDsTypeName(objPrjTab);
      if (IsNullOrEmpty(objPrjTab.tabTypeName) == true)
        await PrjTabEx_FuncMap_TabTypeName(objPrjTab);

      objPrjTab.tabTypeNameEx = Format(
        "<span class='text-primary'>{0}</span><br/><span class='text-info'>{1}</span>",
        objPrjTab.sqlDsTypeName,
        objPrjTab.tabTypeName,
      );
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabEx_FuncMapCacheClassifyField4TSEx(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMapCacheClassifyField4TSEx.name;
  try {
    if (IsNullOrEmpty(objPrjTab.cacheClassifyField4TSEx) == true) {
      const spnCacheClassifyField = document.createElement('span');
      spnCacheClassifyField.className = 'text-info';
      spnCacheClassifyField.title = '缓存分类1-TypeScript';

      const spnCacheClassifyField2 = document.createElement('span');
      spnCacheClassifyField2.className = 'text-info';
      spnCacheClassifyField2.title = '缓存分类2-TypeScript';

      const spnClassifyField = document.createElement('span');
      spnClassifyField.className = 'text-primary';
      if (IsNullOrEmpty(objPrjTab.cacheModeId) == true) {
        spnClassifyField.title = '不使用缓存';
        spnClassifyField.innerHTML = '非缓存';
        objPrjTab.cacheClassifyField4TSEx = spnClassifyField.outerHTML;
      } else {
        let objCacheMode: clsCacheModeEN;
        // const strCacheModeName = '';
        const spnCacheModeName = document.createElement('span');
        spnCacheModeName.className = 'text-primary';
        spnCacheModeName.title = '缓存模式';
        if (IsNullOrEmpty(objPrjTab.cacheModeId) == false) {
          const objCacheMode0 = await CacheMode_GetObjByCacheModeIdCache(objPrjTab.cacheModeId);

          if (objCacheMode0 == null) spnCacheModeName.innerHTML = '未知';
          else {
            objCacheMode = objCacheMode0;
            spnCacheModeName.innerHTML = objCacheMode.cacheModeName;
          }
        }
        spnClassifyField.appendChild(spnCacheModeName);

        let objFieldTab;

        let strCacheClassifyField = '';
        if (IsNullOrEmpty(objPrjTab.cacheClassifyFieldTS) == false) {
          objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
            objPrjTab.cacheClassifyFieldTS,
            objPrjTab.prjId,
          );
          if (objFieldTab != null) {
            strCacheClassifyField = objFieldTab.fldName;
          }

          if (IsNullOrEmpty(objPrjTab.paraVar1TS) == false) {
            const objParaVar1 = await GCVariable_GetObjByVarIdCache(objPrjTab.paraVar1TS);
            if (objParaVar1 != null) {
              strCacheClassifyField += Format('({0})', objParaVar1.varExpression);
            }
          }
          if (IsNullOrEmpty(strCacheClassifyField) == false) {
            spnCacheClassifyField.innerHTML = strCacheClassifyField;
            const objBr = document.createElement('br');
            spnClassifyField.appendChild(objBr);
            spnClassifyField.appendChild(spnCacheClassifyField);
          }

          //objPrjTab.cacheClassifyField4TSEx = Format("<span class='text-primary' title='缓存模式'>{0}</span><br/><span class='text-info'  title='缓存分类1-TypeScript'>{1}{2}</span><br/><span class='text-info'  title='缓存分类2-TypeScript'>{3}{4}</span><br/>{5}",
          //    strCacheModeName, strCacheClassifyField, strParaVar1_Ts, strCacheClassifyField2, strParaVar2_Ts, spnIsMulti.outerHTML);
        }
        if (IsNullOrEmpty(objPrjTab.cacheClassifyField2TS) == false) {
          objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
            objPrjTab.cacheClassifyField2TS,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (objFieldTab != null) {
            strCacheClassifyField = objFieldTab.fldName;
          }

          if (IsNullOrEmpty(objPrjTab.paraVar2TS) == false) {
            const objParaVar2 = await GCVariable_GetObjByVarIdCache(objPrjTab.paraVar2TS);
            if (objParaVar2 != null) {
              strCacheClassifyField += Format('({0})', objParaVar2.varExpression);
            }
          }
          if (IsNullOrEmpty(strCacheClassifyField) == false) {
            spnCacheClassifyField2.innerHTML = strCacheClassifyField;
            const objBr1 = document.createElement('br');
            spnClassifyField.appendChild(objBr1);
            spnClassifyField.appendChild(spnCacheClassifyField2);
          }
        }
        const spnIsMulti = document.createElement('span');
        spnIsMulti.className = 'text-warning';
        if (objPrjTab.isMultiKeyClassify) {
          spnIsMulti.innerHTML = '多关键字分类共存';
        } else {
          spnIsMulti.innerHTML = '多关键字分类不能共存';
          spnIsMulti.className = 'text-danger';
        }
        if (IsNullOrEmpty(objPrjTab.whereFormat) == false) {
          const spnWhereFormat = GetSpan_Empty('text-secondary');
          spnWhereFormat.innerText = Format('条件格式串:{0}', objPrjTab.whereFormat);
          const objBr = GetBr_Empty();
          spnClassifyField.appendChild(objBr);
          spnClassifyField.appendChild(spnWhereFormat);
        }
        const objBr2 = document.createElement('br');
        spnClassifyField.appendChild(objBr2);
        spnClassifyField.appendChild(spnIsMulti);
        objPrjTab.cacheClassifyField4TSEx = spnClassifyField.outerHTML;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabEx_FuncMapCacheClassifyFieldEx(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMapCacheClassifyFieldEx.name;
  try {
    if (IsNullOrEmpty(objPrjTab.cacheClassifyFieldEx) == true) {
      const spnCacheClassifyFieldEx = GetSpan_Empty('');

      // const strCacheClassifyField = '';
      // const strCacheClassifyField2 = '';

      if (objPrjTab.isUseCache == false) {
        spnCacheClassifyFieldEx.innerText = '非缓存';
      } else {
        if (IsNullOrEmpty(objPrjTab.cacheClassifyField) == false) {
          const spnCacheClassifyField = await FieldTabEx_GetSpanByCacheClassifyField(
            objPrjTab.cacheClassifyField,
          );
          const spnCacheClassifyField2 = await FieldTabEx_GetSpanByCacheClassifyField(
            objPrjTab.cacheClassifyField2,
          );
          if (spnCacheClassifyField != null)
            spnCacheClassifyFieldEx.appendChild(spnCacheClassifyField);
          if (spnCacheClassifyField2 != null)
            spnCacheClassifyFieldEx.appendChild(spnCacheClassifyField2);
        } else {
          spnCacheClassifyFieldEx.className = 'text-primary';
          spnCacheClassifyFieldEx.title = '使用缓存';
        }
      }

      objPrjTab.cacheClassifyFieldEx = spnCacheClassifyFieldEx.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabEx_FuncMap_PrimaryTypeNameEx(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_PrimaryTypeNameEx.name;
  try {
    if (IsNullOrEmpty(objPrjTab.primaryTypeNameEx) == true) {
      objPrjTab.primaryTypeName = await vPrjTabKeyFldV2Ex_GetPrimaryTypeName(
        objPrjTab.tabId,
        clsPrivateSessionStorage.cmPrjId,
      );
      objPrjTab.keyFldNames = await vPrjTabKeyFldV2Ex_GetKeyFldNames(
        objPrjTab.tabId,
        clsPrivateSessionStorage.cmPrjId,
      );
      //if (IsNullOrEmpty(objPrjTab.primaryTypeName) == true) {
      objPrjTab.primaryTypeNameEx = await vPrjTabKeyFldV2Ex_GetPrimaryTypeHtmlInfo(
        objPrjTab.tabId,
        clsPrivateSessionStorage.cmPrjId,
      );
      //}
      //else {
      //    objPrjTab.primaryTypeNameEx = Format("<span class='text-primary' title='主键类型'>{0}</span><br/><span class='text-info' title='主键字段名'>{1}</span>", objPrjTab.primaryTypeName, objPrjTab.keyFldNames);
      //}
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabEx_FuncMap_ErrMsg(objPrjTab: clsPrjTabENEx) {
  const strThisFuncName = PrjTabEx_FuncMap_TabNameEx.name;
  try {
    if (IsNullOrEmpty(objPrjTab.errMsg) == true) {
      const arrvTabCheckStatus_Sim = await vTabCheckStatus_Sim_GetObjLstCache(
        objPrjTab.prjId,
        clsPrivateSessionStorage.currPrjDataBaseId,
      );
      const arrvTabCheckStatus_Sim_Sel = arrvTabCheckStatus_Sim.filter(
        (x) => x.tabId == objPrjTab.tabId,
      );
      let strErrMsg = '';
      let i = 0;
      for (const objInFor of arrvTabCheckStatus_Sim_Sel) {
        if (i == 0) {
          strErrMsg += Format('{0}', objInFor.errorMsg);
          i++;
        } else {
          strErrMsg += Format('<br/>{0}', objInFor.errorMsg);
          i++;
        }
      }
      objPrjTab.errMsg = strErrMsg;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabEx_FuncMap_CmPrjNames(objPrjTab: clsPrjTabENEx, strCmPrjId: string) {
  const strThisFuncName = PrjTabEx_FuncMap_CmPrjNames.name;
  try {
    if (IsNullOrEmpty(objPrjTab.cmPrjNames) == true) {
      const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
      const arrCMProjectPrjTab = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
      const arrCMProjectPrjTabSel = arrCMProjectPrjTab.filter((x) => x.tabId == objPrjTab.tabId);
      let strCmPrjNames = '';
      let i = 0;
      for (const objInFor of arrCMProjectPrjTabSel) {
        const objCMProject = await CMProject_GetObjByCmPrjIdCache(objInFor.cmPrjId);
        if (objCMProject == null) continue;
        if (i == 0) {
          strCmPrjNames += Format(
            "<span style='white-space: nowrap'>{0}</span>",
            objCMProject.cmPrjName,
          );
          i++;
        } else {
          strCmPrjNames += Format(
            "<br/><span style='white-space: nowrap'>{0}</span>",
            objCMProject.cmPrjName,
          );
          i++;
        }
      }
      objPrjTab.cmPrjNames = strCmPrjNames;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 检查表字段
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_CheckTabFlds(
  strTabId: string,
  strPrjDataBaseId: string,
  strCmPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabEx_CheckTabFlds.name;
  const strAction = 'CheckTabFlds';
  const strUrl = PrjTabEx_GetWebApiUrl(prjTabEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strPrjDataBaseId,
      strCmPrjId,
      strOpUserId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PrjTabEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjTabEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPrjTabObjLst = await PrjTab_GetObjLstByPagerAsync(objPagerPara);
  const arrPrjTabExObjLst = arrPrjTabObjLst.map(PrjTabEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjTabEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrPrjTabExObjLst) {
      await PrjTabEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPrjTabExObjLst.length == 0) return arrPrjTabExObjLst;
  let arrPrjTabSel: Array<clsPrjTabENEx> = arrPrjTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjTabSel = arrPrjTabSel.sort(PrjTabEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPrjTabSel = arrPrjTabSel.sort(objPagerPara.sortFun);
    }

    return arrPrjTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabENEx>();
}

/**
 * 导入Sql中的数据表到代码系统
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param arrSqlTable: Sql表对象列表
 * @param strPrjId: 工程Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_ImportSqlTab(myData: any): Promise<boolean> {
  const strThisFuncName = PrjTabEx_ImportSqlTab.name;
  const strAction = 'ImportSqlTab';
  const strUrl = PrjTabEx_GetWebApiUrl(prjTabEx_Controller, strAction);
  console.log('myData:', myData);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  try {
    const response = await axios.post(strUrl, myData, config);
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 设置字段值-InUse
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
 **/
export async function PrjTabEx_SetTabUseStateId(
  strTabId: string,
  strTabStateId: string,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = PrjTabEx_SetTabUseStateId.name;

  // const intCount = 0;
  // const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const objPrjTabEN = new clsPrjTabEN();

  objPrjTabEN.SetTabId(strTabId);
  objPrjTabEN.SetTabStateId(strTabStateId);
  objPrjTabEN.SetPrjId(strPrjId);
  objPrjTabEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0));
  objPrjTabEN.SetUpdUserId(strUserId);
  let returnBool = false;
  try {
    returnBool = await PrjTab_UpdateRecordAsync(objPrjTabEN);
  } catch (e) {
    const strMsg = Format(
      '设置表状态不成功,{0}.(in {1}.{2})',
      e,
      prjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (returnBool == true) {
    // const strInfo = Format('设置表状态成功!');
  } else {
    const strInfo = Format('设置表状态不成功!');
    //显示信息框
    alert(strInfo);
  }
}

/**
 * 获取某表的记录数
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_GetTabRecNumB(
  strTabId: string,
  strPrjDataBaseId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabEx_GetTabRecNum.name;
  const strAction = 'GetTabRecNum';
  const strUrl = PrjTabEx_GetWebApiUrl(prjTabEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,

      strPrjDataBaseId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 获取某表的记录数
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_GetTabRecNum(
  strTabId: string,
  strPrjDataBaseId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabEx_GetTabRecNum.name;
  const strAction = 'GetTabRecNum';
  const strUrl = PrjTabEx_GetWebApiUrl(prjTabEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strPrjDataBaseId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
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
 * 设置表是否共享，同时也修改相关界面的共享性
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param bolIsShare: 是否共享
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabEx_SetIsShare(
  strTabId: string,
  bolIsShare: boolean,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabEx_SetIsShare.name;
  const strAction = 'SetIsShare';
  const strUrl = PrjTabEx_GetWebApiUrl(prjTabEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      bolIsShare,
      strOpUserId,
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
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
