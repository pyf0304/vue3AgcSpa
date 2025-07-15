// import * as $ from 'jquery';
import axios from 'axios';
import { clsSysPara4WebApi, GetWebApiUrl } from '../PubConfig/clsSysPara4WebApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
// import { clsColumns } from '@/ts/L0Entity/clsColumns';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const pubDataBaseApiController = 'PubDataBaseApi';
export const pubDataBaseApiConstructorName = 'pubDataBaseApi';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function PubDataBaseApiGetWebApiUrl(strController: string, strAction: string): string {
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

/// <summary>
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetDataTableAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function PubDataBase_GetFieldValue(
  strTabName: string,
  strFldName: string,
  strWhere: string,
): Promise<Array<string>> {
  const strThisFuncName = 'PubDataBase_GetFieldValue';

  //public JObject GetDataTable(string strCurrPrjDataBaseId, string strTabName, int intRecNum, string strWhereCond, string strOrderBy) {
  const strAction = 'GetFieldValue';
  const strUrl = GetWebApiUrl(pubDataBaseApiController, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabName,
      strFldName,
      strWhere,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnStrLst = data.returnStrLst;
      //console.log(returnDataTable);
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
        pubDataBaseApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        pubDataBaseApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
