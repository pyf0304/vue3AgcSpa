import { ComboBox_EdtEx } from './ComboBox_EdtEx';

import TabFeature_EditEx from './TabFeature_EditEx';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { clsTabFeatureFldsENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsENEx';
import {
  TabFeatureEx_CopyNodeToNewVersion,
  TabFeatureEx_DelRecordEx,
  TabFeatureEx_GC_DdlBindFunction4CSharp,
  TabFeatureEx_GC_DdlBindFunctionInDiv4TypeScript,
  TabFeatureEx_GetSpan4TabFeature,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import {
  TabFeatureFldsEx_CopyToEx,
  TabFeatureFldsEx_GetObjLstByTabFeatureId,
  TabFeatureFldsEx_GetSpan4FieldWithTabName,
  TabFeatureFldsEx_SortFun_OrderNum,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsTabInfo, clsTabs } from '@/ts/PubFun/clsTabs';
import { IShowList } from '@/ts/PubFun/IShowList';
import { TabFeatureCRUD } from '@/viewsBase/Table_Field/TabFeatureCRUD';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { vTabFeatureFlds_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import {
  vTabFeature_SimEx_CopyToEx,
  vTabFeature_SimEx_GetObjLstByTabIdCache,
  vTabFeature_SimEx_GetObjLstCache,
  vTabFeature_SimEx_SortFunByTabFeatureName,
} from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';
import { clsvTabFeature_SimENEx } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimENEx';
import { vTabFeature_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  PrjId_Session,
  TabId_Static,
  viewVarSet,
} from '@/views/Table_Field/TabFeatureVueShare';

/** TabFeatureCRUD_EditEx_SetFieldValue 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class TabFeatureCRUD_EditEx_SetFieldValue extends TabFeatureCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv: string = "divDataLst";
  public static FeatureTypeIdCache = '03';
  //public static FeatureIdCache: string = "0000";
  public static divName4FieldLst = 'divTabFeatureLst';

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
    // let gvResult;
    const divList = GetDivObjInDivObj(divVarSet.refDivLayout, 'divTabFeatureLst0170');
    if (divList == null) return;
    switch (strType) {
      case 'TabFeature':
        await this.BindGv_TabFeature4Func(divVarSet.refDivList);
        await this.BindLi_TabFeatureLst(TabId_Static.value, divList);

        break;
      case 'ComboBox_Edt':
        await this.BindGv_TabFeature4Func(divVarSet.refDivList);
        await this.BindLi_TabFeatureLst(TabId_Static.value, divList);

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
    const objPage: TabFeatureCRUD_EditEx_SetFieldValue = new TabFeatureCRUD_EditEx_SetFieldValue();
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
        //const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(strKeyId, clsPrivateSessionStorage.currSelPrjId);
        //const objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(objTabFeature.featureId);
        //TabFeature_EditEx.FeatureTypeId_Static = objPrjFeature.featureTypeId;
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
      const divList = GetDivObjInDivObj(divVarSet.refDivLayout, 'divTabFeatureLst0170');
      if (divList == null) return;
      await this.BindGv_TabFeature4Func(divVarSet.refDivList);
      await this.BindLi_TabFeatureLst(strTabId, divList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindLi_TabFeatureLst(strTabId: string, divList: HTMLDivElement) {
    let arrTabFeatureLst: Array<clsvTabFeature_SimEN>;
    try {
      if (IsNullOrEmpty(strTabId) == true) {
        arrTabFeatureLst = await vTabFeature_SimEx_GetObjLstCache(clsPrivateSessionStorage.cmPrjId);
      } else {
        arrTabFeatureLst = await vTabFeature_SimEx_GetObjLstByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.cmPrjId,
        );
      }
      arrTabFeatureLst = arrTabFeatureLst.filter((x) => x.featureId == this.featureId);
    } catch (e: any) {
      alert(e);
      return;
    }
    let arrTabFeatureExLst: Array<clsvTabFeature_SimENEx> = arrTabFeatureLst.map(
      vTabFeature_SimEx_CopyToEx,
    );
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    //const strCmPrjId = TabFeatureCRUD_EditEx_SetFieldValue.CmPrjIdCache;
    //const intFldId = 0;

    // const divUl: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
    divList.innerHTML = '';

    //const ulTreeBind: HTMLUListElement = document.createElement("ul");
    //ulTreeBind.id = "ulTabFeature";
    //ulTreeBind.className = "st_tree"
    // const strhtml = '';
    //为每个字段获取相关的结点信息

    arrTabFeatureExLst = arrTabFeatureExLst.sort(vTabFeature_SimEx_SortFunByTabFeatureName);

    for (let i = 0; i < arrTabFeatureExLst.length; i++) {
      try {
        const objTabFeature = arrTabFeatureExLst[i];

        //建立图For一个字段的一个版本，即一个结点
        const divField = await this.GetDiv_TabFeature(objTabFeature);
        divList.appendChild(divField);

        const objHr: HTMLHRElement = document.createElement('hr');
        divList.appendChild(objHr);
      } catch (e: any) {
        console.error(e);
        alert(e);
      } //try
    } //for(const i = 0; i < arrTabFeatureExLst.length; i++)
  }

  public GetDiv_TabFeature0(objTabFeature: clsvTabFeature_SimENEx): HTMLDivElement {
    const divLevel1: HTMLDivElement = document.createElement('div');
    divLevel1.className = 'row';
    divLevel1.style.width = '100%';

    divLevel1.id = Format('divTabFeature_{0}', objTabFeature.tabFeatureId);
    return divLevel1;
  }
  public GetDiv_TabFeatureLeft(objTabFeature: clsvTabFeature_SimENEx): HTMLDivElement {
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
        TabFeatureCRUD_EditEx_SetFieldValue.btnCreateBindDdlFunc(strFeatureId1, strTabId1);
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
  public async GetSpan_TabFeature(
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

  public async GetLi_TabFeatureFld(
    objTabFeatureFlds_p: clsTabFeatureFldsENEx,
  ): Promise<HTMLLIElement> {
    let objSpan4Field: HTMLSpanElement = document.createElement('span');
    try {
      objSpan4Field = await TabFeatureFldsEx_GetSpan4FieldWithTabName(
        objTabFeatureFlds_p.fldId,
        objTabFeatureFlds_p.fieldTypeId,
        clsPrivateSessionStorage.currSelPrjId,
        objTabFeatureFlds_p.isForExtendClass,
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

    const objPage: TabFeatureCRUD_EditEx_SetFieldValue = new TabFeatureCRUD_EditEx_SetFieldValue();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    objPageEdit.btnAddNewRecord_Click();
  }

  public static btnUpdateTabFeature(strTabFeatureId: string) {
    const objPage: TabFeatureCRUD_EditEx_SetFieldValue = new TabFeatureCRUD_EditEx_SetFieldValue();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    objPageEdit.btnUpdateRecord_Click(strTabFeatureId);
    //alert(strFldId);
  }

  public static btnEditComboBox(strTabFeatureId: string) {
    const objPage: TabFeatureCRUD_EditEx_SetFieldValue = new TabFeatureCRUD_EditEx_SetFieldValue();
    const objPageEdit: ComboBox_EdtEx = new ComboBox_EdtEx('ComboBox_EdtEx', objPage);
    ComboBox_EdtEx.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
    ComboBox_EdtEx.strTabId4ComboBox = TabId_Static.value;
    objPageEdit.btnUpdateRecord_Click(strTabFeatureId);
    //alert(strFldId);
  }
  public static async btnGeneCode(strTabFeatureId: string) {
    try {
      const strCode_CSharp = await TabFeatureEx_GC_DdlBindFunction4CSharp(strTabFeatureId);
      const strCode_TypeScript = await TabFeatureEx_GC_DdlBindFunctionInDiv4TypeScript(
        strTabFeatureId,
      );
      TabFeatureCRUD_EditEx_SetFieldValue.ShowCode(
        strCode_CSharp,
        strCode_TypeScript,
        strTabFeatureId,
      );
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
        TabFeatureCRUD_EditEx_SetFieldValue.btnCreateBindDdlFunc(strFldId, strTabId1);
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
        TabFeatureCRUD_EditEx_SetFieldValue.btnUpdateTabFeature(strTabFeatureId1);
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
        TabFeatureCRUD_EditEx_SetFieldValue.btnEditComboBox(strTabFeatureId1);
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
        TabFeatureCRUD_EditEx_SetFieldValue.btnGeneCode(strTabFeatureId1);
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
      const divList = GetDivObjInDivObj(divLayout, 'divTabFeatureLst0170');
      if (divList == null) return;
      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx_SetFieldValue();
      await objTabFeatureCRUD_EditEx.BindLi_TabFeatureLst(TabId_Static.value, divList);

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
      await TabFeatureEx_DelRecordEx(strTabFeatureId, clsPrivateSessionStorage.currSelPrjId);
      vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
      vTabFeatureFlds_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      const divList = GetDivObjInDivObj(divLayout, 'divTabFeatureLst0170');
      if (divList == null) return;
      const objTabFeatureCRUD_EditEx = new TabFeatureCRUD_EditEx_SetFieldValue();
      await objTabFeatureCRUD_EditEx.BindLi_TabFeatureLst(TabId_Static.value, divList);
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

    (function (strTabFeatureId1, divLayout) {
      btnCopyNode.onclick = function () {
        TabFeatureCRUD_EditEx_SetFieldValue.btnCopyNode_Click(strTabFeatureId1, divLayout);
      };
    })(strTabFeatureId, divVarSet.refDivLayout);
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
        TabFeatureCRUD_EditEx_SetFieldValue.btnDelRecordEx_Click(strTabFeatureId1, divLayout);
      };
    })(strTabFeatureId, divVarSet.refDivLayout);
    btnDelNode.innerText = '删除';
    return btnDelNode;
  }
  public async GetUl_TabFeatureFld(objTabFeature: clsvTabFeature_SimEN) {
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
    // const intIndex = 1;
    for (const objTabFeatureFlds of arrTabFeatureFldsExLst) {
      const liTabFeatureFld: HTMLLIElement = await this.GetLi_TabFeatureFld(objTabFeatureFlds);
      ulTabFeatureFld.appendChild(liTabFeatureFld);
      // intIndex++;
    }
    return ulTabFeatureFld;
  }

  public async GetUl_TabFeature(objTabFeature: clsvTabFeature_SimEN) {
    const ulTabFeature: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulTabFeature.id = Format('ul{0}', objTabFeature.tabFeatureId);
    ulTabFeature.className = 'list-unstyled';

    return ulTabFeature;
  }
  public GetDiv_Tabs(objTabFeature: clsvTabFeature_SimEN) {
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
  public async GetDiv_TabFeature(objTabFeature: clsvTabFeature_SimENEx): Promise<HTMLDivElement> {
    const divTabFeature: HTMLDivElement = await this.GetDiv_TabFeature0(objTabFeature);

    const divLeft: HTMLDivElement = this.GetDiv_TabFeatureLeft(objTabFeature);

    const divRight: HTMLDivElement = this.GetDiv_Tabs(objTabFeature);
    divTabFeature.appendChild(divLeft);
    divTabFeature.appendChild(divRight);

    const ulTabFeature: HTMLUListElement = await this.GetUl_TabFeature(objTabFeature);

    const li_Field: HTMLLIElement = document.createElement('li');
    li_Field.className = 'nav-item';
    li_Field.id = Format('liFld_{0}', objTabFeature.tabId);

    //const ulCreateFunc: HTMLUListElement = this.GetUl_CreateFunc(objTabFeature.tabId, strTabId);
    // const btnCreateFunc: HTMLButtonElement = this.GetButton_CreateTabFeature(
    //   objTabFeature.tabFeatureId,
    //   objTabFeature.tabId,
    // );
    const btnCopyNode: HTMLButtonElement = this.GetButton_CopyNode(objTabFeature.tabFeatureId);
    const btnDelNode: HTMLButtonElement = this.GetButton_DelNode(objTabFeature.tabFeatureId);
    const btnUpdateTabFeature: HTMLButtonElement = this.GetButton_UpdateTabFeature(
      objTabFeature.tabFeatureId,
    );
    const btnEditComboBox: HTMLButtonElement = this.GetButton_EditComboBox(
      objTabFeature.tabFeatureId,
    );
    const btnGeneCode: HTMLButtonElement = this.GetButton_GeneCode(objTabFeature.tabFeatureId);

    const arrButtonLst: Array<HTMLButtonElement> = [
      btnUpdateTabFeature,
      btnDelNode,
      btnCopyNode,
      btnEditComboBox,
      btnGeneCode,
    ];
    const spnField = await this.GetSpan_TabFeature(objTabFeature, arrButtonLst);

    li_Field.appendChild(spnField);

    console.log('objTabFeature.featureId:', objTabFeature.featureId);

    ulTabFeature.appendChild(li_Field);

    //ulTabFeature.appendChild(li_Field);

    const li_Sub: HTMLLIElement = document.createElement('li');
    li_Sub.className = 'nav-item';
    li_Sub.id = Format('liSub_{0}', objTabFeature.tabFeatureId);
    //li_Sub.appendChild(ulCreateFunc);
    const ulTabFeatureFld: HTMLUListElement = await this.GetUl_TabFeatureFld(objTabFeature);

    li_Sub.appendChild(ulTabFeatureFld);

    ulTabFeature.appendChild(li_Sub);
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
          case enumFieldType.ConditionField_16:
            objTabFeatureFlds.orderNum = 3;
            break;
          case enumFieldType.SortField_06:
            objTabFeatureFlds.orderNum = 4;
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
    let strWhereCond = ' 1 = 1 ';
    const objTabFeature_Cond = new clsTabFeatureEN();
    objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabId, TabId_Static.value, '=');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (TabId_Static.value != '') {
        strWhereCond += ` And ${clsTabFeatureEN.con_TabId} like '% ${TabId_Static.value}%'`;
        objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabId, TabId_Static.value, 'like');
      }
      //if (this.TabFeatureId_q != "") {
      //    strWhereCond += ` And ${clsTabFeatureEN.con_TabFeatureId} like '% ${this.TabFeatureId_q}%'`;
      //    objTabFeature_Cond.SetCondFldValue(clsTabFeatureEN.con_TabFeatureId, this.TabFeatureId_q, "like");
      //}
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
    await this.BindLi_TabFeatureLst(TabId_Static.value, divList);
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
  /*
   * 功能Id
   */
  public get featureId(): string {
    return TabFeatureCRUD_EditEx_SetFieldValue.GetPropValue('featureId');
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'featureName|Ex':
        viewVarSet.sortTabFeatureBy = `vPrjFeatureSim|featureName ${sortDirection}|TabFeature.FeatureId = vPrjFeatureSim.FeatureId`;
        break;
      case 'fldNames|Ex':
        viewVarSet.sortTabFeatureBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'tabName|Ex':
        viewVarSet.sortTabFeatureBy = `vPrjTab_Sim|tabName ${sortDirection}|TabFeature.TabId = vPrjTab_Sim.TabId`;
        break;
      case 'funcNames|Ex':
        viewVarSet.sortTabFeatureBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'parentFeatureName|Ex':
        viewVarSet.sortTabFeatureBy = `vPrjFeatureSim|parentFeatureName ${sortDirection}|TabFeature.FeatureId = vPrjFeatureSim.FeatureId`;
        break;
      default:
        viewVarSet.sortTabFeatureBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_TabFeature4Func(this.listPara.listDiv);
  }
}
