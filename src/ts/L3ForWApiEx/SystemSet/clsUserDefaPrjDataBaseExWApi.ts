/**
 * 用户默认数据库(UserDefaPrjDataBase)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年12月16日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import {
  UserDefaPrjDataBase_GetObjLstAsync,
  UserDefaPrjDataBase_SortFunByKey,
  UserDefaPrjDataBase_GetFirstObjAsync,
} from '@/ts/L3ForWApi/SystemSet/clsUserDefaPrjDataBaseWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsUserDefaPrjDataBaseEN } from '@/ts/L0Entity/SystemSet/clsUserDefaPrjDataBaseEN';
import { clsUserDefaPrjDataBaseENEx } from '@/ts/L0Entity/SystemSet/clsUserDefaPrjDataBaseENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const userDefaPrjDataBaseExController = 'UserDefaPrjDataBaseExApi';
export const userDefaPrjDataBaseEx_ConstructorName = 'userDefaPrjDataBaseEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UserDefaPrjDataBaseEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objUserDefaPrjDataBaseENS:源对象
 * @returns 目标对象=>clsUserDefaPrjDataBaseEN:objUserDefaPrjDataBaseENT
 **/
export function UserDefaPrjDataBaseEx_CopyToEx(
  objUserDefaPrjDataBaseENS: clsUserDefaPrjDataBaseEN,
): clsUserDefaPrjDataBaseENEx {
  const strThisFuncName = UserDefaPrjDataBaseEx_CopyToEx.name;
  const objUserDefaPrjDataBaseENT = new clsUserDefaPrjDataBaseENEx();
  try {
    ObjectAssign(objUserDefaPrjDataBaseENT, objUserDefaPrjDataBaseENS);
    return objUserDefaPrjDataBaseENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userDefaPrjDataBaseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserDefaPrjDataBaseENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UserDefaPrjDataBaseEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserDefaPrjDataBaseENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrUserDefaPrjDataBaseObjLst = await UserDefaPrjDataBase_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrUserDefaPrjDataBaseExObjLst = arrUserDefaPrjDataBaseObjLst.map(
    UserDefaPrjDataBaseEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUserDefaPrjDataBaseEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrUserDefaPrjDataBaseExObjLst) {
      await UserDefaPrjDataBaseEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUserDefaPrjDataBaseExObjLst.length == 0) return arrUserDefaPrjDataBaseExObjLst;
  let arrUserDefaPrjDataBaseSel: Array<clsUserDefaPrjDataBaseENEx> = arrUserDefaPrjDataBaseExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserDefaPrjDataBaseSel = arrUserDefaPrjDataBaseSel.sort(
        UserDefaPrjDataBaseEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserDefaPrjDataBaseSel = arrUserDefaPrjDataBaseSel.sort(objPagerPara.sortFun);
    }

    return arrUserDefaPrjDataBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userDefaPrjDataBaseEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserDefaPrjDataBaseENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserDefaPrjDataBaseEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return UserDefaPrjDataBase_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return UserDefaPrjDataBase_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-12-16
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function UserDefaPrjDataBaseEx_FuncMapByFldName(
  strFldName: string,
  objUserDefaPrjDataBaseEx: clsUserDefaPrjDataBaseENEx,
) {
  const strThisFuncName = UserDefaPrjDataBaseEx_FuncMapByFldName.name;
  console.log(objUserDefaPrjDataBaseEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsUserDefaPrjDataBaseEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 为工程和用户设置数据库Id
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strUserId: 用户Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @returns 获取的相应对象列表
 */
export async function UserDefaPrjDataBaseEx_SetPrjDataBaseIdByPrjIdAndUserId(
  strPrjId: string,
  strUserId: string,
  strPrjDataBaseId: string,
): Promise<boolean> {
  const strThisFuncName = UserDefaPrjDataBaseEx_SetPrjDataBaseIdByPrjIdAndUserId.name;
  const strAction = 'SetPrjDataBaseIdByPrjIdAndUserId';
  const strUrl = UserDefaPrjDataBaseEx_GetWebApiUrl(userDefaPrjDataBaseExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strUserId,
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
        userDefaPrjDataBaseEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userDefaPrjDataBaseEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function UserDefaPrjDataBaseEx_GetObjByPrjIdAndUserId(
  strPrjId: string,
  strUserId: string,
): Promise<clsUserDefaPrjDataBaseEN | null> {
  const strCondition = `prjId='${strPrjId}' And userId='${strUserId}'`;
  const objUserDefaPrjDataBaseEN = await UserDefaPrjDataBase_GetFirstObjAsync(strCondition);
  return objUserDefaPrjDataBaseEN;
}
