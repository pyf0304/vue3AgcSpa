import { Ref } from 'vue';
import $ from 'jquery';
import { GeneViewCodeEx } from '../PrjInterface/GeneViewCodeEx';
import DetailRegionFlds_EditEx from './DetailRegionFlds_EditEx';
import ViewRegion_Detail_SimEx from './ViewRegion_Detail_SimEx';
import {
  NoSelectOneCtrl,
  NoSelectOneTdByKeyId,
  SelectManyCtrlByKeyId,
  SelectOneCtrl,
  SelectOneTdByKeyId,
  SetAllNotCheckedItems4Visible,
} from '@/ts/FunClass/clsPubFun4Visible';
import { SqlWApi_GetDataTableByKeyAsync } from '@/ts/FunClass/SqlWApi';
import { enumGCContainerType } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
import { ASPDivEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDivENEx';
import { ASPUlEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPUlENEx';
import { clsDetailRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsEN';
import { clsDetailRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsENEx';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { clsASPDivBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPDivBLEx';
import { clsASPHtmlTableBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPHtmlTableBLEx';
import { clsASPUlBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPUlBLEx';

import {
  DetailRegionFlds_GetObjBymIdCache,
  DetailRegionFlds_GetObjExLstByPagerCache,
  DetailRegionFlds_GetObjLstCache,
  DetailRegionFlds_GetRecCountByCondCache,
  DetailRegionFlds_ReFreshCache,
} from '@/ts/L3ForWApi/RegionManage/clsDetailRegionFldsWApi';

import { DataTypeAbbr_GetObjByDataTypeIdCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import {
  DetailRegionFldsEx_AdjustSequenceNumber,
  DetailRegionFldsEx_CopyToEx,
  DetailRegionFldsEx_FuncMapByFldName,
  DetailRegionFldsEx_GetControlGroup,
  DetailRegionFldsEx_GetObjExBymIdCache,
  DetailRegionFldsEx_GetObjExLstByRegionIdCacheEx,
  DetailRegionFldsEx_ImportRelaFlds,
  DetailRegionFldsEx_ReOrder,
  DetailRegionFldsEx_SortFunByInUseAndSeq,
  DetailRegionFldsEx_SortFunBySeqNum,
} from '@/ts/L3ForWApiEx/RegionManage/clsDetailRegionFldsExWApi';
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
import { DetailRegionFldsCRUD } from '@/viewsBase/RegionManage/DetailRegionFldsCRUD';

import {
  ViewRegionEx_GetObjLstByViewIdCache,
  ViewRegionEx_GetRegionIdByTypeCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { PrjTabFldEx_GetFldIdLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import {
  AppCodeTypeRelaEx_CopyToEx,
  AppCodeTypeRelaEx_FuncMapByFldName,
  AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache,
  AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum,
} from '@/ts/L3ForWApiEx/GeneCode/clsAppCodeTypeRelaExWApi';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';

import { enumCodeType } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';

import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { vPrjTabKeyFldV2Ex_KeyFldIds } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTabKeyFldV2ExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { DnPathEx_CreateGraph4DnPathCache } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import ViewRegion_Edit_SimEx from '@/views/RegionManage/ViewRegion_Edit_SimEx';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  CombineDetailRegionFldsConditionObj,
  DetailRegionFlds_DeleteKeyIdCache,
  divVarSet,
  refDetailRegionFlds_Edit,
  RegionId_Static,
  TabId_Static,
  viewVarSet,
} from '@/views/RegionManage/DetailRegionFldsVueShare';
import {
  refViewRegion_Edit_Sim,
  RegionId_Static as RegionId_Static_Sim,
} from '@/views/RegionManage/ViewRegion_UVueShare';

import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

/** DetailRegionFldsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class DetailRegionFldsCRUDEx extends DetailRegionFldsCRUD implements IShowList {
  public static GetPropValueV2: (strPropName: string) => any;
  public static EditRegionRef: Ref<any>;
  public divName4Detail4ViewRegion = 'divDetail4ViewRegion'; //详细信息区的Id
  public static divVisualEffects: HTMLDivElement; // = GetUniDivInDoc('divVisualEffects');
  public static ActiveTabName = enumActiveTabName.VisualEffects_01;
  public static strViewId4Region = ''; //编辑区的界面Id
  // public static strTabId4Region = ''; //编辑区的界面Id
  public static SelectedKeyIds = '';
  public static bolIsGeneCodeRegion = false; //是否已经生成代码区域

  public strKeyId4Test = '';
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvDetailRegionFldsBy=  "mId";
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
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vDetailRegionFlds]！');
    //this.BindGv_vDetailRegionFlds();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    let objViewRegion_Detail;
    switch (strType) {
      case 'DetailRegionFlds':
        this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
        this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);

        break;
      case `${clsViewRegionEN._CurrTabName}Detail`:
        console.log('修改并返回主页面刷新信息区。');

        objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
        objViewRegion_Detail.divDetail =
          DetailRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
        objViewRegion_Detail.btnDetailRecord_Click(RegionId_Static.value);

        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  async BindOnlyGv() {
    viewVarSet.sortDetailRegionFldsBy = Format('{0} Asc', clsDetailRegionFldsEN.con_SeqNum);
    //2、显示无条件的表内容在GridView中
    await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
  }
  /**
   * 初始化编辑区，即绑定下拉框，赋初值等
   */
  public async InitEdit() {
    const objPageEdit: DetailRegionFlds_EditEx = new DetailRegionFlds_EditEx(
      'DetailRegionFlds_EditEx',
      this,
    );
    // 为编辑区绑定下拉框
    await refDetailRegionFlds_Edit.value.BindDdl4EditRegionInDiv();
    objPageEdit.bolIsLoadEditRegion = true;
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: DetailRegionFldsCRUDEx = new DetailRegionFldsCRUDEx();
    const objPageEdit: DetailRegionFlds_EditEx = new DetailRegionFlds_EditEx(
      'DetailRegionFlds_EditEx',
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
      case 'SetColSpan': //自定义功能
        objPage.btnSetColSpan_Click();
        break;
      case 'SetWidth': //自定义功能
        objPage.btnSetWidth_Click();
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
      case 'Update_ViewRegion': //修改记录
        refViewRegion_Edit_Sim.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);

        break;
      case 'VisualEffects':
        objPage.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
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
        if (DetailRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
          strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        }
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        await objPage.btnGoTop_Click();
        await objPage.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        await objPage.btnGoBottum_Click();
        await objPage.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        await objPage.btnUpMove_Click();
        await objPage.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        await objPage.btnDownMove_Click();
        await objPage.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'ReOrder': //重序记录
        await objPage.btnReOrder_Click();
        await objPage.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        //objPage.SynchCheckedPos4Gv();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DetailRegionFldsCRUDEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
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
      switch (this.qsOp) {
        case 'ViewEdit':
          break;
        case 'ViewRegionEdit':
          break;

        case '':
          // await Main_ViewInfo.DispViewInfo();
          // await Main_ViewInfo.ShowCurrItem('DetailRegionFldsCRUD', '');
          break;
      }
      DetailRegionFldsCRUDEx.strViewId4Region = await clsPubVar4Web.GetViewId(this.qsViewId);

      //ViewRegion_U.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;
      //ViewRegion_Edit_Sim.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;

      //const objViewRegion_Edit = arrViewRegion.find(x => x.viewId == strViewId && x.regionTypeId == enumRegionType.DetailRegion_0006);
      //const objViewRegion_Detail = await ViewRegionEx_GetObjByRegionTypeIdAndViewIdCache(strViewId, enumRegionType.DetailRegion_0006, clsPrivateSessionStorage.currSelPrjId);
      const strViewId = clsPrivateSessionStorage.viewId_Main;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      RegionId_Static.value = await ViewRegionEx_GetRegionIdByTypeCache(
        strViewId,
        enumRegionType.DetailRegion_0006,
        strCmPrjId,
      );
      const objViewRegion_Detail = await viewRegionStore.getObj(RegionId_Static.value);

      if (objViewRegion_Detail != null) {
        if (IsNullOrEmpty(objViewRegion_Detail.tabId) == true) {
          const strMsg = `详细信息区存在，但相关表为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
          alert(strMsg);
          return;
        }
        RegionId_Static.value = objViewRegion_Detail.regionId;

        TabId_Static.value = objViewRegion_Detail.tabId;

        //DetailRegionFlds_EditEx.CmPrjIdCache = objViewRegion_Detail.cmPrjId;
      }
      // 为详细区字段编辑区加载控件
      const objPage_DetailRegionFlds_Edit: DetailRegionFlds_EditEx = new DetailRegionFlds_EditEx(
        'DetailRegionFlds_EditEx',
        this,
      );
      // const divEdit = DetailRegionFldsCRUDEx.GetPropValueV2('editDiv');
      // objPage_DetailRegionFlds_Edit.divEdit = divEdit;
      // objPage_DetailRegionFlds_Edit.divName4Edit = 'divEdit_Loc1';
      // await objPage_DetailRegionFlds_Edit.AddDPV_Edit(objPage_DetailRegionFlds_Edit.divName4Edit);

      // 为编辑区绑定下拉框
      await refDetailRegionFlds_Edit.value.BindDdl4EditRegionInDiv();

      objPage_DetailRegionFlds_Edit.bolIsLoadEditRegion = true;
      // await this.AddDPV_Detail4ViewRegion(this.divName4Detail4ViewRegion);
      const objViewRegion_Detail_SimEx = new ViewRegion_Detail_SimEx(this);
      // const divViewRegionDetail = DetailRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
      // objViewRegion_Detail_SimEx.divDetail = divViewRegionDetail;
      //ViewRegion_Detail_Sim.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      RegionId_Static_Sim.value = RegionId_Static.value;
      await objViewRegion_Detail_SimEx.btnDetailRecord_Click();

      this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
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
  public async CombinevDetailRegionFldsConditionObj(): Promise<clsDetailRegionFldsEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'

    // const strWhereCond = `regionId='${this.qsRegionId}'`;
    const objvDetailRegionFlds_Cond: clsDetailRegionFldsEN = new clsDetailRegionFldsEN();
    objvDetailRegionFlds_Cond.SetCondFldValue(
      clsDetailRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    //objvDetailRegionFlds_Cond.SetCondFldValue(clsDetailRegionFldsEN.con_InUse, true, "=");
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    // try {

    // }
    // catch (objException:any) {
    //     const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineDetailRegionFldsConditionObj)时出错!请联系管理员!${objException.message}`;
    //     throw strMsg;
    // }
    return objvDetailRegionFlds_Cond;
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
    const strThisFuncName = this.VisualEffects.name;
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();
    //divContainer.remove();
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
    let objDT: Array<object>;
    let objDR: object = new Object();
    const objViewInfo = await viewInfoStore.getObj(clsPrivateSessionStorage.viewId_Main);
    if (objViewInfo == null) {
      const strMsg = Format(
        '在项目:[{0}]中，界面Id:[{1}]没有相应界面，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        clsPrivateSessionStorage.viewId_Main,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (IsNullOrEmpty(objViewInfo.keyId4Test) == false) {
      const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        objViewRegion.tabId,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (objPrjTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          objViewRegion.tabId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const strKeyFldIds = await vPrjTabKeyFldV2Ex_KeyFldIds(
        objPrjTab.tabId,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (IsNullOrEmpty(strKeyFldIds) == true) {
        const strMsg = Format(
          '表没有设置关键字，请检查！表名：{0}。(In {1}.{2})',
          objPrjTab.tabName,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        throw new Error(strMsg);
      }
      let strKeyFldId = '';
      if (strKeyFldIds.indexOf(',') > -1) {
        strKeyFldId = strKeyFldIds.split(',')[0];
      } else {
        strKeyFldId = strKeyFldIds;
      }
      try {
        const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
          strKeyFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objFieldTab == null) {
          const strMsg = Format(
            '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
            clsPrivateSessionStorage.currSelPrjName,
            strKeyFldId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objFieldTab.dataTypeId);
        if (objDataTypeAbbr == null) {
          const strMsg = Format(
            '数据类型Id:[{0}]，没有相应的类型，请检查！',
            objFieldTab.dataTypeId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        let bolIsNumber = false;
        if (objDataTypeAbbr.typeScriptType == 'number') {
          bolIsNumber = true;
        }

        objDT = await SqlWApi_GetDataTableByKeyAsync(
          clsPrivateSessionStorage.currPrjDataBaseId,
          objPrjTab.tabName,
          objFieldTab.fldName,
          objViewInfo.keyId4Test,
          bolIsNumber,
        );

        if (objDT.length > 0) objDR = objDT[0];
      } catch (objException: any) {
        let strMsg = '';
        strMsg = Format(
          '在获取表内容（GetDataTableByTabName）时出错！表名：{0},出错信息：{1}。({2}.{3})',
          objPrjTab.tabName,
          objException,
          this.constructor.name,
          strThisFuncName,
        );
        console.error('错误信息:', strMsg);

        throw new Error(strMsg);
      }
    }
    const objDiv: HTMLDivElement = document.createElement('div');

    objDiv.id = 'div1';
    objDiv.style['width'] = `${objViewRegion.width}px`;
    //if (objViewRegion.isDisp == true) {
    let arrControlGroups;
    let strMsg = '';
    try {
      arrControlGroups = await DetailRegionFldsEx_GetControlGroup(
        strRegionId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPrivateSessionStorage.cmPrjId,
        objDR,
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
      strMsg = Format('在可视化时获取控件组出错。{0}. (In VisualEffects)', e);
      console.error(strMsg);
      throw new Error(strMsg);
    }
    let objDivTable: ASPDivEx;
    let objTable2; //: ASPHtmlTableEx;
    let objTable; //: ASPHtmlTableEx;
    let objDiv_FormControl: ASPDivEx;
    let objUl: ASPUlEx;
    let objUl2: ASPUlEx;
    let objFormInline: ASPDivEx;
    switch (objViewRegion.containerTypeId) {
      case enumGCContainerType.TableContainer_0001:
        objTable = await clsASPHtmlTableBLEx.PackageByTable4DetailRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );
        if (objTable == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objTable.width = objViewRegion.width;
        clsASPHtmlTableBLEx.GeneHtmlControl(objTable, objDiv);
        //console.log("1objTable", objTable);
        break;
      case enumGCContainerType.FormControl_0002:
        objDiv_FormControl = await clsASPDivBLEx.PackageByFormControl4DetailRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );

        clsASPDivBLEx.GeneHtmlControl(objDiv_FormControl, objDiv);
        break;
      case enumGCContainerType.FormInline_0003:
        objFormInline = clsASPDivBLEx.PackageByFormInline4DetailRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );
        clsASPDivBLEx.GeneHtmlControl(objFormInline, objDiv);
        break;
      case enumGCContainerType.DivTable_0004:
        objDivTable = clsASPDivBLEx.PackageByDivTable4DetailRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );

        clsASPDivBLEx.GeneHtmlControl(objDivTable, objDiv);
        break;
      case enumGCContainerType.HorizontalListLi_0005:
        objUl = clsASPUlBLEx.PackageByUl4DetailRegionH(arrControlGroups, objViewRegion.colNum);

        clsASPUlBLEx.GeneHtmlControl(objUl, objDiv);
        break;
      case enumGCContainerType.VerticalListLi_0006:
        objUl2 = clsASPUlBLEx.PackageByUl4DetailRegionV(arrControlGroups, objViewRegion.colNum);
        clsASPUlBLEx.GeneHtmlControl(objUl2, objDiv);
        break;
      default:
        objTable2 = await clsASPHtmlTableBLEx.PackageByTable4DetailRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );
        if (objTable2 == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        clsASPHtmlTableBLEx.GeneHtmlControl(objTable2, objDiv);
        break;
    }

    this.AttachTooltip(objDiv, strRegionId);
    divContainer.appendChild(objDiv);
    this.SetEvent(divContainer);
    const arrDetailRegionFldsEx = await DetailRegionFldsEx_GetObjExLstByRegionIdCacheEx(
      strRegionId,
    );
    this.ShowErrMsgInVisualEffects(divContainer, arrDetailRegionFldsEx);

    //pnlControlLst.appendChild(objDiv);
    //divDetailRegion4Preview.style["width"] = `${objViewRegion.width}px`;
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

    const bolExist = DetailRegionFldsCRUDEx.IsSelectedKeyId(strId);
    if (bolIsPressShift === true) {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, strId);

        DetailRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        // if (divList != null) SetCheckedItem4KeyId(divList, strId);
        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        DetailRegionFldsCRUDEx.btn_Click('Update', strId);
        DetailRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
      }
    } else {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, strId);
        DetailRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        SetAllNotCheckedItems4Visible(DetailRegionFldsCRUDEx.divVisualEffects);
        DetailRegionFldsCRUDEx.SelectedKeyIds = '';
        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        DetailRegionFldsCRUDEx.btn_Click('Update', strId);
        DetailRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
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
          DetailRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLst00 = objDiv.getElementsByTagName('textarea');
    const arrElement00 = GetArray(objLst00);
    for (const objTextArea of arrElement00) {
      (function () {
        objTextArea.onclick = function (this) {
          DetailRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLst1 = objDiv.getElementsByTagName('select');
    arrElement = GetArray(objLst1);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          DetailRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }

    const objA = objDiv.getElementsByTagName('a');
    arrElement = GetArray(objA);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          DetailRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLabel = objDiv.getElementsByTagName('label');
    arrElement = GetArray(objLabel);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          DetailRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objSpan = objDiv.getElementsByTagName('span');
    arrElement = GetArray(objSpan);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          DetailRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
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
      const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds);
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);

      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetNotInUse(arrKeyIds);
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      await DetailRegionFldsEx_ReOrder(RegionId_Static.value);
      const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
      arrDetailRegionFldsObjLstCache.forEach((x) => {
        DetailRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      DetailRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);

    await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
    const arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
  }
  public async btnCopyFldFromRelaTab_Click() {
    const strThisFuncName = this.btnCopyFldFromRelaTab_Click.name;
    const strRegionId = RegionId_Static.value;
    try {
      if (strRegionId == '0' || strRegionId == '') {
        const strMsg = `当前区域为空，请检查！。(In ${this.constructor.name}.${strThisFuncName})`;
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      await DetailRegionFldsEx_ImportRelaFlds(
        strRegionId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      DetailRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);

    await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
    const arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
  }
  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await DetailRegionFldsEx_AdjustSequenceNumber('LAST', lngmId);
      const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
      arrDetailRegionFldsObjLstCache.forEach((x) => {
        DetailRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });

      DetailRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置底出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (DetailRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await DetailRegionFldsEx_AdjustSequenceNumber('DOWN', lngmId);
      const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
      arrDetailRegionFldsObjLstCache.forEach((x) => {
        DetailRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });

      DetailRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `下移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (DetailRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);

      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);

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
    const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await DetailRegionFldsEx_AdjustSequenceNumber('UP', lngmId);
      const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
      arrDetailRegionFldsObjLstCache.forEach((x) => {
        DetailRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });

      DetailRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `上移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (DetailRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
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
    const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await DetailRegionFldsEx_AdjustSequenceNumber('FIRST', lngmId);
      const arrDetailRegionFldsObjLstCache = await DetailRegionFlds_GetObjLstCache(strRegionId);
      arrDetailRegionFldsObjLstCache.forEach((x) => {
        DetailRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });

      DetailRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置顶出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (DetailRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(divVarSet.refDivList, arrKeyId);
    }
  }

  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
  public async BindGv_DetailRegionFlds4Func(divList: HTMLDivElement) {
    if (DetailRegionFldsCRUDEx.ActiveTabName != enumActiveTabName.DataList_02) return;

    if (viewVarSet.sortDetailRegionFldsBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortDetailRegionFldsBy)为空，请检查！(In BindGv_DetailRegionFldsCache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objDetailRegionFlds_Cond = await CombineDetailRegionFldsConditionObj();
    //objDetailRegionFlds_Cond.SetCondFldValue(clsDetailRegionFldsEN.con_CmPrjId, clsPrivateSessionStorage.cmPrjId, "=");

    const strWhereCond = JSON.stringify(objDetailRegionFlds_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //let arrDetailRegionFldsObjLst: Array<clsDetailRegionFldsEN> = [];
    let arrDetailRegionFldsExObjLst: Array<clsDetailRegionFldsENEx> = [];
    try {
      this.recCount = await DetailRegionFlds_GetRecCountByCondCache(
        objDetailRegionFlds_Cond,
        RegionId_Static.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objDetailRegionFlds_Cond,
        orderBy: viewVarSet.sortDetailRegionFldsBy,
        sortFun: DetailRegionFldsEx_SortFunBySeqNum,
      };
      arrDetailRegionFldsExObjLst = await DetailRegionFlds_GetObjExLstByPagerCache(
        objPagerPara,
        RegionId_Static.value,
      );
      //    arrDetailRegionFldsObjLst = arrDetailRegionFldsObjLst
      //        .sort(DetailRegionFldsEx_SortFunBySeqNum);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    if (arrDetailRegionFldsExObjLst.length == 0) {
      const strKey = `${clsDetailRegionFldsEN._CurrTabName}_${clsPrivateSessionStorage.cmPrjId}`;
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      arrDetailRegionFldsExObjLst = arrDetailRegionFldsExObjLst.sort(
        DetailRegionFldsEx_SortFunByInUseAndSeq,
      );
      await this.BindTab_DetailRegionFlds4Func(divList, arrDetailRegionFldsExObjLst);
      await this.SetClass4NotInUse(divList, arrDetailRegionFldsExObjLst);
      await this.ShowErrMsg(divList, arrDetailRegionFldsExObjLst);
      await this.SetFieldNameNotInCurrTab(divList, arrDetailRegionFldsExObjLst);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  public async SetFieldNameNotInCurrTab(
    divContainer: HTMLDivElement,
    arrDetailRegionFldsEx: Array<clsDetailRegionFldsENEx>,
  ) {
    const viewRegionStore = useviewRegionStore();
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    for (const objRowElement of arrElement) {
      const strId = objRowElement.id.substring(2);
      const objDetailRegionFlds = arrDetailRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objDetailRegionFlds == null) continue;
      if (IsNullOrEmpty(objDetailRegionFlds.fldId)) continue;
      const strCurrTabId = await viewRegionStore.getTabId(RegionId_Static.value);
      if (IsNullOrEmpty(strCurrTabId)) continue;
      const arrFldId = await PrjTabFldEx_GetFldIdLstByTabIdCache(strCurrTabId);
      if (arrFldId.indexOf(objDetailRegionFlds.fldId) == -1) {
        objRowElement.className = 'text-muted bg-danger';
      } else if (IsNullOrEmpty(objDetailRegionFlds.trClass) == false) {
        objRowElement.className = objDetailRegionFlds.trClass;
      }
    }
  }

  /** 显示DetailRegionFlds对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
 <param name = "divContainer">显示容器</param>
 <param name = "arrDetailRegionFldsExObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_DetailRegionFlds4Func(
    divContainer: HTMLDivElement,
    arrDetailRegionFldsExObjLst: Array<clsDetailRegionFldsENEx>,
  ) {
    const strThisFuncName = this.BindTab_DetailRegionFlds4Func.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsDetailRegionFldsEN.con_SeqNum,
        sortBy: clsDetailRegionFldsEN.con_SeqNum,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '序号',
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
        getDataSource: '',
        colHeader: '字段名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const objDetailRegionFlds = await DetailRegionFldsEx_GetObjExBymIdCache(
            lngMid,
            RegionId_Static.value,
          );
          if (objDetailRegionFlds == null) {
            const div1 = document.createElement('div');
            return div1;
          } else {
            let strDnPathId = objDetailRegionFlds.dnPathId;
            if (IsNullOrEmpty(strDnPathId) == true) strDnPathId = objDetailRegionFlds.dnPathIdEx;
            if (IsNullOrEmpty(strDnPathId) == true) {
              const div2 = document.createElement('div');

              div2.innerHTML = objDetailRegionFlds.tabName;
              return div2;
            } else {
              const divPath = await DnPathEx_CreateGraph4DnPathCache(strDnPathId);
              strKey = strText;
              return divPath;
            }
          }
        },
      },

      {
        fldName: 'colSpan',
        sortBy: 'colSpan',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '跨列数',
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
        getDataSource: '',
        colHeader: '宽',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
    ];

    try {
      await this.ExtendFldFuncMap(arrDetailRegionFldsExObjLst, arrDataColumn);
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

    await BindTab(divDataLst, arrDetailRegionFldsExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async ExtendFldFuncMap(
    arrDetailRegionFldsExObjLst: Array<clsDetailRegionFldsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsDetailRegionFldsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrDetailRegionFldsExObjLst) {
        try {
          await DetailRegionFldsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    arrDetailRegionFldsEx: Array<clsDetailRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objDetailRegionFld = arrDetailRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objDetailRegionFld != null) {
        if (objDetailRegionFld.inUse == false) {
          x.className = 'text-muted bg-info';
        } else if (IsNullOrEmpty(objDetailRegionFld.trClass) == false) {
          x.className = objDetailRegionFld.trClass;
        }
      }
    });
  }
  /** 设置字段值-colSpan
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   */
  public async btnSetColSpan_Click() {
    try {
      const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetColSpan_Click())`;
      alert(strMsg);
    }
  }

  public async btnCodeGene_Click() {
    try {
      if (DetailRegionFldsCRUDEx.bolIsGeneCodeRegion == true) return;
      await this.ShowCodeTypeButton(DetailRegionFldsCRUDEx.strViewId4Region);
      DetailRegionFldsCRUDEx.bolIsGeneCodeRegion = true;
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
      (x) => x.codeTypeName.indexOf('详细') > -1,
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
            GeneViewCodeEx.btnCodeType_Click(this, event);
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
          GeneViewCodeEx.btnCodeType_Click(this, event);
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

  /** 设置字段值-width
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
    */
  public async btnSetWidth_Click() {
    try {
      const arrKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await this.BindGv_DetailRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetWidth_Click())`;
      alert(strMsg);
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
  public async SynchCheckedPos4Gv() {
    // const strListDiv = divDataList;
    const strKeyIds = DetailRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (strKeyIds.length == 0) {
      console.error('请选择需要同步选择的记录！');
      return;
    }
    SelectManyCtrlByKeyId(DetailRegionFldsCRUDEx.divVisualEffects, strKeyIds);
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
      const objDetailRegionFld = await DetailRegionFlds_GetObjBymIdCache(
        Number(strKeyId),
        strRegionId,
      );
      if (objDetailRegionFld == null) continue;
      const objDetailRegionFldEx = DetailRegionFldsEx_CopyToEx(objDetailRegionFld);
      await DetailRegionFldsEx_FuncMapByFldName(
        clsDetailRegionFldsENEx.con_FldNameV2,
        objDetailRegionFldEx,
      );
      await DetailRegionFldsEx_FuncMapByFldName(
        clsDetailRegionFldsENEx.con_CtlTypeName,
        objDetailRegionFldEx,
      );

      //const strData_Toggle = objChild_Html.getAttribute("data-toggle");
      //if (IsNullOrEmpty(strData_Toggle) == true)
      objChild_Html?.setAttribute('data-toggle', 'tooltip');
      objChild_Html?.setAttribute('data-placement', 'top');
      objChild_Html?.setAttribute('data-html', 'true');
      const strMsg = Format(
        '字段名:{0}<br/>控件类型:{1}',
        objDetailRegionFldEx.fldNameV2,
        objDetailRegionFldEx.ctlTypeName,
      );
      objChild_Html?.setAttribute('title', strMsg);

      //console.error(objChild.nodeName, objChild.nodeType, strMsg);
    }
  }

  public ShowErrMsg(
    divContainer: HTMLDivElement,
    arrDetailRegionFldsEx: Array<clsDetailRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objDetailRegionFlds = arrDetailRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objDetailRegionFlds != null) {
        if (objDetailRegionFlds.errMsg != null && objDetailRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objDetailRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objDetailRegionFlds.trClass) == false) {
          x.className = objDetailRegionFlds.trClass;
        }
      }
    });
  }

  public ShowErrMsgInVisualEffects(
    divContainer: HTMLDivElement,
    arrDetailRegionFldsEx: Array<clsDetailRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('td');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objDetailRegionFlds = arrDetailRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objDetailRegionFlds != null) {
        if (objDetailRegionFlds.errMsg != null && objDetailRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objDetailRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objDetailRegionFlds.tdClass) == false) {
          x.className = objDetailRegionFlds.tdClass;
        }
      }
    });
  }
  public static GetSelectedKeyIdLst(divList: HTMLDivElement): Array<string> {
    if (DetailRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divList);
      return arrKeyIds;
    } else {
      const strSelectedKeyIds = DetailRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        DetailRegionFldsCRUDEx.divVisualEffects,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      return arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
    }
  }

  public static GetFirstSelectedKeyId(divList: HTMLDivElement): string {
    if (DetailRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divList);
      return strKeyId;
    } else {
      const strSelectedKeyIds = DetailRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        DetailRegionFldsCRUDEx.divVisualEffects,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      const arrmId2 = arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
      if (arrmId2.length > 0) return arrmId2[0];
      return '';
    }
  }
  public static AddToSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = DetailRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    arrmId.push(strKeyId);
    const strSelectedKeyIds_2 = arrmId.join(',');
    DetailRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  public static RemoveFromSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = DetailRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const arrmId_2 = arrmId.filter((x) => x != strKeyId);
    const strSelectedKeyIds_2 = arrmId_2.join(',');
    DetailRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  /**
   * 是否选择某关键字的控件
   * @param strKeyId
   * @returns
   */
  public static IsSelectedKeyId(strKeyId: string): boolean {
    const strSelectedKeyIds = DetailRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const bolExist: boolean = arrmId.indexOf(strKeyId) > -1 ? true : false;
    return bolExist;
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
