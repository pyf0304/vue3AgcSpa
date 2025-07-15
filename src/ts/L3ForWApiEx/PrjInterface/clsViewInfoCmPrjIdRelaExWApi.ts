/**
 * 界面CmPrjId关系(ViewInfoCmPrjIdRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年03月01日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import axios from 'axios';
// import $ from 'jquery';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsViewInfoCmPrjIdRelaENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaENEx';
import {
  ViewInfoCmPrjIdRela_GetObjLstAsync,
  ViewInfoCmPrjIdRela_SortFunByKey,
} from '@/ts/L3ForWApi/PrjInterface/clsViewInfoCmPrjIdRelaWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const viewInfoCmPrjIdRelaEx_Controller = 'ViewInfoCmPrjIdRelaExApi';
export const viewInfoCmPrjIdRelaEx_ConstructorName = 'viewInfoCmPrjIdRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ViewInfoCmPrjIdRelaEx_GetWebApiUrl(
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objViewInfoCmPrjIdRelaENS:源对象
 * @returns 目标对象=>clsViewInfoCmPrjIdRelaEN:objViewInfoCmPrjIdRelaENT
 **/
export function ViewInfoCmPrjIdRelaEx_CopyToEx(
  objViewInfoCmPrjIdRelaENS: clsViewInfoCmPrjIdRelaEN,
): clsViewInfoCmPrjIdRelaENEx {
  const strThisFuncName = ViewInfoCmPrjIdRelaEx_CopyToEx.name;
  const objViewInfoCmPrjIdRelaENT = new clsViewInfoCmPrjIdRelaENEx();
  try {
    ObjectAssign(objViewInfoCmPrjIdRelaENT, objViewInfoCmPrjIdRelaENS);
    return objViewInfoCmPrjIdRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfoCmPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewInfoCmPrjIdRelaENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewInfoCmPrjIdRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewInfoCmPrjIdRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrViewInfoCmPrjIdRelaObjLst = await ViewInfoCmPrjIdRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrViewInfoCmPrjIdRelaExObjLst = arrViewInfoCmPrjIdRelaObjLst.map(
    ViewInfoCmPrjIdRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewInfoCmPrjIdRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrViewInfoCmPrjIdRelaExObjLst) {
      await ViewInfoCmPrjIdRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrViewInfoCmPrjIdRelaExObjLst.length == 0) return arrViewInfoCmPrjIdRelaExObjLst;
  let arrViewInfoCmPrjIdRela_Sel: Array<clsViewInfoCmPrjIdRelaENEx> =
    arrViewInfoCmPrjIdRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewInfoCmPrjIdRela_Sel = arrViewInfoCmPrjIdRela_Sel.sort(
        ViewInfoCmPrjIdRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrViewInfoCmPrjIdRela_Sel = arrViewInfoCmPrjIdRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrViewInfoCmPrjIdRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewInfoCmPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewInfoCmPrjIdRelaENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-03-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewInfoCmPrjIdRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ViewInfoCmPrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ViewInfoCmPrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-03-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ViewInfoCmPrjIdRelaEx_FuncMapByFldName(
  strFldName: string,
  objViewInfoCmPrjIdRelaEx: clsViewInfoCmPrjIdRelaENEx,
) {
  const strThisFuncName = ViewInfoCmPrjIdRelaEx_FuncMapByFldName.name;
  console.log(objViewInfoCmPrjIdRelaEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsViewInfoCmPrjIdRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 建立Cm工程与表的关系
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strViewId: 表Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function ViewInfoCmPrjIdRelaEx_CreateRela(
  strCmPrjId: string,
  strViewId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = ViewInfoCmPrjIdRelaEx_CreateRela.name;
  const strAction = 'CreateRela';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRelaEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strCmPrjId', strCmPrjId);
  // mapParam.add('strViewId', strViewId);
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
      strViewId,
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
        viewInfoCmPrjIdRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRelaEx_ConstructorName,
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
 * 删除Cm工程与表的关系
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strViewId: 表Id
 * @returns 获取的相应对象列表
 */
export async function ViewInfoCmPrjIdRelaEx_DelRela(
  strCmPrjId: string,
  strViewId: string,
): Promise<number> {
  const strThisFuncName = ViewInfoCmPrjIdRelaEx_DelRela.name;

  const strAction = 'DelRela';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRelaEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strCmPrjId', strCmPrjId);
  // mapParam.add('strViewId', strViewId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
      strViewId,
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
        viewInfoCmPrjIdRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
