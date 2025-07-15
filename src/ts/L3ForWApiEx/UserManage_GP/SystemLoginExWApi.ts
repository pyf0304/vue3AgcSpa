import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
//import * as $ from "jquery";
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export const system_Controller = 'SystemApi';
export const system_ConstructorName = 'System';

/**
 * 在CM工程中自动建立路径
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function System_Login(strUserId: string, strPassword: string): Promise<boolean> {
  const strAction = 'Login';
  const strUrl = GetWebApiUrl(system_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('UserId', strUserId);
  mapParam.add('Password', strPassword);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  axios({
    method: 'post',
    url: strUrl,
    data: {
      UserId: strUserId,
      Password: strPassword,
    },
  })
    .then(function (response) {
      console.log(response);
      return true;
    })

    .catch(function (error) {
      console.log(error);
      return false;
    });
  return true;
}

/**
 * 在CM工程中自动建立路径
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnPathEx_AutoCreatePath(
  strCmPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = DnPathEx_AutoCreatePath.name;
  const strAction = 'TestLogin';
  const strUrl = GetWebApiUrl(system_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strCmPrjId', strCmPrjId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      strOpUserId,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        system_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        system_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
