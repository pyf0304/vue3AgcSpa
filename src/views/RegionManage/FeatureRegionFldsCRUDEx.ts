import { Ref } from 'vue';
import FeatureRegionFlds_EditEx from './FeatureRegionFlds_EditEx';
import ViewRegion_Detail_SimEx from './ViewRegion_Detail_SimEx';
import ViewRegion_Edit_SimEx from './ViewRegion_Edit_SimEx';
import { FeatureRegionFldsCRUD } from '@/viewsBase/RegionManage/FeatureRegionFldsCRUD';

import { clsPubFun4Feature } from '@/ts/FunClass/clsPubFun4Feature';
import {
  NoSelectOneCtrl,
  SelectManyCtrlByKeyId,
  SelectOneCtrl,
  SetAllNotCheckedItems4Visible,
} from '@/ts/FunClass/clsPubFun4Visible';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
import { enumCodeType } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';

import { ASPHtmlTableEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlTableENEx';

import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { enumPrjFeatureType } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { clsFeatureRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx';
import { clsRegionTypeEN, enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsASPButtonBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPButtonBLEx';
import { clsASPHtmlTableBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPHtmlTableBLEx';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';

import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';

import {
  FeatureRegionFlds_AddNewRecordAsync,
  FeatureRegionFlds_DownMoveAsync,
  FeatureRegionFlds_GetMaxStrIdAsync,
  FeatureRegionFlds_GetObjByViewFeatureIdCache,
  FeatureRegionFlds_GetObjLstByPagerCache,
  FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync,
  FeatureRegionFlds_GetObjLstCache,
  FeatureRegionFlds_GetRecCountByCondCache,
  FeatureRegionFlds_GoBottomAsync,
  FeatureRegionFlds_GoTopAsync,
  FeatureRegionFlds_ReFreshCache,
  FeatureRegionFlds_ReOrderAsync,
  FeatureRegionFlds_UpMoveAsync,
} from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import {
  RegionType_BindDdl_RegionTypeIdInDivCache,
  RegionType_func,
} from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';

import {
  AppCodeTypeRelaEx_CopyToEx,
  AppCodeTypeRelaEx_FuncMapByFldName,
  AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache,
  AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum,
} from '@/ts/L3ForWApiEx/GeneCode/clsAppCodeTypeRelaExWApi';

import {
  ViewRegionEx_CopyToEx,
  ViewRegionEx_GetObjExLstByViewIdCache,
  ViewRegionEx_GetObjLstByViewIdCache,
  ViewRegionEx_GetRegionIdByTypeCache,
  ViewRegionEx_SortFunByRegionTypeOrderNum,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { PrjTabFldEx_GetFldIdLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { vTabFeature_SimEx_BindDdl_TabFeatureId4DdlByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetAllElementPropValueInDivObj,
  GetArray,
  GetCheckedKeyIdsInDivObj,
  GetDistinctArray,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  SetCheckedItem4KeyIdInDiv,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, GetWidthByWordStr } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Position_SetDiv_Bottom_FeatureRegion } from '@/ts/PubFun/clsPosition';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import FeatureRegionFlds_Edit_SetValueEx from '@/views/RegionManage/FeatureRegionFlds_Edit_SetValueEx';
import {
  FeatureRegionFldsEx_AddFeatureRegionFldsRecordSave,
  FeatureRegionFldsEx_CopyToEx,
  FeatureRegionFldsEx_DelRecordEx,
  FeatureRegionFldsEx_FuncMapByFldName,
  FeatureRegionFldsEx_ImportRelaFlds,
  FeatureRegionFldsEx_SortFunByInUseAndSeq,
} from '@/ts/L3ForWApiEx/RegionManage/clsFeatureRegionFldsExWApi2';
import { ASPControlEx } from '@/ts/L0Entity/GeneCSharp/ASPControlEx';
import { GetCtrlIdFeature } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx2';
import { clsASPLiBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPLiBLEx';
import { clsASPUlBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPUlBLEx';
import { clsASPSpanBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPSpanBLEx';
import { ASPSpanEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPSpanENEx';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { clsASPControlGroupBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx';
import { ASPUlEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPUlENEx';
import { ASPLiEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLiENEx';
import { clsFeatureRegionFldsBLEx } from '@/ts/L2BLL/RegionManage/clsFeatureRegionFldsBLEx';
import ViewFeatureFlds_EditEx from '@/views/RegionManage/ViewFeatureFlds_EditEx';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  divVarSet,
  FeatureRegionFlds_DeleteKeyIdCache,
  refFeatureRegionFlds_Edit,
  RegionId_Static,
  TabId4Region_Static,
  viewVarSet,
  TabId_Static,
} from '@/views/RegionManage/FeatureRegionFldsVueShare';
import { RegionId_Static as RegionId_Static_U } from '@/views/RegionManage/ViewRegion_UVueShare';

import {
  refDivFeatureButtonLst,
  refDivLeftMenu,
  refDivVisualEffects,
  RegionId_Static as RegionId_Static_SetValue,
} from '@/views/RegionManage/FeatureRegionFldsSetValueVueShare';
import { RegionId_Static as RegionId_Static_Sim } from '@/views/RegionManage/FeatureRegionFlds_SimVueShare';
import {
  refViewFeatureFlds1_Edit,
  refViewFeatureFlds2_Edit,
} from '@/views/RegionManage/ViewFeatureFldsLstVueShare';

import {
  PrjFeature_GetObjByFeatureIdAsync,
  PrjFeature_GetObjLstAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
import { TabId_Static as TabId_Static_ViewIdGcVar } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { FeatureRegionFldsEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiEx/RegionManage/clsFeatureRegionFldsExWApi';

/** FeatureRegionFldsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class FeatureRegionFldsCRUDEx extends FeatureRegionFldsCRUD implements IShowList {
  public static GetPropValueV2: (strPropName: string) => any;
  public static EditRegionRef: Ref<any>;
  public static SelectedKeyIds = '';
  //public selCtrlId = "";
  public static applicationTypeId = 0;

  public static ActiveTabName = enumActiveTabName.VisualEffects_01;
  public static bolIsGeneCodeRegion = false; //是否已经生成代码区域

  // public divName4Detail4ViewRegion = 'divDetail4ViewRegion'; //详细信息区的Id
  // public divName4Edit4FeatureRegionFlds_SetValue = 'divEdit4FeatureRegionFlds_SetValue'; //详细信息区的Id
  // public static divEdit4FeatureRegionFlds_SetValue: HTMLDivElement; // = GetUniDivInDoc(this.divName4Edit4FeatureRegionFlds_SetValue);
  public bolIsLoadEdit4FeatureRegionFlds_SetValue = false; //记录是否导入编辑区的变量

  public static FeatureId4Adding = '';
  // public static strTabId4Region = ''; //编辑区的相关表Id
  public static strViewId4Region = ''; //编辑区的界面Id
  // public static intApplicationTypeId = 0; //编辑区的应用类型Id
  public static objPageEdit: FeatureRegionFlds_EditEx;
  public static objViewFeatureFlds_EditEx: ViewFeatureFlds_EditEx;

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 30;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in ViewInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ViewInfoCRUDEx');
  }
  public static SortFun_OrderNum(a: ASPControlEx, b: ASPControlEx): number {
    //const strThisFuncName = this.SortFun_OrderNum.name;

    return a.orderNum - b.orderNum;
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const viewRegionStore = useviewRegionStore();
    console.log(strCommandName, strKeyId);
    const objPage: FeatureRegionFldsCRUDEx = new FeatureRegionFldsCRUDEx();
    FeatureRegionFldsCRUDEx.objPageEdit = new FeatureRegionFlds_EditEx(
      'FeatureRegionFlds_EditEx',
      objPage,
    );
    FeatureRegionFldsCRUDEx.objPageEdit.divName4Edit = 'divEdit_Loc1';
    FeatureRegionFldsCRUDEx.objViewFeatureFlds_EditEx = new ViewFeatureFlds_EditEx(
      'ViewFeatureFlds_EditEx',
      objPage,
    );
    FeatureRegionFldsCRUDEx.objViewFeatureFlds_EditEx.divName4Edit = 'divEdit_Loc_Sub';

    let arrKeyIds;
    const objViewRegion_Edit_SimEx = new ViewRegion_Edit_SimEx('ViewRegion_Edit_SimEx', objPage);

    console.log(objViewRegion_Edit_SimEx);
    let strRegionId = '';
    let objViewRegion_Feature;
    switch (strCommandName) {
      case 'CodeGene': //自定义功能
        objPage.btnCodeGene_Click();
        break;
      case 'CopyFldFromTemplate': //自定义功能
        objPage.btnCopyFldFromTemplate_Click();
        break;
      case 'SetInUse': //自定义功能
        objPage.btnSetInUse_Click();
        break;
      case 'SetNotInUse': //自定义功能
        objPage.btnSetNotInUse_Click();
        break;
      case 'CopyFldFromRelaTab': //自定义功能
        objPage.btnCopyFldFromRelaTab_Click();
        break;
      case 'chkRegionType':
        objPage.chkRegionType_Click();
        break;

      case 'Update_ViewRegion': //修改记录
        FeatureRegionFldsCRUDEx.EditRegionRef.value.btnViewRegion_Edit_Click(
          strCommandName,
          strKeyId,
        );

        break;
      case 'ConfirmBatchAddFeature':
        objPage.ConfirmBatchAddFeature();
        break;
      case 'VisualEffects':
        objPage.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        // FeatureRegionFldsCRUDEx.objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
          strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        }
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          console.error('请选择需要修改的记录！');
          return;
        }
        strRegionId = RegionId_Static.value;
        objViewRegion_Feature = await viewRegionStore.getObj(strRegionId);
        if (objViewRegion_Feature == null) {
          const strMsg = Format(
            '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
            clsPrivateSessionStorage.currSelPrjName,
            strRegionId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        TabId4Region_Static.value = objViewRegion_Feature.tabId;
        // FeatureRegionFldsCRUDEx.objPageEdit.divEdit =
        //   FeatureRegionFldsCRUDEx.GetPropValueV2('editDiv');
        FeatureRegionFldsCRUDEx.objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        await objPage.btnGoTop_Click();
        await objPage.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        await objPage.btnGoBottum_Click();
        await objPage.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        await objPage.btnUpMove_Click();
        await objPage.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        await objPage.btnDownMove_Click();
        await objPage.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'ReOrder': //重序记录
        await objPage.btnReOrder_Click();
        await objPage.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'FeatureRegionFldsCRUDEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
  BindGv() {
    alert('该类没有绑定该函数：[this.BindGv_FeatureRegionFlds]！');
    //this.BindGv_FeatureRegionFlds();
  }

  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    let objViewRegion_Detail;
    switch (strType) {
      case 'FeatureRegionFlds':
        this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
        this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);

        break;
      case `${clsViewRegionEN._CurrTabName}Detail`:
        console.log('修改并返回主页面刷新信息区。');

        objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
        objViewRegion_Detail.divDetail =
          FeatureRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
        objViewRegion_Detail.btnDetailRecord_Click(RegionId_Static.value);

        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  async BindOnlyGv() {
    viewVarSet.sortFeatureRegionFldsBy = 'regionName Asc';
    //2、显示无条件的表内容在GridView中
    await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
  }
  /**
   * 初始化编辑区，即绑定下拉框，赋初值等
   */
  public async InitEdit() {
    const objPageEdit: FeatureRegionFlds_EditEx = new FeatureRegionFlds_EditEx(
      'FeatureRegionFlds_EditEx',
      this,
    );
    // 为编辑区绑定下拉框
    await refFeatureRegionFlds_Edit.value.BindDdl4EditRegionInDiv();
    objPageEdit.bolIsLoadEditRegion = true;
  }

  // public async BindDdl4Edit4SetValue(strPrjId: string) {
  //   // 在此处放置用户代码以初始化页面
  //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
  //     FeatureRegionFldsCRUDEx.divEdit4FeatureRegionFlds_SetValue,
  //     'ddlReleFldId',
  //     TabId_Static.value,
  //     strPrjId,
  //   ); //编辑区域

  //   await ValueGivingMode_BindDdl_ValueGivingModeIdInDivCache(
  //     FeatureRegionFldsCRUDEx.divEdit4FeatureRegionFlds_SetValue,
  //     'ddlValueGivingModeId',
  //   ); //编辑区域
  // }

  public async ConfirmBatchAddFeature() {
    if (IsNullOrEmpty(this.regionTypeId) == true) {
      alert('请选择需要区域类型！');
      const ddlRegionTypeId: HTMLSelectElement = <HTMLSelectElement>(
        document.getElementById('ddlRegionTypeId')
      );
      ddlRegionTypeId.focus();
      return;
    }
    if (FeatureRegionFldsCRUDEx.applicationTypeId == 0) {
      const strMsg = '应用类型不能为空！';
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrCtrlId = clsPubFun4Feature.selCtrlId;

    const lstFeatureId0: Array<string> = sstrCtrlId.split(','); //wucPrjFeature4Gv1.GetAllCheckedKeysFromGv();
    if (lstFeatureId0 == null || lstFeatureId0.length == 0) {
      alert('没有选择功能，请在功能面板中选择功能！');
      return;
    }
    const lstFeatureId: Array<string> = lstFeatureId0.map((x) => x.substring(3));

    try {
      for (const strFeatureId of lstFeatureId) {
        const objPrjFeature = await PrjFeature_GetObjByFeatureIdAsync(strFeatureId);
        if (objPrjFeature == null) {
          const strMsg = Format('功能Id(featureId):[{0}]没有相应功能，请检查！', strFeatureId);
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        if (objPrjFeature.featureName.indexOf('设置字段值') > -1) {
          FeatureRegionFldsCRUDEx.FeatureId4Adding = strFeatureId;

          const obj_Edit_SetValue = new FeatureRegionFlds_Edit_SetValueEx(
            'FeatureRegionFlds_Edit_SetValueEx',
            this,
          );
          obj_Edit_SetValue.relaTabId = TabId_Static.value;
          obj_Edit_SetValue.applicationTypeId = FeatureRegionFldsCRUDEx.applicationTypeId;
          obj_Edit_SetValue.btnAddNewRecord_Click();
          return;
        } else if (objPrjFeature.isNeedField == true) {
          //clsViewFeatureFldsBLEx.ImportRelaFlds(clsCommonSession.viewId, seRegionId, strFeatureId, clsPubVar.CurrCmPrjId, clsCommonSession.userId);
        }
        const objFeatureRegionFlds = new clsFeatureRegionFldsEN();
        objFeatureRegionFlds.featureId = strFeatureId;
        objFeatureRegionFlds.releTabId = TabId_Static.value;
        objFeatureRegionFlds.ctlTypeId = enumCtlType.Button_01;
        objFeatureRegionFlds.prjId = clsPrivateSessionStorage.currSelPrjId;

        await FeatureRegionFldsEx_AddFeatureRegionFldsRecordSave(
          RegionId_Static.value,
          TabId_Static.value,
          FeatureRegionFldsCRUDEx.applicationTypeId,
          objFeatureRegionFlds,
          clsPubLocalStorage.userId,
        );
      }
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (objException: any) {
      alert(objException);
    }
    if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
    }
    this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
 */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();
    // clsPrivateSessionStorage.viewId_Main = '00050322';
    // 在此处放置用户代码以初始化页面
    try {
      let strViewId = clsPrivateSessionStorage.viewId_Main;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      RegionId_Static.value = await ViewRegionEx_GetRegionIdByTypeCache(
        strViewId,
        enumRegionType.FeatureRegion_0008,
        strCmPrjId,
      );
      RegionId_Static_SetValue.value = RegionId_Static.value;
      const objViewInfo = await viewInfoStore.getObjEN(strViewId);
      if (objViewInfo == null) {
        const strMsg = Format(
          '在项目:[{0}]中，界面Id:[{1}]没有相应界面，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strViewId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      FeatureRegionFldsCRUDEx.applicationTypeId = objViewInfo.applicationTypeId;

      switch (this.qsOp) {
        case 'ViewEdit':
          strViewId = await clsPubVar4Web.GetViewId(this.qsViewId);

          if (IsNullOrEmpty(strViewId) == true) {
            const strMsg = Format(
              '在编辑功能区域时，界面Id为空，请检查！(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          FeatureRegionFldsCRUDEx.strViewId4Region = strViewId;

          break;
        case 'ViewRegionEdit':
          break;

        case '':
          // await Main_ViewInfo.DispViewInfo();
          // await Main_ViewInfo.ShowCurrItem('FeatureRegionFldsCRUD', '');
          break;
      }
      Position_SetDiv_Bottom_FeatureRegion('tab1');

      clsPubFun4Feature.divName4Feature = refDivLeftMenu.value;
      const objViewRegion_Feature = await viewRegionStore.getObj(RegionId_Static.value);
      if (objViewRegion_Feature == null) {
        const strMsg = Format(
          '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          RegionId_Static.value,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (objViewRegion_Feature != null) {
        if (IsNullOrEmpty(objViewRegion_Feature.tabId) == true) {
          const strMsg = `功能区存在，但相关表为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
          alert(strMsg);
          return;
        }
        RegionId_Static.value = objViewRegion_Feature.regionId;

        TabId4Region_Static.value = objViewRegion_Feature.tabId;
        TabId_Static.value = objViewRegion_Feature.tabId;
        TabId_Static_ViewIdGcVar.value = objViewRegion_Feature.tabId;
        refViewFeatureFlds1_Edit.value.BindDdl4EditRegion(TabId4Region_Static.value);
        refViewFeatureFlds2_Edit.value.BindDdl4EditRegion(TabId4Region_Static.value);
      }
      // await this.AddDPV_Detail4ViewRegion(this.divName4Detail4ViewRegion);
      const objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);

      //ViewRegion_Detail_Sim.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;
      // const divViewRegionDetail = FeatureRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
      // objViewRegion_Detail.divDetail = divViewRegionDetail;
      RegionId_Static_U.value = RegionId_Static.value;
      RegionId_Static_Sim.value = RegionId_Static.value;

      await objViewRegion_Detail.btnDetailRecord_Click();

      // 为查询区绑定下拉框
      //   await this.BindDdl4QueryRegion();
      await this.BindDdl4FeatureLst();

      const strTabId = TabId_Static.value; //定义条件字段
      await vTabFeature_SimEx_BindDdl_TabFeatureId4DdlByTabIdInDivCache(
        divVarSet.refDivFunction,
        'ddlTabFeatureId_SetFldValue',
        strTabId,
      );

      //加载编辑区
      const objPage_Edit: FeatureRegionFlds_EditEx = new FeatureRegionFlds_EditEx(
        'FeatureRegionFlds_EditEx',
        this,
      );
      // const divEdit = FeatureRegionFldsCRUDEx.GetPropValueV2('editDiv');
      // objPage_Edit.divEdit = divEdit;
      objPage_Edit.divName4Edit = 'divEdit_Loc1';
      // await objPage_Edit.AddDPV_Edit(objPage_Edit.divName4Edit);
      await objPage_Edit.PageLoad();

      // 为编辑区绑定下拉框
      await refFeatureRegionFlds_Edit.value.BindDdl4EditRegionInDiv();
      objPage_Edit.bolIsLoadEditRegion = true;

      const objPage_Edit_Sub: ViewFeatureFlds_EditEx = new ViewFeatureFlds_EditEx(
        'ViewFeatureFlds_EditEx',
        this,
      );
      objPage_Edit_Sub.divName4Edit = 'divEdit_Loc_Sub';

      // await objPage_Edit_Sub.PageLoad();
      // // 为编辑区绑定下拉框
      // await objPage_Edit_Sub.BindDdl4EditRegionInDiv();

      await this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
      const arrKeyId = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(refDivVisualEffects.value, arrKeyId);
      await this.ShowFeatureLst(refDivFeatureButtonLst.value);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      for (const strViewFeatureId of arrKeyIds) {
        await FeatureRegionFldsEx_DelRecordEx(
          strViewFeatureId,
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );
      }
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
      const arrKeyId = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(refDivVisualEffects.value, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  public chkRegionType_Click() {
    alert('chkRegionType_Click()');
  }

  /**
   * 得到CheckBoxList中选中了的值
   * @returns
   */
  public GetChecked(): Array<string> {
    const selectedVal: Array<string> = new Array<string>();
    // const separator = ',';
    const arrCheckBox = document.getElementsByTagName('input');
    const arrElement: Array<HTMLInputElement> = <Array<HTMLInputElement>>GetArray(arrCheckBox);

    const arrInput = arrElement.filter((x) => x.id.indexOf('cblRegionTypeLst') > -1);
    arrInput.forEach((x) => {
      if (x.checked) {
        selectedVal.push(x.value);
      }
    });

    return selectedVal;
  }

  /** 函数功能:为查询区绑定下拉框
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Js_BindDdl4QueryRegion)
*/
  public async BindDdl4FeatureLst() {
    await RegionType_BindDdl_RegionTypeIdInDivCache(refDivLeftMenu.value, 'ddlRegionTypeId'); //查询区域
  }

  /** 把所有的查询控件内容组合成一个条件串
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombineFeatureRegionFldsConditionObj(): Promise<ConditionCollection> {
    const strRegionId = RegionId_Static.value;
    // const strWhereCond = `regionId='${strRegionId}'`;
    const objFeatureRegionFldsCond = new ConditionCollection();

    objFeatureRegionFldsCond.SetCondFldValue(clsFeatureRegionFldsEN.con_RegionId, strRegionId, '=');

    return objFeatureRegionFldsCond;
  }
  public async AddDPV_Detail4ViewRegion(divName4Detail: string) {
    const strUrl = './ViewRegion_Detail_Sim/';
    console.log('divName4Detail:(In AddDPV_Detail)', divName4Detail);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data: any) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Detail}`).html(data);
          resolve(true);
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }
  public async AddDPV_Edit4FeatureRegionFlds_SetValueBak(divName4Detail: string) {
    const strUrl = './FeatureRegionFlds_Edit_SetValue/';
    console.log('divName4Detail:(In AddDPV_Detail)', divName4Detail);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data: any) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Detail}`).html(data);
          resolve(true);
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }

  public static async ControlClick(thisControl: any, event: any) {
    const thisA = <HTMLElement>thisControl;
    const strId = thisA.getAttribute('keyId');
    if (strId == null) {
      console.error('关键字为空！(In ColHeaderClick)');
      alert('关键字为空！(In ColHeaderClick)');
      return;
    }
    // const divList = GetDivObjInDivObj(divLayout, 'divList');
    event = window.event || event;
    let bolIsPressShift = false;
    if (event.shiftKey == 1) {
      bolIsPressShift = true;
      console.log(`shift被按下了, strId:${strId}`);
    } else {
      bolIsPressShift = false;
      console.log(`shift没被按下,strId:${strId}`);
    }

    const bolExist = FeatureRegionFldsCRUDEx.IsSelectedKeyId(strId);
    if (bolIsPressShift === true) {
      if (bolExist == true) {
        // if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02)
        //   SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        // NoSelectOneTdByKeyId(refDivVisualEffects.value, strId);
        FeatureRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        // if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02)
        //   SetCheckedItem4KeyId(divList, strId);
        SelectOneCtrl(thisA);
        // SelectOneTdByKeyId(refDivVisualEffects.value, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        FeatureRegionFldsCRUDEx.btn_Click('Update', strId);
        FeatureRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
      }
    } else {
      if (bolExist == true) {
        // if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02)
        //   SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        // NoSelectOneTdByKeyId(refDivVisualEffects.value, strId);

        FeatureRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        SetAllNotCheckedItems4Visible(refDivVisualEffects.value);
        FeatureRegionFldsCRUDEx.SelectedKeyIds = '';
        SelectOneCtrl(thisA);
        // SelectOneTdByKeyId(refDivVisualEffects.value, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        FeatureRegionFldsCRUDEx.btn_Click('Update', strId);
        FeatureRegionFldsCRUDEx.AddToSelectedKeyIds(strId);

        // if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
        //   SetAllNotCkechedItem(divList);
        //   SetCheckedItem4KeyId(divList, strId);
        // }
      }
    }
  }

  public SetEvent(objDiv: HTMLDivElement) {
    const objLst = objDiv.getElementsByTagName('input');
    let arrElement = GetArray(objLst);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          FeatureRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLst00 = objDiv.getElementsByTagName('textarea');
    const arrElement00 = GetArray(objLst00);
    for (const objTextArea of arrElement00) {
      (function () {
        objTextArea.onclick = function (this) {
          FeatureRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLst1 = objDiv.getElementsByTagName('select');
    arrElement = GetArray(objLst1);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          FeatureRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }

    const objA = objDiv.getElementsByTagName('a');
    arrElement = GetArray(objA);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          FeatureRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
  }
  /** 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
 */
  public async BindGv_FeatureRegionFldsCacheBak(divList: HTMLDivElement) {
    const objFeatureRegionFlds_Cond = await this.CombineFeatureRegionFldsConditionObj();
    objFeatureRegionFlds_Cond.SetCondFldValue(
      clsFeatureRegionFldsEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
      '=',
    );

    const strWhereCond = JSON.stringify(objFeatureRegionFlds_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    const arrFeatureRegionFldsObjLst: Array<clsFeatureRegionFldsEN> = [];
    let arrFeatureRegionFldsEx;
    try {
      this.recCount = await FeatureRegionFlds_GetRecCountByCondCache(
        objFeatureRegionFlds_Cond,
        RegionId_Static.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objFeatureRegionFlds_Cond,
        orderBy: viewVarSet.sortFeatureRegionFldsBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstByPagerCache(
        objPagerPara,
        RegionId_Static.value,
      );
      arrFeatureRegionFldsEx = arrFeatureRegionFldsObjLst.map(FeatureRegionFldsEx_CopyToEx);
      const arrRegionType_Sel = this.GetChecked();

      arrFeatureRegionFldsEx = arrFeatureRegionFldsEx
        .filter((x) => arrRegionType_Sel.indexOf(x.regionTypeId) > -1)
        .sort((x, y) => x.seqNum - y.seqNum);
      for (const objInFor of arrFeatureRegionFldsEx) {
        objInFor.ctrlId = GetCtrlIdFeature(objInFor);
      }
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    if (arrFeatureRegionFldsObjLst.length == 0) {
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=FeatureRegionFlds_${RegionId_Static.value})`;
      alert(strMsg);
      return;
    }
    try {
      await this.BindTab_FeatureRegionFlds4Func(divList, arrFeatureRegionFldsEx);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  public async AttachTooltip(objDiv: HTMLDivElement, strRegionId: string) {
    const arrLi0 = objDiv.getElementsByTagName('li');
    const arrLi = GetArray(arrLi0);
    for (const objLi of arrLi) {
      const objChild = objLi.firstChild;
      if (objChild == null) continue;
      let strKeyId; //objChild.getAttribute('keyid');
      let objChild_Html;
      switch (objChild.nodeName) {
        case 'DIV':
          objChild_Html = <HTMLDivElement>objChild;
          strKeyId = objChild_Html.getAttribute('keyid');
          break;
        case 'INPUT':
          objChild_Html = <HTMLInputElement>objChild;
          strKeyId = objChild_Html.getAttribute('keyid');
          break;
        case 'SPAN':
          objChild_Html = <HTMLSpanElement>objChild;
          strKeyId = objChild_Html.getAttribute('keyid');
          break;
      }
      if (objChild_Html == null) continue;
      if (strKeyId == null) continue;
      const objFeatureRegionFld = await FeatureRegionFlds_GetObjByViewFeatureIdCache(
        strKeyId,
        strRegionId,
      );
      if (objFeatureRegionFld == null) continue;
      const objFeatureRegionFldEx = FeatureRegionFldsEx_CopyToEx(objFeatureRegionFld);
      await FeatureRegionFldsEx_FuncMapByFldName(
        clsFeatureRegionFldsENEx.con_CommandNameEx,
        objFeatureRegionFldEx,
      );
      await FeatureRegionFldsEx_FuncMapByFldName(
        clsFeatureRegionFldsENEx.con_FeatureName,
        objFeatureRegionFldEx,
      );

      objChild_Html?.setAttribute('data-toggle', 'tooltip');
      objChild_Html?.setAttribute('data-placement', 'top');
      objChild_Html?.setAttribute('data-html', 'true');
      const strMsg = Format(
        '功能/按钮文本:{0}<br/>命令名==>表名:{1}',
        objFeatureRegionFldEx.featureName,
        objFeatureRegionFldEx.commandNameEx,
      );
      objChild_Html?.setAttribute('title', strMsg);

      //console.error(objChild.nodeName, objChild.nodeType, strMsg);
    }
  }

  public async ShowButton4View(divContainer: HTMLDivElement, strViewId: string, strPrjId: string) {
    // console.log(strCmPrjId);
    if (divContainer == null) {
      const strMsg = Format('层在该界面不存在！');
      throw strMsg;
    }
    //divContainer.remove();
    divContainer.innerHTML = '';

    const arrvViewRegion0 = await ViewRegionEx_GetObjExLstByViewIdCache(
      strViewId,
      clsPrivateSessionStorage.cmPrjId,
    );
    let arrvViewRegion = arrvViewRegion0.map(ViewRegionEx_CopyToEx);

    arrvViewRegion = arrvViewRegion.sort(ViewRegionEx_SortFunByRegionTypeOrderNum);
    const arrRegionType_Sel = this.GetChecked();
    for (const objInFor of arrvViewRegion) {
      if (arrRegionType_Sel.indexOf(objInFor.regionTypeId) == -1) continue;
      const strTitle = Format('{0}功能:', objInFor.regionTypeName);
      await this.ShowButton4RegoinV2(
        divContainer,
        objInFor.regionId,
        strTitle,
        strPrjId,
        FeatureRegionFldsCRUDEx.applicationTypeId,
      );
      if (objInFor.regionTypeId == enumRegionType.FeatureRegion_0008) {
        //divFeatureRegion4Preview.style["width"] = Format("{0}px", objInFor.width);
      }
    }
  }

  public async ShowFeatureLst(divContainer: HTMLDivElement) {
    if (divContainer == null) {
      const strMsg = Format('功能列表层在该界面不存在！');
      throw strMsg;
    }
    divContainer.innerHTML = '';

    let arrPrjFeature: Array<clsPrjFeatureEN> = await PrjFeature_GetObjLstAsync('1=1');

    arrPrjFeature = arrPrjFeature.filter(
      (x) => x.featureTypeId == enumPrjFeatureType.FrontInterface_01 && x.inUse == true,
    );

    const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(enumCtlType.Button_01);
    if (objCtlTypeAbbr == null) {
      const strMsg = Format(
        '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
        enumCtlType.Button_01,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const arrControls: Array<ASPControlEx> = arrPrjFeature.map((x) =>
      clsASPButtonBLEx.GetButton_PrjFeature(x, objCtlTypeAbbr, 'btn btn-outline-primary btn-sm'),
    );
    arrControls.forEach((x) => {
      x.isHasFunc4OnClick = true;
      x.func4OnClick = clsPubFun4Feature.btnSel_Click1;
    });
    const objTable: ASPHtmlTableEx = await clsASPHtmlTableBLEx.PackageByTable4FeatureLst(
      arrControls,
      2,
    );
    objTable.class += ' margin-bottom:0px';
    const objDiv: HTMLDivElement = document.createElement('div');

    clsASPHtmlTableBLEx.GeneHtmlControl(objTable, objDiv); // new HtmlGenericControl("");
    divContainer.appendChild(objDiv);
  }
  /*
   * 区域类型Id
   */
  public set regionTypeId(value: string) {
    $('#ddlRegionTypeId').val(value);
  }

  /*
   * 区域类型Id
   */
  public get regionTypeId(): string {
    const strValue = GetSelectValueInDivObj(refDivLeftMenu.value, 'ddlRegionTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  // public get q1sRegionId() {
  //   const strName = 'regionId';
  //   const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
  //   const r = window.location.search.substr(1).match(reg);
  //   if (r != null) {
  //     return unescape(r[2]);
  //   }
  //   return '';
  // }
  public get qsViewId() {
    const strName = 'viewId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }

  /** 显示FeatureRegionFlds对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * divContainer 显示容器
   * arrFeatureRegionFldsExObjLst 需要绑定的对象列表
   */
  public async BindTab_FeatureRegionFlds4Func(
    divContainer: HTMLDivElement,
    arrFeatureRegionFldsExObjLst: Array<clsFeatureRegionFldsENEx>,
  ) {
    const strThisFuncName = this.BindTab_FeatureRegionFlds4Func.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'seqNum',
        sortBy: 'seqNum',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '字段序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'featureName',
        sortBy: 'featureName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '功能/按钮文本',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clsFeatureRegionFldsENEx.con_CommandNameEx,
        sortBy: clsFeatureRegionFldsENEx.con_CommandNameEx,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '命令名==>表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },

      {
        fldName: 'relaFldName',
        sortBy: 'relaFldName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '相关字段',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrFeatureRegionFldsExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    await BindTab(divDataLst, arrFeatureRegionFldsExObjLst, arrDataColumn, 'viewFeatureId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async ExtendFldFuncMap(
    arrFeatureRegionFldsExObjLst: Array<clsFeatureRegionFldsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsFeatureRegionFldsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrFeatureRegionFldsExObjLst) {
        try {
          await FeatureRegionFldsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
        } catch (e) {
          const strMsg = Format(
            '扩展字段值映射出错。字段名:[{0}],{1}.(in {2}.{3})',
            objDataColumn.fldName,
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
      }
    }
  }

  public SetClass4NotInUse(
    divContainer: HTMLDivElement,
    arrFeatureRegionFldsEx: Array<clsFeatureRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objFeatureRegionFld = arrFeatureRegionFldsEx.find(
        (x) => x.viewFeatureId.toString() == strId,
      );
      if (objFeatureRegionFld != null) {
        if (objFeatureRegionFld.inUse == false) {
          x.className = 'text-muted bg-info';
        } else if (IsNullOrEmpty(objFeatureRegionFld.trClass) == false) {
          x.className = objFeatureRegionFld.trClass;
        }
      }
    });
  }

  /** 根据条件获取相应的对象列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
*/
  public async BindGv_FeatureRegionFlds4Func(divList: HTMLDivElement) {
    if (FeatureRegionFldsCRUDEx.ActiveTabName != enumActiveTabName.DataList_02) return;

    if (viewVarSet.sortFeatureRegionFldsBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortFeatureRegionFldsBy)为空，请检查！(In BindGv_FeatureRegionFldsCache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objFeatureRegionFlds_Cond = await this.CombineFeatureRegionFldsConditionObj();

    const strWhereCond = JSON.stringify(objFeatureRegionFlds_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrFeatureRegionFldsExObjLst: Array<clsFeatureRegionFldsENEx> = [];
    try {
      this.recCount = await FeatureRegionFlds_GetRecCountByCondCache(
        objFeatureRegionFlds_Cond,
        RegionId_Static.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objFeatureRegionFlds_Cond,
        orderBy: viewVarSet.sortFeatureRegionFldsBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrFeatureRegionFldsExObjLst = await FeatureRegionFldsEx_GetObjExLstByPagerCache(
        objPagerPara,
        RegionId_Static.value,
      );
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    if (arrFeatureRegionFldsExObjLst.length == 0) {
      const strKey = `${clsFeatureRegionFldsEN._CurrTabName}_${RegionId_Static.value}`;
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);

      alert(strMsg);
      return;
    }
    try {
      arrFeatureRegionFldsExObjLst = arrFeatureRegionFldsExObjLst.sort(
        FeatureRegionFldsEx_SortFunByInUseAndSeq,
      );
      await this.BindTab_FeatureRegionFlds4Func(divList, arrFeatureRegionFldsExObjLst);
      await this.SetClass4NotInUse(divList, arrFeatureRegionFldsExObjLst);
      await this.ShowErrMsg(divList, arrFeatureRegionFldsExObjLst);
      await this.SetFieldNameNotInCurrTab(divList, arrFeatureRegionFldsExObjLst);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async SetFieldNameNotInCurrTab(
    divContainer: HTMLDivElement,
    arrFeatureRegionFldsEx: Array<clsFeatureRegionFldsENEx>,
  ) {
    const viewRegionStore = useviewRegionStore();
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    for (const objRowElement of arrElement) {
      const strId = objRowElement.id.substring(2);
      const objFeatureRegionFlds = arrFeatureRegionFldsEx.find(
        (x) => x.viewFeatureId.toString() == strId,
      );
      if (objFeatureRegionFlds == null) continue;
      if (IsNullOrEmpty(objFeatureRegionFlds.releFldId)) continue;
      const strCurrTabId = await viewRegionStore.getTabId(RegionId_Static.value);
      if (IsNullOrEmpty(strCurrTabId)) continue;
      const arrFldId = await PrjTabFldEx_GetFldIdLstByTabIdCache(strCurrTabId);
      if (arrFldId.indexOf(objFeatureRegionFlds.releFldId) == -1) {
        objRowElement.className = 'text-muted bg-danger';
      } else if (IsNullOrEmpty(objFeatureRegionFlds.trClass) == false) {
        objRowElement.className = objFeatureRegionFlds.trClass;
      }
    }
  }

  public async btnCopyFldFromRelaTab_Click() {
    //自定义功能;
    try {
      await FeatureRegionFldsEx_ImportRelaFlds(
        RegionId_Static.value,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);

      await this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
      const arrKeyId = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(refDivVisualEffects.value, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `导入相关字段不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /** 设置字段值-inUse
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
*/
  public async btnSetInUse_Click() {
    try {
      const arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds);
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
      const arrKeyId = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(refDivVisualEffects.value, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetInUse_Click())`;
      alert(strMsg);
    }
  }
  /** 设置字段值-inUse
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
    */
  public async btnSetNotInUse_Click() {
    try {
      const arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetNotInUse(arrKeyIds);
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
      const arrKeyId = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(refDivVisualEffects.value, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetNotInUse_Click())`;
      alert(strMsg);
    }
  }

  /**
   * 把一个扩展类的部分属性进行函数转换
   * @param objViewRegion 源对象
   */
  public async FuncMap4ViewRegion(objViewRegion: clsViewRegionENEx) {
    const strThisFuncName = this.FuncMap4ViewRegion.name;
    try {
      {
        const RegionType_RegionTypeId = objViewRegion.regionTypeId;
        const RegionType_RegionTypeName = await RegionType_func(
          clsRegionTypeEN.con_RegionTypeId,
          clsRegionTypeEN.con_RegionTypeName,
          RegionType_RegionTypeId,
        );
        objViewRegion.regionTypeName = RegionType_RegionTypeName;
      }

      {
        const RegionType_RegionTypeId = objViewRegion.regionTypeId;
        const RegionType_RegionTypeOrderNum = await RegionType_func(
          clsRegionTypeEN.con_RegionTypeId,
          clsRegionTypeEN.con_RegionTypeOrderNum,
          RegionType_RegionTypeId,
        );
        objViewRegion.regionTypeOrderNum = Number(RegionType_RegionTypeOrderNum);
      }

      {
        const PrjTabTabId = objViewRegion.tabId;
        const PrjTabTabName = await vPrjTab_SimEx_func(
          clsPrjTabEN.con_TabId,
          clsPrjTabEN.con_TabName,
          PrjTabTabId,
        );
        objViewRegion.tabName = PrjTabTabName;
      }
    } catch (e: any) {
      const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }
  /**
   * 同步表格中被选项的位置
   * */
  public async SynchCheckedPos4Gv() {
    // const strListDiv = divDataList;
    const strKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (strKeyIds.length == 0) {
      console.error('请选择需要同步选择的记录！');
      return;
    }
    SelectManyCtrlByKeyId(refDivVisualEffects.value, strKeyIds);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrViewFeatureId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync(
        arrViewFeatureId,
      );

      let intCount = 0;
      for (const objInFor of arrFeatureRegionFldsObjLst) {
        const strMaxStrId = await FeatureRegionFlds_GetMaxStrIdAsync();
        objInFor.viewFeatureId = strMaxStrId;
        objInFor.buttonName = Format('C_{0}', objInFor.buttonName);
        const returnBool = await FeatureRegionFlds_AddNewRecordAsync(objInFor);
        if (returnBool == true) {
          FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      alert(strMsg);
    }
  }
  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCopyRecord_Click() {
    const strThisFuncName = this.btnCopyRecord_Click.name;
    try {
      const arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCopyFldFromTemplate_Click() {
    const strThisFuncName = this.btnCopyFldFromTemplate_Click.name;
    try {
      await FeatureRegionFldsEx_ImportRelaFlds(
        RegionId_Static.value,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      this.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public get qsOp() {
    const strName = 'Op';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public async btnCodeGene_Click() {
    try {
      if (FeatureRegionFldsCRUDEx.bolIsGeneCodeRegion == true) return;
      await this.ShowCodeTypeButton(FeatureRegionFldsCRUDEx.strViewId4Region);
      FeatureRegionFldsCRUDEx.bolIsGeneCodeRegion = true;
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetColSpan_Click())`;
      alert(strMsg);
    }
  }
  public async ShowCodeTypeButton(strViewId: string) {
    const strThisFuncName = this.ShowCodeTypeButton.name;

    const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(
      strViewId,
      clsPrivateSessionStorage.cmPrjId,
    );
    const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(
      FeatureRegionFldsCRUDEx.applicationTypeId,
    );
    if (objApplicationType == null) {
      const strMsg = Format(
        '应用Id:[{0}]，没有相应的类型，请检查！',
        FeatureRegionFldsCRUDEx.applicationTypeId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const arrAppCodeTypeRelaObjLst = await AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache(
      FeatureRegionFldsCRUDEx.applicationTypeId,
    );
    let arrAppCodeTypeRelaExObjLst: Array<clsAppCodeTypeRelaENEx> = arrAppCodeTypeRelaObjLst.map(
      AppCodeTypeRelaEx_CopyToEx,
    );
    for (const x of arrAppCodeTypeRelaExObjLst) {
      const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(x.codeTypeId);
      if (objCodeType == null) {
        const strMsg = Format('代码类型Id:[{0}]，没有相应的类型，请检查！', x.codeTypeId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const strGroupName1 = objCodeType.groupName;
      const arrGroupName1 = strGroupName1.split(',');
      x.groupName = arrGroupName1[0];
    }
    arrAppCodeTypeRelaExObjLst = arrAppCodeTypeRelaExObjLst.sort(
      AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum,
    );
    for (const objInFor of arrAppCodeTypeRelaExObjLst) {
      await AppCodeTypeRelaEx_FuncMapByFldName(
        clsAppCodeTypeRelaENEx.con_ApplicationTypeName,
        objInFor,
      );
      await AppCodeTypeRelaEx_FuncMapByFldName(clsAppCodeTypeRelaENEx.con_DependsOn, objInFor);
      await AppCodeTypeRelaEx_FuncMapByFldName(clsAppCodeTypeRelaENEx.con_GroupName, objInFor);
      await AppCodeTypeRelaEx_FuncMapByFldName(
        clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName,
        objInFor,
      );
      await AppCodeTypeRelaEx_FuncMapByFldName(clsAppCodeTypeRelaENEx.con_CodeTypeName, objInFor);
      await AppCodeTypeRelaEx_FuncMapByFldName(
        clsAppCodeTypeRelaENEx.con_CodeTypeSimName,
        objInFor,
      );

      await AppCodeTypeRelaEx_FuncMapByFldName(
        clsAppCodeTypeRelaENEx.con_ProgLangTypeName,
        objInFor,
      );
    }
    arrAppCodeTypeRelaExObjLst = arrAppCodeTypeRelaExObjLst.filter(
      (x) => x.codeTypeName.indexOf('界面') > -1,
    );
    let intCount = 0;
    const arrObjLst_V2: Array<clsAppCodeTypeRelaENEx> = arrAppCodeTypeRelaExObjLst.filter(
      (x) => x.dependsOn == 'View',
    );
    const divCodeTypeLst = <HTMLDivElement>document.getElementById('divCodeTypeLst');
    divCodeTypeLst.innerHTML = '';
    const arrGroupName0 = arrObjLst_V2.map((x) => x.groupName);

    const arrGroupName: Array<string> = GetDistinctArray(arrGroupName0);
    for (const strGroupName of arrGroupName) {
      for (const objInFor of arrObjLst_V2) {
        if (objInFor.groupName != strGroupName) continue;
        let bolIsExistRegion = true;
        let arr;
        switch (objInFor.codeTypeId) {
          case enumCodeType.WA_ViewScript_Edit_TS_0243:
          case enumCodeType.WA_ViewScript_EditCS_TS_0248:
          case enumCodeType.WA_ViewScript_EditCSEx_TS_0249:
            arr = arrViewRegion.filter((x) => x.regionTypeId == enumRegionType.EditRegion_0003);
            if (arr.length == 0) bolIsExistRegion = false;
            break;
          case enumCodeType.WA_ViewScript_Detail_TS_0244:
          case enumCodeType.WA_ViewScript_DetailCS_TS_0251:
          case enumCodeType.WA_ViewScript_DetailCSEx_TS_0252:
            arr = arrViewRegion.filter((x) => x.regionTypeId == enumRegionType.DetailRegion_0006);
            if (arr.length == 0) bolIsExistRegion = false;
            break;
        }
        const objButton = <HTMLButtonElement>document.createElement('button');
        objButton.value = Format('{0}({1})', objInFor.codeTypeName, objInFor.progLangTypeName);
        objButton.id = Format('btn{0}', objInFor.codeTypeId);
        if (bolIsExistRegion == false) {
          objButton.setAttribute('disabled', 'disabled');
          objButton.className = 'btn btn-outline-primary btn-sm disabled';
        } else {
          objButton.onclick = function (this) {
            // GeneViewCodeEx.btnCodeType_Click(this, event);
          };
          objButton.className = 'btn btn-outline-primary btn-sm';
        }
        objButton.setAttribute('style', 'margin-right:10px;margin-top:5px;left:0px;');

        const objHtmlInputButton = <HTMLInputElement>document.createElement('input');
        objHtmlInputButton.type = 'button';
        objHtmlInputButton.id = Format('btn{0}1', objInFor.codeTypeId);

        objHtmlInputButton.name = Format('btn{0}1', objInFor.codeTypeId);
        if (bolIsExistRegion == false) {
          objHtmlInputButton.setAttribute(
            'class',
            'btn btn-outline-secondary btn-sm ml-2 disabled',
          );
          objHtmlInputButton.setAttribute('disabled', 'disabled');
          objHtmlInputButton.title = '该界面无相关区域';
        } else {
          objHtmlInputButton.setAttribute('class', 'btn btn-outline-primary btn-sm ml-2');
        }

        objHtmlInputButton.setAttribute('codeTypeId', objInFor.codeTypeId);
        objHtmlInputButton.setAttribute('viewId', strViewId);
        objHtmlInputButton.setAttribute(
          'applicationTypeId',
          FeatureRegionFldsCRUDEx.applicationTypeId.toString(),
        );
        objHtmlInputButton.onclick = function (this) {
          // GeneViewCodeEx.btnCodeType_Click(this, event);
        };
        objHtmlInputButton.value = Format(
          '{0}({1})',
          objInFor.codeTypeSimName,
          objInFor.progLangTypeSimName,
        );

        const strStrLen = GetWidthByWordStr(objHtmlInputButton.value);
        objButton.setAttribute(
          'style',
          Format('margin-right:10px;margin-top:5px;left:0px;width:{0}px', strStrLen),
        );
        divCodeTypeLst.appendChild(objHtmlInputButton);
        intCount++;
      }
      if (intCount == 0) {
        const strMsg = Format(
          '应用:{0}({1})没有用于[View]相应的代码类型.(In {2}.{3})',
          objApplicationType.applicationTypeName,
          objApplicationType.applicationTypeId,
          this.constructor.name,
          strThisFuncName,
        );
        alert(strMsg);
        return;
      }
    }
  }
  public ShowErrMsg(
    divContainer: HTMLDivElement,
    arrFeatureRegionFldsEx: Array<clsFeatureRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objFeatureRegionFlds = arrFeatureRegionFldsEx.find(
        (x) => x.viewFeatureId.toString() == strId,
      );
      if (objFeatureRegionFlds != null) {
        if (objFeatureRegionFlds.errMsg != null && objFeatureRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objFeatureRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objFeatureRegionFlds.trClass) == false) {
          x.className = objFeatureRegionFlds.trClass;
        }
      }
    });
  }
  public async VisualEffects1(divContainer: HTMLDivElement) {
    const strViewId = clsPrivateSessionStorage.viewId_Main;
    console.log(divContainer, strViewId);
  }
  public async VisualEffects(divContainer: HTMLDivElement, strRegionId: string) {
    const strThisFuncName = this.VisualEffects.name;
    console.log(strRegionId);
    const strViewId = clsPrivateSessionStorage.viewId_Main;
    if (divContainer == null) {
      const strMsg = Format('层在该界面不存在！');
      throw strMsg;
    }

    divContainer.innerHTML = '';

    if (IsNullOrEmpty(strViewId) == true) {
      const strMsg = Format(
        '在功能区域可视化时，界面Id为空！(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      return;
    }
    await this.ShowButton4View(divContainer, strViewId, clsPrivateSessionStorage.currSelPrjId);
    this.SetEvent(divContainer);
  }

  public async ShowButton4Regoin(
    strContainer: string,
    strRegionId: string,
    strTabName: string,
    strPrjId: string,
    intApplicationTypeId: number,
  ) {
    const strThisFuncName = this.ShowButton4Regoin.name;
    const viewRegionStore = useviewRegionStore();
    const objViewRegion = await viewRegionStore.getObj(strRegionId);
    if (objViewRegion == null) {
      const strMsg = Format(
        '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        strRegionId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const divContainer: HTMLDivElement = document.getElementById(strContainer) as HTMLDivElement;
    if (divContainer == null) {
      const strMsg = Format('层:[{0}]在该界面不存在！', strContainer);
      throw strMsg;
    }

    divContainer.innerHTML = '';
    const arrControls = await clsFeatureRegionFldsBLEx.GetControlLst4Regoin(
      strRegionId,
      strPrjId,
      intApplicationTypeId,
      true,
    );
    if (arrControls == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const arrControlGroupLst: Array<ASPControlGroupEx> = arrControls
      .sort((x) => x.orderNum)
      .map(clsASPControlGroupBLEx.GetControlGroup)
      .sort((x, y) => x.groupName.localeCompare(y.groupName));
    let arrControlGroupLst_New: Array<ASPControlGroupEx> =
      clsASPControlGroupBLEx.MergeControlGroup(arrControlGroupLst);

    const objASPUlENEx: ASPUlEx = clsASPUlBLEx.GetEmptyUl();
    objASPUlENEx.class = 'nav';
    let objASPLiENEx: ASPLiEx = clsASPLiBLEx.GetEmptyLi();
    objASPLiENEx.class = 'nav-item';
    objASPLiENEx.style = 'width:250px;';

    objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    //列表标题
    const objASPSpanENEx: ASPSpanEx = clsASPSpanBLEx.GetDataListTitle('aa', strTabName);
    objASPLiENEx.arrSubAspControlLst2.push(objASPSpanENEx);
    arrControlGroupLst_New = arrControlGroupLst_New.sort((x) => x.orderNum);

    for (const objInFor of arrControlGroupLst_New) {
      objASPLiENEx = clsASPLiBLEx.GetEmptyLi();
      objASPLiENEx.class = 'nav-item ml-3';
      objASPLiENEx.arrSubAspControlLst2.push(objInFor);
      objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    }

    objASPLiENEx = clsASPLiBLEx.GetEmptyLi();
    objASPLiENEx.class = 'nav-item ml-3';

    objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    //列表标题
    const objASPSpanENEx_Msg: ASPSpanEx = clsASPSpanBLEx.GetDataListMsg(strRegionId);
    objASPLiENEx.arrSubAspControlLst2.push(objASPSpanENEx_Msg);
    const objDiv: HTMLDivElement = document.createElement('div');

    clsASPUlBLEx.GeneHtmlControl(objASPUlENEx, objDiv); // new HtmlGenericControl("");

    divContainer.appendChild(objDiv);
  }
  private async ShowButton4RegoinV2(
    divContainer: HTMLDivElement,
    strRegionId: string,
    strRegionTitleName: string,
    strPrjId: string,
    intApplicationTypeId: number,
  ) {
    const strThisFuncName = this.ShowButton4RegoinV2.name;

    if (divContainer == null) {
      const strMsg = Format('层在该界面不存在！');
      throw strMsg;
    }
    divContainer.innerHTML = '';

    let arrControls = await clsFeatureRegionFldsBLEx.GetControlLst4Regoin(
      strRegionId,
      strPrjId,
      intApplicationTypeId,
      true,
    );
    if (arrControls == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    arrControls = arrControls.sort(FeatureRegionFldsCRUDEx.SortFun_OrderNum);

    const objASPUlENEx: ASPUlEx = clsASPUlBLEx.GetEmptyUl();
    objASPUlENEx.class = 'nav';
    let objASPLiENEx: ASPLiEx = clsASPLiBLEx.GetEmptyLi();
    objASPLiENEx.class = 'nav-item';
    objASPLiENEx.style = 'width:250px;';

    objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    //列表标题
    const objASPSpanENEx: ASPSpanEx = clsASPSpanBLEx.GetDataListTitle(
      Format('aa{0}', strRegionId),
      strRegionTitleName,
    );
    objASPSpanENEx.text = strRegionTitleName;
    objASPLiENEx.arrSubAspControlLst2.push(objASPSpanENEx);
    for (const objInFor of arrControls.sort((x) => x.orderNum)) {
      objASPLiENEx = clsASPLiBLEx.GetEmptyLi();
      objASPLiENEx.class = 'nav-item ml-3';
      objASPLiENEx.arrSubAspControlLst2.push(objInFor);
      objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    }

    objASPLiENEx = clsASPLiBLEx.GetEmptyLi();
    objASPLiENEx.class = 'nav-item ml-3';

    objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    //列表标题
    const objASPSpanENEx_Msg: ASPSpanEx = clsASPSpanBLEx.GetDataListMsg(strRegionId);
    objASPLiENEx.arrSubAspControlLst2.push(objASPSpanENEx_Msg);
    const objDiv: HTMLDivElement = document.createElement('div');

    clsASPUlBLEx.GeneHtmlControl(objASPUlENEx, objDiv); // new HtmlGenericControl("");
    this.AttachTooltip(objDiv, strRegionId);
    divContainer.appendChild(objDiv);
  }
  private async ShowButton4RegoinV3(
    strContainer: string,
    strRegionId: string,
    strRegionTitleName: string,
    strPrjId: string,
    intApplicationTypeId: number,
  ) {
    const strThisFuncName = this.ShowButton4RegoinV3.name;

    const divContainer: HTMLDivElement = document.getElementById(strContainer) as HTMLDivElement;
    if (divContainer == null) {
      const strMsg = Format('层:[{0}]在该界面不存在！', strContainer);
      throw strMsg;
    }

    divContainer.innerHTML = '';

    let arrControls = await clsFeatureRegionFldsBLEx.GetControlLst4Regoin(
      strRegionId,
      strPrjId,
      intApplicationTypeId,
      true,
    );
    if (arrControls == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    arrControls = arrControls.sort(FeatureRegionFldsCRUDEx.SortFun_OrderNum);
    const arrControlGroupLst: Array<ASPControlGroupEx> = arrControls.map(
      clsASPControlGroupBLEx.GetControlGroup,
    );

    if (arrControlGroupLst.length == 0) return;

    const arrControlGroupLst_New: Array<ASPControlGroupEx> =
      clsASPControlGroupBLEx.MergeControlGroup(arrControlGroupLst);

    const objASPUlENEx: ASPUlEx = clsASPUlBLEx.GetEmptyUl();
    objASPUlENEx.class = 'nav';
    let objASPLiENEx: ASPLiEx = clsASPLiBLEx.GetEmptyLi();
    objASPLiENEx.class = 'nav-item';
    objASPLiENEx.style = 'width:250px;';

    objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    //列表标题
    const objASPSpanENEx: ASPSpanEx = clsASPSpanBLEx.GetDataListTitle(
      Format('aa{0}', strRegionId),
      strRegionTitleName,
    );
    objASPSpanENEx.text = strRegionTitleName;
    objASPLiENEx.arrSubAspControlLst2.push(objASPSpanENEx);
    for (const objInFor of arrControlGroupLst_New.sort((x) => x.orderNum)) {
      objASPLiENEx = clsASPLiBLEx.GetEmptyLi();
      objASPLiENEx.class = 'nav-item ml-3';
      objASPLiENEx.arrSubAspControlLst2.push(objInFor);
      objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    }

    objASPLiENEx = clsASPLiBLEx.GetEmptyLi();
    objASPLiENEx.class = 'nav-item ml-3';

    objASPUlENEx.arrSubAspControlLst2.push(objASPLiENEx);
    //列表标题
    const objASPSpanENEx_Msg: ASPSpanEx = clsASPSpanBLEx.GetDataListMsg(strRegionId);
    objASPLiENEx.arrSubAspControlLst2.push(objASPSpanENEx_Msg);
    const objDiv: HTMLDivElement = document.createElement('div');

    clsASPUlBLEx.GeneHtmlControl(objASPUlENEx, objDiv); // new HtmlGenericControl("");
    divContainer.appendChild(objDiv);
  }
  public static GetSelectedKeyIdLst(divList: HTMLDivElement): Array<string> {
    if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divList);
      return arrKeyIds;
    } else {
      const strSelectedKeyIds = FeatureRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        refDivVisualEffects.value,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      return arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
    }
  }
  public static AddToSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = FeatureRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    arrmId.push(strKeyId);
    const strSelectedKeyIds_2 = arrmId.join(',');
    FeatureRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  public static RemoveFromSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = FeatureRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const arrmId_2 = arrmId.filter((x) => x != strKeyId);
    const strSelectedKeyIds_2 = arrmId_2.join(',');
    FeatureRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  /**
   * 是否选择某关键字的控件
   * @param strKeyId
   * @returns
   */
  public static IsSelectedKeyId(strKeyId: string): boolean {
    const strSelectedKeyIds = FeatureRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const bolExist: boolean = arrmId.indexOf(strKeyId) > -1 ? true : false;
    return bolExist;
  }

  /**
   * 下移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
   **/
  public async btnDownMove_Click() {
    const strThisFuncName = this.btnDownMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_DownMoveAsync(objOrderByData);
      const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
      arrFeatureRegionFldsObjLstCache.forEach((x) => {
        FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.viewFeatureId);
      });
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '下移记录出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      const strListDiv = divVarSet.refDivList;
      arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(strListDiv, e));
    }
  }

  /**
   * 上移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
   **/
  public async btnUpMove_Click() {
    const strThisFuncName = this.btnUpMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_UpMoveAsync(objOrderByData);
      const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
      arrFeatureRegionFldsObjLstCache.forEach((x) => {
        FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.viewFeatureId);
      });
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '上移记录出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      const strListDiv = divVarSet.refDivList;
      arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(strListDiv, e));
    }
  }

  /** 置顶
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
   **/
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置顶的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_GoTopAsync(objOrderByData);
      const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
      arrFeatureRegionFldsObjLstCache.forEach((x) => {
        FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.viewFeatureId);
      });
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '置顶出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      const strListDiv = divVarSet.refDivList;
      arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(strListDiv, e));
    }
  }
  public static GetFirstSelectedKeyId(divList: HTMLDivElement): string {
    if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divList);
      return strKeyId;
    } else {
      const strSelectedKeyIds = FeatureRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        refDivVisualEffects.value,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      const arrmId2 = arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
      if (arrmId2.length > 0) return arrmId2[0];
      return '';
    }
  }
  /**
   * 置底
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
   **/
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置底的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_GoBottomAsync(objOrderByData);
      const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
      arrFeatureRegionFldsObjLstCache.forEach((x) => {
        FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.viewFeatureId);
      });
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '置底出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }

    if (FeatureRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
      const strListDiv = divVarSet.refDivList;
      arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(strListDiv, e));
    }
  }
  /**
   * 重序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   **/
  public async btnReOrder_Click() {
    const strThisFuncName = this.btnReOrder_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_ReOrderAsync(objOrderByData);
      const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
      arrFeatureRegionFldsObjLstCache.forEach((x) => {
        FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.viewFeatureId);
      });
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '重序出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_FeatureRegionFlds4Func(divVarSet.refDivList);
  }

  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public SortColumn(sortColumnKey: string, sortDirection: string): void {
    console.log(sortColumnKey, sortDirection);
  }
}
