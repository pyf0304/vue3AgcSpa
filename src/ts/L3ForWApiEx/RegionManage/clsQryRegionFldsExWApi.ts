import axios from 'axios';
import { PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache } from '../Table_Field/clsPrjTabFldExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
import { clsQryRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx';
import {
  QryRegionFlds_GetObjBymIdCache,
  QryRegionFlds_GetObjLstCache,
  QryRegionFlds_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  QryRegionFldsEx_CopyToEx,
  QryRegionFldsEx_FuncMap_TabId,
  QryRegionFldsEx_FuncMap_TabName,
} from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi2';
import { QryRegionFldsEx_GetObjLstByRegionIdCache4InUseEx } from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi3';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';

import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

export const qryRegionFldsEx_Controller = 'QryRegionFldsExApi';
export const qryRegionFldsEx_ConstructorName = 'qryRegionFldsEx';

export async function QryRegionFldsEx_GetObjLstByRegionIdCacheEx(strRegionId: string) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsQryRegionFldsEN> = await QryRegionFlds_GetObjLstCache(strRegionId);

  const arrQryRegionFldsObjLst_Sel1: Array<clsQryRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId)
    .sort((x) => x.seqNum);
  return arrQryRegionFldsObjLst_Sel1;
}

export async function QryRegionFldsEx_GetFldCountInUseByRegionIdCacheEx(
  strRegionId: string,
): Promise<number> {
  const arrObjList: Array<clsQryRegionFldsEN> =
    await QryRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);
  const intFldCount = arrObjList.filter((x) => x.inUse == true).length;
  return intFldCount;
}

export async function QryRegionFldsEx_GetRecCountByCondInUseCache(
  strRegionId: string,
): Promise<number> {
  const objQryRegionFlds = new ConditionCollection();
  objQryRegionFlds.SetCondFldValue(clsQryRegionFldsEN.con_InUse, true, '=');
  objQryRegionFlds.SetCondFldValue(clsQryRegionFldsEN.con_RegionId, strRegionId, '=');
  const intRecNum = await QryRegionFlds_GetRecCountByCondCache(objQryRegionFlds, strRegionId);
  return intRecNum;
}

/**
 * 检查区域控件，并回溯修改界面的错误信息
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strRegionId: 区域Id
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function QryRegionFldsEx_CheckRegionFldsUp(
  strRegionId: string,
  strViewId: string,
  strCmPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = QryRegionFldsEx_CheckRegionFldsUp.name;
  const strAction = 'CheckRegionFldsUp';
  const strUrl = QryRegionFldsEx_GetWebApiUrl(qryRegionFldsEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
      strViewId,
      strCmPrjId,
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
        qryRegionFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qryRegionFldsEx_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QryRegionFldsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMap_DnPathIdEx(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMap_DnPathIdEx.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.dnPathId) == true) {
      if (IsNullOrEmpty(objQryRegionFlds.dnPathId) == true) {
        await QryRegionFldsEx_FuncMap_TabId(objQryRegionFlds);
      }
      const strDnPathIdEx = await PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache(
        objQryRegionFlds.tabId,
        objQryRegionFlds.outFldId,
      );

      objQryRegionFlds.dnPathIdEx = strDnPathIdEx;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000250)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function QryRegionFldsEx_GetObjExBymIdCache(lngmId: number, strRegionId: string) {
  //初始化列表缓存

  const objQryRegionFlds = await QryRegionFlds_GetObjBymIdCache(lngmId, strRegionId);
  if (objQryRegionFlds == null) return null;
  const objQryRegionFldsEx = QryRegionFldsEx_CopyToEx(objQryRegionFlds);
  await QryRegionFldsEx_FuncMap_TabId(objQryRegionFldsEx);
  await QryRegionFldsEx_FuncMap_DnPathIdEx(objQryRegionFldsEx);
  await QryRegionFldsEx_FuncMap_TabName(objQryRegionFldsEx);
  return objQryRegionFldsEx;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMapTabName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMapTabName.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objQryRegionFlds.tabName) == true) {
      const ViewRegionRegionId = objQryRegionFlds.regionId;
      const ViewRegionTabId = await viewRegionStore.getTabId(ViewRegionRegionId);
      const vPrjTabSimTabId = ViewRegionTabId;
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objQryRegionFlds.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMapFldName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.fldName) == true) {
      // const vFieldTabSimFldId = objQryRegionFlds.fldId;
      // const vFieldTabSimFldName = await vFieldTab_Sim_func(
      //   clsvFieldTab_SimEN.con_FldId,
      //   clsvFieldTab_SimEN.con_FldName,
      //   vFieldTabSimFldId,
      //   objQryRegionFlds.prjId,
      // );
      // objQryRegionFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000336)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMapCtlTypeName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.ctlTypeName) == true) {
      const CtlTypeAbbrCtlTypeId = objQryRegionFlds.ctlTypeId;
      const CtlTypeAbbrCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeAbbrCtlTypeId,
      );
      objQryRegionFlds.ctlTypeName = CtlTypeAbbrCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000297)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMapTabId(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMapTabId.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objQryRegionFlds.tabId) == true) {
      const ViewRegionRegionId = objQryRegionFlds.regionId;
      const ViewRegionTabId = await viewRegionStore.getTabId(ViewRegionRegionId);
      objQryRegionFlds.tabId = ViewRegionTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000360)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQryRegionFldsS:源对象
 **/
export async function QryRegionFldsEx_FuncMapOutFldName(objQryRegionFlds: clsQryRegionFldsENEx) {
  const strThisFuncName = QryRegionFldsEx_FuncMapOutFldName.name;
  try {
    if (IsNullOrEmpty(objQryRegionFlds.outFldName) == true) {
      // const vFieldTabSimFldId = objQryRegionFlds.outFldId;
      // const vFieldTabSimFldName = await vFieldTab_Sim_func(
      //   clsvFieldTab_SimEN.con_FldId,
      //   clsvFieldTab_SimEN.con_FldName,
      //   vFieldTabSimFldId,
      //   objQryRegionFlds.prjId,
      // );
      // objQryRegionFlds.outFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000293)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qryRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export function QryRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objQryRegionFldsEx: clsQryRegionFldsENEx,
) {
  const strThisFuncName = QryRegionFldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQryRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQryRegionFldsENEx.con_TabName:
      return QryRegionFldsEx_FuncMapTabName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_FldName:
      return QryRegionFldsEx_FuncMapFldName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_CtlTypeName:
      return QryRegionFldsEx_FuncMapCtlTypeName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_OutFldName:
      return QryRegionFldsEx_FuncMapOutFldName(objQryRegionFldsEx);
    case clsQryRegionFldsENEx.con_TabId:
      return QryRegionFldsEx_FuncMapTabId(objQryRegionFldsEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
