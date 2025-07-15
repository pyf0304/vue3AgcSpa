/*import $ from "jquery";*/
import TabFunctionProp_EditEx from '../PrjFunction/TabFunctionProp_EditEx';
import PrjConstraint_EditEx from './PrjConstraint_EditEx';
import PrjTabFld_EditEx from './PrjTabFld_EditEx';
import PrjTab_EditEx from './PrjTab_EditEx';
import TabFeature_EditEx from './TabFeature_EditEx';
import { clsPubFun4Button } from '@/ts/FunClass/clsPubFun4Button';
import { clsCMProjectENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectENEx';
import { clsTabFunctionPropEN } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { enumTabMainType } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
import {
  CMProject_GetNameByCmPrjIdCache,
  CMProject_GetObjByCmPrjIdCache,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import {
  TabFunctionProp_GetObjLstCache,
  TabFunctionProp_ReFreshCache,
} from '@/ts/L3ForWApi/PrjFunction/clsTabFunctionPropWApi';
import { FuncModule_Agc_GetObjByFuncModuleAgcIdCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';

import {
  PrjTabFld_GetObjLstCache,
  PrjTabFld_ReFreshCache,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import { PrjTab_GetObjLstAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import { CMProjectEx_GetObjLstByPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';

import {
  TabFunctionPropEx_CopyToEx,
  TabFunctionPropEx_DelRecordEx,
  TabFunctionPropEx_FuncMapByFldName,
  TabFunctionPropEx_SortFunByFuncName,
} from '@/ts/L3ForWApiEx/PrjFunction/clsTabFunctionPropExWApi';
import { FuncModule_AgcEx_BindDdl_FuncModuleAgcIdCacheEx } from '@/ts/L3ForWApiEx/PrjManage/clsFuncModule_AgcExWApi';
import { PrjConstraintEx_DelRecordEx } from '@/ts/L3ForWApiEx/Table_Field/clsPrjConstraintExWApi';
import {
  PrjTabEx_DelRecordEx,
  PrjTabEx_SortFunByTabName,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import {
  PrjTabFldEx_CopyToEx,
  PrjTabFldEx_DelRecordEx,
  PrjTabFldEx_FuncMapByFldName,
  PrjTabFldEx_SortFunBySequenceNumber,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { TabFeatureEx_DelRecordEx } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import { UserDefaValue_LocalEx_setUserDefaValue } from '@/ts/L3ForWApiEx/UserManage/clsUserDefaValue_LocalExWApi';
import {
  CheckControlExistInDivObj,
  GetArray,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  GetUniDivInDoc,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { PrjTabCRUD } from '@/viewsBase/Table_Field/PrjTabCRUD';
import { clsPrjConstraintENEx } from '@/ts/L0Entity/Table_Field/clsPrjConstraintENEx';
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { clsTabFunctionPropENEx } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropENEx';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import {
  vTabFeature_SimEx_CopyToEx,
  vTabFeature_SimEx_FuncMapByFldName,
  vTabFeature_SimEx_GetObjLstCache,
  vTabFeature_SimEx_SortFunByTabFeatureName,
} from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';
import { vTabFeature_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';

import {
  divVarSet,
  PrjId_Session,
  TabId_Static,
  viewVarSet,
} from '@/views/Table_Field/PrjTabVueShare';
import {
  vCmProjectPrjTab_SimEx_GetTabIdLstByCmPrjIdCache,
  vPrjConstraint_SimEx_SortFunByConstraintName,
} from '@/ts/L3ForWApiEx/CodeMan/clsvCmProjectPrjTab_SimExWApi';
import {
  vPrjConstraint_Sim_GetObjLstCache,
  vPrjConstraint_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';
import {
  vPrjConstraint_SimEx_CopyToEx,
  vPrjConstraint_SimEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/Table_Field/clsvPrjConstraint_SimExWApi';

/** PrjTab_CheckConsistencyEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PrjTab_CheckConsistencyEx extends PrjTabCRUD implements IShowList {
  public static CmPrjIdCache = '9991';
  public static strDivName4Tree = 'divUl';
  public static strUlName4Menu = 'ulPARENT';

  public static divName4Query = 'PrjTab_CheckConsistencyEx.divQuery_Main';

  public static strTabId = '';

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
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_PrjTab]！');
    //this.BindGv_PrjTab();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case `${clsPrjTabEN._CurrTabName}MultiCreate`:
        //this.BindTr_PrjTable(PrjTab_CheckConsistencyEx.strDivName4Tree, PrjTab_CheckConsistencyEx.SetOnClick);
        PrjTab_CheckConsistencyEx.BindPrjTable(
          PrjTab_CheckConsistencyEx.strUlName4Menu,
          divVarSet.refDivLayout,
        );

        break;
      case clsPrjTabEN._CurrTabName:
      case `${clsPrjTabEN._CurrTabName}Add`:
      case `${clsPrjTabEN._CurrTabName}Update`:
        //this.BindTr_PrjTable(PrjTab_CheckConsistencyEx.strDivName4Tree, PrjTab_CheckConsistencyEx.SetOnClick);
        PrjTab_CheckConsistencyEx.BindPrjTable(
          PrjTab_CheckConsistencyEx.strUlName4Menu,
          divVarSet.refDivLayout,
        );

        break;
      case `${clsPrjTabEN._CurrTabName}AddRela`:
      case `${clsPrjTabEN._CurrTabName}_Rename`:
        //this.BindTr_PrjTable(PrjTab_CheckConsistencyEx.strDivName4Tree, PrjTab_CheckConsistencyEx.SetOnClick);
        PrjTab_CheckConsistencyEx.BindPrjTable(
          PrjTab_CheckConsistencyEx.strUlName4Menu,
          divVarSet.refDivLayout,
        );

        break;
      case `${clsPrjTabEN._CurrTabName}Detail`:
        //this.BindTr_PrjTable(PrjTab_CheckConsistencyEx.strDivName4Tree, PrjTab_CheckConsistencyEx.SetOnClick);
        PrjTab_CheckConsistencyEx.BindPrjTable(
          PrjTab_CheckConsistencyEx.strUlName4Menu,
          divVarSet.refDivLayout,
        );
        break;
      case clsPrjTabFldEN._CurrTabName:
        //this.BindTr_PrjTable(PrjTab_CheckConsistencyEx.strDivName4Tree, PrjTab_CheckConsistencyEx.SetOnClick);
        PrjTab_CheckConsistencyEx.BindPrjTable(
          PrjTab_CheckConsistencyEx.strUlName4Menu,
          divVarSet.refDivLayout,
        );
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
    const objPage: PrjTab_CheckConsistencyEx = new PrjTab_CheckConsistencyEx();
    const objPageEdit: PrjTab_EditEx = new PrjTab_EditEx('PrjTab_EditEx', objPage);
    const strMsg = '';
    let arrKeyIds;

    let objPage_MultiCreate: PrjTab_EditEx;
    let strTabId;
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
        strKeyId = PrjTab_CheckConsistencyEx.strTabId;
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
      case 'AddNewTab': //添加记录
        objPage_MultiCreate = new PrjTab_EditEx('PrjTab_EditEx', objPage);
        objPage_MultiCreate.divName4Edit = 'divEdit_Region';
        objPage_MultiCreate.btnAddNewRecord_Click();
        break;

      //case "DeleteRegion":            //删除记录
      //    let strTabId = PrjTab_CheckConsistencyEx.strTabId;
      //    let strTabId = PrjTab_CheckConsistencyEx.strTabId;
      //    objPage.btnDeleteRegion_Click(strTabId, strTabId);
      //    break;
      //case "UpdateRegion":            //删除记录
      //    let strTabId = PrjTab_CheckConsistencyEx.strTabId;
      //    objPage.btnUpdateRegion_Click(strTabId);
      //    break;
      case 'DeleteTab': //删除记录
        strTabId = PrjTab_CheckConsistencyEx.strTabId;
        objPage.btnDeleteTab_Click(strTabId);
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
        AccessBtnClickDefault(strCommandName, 'PrjTab_CheckConsistencyEx.btn_Click');
        alert(strMsg);
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
      let strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      if (IsNullOrEmpty(strCmPrjId) == true || strCmPrjId == '0') {
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
        //PrjTab_EditEx.applicationTypeIdCache = arrCMProject[0].applicationTypeId;
        //PrjTab_EditEx.CmPrjIdCache = strCmPrjId;
      } else {
        // const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
        //PrjTab_EditEx.applicationTypeIdCache = objCMProject.applicationTypeId;
        //PrjTab_EditEx.CmPrjIdCache = strCmPrjId;
      }

      //clsPubFun.SetCommFun4BL();
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegionEx(strCmPrjId);
      //this.C1MPrjId_q = strCmPrjId;
      await this.BindUl_CmPrjId(clsPrivateSessionStorage.currSelPrjId);

      viewVarSet.sortPrjTabBy = Format('{0} Desc', clsPrjTabEN.con_UpdDate);
      //2、显示无条件的表内容在GridView中

      await PrjTab_CheckConsistencyEx.ChangeCmPrjId(strCmPrjId, divVarSet.refDivLayout);

      //            PrjTab_CheckConsistencyEx.BindPrjTable(PrjTab_CheckConsistencyEx.strUlName4Menu);
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
      const strMsg = Format("PrjTabCRUD.PrjIdCache='9991'，还没有被赋正确的值,请检查!");
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
    //const strPrjId = "";//定义条件字段
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
  /** 显示PrjTab对象的所有属性值
<param name = "divContainer">显示容器</param>
<param name = "arrPrjTabObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_PrjTab4Func(
    divContainer: HTMLDivElement,
    arrPrjTabExObjLst: Array<clsPrjTabENEx>,
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
        fldName: 'tabName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
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
          btn1.setAttribute('onclick', `btnSelectTabIdInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },

      {
        fldName: 'viewCnName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
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
        fldName: 'keyForMainTab',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
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
        fldName: 'regionNum',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '区域数',
        text: '',
        sortBy: 'regionNum',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'tabId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '界面ID',
        text: '',
        sortBy: 'tabId',
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

    await BindTab(divDataLst, arrPrjTabExObjLst, arrDataColumn, 'tabId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public static CombinePrjTabConditionObj(): clsPrjTabEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    // let strWhereCond = `${clsPrjTabEN.con_PrjId} = '${clsPrivateSessionStorage.currSelPrjId}'`;

    const objPrjTabCond: clsPrjTabEN = new clsPrjTabEN();
    objPrjTabCond.SetCondFldValue(
      clsPrjTabEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const objThisPage = new PrjTab_CheckConsistencyEx();
      if (objThisPage.tabName_q != '') {
        // strWhereCond += ` And ${clsPrjTabEN.con_TabName} like '% ${objThisPage.tabName_q}%'`;
        objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabName, objThisPage.tabName_q, 'like');
      }

      if (objThisPage.funcModuleAgcId_q != '' && objThisPage.funcModuleAgcId_q != '0') {
        // strWhereCond += ` And ${clsPrjTabEN.con_FuncModuleAgcId} = '${objThisPage.funcModuleAgcId_q}'`;
        objPrjTabCond.SetCondFldValue(
          clsPrjTabEN.con_FuncModuleAgcId,
          objThisPage.funcModuleAgcId_q,
          '=',
        );
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombinePrjTabConditionObj)时出错!请联系管理员!${objException.message}`;
      throw strMsg;
    }

    return objPrjTabCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombinePrjTabCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'

    let strWhereCond = `${clsPrjTabEN.con_PrjId} = '${clsPrivateSessionStorage.currSelPrjId}'`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.tabName_q != '') {
        strWhereCond += ` And ${clsPrjTabEN.con_TabName} like '% ${this.tabName_q}%'`;
      }

      if (this.funcModuleAgcId_q != '' && this.funcModuleAgcId_q != '0') {
        strWhereCond += ` And ${clsPrjTabEN.con_FuncModuleAgcId} = '${this.funcModuleAgcId_q}'`;
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePrjTabCondition)时出错!请联系管理员!${objException.message}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public static btnEditTabFeature_Click(strKey: string, strTabId: string) {
    TabId_Static.value = strTabId;
    PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
    const objPage: PrjTab_CheckConsistencyEx = new PrjTab_CheckConsistencyEx();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    objPageEdit.divName4Edit = 'divEdit_Region';
    objPageEdit.btnUpdateRecord_Click(strKey);
  }

  public static btnEditTabFunctionProp_Click(strKey: string, strTabId: string) {
    TabId_Static.value = strTabId;
    PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
    const objPage: PrjTab_CheckConsistencyEx = new PrjTab_CheckConsistencyEx();
    const objPageEdit: TabFunctionProp_EditEx = new TabFunctionProp_EditEx(
      'TabFunctionProp_EditEx',
      objPage,
    );
    objPageEdit.divName4Edit = 'divEdit_Region';
    objPageEdit.btnUpdateRecord_Click(Number(strKey));
  }
  public static btnEditPrjConstraint_Click(strKey: string, strTabId: string) {
    // PrjConstraint_Edit.TabIdStatic = strTabId;
    console.log('strTabId:', strTabId);
    PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
    const objPage: PrjTab_CheckConsistencyEx = new PrjTab_CheckConsistencyEx();
    const objPageEdit: PrjConstraint_EditEx = new PrjConstraint_EditEx(
      'PrjConstraint_EditEx',
      objPage,
    );
    objPageEdit.divName4Edit = 'divEdit_Region';
    objPageEdit.btnUpdateRecord_Click(strKey);
  }

  public static btnEditPrjTabFld_Click(strKey: string, strTabId: string) {
    TabId_Static.value = strTabId;
    //TabId_Static.value = strTabId;
    const objPage: PrjTab_CheckConsistencyEx = new PrjTab_CheckConsistencyEx();
    const objPageEdit: PrjTabFld_EditEx = new PrjTabFld_EditEx('PrjTabFld_EditEx', objPage);
    objPageEdit.divName4Edit = 'divEdit_Region';
    objPageEdit.btnUpdateRecord_Click(Number(strKey));
  }
  public static main_Click(strKey: string) {
    PrjTab_CheckConsistencyEx.strTabId = strKey;
    PrjTab_EditEx.TabIdCache = strKey;

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
    PrjTab_CheckConsistencyEx.SetSubNoSelected4All('');
    PrjTab_EditEx.TabIdCache = strKey;
    console.log(strKey);
  }

  public static SetSubNoSelected4All(strKey: string) {
    const objDivUL: HTMLDivElement = <HTMLDivElement>(
      document.getElementById(PrjTab_CheckConsistencyEx.strDivName4Tree)
    );

    const arrAllLi0 = objDivUL.getElementsByTagName('li');
    let arrAllLi: Array<HTMLLIElement> = <Array<HTMLLIElement>>GetArray(arrAllLi0);
    arrAllLi = arrAllLi.filter((x) => x.id.indexOf('liL2_') > -1);
    for (const objSubLi of arrAllLi) {
      const strTabId = objSubLi.getAttribute('tabId');

      if (strTabId != strKey) {
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
  public static sub_Click(strKey: string, strTabId: string) {
    //alert("sub_Click");
    PrjTab_CheckConsistencyEx.strTabId = strKey;
    PrjTab_CheckConsistencyEx.strTabId = strTabId;
    PrjTab_EditEx.TabIdCache = strTabId;

    const strAId = Format('a_{0}_{1}', strTabId, strKey);
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
    //let strTabId = liLevel1.id.substring(5);//.getAttribute("tabId");
    console.log('strTabId', strTabId);
    //let strState = liLevel2.getAttribute("state");
    PrjTab_CheckConsistencyEx.SetSubNoSelected4All(strKey);
    console.log('tabId:(In sub_Click)', strKey);
    PrjTab_CheckConsistencyEx.strTabId = strKey;
    PrjTab_CheckConsistencyEx.strTabId = strTabId;

    //PrjTab_CheckConsistencyEx.ShowPrjTableEdit(strKey, strTabId);
    console.log(strKey);
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
    // const divQuery = <HTMLDivElement>(
    //   document.getElementById('PrjTab_CheckConsistencyEx.divQuery_Main')
    // );
    const bolIsDisplay = divVarSet.refDivQuery.style.display;
    const iBtn = <HTMLElement>document.getElementById('iBtn');
    if (bolIsDisplay == 'none') {
      divVarSet.refDivQuery.style.display = '';
      iBtn.className = 'ico_up';
    } else {
      divVarSet.refDivQuery.style.display = 'none';
      iBtn.className = 'ico_down';
    }

    //await this.BindTr_PrjTable(PrjTab_CheckConsistencyEx.strDivName4Tree, PrjTab_CheckConsistencyEx.SetOnClick);
  }
  /** 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);

    PrjTab_CheckConsistencyEx.BindPrjTable(
      PrjTab_CheckConsistencyEx.strUlName4Menu,
      divVarSet.refDivLayout,
    );

    //await this.BindTr_PrjTable(PrjTab_CheckConsistencyEx.strDivName4Tree, PrjTab_CheckConsistencyEx.SetOnClick);
  }
  public static async BindPrjTable(strUlRoot: string, divLayout: HTMLDivElement) {
    console.log(strUlRoot);
    const UlParent: HTMLUListElement = document.getElementById('ulPARENT') as HTMLUListElement;
    UlParent.innerText = '';
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    console.log('strCmPrjId:', strCmPrjId);
    //const objPrjTabCond = this.CombinePrjTabConditionObj();
    const objThisPage = new PrjTab_CheckConsistencyEx();
    let strWhereCond = await objThisPage.CombinePrjTabCondition();
    strWhereCond += Format(
      " and {0}='{1}'",
      clsPrjTabEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
    );

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

    const spnCmPrjName = <HTMLLabelElement>document.createElement('span');
    spnCmPrjName.innerText = objCMProject.cmPrjName;
    spnCmPrjName.className = 'text-primary font-weight-bold';
    const thisPage = new PrjTab_CheckConsistencyEx();
    lblCondition.appendChild(spnCmPrjName);
    if (IsNullOrEmpty(thisPage.funcModuleAgcId_q) == false) {
      const spnFuncModule = <HTMLLabelElement>document.createElement('span');
      const objFuncModule = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
        thisPage.funcModuleAgcId_q,
        strPrjId,
      );
      if (objFuncModule == null) {
        const strMsg = Format(
          '在项目:[{0}]中，模块Id:[{1}]没有相应模块，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          thisPage.funcModuleAgcId_q,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      spnFuncModule.innerText = objFuncModule.funcModuleName;
      spnFuncModule.className = 'ml-2 text-primary font-weight-bold';
      lblCondition.appendChild(spnFuncModule);
    }
    let arrPrjTabObjLst = await PrjTab_GetObjLstAsync(strWhereCond);
    //let arrPrjTabObjList = await PrjTab_GetObjLstCache(strPrjId);
    if (strCmPrjId != '000000') {
      const arrTabId_CmPrjId = await vCmProjectPrjTab_SimEx_GetTabIdLstByCmPrjIdCache(strCmPrjId);
      arrPrjTabObjLst = arrPrjTabObjLst
        .filter(
          (x) =>
            arrTabId_CmPrjId.indexOf(x.tabId) > -1 &&
            x.tabMainTypeId != enumTabMainType.PureClass_0008,
        )
        .sort(PrjTabEx_SortFunByTabName);
    } else {
      arrPrjTabObjLst = arrPrjTabObjLst
        .filter((x) => x.tabMainTypeId != enumTabMainType.PureClass_0008)
        .sort(PrjTabEx_SortFunByTabName);
    }
    // const arrList: Array<string> = new Array<string>();
    if (arrPrjTabObjLst.length == 0) {
      const strMsg = `获取的数据表数为0.当前CM工程Id:${strCmPrjId},当前工程Id:${strPrjId}`;
      console.error(strMsg);
      throw strMsg;
    }
    const LiHeader: HTMLLIElement = document.createElement('li');
    LiHeader.classList.add('menu-header');
    LiHeader.classList.add('menu-item');

    const Span_Head: HTMLSpanElement = document.createElement('span');
    Span_Head.innerText = '数据表列表:';
    const btnAdd: HTMLButtonElement = clsPubFun4Button.GetButton_Add(
      "btn_Click('AddNewRecordWithMaxId')",
    );
    const btnUpdate: HTMLButtonElement = clsPubFun4Button.GetButton_Update();
    const btnDelete: HTMLButtonElement =
      clsPubFun4Button.GetButton_Delete("btn_Click('DeleteView')");
    //btnAdd.classList.add("ml-1");
    //btnUpdate.classList.add("ml-1");
    //btnDelete.classList.add("ml-1");
    LiHeader.appendChild(Span_Head);
    LiHeader.appendChild(btnAdd);
    LiHeader.appendChild(btnUpdate);
    LiHeader.appendChild(btnDelete);

    UlParent.appendChild(LiHeader);
    for (const objPrjTab of arrPrjTabObjLst) {
      //if (objPrjTab.inUse == false) continue;
      const Li_Tab: HTMLLIElement = document.createElement('li');

      Li_Tab.classList.add('menu-item');
      //Li1.innerText = "主菜单";
      const A_Tab: HTMLAnchorElement = document.createElement('a');
      A_Tab.href = '';
      (function (strTabId1) {
        A_Tab.onclick = function () {
          PrjTab_CheckConsistencyEx.main_Click(strTabId1);
        };
      })(objPrjTab.tabId);
      const I_Tab: HTMLElement = document.createElement('i');
      const Span_Tab: HTMLSpanElement = document.createElement('span');
      Span_Tab.innerText = objPrjTab.tabName;
      I_Tab.classList.add('icon-font');
      I_Tab.classList.add('icon-right');
      A_Tab.appendChild(I_Tab);
      A_Tab.appendChild(Span_Tab);
      Li_Tab.appendChild(A_Tab);

      const U_Tab: HTMLUListElement = document.createElement('ul');
      U_Tab.classList.add('menu-item-child');
      U_Tab.style.display = 'none';
      //添加字段列表
      {
        //intSubMenuRow++;
        const Li_FldLst: HTMLLIElement = document.createElement('li');
        const A_FldLst: HTMLAnchorElement = document.createElement('a');
        const I_FldLst: HTMLElement = document.createElement('i');
        const Span_FldLst: HTMLSpanElement = document.createElement('span');
        Span_FldLst.innerText = Format('{0}-列', objPrjTab.tabName);
        I_FldLst.className = 'icon-font';
        // const strLinkFile0 = Format(
        //   '../T1able_Field/PrjTabFldCRUD?tabId={0}&Op=TabFldEdit',
        //   objPrjTab.tabId,
        // );
        // let strHref = `${strLinkFile0}`;

        // strHref = strHref.replace('//', '/');
        // A_FldLst.href = strHref;
        (function (strTabId1) {
          A_FldLst.onclick = function () {
            EditPrjTab(strTabId1);
          };
        })(objPrjTab.tabId);

        A_FldLst.appendChild(I_FldLst);
        A_FldLst.appendChild(Span_FldLst);
        const U_FldLst: HTMLUListElement = document.createElement('ul');
        U_FldLst.classList.add('menu-item-child');
        U_FldLst.style.display = 'none';

        //const conFldLst = await this.BindSubMenu_FldLst(objPrjTab.tabId, objPrjTab.prjId, U_FldLst);

        Li_FldLst.appendChild(A_FldLst);
        Li_FldLst.appendChild(U_FldLst);

        U_Tab.appendChild(Li_FldLst);
      }
      //添加约束

      {
        //intSubMenuRow++;
        const Li_Constraint: HTMLLIElement = document.createElement('li');
        const A_Constraint: HTMLAnchorElement = document.createElement('a');
        const I_Constraint: HTMLElement = document.createElement('i');
        const Span_Constraint: HTMLSpanElement = document.createElement('span');
        Span_Constraint.innerText = Format('{0}-约束', objPrjTab.tabName);
        I_Constraint.className = 'icon-font';
        const strLinkFile0 = Format(
          '../Table_Field/PrjConstraintCRUD?tabId={0}&Op=TabFldEdit',
          objPrjTab.tabId,
        );
        let strHref = `${strLinkFile0}`;

        strHref = strHref.replace('//', '/');
        A_Constraint.href = strHref;
        //(function (strTabId1, strTabId1) {
        //    A1.onclick = (function () {
        //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
        //    });
        //})(strTabId, strTabId);
        A_Constraint.appendChild(I_Constraint);
        A_Constraint.appendChild(Span_Constraint);
        const U_Constraint: HTMLUListElement = document.createElement('ul');
        U_Constraint.classList.add('menu-item-child');
        U_Constraint.style.display = 'none';
        await this.BindSubMenu_Constraint(objPrjTab.tabId, U_Constraint, divLayout);

        Li_Constraint.appendChild(A_Constraint);
        Li_Constraint.appendChild(U_Constraint);

        U_Tab.appendChild(Li_Constraint);
      }

      //添加功能
      {
        //intSubMenuRow++;
        const Li_TabFeature: HTMLLIElement = document.createElement('li');
        const A_TabFeature: HTMLAnchorElement = document.createElement('a');
        const I_TabFeature: HTMLElement = document.createElement('i');
        const Span_TabFeature: HTMLSpanElement = document.createElement('span');
        Span_TabFeature.innerText = Format('{0}-表功能', objPrjTab.tabName);
        I_TabFeature.className = 'icon-font';
        const strLinkFile0 = Format(
          '../Table_Field/TabFeatureCRUD_Edit?tabId={0}&Op=TabEdit',
          objPrjTab.tabId,
        );
        let strHref = `${strLinkFile0}`;

        strHref = strHref.replace('//', '/');
        A_TabFeature.href = strHref;
        //(function (strTabId1, strTabId1) {
        //    A1.onclick = (function () {
        //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
        //    });
        //})(strTabId, strTabId);
        A_TabFeature.appendChild(I_TabFeature);
        A_TabFeature.appendChild(Span_TabFeature);
        const U_TabFeature: HTMLUListElement = document.createElement('ul');
        U_TabFeature.classList.add('menu-item-child');
        U_TabFeature.style.display = 'none';
        await this.BindSubMenu_TabFeature(objPrjTab.tabId, U_TabFeature, divLayout);

        Li_TabFeature.appendChild(A_TabFeature);
        Li_TabFeature.appendChild(U_TabFeature);

        U_Tab.appendChild(Li_TabFeature);
      }

      //添加表函数属性

      {
        //intSubMenuRow++;
        const Li_TabFunctionProp: HTMLLIElement = document.createElement('li');
        const A_TabFunctionProp: HTMLAnchorElement = document.createElement('a');
        const I_TabFunctionProp: HTMLElement = document.createElement('i');
        const Span_TabFunctionProp: HTMLSpanElement = document.createElement('span');
        Span_TabFunctionProp.innerText = Format('{0}-表函数属性', objPrjTab.tabName);
        I_TabFunctionProp.className = 'icon-font';
        const strLinkFile0 = '';
        let strHref = `${strLinkFile0}`;

        strHref = strHref.replace('//', '/');
        A_TabFunctionProp.href = strHref;
        //(function (strTabId1, strTabId1) {
        //    A1.onclick = (function () {
        //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
        //    });
        //})(strTabId, strTabId);
        A_TabFunctionProp.appendChild(I_TabFunctionProp);
        A_TabFunctionProp.appendChild(Span_TabFunctionProp);
        const U_TabFunctionProp: HTMLUListElement = document.createElement('ul');
        U_TabFunctionProp.classList.add('menu-item-child');
        U_TabFunctionProp.style.display = 'none';
        await this.BindSubMenu_TabFunctionProp(objPrjTab.tabId, U_TabFunctionProp, divLayout);

        Li_TabFunctionProp.appendChild(A_TabFunctionProp);
        Li_TabFunctionProp.appendChild(U_TabFunctionProp);

        U_Tab.appendChild(Li_TabFunctionProp);
      }

      //添加表人工智能

      {
        //intSubMenuRow++;
        const Li_TabAI: HTMLLIElement = document.createElement('li');
        const A_TabAI: HTMLAnchorElement = document.createElement('a');
        const I_TabAI: HTMLElement = document.createElement('i');
        const Span_TabAI: HTMLSpanElement = document.createElement('span');
        Span_TabAI.innerText = Format('{0}-表人工智能函数', objPrjTab.tabName);
        I_TabAI.className = 'icon-font';
        const strLinkFile0 = Format(
          '../AIModule/DnFuncMapCRUD_Edit?tabId={0}&Op=TabEdit',
          objPrjTab.tabId,
        );
        let strHref = `${strLinkFile0}`;

        strHref = strHref.replace('//', '/');
        A_TabAI.href = strHref;
        //(function (strTabId1, strTabId1) {
        //    A1.onclick = (function () {
        //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
        //    });
        //})(strTabId, strTabId);
        A_TabAI.appendChild(I_TabAI);
        A_TabAI.appendChild(Span_TabAI);
        const U_TabAI: HTMLUListElement = document.createElement('ul');
        U_TabAI.classList.add('menu-item-child');
        U_TabAI.style.display = 'none';
        //const conTabAI = await this.BindSubMenu_TabAI(objPrjTab.tabId, U_TabAI);

        Li_TabAI.appendChild(A_TabAI);
        Li_TabAI.appendChild(U_TabAI);

        U_Tab.appendChild(Li_TabAI);
      }
      //生成代码-gc
      {
        //intSubMenuRow++;
        const Li_gc: HTMLLIElement = document.createElement('li');
        const A_gc: HTMLAnchorElement = document.createElement('a');
        const I_gc: HTMLElement = document.createElement('i');
        const Span_gc: HTMLSpanElement = document.createElement('span');
        Span_gc.innerText = Format('{0}-代码生成', objPrjTab.tabName);
        I_gc.className = 'icon-font';
        const strLinkFile0 = Format(
          '../Table_Field/GeneTabCode?tabId={0}&Op=TabEdit',
          objPrjTab.tabId,
        );
        let strHref = `${strLinkFile0}`;

        strHref = strHref.replace('//', '/');
        A_gc.href = strHref;
        //(function (strTabId1, strTabId1) {
        //    A1.onclick = (function () {
        //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
        //    });
        //})(strTabId, strTabId);
        A_gc.appendChild(I_gc);
        A_gc.appendChild(Span_gc);
        Li_gc.appendChild(A_gc);
        U_Tab.appendChild(Li_gc);
      }

      //this.BindSubMenu(objPrjTab.tabId, U_Tab);
      Li_Tab.appendChild(U_Tab);

      UlParent.appendChild(Li_Tab);
    }

    //6、把菜单HTML菜单串显示到界面上。
    //return strHtml.ToString();
  }

  private static async BindSubMenu_Constraint(
    strTabId: string,
    Ul1: HTMLUListElement,
    divLayout: HTMLDivElement,
  ) {
    // const intSubMenuRow = 0;
    const arrPrjConstraintObjLst = await vPrjConstraint_Sim_GetObjLstCache(
      clsPrivateSessionStorage.currSelPrjId,
    );
    const arrPrjConstraintObjLst_Sel = arrPrjConstraintObjLst.filter((x) => x.tabId == strTabId);
    let arrPrjConstraintExObjLst = arrPrjConstraintObjLst_Sel.map(vPrjConstraint_SimEx_CopyToEx);
    // const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    //   strTabId,
    //   clsPrivateSessionStorage.cmPrjId,
    // );
    for (const objInFor of arrPrjConstraintExObjLst) {
      await vPrjConstraint_SimEx_FuncMapByFldName(
        clsPrjConstraintENEx.con_ConstraintTypeName,
        objInFor,
      );
    }
    arrPrjConstraintExObjLst = arrPrjConstraintExObjLst.sort(
      vPrjConstraint_SimEx_SortFunByConstraintName,
    );
    for (const objPrjConstraint of arrPrjConstraintExObjLst) {
      //if (objPrjConstraint.inUse == false) continue;

      //let strTabId = objPrjConstraint.tabId;
      const strPrjConstraintId = objPrjConstraint.prjConstraintId;

      const strConstraintName = objPrjConstraint.constraintName;
      // intSubMenuRow++;

      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = strConstraintName;

      I1.className = 'icon-font';
      const strLinkFile = '';
      let strHref = `${strLinkFile}`;

      strHref = strHref.replace('//', '/');
      A1.id = Format('a_{0}_{1}', strTabId, strTabId);
      A1.href = strHref;
      A1.className = 'subnoselected';
      //A1.href = "#";
      //A1.href = 'javascript:';
      //(function (strTabId1, strTabId1) {
      //    A1.onclick = (function () {
      //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
      //    });
      //})(strTabId, strTabId);
      //A1.onclick = (function () {
      //    PrjTab_CheckConsistencyEx.sub_Click2();
      //});

      A1.appendChild(I1);
      A1.appendChild(Span1);

      const img_Delete = clsPubFun4Button.GetImage_DeleteNoCommand();
      img_Delete.height = 16;
      img_Delete.width = 16;
      img_Delete.className = 'ml-1';
      (function (strTabId1, strFldId1) {
        img_Delete.onclick = function () {
          PrjTab_CheckConsistencyEx.btnDeletePrjConstraint_Click(strTabId1, strFldId1, divLayout);
        };
      })(strTabId, strPrjConstraintId);
      const img_Update = clsPubFun4Button.GetImage_UpdateNoCommand();

      img_Update.height = 16;
      img_Update.width = 16;
      img_Update.className = 'ml-1';

      (function (strPrjConstraintId, strTabId) {
        img_Update.onclick = function () {
          PrjTab_CheckConsistencyEx.btnEditPrjConstraint_Click(strPrjConstraintId, strTabId);
        };
      })(objPrjConstraint.prjConstraintId.toString(), objPrjConstraint.tabId);

      A1.appendChild(img_Delete);
      A1.appendChild(img_Update);

      Li1.appendChild(A1);

      //strHtml.Append("<li>\n");
      //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{1}</span></a>\n",
      //    objPrjConstraint.linkFile, objPrjConstraint.menuName);
      //strHtml.Append("</li>\n");
      Ul1.appendChild(Li1);
    }
  }

  private static async BindSubMenu_TabFeature(
    strTabId: string,
    Ul1: HTMLUListElement,
    divLayout: HTMLDivElement,
  ) {
    // const intSubMenuRow = 0;
    const arrTabFeatureObjLst: Array<clsvTabFeature_SimEN> = await vTabFeature_SimEx_GetObjLstCache(
      clsPrivateSessionStorage.cmPrjId,
    );
    const arrTabFeatureObjLst_Sel = arrTabFeatureObjLst.filter((x) => x.tabId == strTabId);
    let arrTabFeatureExObjLst = arrTabFeatureObjLst_Sel.map(vTabFeature_SimEx_CopyToEx);
    // const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    //   strTabId,
    //   clsPrivateSessionStorage.cmPrjId,
    // );
    for (const objInFor of arrTabFeatureExObjLst) {
      await vTabFeature_SimEx_FuncMapByFldName(clsTabFeatureENEx.con_TabFeatureName, objInFor);
    }
    arrTabFeatureExObjLst = arrTabFeatureExObjLst.sort(vTabFeature_SimEx_SortFunByTabFeatureName);
    for (const objTabFeature of arrTabFeatureExObjLst) {
      //if (objTabFeature.inUse == false) continue;

      //let strTabId = objTabFeature.tabId;
      const strTabFeatureId = objTabFeature.tabFeatureId;

      const strTabFeatureName = objTabFeature.tabFeatureName;
      // intSubMenuRow++;

      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = strTabFeatureName;

      I1.className = 'icon-font';
      const strLinkFile = '';
      let strHref = `${strLinkFile}`;

      strHref = strHref.replace('//', '/');
      A1.id = Format('a_{0}_{1}', strTabId, strTabId);
      A1.href = strHref;
      A1.className = 'subnoselected';
      //A1.href = "#";
      //A1.href = 'javascript:';
      //(function (strTabId1, strTabId1) {
      //    A1.onclick = (function () {
      //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
      //    });
      //})(strTabId, strTabId);
      //A1.onclick = (function () {
      //    PrjTab_CheckConsistencyEx.sub_Click2();
      //});

      A1.appendChild(I1);
      A1.appendChild(Span1);

      const img_Delete = clsPubFun4Button.GetImage_DeleteNoCommand();
      img_Delete.height = 16;
      img_Delete.width = 16;
      img_Delete.className = 'ml-1';
      (function (strTabId1, strFldId1, divLayout) {
        img_Delete.onclick = function () {
          PrjTab_CheckConsistencyEx.btnDeleteTabFeature_Click(strTabId1, strFldId1, divLayout);
        };
      })(strTabId, strTabFeatureId, divLayout);
      const img_Update = clsPubFun4Button.GetImage_UpdateNoCommand();

      img_Update.height = 16;
      img_Update.width = 16;
      img_Update.className = 'ml-1';

      (function (strTabFeatureId, strTabId) {
        img_Update.onclick = function () {
          PrjTab_CheckConsistencyEx.btnEditTabFeature_Click(strTabFeatureId, strTabId);
        };
      })(objTabFeature.tabFeatureId.toString(), objTabFeature.tabId);

      A1.appendChild(img_Delete);
      A1.appendChild(img_Update);

      Li1.appendChild(A1);

      //strHtml.Append("<li>\n");
      //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{1}</span></a>\n",
      //    objTabFeature.linkFile, objTabFeature.menuName);
      //strHtml.Append("</li>\n");
      Ul1.appendChild(Li1);
    }
  }
  private static async BindSubMenu_TabFunctionProp(
    strTabId: string,
    Ul1: HTMLUListElement,
    divLayout: HTMLDivElement,
  ) {
    // const intSubMenuRow = 0;
    const arrTabFunctionPropObjLst: Array<clsTabFunctionPropEN> =
      await TabFunctionProp_GetObjLstCache(clsPrivateSessionStorage.currSelPrjId);
    const arrTabFunctionPropObjLst_Sel = arrTabFunctionPropObjLst.filter(
      (x) => x.tabId == strTabId,
    );
    let arrTabFunctionPropExObjLst = arrTabFunctionPropObjLst_Sel.map(TabFunctionPropEx_CopyToEx);
    // const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    //   strTabId,
    //   clsPrivateSessionStorage.cmPrjId,
    // );
    for (const objInFor of arrTabFunctionPropExObjLst) {
      await TabFunctionPropEx_FuncMapByFldName(clsTabFunctionPropENEx.con_FuncName, objInFor);
    }
    arrTabFunctionPropExObjLst = arrTabFunctionPropExObjLst.sort(
      TabFunctionPropEx_SortFunByFuncName,
    );
    for (const objTabFunctionProp of arrTabFunctionPropExObjLst) {
      //if (objTabFunctionProp.inUse == false) continue;

      //let strTabId = objTabFunctionProp.tabId;
      const lngMid = objTabFunctionProp.mId;

      const strFuncName = objTabFunctionProp.funcName;
      // intSubMenuRow++;

      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = strFuncName;

      I1.className = 'icon-font';
      const strLinkFile = '';
      let strHref = `${strLinkFile}`;

      strHref = strHref.replace('//', '/');
      A1.id = Format('a_{0}_{1}', strTabId, strTabId);
      A1.href = strHref;
      A1.className = 'subnoselected';
      //A1.href = "#";
      //A1.href = 'javascript:';
      //(function (strTabId1, strTabId1) {
      //    A1.onclick = (function () {
      //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
      //    });
      //})(strTabId, strTabId);
      //A1.onclick = (function () {
      //    PrjTab_CheckConsistencyEx.sub_Click2();
      //});

      A1.appendChild(I1);
      A1.appendChild(Span1);

      const img_Delete = clsPubFun4Button.GetImage_DeleteNoCommand();
      img_Delete.height = 16;
      img_Delete.width = 16;
      img_Delete.className = 'ml-1';
      (function (lngMid1, strPrjId1, divLayout) {
        img_Delete.onclick = function () {
          PrjTab_CheckConsistencyEx.btnDeleteTabFunctionProp_Click(lngMid1, strPrjId1, divLayout);
        };
      })(lngMid, objTabFunctionProp.prjId, divLayout);
      const img_Update = clsPubFun4Button.GetImage_UpdateNoCommand();

      img_Update.height = 16;
      img_Update.width = 16;
      img_Update.className = 'ml-1';

      (function (lngMid1, strTabId) {
        img_Update.onclick = function () {
          PrjTab_CheckConsistencyEx.btnEditTabFunctionProp_Click(lngMid1, strTabId);
        };
      })(lngMid.toString(), objTabFunctionProp.tabId);

      A1.appendChild(img_Delete);
      A1.appendChild(img_Update);

      Li1.appendChild(A1);

      //strHtml.Append("<li>\n");
      //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{1}</span></a>\n",
      //    objTabFunctionProp.linkFile, objTabFunctionProp.menuName);
      //strHtml.Append("</li>\n");
      Ul1.appendChild(Li1);
    }
  }
  private static async BindSubMenu_FldLstB(
    strTabId: string,
    strPrjId: string,
    Ul1: HTMLUListElement,
    divLayout: HTMLDivElement,
  ) {
    // const intSubMenuRow = 0;
    const arrPrjTabFldObjLst_Sel: Array<clsPrjTabFldEN> = await PrjTabFld_GetObjLstCache(strTabId);
    let arrPrjTabFldExObjLst = arrPrjTabFldObjLst_Sel.map(PrjTabFldEx_CopyToEx);
    // const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    //   strTabId,
    //   clsPrivateSessionStorage.cmPrjId,
    // );
    for (const objInFor of arrPrjTabFldExObjLst) {
      await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_FldName, objInFor);
    }
    arrPrjTabFldExObjLst = arrPrjTabFldExObjLst.sort(PrjTabFldEx_SortFunBySequenceNumber);
    for (const objPrjTabFld of arrPrjTabFldExObjLst) {
      //if (objPrjTabFld.inUse == false) continue;

      //let strTabId = objPrjTabFld.tabId;
      const strFldId = objPrjTabFld.fldId;

      const strFldName = objPrjTabFld.fldName;
      // intSubMenuRow++;

      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = strFldName;

      I1.className = 'icon-font';
      const strLinkFile = '';
      let strHref = `${strLinkFile}`;

      strHref = strHref.replace('//', '/');
      A1.id = Format('a_{0}_{1}', strTabId, strTabId);
      A1.href = strHref;
      A1.className = 'subnoselected';
      //A1.href = "#";
      //A1.href = 'javascript:';
      //(function (strTabId1, strTabId1) {
      //    A1.onclick = (function () {
      //        PrjTab_CheckConsistencyEx.sub_Click(strTabId1, strTabId1);
      //    });
      //})(strTabId, strTabId);
      //A1.onclick = (function () {
      //    PrjTab_CheckConsistencyEx.sub_Click2();
      //});

      A1.appendChild(I1);
      A1.appendChild(Span1);
      if (objPrjTabFld.fieldTypeId == enumFieldType.KeyField_02) {
        const img_Key = clsPubFun4Button.GetImage_KeyNoCommand();
        A1.appendChild(img_Key);
      }
      const img_Delete = clsPubFun4Button.GetImage_DeleteNoCommand();
      img_Delete.height = 16;
      img_Delete.width = 16;
      img_Delete.className = 'ml-1';
      (function (strTabId1, strFldId1, divLayout) {
        img_Delete.onclick = function () {
          PrjTab_CheckConsistencyEx.btnDeletePrjTabFld_Click(strTabId1, strFldId1, divLayout);
        };
      })(strTabId, strFldId, divLayout);
      const img_Update = clsPubFun4Button.GetImage_UpdateNoCommand();

      img_Update.height = 16;
      img_Update.width = 16;
      img_Update.className = 'ml-1';

      (function (strMId, strTabId) {
        img_Update.onclick = function () {
          PrjTab_CheckConsistencyEx.btnEditPrjTabFld_Click(strMId, strTabId);
        };
      })(objPrjTabFld.mId.toString(), objPrjTabFld.tabId);

      A1.appendChild(img_Delete);
      A1.appendChild(img_Update);

      Li1.appendChild(A1);

      //strHtml.Append("<li>\n");
      //strHtml.AppendFormat("<a href=\"\"><i class=\"icon-font\"></i><span>{1}</span></a>\n",
      //    objPrjTabFld.linkFile, objPrjTabFld.menuName);
      //strHtml.Append("</li>\n");
      Ul1.appendChild(Li1);
    }
  }

  /*
   * 重新转向本项目新的Url地址
   */
  public static GetButton_AddNew(strTabId: string): HTMLButtonElement {
    console.log(strTabId);
    const btn1: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btn1.className = 'btn btn-sm';
    btn1.title = '新添区域';
    btn1.innerText = '添区域';
    btn1.className = 'btn btn-sm';
    //(function (strTabId1) {
    //    btn1.onclick = (function () {
    //        PrjTab_CheckConsistencyEx.btnAddNewTab_Click(strTabId1);
    //    });
    //})(strTabId);

    return btn1;
  }

  public async BindUl_CmPrjId(strPrjId: string) {
    const arrCMProject = await CMProjectEx_GetObjLstByPrjIdCache(strPrjId);
    const ulCmPrjId = <HTMLUListElement>document.getElementById('ulCmPrjId');
    const objCMProject_All = new clsCMProjectENEx();
    objCMProject_All.cmPrjId = '0000';
    objCMProject_All.cmPrjName = '所有CM工程';
    arrCMProject.push(objCMProject_All);
    for (const objCMProject of arrCMProject) {
      //<li><a href="javascript:;" data - val="molv" title = "墨绿" > 墨绿 < /a></li >*@

      const Li1: HTMLLIElement = document.createElement('li');
      const A1: HTMLAnchorElement = document.createElement('a');
      A1.id = Format('a_{0}', objCMProject.cmPrjId);
      A1.href = 'javascript:;';
      A1.setAttribute('data-val', objCMProject.cmPrjId);
      (function (strCmPrjId, divLayout) {
        A1.onclick = function () {
          PrjTab_CheckConsistencyEx.ChangeCmPrjId(strCmPrjId, divLayout);
        };
      })(objCMProject.cmPrjId, divVarSet.refDivLayout);

      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = objCMProject.cmPrjName;
      //I1.className = "icon-font";
      A1.appendChild(Span1);
      Li1.appendChild(A1);
      ulCmPrjId.appendChild(Li1);
    }
  }
  public static async ChangeCmPrjId(strCmPrjId: string, divLayout: HTMLDivElement) {
    if (PrjTab_CheckConsistencyEx.CmPrjIdCache == strCmPrjId) return;

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
      return;
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
    clsPrivateSessionStorage.cmPrjId = strCmPrjId;
    const strCmPrjName = await CMProject_GetNameByCmPrjIdCache(strCmPrjId);
    clsPrivateSessionStorage.cmPrjName = strCmPrjName;
    await UserDefaValue_LocalEx_setUserDefaValue(
      '0005',
      clsPrivateSessionStorage.currSelPrjId,
      clsPubLocalStorage.userId,
      '默认CM工程',
      strCmPrjId,
    );
    PrjTab_CheckConsistencyEx.CmPrjIdCache = strCmPrjId;

    PrjTab_CheckConsistencyEx.BindPrjTable(PrjTab_CheckConsistencyEx.strUlName4Menu, divLayout);
  }
  /** 删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
*/
  public async btnDeleteTab_Click(strTabId: string) {
    const prjTabFldStore = usePrjTabFldStore();
    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      const responseBool = await PrjTabEx_DelRecordEx(strTabId);
      if (responseBool == true) {
        //PrjTabReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        //PrjTabReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        PrjTab_CheckConsistencyEx.BindPrjTable(
          PrjTab_CheckConsistencyEx.strUlName4Menu,
          divVarSet.refDivLayout,
        );
      }
    } catch (e: any) {
      const strMsg = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public static async btnDeleteTabFeature_Click(
    strTabId: string,
    strFldId: string,
    divLayout: HTMLDivElement,
  ) {
    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      const responseBool = await TabFeatureEx_DelRecordEx(strTabId, strFldId);
      if (responseBool == true) {
        //PrjTabReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
        PrjTab_CheckConsistencyEx.BindPrjTable(PrjTab_CheckConsistencyEx.strUlName4Menu, divLayout);
      }
    } catch (e: any) {
      const strMsg = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public static async btnDeleteTabFunctionProp_Click(
    lngMid: number,
    strPrjId: string,
    divLayout: HTMLDivElement,
  ) {
    try {
      if (lngMid == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      const responseBool = await TabFunctionPropEx_DelRecordEx(lngMid, strPrjId);
      if (responseBool == true) {
        //PrjTabReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        TabFunctionProp_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        PrjTab_CheckConsistencyEx.BindPrjTable(PrjTab_CheckConsistencyEx.strUlName4Menu, divLayout);
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
  public static async btnDeletePrjConstraint_Click(
    strTabId: string,
    strFldId: string,
    divLayout: HTMLDivElement,
  ) {
    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      const responseBool = await PrjConstraintEx_DelRecordEx(strTabId, strFldId);
      if (responseBool == true) {
        //PrjTabReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        vPrjConstraint_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        PrjTab_CheckConsistencyEx.BindPrjTable(PrjTab_CheckConsistencyEx.strUlName4Menu, divLayout);
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
  public static async btnDeletePrjTabFld_Click(
    strTabId: string,
    strFldId: string,
    divLayout: HTMLDivElement,
  ) {
    const prjTabFldStore = usePrjTabFldStore();
    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      const responseBool = await PrjTabFldEx_DelRecordEx(strTabId, strFldId);
      if (responseBool == true) {
        //PrjTabReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        PrjTab_CheckConsistencyEx.BindPrjTable(PrjTab_CheckConsistencyEx.strUlName4Menu, divLayout);
      }
    } catch (e: any) {
      const strMsg = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public static async btnUpdateTab_Click(strTabId: string) {
    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('请选择需要修改的记录！');
        return '';
      }
      const objPage: PrjTab_CheckConsistencyEx = new PrjTab_CheckConsistencyEx();
      //PrjTable_Edit_Sim.TabIdStatic = strTabId;

      const objPrjTable_Edit_SimEx = new PrjTab_EditEx('PrjTab_EditEx', objPage);
      objPrjTable_Edit_SimEx.divName4Edit = 'divEdit_Region';
      objPrjTable_Edit_SimEx.btnUpdateRecord_Click(strTabId);
    } catch (e: any) {
      const strMsg = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public static async BindPrjTableBak(strUlRoot: string) {
    console.log(strUlRoot);
    const UlParent: HTMLUListElement = document.getElementById('ulPARENT') as HTMLUListElement;
    UlParent.innerText = '';
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strCmPrjId = PrjTab_CheckConsistencyEx.CmPrjIdCache;
    // const objPrjTabCond = this.CombinePrjTabConditionObj();
    const objThisPage = new PrjTab_CheckConsistencyEx();
    let strWhereCond = await objThisPage.CombinePrjTabCondition();
    strWhereCond += Format(
      " and {0}='{1}'",
      clsPrjTabEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
    );
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

    const spnCmPrjName = <HTMLLabelElement>document.createElement('span');
    spnCmPrjName.innerText = objCMProject.cmPrjName;
    spnCmPrjName.className = 'text-primary font-weight-bold';
    const thisPage = new PrjTab_CheckConsistencyEx();
    lblCondition.appendChild(spnCmPrjName);
    if (IsNullOrEmpty(thisPage.funcModuleAgcId_q) == false) {
      const spnFuncModule = <HTMLLabelElement>document.createElement('span');
      const objFuncModule = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
        thisPage.funcModuleAgcId_q,
        strPrjId,
      );
      if (objFuncModule == null) {
        const strMsg = Format(
          '在项目:[{0}]中，模块Id:[{1}]没有相应模块，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          thisPage.funcModuleAgcId_q,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      spnFuncModule.innerText = objFuncModule.funcModuleName;
      spnFuncModule.className = 'ml-2 text-primary font-weight-bold';
      lblCondition.appendChild(spnFuncModule);
    }
    let arrPrjTabObjLst = await PrjTab_GetObjLstAsync(strWhereCond);
    //let arrPrjTabObjList = await PrjTab_GetObjLstCache(strPrjId);
    if (strCmPrjId != '000000') {
      const arrTabId_CmPrjId = await vCmProjectPrjTab_SimEx_GetTabIdLstByCmPrjIdCache(strCmPrjId);
      arrPrjTabObjLst = arrPrjTabObjLst
        .filter((x) => arrTabId_CmPrjId.indexOf(x.tabId) > -1)
        .sort(PrjTabEx_SortFunByTabName);
    } else {
      arrPrjTabObjLst = arrPrjTabObjLst.sort(PrjTabEx_SortFunByTabName);
    }
    // const arrList: Array<string> = new Array<string>();

    //let arrPrjUpMenu: Array<clsvQxRoleMenusEN> = [];
    //try {
    //    //获取顶层菜单
    //    arrPrjUpMenu = await vQxRoleMenusEx_GetUpMenuObjList2(strCurrUserRoleId, strCurrPrjId);
    //}
    //catch (e:any) {
    //    const strMsg = `${e}`;
    //    throw strMsg;
    //}
    //let arrPrjSubMenu: Array<clsvQxRoleMenusEN> = [];
    //try {
    //    //获取子菜单
    //    arrPrjSubMenu = await vQxRoleMenusEx_GetSubMenuObjList2(strCurrUserRoleId, strCurrPrjId);
    //}
    //catch (e:any) {
    //    const strMsg = `${e}`;
    //    throw strMsg;
    //}
    if (arrPrjTabObjLst.length == 0) {
      const strMsg = `获取的数据表数为0.当前CM工程Id:${strCmPrjId},当前工程Id:${strPrjId}`;
      console.error(strMsg);
      throw strMsg;
    }
    //if (arrPrjSubMenu.length == 0) {
    //    const strMsg = `获取的下级菜单数为0.当前角色Id:${strCurrUserRoleId},当前工程Id:${strCurrPrjId}`;
    //    throw strMsg;
    //}

    const LiHeader: HTMLLIElement = document.createElement('li');
    LiHeader.classList.add('menu-header');
    LiHeader.classList.add('menu-item');

    const Span1: HTMLSpanElement = document.createElement('span');
    Span1.innerText = '数据表列表:';
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
    for (const objPrjTab of arrPrjTabObjLst) {
      //if (objPrjTab.inUse == false) continue;
      const Li1: HTMLLIElement = document.createElement('li');

      Li1.classList.add('menu-item');
      //Li1.innerText = "主菜单";
      const A1: HTMLAnchorElement = document.createElement('a');
      A1.href = '';
      (function (strTabId1) {
        A1.onclick = function () {
          PrjTab_CheckConsistencyEx.main_Click(strTabId1);
        };
      })(objPrjTab.tabId);
      const I1: HTMLElement = document.createElement('i');
      const Span1: HTMLSpanElement = document.createElement('span');
      Span1.innerText = objPrjTab.tabName;
      I1.classList.add('icon-font');
      I1.classList.add('icon-right');
      A1.appendChild(I1);
      A1.appendChild(Span1);
      Li1.appendChild(A1);

      const Ul1: HTMLUListElement = document.createElement('ul');
      Ul1.classList.add('menu-item-child');
      Ul1.style.display = 'none';

      //this.BindSubMenu_FldLst(objPrjTab.tabId, objPrjTab.prjId, Ul1);
      Li1.appendChild(Ul1);

      UlParent.appendChild(Li1);
    }

    //6、把菜单HTML菜单串显示到界面上。
    //return strHtml.ToString();
  }

  /**
   * 表名 (Used In CombineCondition())
   **/
  public get tabName_q(): string {
    const strValue = GetInputValueInDivObj(GetUniDivInDoc('divQuery_Main'), 'txtTabName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 表名 (Used In CombineCondition())
   **/
  public set tabName_q(value: string) {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(GetUniDivInDoc('divQuery_Main'), 'input', 'txtTabName_q');
    const strId = 'txtTabName_q';
    SetInputValueInDivObj(objDiv, strId, value);
  }
  /**
   * 功能模块Id (Used In CombineCondition())
   **/
  public get funcModuleAgcId_q(): string {
    const strValue = GetSelectValueInDivObj(
      GetUniDivInDoc('divQuery_Main'),
      'ddlFuncModuleAgcId_q',
    );
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 功能模块Id (Used In CombineCondition())
   **/
  public set funcModuleAgcId_q(value: string) {
    SetSelectValueByIdInDivObj(GetUniDivInDoc('divQuery_Main'), 'ddlFuncModuleAgcId_q', value);
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

function EditPrjTab(strTabId: string) {
  PrjTab_CheckConsistencyEx.vuebtn_Click('EditPrjTab', strTabId);
}
