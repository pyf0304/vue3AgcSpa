import axios from 'axios';
// import * as $ from 'jquery';
import { clsSysPara4WebApi, GetWebApiUrl } from '../../PubConfig/clsSysPara4WebApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsGCResult } from '@/ts/L0Entity/clsGCResult';
import { clsGCPara } from '@/ts/L0Entity/clsGCPara';

import { Format } from '@/ts/PubFun/clsString';
export const autoGeneCode_Controller = 'AutoGeneCodeApi';
export const autoGeneCode_ConstructorName = 'autoGeneCode';

// let Param;
// const NameSpace = 'http://tempuri.org/';
// const MethodName = '';

// const soapAction = '';

/// <summary>
/// 根据条件获取相应的记录对象列表
/// mapParam样例: mapParam.put("strWhereCond", "1 = 1");
///调用样例:行1:clsAcademyWS objAcademyWS = new clsAcademyWS(mHandler, "GetJSONObjLst", values, null);
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
/// </summary>
/// <param name = "objGCPara">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function AutoGeneCode_GeneCodeAsync(objGCPara: clsGCPara): Promise<clsGCResult> {
  const strThisFuncName = 'AutoGeneCode_GeneCodeAsync';
  const strAction = 'GeneCode';
  const strUrl = GetWebApiUrl(autoGeneCode_Controller, strAction);
  //   const mapParam: Dictionary = new Dictionary();

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data; //.returnObj;
      if (returnObj == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          autoGeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);

      return returnObj;
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
        autoGeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        autoGeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 根据条件获取相应的记录对象列表
/// mapParam样例: mapParam.put("strWhereCond", "1 = 1");
///调用样例:行1:clsAcademyWS objAcademyWS = new clsAcademyWS(mHandler, "GetJSONObjLst", values, null);
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
/// </summary>
/// <param name = "objGCPara">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function AutoGeneCode_GeneCode4FuncAsync(objGCPara: clsGCPara): Promise<clsGCResult> {
  const strThisFuncName = 'AutoGeneCode_GeneCode4FuncAsync';
  const strAction = 'GeneCode4Func';
  const strUrl = GetWebApiUrl(autoGeneCode_Controller, strAction);
  //   const mapParam: Dictionary = new Dictionary();

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data; //.returnObj;
      if (returnObj == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          autoGeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);

      return returnObj;
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
        autoGeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        autoGeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function AutoGeneCode_GeneCode4FeatureAsync(
  objGCPara: clsGCPara,
): Promise<clsGCResult> {
  const strThisFuncName = 'AutoGeneCode_GeneCode4FeatureAsync';
  const strAction = 'GeneCode4Feature';
  const strUrl = GetWebApiUrl(autoGeneCode_Controller, strAction);
  //   const mapParam: Dictionary = new Dictionary();

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data; //.returnObj;
      if (returnObj == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          autoGeneCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);

      return returnObj;
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
        autoGeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        autoGeneCode_ConstructorName,
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
 * 在Sql中建立表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strPrjId: 工程Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function AutoGeneCode_GenNewTabInSQL(
  strTabId: string,
  strPrjId: string,
  strPrjDataBaseId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = AutoGeneCode_GenNewTabInSQL.name;

  const strAction = 'GenNewTabInSQL';
  const strUrl = GetWebApiUrl(autoGeneCode_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strPrjDataBaseId', strPrjDataBaseId);
  // mapParam.add('strOpUserId', strOpUserId);
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
      strPrjDataBaseId,
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
        autoGeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        autoGeneCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 获取WebApi的地址
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
/// </summary>
/// <returns>返回当前文件中Web服务的地址</returns>
export function AutoGeneCode_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort}/${clsSysPara4WebApi.CurrPrx}/${strController}/${strAction}`;
  } else {
    strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort_Local}/${clsSysPara4WebApi.CurrPrx}/${strController}/${strAction}`;
  }
  return strServiceUrl;
}
