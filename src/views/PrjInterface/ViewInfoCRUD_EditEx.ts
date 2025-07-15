import $ from 'jquery';
import { ViewRegion_AddRelaEx } from '../RegionManage/ViewRegion_AddRelaEx';
import ViewRegion_Edit_SimEx from '../RegionManage/ViewRegion_Edit_SimEx';
import { ViewRegion_MultiCreateEx } from '../RegionManage/ViewRegion_MultiCreateEx';
import { ViewRegion_RenameEx } from '../RegionManage/ViewRegion_RenameEx';
import ViewInfo_EditEx from './ViewInfo_EditEx';
import { clsPubFun4Button } from '@/ts/FunClass/clsPubFun4Button';
import { stuViewInfo4Session } from '@/ts/FunClass/stuViewInfo4Session';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';

import { FuncModule_Agc_GetObjByFuncModuleAgcIdCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import {
  ViewRegionRela_GetObjLstCache,
  ViewRegionRela_ReFreshCache,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionRelaWApi';

import { CMProjectEx_GetObjLstByPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import {
  ViewInfoEx_DelRecordEx,
  ViewInfoEx_SortFunByViewName,
} from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import { FuncModule_AgcEx_BindDdl_FuncModuleAgcIdCacheEx } from '@/ts/L3ForWApiEx/PrjManage/clsFuncModule_AgcExWApi';
import {
  ViewRegionRelaEx_CopyToEx,
  ViewRegionRelaEx_DeleteByViewIdAndRegionId,
  ViewRegionRelaEx_FuncMap4OrderNum,
  ViewRegionRelaEx_SortFunByClassName,
  ViewRegionRelaEx_SortFunByOrderNumber,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { UserDefaValue_LocalEx_setUserDefaValue } from '@/ts/L3ForWApiEx/UserManage/clsUserDefaValue_LocalExWApi';
import {
  CheckControlExistInDivObj,
  GetArray,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetSelectValueInDivObj,
  GetUniDivInDoc,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, confirm_del, Redirect } from '@/ts/PubFun/clsCommFunc4Web';

import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { ViewInfoCRUD } from '@/viewsBase/PrjInterface/ViewInfoCRUD';

import { clsViewRegionRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaENEx';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { ViewInfo_GetObjLstAsync } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  ApplicationTypeId_Static,
  divVarSet,
  qryVarSet,
  UserId_Local,
  viewVarSet,
} from '@/views/PrjInterface/ViewInfoVueShare';

/** ViewInfoCRUD_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewInfoCRUD_EditEx extends ViewInfoCRUD implements IShowList {
  public static CmPrjIdCache = '9991';
  public static strDivName4Tree = 'divUl';
  public static strUlName4Menu = 'ulPARENT';
  public static divUlName4Menu = GetUniDivInDoc('ulPARENT');

  //public static thisPage: ViewInfoCRUD;
  //public static divName4Query=  "divQuery_Main";
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  public static strRegionId = '';
  public static strViewId = '';
  constructor() {
    super();
    ViewInfoCRUD.objPageCRUD = this;
  }

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /**
   * 从父类继承过来的在层中绑定函数，可以绑定任何形式的内容
   * @param divName4Bind
   */
  public async BindInDiv(divName4Bind: HTMLDivElement) {
    this.BindViewRegion(divName4Bind);
  }

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_ViewInfo]！');
    //this.BindGv_ViewInfo();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    const thisPage = ViewInfoCRUD.objPageCRUD;

    switch (strType) {
      case `${clsViewRegionEN._CurrTabName}MultiCreate`:
        //this.BindTr_ViewRegion(ViewInfoCRUD_EditEx.strDivName4Tree, ViewInfoCRUD_EditEx.SetOnClick);
        thisPage.BindInDiv(ViewInfoCRUD_EditEx.divUlName4Menu);

        break;
      case clsViewInfoEN._CurrTabName:
      case `${clsViewInfoEN._CurrTabName}Add`:
      case `${clsViewInfoEN._CurrTabName}Update`:
        //this.BindTr_ViewRegion(ViewInfoCRUD_EditEx.strDivName4Tree, ViewInfoCRUD_EditEx.SetOnClick);
        thisPage.BindInDiv(ViewInfoCRUD_EditEx.divUlName4Menu);

        break;
      case `${clsViewRegionEN._CurrTabName}AddRela`:
      case `${clsViewRegionEN._CurrTabName}_Rename`:
        //this.BindTr_ViewRegion(ViewInfoCRUD_EditEx.strDivName4Tree, ViewInfoCRUD_EditEx.SetOnClick);
        thisPage.BindInDiv(ViewInfoCRUD_EditEx.divUlName4Menu);

        break;
      case `${clsViewRegionEN._CurrTabName}Detail`:
        //this.BindTr_ViewRegion(ViewInfoCRUD_EditEx.strDivName4Tree, ViewInfoCRUD_EditEx.SetOnClick);
        thisPage.BindInDiv(ViewInfoCRUD_EditEx.divUlName4Menu);
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
    const objPage: ViewInfoCRUD_EditEx = new ViewInfoCRUD_EditEx();
    const objPageEdit: ViewInfo_EditEx = new ViewInfo_EditEx('ViewInfo_EditEx', objPage);
    let strMsg = '';
    let arrKeyIds;
    let objPage_MultiCreate: ViewRegion_MultiCreateEx;
    let objPage_AddRela: ViewRegion_AddRelaEx;
    let objPage_RenameRegion: ViewRegion_RenameEx;
    let strViewId;
    switch (strCommandName) {
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.divName4Edit = 'divEdit_Region';
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.divName4Edit = 'divEdit_Region';
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = ViewInfoCRUD_EditEx.strViewId;
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit.divName4Edit = 'divEdit_Region';
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
      case 'ShowQuery': //查询记录
        objPage.btnShowQuery_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;

      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRegion': //添加记录
        objPage_MultiCreate = new ViewRegion_MultiCreateEx('ViewRegion_MultiCreateEx', objPage);
        // objPage_MultiCreate.divName4Edit = 'divEdit_Region';
        objPage_MultiCreate.btnAddNewRegion_Click();
        break;
      case 'AddRelaRegion': //添加记录
        objPage_AddRela = new ViewRegion_AddRelaEx('ViewRegion_AddRelaEx', objPage);

        // objPage_AddRela.divName4Edit = 'divEdit_Region';
        objPage_AddRela.btnAddRelaRegion_Click();
        break;
      case 'RenameRegion': //添加记录
        objPage_RenameRegion = new ViewRegion_RenameEx('ViewRegion_RenameEx', objPage);
        // objPage_RenameRegion.divName4Edit = 'divEdit_Region';
        if (IsNullOrEmpty(ViewInfoCRUD_EditEx.strRegionId) == true) {
          strMsg = Format('重命名时，区域Id为空,不正确!');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage_RenameRegion.strRegionIdCache = ViewInfoCRUD_EditEx.strRegionId;
        objPage_RenameRegion.strViewIdCache = ViewInfoCRUD_EditEx.strViewId;

        objPage_RenameRegion.btnRenameRegion_Click();
        break;

      //case "DeleteRegion":            //删除记录
      //    const strRegionId = ViewInfoCRUD_EditEx.strRegionId;
      //    let strViewId = ViewInfoCRUD_EditEx.strViewId;
      //    objPage.btnDeleteRegion_Click(strViewId, strRegionId);
      //    break;
      //case "UpdateRegion":            //删除记录
      //    const strRegionId = ViewInfoCRUD_EditEx.strRegionId;
      //    objPage.btnUpdateRegion_Click(strRegionId);
      //    break;
      case 'DeleteView': //删除记录
        strViewId = ViewInfoCRUD_EditEx.strViewId;
        objPage.btnDeleteView_Click(strViewId);
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
        AccessBtnClickDefault(strCommandName, 'ViewInfoCRUD_EditEx.btn_Click');

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
      //ViewRegion_AddRelaEx.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      UserId_Local.value = clsPubLocalStorage.userId;
      divVarSet.refDivQuery = GetUniDivInDoc('divQuery_Main');
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

      //clsPubFun.SetCommFun4BL();
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegionEx(strCmPrjId);
      //this.C1MPrjId_q = strCmPrjId;
      await this.BindUl_CmPrjId(clsPrivateSessionStorage.currSelPrjId);

      viewVarSet.sortViewInfoBy = Format('{0} Desc', clsViewInfoEN.con_UpdDate);
      //2、显示无条件的表内容在GridView中

      await ViewInfoCRUD_EditEx.ChangeCmPrjId(strCmPrjId);

      //            ViewInfoCRUD_EditEx.BindViewRegion(ViewInfoCRUD_EditEx.divUlName4Menu);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public static async SetOnClick(li1: HTMLLIElement, strKeyId: string) {
    li1.setAttribute('onclick', `ShowKey('${strKeyId}');`);
    //return btn1;
  }

  /** 函数功能:为查询区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegionEx(strCmPrjId: string) {
    // 在此处放置用户代码以初始化页面
    const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    if (strPrjId == '9991') {
      const strMsg = Format("ViewInfoCRUD.PrjIdCache='9991'，还没有被赋正确的值,请检查!");
      throw strMsg;
    }
    //const ddlCmPrjId_q = await this.SetDdl_CmPrjId(strPrjId);//查询区域
    //const ddlApplicationTypeId_q = await this.SetDdl_ApplicationTypeId();//查询区域
    await this.SetDdl_FuncModuleAgcIdEx(strPrjId, strCmPrjId); //查询区域
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[funcModuleAgcId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_FuncModuleAgcIdEx(strPrjId: string, strCmPrjId: string) {
    //const objFuncModule_Agc_Cond: clsFuncModule_AgcEN = new clsFuncModule_AgcEN();//查询区域
    //定义条件字段

    await FuncModule_AgcEx_BindDdl_FuncModuleAgcIdCacheEx(
      'ddlFuncModuleAgcId_q',
      strCmPrjId,
      strPrjId,
    ); //查询区域
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[regionTypeId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  //public async SetDdl_RegionTypeId() {
  //    const objRegionType_Cond: clsRegionTypeEN = new clsRegionTypeEN();//查询区域
  //    const ddlRegionTypeId_q = await RegionType_BindDdl_RegionTypeIdCache("ddlRegionTypeId_q", objRegionType_Cond);//查询区域
  //}
  /** 显示ViewInfo对象的所有属性值
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
        colHeader: '界面名',
        text: '',
        sortBy: '',
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
        fldName: 'viewCnName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '中文名',
        text: '',
        sortBy: 'viewCnName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewTypeName',
        sortFun: clsPubVar4Web.SortFun,
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
        colHeader: '主表',
        text: '',
        sortBy: 'mainTabName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'keyForMainTab',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '主表关键字',
        text: '',
        sortBy: 'keyForMainTab',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        sortFun: clsPubVar4Web.SortFun,
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
        colHeader: '生成日期',
        text: '',
        sortBy: 'geneCodeDate',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'regionNum',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '区域数',
        text: '',
        sortBy: 'regionNum',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewId',
        sortFun: clsPubVar4Web.SortFun,
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

    await BindTab(divDataLst, arrViewInfoExObjLst, arrDataColumn, 'viewId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
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
    const viewInfoStore = useviewInfoStore();
    const strCurrSelPrjId = clsPrivateSessionStorage.currSelPrjId;
    console.log(strViewId);

    try {
      const objViewInfo = await viewInfoStore.getObj(strViewId);

      if (objViewInfo == null) {
        const strMsg = Format('界面Id:[{0}]，没有相应的界面，请检查！', strViewId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }
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
      const objFuncModule_Agc = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
        objViewInfo.funcModuleAgcId,
        strCurrSelPrjId,
      );
      if (objFuncModule_Agc == null) {
        const strMsg = Format(
          '模块Id:[{0}]，没有相应的模块，请检查！',
          objViewInfo.funcModuleAgcId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      const objCurrProjects = await Projects_GetObjByPrjIdCache(strCurrSelPrjId);
      //const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
      if (objCurrProjects == null) {
        const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strCurrSelPrjId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objViewInfo4Session: stuViewInfo4Session = {
        //viewId: objViewInfo.viewId,
        //viewName: objViewInfo.viewName,
        funcModuleNameSim: objFuncModule_Agc.funcModuleNameSim,
        funcModuleEnName: objFuncModule_Agc.funcModuleEnName,
        applicationTypeId: objViewInfo.applicationTypeId,
        applicationTypeName: objApplicationType.applicationTypeSimName,
        currSelPrjId: clsPrivateSessionStorage.currSelPrjId,
        currSelPrjName: objCurrProjects.prjName,
        keyId4Test: objViewInfo.keyId4Test,
        mainTabId: objViewInfo.mainTabId,
        outTabId: objViewInfo.outRelaTabId,
        cmPrjId: clsPrivateSessionStorage.cmPrjId,
      };
      clsPrivateSessionStorage.viewId_Main = objViewInfo.viewId;
      clsPrivateSessionStorage.viewName = objViewInfo.viewName;
      clsPrivateSessionStorage.funcModuleNameSim = objFuncModule_Agc.funcModuleNameSim;
      clsPrivateSessionStorage.funcModuleEnName = objFuncModule_Agc.funcModuleEnName;

      clsPrivateSessionStorage.applicationTypeId = objViewInfo4Session.applicationTypeId.toString();
      clsPubSessionStorage.applicationTypeName = objViewInfo4Session.applicationTypeName;

      const strJson = JSON.stringify(objViewInfo4Session);

      this.SetSessionAsync('objViewInfo4Session', strJson);
      //this.GetDataFromUserPrjGrantClass(objUserPrjGrantEN);

      //alert("完成SelectViewId!");
      clsPrivateSessionStorage.viewId_Main = objViewInfo.viewId;
      Redirect('/Index/Main_ViewInfo.js');
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
  public async CombineViewInfoConditionBak(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    // let strWhereCond = `${clsViewInfoEN.con_PrjId} = '${clsPrivateSessionStorage.currSelPrjId}'`;

    const objViewInfo_Cond: clsViewInfoEN = new clsViewInfoEN();
    objViewInfo_Cond.SetCondFldValue(
      clsViewInfoEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //const objThisPage = ViewInfoCRUD_EditEx();
      if (qryVarSet.viewName_q != '') {
        // strWhereCond += ` And ${clsViewInfoEN.con_ViewName} like '% ${this.viewName_q}%'`;
        objViewInfo_Cond.SetCondFldValue(clsViewInfoEN.con_ViewName, qryVarSet.viewName_q, 'like');
      }

      if (qryVarSet.funcModuleAgcId_q != '' && qryVarSet.funcModuleAgcId_q != '0') {
        // strWhereCond += ` And ${clsViewInfoEN.con_FuncModuleAgcId} = '${this.funcModuleAgcId_q}'`;
        objViewInfo_Cond.SetCondFldValue(
          clsViewInfoEN.con_FuncModuleAgcId,
          qryVarSet.funcModuleAgcId_q,
          '=',
        );
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineViewInfoConditionObj)时出错!请联系管理员!${objException.message}`;
      throw strMsg;
    }

    return ''; // objViewInfo_Cond;
  }

  /** 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombineViewInfoCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'

    let strWhereCond = `${clsViewInfoEN.con_PrjId} = '${clsPrivateSessionStorage.currSelPrjId}'`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
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

  public static btnAddNewRegion_Click(strKey: string) {
    ViewInfoCRUD_EditEx.strViewId = strKey;
    ViewRegion_MultiCreateEx.strViewIdCache = strKey;
    const objPage: ViewInfoCRUD_EditEx = new ViewInfoCRUD_EditEx();
    const objPage_MultiCreate: ViewRegion_MultiCreateEx = new ViewRegion_MultiCreateEx(
      'ViewRegion_MultiCreateEx',
      objPage,
    );
    // objPage_MultiCreate.divName4Edit = 'divEdit_Region';
    objPage_MultiCreate.btnAddNewRegion_Click();
  }

  public static btnAddRelaRegion_Click(strKey: string) {
    ViewInfoCRUD_EditEx.strViewId = strKey;

    const objPage: ViewInfoCRUD_EditEx = new ViewInfoCRUD_EditEx();
    const objPage_AddRela: ViewRegion_AddRelaEx = new ViewRegion_AddRelaEx(
      'ViewRegion_AddRelaEx',
      objPage,
    );
    // objPage_AddRela.divName4Edit = 'divEdit_Region';
    objPage_AddRela.btnAddRelaRegion_Click();
  }
  public static main_Click(strKey: string) {
    ViewInfoCRUD_EditEx.strViewId = strKey;
    ViewRegion_MultiCreateEx.strViewIdCache = strKey;

    const liLevel1: HTMLLIElement = <HTMLLIElement>document.getElementById(`liL1_${strKey}`);
    if (liLevel1 == null) return;
    liLevel1.className = liLevel1.className
      .replace(' noselected', '')
      .replace('noselected', '')
      .replace(' selected', '')
      .replace('selected', '')
      .replace('  ', ' ');
    liLevel1.className = `${liLevel1.className} selected`;
    const strState = liLevel1.getAttribute('state');

    const parUL: HTMLUListElement = <HTMLUListElement>liLevel1.parentElement;
    const arrAllLi = parUL.children;
    if (strState == 'close') {
      $(`#${strKey}`).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
      $(`#ul${strKey}`).show();
      liLevel1.setAttribute('state', 'open');
      //flag = false;
    } else {
      $(`#${strKey}`).css('background', 'url(../images/st_folder.gif) no-repeat left');
      $(`#ul${strKey}`).hide();
      liLevel1.setAttribute('state', 'close');
    }
    for (let i = 0; i < arrAllLi.length; i++) {
      const objLi = arrAllLi[i];
      const objLi_a: HTMLAnchorElement = <HTMLAnchorElement>objLi.firstChild;
      const strOtherKey = objLi_a.id;
      if (strOtherKey != strKey) {
        $(`#${strOtherKey}`).css('background', 'url(../images/st_folder.gif) no-repeat left');
        $(`#ul${strOtherKey}`).hide();
        const liLevel2: HTMLLIElement = <HTMLLIElement>(
          document.getElementById(`liL1_${strOtherKey}`)
        );
        if (liLevel2 == null) return;
        liLevel2.setAttribute('state', 'close');
        liLevel2.className = liLevel2.className
          .replace(' noselected', '')
          .replace('noselected', '')
          .replace(' selected', '')
          .replace('selected', '')
          .replace('  ', ' ');
        liLevel2.className = `${liLevel2.className} noselected`;
      }
    }
    ViewInfoCRUD_EditEx.SetSubNoSelected4All('');
    ViewRegion_MultiCreateEx.strViewIdCache = strKey;
    console.log(strKey);
  }

  public static SetSubNoSelected4All(strKey: string) {
    const objDivUL: HTMLDivElement = <HTMLDivElement>(
      document.getElementById(ViewInfoCRUD_EditEx.strDivName4Tree)
    );

    const arrAllLi0 = objDivUL.getElementsByTagName('li');
    let arrAllLi: Array<HTMLLIElement> = <Array<HTMLLIElement>>GetArray(arrAllLi0);
    arrAllLi = arrAllLi.filter((x) => x.id.indexOf('liL2_') > -1);
    for (const objSubLi of arrAllLi) {
      const strRegionId = objSubLi.getAttribute('regionId');

      if (strRegionId != strKey) {
        const objLi_a: HTMLAnchorElement = <HTMLAnchorElement>objSubLi.firstChild;

        objLi_a.className = objLi_a.className
          .replace(' subnoselected', '')
          .replace('subnoselected', '')
          .replace(' subselected', '')
          .replace('subselected', '')
          .replace('  ', ' ');
        objLi_a.className = `${objLi_a.className} subnoselected`;
      }
    }
  }
  public static sub_Click2() {
    alert('sub_Click2');
  }
  public static sub_Click(strKey: string, strViewId: string) {
    //alert("sub_Click");
    ViewInfoCRUD_EditEx.strRegionId = strKey;
    ViewInfoCRUD_EditEx.strViewId = strViewId;
    ViewRegion_MultiCreateEx.strViewIdCache = strViewId;

    const strAId = Format('a_{0}_{1}', strViewId, strKey);
    const a1 = <HTMLAnchorElement>document.getElementById(strAId);
    if (a1 != null) {
      const arrSubSelectedEle0 = document.getElementsByClassName('subselected');
      const arrSubSelectedEle = GetArray(arrSubSelectedEle0);
      arrSubSelectedEle.forEach((x) => (x.className = 'subnoselected'));
      a1.className = 'subselected';
    }
    const event = window.event;
    //console.log("1event:", event);
    if (event != null) {
      //const A1: HTMLAnchorElement = <HTMLAnchorElement>event;
      //A1.className = "subselected";
    }
    const liLevel2: HTMLLIElement = <HTMLLIElement>document.getElementById(`liL2_${strKey}`);
    if (liLevel2 == null) return;
    liLevel2.className = liLevel2.className
      .replace(' subnoselected', '')
      .replace('subnoselected', '')
      .replace(' subselected', '')
      .replace('subselected', '')
      .replace('  ', ' ');
    liLevel2.className = `${liLevel2.className} subselected`;
    const objLi_a: HTMLAnchorElement = <HTMLAnchorElement>liLevel2.firstChild;

    objLi_a.className = objLi_a.className
      .replace(' subnoselected', '')
      .replace('subnoselected', '')
      .replace(' subselected', '')
      .replace('subselected', '')
      .replace('  ', ' ');
    objLi_a.className = `${objLi_a.className} subselected`;
    if (liLevel2.parentElement == null) {
      const strMsg = Format('根据区域Id:{0}的结点获取界面结点出错！(父结点为null)', strKey);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (liLevel2.parentElement.parentElement == null) {
      const strMsg = Format('根据区域Id:{0}的结点获取界面结点出错！(父结点的父结点为null)', strKey);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //let liLevel1: HTMLLIElement = <HTMLLIElement>liLevel2.parentElement?.parentElement;
    //let strViewId = liLevel1.id.substring(5);//.getAttribute("viewId");
    console.log('strViewId', strViewId);
    //let strState = liLevel2.getAttribute("state");
    ViewInfoCRUD_EditEx.SetSubNoSelected4All(strKey);
    console.log('regionId:(In sub_Click)', strKey);
    ViewInfoCRUD_EditEx.strRegionId = strKey;
    ViewInfoCRUD_EditEx.strViewId = strViewId;

    ViewInfoCRUD_EditEx.ShowViewRegionEdit(strKey, strViewId);
    console.log(strKey);
  }
  public static async ShowViewRegionEdit(strRegionId: string, strViewId: string) {
    const viewRegionStore = useviewRegionStore();
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
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
          '../RegionManage/EditRegionFldsCRUD?regionId={0}&Op=ViewEdit',
          strRegionId,
        );
        break;
      case enumRegionType.QueryRegion_0001:
        iRegionEdit.src = Format(
          '../RegionManage/QryRegionFldsCRUD?regionId={0}&Op=ViewEdit',
          strRegionId,
        );
        break;
      case enumRegionType.DetailRegion_0006:
        iRegionEdit.src = Format(
          '../RegionManage/DetailRegionFldsCRUD?regionId={0}&Op=ViewEdit',
          strRegionId,
        );
        break;
      case enumRegionType.FeatureRegion_0008:
        iRegionEdit.src = Format(
          '../RegionManage/FeatureRegionFldsCRUD?regionId={0}&viewId={1}&Op=ViewEdit',
          strRegionId,
          strViewId,
        );
        break;
      case enumRegionType.ExcelExportRegion_0007:
        iRegionEdit.src = Format(
          '../RegionManage/ExcelExportRegionFldsCRUD?regionId={0}&Op=ViewEdit',
          strRegionId,
        );
        break;
      case enumRegionType.ListRegion_0002:
        iRegionEdit.src = Format(
          '../RegionManage/DGRegionFldsCRUD?regionId={0}&Op=ViewEdit',
          strRegionId,
        );
        break;
    }
  }

  public static ShowKey(strKeyId: string) {
    console.log(strKeyId);
    alert(strKeyId);
  }
  /*
   * 区域类型Id (Used In Clear())
   */
  public set RegionTypeId_q(value: string) {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'select', 'ddlRegionTypeId_q');
    const strId = 'ddlRegionTypeId_q';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /*
   * 区域类型Id (Used In PutDataToClass())
   */
  public get RegionTypeId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlRegionTypeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  public async btnShowQuery_Click() {
    // const divQuery = <HTMLDivElement>document.getElementById('divQuery');
    const bolIsDisplay = divVarSet.refDivQuery.style.display;
    const iBtn = <HTMLElement>document.getElementById('iBtn');
    if (bolIsDisplay == 'none') {
      divVarSet.refDivQuery.style.display = '';
      iBtn.className = 'ico_up';
    } else {
      divVarSet.refDivQuery.style.display = 'none';
      iBtn.className = 'ico_down';
    }

    //await this.BindTr_ViewRegion(ViewInfoCRUD_EditEx.strDivName4Tree, ViewInfoCRUD_EditEx.SetOnClick);
  }
  /** 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    this.BindViewRegion(ViewInfoCRUD_EditEx.divUlName4Menu);

    //await this.BindTr_ViewRegion(ViewInfoCRUD_EditEx.strDivName4Tree, ViewInfoCRUD_EditEx.SetOnClick);
  }
  public async BindViewRegion(strUlRoot: HTMLDivElement) {
    console.log(strUlRoot);
    const UlParent: HTMLUListElement = document.getElementById('ulPARENT') as HTMLUListElement;
    UlParent.innerText = '';
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strCmPrjId = ViewInfoCRUD_EditEx.CmPrjIdCache;
    // const divQuery0 = GetUniDivInDoc('divQuery_Main');
    const objViewInfo_Cond = await this.CombineViewInfoCondition();
    const lblCondition = <HTMLLabelElement>document.getElementById('lblCondition');
    lblCondition.innerText = '';
    lblCondition.className = 'ml-1';
    const spnCondition = <HTMLLabelElement>document.createElement('span');
    spnCondition.innerText = '条件:';
    spnCondition.className = 'text-secondary  font-weight-bold';
    lblCondition.appendChild(spnCondition);

    const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
    if (objCMProject == null) {
      const strMsg = Format('CM项目Id:[{0}]，没有相应的CM项目，请检查！', strCmPrjId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    ViewRegion_AddRelaEx.strApplicationTypeIdCache = objCMProject.applicationTypeId;

    const spnCmPrjName = <HTMLLabelElement>document.createElement('span');
    spnCmPrjName.innerText = objCMProject.cmPrjName;
    spnCmPrjName.className = 'text-primary font-weight-bold';

    lblCondition.appendChild(spnCmPrjName);
    if (IsNullOrEmpty(qryVarSet.funcModuleAgcId_q) == false) {
      const spnFuncModule = <HTMLLabelElement>document.createElement('span');
      const objFuncModule = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
        qryVarSet.funcModuleAgcId_q,
        strPrjId,
      );
      if (objFuncModule == null) {
        const strMsg = Format(
          '在项目:[{0}]中，模块Id:[{1}]没有相应模块，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          qryVarSet.funcModuleAgcId_q,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      spnFuncModule.innerText = objFuncModule.funcModuleName;
      spnFuncModule.className = 'ml-2 text-primary font-weight-bold';
      lblCondition.appendChild(spnFuncModule);
    }
    let arrViewInfoObjLst = await ViewInfo_GetObjLstAsync(objViewInfo_Cond);
    //let arrViewInfoObjList = await ViewInfo_GetObjLstCache(strPrjId);
    arrViewInfoObjLst = arrViewInfoObjLst
      .filter((x) => x.prjId == strPrjId)
      .sort(ViewInfoEx_SortFunByViewName);
    // const arrViewRegionRelaObjLst_Sel: Array<clsViewRegionRelaEN> = [];
    const arrViewRegionRelaObjLst0 = await ViewRegionRela_GetObjLstCache(
      clsPrivateSessionStorage.cmPrjId,
    );
    let arrViewRegionRelaExObjLst = arrViewRegionRelaObjLst0.map(ViewRegionRelaEx_CopyToEx);
    arrViewRegionRelaExObjLst = arrViewRegionRelaExObjLst
      //.filter(x => x.cmPrjId == strCmPrjId)
      .sort(ViewRegionRelaEx_SortFunByClassName);

    // const arrList: Array<string> = new Array<string>();

    if (arrViewInfoObjLst.length == 0) {
      const strMsg = `获取的界面数为0.当前CM工程Id:${strCmPrjId},当前工程Id:${strPrjId}`;
      console.error(strMsg);
      throw strMsg;
    }

    const LiHeader: HTMLLIElement = document.createElement('li');
    LiHeader.classList.add('menu-header');
    LiHeader.classList.add('menu-item');

    const Span1: HTMLSpanElement = document.createElement('span');
    Span1.innerText = '界面列表:';
    const btnAdd: HTMLButtonElement = clsPubFun4Button.GetButton_Add(
      "btn_Click('AddNewRecordWithMaxId')",
    );
    const btnUpdate: HTMLButtonElement = clsPubFun4Button.GetButton_Update();
    const btnDelete: HTMLButtonElement =
      clsPubFun4Button.GetButton_Delete("btn_Click('DeleteView')");
    //btnAdd.classList.add("ml-1");
    //btnUpdate.classList.add("ml-1");
    //btnDelete.classList.add("ml-1");
    LiHeader.appendChild(Span1);
    LiHeader.appendChild(btnAdd);
    LiHeader.appendChild(btnUpdate);
    LiHeader.appendChild(btnDelete);

    UlParent.appendChild(LiHeader);
    for (const objMainMenuRow of arrViewInfoObjLst) {
      //if (objMainMenuRow.inUse == false) continue;
      const Li1: HTMLLIElement = document.createElement('li');

      Li1.classList.add('menu-item');
      //Li1.innerText = "主菜单";
      const A1: HTMLAnchorElement = document.createElement('a');
      A1.href = '';
      (function (strViewId1) {
        A1.onclick = function () {
          ViewInfoCRUD_EditEx.main_Click(strViewId1);
        };
      })(objMainMenuRow.viewId);
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = objMainMenuRow.viewName;
      I1.classList.add('icon-font');
      I1.classList.add('icon-right');
      A1.appendChild(I1);
      A1.appendChild(Span1);
      Li1.appendChild(A1);

      const Ul1: HTMLUListElement = document.createElement('ul');
      Ul1.classList.add('menu-item-child');
      Ul1.style.display = 'none';

      await this.BindSubMenu(
        arrViewRegionRelaExObjLst,
        objMainMenuRow.viewId,
        objMainMenuRow.mainTabId,
        Ul1,
      );
      Li1.appendChild(Ul1);

      UlParent.appendChild(Li1);
    }

    //6、把菜单HTML菜单串显示到界面上。
    //return strHtml.ToString();
  }

  private async BindSubMenu(
    arrViewRegionRelaObjLst: Array<clsViewRegionRelaENEx>,
    strViewId: string,
    strMainTabId: string,
    Ul1: HTMLUListElement,
  ) {
    const viewInfoStore = useviewInfoStore();
    const viewRegionStore = useviewRegionStore();
    // let intSubMenuRow = 0;
    const arrViewRegionRelaObjLst_Sel = arrViewRegionRelaObjLst.filter(
      (x) => x.viewId == strViewId,
    );
    let arrViewRegionRelaExObjLst = arrViewRegionRelaObjLst_Sel.map(ViewRegionRelaEx_CopyToEx);
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      strMainTabId,
      clsPrivateSessionStorage.cmPrjId,
    );
    for (const objInFor of arrViewRegionRelaExObjLst) {
      await ViewRegionRelaEx_FuncMap4OrderNum(objInFor);
    }
    arrViewRegionRelaExObjLst = arrViewRegionRelaExObjLst.sort(
      ViewRegionRelaEx_SortFunByOrderNumber,
    );
    for (const objSubMenuRow of arrViewRegionRelaExObjLst) {
      if (objSubMenuRow.inUse == false) continue;

      const strRegionId = objSubMenuRow.regionId;
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

      let strRegionName = objViewRegion.regionName;
      if (IsNullOrEmpty(objViewRegion.clsName) == false) {
        strRegionName = objViewRegion.clsName;
      }
      if (strRegionName.length > 20) {
        strRegionName = `${strRegionName.substr(0, 25)}...`;
      }

      // intSubMenuRow++;

      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      if (objPrjTab != null) {
        Span1.innerText = strRegionName.replace(objPrjTab.tabName, '[表名]');
      } else {
        Span1.innerText = strRegionName;
      }
      I1.className = 'icon-font';
      const strLinkFile = await this.GetLinkFile(strRegionId, strViewId);
      let strHref = `${strLinkFile}`;

      strHref = strHref.replace('//', '/');
      A1.id = Format('a_{0}_{1}', strViewId, strRegionId);
      A1.href = strHref;
      A1.className = 'subnoselected';
      //A1.href = "#";
      //A1.href = 'javascript:';
      (function (strRegionId1, strViewId1) {
        A1.onclick = function () {
          ViewInfoCRUD_EditEx.sub_Click(strRegionId1, strViewId1);
        };
      })(strRegionId, strViewId);
      //A1.onclick = (function () {
      //    ViewInfoCRUD_EditEx.sub_Click2();
      //});

      A1.appendChild(I1);
      A1.appendChild(Span1);

      const img_Delete = clsPubFun4Button.GetImage_DeleteNoCommand();
      img_Delete.height = 16;
      img_Delete.width = 16;
      img_Delete.className = 'ml-1';
      (function (strViewId1, strRegionId1) {
        img_Delete.onclick = function () {
          ViewInfoCRUD_EditEx.btnDeleteRegion_Click(strViewId1, strRegionId1);
        };
      })(strViewId, strRegionId);
      const img_Update = clsPubFun4Button.GetImage_UpdateNoCommand();

      img_Update.height = 16;
      img_Update.width = 16;
      img_Update.className = 'ml-1';

      (function (strRegionId1) {
        img_Update.onclick = function () {
          ViewInfoCRUD_EditEx.btnUpdateRegion_Click(strRegionId1);
        };
      })(strRegionId);

      A1.appendChild(img_Delete);
      A1.appendChild(img_Update);

      Li1.appendChild(A1);

      //strHtml.Append("<li>\n");
      //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{1}</span></a>\n",
      //    objSubMenuRow.linkFile, objSubMenuRow.menuName);
      //strHtml.Append("</li>\n");
      Ul1.appendChild(Li1);
    }

    {
      // intSubMenuRow++;
      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      const btnAddNew = ViewInfoCRUD_EditEx.GetButton_AddNew(strViewId);
      const btnAddRela = ViewInfoCRUD_EditEx.GetButton_AddRela(strViewId);
      A1.appendChild(btnAddNew);
      A1.appendChild(btnAddRela);
      //const I1: HTMLElement = document.createElement("i");
      //const Span1: HTMLSpanElement = document.createElement("span");
      //const objViewInfo = await V1iewInfo_GetObjByViewIdCache(strViewId, clsPrivateSessionStorage.currSelPrjId);
      //Span1.innerText = Format("生成:{0}", objViewInfo.viewName);
      //I1.className = "icon-font";
      //let strLinkFile0 = Format("../PrjInterface/GeneViewCode?viewId={0}&Op=ViewEdit", strViewId);
      //let strHref = `${strLinkFile0}`;

      //strHref = strHref.replace("//", "/");
      //A1.href = strHref;
      ////(function (strRegionId1, strViewId1) {
      ////    A1.onclick = (function () {
      ////        ViewInfoCRUD_EditEx.sub_Click(strRegionId1, strViewId1);
      ////    });
      ////})(strRegionId, strViewId);
      //A1.appendChild(I1);
      //A1.appendChild(Span1);
      Li1.appendChild(A1);
      //strHtml.Append("<li>\n");
      //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{1}</span></a>\n",
      //    objSubMenuRow.linkFile, objSubMenuRow.menuName);
      //strHtml.Append("</li>\n");
      Ul1.appendChild(Li1);
    }
    {
      // intSubMenuRow++;
      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
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
      Span1.innerText = Format('生成:{0}', objViewInfo.viewName);
      I1.className = 'icon-font';
      const strLinkFile0 = Format('../PrjInterface/GeneViewCode?viewId={0}&Op=ViewEdit', strViewId);
      let strHref = `${strLinkFile0}`;

      strHref = strHref.replace('//', '/');
      A1.href = strHref;
      //(function (strRegionId1, strViewId1) {
      //    A1.onclick = (function () {
      //        ViewInfoCRUD_EditEx.sub_Click(strRegionId1, strViewId1);
      //    });
      //})(strRegionId, strViewId);
      A1.appendChild(I1);
      A1.appendChild(Span1);
      Li1.appendChild(A1);
      //strHtml.Append("<li>\n");
      //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{1}</span></a>\n",
      //    objSubMenuRow.linkFile, objSubMenuRow.menuName);
      //strHtml.Append("</li>\n");
      Ul1.appendChild(Li1);
    }
  }

  /*
   * 重新转向本项目新的Url地址
   */
  public static GetButton_AddNew(strViewId: string): HTMLButtonElement {
    const btn1: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btn1.className = 'btn btn-sm';
    btn1.title = '新添区域';
    btn1.innerText = '添区域';
    btn1.className = 'btn btn-sm';
    (function (strViewId1) {
      btn1.onclick = function () {
        ViewInfoCRUD_EditEx.btnAddNewRegion_Click(strViewId1);
      };
    })(strViewId);

    return btn1;
  }

  public static GetButton_AddRela(strViewId: string): HTMLButtonElement {
    const btn1: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btn1.className = 'btn btn-sm';
    btn1.title = '引用相关区域';
    btn1.innerText = '引用区域';
    btn1.className = 'btn btn-sm';
    (function (strViewId1) {
      btn1.onclick = function () {
        ViewInfoCRUD_EditEx.btnAddRelaRegion_Click(strViewId1);
      };
    })(strViewId);

    return btn1;
  }
  public async GetLinkFile(strRegionId: string, strViewId: string) {
    const viewRegionStore = useviewRegionStore();
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    //let iRegionEdit: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("iRegionEdit");
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
        return Format(
          '../RegionManage/EditRegionFldsCRUD?regionId={0}&Op=ViewEdit&viewId={1}',
          strRegionId,
          strViewId,
        );
        break;
      case enumRegionType.QueryRegion_0001:
        return Format(
          '../RegionManage/QryRegionFldsCRUD?regionId={0}&Op=ViewEdit&viewId={1}',
          strRegionId,
          strViewId,
        );
        break;
      case enumRegionType.DetailRegion_0006:
        return Format(
          '../RegionManage/DetailRegionFldsCRUD?regionId={0}&Op=ViewEdit&viewId={1}',
          strRegionId,
          strViewId,
        );
        break;
      case enumRegionType.FeatureRegion_0008:
        return Format(
          '../RegionManage/FeatureRegionFldsCRUD?regionId={0}&viewId={1}&Op=ViewEdit',
          strRegionId,
          strViewId,
        );
        break;
      case enumRegionType.ExcelExportRegion_0007:
        return Format(
          '../RegionManage/ExcelExportRegionFldsCRUD?regionId={0}&Op=ViewEdit&viewId={1}',
          strRegionId,
          strViewId,
        );
        break;
      case enumRegionType.ListRegion_0002:
        return Format(
          '../RegionManage/DGRegionFldsCRUD?regionId={0}&Op=ViewEdit&viewId={1}',
          strRegionId,
          strViewId,
        );
        break;
    }
  }
  public async BindUl_CmPrjId(strPrjId: string) {
    const arrCMProject = await CMProjectEx_GetObjLstByPrjIdCache(strPrjId);
    const ulCmPrjId = <HTMLUListElement>document.getElementById('ulCmPrjId');
    for (const objCMProject of arrCMProject) {
      //<li><a href="javascript:;" data - val="molv" title = "墨绿" > 墨绿 < /a></li >*@

      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      A1.id = Format('a_{0}', objCMProject.cmPrjId);
      A1.href = 'javascript:;';
      A1.setAttribute('data-val', objCMProject.cmPrjId);
      (function (strCmPrjId) {
        A1.onclick = function () {
          ViewInfoCRUD_EditEx.ChangeCmPrjId(strCmPrjId);
        };
      })(objCMProject.cmPrjId);

      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = objCMProject.cmPrjName;
      //I1.className = "icon-font";
      A1.appendChild(Span1);
      Li1.appendChild(A1);
      ulCmPrjId.appendChild(Li1);
    }
  }
  public static async ChangeCmPrjId(strCmPrjId: string) {
    if (ViewInfoCRUD_EditEx.CmPrjIdCache == strCmPrjId) return;
    await UserDefaValue_LocalEx_setUserDefaValue(
      '0005',
      clsPrivateSessionStorage.currSelPrjId,
      clsPubLocalStorage.userId,
      '默认CM工程',
      strCmPrjId,
    );
    ViewInfoCRUD_EditEx.CmPrjIdCache = strCmPrjId;
    const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
    if (objCMProject == null) {
      const strMsg = Format('CM项目Id:[{0}]，没有相应的CM项目，请检查！', strCmPrjId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const lblCurrCmPrjName = document.getElementById('lblCurrCmPrjName');
    if (lblCurrCmPrjName == null) {
      const strMsg = Format('Label:{0}不存在！', 'lblCurrCmPrjName');
      console.error(strMsg);
    } else {
      const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(
        objCMProject.applicationTypeId,
      );
      if (objApplicationType == null) {
        const strMsg = Format(
          '应用Id:[{0}]，没有相应的类型，请检查！',
          objCMProject.applicationTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      lblCurrCmPrjName.innerText = Format(
        '{0}({1})',
        objCMProject.cmPrjName,
        objApplicationType.applicationTypeSimName,
      );
    }
    const thisPage = ViewInfoCRUD.objPageCRUD;
    thisPage.BindInDiv(ViewInfoCRUD_EditEx.divUlName4Menu);
  }
  /** 删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
*/
  public async btnDeleteView_Click(strViewId: string) {
    const viewRegionStore = useviewRegionStore();
    try {
      if (IsNullOrEmpty(strViewId) == true) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      const responseBool = await ViewInfoEx_DelRecordEx(strViewId);
      if (responseBool == true) {
        viewRegionStore.delObjByPrjId(clsPrivateSessionStorage.currSelPrjId);
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);

        this.BindViewRegion(ViewInfoCRUD_EditEx.divUlName4Menu);
      }
    } catch (e: any) {
      const strMsg = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
*/
  public static async btnDeleteRegion_Click(strViewId: string, strRegionId: string) {
    const viewInfoStore = useviewInfoStore();
    try {
      if (IsNullOrEmpty(strRegionId) == true) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      const responseInt = await ViewRegionRelaEx_DeleteByViewIdAndRegionId(strViewId, strRegionId);
      if (responseInt > 0) {
        viewInfoStore.delObj(strViewId);
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
        const thisPage = ViewInfoCRUD.objPageCRUD;
        thisPage.BindInDiv(ViewInfoCRUD_EditEx.divUlName4Menu);
      }
    } catch (e: any) {
      const strMsg = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public static async btnUpdateRegion_Click(strRegionId: string) {
    try {
      if (IsNullOrEmpty(strRegionId) == true) {
        alert('请选择需要修改的记录！');
        return '';
      }
      const objPage: ViewInfoCRUD_EditEx = new ViewInfoCRUD_EditEx();
      //RegionId_Static.value = strRegionId;

      //ViewRegion_Edit_Sim.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;
      const objViewRegion_Edit_SimEx = new ViewRegion_Edit_SimEx('ViewRegion_Edit_SimEx', objPage);
      objViewRegion_Edit_SimEx.divName4Edit = 'divEdit_Region';
      objViewRegion_Edit_SimEx.btnUpdateRecord_Click();
    } catch (e: any) {
      const strMsg = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
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
  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public SortColumn(sortColumnKey: string, sortDirection: string): void {
    console.log(sortColumnKey, sortDirection);
  }
}
