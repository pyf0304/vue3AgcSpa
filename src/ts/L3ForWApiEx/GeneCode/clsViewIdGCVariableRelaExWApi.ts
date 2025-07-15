/**
 * 界面变量关系(ViewIdGCVariableRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年05月24日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsViewIdGCVariableRelaENEx } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaENEx';
import {
  ViewIdGCVariableRela_GetObjLstAsync,
  ViewIdGCVariableRela_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsViewIdGCVariableRelaWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { GCVariable_func, GCVariable_funcKey } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
import {
  GCVariableType_func,
  GCVariableType_funcKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
import {
  RetrievalMethod_func,
  RetrievalMethod_funcKey,
} from '@/ts/L3ForWApi/SysPara/clsRetrievalMethodWApi';
import { clsRetrievalMethodEN } from '@/ts/L0Entity/SysPara/clsRetrievalMethodEN';
import { ViewInfo_func, ViewInfo_funcKey } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { clsViewIdGCVariableRelaEN } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { PrjId_Session } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';

export const viewIdGCVariableRelaEx_Controller = 'ViewIdGCVariableRelaExApi';
export const viewIdGCVariableRelaEx_ConstructorName = 'viewIdGCVariableRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ViewIdGCVariableRelaEx_GetWebApiUrl(
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
 * @param objViewIdGCVariableRelaENS:源对象
 * @returns 目标对象=>clsViewIdGCVariableRelaEN:objViewIdGCVariableRelaENT
 **/
export function ViewIdGCVariableRelaEx_CopyToEx(
  objViewIdGCVariableRelaENS: clsViewIdGCVariableRelaEN,
): clsViewIdGCVariableRelaENEx {
  const strThisFuncName = ViewIdGCVariableRelaEx_CopyToEx.name;
  const objViewIdGCVariableRelaENT = new clsViewIdGCVariableRelaENEx();
  try {
    ObjectAssign(objViewIdGCVariableRelaENT, objViewIdGCVariableRelaENS);
    return objViewIdGCVariableRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewIdGCVariableRelaENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewIdGCVariableRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewIdGCVariableRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrViewIdGCVariableRelaObjLst = await ViewIdGCVariableRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrViewIdGCVariableRelaExObjLst = arrViewIdGCVariableRelaObjLst.map(
    ViewIdGCVariableRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewIdGCVariableRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrViewIdGCVariableRelaExObjLst) {
      await ViewIdGCVariableRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrViewIdGCVariableRelaExObjLst.length == 0) return arrViewIdGCVariableRelaExObjLst;
  let arrViewIdGCVariableRelaSel: Array<clsViewIdGCVariableRelaENEx> =
    arrViewIdGCVariableRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewIdGCVariableRelaSel = arrViewIdGCVariableRelaSel.sort(
        ViewIdGCVariableRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewIdGCVariableRelaSel = arrViewIdGCVariableRelaSel.sort(objPagerPara.sortFun);
    }

    return arrViewIdGCVariableRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewIdGCVariableRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRelaEx_FuncMapVarName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapVarName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.varName) == true) {
      const GCVariableVarId = objViewIdGCVariableRela.varId;
      const GCVariableVarName = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarName,
        GCVariableVarId,
      );
      objViewIdGCVariableRela.varName = GCVariableVarName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000306)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRelaEx_FuncMapVarTypeName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapVarTypeName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.varTypeName) == true) {
      const GCVariableVarId = objViewIdGCVariableRela.varId;
      const GCVariableVarTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarTypeId,
        GCVariableVarId,
      );
      const GCVariableTypeVarTypeId = GCVariableVarTypeId;
      const GCVariableTypeVarTypeName = await GCVariableType_func(
        clsGCVariableTypeEN.con_VarTypeId,
        clsGCVariableTypeEN.con_VarTypeName,
        GCVariableTypeVarTypeId,
      );
      objViewIdGCVariableRela.varTypeName = GCVariableTypeVarTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRelaEx_FuncMapRetrievalMethodName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapRetrievalMethodName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.retrievalMethodName) == true) {
      const RetrievalMethodRetrievalMethodId = objViewIdGCVariableRela.retrievalMethodId;
      const RetrievalMethodRetrievalMethodName = await RetrievalMethod_func(
        clsRetrievalMethodEN.con_RetrievalMethodId,
        clsRetrievalMethodEN.con_RetrievalMethodName,
        RetrievalMethodRetrievalMethodId,
      );
      objViewIdGCVariableRela.retrievalMethodName = RetrievalMethodRetrievalMethodName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000529)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRelaEx_FuncMapViewName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapViewName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.viewName) == true) {
      const ViewInfoViewId = objViewIdGCVariableRela.viewId;
      const ViewInfoViewName = await ViewInfo_func(
        clsViewInfoEN.con_ViewId,
        clsViewInfoEN.con_ViewName,
        ViewInfoViewId,
        PrjId_Session.value,
      );
      objViewIdGCVariableRela.viewName = ViewInfoViewName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000343)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-05-24
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewIdGCVariableRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewIdGCVariableRelaENEx.con_VarName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return a.varName.localeCompare(b.varName);
        };
      case clsViewIdGCVariableRelaENEx.con_VarTypeName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return a.varTypeName.localeCompare(b.varTypeName);
        };
      case clsViewIdGCVariableRelaENEx.con_RetrievalMethodName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return a.retrievalMethodName.localeCompare(b.retrievalMethodName);
        };
      case clsViewIdGCVariableRelaENEx.con_ViewName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return a.viewName.localeCompare(b.viewName);
        };
      default:
        return ViewIdGCVariableRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewIdGCVariableRelaENEx.con_VarName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return b.varName.localeCompare(a.varName);
        };
      case clsViewIdGCVariableRelaENEx.con_VarTypeName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return b.varTypeName.localeCompare(a.varTypeName);
        };
      case clsViewIdGCVariableRelaENEx.con_RetrievalMethodName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return b.retrievalMethodName.localeCompare(a.retrievalMethodName);
        };
      case clsViewIdGCVariableRelaENEx.con_ViewName:
        return (a: clsViewIdGCVariableRelaENEx, b: clsViewIdGCVariableRelaENEx) => {
          return b.viewName.localeCompare(a.viewName);
        };
      default:
        return ViewIdGCVariableRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-05-24
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ViewIdGCVariableRelaEx_FuncMapByFldName(
  strFldName: string,
  objViewIdGCVariableRelaEx: clsViewIdGCVariableRelaENEx,
) {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsViewIdGCVariableRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewIdGCVariableRelaENEx.con_VarName:
      return ViewIdGCVariableRelaEx_FuncMapVarName(objViewIdGCVariableRelaEx);
    case clsViewIdGCVariableRelaENEx.con_VarTypeName:
      return ViewIdGCVariableRelaEx_FuncMapVarTypeName(objViewIdGCVariableRelaEx);
    case clsViewIdGCVariableRelaENEx.con_RetrievalMethodName:
      return ViewIdGCVariableRelaEx_FuncMapRetrievalMethodName(objViewIdGCVariableRelaEx);
    case clsViewIdGCVariableRelaENEx.con_ViewName:
      return ViewIdGCVariableRelaEx_FuncMapViewName(objViewIdGCVariableRelaEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRelaEx_FuncMapKeyVarName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapKeyVarName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.varName) == true) return [];
    const GCVariableVarName = objViewIdGCVariableRela.varName;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_VarName,
      GCVariableVarName,

      enumComparisonOp.Like_03,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000306)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRelaEx_FuncMapKeyVarTypeName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapKeyVarTypeName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.varTypeName) == true) return [];
    const GCVariableTypeVarTypeName = objViewIdGCVariableRela.varTypeName;
    const arrVarTypeId = await GCVariableType_funcKey(
      clsGCVariableTypeEN.con_VarTypeName,
      GCVariableTypeVarTypeName,
      enumComparisonOp.Like_03,
    );
    const strVarTypeIdLst = arrVarTypeId;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_VarTypeId,
      strVarTypeIdLst,

      enumComparisonOp.In_04,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRelaEx_FuncMapKeyRetrievalMethodName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapKeyRetrievalMethodName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.retrievalMethodName) == true) return [];
    const RetrievalMethodRetrievalMethodName = objViewIdGCVariableRela.retrievalMethodName;
    const arrRetrievalMethodId = await RetrievalMethod_funcKey(
      clsRetrievalMethodEN.con_RetrievalMethodName,
      RetrievalMethodRetrievalMethodName,
      enumComparisonOp.Like_03,
    );
    return arrRetrievalMethodId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000529)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objViewIdGCVariableRelaS:源对象
 **/
export async function ViewIdGCVariableRelaEx_FuncMapKeyViewName(
  objViewIdGCVariableRela: clsViewIdGCVariableRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewIdGCVariableRelaEx_FuncMapKeyViewName.name;
  try {
    if (IsNullOrEmpty(objViewIdGCVariableRela.viewName) == true) return [];
    const ViewInfoViewName = objViewIdGCVariableRela.viewName;
    const arrViewId = await ViewInfo_funcKey(
      clsViewInfoEN.con_ViewName,
      ViewInfoViewName,
      enumComparisonOp.Like_03,
      PrjId_Session.value,
    );
    return arrViewId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000343)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewIdGCVariableRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 获取界面变量
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strViewId: 界面Id
 * @param strPrjId: 工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function ViewIdGCVariableRelaEx_GetViewVar(
  strViewId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = ViewIdGCVariableRelaEx_GetViewVar.name;
  const strAction = 'GetViewVar';
  const strUrl = ViewIdGCVariableRelaEx_GetWebApiUrl(viewIdGCVariableRelaEx_Controller, strAction);
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
        viewIdGCVariableRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewIdGCVariableRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
