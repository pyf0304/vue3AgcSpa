/*import $ from "jquery";*/
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { enumFldOperationType } from '@/ts/L0Entity/Table_Field/clsFldOperationTypeEN';
import { enumPrimaryType } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import { DataTypeAbbr_GetObjByDataTypeIdCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import {
  PrjTabFld_AddNewRecordAsync,
  PrjTabFld_CheckPropertyNew,
  PrjTabFld_ReFreshCache,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

import { clsDataTypeAbbrExWApi_PureCache } from '@/ts/L3ForWApiEx/SysPara/clsDataTypeAbbrExWApi_PureCache';
import { FieldTabEx_AddNewRec } from '@/ts/L3ForWApiEx/Table_Field/clsFieldTabExWApi';
import { clsFieldTypeExWApi_PureCache } from '@/ts/L3ForWApiEx/Table_Field/clsFieldTypeExWApi_PureCache';
import { clsFldOperationTypeExWApi_PureCache } from '@/ts/L3ForWApiEx/Table_Field/clsFldOperationTypeExWApi_PureCache';
import { clsPrimaryTypeExWApi_PureCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrimaryTypeExWApi_PureCache';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideTrInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  SetSelectValueByIdInDivObj,
  ShowTrInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { PrjTabFld_Edit } from '@/viewsBase/Table_Field/PrjTabFld_Edit';
import { divVarSet, refPrjTabFld_Edit, TabId_Static } from '@/views/Table_Field/PrjTabFldVueShare';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
// declare function GetPrjTabFldObj(): string;

// import { Dictionary } from '@/ts/PubFun/tzDictionary';
// declare const source1: Dictionary;
/** PrjTabFldCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PrjTabFld_Edit_ACEx extends PrjTabFld_Edit {
  public static FldId = '';
  public static FldName = '';

  public static divEdit: HTMLDivElement; //列表区的层对象
  public static IsNewFieldTab = false;
  public static intGetIframeTimes = 0;
  //public fldId_Static = "";
  // public divAutoComplete: HTMLDivElement = GetUniDivInDoc('divAutoComplete'); //编辑区的Id
  public static PrjIdCache = '';
  public static TabIdCache = '';
  public static TabIdStatic = ''; //定义下拉框条件变量2
  // public static jsonObj_Static: any;
  public TabId = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: PrjTabFld_Edit_ACEx = <PrjTabFld_Edit_ACEx>(
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
      strMsg = `objPage对象(类名:PrjTabFld_Edit_ACEx)还没有初始化，请检查(in PrjTabFld_Edit_ACEx.btnEdit_Click)`;
      console.error(strMsg);
      throw strMsg;
    }

    switch (strCommandName) {
      // case 'setAutoComplete': //查询记录
      //   objPage.btnSetAutoComplete_Click();
      //   break;

      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        // objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        // objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'Create': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(PrjTabFldCRUD.divList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        objPage.btnUpdateRecord_Click(Number(strKeyId));

        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabFld_Edit_ACEx.btn_Click');
        alert(strMsg);
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_PrjTabFld(this.opType);
      if (bolIsSuccess == false) return;
      ShowTrInDivObj(divVarSet.refDivEdit, 'trFldId4Add');
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      await this.AddNewRecord();
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjFieldTabEN">数据传输的目的类对象</param>
   **/
  public async PutDataToFieldTabClass(pobjFieldTabEN: clsFieldTabEN) {
    // pobjFieldTabEN.SetFldName(this.fldName); // 字段名
    pobjFieldTabEN.SetFldName(this.fldName); // 字段名
    pobjFieldTabEN.SetCaption(this.caption); // 标题
    pobjFieldTabEN.SetFieldTypeId(this.fieldTypeId); // 字段类型
    pobjFieldTabEN.SetDataTypeId(this.dataTypeId); // 数据类型
    pobjFieldTabEN.SetFldLength(this.fldLength); // 字段长度
    pobjFieldTabEN.SetFldPrecision(this.fldPrecision); // 精确度
    // pobjFieldTabEN.SetIsNull(this.isNull); // 是否可空
    pobjFieldTabEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
    pobjFieldTabEN.SetUpdUser(clsPrivateSessionStorage.userId); // 修改者
    pobjFieldTabEN.SetFldId(this.fldId); // 字段Id
    pobjFieldTabEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  }

  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjPrjTabFldEN.js">数据传输的目的类对象</param>
   **/
  public async PutDataToPrjTabFldClass(pobjPrjTabFldEN: clsPrjTabFldEN) {
    // const strThisFuncName = this.PutDataToPrjTabFldClassV1.name;

    // pobjPrjTabFldEN.SetTabId(PrjTabFld_Edit_ACEx.TabIdStatic); // 表ID
    pobjPrjTabFldEN.SetFldId(this.fldId); // 字段Id

    pobjPrjTabFldEN.SetFieldTypeId(this.fieldTypeId); // 字段类型
    if (pobjPrjTabFldEN.fieldTypeId != enumFieldType.KeyField_02) {
      pobjPrjTabFldEN.SetPrimaryTypeId(enumPrimaryType.NonPrimaryKey_00); // 主键类型
    } else {
      pobjPrjTabFldEN.SetPrimaryTypeId(refPrjTabFld_Edit.value.primaryTypeId); // 主键类型
    }
    pobjPrjTabFldEN.SetIsTabNullable(refPrjTabFld_Edit.value.isTabNullable); // 是否表中可空
    pobjPrjTabFldEN.SetIsGeneProp(refPrjTabFld_Edit.value.isGeneProp); // 是否表中可空
    pobjPrjTabFldEN.SetIsTabForeignKey(refPrjTabFld_Edit.value.isTabForeignKey); // 是否表外键
    pobjPrjTabFldEN.SetForeignKeyTabId(refPrjTabFld_Edit.value.foreignKeyTabId); // 外键表ID
    pobjPrjTabFldEN.SetFldOpTypeId(this.fldOpTypeId); // 操作类型
    pobjPrjTabFldEN.SetSequenceNumber(refPrjTabFld_Edit.value.sequenceNumber); // 顺序号
    pobjPrjTabFldEN.SetIsParentObj(refPrjTabFld_Edit.value.isParentObj); // 是否父对象

    pobjPrjTabFldEN.SetMemo(refPrjTabFld_Edit.value.memo); // 说明
    pobjPrjTabFldEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId);
    pobjPrjTabFldEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjPrjTabFldEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
  }

  /**
   * 设置绑定下拉框，针对字段:[fldId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_FldIdInDiv0(prjId: string, tabId: string) {
    console.log(prjId, tabId);
    //await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(divVarSet.refDivEdit, "ddlFldId", prjId, tabId);//
  }

  /**
   * 设置绑定下拉框，针对字段:[fieldTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv3B)
   **/

  public async SetDdl_FieldTypeIdInDiv() {
    await clsFieldTypeExWApi_PureCache.BindDdl_FieldTypeIdInDivCache(
      divVarSet.refDivEdit,
      'ddlFieldTypeId',
    ); //编辑区域
  }

  /**
   * 设置绑定下拉框，针对字段:[primaryTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv3B)
   **/

  public async SetDdl_PrimaryTypeIdInDiv() {
    await clsPrimaryTypeExWApi_PureCache.BindDdl_PrimaryTypeIdInDivCache(
      divVarSet.refDivEdit,
      'ddlPrimaryTypeId',
    ); //编辑区域
  }

  /**
   * 设置绑定下拉框，针对字段:[ForeignKeyTabId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_ForeignKeyTabIdInDiv(cmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivEdit,
      'ddlForeignKeyTabId',
      cmPrjId,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[FldOpTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv3B)
   **/

  public async SetDdl_FldOpTypeIdInDiv() {
    await clsFldOperationTypeExWApi_PureCache.BindDdl_FldOpTypeIdInDivCache(
      divVarSet.refDivEdit,
      'ddlFldOpTypeId',
    ); //编辑区域
  }
  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    await this.SetDdl_FieldTypeIdInDiv(); //编辑区域
    await this.SetDdl_PrimaryTypeIdInDiv(); //编辑区域
    await this.SetDdl_ForeignKeyTabIdInDiv(clsPrivateSessionStorage.cmPrjId); //编辑区域
    await this.SetDdl_FldOpTypeIdInDiv(); //编辑区域
    await this.SetDdl_DataTypeIdInDiv(); //编辑区域
  }
  /**
   * 设置绑定下拉框，针对字段:[DataTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv3B)
   **/

  public async SetDdl_DataTypeIdInDiv() {
    await clsDataTypeAbbrExWApi_PureCache.BindDdl_DataTypeIdInDivCache(
      divVarSet.refDivEdit,
      'ddlDataTypeId',
    ); //编辑区域
  }
  // public static GetFieldTab() {
  //   const strKey = 'jsonObj';
  //   const jsonObjStr = sessionStorage.getItem(strKey) as string;
  //   const jsonObj = JSON.parse(jsonObjStr);
  //   PrjTabFld_Edit_ACEx.jsonObj_Static = jsonObj;
  //   console.log('PrjTabFld_Edit_ACEx.jsonObj_Static in js', PrjTabFld_Edit_ACEx.jsonObj_Static);

  //   //const jsonObj3 = PrjTabFld_Edit_ACEx.jsonObj_Static;
  //   //console.log("1jsonObj3 in js", jsonObj3);

  //   return jsonObj;
  // }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  // public async btnSetAutoComplete_Click() {
  //   // const strThisFuncName = this.btnSetAutoComplete_Click.name;

  //   // const src = {
  //   //   'Bootstrap 4 Autocomplete example': 1,
  //   //   'Best example in the world': 2,
  //   //   'Bootstrap 4 Autocomplete is very nice': 3,
  //   //   'It contains neatly arranged example items': 4,
  //   //   'With many autocomplete values': 5,
  //   //   'And it uses default Bootstrap 4 components': 6,
  //   //   'You can use this example to test': 7,
  //   // };
  //   // function onSelectItem(item: any, element: any) {
  //   //   $('#output').html(
  //   //     `Element <b>${$(element).attr('id')}</b> was selected<br/>` +
  //   //       `<b>Value:</b> ${item.value} - <b>Label:</b> ${item.label}`,
  //   //   );
  //   // }
  //   const strKey = 'jsonObj';
  //   const jsonObjStr = sessionStorage.getItem(strKey) as string;
  //   const jsonObj2 = JSON.parse(jsonObjStr);
  //   PrjTabFld_Edit_ACEx.jsonObj_Static = jsonObj2;
  //   console.log('  PrjTabFld_Edit_ACEx.jsonObj_Static in js', PrjTabFld_Edit_ACEx.jsonObj_Static);

  //   //$('#myAutocomplete').autocomplete({
  //   //    source: jsonObj2,
  //   //    onSelectItem: onSelectItem,
  //   //    highlightClass: 'text-danger'
  //   //});
  // }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //const strTabId = clsPubVar4Web.GetTabId(this.qsTabId);
      await this.SetEventFunc();
      await this.BindDdl4EditRegionInDiv();
      refPrjTabFld_Edit.value.sequenceNumber = 1;
      this.fldOpTypeId = enumFldOperationType.ReadWrite_0001;
      this.fieldTypeId = enumFieldType.NormalField_01;
      refPrjTabFld_Edit.value.primaryTypeId = enumPrimaryType.NonPrimaryKey_00;
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  // public async txtFldName_AC_OnBlur() {
  //   setTimeout(PrjTabFld_Edit_ACEx.CheckShowHideEditFieldInfo, 300);
  // }
  // public static CheckShowHideEditFieldInfo() {
  //   try {
  //     // const myThis = new PrjTabFld_Edit_ACEx();
  //     //alert("失去焦点事件！");
  //     if (IsNullOrEmpty(this.fldId) == false) {
  //       HideTrInDivObj(divVarSet.refDivEdit, 'trCaption');
  //       HideTrInDivObj(divVarSet.refDivEdit, 'trDataTypeId');
  //       HideTrInDivObj(divVarSet.refDivEdit, 'trFldLength');
  //       HideTrInDivObj(divVarSet.refDivEdit, 'trFldPrecision');
  //     } else {
  //       ShowTrInDivObj(divVarSet.refDivEdit, 'trCaption');
  //       ShowTrInDivObj(divVarSet.refDivEdit, 'trDataTypeId');
  //       ShowTrInDivObj(divVarSet.refDivEdit, 'trFldLength');
  //       ShowTrInDivObj(divVarSet.refDivEdit, 'trFldPrecision');
  //     }
  //   } catch (e: any) {
  //     alert(e);
  //   }
  // }
  /** 函数功能:系统生成的Change事件函数
(AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
*/
  public async ddlFieldTypeId_OnChange() {
    const strFieldTypeId = this.fieldTypeId;
    if (IsNullOrEmpty(strFieldTypeId) == true) return;
    if (strFieldTypeId == enumFieldType.KeyField_02) {
      ShowTrInDivObj(divVarSet.refDivEdit, 'trPrimaryTypeId');
    } else {
      HideTrInDivObj(divVarSet.refDivEdit, 'trPrimaryTypeId');
    }
  }
  public async ddlDataTypeId_OnChange() {
    const strDataTypeId = this.dataTypeId;
    if (IsNullOrEmpty(strDataTypeId) == true) return;
    const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(strDataTypeId);
    if (objDataTypeAbbr == null) return;
    this.fldLength = objDataTypeAbbr?.defaFldLength;
    this.fldPrecision = objDataTypeAbbr?.defaFldPrecision;
  }

  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    // 在此处放置用户代码以初始化页面
    try {
      const ddlFieldTypeId: HTMLInputElement = <HTMLInputElement>(
        document.getElementById('ddlFieldTypeId')
      );
      ddlFieldTypeId.addEventListener('change', (e) => {
        console.log(e);
        this.ddlFieldTypeId_OnChange();
      });
      const ddlDataTypeId: HTMLInputElement = <HTMLInputElement>(
        document.getElementById('ddlDataTypeId')
      );
      ddlDataTypeId.addEventListener('change', (e) => {
        console.log(e);
        this.ddlDataTypeId_OnChange();
      });
    } catch (e: any) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
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
   * 字段类型Id (Used In Clear())
   **/
  public set fieldTypeId(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFieldTypeId', value);
  }
  /**
   * 字段类型Id (Used In PutDataToClass())
   **/
  public get fieldTypeId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlFieldTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 字段Id (Used In Clear())
   **/
  public set fldId(value: string) {
    PrjTabFld_Edit_ACEx.FldId = value;
  }
  /**
   * 字段Id (Used In PutDataToClass())
   **/
  public get fldId(): string {
    //return this.fldId_Static;
    const strValue = PrjTabFld_Edit_ACEx.FldId;
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /**
   * 字段Id (Used In Clear())
   **/
  public set fldName(value: string) {
    PrjTabFld_Edit_ACEx.FldName = value;
  }
  /**
   * 字段Id (Used In PutDataToClass())
   **/
  public get fldName(): string {
    const strValue = PrjTabFld_Edit_ACEx.FldName;
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 字段操作类型Id (Used In Clear())
   **/
  public set fldOpTypeId(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFldOpTypeId', value);
  }
  /**
   * 字段操作类型Id (Used In PutDataToClass())
   **/
  public get fldOpTypeId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlFldOpTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /**
   * 设置操作类型：Add||Update||Detail
   **/
  public set OpType(value: string) {
    SetInputValueInDivObj(divVarSet.refDivEdit, 'hidOpType', value);
  }
  /**
   * 设置操作类型：Add||Update||Detail
   **/
  public get OpType(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'hidOpType');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  // /**
  //  * 主键类型ID (Used In Clear())
  //  **/
  // public set primaryTypeId(value: string) {
  //   SetSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlPrimaryTypeId', value);
  // }
  // /**
  //  * 主键类型ID (Used In PutDataToClass())
  //  **/
  // public get primaryTypeId(): string {
  //   const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlPrimaryTypeId');
  //   if (strValue == undefined) return '';
  //   else if (strValue == '0') return '';
  //   else return strValue;
  // }

  /**
   * 表ID (Used In Clear())
   **/
  public set tabId(value: string) {
    //界面变量(Viewconstiable)
    const strKey = Format('constTabId');
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      sessionStorage.removeItem(strKey);
    }
    sessionStorage.setItem(strKey, value !== null ? value.toString() : '');
  }
  /**
   * 修改日期 (Used In PutDataToClass())
   **/
  public get updDate(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtUpdDate');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 修改者 (Used In PutDataToClass())
   **/
  public get updUser(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtUpdUser');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 标题 (Used In Clear())
   **/
  public set caption(value: string) {
    SetInputValueInDivObj(divVarSet.refDivEdit, 'txtCaption', value);
  }
  /**
   * 标题 (Used In PutDataToClass())
   **/
  public get caption(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtCaption');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 数据类型Id (Used In Clear())
   **/
  public set dataTypeId(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlDataTypeId', value);
  }
  /**
   * 数据类型Id (Used In PutDataToClass())
   **/
  public get dataTypeId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlDataTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 字段长度 (Used In Clear())
   **/
  public set fldLength(value: number) {
    SetInputValueInDivObj(
      divVarSet.refDivEdit,
      'txtFldLength',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 字段长度 (Used In PutDataToClass())
   **/
  public get fldLength(): number {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtFldLength');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 精确度 (Used In Clear())
   **/
  public set fldPrecision(value: number) {
    SetInputValueInDivObj(
      divVarSet.refDivEdit,
      'txtFldPrecision',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 精确度 (Used In PutDataToClass())
   **/
  public get fldPrecision(): number {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtFldPrecision');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }
  /**
   * 清除用户自定义控件中，所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFldId');
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFieldTypeId');
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlPrimaryTypeId');
    refPrjTabFld_Edit.value.isTabNullable = false;
    refPrjTabFld_Edit.value.isTabForeignKey = false;
    refPrjTabFld_Edit.value.isGeneProp = false;
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlForeignKeyTabId');
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFldOpTypeId');
    refPrjTabFld_Edit.value.sequenceNumber = 0;
    refPrjTabFld_Edit.value.isParentObj = false;
    // this.memoInTab = '';
    refPrjTabFld_Edit.value.memo = '';
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlCtlTypeIdDu');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFldDispUnitStyleId');
  }
  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const strCommandText = this.btnSubmitPrjTabFld;
    let strMsg;
    let returnBool;
    let strInfo;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            //const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //HideDialog_PrjTabFld();
            //this.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, "");
            //}
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              // if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              //   this.HideDialog_PrjTabFld();
              // }
              if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refPrjTabFld_Edit.value.hideDialog();
              }
              if (this.iShowList)
                this.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, returnBool.toString());
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In PrjTabFld_Edit.btnSubmit_Click)';
          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            // if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
            //   this.HideDialog_PrjTabFld();
            // }
            if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refPrjTabFld_Edit.value.hideDialog();
            }
            if (this.iShowList)
              this.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, returnBool.toString());
          }
          break;
        default:
          strMsg = Format(
            'strCommandText:{0}在switch中没有处理！(In btnSubmit_Click())',
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
        strCommandText,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 添加新记录，保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const prjTabFldStore = usePrjTabFldStore();
    const objPrjTabFldEN = new clsPrjTabFldENEx();
    try {
      //let jsonString = ifrWindow.GetPrjTabFldObj();
      //
      // let jsonString = await GetPrjTabFldObj();
      // console.log('jsonString', jsonString);
      // if (IsNullOrEmpty(jsonString) == true) {
      //   // jsonString = this.PrjTabFldObjStr;
      //   if (IsNullOrEmpty(jsonString) == true) {
      //     if (PrjTabFld_Edit_ACEx.intGetIframeTimes > 2) {
      //       const strMsg = Format(
      //         '从IFrame获取数据不成功.(in {0}.{1})',
      //         this.constructor.name,
      //         strThisFuncName,
      //       );
      //       console.error(strMsg);
      //       alert(strMsg);
      //       return false; //一定要有一个返回值，否则会出错！
      //     } else {
      //       PrjTabFld_Edit_ACEx.intGetIframeTimes++;
      //       setTimeout(PrjTabFld_Edit_ACEx.btnEdit_Click, 200, 'Submit', '');
      //       return false;
      //     }
      //   }
      // }
      // const objTemp = JSON.parse(jsonString);
      // ObjectAssign(objPrjTabFldEN, objTemp);

      objPrjTabFldEN.SetTabId(TabId_Static.value);
      try {
        await this.PutDataToPrjTabFldClass(objPrjTabFldEN);
      } catch (e) {
        const strMsg = Format(
          '从界面获取数据不成功,{0}.(in {1}.{2})',
          e,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
      //objPrjTabFldEN.SetPrjId( PrjTabFld_Edit.PrjIdCache);

      console.log('objPrjTabFldEN in ByACEx(parent)-TS', objPrjTabFldEN);
      if (PrjTabFld_Edit_ACEx.IsNewFieldTab == true) {
        const objFieldTab = new clsFieldTabEN();
        this.PutDataToFieldTabClass(objFieldTab);
        if (IsNullOrEmpty(objFieldTab.fldName) == false) {
          console.error('objFieldTab.fldName:', objFieldTab.fldName);
          //alert("objPrjTabFldEN.fldName:" + objPrjTabFldEN.fldName);
          const strFldName = objFieldTab.fldName;
          const strCaption = objFieldTab.caption;
          const strDataTypeId = objFieldTab.dataTypeId;
          const intFldLength = objFieldTab.fldLength;
          const intFldPrecision = objFieldTab.fldPrecision;
          const bolIsNull = refPrjTabFld_Edit.value.isTabNullable;
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
              objPrjTabFldEN.fldId = strFldId;
            } else {
              alert('添加新字段(FieldTab)不成功!');
              return false;
            }
          } catch (e) {
            console.error(e);
            alert(e);
            return false;
          }
        }
      }
      //            await this.PutDataToPrjTabFldClass(objPrjTabFldEN);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      PrjTabFld_CheckPropertyNew(objPrjTabFldEN);
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
      const returnBool = await PrjTabFld_AddNewRecordAsync(objPrjTabFldEN);
      if (returnBool == true) {
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }
  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjPrjTabFldEN.js">表实体类对象</param>
   **/
  public async GetDataFromPrjTabFldClassBak(pobjPrjTabFldEN: clsPrjTabFldEN) {
    // const strThisFuncName = this.GetDataFromPrjTabFldClass.name;
    //this.tabId = pobjPrjTabFldEN.tabId;// 表ID
    this.fldId = pobjPrjTabFldEN.fldId; // 字段Id
    SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblFldName', this.fldId);
    const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
      pobjPrjTabFldEN.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvFieldTab_Sim != null) {
      SetLabelHtmlByIdInDivObj(
        divVarSet.refDivEdit,
        'lblFldName',
        Format('{0}({1})', objvFieldTab_Sim.fldName, objvFieldTab_Sim.fldId),
      );
    }
    this.fieldTypeId = pobjPrjTabFldEN.fieldTypeId; // 字段类型
    this.ddlFieldTypeId_OnChange();
    if (this.fieldTypeId == enumFieldType.KeyField_02) {
      refPrjTabFld_Edit.value.primaryTypeId = pobjPrjTabFldEN.primaryTypeId; // 主键类型
    }
    refPrjTabFld_Edit.value.isTabNullable = pobjPrjTabFldEN.isTabNullable; // 是否表中可空
    refPrjTabFld_Edit.value.isTabForeignKey = pobjPrjTabFldEN.isTabForeignKey; // 是否表外键
    refPrjTabFld_Edit.value.isGeneProp = pobjPrjTabFldEN.isGeneProp; // 是否生成属性
    try {
      refPrjTabFld_Edit.value.foreignKeyTabId = pobjPrjTabFldEN.foreignKeyTabId; // 外键表ID
    } catch (e) {}

    this.fldOpTypeId = pobjPrjTabFldEN.fldOpTypeId; // 操作类型
    refPrjTabFld_Edit.value.sequenceNumber = pobjPrjTabFldEN.sequenceNumber; // 顺序号
    refPrjTabFld_Edit.value.isParentObj = pobjPrjTabFldEN.isParentObj; // 是否父对象
    //this.memoInTab = pobjPrjTabFldEN.memoInTab;// 表说明
    refPrjTabFld_Edit.value.memo = pobjPrjTabFldEN.memo; // 说明
  }

  /** 修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strKeyId: Number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (strKeyId == 0) {
      const strMsg = '修改记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refPrjTabFld_Edit.value.showDialog();
      }
      divVarSet.refDivEdit = refPrjTabFld_Edit.value.$refs.refDivEdit;
      HideTrInDivObj(divVarSet.refDivEdit, 'trFldId4Add');
      this.opType = 'Update';
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      this.btnSubmitPrjTabFld = '确认修改';
      this.btnCancelPrjTabFld = '取消修改';
      const lngKeyId = Number(strKeyId);
      const update = await this.UpdateRecord(lngKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
