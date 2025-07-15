//import $ from "jquery";
import ViewInfo_EditEx from './ViewInfo_EditEx';
import { ViewInfoCRUD } from '@/viewsBase/PrjInterface/ViewInfoCRUD';
import { clsPubFun4Visible } from '@/ts/FunClass/clsPubFun4Visible';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { stuViewInfo4Session } from '@/ts/FunClass/stuViewInfo4Session';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import {
  ApplicationType_BindDdl_ApplicationTypeIdByIsVisibleInDivCache,
  ApplicationType_GetObjByApplicationTypeIdCache,
} from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import {
  ViewInfo_AddNewRecordAsync,
  ViewInfo_GetMaxStrIdByPrefixAsync,
  ViewInfo_GetObjLstByViewIdLstAsync,
  ViewInfo_UpdateRecordAsync,
} from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { FuncModule_Agc_GetObjByFuncModuleAgcIdCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { DetailRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsDetailRegionFldsWApi';
import { DGRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsDGRegionFldsWApi';
import { EditRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsEditRegionFldsWApi';
import { ExcelExportRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsExcelExportRegionFldsWApi';
import { FeatureRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { QryRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';
import { ViewFeatureFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsViewFeatureFldsWApi';
import {
  ViewRegionRela_GetObjLstAsync,
  ViewRegionRela_ReFreshThisCache,
  ViewRegionRela_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionRelaWApi';
import {
  CMProjectEx_BindDdl_CmPrjIdInDivCache,
  CMProjectEx_GetObjLstByPrjIdCache,
} from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import {
  ViewInfoEx_CheckRegionFlds,
  ViewInfoEx_DelRecordEx,
  ViewInfoEx_FuncMapByFldName,
  ViewInfoEx_SetCmPrjId,
} from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import { ViewTypeCodeTabEx_GetObjLstByApplicationTypeIdCache } from '@/ts/L3ForWApiEx/PrjInterface/clsViewTypeCodeTabExWApi';
import { FeatureRegionFldsEx_GetObjLstByRegionIdCache4InUseEx } from '@/ts/L3ForWApiEx/RegionManage/clsFeatureRegionFldsExWApi';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import {
  CheckControlExistInDivObj,
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, ObjectAssign, Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubFun } from '@/ts/PubConfig/clsPubFun';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { ViewRegionRelaEx_GetRegionIdLstByViewIdLstCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { FuncModule_AgcEx_BindDdl_FuncModuleAgcIdForViewInfoInDivCacheEx } from '@/ts/L3ForWApiEx/PrjManage/clsFuncModule_AgcExWApi';
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import {
  ApplicationTypeId_Static,
  divVarSet,
  qryVarSet,
  UserId_Local,
  viewVarSet,
} from '@/views/PrjInterface/ViewInfoVueShare';

/** ViewInfoCRUDEx0 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ViewInfoCRUDExBak20230626 extends ViewInfoCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvViewInfoBy=  "viewId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 20;
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
    //alert('该类没有绑定该函数：[this.BindGv_vViewInfo]！');
    //this.BindGv_vViewInfo();

    switch (strType) {
      case 'vViewInfo':
      case 'ViewInfo':
        this.BindGv_ViewInfo4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vViewInfo':
      case 'ViewInfo':
        this.BindGv_ViewInfo4Func(divVarSet.refDivList);
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
    let objPage: ViewInfoCRUDExBak20230626;
    if (ViewInfoCRUD.objPageCRUD == null) {
      ViewInfoCRUD.objPageCRUD = new ViewInfoCRUDExBak20230626();
      objPage = <ViewInfoCRUDExBak20230626>ViewInfoCRUD.objPageCRUD;
    } else {
      objPage = <ViewInfoCRUDExBak20230626>ViewInfoCRUD.objPageCRUD;
    }
    const objPageEdit: ViewInfo_EditEx = new ViewInfo_EditEx('ViewInfo_EditEx', objPage);

    let arrKeyIds;
    switch (strCommandName) {
      case 'CheckRegionFlds': //查询记录
        objPage.btnCheckRegionFlds_Click();
        break;
      case 'SetCmPrjId': //查询记录
        objPage.btnSetCmPrjId_Click();
        break;
      case 'SetApplicationTypeId': //查询记录
        objPage.btnSetApplicationTypeId_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        //objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
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
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
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
        AccessBtnClickDefault(strCommandName, 'ViewInfoCRUDExBak.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      UserId_Local.value = clsPubLocalStorage.userId;

      let strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      if (IsNullOrEmpty(strCmPrjId) == true) {
        const arrCMProject = await CMProjectEx_GetObjLstByPrjIdCache(
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (arrCMProject.length == 0) {
          const strMsg = Format(
            '工程:{0}没有相关的CM工程！',
            clsPrivateSessionStorage.currSelPrjName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strCmPrjId = arrCMProject[0].cmPrjId;

        ApplicationTypeId_Static.value = arrCMProject[0].applicationTypeId;
      } else {
        const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
        if (objCMProject == null) {
          const strMsg = Format('CM项目Id:[{0}]，没有相应的CM项目，请检查！', strCmPrjId);
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        ApplicationTypeId_Static.value = objCMProject.applicationTypeId;
      }

      clsPubFun.SetCommFun4BL();
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      await ApplicationType_BindDdl_ApplicationTypeIdByIsVisibleInDivCache(
        divVarSet.refDivFunction,
        'ddlApplicationTypeId_SetFldValue',
      ); //
      const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
      await CMProjectEx_BindDdl_CmPrjIdInDivCache(
        divVarSet.refDivFunction,
        'ddlCmPrjId_SetFldValue',
        strPrjId,
      ); //

      viewVarSet.sortViewInfoBy = Format('{0} Desc', clsViewInfoEN.con_UpdDate);
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // const strThisFuncName = this.BindDdl4QueryRegion.name;
    // 在此处放置用户代码以初始化页面
    const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId; //定义条件字段
    // await this.SetDdl_ApplicationTypeIdInDiv(); //查询区域
    await this.SetDdl_FuncModuleAgcIdInDiv(strPrjId); //查询区域
    await this.SetDdl_MainTabIdInDivV2(strCmPrjId); //查询区域
    if (IsNullOrEmpty(clsPrivateSessionStorage.viewInfo_MainTabId) == false) {
      try {
        qryVarSet.mainTabId_q = clsPrivateSessionStorage.viewInfo_MainTabId;
      } catch (e) {}
    }
  }
  /**
   * 设置绑定下拉框，针对字段:[mainTabId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_MainTabIdInDivV2(strCmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivQuery,
      'ddlMainTabId_q',
      strCmPrjId,
    ); //
  }
  /** 显示vViewInfo对象的所有属性值
<param name = "divContainer">显示容器</param>
<param name = "arrViewInfoObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_ViewInfo4Func(
    divContainer: HTMLDivElement,
    arrViewInfoExObjLst: Array<clsViewInfoENEx>,
  ) {
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'applicationTypeSimName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '应用类型',
        text: '',
        sortBy: 'applicationTypeSimName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '界面名',
        text: '',
        sortBy: 'viewName',
        tdClass: 'text-left',
        columnType: 'LinkButton',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLAnchorElement = document.createElement('a');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnSelectViewIdInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },

      {
        fldName: clsViewInfoENEx.con_ViewCnNameEx,
        sortBy: clsViewInfoENEx.con_ViewCnNameEx,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '中文名',
        text: '',

        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewTypeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '界面类型',
        text: '',
        sortBy: 'viewTypeName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'funcModuleName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '模块',
        text: '',
        sortBy: 'funcModuleName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'mainTabName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '主表',
        text: '',
        sortBy: 'mainTabName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },

      {
        fldName: 'updDate',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        sortBy: 'updDate',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewTypeCode',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '类型码',
        text: '',
        sortBy: 'viewTypeCode',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'geneCodeDate',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '生成日期',
        text: '',
        sortBy: 'geneCodeDate',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsViewInfoENEx.con_RegionNum,
        sortBy: clsViewInfoENEx.con_RegionNum,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '区域数',
        text: '',

        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '界面ID',
        text: '',
        sortBy: 'viewId',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '修改',
        text: '修改',
        tdClass: 'text-left',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnUpdateRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '删除',
        text: '删除',
        tdClass: 'text-left',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnDelRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '选择',
        text: '选择',
        tdClass: 'text-left',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnSelectRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    await this.ExtendFldFuncMap(arrViewInfoExObjLst, arrDataColumn);
    await BindTab(divDataLst, arrViewInfoExObjLst, arrDataColumn, 'viewId', this);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public ShowErrMsg(divContainer: HTMLDivElement, arrViewInfoEx: Array<clsViewInfoENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>(
      clsPubFun4Visible.GetArray(objLst)
    );
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objViewInfo = arrViewInfoEx.find((x) => x.viewId.toString() == strId);
      if (objViewInfo != null) {
        if (objViewInfo.errMsg != null && objViewInfo.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objViewInfo.errMsg;
        } else if (IsNullOrEmpty(objViewInfo.trClass) == false) {
          x.className = objViewInfo.trClass;
        }
      }
    });
  }

  public async ExtendFldFuncMap(
    arrViewInfoExObjLst: Array<clsViewInfoENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsViewInfoEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrViewInfoExObjLst) {
        await ViewInfoEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 
在数据表里选择记录
*/
  public async btnSelectViewIdInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert('请选择需要维护界面信息的记录！');
        return '';
      }
      this.SelectViewId(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `选择记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /** 
根据关键字选择相应的记录    
<param name = "sender">参数列表</param>
*/
  public async SelectViewId(strViewId: string) {
    const strCurrSelPrjId = clsPrivateSessionStorage.currSelPrjId;
    console.log(strViewId);
    const viewInfoStore = useviewInfoStore();
    try {
      const objvViewInfoEN = await viewInfoStore.getObj(strViewId);
      if (objvViewInfoEN == null) {
        const strMsg = Format('界面Id:[{0}]，没有相应的界面，请检查！', strViewId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(
        objvViewInfoEN.applicationTypeId,
      );
      if (objApplicationType == null) {
        const strMsg = Format(
          '应用Id:[{0}]，没有相应的类型，请检查！',
          objvViewInfoEN.applicationTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objFuncModule_Agc = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
        objvViewInfoEN.funcModuleAgcId,
        strCurrSelPrjId,
      );
      if (objFuncModule_Agc == null) {
        const strMsg = Format(
          '模块Id:[{0}]，没有相应的模块，请检查！',
          objvViewInfoEN.funcModuleAgcId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objCurrProjects = await Projects_GetObjByPrjIdCache(strCurrSelPrjId);

      if (objCurrProjects == null) {
        const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strCurrSelPrjId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      const objViewInfo4Session: stuViewInfo4Session = {
        //viewId: objvViewInfoEN.viewId,
        //viewName: objvViewInfoEN.viewName,
        funcModuleNameSim: objFuncModule_Agc.funcModuleNameSim,
        funcModuleEnName: objFuncModule_Agc.funcModuleEnName,
        applicationTypeId: objvViewInfoEN.applicationTypeId,
        applicationTypeName: objApplicationType.applicationTypeSimName,
        currSelPrjId: clsPrivateSessionStorage.currSelPrjId,
        currSelPrjName: objCurrProjects.prjName,
        keyId4Test: objvViewInfoEN.keyId4Test,
        mainTabId: objvViewInfoEN.mainTabId,
        outTabId: objvViewInfoEN.outRelaTabId,
        cmPrjId: clsPrivateSessionStorage.cmPrjId,
      };
      clsPrivateSessionStorage.viewId_Main = objvViewInfoEN.viewId;
      clsPrivateSessionStorage.viewName = objvViewInfoEN.viewName;
      clsPrivateSessionStorage.funcModuleNameSim = objFuncModule_Agc.funcModuleNameSim;
      clsPrivateSessionStorage.funcModuleEnName = objFuncModule_Agc.funcModuleEnName;

      clsPrivateSessionStorage.applicationTypeId = objViewInfo4Session.applicationTypeId.toString();
      clsPubSessionStorage.applicationTypeName = objViewInfo4Session.applicationTypeName.toString();

      const strJson = JSON.stringify(objViewInfo4Session);

      this.SetSessionAsync('objViewInfo4Session', strJson);
      //this.GetDataFromUserPrjGrantClass(objUserPrjGrantEN);

      //alert("完成SelectViewId!");
      clsPrivateSessionStorage.viewId_Main = objvViewInfoEN.viewId;
      Redirect('/PrjInterface/ViewInfo_AllProp');
    } catch (e: any) {
      console.error(e);
      const strMsg = `选择界面:[${strViewId}]不成功,${e}.`;
      alert(strMsg);
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombineViewInfoConditionObj(): Promise<clsViewInfoEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    // let strWhereCond = `${clsViewInfoEN.con_PrjId} = '${clsPrivateSessionStorage.currSelPrjId}'`;

    const objViewInfo_Cond: clsViewInfoEN = new clsViewInfoEN();
    objViewInfo_Cond.SetCondFldValue(
      clsViewInfoEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
      '=',
    );
    //if (IsNullOrEmpty(clsPrivateSessionStorage.cmPrjId) == false) {
    //    objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_PrjId, clsPrivateSessionStorage.currSelPrjId, "=");
    //}
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.dispProbableErrView_q == true) {
        // strWhereCond += Format(' And (Len({0}) = 0 or {0} is null)', clsViewInfoEN.con_ErrMsg);
        objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_ErrMsg, '0', 'length greater');
      }
      if (qryVarSet.viewId_q != '') {
        // strWhereCond += ` And ${clsViewInfoEN.con_ViewId} like '% ${this.viewId_q}%'`;
        objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_ViewId, qryVarSet.viewId_q, 'like');
      }
      if (qryVarSet.viewName_q != '') {
        // strWhereCond += ` And ${clsViewInfoEN.con_ViewName} like '% ${this.viewName_q}%'`;
        objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_ViewName, qryVarSet.viewName_q, 'like');
      }
      if (qryVarSet.applicationTypeId_q != 0) {
        // strWhereCond += ` And ${clsViewInfoEN.con_ApplicationTypeId} = ${this.applicationTypeId_q}`;
        objViewInfo_Cond.SetCondFldValue(
          clsViewInfoEN.con_ApplicationTypeId,
          qryVarSet.applicationTypeId_q,
          '=',
        );
      }
      if (qryVarSet.funcModuleAgcId_q != '' && qryVarSet.funcModuleAgcId_q != '0') {
        // strWhereCond += ` And ${clsViewInfoEN.con_FuncModuleAgcId} = '${this.funcModuleAgcId_q}'`;
        objViewInfo_Cond.SetCondFldValue(
          clsViewInfoEN.con_FuncModuleAgcId,
          qryVarSet.funcModuleAgcId_q,
          '=',
        );
      }
      if (qryVarSet.mainTabId_q != '' && qryVarSet.mainTabId_q != '0') {
        // strWhereCond += ` And ${clsViewInfoEN.con_MainTabId} = '${this.mainTabId_q}'`;
        objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_MainTabId, qryVarSet.mainTabId_q, '=');
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineViewInfoConditionObj)时出错!请联系管理员!${objException.message}`;
      throw strMsg;
    }

    return objViewInfo_Cond;
  }

  /** 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public CombinevViewInfoCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'

    let strWhereCond = `${clsViewInfoEN.con_PrjId} = '${clsPrivateSessionStorage.currSelPrjId}'`;
    if (this.showCurrCmPrjId_q == true) {
      strWhereCond += Format(
        " And {4}.{0} in (select {1}.{0} from {1} where {1}.{2}='{3}')",
        clsViewInfoCmPrjIdRelaEN.con_ViewId,
        clsViewInfoCmPrjIdRelaEN._CurrTabName,
        clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
        clsPrivateSessionStorage.cmPrjId,
        clsViewInfoEN._CurrTabName,
      );
    }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.dispProbableErrView_q == true) {
        strWhereCond += Format(' And (Len({0}) = 0 or {0} is null)', clsViewInfoEN.con_ErrMsg);
      }

      if (qryVarSet.viewId_q != '') {
        strWhereCond += ` And ${clsViewInfoEN.con_ViewId} like '% ${qryVarSet.viewId_q}%'`;
      }
      if (qryVarSet.viewName_q != '') {
        strWhereCond += ` And ${clsViewInfoEN.con_ViewName} like '% ${qryVarSet.viewName_q}%'`;
      }
      if (qryVarSet.applicationTypeId_q != 0) {
        strWhereCond += ` And ${clsViewInfoEN.con_ApplicationTypeId} = ${qryVarSet.applicationTypeId_q}`;
      }
      if (qryVarSet.funcModuleAgcId_q != '' && qryVarSet.funcModuleAgcId_q != '0') {
        strWhereCond += ` And ${clsViewInfoEN.con_FuncModuleAgcId} = '${qryVarSet.funcModuleAgcId_q}'`;
      }
      if (qryVarSet.mainTabId_q != '' && qryVarSet.mainTabId_q != '0') {
        strWhereCond += ` And ${clsViewInfoEN.con_MainTabId} = '${qryVarSet.mainTabId_q}'`;
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewInfoCondition)时出错!请联系管理员!${objException.message}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    const strUrl_Session_SetString = '';
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data: any) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(strKey + strValue);
        },
      });
    });
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    // const strThisFuncName = this.btnQuery_Click.name;
    //if (IsNullOrEmpty(this.mainTabId_q) == false) {
    clsPrivateSessionStorage.viewInfo_MainTabId = qryVarSet.mainTabId_q;
    //}
    this.SetCurrPageIndex(1);
    await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
  }

  /** 设置字段值-ApplicationTypeId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetApplicationTypeId(arrViewId: Array<string>, intApplicationTypeId: number) {
    const strThisFuncName = this.SetApplicationTypeId.name;
    const viewInfoStore = useviewInfoStore();
    if (intApplicationTypeId == null || intApplicationTypeId == 0) {
      const strMsg = '请输入应用程序类型ID(ApplicationTypeId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrViewId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    const arrViewTypeCodeTab = await ViewTypeCodeTabEx_GetObjLstByApplicationTypeIdCache(
      intApplicationTypeId,
    );
    if (arrViewTypeCodeTab.length == 0) {
      const strMsg = '目标应用没有相关界面代码，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    // const strNewviewTypeCode = arrViewTypeCodeTab[0].viewTypeCode;
    try {
      const arrViewInfoObjLst = await ViewInfo_GetObjLstByViewIdLstAsync(arrViewId);
      let intCount = 0;
      for (const objInFor of arrViewInfoObjLst) {
        const objViewInfoEN = new clsViewInfoEN();
        ObjectAssign(objViewInfoEN, objInFor);
        objViewInfoEN.SetViewId(objViewInfoEN.viewId);
        objViewInfoEN.SetApplicationTypeId(intApplicationTypeId);
        objViewInfoEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId);
        let returnBool = false;
        try {
          objViewInfoEN.sfUpdFldSetStr = objViewInfoEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await ViewInfo_UpdateRecordAsync(objViewInfoEN);
          viewInfoStore.delObj(objViewInfoEN.viewId);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          // const strInfo = Format('设置记录成功!');
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        // viewInfoStore.delObj(clsPrivateSessionStorage.cmPrjId);
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrViewId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    const viewInfoStore = useviewInfoStore();
    try {
      let intCount = 0;
      for (const strViewId of arrViewId) {
        const returnBool = await ViewInfoEx_DelRecordEx(strViewId);
        if (returnBool == true) {
          viewInfoStore.delObj(strViewId);
          intCount++;
        } else {
          const strInfo = Format('删除记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strMsg = Format('共删除了:[{0}]条记录', intCount);
      console.log(strMsg);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-CmPrjId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetCmPrjIdBak(arrViewId: Array<string>, strPrjId: string) {
    const strThisFuncName = this.SetCmPrjId.name;
    if (strPrjId == null || strPrjId == '') {
      const strMsg = '请输入工程Id(strPrjId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrViewId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrViewInfoObjLst = await ViewInfo_GetObjLstByViewIdLstAsync(arrViewId);
      let intCount = 0;
      for (const objInFor of arrViewInfoObjLst) {
        const objViewInfoEN = new clsViewInfoEN();
        ObjectAssign(objViewInfoEN, objInFor);
        objViewInfoEN.SetPrjId(strPrjId);
        let returnBool = false;
        try {
          objViewInfoEN.sfUpdFldSetStr = objViewInfoEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await ViewInfo_UpdateRecordAsync(objViewInfoEN);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }

        if (returnBool == false) {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
          return;
        }

        // const strInfo = Format('设置记录成功!');
        intCount++;
        const strWhere = `ViewId='${objViewInfoEN.viewId}'`;
        const arrViewRegionRela = await ViewRegionRela_GetObjLstAsync(strWhere);
        for (const objViewRegionRela of arrViewRegionRela) {
          const objViewRegionRelaEN = new clsViewRegionRelaEN();
          ObjectAssign(objViewRegionRelaEN, objViewRegionRela);
          objViewRegionRelaEN.SetPrjId(strPrjId);
          //let returnBool = false;
          try {
            objViewRegionRelaEN.sfUpdFldSetStr = objViewRegionRelaEN.updFldString; //设置哪些字段被修改(脏字段)
            returnBool = await ViewRegionRela_UpdateRecordAsync(objViewRegionRelaEN);
          } catch (e) {
            const strMsg = Format(
              '设置记录不成功,{0}.(in {1}.{2})',
              e,
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            throw strMsg;
          }
        }
        ViewRegionRela_ReFreshThisCache(strPrjId);
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async SetCmPrjIdBak2(arrViewId: Array<string>, strCmPrjId: string) {
    const strThisFuncName = this.SetCmPrjId.name;
    if (strCmPrjId == null || strCmPrjId == '') {
      const strMsg = '请输入CM工程Id(CmPrjId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrViewId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      //const arrViewInfoObjLst = await ViewInfo_GetObjLstByViewIdLstAsync(arrViewId);
      let intCount = 0;
      for (const strViewId of arrViewId) {
        const bolResult = await ViewInfoEx_SetCmPrjId(
          strViewId,
          strCmPrjId,
          clsPubLocalStorage.userId,
        );
        if (bolResult == true) intCount;
        intCount++;
        const strWhere = `ViewId='${strViewId}'`;
        const arrViewRegionRela = await ViewRegionRela_GetObjLstAsync(strWhere);
        for (const objViewRegionRela of arrViewRegionRela) {
          ViewRegionRela_ReFreshThisCache(objViewRegionRela.regionId);

          QryRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          EditRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          ExcelExportRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          DetailRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          DGRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          FeatureRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          const arrFeatureRegionFlds = await FeatureRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(
            objViewRegionRela.regionId,
          );
          for (const objFeatureRegionFlds of arrFeatureRegionFlds) {
            ViewFeatureFlds_ReFreshCache(objFeatureRegionFlds.viewFeatureId);
          }
        }
        ViewRegionRela_ReFreshThisCache(strCmPrjId);
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public async SetCmPrjId(arrViewId: Array<string>, strCmPrjId: string) {
    const strThisFuncName = this.SetCmPrjId.name;
    if (strCmPrjId == null || strCmPrjId == '') {
      const strMsg = '请输入CM工程Id(CmPrjId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrViewId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      //const arrViewInfoObjLst = await ViewInfo_GetObjLstByViewIdLstAsync(arrViewId);
      let intCount = 0;
      for (const strViewId of arrViewId) {
        const bolResult = await ViewInfoEx_SetCmPrjId(
          strViewId,
          strCmPrjId,
          clsPubLocalStorage.userId,
        );
        if (bolResult == true) intCount;
        intCount++;
        const strWhere = `ViewId='${strViewId}'`;
        const arrViewRegionRela = await ViewRegionRela_GetObjLstAsync(strWhere);
        for (const objViewRegionRela of arrViewRegionRela) {
          ViewRegionRela_ReFreshThisCache(objViewRegionRela.regionId);

          QryRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          EditRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          ExcelExportRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          DetailRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          DGRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          FeatureRegionFlds_ReFreshCache(objViewRegionRela.regionId);
          const arrFeatureRegionFlds = await FeatureRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(
            objViewRegionRela.regionId,
          );
          for (const objFeatureRegionFlds of arrFeatureRegionFlds) {
            ViewFeatureFlds_ReFreshCache(objFeatureRegionFlds.viewFeatureId);
          }
        }
        ViewRegionRela_ReFreshThisCache(strCmPrjId);
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      // if (intCount > 0) {
      //   V1iewInfo_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
      // }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrViewId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrViewInfoObjLst = await ViewInfo_GetObjLstByViewIdLstAsync(arrViewId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrViewInfoObjLst) {
        const strMaxStrId = await ViewInfo_GetMaxStrIdByPrefixAsync(objInFor.prjId);
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.viewId = strMaxStrId;
        objInFor.viewName = `${objInFor.viewName}_C`;
        const returnBool = await ViewInfo_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          // const strInfo = Format('克隆记录成功!');
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 设置字段值-CmPrjId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnCheckRegionFlds_Click() {
    const strThisFuncName = this.btnCheckRegionFlds_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      let intCount = 0;
      for (const strViewId of arrKeyIds) {
        await ViewInfoEx_CheckRegionFlds(
          strViewId,
          clsPrivateSessionStorage.currPrjDataBaseId,
          strCmPrjId,
          clsPubLocalStorage.userId,
        );
        intCount++;
      }
      const arrRegionId = await ViewRegionRelaEx_GetRegionIdLstByViewIdLstCache(
        arrKeyIds,
        strCmPrjId,
      );
      for (const strRegionId of arrRegionId) {
        DetailRegionFlds_ReFreshCache(strRegionId);
        EditRegionFlds_ReFreshCache(strRegionId);
        DGRegionFlds_ReFreshCache(strRegionId);
        ExcelExportRegionFlds_ReFreshCache(strRegionId);
        QryRegionFlds_ReFreshCache(strRegionId);
        FeatureRegionFlds_ReFreshCache(strRegionId);
      }
      // V1iewInfo_ReFreshCache(strCmPrjId);

      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
      const strMsg = Format('检查区域字段完成,共检查了{0}个界面.', intCount);
      alert(strMsg);
    } catch (e) {
      const strMsg = Format(
        '检查区域字段不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 是否显示逻辑错误表
   **/
  public get dispProbableErrView_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkDispProbableErrView_q');
    const strId = 'chkDispProbableErrView_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否显示逻辑错误表
   **/
  public set dispProbableErrView_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkDispProbableErrView_q', value);
  }
  public async SetDdl_FuncModuleAgcIdInDiv(PrjId: string) {
    await FuncModule_AgcEx_BindDdl_FuncModuleAgcIdForViewInfoInDivCacheEx(
      divVarSet.refDivQuery,
      'ddlFuncModuleAgcId_q',
      clsPrivateSessionStorage.cmPrjId,
      PrjId,
    ); //
  }
  /**
   * 是否显示与当前子工程相关的表
   **/
  public get showCurrCmPrjId_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkShowCurrCmPrjId_q');
    const strId = 'chkShowCurrCmPrjId_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否显示与当前子工程相关的表
   **/
  public set showCurrCmPrjId_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkShowCurrCmPrjId_q', value);
  }
  /** 设置字段值-CmPrjId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetCmPrjId_Click() {
    const strThisFuncName = this.btnSetCmPrjId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const strCmPrjId = GetSelectValueInDivObj(divVarSet.refDivFunction, 'ddlCmPrjId_SetFldValue');
      if (strCmPrjId == '') {
        const strMsg = '请输入CM工程Id(CmPrjId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strCmPrjId=' + strCmPrjId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetCmPrjId(arrKeyIds, strCmPrjId);
      // await this.BindGv_ViewInfoCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
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
