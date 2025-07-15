import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
// import * as $ from 'jquery';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export const tabCheckResultEx_Controller = 'TabCheckResultExApi';
export const tabCheckResultEx_ConstructorName = 'tabCheckResultEx';

/**
 * 删除表错误结果
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @param strTabId: 表Id
 * @param strTabCheckErrorTypeId: 错误类型Id
 * @param strFldId: 字段Id
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function TabCheckResultEx_DeleteErrorResult(
  strPrjId: string,
  strPrjDataBaseId: string,
  strTabId: string,
  strTabCheckErrorTypeId: string,
  strFldId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = TabCheckResultEx_DeleteErrorResult.name;

  const strAction = 'DeleteErrorResult';
  const strUrl = GetWebApiUrl(tabCheckResultEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strPrjDataBaseId', strPrjDataBaseId);
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strTabCheckErrorTypeId', strTabCheckErrorTypeId);
  // mapParam.add('strFldId', strFldId);
  // mapParam.add('strUserId', strUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strPrjDataBaseId,
      strTabId,
      strTabCheckErrorTypeId,
      strFldId,
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
        tabCheckResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tabCheckResultEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
