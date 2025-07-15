// import $ from 'jquery';
// import { GeneViewCodeEx } from '../PrjInterface/GeneViewCodeEx';
import { Ref } from 'vue';
import EditRegionFlds_EditEx from './EditRegionFlds_EditEx';
import ViewRegion_Detail_SimEx from './ViewRegion_Detail_SimEx';
import ViewRegion_Edit_SimEx from './ViewRegion_Edit_SimEx';
import { EditRegionFldsCRUD } from '@/viewsBase/RegionManage/EditRegionFldsCRUD';
import {
  NoSelectOneCtrl,
  NoSelectOneTdByKeyId,
  SelectManyCtrlByKeyId,
  SelectOneCtrl,
  SelectOneTdByKeyId,
  SetAllNotCheckedItems4Visible,
} from '@/ts/FunClass/clsPubFun4Visible';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { enumGCContainerType } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
import { ASPDivEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDivENEx';
import { ASPHtmlTableEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlTableENEx';
import { ASPUlEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPUlENEx';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { enumDDLItemsOption } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
import { clsEditRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsEN';
import { clsEditRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { clsASPDivBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPDivBLEx';
import { clsASPHtmlTableBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPHtmlTableBLEx';
import { clsASPUlBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPUlBLEx';
import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { GCVariable_GetNameByVarIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import {
  EditRegionFlds_GetObjBymIdCache,
  EditRegionFlds_GetObjExLstByPagerCache,
  EditRegionFlds_GetObjLstByPagerCache,
  EditRegionFlds_GetObjLstCache,
  EditRegionFlds_GetRecCountByCondCache,
  EditRegionFlds_ReFreshCache,
} from '@/ts/L3ForWApi/RegionManage/clsEditRegionFldsWApi';

import {
  EditRegionFldsEx_AdjustSequenceNumber,
  EditRegionFldsEx_CopyToEx,
  EditRegionFldsEx_FuncMapByFldName,
  EditRegionFldsEx_GetControlGroup,
  EditRegionFldsEx_GetObjExLstByRegionIdCacheEx,
  EditRegionFldsEx_ImportRelaFlds,
  EditRegionFldsEx_ReOrder,
  EditRegionFldsEx_SortFunByInUseAndSeq,
} from '@/ts/L3ForWApiEx/RegionManage/clsEditRegionFldsExWApi';
import {
  GetAllElementPropValueInDivObj,
  GetArray,
  GetCheckedKeyIdsInDivObj,
  GetDistinctArray,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, GetWidthByWordStr } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
import { enumCodeType } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';

import {
  AppCodeTypeRelaEx_CopyToEx,
  AppCodeTypeRelaEx_FuncMapByFldName,
  AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache,
  AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum,
} from '@/ts/L3ForWApiEx/GeneCode/clsAppCodeTypeRelaExWApi';
import {
  ViewRegionEx_GetObjLstByViewIdCache,
  ViewRegionEx_GetRegionIdByTypeCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { PrjTabFldEx_GetFldIdLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { vPrjTab_SimEx_GetNameByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Position_SetDiv_Bottom_FeatureRegion } from '@/ts/PubFun/clsPosition';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetCtrlIdEdit } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx2';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  CombineEditRegionFldsConditionObj,
  divVarSet,
  EditRegionFlds_DeleteKeyIdCache,
  refEditRegionFlds_Edit,
  RegionId_Static,
  TabId_Static,
  viewVarSet,
} from '@/views/RegionManage/EditRegionFldsVueShare';
import { RegionId_Static as RegionId_Static_Sim } from '@/views/RegionManage/ViewRegion_UVueShare';

import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

/** EditRegionFldsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class EditRegionFldsCRUDEx extends EditRegionFldsCRUD implements IShowList {
  public static GetPropValueV2: (strPropName: string) => any;
  public static EditRegionRef: Ref<any>;
  public divName4Detail4ViewRegion = 'divDetail4ViewRegion'; //详细信息区的Id
  public static strViewId4Region = ''; //编辑区的界面Id
  public static SelectedKeyIds = '';
  public strTabName4Region = '';
  public static bolIsGeneCodeRegion = false; //是否已经生成代码区域
  public static divVisualEffects: HTMLDivElement; // = GetUniDivInDoc('divVisualEffects');
  public static ActiveTabName = enumActiveTabName.VisualEffects_01;
  public static objCMProjects: clsCMProjectEN;
  //public static mstrListDiv=  "EditRegionFldsCRUDEx.divDataList";
  //public static mstrSortvEditRegionFldsBy=  "mId";
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
  BindOnlyGv() {
    viewVarSet.sortEditRegionFldsBy = 'seqNum Asc';

    this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
  }

  /**
   * 初始化编辑区，即绑定下拉框，赋初值等
   */
  public async InitEdit() {
    const objPageEdit: EditRegionFlds_EditEx = new EditRegionFlds_EditEx(
      'EditRegionFlds_EditEx',
      this,
    );
    // 为编辑区绑定下拉框
    await refEditRegionFlds_Edit.value.BindDdl4EditRegionInDiv();
    objPageEdit.bolIsLoadEditRegion = true;
  }
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
 */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: EditRegionFldsCRUDEx = new EditRegionFldsCRUDEx();
    const objPageEdit: EditRegionFlds_EditEx = new EditRegionFlds_EditEx(
      'EditRegionFlds_EditEx',
      objPage,
    );
    let strMsg = '';
    let arrKeyIds;
    // objPageEdit.divName4Edit = 'divEdit_Loc1';
    const objViewRegion_Edit_SimEx = new ViewRegion_Edit_SimEx('ViewRegion_Edit_SimEx', objPage);

    console.log(objViewRegion_Edit_SimEx);
    switch (strCommandName) {
      case 'CodeGene': //自定义功能
        objPage.btnCodeGene_Click();
        break;
      case 'CopyFldFromRelaTab': //自定义功能
        objPage.btnCopyFldFromRelaTab_Click();
        break;
      //case "CopyFldFromRelaTab":    //自定义功能
      //    objPage.CopyFldFromRelaTab();
      //    break;
      case 'Update_ViewRegion': //修改记录
        EditRegionFldsCRUDEx.EditRegionRef.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);

        break;
      case 'VisualEffects':
        objPage.VisualEffects(this.divVisualEffects, RegionId_Static.value);
        break;
      case 'SetInUse': //自定义功能
        objPage.btnSetInUse_Click();
        break;
      case 'SetNotInUse': //自定义功能
        objPage.btnSetNotInUse_Click();
        break;
      case 'SetIsNotMultiRow': //自定义功能
        objPage.btnSetIsNotMultiRow_Click();
        break;
      case 'SetIsMultiRow': //自定义功能
        objPage.btnSetIsMultiRow_Click();
        break;
      case 'SetColSpan': //自定义功能
        objPage.btnSetColSpan_Click();
        break;
      case 'SetWidth': //自定义功能
        objPage.btnSetWidth_Click();
        break;

      case 'CopyFromOtherView': //自定义功能
        objPage.CopyFromOtherView();
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
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (EditRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
          strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        }
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        // objPageEdit.divEdit = EditRegionFldsCRUDEx.GetPropValueV2('editDiv');
        objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        await objPage.btnGoTop_Click();
        // await objPage.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects);
        // objPage.SynchCheckedPos4Gv();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        await objPage.btnGoBottum_Click();
        // await objPage.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects);
        // objPage.SynchCheckedPos4Gv();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        await objPage.btnUpMove_Click();
        // await objPage.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects);
        // objPage.SynchCheckedPos4Gv();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        await objPage.btnDownMove_Click();
        // await objPage.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects);
        // objPage.SynchCheckedPos4Gv();
        break;
      case 'ReOrder': //重序记录
        await objPage.btnReOrder_Click();
        // await objPage.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects);
        //objPage.SynchCheckedPos4Gv();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'EditRegionFldsCRUDEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
  /*
 自定义功能
(AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_TS_btn_Click>b__4)
*/
  public CopyFldFromRelaTab() {
    //自定义功能;
  }
  /*
     自定义功能
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_TS_btn_Click>b__4)
    */
  public CopyFromOtherView() {
    //自定义功能;
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
*/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    const viewRegionStore = useviewRegionStore();
    // clsPrivateSessionStorage.viewId_Main = '00050322';
    // 在此处放置用户代码以初始化页面
    try {
      console.log('this.qsOp:', this.qsOp);
      switch (this.qsOp) {
        case 'ViewEdit':
          break;
        case 'ViewRegionEdit':
          break;

        case '':
          // await Main_ViewInfo.DispViewInfo();
          // await Main_ViewInfo.ShowCurrItem('EditRegionFldsCRUD', '');
          break;
      }
      Position_SetDiv_Bottom_FeatureRegion('tab1');
      EditRegionFldsCRUDEx.strViewId4Region = await clsPubVar4Web.GetViewId(this.qsViewId);

      //ViewRegion_U.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      //ViewRegion_Edit_Sim.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      const objCMProjects = await CMProject_GetObjByCmPrjIdCache(clsPrivateSessionStorage.cmPrjId);

      if (objCMProjects == null) {
        const strMsg = Format(
          '在CM项目Id:[{0}]中，没有相应CM项目，请检查！',
          clsPrivateSessionStorage.cmPrjId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      EditRegionFldsCRUDEx.objCMProjects = objCMProjects;

      const strViewId = clsPrivateSessionStorage.viewId_Main;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      RegionId_Static.value = await ViewRegionEx_GetRegionIdByTypeCache(
        strViewId,
        enumRegionType.EditRegion_0003,
        strCmPrjId,
      );

      const objViewRegion_Edit = await viewRegionStore.getObj(RegionId_Static.value);
      if (objViewRegion_Edit != null) {
        if (IsNullOrEmpty(objViewRegion_Edit.tabId) == true) {
          const strMsg = `编辑区的表Id为空，应该首先修正！页面启动不成功.(in ${this.constructor.name}.${strThisFuncName})`;
          alert(strMsg);
          return;
        }
        RegionId_Static.value = objViewRegion_Edit.regionId;

        TabId_Static.value = objViewRegion_Edit.tabId;

        this.strTabName4Region = await vPrjTab_SimEx_GetNameByTabIdCache(
          objViewRegion_Edit.tabId,
          clsPrivateSessionStorage.currSelPrjId,
        );
      }

      const objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
      RegionId_Static_Sim.value = RegionId_Static.value;
      await objViewRegion_Detail.btnDetailRecord_Click();
      //加载编辑区
      const objPageEditRegionFlds_Edit: EditRegionFlds_EditEx = new EditRegionFlds_EditEx(
        'EditRegionFlds_EditEx',
        this,
      );
      // const divEdit = EditRegionFldsCRUDEx.GetPropValueV2('editDiv');
      // objPageEditRegionFlds_Edit.divEdit = divEdit;

      // objPageEditRegionFlds_Edit.divName4Edit = 'divEdit_Loc1';
      // await objPageEditRegionFlds_Edit.AddDPV_Edit(objPageEditRegionFlds_Edit.divName4Edit);

      // 为编辑区绑定下拉框
      await refEditRegionFlds_Edit.value.BindDdl4EditRegionInDiv();

      objPageEditRegionFlds_Edit.bolIsLoadEditRegion = true;

      // viewVarSet.sortEditRegionFldsBy = 'seqNum Asc';
      // //2、显示无条件的表内容在GridView中
      // await this.BindGv_EditRegionFlds4Func();

      this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public CombinevEditRegionFldsConditionObj(): ConditionCollection {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    //var1 strViewId = clsPrivateSessionStorage.viviewId_MainewId;
    // const strWhereCond = `regionId='${this.qsRegionId}'`;
    const objvEditRegionFlds_Cond = new ConditionCollection();
    objvEditRegionFlds_Cond.SetCondFldValue(
      clsEditRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    //objvEditRegionFlds_Cond.SetCondFldValue(clsvEditRegionFldsEN.con_InUse, true, "=");
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    // try {

    // }
    // catch (objException: any) {
    //     const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineEditRegionFldsConditionObj)时出错!请联系管理员!${objException.message}`;
    //     throw strMsg;
    // }
    return objvEditRegionFlds_Cond;
  }

  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
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
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }
  public async VisualEffects(divContainer: HTMLDivElement, strRegionId: string) {
    //divContainer.remove();
    const viewRegionStore = useviewRegionStore();
    divContainer.innerHTML = '';
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

    const objDiv: HTMLDivElement = document.createElement('div');

    objDiv.id = 'div1';
    objDiv.style['width'] = `${objViewRegion.width}px`;
    //if (objViewRegion.isDisp == true) {
    let arrControlGroups;
    try {
      arrControlGroups = await EditRegionFldsEx_GetControlGroup(
        strRegionId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (arrControlGroups == undefined) {
        const strMsg = Format(
          '在项目:[{0}]中，区域Id:[{1}]中没有控件组，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strRegionId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      //console.log("1arrControlGroups", arrControlGroups);
    } catch (e: any) {
      alert(e);
      throw new Error(e);
    }
    let objTable: ASPHtmlTableEx;
    let objDiv_FormControl: ASPDivEx;
    let objFormInline: ASPDivEx;
    let objDivTable: ASPDivEx;
    let objUl: ASPUlEx;
    let objUl2: ASPUlEx;
    let objTable2: ASPHtmlTableEx;
    switch (objViewRegion.containerTypeId) {
      case enumGCContainerType.TableContainer_0001:
        objTable = await clsASPHtmlTableBLEx.PackageByTable4EditRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );
        objTable.width = objViewRegion.width;
        clsASPHtmlTableBLEx.GeneHtmlControl(objTable, objDiv);
        //console.log("1objTable", objTable);
        break;
      case enumGCContainerType.FormControl_0002:
        objDiv_FormControl = await clsASPDivBLEx.PackageByFormControl4EditRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );

        clsASPDivBLEx.GeneHtmlControl(objDiv_FormControl, objDiv);
        break;
      case enumGCContainerType.FormInline_0003:
        objFormInline = clsASPDivBLEx.PackageByFormInline4EditRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );

        clsASPDivBLEx.GeneHtmlControl(objFormInline, objDiv);
        break;
      case enumGCContainerType.DivTable_0004:
        objDivTable = clsASPDivBLEx.PackageByDivTable4EditRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );

        clsASPDivBLEx.GeneHtmlControl(objDivTable, objDiv);
        break;
      case enumGCContainerType.HorizontalListLi_0005:
        objUl = clsASPUlBLEx.PackageByUl4EditRegionH(arrControlGroups, objViewRegion.colNum);

        clsASPUlBLEx.GeneHtmlControl(objUl, objDiv);
        break;
      case enumGCContainerType.VerticalListLi_0006:
        objUl2 = clsASPUlBLEx.PackageByUl4EditRegionV(arrControlGroups, objViewRegion.colNum);
        clsASPUlBLEx.GeneHtmlControl(objUl2, objDiv);
        break;
      default:
        objTable2 = await clsASPHtmlTableBLEx.PackageByTable4EditRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );
        clsASPHtmlTableBLEx.GeneHtmlControl(objTable2, objDiv);
        break;
    }
    //console.log("1objDiv", objDiv);

    //}
    this.AttachTooltip(objDiv, strRegionId);
    divContainer.appendChild(objDiv);

    this.SetEvent(divContainer);
    const arrEditRegionFldsEx = await EditRegionFldsEx_GetObjExLstByRegionIdCacheEx(strRegionId);
    this.ShowErrMsgInVisualEffects(divContainer, arrEditRegionFldsEx);

    //pnlControlLst.appendChild(objDiv);
    //divEditRegion4Preview.style["width"] = `${objViewRegion.width}px`;
  }

  public async AttachTooltip(objDiv: HTMLDivElement, strRegionId: string) {
    const arrTd0 = objDiv.getElementsByTagName('td');
    const arrTd = GetArray(arrTd0);
    for (const objTd of arrTd) {
      const objChild = objTd.firstChild;
      if (objChild == null) continue;
      let strKeyId; //objChild.getAttribute('keyid');
      // let objChild_Div;
      // let objChild_Input;
      // let objChild_Span;
      let objChild_Html;
      //console.error(objChild.nodeName, objChild.nodeType);
      switch (objChild.nodeName) {
        case 'DIV':
          objChild_Html = <HTMLDivElement>objChild;
          strKeyId = objChild_Html.getAttribute('keyid');
          break;
        case 'INPUT':
          objChild_Html = <HTMLInputElement>objChild;
          strKeyId = objChild_Html.getAttribute('keyid');
          break;
        case 'SELECT':
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
      const objEditRegionFld = await EditRegionFlds_GetObjBymIdCache(Number(strKeyId), strRegionId);
      if (objEditRegionFld == null) continue;
      const objEditRegionFldEx = EditRegionFldsEx_CopyToEx(objEditRegionFld);
      await EditRegionFldsEx_FuncMapByFldName(
        clsEditRegionFldsENEx.con_FldNameV2,
        objEditRegionFldEx,
      );
      await EditRegionFldsEx_FuncMapByFldName(
        clsEditRegionFldsENEx.con_CtlTypeName,
        objEditRegionFldEx,
      );

      //const strData_Toggle = objChild_Html.getAttribute("data-toggle");
      //if (IsNullOrEmpty(strData_Toggle) == true)
      objChild_Html?.setAttribute('data-toggle', 'tooltip');
      objChild_Html?.setAttribute('data-placement', 'top');
      objChild_Html?.setAttribute('data-html', 'true');
      const strMsg = Format(
        '字段名:{0}<br/>控件类型:{1}',
        objEditRegionFldEx.fldNameV2,
        objEditRegionFldEx.ctlTypeName,
      );
      objChild_Html?.setAttribute('title', strMsg);

      //console.error(objChild.nodeName, objChild.nodeType, strMsg);
    }
  }
  public static async ControlClick(thisControl: any, event: any) {
    const thisA = <HTMLElement>thisControl;
    const strId = thisA.getAttribute('keyId');
    if (strId == null) {
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

    //const strCtrlId=  thisA.id;
    //console.log("strCtrlId", strCtrlId);
    //let strCtrlId2 = thisA.getAttribute("ctrlId");
    //console.log("strCtrlId2", strCtrlId2);

    const bolExist = EditRegionFldsCRUDEx.IsSelectedKeyId(strId);
    if (bolIsPressShift === true) {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(EditRegionFldsCRUDEx.divVisualEffects, strId);

        EditRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        // if (divList != null) SetCheckedItem4KeyId(divList, strId);
        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(EditRegionFldsCRUDEx.divVisualEffects, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        EditRegionFldsCRUDEx.btn_Click('Update', strId);

        EditRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
      }
    } else {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyIdObj(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(EditRegionFldsCRUDEx.divVisualEffects, strId);

        EditRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        SetAllNotCheckedItems4Visible(EditRegionFldsCRUDEx.divVisualEffects);
        EditRegionFldsCRUDEx.SelectedKeyIds = '';
        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(EditRegionFldsCRUDEx.divVisualEffects, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        EditRegionFldsCRUDEx.btn_Click('Update', strId);
        EditRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
        // if (divList != null) {
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
          EditRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLst00 = objDiv.getElementsByTagName('textarea');
    const arrElement00 = GetArray(objLst00);
    for (const objTextArea of arrElement00) {
      (function () {
        objTextArea.onclick = function (this) {
          EditRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLst1 = objDiv.getElementsByTagName('select');
    arrElement = GetArray(objLst1);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          EditRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }

    const objA = objDiv.getElementsByTagName('a');
    arrElement = GetArray(objA);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          EditRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
  }

  /** 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
 */
  public async BindGv_EditRegionFldsCacheBak(divList: HTMLDivElement) {
    const objvEditRegionFlds_Cond = this.CombinevEditRegionFldsConditionObj();
    objvEditRegionFlds_Cond.SetCondFldValue(
      clsEditRegionFldsEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
      '=',
    );

    const strWhereCond = JSON.stringify(objvEditRegionFlds_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    const arrvEditRegionFldsObjLst: Array<clsEditRegionFldsEN> = [];
    let strVarName;
    let arrEditRegionFldsExObjLst;
    try {
      this.recCount = await EditRegionFlds_GetRecCountByCondCache(
        objvEditRegionFlds_Cond,
        RegionId_Static.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objvEditRegionFlds_Cond,
        orderBy: viewVarSet.sortEditRegionFldsBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      const arrEditRegionFldsObjLst = await EditRegionFlds_GetObjLstByPagerCache(
        objPagerPara,
        RegionId_Static.value,
      );
      arrEditRegionFldsExObjLst = arrEditRegionFldsObjLst.map(EditRegionFldsEx_CopyToEx);

      for (const objInFor of arrEditRegionFldsExObjLst) {
        objInFor.ctrlId = GetCtrlIdEdit(objInFor);
      }

      for (const objInFor of arrEditRegionFldsExObjLst) {
        objInFor.ctrlId = GetCtrlIdEdit(objInFor);
        objInFor.fldName = Format('{0}({1})', objInFor.fldName, objInFor.labelCaption);

        // const dsTabName = await vPrjTab_SimEx_GetNameByTabIdCache(
        //   objInFor.tabId,
        //   clsPrivateSessionStorage.cmPrjId,
        // );
        //const DS_DataValueFieldName = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.dsDataValueFieldId, clsPrivateSessionStorage.cmPrjId);
        //const DS_DataTextFieldName = await vFieldTab_Sim_GetNameByFldIdCache(objInFor.dsDataTextFieldId, clsPrivateSessionStorage.cmPrjId);

        switch (objInFor.ctlTypeId) {
          case enumCtlType.TextBox_16:
            break;
          case enumCtlType.TextArea_41:
            break;
          case enumCtlType.DropDownList_06:
            if (objInFor.ddlItemsOptionId == enumDDLItemsOption.TrueAndFalseList_04) {
              //    objInFor.ctlTypeName = Format("Ddl-绑定:<br/>真假列表",
              //        dsTabName, DS_DataValueFieldName, DS_DataTextFieldName);
            } else {
              //    objInFor.ctlTypeName = Format("Ddl-绑定:<br/>表: {0}<br/>值: {1}<br/>文本: {2}",
              //        dsTabName, DS_DataValueFieldName, DS_DataTextFieldName);
              //    if (IsNullOrEmpty(dsTabName)
              //        || IsNullOrEmpty(DS_DataValueFieldName)
              //        || IsNullOrEmpty(DS_DataTextFieldName)
              //    ) {
              //        objInFor.trClass = "bg-warning";
              //    }
            }
            break;
          case enumCtlType.ViewVariable_38:
            strVarName = await GCVariable_GetNameByVarIdCache(objInFor.varId);
            objInFor.ctlTypeName = Format('ViewVariable-绑定:<br/>变量:{0}', strVarName);
            break;
        }
      }
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    if (arrvEditRegionFldsObjLst.length == 0) {
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=EditRegionFlds_${RegionId_Static.value})`;
      alert(strMsg);
      return;
    }
    try {
      await this.BindTab_EditRegionFlds4Func(divList, arrEditRegionFldsExObjLst);
      await this.SetClass4NotInUse(divList, arrEditRegionFldsExObjLst);
      await this.SetFieldNameNotInCurrTab(divList, arrEditRegionFldsExObjLst);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async SetFieldNameNotInCurrTab(
    divContainer: HTMLDivElement,
    arrEditRegionFldsEx: Array<clsEditRegionFldsENEx>,
  ) {
    const viewRegionStore = useviewRegionStore();
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    for (const objRowElement of arrElement) {
      const strId = objRowElement.id.substring(2);
      const objEditRegionFlds = arrEditRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objEditRegionFlds == null) continue;
      if (IsNullOrEmpty(objEditRegionFlds.fldId)) continue;
      const strCurrTabId = await viewRegionStore.getTabId(RegionId_Static.value);
      if (IsNullOrEmpty(strCurrTabId)) continue;
      const arrFldId = await PrjTabFldEx_GetFldIdLstByTabIdCache(strCurrTabId);
      if (arrFldId.indexOf(objEditRegionFlds.fldId) == -1) {
        objRowElement.className = 'text-muted bg-danger';
      } else if (IsNullOrEmpty(objEditRegionFlds.trClass) == false) {
        objRowElement.className = objEditRegionFlds.trClass;
      }
    }
  }

  public SetClass4NotInUse(
    divContainer: HTMLDivElement,
    arrvEditRegionFldsEx: Array<clsEditRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objEditRegionFld = arrvEditRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objEditRegionFld != null) {
        if (objEditRegionFld.inUse == false) {
          x.className = 'text-muted bg-info';
        } else if (IsNullOrEmpty(objEditRegionFld.trClass) == false) {
          x.className = objEditRegionFld.trClass;
        }
      }
    });
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vEditRegionFlds]！');
    //this.BindGv_vEditRegionFlds();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    let objViewRegion_Detail;
    switch (strType) {
      case 'EditRegionFlds':
        this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
        this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);

        break;
      case `${clsViewRegionEN._CurrTabName}Detail`:
        console.log('修改并返回主页面刷新信息区。');

        objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
        objViewRegion_Detail.divDetail = EditRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
        objViewRegion_Detail.btnDetailRecord_Click(RegionId_Static.value);

        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
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

  /** 设置字段值-inUse
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   */
  public async btnSetInUse_Click() {
    try {
      const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds);
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetNotInUse(arrKeyIds);
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetNotInUse_Click())`;
      alert(strMsg);
    }
  }
  /*
    重序
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
    */
  public async btnReOrder_Click() {
    const strThisFuncName = this.btnReOrder_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        regionId: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await EditRegionFldsEx_ReOrder(RegionId_Static.value);
      const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
      arrEditRegionFldsObjLstCache.forEach((x) => {
        EditRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      EditRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }

    let arrKeyId;
    if (EditRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(divVarSet.refDivList, arrKeyId);
    }
  }

  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置底的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionId: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const lngmId = Number(arrKeyIds[0]);
      await EditRegionFldsEx_AdjustSequenceNumber('LAST', lngmId);
      const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
      arrEditRegionFldsObjLstCache.forEach((x) => {
        EditRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      EditRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置底出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (EditRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(divVarSet.refDivList, arrKeyId);
    }
  }
  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public async btnDownMove_Click() {
    const strThisFuncName = this.btnDownMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionId: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const lngmId = Number(arrKeyIds[0]);
      await EditRegionFldsEx_AdjustSequenceNumber('DOWN', lngmId);
      const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
      arrEditRegionFldsObjLstCache.forEach((x) => {
        EditRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      EditRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `下移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (EditRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(divVarSet.refDivList, arrKeyId);
    }
  }

  /*
    上移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    const strThisFuncName = this.btnUpMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionId: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const lngmId = Number(arrKeyIds[0]);
      await EditRegionFldsEx_AdjustSequenceNumber('UP', lngmId);
      const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
      arrEditRegionFldsObjLstCache.forEach((x) => {
        EditRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      EditRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `上移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (EditRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(divVarSet.refDivList, arrKeyId);
    }
  }

  /** 置顶
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
    */
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置顶的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionId: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const lngmId = Number(arrKeyIds[0]);
      await EditRegionFldsEx_AdjustSequenceNumber('FIRST', lngmId);
      const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
      arrEditRegionFldsObjLstCache.forEach((x) => {
        EditRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      EditRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置顶出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (EditRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(divVarSet.refDivList, arrKeyId);
    }
  }

  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindGv_EditRegionFlds4Func(divList: HTMLDivElement) {
    if (EditRegionFldsCRUDEx.ActiveTabName != enumActiveTabName.DataList_02) return;

    if (viewVarSet.sortEditRegionFldsBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortEditRegionFldsBy)为空，请检查！(In BindGv_EditRegionFldsCache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objEditRegionFlds_Cond = await CombineEditRegionFldsConditionObj();
    //objEditRegionFlds_Cond.SetCondFldValue(clsEditRegionFldsEN.con_CmPrjId, clsPrivateSessionStorage.cmPrjId, "=");

    const strWhereCond = JSON.stringify(objEditRegionFlds_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //let arrEditRegionFldsObjLst: Array<clsEditRegionFldsEN> = [];
    let arrEditRegionFldsExObjLst: Array<clsEditRegionFldsENEx> = [];
    try {
      this.recCount = await EditRegionFlds_GetRecCountByCondCache(
        objEditRegionFlds_Cond,
        RegionId_Static.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objEditRegionFlds_Cond,
        orderBy: '', //viewVarSet.sortEditRegionFldsBy,
        sortFun: EditRegionFldsEx_SortFunByInUseAndSeq,
      };
      arrEditRegionFldsExObjLst = await EditRegionFlds_GetObjExLstByPagerCache(
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
    if (arrEditRegionFldsExObjLst.length == 0) {
      const strKey = `${clsEditRegionFldsEN._CurrTabName}_${RegionId_Static.value}`;
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      arrEditRegionFldsExObjLst = arrEditRegionFldsExObjLst.sort(
        EditRegionFldsEx_SortFunByInUseAndSeq,
      );
      await this.BindTab_EditRegionFlds4Func(divList, arrEditRegionFldsExObjLst);
      await this.SetClass4NotInUse(divList, arrEditRegionFldsExObjLst);
      await this.ShowErrMsg(divList, arrEditRegionFldsExObjLst);
      await this.SetFieldNameNotInCurrTab(divList, arrEditRegionFldsExObjLst);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /** 显示EditRegionFlds对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrEditRegionFldsExObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_EditRegionFlds4Func(
    divContainer: HTMLDivElement,
    arrEditRegionFldsExObjLst: Array<clsEditRegionFldsENEx>,
  ) {
    const strThisFuncName = this.BindTab_EditRegionFlds4Func.name;
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
        colHeader: 'No',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },

      {
        fldName: 'fldNameV2',
        sortBy: 'fldNameV2',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '字段',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },

      {
        fldName: 'ctlTypeName',
        sortBy: 'ctlTypeName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },

      {
        fldName: 'width',
        sortBy: 'width',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '宽',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrEditRegionFldsExObjLst, arrDataColumn);
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

    await BindTab(divDataLst, arrEditRegionFldsExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async ExtendFldFuncMap(
    arrEditRegionFldsExObjLst: Array<clsEditRegionFldsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsEditRegionFldsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrEditRegionFldsExObjLst) {
        try {
          await EditRegionFldsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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

  public async btnCopyFldFromRelaTab_Click() {
    //自定义功能;
    try {
      await EditRegionFldsEx_ImportRelaFlds(
        RegionId_Static.value,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      EditRegionFlds_ReFreshCache(RegionId_Static.value);
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);

      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `导入相关字段不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /** 设置字段值-colSpan
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
*/
  public async btnSetColSpan_Click() {
    try {
      const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const strColSpan = GetInputValueInDivObj(divVarSet.refDivFunction, 'txtColSpan_SetFldValue');
      if (strColSpan == '') {
        const strMsg = '请输入跨列数(colSpan)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      console.log(`strColSpan=${strColSpan}`);
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      const intColSpan = Number(strColSpan);
      await this.SetColSpan(arrKeyIds, intColSpan);
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetColSpan_Click())`;
      alert(strMsg);
    }
  }
  /** 设置字段值-width
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
    */
  public async btnSetWidth_Click() {
    try {
      const arrKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const strWidth = GetInputValueInDivObj(divVarSet.refDivFunction, 'txtWidth_SetFldValue');
      if (strWidth == '') {
        const strMsg = '请输入宽(width)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      console.log(`strWidth=${strWidth}`);
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      const intWidth = Number(strWidth);
      await this.SetWidth(arrKeyIds, intWidth);
      await this.BindGv_EditRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(EditRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(EditRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetWidth_Click())`;
      alert(strMsg);
    }
  }
  public async SynchCheckedPos4Gv() {
    // const strListDiv = divDataList;
    const strKeyIds = EditRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (strKeyIds.length == 0) {
      console.error('请选择需要同步选择的记录！');
      return;
    }
    SelectManyCtrlByKeyId(divVarSet.refDivList, strKeyIds);
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
      if (EditRegionFldsCRUDEx.bolIsGeneCodeRegion == true) return;
      await this.ShowCodeTypeButton(EditRegionFldsCRUDEx.strViewId4Region);
      EditRegionFldsCRUDEx.bolIsGeneCodeRegion = true;
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetColSpan_Click())`;
      alert(strMsg);
    }
  }
  public async ShowCodeTypeButton(strViewId: string) {
    const strThisFuncName = this.ShowCodeTypeButton.name;
    const viewInfoStore = useviewInfoStore();
    const objViewInfo = await viewInfoStore.getObj(strViewId);
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

    const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(
      strViewId,
      clsPrivateSessionStorage.cmPrjId,
    );
    const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(
      objViewInfo.applicationTypeId,
    );
    if (objApplicationType == null) {
      const strMsg = Format(
        '应用Id:[{0}]，没有相应的类型，请检查！',
        objViewInfo.applicationTypeId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //string strCharEncodingId = objvApplicationTypeEN.CharEncodingId;
    //cboCharEncodingId.SelectedValue = strCharEncodingId;
    //string strCondition = string.Format("{0}={1} order by {2}",
    //    clsAppCodeTypeRelaEN.con_ApplicationTypeId, intAppTypeId, clsAppCodeTypeRelaEN.con_OrderNum);
    const arrAppCodeTypeRelaObjLst = await AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache(
      objViewInfo.applicationTypeId,
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
      (x) => x.codeTypeName.indexOf('编辑') > -1,
    );
    let intCount = 0;
    //string strGroupName = "";
    const arrObjLst_V2: Array<clsAppCodeTypeRelaENEx> = arrAppCodeTypeRelaExObjLst.filter(
      (x) => x.dependsOn == 'View',
    );
    //if (vsvViewRegion != null) {
    //    arrObjLst_V2 = arrObjLst_V2.Where(x => x.regionTypeId == vsvViewRegion.regionTypeId).OrderBy(x => x.orderNum);
    //}
    const divCodeTypeLst = <HTMLDivElement>document.getElementById('divCodeTypeLst');
    divCodeTypeLst.innerHTML = '';
    const arrGroupName0 = arrObjLst_V2.map((x) => x.groupName);

    const arrGroupName: Array<string> = GetDistinctArray(arrGroupName0);
    // const bolIsFirst = true;
    for (const strGroupName of arrGroupName) {
      //if (IsNullOrEmpty(strGroupName) == false) {
      //    if (bolIsFirst == false) {
      //        const objLabel_Br = <HTMLSpanElement>document.createElement("span");
      //        objLabel_Br.innerHTML = Format("<br/>", strGroupName);
      //        //objLabel.AutoSize = true;
      //        divCodeTypeLst.appendChild(objLabel_Br);
      //    }
      //    else {
      //        bolIsFirst = false;
      //    }

      //    const objLabel = <HTMLSpanElement>document.createElement("span");
      //    objLabel.innerHTML = Format("{0}: ", strGroupName);
      //    //objLabel.AutoSize = true;
      //    objLabel.id = Format("lbl{0}", strGroupName);
      //    //string strToolTip = string.Format("生成：[{0}({1})({2})]的代码。", objInFor.codeTypeName, objInFor.codeTypeId, objInFor.ProgLangTypeId4CodeType);
      //    //toolTip1.SetToolTip(objLabel, strToolTip);
      //    objLabel.className = "text-secondary font-weight-bold";
      //    objLabel.setAttribute("style", "margin-right:10px;margin-top:35px;left:0px;width:150px;");
      //    divCodeTypeLst.appendChild(objLabel);
      //}
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
        //objButton.AutoSize = true;
        objButton.id = Format('btn{0}', objInFor.codeTypeId);
        //string strToolTip = string.Format("生成：[{0}({1})({2})]的代码。", objInFor.codeTypeName, objInFor.codeTypeId, objInFor.ProgLangTypeId4CodeType);
        //toolTip1.SetToolTip(objButton, strToolTip);
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
        //divCodeTypeLst.Controls.Add(objButton);

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
          objViewInfo.applicationTypeId.toString(),
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
        //objHtmlInputButton.setAttribute("onclick", Format("GeneCode('{0}','{1}','{2}')", objInFor.codeTypeId,
        //    strViewId, objViewInfo.applicationTypeId));
        objButton.setAttribute(
          'style',
          Format('margin-right:10px;margin-top:5px;left:0px;width:{0}px', strStrLen),
        );

        //objButton.Command += new CommandEventHandler(this.btnCodeType_Click);
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
  public get qsViewId() {
    const strName = 'viewId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }

  public ShowErrMsg(
    divContainer: HTMLDivElement,
    arrEditRegionFldsEx: Array<clsEditRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objEditRegionFlds = arrEditRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objEditRegionFlds != null) {
        if (objEditRegionFlds.errMsg != null && objEditRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objEditRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objEditRegionFlds.trClass) == false) {
          x.className = objEditRegionFlds.trClass;
        }
      }
    });
  }

  public ShowErrMsgInVisualEffects(
    divContainer: HTMLDivElement,
    arrEditRegionFldsEx: Array<clsEditRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('td');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objEditRegionFlds = arrEditRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objEditRegionFlds != null) {
        if (objEditRegionFlds.errMsg != null && objEditRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objEditRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objEditRegionFlds.tdClass) == false) {
          x.className = objEditRegionFlds.tdClass;
        }
      }
    });
  }
  public static GetSelectedKeyIdLst(divList: HTMLDivElement): Array<string> {
    if (EditRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divList);
      return arrKeyIds;
    } else {
      const strSelectedKeyIds = EditRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      return arrmId;
    }
  }
  public static AddToSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = EditRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    arrmId.push(strKeyId);
    const strSelectedKeyIds_2 = arrmId.join(',');
    EditRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  public static RemoveFromSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = EditRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const arrmId_2 = arrmId.filter((x) => x != strKeyId);
    const strSelectedKeyIds_2 = arrmId_2.join(',');
    EditRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  /**
   * 是否选择某关键字的控件
   * @param strKeyId
   * @returns
   */
  public static IsSelectedKeyId(strKeyId: string): boolean {
    const strSelectedKeyIds = EditRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const bolExist: boolean = arrmId.indexOf(strKeyId) > -1 ? true : false;
    return bolExist;
  }
  public static GetFirstSelectedKeyId(divList: HTMLDivElement): string {
    if (EditRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divList);
      return strKeyId;
    } else {
      const strSelectedKeyIds = EditRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        EditRegionFldsCRUDEx.divVisualEffects,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      const arrmId2 = arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
      if (arrmId2.length > 0) return arrmId2[0];
      return '';
    }
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
