import { Ref } from 'vue';
import $ from 'jquery';
import { GeneViewCodeEx } from '../PrjInterface/GeneViewCodeEx';
import ExcelExportRegionFlds_EditEx from './ExcelExportRegionFlds_EditEx';
import ViewRegion_Detail_SimEx from './ViewRegion_Detail_SimEx';
import ViewRegion_Edit_SimEx from './ViewRegion_Edit_SimEx';
import { ExcelExportRegionFldsCRUD } from '@/viewsBase/RegionManage/ExcelExportRegionFldsCRUD';
import {
  NoSelectOneCtrl,
  NoSelectOneTdByKeyId,
  SelectManyCtrlByKeyId,
  SelectOneCtrl,
  SelectOneTdByKeyId,
  SetAllNotCheckedItems4Visible,
} from '@/ts/FunClass/clsPubFun4Visible';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { SqlWApi_GetDataTableAsync } from '@/ts/FunClass/SqlWApi';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
import { enumCodeType } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { clsExcelExportRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsEN';
import { clsExcelExportRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsENEx';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';

import {
  ExcelExportRegionFlds_GetObjBymIdCache,
  ExcelExportRegionFlds_GetObjExLstByPagerCache,
  ExcelExportRegionFlds_GetObjLstCache,
  ExcelExportRegionFlds_GetRecCountByCondCache,
  ExcelExportRegionFlds_ReFreshCache,
} from '@/ts/L3ForWApi/RegionManage/clsExcelExportRegionFldsWApi';

import { DnPathEx_CreateGraph4DnPathCache } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
import {
  AppCodeTypeRelaEx_CopyToEx,
  AppCodeTypeRelaEx_FuncMapByFldName,
  AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache,
  AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum,
} from '@/ts/L3ForWApiEx/GeneCode/clsAppCodeTypeRelaExWApi';
import {
  ExcelExportRegionFldsEx_AdjustSequenceNumber,
  ExcelExportRegionFldsEx_CopyToEx,
  ExcelExportRegionFldsEx_FuncMapByFldName,
  ExcelExportRegionFldsEx_GetObjExBymIdCache,
  ExcelExportRegionFldsEx_GetObjExLstByRegionIdCacheEx,
  ExcelExportRegionFldsEx_GetObjLstByRegionIdCache4InUseEx,
  ExcelExportRegionFldsEx_ImportRelaFlds,
  ExcelExportRegionFldsEx_ReOrder,
  ExcelExportRegionFldsEx_SortFunByInUseAndSeq,
} from '@/ts/L3ForWApiEx/RegionManage/clsExcelExportRegionFldsExWApi';
import {
  ViewRegionEx_GetObjLstByViewIdCache,
  ViewRegionEx_GetRegionIdByTypeCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { PrjTabFldEx_GetFldIdLstByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';

import { vPrjTab_SimEx_GetNameByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetAllElementPropValueInDivObj,
  GetArray,
  GetCheckedKeyIdsInDivObj,
  GetDistinctArray,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindTab,
  GetObjValueOfKey,
  GetWidthByWordStr,
  ObjectAssign,
  SetAllCkechedKeysV2,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, Is0EqEmpty, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  CombineExcelExportRegionFldsConditionObj,
  divVarSet,
  ExcelExportRegionFlds_DeleteKeyIdCache,
  refExcelExportRegionFlds_Edit,
  RegionId_Static,
  TabId_Static,
  viewVarSet,
} from '@/views/RegionManage/ExcelExportRegionFldsVueShare';
import { RegionId_Static as RegionId_Static_Sim } from '@/views/RegionManage/ViewRegion_UVueShare';

import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

/** ExcelExportRegionFldsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ExcelExportRegionFldsCRUDEx
  extends ExcelExportRegionFldsCRUD
  implements IShowList
{
  public static GetPropValueV2: (strPropName: string) => any;
  public static EditRegionRef: Ref<any>;
  public divName4Detail4ViewRegion = 'divDetail4ViewRegion'; //详细信息区的Id
  public static divVisualEffects: HTMLDivElement; // = GetUniDivInDoc('divVisualEffects');
  public static ActiveTabName = enumActiveTabName.VisualEffects_01;
  public static SelectedKeyIds = '';

  public static CmPrjIdCache = '9991';
  public static strViewId4Region = ''; //编辑区的界面Id
  // public static strTabId4Region = ''; //编辑区的界面Id

  //public strTabName4Region = "";
  public static bolIsGeneCodeRegion = false; //是否已经生成代码区域

  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvExcelExportRegionFldsBy=  "mId";
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
    alert('该类没有绑定该函数：[this.BindGv_vExcelExportRegionFlds]！');
    //this.BindGv_vExcelExportRegionFlds();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    let objViewRegion_Detail;
    switch (strType) {
      case 'ExcelExportRegionFlds':
        this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
        this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        break;
      case `${clsViewRegionEN._CurrTabName}Detail`:
        console.log('修改并返回主页面刷新信息区。');
        objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
        objViewRegion_Detail.divDetail =
          ExcelExportRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');
        objViewRegion_Detail.btnDetailRecord_Click(RegionId_Static.value);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  async BindOnlyGv() {
    viewVarSet.sortExcelExportRegionFldsBy = `${clsExcelExportRegionFldsEN.con_SeqNum} Asc`;
    //2、显示无条件的表内容在GridView中
    await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
  }
  /**
   * 初始化编辑区，即绑定下拉框，赋初值等
   */
  public async InitEdit() {
    const objPageEdit: ExcelExportRegionFlds_EditEx = new ExcelExportRegionFlds_EditEx(
      'ExcelExportRegionFlds_EditEx',
      this,
    );
    // 为编辑区绑定下拉框
    await refExcelExportRegionFlds_Edit.value.BindDdl4EditRegionInDiv();
    objPageEdit.bolIsLoadEditRegion = true;
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: ExcelExportRegionFldsCRUDEx = new ExcelExportRegionFldsCRUDEx();
    const objPageEdit: ExcelExportRegionFlds_EditEx = new ExcelExportRegionFlds_EditEx(
      'ExcelExportRegionFlds_EditEx',
      objPage,
    );
    let strMsg = '';
    let arrKeyIds;

    const objViewRegion_Edit_SimEx = new ViewRegion_Edit_SimEx('ViewRegion_Edit_SimEx', objPage);

    console.log(objViewRegion_Edit_SimEx);
    switch (strCommandName) {
      case 'CodeGene': //自定义功能
        objPage.btnCodeGene_Click();
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
        objPage.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
        break;
      case 'Update_ViewRegion': //修改记录
        ExcelExportRegionFldsCRUDEx.EditRegionRef.value.btnViewRegion_Edit_Click(
          strCommandName,
          strKeyId,
        );

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
        if (ExcelExportRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
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
        arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        await objPage.btnGoTop_Click();
        // await objPage.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects);
        // objPage.SynchCheckedPos4Gv();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        await objPage.btnGoBottum_Click();
        // await objPage.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects);
        // objPage.SynchCheckedPos4Gv();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        await objPage.btnUpMove_Click();
        // await objPage.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects);
        // objPage.SynchCheckedPos4Gv();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        await objPage.btnDownMove_Click();
        // await objPage.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects);
        // objPage.SynchCheckedPos4Gv();
        break;
      case 'ReOrder': //重序记录
        await objPage.btnReOrder_Click();
        // await objPage.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects);

        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ExcelExportRegionFldsCRUDEx.btn_Click');

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
    // 在此处放置用户代码以初始化页面
    try {
      switch (this.qsOp) {
        case 'ViewEdit':
          break;
        case 'ViewRegionEdit':
          break;

        case '':
          // await Main_ViewInfo.DispViewInfo();
          // await Main_ViewInfo.ShowCurrItem('ExcelExportRegionFldsCRUD', '');
          break;
      }

      ExcelExportRegionFldsCRUDEx.strViewId4Region = await clsPubVar4Web.GetViewId(this.qsViewId);

      const strViewId = clsPrivateSessionStorage.viewId_Main;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      RegionId_Static.value = await ViewRegionEx_GetRegionIdByTypeCache(
        strViewId,
        enumRegionType.ExcelExportRegion_0007,
        strCmPrjId,
      );
      const objViewRegion_ExcelExport = await viewRegionStore.getObj(RegionId_Static.value);
      if (objViewRegion_ExcelExport != null) {
        if (IsNullOrEmpty(objViewRegion_ExcelExport.tabId) == true) {
          const strMsg = `数据导出区存在，但相关表为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
          alert(strMsg);
          return;
        }
        RegionId_Static.value = objViewRegion_ExcelExport.regionId;

        // ExcelExportRegionFlds_EditEx.strTabId4Region = objViewRegion_ExcelExport.tabId;
        // ExcelExportRegionFldsCRUDEx.strTabId4Region = objViewRegion_ExcelExport.tabId;
        TabId_Static.value = objViewRegion_ExcelExport.tabId;
        //clsPrivateSessionStorage.cmPrjId = objViewRegion_ExcelExport.cmPrjId;
        //ExcelExportRegionFldsCRUDEx.CmPrjIdCache = objViewRegion_ExcelExport.cmPrjId;
      }
      // await this.AddDPV_Detail4ViewRegion(this.divName4Detail4ViewRegion);

      const objViewRegion_Detail = new ViewRegion_Detail_SimEx(this);
      // const divViewRegionDetail = ExcelExportRegionFldsCRUDEx.GetPropValueV2('viewRegionDetailDiv');

      // objViewRegion_Detail.divDetail = divViewRegionDetail;
      //ViewRegion_Detail_Sim.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;
      RegionId_Static_Sim.value = RegionId_Static.value;
      await objViewRegion_Detail.btnDetailRecord_Click();
      this.InitEdit();

      // 为查询区字段编辑区加载控件
      const objPage_ExcelExportRegionFlds_Edit: ExcelExportRegionFlds_EditEx =
        new ExcelExportRegionFlds_EditEx('ExcelExportRegionFlds_EditEx', this);
      // const divEdit = ExcelExportRegionFldsCRUDEx.GetPropValueV2('editDiv');
      // objPage_ExcelExportRegionFlds_Edit.divEdit = divEdit;

      // objPage_ExcelExportRegionFlds_Edit.divName4Edit = 'divEdit_Loc1';
      // await objPage_ExcelExportRegionFlds_Edit.AddDPV_Edit(
      //   objPage_ExcelExportRegionFlds_Edit.divName4Edit,
      // );

      objPage_ExcelExportRegionFlds_Edit.bolIsLoadEditRegion = true;

      //clsPubFun.SetCommFun4BL();
      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();

      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
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
      const arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds);
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      const arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      console.log('arrKeyIds=');
      console.log(arrKeyIds);
      await this.SetNotInUse(arrKeyIds);
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
      await ExcelExportRegionFldsEx_ReOrder(RegionId_Static.value);
      const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
        strRegionId,
      );
      arrExcelExportRegionFldsObjLstCache.forEach((x) => {
        ExcelExportRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });
      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (ExcelExportRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await ExcelExportRegionFldsEx_AdjustSequenceNumber('LAST', lngmId);
      const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
        strRegionId,
      );
      arrExcelExportRegionFldsObjLstCache.forEach((x) => {
        ExcelExportRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });

      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置底出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }

    let arrKeyId;
    if (ExcelExportRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await ExcelExportRegionFldsEx_AdjustSequenceNumber('DOWN', lngmId);
      const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
        strRegionId,
      );
      arrExcelExportRegionFldsObjLstCache.forEach((x) => {
        ExcelExportRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });

      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `下移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (ExcelExportRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await ExcelExportRegionFldsEx_AdjustSequenceNumber('UP', lngmId);
      const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
        strRegionId,
      );
      arrExcelExportRegionFldsObjLstCache.forEach((x) => {
        ExcelExportRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });

      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `上移记录出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (ExcelExportRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
    const arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
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
      await ExcelExportRegionFldsEx_AdjustSequenceNumber('FIRST', lngmId);
      const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
        strRegionId,
      );
      arrExcelExportRegionFldsObjLstCache.forEach((x) => {
        ExcelExportRegionFlds_DeleteKeyIdCache(RegionId_Static.value, x.mId);
      });

      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e: any) {
      const strMsg = `置顶出错。错误:${e}.(In ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    let arrKeyId;
    if (ExcelExportRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.VisualEffects_01) {
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } else {
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(divVarSet.refDivList, arrKeyId);
    }
  }
  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
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
  public async BindGv_ExcelExportRegionFlds4Func(divList: HTMLDivElement) {
    if (ExcelExportRegionFldsCRUDEx.ActiveTabName != enumActiveTabName.DataList_02) return;

    if (viewVarSet.sortExcelExportRegionFldsBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortExcelExportRegionFldsBy)为空，请检查！(In BindGv_ExcelExportRegionFldsCache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objExcelExportRegionFlds_Cond = await CombineExcelExportRegionFldsConditionObj();
    //objExcelExportRegionFlds_Cond.SetCondFldValue(clsExcelExportRegionFldsEN.con_CmPrjId, clsPrivateSessionStorage.cmPrjId, "=");

    const strWhereCond = JSON.stringify(objExcelExportRegionFlds_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //let arrExcelExportRegionFldsObjLst: Array<clsExcelExportRegionFldsEN> = [];
    let arrExcelExportRegionFldsExObjLst: Array<clsExcelExportRegionFldsENEx> = [];
    try {
      this.recCount = await ExcelExportRegionFlds_GetRecCountByCondCache(
        objExcelExportRegionFlds_Cond,
        RegionId_Static.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objExcelExportRegionFlds_Cond,
        orderBy: viewVarSet.sortExcelExportRegionFldsBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrExcelExportRegionFldsExObjLst = await ExcelExportRegionFlds_GetObjExLstByPagerCache(
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
    if (arrExcelExportRegionFldsExObjLst.length == 0) {
      const strKey = `${clsExcelExportRegionFldsEN._CurrTabName}_${RegionId_Static.value}`;
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      arrExcelExportRegionFldsExObjLst = arrExcelExportRegionFldsExObjLst.sort(
        ExcelExportRegionFldsEx_SortFunByInUseAndSeq,
      );
      await this.BindTab_ExcelExportRegionFlds4Func(divList, arrExcelExportRegionFldsExObjLst);
      await this.SetClass4NotInUse(divList, arrExcelExportRegionFldsExObjLst);
      await this.ShowErrMsg(divList, arrExcelExportRegionFldsExObjLst);
      await this.SetFieldNameNotInCurrTab(divList, arrExcelExportRegionFldsExObjLst);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async SetFieldNameNotInCurrTab(
    divContainer: HTMLDivElement,
    arrExcelExportRegionFldsEx: Array<clsExcelExportRegionFldsENEx>,
  ) {
    const viewRegionStore = useviewRegionStore();
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    for (const objRowElement of arrElement) {
      const strId = objRowElement.id.substring(2);
      const objExcelExportRegionFlds = arrExcelExportRegionFldsEx.find(
        (x) => x.mId.toString() == strId,
      );
      if (objExcelExportRegionFlds == null) continue;
      if (IsNullOrEmpty(objExcelExportRegionFlds.fldId)) continue;
      const strCurrTabId = await viewRegionStore.getTabId(RegionId_Static.value);
      if (IsNullOrEmpty(strCurrTabId)) continue;
      const arrFldId = await PrjTabFldEx_GetFldIdLstByTabIdCache(strCurrTabId);
      if (arrFldId.indexOf(objExcelExportRegionFlds.fldId) == -1) {
        objRowElement.className = 'text-muted bg-danger';
      } else if (IsNullOrEmpty(objExcelExportRegionFlds.trClass) == false) {
        objRowElement.className = objExcelExportRegionFlds.trClass;
      }
    }
  }

  public async VisualEffects(divContainer: HTMLDivElement, strRegionId: string) {
    const strThisFuncName = this.VisualEffects.name;
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
    // const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    //   objViewRegion.tabId,
    //   clsPrivateSessionStorage.cmPrjId,
    // );
    //console.log("1objViewRegion", objViewRegion);
    const objDiv: HTMLDivElement = document.createElement('div');
    // const vsRowNo = 1;
    objDiv.id = 'div1';
    objDiv.style['width'] = `${objViewRegion.width}px`;
    let arrExcelExportRegionFldsObjLst: Array<clsExcelExportRegionFldsEN> =
      await ExcelExportRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);
    arrExcelExportRegionFldsObjLst = arrExcelExportRegionFldsObjLst.sort(
      (x, y) => x.seqNum - y.seqNum,
    );
    const arrExcelExportRegionFldsExObjLst: Array<clsExcelExportRegionFldsENEx> = [];
    for (const objInFor of arrExcelExportRegionFldsObjLst) {
      const objEx = new clsExcelExportRegionFldsENEx();
      ObjectAssign(objEx, objInFor);

      arrExcelExportRegionFldsExObjLst.push(objEx);
    }
    for (const objInFor of arrExcelExportRegionFldsExObjLst) {
      await ExcelExportRegionFldsEx_FuncMapByFldName(
        clsExcelExportRegionFldsENEx.con_FldName,
        objInFor,
      );
    }
    const table: HTMLTableElement = document.createElement('table');
    table.id = 'tab4Bind';
    table.className = 'table table-striped table-condensed table-bordered';
    const tbody = document.createElement('tbody');
    //table.width = intWidth;
    //table.height = h;
    //table.border = 1;
    //table.height = h;
    table.border = '1';
    // const intColNum = arrExcelExportRegionFldsObjLst.length;
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
    for (const objExcelExportRegionFldsENEx of arrExcelExportRegionFldsExObjLst) {
      const td: HTMLTableDataCellElement = document.createElement('td');
      td.id = Format('td{0}', objExcelExportRegionFldsENEx.mId);
      //let strSortExpress = objExcelExportRegionFldsENEx.sortExpression;
      //if (IsNullOrEmpty(strSortExpress) == true) {//如果没有排序字段，就不用超链接A
      //    const Span1: HTMLSpanElement = document.createElement("span");
      //    span1.nodeValue = objExcelExportRegionFldsENEx.headerText;//i + "" + j;
      //    span1.innerText = objExcelExportRegionFldsENEx.headerText;//i + "" + j;
      //    td.appendChild(span1);
      //}
      //else {
      const a1: HTMLAnchorElement = document.createElement('a');
      a1.nodeValue = objExcelExportRegionFldsENEx.colCaption; //i + "" + j;
      a1.text = objExcelExportRegionFldsENEx.colCaption; //i + "" + j;
      a1.id = Format('a{0}', objExcelExportRegionFldsENEx.mId); // GetCtrlIdExcelExport(objExcelExportRegionFldsENEx);
      //a1.setAttribute("ctrlId", objExcelExportRegionFldsENEx.ctrlName);
      //a1.setAttribute("fldName", strSortExpress);
      a1.setAttribute('mId', objExcelExportRegionFldsENEx.mId.toString());
      a1.setAttribute('keyid', objExcelExportRegionFldsENEx.mId.toString());
      a1.href = 'javascript:';
      (function () {
        a1.onclick = function (this) {
          ExcelExportRegionFldsCRUDEx.ColHeaderClick(this, event);
        };
      })();

      td.appendChild(a1);
      //td.appendChild(document.createTextNode(i + "" + j));
      //td.style.color = "#FF0000";
      //}
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
    // const strTabName = strOutTabName.toString();
    //        let objDT: Array<object>;
    let objDT;
    const intRecNum = 5;
    try {
      //                public static ExcelExportRegionFlds_(strCurrPrjDataBaseId: string, strTabName: string, intRecNum: number, strWhereCond: string, strOrderBy: string): Promise<Array<object>> {
      objDT = await SqlWApi_GetDataTableAsync(
        clsPrivateSessionStorage.currPrjDataBaseId,
        strOutTabName.toString(),
        intRecNum,
        '1=1',
        '',
      );
      //const elements: { [key: string]: string } = objDT;
      //console.log("1objDT:", objDT);
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
      //throw new Error(strMsg);
    }
    if (objDT != null) {
      for (const objRow_In of objDT) {
        //const objEN: object = arrObjLst[i];
        //let strKeyValue = objENGetFldValue(strKey);
        // const arr = GetObjKeys(objRow_In);

        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.className = 'row-height';
        const td: HTMLTableDataCellElement = document.createElement('td');
        //tr.id = `tr${strKeyValue}`;
        const check: HTMLInputElement = document.createElement('input');
        check.type = 'checkbox';
        //check.id = `chk${strKeyValue}`;
        check.name = 'chkInTab';
        check.className = 'CheckInTab';
        //if (IsNullOrEmpty(objEN["ctrlId"]) == false) {
        //    check.setAttribute("ctrlId", objEN["ctrlId"]);
        //}
        td.appendChild(check);
        tr.appendChild(td);
        for (const objExcelExportRegionFldsENEx of arrExcelExportRegionFldsExObjLst) {
          if (IsNullOrEmpty(objExcelExportRegionFldsENEx.fldId) == true) continue;
          if (objExcelExportRegionFldsENEx.fldId == '0') continue;

          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            Is0EqEmpty(objExcelExportRegionFldsENEx.fldId),
            clsPrivateSessionStorage.currSelPrjId,
          );
          const td = document.createElement('td');
          //td.className = arrDataColumn[j].TdClass;
          //console.log("1objExcelExportRegionFldsENEx.fldName:", strFldName);
          //console.log("1objRow_In[objExcelExportRegionFldsENEx.fldName]:", GetObjValueOfKey(objRow_In, strFldName));
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
    const arrExcelExportRegionFldsEx = await ExcelExportRegionFldsEx_GetObjExLstByRegionIdCacheEx(
      strRegionId,
    );
    this.ShowErrMsgInVisualEffects(divContainer, arrExcelExportRegionFldsEx);
  }
  public static async ColHeaderClick(thisColHeader: any, event: any) {
    const thisA = <HTMLAnchorElement>thisColHeader;
    const strId = thisA.getAttribute('mId');
    if (strId == null) {
      alert('关键字为空！(In ColHeaderClick)');
      return;
    }
    // const divList = GetDivObjInDivObj(divLayout, 'divList');
    event = window.event || event;
    let bolIsPressShift = false;
    if (event.shiftKey == 1) {
      bolIsPressShift = true;
      //console.log("shift被按下了, strId:" + strId)
    } else {
      bolIsPressShift = false;
      //console.log("shift没被按下,strId:" + strId)
    }
    //alert(strId);
    // const strCtrlId = thisA.id;
    //console.log("strCtrlId", strCtrlId);
    // const strCtrlId2 = thisA.getAttribute('ctrlId');
    //console.log("strCtrlId2", strCtrlId2);

    const bolExist = ExcelExportRegionFldsCRUDEx.IsSelectedKeyId(strId);
    if (bolIsPressShift === true) {
      if (bolExist == true) {
        // if (divList != null) SetNotCkechedItem4KeyId(divList, strId);
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, strId);

        ExcelExportRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
      } else {
        // if (divList != null) SetCheckedItem4KeyId(divList, strId);

        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, strId);

        ExcelExportRegionFldsCRUDEx.btn_Click('Update', strId);

        ExcelExportRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
      }
    } else {
      if (bolExist == true) {
        NoSelectOneCtrl(thisA);
        NoSelectOneTdByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, strId);

        ExcelExportRegionFldsCRUDEx.RemoveFromSelectedKeyIds(strId);
        // if (divList != null) SetNotCkechedItem4KeyIdObj(divList, strId);
      } else {
        SetAllNotCheckedItems4Visible(ExcelExportRegionFldsCRUDEx.divVisualEffects);
        SelectOneCtrl(thisA);
        SelectOneTdByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, strId);

        ExcelExportRegionFldsCRUDEx.btn_Click('Update', strId);
        ExcelExportRegionFldsCRUDEx.AddToSelectedKeyIds(strId);
        // if (divList != null) {
        //   SetAllNotCkechedItem(divList);

        //   SetCheckedItem4KeyId(divList, strId);
        // }
      }
    }
  }
  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
  public async AddDPV_Detail4ViewRegion(divName4Detail: string) {
    const strUrl = './ViewRegion_Detail_Sim/';
    //console.log("divName4Detail:(In AddDPV_Detail)", divName4Detail);
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
  public SetClass4NotInUse(
    divContainer: HTMLDivElement,
    arrExcelExportRegionFldsEx: Array<clsExcelExportRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');
    //console.log("1objLst", objLst);
    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objExcelExportRegionFld = arrExcelExportRegionFldsEx.find(
        (x) => x.mId.toString() == strId,
      );
      if (objExcelExportRegionFld != null) {
        if (objExcelExportRegionFld.inUse == false) {
          x.className = 'text-muted bg-info';
        } else if (IsNullOrEmpty(objExcelExportRegionFld.trClass) == false) {
          x.className = objExcelExportRegionFld.trClass;
        }
      }
    });
  }

  /** 显示ExcelExportRegionFlds对象的所有属性值
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
       <param name = "divContainer">显示容器</param>
       <param name = "arrExcelExportRegionFldsExObjLst">需要绑定的对象列表</param>
     */
  public async BindTab_ExcelExportRegionFlds4Func(
    divContainer: HTMLDivElement,
    arrExcelExportRegionFldsExObjLst: Array<clsExcelExportRegionFldsENEx>,
  ) {
    const strThisFuncName = this.BindTab_ExcelExportRegionFlds4Func.name;
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
        fldName: clsExcelExportRegionFldsEN.con_SeqNum,
        sortBy: clsExcelExportRegionFldsEN.con_SeqNum,
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
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const objExcelExportRegionFlds = await ExcelExportRegionFldsEx_GetObjExBymIdCache(
            lngMid,
            RegionId_Static.value,
          );
          if (objExcelExportRegionFlds == null) {
            const div1 = document.createElement('div');
            return div1;
          } else {
            let strDnPathId = objExcelExportRegionFlds.dnPathId;
            if (IsNullOrEmpty(strDnPathId) == true)
              strDnPathId = objExcelExportRegionFlds.dnPathIdEx;
            if (IsNullOrEmpty(strDnPathId) == true) {
              const div2 = document.createElement('div');
              div2.innerHTML = objExcelExportRegionFlds.tabName;
              return div2;
            } else {
              const divPath = await DnPathEx_CreateGraph4DnPathCache(strDnPathId);
              strKey = strText;
              return divPath;
            }
          }
        },
      },
    ];

    try {
      await this.ExtendFldFuncMap(arrExcelExportRegionFldsExObjLst, arrDataColumn);
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

    await BindTab(divDataLst, arrExcelExportRegionFldsExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
    //this.SetClass4NotInUse(strListDiv, arrvExcelExportRegionFldsEx);
  }

  public async ExtendFldFuncMap(
    arrExcelExportRegionFldsExObjLst: Array<clsExcelExportRegionFldsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsExcelExportRegionFldsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrExcelExportRegionFldsExObjLst) {
        try {
          await ExcelExportRegionFldsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
      await ExcelExportRegionFldsEx_ImportRelaFlds(
        RegionId_Static.value,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
      await this.VisualEffects(ExcelExportRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      const arrKeyId = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
      SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, arrKeyId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `导入相关字段不成功. ${e}.`;
      alert(strMsg);
    }
  }
  //public async BindDdl4QueryRegion() {
  //    // 在此处放置用户代码以初始化页面
  //    let strCmPrjId = ExcelExportRegionFldsCRUDEx.CmPrjIdCache;  //定义条件字段
  //    const ddlOutDataNodeId_q = await this.SetDdl_OutDataNodeId(strCmPrjId);//查询区域
  //}
  public async SynchCheckedPos4Gv() {
    // const strListDiv = divDataList;
    const strKeyIds = ExcelExportRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
    if (strKeyIds.length == 0) {
      console.error('请选择需要同步选择的记录！');
      return;
    }
    SelectManyCtrlByKeyId(ExcelExportRegionFldsCRUDEx.divVisualEffects, strKeyIds);
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
      if (ExcelExportRegionFldsCRUDEx.bolIsGeneCodeRegion == true) return;
      await this.ShowCodeTypeButton(ExcelExportRegionFldsCRUDEx.strViewId4Region);
      ExcelExportRegionFldsCRUDEx.bolIsGeneCodeRegion = true;
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
      (x) => x.codeTypeName.indexOf('界面') > -1,
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
  public get qsViewId() {
    const strName = 'viewId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }

  public async AttachTooltip(table: HTMLTableElement, strRegionId: string) {
    const arrTd0 = table.getElementsByTagName('td');
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
      const objExcelExportRegionFld = await ExcelExportRegionFlds_GetObjBymIdCache(
        Number(strKeyId),
        strRegionId,
      );
      if (objExcelExportRegionFld == null) continue;
      const objExcelExportRegionFldEx = ExcelExportRegionFldsEx_CopyToEx(objExcelExportRegionFld);
      await ExcelExportRegionFldsEx_FuncMapByFldName(
        clsExcelExportRegionFldsENEx.con_FldNameV2,
        objExcelExportRegionFldEx,
      );
      //await ExcelExportRegionFldsEx_FuncMapByFldName(clsExcelExportRegionFldsENEx.con_DataPropertyName, objExcelExportRegionFldEx);

      //const strData_Toggle = objChild_Html.getAttribute("data-toggle");
      //if (IsNullOrEmpty(strData_Toggle) == true)
      objChild_Html?.setAttribute('data-toggle', 'tooltip');
      objChild_Html?.setAttribute('data-placement', 'top');
      objChild_Html?.setAttribute('data-html', 'true');
      const strMsg = Format(
        '字段名:{0}<br/>数据属性:{1}',
        objExcelExportRegionFldEx.fldNameV2,
        objExcelExportRegionFldEx.dataPropertyName,
      );
      objChild_Html?.setAttribute('title', strMsg);

      //console.error(objChild.nodeName, objChild.nodeType, strMsg);
    }
  }
  public ShowErrMsg(
    divContainer: HTMLDivElement,
    arrExcelExportRegionFldsEx: Array<clsExcelExportRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objExcelExportRegionFlds = arrExcelExportRegionFldsEx.find(
        (x) => x.mId.toString() == strId,
      );
      if (objExcelExportRegionFlds != null) {
        if (objExcelExportRegionFlds.errMsg != null && objExcelExportRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objExcelExportRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objExcelExportRegionFlds.trClass) == false) {
          x.className = objExcelExportRegionFlds.trClass;
        }
      }
    });
  }
  public ShowErrMsgInVisualEffects(
    divContainer: HTMLDivElement,
    arrExcelExportRegionFldsEx: Array<clsExcelExportRegionFldsENEx>,
  ) {
    const objLst = divContainer.getElementsByTagName('td');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>GetArray(objLst);
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objExcelExportRegionFlds = arrExcelExportRegionFldsEx.find(
        (x) => x.mId.toString() == strId,
      );
      if (objExcelExportRegionFlds != null) {
        if (objExcelExportRegionFlds.errMsg != null && objExcelExportRegionFlds.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objExcelExportRegionFlds.errMsg;
        } else if (IsNullOrEmpty(objExcelExportRegionFlds.tdClass) == false) {
          x.className = objExcelExportRegionFlds.tdClass;
        }
      }
    });
  }
  public static GetSelectedKeyIdLst(divList: HTMLDivElement): Array<string> {
    if (ExcelExportRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divList);
      return arrKeyIds;
    } else {
      const strSelectedKeyIds = ExcelExportRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select', 'a'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        ExcelExportRegionFldsCRUDEx.divVisualEffects,
        arrControlType,
        'keyid',
      );
      // console.error('arrKeyValue', arrKeyValue);
      return arrmId.filter((x) => arrKeyValue.indexOf(x) > -1);
    }
  }
  public static AddToSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = ExcelExportRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    arrmId.push(strKeyId);
    const strSelectedKeyIds_2 = arrmId.join(',');
    ExcelExportRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  public static RemoveFromSelectedKeyIds(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId)) return;
    const strSelectedKeyIds = ExcelExportRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const arrmId_2 = arrmId.filter((x) => x != strKeyId);
    const strSelectedKeyIds_2 = arrmId_2.join(',');
    ExcelExportRegionFldsCRUDEx.SelectedKeyIds = strSelectedKeyIds_2;
  }
  /**
   * 是否选择某关键字的控件
   * @param strKeyId
   * @returns
   */
  public static IsSelectedKeyId(strKeyId: string): boolean {
    const strSelectedKeyIds = ExcelExportRegionFldsCRUDEx.SelectedKeyIds;
    const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
    const bolExist: boolean = arrmId.indexOf(strKeyId) > -1 ? true : false;
    return bolExist;
  }
  public static GetFirstSelectedKeyId(divList: HTMLDivElement): string {
    if (ExcelExportRegionFldsCRUDEx.ActiveTabName == enumActiveTabName.DataList_02) {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divList);
      return strKeyId;
    } else {
      const strSelectedKeyIds = ExcelExportRegionFldsCRUDEx.SelectedKeyIds;
      const arrmId = strSelectedKeyIds.split(',').filter((x) => x != '');
      const arrControlType = ['span', 'input', 'select'];
      const arrKeyValue = GetAllElementPropValueInDivObj(
        ExcelExportRegionFldsCRUDEx.divVisualEffects,
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
