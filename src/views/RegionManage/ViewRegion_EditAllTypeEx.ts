import $ from 'jquery';
import ViewRegion_EditEx from './ViewRegion_EditEx';
import { ViewRegionCRUD } from '@/viewsBase/RegionManage/ViewRegionCRUD';
import { clsTreeView_FuncModule_Agc_PrjTabRegionName } from '@/ts/FunClass/clsTreeView_FuncModule_Agc_PrjTab_RegionName';
import { enumApplicationType } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { RegionType_BindDdl_RegionTypeIdInDivCache } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';

import {
  ViewInfoEx_BindDdl_ApplicationTypeIdExCache,
  ViewInfoEx_GetDefaApplicationTypeIdExCache,
} from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { divVarSet, viewVarSet } from '@/views/RegionManage/ViewRegionVueShare';

/** ViewRegionCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ViewRegion_EditAllTypeEx extends ViewRegionCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvViewRegionBy=  "regionId";
  public divName4Query = 'divQuery'; //编辑区的Id
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vViewRegion]！');
    //this.BindGv_vViewRegion();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vViewRegion':
        this.BindGv_ViewRegion4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: ViewRegion_EditAllTypeEx = new ViewRegion_EditAllTypeEx();
    const objPageEdit: ViewRegion_EditEx = new ViewRegion_EditEx('ViewRegion_EditEx', objPage);
    let strMsg = '';
    let arrKeyIds;
    switch (strCommandName) {
      case 'EditRegion': //查询记录
        objPage.EditRegion(strKeyId, clsPrivateSessionStorage.currSelPrjId);
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
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        // objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewRegionCRUDEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
  public async btnQuery_Click() {
    try {
      this.BindTr();
    } catch (e: any) {
      const strMsg = `绑定树不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
*/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //ViewRegionCRUD.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      try {
        this.applicationTypeId_q = await ViewInfoEx_GetDefaApplicationTypeIdExCache();
      } catch (e) {}
      viewVarSet.sortViewRegionBy = 'regionId Asc';
      //2、显示无条件的表内容在GridView中
      this.BindTr();
      //await this.BindGv_vViewRegionCache();
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async EditRegion(strRegionId: string, strPrjId: string) {
    const viewRegionStore = useviewRegionStore();
    //string strHtml = Format("~/Webform/PrjFunction/wfmFeatureFuncRelaB_QUDI.aspx?featureId={0}&ParentPage=../View/wfmViewFeatureRelaB_InMasterPage.aspx",
    //    strFeatureId);
    //Response.Redirect(strHtml);
    const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
    if (objProject == null) {
      const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strPrjId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const iRegionEdit: HTMLIFrameElement = <HTMLIFrameElement>(
      document.getElementById('iRegionEdit')
    );
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
    switch (objViewRegion.regionTypeId) {
      case enumRegionType.EditRegion_0003:
        iRegionEdit.src = Format(
          'EditRegionFlds_EdInTR?regionId={0}&Op=ViewRegionEdit',
          strRegionId,
        );
        break;
      case enumRegionType.QueryRegion_0001:
        iRegionEdit.src = Format(
          'QryRegionFlds_EdInTR?regionId={0}&Op=ViewRegionEdit',
          strRegionId,
        );
        break;
      case enumRegionType.DetailRegion_0006:
        iRegionEdit.src = Format(
          'DetailRegionFlds_EdInTR?regionId={0}&Op=ViewRegionEdit',
          strRegionId,
        );
        break;
      case enumRegionType.FeatureRegion_0008:
        iRegionEdit.src = Format(
          'FeatureRegionFlds_EdInTR?regionId={0}&Op=ViewRegionEdit',
          strRegionId,
        );
        break;
      case enumRegionType.ExcelExportRegion_0007:
        iRegionEdit.src = Format(
          'ExcelExportRegionFlds_EdInTR?regionId={0}&Op=ViewRegionEdit',
          strRegionId,
        );
        break;
      case enumRegionType.ListRegion_0002:
        iRegionEdit.src = Format('DGRegionFlds_EdInTR?regionId={0}&Op=ViewRegionEdit', strRegionId);
        break;
    }
    //   btnGetCurrNodeRelaValue_Click(null, null);
    //throw new NotImplementedException();
  }

  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    await this.SetDdl_ApplicationTypeIdEx(); //查询区域
    await this.SetDdl_RegionTypeIdInDiv();
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[funcModuleAgcId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_ApplicationTypeIdEx() {
    //const objFuncModule_Agc_Cond: clsApplicationTypeEN = new clsApplicationTypeEN();//查询区域
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await ViewInfoEx_BindDdl_ApplicationTypeIdExCache('ddlApplicationTypeId'); //查询区域
  }

  public async BindTr() {
    clsTreeView_FuncModule_Agc_PrjTabRegionName.prjId = clsPrivateSessionStorage.currSelPrjId;
    if (this.applicationTypeId_q == 0) {
      clsTreeView_FuncModule_Agc_PrjTabRegionName.applicationTypeId = enumApplicationType.WebApp_2;
    } else {
      clsTreeView_FuncModule_Agc_PrjTabRegionName.applicationTypeId = Number(
        this.applicationTypeId_q,
      ); // enumApplicationType.WebApp_2;
    }
    clsTreeView_FuncModule_Agc_PrjTabRegionName.regionTypeId = this.regionTypeId_q;
    console.log(
      'applicationTypeId:',
      clsTreeView_FuncModule_Agc_PrjTabRegionName.applicationTypeId,
    );
    console.log('regionTypeId:', clsTreeView_FuncModule_Agc_PrjTabRegionName.regionTypeId);
    clsTreeView_FuncModule_Agc_PrjTabRegionName.BindTr(this.SetOnClick);
  }
  public async SetOnClick(li1: HTMLLIElement, strKeyId: string) {
    li1.setAttribute('onclick', `btn_Click('EditRegion', '${strKeyId}');`);
    //return btn1;
  }

  /*
   * 应用程序类型ID (Used In CombineCondition())
   */
  public get applicationTypeId_q(): number {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlApplicationTypeId');
    if (strValue == undefined) return 0;
    else if (strValue == '0') return 0;
    else return Number(strValue);
  }
  /*
   * 应用程序类型ID (Used In CombineCondition())
   */
  public set applicationTypeId_q(value: number) {
    $('#ddlApplicationTypeId').val(value);
  }
  public async SetDdl_RegionTypeIdInDiv() {
    await RegionType_BindDdl_RegionTypeIdInDivCache(divVarSet.refDivQuery, 'ddlRegionTypeId_q'); //
  }
  /**
   * 区域类型Id (Used In CombineCondition())
   **/
  public get regionTypeId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlRegionTypeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 区域类型Id (Used In CombineCondition())
   **/
  public set regionTypeId_q(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivQuery, 'ddlRegionTypeId_q', value);
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'referNum|Ex':
        viewVarSet.sortViewRegionBy = `vViewRegionReferNum|referNum ${sortDirection}|ViewRegion.RegionId = vViewRegionReferNum.RegionId`;
        break;
      case 'regionTypeSimName|Ex':
        viewVarSet.sortViewRegionBy = `RegionType|regionTypeSimName ${sortDirection}|ViewRegion.RegionTypeId = RegionType.RegionTypeId`;
        break;
      case 'containerTypeName|Ex':
        viewVarSet.sortViewRegionBy = `GCContainerType|containerTypeName ${sortDirection}|ViewRegion.ContainerTypeId = GCContainerType.ContainerTypeId`;
        break;
      case 'pageDispModeName|Ex':
        viewVarSet.sortViewRegionBy = `PageDispMode|pageDispModeName ${sortDirection}|ViewRegion.PageDispModeId = PageDispMode.PageDispModeId`;
        break;
      case 'inOutTypeName|Ex':
        viewVarSet.sortViewRegionBy = `InOutType|inOutTypeName ${sortDirection}|ViewRegion.InOutTypeId = InOutType.InOutTypeId`;
        break;
      case 'tabName|Ex':
        viewVarSet.sortViewRegionBy = `vPrjTab_Sim|tabName ${sortDirection}|ViewRegion.TabId = vPrjTab_Sim.TabId`;
        break;
      default:
        viewVarSet.sortViewRegionBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ViewRegion4Func(this.listPara.listDiv);
  }
}
