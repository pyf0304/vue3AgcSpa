import { ViewInfoCRUD } from '@/viewsBase/PrjInterface/ViewInfoCRUD';
import ViewInfo_EditEx from '@/views/PrjInterface/ViewInfo_EditEx';
import {
  CheckControlExistInDivObj,
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  GetSelectedIndexInDivObj,
  SetCheckBoxValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  CMProjectEx_BindDdl_CmPrjIdInDivCache,
  CMProjectEx_GetObjLstByPrjIdCache,
} from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { clsPubFun } from '@/ts/PubConfig/clsPubFun';
import { ApplicationType_BindDdl_ApplicationTypeIdByIsVisibleInDivCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { BindTab, confirmDel, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsPubFun4Visible } from '@/ts/FunClass/clsPubFun4Visible';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  ViewInfoCmPrjIdRelaEx_CreateRela,
  ViewInfoCmPrjIdRelaEx_DelRela,
} from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoCmPrjIdRelaExWApi';
import {
  ViewInfo_AddNewRecordAsync,
  ViewInfo_GetMaxStrIdByPrefixAsync,
  ViewInfo_GetNameByViewIdCache,
  ViewInfo_GetObjLstByViewIdLstAsync,
  ViewInfo_GetRecCountByCondAsync,
  ViewInfo_UpdateRecordAsync,
} from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import {
  ViewInfoEx_CheckRegionFlds,
  ViewInfoEx_DelRecordEx,
  ViewInfoEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';
import { ViewInfoCmPrjIdRela_ReFreshCache } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoCmPrjIdRelaWApi';
import {
  ApplicationTypeId_Static,
  CmPrjId_Local,
  divVarSet,
  qryVarSet,
  refViewInfo_Detail,
  refViewInfo_Edit,
  refvViewInfo_List,
  UserId_Local,
  viewVarSet,
} from '@/views/PrjInterface/ViewInfoVueShare';
import { ViewRegionRelaEx_GetRegionIdLstByViewIdLstCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { DetailRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsDetailRegionFldsWApi';
import { EditRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsEditRegionFldsWApi';
import { DGRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsDGRegionFldsWApi';
import { ExcelExportRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsExcelExportRegionFldsWApi';
import { QryRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';
import { FeatureRegionFlds_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { ViewIdGCVariableRelaEx_GetViewVar } from '@/ts/L3ForWApiEx/GeneCode/clsViewIdGCVariableRelaExWApi';
import { useviewInfoStore } from '@/store/modules/viewInfo';
/** ViewInfoCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class ViewInfoCRUDEx extends ViewInfoCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  public static ShowLst: (arrObjLst: Array<clsViewInfoENEx>) => Promise<void>;
  public static ShowEmptyRecNumInfo: (strEmptyRecNumInfo: string) => void;

  //public static mstrListDiv = "divDataLst";
  //public static mstrSortViewInfoBy = "ViewId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 15;
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
    console.log(strType + strPara);
    this.BindGv_ViewInfo4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'ViewInfo':
        // alert('该类没有绑定该函数：[this.BindGv_ViewInfo4Func]！');
        this.BindGv_ViewInfo4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ViewInfoCRUDEx;
    if (ViewInfoCRUD.objPageCRUD == null) {
      ViewInfoCRUD.objPageCRUD = new ViewInfoCRUDEx();
      objPage = <ViewInfoCRUDEx>ViewInfoCRUD.objPageCRUD;
    } else {
      objPage = <ViewInfoCRUDEx>ViewInfoCRUD.objPageCRUD;
    }
    const objPageEdit = new ViewInfo_EditEx('ViewInfo_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'GetViewVar': //查询记录
        objPage.btnGetViewVar_Click();
        break;
      case 'CheckRegionFlds': //查询记录
        objPage.btnCheckRegionFlds_Click();
        break;
      case 'SetDefaCmPrjId': //自定义功能:设置默认Cm项目
        objPage.btnSetDefaCmPrjId_Click();
        break;

      case 'RemoveDefaCmPrjId': //自定义功能:从默认项目移除
        objPage.btnRemoveDefaCmPrjId_Click();
        break;
      case 'SetApplicationTypeId': //自定义功能:设置应用
        objPage.btnSetApplicationTypeId_Click();
        break;

      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'SetCmPrjId': //设置CmPrjId
        objPage.btnSetCmPrjId_Click();
        break;

      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refViewInfo_Edit.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refViewInfo_Edit.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refViewInfo_Detail.value.btnViewInfo_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refViewInfo_Edit.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecordEx_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
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
        AccessBtnClickDefault(strCommandName, 'ViewInfoCRUDEx.btnClick');

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
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;

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
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId; //定义条件字段
    // await this.SetDdl_ApplicationTypeIdInDiv(); //查询区域
    // await this.SetDdl_FuncModuleAgcIdInDiv(strPrjId); //查询区域
    await this.SetDdl_MainTabIdInDivV2(strCmPrjId); //查询区域
    // BindDdl_TrueAndFalse('ddlIsShare_q');
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
  public async BindTab_ViewInfo4FuncBak20230704(
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
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async BindTab_ViewInfo4Func(
    divContainer: HTMLDivElement,
    arrViewInfoExObjLst: Array<clsViewInfoENEx>,
  ) {
    // const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
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
      // {
      //   fldName: 'viewTypeName',
      //   sortFun: clsPubVar4Web.SortFun,
      //   getDataSource: '',
      //   colHeader: '界面类型',
      //   text: '',
      //   sortBy: 'viewTypeName',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 1,
      //   funcName: () => {},
      // },
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
        fldName: clsViewInfoENEx.con_CmPrjNames,
        sortBy: clsViewInfoENEx.con_CmPrjNames,
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '子项目组',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
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
      // {
      //   fldName: 'viewTypeCode',
      //   sortFun: clsPubVar4Web.SortFun,
      //   getDataSource: '',
      //   colHeader: '类型码',
      //   text: '',
      //   sortBy: 'viewTypeCode',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 1,
      //   funcName: () => {},
      // },
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
    // await BindTab(divDataLst, arrViewInfoExObjLst, arrDataColumn, 'viewId', this);
    arrViewInfoExObjLst.forEach((x) => {
      if (x.errMsg == null) x.errMsg = '';
    });
    await ViewInfoCRUDEx.ShowLst(arrViewInfoExObjLst);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
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

      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsShare_q') == 1) {
        objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_IsShare, '1', '=');
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsShare_q') == 2) {
        objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_IsShare, '0', '=');
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineViewInfoConditionObj)时出错!请联系管理员!${objException.message}`;
      throw strMsg;
    }

    return objViewInfo_Cond;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_ViewInfo4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ViewInfo4Func.name;
    if (viewVarSet.sortViewInfoBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortViewInfoBy)为空,请检查!(In BindGv_ViewInfoCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    // const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.CombineViewInfoCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrViewInfoExObjLst: Array<clsViewInfoENEx> = [];
    try {
      this.recCount = await ViewInfo_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);

        // if (divDataLst != null) {
        //   divDataLst.innerText = '';
        //   divDataLst.appendChild(lblMsg);
        // }
        ViewInfoCRUDEx.vuebtn_Click('DelTableRows', '');
        // const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        // console.error('Error: ', strMsg);
        // //console.trace();
        // alert(strMsg);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortViewInfoBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrViewInfoExObjLst = await ViewInfoEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrViewInfoExObjLst.length == 0) {
      const strKey = Format('{0}', clsViewInfoEN._CurrTabName);
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      // ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ViewInfo4Func(divList, arrViewInfoExObjLst);
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_ViewInfo4FuncBak() {
    // const strThisFuncName = this.BindGv_ViewInfo4Func.name;
    if (viewVarSet.sortViewInfoBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortViewInfoBy)为空，请检查！(In BindGv_ViewInfoCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    // const objViewInfo_Cond = await this.CombineViewInfoConditionObj();
    // objViewInfo_Cond.SetCondFldValue(
    //   clsViewInfoEN.con_PrjId,
    //   clsPrivateSessionStorage.currSelPrjId,
    //   '=',
    // );
    //objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_PrjId, clsPrivateSessionStorage.currSelPrjId, "=");
    // const strWhereCond = JSON.stringify(objViewInfo_Cond);
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    // let arrViewInfoExObjLst: Array<clsViewInfoENEx> = [];
    // try {
    //   this.recCount = await ViewInfo_GetRecCountByCondCache(
    //     objViewInfo_Cond,
    //     clsPrivateSessionStorage.cmPrjId,
    //   );
    //   let strSortFun = (x: any, y: any) => {
    //     x = y;
    //     return 0;
    //   };
    //   if (ViewInfoCRUD.sortFunStatic != undefined) {
    //     strSortFun = ViewInfoCRUD.sortFunStatic(ViewInfoCRUD.ascOrDesc4SortFun);
    //   }
    //   const objPagerPara: stuPagerPara = {
    //     pageIndex: intCurrPageIndex,
    //     pageSize: this.pageSize,
    //     whereCond: strWhereCond,
    //     orderBy: viewVarSet.sortViewInfoBy,
    //     sortFun: strSortFun,
    //   };
    //   arrViewInfoExObjLst = await ViewInfoEx_GetObjExLstByPagerCache(
    //     objPagerPara,
    //     clsPrivateSessionStorage.cmPrjId,
    //   );
    // } catch (e) {
    //   const strMsg = Format(
    //     '绑定GridView不成功,{0}.(in {1}.{2})',
    //     e,
    //     this.constructor.name,
    //     strThisFuncName,
    //   );
    //   console.error(strMsg);
    //   alert(strMsg);
    //   return;
    // }
    // if (arrViewInfoExObjLst.length == 0) {
    //   const strKey = Format(
    //     '{0}_{1}_{2}',
    //     clsViewInfoEN._CurrTabName,
    //     clsPrivateSessionStorage.currSelPrjId,
    //     clsPrivateSessionStorage.cmPrjId,
    //   );
    //   const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
    //   console.error('Error: ', strMsg);
    //   //console.trace();
    //   // ShowEmptyRecNumInfoByDiv(strListDiv, strMsg);
    //   ViewInfoCRUDEx.ShowEmptyRecNumInfo(strMsg);
    //   this.objPager.Hide(divList, this.divName4Pager);
    //   return;
    // }
    // try {
    //   await this.BindTab_ViewInfo4Func(divList, arrViewInfoExObjLst);

    //   await this.ShowErrMsg(divList, arrViewInfoExObjLst);
    //   //console.log("完成BindGv_ViewInfo4Func!");
    // } catch (e) {
    //   const strMsg = Format(
    //     '绑定对象列表不成功, {0}.(in {1}.{2})',
    //     e,
    //     this.constructor.name,
    //     strThisFuncName,
    //   );
    //   console.error(strMsg);
    //   alert(strMsg);
    // }
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
  //   public async SetDdl_FuncModuleAgcIdInDiv(PrjId: string) {
  //     await FuncModule_AgcEx_BindDdl_FuncModuleAgcIdForViewInfoInDivCacheEx(
  //       ViewInfoCRUDEx.divQuery,
  //       'ddlFuncModuleAgcId_q',
  //       clsPrivateSessionStorage.cmPrjId,
  //       PrjId,
  //     ); //
  //   }
  //   /**
  //    * 是否显示与当前子工程相关的表
  //    **/
  //   public get showCurrCmPrjId_q(): boolean {
  //     const objDiv = ViewInfoCRUDEx.divQuery;
  //     CheckControlExistInDivObj(ViewInfoCRUDEx.divQuery, 'input', 'chkShowCurrCmPrjId_q');
  //     const strId = 'chkShowCurrCmPrjId_q';
  //     return GetCheckBoxValueInDivObj(objDiv, strId);
  //   }
  //   /**
  //    * 是否显示与当前子工程相关的表
  //    **/
  //   public set showCurrCmPrjId_q(value: boolean) {
  //     SetCheckBoxValueByIdInDivObj(ViewInfoCRUDEx.divQuery, 'chkShowCurrCmPrjId_q', value);
  //   }
  //   /** 设置字段值-CmPrjId
  //    * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
  //    **/
  public async btnSetCmPrjId_Click() {
    const strThisFuncName = this.btnSetCmPrjId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置CmPrjId的记录！');
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
      for (const strViewId of arrKeyIds) {
        await ViewInfoCmPrjIdRelaEx_CreateRela(
          strCmPrjId,
          strViewId,
          clsPrivateSessionStorage.userId,
        );
      }
      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
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
  //   /** 把所有的查询控件内容组合成一个条件串
  //    * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  //    * @returns 条件串(strWhereCond)
  //    **/
  //   public async CombineViewInfoCondition(): Promise<string> {
  //     //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //     //例如 1 = 1 && UserName = '张三'
  //     let strWhereCond = ' 1 = 1 ';
  //     //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  //     try {
  //       if (this.viewId_q != '') {
  //         strWhereCond += Format(" And {0} like '%{1}%'", clsViewInfoEN.con_ViewId, this.viewId_q);
  //       }
  //       if (this.viewName_q != '') {
  //         strWhereCond += Format(
  //           " And {0} like '%{1}%'",
  //           clsViewInfoEN.con_ViewName,
  //           this.viewName_q,
  //         );
  //       }
  //       if (this.applicationTypeId_q != 0) {
  //         strWhereCond += Format(
  //           ' And {0} = {1}',
  //           clsViewInfoEN.con_ApplicationTypeId,
  //           this.applicationTypeId_q,
  //         );
  //       }
  //       if (this.funcModuleAgcId_q != '' && this.funcModuleAgcId_q != '0') {
  //         strWhereCond += Format(
  //           " And {0} = '{1}'",
  //           clsViewInfoEN.con_FuncModuleAgcId,
  //           this.funcModuleAgcId_q,
  //         );
  //       }
  //       if (this.mainTabId_q != '' && this.mainTabId_q != '0') {
  //         strWhereCond += Format(" And {0} = '{1}'", clsViewInfoEN.con_MainTabId, this.mainTabId_q);
  //       }
  //       if (this.viewTypeCode_q != 0) {
  //         strWhereCond += Format(
  //           ' And {0} = {1}',
  //           clsViewInfoEN.con_ViewTypeCode,
  //           this.viewTypeCode_q,
  //         );
  //       }
  //     } catch (objException) {
  //       const strMsg: string = Format(
  //         '(errid:WiTsCs0017)在组合查询条件(CombineViewInfoCondition)时出错!请联系管理员!{0}',
  //         objException,
  //       );
  //       throw strMsg;
  //     }
  //     return strWhereCond;
  //   }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    viewVarSet.sortViewInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
    // ViewInfoCRUD.ascOrDesc4SortFun = sortDirection;
    // ViewInfoCRUD.sortFunStatic = sortFun;
    await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineViewInfoCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ` 1 = 1 and PrjId='${clsPrivateSessionStorage.currSelPrjId}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
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
      if (this.dispProbableErrView_q == true) {
        // strWhereCond += Format(' And (Len({0}) = 0 or {0} is null)', clsViewInfoEN.con_ErrMsg);
        strWhereCond += ` and Len(${clsViewInfoEN.con_ErrMsg}) > 0`;
      }
      if (qryVarSet.viewId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsViewInfoEN.con_ViewId,
          qryVarSet.viewId_q,
        );
      }
      if (qryVarSet.viewName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsViewInfoEN.con_ViewName,
          qryVarSet.viewName_q,
        );
      }
      if (qryVarSet.applicationTypeId_q != 0) {
        strWhereCond += Format(
          ' And {0} = {1}',
          clsViewInfoEN.con_ApplicationTypeId,
          qryVarSet.applicationTypeId_q,
        );
      }
      if (qryVarSet.funcModuleAgcId_q != '' && qryVarSet.funcModuleAgcId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsViewInfoEN.con_FuncModuleAgcId,
          qryVarSet.funcModuleAgcId_q,
        );
      }
      if (qryVarSet.mainTabId_q != '' && qryVarSet.mainTabId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsViewInfoEN.con_MainTabId,
          qryVarSet.mainTabId_q,
        );
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsShare_q') == 1) {
        strWhereCond += ` and ${clsViewInfoEN.con_IsShare} = '1'`;
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsShare_q') == 2) {
        strWhereCond += ` and ${clsViewInfoEN.con_IsShare} = '0'`;
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineViewInfoCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
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
  /**
   * 自定义功能
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_TS_btn_Click>b__4)
   **/
  public async btnSetDefaCmPrjId_Click() {
    const strThisFuncName = this.btnSetDefaCmPrjId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要建立关系的记录！');
        return '';
      }

      await this.SetDefaCmPrjId(arrKeyIds, clsPrivateSessionStorage.cmPrjId);
      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '建立关系不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-TabStateId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetDefaCmPrjId(arrTabId: Array<string>, strCmPrjId: string) {
    const strThisFuncName = this.SetDefaCmPrjId.name;
    if (strCmPrjId == null || strCmPrjId == '') {
      const strMsg = '请输入Cm项目ID(cmPrjId)!';
      console.error('Error: ', strMsg);
      alert(strMsg);
      return '';
    }
    if (arrTabId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      let intCount = 0;
      for (const strTabId of arrTabId) {
        let returnBool = false;
        try {
          returnBool = await ViewInfoCmPrjIdRelaEx_CreateRela(
            strCmPrjId,
            strTabId,
            clsPubLocalStorage.userId,
          );
        } catch (e) {
          const strMsg = Format(
            '建立关系不成功,{0}.(in {1}.{2})',
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
        ViewInfoCmPrjIdRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
        // vViewInfo_ReFreshThisCache (clsPrivateSessionStorage.cmPrjId);
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

  /**
   * 自定义功能:从默认项目移除
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_TS_btn_Click>b__4)
   **/
  public async btnRemoveDefaCmPrjId_Click() {
    const strThisFuncName = this.btnRemoveDefaCmPrjId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要移除关系的记录！');
        return '';
      }

      await this.RemoveDefaCmPrjId(arrKeyIds, clsPrivateSessionStorage.cmPrjId);
      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '移除关系不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-TabStateId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async RemoveDefaCmPrjId(arrViewId: Array<string>, strCmPrjId: string) {
    const strThisFuncName = this.RemoveDefaCmPrjId.name;
    if (strCmPrjId == null || strCmPrjId == '') {
      const strMsg = '请输入Cm项目ID(cmPrjId)!';
      console.error('Error: ', strMsg);
      alert(strMsg);
      return '';
    }
    if (arrViewId.length == 0) {
      const strMsg = '没有选择记录，不能取消关系!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      let intCount = 0;
      for (const strViewId of arrViewId) {
        let returnInt = 0;
        try {
          returnInt = await ViewInfoCmPrjIdRelaEx_DelRela(strCmPrjId, strViewId);
        } catch (e) {
          const strMsg = Format(
            '移除关系不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnInt > 0) {
          // const strInfo = Format('移除关系成功!');
          intCount++;
        } else {
          const strInfo = Format('移除关系不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共移除关系:{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        ViewInfoCmPrjIdRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
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
        objInFor.viewName = `C_${objInFor.viewName}`;
        const returnBool = await ViewInfo_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
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

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecordEx_Click() {
    const strThisFuncName = this.btnDelRecordEx_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      // await this.DelMultiRecord(arrKeyIds);
      for (const strViewId of arrKeyIds) {
        await ViewInfoEx_DelRecordEx(strViewId);
      }
      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
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
      refvViewInfo_List.value.selectAllChecked = false;
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

  /** 设置字段值-RetrievalMethodId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnGetViewVar_Click() {
    const strThisFuncName = this.btnGetViewVar_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      for (const strViewId of arrKeyIds) {
        try {
          const bolIsSuccess = await ViewIdGCVariableRelaEx_GetViewVar(
            strViewId,
            clsPrivateSessionStorage.currSelPrjId,
            clsPrivateSessionStorage.userId,
          );
          if (bolIsSuccess == false) {
            const strMsg = '导入界面变量出错!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
        } catch (e) {
          const strViewName = await ViewInfo_GetNameByViewIdCache(
            strViewId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strMsg = `设置界面:${strViewName}(${strViewId})变量不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      }
      const strMsg = '导入界面变量成功!';

      alert(strMsg);

      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-ApplicationTypeId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetApplicationTypeId_Click() {
    const strThisFuncName = this.btnSetApplicationTypeId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置应用程序类型ID的${this.thisTabName}记录!`);
        return '';
      }
      const strApplicationTypeId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlApplicationTypeId_SetFldValue',
      );
      if (strApplicationTypeId == '') {
        const strMsg = '请输入应用程序类型ID(ApplicationTypeId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strApplicationTypeId=' + strApplicationTypeId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      const intApplicationTypeId = Number(strApplicationTypeId);
      await this.SetApplicationTypeId(arrKeyIds, intApplicationTypeId);
      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-ApplicationTypeId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetApplicationTypeId(arrViewId: Array<string>, intApplicationTypeId: number) {
    const strThisFuncName = this.SetApplicationTypeId.name;
    if (intApplicationTypeId == null || intApplicationTypeId == 0) {
      const strMsg = '请输入应用程序类型ID(ApplicationTypeId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrViewId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
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
        objViewInfoEN.SetViewId(objInFor.viewId);
        objViewInfoEN.SetApplicationTypeId(intApplicationTypeId);
        let returnBool = false;
        try {
          objViewInfoEN.sfUpdFldSetStr = objViewInfoEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await ViewInfo_UpdateRecordAsync(objViewInfoEN);
          const viewInfoStore = useviewInfoStore();
          await viewInfoStore.delObj(objInFor.viewId);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        //ViewInfo_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
}
