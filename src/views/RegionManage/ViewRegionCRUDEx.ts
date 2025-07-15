import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
// import { ViewRegion_MultiCreateEx } from './ViewRegion_MultiCreateEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { ViewRegionCRUD } from '@/viewsBase/RegionManage/ViewRegionCRUD';
import { UserDefaValue_LocalEx_setUserDefaValue } from '@/ts/L3ForWApiEx/UserManage/clsUserDefaValue_LocalExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { ViewInfoEx_BindDdl_ApplicationTypeIdExCache } from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  ViewRegionEx_DeleteByRegionIdEx,
  ViewRegionEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';

import { ViewRegion_MultiCreateEx } from '@/views/RegionManage/ViewRegion_MultiCreateEx';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { CMProjectEx_BindDdl_CmPrjIdInDivCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  BindTabByList,
  divVarSet,
  refViewRegion_Edit,
  refViewRegion_List,
  viewVarSet,
} from '@/views/RegionManage/ViewRegionVueShare';
import ViewRegion_EditEx from '@/views/RegionManage/ViewRegion_EditEx';

/** ViewRegionCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewRegionCRUDEx extends ViewRegionCRUD implements IShowList {
  //public static strCmPrjId: string;
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvViewRegionBy=  "regionId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 15;
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
      case 'ViewRegion':
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
    let objPage_MultiCreate;
    let objPage: ViewRegionCRUDEx;
    if (ViewRegionCRUD.objPageCRUD == null) {
      ViewRegionCRUD.objPageCRUD = new ViewRegionCRUDEx();
      objPage = <ViewRegionCRUDEx>ViewRegionCRUD.objPageCRUD;
    } else {
      objPage = <ViewRegionCRUDEx>ViewRegionCRUD.objPageCRUD;
    }
    const objPageEdit = new ViewRegion_EditEx('ViewRegion_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetTabId': //自定义功能:设置表
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refViewRegion_Edit.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refViewRegion_Edit.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddRelaViewRegion': //自定义功能
        objPage_MultiCreate = new ViewRegion_MultiCreateEx('ViewRegion_MultiCreateEx', objPage);
        objPage_MultiCreate.divName4Edit = 'divEdit_Region';
        objPage_MultiCreate.btnAddNewRegion_Click();
        break;

      case 'SetFieldValue': //自定义功能
        //objPage.btnSetCmPrjId_Click();

        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
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
        AccessBtnClickDefault(strCommandName, 'ViewRegionCRUDEx.btn_Click');

        break;
    }
  }

  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //vsPrjIdCache = clsPubVar.CurrSelPrjId;// "0005";

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      // const objCMProject_Cond = new clsCMProjectEN(); //功能区域
      const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
      await CMProjectEx_BindDdl_CmPrjIdInDivCache(
        divVarSet.refDivFunction,
        'ddlCmPrjId_SetFldValue',
        strPrjId,
      );

      //if (IsNullOrEmpty(strCmPrjId) == false) {
      //    this.cmPrjId_q = strCmPrjId;
      //}

      viewVarSet.sortViewRegionBy = 'regionId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ViewRegion4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    await this.SetDdl_CmPrjId(); //查询区域
    //if (IsNullOrEmpty(ViewRegionCRUDEx.strCmPrjId) == false) {
    //    this.cmPrjId_q = ViewRegionCRUDEx.strCmPrjId;
    //}
    await this.SetDdl_ApplicationTypeIdEx(); //查询区域
    // await this.SetDdl_RegionTypeIdInDiv(); //查询区域
    // await this.SetDdl_TabIdInDiv(clsPrivateSessionStorage.cmPrjId); //查询区域
    // await this.SetDdl_PageDispModeIdInDiv(); //查询区域
    // await this.SetDdl_ContainerTypeIdInDiv(); //查询区域
  }
  /** 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId; // this.cmPrjId_q;
    if (IsNullOrEmpty(strCmPrjId) == true) {
      //alert("请选择一个CM工程");
      console.log('请选择一个CM工程');
      //$('#ddlCmPrjId_q').focus();
      //return;
    } else {
      //ViewRegionCRUD.CmPrjIdCache = strCmPrjId;

      UserDefaValue_LocalEx_setUserDefaValue(
        '0005',
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
        '默认CM工程',
        strCmPrjId,
      );
    }
    this.SetCurrPageIndex(1);
    await this.BindGv_ViewRegion4Func(divVarSet.refDivList);
  }
  public async SetDdl_CmPrjId() {
    // const objCMProject_Cond: clsCMProjectEN = new clsCMProjectEN(); //查询区域
    await CMProjectEx_BindDdl_CmPrjIdInDivCache(
      divVarSet.refDivQuery,
      'ddlCmPrjId_q',
      clsPrivateSessionStorage.currSelPrjId,
    ); //查询区域
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[applicationTypeId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
  /// </summary>
  public async SetDdl_ApplicationTypeIdEx() {
    await ViewInfoEx_BindDdl_ApplicationTypeIdExCache('ddlApplicationTypeId_q'); //查询区域
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrViewRegionExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrViewRegionExObjLst: Array<clsViewRegionENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsViewRegionEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrViewRegionExObjLst) {
        objInFor.prjId = clsPrivateSessionStorage.currSelPrjId;
        await ViewRegionEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 显示ViewRegion对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrViewRegionExObjLst:需要绑定的对象列表
   **/
  public async BindTab_ViewRegion4Func(
    divContainer: HTMLDivElement,
    arrViewRegionExObjLst: Array<clsViewRegionENEx>,
  ) {
    // const strThisFuncName = this.BindTab_ViewRegion4Func.name;
    // const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionEN.con_RegionId,
        sortBy: clsViewRegionEN.con_RegionId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionEN.con_RegionName,
        sortBy: clsViewRegionEN.con_RegionName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionENEx.con_ReferNum,
        sortBy: clsViewRegionENEx.con_ReferNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '引用数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionENEx.con_RegionTypeSimName,
        sortBy: 'regionTypeSimName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionEN.con_ColNum,
        sortBy: clsViewRegionEN.con_ColNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '列数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionENEx.con_ContainerTypeName,
        sortBy: 'containerTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '容器类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionENEx.con_PageDispModeName,
        sortBy: 'pageDispModeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '显示模式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },

      {
        fldName: clsViewRegionENEx.con_InOutTypeName,
        sortBy: 'inOutTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'In/Out',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionEN.con_ClsName,
        sortBy: clsViewRegionEN.con_ClsName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '类名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionENEx.con_TabName,
        sortBy: 'tabName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewRegionEN.con_KeyId4Test,
        sortBy: 'keyId4Test',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '测试关键字',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },

      {
        fldName: clsViewRegionEN.con_UpdDate,
        sortBy: clsViewRegionEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    await this.ExtendFldFuncMap(arrViewRegionExObjLst, arrDataColumn);
    if (refViewRegion_List.value != null) {
      await BindTabByList(arrViewRegionExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_ViewRegion4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrViewRegionExObjLst,
        arrDataColumn,
        clsViewRegionEN.con_RegionId,
        this,
      );
    }

    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrRegionId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    const viewRegionStore = useviewRegionStore();
    try {
      for (const strRegionId of arrRegionId) {
        const returnBool = await ViewRegionEx_DeleteByRegionIdEx(
          strRegionId,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (returnBool == true) {
          viewRegionStore.delObj(strRegionId);
        } else {
          const strInfo = Format('删除记录不成功!');
          //显示信息框
          alert(strInfo);
          continue;
        }
      }
      console.log('完成DelMultiRecord!');
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

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'referNum|Ex':
        viewVarSet.sortViewRegionBy = `vViewRegionReferNum|ReferNum ${sortDirection}|ViewRegion.RegionId = vViewRegionReferNum.RegionId`;
        break;
      case 'regionTypeSimName|Ex':
        viewVarSet.sortViewRegionBy = `RegionType|RegionTypeSimName ${sortDirection}|ViewRegion.RegionTypeId = RegionType.RegionTypeId`;
        break;
      case 'containerTypeName|Ex':
        viewVarSet.sortViewRegionBy = `GCContainerType|ContainerTypeName ${sortDirection}|ViewRegion.ContainerTypeId = GCContainerType.ContainerTypeId`;
        break;
      case 'pageDispModeName|Ex':
        viewVarSet.sortViewRegionBy = `PageDispMode|PageDispModeName ${sortDirection}|ViewRegion.PageDispModeId = PageDispMode.PageDispModeId`;
        break;
      case 'inOutTypeName|Ex':
        viewVarSet.sortViewRegionBy = `InOutType|InOutTypeName ${sortDirection}|ViewRegion.InOutTypeId = InOutType.InOutTypeId`;
        break;
      case 'tabName|Ex':
        viewVarSet.sortViewRegionBy = `vPrjTab_Sim|TabName ${sortDirection}|ViewRegion.TabId = vPrjTab_Sim.TabId`;
        break;
      default:
        viewVarSet.sortViewRegionBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ViewRegion4Func(this.thisDivList);
  }
}
