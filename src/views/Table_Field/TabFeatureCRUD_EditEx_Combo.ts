/*import $ from "jquery";*/
import { ComboBox_EdtEx } from './ComboBox_EdtEx';

import TabFeature_EditEx from './TabFeature_EditEx';
import { TabFeatureCRUD } from '@/viewsBase/Table_Field/TabFeatureCRUD';
import { clsPubFun4Visible } from '@/ts/FunClass/clsPubFun4Visible';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { clsTabFeatureFldsENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsENEx';
import { clsvTabFeatureFlds_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeatureFlds_SimEN';
import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';
import { clsvTabFeature_SimENEx } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimENEx';
import { TabFeatureFlds_DelTabFeatureFldssByCondAsync } from '@/ts/L3ForWApi/Table_Field/clsTabFeatureFldsWApi';
import { TabFeature_GetRecCountByCondAsync } from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import {
  vTabFeatureFlds_Sim_GetObjLstCache,
  vTabFeatureFlds_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import { vTabFeature_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import {
  TabFeatureEx_CopyNodeToNewVersion,
  TabFeatureEx_DelRecordEx,
  TabFeatureEx_GC_DdlBindFunction4CSharp,
  TabFeatureEx_GC_DdlBindFunctionInDiv4TypeScript,
  TabFeatureEx_GetLi_TabName4TabFeature,
  TabFeatureEx_GetObjExLstByPagerAsync,
  TabFeatureEx_GetSpan4TabFeature,
  TabFeatureEx_GetTabIdByTabFeatureIdCache,
  TabFeatureEx_LogErrMsg,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import {
  TabFeatureFldsEx_CopyToEx,
  TabFeatureFldsEx_GetObjLstByTabFeatureId,
  TabFeatureFldsEx_GetSpan4FieldWithTabName,
  TabFeatureFldsEx_SortFun_OrderNum,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import {
  vTabFeature_SimEx_CopyToEx,
  vTabFeature_SimEx_GetObjByTabFeatureIdCache,
  vTabFeature_SimEx_GetObjLstByTabIdCache,
  vTabFeature_SimEx_GetObjLstCache,
  vTabFeature_SimEx_SortFunByOrderNum,
} from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  CheckControlExistInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  GetSpan_Empty,
  IsExistDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { confirm_del, confirm_del4Msg } from '@/ts/PubFun/clsCommFunc4Web';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsTabInfo, clsTabs } from '@/ts/PubFun/clsTabs';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  PrjId_Session,
  TabId_Static,
  viewVarSet,
} from '@/views/Table_Field/TabFeatureVueShare';
import { PrjTabFldEx_GetObjByFldIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';

/** TabFeatureCRUD_EditEx_Combo 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class TabFeatureCRUD_EditEx_Combo extends TabFeatureCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => any;
  public static SetCodeText: (strCodeText_Web: string, strCodeText_Ts: string) => void;
  //public static mstrListDiv: string = "divDataLst";
  public static FeatureTypeIdCache = '03';

  public static divName4FieldLst = 'divTabFeatureLst';
  public TabId = '';

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
    const divList = GetDivObjInDivObj(divVarSet.refDivLayout, 'divTabFeatureLst0173');
    if (divList == null) return;
    switch (strType) {
      case 'TabFeature':
        await this.BindGv_TabFeature4Func(divVarSet.refDivList);
        await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
          TabId_Static.value,
          divList,
          divVarSet.refDivLayout,
        );

        break;
      case 'ComboBox_Edt':
        await this.BindGv_TabFeature4Func(divVarSet.refDivList);
        await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
          TabId_Static.value,
          divList,
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
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: TabFeatureCRUD_EditEx_Combo = new TabFeatureCRUD_EditEx_Combo();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    const strMsg = '';
    let arrKeyIds;
    switch (strCommandName) {
      case 'Tab': //查询记录
        console.log(strKeyId);
        objPage.btnTab_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
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
          const strMsg = '请选择需要修改的记录！';
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
      //TabFeatureCRUD.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const strTabId = await clsPubVar4Web.GetTabId(this.qsTabId);

      TabId_Static.value = strTabId;
      TabId_Static.value = strTabId;

      viewVarSet.sortTabFeatureBy = Format('{0} Asc', clsTabFeatureEN.con_OrderNum);
      //2、显示无条件的表内容在GridView中
      const divList = GetDivObjInDivObj(divVarSet.refDivLayout, 'divTabFeatureLst0173');
      if (divList == null) return;
      await this.BindGv_TabFeature4Func(divVarSet.refDivList);
      await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
        strTabId,
        divList,
        divVarSet.refDivLayout,
      );
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public static async Get_TabFeatureLst(strTabId: string): Promise<Array<clsvTabFeature_SimEN>> {
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    let strKeyFldId_q = '';
    const divQuery = divVarSet.refDivQuery;
    if (IsExistDivObj(divQuery) == true) {
      strKeyFldId_q = TabFeatureCRUD_EditEx_Combo.keyFldIdS;
    }

    //const strNameFldId_q = this.nameFldId_q;
    //const strConditionFldId_q = this.conditionFldId_q;
    //const strSortFldId_q = this.sortFldId_q;

    if (
      IsNullOrEmpty(strTabId) == true &&
      IsNullOrEmpty(strKeyFldId_q) == true
      //&& IsNullOrEmpty(strNameFldId_q) == true
      //&& IsNullOrEmpty(strConditionFldId_q) == true
      //&& IsNullOrEmpty(strSortFldId_q) == true
    ) {
      const strMsg = '查询条件为空，不可以！';
      console.error(strMsg);
      throw strMsg;
    }
    let arrTabFeatureLst: Array<clsvTabFeature_SimEN>;
    // try {
    if (IsNullOrEmpty(strTabId) == false) {
      arrTabFeatureLst = await vTabFeature_SimEx_GetObjLstByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.cmPrjId,
      );
    } else {
      arrTabFeatureLst = await vTabFeature_SimEx_GetObjLstCache(clsPrivateSessionStorage.cmPrjId);
    }

    if (IsNullOrEmpty(strKeyFldId_q) == false) {
      let arrObjLst_Sel: Array<clsvTabFeatureFlds_SimEN> = await vTabFeatureFlds_Sim_GetObjLstCache(
        clsPrivateSessionStorage.cmPrjId,
      );

      arrObjLst_Sel = arrObjLst_Sel.filter(
        (x) => x.fieldTypeId == enumFieldType.KeyField_02 && x.fldId == strKeyFldId_q,
      );
      const arrTabFeatureId_Sel: Array<string> = arrObjLst_Sel.map((x) => x.tabFeatureId);

      arrTabFeatureLst = arrTabFeatureLst.filter(
        (x) => arrTabFeatureId_Sel.indexOf(x.tabFeatureId) > -1,
      );
    }

    arrTabFeatureLst = arrTabFeatureLst
      .filter((x) => x.featureId == TabFeatureCRUD_EditEx_Combo.featureIdS)
      .sort(vTabFeature_SimEx_SortFunByOrderNum);

    return arrTabFeatureLst;
    // }
    // catch (e: any) {
    //     //alert(e);
    //     throw (e);
    // }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public static async BindLi_TabFeatureLst(
    strTabId: string,
    divList: HTMLDivElement,
    divLayout: HTMLDivElement,
  ) {
    if (strTabId == '00000000') strTabId = '';

    let arrTabFeatureLst: Array<clsvTabFeature_SimEN>;
    try {
      arrTabFeatureLst = await this.Get_TabFeatureLst(strTabId);
    } catch (e: any) {
      alert(e);
      return;
    }
    const arrTabFeatureExLst: Array<clsvTabFeature_SimENEx> = arrTabFeatureLst.map(
      vTabFeature_SimEx_CopyToEx,
    );
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    //const strCmPrjId = TabFeatureCRUD_EditEx_Combo.CmPrjIdCache;
    //const intFldId = 0;

    // const divUl: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
    divList.innerHTML = '';

    //const ulTreeBind: HTMLUListElement = document.createElement("ul");
    //ulTreeBind.id = "ulTabFeature";
    //ulTreeBind.className = "st_tree"
    // const strhtml = '';
    //为每个字段获取相关的结点信息

    //arrTabFeatureExLst = arrTabFeatureExLst.sort(TabFeatureEx_SortFunByTabFeatureName);

    for (let i = 0; i < arrTabFeatureExLst.length; i++) {
      try {
        const objTabFeature = arrTabFeatureExLst[i];

        //建立图For一个字段的一个版本，即一个结点
        const divField = await TabFeatureCRUD_EditEx_Combo.GetDiv_TabFeature(
          objTabFeature,
          divLayout,
        );
        divList.appendChild(divField);

        const objHr: HTMLHRElement = document.createElement('hr');
        divList.appendChild(objHr);
      } catch (e: any) {
        console.error(e);
        alert(e);
      } //try
    } //for(const i = 0; i < arrTabFeatureExLst.length; i++)
  }

  public static GetDiv_TabFeature0(objTabFeature: clsvTabFeature_SimENEx): HTMLDivElement {
    const divLevel1: HTMLDivElement = document.createElement('div');
    divLevel1.className = 'row';
    divLevel1.style.width = '100%';

    divLevel1.id = Format('divTabFeature_{0}', objTabFeature.tabFeatureId);
    return divLevel1;
  }
  public static GetDiv_TabFeatureLeft(objTabFeature: clsvTabFeature_SimENEx): HTMLDivElement {
    const divLeft: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    divLeft.innerHTML = '';
    // divLeft.className = 'col-5';
    divLeft.id = Format('left_{0}', objTabFeature.tabFeatureId);
    return divLeft;
  }
  public GetDiv_TabFeatureRightBak(objTabFeature: clsTabFeatureENEx): HTMLDivElement {
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
  public static async ShowCode(strCode4CSharp: string, strCode4TypeScript: string) {
    TabFeatureCRUD_EditEx_Combo.SetCodeText(strCode4CSharp, strCode4TypeScript);
    // const vm = getCurrentInstance()?.proxy as {
    //   SetCodeText: (strCodeText_Web: string, strCodeText_Ts: string) => void;
    // };
    // const vm = getCurrentInstance()?.proxy as CodeTextSetter | null;

    // if (vm) {
    //   vm.SetCodeText(strCode4CSharp, strCode4TypeScript);
    // }
  }
  public static async ShowCodeBak(
    strCode4CSharp: string,
    strCode4TypeScript: string,
    strTabFeatureId: string,
  ) {
    const strDivName4CSharp = Format('divCode4CSharp{0}', strTabFeatureId);
    const strDivName4TypeScript = Format('divCode4TypeScript{0}', strTabFeatureId);

    const divCSharp: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName4CSharp);
    divCSharp.className = 'row  border-info';
    divCSharp.style.width = '100%';
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
        TabFeatureCRUD_EditEx_Combo.btnCreateBindDdlFunc(strFeatureId1, strTabId1);
      };
    })(strFeatureId, strTabId);
    btnCreateFunc.innerText = '建立映射';
    const li_CreateFunc: HTMLLIElement = document.createElement('li');
    li_CreateFunc.className = 'nav-item';
    li_CreateFunc.id = Format('liCreateFunc_{0}', strFeatureId);
    li_CreateFunc.appendChild(btnCreateFunc);
    //const btnCopyNode: HTMLButtonElement = this.GetButton_CopyNode(strFldId, strTabId);
    //li_CreateFunc.appendChild(btnCopyNode);
    const ulCreateFunc: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulCreateFunc.id = Format('ulCreateFunc{0}', strFeatureId);
    ulCreateFunc.className = 'nav';
    ulCreateFunc.appendChild(li_CreateFunc);
    return ulCreateFunc;
  }
  /**
   * 为当前字段版本建立一个Span
   * @param objTabFeature
   * @param intVersionNo
   */
  public static async GetSpan_TabFeature(
    objTabFeature: clsvTabFeature_SimENEx,
    arrButtonLst: Array<HTMLButtonElement>,
  ): Promise<HTMLSpanElement> {
    let spnField: HTMLSpanElement = document.createElement('span');
    try {
      spnField = await TabFeatureEx_GetSpan4TabFeature(objTabFeature, arrButtonLst);
    } catch (e: any) {
      return spnField;
    }

    spnField.className = 'text-danger font-weight-bold text-g';

    return spnField;
  }

  public static async GetLi_TabFeatureFld(
    objTabFeatureFlds_p: clsTabFeatureFldsENEx,
    divLayout: HTMLDivElement,
  ): Promise<HTMLLIElement> {
    let objSpan4Field: HTMLSpanElement = document.createElement('span');
    let strErrMsg;
    try {
      objSpan4Field = await TabFeatureFldsEx_GetSpan4FieldWithTabName(
        objTabFeatureFlds_p.fldId,
        objTabFeatureFlds_p.fieldTypeId,
        clsPrivateSessionStorage.currSelPrjId,
        objTabFeatureFlds_p.isForExtendClass,
        objTabFeatureFlds_p.orderNum,
      );
      strErrMsg = objSpan4Field.getAttribute('errMsg');
      if (strErrMsg != null && IsNullOrEmpty(strErrMsg) == false) {
        await TabFeatureEx_LogErrMsg(
          objTabFeatureFlds_p.tabFeatureId,
          clsPrivateSessionStorage.currSelPrjId,
          strErrMsg,
        );
      }
      const btnDelTabFeatureFlds: HTMLButtonElement =
        TabFeatureCRUD_EditEx_Combo.GetButton_DelTabFeatureFlds(objTabFeatureFlds_p.mId, divLayout);
      objSpan4Field.appendChild(btnDelTabFeatureFlds);
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

    const objPage: TabFeatureCRUD_EditEx_Combo = new TabFeatureCRUD_EditEx_Combo();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    objPageEdit.btnAddNewRecord_Click();
  }

  public static btnUpdateTabFeature(strTabFeatureId: string) {
    const objPage: TabFeatureCRUD_EditEx_Combo = new TabFeatureCRUD_EditEx_Combo();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    objPageEdit.btnUpdateRecord_Click(strTabFeatureId);
    //alert(strFldId);
  }

  public static async btnEditComboBox(strTabFeatureId: string) {
    const objPage: TabFeatureCRUD_EditEx_Combo = new TabFeatureCRUD_EditEx_Combo();
    const objPageEdit: ComboBox_EdtEx = new ComboBox_EdtEx('ComboBox_EdtEx', objPage);
    // objPageEdit.divEdit = TabFeatureCRUD_EditEx_Combo.GetPropValue('ComboBox_EdtDiv');
    ComboBox_EdtEx.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
    const strTabId = await TabFeatureEx_GetTabIdByTabFeatureIdCache(
      strTabFeatureId,
      clsPrivateSessionStorage.cmPrjId,
    );

    ComboBox_EdtEx.strTabId4ComboBox = strTabId;
    ComboBox_EdtEx.divEditComboBox = divVarSet.refDivEdit;
    objPageEdit.btnUpdateRecord_Click(strTabFeatureId);
    //alert(strFldId);
  }
  public static async btnGeneCode(strTabFeatureId: string) {
    try {
      const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
        strTabFeatureId,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (objTabFeature == null) return;
      let strCode_TypeScript = '';
      let strCode_CSharp = '';
      if (objTabFeature.isForTypeScript == true) {
        strCode_TypeScript = await TabFeatureEx_GC_DdlBindFunctionInDiv4TypeScript(strTabFeatureId);
      }
      if (objTabFeature.isForCSharp == true) {
        strCode_CSharp = await TabFeatureEx_GC_DdlBindFunction4CSharp(strTabFeatureId);
      }

      TabFeatureCRUD_EditEx_Combo.ShowCode(strCode_CSharp, strCode_TypeScript);
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
        TabFeatureCRUD_EditEx_Combo.btnCreateBindDdlFunc(strFldId, strTabId1);
      };
    })(strFldId, strTabId);
    btnCreateFunc.innerText = '建立函数';
    return btnCreateFunc;
  }
  public static GetButton_UpdateTabFeature(strTabFeatureId: string): HTMLButtonElement {
    const btnUpdateteTabFeature: HTMLButtonElement = document.createElement('button');

    btnUpdateteTabFeature.id = Format('btnUpdateteTabFeature{0}', strTabFeatureId);
    btnUpdateteTabFeature.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnUpdateteTabFeature.title = '修改表功能';

    (function (strTabFeatureId1) {
      btnUpdateteTabFeature.onclick = function () {
        TabFeatureCRUD_EditEx_Combo.btnUpdateTabFeature(strTabFeatureId1);
      };
    })(strTabFeatureId);
    btnUpdateteTabFeature.innerText = '修改';
    return btnUpdateteTabFeature;
  }

  public static GetButton_EditComboBox(strTabFeatureId: string): HTMLButtonElement {
    const btnUpdateteTabFeature: HTMLButtonElement = document.createElement('button');

    btnUpdateteTabFeature.id = Format('btnEditComboBox{0}', strTabFeatureId);
    btnUpdateteTabFeature.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnUpdateteTabFeature.title = '编辑下拉框';

    (function (strTabFeatureId1) {
      btnUpdateteTabFeature.onclick = function () {
        TabFeatureCRUD_EditEx_Combo.btnEditComboBox(strTabFeatureId1);
      };
    })(strTabFeatureId);
    btnUpdateteTabFeature.innerText = '编辑下拉框';
    return btnUpdateteTabFeature;
  }
  public static GetButton_GeneCode(strTabFeatureId: string): HTMLButtonElement {
    const btnGeneCode: HTMLButtonElement = document.createElement('button');

    btnGeneCode.id = Format('btnGeneCode{0}', strTabFeatureId);
    btnGeneCode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnGeneCode.title = '生成下拉框的相关代码';

    (function (strTabFeatureId1) {
      btnGeneCode.onclick = function () {
        TabFeatureCRUD_EditEx_Combo.btnGeneCode(strTabFeatureId1);
      };
    })(strTabFeatureId);
    btnGeneCode.innerText = '生成代码';
    return btnGeneCode;
  }

  /**
   *  复制记录
   */
  public static async btnCopyNode_Click(strTabFeatureId: string, divLayout: HTMLDivElement) {
    try {
      await TabFeatureEx_CopyNodeToNewVersion(
        strTabFeatureId,
        clsPrivateSessionStorage.currSelPrjId,
      );

      const divList = GetDivObjInDivObj(divLayout, 'divTabFeatureLst0173');
      if (divList == null) return;
      await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
        TabId_Static.value,
        divList,
        divLayout,
      );

      console.log('完成复制！');
    } catch (e: any) {
      const strMsg = `复制记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /**
   *  删除表功能
   */
  public static async btnDelRecordEx_Click(strTabFeatureId: string, divLayout: HTMLDivElement) {
    try {
      const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
        strTabFeatureId,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (objTabFeature == null) {
        // const strMsg = Format(
        //   '在项目:[{0}]中，表功能Id:[{1}]没有相应功能，请检查！',
        //   clsPrivateSessionStorage.currSelPrjName,
        //   strTabFeatureId,
        // );
        return;
      }
      const strMsg = Format('你真的要删除这条表功能:[{0}]吗？', objTabFeature.tabFeatureName);
      if (confirm_del4Msg(strMsg) == false) {
        return;
      }
      await TabFeatureEx_DelRecordEx(strTabFeatureId, clsPrivateSessionStorage.currSelPrjId);
      vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
      vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      const divList = GetDivObjInDivObj(divLayout, 'divTabFeatureLst0173');
      if (divList == null) return;
      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx_Combo();
      await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
        TabId_Static.value,
        divList,
        divLayout,
      );
      await objTabFeatureCRUD_EditEx.BindGv_TabFeature4Func(divList);

      console.log('完成删除！');
    } catch (e: any) {
      const strMsg = `删除记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /**
   *  删除表功能
   */
  public static async btnDelTabFeatureFldsEx_Click(lngMid: number, divLayout: HTMLDivElement) {
    try {
      if (confirm_del4Msg('你真的要删除这条表功能字段信息吗？') == false) {
        return;
      }
      //await TabFeatureFlds_DelRecordAsync(lngMid);
      const strCondition = `Mid=${lngMid}`;
      await TabFeatureFlds_DelTabFeatureFldssByCondAsync(strCondition);

      vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      const divList = GetDivObjInDivObj(divLayout, 'divTabFeatureLst0173');
      if (divList == null) return;
      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx_Combo();
      await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
        TabId_Static.value,
        divList,
        divLayout,
      );
      await objTabFeatureCRUD_EditEx.BindGv_TabFeature4Func(divList);

      console.log('完成删除！');
    } catch (e: any) {
      const strMsg = `删除记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public static GetButton_CopyNode(
    strTabFeatureId: string,
    divLayout: HTMLDivElement,
  ): HTMLButtonElement {
    const btnCopyNode: HTMLButtonElement = document.createElement('button');

    btnCopyNode.id = Format('btnCopyNode{0}', strTabFeatureId);
    btnCopyNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnCopyNode.title = '复制绑定下拉框函数';

    (function (strTabFeatureId1, divLayout) {
      btnCopyNode.onclick = function () {
        TabFeatureCRUD_EditEx_Combo.btnCopyNode_Click(strTabFeatureId1, divLayout);
      };
    })(strTabFeatureId, divLayout);
    btnCopyNode.innerText = '复制';
    return btnCopyNode;
  }
  public static GetButton_DelNode(
    strTabFeatureId: string,
    divLayout: HTMLDivElement,
  ): HTMLButtonElement {
    const btnDelNode: HTMLButtonElement = document.createElement('button');

    btnDelNode.id = Format('btnDelNode{0}', strTabFeatureId);
    btnDelNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnDelNode.title = '删除绑定下拉框函数';

    (function (strTabFeatureId1, divLayout) {
      btnDelNode.onclick = function () {
        TabFeatureCRUD_EditEx_Combo.btnDelRecordEx_Click(strTabFeatureId1, divLayout);
      };
    })(strTabFeatureId, divLayout);
    btnDelNode.innerText = '删除';
    return btnDelNode;
  }
  public static async GetUl_TabFeatureFld(
    objTabFeature: clsvTabFeature_SimEN,
    divLayout: HTMLDivElement,
  ) {
    const ulTabFeatureFld: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulTabFeatureFld.id = Format('ulSub{0}', objTabFeature.tabFeatureId);
    ulTabFeatureFld.className = 'list-unstyled';
    const li_TabName4TabFeature = await TabFeatureEx_GetLi_TabName4TabFeature(objTabFeature);
    ulTabFeatureFld.appendChild(li_TabName4TabFeature);
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
      const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(
        objTabFeature.tabId,
        objTabFeatureFlds.fldId,
      );
      if (objPrjTabFld != null) objTabFeatureFlds.isForExtendClass = objPrjTabFld.isForExtendClass;
      const liTabFeatureFld: HTMLLIElement = await TabFeatureCRUD_EditEx_Combo.GetLi_TabFeatureFld(
        objTabFeatureFlds,
        divLayout,
      );
      ulTabFeatureFld.appendChild(liTabFeatureFld);
      // intIndex++;
    }
    return ulTabFeatureFld;
  }

  public static async GetUl_TabFeature(objTabFeature: clsvTabFeature_SimEN) {
    const ulTabFeature: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulTabFeature.id = Format('ul{0}', objTabFeature.tabFeatureId);
    ulTabFeature.className = 'list-unstyled';

    return ulTabFeature;
  }
  public GetDiv_TabsBak(objTabFeature: clsvTabFeature_SimEN) {
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
  public static async GetDiv_TabFeature(
    objTabFeature: clsvTabFeature_SimENEx,
    divLayout: HTMLDivElement,
  ): Promise<HTMLDivElement> {
    const strThisFuncName = this.GetDiv_TabFeature.name;
    const divTabFeature: HTMLDivElement = await this.GetDiv_TabFeature0(objTabFeature);

    const divLeft: HTMLDivElement =
      TabFeatureCRUD_EditEx_Combo.GetDiv_TabFeatureLeft(objTabFeature);

    // const divRight: HTMLDivElement = this.GetDiv_Tabs(objTabFeature);
    divTabFeature.appendChild(divLeft);
    // divTabFeature.appendChild(divRight);

    const ulTabFeature: HTMLUListElement = await TabFeatureCRUD_EditEx_Combo.GetUl_TabFeature(
      objTabFeature,
    );

    const li_Field: HTMLLIElement = document.createElement('li');
    li_Field.className = 'nav-item';
    li_Field.id = Format('liFld_{0}', objTabFeature.tabId);

    //const ulCreateFunc: HTMLUListElement = this.GetUl_CreateFunc(objTabFeature.tabId, strTabId);
    // const btnCreateFunc: HTMLButtonElement = this.GetButton_CreateTabFeature(
    //   objTabFeature.tabFeatureId,
    //   objTabFeature.tabId,
    // );
    const btnCopyNode: HTMLButtonElement = this.GetButton_CopyNode(
      objTabFeature.tabFeatureId,
      divLayout,
    );
    const btnDelNode: HTMLButtonElement = TabFeatureCRUD_EditEx_Combo.GetButton_DelNode(
      objTabFeature.tabFeatureId,
      divLayout,
    );
    const btnUpdateTabFeature: HTMLButtonElement =
      TabFeatureCRUD_EditEx_Combo.GetButton_UpdateTabFeature(objTabFeature.tabFeatureId);
    const btnEditComboBox: HTMLButtonElement = TabFeatureCRUD_EditEx_Combo.GetButton_EditComboBox(
      objTabFeature.tabFeatureId,
    );
    const btnGeneCode: HTMLButtonElement = TabFeatureCRUD_EditEx_Combo.GetButton_GeneCode(
      objTabFeature.tabFeatureId,
    );

    const arrButtonLst: Array<HTMLButtonElement> = [
      btnUpdateTabFeature,
      btnDelNode,
      btnCopyNode,
      btnEditComboBox,
      btnGeneCode,
    ];
    const spnField = await TabFeatureCRUD_EditEx_Combo.GetSpan_TabFeature(
      objTabFeature,
      arrButtonLst,
    );

    li_Field.appendChild(spnField);

    console.log('objTabFeature.featureId:', objTabFeature.featureId);

    ulTabFeature.appendChild(li_Field);

    //ulTabFeature.appendChild(li_Field);

    const li_Sub: HTMLLIElement = document.createElement('li');
    li_Sub.className = 'nav-item';
    li_Sub.id = Format('liSub_{0}', objTabFeature.tabFeatureId);
    //li_Sub.appendChild(ulCreateFunc);
    try {
      const ulTabFeatureFld: HTMLUListElement = await this.GetUl_TabFeatureFld(
        objTabFeature,
        divLayout,
      );

      li_Sub.appendChild(ulTabFeatureFld);

      ulTabFeature.appendChild(li_Sub);
    } catch (e) {
      const spnErrMsg = GetSpan_Empty('text-danger');

      const strMsg = Format(
        '表功能:[{0}]显示树结构出错:[{1}]。(in {{2}}.{{3}})',
        objTabFeature.tabFeatureName,
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      spnErrMsg.innerHTML = strMsg;
      li_Sub.appendChild(spnErrMsg);

      ulTabFeature.appendChild(li_Sub);
      await TabFeatureEx_LogErrMsg(
        objTabFeature.tabFeatureId,
        clsPrivateSessionStorage.currSelPrjId,
        strMsg,
      );
    }
    //如果没有下一个关联结点，即没有下一条边=========================================
    //}
    //    i_NodeNum++;
    //}//while，循环，同一个字段有多个结点
    divLeft.appendChild(ulTabFeature);
    return divTabFeature;
  }
  /**
   * 把一个扩展类的部分属性进行函数转换
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
   * @param objPrjTabS:源对象
   */
  public static async FuncMap4OrderNum(objTabFeatureFlds: clsTabFeatureFldsENEx) {
    try {
      {
        switch (objTabFeatureFlds.fieldTypeId) {
          case enumFieldType.KeyField_02:
            objTabFeatureFlds.orderNum = 1;
            break;
          case enumFieldType.NameField_03:
            objTabFeatureFlds.orderNum = 2;
            break;
          case enumFieldType.ConditionField_16:
            if (objTabFeatureFlds.orderNum < 4) {
              objTabFeatureFlds.orderNum = 4;
            }
            break;
          case enumFieldType.SortField_06:
            objTabFeatureFlds.orderNum = 3;
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
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineTabFeatureCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and TabId ='{0}'", TabId_Static.value);
    try {
      if (TabId_Static.value != '') {
        strWhereCond += ` And ${clsTabFeatureEN.con_TabId} like '% ${TabId_Static.value}%'`;
      }
      if (IsNullOrEmpty(this.featureId) == false) {
        strWhereCond += ` And ${clsTabFeatureEN.con_FeatureId} = '${this.featureId}'`;
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

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   */
  public async CombineTabFeatureConditionObj(): Promise<clsTabFeatureEN> {
    let strWhereCond = ' 1 = 1 ';
    const objTabFeature_Cond = new clsTabFeatureEN();
    objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabId, TabId_Static.value, '=');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (TabId_Static.value != '') {
        strWhereCond += ` And ${clsTabFeatureEN.con_TabId} like '% ${TabId_Static.value}%'`;
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabId, TabId_Static.value, 'like');
      }
      //if (this.TabFeatureName_q != "") {
      //    strWhereCond += ` And ${clsTabFeatureEN.con_TabFeatureName} like '% ${this.TabFeatureName_q}%'`;
      //    objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabFeatureName, this.TabFeatureName_q, "like");
      //}
      if (IsNullOrEmpty(this.featureId) == false) {
        strWhereCond += ` And ${clsTabFeatureEN.con_FeatureId} = '${this.featureId}'`;
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_FeatureId, this.featureId, '=');
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
    const divList = GetDivObjInDivObj(divVarSet.refDivLayout, 'divTabFeatureLst0173');
    if (divList == null) return;
    await TabFeatureCRUD_EditEx_Combo.BindLi_TabFeatureLst(
      TabId_Static.value,
      divList,
      divVarSet.refDivLayout,
    );
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
  /**
   * 字段Id (Used In CombineCondition())
   */
  public get nameFldId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlNameFldId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 字段Id (Used In CombineCondition())
   */
  public set nameFldId_q(value: string) {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'select', 'ddlNameFldId_q');
    const strId = 'ddlNameFldId_q';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }

  /**
   * 字段Id (Used In CombineCondition())
   */
  public get conditionFldId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlConditionFldId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 字段Id (Used In CombineCondition())
   */
  public set conditionFldId_q(value: string) {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'select', 'ddlConditionFldId_q');
    const strId = 'ddlConditionFldId_q';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }

  /**
   * 字段Id (Used In CombineCondition())
   */
  public get sortFldId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlSortFldId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 字段Id (Used In CombineCondition())
   */
  public set sortFldId_q(value: string) {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'select', 'ddlSortFldId_q');
    const strId = 'ddlSortFldId_q';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  public static GetButton_DelTabFeatureFlds(
    mid: number,
    divLayout: HTMLDivElement,
  ): HTMLButtonElement {
    const btnDelNode: HTMLButtonElement = document.createElement('button');

    btnDelNode.id = Format('btnDelTabFeatureFlds{0}', mid);
    btnDelNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
    btnDelNode.title = '删除下拉框功能字段';

    (function (mid1, divLayout) {
      btnDelNode.onclick = function () {
        TabFeatureCRUD_EditEx_Combo.btnDelTabFeatureFldsEx_Click(mid1, divLayout);
      };
    })(mid, divLayout);
    btnDelNode.innerText = '删除字段';
    return btnDelNode;
  }

  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_TabFeature4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_TabFeature4Func.name;
    if (viewVarSet.sortTabFeatureBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortTabFeatureBy)为空，请检查！(In BindGv_TabFeatureCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineTabFeatureCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
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
      const strKey = Format('{0}', clsTabFeatureEN._CurrTabName);
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_TabFeature4Func(divList, arrTabFeatureExObjLst);
      await this.ShowErrMsg(divList, arrTabFeatureExObjLst);
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
  public ShowErrMsg(divContainer: HTMLDivElement, arrTabFeatureEx: Array<clsTabFeatureENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>(
      clsPubFun4Visible.GetArray(objLst)
    );
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objTabFeature = arrTabFeatureEx.find((x) => x.tabFeatureId.toString() == strId);
      if (objTabFeature != null) {
        if (objTabFeature.errMsg != null && objTabFeature.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objTabFeature.errMsg;
        } else if (IsNullOrEmpty(objTabFeature.trClass) == false) {
          x.className = objTabFeature.trClass;
        }
      }
    });
  }
  /*
   * 功能Id
   */
  public get featureId(): string {
    return TabFeatureCRUD_EditEx_Combo.GetPropValue('featureId');
  }
  public static get featureIdS(): string {
    return TabFeatureCRUD_EditEx_Combo.GetPropValue('featureId');
  }

  /*
   * 功能Id
   */
  public get keyFldId(): string {
    return TabFeatureCRUD_EditEx_Combo.GetPropValue('keyFldId');
  }
  public static get keyFldIdS(): string {
    return TabFeatureCRUD_EditEx_Combo.GetPropValue('keyFldId');
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
