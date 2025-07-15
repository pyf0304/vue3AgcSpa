import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export const userDefaValue_LocalEx_Controller = 'UserDefaValue_LocalExApi';
export const userDefaValue_LocalEx_ConstructorName = 'userDefaValue_LocalEx';

/// <summary>
/// 设置用户缺省值
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strCurrPrjId">当前工程Id</param>
/// <param name = "strCurrSelPrjId">当前用户选择的工程Id</param>
/// <param name = "strUserId">用户Id</param>
/// <param name = "strDefaValName">缺省值名</param>
/// <param name = "strUserDefaValue">用户缺省值</param>
/// <returns>获取的相应对象列表</returns>
export async function UserDefaValue_LocalEx_setUserDefaValue(
  strCurrPrjId: string,
  strCurrSelPrjId: string,
  strUserId: string,
  strDefaValName: string,
  strUserDefaValue: string,
): Promise<boolean> {
  const strThisFuncName = UserDefaValue_LocalEx_setUserDefaValue.name;
  const strAction = 'setUserDefaValue';
  const strUrl = GetWebApiUrl(userDefaValue_LocalEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strCurrPrjId', strCurrPrjId);
  // mapParam.add('strCurrSelPrjId', strCurrSelPrjId);
  // mapParam.add('strUserId', strUserId);
  // mapParam.add('strDefaValName', strDefaValName);
  // mapParam.add('strUserDefaValue', strUserDefaValue);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCurrPrjId,
      strCurrSelPrjId,
      strUserId,
      strDefaValName,
      strUserDefaValue,
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
        userDefaValue_LocalEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userDefaValue_LocalEx_ConstructorName,
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
 * 获取用户缺省值
 * @param strCurrPrjId:当前工程Id
 * @param strCurrSelPrjId:当前用户选择的工程Id
 * @param strUserId:用户Id
 * @param strDefaValName:缺省值名
 * @returns 获取的相应对象列表
 */
export async function UserDefaValue_LocalEx_getUserDefaValue(
  strCurrPrjId: string,
  strCurrSelPrjId: string,
  strUserId: string,
  strDefaValName: string,
): Promise<string> {
  const strThisFuncName = UserDefaValue_LocalEx_setUserDefaValue.name;
  const strAction = 'getUserDefaValue';
  const strUrl = GetWebApiUrl(userDefaValue_LocalEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strCurrPrjId', strCurrPrjId);
  // mapParam.add('strCurrSelPrjId', strCurrSelPrjId);
  // mapParam.add('strUserId', strUserId);
  // mapParam.add('strDefaValName', strDefaValName);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCurrPrjId,
      strCurrSelPrjId,
      strUserId,
      strDefaValName,
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
        userDefaValue_LocalEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userDefaValue_LocalEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
