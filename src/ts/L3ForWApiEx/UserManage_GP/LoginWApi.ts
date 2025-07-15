import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuLoginPara } from '@/ts/PubFun/stuLoginPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { setToken } from '@/ts/utils/auth';
import { Format } from '@/ts/PubFun/clsString';

export const login_Controller = 'LoginApi';
export const login_ConstructorName = 'login';

export async function Login_UserLoginAsync(
  objLoginPara: stuLoginPara,
): Promise<boolean | undefined> {
  //检测记录是否存在
  const strAction = 'UserLogin';
  const strUrl = Login_GetWebApiUrl(login_Controller, strAction);
  console.log('strUrl:', strUrl);
  // const mapParam: Dictionary = stuLoginPara.GetMapParam(objLoginPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  //return new Promise((resolve, reject) => {
  //    axios({
  //        method: 'post',
  //        url: strUrl,
  //        data: JSON.stringify(objLoginPara),
  //    })
  //        .then(function (response) {
  //            console.log(response);
  //            const returnBool = response.data.returnBool;
  //            if (returnBool == true) {
  //                setToken(response.data.token);
  //            }
  //            resolve(returnBool);
  //            //return returnBool;
  //        })
  //        .catch(function (error) {
  //            console.error(error);
  //            //return false;
  //            reject(error);
  //        });
  //});
  try {
    axios
      .post(strUrl, objLoginPara)
      .then(function (response: any) {
        // If there is reponse, then
        //console.log(response.data)
        console.log(response);
        const returnBool = response.data.returnBool;
        if (returnBool == true) {
          setToken(response.data.token);
        }
        //resolve(returnBool);
        return returnBool;
        //if (response.data.email) {
        //    console.log(`API Key ${key} already exists! Generating another one..`)
        //    flag = 0
        //} else {
        //    console.log(`API Key ${key} does not exist. Assigning it..`)
        //    flag = 1
        //}
      })
      .catch(function (error: Error) {
        //console.log(`ERROR requesting details for ${key}`)
        //console.log(error)
        //flag = 0
        console.error(error);
        return false;
        //reject(error);
      })
      .then(function () {
        //console.log(`Returning flag ${flag}`)
        //return flag
        return false;
      });
  } catch (error: any) {
    console.log(error);
    return false;
  }
}

/// <summary>
/// 用户登录
/// </summary>
/// <param name = "objLoginPara">登录登录</param>
/// <returns>是否存在?存在返回True</returns>
export async function Login_UserLoginAsyncBak(objLoginPara: stuLoginPara): Promise<boolean> {
  const strThisFuncName = 'Login_UserLoginAsyncBak';
  //检测记录是否存在
  const strAction = 'UserLogin';
  const strUrl = Login_GetWebApiUrl(login_Controller, strAction);
  // const mapParam: Dictionary = stuLoginPara.GetMapParam(objLoginPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLoginPara, config);
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
        login_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        login_ConstructorName,
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
/// 用户登录
/// </summary>
/// <param name = "objLoginPara">登录登录</param>
/// <returns>是否存在?存在返回True</returns>
export async function Login_UserLogin2Async(objLoginPara: stuLoginPara): Promise<boolean> {
  const strThisFuncName = 'Login_UserLogin2Async';
  //检测记录是否存在
  const strAction = 'UserLogin2';
  const strUrl = Login_GetWebApiUrl(login_Controller, strAction);
  // const mapParam: Dictionary = stuLoginPara.GetMapParam(objLoginPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLoginPara, config);
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
        login_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        login_ConstructorName,
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
/// 用户登录
/// </summary>
/// <param name = "objLoginPara">登录登录</param>
/// <returns>是否存在?存在返回True</returns>
export async function Login_UserLoginByPrjIdAsync(objLoginPara: stuLoginPara): Promise<boolean> {
  const strThisFuncName = 'Login_UserLoginByPrjIdAsync';
  //检测记录是否存在
  const strAction = 'UserLoginByPrjId';
  const strUrl = Login_GetWebApiUrl(login_Controller, strAction);
  console.log('strUrl:', strUrl);
  // const mapParam: Dictionary = stuLoginPara.GetMapParam(objLoginPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLoginPara, config);
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
        login_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        login_ConstructorName,
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
/// 用户登录
/// </summary>
/// <param name = "objLoginPara">登录登录</param>
/// <returns>是否存在?存在返回True</returns>
export async function Login_UserLoginWithEffectiveDateAsync(
  objLoginPara: stuLoginPara,
): Promise<boolean> {
  const strThisFuncName = 'Login_UserLoginWithEffectiveDateAsync';
  //检测记录是否存在
  const strAction = 'UserLogin';
  const strUrl = Login_GetWebApiUrl(login_Controller, strAction);
  console.log('strUrl:', strUrl);
  // const mapParam: Dictionary = stuLoginPara.GetMapParam(objLoginPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLoginPara, config);
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
        login_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'EffectiveDateError') {
      let strMsg = '';
      strMsg = `用户登录（UserLoginWithEffectiveDate）有问题,由于您(${objLoginPara.loginName})的用户有效日期出错,请联系系统管理员！当前日期:${objLoginPara.effectiveDate}.`;
      throw strMsg;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        login_ConstructorName,
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
/// 根据关键字获取相应的记录的对象
/// mapParam样例:strUserId = '01'
///调用样例:行1:clsQxUsersWS objQxUsersWS = new clsQxUsersWS(mHandler, "GetJSONObjByUserId", values, null);
///调用样例:行2:Thread mThread = new Thread(objQxUsersWS);
///调用样例:行3:mThread.start();
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
/// </summary>
/// <param name = "strUserId">关键字</param>

/// <returns>获取相应对象</returns>
export function Login_GetUserIdByLoginNameAsync(strLoginName: string): Promise<string> {
  const strAction = 'GetUserIdByLoginName';
  const strUrl = Login_GetWebApiUrl(login_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strLoginName', strLoginName);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data: any) {
        const bolIsSuccess = data.returnStr;

        resolve(bolIsSuccess);
      },
      error: (e: any) => {
        // const strErrMsg = e.responseText;
        reject(e);
      },
    });
  });
}
/// <summary>
/// 获取WebApi的地址
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
/// </summary>
/// <returns>返回当前文件中Web服务的地址</returns>
export function Login_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort_GP}/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  } else {
    strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort_Local_GP}/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  }
  return strServiceUrl;
}
