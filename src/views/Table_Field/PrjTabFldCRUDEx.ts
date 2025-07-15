import { Ref } from 'vue';
import { message } from 'ant-design-vue';
import { DnPath_SelEx } from '../AIModule/DnPath_SelEx';
import FieldTab4CodeConv_EditEx from './FieldTab4CodeConv_EditEx';
import FieldTab_EditEx from './FieldTab_EditEx';

import PrjTabFld_EditEx from './PrjTabFld_EditEx';
import { SetDispUnitEx } from './SetDispUnitEx';
import { PrjTabFldCRUD } from '@/viewsBase/Table_Field/PrjTabFldCRUD';
import { clsPubFun4Visible } from '@/ts/FunClass/clsPubFun4Visible';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { SqlWApi_GetColumnObjList, SqlWApi_IsExistTable } from '@/ts/FunClass/SqlWApi';
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
import { clsvDnPath_SimENEx } from '@/ts/L0Entity/AIModule/clsvDnPath_SimENEx';
import { clsColumns } from '@/ts/L0Entity/clsColumns';
import { enumSQLDSType } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { clsSqlViewRelaTabEN } from '@/ts/L0Entity/SqlViewMan/clsSqlViewRelaTabEN';
import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { AutoGeneCode_GenNewTabInSQL } from '@/ts/L3ForWApiEx/GeneCode/AutoGeneCodeWApi';
import { SqlViewRelaTab_func } from '@/ts/L3ForWApi/SqlViewMan/clsSqlViewRelaTabWApi';
import { DataTypeAbbr_GetObjByDataTypeIdCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import {
  FieldTab_AddNewRecordWithReturnKeyAsync,
  FieldTab_GetFirstIDAsync,
  FieldTab_GetMaxStrIdByPrefixAsync,
  FieldTab_GetObjByFldIdAsync,
  FieldTab_GetUniCondStr,
} from '@/ts/L3ForWApi/Table_Field/clsFieldTabWApi';
import {
  FieldType_BindDdl_FieldTypeIdInDivCache,
  FieldType_GetObjLstCache,
} from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import { FldOperationType_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsFldOperationTypeWApi';
import { PrimaryType_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsPrimaryTypeWApi';
import {
  PrjTabFld_AddNewRecordAsync,
  PrjTabFld_DownMoveAsync,
  PrjTabFld_GetObjBymIdAsync,
  PrjTabFld_GetObjBymIdCache,
  PrjTabFld_GetObjLstBymIdLstAsync,
  PrjTabFld_GetRecCountByCondAsync,
  PrjTabFld_GoBottomAsync,
  PrjTabFld_GoTopAsync,
  PrjTabFld_ReFreshCache,
  PrjTabFld_ReOrderAsync,
  PrjTabFld_UpdateRecordAsync,
  PrjTabFld_UpMoveAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

import { DataNodeEx_GetConnectedNodeByTabId } from '@/ts/L3ForWApiEx/AIModule/clsDataNodeExWApi';
import {
  vDnPath_SimEx_CopyToEx,
  vDnPath_SimEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/AIModule/clsvDnPath_SimExWApi';
import { TabCheckResultEx_DeleteErrorResult } from '@/ts/L3ForWApiEx/LogManage/clsTabCheckResultExWApi';
import {
  SqlViewEx_CreateView4Sql,
  SqlViewEx_FieldAnalysis,
  SqlViewEx_GeneSqlView,
  SqlViewEx_GetObjByRelaTabIdCache,
  SqlViewEx_GetRelaTabIdBySqlViewIdCache,
  SqlViewEx_GetSqlViewIdByTabIdCache,
  SqlViewEx_ImportSqlViewBySqlViewName,
  SqlViewEx_ImportSqlViewFromSqlServer,
} from '@/ts/L3ForWApiEx/SqlViewMan/clsSqlViewExWApi';
import { SqlViewFldEx_GetObjLstBySqlViewIdCache } from '@/ts/L3ForWApiEx/SqlViewMan/clsSqlViewFldExWApi';
import { DataTypeAbbrEx_GetDataTypeIdByName } from '@/ts/L3ForWApiEx/SysPara/clsDataTypeAbbrExWApi';
import { FieldTabEx_AddNewRec } from '@/ts/L3ForWApiEx/Table_Field/clsFieldTabExWApi';
import {
  PrjTabEx_AlterTab4AddField,
  PrjTabEx_AlterTab4DropColumn,
  PrjTabEx_AlterTab4UpdateField,
  PrjTabEx_SetFldOrderNum4ViewByRelaTabId,
  PrjTabEx_SetUpdDate,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import {
  PrjTabFldEx_AddNewRec,
  PrjTabFldEx_CheckTabFldsUp,
  PrjTabFldEx_CopyToPrjTab,
  PrjTabFldEx_DelRecordEx,
  PrjTabFldEx_FuncMapByFldName,
  PrjTabFldEx_FuncMap_FldNameEx,
  PrjTabFldEx_GetDnPath,
  PrjTabFldEx_GetObjExLstByPagerAsync,
  PrjTabFldEx_MoveRecTo,
  PrjTabFldEx_ReplaceFldName,
  PrjTabFldEx_SetNewCaption,
  PrjTabFldEx_SynchFieldFromColumnObj,
  PrjTabFldEx_isNeedAddConvFldName,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { vFieldTab_SimEx_BindDdl_FldIdInDivExCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import {
  vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache,
  vPrjTab_SimEx_func,
  vPrjTab_SimEx_GetObjByTabIdCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import {
  GetButtonObjInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  getTdObjByIdInDivObj,
  getTrObjByIdInDivObj,
  HideButtonInDivObj,
  SetCheckedItem4KeyId,
  SetLabelHtmlByIdInDivObj,
  ShowButtonInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ObjectAssign, Redirect } from '@/ts/PubFun/clsCommFunc4Web';

import { DnPath_GetObjByDnPathIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnPathWApi';
import { vDnPath_Sim_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsvDnPath_SimWApi';
import { DnPathEx_CreateGraph4DnPathCache } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { css_FldDispUnitStyleEx_CreateDiv4FldDispUnit } from '@/ts/L3ForWApiEx/CssManage/clscss_FldDispUnitStyleExWApi';
import {
  AccessBindGvDefault,
  AccessBtnClickDefault,
  clsErrMsgBLEx,
  clsErrMsgENEx,
} from '@/ts/PubFun/clsErrMsgBLEx';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import {
  CombinePrjTabFldCondition,
  divVarSet,
  refPrjTabFld_Edit,
  TabId_Static,
  viewVarSet,
} from '@/views/Table_Field/PrjTabFldVueShare';
import {
  vFieldTab_Sim_GetNameByFldIdCache,
  vFieldTab_Sim_GetObjByFldIdCache,
  vFieldTab_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { refFieldTab_Edit } from '@/views/Table_Field/FieldTabVueShare';
import { PrjTabFld_Edit_ACEx } from '@/views/Table_Field/PrjTabFld_Edit_ACEx';

/** PrjTabFldCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjTabFldCRUDEx extends PrjTabFldCRUD implements IShowList {
  public static EditFieldTabRef: Ref<any>;
  /*  public static thisPage: PrjTabFldCRUDEx;*/

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
  public static ShowLst: (arrObjLst: Array<clsPrjTabFldENEx>) => Promise<void>;
  public static ShowMode = '';
  public static TabName_Static = '';
  public static TabIdStatic = '';
  public static mId4SetDnPath_Static = '';

  public static SqlDsTypeId_Static = '';
  public Op = '';
  public TabId = '';
  public mintPageSize = 80;
  //public static mstrSortvPrjTabFldBy=  "mId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return this.mintPageSize;
  }

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    const prjTabFldStore = usePrjTabFldStore();
    switch (strType) {
      case 'FieldTab':
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        //vFieldTab_Sim2_ReFreshThisCache()
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        break;
      case 'PrjTabFld':
        //alert('该类没有绑定该函数：[this.BindGv_vPrjTabFldCache]！');
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        break;
      case DnPath_SelEx.con_SetFldDnPathInTab:
        //alert(strPara);
        this.btnSubmitSetDnPath_Click(PrjTabFldCRUDEx.mId4SetDnPath_Static, strPara);
        break;
      case DnPath_SelEx.con_ClearFldDnPathInTab:
        //alert(strPara);
        this.btnSubmitClearDnPath_Click(PrjTabFldCRUDEx.mId4SetDnPath_Static);
        break;
      case clsFieldTab4CodeConvEN._CurrTabName:
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        break;
      case 'CheckConsistency':
        this.BindGv_PrjTabFld4Func_CheckConsistency(divVarSet.refDivList);
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
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btn_Click.name;

    let objPage: PrjTabFldCRUDEx;
    if (PrjTabFldCRUD.objPageCRUD == null) {
      PrjTabFldCRUD.objPageCRUD = new PrjTabFldCRUDEx();
      objPage = <PrjTabFldCRUDEx>PrjTabFldCRUD.objPageCRUD;
    } else {
      objPage = <PrjTabFldCRUDEx>PrjTabFldCRUD.objPageCRUD;
    }
    const objPageEdit = new PrjTabFld_Edit_ACEx('PrjTabFld_Edit_ACEx', objPage);
    console.log(objPageEdit);
    const objPage_FieldTabEdit: FieldTab_EditEx = new FieldTab_EditEx('FieldTab_EditEx', objPage);
    console.log(objPage_FieldTabEdit);

    const objPage_ConvFld: FieldTab4CodeConv_EditEx = new FieldTab4CodeConv_EditEx(
      'FieldTab4CodeConv_EditEx',
      objPage,
    );
    const objPage_Select: DnPath_SelEx = new DnPath_SelEx('DnPath_SelEx', objPage);
    const objPage_SetDispUnit: SetDispUnitEx = new SetDispUnitEx('SetDispUnitEx', objPage);

    if (IsNullOrEmpty(strKeyId) == true) {
      strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    }
    const strMsg = '';
    let strKeyId_p = '';
    let objPrjTabFld_p;
    let objPageEdit4Upd: PrjTabFld_EditEx;
    let objPrjTabFld;
    const strIsGeneProp = strKeyId;
    switch (strCommandName) {
      case 'RefreshList': //自定义功能:用于刷新列表
        objPage.btnRefreshList_Click();
        break;
      case 'SetInFldId': //自定义功能:设置用于扩展类
        objPage.btnSetInFldId_Click();
        break;
      case 'CancelInFld': //自定义功能:设置用于扩展类
        objPage.btnCancelInFld_Click();
        break;

      case 'TestDnPath': //自定义功能:测试路径
        strKeyId_p = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_p) == true) {
          const strMsg = `请选择一条需要设置结点路径的记录.`;

          alert(strMsg);
          return;
        }
        objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strKeyId_p));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (IsNullOrEmpty(objPrjTabFld.dnPathId) == true) {
          const strMsg = `请选择一条扩展类的记录.`;

          alert(strMsg);
          return;
        }
        if (IsNullOrEmpty(objPrjTabFld.keyId4Test) == true) {
          const strMsg = `该记录没有设置测试关键字.`;
          alert(strMsg);
          return;
        }

        PrjTabFldCRUDEx.mId4SetDnPath_Static = strKeyId_p;
        objPage_Select.btnSelectDnPath_Click(PrjTabFldCRUDEx.TabIdStatic);
        //objPage.btnTestDnPath_Click();
        break;
      case 'SetGeneProp':
        objPage.btnSetGeneProp_Click(strIsGeneProp);
        break;
      case 'SetIsForExtendClass': //自定义功能:设置用于扩展类
        objPage.btnSetIsForExtendClass_Click();
        break;
      case 'CancelIsForExtendClass': //自定义功能:设置用于扩展类
        objPage.btnCancelIsForExtendClass_Click();
        break;
      case 'SetFieldConv': //自定义功能:替换字段
        strKeyId_p = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_p) == true) {
          const strMsg = `请选择一条需要转换字段的记录.`;

          alert(strMsg);
          return;
        }
        objPrjTabFld_p = await PrjTabFld_GetObjBymIdCache(
          Number(strKeyId_p),
          PrjTabFldCRUDEx.TabIdStatic,
        );
        if (objPrjTabFld_p == null) return;
        objPage_ConvFld.btnUpdateRecord_Click(objPrjTabFld_p.fldId);

        break;

      case 'SubmitClearDnPath': //自定义功能:替换字段
        strKeyId_p = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_p) == true) {
          const strMsg = `请选择需要取消结点路径的记录.`;

          alert(strMsg);
          return;
        }
        objPage.btnSubmitClearDnPath_Click(strKeyId_p);
        break;
      case 'SetDefaDnPath': //自定义功能:替换字段
      case 'AutoSetDnPath': //自定义功能:替换字段
        strKeyId_p = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_p) == true) {
          const strMsg = `请选择一条需要设置结点路径的记录.`;

          alert(strMsg);
          return;
        }
        objPage.btnSetDefaDnPath_Click();
        break;
      case 'SetDispUnit': //自定义功能:替换字段
        strKeyId_p = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_p) == true) {
          const strMsg = `请选择一条需要设置显示单元的记录.`;

          alert(strMsg);
          return;
        }
        objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strKeyId_p));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (objPrjTabFld.isForExtendClass == false) {
          const strMsg = `请选择一条扩展类的记录.`;

          alert(strMsg);
          return;
        }
        PrjTabFldCRUDEx.mId4SetDnPath_Static = strKeyId_p;
        objPage_SetDispUnit.btnSetDispUnit_Click(Number(strKeyId_p), PrjTabFldCRUDEx.TabIdStatic);
        break;

      case 'SetDnPath': //自定义功能:替换字段
        strKeyId_p = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_p) == true) {
          const strMsg = `请选择一条需要设置结点路径的记录.`;

          alert(strMsg);
          return;
        }
        objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strKeyId_p));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (objPrjTabFld.isForExtendClass == false) {
          const strMsg = `请选择一条扩展类的记录.`;

          alert(strMsg);
          return;
        }
        PrjTabFldCRUDEx.mId4SetDnPath_Static = strKeyId_p;
        objPage_Select.btnSelectDnPath_Click(PrjTabFldCRUDEx.TabIdStatic);
        break;

      case 'GenNewTabInSQL': //自定义功能:替换字段
        objPage.btnGenNewTabInSQL_Click();
        break;
      case 'ReplaceFldName': //自定义功能:替换字段
        objPage.btnReplaceFldName_Click();
        break;
      case 'SetNewCaption': //自定义功能:修改标题
        objPage.btnSetNewCaption_Click();
        break;
      case 'SetFieldTypeId': //自定义功能:设置字段类型
        objPage.btnSetFieldTypeId_Click();
        break;
      case 'MoveRecTo': //自定义功能:设置次序
        objPage.btnMoveRecTo_Click(strKeyId);
        break;
      case 'CopyToPrjTab': //自定义功能:复制到表
        objPage.btnCopyToPrjTabClick();
        break;
      case 'SetFldOrderNum4View': //为视图设置序号
        objPage.btnSetFldOrderNum4View_Click();
        break;
      case 'CreateView4Sql': //建立视图4Sql
        objPage.btnCreateView4Sql_Click();
        break;
      case 'ImportSqlViewFromSqlServer': //导入SQL视图
        objPage.btnImportSqlViewFromSqlServer_Click();
        break;
      case 'Analysis': //分析字段
        objPage.btnAnalysis_Click();
        break;
      case 'SetClass4Tr': //返回
        objPage.btnSetClass4Tr_Click();
        break;
      case 'ReturnToPrjTabLst': //返回
        objPage.btnReturnToPrjTabLst_Click();
        break;
      case 'ReturnToMainTab': //返回
        objPage.btnReturnToMainTab_Click();
        break;

      case 'CheckConsistency': //查询记录
        objPage.btnCheckConsistency_Click();
        break;
      case 'EditTabFld': //查询记录
        refFieldTab_Edit.value.btnFieldTab_Edit_Click(strCommandName, strKeyId);
        // objPage.btnEditTabFld_Click();
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
        refPrjTabFld_Edit.value.btnPrjTabFld_Edit_Click(strCommandName, strKeyId);
        // objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        refPrjTabFld_Edit.value.btnPrjTabFld_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit4Upd = new PrjTabFld_EditEx('PrjTabFld_EditEx', objPage);

        objPageEdit4Upd.btnUpdateRecordInTab_Click(Number(strKeyId));
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'GoTop': //置顶记录
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabFldCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  public static async PrepareData4AutoComplete() {
    await PrimaryType_GetObjLstCache();
    await FieldType_GetObjLstCache();
    await FldOperationType_GetObjLstCache();
    //const aa = await PrimaryType_GetObjLstCache();
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // clsPrivateSessionStorage.tabId1 = '00050006';
    this.TabId = clsPrivateSessionStorage.tabId_Main;
    // 在此处放置用户代码以初始化页面
    try {
      //PrjTabFldCRUDEx.GetFieldTab();
      PrjTabFldCRUDEx.PrepareData4AutoComplete();
      //if (this.GetOp == "CheckConsistency" ) {
      //    await Main_PrjTab.ShowCurrItem("CheckConsistency", "");
      //}
      //else if (IsNullOrEmpty(this.GetOp) == true) {
      //    await Main_PrjTab.ShowCurrItem("PrjTabFldCRUD", "");
      //}
      //else {
      //    await Main_PrjTab.ShowCurrItem("PrjTabFldCRUD", "");
      //}

      const strTabId = await clsPubVar4Web.GetTabId(this.GetTabId);
      PrjTabFldCRUDEx.TabIdStatic = strTabId;
      const objvPrjTab_Sim = await vPrjTab_SimEx_GetObjByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objvPrjTab_Sim != null) {
        PrjTabFldCRUDEx.TabName_Static = objvPrjTab_Sim.tabName;
        PrjTabFldCRUDEx.SqlDsTypeId_Static = objvPrjTab_Sim.sqlDsTypeId;
      }
      TabId_Static.value = strTabId;

      await this.SetDdl_InFldIdInDiv(strTabId, clsPrivateSessionStorage.currSelPrjId); //绑定In字段，在功能区域
      //PrjTabFld_Edit.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      if (objvPrjTab_Sim?.sqlDsTypeId == enumSQLDSType.SqlView_02) {
        //HideDivInDiv(PrjTabFldCRUD.divFunction, "divReplaceFldName");
        //HideDivInDiv(PrjTabFldCRUD.divFunction, "divSetNewCaption");
        HideButtonInDivObj(divVarSet.refDivFunction, 'btnAddNewRecord');
        //HideButtonInDivObj((PrjTabFldCRUD.divFunction, "btnCopyRecord");
        HideButtonInDivObj(divVarSet.refDivFunction, 'btnUpdateRecord');
      }

      HideButtonInDivObj(divVarSet.refDivFunction, 'btnGenNewTabInSQL');

      if (IsNullOrEmpty(this.qsCurrTabId) == false) {
        ShowButtonInDivObj(divVarSet.refDivFunction, 'btnReturnToMainTab');
      } else {
        HideButtonInDivObj(divVarSet.refDivFunction, 'btnReturnToMainTab');
      }

      //const strPrjId = clsPrivateSessionStorage.currSelPrjId;  //定义条件字段
      await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
        divVarSet.refDivFunction,
        'ddlTabId_SetFldValue',
        clsPrivateSessionStorage.cmPrjId,
      ); //

      await FieldType_BindDdl_FieldTypeIdInDivCache(
        divVarSet.refDivFunction,
        'ddlFieldTypeId_SetFldValue',
      ); //

      viewVarSet.sortPrjTabFldBy = Format('{0} Asc', clsPrjTabFldEN.con_SequenceNumber);

      //const objPrjTab = await vPrjTab_Sim_GetObjByTabIdCache(TabId_Static.value, clsPrivateSessionStorage.currSelPrjId);
      //if (objPrjTab == null) return;
      //SetLabelHtmlByIdInDivObj(PrjTabFldCRUD.divFunction, "lblPrjTabFldList", Format("项目表:{0}({1})-表字段维护", objPrjTab.tabName, objPrjTab.tabId));
      //2、显示无条件的表内容在GridView中
      let strMsg;

      switch (this.GetOp) {
        case 'CheckConsistency':
          this.btnCheckConsistency_Click();
          break;
        case 'TabFldEdit':
          await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
          break;
        default:
          strMsg = `操作类型：${this.GetOp}不正确，请检查！`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: clsSysPara4WebApi.Url_Session_SetString,
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

  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }
  public get GetOp(): string {
    if (IsNullOrEmpty(this.Op) == false) return this.Op;
    return this.qsOp;
  }
  public get qsTabId() {
    const strName = 'tabId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }

  public get qsCurrTabId() {
    const strName = 'currTabId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public async GetSqlTabInfo(
    arrPrjTabFldExObjLst: Array<clsPrjTabFldENEx>,
    arrColumns: Array<clsColumns>,
  ) {
    const strTabId = arrPrjTabFldExObjLst[0].tabId;
    // const strPrjId = arrPrjTabFldExObjLst[0].prjId;
    const objPrjTabEN = await vPrjTab_SimEx_GetObjByTabIdCache(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (arrColumns.length == 0) {
      return;
    } else {
      //获取Sql表信息

      let intCount = 1;
      for (const di of arrColumns) {
        //const objFieldTab = await vFieldTab_SimEx_GetObjByFldIdCache(di.fldId, di.cmPrjId);
        //if (objFieldTab == null) continue;
        //bolIsHaveWrong = false;
        const strColumn_Name = di.column_Name;
        if (strColumn_Name == undefined) continue;
        const arrPrjTabFldExObjLst_Sel = arrPrjTabFldExObjLst.filter(
          (x) => x.fldName == strColumn_Name,
        );

        const strTypeName = di.type_Name;
        const intLenght = di.length;
        const intPrecision = di.precision;
        let bolIsNullableSql = false;
        bolIsNullableSql = di.is_Nullable == 'YES' ? true : false;

        if (arrPrjTabFldExObjLst_Sel.length == 0) {
          //di.Cells[6].ForeColor = System.Drawing.Color.Red;
          const objPrjTabFldENEx = new clsPrjTabFldENEx();
          objPrjTabFldENEx.mId = intCount;
          objPrjTabFldENEx.tabId = strTabId;
          objPrjTabFldENEx.fldId = Format('temp-{0}', intCount++);
          objPrjTabFldENEx.fldName = strColumn_Name;
          objPrjTabFldENEx.fldNameEx = strColumn_Name;
          objPrjTabFldENEx.typeNameSql = strTypeName;
          objPrjTabFldENEx.lengthSql = intLenght;
          objPrjTabFldENEx.precisionSql = intPrecision;
          objPrjTabFldENEx.isNullableSql = bolIsNullableSql;
          objPrjTabFldENEx.errMsg = '在生成代码中不存在!';
          objPrjTabFldENEx.tabCheckErrorTypeId = '08';
          objPrjTabFldENEx.errorLevelId = 1;
          objPrjTabFldENEx.trClass = 'bg-danger bg-opacity-10';
          arrPrjTabFldExObjLst.push(objPrjTabFldENEx);
        } else {
          const objvPrjTabFld = arrPrjTabFldExObjLst_Sel[0];
          if ((await this.IsTypeConsistency(strTypeName, objvPrjTabFld)) == false) {
            //di.Cells[6].Text = "类型不一致!";
            //di.Cells[6].ForeColor = System.Drawing.Color.Red;
          }
          if ((await this.IsLengthConsistency(intLenght, objvPrjTabFld)) == false) {
            //di.Cells[6].Text += "长度不一致!";
            //di.Cells[6].ForeColor = System.Drawing.Color.Red;
          }
          if ((await this.IsPrecisionConsistency(intPrecision, objvPrjTabFld)) == false) {
            //di.Cells[6].Text += "小数不一致!";
            //di.Cells[6].ForeColor = System.Drawing.Color.Red;
          }

          if (objPrjTabEN.sqlDsTypeId == '01') {
            if (objvPrjTabFld.isTabNullable != bolIsNullableSql) {
              //di.Cells[6].Text += "<可空>不一致!";
              //di.Cells[6].ForeColor = System.Drawing.Color.Red;
            }
          }
        }
      }
    }
  }
  public async CheckTabInfoByGcAndSql(
    arrPrjTabFldExObjLst: Array<clsPrjTabFldENEx>,
    arrColumns: Array<clsColumns>,
  ) {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const strTabId = arrPrjTabFldExObjLst[0].tabId;

    const objPrjTabEN = await vPrjTab_SimEx_GetObjByTabIdCache(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (arrPrjTabFldExObjLst.length == 0) {
      return;
    } else {
      for (const objPrjTabFldEx of arrPrjTabFldExObjLst) {
        if (IsNullOrEmpty(objPrjTabFldEx.fldId) == true) continue;
        if (objPrjTabFldEx.fldId.indexOf('temp') >= 0) continue;
        const objFieldTab = await vFieldTab_Sim2Store.getObj(objPrjTabFldEx.fldId);
        if (objFieldTab == null) continue;

        const strFldName_Agc = objFieldTab.fldName;
        const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objFieldTab.dataTypeId);
        if (objDataTypeAbbr == null) return false;

        const strFldType_Agc = objDataTypeAbbr.dataTypeName;
        const intFldLenght_Agc = objFieldTab.fldLength;
        const intFldPrecision_Agc = objFieldTab.fldPrecision;
        const bolIs_Nullable_Agc = objPrjTabFldEx.isTabNullable;

        //strFldName_Agc = strFldName_Agc.toLowerCase();
        // bolIsSameFldName = false;
        //bolIsHaveWrong = false;
        objPrjTabFldEx.errMsg = '';
        const arrColumns_Sel = arrColumns.filter((x) => x.column_Name == strFldName_Agc);
        if (arrColumns_Sel.length == 0) {
          objPrjTabFldEx.errMsg = '在SQL库中不存在!';
          objPrjTabFldEx.tabCheckErrorTypeId = '13';
          objPrjTabFldEx.errorLevelId = 4;
          objPrjTabFldEx.trClass = 'bg-danger bg-opacity-100';
          continue;
          //gvrAgc.Cells[14].ForeColor = System.Drawing.Color.Red;
          //bolIsHaveWrong = true;
        }
        const objColumn = arrColumns_Sel[0];
        let strColumn_Name_Sql = objColumn.column_Name;
        strColumn_Name_Sql = strColumn_Name_Sql.toLowerCase();

        //if (strFldName_Agc == strFldName_Sql) {
        //    bolIsSameFldName = true;
        const strFldType_SQL = objColumn.type_Name;
        const intFldLenght_SQL = objColumn.length;
        const intFldPrecision_SQL = objColumn.precision;
        let bolIsNullableSql = false;
        if (objColumn.is_Nullable == 'YES') {
          bolIsNullableSql = true;
        }
        objPrjTabFldEx.typeNameSql = strFldType_SQL;
        objPrjTabFldEx.lengthSql = intFldLenght_SQL;
        objPrjTabFldEx.precisionSql = intFldPrecision_SQL;
        objPrjTabFldEx.isNullableSql = bolIsNullableSql;

        if (strFldType_SQL != strFldType_Agc) {
          if (
            (strFldType_Agc.toLowerCase() == 'bigint' && strFldType_SQL == 'bigint identity') ||
            (strFldType_Agc.toLowerCase() == 'int' && strFldType_SQL == 'int identity')
          ) {
            console.log('');
          } else {
            objPrjTabFldEx.errMsg = '类型不一致!<br/>';
            objPrjTabFldEx.tabCheckErrorTypeId = '05';
            objPrjTabFldEx.errorLevelId = 3;
            objPrjTabFldEx.trClass = 'bg-danger bg-opacity-75';

            //gvrAgc.Cells[14].ForeColor = System.Drawing.Color.Red;
            //bolIsHaveWrong = true;
          }
        }
        if (
          intFldLenght_SQL != intFldLenght_Agc &&
          strFldType_SQL != 'decimal' &&
          strFldType_SQL != 'text' &&
          strFldType_SQL != 'image'
        ) {
          objPrjTabFldEx.errMsg += '长度不一致!<br/>';
          objPrjTabFldEx.tabCheckErrorTypeId = '06';
          if (IsNullOrEmpty(objPrjTabFldEx.tdClass) == true) {
            objPrjTabFldEx.errorLevelId = 2;
            objPrjTabFldEx.trClass = 'bg-danger bg-opacity-50';
          }
          //gvrAgc.Cells[14].ForeColor = System.Drawing.Color.Red;
          //bolIsHaveWrong = true;
        }
        if (objPrjTabEN.sqlDsTypeId == '01') {
          if (bolIsNullableSql != bolIs_Nullable_Agc) {
            //gvrAgc.Cells[14].ForeColor = System.Drawing.Color.Red;
            objPrjTabFldEx.errMsg += '可空不一致!<br/>';
            objPrjTabFldEx.tabCheckErrorTypeId = '07';
            if (IsNullOrEmpty(objPrjTabFldEx.tdClass) == true) {
              objPrjTabFldEx.errorLevelId = 2;
              objPrjTabFldEx.trClass = 'bg-danger bg-opacity-25';
            }
            //bolIsHaveWrong = true;
          }
        }
        if (
          intFldPrecision_SQL != intFldPrecision_Agc &&
          strFldType_SQL != 'char' &&
          strFldType_SQL.toLowerCase() != 'datetime' &&
          strFldType_SQL.toLowerCase() != 'text' &&
          strFldType_SQL.toLowerCase() != 'nvarchar' &&
          strFldType_SQL.toLowerCase() != 'bool' &&
          strFldType_SQL.toLowerCase() != 'int' &&
          strFldType_SQL.toLowerCase() != 'bit' &&
          strFldType_SQL.toLowerCase() != 'bigint' &&
          strFldType_SQL != 'varchar'
        ) {
          objPrjTabFldEx.errMsg += '小数不一致!<br/>';
          objPrjTabFldEx.tabCheckErrorTypeId = '17';
          if (IsNullOrEmpty(objPrjTabFldEx.tdClass) == true) {
            objPrjTabFldEx.errorLevelId = 1;
            objPrjTabFldEx.trClass = 'bg-danger bg-opacity-10';
          }
          //gvrAgc.Cells[14].ForeColor = System.Drawing.Color.Red;
          //bolIsHaveWrong = true;
        }
      }
      //}

      //if (bolIsHaveWrong==false)
      //{
      //    CheckBox cb = (CheckBox)gvrAgc.FindControl("chkCheckRec");
      //    if (cb != null)
      //    {
      //        cb.Checked = true;
      //    }
      //}
    }
  }
  /** 显示PrjTabFld对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrPrjTabFldExObjLst:需要绑定的对象列表
   **/
  public async BindTab_PrjTabFld4Func(
    divContainer: HTMLDivElement,
    arrPrjTabFldExObjLst: Array<clsPrjTabFldENEx>,
  ) {
    const strThisFuncName = this.BindTab_PrjTabFld4Func.name;

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
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'sequenceNumber',
        sortBy: 'sequenceNumber',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '顺序号',
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
        fldName: 'fldId',
        sortBy: 'fldId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '字段Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'a',
        orderNum: 3,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const arrPrjTabFldExObjLst_Sel = arrPrjTabFldExObjLst.filter((x) => x.mId == lngMid);
          const objA = <HTMLAnchorElement>document.createElement('a');

          if (arrPrjTabFldExObjLst_Sel.length == 0) {
            return objA;
          }
          const strFldId = arrPrjTabFldExObjLst_Sel[0].fldId;
          objA.innerText = strText;
          objA.innerText = strFldId;
          objA.title = '编辑字段信息，注意：会影响所有引用该字段的表。';
          objA.className = 'link-success text-success font-weight-bold';
          (function (strFldId) {
            objA.onclick = function () {
              PrjTabFldCRUDEx.UpdateFieldTab(strFldId);
            };
          })(strFldId);
          return objA;
        },
      },
      {
        fldName: clsPrjTabFldENEx.con_FldNameEx,
        sortBy: clsPrjTabFldENEx.con_FldNameEx,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '字段名',
        text: '',
        tdClass: 'text-left',
        columnType: 'a',
        orderNum: 4,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const arrPrjTabFldExObjLst_Sel = arrPrjTabFldExObjLst.filter((x) => x.mId == lngMid);
          const objA = <HTMLAnchorElement>document.createElement('a');

          if (arrPrjTabFldExObjLst_Sel.length == 0) {
            return objA;
          }
          // const strFldId = arrPrjTabFldExObjLst_Sel[0].fldId;
          // const obj = await vFieldTab_Sim_GetObjByFldIdCache(strFldId);
          const objPrjTabFldEx = arrPrjTabFldExObjLst_Sel[0];
          PrjTabFldEx_FuncMap_FldNameEx(objPrjTabFldEx);
          objA.innerText = strText;
          objA.innerHTML = Format('{0}', objPrjTabFldEx.fldNameEx);
          objA.title = '编辑表字段信息。';
          objA.className = 'link-info text-info font-weight-bold';
          (function (lngMid) {
            objA.onclick = function () {
              PrjTabFldCRUDEx.UpdatePrjTabFld(lngMid);
            };
          })(lngMid);
          return objA;
        },
      },
      {
        fldName: 'caption',
        sortBy: 'caption',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '标题',
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
        fldName: 'fieldTypeName',
        sortBy: 'fieldTypeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '字段类型',
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
        fldName: 'dataTypeName',
        sortBy: 'dataTypeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '数据类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'LabelOrDiv',
        orderNum: 8,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const objPrjTabFld = await PrjTabFld_GetObjBymIdCache(lngMid, TabId_Static.value);
          if (objPrjTabFld == null) {
            const div1 = document.createElement('div');
            return div1;
          } else {
            if (objPrjTabFld.isForExtendClass == false) {
              const div1 = document.createElement('div');
              return div1;
            }
            if (objPrjTabFld.fieldTypeId == enumFieldType.DisplayUnit_20) {
              if (IsNullOrEmpty(objPrjTabFld.fldDispUnitStyleId)) {
                const div1 = document.createElement('div');
                div1.innerHTML = '还未设置显示格式!';
                return div1;
              } else {
                const divFldDispUnitStyle = await css_FldDispUnitStyleEx_CreateDiv4FldDispUnit(
                  objPrjTabFld.fldDispUnitStyleId,
                  '标题',
                  '内容',
                );
                return divFldDispUnitStyle;
              }
            } else if (IsNullOrEmpty(objPrjTabFld.dnPathId) == true) {
              const div2 = document.createElement('div');

              const objEx = new clsPrjTabFldENEx();
              ObjectAssign(objEx, objPrjTabFld);

              await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_TabName, objEx);
              div2.innerHTML = objEx.tabName;
              return div2;
            } else {
              const divPath = await DnPathEx_CreateGraph4DnPathCache(objPrjTabFld.dnPathId);
              strKey = strText;
              return divPath;
            }
          }
        },
      },
      {
        fldName: 'fldLength',
        sortBy: 'fldLength',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '长度',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'isTabNullable',
        sortBy: 'isTabNullable',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '可空',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label4Bool',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'isTabUnique',
        sortBy: 'isTabUnique',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '唯一',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label4Bool',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'isTabForeignKey',
        sortBy: 'isTabForeignKey',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '外键',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label4Bool',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'isParentObj',
        sortBy: 'isParentObj',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '父对象',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label4Bool',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'convFldName',
        sortBy: 'convFldName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '转换',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },

      {
        fldName: clsPrjTabFldENEx.con_ForeignKeyTabName,
        sortBy: clsPrjTabFldENEx.con_ForeignKeyTabName,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '外键表0',
        text: '',
        tdClass: 'text-left',
        columnType: 'a',
        orderNum: 14,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const arrPrjTabFldExObjLst_Sel = arrPrjTabFldExObjLst.filter((x) => x.mId == lngMid);
          const objA = <HTMLAnchorElement>document.createElement('a');

          if (arrPrjTabFldExObjLst_Sel.length == 0) {
            return objA;
          }
          const foreignTabId = arrPrjTabFldExObjLst_Sel[0].foreignKeyTabId;
          if (IsNullOrEmpty(foreignTabId) == true || foreignTabId == '0') {
            return objA;
          }
          const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
            clsvPrjTab_SimEN.con_TabId,
            clsvPrjTab_SimEN.con_TabName,
            foreignTabId,
          );
          objA.innerText = strText;
          objA.innerText = Format('{0}', vPrjTab_Sim_TabName);
          objA.title = '编辑表字段信息。';
          objA.className = 'link-info text-info font-weight-bold';

          // const strLinkFile0 = Format(
          //   '../T1able_Field/PrjTabFldCRUD?tabId={0}&Op=TabFldEdit&currTabId={1}',
          //   foreignTabId,
          //   TabId_Static.value,
          // );
          // const strHref = `${strLinkFile0}`;
          // objA.href = strHref;

          (function (strTabId1) {
            objA.onclick = function () {
              EditPrjTab(strTabId1);
            };
          })(foreignTabId);

          return objA;
        },
      },
      {
        fldName: 'sourceTabName',
        sortBy: 'sourceTabName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '源表',
        text: '',
        tdClass: 'text-left',
        columnType: 'a',
        orderNum: 14,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const arrPrjTabFldExObjLst_Sel = arrPrjTabFldExObjLst.filter((x) => x.mId == lngMid);
          const objA = <HTMLAnchorElement>document.createElement('a');

          if (arrPrjTabFldExObjLst_Sel.length == 0) {
            return objA;
          }
          const strFldId = arrPrjTabFldExObjLst_Sel[0].fldId;
          const strSqlViewId = await SqlViewEx_GetSqlViewIdByTabIdCache(
            TabId_Static.value,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (IsNullOrEmpty(strSqlViewId) == true) return;
          const arrSqlViewFld = await SqlViewFldEx_GetObjLstBySqlViewIdCache(
            strSqlViewId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const objSqlViewFld_Sel = arrSqlViewFld.find((x) => x.fldId == strFldId);
          if (objSqlViewFld_Sel == null) {
            return objA;
          }
          const SqlViewRelaTab_TabId = await SqlViewRelaTab_func(
            clsSqlViewRelaTabEN.con_RelaTabId,
            clsSqlViewRelaTabEN.con_TabId,
            objSqlViewFld_Sel.relaTabId,
            clsPrivateSessionStorage.currSelPrjId,
          );

          const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
            clsvPrjTab_SimEN.con_TabId,
            clsvPrjTab_SimEN.con_TabName,
            SqlViewRelaTab_TabId,
          );
          objA.innerText = strText;
          objA.innerText = Format('{0}', vPrjTab_Sim_TabName);
          objA.title = '编辑表字段信息。';
          objA.className = 'link-info text-info font-weight-bold';
          // const strLinkFile0 = Format(
          //   '../T1able_Field/PrjTabFldCRUD?tabId={0}&Op=TabFldEdit',
          //   SqlViewRelaTab_TabId,
          // );
          // const strHref = `${strLinkFile0}`;
          // objA.href = strHref;

          (function (strTabId1) {
            objA.onclick = function () {
              EditPrjTab(strTabId1);
            };
          })(SqlViewRelaTab_TabId);

          return objA;
        },
      },
    ];
    if (PrjTabFldCRUDEx.SqlDsTypeId_Static == enumSQLDSType.SqlTab_01) {
      const intIndex = arrDataColumn.findIndex((x) => x.fldName == 'sourceTabName');
      if (intIndex >= 0) {
        arrDataColumn.splice(intIndex, 1);
      }
    }
    try {
      await this.ExtendFldFuncMap(arrPrjTabFldExObjLst, arrDataColumn);
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
    for (const objInFor of arrPrjTabFldExObjLst) {
      await PrjTabFldEx_GetDnPath(objInFor);
    }
    // console.log(arrPrjTabFldExObjLst);
    arrPrjTabFldExObjLst.forEach((x) => {
      if (x.errMsg == null) x.errMsg = '';
    });
    await PrjTabFldCRUDEx.ShowLst(arrPrjTabFldExObjLst);
    // await BindTab(divDataLst, arrPrjTabFldExObjLst, arrDataColumn, 'mId', this);
    // this.SetTdHeadButton(divContainer);
    // this.SetTdProperty(divContainer, arrPrjTabFldExObjLst);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 显示PrjTabFld对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrPrjTabFldExObjLst:需要绑定的对象列表
   **/
  public async BindTab_PrjTabFld4Func_CheckConsistency(
    divContainer: HTMLDivElement,
    arrPrjTabFldExObjLst: Array<clsPrjTabFldENEx>,
    arrColumns: Array<clsColumns>,
  ) {
    const strThisFuncName = this.BindTab_PrjTabFld4Func.name;

    if (arrPrjTabFldExObjLst.length == 0) return;

    const strTabId = arrPrjTabFldExObjLst[0].tabId;
    // const strPrjId = arrPrjTabFldExObjLst[0].prjId;
    for (const objInFor of arrPrjTabFldExObjLst) {
      await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_FldName, objInFor);
    }
    const objPrjTabEN = await vPrjTab_SimEx_GetObjByTabIdCache(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objPrjTabEN == null) return;
    //检查SQL数据库表字段与生成代码中的差异

    //获取Sql表信息
    this.GetSqlTabInfo(arrPrjTabFldExObjLst, arrColumns);
    // const bolIsSameFldName = false; //字段名是否一致
    //检查生成代码中表字段与SQL数据库的差异

    this.CheckTabInfoByGcAndSql(arrPrjTabFldExObjLst, arrColumns);

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
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'sequenceNumber',
        sortBy: 'sequenceNumber',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '顺序号',
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
        fldName: 'fldId',
        sortBy: 'fldId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '字段Id',
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
        fldName: clsPrjTabFldENEx.con_FldNameEx,
        sortBy: clsPrjTabFldENEx.con_FldNameEx,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '字段名',
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
        fldName: 'caption',
        sortBy: 'caption',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '标题',
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
        fldName: 'primaryTypeName',
        sortBy: 'primaryType|primaryTypeName|PrjTabFld.primaryTypeId=primaryType.primaryTypeId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '主键类型名',
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
        fldName: 'fieldTypeName',
        sortBy: 'fieldType|fieldTypeName|PrjTabFld.fieldTypeId=fieldType.fieldTypeId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '字段类型',
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
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '错误',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: async (strKey: string, strText: string) => {
          const lngMid = Number(strKey);
          const arrPrjTabFldExObjLst_Sel = arrPrjTabFldExObjLst.filter((x) => x.mId == lngMid);
          if (arrPrjTabFldExObjLst_Sel.length == 0) {
            const div2 = document.createElement('div');
            return div2;
          }
          const objSpan_T = <HTMLSpanElement>document.createElement('span');
          objSpan_T.innerHTML = Format('错误:');
          objSpan_T.className = 'text-secondary  font-weight-bold';
          const div1 = <HTMLDivElement>document.createElement('div');

          const objPrjTabFldEx = arrPrjTabFldExObjLst_Sel[0];
          const strFldName = objPrjTabFldEx.fldName;
          const strCaption = objPrjTabFldEx.fldName;
          const strDataTypeId = await DataTypeAbbrEx_GetDataTypeIdByName(
            objPrjTabFldEx.typeNameSql,
          );
          const intFldLength = objPrjTabFldEx.lengthSql;
          const intFldPrecision = objPrjTabFldEx.precisionSql;
          const bolIsNull = objPrjTabFldEx.isNullableSql;
          const strTabId = objPrjTabFldEx.tabId;
          const strColumn_Name = objPrjTabFldEx.fldName;
          const strTypeName = objPrjTabFldEx.typeNameSql;
          const bolIs_Nullable = objPrjTabFldEx.isNullableSql;
          if (IsNullOrEmpty(objPrjTabFldEx.errMsg) == true) {
            const divNoErr = document.createElement('div');
            return divNoErr;
          } else if (objPrjTabFldEx.errMsg == '在生成代码中不存在!') {
            //在SQL库中不存在!

            const objSpan = <HTMLSpanElement>document.createElement('span');
            objSpan.innerHTML = strText;
            objSpan.innerHTML = Format('{0}', objPrjTabFldEx.errMsg);
            objSpan.className = 'text-primary mr-2';
            const btnAddNewFieldTab = <HTMLButtonElement>document.createElement('button');
            btnAddNewFieldTab.innerText = '添加';
            btnAddNewFieldTab.title = '在代码系统中添加字段';
            btnAddNewFieldTab.className = 'btn btn-outline-primary btn-sm text-nowrap';

            (function (
              strFldName,
              strCaption,
              strDataTypeId,
              intFldLength,
              intFldPrecision,
              bolIsNull,
              strTabId,
              divList,
            ) {
              btnAddNewFieldTab.onclick = function () {
                PrjTabFldCRUDEx.btnAddNewFieldTab_Click(
                  strFldName,
                  strCaption,
                  strDataTypeId,
                  intFldLength,
                  intFldPrecision,
                  bolIsNull,
                  strTabId,
                  divList,
                );
              };
            })(
              strFldName,
              strCaption,
              strDataTypeId,
              intFldLength,
              intFldPrecision,
              bolIsNull,
              strTabId,
              divVarSet.refDivList,
            );
            //从Sql中删除
            const btnDelFieldFromSql = <HTMLButtonElement>document.createElement('button');
            btnDelFieldFromSql.innerText = '删除';
            btnDelFieldFromSql.title = '在Sql表中删除字段';
            btnDelFieldFromSql.className = 'btn btn-outline-warning btn-sm text-nowrap';

            (function (strTabId, strFldName, divLayout) {
              btnDelFieldFromSql.onclick = function () {
                PrjTabFldCRUDEx.btnAlterTab4DropColumn_Click(strTabId, strFldName, divLayout);
              };
            })(strTabId, strFldName, divVarSet.refDivLayout);

            div1.appendChild(objSpan_T);
            div1.appendChild(objSpan);
            div1.appendChild(btnAddNewFieldTab);
            div1.appendChild(btnDelFieldFromSql);

            return div1;
          } else if (objPrjTabFldEx.errMsg == '在SQL库中不存在!') {
            const objSpan = <HTMLSpanElement>document.createElement('span');
            objSpan.innerHTML = Format('{0}', objPrjTabFldEx.errMsg);
            objSpan.className = 'text-primary mr-2';
            const btnAddNewRecToSql = <HTMLButtonElement>document.createElement('button');
            btnAddNewRecToSql.innerText = '添加到Sql';
            btnAddNewRecToSql.title = '在Sql表中添加字段';
            btnAddNewRecToSql.className = 'btn btn-outline-success btn-sm text-nowrap';

            (function (lngMid, divLayout) {
              btnAddNewRecToSql.onclick = function () {
                PrjTabFldCRUDEx.btnAlterTab4AddField_Click(lngMid, divLayout);
              };
            })(lngMid, divVarSet.refDivLayout);
            //从Sql中删除
            const btnDelFieldInGc = <HTMLButtonElement>document.createElement('button');
            btnDelFieldInGc.innerText = '删除';
            btnDelFieldInGc.title = '在代码系统表中删除字段';
            btnDelFieldInGc.className = 'btn btn-outline-warning btn-sm text-nowrap';
            const strFldId = objPrjTabFldEx.fldId;
            (function (strTabId, strFldId, divList) {
              btnDelFieldInGc.onclick = function () {
                PrjTabFldCRUDEx.btnDelFieldInGc_Click(strTabId, strFldId, divList);
              };
            })(strTabId, strFldId, divVarSet.refDivList);

            div1.appendChild(objSpan_T);
            div1.appendChild(objSpan);
            div1.appendChild(btnAddNewRecToSql);
            div1.appendChild(btnDelFieldInGc);

            return div1;
          } else {
            if (objPrjTabFldEx.errorLevelId == 2 || objPrjTabFldEx.errorLevelId == 3) {
              const objSpan = <HTMLSpanElement>document.createElement('span');
              objSpan.innerHTML = Format('{0}', objPrjTabFldEx.errMsg);
              objSpan.className = 'text-primary mr-2';
              const btnAlterTab4UpdateField = <HTMLButtonElement>document.createElement('button');
              btnAlterTab4UpdateField.innerText = '同步属性到Sql';
              btnAlterTab4UpdateField.title = '把代码系统中的字段属性同步到Sql表中';
              btnAlterTab4UpdateField.className = 'btn btn-outline-success btn-sm text-nowrap';

              (function (lngMid, divList) {
                btnAlterTab4UpdateField.onclick = function () {
                  PrjTabFldCRUDEx.btnAlterTab4UpdateField_Click(lngMid, divList);
                };
              })(lngMid, divVarSet.refDivList);
              //从Sql中删除
              const btnSynchFieldFromColumnObj_Click = <HTMLButtonElement>(
                document.createElement('button')
              );
              btnSynchFieldFromColumnObj_Click.innerText = '同步属性到代码系统';
              btnSynchFieldFromColumnObj_Click.title = '把Sql表中的字段属性同步到代码系统的表中';
              btnSynchFieldFromColumnObj_Click.className =
                'btn btn-outline-primary btn-sm text-nowrap';

              (function (
                strTabId,
                strColumn_Name,
                strTypeName,
                intFldLength,
                intFldPrecision,
                strIs_Nullable,
                divList,
              ) {
                console.log(strIs_Nullable);
                btnSynchFieldFromColumnObj_Click.onclick = function () {
                  PrjTabFldCRUDEx.btnSynchFieldFromColumnObj_Click(
                    strTabId,
                    strColumn_Name,
                    strTypeName,
                    intFldLength,
                    intFldPrecision,
                    bolIs_Nullable,
                    divList,
                  );
                };
              })(
                strTabId,
                strColumn_Name,
                strTypeName,
                intFldLength,
                intFldPrecision,
                bolIs_Nullable,
                divVarSet.refDivList,
              );

              div1.appendChild(objSpan_T);
              div1.appendChild(objSpan);
              div1.appendChild(btnAlterTab4UpdateField);
              div1.appendChild(btnSynchFieldFromColumnObj_Click);

              return div1;
            } else {
              const objSpan2 = <HTMLSpanElement>document.createElement('span');
              objSpan2.innerHTML = Format('{0}', objPrjTabFldEx.errMsg);
              div1.appendChild(objSpan_T);
              div1.appendChild(objSpan2);
              return div1;
            }
          }
        },
      },
      {
        fldName: 'dataTypeName',
        sortBy: 'FieldTab|dataTypeId|FieldTab.fldId=PrjTabFld.fldId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '数据类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'typeNameSql',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '类型_Sql',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'fldLength',
        sortBy: 'FieldTab|fldLength|FieldTab.fldId=PrjTabFld.fldId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '字段长度',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'lengthSql',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '长度_Sql',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'fldPrecision',
        sortBy: 'fldPrecision',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '精度',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'precisionSql',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '精度_Sql',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'isTabNullable',
        sortBy: 'isTabNullable',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '可空',
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
        fldName: 'isNullableSql',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '可空_Sql',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrPrjTabFldExObjLst, arrDataColumn);
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
    //console.error('fldNameEx[0]:', arrPrjTabFldExObjLst[0].fldNameEx);
    await PrjTabFldCRUDEx.ShowLst(arrPrjTabFldExObjLst);
    // await BindTab(divDataLst, arrPrjTabFldExObjLst, arrDataColumn, 'mId', this);
    // this.SetClass4KeyId(divContainer, arrPrjTabFldExObjLst, 'mId');
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async btnSet4ExtendClass_Click(divContainer: HTMLDivElement) {
    const strThisFuncName = this.btnSet4ExtendClass_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    // const strUpdUser = clsPubLocalStorage.userId;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divContainer);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      let bolIsSuccess = true;
      for (const strmId of arrKeyIds) {
        const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strmId));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (objPrjTabFld.isForExtendClass == true) objPrjTabFld.SetIsForExtendClass(false);
        else objPrjTabFld.SetIsForExtendClass(true);
        objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

        const bolTemp = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);
        bolIsSuccess = bolIsSuccess && bolTemp;
        PrjTabFld_ReFreshCache(objPrjTabFld.tabId);
        prjTabFldStore.delObjLstByTabId(objPrjTabFld.tabId);
      }
      if (bolIsSuccess) {
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
    } catch (e) {
      console.error(e);
      alert(e);
    }
  }
  public SetTdHeadButton(divContainer: HTMLDivElement) {
    const strTdId = Format('td{0}', clsPrjTabFldENEx.con_FieldTypeName);
    const objTd = getTdObjByIdInDivObj(divContainer, strTdId);
    const a_FieldTypeName = document.createElement('a');
    a_FieldTypeName.innerHTML = '(扩展类)';
    a_FieldTypeName.classList.add('text-primary');
    a_FieldTypeName.addEventListener('click', (e) => {
      console.log(e);
      this.btnSet4ExtendClass_Click(divContainer);
    });
    objTd.appendChild(a_FieldTypeName);
  }
  public SetTdProperty(divContainer: HTMLDivElement, arrObjLst: Array<clsPrjTabFldENEx>) {
    for (const objInFor of arrObjLst) {
      if (objInFor.isForExtendClass == false) continue;
      const strTdId = Format('td{0}_{1}', objInFor.mId, clsPrjTabFldENEx.con_DataTypeName);
      const objTd = getTdObjByIdInDivObj(divContainer, strTdId);
      if (objTd == null) continue;
      objTd.setAttribute('ColSpan', '8');
      let i = 0;
      let objCurrTd: HTMLTableColElement = objTd;
      while (i < 8) {
        const objNext = <HTMLTableColElement>objCurrTd.nextSibling;
        if (objNext != null) {
          objNext.style.visibility = 'hidden';
          objNext.style.display = 'none';
          objCurrTd = objNext;
        }
        i++;
      }
    }
  }
  public async IsTypeConsistency(
    strTypeName: string,
    objPrjTabFld: clsPrjTabFldEN,
  ): Promise<boolean> {
    if (IsNullOrEmpty(objPrjTabFld.fldId) == true) return false;
    const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
      objPrjTabFld.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvFieldTab_Sim == null) return false;
    const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objvFieldTab_Sim.dataTypeId);
    if (objDataTypeAbbr == null) return false;

    if (objDataTypeAbbr.dataTypeName != strTypeName && objDataTypeAbbr.oraDbType != strTypeName) {
      if (
        (objDataTypeAbbr.dataTypeName.toLowerCase() == 'bigint' &&
          strTypeName == 'bigint identity') ||
        (objDataTypeAbbr.dataTypeName.toLowerCase() == 'int' && strTypeName == 'int identity')
      ) {
        console.log('条件不满足！不需要处理！');
      } else {
        return false;
        //di.Cells[6].Text = "类型不一致!";
        //di.Cells[6].ForeColor = System.Drawing.Color.Red;
        //bolIsHaveWrong = true;
      }
    }
    return true;
  }

  public async IsLengthConsistency(
    intLenght: number,
    objPrjTabFld: clsPrjTabFldEN,
  ): Promise<boolean> {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    if (IsNullOrEmpty(objPrjTabFld.fldId) == true) return false;
    const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(objPrjTabFld.fldId);
    if (objvFieldTab_Sim == null) return false;
    const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objvFieldTab_Sim.dataTypeId);
    if (objDataTypeAbbr == null) return false;

    if (
      objvFieldTab_Sim.fldLength != intLenght &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'decimal' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'text' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'image'
    ) {
      return false;
      //di.Cells[6].Text += "长度不一致!";
      //di.Cells[6].ForeColor = System.Drawing.Color.Red;
      //bolIsHaveWrong = true;
    }
    return true;
  }

  public async IsPrecisionConsistency(
    intPrecision: number,
    objPrjTabFld: clsPrjTabFldEN,
  ): Promise<boolean> {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    if (IsNullOrEmpty(objPrjTabFld.fldId) == true) return false;
    const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(objPrjTabFld.fldId);
    if (objvFieldTab_Sim == null) return false;
    const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objvFieldTab_Sim.dataTypeId);
    if (objDataTypeAbbr == null) return false;

    if (
      objvFieldTab_Sim.fldPrecision != intPrecision &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'char' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'datetime' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'text' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'nvarchar' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'bool' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'int' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'bigint' &&
      objDataTypeAbbr.dataTypeName.toLowerCase() != 'varchar'
    ) {
      return false;
      //di.Cells[6].Text += "小数不一致!";
      //di.Cells[6].ForeColor = System.Drawing.Color.Red;
      //bolIsHaveWrong = true;
    }
    return true;
  }
  public static async btnAddNewFieldTab_Click(
    strFldName: string,
    strCaption: string,
    strDataTypeId: string,
    intFldLength: number,
    intFldPrecision: number,
    bolIsNull: boolean,
    strTabId: string,
    divList: HTMLDivElement,
  ) {
    const prjTabFldStore = usePrjTabFldStore();
    //const strFldName = objPrjTabFldEN.fldName;
    //const strCaption = objPrjTabFldEN.caption;
    //const strDataTypeId = objPrjTabFldEN.dataTypeId;
    //const intFldLength = objPrjTabFldEN.fldLength;
    //const intFldPrecision = objPrjTabFldEN.fldPrecision;
    //const bolIsNull = objPrjTabFldEN.isTabNullable;
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strUpdUser = clsPubLocalStorage.userId;
    try {
      const strFldId = await FieldTabEx_AddNewRec(
        strFldName,
        strCaption,
        strDataTypeId,
        intFldLength,
        intFldPrecision,
        bolIsNull,
        strPrjId,
        strUpdUser,
      );
      if (IsNullOrEmpty(strFldId) == false) {
        const bolIsSuccess = await PrjTabFldEx_AddNewRec(
          strTabId,
          strFldId,
          bolIsNull,
          clsPubLocalStorage.userId,
        );
        if (bolIsSuccess == true) {
          PrjTabFld_ReFreshCache(strTabId);
          prjTabFldStore.delObjLstByTabId(strTabId);
        }
      }
      await PrjTabFldCRUD.objPageCRUD.BindInDiv(divList);
    } catch (e) {
      console.error(e);
      alert(e);
      return false;
    }
  }

  public static async btnSynchFieldFromColumnObj_Click(
    strTabId: string,
    strColumn_Name: string,
    strTypeName: string,
    intFldLength: number,
    intFldPrecision: number,
    bolIs_Nullable: boolean,
    divList: HTMLDivElement,
  ) {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const prjTabFldStore = usePrjTabFldStore();
    //const strFldName = objPrjTabFldEN.fldName;
    //const strCaption = objPrjTabFldEN.caption;
    //const strDataTypeId = objPrjTabFldEN.dataTypeId;
    //const intFldLength = objPrjTabFldEN.fldLength;
    //const intFldPrecision = objPrjTabFldEN.fldPrecision;
    //const bolIsNull = objPrjTabFldEN.isTabNullable;
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strUpdUser = clsPubLocalStorage.userId;
    try {
      const strFldId = await PrjTabFldEx_SynchFieldFromColumnObj(
        strTabId,
        strColumn_Name,
        strTypeName,
        intFldLength,
        intFldPrecision,
        bolIs_Nullable,
        strUpdUser,
      );
      if (strFldId.length > 0) {
        vFieldTab_Sim2Store.delObj(strFldId);
        vFieldTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        await PrjTabFldCRUD.objPageCRUD.BindInDiv(divList);
      }
    } catch (e) {
      console.error(e);
      alert(e);
      return false;
    }
  }
  public static async btnAlterTab4DropColumn_Click(
    strTabId: string,
    strFldName: string,
    divList: HTMLDivElement,
  ) {
    //const strFldName = objPrjTabFldEN.fldName;
    //const strCaption = objPrjTabFldEN.caption;
    //const strDataTypeId = objPrjTabFldEN.dataTypeId;
    //const intFldLength = objPrjTabFldEN.fldLength;
    //const intFldPrecision = objPrjTabFldEN.fldPrecision;
    //const bolIsNull = objPrjTabFldEN.isTabNullable;
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    // const strUpdUser = clsPubLocalStorage.userId;
    try {
      const bolResult = await PrjTabEx_AlterTab4DropColumn(
        strTabId,
        strFldName,
        clsPrivateSessionStorage.currPrjDataBaseId,
      );
      if (bolResult == true) {
        await PrjTabFldCRUD.objPageCRUD.BindInDiv(divList);
      }
    } catch (e) {
      console.error(e);
      alert(e);
      return false;
    }
  }

  public static async btnDelFieldInGc_Click(
    strTabId: string,
    strFldId: string,
    divList: HTMLDivElement,
  ) {
    const prjTabFldStore = usePrjTabFldStore();
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    // const strUpdUser = clsPubLocalStorage.userId;
    try {
      const bolResult = await PrjTabFldEx_DelRecordEx(strTabId, strFldId);
      if (bolResult == true) {
        prjTabFldStore.delObjLstByTabId(strTabId);
        await PrjTabFldCRUD.objPageCRUD.BindInDiv(divList);
      }
    } catch (e) {
      console.error(e);
      alert(e);
      return false;
    }
  }
  public static async btnAlterTab4AddField_Click(lngMid: number, divList: HTMLDivElement) {
    try {
      const bolResult = await PrjTabEx_AlterTab4AddField(
        lngMid,
        clsPrivateSessionStorage.currPrjDataBaseId,
      );
      if (bolResult == true) {
        await PrjTabFldCRUD.objPageCRUD.BindInDiv(divList);
      }
    } catch (e) {
      console.error(e);
      alert(e);
      return false;
    }
  }

  public static async btnAlterTab4UpdateField_Click(lngMid: number, divList: HTMLDivElement) {
    try {
      const bolResult = await PrjTabEx_AlterTab4UpdateField(
        lngMid,
        clsPrivateSessionStorage.currPrjDataBaseId,
      );
      if (bolResult == true) {
        await PrjTabFldCRUD.objPageCRUD.BindInDiv(divList);
      }
    } catch (e) {
      console.error(e);
      alert(e);
      return false;
    }
  }

  public async BindInDiv(divName4Bind: HTMLDivElement) {
    console.log(divName4Bind);
    if (PrjTabFldCRUDEx.ShowMode == 'EditTabFld') {
      await this.btnEditTabFld_Click();
    } else {
      await this.btnCheckConsistency_Click();
    }
  }
  public static UpdateFieldTab(strFldId: string) {
    //FieldTab_Edit.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
    const objPage = new PrjTabFldCRUDEx();
    const objPageEdit: FieldTab_EditEx = new FieldTab_EditEx('FieldTab_EditEx', objPage);
    objPageEdit.btnUpdateRecord_Click(strFldId);
  }
  public static UpdatePrjTabFld(lngMid: number) {
    const objPage = new PrjTabFldCRUDEx();
    const objPageEdit: PrjTabFld_EditEx = new PrjTabFld_EditEx('PrjTabFld_EditEx', objPage);
    objPageEdit.btnUpdateRecord_Click(lngMid);
  }

  public async ExtendFldFuncMap(
    arrPrjTabFldExObjLst: Array<clsPrjTabFldENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsPrjTabFldEN.AttributeName;
    const arrExcludeFldName = ['isNullableSql', 'precisionSql', 'lengthSql', 'typeNameSql'];
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      if (arrExcludeFldName.indexOf(objDataColumn.fldName) > -1) continue;

      for (const objInFor of arrPrjTabFldExObjLst) {
        if (objInFor.fldId.indexOf('temp') > -1) continue;
        try {
          await PrjTabFldEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
          if (objDataColumn.fldName == clsPrjTabFldENEx.con_ConvFldName) {
            objInFor.isNeedAddConvFldName = await PrjTabFldEx_isNeedAddConvFldName(objInFor);
            // console.log('objInFor:', objInFor);
          }
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

  public SetClass4KeyId(
    divContainer: HTMLDivElement,
    arrPrjTabFldExObjLst: Array<clsPrjTabFldENEx>,
    strKeyId: string,
  ) {
    //获取指定数据列表层

    //根据className获取数据列表层中的所有复选框
    for (const objInFor of arrPrjTabFldExObjLst) {
      const strTrId = Format('tr{0}', objInFor.GetFldValue(strKeyId));

      const objTr = getTrObjByIdInDivObj(divContainer, strTrId); // as Array<HTMLInputElement>;
      objTr.className = objInFor.trClass;
      if (IsNullOrEmpty(objInFor.trClass) == false) {
        objTr.setAttribute('class', objInFor.trClass);
      }
    }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_PrjTabFld4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_PrjTabFld4Func.name;
    if (this.Op == 'CheckConsistency') {
      this.BindGv_PrjTabFld4Func_CheckConsistency(divVarSet.refDivList);
    }
    if (viewVarSet.sortPrjTabFldBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortPrjTabFldBy)为空，请检查！(In BindGv_PrjTabFldCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await CombinePrjTabFldCondition();
    //objPrjTabFld_Cond.SetCondFldValue(clsPrjTabFldEN.con_PrjId, clsPrivateSessionStorage.currSelPrjId, "=");
    //objPrjTabFld_Cond.SetCondFldValue(clsPrjTabFldEN.con_TabId, TabId_Static.value, "=");
    //const objPrjTabFldEN_Sim = PrjTabFld_GetSimObjFromObj(objPrjTabFld_Cond);
    //const strWhereCond = JSON.stringify(objPrjTabFldEN_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //let arrPrjTabFldObjLst: Array<clsPrjTabFldEN> = [];
    let arrPrjTabFldExObjLst: Array<clsPrjTabFldENEx> = [];
    try {
      this.recCount = await PrjTabFld_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortPrjTabFldBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrPrjTabFldExObjLst = await PrjTabFldEx_GetObjExLstByPagerAsync(objPagerPara);
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
    if (arrPrjTabFldExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}_{2}',
        clsPrjTabFldEN._CurrTabName,
        clsPrivateSessionStorage.currSelPrjId,
        TabId_Static.value,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_PrjTabFld4Func(divList, arrPrjTabFldExObjLst);
      await this.ShowErrMsg(divList, arrPrjTabFldExObjLst);
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

  public ShowErrMsg(divContainer: HTMLDivElement, arrPrjTabFldEx: Array<clsPrjTabFldENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>(
      clsPubFun4Visible.GetArray(objLst)
    );
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objPrjTabFld = arrPrjTabFldEx.find((x) => x.mId.toString() == strId);
      if (objPrjTabFld != null) {
        if (objPrjTabFld.errMsg != null && objPrjTabFld.errMsg.length > 0) {
          x.className = 'text-muted bg-gray';
          x.title = objPrjTabFld.errMsg;
        } else if (IsNullOrEmpty(objPrjTabFld.trClass) == false) {
          x.className = objPrjTabFld.trClass;
        }
      }
    });
  }
  public async BindGv_PrjTabFld4Func_CheckConsistency(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_PrjTabFld4Func.name;
    if (viewVarSet.sortPrjTabFldBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortPrjTabFldBy)为空，请检查！(In BindGv_PrjTabFldCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strListDiv = divVarSet.refDivList;
    const strWhereCond = await CombinePrjTabFldCondition();
    //objPrjTabFld_Cond.SetCondFldValue(clsPrjTabFldEN.con_PrjId, clsPrivateSessionStorage.currSelPrjId, "=");
    //objPrjTabFld_Cond.SetCondFldValue(clsPrjTabFldEN.con_TabId, TabId_Static.value, "=");
    //const objPrjTabFldEN_Sim = PrjTabFld_GetSimObjFromObj(objPrjTabFld_Cond);
    //const strWhereCond = JSON.stringify(objPrjTabFldEN_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //let arrPrjTabFldObjLst: Array<clsPrjTabFldEN> = [];
    let arrPrjTabFldExObjLst: Array<clsPrjTabFldENEx> = [];
    let arrColumns: Array<clsColumns> = [];
    try {
      this.recCount = await PrjTabFld_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortPrjTabFldBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrPrjTabFldExObjLst = await PrjTabFldEx_GetObjExLstByPagerAsync(objPagerPara);
      arrPrjTabFldExObjLst = arrPrjTabFldExObjLst.filter((x) => x.isForExtendClass == false);
      arrColumns = await SqlWApi_GetColumnObjList(
        PrjTabFldCRUDEx.TabName_Static,
        clsPrivateSessionStorage.currPrjDataBaseId,
      );
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
    if (arrPrjTabFldExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}_{2}',
        clsPrjTabFldEN._CurrTabName,
        clsPrivateSessionStorage.currSelPrjId,
        TabId_Static.value,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(strListDiv, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_PrjTabFld4Func_CheckConsistency(
        strListDiv,
        arrPrjTabFldExObjLst,
        arrColumns,
      );
      await this.ShowErrMsg(strListDiv, arrPrjTabFldExObjLst);
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
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnEditTabFld_Click() {
    //alert("EditTabFld");
    // const strThisFuncName = this.btnEditTabFld_Click.name;
    PrjTabFldCRUDEx.ShowMode = 'EditTabFld';
    this.SetCurrPageIndex(1);
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      TabId_Static.value,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objPrjTab == null) return;
    SetLabelHtmlByIdInDivObj(
      divVarSet.refDivFunction,
      'lblPrjTabFldList',
      Format('项目表:{0}({1})-表字段维护', objPrjTab.tabName, objPrjTab.tabId),
    );
  }
  public async btnCheckConsistency_Click() {
    //alert("CheckConsistency");
    // const strThisFuncName = this.btnCheckConsistency_Click.name;
    this.mintPageSize = 100;
    PrjTabFldCRUDEx.ShowMode = 'CheckConsistency';
    this.SetCurrPageIndex(1);
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      TabId_Static.value,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objPrjTab == null) return;

    const bolIsExist = await SqlWApi_IsExistTable(
      PrjTabFldCRUDEx.TabName_Static,
      clsPrivateSessionStorage.currPrjDataBaseId,
    );
    if (bolIsExist == false) {
      ShowButtonInDivObj(divVarSet.refDivFunction, 'btnGenNewTabInSQL');
      await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
    } else {
      //console.log("arrColumns:", arrColumns);
      await this.BindGv_PrjTabFld4Func_CheckConsistency(divVarSet.refDivList);
    }
    //SetLabelHtmlByIdInDivObj(PrjTabFldCRUD.divFunction, "lblPrjTabFldList", Format("检查一致性", objPrjTab.tabName, objPrjTab.tabId));
  }
  public async btnReturnToPrjTabLst_Click() {
    //alert("CheckConsistency");
    // const strThisFuncName = this.btnReturnToPrjTabLst_Click.name;
    Redirect('/Table_Field/PrjTabCRUD');
  }

  public async btnReturnToMainTab_Click() {
    // Redirect(Format('/T1able_Field/PrjTabFldCRUD?tabId={0}&Op=TabFldEdit', this.qsCurrTabId));
    PrjTabFldCRUDEx.vuebtn_Click('EditPrjTab', this.qsCurrTabId);
  }

  public async btnSetClass4Tr_Click() {
    //alert("CheckConsistency");
    // const strThisFuncName = this.btnSetClass4Tr_Click.name;

    const obj = GetButtonObjInDivObj(divVarSet.refDivFunction, 'btnAddNewRecord');
    obj.className = 'btn btn-info btn-sm text-nowrap';
    const objTr = getTrObjByIdInDivObj(divVarSet.refDivList, 'tr199342');
    //        objTr.className = "bg-danger bg-opacity-10";
    objTr.className = 'bg-warning bg-opacity-10';
  }

  public async btnSetFldOrderNum4View_Click() {
    const strThisFuncName = this.btnSetFldOrderNum4View_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    if (this.PreCheck4Order() == false) return;
    try {
      await PrjTabEx_SetFldOrderNum4ViewByRelaTabId(TabId_Static.value);
      PrjTabFld_ReFreshCache(TabId_Static.value);
      prjTabFldStore.delObjLstByTabId(TabId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '设置视图的所有字段的序号出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
  }

  public async btnCreateView4Sql_Click() {
    //alert("CheckConsistency");

    const strThisFuncName = this.btnCreateView4Sql_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    const strTabId = TabId_Static.value;
    try {
      //string strCondition = string.Format("{0}='{1}'", conSqlView.relaTabId, vsTabId);
      const objSqlViewEN = SqlViewEx_GetObjByRelaTabIdCache(
        TabId_Static.value,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objSqlViewEN == null) {
        const objvPrjTab_Sim = await vPrjTab_SimEx_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objvPrjTab_Sim == null) return;
        const strMsg = Format(
          '表名：{0}({1})没有相关的SqlView,请检查！',
          objvPrjTab_Sim.tabName,
          objvPrjTab_Sim.tabName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const strSqlViewId = ''; //= objSqlViewEN.sqlViewId;
      //进行尝试生成视图，看视图文本是否合法
      await SqlViewEx_CreateView4Sql(
        strSqlViewId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
        clsPrivateSessionStorage.currPrjDataBaseId,
        true,
      );
      //正式地生成视图
      await SqlViewEx_CreateView4Sql(
        strSqlViewId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
        clsPrivateSessionStorage.currPrjDataBaseId,
        false,
      );

      PrjTabFld_ReFreshCache(TabId_Static.value);
      prjTabFldStore.delObjLstByTabId(TabId_Static.value);
      alert('在SQL中建立视图完成！');
    } catch (e) {
      const strMsg = Format(
        '设置视图的所有字段的序号出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
  }
  public async btnImportSqlViewFromSqlServer_Click() {
    const strThisFuncName = this.btnImportSqlViewFromSqlServer_Click.name;
    const strTabId = TabId_Static.value;
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    try {
      let strSqlViewId = ''; // clsSqlViewBLEx.GetSqlViewIdByTabIdCache(clsPubVar.CurrSelPrjId, vsTabId);
      try {
        strSqlViewId = await SqlViewEx_GetSqlViewIdByTabIdCache(strTabId, strPrjId);
      } catch (e) {
        const objvPrjTab_Sim = await vPrjTab_SimEx_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objvPrjTab_Sim == null) return;
        await SqlViewEx_ImportSqlViewBySqlViewName(
          clsPrivateSessionStorage.currSelPrjId,
          objvPrjTab_Sim.tabName,
          clsPubLocalStorage.userId,
        );
        strSqlViewId = await SqlViewEx_GetSqlViewIdByTabIdCache(
          clsPrivateSessionStorage.currSelPrjId,
          strTabId,
        );
      }
      await SqlViewEx_ImportSqlViewFromSqlServer(
        strPrjId,
        strSqlViewId,
        clsPubLocalStorage.userId,
        clsPrivateSessionStorage.currPrjDataBaseId,
      );
      await SqlViewEx_FieldAnalysis(strSqlViewId, strPrjId, clsPubLocalStorage.userId);
      await SqlViewEx_GeneSqlView(
        strSqlViewId,
        strPrjId,
        clsPrivateSessionStorage.currPrjDataBaseId,
        clsPubLocalStorage.userId,
      );
      await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      alert('导入Sql视图并分析字段成功！');
    } catch (e) {
      const strMsg = Format(
        '导入Sql视图并分析字段出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
  }

  public async btnAnalysis_Click() {
    //alert("CheckConsistency");
    const strThisFuncName = this.btnAnalysis_Click.name;
    const strTabId = TabId_Static.value;
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    try {
      let strSqlViewId = ''; // clsSqlViewBLEx.GetSqlViewIdByTabIdCache(clsPubVar.CurrSelPrjId, vsTabId);
      try {
        strSqlViewId = await SqlViewEx_GetSqlViewIdByTabIdCache(strTabId, strPrjId);
      } catch (e) {
        const objvPrjTab_Sim = await vPrjTab_SimEx_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objvPrjTab_Sim == null) return;
        await SqlViewEx_ImportSqlViewBySqlViewName(
          clsPrivateSessionStorage.currSelPrjId,
          objvPrjTab_Sim.tabName,
          clsPubLocalStorage.userId,
        );
        strSqlViewId = await SqlViewEx_GetSqlViewIdByTabIdCache(
          clsPrivateSessionStorage.currSelPrjId,
          strTabId,
        );
      }
      await SqlViewEx_ImportSqlViewFromSqlServer(
        strPrjId,
        strSqlViewId,
        clsPubLocalStorage.userId,
        clsPrivateSessionStorage.currPrjDataBaseId,
      );
      await SqlViewEx_FieldAnalysis(strSqlViewId, strPrjId, clsPubLocalStorage.userId);
      await SqlViewEx_GeneSqlView(
        strSqlViewId,
        strPrjId,
        clsPrivateSessionStorage.currPrjDataBaseId,
        clsPubLocalStorage.userId,
      );
      const strRelaTabId = await SqlViewEx_GetRelaTabIdBySqlViewIdCache(strPrjId, strSqlViewId);
      if (IsNullOrEmpty(strRelaTabId) == false) {
        await TabCheckResultEx_DeleteErrorResult(
          strPrjId,
          clsPrivateSessionStorage.currPrjDataBaseId,
          strRelaTabId,
          '15',
          '',
          clsPubLocalStorage.userId,
        );
      }
      await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      alert('分析字段成功！');
    } catch (e) {
      const strMsg = Format(
        '分析字段出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
  }

  /**
   * 重序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   **/
  public async btnReOrder_Click() {
    const strThisFuncName = this.btnReOrder_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    if (this.PreCheck4Order() == false) return;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        tabId: TabId_Static.value,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PrjTabFld_ReOrderAsync(objOrderByData);
      PrjTabFld_ReFreshCache(TabId_Static.value);
      prjTabFldStore.delObjLstByTabId(TabId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '重序出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
  }

  /**
   * 置底
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
   **/
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    if (this.PreCheck4Order() == false) return;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置底的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();

      const jsonObject = {
        tabId: TabId_Static.value,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;

      objOrderByData.KeyIdLst = arrKeyIds;
      await PrjTabFld_GoBottomAsync(objOrderByData);
      PrjTabFld_ReFreshCache(TabId_Static.value);
      prjTabFldStore.delObjLstByTabId(TabId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '置底出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
    const strListDiv = divVarSet.refDivList;
    arrKeyIds.forEach((e) => SetCheckedItem4KeyId(strListDiv, e));
  }

  /**
   * 下移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
   **/
  public async btnDownMove_Click() {
    const strThisFuncName = this.btnDownMove_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    if (this.PreCheck4Order() == false) return;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        tabId: TabId_Static.value,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PrjTabFld_DownMoveAsync(objOrderByData);
      PrjTabFld_ReFreshCache(TabId_Static.value);
      prjTabFldStore.delObjLstByTabId(TabId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '下移记录出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
    const strListDiv = divVarSet.refDivList;
    arrKeyIds.forEach((e) => SetCheckedItem4KeyId(strListDiv, e));
  }

  /**
   * 上移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
   **/
  public async btnUpMove_Click() {
    const strThisFuncName = this.btnUpMove_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    if (this.PreCheck4Order() == false) return;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        tabId: TabId_Static.value,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PrjTabFld_UpMoveAsync(objOrderByData);
      PrjTabFld_ReFreshCache(TabId_Static.value);
      prjTabFldStore.delObjLstByTabId(TabId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '上移记录出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
    const strListDiv = divVarSet.refDivList;
    arrKeyIds.forEach((e) => SetCheckedItem4KeyId(strListDiv, e));
  }

  /** 置顶
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
   **/
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    if (this.PreCheck4Order() == false) return;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置顶的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        tabId: TabId_Static.value,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;

      await PrjTabFld_GoTopAsync(objOrderByData);
      PrjTabFld_ReFreshCache(TabId_Static.value);
      prjTabFldStore.delObjLstByTabId(TabId_Static.value);
    } catch (e) {
      const strMsg = Format(
        '置顶出错。错误:{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
    const strListDiv = divVarSet.refDivList;
    arrKeyIds.forEach((e) => SetCheckedItem4KeyId(strListDiv, e));
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

  /** 替换标题
   *
   **/
  public async btnSetNewCaption_Click() {
    const strThisFuncName = this.btnSetNewCaption_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    try {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
      if (IsNullOrEmpty(strKeyId) == true) {
        alert('请选择需要设置新标题的记录！');
        return '';
      }
      const strNewCaption = GetInputValueInDivObj(divVarSet.refDivFunction, 'txtNewCaption');
      if (IsNullOrEmpty(strNewCaption) == true) {
        const strMsg = '请输入新的标题(Caption)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      const lngMid = Number(strKeyId);
      const strFldId = await PrjTabFldEx_SetNewCaption(
        lngMid,
        strNewCaption,
        clsPubLocalStorage.userId,
      );
      if (strFldId.length > 0) {
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        vFieldTab_Sim2Store.delObj(strFldId);
        vFieldTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        alert('设置新标题成功！');
      }
    } catch (e) {
      const strMsg = Format(
        '设置新标题的标题不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 替换新字段
   *
   **/
  public async btnReplaceFldName_Click() {
    const strThisFuncName = this.btnReplaceFldName_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    try {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
      if (IsNullOrEmpty(strKeyId) == true) {
        alert('请选择需要替换新字段的记录！');
        return '';
      }
      const strNewFldName = GetInputValueInDivObj(divVarSet.refDivFunction, 'txtNewFldName');
      if (IsNullOrEmpty(strNewFldName) == true) {
        const strMsg = '请输入新字段名称(FldName)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      const lngMid = Number(strKeyId);
      const strFldId = await PrjTabFldEx_ReplaceFldName(
        lngMid,
        strNewFldName,
        clsPubLocalStorage.userId,
      );
      if (strFldId.length > 0) {
        alert('替换新字段成功！');
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        vFieldTab_Sim2Store.delObj(strFldId);
        vFieldTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
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

  public async btnSetGeneProp_Click(strGeneProp: string) {
    const strThisFuncName = this.btnSetIsForExtendClass_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    let strTabId = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要设置默认路径的扩展字段!`);
      return '';
    }

    try {
      let intCount = 0;
      let bolIsSuccess = true;
      for (const strmId of arrKeyIds) {
        const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strmId));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return '';
        }
        if (strGeneProp == '01') {
          objPrjTabFld.SetIsGeneProp(true);
        } else if (strGeneProp == '02') {
          objPrjTabFld.SetIsGeneProp(false);
        } else {
          continue;
        }
        strTabId = objPrjTabFld.tabId;
        objPrjTabFld.SetmId(objPrjTabFld.mId);
        objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

        const bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);

        bolIsSuccess = bolIsSuccess && bolResult;
        intCount++;
      }
      if (bolIsSuccess && intCount > 0) {
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        alert('设置是否生成属性成功!');
      } else {
        alert('设置是否生成属性不成功!');
      }
      return '';
    } catch (e) {
      const strMsg = Format(
        '设置默认路径不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async btnSetIsForExtendClass_Click() {
    const strThisFuncName = this.btnSetIsForExtendClass_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    let strTabId = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要设置默认路径的扩展字段!`);
      return '';
    }

    try {
      let intCount = 0;
      let bolIsSuccess = true;
      for (const strmId of arrKeyIds) {
        const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strmId));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return '';
        }
        if (objPrjTabFld.isForExtendClass == false) {
          objPrjTabFld.SetIsForExtendClass(true);
        } else {
          objPrjTabFld.SetIsForExtendClass(false);
        }

        strTabId = objPrjTabFld.tabId;
        objPrjTabFld.SetmId(objPrjTabFld.mId);
        objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

        const bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);

        bolIsSuccess = bolIsSuccess && bolResult;
        intCount++;
      }
      if (bolIsSuccess && intCount > 0) {
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        alert('设置扩展字段成功!');
      } else {
        alert('设置扩展字段不成功!');
      }
      return '';
    } catch (e) {
      const strMsg = Format(
        '设置默认路径不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async btnCancelIsForExtendClass_Click() {
    const strThisFuncName = this.btnCancelIsForExtendClass_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    let strTabId = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要取消扩展字段!`);
      return '';
    }

    try {
      let intCount = 0;
      let bolIsSuccess = true;
      for (const strmId of arrKeyIds) {
        const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strmId));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return '';
        }

        objPrjTabFld.SetIsForExtendClass(false);

        strTabId = objPrjTabFld.tabId;
        objPrjTabFld.SetmId(objPrjTabFld.mId);
        objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

        const bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);

        bolIsSuccess = bolIsSuccess && bolResult;
        intCount++;
      }
      if (bolIsSuccess && intCount > 0) {
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        alert('取消扩展字段成功!');
      } else {
        alert('取消扩展字段不成功!');
      }
      return '';
    } catch (e) {
      const strMsg = Format(
        '取消扩展字段不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnSetDnPath_Click() {
    const strThisFuncName = this.btnSetDnPath_Click.name;
    try {
      window.open('../AIModule/DnPath_Sel', '', 'width:800px; height:500px');
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

  public async btnSetFieldConv_Click() {
    const strThisFuncName = this.btnSetFieldConv_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    let strTabId = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要设置默认路径的扩展字段!`);
      return;
    }

    try {
      let intCount = 0;
      let bolIsSuccess = true;
      for (const strmId of arrKeyIds) {
        const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strmId));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (objPrjTabFld.isForExtendClass == false) continue;
        strTabId = objPrjTabFld.tabId;
        const arrConnectedNode: Array<clsDataNodeEN> = await DataNodeEx_GetConnectedNodeByTabId(
          objPrjTabFld.tabId,
          clsPrivateSessionStorage.currSelPrjId,
        );

        const arrDataNodeId_CurrTab = arrConnectedNode.map((x) => x.dataNodeId);
        const arrDnPathObjLstCache0 = await vDnPath_Sim_GetObjLstCache(
          clsPrivateSessionStorage.currSelPrjId,
        );
        const arrDnPathObjLstCache = arrDnPathObjLstCache0.map(vDnPath_SimEx_CopyToEx);

        const arrDnPath_CurrTab = arrDnPathObjLstCache.filter(
          (x) => arrDataNodeId_CurrTab.indexOf(x.inDataNodeId) > -1,
        );

        for (const objInfor of arrDnPath_CurrTab) {
          await vDnPath_SimEx_FuncMapByFldName(clsvDnPath_SimENEx.con_InFldId, objInfor);
          await vDnPath_SimEx_FuncMapByFldName(clsvDnPath_SimENEx.con_OutFldId, objInfor);
        }

        const arrDnPath_Sel = arrDnPath_CurrTab.filter((x) => x.outFldId == objPrjTabFld.fldId);
        // let objDnPath_Sel;
        let bolResult = false;
        if (arrDnPath_Sel.length > 0) {
          objPrjTabFld.SetDnPathId(arrDnPath_Sel[0].dnPathId);
          objPrjTabFld.SetmId(objPrjTabFld.mId);
          objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

          bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);
        }
        bolIsSuccess = bolIsSuccess && bolResult;
        intCount++;
      }
      if (bolIsSuccess && intCount > 0) {
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        alert('设置默认路径成功!');
      } else {
        alert('设置默认路径不成功!');
      }
    } catch (e) {
      const strMsg = Format(
        '设置默认路径不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnSetDefaDnPath_Click() {
    const strThisFuncName = this.btnSetDefaDnPath_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    const vDataNode_SimStore = usevDataNode_SimStore();
    // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    let strTabId = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要设置默认路径的扩展字段!`);
      return;
    }

    try {
      // const intCount = 0;
      let bolIsSuccess = true;
      let intSetDnPathCount = 0;
      const arrErrMsg = new Array<clsErrMsgENEx>();
      for (const strmId of arrKeyIds) {
        let objErrMsg: clsErrMsgENEx;
        const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strmId));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          //alert(strMsg);
          objErrMsg = new clsErrMsgENEx(strMsg, 1);
          arrErrMsg.push(objErrMsg);
          continue;
        }
        if (IsNullOrEmpty(objPrjTabFld.inFldId) == true) {
          const strMsg = Format(
            '只能给有In字段的记录设置路径.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          //alert(strMsg);
          //return;
          objErrMsg = new clsErrMsgENEx(strMsg, 1);
          arrErrMsg.push(objErrMsg);
        }
        if (objPrjTabFld.isForExtendClass == false) continue;
        strTabId = objPrjTabFld.tabId;
        const arrDataNode_CurrTab = await vDataNode_SimStore.getObjLstByTabId(objPrjTabFld.tabId);

        const arrDataNodeId_CurrTab = arrDataNode_CurrTab.map((x) => x.dataNodeId);
        const arrDnPathObjLstCache0 = await vDnPath_Sim_GetObjLstCache(
          clsPrivateSessionStorage.currSelPrjId,
        );
        const arrDnPathObjLstCache = arrDnPathObjLstCache0.map(vDnPath_SimEx_CopyToEx);
        const arrDnPath_CurrTab = arrDnPathObjLstCache.filter(
          (x) => arrDataNodeId_CurrTab.indexOf(x.inDataNodeId) > -1,
        );
        if (arrDnPath_CurrTab.length == 0) {
          const strMsg = Format(
            '当前表的路径数为0，不能进行路径设置.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        //for (var objDnPathEx of arrDnPath_CurrTab) {
        //    vDnPath_SimEx_FuncMapByFldName(clsvDnPath_SimENEx.con_InFldId, objDnPathEx);
        //}
        for (const objInfor of arrDnPath_CurrTab) {
          await vDnPath_SimEx_FuncMapByFldName(clsvDnPath_SimENEx.con_InFldId, objInfor);
          await vDnPath_SimEx_FuncMapByFldName(clsvDnPath_SimENEx.con_OutFldId, objInfor);
        }

        const arrDnPath_Sel0 = arrDnPath_CurrTab.filter((x) => x.inFldId == objPrjTabFld.inFldId);
        if (arrDnPath_Sel0.length == 0) {
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            objPrjTabFld.inFldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strMsg = Format(
            '在表的所有路径中，没有输入(In)字段:[{0}]的路径.(in {1}.{2})',
            strFldName,
            this.constructor.name,
            strThisFuncName,
          );
          //                    console.error(strMsg);

          objErrMsg = new clsErrMsgENEx(strMsg, 1);
          arrErrMsg.push(objErrMsg);
          continue;
        }

        let arrDnPath_Sel = arrDnPath_Sel0.filter((x) => x.outFldId == objPrjTabFld.fldId);
        if (arrDnPath_Sel.length == 0) {
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            objPrjTabFld.fldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strMsg = Format(
            '在表的所有路径中，没有输出字段:[{0}]的路径.(in {1}.{2})',
            strFldName,
            this.constructor.name,
            strThisFuncName,
          );
          //                    console.error(strMsg);

          objErrMsg = new clsErrMsgENEx(strMsg, 1);

          const objFieldTab = await FieldTab_GetObjByFldIdAsync(objPrjTabFld.fldId);
          if (objFieldTab != null && IsNullOrEmpty(objFieldTab.homologousFldId) == false) {
            arrDnPath_Sel = arrDnPath_Sel0.filter((x) => x.outFldId == objFieldTab.homologousFldId);
            if (arrDnPath_Sel.length == 0) {
              arrErrMsg.push(objErrMsg);
              const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
                objFieldTab.homologousFldId,
                clsPrivateSessionStorage.currSelPrjId,
              );
              const strMsg = Format(
                '在表的所有路径中，没有输出字段:[{0}]的路径.(in {1}.{2})',
                strFldName,
                this.constructor.name,
                strThisFuncName,
              );
              //                    console.error(strMsg);

              objErrMsg = new clsErrMsgENEx(strMsg, 1);
              arrErrMsg.push(objErrMsg);
              continue;
            }
          } else {
            arrErrMsg.push(objErrMsg);
            continue;
          }
        }
        // let objDnPath_Sel;
        let bolResult = false;
        let bolIsFindDnPath = false;
        for (const objInFor of arrDnPath_Sel) {
          const objDnPath = await DnPath_GetObjByDnPathIdAsync(arrDnPath_Sel[0].dnPathId);
          if (objDnPath == null) continue;
          if (objDnPath.errMsg != null && objDnPath.errMsg.length > 0) continue;
          objPrjTabFld.SetDnPathId(objInFor.dnPathId);
          bolIsFindDnPath = true;
        }
        if (bolIsFindDnPath == false) continue;
        objPrjTabFld.SetmId(objPrjTabFld.mId);
        objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

        bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);
        intSetDnPathCount++;

        bolIsSuccess = bolIsSuccess || bolResult;
        //intCount++;
      }
      if (intSetDnPathCount > 0) {
        await PrjTabFldEx_CheckTabFldsUp(
          strTabId,
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
      if (intSetDnPathCount > 0 && arrErrMsg.length == 0) {
        alert(Format('设置默认路径成功!共设置了:[{0}]个字段。', intSetDnPathCount));
      } else {
        const strErrMsgLst = clsErrMsgBLEx.GetErrMsgByObjLst(arrErrMsg);
        alert(`设置默认路径不成功!${strErrMsgLst}`);
      }
    } catch (e) {
      const strMsg = Format(
        '设置默认路径不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnSetDispUnit_Click() {
    const strThisFuncName = this.btnSetDefaDnPath_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    const vDataNode_SimStore = usevDataNode_SimStore();
    // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    let strTabId = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要设置默认路径的扩展字段!`);
      return;
    }

    try {
      // const intCount = 0;
      let bolIsSuccess = true;
      let intSetDnPathCount = 0;
      const arrErrMsg = new Array<clsErrMsgENEx>();
      for (const strmId of arrKeyIds) {
        let objErrMsg;
        const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(Number(strmId));
        if (objPrjTabFld == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          //alert(strMsg);
          objErrMsg = new clsErrMsgENEx(strMsg, 1);
          arrErrMsg.push(objErrMsg);
          continue;
        }
        if (IsNullOrEmpty(objPrjTabFld.inFldId) == true) {
          const strMsg = Format(
            '只能给有In字段的记录设置路径.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          //alert(strMsg);
          //return;
          objErrMsg = new clsErrMsgENEx(strMsg, 1);
          arrErrMsg.push(objErrMsg);
        }
        if (objPrjTabFld.isForExtendClass == false) continue;
        strTabId = objPrjTabFld.tabId;
        const arrDataNode_CurrTab = await vDataNode_SimStore.getObjLstByTabId(objPrjTabFld.tabId);

        const arrDataNodeId_CurrTab = arrDataNode_CurrTab.map((x) => x.dataNodeId);
        const arrDnPathObjLstCache0 = await vDnPath_Sim_GetObjLstCache(
          clsPrivateSessionStorage.currSelPrjId,
        );
        const arrDnPathObjLstCache = arrDnPathObjLstCache0.map(vDnPath_SimEx_CopyToEx);
        const arrDnPath_CurrTab = arrDnPathObjLstCache.filter(
          (x) => arrDataNodeId_CurrTab.indexOf(x.inDataNodeId) > -1,
        );
        if (arrDnPath_CurrTab.length == 0) {
          const strMsg = Format(
            '当前表的路径数为0，不能进行路径设置.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        //for (var objDnPathEx of arrDnPath_CurrTab) {
        //    vDnPath_SimEx_FuncMapByFldName(clsvDnPath_SimENEx.con_InFldId, objDnPathEx);
        //}
        for (const objInfor of arrDnPath_CurrTab) {
          await vDnPath_SimEx_FuncMapByFldName(clsvDnPath_SimENEx.con_InFldId, objInfor);
          await vDnPath_SimEx_FuncMapByFldName(clsvDnPath_SimENEx.con_OutFldId, objInfor);
        }

        const arrDnPath_Sel0 = arrDnPath_CurrTab.filter((x) => x.inFldId == objPrjTabFld.inFldId);
        if (arrDnPath_Sel0.length == 0) {
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            objPrjTabFld.inFldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strMsg = Format(
            '在表的所有路径中，没有输入(In)字段:[{0}]的路径.(in {1}.{2})',
            strFldName,
            this.constructor.name,
            strThisFuncName,
          );
          //                    console.error(strMsg);

          objErrMsg = new clsErrMsgENEx(strMsg, 1);
          arrErrMsg.push(objErrMsg);
          continue;
        }
        let arrDnPath_Sel = arrDnPath_Sel0.filter((x) => x.outFldId == objPrjTabFld.fldId);
        if (arrDnPath_Sel.length == 0) {
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            objPrjTabFld.fldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          const strMsg = Format(
            '在表的所有路径中，没有输出字段:[{0}]的路径.(in {1}.{2})',
            strFldName,
            this.constructor.name,
            strThisFuncName,
          );
          //                    console.error(strMsg);

          objErrMsg = new clsErrMsgENEx(strMsg, 1);

          const objFieldTab = await FieldTab_GetObjByFldIdAsync(objPrjTabFld.fldId);
          if (objFieldTab != null && IsNullOrEmpty(objFieldTab.homologousFldId) == false) {
            arrDnPath_Sel = arrDnPath_Sel0.filter((x) => x.outFldId == objFieldTab.homologousFldId);
            if (arrDnPath_Sel.length == 0) {
              arrErrMsg.push(objErrMsg);
              const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
                objFieldTab.homologousFldId,
                clsPrivateSessionStorage.currSelPrjId,
              );
              const strMsg = Format(
                '在表的所有路径中，没有输出字段:[{0}]的路径.(in {1}.{2})',
                strFldName,
                this.constructor.name,
                strThisFuncName,
              );
              //                    console.error(strMsg);

              objErrMsg = new clsErrMsgENEx(strMsg, 1);
              arrErrMsg.push(objErrMsg);
              continue;
            }
          } else {
            arrErrMsg.push(objErrMsg);
            console.log(objErrMsg);
            continue;
          }
        }
        // let objDnPath_Sel;
        let bolResult = false;
        let bolIsFindDnPath = false;
        for (const objInFor of arrDnPath_Sel) {
          const objDnPath = await DnPath_GetObjByDnPathIdAsync(arrDnPath_Sel[0].dnPathId);
          if (objDnPath == null) continue;
          if (objDnPath.errMsg != null && objDnPath.errMsg.length > 0) continue;
          objPrjTabFld.SetDnPathId(objInFor.dnPathId);
          bolIsFindDnPath = true;
        }
        if (bolIsFindDnPath == false) continue;
        objPrjTabFld.SetmId(objPrjTabFld.mId);
        objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

        bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);
        intSetDnPathCount++;

        bolIsSuccess = bolIsSuccess || bolResult;
        //intCount++;
      }
      if (intSetDnPathCount > 0) {
        await PrjTabFldEx_CheckTabFldsUp(
          strTabId,
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
      if (intSetDnPathCount > 0 && arrErrMsg.length == 0) {
        alert(Format('设置默认路径成功!共设置了:[{0}]个字段。', intSetDnPathCount));
      } else {
        const strErrMsgLst = clsErrMsgBLEx.GetErrMsgByObjLst(arrErrMsg);
        alert(`设置默认路径不成功!${strErrMsgLst}`);
      }
    } catch (e) {
      const strMsg = Format(
        '设置默认路径不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnGenNewTabInSQL_Click() {
    const strThisFuncName = this.btnGenNewTabInSQL_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const bolResult = await AutoGeneCode_GenNewTabInSQL(
        TabId_Static.value,
        clsPrivateSessionStorage.currSelPrjId,
        clsPrivateSessionStorage.currPrjDataBaseId,
        clsPubLocalStorage.userId,
      );

      if (bolResult == true) {
        alert('建立新表成功！');
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        await PrjTabEx_SetUpdDate(TabId_Static.value, clsPrivateSessionStorage.userId);
        await this.BindGv_PrjTabFld4Func_CheckConsistency(divVarSet.refDivList);
      }
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

  /** 替换新字段
   *
   **/
  public async btnMoveRecTo_Click(strNewSequenceNumber: string) {
    const strThisFuncName = this.btnMoveRecTo_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要改变序号的记录！');
        return '';
      }
      // const strNewSequenceNumber = GetInputValueInDivObj(
      //   PrjTabFldCRUD.divFunction,
      //   'txtSequenceNumber_SetFldValue',
      // );
      if (IsNullOrEmpty(strNewSequenceNumber) == true) {
        const strMsg = '请输入新序号(strNewSequenceNumber)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      let bolResult = false;
      for (const strKeyId of arrKeyIds) {
        const lngMid = Number(strKeyId);
        bolResult = await PrjTabFldEx_MoveRecTo(
          lngMid,
          Number(strNewSequenceNumber),
          TabId_Static.value,
          clsPubLocalStorage.userId,
        );
      }
      if (bolResult == true) {
        message.success('改变序号成功！');
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
    } catch (e) {
      const strMsg = Format(
        '改变序号不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-tabId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnCopyToPrjTabClick() {
    const strThisFuncName = this.btnCopyToPrjTabClick.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要复制到新表的记录！');
        return '';
      }
      const strTabId = GetSelectValueInDivObj(divVarSet.refDivFunction, 'ddlTabId_SetFldValue');
      if (strTabId == '') {
        const strMsg = '请输入新表(tabId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strTabId=' + strTabId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      const myData = {
        arrKeyIds,
        strTabId,
        strPrjId: clsPrivateSessionStorage.currSelPrjId,
        strPrjDataBaseId: clsPrivateSessionStorage.currPrjDataBaseId,
        strOpUser: clsPubLocalStorage.userId,
      };
      const bolResult = await PrjTabFldEx_CopyToPrjTab(myData);
      if (bolResult == true) {
        alert('复制到新表记录成功！');

        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
    } catch (e) {
      const strMsg = Format(
        '复制到新表不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async btnSubmitClearDnPath_Click(strMid: string) {
    const strThisFuncName = this.btnSubmitSetDnPath_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const lngmId = Number(strMid);
      const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(lngmId);
      if (objPrjTabFld == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (objPrjTabFld.isForExtendClass == false) {
        return;
      }
      const strTabId = objPrjTabFld.tabId;
      let bolResult = false;
      objPrjTabFld.SetDnPathId('[null]');
      objPrjTabFld.SetmId(objPrjTabFld.mId);
      objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

      bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);
      if (bolResult) {
        await PrjTabFldEx_CheckTabFldsUp(
          objPrjTabFld.tabId,
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        alert('取消路径成功!');
      } else {
        alert('取消路径不成功!');
      }
    } catch (e) {
      const strMsg = Format(
        '取消路径不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnSubmitSetDnPath_Click(strMid: string, strDnPathId: string) {
    const strThisFuncName = this.btnSubmitSetDnPath_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const lngmId = Number(strMid);
      const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(lngmId);
      if (objPrjTabFld == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (objPrjTabFld.isForExtendClass == false) {
        return;
      }
      const strTabId = objPrjTabFld.tabId;
      let bolResult = false;

      objPrjTabFld.SetDnPathId(strDnPathId);
      if (IsNullOrEmpty(strDnPathId)) {
        objPrjTabFld.SetDnPathId('[null]');
      }
      objPrjTabFld.SetmId(objPrjTabFld.mId);
      objPrjTabFld.sfUpdFldSetStr = objPrjTabFld.updFldString; //设置哪些字段被修改(脏字段)

      bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);
      if (bolResult) {
        await PrjTabFldEx_CheckTabFldsUp(
          objPrjTabFld.tabId,
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );

        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
        alert('设置路径成功!');
      } else {
        alert('设置路径不成功!');
      }
    } catch (e) {
      const strMsg = Format(
        '设置路径不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrmId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const arrPrjTabFldObjLst = await PrjTabFld_GetObjLstBymIdLstAsync(arrmId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrPrjTabFldObjLst) {
        const objFieldTab = await FieldTab_GetObjByFldIdAsync(objInFor.fldId);
        if (objFieldTab == null) continue;
        objFieldTab.fldName = Format('{0}_C', objFieldTab.fldName);
        const strUniCondition = FieldTab_GetUniCondStr(objFieldTab);
        const strFldId_Exist = await FieldTab_GetFirstIDAsync(strUniCondition);
        if (IsNullOrEmpty(strFldId_Exist) == false) {
          objInFor.fldId = strFldId_Exist;
        } else {
          objFieldTab.fldId = await FieldTab_GetMaxStrIdByPrefixAsync(objFieldTab.prjId);
          const strFldId = await FieldTab_AddNewRecordWithReturnKeyAsync(objFieldTab);
          if (IsNullOrEmpty(strFldId) == true) continue;
          objInFor.fldId = strFldId;
        }
        objInFor.updDate = clsDateTime.getCurrTime(1);
        const returnBool = await PrjTabFld_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          PrjTabFld_ReFreshCache(TabId_Static.value);
          prjTabFldStore.delObjLstByTabId(TabId_Static.value);
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

  /** 替换标题btnRefreshList_Click
   *
   **/
  public async btnSetInFldId_Click() {
    const strThisFuncName = this.btnSetInFldId_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    try {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
      if (IsNullOrEmpty(strKeyId) == true) {
        alert('请选择需要设置In字段的记录！');
        return '';
      }
      const strInFldId = GetSelectValueInDivObj(divVarSet.refDivFunction, 'ddlInFldId_SetFldValue');
      if (strInFldId == '') {
        const strMsg = '请选择In字段(InFldId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      const lngMid = Number(strKeyId);
      const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(lngMid);
      if (objPrjTabFld == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPrjTabFld.SetmId(lngMid);
      objPrjTabFld.SetInFldId(strInFldId);
      const bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);
      if (bolResult == true) {
        alert('设置In字段成功！');
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        vFieldTab_Sim2Store.delObj(objPrjTabFld.fldId);
        await PrjTabEx_SetUpdDate(objPrjTabFld.tabId, clsPrivateSessionStorage.userId);
        await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
    } catch (e) {
      const strMsg = Format(
        '设置In字段不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async btnCancelInFld_Click() {
    const strThisFuncName = this.btnCancelInFld_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    try {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
      if (IsNullOrEmpty(strKeyId) == true) {
        alert('请选择需要取消In字段的记录！');
        return '';
      }

      const lngMid = Number(strKeyId);
      const objPrjTabFld = await PrjTabFld_GetObjBymIdAsync(lngMid);
      if (objPrjTabFld == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPrjTabFld.SetmId(lngMid);
      objPrjTabFld.SetInFldId('');
      const bolResult = await PrjTabFld_UpdateRecordAsync(objPrjTabFld);
      if (bolResult == true) {
        alert('取消In字段成功！');
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        vFieldTab_Sim2Store.delObj(objPrjTabFld.fldId);
        await PrjTabEx_SetUpdDate(objPrjTabFld.tabId, clsPrivateSessionStorage.userId);
        await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
    } catch (e) {
      const strMsg = Format(
        '取消In字段不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 替换标题
   *
   **/
  public async btnRefreshList_Click() {
    const strThisFuncName = this.btnSetInFldId_Click.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      PrjTabFld_ReFreshCache(TabId_Static.value);
      prjTabFldStore.delObjLstByTabId(TabId_Static.value);
      if (PrjTabFldCRUDEx.ShowMode == 'CheckConsistency') {
        await this.BindGv_PrjTabFld4Func_CheckConsistency(divVarSet.refDivList);
      } else {
        await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
      }
    } catch (e) {
      const strMsg = Format(
        '设置In字段不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[fldId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_InFldIdInDiv(strTabId: string, strPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vFieldTab_SimEx_BindDdl_FldIdInDivExCache(
      divVarSet.refDivFunction,
      'ddlInFldId_SetFldValue',
      strTabId,
      strPrjId,
    ); //编辑区域
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    viewVarSet.sortPrjTabFldBy = Format('{0} {1}', sortColumnKey, sortDirection);
    // PrjTabCRUD.ascOrDesc4SortFun = sortDirection;
    // PrjTabCRUD.sortFunStatic = sortFun;
    await this.BindGv_PrjTabFld4Func(divVarSet.refDivList);
  }
}

function EditPrjTab(strTabId: string) {
  PrjTabFldCRUDEx.vuebtn_Click('EditPrjTab', strTabId);
}
