/*import $ from "jquery";*/
import { ComboBox_EdtEx } from './ComboBox_EdtEx';
import { TabFeatureCRUD_EditEx_AdjustOrderNum } from './TabFeatureCRUD_EditEx_AdjustOrderNum';
import { TabFeatureCRUD_EditEx_Combo } from './TabFeatureCRUD_EditEx_Combo';
import { TabFeatureCRUD_EditEx_SetFieldValue } from './TabFeatureCRUD_EditEx_SetFieldValue';
import { TabFeatureCRUD_EditEx_TransEvent } from './TabFeatureCRUD_EditEx_TransEvent';
import TabFeature_EditEx from './TabFeature_EditEx';
import { TabFeatureCRUD } from '@/viewsBase/Table_Field/TabFeatureCRUD';
import { enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { clsTabFeatureFldsENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsENEx';
import { ValueGivingMode_BindDdl_ValueGivingModeIdInDivCache } from '@/ts/L3ForWApi/GeneCode/clsValueGivingModeWApi';
import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import { FieldType_BindDdl_FieldTypeIdInDivCache } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import {
  TabFeature_GetObjLstByTabFeatureIdLstAsync,
  TabFeature_GetRecCountByCondAsync,
  TabFeature_GetUniCondStr4Update,
  TabFeature_IsExistRecordAsync,
  TabFeature_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import {
  TabFeatureEx_AddTabFeature,
  TabFeatureEx_CopyNodeToNewVersion,
  TabFeatureEx_DelRecordEx,
  TabFeatureEx_FuncMapByFldName,
  TabFeatureEx_GC_DdlBindFunction4CSharp,
  TabFeatureEx_GC_DdlBindFunctionInDiv4TypeScript,
  TabFeatureEx_GetFuncNameCs,
  TabFeatureEx_GetFuncNameJs,
  TabFeatureEx_GetObjExLstByPagerAsync,
  TabFeatureEx_GetTabFeatureName,
  TabFeatureEx_GetTabIdByTabFeatureIdCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import {
  TabFeatureFldsEx_BindDdl_FldIdInDivCache,
  TabFeatureFldsEx_CopyToEx,
  TabFeatureFldsEx_GetObjLstByTabFeatureId,
  TabFeatureFldsEx_GetSpan4FieldWithTabName,
  TabFeatureFldsEx_SortFun_OrderNum,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import {
  CheckControlExistInDivObj,
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetDivObjInDivObjN,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  GetSelectedIndexInDivObj,
  HideDivObj,
  SetButtonHtmlByIdInDivObj,
  SetCheckBoxValueByIdInDivObj,
  SetSelectValueByIdInDivObj,
  ShowDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindDdl_TrueAndFalse,
  BindTab,
  confirm_del,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsTabInfo, clsTabs } from '@/ts/PubFun/clsTabs';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { vTabFeatureFlds_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import { vTabFeature_SimEx_BindDdl_TabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { vTabFeature_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  PrjId_Session,
  TabId_Static,
  viewVarSet,
} from '@/views/Table_Field/TabFeatureVueShare';
import { AdjustOrderNum_EdtEx } from '@/views/Table_Field/AdjustOrderNum_EdtEx';

/** TabFeatureCRUD_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class TabFeatureCRUD_EditEx extends TabFeatureCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static isShowQuery = true;
  public static SetCodeText: (strCodeText_Web: string, strCodeText_Ts: string) => void;
  public static intIndex = 0;
  // public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunctionEdit: HTMLDivElement; //功能区的层对象

  //public static mstrListDiv=  "divDataLst";
  public static FeatureTypeIdCache = '03';
  // public static FeatureIdCache = '0173';
  public static divName4FieldLst = 'divTabFeatureLst';
  public static Op = 'Edit-TabFeature';
  public TabId = '';
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
    console.log('InitVarSet in TabFeatureCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TabFeatureCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_TabFeature]！');
    //this.BindGv_TabFeature();
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'TabFeature':
        await this.BindGv_TabFeature4Func(divVarSet.refDivList);
        await this.BindLi_TabFeatureLst(TabId_Static.value);

        break;
      case 'ComboBox_Edt':
        await this.BindGv_TabFeature4Func(divVarSet.refDivList);
        await this.BindLi_TabFeatureLst(TabId_Static.value);

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
    const objPage: TabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);

    let strMsg = '';
    let arrKeyIds;
    const strFeatureId = TabFeatureCRUD_EditEx.GetPropValue('featureId');
    switch (strCommandName) {
      case 'GetDefaNameProp': //查询记录
        console.log(strKeyId);
        objPage.btnGetDefaNameProp_Click();
        break;
      case 'AddTabFeature': //查询记录
        console.log(strKeyId);
        objPage.btnAddTabFeature_Click();
        break;
      case 'Tab': //查询记录
        console.log(strKeyId);
        objPage.btnTab_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        switch (strFeatureId) {
          case enumPrjFeature.Tab_BindDdl_0173:
            this.btnAddComboBox();
            break;
          default:
            objPageEdit.btnAddNewRecord_Click();
            break;
        }
        break;
      case 'AddSortFunc': //添加记录使用最大关键字
        this.btnAddOrderFunc();

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
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
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
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        if (confirm_del(arrKeyIds.length) == false) {
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
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
        AccessBtnClickDefault(strCommandName, 'TabFeatureCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // TabFeatureCRUD_EditEx.divFunctionEdit = GetUniDivInDoc('divFunction_Edit');
      //TabId_Static.value = clsPrivateSessionStorage.currSelPrjId;
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      let strTabId = '';

      if (this.GetOp == 'Edit-TabFeature') {
        //await Main_PrjTab.ShowCurrItem("TabFeatureCRUD", "");
        strTabId = clsPrivateSessionStorage.tabId_Main;
        this.HideDivQuery();
      } else {
        strTabId = this.GetTabId;
        this.ShowDivQuery();
        this.BindDdl4QueryRegion();
      }
      const divList = GetDivObjInDivObj(divVarSet.refDivLayout, 'divTabFeatureLst0173');
      if (divList == null) return;
      if (IsNullOrEmpty(strTabId) == false) {
        TabId_Static.value = strTabId;
        TabId_Static.value = strTabId;
        await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
          strTabId,
          divList,
          divVarSet.refDivLayout,
        );
      }

      this.SetButtonStatus(this.featureId);

      viewVarSet.sortTabFeatureBy = Format('{0} Asc', clsTabFeatureEN.con_OrderNum);
      //2、显示无条件的表内容在GridView中
      await this.BindGv_TabFeature4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId; //定义条件字段
    //await this.SetDdl_FieldTypeId();//查询区域
    //await this.SetDdl_ValueGivingModeId();//查询区域
    await this.SetDdl_TabId(strCmPrjId); //查询区域
    //await this.SetDdl_KeyFldId(strPrjId);//查询区域
    //const ddlNameFldId_q = await this.SetDdl_NameFldId(strPrjId);//查询区域
    //const ddlConditionFldId_q = await this.SetDdl_ConditionFldId(strPrjId);//查询区域
    //const ddlOrderNumFldId_q = await this.SetDdl_OrderNumFldId(strPrjId);//查询区域
    //const ddlSortFldId_q = await this.SetDdl_SortFldId(strPrjId);//查询区域
    BindDdl_TrueAndFalse('ddlIsForCSharp_q');
    BindDdl_TrueAndFalse('ddlIsForTypeScript_q');
    BindDdl_TrueAndFalse('ddlIsForDiv_q');
    BindDdl_TrueAndFalse('ddlIsNeedGC_q');
  }
  /**
   * 设置绑定下拉框，针对字段:[tabId]
   */
  public async SetDdl_TabId(strCmPrjId: string) {
    // const objPrjTabCond = new clsPrjTabEN(); //查询区域
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vTabFeature_SimEx_BindDdl_TabIdInDivCache(
      divVarSet.refDivQuery,
      'ddlTabId_q',
      strCmPrjId,
    ); //查询区域
  }
  /**
   * 设置绑定下拉框，针对字段:[fldId]
   */
  public async SetDdl_KeyFldId(strPrjId: string) {
    // const objvFieldTab_Sim_Cond = new clsvFieldTab_SimEN(); //查询区域
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await TabFeatureFldsEx_BindDdl_FldIdInDivCache(
      divVarSet.refDivQuery,
      'ddlKeyFldId_q',
      enumFieldType.KeyField_02,
      strPrjId,
    ); //查询区域
  }

  /**
   * 设置绑定下拉框，针对字段:[fldId]
   */
  public async SetDdl_NameFldId(strPrjId: string) {
    // const objvFieldTab_Sim_Cond = new clsvFieldTab_SimEN(); //查询区域
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await TabFeatureFldsEx_BindDdl_FldIdInDivCache(
      divVarSet.refDivQuery,
      'ddlNameFldId_q',
      enumFieldType.NameField_03,
      strPrjId,
    ); //查询区域
  }
  /**
   * 设置绑定下拉框，针对字段:[fldId]
   */
  public async SetDdl_ConditionFldId(strPrjId: string) {
    // const objvFieldTab_Sim_Cond = new clsvFieldTab_SimEN(); //查询区域
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await TabFeatureFldsEx_BindDdl_FldIdInDivCache(
      divVarSet.refDivQuery,
      'ddlConditionFldId_q',
      enumFieldType.ConditionField_16,
      strPrjId,
    ); //查询区域
  }

  /**
   * 设置绑定下拉框，针对字段:[fldId]
   */
  public async SetDdl_SortFldId(strPrjId: string) {
    // const objvFieldTab_Sim_Cond = new clsvFieldTab_SimEN(); //查询区域
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await TabFeatureFldsEx_BindDdl_FldIdInDivCache(
      divVarSet.refDivQuery,
      'ddlSortFldId_q',
      enumFieldType.SortField_06,
      strPrjId,
    ); //查询区域
  }

  /**
   * 设置绑定下拉框，针对字段:[fldId]
   */
  public async SetDdl_OrderNumFldId(strPrjId: string) {
    // const objvFieldTab_Sim_Cond = new clsvFieldTab_SimEN(); //查询区域
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await TabFeatureFldsEx_BindDdl_FldIdInDivCache(
      divVarSet.refDivQuery,
      'ddlOrderNumFldId_q',
      enumFieldType.OrderNumField_09,
      strPrjId,
    ); //查询区域
  }
  /**
   * 设置绑定下拉框，针对字段:[valueGivingModeId]
   */
  public async SetDdl_ValueGivingModeId() {
    // const objValueGivingMode_Cond = new clsValueGivingModeEN(); //查询区域
    await ValueGivingMode_BindDdl_ValueGivingModeIdInDivCache(
      divVarSet.refDivQuery,
      'ddlValueGivingModeId_q',
    ); //查询区域
  }
  /**
   * 设置绑定下拉框，针对字段:[fieldTypeId]
   */
  public async SetDdl_FieldTypeId() {
    // const objFieldType_Cond = new clsFieldTypeEN(); //查询区域
    await FieldType_BindDdl_FieldTypeIdInDivCache(divVarSet.refDivQuery, 'ddlFieldTypeId_q'); //查询区域
  }
  public async checkDiv(divName: string) {
    let divList;

    while (true) {
      divList = GetDivObjInDivObjN(divVarSet.refDivLayout, divName); //'divTabFeatureLst0173');
      // console.error('divList：', divList);
      if (divList === null) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      } else {
        break;
      }
    }
    return true;
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindLi_TabFeatureLst(strTabId: string) {
    let objTabFeatureCRUD_EditEx_AdjustOrderNum;
    let objTabFeatureCRUD_EditEx_SetFieldValue;
    let objTabFeatureCRUD_EditEx_TransEvent;
    let divList;
    let bolIsSuccess;
    switch (this.featureId) {
      case '0173':
      case 'tab1':
        bolIsSuccess = await this.checkDiv('divTabFeatureLst0173');
        if (bolIsSuccess == false) return;

        divList = GetDivObjInDivObjN(divVarSet.refDivLayout, 'divTabFeatureLst0173');
        // console.error('divList：', divList);
        if (divList == null) {
          console.error('2. divList：', divList);
          return;
        }
        await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
          strTabId,
          divList,
          divVarSet.refDivLayout,
        );
        console.log('intIndex:', TabFeatureCRUD_EditEx.intIndex++);

        break;
      case '0167':
      case 'tab2':
        bolIsSuccess = await this.checkDiv('divTabFeatureLst0167');
        if (bolIsSuccess == false) return;
        divList = GetDivObjInDivObjN(divVarSet.refDivLayout, 'divTabFeatureLst0167');
        // console.error('divList：', divList);
        if (divList == null) {
          console.error('2. divList：', divList);
          return;
        }
        objTabFeatureCRUD_EditEx_AdjustOrderNum = new TabFeatureCRUD_EditEx_AdjustOrderNum();
        await objTabFeatureCRUD_EditEx_AdjustOrderNum.BindLi_TabFeatureLst(strTabId, divList);

        break;
      case '0170':
      case 'tab3':
        bolIsSuccess = await this.checkDiv('divTabFeatureLst0170');
        if (bolIsSuccess == false) return;
        divList = GetDivObjInDivObjN(divVarSet.refDivLayout, 'divTabFeatureLst0170');
        // console.error('divList：', divList);
        if (divList == null) {
          console.error('2. divList：', divList);
          return;
        }
        objTabFeatureCRUD_EditEx_SetFieldValue = new TabFeatureCRUD_EditEx_SetFieldValue();
        await objTabFeatureCRUD_EditEx_SetFieldValue.BindLi_TabFeatureLst(
          strTabId,
          TabFeatureCRUD_EditEx.divName4FieldLst,
        );
        break;
      case '0172':
      case 'tab4':
        bolIsSuccess = await this.checkDiv('divTabFeatureLst0172');
        if (bolIsSuccess == false) return;
        divList = GetDivObjInDivObjN(divVarSet.refDivLayout, 'divTabFeatureLst0172');
        // console.error('divList：', divList);
        if (divList == null) {
          console.error('2. divList：', divList);
          return;
        }
        objTabFeatureCRUD_EditEx_TransEvent = new TabFeatureCRUD_EditEx_TransEvent();
        await objTabFeatureCRUD_EditEx_TransEvent.BindLi_TabFeatureLst(
          strTabId,
          TabFeatureCRUD_EditEx.divName4FieldLst,
        );
        break;
    }
  }

  public GetDiv_TabFeature0(objTabFeature: clsTabFeatureENEx): HTMLDivElement {
    const divLevel1: HTMLDivElement = document.createElement('div');
    divLevel1.className = 'row';
    divLevel1.style.width = '100%';

    divLevel1.id = Format('divTabFeature_{0}', objTabFeature.tabFeatureId);
    return divLevel1;
  }
  public GetDiv_TabFeatureLeft(objTabFeature: clsTabFeatureENEx): HTMLDivElement {
    const divLeft: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    divLeft.innerHTML = '';
    divLeft.className = 'col-5';
    divLeft.id = Format('left_{0}', objTabFeature.tabFeatureId);
    return divLeft;
  }
  public GetDiv_TabFeatureRight(objTabFeature: clsTabFeatureENEx): HTMLDivElement {
    const divRight: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    divRight.innerHTML = '';
    divRight.className = 'col-7';
    divRight.id = Format('GC_{0}', objTabFeature.tabFeatureId);
    const strDivName4CSharp = Format('divCode4CSharp{0}', objTabFeature.tabFeatureId);
    const strDivName4TypeScript = Format('divCode4TypeScript{0}', objTabFeature.tabFeatureId);
    const divCSharp: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    //divCSharp.innerHTML = "divCSharp";

    divCSharp.id = strDivName4CSharp;

    const divTypeScript: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    //divTypeScript.innerHTML = "divTypeScript";

    divTypeScript.id = strDivName4TypeScript;
    divRight.appendChild(divCSharp);
    divRight.appendChild(divTypeScript);

    return divRight;
  }
  public static async ShowCode(
    strCode4CSharp: string,
    strCode4TypeScript: string,
    strTabFeatureId: string,
  ) {
    const strDivName4CSharp = Format('divCode4CSharp{0}', strTabFeatureId);
    const strDivName4TypeScript = Format('divCode4TypeScript{0}', strTabFeatureId);

    const divCSharp: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName4CSharp);
    divCSharp.className = 'row  border-info';
    divCSharp.style.width = '100%';
    divCSharp.innerHTML = '';
    //divCSharp.innerHTML = Format("<code>{0}</code>", strCode4CSharp);
    const textarea_CSharp: HTMLTextAreaElement = <HTMLTextAreaElement>(
      document.createElement('textarea')
    );
    textarea_CSharp.style.width = '100%';
    textarea_CSharp.style.height = '400px';

    //textarea_CSharp.innerText = strCode4CSharp;
    textarea_CSharp.value = strCode4CSharp;
    divCSharp.appendChild(textarea_CSharp);
    const divTypeScript: HTMLDivElement = <HTMLDivElement>(
      document.getElementById(strDivName4TypeScript)
    );
    divTypeScript.className = 'row  border-info mt-2';
    divTypeScript.style.width = '100%';
    divTypeScript.innerHTML = '';
    const arrChilds = divTypeScript.children;
    const iLen = divTypeScript.children.length;
    let i = 0;
    for (i = 0; i < iLen; i++) {
      const obj = arrChilds[i];
      divTypeScript.removeChild(obj);
    }
    //divTypeScript.innerHTML = Format("<code>{0}</code>", strCode4TypeScript);
    const textarea_TypeScript: HTMLTextAreaElement = <HTMLTextAreaElement>(
      document.createElement('textarea')
    );
    textarea_TypeScript.style.width = '100%';
    textarea_TypeScript.style.height = '400px';

    textarea_TypeScript.innerHTML = strCode4TypeScript;
    divTypeScript.appendChild(textarea_TypeScript);
  }
  public GetUl_CreateFunc(strFeatureId: string, strTabId: string): HTMLUListElement {
    const btnCreateFunc: HTMLButtonElement = document.createElement('button');

    btnCreateFunc.id = Format('btnCreateFunc{0}', strFeatureId);
    btnCreateFunc.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnCreateFunc.title = '建立导出映射';

    (function (strFeatureId1, strTabId1) {
      btnCreateFunc.onclick = function () {
        TabFeatureCRUD_EditEx.btnCreateBindDdlFunc(strFeatureId1, strTabId1);
      };
    })(strFeatureId, strTabId);
    btnCreateFunc.innerText = '建立映射';
    const li_CreateFunc: HTMLLIElement = document.createElement('li');
    li_CreateFunc.className = 'nav-item';
    li_CreateFunc.id = Format('liCreateFunc_{0}', strFeatureId);
    li_CreateFunc.appendChild(btnCreateFunc);
    //let btnCopyNode: HTMLButtonElement = this.GetButton_CopyNode(strFldId, strTabId);
    //li_CreateFunc.appendChild(btnCopyNode);
    const ulCreateFunc: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulCreateFunc.id = Format('ulCreateFunc{0}', strFeatureId);
    ulCreateFunc.className = 'nav';
    ulCreateFunc.appendChild(li_CreateFunc);
    return ulCreateFunc;
  }

  public async GetLi_TabFeatureFld(
    objTabFeatureFlds_p: clsTabFeatureFldsENEx,
    intIndex: number,
  ): Promise<HTMLLIElement> {
    let objSpan4Field: HTMLSpanElement = document.createElement('span');
    try {
      objSpan4Field = await TabFeatureFldsEx_GetSpan4FieldWithTabName(
        objTabFeatureFlds_p.fldId,
        objTabFeatureFlds_p.fieldTypeId,
        clsPrivateSessionStorage.currSelPrjId,
        objTabFeatureFlds_p.isForExtendClass,
        intIndex,
      );
    } catch (e: any) {
      console.error(e);
      throw e;
    }
    const li_Sub: HTMLLIElement = document.createElement('li');
    li_Sub.className = 'nav-item';
    li_Sub.id = Format(
      'liSub_{0}_{1}',
      objTabFeatureFlds_p.tabFeatureId,
      objTabFeatureFlds_p.fldId,
    );
    li_Sub.appendChild(objSpan4Field);
    return li_Sub;
  }
  public static btnCreateBindDdlFunc(strFldId: string, strTabId: string) {
    console.log(strFldId, strTabId);

    const objPage: TabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    objPageEdit.btnAddNewRecord_Click();
  }

  public static btnUpdateTabFeature(strTabFeatureId: string) {
    const objPage: TabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    objPageEdit.btnUpdateRecord_Click(strTabFeatureId);
    //alert(strFldId);
  }

  public static async btnEditComboBox(strTabFeatureId: string) {
    const objPage: TabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
    const objPageEdit: ComboBox_EdtEx = new ComboBox_EdtEx('ComboBox_EdtEx', objPage);
    ComboBox_EdtEx.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
    const strTabId = await TabFeatureEx_GetTabIdByTabFeatureIdCache(
      strTabFeatureId,
      clsPrivateSessionStorage.cmPrjId,
    );
    ComboBox_EdtEx.strTabId4ComboBox = strTabId;
    objPageEdit.btnUpdateRecord_Click(strTabFeatureId);
    //alert(strFldId);
  }
  public static async btnAddComboBox() {
    const objPage: TabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
    const objPageEdit: ComboBox_EdtEx = new ComboBox_EdtEx('ComboBox_EdtEx', objPage);
    ComboBox_EdtEx.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
    const strTabId = TabId_Static.value;
    ComboBox_EdtEx.strTabId4ComboBox = strTabId;
    await ComboBox_EdtEx.EditComboBoxRef.value.showDialog();
    ComboBox_EdtEx.divEditComboBox = ComboBox_EdtEx.EditComboBoxRef.value.$refs.refDivEdit;

    objPageEdit.btnAddNewRecord_Click();
    //alert(strFldId);
  }

  public static async btnAddOrderFunc() {
    const objPage: TabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
    const objAdjustOrderNum_Edt: AdjustOrderNum_EdtEx = new AdjustOrderNum_EdtEx(
      'AdjustOrderNum_EdtEx',
      objPage,
    );

    AdjustOrderNum_EdtEx.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
    const strTabId = TabId_Static.value;
    AdjustOrderNum_EdtEx.strTabId4AdjustOrderNum = strTabId;

    objAdjustOrderNum_Edt.btnAddNewRecord_OrderFunc_Click();
    //alert(strFldId);
  }

  public static async btnGeneCode(strTabFeatureId: string) {
    try {
      const strCode_CSharp = await TabFeatureEx_GC_DdlBindFunction4CSharp(strTabFeatureId);
      const strCode_TypeScript = await TabFeatureEx_GC_DdlBindFunctionInDiv4TypeScript(
        strTabFeatureId,
      );
      TabFeatureCRUD_EditEx.ShowCode(strCode_CSharp, strCode_TypeScript, strTabFeatureId);
      console.log('生成代码完成！');
    } catch (e: any) {
      const strMsg = `复制记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public GetButton_CreateTabFeature(strFldId: string, strTabId: string): HTMLButtonElement {
    const btnCreateFunc: HTMLButtonElement = document.createElement('button');

    btnCreateFunc.id = Format('btnCreateFunc{0}', strFldId);
    btnCreateFunc.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnCreateFunc.title = '建立绑定下拉框函数';

    (function (strFldId, strTabId1) {
      btnCreateFunc.onclick = function () {
        TabFeatureCRUD_EditEx.btnCreateBindDdlFunc(strFldId, strTabId1);
      };
    })(strFldId, strTabId);
    btnCreateFunc.innerText = '建立函数';
    return btnCreateFunc;
  }
  public GetButton_UpdateTabFeature(strTabFeatureId: string): HTMLButtonElement {
    const btnUpdateteTabFeature: HTMLButtonElement = document.createElement('button');

    btnUpdateteTabFeature.id = Format('btnUpdateteTabFeature{0}', strTabFeatureId);
    btnUpdateteTabFeature.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnUpdateteTabFeature.title = '修改表功能';

    (function (strTabFeatureId1) {
      btnUpdateteTabFeature.onclick = function () {
        TabFeatureCRUD_EditEx.btnUpdateTabFeature(strTabFeatureId1);
      };
    })(strTabFeatureId);
    btnUpdateteTabFeature.innerText = '修改';
    return btnUpdateteTabFeature;
  }

  public GetButton_EditComboBox(strTabFeatureId: string): HTMLButtonElement {
    const btnUpdateteTabFeature: HTMLButtonElement = document.createElement('button');

    btnUpdateteTabFeature.id = Format('btnEditComboBox{0}', strTabFeatureId);
    btnUpdateteTabFeature.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnUpdateteTabFeature.title = '编辑下拉框';

    (function (strTabFeatureId1) {
      btnUpdateteTabFeature.onclick = function () {
        TabFeatureCRUD_EditEx.btnEditComboBox(strTabFeatureId1);
      };
    })(strTabFeatureId);
    btnUpdateteTabFeature.innerText = '编辑下拉框';
    return btnUpdateteTabFeature;
  }
  public GetButton_GeneCode(strTabFeatureId: string): HTMLButtonElement {
    const btnGeneCode: HTMLButtonElement = document.createElement('button');

    btnGeneCode.id = Format('btnGeneCode{0}', strTabFeatureId);
    btnGeneCode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnGeneCode.title = '生成下拉框的相关代码';

    (function (strTabFeatureId1) {
      btnGeneCode.onclick = function () {
        TabFeatureCRUD_EditEx.btnGeneCode(strTabFeatureId1);
      };
    })(strTabFeatureId);
    btnGeneCode.innerText = '生成代码';
    return btnGeneCode;
  }

  /**
   *  复制记录
   */
  public static async btnCopyNode_Click(strTabFeatureId: string) {
    try {
      await TabFeatureEx_CopyNodeToNewVersion(
        strTabFeatureId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
      await objTabFeatureCRUD_EditEx.BindLi_TabFeatureLst(TabId_Static.value);

      console.log('完成复制！');
    } catch (e: any) {
      const strMsg = `复制记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /**
   *  复制记录
   */
  public static async btnDelRecordEx_Click(strTabFeatureId: string, divLayout: HTMLDivElement) {
    try {
      const divList = GetDivObjInDivObj(divLayout, 'divList');
      await TabFeatureEx_DelRecordEx(strTabFeatureId, clsPrivateSessionStorage.currSelPrjId);
      vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
      vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
      await objTabFeatureCRUD_EditEx.BindLi_TabFeatureLst(TabId_Static.value);
      await objTabFeatureCRUD_EditEx.BindGv_TabFeature4Func(divList);

      console.log('完成删除！');
    } catch (e: any) {
      const strMsg = `删除记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public GetButton_CopyNode(strTabFeatureId: string): HTMLButtonElement {
    const btnCopyNode: HTMLButtonElement = document.createElement('button');

    btnCopyNode.id = Format('btnCopyNode{0}', strTabFeatureId);
    btnCopyNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnCopyNode.title = '复制绑定下拉框函数';

    (function (strTabFeatureId1) {
      btnCopyNode.onclick = function () {
        TabFeatureCRUD_EditEx.btnCopyNode_Click(strTabFeatureId1);
      };
    })(strTabFeatureId);
    btnCopyNode.innerText = '复制';
    return btnCopyNode;
  }
  public GetButton_DelNode(strTabFeatureId: string): HTMLButtonElement {
    const btnDelNode: HTMLButtonElement = document.createElement('button');

    btnDelNode.id = Format('btnDelNode{0}', strTabFeatureId);
    btnDelNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnDelNode.title = '删除绑定下拉框函数';

    (function (strTabFeatureId1, divLayout) {
      btnDelNode.onclick = function () {
        TabFeatureCRUD_EditEx.btnDelRecordEx_Click(strTabFeatureId1, divLayout);
      };
    })(strTabFeatureId, divVarSet.refDivLayout);
    btnDelNode.innerText = '删除';
    return btnDelNode;
  }
  public async GetUl_TabFeatureFld(objTabFeature: clsTabFeatureEN) {
    const ulTabFeatureFld: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulTabFeatureFld.id = Format('ulSub{0}', objTabFeature.tabFeatureId);
    ulTabFeatureFld.className = 'list-unstyled';
    // let bolIsHasAdjNode = false;
    let arrTabFeatureFlds: Array<clsTabFeatureFldsEN> = []; //以当前结点为输入结点的关系

    arrTabFeatureFlds = await TabFeatureFldsEx_GetObjLstByTabFeatureId(objTabFeature.tabFeatureId);
    let arrTabFeatureFldsExLst: Array<clsTabFeatureFldsENEx> =
      arrTabFeatureFlds.map(TabFeatureFldsEx_CopyToEx);
    for (const objInFor of arrTabFeatureFldsExLst) {
      await this.FuncMap4OrderNum(objInFor);
    }
    arrTabFeatureFldsExLst = arrTabFeatureFldsExLst.sort(TabFeatureFldsEx_SortFun_OrderNum);
    if (arrTabFeatureFldsExLst.length > 0) {
      // bolIsHasAdjNode = true;
    }
    // let intIndex = 1;
    for (const objTabFeatureFlds of arrTabFeatureFldsExLst) {
      const liTabFeatureFld: HTMLLIElement = await this.GetLi_TabFeatureFld(
        objTabFeatureFlds,
        objTabFeatureFlds.orderNum,
      );
      ulTabFeatureFld.appendChild(liTabFeatureFld);
      // intIndex++;
    }
    return ulTabFeatureFld;
  }

  public async GetUl_TabFeature(objTabFeature: clsTabFeatureEN) {
    const ulTabFeature: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulTabFeature.id = Format('ul{0}', objTabFeature.tabFeatureId);
    ulTabFeature.className = 'list-unstyled';

    return ulTabFeature;
  }
  public GetDiv_TabsBak(objTabFeature: clsTabFeatureEN) {
    const objTabs = new clsTabs();
    const strDivName4CSharp = Format('divCode4CSharp{0}', objTabFeature.tabFeatureId);
    const strDivName4TypeScript = Format('divCode4TypeScript{0}', objTabFeature.tabFeatureId);
    const divCSharp: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    //divCSharp.innerHTML = "divCSharp";

    divCSharp.id = strDivName4CSharp;

    const divTypeScript: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    //divTypeScript.innerHTML = "divTypeScript";

    divTypeScript.id = strDivName4TypeScript;

    const arrTabInfo: Array<clsTabInfo> = [
      {
        TabClick: '',
        tabId: Format('codetab1_{0}', objTabFeature.tabFeatureId),
        IsActive: true,
        TabTitle: '代码-用于绑定CSharp的Web下拉框',
        DivContent: divCSharp,
      },
      {
        TabClick: '',
        tabId: Format('codetab2_{0}', objTabFeature.tabFeatureId),
        IsActive: false,
        TabTitle: '代码-用于绑定TypeScript的Web下拉框',
        DivContent: divTypeScript,
      },
    ];
    objTabs.TabLst = arrTabInfo;
    const divTabs: HTMLDivElement = objTabs.CreateTabs();
    divTabs.className += ' col-7';
    divTabs.id = Format('divTabs_{0}', objTabFeature.tabFeatureId);
    return divTabs;
  }
  /**
   * 把一个扩展类的部分属性进行函数转换
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
   * @param objPrjTabS:源对象
   */
  public async FuncMap4OrderNum(objTabFeatureFlds: clsTabFeatureFldsENEx) {
    try {
      {
        switch (objTabFeatureFlds.fieldTypeId) {
          case enumFieldType.KeyField_02:
            objTabFeatureFlds.orderNum = 1;
            break;
          case enumFieldType.NameField_03:
            objTabFeatureFlds.orderNum = 2;
            break;
          case enumFieldType.SortField_06:
            objTabFeatureFlds.orderNum = 3;
            break;
          case enumFieldType.ConditionField_16:
            if (objTabFeatureFlds.orderNum < 4) {
              objTabFeatureFlds.orderNum = 4;
            }
            break;
        }
      }
    } catch (e: any) {
      const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   */
  public async CombineTabFeatureConditionObj(): Promise<clsTabFeatureEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objTabFeature_Cond = new clsTabFeatureEN();
    if (IsNullOrEmpty(TabId_Static.value) == false && TabId_Static.value != '00000000') {
      objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabId, TabId_Static.value, '=');
    }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.tabId_q != '') {
        strWhereCond += ` And ${clsTabFeatureEN.con_TabId} like '% ${this.tabId_q}%'`;
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabId, this.tabId_q, 'like');
      }
      //if (this.TabFeatureId_q != "") {
      //    strWhereCond += ` And ${clsTabFeatureEN.con_TabFeatureId} like '% ${this.TabFeatureId_q}%'`;
      //    objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabFeatureId, this.TabFeatureId_q, "like");
      //}
      //if (this.TabFeatureName_q != "") {
      //    strWhereCond += ` And ${clsTabFeatureEN.con_TabFeatureName} like '% ${this.TabFeatureName_q}%'`;
      //    objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabFeatureName, this.TabFeatureName_q, "like");
      //}
      // if (this.funcNameCs_q != '') {
      //   strWhereCond += ` And ${clsTabFeatureEN.con_FuncNameCs} like '% ${this.funcNameCs_q}%'`;
      //   objTabFeature_Cond.SetCondFldValue(
      //     clsTabFeatureEN.con_FuncNameCs,
      //     this.funcNameCs_q,
      //     'like',
      //   );
      // }
      // if (this.funcNameJs_q != '') {
      //   strWhereCond += ` And ${clsTabFeatureEN.con_FuncNameJs} like '% ${this.funcNameJs_q}%'`;
      //   objTabFeature_Cond.SetCondFldValue(
      //     clsTabFeatureEN.con_FuncNameJs,
      //     this.funcNameJs_q,
      //     'like',
      //   );
      // }
      if (IsNullOrEmpty(this.featureId) == false) {
        strWhereCond += ` And ${clsTabFeatureEN.con_FeatureId} = '${this.featureId}'`;
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_FeatureId, this.featureId, '=');
      }
      if (this.isExtendedClass_q == true) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsExtendedClass);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsExtendedClass, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsExtendedClass);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsExtendedClass, false, '=');
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForCSharp_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForCSharp);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsForCSharp, true, '=');
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForCSharp_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForCSharp);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsForCSharp, false, '=');
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForTypeScript_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForTypeScript);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsForTypeScript, true, '=');
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForTypeScript_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForTypeScript);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsForTypeScript, false, '=');
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForDiv_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForDiv);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsForDiv, true, '=');
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForDiv_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForDiv);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsForDiv, false, '=');
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsNeedGC_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsNeedGC);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsNeedGC, true, '=');
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsNeedGC_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsNeedGC);
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_IsNeedGC, false, '=');
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0010)在组合查询条件对象(CombineTabFeatureConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objTabFeature_Cond.whereCond = strWhereCond;
    return objTabFeature_Cond;
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  public async btnTab_Click() {
    if (IsNullOrEmpty(this.tabId_q) == false) {
      TabId_Static.value = this.tabId_q;
    }
    await this.BindLi_TabFeatureLst(TabId_Static.value);
    await this.BindGv_TabFeature4Func(divVarSet.refDivList);
  }

  public async SetButtonStatus(strFeatureId: string) {
    const strThisFuncName = this.SetButtonStatus.name;
    let objPrjFeature;
    switch (strFeatureId) {
      case enumPrjFeature.Tab_BindDdl_0173:
      case enumPrjFeature.Tab_BindDdl_0221:
        SetButtonHtmlByIdInDivObj(
          TabFeatureCRUD_EditEx.divFunctionEdit,
          'btnAddTabFeature',
          '添加默认下拉框',
        );
        SetButtonHtmlByIdInDivObj(
          TabFeatureCRUD_EditEx.divFunctionEdit,
          'btnAddNewRecordWithMaxId',
          '添加下拉框',
        );

        break;
      default:
        objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(strFeatureId);
        if (objPrjFeature == null) {
          const strMsg = Format(
            '功能Id:{0}没有相应的功能！(in {1}.{2})',
            strFeatureId,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        } else {
          const strMsg = Format(
            '功能:{0}({1})没有相应的功能！(in {2}.{3})',
            objPrjFeature.featureName,
            strFeatureId,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
        break;
    }
  }

  public async btnGetDefaNameProp_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置默认名称的记录！');
        return;
      }

      const arrTabFeatureObjLst: Array<clsTabFeatureEN> =
        await TabFeature_GetObjLstByTabFeatureIdLstAsync(arrKeyIds);
      for (const objInFor of arrTabFeatureObjLst) {
        const objTabFeature = new clsTabFeatureEN();
        ObjectAssign(objTabFeature, objInFor);
        if (objTabFeature == null) continue;
        let bolIsUpdate = false;
        if (objTabFeature.tabFeatureName == '绑定下拉框' || objTabFeature.tabFeatureName == '') {
          objTabFeature.tabFeatureName = await TabFeatureEx_GetTabFeatureName(
            objTabFeature.tabFeatureId,
            objInFor.prjId,
          );
          bolIsUpdate = true;
        }
        if (objTabFeature.isForCSharp == true) {
          objTabFeature.funcNameCs = await TabFeatureEx_GetFuncNameCs(
            objTabFeature.tabFeatureId,
            objInFor.prjId,
          );
          bolIsUpdate = true;
        }
        if (objTabFeature.isForTypeScript == true) {
          objTabFeature.funcNameJs = await TabFeatureEx_GetFuncNameJs(
            objTabFeature.tabFeatureId,
            objInFor.prjId,
          );
          bolIsUpdate = true;
        }
        if (bolIsUpdate == false) continue;
        //检查唯一性条件
        const bolIsExistCond_TabId_FeatureId_TabFeatureName = await this.CheckUniCond4Update(
          objTabFeature,
        );
        if (bolIsExistCond_TabId_FeatureId_TabFeatureName == false) {
          continue;
        }
        objTabFeature.sfUpdFldSetStr = objTabFeature.updFldString; //设置哪些字段被修改(脏字段)
        const returnBool = await TabFeature_UpdateRecordAsync(objTabFeature);
        if (returnBool == true) {
          vTabFeature_Sim_ReFreshThisCache(PrjId_Session.value);
        }
      }

      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
      await objTabFeatureCRUD_EditEx.BindLi_TabFeatureLst(TabId_Static.value);
      await objTabFeatureCRUD_EditEx.BindGv_TabFeature4Func(divVarSet.refDivList);

      console.log('完成设置默认名称！');
    } catch (e: any) {
      const strMsg = `设置默认名称不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /**
   *  添加表功能
   */
  public async btnAddTabFeature_Click() {
    try {
      let strFeatureId = this.featureId;
      if (IsNullOrEmpty(strFeatureId) == true) {
        strFeatureId = enumPrjFeature.Tab_BindDdl_0173;
      }
      let strWhere = `${clsTabFeatureEN.con_TabId} = '${TabId_Static.value}'`;
      strWhere += `and ${clsTabFeatureEN.con_FeatureId} = '${strFeatureId}'`;
      switch (strFeatureId) {
        case enumPrjFeature.Tab_BindDdl_0173:
          strWhere += `and ${clsTabFeatureEN.con_TabFeatureName} = '绑定下拉框'`;
          break;
      }
      const isExist = await TabFeature_IsExistRecordAsync(strWhere);
      if (isExist == true) {
        alert(`条件:${strWhere} 的记录已经存在！`);
        return;
      }
      await TabFeatureEx_AddTabFeature(
        TabId_Static.value,
        strFeatureId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
      vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
      await objTabFeatureCRUD_EditEx.BindLi_TabFeatureLst(TabId_Static.value);
      await objTabFeatureCRUD_EditEx.BindGv_TabFeature4Func(divVarSet.refDivList);

      console.log('完成添加表功能！');
    } catch (e: any) {
      const strMsg = `添加表功能不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public HideDivQuery() {
    HideDivObj(divVarSet.refDivQuery);
    TabFeatureCRUD_EditEx.isShowQuery = false;
  }
  public ShowDivQuery() {
    ShowDivObj(divVarSet.refDivQuery);
    TabFeatureCRUD_EditEx.isShowQuery = true;
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
  public get qsOp() {
    const strName = 'Op';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  /**
   * 表ID (Used In CombineCondition())
   */
  public get tabId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlTabId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 表ID (Used In CombineCondition())
   */
  public set tabId_q(value: string) {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'select', 'ddlTabId_q');
    const strId = 'ddlTabId_q';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }

  /**
   * 字段Id (Used In CombineCondition())
   */
  public get keyFldId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlKeyFldId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 字段Id (Used In CombineCondition())
   */
  public set keyFldId_q(value: string) {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'select', 'ddlKeyFldId_q');
    const strId = 'ddlKeyFldId_q';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /** 为修改记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
   **/
  public async CheckUniCond4Update(objTabFeatureEN: clsTabFeatureEN): Promise<boolean> {
    // const strThisFuncName = this.CheckUniCond4Update.name;
    const strUniquenessCondition = TabFeature_GetUniCondStr4Update(objTabFeatureEN);
    const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。满足条件：{0}的记录已经存在！',
        strUniquenessCondition,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }
  /**
   * 是否在扩展类 (Used In CombineCondition())
   **/
  public get isExtendedClass_q(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(divVarSet.refDivQuery, 'chkIsExtendedClass_q');
    return bolValue;
  }
  /**
   * 是否在扩展类 (Used In CombineCondition())
   **/
  public set isExtendedClass_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkIsExtendedClass_q', value);
  }
  /** 显示TabFeature对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrTabFeatureExObjLst:需要绑定的对象列表
   **/
  public async BindTab_TabFeature4Func(
    divContainer: HTMLDivElement,
    arrTabFeatureExObjLst: Array<clsTabFeatureENEx>,
  ) {
    // const strThisFuncName = this.BindTab_TabFeature4Func.name;
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
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'tabFeatureId',
        sortBy: 'tabFeatureId',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表功能Id',
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
        fldName: 'tabFeatureName',
        sortBy: 'tabFeatureName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表功能名',
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
        fldName: 'tabName',
        sortBy: 'tabName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表名',
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
        fldName: 'featureName',
        sortBy: 'featureName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '功能名称',
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
        fldName: 'funcNameCsEx',
        sortBy: 'funcNameCsEx',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: 'Cs函数名',
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
        fldName: 'funcNameJsEx',
        sortBy: 'funcNameJsEx',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: 'Js函数名',
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
        fldName: 'useTimes',
        sortBy: 'useTimes',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '使用次数',
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
        fldName: 'isExtendedClass',
        sortBy: 'isExtendedClass',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '在扩展类?',
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
        fldName: 'isNeedGC',
        sortBy: 'isNeedGC',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '生成代码?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    await this.ExtendFldFuncMap(arrTabFeatureExObjLst, arrDataColumn);
    await BindTab(
      divDataLst,
      arrTabFeatureExObjLst,
      arrDataColumn,
      clsTabFeatureEN.con_TabFeatureId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async ExtendFldFuncMap(
    arrTabFeatureExObjLst: Array<clsTabFeatureENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsTabFeatureEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrTabFeatureExObjLst) {
        await TabFeatureEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineTabFeatureCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and TabId ='{0}'", TabId_Static.value);
    if (TabFeatureCRUD_EditEx.isShowQuery == false) return strWhereCond;
    try {
      // if (this.funcNameCs_q != '') {
      //   strWhereCond += Format(
      //     " And {0} like '%{1}%'",
      //     clsTabFeatureEN.con_FuncNameCs,
      //     this.funcNameCs_q,
      //   );
      // }
      // if (this.funcNameJs_q != '') {
      //   strWhereCond += Format(
      //     " And {0} like '%{1}%'",
      //     clsTabFeatureEN.con_FuncNameJs,
      //     this.funcNameJs_q,
      //   );
      // }
      if (IsNullOrEmpty(this.featureId) == false) {
        strWhereCond += ` And ${clsTabFeatureEN.con_FeatureId} = '${this.featureId}'`;
      }
      if (this.isExtendedClass_q == true) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsExtendedClass);
      } else {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsExtendedClass);
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForCSharp_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForCSharp);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForCSharp_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForCSharp);
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForTypeScript_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForTypeScript);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForTypeScript_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForTypeScript);
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForDiv_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForDiv);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsForDiv_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForDiv);
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsNeedGC_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsNeedGC);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsNeedGC_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsNeedGC);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombineTabFeatureCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_TabFeature4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_TabFeature4Func.name;
    if (viewVarSet.sortTabFeatureBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortTabFeatureBy)为空，请检查！(In BindGv_TabFeatureCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineTabFeatureCondition();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //let arrTabFeatureObjLst: Array<clsTabFeatureEN> = [];
    let arrTabFeatureExObjLst: Array<clsTabFeatureENEx> = [];
    try {
      this.recCount = await TabFeature_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortTabFeatureBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrTabFeatureExObjLst = await TabFeatureEx_GetObjExLstByPagerAsync(objPagerPara);
      //for (const objInFor of arrTabFeatureObjLst) {
      //    const objEx = this.CopyToEx(objInFor);
      //    arrTabFeatureExObjLst.push(objEx);
      //}
      //for (const objInFor of arrTabFeatureExObjLst) {
      //    await this.FuncMap(objInFor);
      //}
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
    if (arrTabFeatureExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, TabId_Static.value);
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_TabFeature4Func(divList, arrTabFeatureExObjLst);
      //console.log("完成BindGv_TabFeature4Func!");
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

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_Click() {
    const strThisFuncName = this.btnDelRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord(arrKeyIds);
      vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
      vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx();
      await objTabFeatureCRUD_EditEx.BindLi_TabFeatureLst(TabId_Static.value);

      await this.BindGv_TabFeature4Func(divVarSet.refDivList);
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
  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }
  public get GetOp(): string {
    if (IsNullOrEmpty(TabFeatureCRUD_EditEx.Op) == false) return TabFeatureCRUD_EditEx.Op;
    return this.qsOp;
  }
  /*
   * 功能Id
   */
  public get featureId(): string {
    return TabFeatureCRUD_EditEx.GetPropValue('featureId');
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
