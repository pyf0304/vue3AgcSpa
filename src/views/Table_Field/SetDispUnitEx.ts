import { PrjTabFld_Edit } from '@/viewsBase/Table_Field/PrjTabFld_Edit';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { CtlType_BindDdl_CtlTypeIdByIsVisibleInDivCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import {
  PrjTabFld_CheckProperty4Update,
  PrjTabFld_GetObjBymIdCache,
  PrjTabFld_GetUniCondStr4Update,
  PrjTabFld_IsExistRecordAsync,
  PrjTabFld_ReFreshCache,
  PrjTabFld_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import { css_StyleEx_GetHtml4Content } from '@/ts/L3ForWApiEx/CssManage/clscss_StyleExWApi';
import {
  PrjTabFldEx_CopyToEx,
  PrjTabFldEx_FuncMap_FldName,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { CheckDivExist, SetSpanHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { TabId_Static } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import { refSetDispUnit } from '@/views/Table_Field/SetDispUnitVueShare';

/** SetDispUnitEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class SetDispUnitEx extends PrjTabFld_Edit {
  public static divSetDispUnitObj: HTMLDivElement;

  public static objPageEdit: SetDispUnitEx;

  //专门用于数据列表的界面变量，用于分页功能等
  public static get con_SetFldDnPathInTab(): string {
    return 'SetFldDnPathInTab';
  } //说明
  public static get con_ClearFldDnPathInTab(): string {
    return 'ClearFldDnPathInTab';
  } //说明
  public static get con_TestDnPath(): string {
    return 'TestDnPath';
  } //说明

  public opType = '';
  public bolIsLoadSetDispUnit = false; //记录是否导入编辑区的变量
  //public currPageIndex = 0;

  public static objPage_Select: SetDispUnitEx;
  public mId_Static = 0;
  public tabId_Static = '';
  public static divSetDispUnit; //= GetUniDivInDoc('divSetDispUnit');
  public divName4DataList = 'divDataLst_Sel'; //列表中数据区的层Id
  public divName4Pager = 'divPager_Sel'; //列表中的分页区的层Id
  public bolIsInitShow = false; //记录是否导入分页区的变量
  public bolIsTableSm = true; //是否窄行的小表，即表中加样式： table-sm

  public divName4Select = 'divSelect'; //界面布局的层Id

  public divName4List = 'divDataLst_Sel';
  //public static mstrSortDnPathBy = "DnPathId";
  public static CmPrjIdCache = '';
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 50;
  }

  public recCount = 0;

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      SetDispUnitEx.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;

      // 为查询区绑定下拉框
      await this.BindDdl4EditRegion();
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
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
   * 设置绑定下拉框，针对字段:[CtlTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_CtlTypeIdDuInDiv(IsVisible: boolean) {
    await CtlType_BindDdl_CtlTypeIdByIsVisibleInDivCache(
      SetDispUnitEx.divSetDispUnit,
      'ddlCtlTypeIdDu',
      IsVisible,
    ); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4EditRegion() {
    // const strThisFuncName = this.BindDdl4EditRegion.name;
    // 在此处放置用户代码以初始化页面
    // const strCmPrjId = SetDispUnitEx.CmPrjIdCache; //定义条件字段
    const bolIsVisible = true;
    await this.SetDdl_CtlTypeIdDuInDiv(bolIsVisible); //查询区域
  }

  /** 函数功能:预留函数，在某一个层(div)里绑定数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
   **/
  public async BindInDiv(divName4Bind: HTMLDivElement) {
    console.log(divName4Bind);
  }

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnSetDispUnit_Click(lngmId: number, strTabId: string) {
    const strThisFuncName = this.btnSetDispUnit_Click.name;
    this.keyId = lngmId;
    this.mId_Static = lngmId;
    this.tabId_Static = strTabId;

    try {
      if (this.bolIsLoadSetDispUnit == false) {
        //
        // await this.AddDPV_Edit(this.divName4Select);
        this.opType = SetDispUnitEx.con_SetFldDnPathInTab;
        // 为编辑区绑定下拉框
        await this.BindDdl4EditRegion();

        this.bolIsLoadSetDispUnit = true; //
        //const responseText = this.BindGv_DnPath();
        // this.ShowDialog_PrjTabFld(SetDispUnitEx.con_SetFldDnPathInTab);
      } else {
        this.opType = SetDispUnitEx.con_SetFldDnPathInTab;
        // this.ShowDialog_PrjTabFld(SetDispUnitEx.con_SetFldDnPathInTab);
      }
      this.ShowFldName();
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async ShowFldName() {
    const objPrjTabFld = await PrjTabFld_GetObjBymIdCache(this.mId_Static, this.tabId_Static);
    if (objPrjTabFld == null) return;
    const objPrjTabFldEx = PrjTabFldEx_CopyToEx(objPrjTabFld);
    await PrjTabFldEx_FuncMap_FldName(objPrjTabFldEx);
    const strFldName_Disp = await css_StyleEx_GetHtml4Content('00000038', objPrjTabFldEx.fldName);
    SetSpanHtmlByIdInDivObj(SetDispUnitEx.divSetDispUnitObj, 'spnFldName', strFldName_Disp);
  }

  /**
   * 在当前界面中，导入编辑区域
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
   * @returns
   **/
  public async AddDPV_Edit(divName4Edit: string) {
    // const strThisFuncName = this.AddDPV_Edit.name;
    CheckDivExist(divName4Edit);
    const strUrl = '../Table_Field/SetDispUnit';
    //console.log("divName4Edit:(In AddDPV_Edit)" + divName4Edit);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data: any) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }

  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnEdit_Click.name;

    const objPage: SetDispUnitEx = <SetDispUnitEx>(
      PrjTabFld_Edit.GetPageEditObj('PrjTabFld_Edit_ACEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    let strMsg = '';
    if (objPage == null) {
      strMsg = `objPage对象(类名:SetDispUnitEx)还没有初始化，请检查(in SetDispUnitEx.btnEdit_Click)`;
      console.error(strMsg);
      throw strMsg;
    }

    switch (strCommandName) {
      case 'Submit_SetDispUnitc': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'css_FldDispUnitStyle_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    try {
      let returnBool = false;
      // const returnKeyId = 0;
      let strInfo = '';
      // const strMsg = '';
      //这是一个单表的修改的代码,由于逻辑层太简单,
      returnBool = await this.UpdateRecordSave();
      strInfo = returnBool ? '设置字段显示单元成功！' : '设置字段显示单元不成功！';
      strInfo += '(In PrjTabFld_Edit.btnSubmit_Click)';
      //显示信息框
      //console.log(strInfo);
      alert(strInfo);
      if (returnBool == true) {
        if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          // this.HideDialog_PrjTabFld();
        }
        if (this.iShowList)
          this.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, returnBool.toString());
      }
    } catch (e) {
      const strMsg = Format(
        '在设置字段单元格式时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjPrjTabFldEN">数据传输的目的类对象</param>
   **/
  public async PutDataToPrjTabFldClass(pobjPrjTabFldEN: clsPrjTabFldEN) {
    // const strThisFuncName = this.PutDataToPrjTabFldClass.name;
    pobjPrjTabFldEN.SetCtlTypeIdDu(refSetDispUnit.value.ctlTypeIdDu); // 表ID
    pobjPrjTabFldEN.SetFldDispUnitStyleId(refSetDispUnit.value.fldDispUnitStyleId); // 字段Id
    pobjPrjTabFldEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 字段Id
    pobjPrjTabFldEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjPrjTabFldEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
  }
  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const prjTabFldStore = usePrjTabFldStore();
    const objPrjTabFldEN = new clsPrjTabFldEN();
    objPrjTabFldEN.SetmId(Number(this.keyId));
    await this.PutDataToPrjTabFldClass(objPrjTabFldEN);
    objPrjTabFldEN.sfUpdFldSetStr = objPrjTabFldEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPrjTabFldEN.mId == 0 || objPrjTabFldEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PrjTabFld_CheckProperty4Update(objPrjTabFldEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Update(objPrjTabFldEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await PrjTabFld_UpdateRecordAsync(objPrjTabFldEN);
      if (returnBool == true) {
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '修改记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  /** 为修改记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
   **/
  public async CheckUniCond4Update(objPrjTabFldEN: clsPrjTabFldEN): Promise<boolean> {
    const strUniquenessCondition = PrjTabFld_GetUniCondStr4Update(objPrjTabFldEN);
    const bolIsExistCondition = await PrjTabFld_IsExistRecordAsync(strUniquenessCondition);
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
}
