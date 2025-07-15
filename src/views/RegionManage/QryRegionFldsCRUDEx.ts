import { Ref } from 'vue';
import QryRegionFlds_EditEx from './QryRegionFlds_EditEx';
import ViewRegion_Detail_SimEx from './ViewRegion_Detail_SimEx';
import ViewRegion_Edit_SimEx from './ViewRegion_Edit_SimEx';
import {
  QryRegionFldsEx_AdjustSequenceNumber,
  QryRegionFldsEx_FuncMapByFldName,
  QryRegionFldsEx_ImportRelaFlds,
  QryRegionFldsEx_ReOrder,
  QryRegionFldsEx_SortFunByInUseAndSeq,
} from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi2';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import {
  GetAllElementPropValueInDivObj,
  GetArray,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { QryRegionFldsCRUD } from '@/viewsBase/RegionManage/QryRegionFldsCRUD';
import { BindTab } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QryRegionFlds_GetObjExLstByPagerCache,
  QryRegionFlds_GetObjLstCache,
  QryRegionFlds_GetRecCountByCondCache,
  QryRegionFlds_ReFreshCache,
} from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsQryRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import {
  NoSelectOneCtrl,
  NoSelectOneTdByKeyId,
  SelectManyCtrlByKeyId,
  SelectOneCtrl,
  SelectOneTdByKeyId,
  SetAllNotCheckedItems4Visible,
} from '@/ts/FunClass/clsPubFun4Visible';
import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { PrjTabFldEx_GetFldIdLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { ViewRegionEx_GetRegionIdByTypeCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import GCVariable_EditEx from '@/views/GeneCode/GCVariable_EditEx';

import { Position_SetDiv_Bottom } from '@/ts/PubFun/clsPosition';

import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { ASPHtmlTableEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlTableENEx';
import { ASPDivEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDivENEx';
import { ASPUlEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPUlENEx';
import { enumGCContainerType } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
import { clsASPHtmlTableBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPHtmlTableBLEx';
import { clsASPDivBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPDivBLEx';
import { clsASPUlBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPUlBLEx';
import {
  QryRegionFldsEx_GetControlGroup,
  QryRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx,
  QryRegionFldsEx_GetObjExLstByRegionIdCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi3';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { ASPLabelEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLabelENEx';
import { GCVariable_GetObjByVarIdCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { clsASPControlBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPControlBLEx';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';

import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  divVarSet,
  viewVarSet,
  RegionId_Static,
  TabId_Static,
  QryRegionFlds_DeleteKeyIdCache,
  refQryRegionFlds_Edit,
} from '@/views/RegionManage/QryRegionFldsVueShare';
import { RegionId_Static as RegionId_Static_Sim } from '@/views/RegionManage/ViewRegion_UVueShare';

import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

// import { divVarSet } from '@/views/RegionManage/QryRegionFldsCRUD.vue';

/** QryRegionFldsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class QryRegionFldsCRUDEx extends QryRegionFldsCRUD implements IShowList {
  public static GetPropValueV2: (strPropName: string) => any;
  public static EditRegionRef: Ref<any>;
  public divName4Detail4ViewRegion = 'divDetail4ViewRegion'; //详细信息区的Id
  public static divVisualEffects: HTMLDivElement; //  = GetUniDivInDoc('divVisualEffects');
  public static ActiveTabName = enumActiveTabName.VisualEffects_01;
  public static SelectedKeyIds = '';
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
  async BindOnlyGv() {
    // if (this.bolIsInitShow == false && divVarSet.refDivList != undefined) {
    //   //
    //   this.objPager.InitShow(divVarSet.refDivList, this.divName4Pager);
    //   this.bolIsInitShow = true; //
    // }
    viewVarSet.sortQryRegionFldsBy = 'seqNum Asc';
    //2、显示无条件的表内容在GridView中
    await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
  }
  /**
   * 初始化编辑区，即绑定下拉框，赋初值等
   */
  public async InitEdit() {
    const objPageEdit: QryRegionFlds_EditEx = new QryRegionFlds_EditEx(
      'QryRegionFlds_EditEx',
      this,
    );
    // 为编辑区绑定下拉框
    await refQryRegionFlds_Edit.value.BindDdl4EditRegionInDiv();
    objPageEdit.bolIsLoadEditRegion = true;
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: QryRegionFldsCRUDEx = new QryRegionFldsCRUDEx();
    const objPageEdit: QryRegionFlds_EditEx = new QryRegionFlds_EditEx(
      'QryRegionFlds_EditEx',
      objPage,
    );

    let arrKeyIds;
    // objPageEdit.divName4Edit = 'divEdit_Loc';
    const objViewRegion_Edit_SimEx = new ViewRegion_Edit_SimEx('ViewRegion_Edit_SimEx', objPage);

    console.log(objViewRegion_Edit_SimEx);
    switch (strCommandName) {
      case 'AddVar': //提交
        // objPage.btnAddVar_Click(strKeyId);
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
      case 'VisualEffects':
        // objPage.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects);
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
        if (QryRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
          strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        }
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        // objPageEdit.divEdit = QryRegionFldsCRUDEx.GetPropValueV2('editDiv');
        objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        break;
      case 'Update_ViewRegion': //修改记录
        QryRegionFldsCRUDEx.EditRegionRef.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);

        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        await objPage.btnGoTop_Click();
        await objPage.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        await objPage.btnGoBottum_Click();

        await objPage.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);

        objPage.SynchCheckedPos4Gv();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        await objPage.btnUpMove_Click();
        await objPage.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        await objPage.btnDownMove_Click();
        await objPage.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        objPage.SynchCheckedPos4Gv();
        break;
      case 'ReOrder': //重序记录
        await objPage.btnReOrder_Click();
        await objPage.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);

        break;
      default:
        AccessBtnClickDefault(strCommandName, 'QryRegionFldsCRUDEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_QryRegionFlds]！');
    //this.BindGv_QryRegionFlds();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    let objViewRegion_Detail;
    switch (strType) {
      case 'QryRegionFlds':
        this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
        this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);

        break;
      case `${clsViewRegionEN._CurrTabName}Detail`:
        console.log('修改并返回主页面刷新信息区。');

        objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
        objViewRegion_Detail.divDetail = QryRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
        objViewRegion_Detail.btnDetailRecord_Click(RegionId_Static.value);

        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  public btnAddVar_Click(strKeyId: string) {
    console.log(strKeyId);
    const objPage: QryRegionFldsCRUDEx = new QryRegionFldsCRUDEx();
    const objPageEdit: GCVariable_EditEx = new GCVariable_EditEx('GCVariable_EditEx', objPage);

    objPageEdit.btnAddNewRecord_Click();
  }
  public async SynchCheckedPos4Gv() {
    const strKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (strKeyIds.length == 0) {
      console.error('请选择需要同步选择的记录！');
      return;
    }
    SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, strKeyIds);
  }

  /** 把所有的查询控件内容组合成一个条件串
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
       <returns>条件串(strWhereCond)</returns>
     */
  public async CombineQryRegionFldsConditionObj(): Promise<ConditionCollection> {
    const objQryRegionFlds_Cond = new ConditionCollection();
    objQryRegionFlds_Cond.SetCondFldValue(
      clsQryRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    return objQryRegionFlds_Cond;
  }
  /** 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
  */
  public async CombineQryRegionFldsCondition(): Promise<string> {
    const strWhereCond = `regionId=${RegionId_Static.value}`;
    return strWhereCond;
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
  */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();
    // clsPrivateSessionStorage.viewId_Main = '00050322';
    try {
      switch (this.qsOp) {
        case 'ViewEdit':
          break;
        case 'ViewRegionEdit':
          break;

        case '':
          // await Main_ViewInfo.DispViewInfo();
          // await Main_ViewInfo.ShowCurrItem('QryRegionFldsCRUD', '');
          break;
      }
      Position_SetDiv_Bottom('divEdit_Loc');

      const strViewId = clsPrivateSessionStorage.viewId_Main;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      RegionId_Static.value = await ViewRegionEx_GetRegionIdByTypeCache(
        strViewId,
        enumRegionType.QueryRegion_0001,
        strCmPrjId,
      );
      if (IsNullOrEmpty(RegionId_Static.value) == true) {
        const objViewInfo = await viewInfoStore.getObj(strViewId);
        const strMsg = `界面:[${objViewInfo?.viewName}](ViewId:${strViewId})没有查询区，请检查！(in QryRegionFldsCRUDEx.PageLoadCache)`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      console.log('RegionId_Static.value', RegionId_Static.value);
      const objViewRegion_Qry = await viewRegionStore.getObj(RegionId_Static.value);

      if (objViewRegion_Qry != null) {
        if (IsNullOrEmpty(objViewRegion_Qry.tabId) == true) {
          const strMsg = `查询区存在，但相关表为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
          alert(strMsg);
          return;
        }

        RegionId_Static.value = objViewRegion_Qry.regionId;

        TabId_Static.value = objViewRegion_Qry.tabId;
      }
      this.InitEdit();
      // await this.AddDPV_Detail4ViewRegion(this.divName4Detail4ViewRegion);
      // const divViewRegionDetail = QryRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
      const objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
      // objViewRegion_Detail.divDetail = divViewRegionDetail;
      RegionId_Static_Sim.value = RegionId_Static.value;
      await objViewRegion_Detail.btnDetailRecord_Click();

      // 为查询区字段编辑区加载控件
      const objPage_QryRegionFlds_Edit: QryRegionFlds_EditEx = new QryRegionFlds_EditEx(
        'QryRegionFlds_EditEx',
        this,
      );

      // const divEdit = QryRegionFldsCRUDEx.GetPropValueV2('editDiv');
      // objPage_QryRegionFlds_Edit.divEdit = divEdit;

      // 为编辑区绑定下拉框
      // await refQryRegionFlds_Edit.value1.BindDdl4EditRegionInDiv();

      objPage_QryRegionFlds_Edit.bolIsLoadEditRegion = true;

      this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public mySort(a: clsQryRegionFldsEN, b: clsQryRegionFldsEN) {
    if (b.inUse != a.inUse) {
      return b.inUse ? 1 : -1;
    } else {
      return a.seqNum - b.seqNum;
    }
  }
  public async SetFieldNameNotInCurrTab(
    divContainer: HTMLDivElement,
    arrQryRegionFldsEx: Array<clsQryRegionFldsENEx>,
  ) {
    const viewRegionStore = useviewRegionStore();
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);

    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    for (const objRowElement of arrElement) {
      const strId = objRowElement.id.substring(2);
      const objQryRegionFlds = arrQryRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objQryRegionFlds == null) continue;
      if (IsNullOrEmpty(objQryRegionFlds.fldId)) continue;
      const strCurrTabId = await viewRegionStore.getTabId(RegionId_Static.value);
      if (IsNullOrEmpty(strCurrTabId)) continue;
      const arrFldId = await PrjTabFldEx_GetFldIdLstByTabIdCache(strCurrTabId);
      if (arrFldId.indexOf(objQryRegionFlds.fldId) == -1) {
        objRowElement.className = 'text-muted bg-danger';
      } else if (IsNullOrEmpty(objQryRegionFlds.trClass) == false) {
        objRowElement.className = objQryRegionFlds.trClass;
      }
    }
  }

  public SetClass4NotInUse(
    divContainer: HTMLDivElement,
    arrQryRegionFldsEx: Array<clsQryRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objQryRegionFld = arrQryRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objQryRegionFld != null) {
        if (objQryRegionFld.inUse == false) {
          x.className = 'text-muted bg-info';
        } else if (IsNullOrEmpty(objQryRegionFld.trClass) == false) {
          x.className = objQryRegionFld.trClass;
        }
      }
    });
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

    const bolExist = QryRegionFldsCRUDEx.IsSelectedKeyId(strId);
    if (bolIsPressShift === true) {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(QryRegionFldsCRUDEx.divVisualEffects, strId);

        QryRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        // if (divList != null) SetCheckedItem4KeyId(divList, strId);
        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(QryRegionFldsCRUDEx.divVisualEffects, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        QryRegionFldsCRUDEx.btn_Click('Update', strId);
        QryRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
      }
    } else {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(QryRegionFldsCRUDEx.divVisualEffects, strId);

        QryRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        SetAllNotCheckedItems4Visible(QryRegionFldsCRUDEx.divVisualEffects);
        QryRegionFldsCRUDEx.SelectedKeyIds = '';
        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(QryRegionFldsCRUDEx.divVisualEffects, strId);

        console.log('(in ColHeaderClick )strId:', strId);
        QryRegionFldsCRUDEx.btn_Click('Update', strId);
        QryRegionFldsCRUDEx.AddToSelectedKeyIds(strId);

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
          QryRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLst00 = objDiv.getElementsByTagName('textarea');
    const arrElement00 = GetArray(objLst00);
    for (const objTextArea of arrElement00) {
      (function () {
        objTextArea.onclick = function (this) {
          QryRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }
    const objLst1 = objDiv.getElementsByTagName('select');
    arrElement = GetArray(objLst1);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          QryRegionFldsCRUDEx.ControlClick(this, event);
        };
      })();
    }

    const objA = objDiv.getElementsByTagName('a');
    arrElement = GetArray(objA);
    for (const objInput of arrElement) {
      (function () {
        objInput.onclick = function (this) {
          QryRegionFldsCRUDEx.ControlClick(this, event);
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
      const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置有用的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds);
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置不用的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetNotInUse(arrKeyIds);
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      await QryRegionFldsEx_ReOrder(RegionId_Static.value);
      const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
      arrQryRegionFldsObjLstCache.forEach((x) => {
        QryRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      QryRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (QryRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await QryRegionFldsEx_AdjustSequenceNumber('LAST', lngmId);
      const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
      arrQryRegionFldsObjLstCache.forEach((x) => {
        QryRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      QryRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置底出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);

      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (QryRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await QryRegionFldsEx_AdjustSequenceNumber('DOWN', lngmId);
      const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
      arrQryRegionFldsObjLstCache.forEach((x) => {
        QryRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      QryRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `下移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (QryRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await QryRegionFldsEx_AdjustSequenceNumber('UP', lngmId);
      const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
      arrQryRegionFldsObjLstCache.forEach((x) => {
        QryRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      QryRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `上移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);

      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (QryRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await QryRegionFldsEx_AdjustSequenceNumber('FIRST', lngmId);
      const arrQryRegionFldsObjLstCache = await QryRegionFlds_GetObjLstCache(strRegionId);
      arrQryRegionFldsObjLstCache.forEach((x) => {
        QryRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      QryRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置顶出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (QryRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(divVarSet.refDivList, arrKeyId);
    }
  }

  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
  public async BindGv_QryRegionFlds4Func(divList: HTMLDivElement) {
    if (QryRegionFldsCRUDEx.ActiveTabName != enumActiveTabName.DataList_02) return;

    if (viewVarSet.sortQryRegionFldsBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortQryRegionFldsBy)为空，请检查！(In BindGv_QryRegionFldsCache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objQryRegionFlds_Cond = await this.CombineQryRegionFldsConditionObj();

    const strWhereCond = JSON.stringify(objQryRegionFlds_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQryRegionFldsExObjLst: Array<clsQryRegionFldsENEx> = [];
    try {
      this.recCount = await QryRegionFlds_GetRecCountByCondCache(
        objQryRegionFlds_Cond,
        RegionId_Static.value,
      );
      let strSortFun = (x: any, y: any) => {
        x = y;
        return 0;
      };
      if (QryRegionFldsCRUD.sortFunStatic != undefined) {
        strSortFun = QryRegionFldsCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objQryRegionFlds_Cond,
        orderBy: viewVarSet.sortQryRegionFldsBy,
        sortFun: strSortFun,
      };
      arrQryRegionFldsExObjLst = await QryRegionFlds_GetObjExLstByPagerCache(
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
    if (arrQryRegionFldsExObjLst.length == 0) {
      const strKey = `${clsQryRegionFldsEN._CurrTabName}_${RegionId_Static.value}`;
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);

      alert(strMsg);
      return;
    }
    try {
      arrQryRegionFldsExObjLst = arrQryRegionFldsExObjLst.sort(
        QryRegionFldsEx_SortFunByInUseAndSeq,
      );
      await this.BindTab_QryRegionFlds4Func(divList, arrQryRegionFldsExObjLst);
      await this.SetClass4NotInUse(divList, arrQryRegionFldsExObjLst);
      await this.ShowErrMsg(divList, arrQryRegionFldsExObjLst);
      await this.SetFieldNameNotInCurrTab(divList, arrQryRegionFldsExObjLst);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /** 显示QryRegionFlds对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * divContainer 显示容器
   * arrQryRegionFldsExObjLst 需要绑定的对象列表
   */
  public async BindTab_QryRegionFlds4Func(
    divContainer: HTMLDivElement,
    arrQryRegionFldsExObjLst: Array<clsQryRegionFldsENEx>,
  ) {
    const strThisFuncName = this.BindTab_QryRegionFlds4Func.name;
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
        colHeader: '字段',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'event',
        sortBy: 'event',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '事件',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'tabName',
        sortBy: 'tabName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
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
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'colSpan',
        sortBy: 'colSpan',
        sortFun: clsPubVar4Web.SortFun,
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
        colHeader: '宽',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
    ];

    try {
      await this.ExtendFldFuncMap(arrQryRegionFldsExObjLst, arrDataColumn);
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

    await BindTab(divDataLst, arrQryRegionFldsExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async ExtendFldFuncMap(
    arrQryRegionFldsExObjLst: Array<clsQryRegionFldsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsQryRegionFldsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrQryRegionFldsExObjLst) {
        try {
          await QryRegionFldsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    try {
      await QryRegionFldsEx_ImportRelaFlds(
        RegionId_Static.value,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      QryRegionFlds_ReFreshCache(RegionId_Static.value);
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);

      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置跨列的记录！');
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
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      const arrKeyIds = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置宽度的记录！');
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
      await this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = QryRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(QryRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `设置记录不成功,${e}.(In btnSetWidth_Click())`;
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

  public ShowErrMsg(divContainer: HTMLDivElement, arrQryRegionFldsEx: Array<clsQryRegionFldsENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);

    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objQryRegionFlds = arrQryRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objQryRegionFlds != null) {
        if (objQryRegionFlds.errMsg != null && objQryRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objQryRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objQryRegionFlds.trClass) == false) {
          x.className = objQryRegionFlds.trClass;
        }
      }
    });
  }

  public ShowErrMsgInVisualEffects(
    divContainer: HTMLDivElement,
    arrQryRegionFldsEx: Array<clsQryRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('td');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);

    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objQryRegionFlds = arrQryRegionFldsEx.find((x) => x.mId.toString() == strId);
      if (objQryRegionFlds != null) {
        if (objQryRegionFlds.errMsg != null && objQryRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objQryRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objQryRegionFlds.tdClass) == false) {
          x.className = objQryRegionFlds.tdClass;
        }
      }
    });
  }

  public async VisualEffects(divContainer: HTMLDivElement, strRegionId: string) {
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
    const arrControlGroups = await QryRegionFldsEx_GetControlGroup(
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

    let objTable: ASPHtmlTableEx;
    let objDiv_FormControl: ASPDivEx;
    let objFormInline: ASPDivEx;
    let objDivTable: ASPDivEx;
    let objUl: ASPUlEx;
    let objUl2: ASPUlEx;
    let objTable2: ASPHtmlTableEx;
    switch (objViewRegion.containerTypeId) {
      case enumGCContainerType.TableContainer_0001:
        objTable = await clsASPHtmlTableBLEx.PackageByTable4QueryRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );
        objTable.width = objViewRegion.width;
        clsASPHtmlTableBLEx.GeneHtmlControl(objTable, objDiv);

        break;
      case enumGCContainerType.FormControl_0002:
        objDiv_FormControl = await clsASPDivBLEx.PackageByFormControl4QueryRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );

        clsASPDivBLEx.GeneHtmlControl(objDiv_FormControl, objDiv);
        break;
      case enumGCContainerType.FormInline_0003:
        objFormInline = clsASPDivBLEx.PackageByFormInline4QueryRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );

        clsASPDivBLEx.GeneHtmlControl(objFormInline, objDiv);
        break;
      case enumGCContainerType.DivTable_0004:
        objDivTable = clsASPDivBLEx.PackageByDivTable4QueryRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );

        clsASPDivBLEx.GeneHtmlControl(objDivTable, objDiv);
        break;
      case enumGCContainerType.HorizontalListLi_0005:
        objUl = clsASPUlBLEx.PackageByUl4QueryRegionH(arrControlGroups, objViewRegion.colNum);

        clsASPUlBLEx.GeneHtmlControl(objUl, objDiv);
        break;
      case enumGCContainerType.VerticalListLi_0006:
        objUl2 = clsASPUlBLEx.PackageByUl4QueryRegionV(arrControlGroups, objViewRegion.colNum);
        clsASPUlBLEx.GeneHtmlControl(objUl2, objDiv);
        break;
      default:
        objTable2 = await clsASPHtmlTableBLEx.PackageByTable4QueryRegion(
          arrControlGroups,
          objViewRegion.colNum,
        );
        clsASPHtmlTableBLEx.GeneHtmlControl(objTable2, objDiv);
        break;
    }

    divContainer.appendChild(objDiv);
    const arrQryRegionFlds = (
      await QryRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx(strRegionId)
    ).filter((x) => x.ctlTypeId == enumCtlType.ViewVariable_38);
    if (arrQryRegionFlds.length > 0) {
      const objAspDiv: ASPDivEx = new ASPDivEx();

      const objLabel_title: ASPLabelEx = new ASPLabelEx();
      objLabel_title.is4PureHtml = true;

      objLabel_title.cssClass = 'col-form-label-sm text-right text-info font-weight-bold';

      objLabel_title.text = '附加条件串:';
      objAspDiv.arrSubAspControlLst2.push(objLabel_title);
      for (const objInFor of arrQryRegionFlds) {
        let strVarName = '';
        const objVar = await GCVariable_GetObjByVarIdCache(objInFor.varId);
        if (objVar != null) {
          strVarName = objVar.varExpression;
        }
        const objLabel: ASPLabelEx = new ASPLabelEx();
        objLabel.is4PureHtml = true;
        objLabel.colSpanCtrl = 1;
        objLabel.ctrlId = `lbl${objInFor.objFieldTabENEx.fldName}_q`;
        objLabel.onClick4Html = `lbl_Click('${objLabel.ctrlId}')`;
        objLabel.width = objInFor.width;
        objLabel.fldName = objInFor.objFieldTabENEx.fldName;
        objLabel.itemName4MultiModel = '';

        objLabel.tabName = await objInFor.tabName4GC();
        objLabel.cssClass = 'col-form-label-sm text-primary';

        objLabel.text = `strWhereCond += " And ${objInFor.objFieldTabENEx.fldName} = ${strVarName}";//${objInFor.labelCaption}`;
        objAspDiv.arrSubAspControlLst2.push(objLabel);
      }
      clsASPControlBLEx.GeneHtmlControl(objAspDiv, objDiv);
    }
    divContainer.appendChild(objDiv);
    this.SetEvent(divContainer);

    const arrQryRegionFldsEx = await QryRegionFldsEx_GetObjExLstByRegionIdCache(strRegionId);
    this.ShowErrMsgInVisualEffects(divContainer, arrQryRegionFldsEx);
  }
  public static GetSelectedKeyIdLst(divList: HTMLDivElement): Array<string> {
    if (QryRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divList);
      return arrKeyIds;
    } else {
      const strSelectedKeyIds = QryRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      // console.error('arrmId', arrmId);
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        QryRegionFldsCRUDEx.divVisualEffects,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      return arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
    }
  }
  public static AddToSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = QryRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    arrmId.push(strKeyId);
    const strSelectedKeyIds_2 = arrmId.join(',');
    QryRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  public static RemoveFromSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = QryRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const arrmId_2 = arrmId.filter((x) => x != strKeyId);
    const strSelectedKeyIds_2 = arrmId_2.join(',');
    QryRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  /**
   * 是否选择某关键字的控件
   * @param strKeyId
   * @returns
   */
  public static IsSelectedKeyId(strKeyId: string): boolean {
    const strSelectedKeyIds = QryRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const bolExist: boolean = arrmId.indexOf(strKeyId) > -1 ? true : false;
    return bolExist;
  }
  public static GetFirstSelectedKeyId(divList: HTMLDivElement): string {
    if (QryRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divList);
      return strKeyId;
    } else {
      const strSelectedKeyIds = QryRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        QryRegionFldsCRUDEx.divVisualEffects,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      const arrmId2 = arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
      if (arrmId2.length > 0) return arrmId2[0];
      return '';
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    viewVarSet.sortQryRegionFldsBy = Format('{0} {1}', sortColumnKey, sortDirection);
    await this.BindGv_QryRegionFlds4Func(this.thisDivList);
  }
}
