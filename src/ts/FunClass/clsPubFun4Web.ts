/*
 * 功能:为Web提供一些几个公共的功能函数
 * 版本:2019-08-07-01
 * 作者:潘以锋
 * */

import { UserPrjGrant_ReFreshCache } from '../L3ForWApi/AuthorityManage/clsUserPrjGrantWApi';

import { ApplicationType_ReFreshCache } from '../L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { GCVariable_ReFreshCache } from '../L3ForWApi/GeneCode/clsGCVariableWApi';
import { QxPrjMenus_ReFreshCache } from '../L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { QxRoleMenus_ReFreshCache } from '../L3ForWApi/MenuManage_GP/clsQxRoleMenusWApi';
import { ButtonTab_ReFreshCache } from '../L3ForWApi/PrjFunction/clsButtonTabWApi';
import { FunctionTemplate_GetObjLstCache } from '../L3ForWApi/PrjFunction/clsFunctionTemplateWApi';

import { vFunction4GeneCode_Sim_ReFreshThisCache } from '../L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
import { vFunctionTemplateRela_Sim_ReFreshThisCache } from '../L3ForWApi/PrjFunction/clsvFunctionTemplateRela_SimWApi';
import { SQLDSType_ReFreshCache } from '../L3ForWApi/PrjInterface/clsSQLDSTypeWApi';

import { FuncModule_Agc_ReFreshCache } from '../L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { ViewRegionRela_ReFreshCache } from '../L3ForWApi/RegionManage/clsViewRegionRelaWApi';

import { SqlViewRelaTab_ReFreshCache } from '../L3ForWApi/SqlViewMan/clsSqlViewRelaTabWApi';
import { CacheMode_ReFreshCache } from '../L3ForWApi/SystemSet/clsCacheModeWApi';

import { TabMainType_ReFreshCache } from '../L3ForWApi/Table_Field/clsTabMainTypeWApi';
import { TabState_ReFreshCache } from '../L3ForWApi/Table_Field/clsTabStateWApi';
import { TabType_ReFreshCache } from '../L3ForWApi/Table_Field/clsTabTypeWApi';

import { vPrjTab_Sim_ReFreshThisCache } from '../L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { vTabFeatureFlds_Sim_ReFreshThisCache } from '../L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import { vTabFeature_Sim_ReFreshThisCache } from '../L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { PrjTabFldEx_ReFreshCache } from '../L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { clsPrivateSessionStorage } from '../PubConfig/clsPrivateSessionStorage';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';

import { SetSpanHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  vFieldTab_Sim_GetNameByFldIdCache,
  vFieldTab_Sim_GetObjByFldIdCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { vPrjConstraint_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';

// declare const document: any;
export const PubFun4Web_ConstructorName = 'PubFun4Web';

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnPathS:源对象
 **/
export async function PubFun4Web_ShowOutFldName(
  strDivName4Edit: HTMLDivElement,
  lblOutFldName: string,
  strFldId: string,
  strOutFldId: string,
) {
  const strThisFuncName = PubFun4Web_ShowOutFldName.name;
  try {
    if (IsNullOrEmpty(strOutFldId) == false && strOutFldId != '0') {
      const strOutFldName = await vFieldTab_Sim_GetNameByFldIdCache(
        strOutFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (IsNullOrEmpty(strOutFldName) == false) {
        SetSpanHtmlByIdInDivObj(strDivName4Edit, lblOutFldName, strOutFldName);
        return;
      }
    }
    if (IsNullOrEmpty(strFldId) == false) {
      const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objFieldTab != null) {
        SetSpanHtmlByIdInDivObj(strDivName4Edit, lblOutFldName, objFieldTab.fldName);
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000137)为输出字段赋值出错,{0}.(in {1}.{2})',
      e,
      PubFun4Web_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export class clsPubFun4Web {
  public static async Refresh() {
    const viewRegionStore = useviewRegionStore();
    const vDataNode_SimStore = usevDataNode_SimStore();
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    /*A*/
    ApplicationType_ReFreshCache();

    ButtonTab_ReFreshCache();

    CacheMode_ReFreshCache();

    //DetailRegionFlds_ReFreshCache4Head(clsPrivateSessionStorage.currSelPrjId);
    //DGRegionFlds_ReFreshCache4Head(clsPrivateSessionStorage.currSelPrjId);

    //EditRegionFlds_ReFreshCache4Head(clsPrivateSessionStorage.currSelPrjId);
    //ExcelExportRegionFlds_ReFreshCache4Head(clsPrivateSessionStorage.currSelPrjId);
    /*FFF*/
    FuncModule_Agc_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);

    //FeatureRegionFlds_ReFreshCache4Head(clsPrivateSessionStorage.currSelPrjId);
    const arrFunctionTemplate = await FunctionTemplate_GetObjLstCache();
    for (const objInFor of arrFunctionTemplate) {
      vFunctionTemplateRela_Sim_ReFreshThisCache(objInFor.functionTemplateId);
    }

    vFunction4GeneCode_Sim_ReFreshThisCache();

    GCVariable_ReFreshCache();

    //P
    PrjTabFldEx_ReFreshCache(clsPrivateSessionStorage.currSelPrjId, '');
    vPrjConstraint_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
    //QryRegionFlds_ReFreshCache4Head(clsPrivateSessionStorage.currSelPrjId);
    QxPrjMenus_ReFreshCache('0001');
    QxRoleMenus_ReFreshCache();
    SqlViewRelaTab_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
    SQLDSType_ReFreshCache();
    vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
    vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
    TabState_ReFreshCache();
    TabMainType_ReFreshCache();
    TabType_ReFreshCache();
    UserPrjGrant_ReFreshCache(clsPubLocalStorage.userId);

    //V
    vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);

    vFieldTab_Sim2Store.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
    //ViewFeatureFlds_ReFreshCache4Head(clsPrivateSessionStorage.currSelPrjId);

    viewRegionStore.delObjByPrjId(clsPrivateSessionStorage.currSelPrjId);
    ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);

    vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

    console.error('刷新缓存完成！(in clsPubFun4Web.Refresh)');
    //CacheHelper.ClearSessionStorage();
  }
}
