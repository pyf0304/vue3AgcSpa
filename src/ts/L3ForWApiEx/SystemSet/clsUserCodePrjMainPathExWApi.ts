import axios from 'axios';
// import * as $ from 'jquery';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsUserCodePrjMainPathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathEN';
import { clsUserCodePrjMainPathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathENEx';
import {
  UserCodePrjMainPath_GetObjLstCache,
  UserCodePrjMainPath_SortFunByKey,
} from '@/ts/L3ForWApi/SystemSet/clsUserCodePrjMainPathWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const userCodePrjMainPathEx_Controller = 'UserCodePrjMainPathExApi';
export const userCodePrjMainPathEx_ConstructorName = 'userCodePrjMainPathEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UserCodePrjMainPath_MachineNameEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strUserCodePrjMainPathId:所给的关键字
 * @returns 对象
 */
export async function UserCodePrjMainPathEx_GetUserCodePrjMainPathIdLstByPrjIdCache(
  strPrjId: string,
): Promise<Array<string>> {
  const arrUserCodePrjMainPathObjLstCache: Array<clsUserCodePrjMainPathEN> =
    await UserCodePrjMainPath_GetObjLstCache(strPrjId);

  try {
    const arrUserCodePrjMainPathId = arrUserCodePrjMainPathObjLstCache.map(
      (x) => x.userCodePrjMainPathId,
    );
    return arrUserCodePrjMainPathId;
  } catch (e: any) {
    const strMsg = Format('错误:[{0}]. \n根据PrjId:[{1}]获取相应的关键字列表不成功!', e, strPrjId);
    console.error(strMsg);
    alert(strMsg);
  }
  return [];
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 * @param objUserCodePrjMainPathENS:源对象
 * @returns 目标对象=>clsUserCodePrjMainPathEN:objUserCodePrjMainPathENT
 **/
export function UserCodePrjMainPathEx_CopyToEx(
  objUserCodePrjMainPathENS: clsUserCodePrjMainPathEN,
): clsUserCodePrjMainPathENEx {
  const objUserCodePrjMainPathENT = new clsUserCodePrjMainPathENEx();
  try {
    ObjectAssign(objUserCodePrjMainPathENT, objUserCodePrjMainPathENS);
    return objUserCodePrjMainPathENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,{0}.', e);
    console.error(strMsg);
    alert(strMsg);
    return objUserCodePrjMainPathENT;
  }
}

/**
 * 设置GC路径
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function UserCodePrjMainPathEx_SetGCPath(strOpUserId: string): Promise<number> {
  const strThisFuncName = UserCodePrjMainPathEx_SetGCPath.name;
  const strAction = 'SetGCPath';
  const strUrl = UserCodePrjMainPath_MachineNameEx_GetWebApiUrl(
    userCodePrjMainPathEx_Controller,
    strAction,
  );
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
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
        userCodePrjMainPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathEx_ConstructorName,
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserCodePrjMainPathEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePrjMainPathENEx.con_PrjName:
        return (a: clsUserCodePrjMainPathENEx, b: clsUserCodePrjMainPathENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsUserCodePrjMainPathENEx.con_ProgLangTypeName:
        return (a: clsUserCodePrjMainPathENEx, b: clsUserCodePrjMainPathENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      default:
        return UserCodePrjMainPath_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUserCodePrjMainPathENEx.con_PrjName:
        return (a: clsUserCodePrjMainPathENEx, b: clsUserCodePrjMainPathENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsUserCodePrjMainPathENEx.con_ProgLangTypeName:
        return (a: clsUserCodePrjMainPathENEx, b: clsUserCodePrjMainPathENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      default:
        return UserCodePrjMainPath_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserCodePrjMainPathS:源对象
 **/
//export async function UserCodePrjMainPathEx_FuncMap_GcPathName(objUserCodePrjMainPath: clsUserCodePrjMainPathENEx) {
//    const strThisFuncName = UserCodePrjMainPathEx_FuncMap_GcPathName.name;
//    try {
//        if (IsNullOrEmpty(objUserCodePrjMainPath.gcPathName) == true) {
//            const UserCodePrjMainPath_GCPathId = objUserCodePrjMainPath.gcPathId;
//            const GCPath_GCPathName = await GCPath_func(clsGCPathEN.con_GcPathId, clsGCPathEN.con_GcPathName, UserCodePrjMainPath_GCPathId, objUserCodePrjMainPath.prjId, objUserCodePrjMainPath.userId);
//            objUserCodePrjMainPath.gcPathName = GCPath_GCPathName;
//        }
//    }
//    catch (e) {
//        const strMsg = Format("(errid:Watl000115)函数映射表对象数据出错,{0}.(in {1}.{2})", e, userCodePrjMainPathEx_ConstructorName, strThisFuncName);
//        console.error(strMsg);
//        alert(strMsg);
//    }
//}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function UserCodePrjMainPathEx_GetObjLstByCMProjectAppRelaIdCache(
  strCMProjectAppRelaId: number,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByCmPrjIdCache';

  const arrUserCodePrjMainPathObjLstCache: Array<clsUserCodePrjMainPathEN> =
    await UserCodePrjMainPath_GetObjLstCache(strPrjId);
  try {
    const arrUserCodePrjMainPath_Sel: Array<clsUserCodePrjMainPathEN> =
      arrUserCodePrjMainPathObjLstCache.filter(
        (x) => x.cMProjectAppRelaId == strCMProjectAppRelaId && x.userId == strUserId,
      );
    if (arrUserCodePrjMainPath_Sel.length > 0) {
      return arrUserCodePrjMainPath_Sel;
    } else {
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据CMProjectAppRelaId:[{1}]获取相应的对象列表不成功!(in {2}.{3})',
      e,
      strCMProjectAppRelaId,
      userCodePrjMainPathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return null;
}

/**
 * 扩展删除
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserCodePrjMainPathId: 生成主目录Id
 * @param strCmPrjId: CM工程Id
 * @returns 获取的相应对象列表
 */
export async function UserCodePrjMainPathEx_DelRecordEx(
  strUserCodePrjMainPathId: string,
  strCmPrjId: string,
): Promise<boolean> {
  const strThisFuncName = UserCodePrjMainPathEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = UserCodePrjMainPath_MachineNameEx_GetWebApiUrl(
    userCodePrjMainPathEx_Controller,
    strAction,
  );
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserCodePrjMainPathId,
      strCmPrjId,
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
        userCodePrjMainPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
