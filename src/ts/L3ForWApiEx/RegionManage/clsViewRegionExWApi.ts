/**
 * 类名:clsViewRegionExWApi
 * 表名:ViewRegion(00050099)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/03 18:01:12
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面区域(ViewRegion)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月03日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import {
  ObjectAssign,
  GetSortExpressInfo,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  ViewRegion_GetObjLstAsync,
  ViewRegion_SortFunByKey,
  ViewRegion_GetFldValueAsync,
  ViewRegion_GetObjLstByPagerAsync,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
import { RegionType_func, RegionType_funcKey } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import {
  GCContainerType_func,
  GCContainerType_funcKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCContainerTypeWApi';
import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
import {
  PageDispMode_func,
  PageDispMode_funcKey,
} from '@/ts/L3ForWApi/PrjMenu/clsPageDispModeWApi';
import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { InOutType_func, InOutType_funcKey } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
import {
  vPrjTab_Sim_func,
  vPrjTab_Sim_funcKey,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ViewInfoEx_getRelaTabId4InOut } from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import {
  ViewRegionRelaEx_GetReferNumByRegionIdCache,
  ViewRegionRelaEx_GetRegionIdLstByViewId,
  ViewRegionRelaEx_GetRegionIdLstByViewIdCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { ViewRegionRela_GetObjLstCache } from '@/ts/L3ForWApi/RegionManage/clsViewRegionRelaWApi';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { clsViewRegionCmPrjIdRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionCmPrjIdRelaEN';
import { clsvViewRegionReferNumEN } from '@/ts/L0Entity/RegionManage/clsvViewRegionReferNumEN';
import { vViewRegionReferNum_func } from '@/ts/L3ForWApi/RegionManage/clsvViewRegionReferNumWApi';

export const viewRegionExController = 'ViewRegionExApi';
export const viewRegionEx_ConstructorName = 'viewRegionEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ViewRegionEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objViewRegionENS:源对象
 * @returns 目标对象=>clsViewRegionEN:objViewRegionENT
 **/
export function ViewRegionEx_CopyToEx(objViewRegionENS: clsViewRegionEN): clsViewRegionENEx {
  const strThisFuncName = ViewRegionEx_CopyToEx.name;
  const objViewRegionENT = new clsViewRegionENEx();
  try {
    ObjectAssign(objViewRegionENT, objViewRegionENS);
    return objViewRegionENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewRegionENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewRegionEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewRegionENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrViewRegionObjLst = await ViewRegion_GetObjLstByPagerAsync(objPagerPara);
  const arrViewRegionExObjLst = arrViewRegionObjLst.map(ViewRegionEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewRegionEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrViewRegionExObjLst) {
      await ViewRegionEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrViewRegionExObjLst.length == 0) return arrViewRegionExObjLst;
  let arrViewRegionSel: Array<clsViewRegionENEx> = arrViewRegionExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewRegionSel = arrViewRegionSel.sort(ViewRegionEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewRegionSel = arrViewRegionSel.sort(objPagerPara.sortFun);
    }

    return arrViewRegionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapRegionTypeSimName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMapRegionTypeSimName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.regionTypeSimName) == true) {
      const RegionTypeRegionTypeId = objViewRegion.regionTypeId;
      const RegionTypeRegionTypeSimName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeSimName,
        RegionTypeRegionTypeId,
      );
      objViewRegion.regionTypeSimName = RegionTypeRegionTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000362)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapContainerTypeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMapContainerTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.containerTypeName) == true) {
      const GCContainerTypeContainerTypeId = objViewRegion.containerTypeId;
      const GCContainerTypeContainerTypeName = await GCContainerType_func(
        clsGCContainerTypeEN.con_ContainerTypeId,
        clsGCContainerTypeEN.con_ContainerTypeName,
        GCContainerTypeContainerTypeId,
      );
      objViewRegion.containerTypeName = GCContainerTypeContainerTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000363)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapPageDispModeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMapPageDispModeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.pageDispModeName) == true) {
      const PageDispModePageDispModeId = objViewRegion.pageDispModeId;
      const PageDispModePageDispModeName = await PageDispMode_func(
        clsPageDispModeEN.con_PageDispModeId,
        clsPageDispModeEN.con_PageDispModeName,
        PageDispModePageDispModeId,
      );
      objViewRegion.pageDispModeName = PageDispModePageDispModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000364)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapInOutTypeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMapInOutTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.inOutTypeName) == true) {
      const INOUTTypeINOUTTypeId = objViewRegion.inOutTypeId;
      const INOUTTypeINOUTTypeName = await InOutType_func(
        clsInOutTypeEN.con_InOutTypeId,
        clsInOutTypeEN.con_InOutTypeName,
        INOUTTypeINOUTTypeId,
      );
      objViewRegion.inOutTypeName = INOUTTypeINOUTTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000345)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapTabName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.tabName) == true) {
      const vPrjTabSimTabId = objViewRegion.tabId;
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objViewRegion.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
// export async function ViewRegionEx_FuncMapApplicationTypeSimName(objViewRegion: clsViewRegionENEx) {
//   const strThisFuncName = ViewRegionEx_FuncMapApplicationTypeSimName.name;
//   try {
//     if (IsNullOrEmpty(objViewRegion.applicationTypeSimName) == true) {
//       const ApplicationTypeApplicationTypeId = objViewRegion.applicationTypeId;
//       const ApplicationTypeApplicationTypeSimName = await ApplicationType_func(
//         clsApplicationTypeEN.con_ApplicationTypeId,
//         clsApplicationTypeEN.con_ApplicationTypeSimName,
//         ApplicationTypeApplicationTypeId,
//       );
//       objViewRegion.applicationTypeSimName = ApplicationTypeApplicationTypeSimName;
//     }
//   } catch (e) {
//     const strMsg = Format(
//       '(errid:Watl000287)函数映射表对象数据出错,{0}.(in {1}.{2})',
//       e,
//       viewRegionEx_ConstructorName,
//       strThisFuncName,
//     );
//     console.error(strMsg);
//     alert(strMsg);
//   }
// }

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapKeyRegionTypeSimName(
  objViewRegion: clsViewRegionENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewRegionEx_FuncMapKeyRegionTypeSimName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.regionTypeSimName) == true) return [];
    const RegionTypeRegionTypeSimName = objViewRegion.regionTypeSimName;
    const arrRegionTypeId = await RegionType_funcKey(
      clsRegionTypeEN.con_RegionTypeSimName,
      RegionTypeRegionTypeSimName,
      enumComparisonOp.Like_03,
    );
    return arrRegionTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000362)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
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
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapKeyContainerTypeName(
  objViewRegion: clsViewRegionENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewRegionEx_FuncMapKeyContainerTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.containerTypeName) == true) return [];
    const GCContainerTypeContainerTypeName = objViewRegion.containerTypeName;
    const arrContainerTypeId = await GCContainerType_funcKey(
      clsGCContainerTypeEN.con_ContainerTypeName,
      GCContainerTypeContainerTypeName,
      enumComparisonOp.Like_03,
    );
    return arrContainerTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000363)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
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
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapKeyPageDispModeName(
  objViewRegion: clsViewRegionENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewRegionEx_FuncMapKeyPageDispModeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.pageDispModeName) == true) return [];
    const PageDispModePageDispModeName = objViewRegion.pageDispModeName;
    const arrPageDispModeId = await PageDispMode_funcKey(
      clsPageDispModeEN.con_PageDispModeName,
      PageDispModePageDispModeName,
      enumComparisonOp.Like_03,
    );
    return arrPageDispModeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000364)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
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
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapKeyInOutTypeName(
  objViewRegion: clsViewRegionENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewRegionEx_FuncMapKeyInOutTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.inOutTypeName) == true) return [];
    const INOUTTypeINOUTTypeName = objViewRegion.inOutTypeName;
    const arrInOutTypeId = await InOutType_funcKey(
      clsInOutTypeEN.con_InOutTypeName,
      INOUTTypeINOUTTypeName,
      enumComparisonOp.Like_03,
    );
    return arrInOutTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000345)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
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
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapKeyTabName(
  objViewRegion: clsViewRegionENEx,
): Promise<Array<string>> {
  const strThisFuncName = ViewRegionEx_FuncMapKeyTabName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.tabName) == true) return [];
    const vPrjTabSimTabName = objViewRegion.tabName;
    const arrTabId = await vPrjTab_Sim_funcKey(
      clsvPrjTab_SimEN.con_TabName,
      vPrjTabSimTabName,
      clsPrivateSessionStorage.cmPrjId,
      enumComparisonOp.Like_03,
    );
    return arrTabId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 为界面的区域重命名同时重命名类名
 * @param strRegionId 区域Id
 * @param strViewId 界面Id
 * @param strNewRegionName 新的区域名
 * @param strOpUserId 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function ViewRegionEx_Rename(
  strRegionId: string,
  strViewId: string,
  strNewRegionName: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = ViewRegionEx_Rename.name;
  const strAction = 'Rename';
  const strUrl = GetWebApiUrl(viewRegionExController, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strRegionId', strRegionId);
  // mapParam.add('strViewId', strViewId);
  // mapParam.add('strNewRegionName', strNewRegionName);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
      strViewId,
      strNewRegionName,
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
        viewRegionEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewRegionEx_ConstructorName,
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
export function ViewRegionEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewRegionENEx.con_RegionTypeSimName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.regionTypeSimName.localeCompare(b.regionTypeSimName);
        };
      case clsViewRegionENEx.con_ContainerTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.containerTypeName.localeCompare(b.containerTypeName);
        };
      case clsViewRegionENEx.con_PageDispModeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.pageDispModeName.localeCompare(b.pageDispModeName);
        };
      case clsViewRegionENEx.con_InOutTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.inOutTypeName.localeCompare(b.inOutTypeName);
        };
      case clsViewRegionENEx.con_TabName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      //case clsViewRegionENEx.con_CmPrjName:
      //    return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
      //        return a.cmPrjName.localeCompare(b.cmPrjName);
      //    }
      // case clsViewRegionENEx.con_ApplicationTypeSimName:
      //   return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
      //     return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
      //   };
      case clsViewRegionENEx.con_RegionTypeOrderNum:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.regionTypeOrderNum - b.regionTypeOrderNum;
        };

      case clsViewRegionENEx.con_ReferNum:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.referNum - b.referNum;
        };
      default:
        return ViewRegion_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewRegionENEx.con_RegionTypeSimName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.regionTypeSimName.localeCompare(a.regionTypeSimName);
        };
      case clsViewRegionENEx.con_ContainerTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.containerTypeName.localeCompare(a.containerTypeName);
        };
      case clsViewRegionENEx.con_PageDispModeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.pageDispModeName.localeCompare(a.pageDispModeName);
        };
      case clsViewRegionENEx.con_InOutTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.inOutTypeName.localeCompare(a.inOutTypeName);
        };
      case clsViewRegionENEx.con_TabName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      //case clsViewRegionENEx.con_CmPrjName:
      //    return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
      //        return b.cmPrjName.localeCompare(a.cmPrjName);
      //    }
      // case clsViewRegionENEx.con_ApplicationTypeSimName:
      //   return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
      //     return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
      //   };
      case clsViewRegionENEx.con_RegionTypeOrderNum:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.regionTypeOrderNum - a.regionTypeOrderNum;
        };
      case clsViewRegionENEx.con_ReferNum:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.referNum - a.referNum;
        };
      default:
        return ViewRegion_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 为界面的各个区域设置类名
 * @param strViewId 界面Id
 * @returns 获取的相应对象列表
 */
export async function ViewRegionEx_SetClassName4ViewInfo(strViewId: string): Promise<boolean> {
  const strThisFuncName = ViewRegionEx_SetClassName4ViewInfo.name;
  const strAction = 'SetClassName4ViewInfo';
  const strUrl = GetWebApiUrl(viewRegionExController, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strViewId', strViewId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
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
        viewRegionEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewRegionEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function ViewRegionEx_BindLst_RegionIdByViewIdEx(
  strDivName: HTMLDivElement,
  lstViewRegion: string,
  strViewId: string,
) {
  const viewRegionStore = useviewRegionStore();
  const objDdl = document.getElementById(lstViewRegion);
  if (objDdl == null) {
    const strMsg = `下拉框：${lstViewRegion} 不存在！(In BindLst_RegionIdByViewIdEx)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }

  const arrRegionId = await ViewRegionRelaEx_GetRegionIdLstByViewId(strViewId);

  const arrRelaTabId = await ViewInfoEx_getRelaTabId4InOut(strViewId);
  const arrViewRegion = await viewRegionStore.getObjENLst(arrRegionId);
  const arrViewRegion_TabId = await ViewRegionEx_GetObjLstByTabIdLst(arrRelaTabId);

  // const arrViewRegion_TabId = arrViewRegion.filter((x) => arrRelaTabId.indexOf(x.tabId) > -1);
  // arrViewRegion_TabId = arrViewRegion_TabId.filter(
  //   (x) => x.applicationTypeId == intApplicationTypeId,
  // );
  const arrViewRegion_TabId_Sel = arrViewRegion_TabId.filter(
    (x) => arrRegionId.indexOf(x.regionId) == -1,
  );
  if (arrViewRegion_TabId_Sel.length == 0) {
    alert(`界面:[${strViewId}]没有需要添加的界面区域！`);
  }
  BindDdl_ObjLstInDivObj(
    strDivName,
    lstViewRegion,
    arrViewRegion_TabId_Sel,
    clsViewRegionEN.con_RegionId,
    clsViewRegionEN.con_ClsName,
    '区域',
  );

  if (arrViewRegion.length == 0) return false;
  return true;
}

export async function ViewRegionEx_GetArrViewRegionByViewIdEx(
  strViewId: string,
): Promise<Array<clsViewRegionEN>> {
  const viewRegionStore = useviewRegionStore();
  const arrViewRegion0 = new Array<clsViewRegionEN>();
  const arrRegionId = await ViewRegionRelaEx_GetRegionIdLstByViewId(strViewId);

  const arrRelaTabId = await ViewInfoEx_getRelaTabId4InOut(strViewId);
  const arrViewRegion = await viewRegionStore.getObjENLst(arrRegionId);
  const arrViewRegion_TabId = await ViewRegionEx_GetObjLstByTabIdLst(arrRelaTabId);

  // const arrViewRegion_TabId = arrViewRegion.filter((x) => arrRelaTabId.indexOf(x.tabId) > -1);
  // arrViewRegion_TabId = arrViewRegion_TabId.filter(
  //   (x) => x.applicationTypeId == intApplicationTypeId,
  // );
  const arrViewRegion_TabId_Sel = arrViewRegion_TabId.filter(
    (x) => arrRegionId.indexOf(x.regionId) == -1,
  );
  if (arrViewRegion_TabId_Sel.length == 0) {
    alert(`界面:[${strViewId}]没有需要添加的界面区域！`);
  }

  const obj0 = new clsViewRegionEN();
  obj0.regionId = '0';
  obj0.regionName = '选界面区域...';
  arrViewRegion.push(obj0);
  arrViewRegion_TabId_Sel.forEach((x) => arrViewRegion0.push(x));
  return arrViewRegion0;
}

export function ViewRegionEx_SortFunByRegionTypeOrderNum(
  a: clsViewRegionENEx,
  b: clsViewRegionENEx,
): number {
  // const strThisFuncName = 'SortFunDefa';
  return a.regionTypeOrderNum - b.regionTypeOrderNum;
}

/**
 * 根据条件获取扩展对象列表
 * @param strViewId 界面Id
 * @param strCmPrjId Cm工程Id
 * @returns
 */
export async function ViewRegionEx_GetObjExLstByViewIdCache(strViewId: string, strCmPrjId: string) {
  //string strCondition = string.Format("{0}='{1}'", clsvViewRegionEN.con_ViewId, strViewId);
  const viewRegionStore = useviewRegionStore();
  const arrRegionId = await ViewRegionRelaEx_GetRegionIdLstByViewIdCache(strViewId, strCmPrjId);
  const arrObjLst = await viewRegionStore.getObjENLst(arrRegionId); // strCondition);
  const arrObjExLst = arrObjLst.map(ViewRegionEx_CopyToEx);

  return arrObjExLst;
}

export async function ViewRegionEx_GetObjLstByViewIdCache(
  strViewId: string,
  strCmPrjId: string,
): Promise<Array<clsViewRegionEN>> {
  const viewRegionStore = useviewRegionStore();
  const arrObjLstRelaCache: Array<clsViewRegionRelaEN> = await ViewRegionRela_GetObjLstCache(
    strCmPrjId,
  );

  const arrViewRegionObjLst_Sel1 = arrObjLstRelaCache.filter((x) => x.viewId == strViewId);
  const arrRegionId_Sel1: Array<string> = arrViewRegionObjLst_Sel1.map((x) => x.regionId);

  const arrViewRegionObjLst_Sel: Array<clsViewRegionEN> = await viewRegionStore.getObjENLst(
    arrRegionId_Sel1,
  );
  return arrViewRegionObjLst_Sel;
}

export async function ViewRegionEx_GetObjByRegionTypeIdAndViewIdCache(
  strViewId: string,
  strRegionTypeId: string,
  strCmPrjId: string,
): Promise<clsViewRegionEN> {
  const viewRegionStore = useviewRegionStore();
  const arrObjLstRelaCache: Array<clsViewRegionRelaEN> = await ViewRegionRela_GetObjLstCache(
    strCmPrjId,
  );

  const arrViewRegionObjLst_Sel1 = arrObjLstRelaCache.filter((x) => x.viewId == strViewId);
  const arrRegionId_Sel1: Array<string> = arrViewRegionObjLst_Sel1.map((x) => x.regionId);
  let arrViewRegionObjLst_Sel: Array<clsViewRegionEN> = await viewRegionStore.getObjENLst(
    arrRegionId_Sel1,
  );
  arrViewRegionObjLst_Sel = arrViewRegionObjLst_Sel.filter(
    (x) => x.regionTypeId == strRegionTypeId,
  );

  if (arrViewRegionObjLst_Sel.length == 0) {
    return new clsViewRegionEN();
  }
  return arrViewRegionObjLst_Sel[0];
}

/**
 * 根据界面Id和区域类型Id获取相关区域Id
 * @param strViewId
 * @param strRegionTypeId
 * @param strCmPrjId
 * @returns
 */
export async function ViewRegionEx_GetRegionIdByTypeCache(
  strViewId: string,
  strRegionTypeId: string,
  strCmPrjId: string,
) {
  const objViewRegionEN: clsViewRegionEN = await ViewRegionEx_GetObjByRegionTypeIdAndViewIdCache(
    strViewId,
    strRegionTypeId,
    strCmPrjId,
  );
  if (objViewRegionEN != null) return objViewRegionEN.regionId;

  return '';
}

export async function ViewRegionEx_GetTabIdByRegionIdCache(strRegionId: string): Promise<string> {
  const viewRegionStore = useviewRegionStore();
  const objViewRegion = await viewRegionStore.getObj(strRegionId);
  if (objViewRegion == null) return '';
  return objViewRegion.tabId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-04-17
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewRegionEx_SortFun_ByRegionName(a: clsViewRegionEN, b: clsViewRegionEN): number {
  // const strThisFuncName = 'ViewRegionEx_SortFun_ByRegionName';
  return a.regionName.localeCompare(b.regionName);
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strCmPrjId:CM工程Id
 */
export async function ViewRegionEx_BindDdl_RegionIdByCmPrjIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
) {
  // const strThisFuncName = 'ViewRegionEx_BindDdl_RegionIdByPrjIdInDivCache';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空！(In BindDdl_RegionIdByPrjIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format('缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！', strCmPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_RegionIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RegionIdByPrjIdInDivCache");
  const strWhere = `${clsViewRegionEN.con_RegionId} in (select ${clsViewRegionEN.con_RegionId} from ${clsViewRegionCmPrjIdRelaEN._CurrTabName} where ${clsViewRegionCmPrjIdRelaEN.con_CmPrjId}) = '${strCmPrjId}'`;
  let arrObjLst_Sel = await ViewRegion_GetObjLstAsync(strWhere);
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.sort(ViewRegionEx_SortFun_ByRegionName);
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsViewRegionEN.con_RegionId,
    clsViewRegionEN.con_RegionName,
    '界面区域',
  );
}

/**
 * 扩展删除一个界面区域
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strRegionId: 区域Id
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function ViewRegionEx_DeleteByRegionIdEx(
  strRegionId: string,
  strCmPrjId: string,
): Promise<boolean> {
  const strThisFuncName = ViewRegionEx_DeleteByRegionIdEx.name;
  const strAction = 'DeleteByRegionIdEx';
  const strUrl = GetWebApiUrl(viewRegionExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
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
        viewRegionEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        viewRegionEx_ConstructorName,
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
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ViewRegionEx_FuncMapByFldName(
  strFldName: string,
  objViewRegionEx: clsViewRegionENEx,
) {
  // console.log(objViewRegionEx);
  const strThisFuncName = ViewRegionEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsViewRegionEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    // case clsViewRegionENEx.con_ReferNum:
    //   return ViewRegionEx_FuncMap_ReferNum(objViewRegionEx);
    case clsViewRegionENEx.con_ReferNum:
      return ViewRegionEx_FuncMapReferNum(objViewRegionEx);
    case clsViewRegionENEx.con_FldCountInUse:
      return ViewRegionEx_FuncMap_FldCountInUse(objViewRegionEx);
    case clsViewRegionENEx.con_RegionTypeSimName:
      return ViewRegionEx_FuncMap_RegionTypeSimName(objViewRegionEx);
    case clsViewRegionENEx.con_ContainerTypeName:
      return ViewRegionEx_FuncMap_ContainerTypeName(objViewRegionEx);
    case clsViewRegionENEx.con_PageDispModeName:
      return ViewRegionEx_FuncMap_PageDispModeName(objViewRegionEx);
    case clsViewRegionENEx.con_InOutTypeName:
      return ViewRegionEx_FuncMap_InOutTypeName(objViewRegionEx);
    case clsViewRegionENEx.con_TabName:
      return ViewRegionEx_FuncMap_TabName(objViewRegionEx);

    // //case clsViewRegionENEx.con_CmPrjName:
    // //    return ViewRegionEx_FuncMap_CmPrjName(objViewRegionEx);
    // case clsViewRegionENEx.con_ApplicationTypeSimName:
    //   return ViewRegionEx_FuncMap_ApplicationTypeSimName(objViewRegionEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMap_RegionTypeSimName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMap_RegionTypeSimName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.regionTypeSimName) == true) {
      const RegionType_RegionTypeId = objViewRegion.regionTypeId;
      const RegionType_RegionTypeSimName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeSimName,
        RegionType_RegionTypeId,
      );
      objViewRegion.regionTypeSimName = RegionType_RegionTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000119)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMap_ContainerTypeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMap_ContainerTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.containerTypeName) == true) {
      const GCContainerType_ContainerTypeId = objViewRegion.containerTypeId;
      const GCContainerType_ContainerTypeName = await GCContainerType_func(
        clsGCContainerTypeEN.con_ContainerTypeId,
        clsGCContainerTypeEN.con_ContainerTypeName,
        GCContainerType_ContainerTypeId,
      );
      objViewRegion.containerTypeName = GCContainerType_ContainerTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000120)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMap_PageDispModeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMap_PageDispModeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.pageDispModeName) == true) {
      const PageDispMode_PageDispModeId = objViewRegion.pageDispModeId;
      const PageDispMode_PageDispModeName = await PageDispMode_func(
        clsPageDispModeEN.con_PageDispModeId,
        clsPageDispModeEN.con_PageDispModeName,
        PageDispMode_PageDispModeId,
      );
      objViewRegion.pageDispModeName = PageDispMode_PageDispModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000121)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMap_InOutTypeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMap_InOutTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.inOutTypeName) == true) {
      const InOutType_InOutTypeId = objViewRegion.inOutTypeId;
      const InOutType_InOutTypeName = await InOutType_func(
        clsInOutTypeEN.con_InOutTypeId,
        clsInOutTypeEN.con_InOutTypeName,
        InOutType_InOutTypeId,
      );
      objViewRegion.inOutTypeName = InOutType_InOutTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000122)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMap_ReferNum(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMap_ReferNum.name;
  try {
    if (objViewRegion.referNum == 0) {
      const intReferNum = await ViewRegionRelaEx_GetReferNumByRegionIdCache(
        objViewRegion.regionId,
        clsPrivateSessionStorage.cmPrjId,
      );
      objViewRegion.referNum = intReferNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000122)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMap_TabName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.tabName) == true) {
      const vPrjTab_Sim_TabId = objViewRegion.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objViewRegion.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
// // /**
// //  * 把一个扩展类的部分属性进行函数转换
// //  * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
// //  * @param objViewRegionS:源对象
// //  **/
// // //export async function ViewRegionEx_FuncMap_CmPrjName(objViewRegion: clsViewRegionENEx) {
// // //    const strThisFuncName = ViewRegionEx_FuncMap_CmPrjName.name;
// // //    try {
// // //        if (IsNullOrEmpty(objViewRegion.cmPrjName) == true) {
// // //            const CMProject_CMPrjId = clsPrivateSessionStorage.cmPrjId;
// // //            const CMProject_CMPrjName = await CMProject_func(clsCMProjectEN.con_CmPrjId, clsCMProjectEN.con_CmPrjName, CMProject_CMPrjId);
// // //            objViewRegion.cmPrjName = CMProject_CMPrjName;
// // //        }
// // //    }
// // //    catch (e) {
// // //        const strMsg = Format("(errid:Watl000113)函数映射表对象数据出错,{0}.(in {1}.{2})", e, viewRegionEx_ConstructorName, strThisFuncName);
// // //        console.error(strMsg);
// // //        alert(strMsg);
// // //    }
// // //}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
// export async function ViewRegionEx_FuncMap_ApplicationTypeSimNameBak(
//   objViewRegion: clsViewRegionENEx,
// ) {
//   const strThisFuncName = ViewRegionEx_FuncMap_ApplicationTypeSimName.name;
//   try {
//     if (IsNullOrEmpty(objViewRegion.applicationTypeSimName) == true) {
//       const ApplicationType_ApplicationTypeId = objViewRegion.applicationTypeId;
//       const ApplicationType_ApplicationTypeSimName = await ApplicationType_func(
//         clsApplicationTypeEN.con_ApplicationTypeId,
//         clsApplicationTypeEN.con_ApplicationTypeSimName,
//         ApplicationType_ApplicationTypeId.toString(),
//       );
//       objViewRegion.applicationTypeSimName = ApplicationType_ApplicationTypeSimName;
//     }
//   } catch (e) {
//     const strMsg = Format(
//       '(errid:Watl000074)函数映射表对象数据出错,{0}.(in {1}.{2})',
//       e,
//       viewRegionEx_ConstructorName,
//       strThisFuncName,
//     );
//     console.error(strMsg);
//     alert(strMsg);
//   }
// }

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMap_FldCountInUse(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMap_FldCountInUse.name;
  try {
    if (objViewRegion.fldCountInUse == 0) {
      let intFldCountInUse = 0;
      switch (objViewRegion.regionTypeId) {
        // case enumRegionType.DetailRegion_0006:
        //   intFldCountInUse = await DetailRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
        //     objViewRegion.regionId,
        //   );
        //   break;
        // case enumRegionType.EditRegion_0003:
        //   intFldCountInUse = await EditRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
        //     objViewRegion.regionId,
        //   );
        //   break;
        // case enumRegionType.ExcelExportRegion_0007:
        //   intFldCountInUse = await ExcelExportRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
        //     objViewRegion.regionId,
        //   );
        //   break;
        // case enumRegionType.FeatureRegion_0008:
        //   intFldCountInUse = await FeatureRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
        //     objViewRegion.regionId,
        //   );
        //   break;
        // case enumRegionType.ListRegion_0002:
        //   intFldCountInUse = await DGRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
        //     objViewRegion.regionId,
        //   );
        //   break;
        // case enumRegionType.QueryRegion_0001:
        //   intFldCountInUse = await QryRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
        //     objViewRegion.regionId,
        //   );
        //   break;
        default:
          intFldCountInUse = -1;
          break;
      }
      objViewRegion.fldCountInUse = intFldCountInUse;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000122)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function ViewRegionEx_GetRegionIdLstByPrjId(strPrjId: string): Promise<Array<string>> {
  const strWhere = `${clsViewRegionEN.con_PrjId} = '${strPrjId}'`;
  const arrRegionId = await ViewRegion_GetFldValueAsync(clsViewRegionEN.con_RegionId, strWhere);

  return arrRegionId;
}

export async function ViewRegionEx_GetObjExLstByPrjId(
  strWhereCond,
): Promise<Array<clsViewRegionENEx>> {
  // const strThisFuncName = 'GetObjExLstByPrjId';
  const arrViewRegionObjLst = await ViewRegion_GetObjLstAsync(strWhereCond);
  const arrViewRegionExObjLst = arrViewRegionObjLst.map(ViewRegionEx_CopyToEx);
  return arrViewRegionExObjLst;
}

export async function ViewRegionEx_GetObjLstByTabId(
  strTabId: string,
): Promise<Array<clsViewRegionEN>> {
  const strWhere = `${clsViewRegionEN.con_TabId}='${strTabId}'`;
  const arrObjLst: Array<clsViewRegionEN> = await ViewRegion_GetObjLstAsync(strWhere);
  return arrObjLst;
}

export async function ViewRegionEx_GetObjLstByTabIdLst(
  arrTabId: Array<string>,
): Promise<Array<clsViewRegionEN>> {
  const strTabIdLst = arrTabId.join(',');
  const strWhere = `${clsViewRegionEN.con_TabId} in (${strTabIdLst})`;
  const arrObjLst: Array<clsViewRegionEN> = await ViewRegion_GetObjLstAsync(strWhere);
  return arrObjLst;
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegionEx_FuncMapReferNum(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegionEx_FuncMapReferNum.name;
  try {
    if (objViewRegion.referNum == 0) {
      const vViewRegionReferNumRegionId = objViewRegion.regionId;
      const vViewRegionReferNumReferNum = await vViewRegionReferNum_func(
        clsvViewRegionReferNumEN.con_RegionId,
        clsvViewRegionReferNumEN.con_ReferNum,
        vViewRegionReferNumRegionId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objViewRegion.referNum = vViewRegionReferNumReferNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000971)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
