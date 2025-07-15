//import $ from "jquery";
import { Ref } from 'vue';
import DGRegionFlds_EditEx from './DGRegionFlds_EditEx';
import ViewRegion_Detail_SimEx from './ViewRegion_Detail_SimEx';
import ViewRegion_Edit_SimEx from './ViewRegion_Edit_SimEx';
import { DGRegionFldsCRUD } from '@/viewsBase/RegionManage/DGRegionFldsCRUD';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';

import {
  DGRegionFlds_GetObjBymIdCache,
  DGRegionFlds_GetObjExLstByPagerCache,
  DGRegionFlds_GetObjLstCache,
  DGRegionFlds_GetRecCountByCondCache,
  DGRegionFlds_ReFreshCache,
} from '@/ts/L3ForWApi/RegionManage/clsDGRegionFldsWApi';
import {
  DGRegionFldsEx_AdjustSequenceNumber,
  DGRegionFldsEx_GetObjExBymIdCache,
  DGRegionFldsEx_GetObjExLstByRegionIdCacheEx,
  DGRegionFldsEx_GetObjLstByRegionIdCache4InUseEx,
  DGRegionFldsEx_ImportRelaFlds,
  DGRegionFldsEx_ReOrder,
  DGRegionFldsEx_SortFunByInUseAndSeq,
} from '@/ts/L3ForWApiEx/RegionManage/clsDGRegionFldsExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetAllElementPropValueInDivObj,
  GetArray,
  GetCheckedKeyIdsInDivObj,
  GetDistinctArray,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  SetCheckedItem4KeyId,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';

import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';
import {
  BindTab,
  GetObjValueOfKey,
  GetWidthByWordStr,
  ObjectAssign,
  SetAllCkechedKeysV2,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  NoSelectOneCtrl,
  NoSelectOneTdByKeyId,
  SelectManyCtrlByKeyId,
  SelectOneCtrl,
  SelectOneTdByKeyId,
  SetAllNotCheckedItems4Visible,
} from '@/ts/FunClass/clsPubFun4Visible';
import {
  DGRegionFldsEx_CopyToEx,
  DGRegionFldsEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/RegionManage/clsDGRegionFldsExWApi2';
import { clsDGRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { PrjTabFldEx_GetFldIdLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import {
  ViewRegionEx_GetObjLstByViewIdCache,
  ViewRegionEx_GetRegionIdByTypeCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { DnPathEx_CreateGraph4DnPathCache } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
// import { GeneViewCodeEx } from '@/views/PrjInterface/GeneViewCodeEx';
import { enumCodeType } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
import {
  AppCodeTypeRelaEx_CopyToEx,
  AppCodeTypeRelaEx_FuncMapByFldName,
  AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache,
  AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum,
} from '@/ts/L3ForWApiEx/GeneCode/clsAppCodeTypeRelaExWApi';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';

import { vPrjTab_SimEx_GetNameByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { SqlWApi_GetDataTableAsync } from '@/ts/FunClass/SqlWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  DGRegionFlds_DeleteKeyIdCache,
  divVarSet,
  refDGRegionFlds_Edit,
  RegionId_Static,
  TabId_Static,
  viewVarSet,
} from '@/views/RegionManage/DGRegionFldsVueShare';
import { RegionId_Static as RegionId_Static_Sim } from '@/views/RegionManage/ViewRegion_UVueShare';

import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

/** DGRegionFldsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class DGRegionFldsCRUDEx extends DGRegionFldsCRUD implements IShowList {
  public static GetPropValueV2: (strPropName: string) => any;
  public static EditRegionRef: Ref<any>;
  public divName4Detail4ViewRegion = 'divDetail4ViewRegion'; //详细信息区的Id
  public static strViewId4Region = ''; //编辑区的界面Id
  // public static strTabId4Region = ''; //编辑区的界面Id
  public static divVisualEffects: HTMLDivElement; // = GetUniDivInDoc('divVisualEffects');
  public static ActiveTabName = enumActiveTabName.VisualEffects_01;
  public static SelectedKeyIds = '';

  public static bolIsGeneCodeRegion = false; //是否已经生成代码区域

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
  BindGv() {
    alert('该类没有绑定该函数：[this.BindGv_vDGRegionFlds]！');
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    let objViewRegion_Detail;
    switch (strType) {
      case 'DGRegionFlds':
        this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
        this.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);

        break;
      case `${clsViewRegionEN._CurrTabName}Detail`:
        console.log('修改并返回主页面刷新信息区。');

        objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
        objViewRegion_Detail.divDetail = DGRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
        objViewRegion_Detail.btnDetailRecord_Click(RegionId_Static.value);

        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  BindOnlyGv() {
    viewVarSet.sortDGRegionFldsBy = 'seqNum Asc';

    this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
  }
  /**
   * 初始化编辑区，即绑定下拉框，赋初值等
   */
  public async InitEdit() {
    const objPageEdit: DGRegionFlds_EditEx = new DGRegionFlds_EditEx('DGRegionFlds_EditEx', this);
    // const divEdit = DGRegionFldsCRUDEx.GetPropValueV2('editDiv');
    // objPageEdit.divEdit = divEdit;
    // 为编辑区绑定下拉框
    await refDGRegionFlds_Edit.value.BindDdl4EditRegionInDiv();
    objPageEdit.bolIsLoadEditRegion = true;
  }
  /*
      按钮单击,用于调用Js函数中btn_Click
     (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
     */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: DGRegionFldsCRUDEx = new DGRegionFldsCRUDEx();
    const objPageEdit: DGRegionFlds_EditEx = new DGRegionFlds_EditEx(
      'DGRegionFlds_EditEx',
      objPage,
    );
    let strMsg = '';
    let arrKeyIds;

    const objViewRegion_Edit_SimEx = new ViewRegion_Edit_SimEx('ViewRegion_Edit_SimEx', objPage);

    console.log(objViewRegion_Edit_SimEx);
    switch (strCommandName) {
      case 'CodeGene': //自定义功能
        // objPage.btnCodeGene_Click();
        break;
      case 'Update_ViewRegion': //修改记录
        DGRegionFldsCRUDEx.EditRegionRef.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);

        break;
      case 'VisualEffects':
        objPage.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        break;
      case 'SetInUse': //自定义功能
        objPage.btnSetInUse_Click();
        break;
      case 'SetNotInUse': //自定义功能
        objPage.btnSetNotInUse_Click();
        break;
      case 'SetDefaSort': //自定义功能
        objPage.SetDefaSort();
        break;
      case 'CopyFldFromRelaTab': //自定义功能
        objPage.btnCopyFldFromRelaTab_Click();
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
        if (DGRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
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
        arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        await objPage.btnGoTop_Click();
        await objPage.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        await objPage.btnGoBottum_Click();
        await objPage.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        await objPage.btnUpMove_Click();
        await objPage.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        await objPage.btnDownMove_Click();
        await objPage.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'ReOrder': //重序记录
        await objPage.btnReOrder_Click();
        await objPage.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DGRegionFldsCRUDEx.btn_Click');

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
  public SetDefaSort() {
    //自定义功能;
  }
  /*
     自定义功能
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_TS_btn_Click>b__4)
    */
  public async btnCopyFldFromRelaTab_Click() {
    //自定义功能;
    try {
      await DGRegionFldsEx_ImportRelaFlds(
        RegionId_Static.value,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      DGRegionFlds_ReFreshCache(RegionId_Static.value);
      await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);

      await this.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DGRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `导入相关字段不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
  */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    const viewRegionStore = useviewRegionStore();
    //测试用
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
          // await Main_ViewInfo.ShowCurrItem('DGRegionFldsCRUD', '');
          break;
      }
      DGRegionFldsCRUDEx.strViewId4Region = await clsPubVar4Web.GetViewId(this.qsViewId);

      const strViewId = clsPrivateSessionStorage.viewId_Main;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      RegionId_Static.value = await ViewRegionEx_GetRegionIdByTypeCache(
        strViewId,
        enumRegionType.ListRegion_0002,
        strCmPrjId,
      );
      const objViewRegion_List = await viewRegionStore.getObj(RegionId_Static.value);

      if (objViewRegion_List != null) {
        if (IsNullOrEmpty(objViewRegion_List.tabId) == true) {
          const strMsg = `数据列表区存在，但相关表为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
          alert(strMsg);
          return;
        }
        RegionId_Static.value = objViewRegion_List.regionId;
        TabId_Static.value = objViewRegion_List.tabId;

        RegionId_Static.value = objViewRegion_List.regionId;
      }
      // await this.AddDPV_Detail4ViewRegion(this.divName4Detail4ViewRegion);
      const objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);

      // const divViewRegionDetail = DGRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
      // objViewRegion_Detail.divDetail = divViewRegionDetail;
      RegionId_Static_Sim.value = RegionId_Static.value;
      await objViewRegion_Detail.btnDetailRecord_Click();

      //加载编辑区
      await this.InitEdit();

      await this.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DGRegionFldsCRUDEx.divVisualEffects, arrKeyId);
      //2、显示无条件的表内容在GridView中
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
  public async CombineDGRegionFldsConditionObj(): Promise<ConditionCollection> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'

    const strRegionId = RegionId_Static.value;
    // const strWhereCond = `regionId='${strRegionId}'`;

    const objvDGRegionFlds_Cond = new ConditionCollection();
    objvDGRegionFlds_Cond.SetCondFldValue(clsDGRegionFldsEN.con_RegionId, strRegionId, '=');
    return objvDGRegionFlds_Cond;
  }
  public static async ColHeaderClick(thisColHeader: any, divLayout: HTMLDivElement, event: any) {
    const thisA = <HTMLAnchorElement>thisColHeader;
    const strId = thisA.getAttribute('mId');
    if (strId == null) {
      alert('关键字为空！(In ColHeaderClick)');
      return;
    }

    event = window.event || event;
    let bolIsPressShift = false;
    if (event.shiftKey == 1) {
      bolIsPressShift = true;
      console.log(`shift被按下了, strId:${strId}`);
    } else {
      bolIsPressShift = false;
      console.log(`shift没被按下,strId:${strId}`);
    }

    const strCtrlId = thisA.id;
    console.log('strCtrlId', strCtrlId);
    const strCtrlId2 = thisA.getAttribute('ctrlId');
    console.log('strCtrlId2', strCtrlId2);

    const bolExist = DGRegionFldsCRUDEx.IsSelectedKeyId(strId);
    if (bolIsPressShift === true) {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(DGRegionFldsCRUDEx.divVisualEffects, strId);

        DGRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        // if (divList != null) SetCheckedItem4KeyId(divList, strId);

        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(DGRegionFldsCRUDEx.divVisualEffects, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        DGRegionFldsCRUDEx.btn_Click('Update', strId);
        DGRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
      }
    } else {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(DGRegionFldsCRUDEx.divVisualEffects, strId);

        DGRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        SetAllNotCheckedItems4Visible(DGRegionFldsCRUDEx.divVisualEffects);
        DGRegionFldsCRUDEx.SelectedKeyIds = '';
        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(DGRegionFldsCRUDEx.divVisualEffects, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        DGRegionFldsCRUDEx.btn_Click('Update', strId);
        DGRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
        // if (divList != null) {
        //   SetAllNotCkechedItem(divList);
        //   SetCheckedItem4KeyId(divList, strId);
        // }
      }
    }
  }

  public async AttachTooltip(table: HTMLTableElement, strRegionId: string) {
    const arrTd0 = table.getElementsByTagName('td');
    const arrTd = GetArray(arrTd0);
    for (const objTd of arrTd) {
      const objChild = objTd.firstChild;
      if (objChild == null) continue;
      let strKeyId; //objChild.getAttribute('keyid');

      let objChild_Html;
      switch (objChild.nodeName) {
        case 'DIV':
          objChild_Html = <HTMLDivElement>objChild;
          strKeyId = objChild_Html.getAttribute('mid');
          break;
        case 'A':
          objChild_Html = <HTMLDivElement>objChild;
          strKeyId = objChild_Html.getAttribute('mid');
          break;
        case 'INPUT':
          objChild_Html = <HTMLInputElement>objChild;
          strKeyId = objChild_Html.getAttribute('mid');
          break;
        case 'SELECT':
          objChild_Html = <HTMLInputElement>objChild;
          strKeyId = objChild_Html.getAttribute('mid');
          break;

        case 'SPAN':
          objChild_Html = <HTMLSpanElement>objChild;
          strKeyId = objChild_Html.getAttribute('mid');
          break;
      }
      if (objChild_Html == null) continue;
      if (strKeyId == null) continue;
      const objDGRegionFld = await DGRegionFlds_GetObjBymIdCache(Number(strKeyId), strRegionId);
      if (objDGRegionFld == null) continue;
      const objDGRegionFldEx = DGRegionFldsEx_CopyToEx(objDGRegionFld);
      await DGRegionFldsEx_FuncMapByFldName(clsDGRegionFldsENEx.con_FldNameV2, objDGRegionFldEx);
      await DGRegionFldsEx_FuncMapByFldName(clsDGRegionFldsENEx.con_CtlTypeName, objDGRegionFldEx);

      //const strData_Toggle = objChild_Html.getAttribute("data-toggle");
      //if (IsNullOrEmpty(strData_Toggle) == true)
      objChild_Html?.setAttribute('data-toggle', 'tooltip');
      objChild_Html?.setAttribute('data-placement', 'top');
      objChild_Html?.setAttribute('data-html', 'true');
      const strMsg = Format(
        '字段名:{0}<br/>控件类型:{1}',
        objDGRegionFldEx.fldNameV2,
        objDGRegionFldEx.ctlTypeName,
      );
      if (IsNullOrEmpty(objDGRegionFldEx.errMsg) == false) {
        objChild_Html?.setAttribute(
          'data-original-title',
          `${strMsg}<br/>错误信息:${objDGRegionFldEx.errMsg}`,
        );
      } else {
        objChild_Html?.setAttribute('title', strMsg);
      }
    }
  }

  /**
   * 设置字段值-inUse
   */
  public async btnSetInUse_Click() {
    try {
      const arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置有用的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds);
      await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DGRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetInUse_Click())`;
      alert(strMsg);
    }
  }
  /**
   * 设置字段值-inUse
   */
  public async btnSetNotInUse_Click() {
    try {
      const arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetNotInUse(arrKeyIds);
      await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DGRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetNotInUse_Click())`;
      alert(strMsg);
    }
  }

  /**
   * 重序
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
      await DGRegionFldsEx_ReOrder(RegionId_Static.value);
      const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
      arrDGRegionFldsObjLstCache.forEach((x) => {
        DGRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      DGRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
    await this.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
    const arrKeyId = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    SelectManyCtrlByKeyId(DGRegionFldsCRUDEx.divVisualEffects, arrKeyId);
  }

  /**
   * 置底
   */
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await DGRegionFldsEx_AdjustSequenceNumber('LAST', lngmId);
      const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
      arrDGRegionFldsObjLstCache.forEach((x) => {
        DGRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      DGRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置底出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    if (DGRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
      const strListDiv = divVarSet.refDivList;
      arrKeyIds.forEach((e) => SetCheckedItem4KeyId(strListDiv, e));
    }
  }
  /**
   * 下移
   */
  public async btnDownMove_Click() {
    const strThisFuncName = this.btnDownMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await DGRegionFldsEx_AdjustSequenceNumber('DOWN', lngmId);
      const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
      arrDGRegionFldsObjLstCache.forEach((x) => {
        DGRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      DGRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `下移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);

      alert(strMsg);
      return;
    }
    if (DGRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
      const strListDiv = divVarSet.refDivList;
      arrKeyIds.forEach((e) => SetCheckedItem4KeyId(strListDiv, e));
    }
  }

  /**
   * 上移
   */
  public async btnUpMove_Click() {
    const strThisFuncName = this.btnUpMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await DGRegionFldsEx_AdjustSequenceNumber('UP', lngmId);
      const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
      arrDGRegionFldsObjLstCache.forEach((x) => {
        DGRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      DGRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `上移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);

      alert(strMsg);
      return;
    }
    if (DGRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
      const strListDiv = divVarSet.refDivList;
      arrKeyIds.forEach((e) => SetCheckedItem4KeyId(strListDiv, e));
    }
  }

  /**
   * 置顶
   */
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await DGRegionFldsEx_AdjustSequenceNumber('FIRST', lngmId);
      const arrDGRegionFldsObjLstCache = await DGRegionFlds_GetObjLstCache(strRegionId);
      arrDGRegionFldsObjLstCache.forEach((x) => {
        DGRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      DGRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置顶出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);

      alert(strMsg);
      return;
    }
    if (DGRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
      const strListDiv = divVarSet.refDivList;
      arrKeyIds.forEach((e) => SetCheckedItem4KeyId(strListDiv, e));
    }
  }
  /**
   * 删除记录
   */
  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_DGRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(DGRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(DGRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public SetClass4NotInUse(
    divContainer: HTMLDivElement,
    arrDGRegionFldsEx: Array<clsDGRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);

    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objDGRegionFld = arrDGRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objDGRegionFld != null) {
        if (objDGRegionFld.inUse == false) {
          x.className = 'text-muted bg-info';
        } else if (IsNullOrEmpty(objDGRegionFld.trClass) == false) {
          x.className = objDGRegionFld.trClass;
        }
      }
    });
  }

  public async SetFieldNameNotInCurrTab(
    divContainer: HTMLDivElement,
    arrDGRegionFldsEx: Array<clsDGRegionFldsENEx>,
  ) {
    const viewRegionStore = useviewRegionStore();
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);

    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    for (const objRowElement of arrElement) {
      const strId = objRowElement.id.substring(2);
      const objDGRegionFld = arrDGRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objDGRegionFld == null) continue;
      if (IsNullOrEmpty(objDGRegionFld.fldId)) continue;
      const strCurrTabId = await viewRegionStore.getTabId(RegionId_Static.value);
      if (IsNullOrEmpty(strCurrTabId)) continue;
      const arrFldId = await PrjTabFldEx_GetFldIdLstByTabIdCache(strCurrTabId);
      if (arrFldId.indexOf(objDGRegionFld.fldId) == -1) {
        objRowElement.className = 'text-muted bg-danger';
      } else if (IsNullOrEmpty(objDGRegionFld.trClass) == false) {
        objRowElement.className = objDGRegionFld.trClass;
      }
    }
  }

  /**
   * 根据条件获取相应的对象列表
   */
  public async BindGv_DGRegionFlds4Func(divList: HTMLDivElement) {
    if (DGRegionFldsCRUDEx.ActiveTabName != enumActiveTabName.DataList_02) return;

    if (viewVarSet.sortDGRegionFldsBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortDGRegionFldsBy)为空，请检查！(In BindGv_DGRegionFldsCache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objDGRegionFlds_Cond = await this.CombineDGRegionFldsConditionObj();

    const strWhereCond = JSON.stringify(objDGRegionFlds_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrDGRegionFldsExObjLst: Array<clsDGRegionFldsENEx> = [];
    try {
      this.recCount = await DGRegionFlds_GetRecCountByCondCache(
        objDGRegionFlds_Cond,
        RegionId_Static.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objDGRegionFlds_Cond,
        orderBy: viewVarSet.sortDGRegionFldsBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrDGRegionFldsExObjLst = await DGRegionFlds_GetObjExLstByPagerCache(
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
    if (arrDGRegionFldsExObjLst.length == 0) {
      const strKey = `${clsDGRegionFldsEN._CurrTabName}_${RegionId_Static.value}`;
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);

      alert(strMsg);
      return;
    }
    try {
      arrDGRegionFldsExObjLst = arrDGRegionFldsExObjLst.sort(DGRegionFldsEx_SortFunByInUseAndSeq);
      // console.error(divList);
      await this.BindTab_DGRegionFlds4Func(divList, arrDGRegionFldsExObjLst);
      await this.SetClass4NotInUse(divList, arrDGRegionFldsExObjLst);
      await this.ShowErrMsg(divList, arrDGRegionFldsExObjLst);
      await this.SetFieldNameNotInCurrTab(divList, arrDGRegionFldsExObjLst);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /**
   * 显示DGRegionFlds对象的所有属性值
   * param divContainer 显示容器
   * param arrDGRegionFldsExObjLst 需要绑定的对象列表
   */
  public async BindTab_DGRegionFlds4Func(
    divContainer: HTMLDivElement,
    arrDGRegionFldsExObjLst: Array<clsDGRegionFldsENEx>,
  ) {
    const strThisFuncName = this.BindTab_DGRegionFlds4Func.name;
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
        colHeader: '源表',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const objDGRegionFlds = await DGRegionFldsEx_GetObjExBymIdCache(
            lngMid,
            RegionId_Static.value,
          );
          if (objDGRegionFlds == null) {
            const div1 = document.createElement('div');
            return div1;
          } else {
            let strDnPathId = objDGRegionFlds.dnPathId;
            if (IsNullOrEmpty(strDnPathId) == true) strDnPathId = objDGRegionFlds.dnPathIdEx;
            if (IsNullOrEmpty(strDnPathId) == true) {
              const div2 = document.createElement('div');
              div2.innerHTML = objDGRegionFlds.tabName;
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
        fldName: 'ctlTypeName',
        sortBy: 'ctlTypeName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },

      {
        fldName: 'isTransToChkBox',
        sortBy: 'isTransToChkBox',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '换成CheckBox?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: 'sortExpression',
        sortBy: 'sortExpression',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '排序表达式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },
    ];

    try {
      await this.ExtendFldFuncMap(arrDGRegionFldsExObjLst, arrDataColumn);
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

    await BindTab(divDataLst, arrDGRegionFldsExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async ExtendFldFuncMap(
    arrDGRegionFldsExObjLst: Array<clsDGRegionFldsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsDGRegionFldsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrDGRegionFldsExObjLst) {
        try {
          await DGRegionFldsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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

  public async SynchCheckedPos4Gv() {
    const strKeyIds = DGRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (strKeyIds.length == 0) {
      console.error('请选择需要同步选择的记录！');
      return;
    }
    SelectManyCtrlByKeyId(DGRegionFldsCRUDEx.divVisualEffects, strKeyIds);
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
      if (DGRegionFldsCRUDEx.bolIsGeneCodeRegion == true) return;
      await this.ShowCodeTypeButton(DGRegionFldsCRUDEx.strViewId4Region);
      DGRegionFldsCRUDEx.bolIsGeneCodeRegion = true;
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
  public get qsViewId() {
    const strName = 'viewId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }

  public ShowErrMsg(divContainer: HTMLDivElement, arrDGRegionFldsEx: Array<clsDGRegionFldsENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);

    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objDGRegionFlds = arrDGRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objDGRegionFlds != null) {
        if (objDGRegionFlds.errMsg != null && objDGRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objDGRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objDGRegionFlds.trClass) == false) {
          x.className = objDGRegionFlds.trClass;
        }
      }
    });
  }

  public ShowErrMsgInVisualEffects(
    divContainer: HTMLDivElement,
    arrDGRegionFldsEx: Array<clsDGRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('td');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);

    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objDGRegionFlds = arrDGRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objDGRegionFlds != null) {
        if (objDGRegionFlds.errMsg != null && objDGRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objDGRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objDGRegionFlds.tdClass) == false) {
          x.className = objDGRegionFlds.tdClass;
        }
      }
    });
  }

  public async VisualEffects(divContainer: HTMLDivElement, strRegionId: string) {
    const strThisFuncName = this.VisualEffects.name;
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
    const arrDGRegionFldsObjLst: Array<clsDGRegionFldsEN> =
      await DGRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);
    let arrDGRegionFldsExObjLst: Array<clsDGRegionFldsENEx> = [];
    for (const objInFor of arrDGRegionFldsObjLst) {
      const objEx = new clsDGRegionFldsENEx();
      ObjectAssign(objEx, objInFor);

      arrDGRegionFldsExObjLst.push(objEx);
    }
    for (const objInFor of arrDGRegionFldsExObjLst) {
      await DGRegionFldsEx_FuncMapByFldName(clsDGRegionFldsENEx.con_SortExpression, objInFor);
      await DGRegionFldsEx_FuncMapByFldName(clsDGRegionFldsENEx.con_FldName, objInFor);
    }
    arrDGRegionFldsExObjLst = arrDGRegionFldsExObjLst.sort((x, y) => x.seqNum - y.seqNum);

    const table: HTMLTableElement = document.createElement('table');
    table.id = 'tab4Bind';
    table.className = 'table table-striped table-condensed table-bordered';
    const tbody = document.createElement('tbody');

    table.border = '1';

    const trHead: HTMLTableRowElement = document.createElement('tr');
    trHead.className = 'row-height';
    const td = document.createElement('td');
    const check00: HTMLInputElement = document.createElement('input');
    check00.type = 'checkbox';
    check00.id = `chkTabHead`;
    check00.name = 'chkTabHead';
    check00.className = 'CheckInTab';
    check00.onclick = function (this) {
      SetAllCkechedKeysV2(divContainer, this);
    };
    td.appendChild(check00);
    trHead.appendChild(td);
    for (const objDGRegionFldsENEx of arrDGRegionFldsExObjLst) {
      const td = document.createElement('td');
      td.id = Format('td{0}', objDGRegionFldsENEx.mId);
      td.title = `${objDGRegionFldsENEx.headerText}pyf`;
      const strSortExpress = objDGRegionFldsENEx.sortExpression;
      const a1: HTMLAnchorElement = document.createElement('a');
      a1.nodeValue = objDGRegionFldsENEx.headerText; //i + "" + j;
      a1.text = objDGRegionFldsENEx.headerText; //i + "" + j;
      try {
        a1.id = Format('a{0}', objDGRegionFldsENEx.mId); //GetCtrlIdDG(objDGRegionFldsENEx);
      } catch (e) {
        alert(e);
        return;
      }
      a1.setAttribute('fldName', strSortExpress);
      a1.setAttribute('mId', objDGRegionFldsENEx.mId.toString());
      a1.setAttribute('keyid', objDGRegionFldsENEx.mId.toString());
      a1.href = 'javascript:';

      (function (divLayout) {
        a1.onclick = function (this) {
          DGRegionFldsCRUDEx.ColHeaderClick(this, divLayout, event);
        };
      })(divVarSet.refDivLayout);

      td.appendChild(a1);

      td.className = 'text-center';
      trHead.appendChild(td);
    }
    tbody.appendChild(trHead);
    const strOutTabName = await vPrjTab_SimEx_GetNameByTabIdCache(
      objViewRegion.tabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (strOutTabName == null) {
      throw new Error(`表Id:${objViewRegion.tabId}相关的表名为空！`);
    }
    let objDT;
    const intRecNum = 5;
    try {
      objDT = await SqlWApi_GetDataTableAsync(
        clsPrivateSessionStorage.currPrjDataBaseId,
        strOutTabName.toString(),
        intRecNum,
        '1=1',
        '',
      );
    } catch (objException: any) {
      let strMsg = '';
      strMsg = Format(
        '在获取表内容（GetDataTableByTabName）时出错！表名：{0},出错信息：{1}。({2}.{3})',
        strOutTabName,
        objException,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('错误信息:', strMsg);
    }
    if (objDT != null) {
      for (const objRow_In of objDT) {
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.className = 'row-height';
        const td = document.createElement('td');
        const check: HTMLInputElement = document.createElement('input');
        check.type = 'checkbox';

        check.name = 'chkInTab';
        check.className = 'CheckInTab';
        td.appendChild(check);
        tr.appendChild(td);
        for (const objDGRegionFldsENEx of arrDGRegionFldsExObjLst) {
          let strFldName = '';
          if (IsNullOrEmpty(objDGRegionFldsENEx.fldId) == false) {
            strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
              objDGRegionFldsENEx.fldId,
              clsPrivateSessionStorage.currSelPrjId,
            );
          }
          const td = document.createElement('td');
          const strValue = GetObjValueOfKey(objRow_In, strFldName);
          if (IsNullOrEmpty(strValue) == false) {
            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = strValue; //i + "" + j;
            span1.innerText = strValue; //i + "" + j;
            td.appendChild(span1); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            //let div1: HTMLDivElement = arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text)
            //td.appendChild(div1);
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
    }
    table.appendChild(tbody);
    this.AttachTooltip(table, strRegionId);
    while (divContainer.childNodes.length > 0) {
      divContainer.removeChild(divContainer.childNodes[0]);
    }
    divContainer.appendChild(table);
    const arrDGRegionFldsEx = await DGRegionFldsEx_GetObjExLstByRegionIdCacheEx(strRegionId);
    this.ShowErrMsgInVisualEffects(divContainer, arrDGRegionFldsEx);
  }
  public static GetSelectedKeyIdLst(divList: HTMLDivElement): Array<string> {
    if (DGRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divList);
      return arrKeyIds;
    } else {
      const strSelectedKeyIds = DGRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select', 'a'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        DGRegionFldsCRUDEx.divVisualEffects,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      return arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
    }
  }
  public static AddToSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = DGRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    arrmId.push(strKeyId);
    const strSelectedKeyIds_2 = arrmId.join(',');
    DGRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  public static RemoveFromSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = DGRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const arrmId_2 = arrmId.filter((x) => x != strKeyId);
    const strSelectedKeyIds_2 = arrmId_2.join(',');
    DGRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  /**
   * 是否选择某关键字的控件
   * @param strKeyId
   * @returns
   */
  public static IsSelectedKeyId(strKeyId: string): boolean {
    const strSelectedKeyIds = DGRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const bolExist: boolean = arrmId.indexOf(strKeyId) > -1 ? true : false;
    return bolExist;
  }
  public static GetFirstSelectedKeyId(divList: HTMLDivElement): string {
    if (DGRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divList);
      return strKeyId;
    } else {
      const strSelectedKeyIds = DGRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        DGRegionFldsCRUDEx.divVisualEffects,
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
