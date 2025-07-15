/// <summary>
/// 界面引用文件(ViewReferFiles)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年06月04日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';

import { Format } from '@/ts/PubFun/clsString';

export const viewReferFilesEx_Controller = 'ViewReferFilesExApi';
export const viewReferFilesEx_ConstructorName = 'viewReferFilesEx';

/**
 * 从模板复制相关文件
 * @param strViewId 界面Id
 * @param strPrjId 工程Id
 * @param strOpUserId 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function ViewReferFilesEx_CopyFromTempplate(
  strViewId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = ViewReferFilesEx_CopyFromTempplate.name;

  const strAction = 'CopyFromTempplate';
  const strUrl = GetWebApiUrl(viewReferFilesEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewId', strViewId);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
      strPrjId,
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
        viewReferFilesEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewReferFilesEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
