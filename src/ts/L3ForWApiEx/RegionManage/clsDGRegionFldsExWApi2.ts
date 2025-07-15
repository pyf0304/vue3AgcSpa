import { useviewRegionStore } from '@/store/modules/viewRegion';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';
import { clsDGRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import {
  CMProject_GetObjByCmPrjIdCache,
  CMProject_func,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import {
  vFieldTab_Sim_GetNameByFldIdCache,
  vFieldTab_Sim_GetObjByFldIdCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

import { PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { vFieldTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import {
  vPrjTab_SimEx_GetObjByTabIdCache,
  vPrjTab_SimEx_func,
} from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const dGRegionFldsEx_Controller = 'DGRegionFldsExApi';
export const dGRegionFldsEx_ConstructorName = 'dGRegionFldsEx';
/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function DGRegionFldsEx_FuncMapByFldName(
  strFldName: string,
  objDGRegionFldsEx: clsDGRegionFldsENEx,
) {
  const strThisFuncName = DGRegionFldsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsDGRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDGRegionFldsENEx.con_FldNameV2:
      return DGRegionFldsEx_FuncMap_FldNameV2(objDGRegionFldsEx);

    case clsDGRegionFldsENEx.con_FldName:
      return DGRegionFldsEx_FuncMap_FldName(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_TabName:
      return DGRegionFldsEx_FuncMap_TabName(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_CtlTypeName:
      return DGRegionFldsEx_FuncMap_CtlTypeName(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_TabId:
      return DGRegionFldsEx_FuncMap_TabId(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_PrjId:
      return DGRegionFldsEx_FuncMap_PrjId(objDGRegionFldsEx);
    case clsDGRegionFldsENEx.con_OutFldName:
      return DGRegionFldsEx_FuncMap_OutFldName(objDGRegionFldsEx);

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
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_FldName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.fldName) == true) {
      const vFieldTab_Sim_FldId = objDGRegionFlds.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDGRegionFlds.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_CtlTypeName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.ctlTypeName) == true) {
      const CtlType_CtlTypeId = objDGRegionFlds.ctlTypeId;
      const CtlType_CtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlType_CtlTypeId,
      );
      objDGRegionFlds.ctlTypeName = CtlType_CtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000123)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_FldNameV2(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_FldNameV2.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.fldNameV2) == true) {
      if (IsNullOrEmpty(objDGRegionFlds.fldName) == true)
        await DGRegionFldsEx_FuncMapByFldName(clsvFieldTab_SimEN.con_FldName, objDGRegionFlds);
      if (IsNullOrEmpty(objDGRegionFlds.outFldName) == true)
        await DGRegionFldsEx_FuncMapByFldName(clsDGRegionFldsENEx.con_OutFldName, objDGRegionFlds);
      if (IsNullOrEmpty(objDGRegionFlds.outFldId) == true) {
        if (IsNullOrEmpty(objDGRegionFlds.fldId) == false) {
          objDGRegionFlds.fldNameV2 = Format(
            '{0}({1})',
            objDGRegionFlds.fldName,
            objDGRegionFlds.headerText,
          );
        } else {
          objDGRegionFlds.fldNameV2 = Format('【{0}】', objDGRegionFlds.headerText);
        }
      } else {
        const strOutFldName = objDGRegionFlds.outFldName;
        //if (IsNullOrEmpty(strOutFldName)) strOutFldName = objDGRegionFlds.dataPropertyName;
        objDGRegionFlds.fldNameV2 = Format(
          '输入:{0}<br/>输出:{1}({2})',
          objDGRegionFlds.fldName,
          strOutFldName,
          objDGRegionFlds.headerText,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_SortExpression(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_SortExpression.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.sortExpression) == true) {
      if (IsNullOrEmpty(objDGRegionFlds.fldName) == true)
        DGRegionFldsEx_FuncMapByFldName(clsvFieldTab_SimEN.con_FldName, objDGRegionFlds);
      objDGRegionFlds.sortExpression = objDGRegionFlds.fldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_TabName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_TabName.name;
  const viewRegionStore = useviewRegionStore();
  let strFldName;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.tabName) == true) {
      if (IsNullOrEmpty(objDGRegionFlds.fldName) == true)
        DGRegionFldsEx_FuncMapByFldName(clsvFieldTab_SimEN.con_FldName, objDGRegionFlds);

      if (IsNullOrEmpty(objDGRegionFlds.outFldId) == true || objDGRegionFlds.outFldId == '0') {
        if (IsNullOrEmpty(objDGRegionFlds.fldId) == false) {
          const ViewRegion_RegionId = objDGRegionFlds.regionId;
          const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
          const vPrjTab_Sim_TabId = ViewRegion_TabId;
          const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
            clsvPrjTab_SimEN.con_TabId,
            clsvPrjTab_SimEN.con_TabName,
            vPrjTab_Sim_TabId,
          );
          objDGRegionFlds.tabName = vPrjTab_Sim_TabName;
        } else {
          objDGRegionFlds.tabName = '';
        }
      } else {
        let ViewRegion_RegionId = objDGRegionFlds.regionId;
        const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
        const PrjTabTabId = ViewRegion_TabId;
        const PrjTabTabName = await vPrjTab_SimEx_func(
          clsPrjTabEN.con_TabId,
          clsPrjTabEN.con_TabName,
          PrjTabTabId,
        );
        objDGRegionFlds.tabName = PrjTabTabName;

        ViewRegion_RegionId = objDGRegionFlds.regionId;

        const strOutFldId = objDGRegionFlds.outFldId;

        try {
          const objFieldTab_Sim_Out = await vFieldTab_Sim_GetObjByFldIdCache(
            strOutFldId,
            clsPrivateSessionStorage.currSelPrjId,
          );

          if (objFieldTab_Sim_Out == null) {
            const objCMProject = await CMProject_GetObjByCmPrjIdCache(
              clsPrivateSessionStorage.cmPrjId,
            );
            if (objCMProject == null) return;
            const strMsg = Format(
              '转换函数中，属性:[{0}], 输出字段Id:[{1}], 不存在。在 VersionNo=1, cmPrjId={2}，请检查！(In {3})',
              objDGRegionFlds.dataPropertyName,
              strOutFldId,
              clsPrivateSessionStorage.cmPrjId,
              objCMProject.cmPrjName,
              clsStackTrace.GetCurrClassFunction(),
            );
            throw strMsg;
          }
          strFldName = objFieldTab_Sim_Out.fldName;
        } catch (objException) {
          const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
            ViewRegion_TabId,
            clsPrivateSessionStorage.cmPrjId,
          );
          if (objPrjTab == null) return;
          const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
            objDGRegionFlds.fldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (objFieldTab == null) return;
          const objCMProject = await CMProject_GetObjByCmPrjIdCache(
            clsPrivateSessionStorage.cmPrjId,
          );
          if (objCMProject == null) return;
          const strMsg = Format(
            '转换函数中，表tabId={0}({3}),字段fldId=[{1}({4})]==>{8}在获取转换路径时，出错:{7}。 VersionNo=1, cmPrjId={2}({5})，请检查！(In {6})',
            ViewRegion_TabId,
            objDGRegionFlds.fldId,
            clsPrivateSessionStorage.cmPrjId,
            objPrjTab.tabName,
            objFieldTab.fldName,
            objCMProject.cmPrjName,
            clsStackTrace.GetCurrClassFunction(),
            objException,
            objDGRegionFlds.dataPropertyName,
          );
          throw strMsg;
        }
        objDGRegionFlds.tabName = Format(
          "<span class='text-secondary  font-weight-bold'>映射</span><span class='text-primary'>({0}=>{1})</span>",
          objDGRegionFlds.fldName,
          strFldName,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_TabId(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_TabId.name;
  const viewRegionStore = useviewRegionStore();
  try {
    if (IsNullOrEmpty(objDGRegionFlds.tabId) == true) {
      const ViewRegion_RegionId = objDGRegionFlds.regionId;
      const ViewRegion_TabId = await viewRegionStore.getTabId(ViewRegion_RegionId);
      objDGRegionFlds.tabId = ViewRegion_TabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000250)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_DnPathIdEx(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_TabId.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.dnPathId) == true) {
      if (IsNullOrEmpty(objDGRegionFlds.dnPathId) == true) {
        await DGRegionFldsEx_FuncMap_TabId(objDGRegionFlds);
      }
      const strDnPathIdEx = await PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache(
        objDGRegionFlds.tabId,
        objDGRegionFlds.outFldId,
      );

      objDGRegionFlds.dnPathIdEx = strDnPathIdEx;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000250)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_OutFldName(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_OutFldName.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.outFldName) == true) {
      const vFieldTab_Sim_FldId = objDGRegionFlds.outFldId;

      if (IsNullOrEmpty(vFieldTab_Sim_FldId) || vFieldTab_Sim_FldId == '0') {
        objDGRegionFlds.outFldName = '';
        return;
      }
      const vFieldTab_Sim_FldName = await vFieldTab_Sim_GetNameByFldIdCache(
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objDGRegionFlds.outFldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000176)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDGRegionFldsS:源对象
 **/
export async function DGRegionFldsEx_FuncMap_PrjId(objDGRegionFlds: clsDGRegionFldsENEx) {
  const strThisFuncName = DGRegionFldsEx_FuncMap_PrjId.name;
  try {
    if (IsNullOrEmpty(objDGRegionFlds.prjId) == true) {
      const CMProject_CMPrjId = clsPrivateSessionStorage.cmPrjId;
      const CMProject_PrjId = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_PrjId,
        CMProject_CMPrjId,
      );
      objDGRegionFlds.prjId = CMProject_PrjId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000155)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dGRegionFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
export function DGRegionFldsEx_CopyToEx(
  objDGRegionFldsENS: clsDGRegionFldsEN,
): clsDGRegionFldsENEx {
  const objDGRegionFldsENT = new clsDGRegionFldsENEx();
  try {
    ObjectAssign(objDGRegionFldsENT, objDGRegionFldsENS);
    return objDGRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objDGRegionFldsENT;
  }
}
