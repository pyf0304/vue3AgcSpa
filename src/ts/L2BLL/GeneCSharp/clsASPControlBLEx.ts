import { clsASPButtonBLEx } from './clsASPButtonBLEx';
import { clsASPCheckBoxBLEx } from './clsASPCheckBoxBLEx';

import { clsASPColBLEx } from './clsASPColBLEx';

import { clsASPControlGroupBLEx } from './clsASPControlGroupBLEx';
import { clsASPDivBLEx } from './clsASPDivBLEx';
import { clsASPDropDownListBLEx } from './clsASPDropDownListBLEx';

import { clsASPGridViewBLEx } from './clsASPGridViewBLEx';

import { clsASPHtmlButtonBLEx } from './clsASPHtmlButtonBLEx';
import { clsASPHtmlInputBLEx } from './clsASPHtmlInputBLEx';
import { clsASPHtmlTableBLEx } from './clsASPHtmlTableBLEx';

import { clsASPLabelBLEx } from './clsASPLabelBLEx';
import { clsASPLiBLEx } from './clsASPLiBLEx';

import { clsASPRowBLEx } from './clsASPRowBLEx';
import { clsASPSpanBLEx } from './clsASPSpanBLEx';

import { clsASPTextBoxBLEx } from './clsASPTextBoxBLEx';
import { clsASPUlBLEx } from './clsASPUlBLEx';

import { clsASPTextAreaBLEx } from './clsASPTextAreaBLEx';
import { LabelStyle_GetObjByLabelStyleIdCache } from '@/ts/L3ForWApi/SysPara/clsLabelStyleWApi';
import { GenCtlStyle_GetObjByGenCtlStyleIdCache } from '@/ts/L3ForWApi/ViewControlManage/clsGenCtlStyleWApi';
import { CheckStyle_GetObjByCheckStyleIdCache } from '@/ts/L3ForWApi/ViewControlManage/clsCheckStyleWApi';
import { ButtonStyle_GetObjByButtonStyleIdCache } from '@/ts/L3ForWApi/SysPara/clsButtonStyleWApi';
import { ASPControlEx } from '@/ts/L0Entity/GeneCSharp/ASPControlEx';
import { ASPButtonEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPButtonENEx';
import { ASPCheckBoxEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPCheckBoxENEx';
import { ASPColEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPColENEx';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { ASPDivEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDivENEx';
import { ASPDropDownListEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDropDownListENEx';

import { ASPGridViewEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPGridViewENEx';

import { ASPHtmlButtonEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlButtonENEx';
import { ASPHtmlInputEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlInputENEx';
import { ASPHtmlTableEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlTableENEx';

import { ASPLabelEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLabelENEx';
import { ASPLiEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLiENEx';

import { ASPRowEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPRowENEx';
import { ASPSpanEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPSpanENEx';

import { ASPTextBoxEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPTextBoxENEx';
import { ASPUlEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPUlENEx';

import { enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { clsDGRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx4GC';
import { clsEditRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx4GC';
import { clsExcelExportRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsENEx4GC';
import { clsQryRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx4GC';

import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { ASPTextAreaEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPTextAreaENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET控件(ASPNETControl)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPControlBLEx {
  public static GeneHtmlControl(objASPControlENEx: ASPControlEx, objContainer: HTMLElement) {
    const strThisFuncName = this.GeneHtmlControl.name;
    const strType = typeof objASPControlENEx;
    let strType1;
    if (strType == 'object') {
      strType1 = objASPControlENEx.controlType;
      if (IsNullOrEmpty(strType)) {
        const strMsg = Format('控件:{0}的控件类型为空，请检查！', objASPControlENEx.ctrlId);
        console.error(strMsg);
        throw new Error(strMsg);
      }
    } else {
      strType1 = strType.toString();
    }
    let strMsg;
    //clsPubconst4BLEx.objLog4GC.WriteDebugLog(strType);
    let objASPUlENEx: ASPUlEx;
    let objASPControlGroupENEx: ASPControlGroupEx;
    let objASPLiENEx;

    let objASPSpanENEx;

    let objASPHtmlTableENEx;
    let objASPRowENEx;
    let objASPColENEx;
    let objASPDivENEx;
    let objASPLabelENEx;
    let objASPTextBoxENEx;
    let objASPTextAreaENEx;
    let objASPButtonENEx;

    let objASPCheckBoxENEx;
    let objASPGridViewENEx;

    let objASPHtmlButtonENEx;

    let objASPHtmlInputENEx;

    let objASPDropDownListENEx;

    switch (strType1) {
      case 'ASPControlGroupEx':
        objASPControlGroupENEx = objASPControlENEx as ASPControlGroupEx;
        clsASPControlGroupBLEx.GeneHtmlControl(objASPControlGroupENEx, objContainer);
        break;

      case 'ASPUlEx':
        objASPUlENEx = objASPControlENEx as ASPUlEx;
        clsASPUlBLEx.GeneHtmlControl(objASPUlENEx, objContainer);
        break;
      case 'ASPLiEx':
        objASPLiENEx = objASPControlENEx as ASPLiEx;
        clsASPLiBLEx.GeneHtmlControl(objASPLiENEx, objContainer);
        break;

      case 'ASPCodeEx':
        break;
      // case 'ASPEmptyEx':
      //   objASPEmptyENEx = objASPControlENEx as ASPEmptyEx;
      //   clsASPEmptyBLEx.GeneHtmlControl(objASPEmptyENEx, objContainer);
      //   break;
      case 'ASPSpanEx':
        objASPSpanENEx = objASPControlENEx as ASPSpanEx;
        clsASPSpanBLEx.GeneHtmlControl(objASPSpanENEx, objContainer);
        break;

      case 'ASPHtmlTableEx':
        objASPHtmlTableENEx = objASPControlENEx as ASPHtmlTableEx;
        clsASPHtmlTableBLEx.GeneHtmlControl(objASPHtmlTableENEx, objContainer);
        break;
      case 'ASPRowEx':
        objASPRowENEx = objASPControlENEx as ASPRowEx;
        clsASPRowBLEx.GeneHtmlControl(objASPRowENEx, objContainer);
        break;
      case 'ASPColEx':
        objASPColENEx = objASPControlENEx as ASPColEx;
        clsASPColBLEx.GeneHtmlControl(objASPColENEx, objContainer);
        break;
      case 'ASPDivEx':
        objASPDivENEx = objASPControlENEx as ASPDivEx;
        clsASPDivBLEx.GeneHtmlControl(objASPDivENEx, objContainer);
        break;
      case 'ASPLabelEx':
        objASPLabelENEx = objASPControlENEx as ASPLabelEx;
        clsASPLabelBLEx.GeneHtmlControl(objASPLabelENEx, objContainer);
        break;

      case 'ASPTextBoxEx':
        objASPTextBoxENEx = objASPControlENEx as ASPTextBoxEx;
        clsASPTextBoxBLEx.GeneHtmlControl(objASPTextBoxENEx, objContainer);
        break;
      case 'ASPTextAreaEx':
        objASPTextAreaENEx = objASPControlENEx as ASPTextAreaEx;
        clsASPTextAreaBLEx.GeneHtmlControl(objASPTextAreaENEx, objContainer);
        break;

      case 'ASPButtonEx':
        objASPButtonENEx = objASPControlENEx as unknown as ASPButtonEx;
        clsASPButtonBLEx.GeneHtmlControl(objASPButtonENEx, objContainer);
        break;
      case 'ASPCheckBoxEx':
        objASPCheckBoxENEx = objASPControlENEx as unknown as ASPCheckBoxEx;
        clsASPCheckBoxBLEx.GeneHtmlControl(objASPCheckBoxENEx, objContainer);
        break;
      case 'ASPGridViewEx':
        objASPGridViewENEx = objASPControlENEx as unknown as ASPGridViewEx;
        clsASPGridViewBLEx.GeneHtmlControl(objASPGridViewENEx, objContainer);
        break;

      case 'ASPHtmlButtonEx':
        objASPHtmlButtonENEx = objASPControlENEx as unknown as ASPHtmlButtonEx;
        clsASPHtmlButtonBLEx.GeneHtmlControl(objASPHtmlButtonENEx, objContainer);
        break;

      case 'ASPHtmlInputEx':
        objASPHtmlInputENEx = objASPControlENEx as unknown as ASPHtmlInputEx;
        clsASPHtmlInputBLEx.GeneHtmlControl(objASPHtmlInputENEx, objContainer);
        break;
      case 'ASPDropDownListEx':
        objASPDropDownListENEx = objASPControlENEx as ASPDropDownListEx;
        clsASPDropDownListBLEx.GeneHtmlControl(objASPDropDownListENEx, objContainer);
        break;
      case 'ASPControlEx':
        break;
      default:
        strMsg = `类型:${strType}不存在,请检查!(In ${this.prototype.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        throw new Error(strMsg);
    }
  }

  public static async InitStyleObj() {
    const objLabelStyleText = await LabelStyle_GetObjByLabelStyleIdCache('0001');
    if (objLabelStyleText == null) {
      const strMsg = Format('labelStyleId:[{0}]，没有相应的LabelStyle，请检查！', '0001');
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    ASPControlEx.objLabelStyleText = objLabelStyleText;
    const objGenCtlStyle = await GenCtlStyle_GetObjByGenCtlStyleIdCache('0001');
    if (objGenCtlStyle == null) {
      const strMsg = Format('genCtlStyleId:[{0}]，没有相应的GenCtlStyle，请检查！', '0001');
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    ASPControlEx.objGenCtlStyle = objGenCtlStyle;

    const objCheckStyle = await CheckStyle_GetObjByCheckStyleIdCache('0001');
    if (objCheckStyle == null) {
      const strMsg = Format('checkStyleId:[{0}]，没有相应的CheckStyle，请检查！', '0001');
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    ASPControlEx.objCheckStyle = objCheckStyle;

    const objButtonStyle = await ButtonStyle_GetObjByButtonStyleIdCache('0001');
    if (objButtonStyle == null) {
      const strMsg = Format('buttonStyleId:[{0}]，没有相应的ButtonStyle，请检查！', '0001');
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    ASPControlEx.objButtonStyle = objButtonStyle;
    return true;
  }

  public static async GetControl_Asp2(
    objEditRegionFldsEx: clsEditRegionFldsENEx4GC,
  ): Promise<ASPControlEx> {
    const strThisFuncName = this.GetControl_Asp2.name;
    if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
    //ASPControlEx objControl = new ASPControlEx();

    //objControl.ctrlId = objEditRegionFldsEx.ctrlId;
    //objControl.width = ASPControlEx.objLabelStyleText.width;
    //objControl.height = ASPControlEx.objLabelStyleText.height;

    //objControl.runat = ASPControlEx.objLabelStyleText.runat;
    //objControl.caption = objEditRegionFldsEx.labelCaption;
    //objControl.csType = objEditRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
    //objControl.fldName = objEditRegionFldsEx.fldName;
    let strMsg;
    let objASPCheckBoxENEx;
    let objASPTextBoxENEx;
    let objASPDropDownListENEx;

    switch (objEditRegionFldsEx.objCtlTypeAbbr.ctlTypeName) {
      case 'CheckBox':
        objASPCheckBoxENEx = new ASPCheckBoxEx();
        objASPCheckBoxENEx.ctrlId = `chk${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPCheckBoxENEx.caption = objEditRegionFldsEx.labelCaption;
        objASPCheckBoxENEx.csType = objEditRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
        objASPCheckBoxENEx.fldName = objEditRegionFldsEx.fldName;

        objASPCheckBoxENEx.width = 200;
        objASPCheckBoxENEx.height = 22;
        objASPCheckBoxENEx.text = objEditRegionFldsEx.objFieldTabENEx.caption;
        objASPCheckBoxENEx.objEditRegionFldsEx = objEditRegionFldsEx;
        return objASPCheckBoxENEx;

      case 'TextBox':
        objASPTextBoxENEx = new ASPTextBoxEx();
        objASPTextBoxENEx.ctrlId = `txt${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPTextBoxENEx.caption = objEditRegionFldsEx.labelCaption;
        objASPTextBoxENEx.csType = objEditRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
        objASPTextBoxENEx.fldName = objEditRegionFldsEx.fldName;

        objASPTextBoxENEx.width = 200;
        objASPTextBoxENEx.height = 22;
        objASPTextBoxENEx.class = 'ValueControl';
        objASPTextBoxENEx.objEditRegionFldsEx = objEditRegionFldsEx;

        return objASPTextBoxENEx;

      case 'DropDownList':
        objASPDropDownListENEx = new ASPDropDownListEx();
        objASPDropDownListENEx.ctrlId = `ddl${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPDropDownListENEx.caption = objEditRegionFldsEx.labelCaption;
        objASPDropDownListENEx.csType = objEditRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;

        objASPDropDownListENEx.fldName = objEditRegionFldsEx.objFieldTabENEx.fldName;
        objASPDropDownListENEx.tabName = await objEditRegionFldsEx.tabName();
        objASPDropDownListENEx.ddlItemsOptionId = objEditRegionFldsEx.ddlItemsOptionId;
        objASPDropDownListENEx.dsTabName = objEditRegionFldsEx.dsTabName;

        objASPDropDownListENEx.width = 200;
        objASPDropDownListENEx.height = 22;
        objASPDropDownListENEx.objEditRegionFldsEx = objEditRegionFldsEx;
        return objASPDropDownListENEx;

      default:
        strMsg = `编辑区域字段转换成Asp控件时，类型: [${objEditRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        throw new Error(strMsg);
    }
  }

  /**
   * 排序函数。根据关键字字段的值进行比较
   * 作者:pyf
   * 日期:2021-12-12
   * (AutoGCLib.WAAccess4TypeScript:Gen4WATsSortFun)
   * @param a:比较的第1个对象
   * @param  b:比较的第1个对象
   * @returns 返回两个对象比较的结果
   */
  public static SortFunOrderNum(a: ASPControlEx, b: ASPControlEx): number {
    // const strThisFuncName = 'SortFunOrderNum';

    return a.orderNum - b.orderNum;
  }

  public static async GetControl_Asp6(
    objQryRegionFldsEx: clsQryRegionFldsENEx4GC,
  ): Promise<ASPControlEx> {
    const strThisFuncName = this.GetControl_Asp6.name;
    if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
    //ASPControlEx objControl = new ASPControlEx();

    //objControl.ctrlId = objQryRegionFldsEx.ctrlId;
    //objControl.width = ASPControlEx.objLabelStyleText.width;
    //objControl.height = ASPControlEx.objLabelStyleText.height;

    //objControl.runat = ASPControlEx.objLabelStyleText.runat;
    //objControl.caption = objQryRegionFldsEx.labelCaption;
    //objControl.csType = objQryRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
    //objControl.fldName = objQryRegionFldsEx.fldName;
    let strMsg = '';

    let objASPCheckBoxENEx;
    let objASPTextBoxENEx;
    let objASPDropDownListENEx;

    switch (objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName) {
      case 'CheckBox':
        objASPCheckBoxENEx = new ASPCheckBoxEx();
        objASPCheckBoxENEx.ctrlId = `chk${objQryRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPCheckBoxENEx.caption = objQryRegionFldsEx.labelCaption;
        objASPCheckBoxENEx.csType = objQryRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
        objASPCheckBoxENEx.fldName = objQryRegionFldsEx.fldName;

        objASPCheckBoxENEx.width = 200;
        objASPCheckBoxENEx.height = 22;
        objASPCheckBoxENEx.text = objQryRegionFldsEx.objFieldTabENEx.caption;
        objASPCheckBoxENEx.objQryRegionFldsEx = objQryRegionFldsEx;
        return objASPCheckBoxENEx;

      case 'TextBox':
        objASPTextBoxENEx = new ASPTextBoxEx();
        objASPTextBoxENEx.ctrlId = `txt${objQryRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPTextBoxENEx.caption = objQryRegionFldsEx.labelCaption;
        objASPTextBoxENEx.csType = objQryRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
        objASPTextBoxENEx.fldName = objQryRegionFldsEx.fldName;

        objASPTextBoxENEx.width = 200;
        objASPTextBoxENEx.height = 22;
        objASPTextBoxENEx.class = 'ValueControl';
        objASPTextBoxENEx.objQryRegionFldsEx = objQryRegionFldsEx;

        return objASPTextBoxENEx;

      case 'DropDownList':
        objASPDropDownListENEx = new ASPDropDownListEx();
        objASPDropDownListENEx.ctrlId = `ddl${objQryRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPDropDownListENEx.caption = objQryRegionFldsEx.labelCaption;
        objASPDropDownListENEx.csType = objQryRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;

        objASPDropDownListENEx.fldName = objQryRegionFldsEx.objFieldTabENEx.fldName;
        objASPDropDownListENEx.tabName = await objQryRegionFldsEx.tabName4GC();
        objASPDropDownListENEx.ddlItemsOptionId = objQryRegionFldsEx.ddlItemsOptionId;
        objASPDropDownListENEx.dsTabName = objQryRegionFldsEx.dsTabName;

        objASPDropDownListENEx.width = 200;
        objASPDropDownListENEx.height = 22;
        objASPDropDownListENEx.objQryRegionFldsEx = objQryRegionFldsEx;
        return objASPDropDownListENEx;

      default:
        strMsg = `编辑区域字段转换成Asp控件时，类型:[${objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        throw new Error(strMsg);
    }
  }

  public static getSubObjNumForCtlTypeId(
    objASPControlENEx: ASPControlEx,
    strCtlTypeId: string,
  ): number {
    let intNum = 0;
    for (const objSubASPControlENEx of objASPControlENEx.arrSubAspControlLst2) {
      if (objSubASPControlENEx.ctlTypeId == strCtlTypeId) intNum++;
    }
    return intNum;
  }
  ///// <summary>
  ///// 生成该对象尺寸相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Size(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.width>0)
  //    {
  //        strCodeForCs.AppendFormat(" width=\"{0}px\"",
  //        objASPControlENEx.width);
  //    }
  //    //if (objASPControlENEx.height>0)
  //    //{
  //    //    strCodeForCs.AppendFormat(" height=\"{0}px\"",
  //    //    objASPControlENEx.height);
  //    //}
  //}
  ///// <summary>
  ///// 生成该对象尺寸相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Style(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.style) == false)
  //    {
  //        strCodeForCs.AppendFormat(" style=\"{0}\"",
  //            objASPControlENEx.style);
  //    }
  //    if (objASPControlENEx.cssClass) == false)
  //    {
  //        strCodeForCs.AppendFormat(" cssClass=\"{0}\"",
  //            objASPControlENEx.cssClass);
  //    }
  //    else if (objASPControlENEx.class) == false)
  //    {
  //        strCodeForCs.AppendFormat(" class=\"{0}\"",
  //            objASPControlENEx.class);
  //    }
  //}

  ///// <summary>
  ///// 生成该对象runat相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Runat(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.runat) == false)
  //    {
  //        strCodeForCs.AppendFormat(" runat=\"{0}\"",
  //            objASPControlENEx.runat);
  //    }
  //}

  ///// <summary>
  ///// 生成该对象尺寸相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Type(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.type) == false)
  //    {
  //        strCodeForCs.AppendFormat(" type=\"{0}\"",
  //        objASPControlENEx.type);
  //    }
  //}
  ///// <summary>
  ///// 生成该对象data-dismiss相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Datadismiss(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.datadismiss) == false)
  //    {
  //        strCodeForCs.AppendFormat(" data-dismiss=\"{0}\"",
  //        objASPControlENEx.datadismiss);
  //    }
  //}

  ///// <summary>
  ///// 生成该对象tabindex相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Tabindex(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.tabindex) == false)
  //    {
  //        strCodeForCs.AppendFormat(" tabindex=\"{0}\"",
  //        objASPControlENEx.tabindex);
  //    }
  //}

  ///// <summary>
  ///// 生成该对象aria-labelledby相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Arialabelledby(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.arialabelledby) == false)
  //    {
  //        strCodeForCs.AppendFormat(" aria-labelledby=\"{0}\"",
  //        objASPControlENEx.arialabelledby);
  //    }
  //}

  ///// <summary>
  ///// 生成该对象aria-label相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Arialabel(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.arialabel) == false)
  //    {
  //        strCodeForCs.AppendFormat(" aria-label=\"{0}\"",
  //        objASPControlENEx.arialabel);
  //    }
  //}

  ///// <summary>
  ///// 生成该对象aria-hidden相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Ariahidden(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.ariahidden) == false)
  //    {
  //        strCodeForCs.AppendFormat(" aria-hidden=\"{0}\"",
  //        objASPControlENEx.ariahidden);
  //    }
  //}

  ///// <summary>
  ///// 生成该对象role相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Role(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.role) == false)
  //    {
  //        strCodeForCs.AppendFormat(" role=\"{0}\"",
  //        objASPControlENEx.role);
  //    }
  //}
  ///// <summary>
  ///// 生成该对象尺寸相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Tag(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.Tag) == false)
  //    {
  //        strCodeForCs.AppendFormat("\r\n" + "android:tag=\"{0}\"",
  //        objASPControlENEx.Tag);
  //    }
  //}
  ///// <summary>
  ///// 生成该对象尺寸相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Text(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.text) == false)
  //    {
  //        strCodeForCs.AppendFormat(" Text=\"{0}\"",
  //               objASPControlENEx.text);
  //    }

  //}

  ///// <summary>
  ///// 生成该对象值(Value)相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Value(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.Value) == false)
  //    {
  //        strCodeForCs.AppendFormat(" value=\"{0}\"",
  //               objASPControlENEx.Value);
  //    }

  //}
  ///// <summary>
  ///// 生成该对象尺寸相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4IdName(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    if (objASPControlENEx.ctrlId) == false)
  //    {
  //        strCodeForCs.AppendFormat(" id=\"{0}\"",
  //        objASPControlENEx.ctrlId);
  //    }

  //    if (objASPControlENEx.ctrlName) == false)
  //    {
  //        strCodeForCs.AppendFormat(" name=\"{0}\"",
  //        objASPControlENEx.ctrlName);
  //    }
  //    else if (objASPControlENEx.ctrlId) == false)
  //    {
  //        strCodeForCs.AppendFormat(" name=\"{0}\"",
  //    objASPControlENEx.ctrlId);
  //    }
  //}
  //   public static GC4Id(objASPControlENEx: ASPControlEx,
  //strCodeForCs: StringBuilder)
  //   {
  //       if (objASPControlENEx.ctrlId) == false)
  //       {
  //           strCodeForCs.AppendFormat(" id=\"{0}\"",
  //           objASPControlENEx.ctrlId);
  //       }
  //   }
  //   public static GC4Name4MvcAjax(objASPControlENEx: ASPControlEx,
  //           strCodeForCs: StringBuilder)
  //   {

  //       if (objASPControlENEx.name4MvcAjax) == false)
  //       {
  //           strCodeForCs.AppendFormat(" Name=\"{0}\"",
  //           objASPControlENEx.name4MvcAjax);
  //       }
  //   }
  //   /// <summary>
  //   /// 生成该对象边界相关的代码
  //   /// </summary>
  //   /// <param name="objASPControlENEx">按钮对象</param>
  //   /// <param name="strCodeForCs">生成到这个对象中</param>
  //   public static GC4Margin(objASPControlENEx: ASPControlEx,
  //       strCodeForCs: StringBuilder)
  //   {
  //       if (objASPControlENEx.layoutmarginLeft > 0)
  //       {
  //           strCodeForCs.AppendFormat("\r\n" + "android:layoutmarginLeft=\"{0}dp\"",
  //               objASPControlENEx.layoutmarginLeft);
  //       }
  //       if (objASPControlENEx.layoutmarginTop > 0)
  //       {
  //           strCodeForCs.AppendFormat("\r\n" + "android:layoutmarginTop=\"{0}dp\"",
  //               objASPControlENEx.layoutmarginTop);
  //       }
  //       if (objASPControlENEx.layoutmargin) == false)
  //       {
  //           strCodeForCs.AppendFormat("\r\n" + "android:layoutmargin=\"{0}\" ",
  //               objASPControlENEx.layoutmargin);
  //       }
  //   }
  ///// <summary>
  ///// 生成该对象约束相关的代码
  ///// </summary>
  ///// <param name="objASPControlENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GC4Constraint(objASPControlENEx: ASPControlEx,
  //    strCodeForCs: StringBuilder)
  //{

  //    if (objASPControlENEx.layoutconstraintStarttoStartOf) == false)
  //    {
  //        strCodeForCs.AppendFormat("\r\n" + "app:layoutconstraintStarttoStartOf=\"{0}\"",
  //            objASPControlENEx.layoutconstraintStarttoStartOf);
  //    }
  //    if (objASPControlENEx.layoutconstraintLefttoLeftOf) == false)
  //    {
  //        strCodeForCs.AppendFormat("\r\n" + "app:layoutconstraintLefttoLeftOf=\"{0}\" ",
  //            objASPControlENEx.layoutconstraintLefttoLeftOf);
  //    }
  //    if (objASPControlENEx.layoutconstraintLefttoRightOf) == false)
  //    {
  //        strCodeForCs.AppendFormat("\r\n" + "app:layoutconstraintLefttoRightOf=\"{0}\" ",
  //            objASPControlENEx.layoutconstraintLefttoRightOf);
  //    }
  //    if (objASPControlENEx.layoutconstraintToptoBottomOf) == false)
  //    {
  //        strCodeForCs.AppendFormat("\r\n" + "app:layoutconstraintToptoBottomOf=\"{0}\" ",
  //            objASPControlENEx.layoutconstraintToptoBottomOf);
  //    }
  //    if (objASPControlENEx.layoutconstraintToptoTopOf) == false)
  //    {
  //        strCodeForCs.AppendFormat("\r\n" + "app:layoutconstraintToptoTopOf=\"{0}\" ",
  //            objASPControlENEx.layoutconstraintToptoTopOf);
  //    }
  //}
  /// <summary>
  /// 查询区域字段转换成安卓控件
  /// </summary>
  /// <param name="objQryRegionFldsEx">查询区域字段对象</param>
  /// <returns>转换成的安卓控件</returns>
  public static async GetObjByQryFld(
    objQryRegionFldsEx: clsQryRegionFldsENEx4GC,
  ): Promise<ASPControlEx> {
    const strThisFuncName = this.GetObjByQryFld.name;
    let strMsg = '';

    let objASPCheckBoxENEx;
    let objASPTextBoxENEx;
    let objASPDropDownListENEx;

    switch (objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName) {
      case 'CheckBox':
        objASPCheckBoxENEx = new ASPCheckBoxEx();
        objASPCheckBoxENEx.ctrlId = `chk${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;

        objASPCheckBoxENEx.width = 200;
        objASPCheckBoxENEx.height = 22;
        objASPCheckBoxENEx.text = objQryRegionFldsEx.objFieldTabENEx.caption;
        objASPCheckBoxENEx.objQryRegionFldsEx = objQryRegionFldsEx;
        return objASPCheckBoxENEx;
      case 'TextBox':
        objASPTextBoxENEx = new ASPTextBoxEx();
        objASPTextBoxENEx.ctrlId = `txt${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPTextBoxENEx.width = 200;
        objASPTextBoxENEx.height = 22;
        objASPTextBoxENEx.objQryRegionFldsEx = objQryRegionFldsEx;
        return objASPTextBoxENEx;

      case 'DropDownList':
        objASPDropDownListENEx = new ASPDropDownListEx();
        objASPDropDownListENEx.ctrlId = `spn${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPDropDownListENEx.width = 200;
        objASPDropDownListENEx.height = 22;
        objASPDropDownListENEx.objQryRegionFldsEx = objQryRegionFldsEx;

        objASPDropDownListENEx.fldName = objQryRegionFldsEx.objFieldTabENEx.fldName;
        objASPDropDownListENEx.tabName = await objQryRegionFldsEx.tabName4GC();
        objASPDropDownListENEx.ddlItemsOptionId = objQryRegionFldsEx.ddlItemsOptionId;
        objASPDropDownListENEx.dsTabName = objQryRegionFldsEx.dsTabName;

        return objASPDropDownListENEx;

      default:
        strMsg = `查询区域字段转换成安卓控件时，类型: [${objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        throw new Error(strMsg);
    }
  }

  /// <summary>
  /// 查询区域字段转换成安卓控件
  /// </summary>
  /// <param name="objDGRegionFldsEx">查询区域字段对象</param>
  /// <returns>转换成的安卓控件</returns>
  public static GetControl_AspList(
    objDGRegionFldsEx: clsDGRegionFldsENEx4GC,
    strTabName: string,
  ): ASPControlEx {
    const strThisFuncName = this.GetControl_AspList.name;
    let strMsg = '';
    let objASPCheckBoxENEx;
    let objASPTextBoxENEx;
    let objASPDropDownListENEx;
    let objASPButtonENEx;

    switch (objDGRegionFldsEx.objCtlTypeAbbr.ctlTypeName) {
      case 'CheckBox':
        objASPCheckBoxENEx = new ASPCheckBoxEx();
        objASPCheckBoxENEx.ctrlId = `chk${objDGRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPCheckBoxENEx.caption = objDGRegionFldsEx.headerText;
        objASPCheckBoxENEx.csType = objDGRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
        objASPCheckBoxENEx.fldName = objDGRegionFldsEx.fldName;

        objASPCheckBoxENEx.width = 200;
        objASPCheckBoxENEx.height = 0;
        objASPCheckBoxENEx.text = objDGRegionFldsEx.objFieldTabENEx.caption;
        objASPCheckBoxENEx.objDGRegionFldsENEx = objDGRegionFldsEx;
        return objASPCheckBoxENEx;

      case 'TextBox':
        objASPTextBoxENEx = new ASPTextBoxEx();
        objASPTextBoxENEx.ctrlId = `txt${objDGRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPTextBoxENEx.caption = objDGRegionFldsEx.headerText;
        objASPTextBoxENEx.csType = objDGRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
        objASPTextBoxENEx.fldName = objDGRegionFldsEx.fldName;

        objASPTextBoxENEx.width = 200;
        objASPTextBoxENEx.height = 22;

        objASPTextBoxENEx.objDGRegionFldsENEx = objDGRegionFldsEx;
        return objASPTextBoxENEx;

      case 'DropDownList':
        objASPDropDownListENEx = new ASPDropDownListEx();
        objASPDropDownListENEx.ctrlId = `spn${objDGRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPDropDownListENEx.caption = objDGRegionFldsEx.headerText;
        objASPDropDownListENEx.csType = objDGRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
        objASPDropDownListENEx.fldName = objDGRegionFldsEx.fldName;

        objASPDropDownListENEx.width = 200;
        objASPDropDownListENEx.height = 0;
        objASPDropDownListENEx.objDGRegionFldsENEx = objDGRegionFldsEx;

        objASPDropDownListENEx.fldName = objDGRegionFldsEx.objFieldTabENEx.fldName;

        objASPDropDownListENEx.tabName = strTabName;
        //objASPDropDownListENEx.ddlItemsOptionId = objDGRegionFldsEx.ddlItemsOptionId;
        objASPDropDownListENEx.dsTabName = objDGRegionFldsEx.dsTabName;

        return objASPDropDownListENEx;
      case 'Button':
        objASPButtonENEx = new ASPButtonEx();
        if (objDGRegionFldsEx.ButtonValue.indexOf('修改') > -1) {
          objASPButtonENEx.ctrlId = 'btnUpdate';
          objASPButtonENEx.text = '修改';
        } else if (objDGRegionFldsEx.ButtonValue.indexOf('删除') > -1) {
          objASPButtonENEx.ctrlId = 'btnDelete';
          objASPButtonENEx.text = '删除';
        }
        //objASPButtonENEx.ctrlId = `btn{0}q", objDGRegionFldsEx.objPrjTabFldENEx.objFieldTabENEx.fldName);
        objASPButtonENEx.caption = objDGRegionFldsEx.headerText;
        objASPButtonENEx.csType = ''; // objDGRegionFldsEx.objPrjTabFldENEx.csType;
        objASPButtonENEx.fldName = ''; // objDGRegionFldsEx.fldName;

        objASPButtonENEx.width = 200;
        objASPButtonENEx.height = 22;

        objASPButtonENEx.objDGRegionFldsENEx = objDGRegionFldsEx;
        return objASPButtonENEx;
      default:
        strMsg = `查询区域字段转换成安卓控件时，类型:[${objDGRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        throw new Error(strMsg);
    }
  }

  public static GetControl_Asp4(
    objExcelExportRegionFldsEx: clsExcelExportRegionFldsENEx4GC,
  ): ASPControlEx {
    const objASPTextBoxENEx: ASPTextBoxEx = new ASPTextBoxEx();
    objASPTextBoxENEx.ctrlId = `txt${objExcelExportRegionFldsEx.objFieldTabENEx.fldName}q`;
    objASPTextBoxENEx.caption = objExcelExportRegionFldsEx.colCaption;
    objASPTextBoxENEx.csType = objExcelExportRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
    objASPTextBoxENEx.fldName = objExcelExportRegionFldsEx.objFieldTabENEx.fldName;

    objASPTextBoxENEx.width = 200;
    objASPTextBoxENEx.height = 22;

    objASPTextBoxENEx.objExcelExportRegionFldsENEx = objExcelExportRegionFldsEx;
    return objASPTextBoxENEx;
  }

  /// <summary>
  /// 查询区域字段转换成安卓控件
  /// </summary>
  /// <param name="objEditRegionFldsEx">编辑区域字段对象</param>
  /// <returns>转换成的安卓控件</returns>
  public static async GetObjByEditFld(
    objEditRegionFldsEx: clsEditRegionFldsENEx4GC,
  ): Promise<ASPControlEx> {
    const strThisFuncName = this.GetObjByEditFld.name;
    // const strFldName = objEditRegionFldsEx.objFieldTabENEx.fldName;
    let strMsg = '';
    let objASPCheckBoxENEx;
    let objASPTextBoxENEx;
    let objASPDropDownListENEx;

    switch (objEditRegionFldsEx.objCtlTypeAbbr.ctlTypeName) {
      case 'CheckBox':
        objASPCheckBoxENEx = new ASPCheckBoxEx();
        objASPCheckBoxENEx.ctrlId = `chk${objEditRegionFldsEx.objFieldTabENEx.fldName}`;

        objASPCheckBoxENEx.width = 200;
        objASPCheckBoxENEx.height = 0;
        objASPCheckBoxENEx.text = objEditRegionFldsEx.objFieldTabENEx.caption;
        objASPCheckBoxENEx.objEditRegionFldsEx = objEditRegionFldsEx;
        return objASPCheckBoxENEx;
      case 'TextBox':
        objASPTextBoxENEx = new ASPTextBoxEx();
        objASPTextBoxENEx.ctrlId = `txt${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPTextBoxENEx.width = 200;
        objASPTextBoxENEx.height = 22;
        objASPTextBoxENEx.objEditRegionFldsEx = objEditRegionFldsEx;
        return objASPTextBoxENEx;

      case 'DropDownList':
        objASPDropDownListENEx = new ASPDropDownListEx();
        objASPDropDownListENEx.ctrlId = `spn${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPDropDownListENEx.width = 200;
        objASPDropDownListENEx.height = 0;
        objASPDropDownListENEx.objEditRegionFldsEx = objEditRegionFldsEx;

        objASPDropDownListENEx.fldName = objEditRegionFldsEx.objFieldTabENEx.fldName;
        objASPDropDownListENEx.tabName = await objEditRegionFldsEx.tabName();
        objASPDropDownListENEx.ddlItemsOptionId = objEditRegionFldsEx.ddlItemsOptionId;
        objASPDropDownListENEx.dsTabName = objEditRegionFldsEx.dsTabName;

        return objASPDropDownListENEx;

      default:
        strMsg = `查询区域字段转换成安卓控件时，类型: [${objEditRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        throw new Error(strMsg);
    }
  }
  ///// <summary>
  ///// 字段变量定义
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenFieldconstDef(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenFieldconstDef(objASPTextBoxENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenFieldconstDef(objASPLabelENEx, strCodeForCs);
  //            break;
  //        case "ASPButtonEx":
  //            objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //            clsASPButtonBLEx.GenFieldconstDef(objASPButtonENEx, strCodeForCs);
  //            break;
  //        case "ASPBodyEx":
  //            objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //            clsASPBodyBLEx.GenFieldconstDef(objASPBodyENEx, strCodeForCs);
  //            break;
  //        case "ASPBoundFieldEx":
  //            objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //            clsASPBoundFieldBLEx.GenFieldconstDef(objASPBoundFieldENEx, strCodeForCs);
  //            break;
  //        case "ASPDivEx":
  //            objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //            clsASPDivBLEx.GenFieldconstDef(objASPDivENEx, strCodeForCs);
  //            break;
  //        case "ASPFormEx":
  //            objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //            clsASPFormBLEx.GenFieldconstDef(objASPFormENEx, strCodeForCs);
  //            break;
  //        case "ASPGridViewEx":
  //            objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //            clsASPGridViewBLEx.GenFieldconstDef(objASPGridViewENEx, strCodeForCs);
  //            break;

  //        case "ASPHeadEx":
  //            objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //            clsASPHeadBLEx.GenFieldconstDef(objASPHeadENEx, strCodeForCs);
  //            break;
  //        case "ASPHeaderStyleEx":
  //            objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //            clsASPHeaderStyleBLEx.GenFieldconstDef(objASPHeaderStyleENEx, strCodeForCs);
  //            break;
  //        case "ASPHeaderTemplateEx":
  //         const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //            clsASPHeaderTemplateBLEx.GenFieldconstDef(objASPHeaderTemplateENEx, strCodeForCs);
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenFieldconstDef(objASPDropDownListENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenFieldconstDef(objASPCheckBoxENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenFieldconstDef(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenFieldconstDef(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 字段变量定义
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenBindDdl(objASPControlENEx: ASPControlEx, objViewInfoENEx: clsViewInfoENEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":

  //        case "ASPLabelEx":

  //        case "ASPButtonEx":

  //        case "ASPBodyEx":

  //        case "ASPBoundFieldEx":

  //        case "ASPDivEx":

  //        case "ASPFormEx":

  //        case "ASPGridViewEx":

  //        case "ASPHeadEx":

  //        case "ASPHeaderStyleEx":

  //        case "ASPHeaderTemplateEx":

  //        case "ASPCheckBoxEx":
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenBindDdl(objASPDropDownListENEx, objViewInfoENEx, strCodeForCs);
  //            break;

  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenBindDdl(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenBindDdl(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 字段变量定义
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenBindDdlInTaskQueue(objASPControlENEx: ASPControlEx, objViewInfoENEx: clsViewInfoENEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":

  //        case "ASPLabelEx":

  //        case "ASPButtonEx":

  //        case "ASPBodyEx":

  //        case "ASPBoundFieldEx":

  //        case "ASPDivEx":

  //        case "ASPFormEx":

  //        case "ASPGridViewEx":

  //        case "ASPHeadEx":

  //        case "ASPHeaderStyleEx":

  //        case "ASPHeaderTemplateEx":

  //        case "ASPCheckBoxEx":
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenBindDdlInTaskQueue(objASPDropDownListENEx, objViewInfoENEx, strCodeForCs);
  //            break;

  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenBindDdl(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenBindDdl(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 字段变量定义
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenDefDdlBindObj(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder, Array<string> arrDdlBindObjLst)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":

  //        case "ASPLabelEx":

  //        case "ASPButtonEx":

  //        case "ASPBodyEx":

  //        case "ASPBoundFieldEx":

  //        case "ASPDivEx":

  //        case "ASPFormEx":

  //        case "ASPGridViewEx":

  //        case "ASPHeadEx":

  //        case "ASPHeaderStyleEx":

  //        case "ASPHeaderTemplateEx":

  //        case "ASPCheckBoxEx":
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenDefDdlBindObj(objASPDropDownListENEx, strCodeForCs, arrDdlBindObjLst);
  //            break;

  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenDefDdlBindObj(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenDefDdlBindObj(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 字段变量绑定
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenFieldconstBind(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenFieldconstBind(objASPTextBoxENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenFieldconstBind(objASPLabelENEx, strCodeForCs);
  //            break;
  //        case "ASPButtonEx":
  //            objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //            clsASPButtonBLEx.GenFieldconstBind(objASPButtonENEx, strCodeForCs);
  //            break;
  //        case "ASPBodyEx":
  //            objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //            clsASPBodyBLEx.GenFieldconstBind(objASPBodyENEx, strCodeForCs);
  //            break;
  //        case "ASPBoundFieldEx":
  //            objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //            clsASPBoundFieldBLEx.GenFieldconstBind(objASPBoundFieldENEx, strCodeForCs);
  //            break;
  //        case "ASPDivEx":
  //            objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //            clsASPDivBLEx.GenFieldconstBind(objASPDivENEx, strCodeForCs);
  //            break;
  //        case "ASPFormEx":
  //            objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //            clsASPFormBLEx.GenFieldconstBind(objASPFormENEx, strCodeForCs);
  //            break;
  //        case "ASPGridViewEx":
  //            objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //            clsASPGridViewBLEx.GenFieldconstBind(objASPGridViewENEx, strCodeForCs);
  //            break;

  //        case "ASPHeadEx":
  //            objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //            clsASPHeadBLEx.GenFieldconstBind(objASPHeadENEx, strCodeForCs);
  //            break;
  //        case "ASPHeaderStyleEx":
  //            objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //            clsASPHeaderStyleBLEx.GenFieldconstBind(objASPHeaderStyleENEx, strCodeForCs);
  //            break;
  //        case "ASPHeaderTemplateEx":
  //         const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //            clsASPHeaderTemplateBLEx.GenFieldconstBind(objASPHeaderTemplateENEx, strCodeForCs);
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenFieldconstBind(objASPDropDownListENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenFieldconstBind(objASPCheckBoxENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenFieldconstBind(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenFieldconstBind(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 字段变量绑定
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenFieldconstBind4HeaderTemplate(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenFieldconstBind4HeaderTemplate(objASPTextBoxENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenFieldconstBind4HeaderTemplate(objASPLabelENEx, strCodeForCs);
  //            break;
  //        case "ASPButtonEx":
  //            objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //            clsASPButtonBLEx.GenFieldconstBind4HeaderTemplate(objASPButtonENEx, strCodeForCs);
  //            break;
  //        case "ASPBodyEx":
  //            objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //            clsASPBodyBLEx.GenFieldconstBind4HeaderTemplate(objASPBodyENEx, strCodeForCs);
  //            break;
  //        case "ASPBoundFieldEx":
  //            objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //            clsASPBoundFieldBLEx.GenFieldconstBind4HeaderTemplate(objASPBoundFieldENEx, strCodeForCs);
  //            break;
  //        case "ASPDivEx":
  //            objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //            clsASPDivBLEx.GenFieldconstBind4HeaderTemplate(objASPDivENEx, strCodeForCs);
  //            break;
  //        case "ASPFormEx":
  //            objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //            clsASPFormBLEx.GenFieldconstBind4HeaderTemplate(objASPFormENEx, strCodeForCs);
  //            break;
  //        case "ASPGridViewEx":
  //            objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //            clsASPGridViewBLEx.GenFieldconstBind4HeaderTemplate(objASPGridViewENEx, strCodeForCs);
  //            break;

  //        case "ASPHeadEx":
  //            objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //            clsASPHeadBLEx.GenFieldconstBind4HeaderTemplate(objASPHeadENEx, strCodeForCs);
  //            break;
  //        case "ASPHeaderStyleEx":
  //            objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //            clsASPHeaderStyleBLEx.GenFieldconstBind4HeaderTemplate(objASPHeaderStyleENEx, strCodeForCs);
  //            break;
  //        case "ASPHeaderTemplateEx":
  //         const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //            clsASPHeaderTemplateBLEx.GenFieldconstBind4HeaderTemplate(objASPHeaderTemplateENEx, strCodeForCs);
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenFieldconstBind4HeaderTemplate(objASPDropDownListENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenFieldconstBind4HeaderTemplate(objASPCheckBoxENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenFieldconstBind4HeaderTemplate(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenFieldconstBind4HeaderTemplate(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 字段变量绑定
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="objViewInfoENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenLvFieldAssignment(objASPControlENEx: ASPControlEx, objViewInfoENEx: clsViewInfoENEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenLvFieldAssignment(objASPTextBoxENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenLvFieldAssignment(objASPLabelENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        case "ASPButtonEx":
  //            objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //            clsASPButtonBLEx.GenLvFieldAssignment(objASPButtonENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        case "ASPBodyEx":
  //            objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //            clsASPBodyBLEx.GenLvFieldAssignment(objASPBodyENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        case "ASPBoundFieldEx":
  //            objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //            clsASPBoundFieldBLEx.GenLvFieldAssignment(objASPBoundFieldENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        case "ASPDivEx":
  //            objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //            clsASPDivBLEx.GenLvFieldAssignment(objASPDivENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        case "ASPFormEx":
  //            objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //            clsASPFormBLEx.GenLvFieldAssignment(objASPFormENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        case "ASPGridViewEx":
  //            objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //            clsASPGridViewBLEx.GenLvFieldAssignment(objASPGridViewENEx, objViewInfoENEx, strCodeForCs);
  //            break;

  //        case "ASPHeadEx":
  //            objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //            clsASPHeadBLEx.GenLvFieldAssignment(objASPHeadENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        //case "ASPHeaderStyleEx":
  //        //    objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //        //    clsASPHeaderStyleBLEx.GenLvFieldAssignment(objASPHeaderStyleENEx, objViewInfoENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPHeaderTemplateEx":
  //        // const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //        //    clsASPHeaderTemplateBLEx.GenLvFieldAssignment(objASPHeaderTemplateENEx, objViewInfoENEx, strCodeForCs);
  //        //    break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenLvFieldAssignment(objASPDropDownListENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenLvFieldAssignment(objASPCheckBoxENEx, objViewInfoENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenLvFieldAssignment(objASPPagerTemplateENEx, objViewInfoENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenLvFieldAssignment(objASPAutoresizingMaskENEx, objViewInfoENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 生成字段控件的获取控件值(编辑区字段)
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenGetValue4FieldCtrl4Edit(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenGetValue4FieldCtrl4Edit(objASPTextBoxENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenGetValue4FieldCtrl4Edit(objASPLabelENEx, strCodeForCs);
  //            break;
  //        //case "ASPButtonEx":
  //        //    objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //        //    clsASPButtonBLEx.GenGetValue4FieldCtrl4Edit(objASPButtonENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBodyEx":
  //        //    objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //        //    clsASPBodyBLEx.GenGetValue4FieldCtrl4Edit(objASPBodyENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBoundFieldEx":
  //        //    objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //        //    clsASPBoundFieldBLEx.GenGetValue4FieldCtrl4Edit(objASPBoundFieldENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPDivEx":
  //        //    objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //        //    clsASPDivBLEx.GenGetValue4FieldCtrl4Edit(objASPDivENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPFormEx":
  //        //    objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //        //    clsASPFormBLEx.GenGetValue4FieldCtrl4Edit(objASPFormENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPGridViewEx":
  //        //    objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //        //    clsASPGridViewBLEx.GenGetValue4FieldCtrl4Edit(objASPGridViewENEx, strCodeForCs);
  //        //    break;

  //        //case "ASPHeadEx":
  //        //    objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //        //    clsASPHeadBLEx.GenGetValue4FieldCtrl4Edit(objASPHeadENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPHeaderStyleEx":
  //        //    objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //        //    clsASPHeaderStyleBLEx.GenGetValue4FieldCtrl4Edit(objASPHeaderStyleENEx, strCodeForCs);
  //        //    break;
  //        case "ASPHeaderTemplateEx":
  //         const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //            clsASPHeaderTemplateBLEx.GenGetValue4FieldCtrl4Edit(objASPHeaderTemplateENEx, strCodeForCs);
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenGetValue4FieldCtrl4Edit(objASPDropDownListENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenGetValue4FieldCtrl4Edit(objASPCheckBoxENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenGetValue4FieldCtrl4Edit(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenGetValue4FieldCtrl4Edit(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 生成字段控件的获取控件值(查询区字段)
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenGetValue4FieldCtrl4Qry(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenGetValue4FieldCtrl4Qry(objASPTextBoxENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenGetValue4FieldCtrl4Qry(objASPLabelENEx, strCodeForCs);
  //            break;
  //        //case "ASPButtonEx":
  //        //    objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //        //    clsASPButtonBLEx.GenGetValue4FieldCtrl4Qry(objASPButtonENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBodyEx":
  //        //    objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //        //    clsASPBodyBLEx.GenGetValue4FieldCtrl4Qry(objASPBodyENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBoundFieldEx":
  //        //    objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //        //    clsASPBoundFieldBLEx.GenGetValue4FieldCtrl4Qry(objASPBoundFieldENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPDivEx":
  //        //    objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //        //    clsASPDivBLEx.GenGetValue4FieldCtrl4Qry(objASPDivENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPFormEx":
  //        //    objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //        //    clsASPFormBLEx.GenGetValue4FieldCtrl4Qry(objASPFormENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPGridViewEx":
  //        //    objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //        //    clsASPGridViewBLEx.GenGetValue4FieldCtrl4Qry(objASPGridViewENEx, strCodeForCs);
  //        //    break;

  //        //case "ASPHeadEx":
  //        //    objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //        //    clsASPHeadBLEx.GenGetValue4FieldCtrl4Qry(objASPHeadENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPHeaderStyleEx":
  //        //    objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //        //    clsASPHeaderStyleBLEx.GenGetValue4FieldCtrl4Qry(objASPHeaderStyleENEx, strCodeForCs);
  //        //    break;
  //        case "ASPHeaderTemplateEx":
  //         const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //            clsASPHeaderTemplateBLEx.GenGetValue4FieldCtrl4Qry(objASPHeaderTemplateENEx, strCodeForCs);
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenGetValue4FieldCtrl4Qry(objASPDropDownListENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenGetValue4FieldCtrl4Qry(objASPCheckBoxENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenGetValue4FieldCtrl4Qry(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenGetValue4FieldCtrl4Qry(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 生成字段控件的设置控件值(编辑区字段)
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenSetValue4FieldCtrl4Edit(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenSetValue4FieldCtrl4Edit(objASPTextBoxENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenSetValue4FieldCtrl4Edit(objASPLabelENEx, strCodeForCs);
  //            break;
  //        //case "ASPButtonEx":
  //        //    objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //        //    clsASPButtonBLEx.GenSetValue4FieldCtrl4Edit(objASPButtonENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBodyEx":
  //        //    objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //        //    clsASPBodyBLEx.GenSetValue4FieldCtrl4Edit(objASPBodyENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBoundFieldEx":
  //        //    objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //        //    clsASPBoundFieldBLEx.GenSetValue4FieldCtrl4Edit(objASPBoundFieldENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPDivEx":
  //        //    objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //        //    clsASPDivBLEx.GenSetValue4FieldCtrl4Edit(objASPDivENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPFormEx":
  //        //    objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //        //    clsASPFormBLEx.GenSetValue4FieldCtrl4Edit(objASPFormENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPGridViewEx":
  //        //    objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //        //    clsASPGridViewBLEx.GenSetValue4FieldCtrl4Edit(objASPGridViewENEx, strCodeForCs);
  //        //    break;

  //        //case "ASPHeadEx":
  //        //    objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //        //    clsASPHeadBLEx.GenSetValue4FieldCtrl4Edit(objASPHeadENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPHeaderStyleEx":
  //        //    objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //        //    clsASPHeaderStyleBLEx.GenSetValue4FieldCtrl4Edit(objASPHeaderStyleENEx, strCodeForCs);
  //        //    break;
  //        case "ASPHeaderTemplateEx":
  //         const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //            clsASPHeaderTemplateBLEx.GenSetValue4FieldCtrl4Edit(objASPHeaderTemplateENEx, strCodeForCs);
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenSetValue4FieldCtrl4Edit(objASPDropDownListENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenSetValue4FieldCtrl4Edit(objASPCheckBoxENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenSetValue4FieldCtrl4Edit(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenSetValue4FieldCtrl4Edit(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 生成字段控件的设置控件值(编辑区字段)
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenClearFieldCtrl4Edit(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenClearFieldCtrl4Edit(objASPTextBoxENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenClearFieldCtrl4Edit(objASPLabelENEx, strCodeForCs);
  //            break;
  //        //case "ASPButtonEx":
  //        //    objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //        //    clsASPButtonBLEx.GenClearFieldCtrl4Edit(objASPButtonENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBodyEx":
  //        //    objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //        //    clsASPBodyBLEx.GenClearFieldCtrl4Edit(objASPBodyENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBoundFieldEx":
  //        //    objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //        //    clsASPBoundFieldBLEx.GenClearFieldCtrl4Edit(objASPBoundFieldENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPDivEx":
  //        //    objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //        //    clsASPDivBLEx.GenClearFieldCtrl4Edit(objASPDivENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPFormEx":
  //        //    objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //        //    clsASPFormBLEx.GenClearFieldCtrl4Edit(objASPFormENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPGridViewEx":
  //        //    objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //        //    clsASPGridViewBLEx.GenClearFieldCtrl4Edit(objASPGridViewENEx, strCodeForCs);
  //        //    break;

  //        //case "ASPHeadEx":
  //        //    objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //        //    clsASPHeadBLEx.GenClearFieldCtrl4Edit(objASPHeadENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPHeaderStyleEx":
  //        //    objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //        //    clsASPHeaderStyleBLEx.GenClearFieldCtrl4Edit(objASPHeaderStyleENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPHeaderTemplateEx":
  //        // const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //        //    clsASPHeaderTemplateBLEx.GenClearFieldCtrl4Edit(objASPHeaderTemplateENEx, strCodeForCs);
  //        //    break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenClearFieldCtrl4Edit(objASPDropDownListENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenClearFieldCtrl4Edit(objASPCheckBoxENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenClearFieldCtrl4Edit(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenClearFieldCtrl4Edit(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  ///// <summary>
  ///// 生成字段控件的设置控件值(查询区字段)
  ///// </summary>
  ///// <param name="objASPControlENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static GenSetValue4FieldCtrl4Qry(objASPControlENEx: ASPControlEx, strCodeForCs: StringBuilder)
  //{
  //    strType: string  = objASPControlENEx.GetType().Name;
  //    switch (strType)
  //    {
  //        case "ASPTextBoxEx":
  //            objASPTextBoxENEx: ASPTextBoxEx = objASPControlENEx as ASPTextBoxEx;
  //            clsASPTextBoxBLEx.GenSetValue4FieldCtrl4Qry(objASPTextBoxENEx, strCodeForCs);
  //            break;
  //        case "ASPLabelEx":
  //            objASPLabelENEx:ASPLabelEx  = objASPControlENEx as ASPLabelEx;
  //            clsASPLabelBLEx.GenSetValue4FieldCtrl4Qry(objASPLabelENEx, strCodeForCs);
  //            break;
  //        //case "ASPButtonEx":
  //        //    objASPButtonENEx: ASPButtonEx = objASPControlENEx as ASPButtonEx;
  //        //    clsASPButtonBLEx.GenSetValue4FieldCtrl4Qry(objASPButtonENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBodyEx":
  //        //    objASPBodyENEx: ASPBodyEx = objASPControlENEx as ASPBodyEx;
  //        //    clsASPBodyBLEx.GenSetValue4FieldCtrl4Qry(objASPBodyENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPBoundFieldEx":
  //        //    objASPBoundFieldENEx: ASPBoundFieldEx = objASPControlENEx as ASPBoundFieldEx;
  //        //    clsASPBoundFieldBLEx.GenSetValue4FieldCtrl4Qry(objASPBoundFieldENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPDivEx":
  //        //    objASPDivENEx: ASPDivEx = objASPControlENEx as ASPDivEx;
  //        //    clsASPDivBLEx.GenSetValue4FieldCtrl4Qry(objASPDivENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPFormEx":
  //        //    objASPFormENEx: ASPFormEx = objASPControlENEx as ASPFormEx;
  //        //    clsASPFormBLEx.GenSetValue4FieldCtrl4Qry(objASPFormENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPGridViewEx":
  //        //    objASPGridViewENEx: ASPGridViewEx = objASPControlENEx as ASPGridViewEx;
  //        //    clsASPGridViewBLEx.GenSetValue4FieldCtrl4Qry(objASPGridViewENEx, strCodeForCs);
  //        //    break;

  //        //case "ASPHeadEx":
  //        //    objASPHeadENEx: ASPHeadEx = objASPControlENEx as ASPHeadEx;
  //        //    clsASPHeadBLEx.GenSetValue4FieldCtrl4Qry(objASPHeadENEx, strCodeForCs);
  //        //    break;
  //        //case "ASPHeaderStyleEx":
  //        //    objASPHeaderStyleENEx: ASPHeaderStyleEx = objASPControlENEx as ASPHeaderStyleEx;
  //        //    clsASPHeaderStyleBLEx.GenSetValue4FieldCtrl4Qry(objASPHeaderStyleENEx, strCodeForCs);
  //        //    break;
  //        case "ASPHeaderTemplateEx":
  //         const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = objASPControlENEx as ASPHeaderTemplateEx;
  //            clsASPHeaderTemplateBLEx.GenSetValue4FieldCtrl4Qry(objASPHeaderTemplateENEx, strCodeForCs);
  //            break;
  //        case "ASPDropDownListEx":
  //            objASPDropDownListENEx: ASPDropDownListEx = objASPControlENEx as ASPDropDownListEx;
  //            clsASPDropDownListBLEx.GenSetValue4FieldCtrl4Qry(objASPDropDownListENEx, strCodeForCs);
  //            break;
  //        case "ASPCheckBoxEx":
  //            objASPCheckBoxENEx: ASPCheckBoxEx = objASPControlENEx as ASPCheckBoxEx;
  //            clsASPCheckBoxBLEx.GenSetValue4FieldCtrl4Qry(objASPCheckBoxENEx, strCodeForCs);
  //            break;
  //        //case "ASPPagerTemplateEx":
  //        //    const objASPPagerTemplateENEx: ASPPagerTemplateEx = objASPControlENEx as ASPPagerTemplateEx;
  //        //    clsASPPagerTemplateBLEx.GenSetValue4FieldCtrl4Qry(objASPPagerTemplateENEx, strCodeForCs);
  //        //    break;
  //        //case "clsASPAutoresizingMaskENEx":
  //        //    clsASPAutoresizingMaskENEx objASPAutoresizingMaskENEx = objASPControlENEx as clsASPAutoresizingMaskENEx;
  //        //    clsASPAutoresizingMaskBLEx.GenSetValue4FieldCtrl4Qry(objASPAutoresizingMaskENEx, strCodeForCs);
  //        //    break;

  //        default:
  //            throw new Error(`类型:{0}不存在,请检查!", strType));
  //    }
  //}

  public static async GetControlGroupAsp(
    objQryRegionFldsEx: clsQryRegionFldsENEx4GC,
  ): Promise<ASPControlEx> {
    const strThisFuncName = this.GetControlGroupAsp.name;
    if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
    const objASPControlENEx: ASPControlEx = new ASPControlEx();

    const objLabel: ASPLabelEx = new ASPLabelEx();

    objLabel.ctrlId = `lbl${objQryRegionFldsEx.fldName}q`;
    objLabel.width = ASPControlEx.objLabelStyleText.width;
    objLabel.height = ASPControlEx.objLabelStyleText.height;

    objLabel.runat = ASPControlEx.objLabelStyleText.runat;
    objLabel.cssClass = 'text-secondary';

    //strCodeForCs.AppendFormat("\r\n" + "runat = \"{0}\" cssClass = \"text-secondary\">",
    //  objLabelStyle.runat);
    objLabel.text = objQryRegionFldsEx.labelCaption;
    let strMsg = '';
    let objASPCheckBoxENEx;
    let objASPTextBoxENEx;
    let objASPDropDownListENEx;
    switch (objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName) {
      case 'CheckBox':
        objASPCheckBoxENEx = new ASPCheckBoxEx();
        objASPCheckBoxENEx.ctrlId = `chk${objQryRegionFldsEx.objFieldTabENEx.fldName} q`;

        objASPCheckBoxENEx.width = 200;
        objASPCheckBoxENEx.height = 22;
        objASPCheckBoxENEx.text = objQryRegionFldsEx.objFieldTabENEx.caption;
        objASPCheckBoxENEx.objQryRegionFldsEx = objQryRegionFldsEx;
        objASPControlENEx.arrSubAspControlLst2.push(objASPCheckBoxENEx);
        break;
      case 'TextBox':
        objASPTextBoxENEx = new ASPTextBoxEx();
        objASPTextBoxENEx.ctrlId = `txt${objQryRegionFldsEx.objFieldTabENEx.fldName} q`;
        objASPTextBoxENEx.width = 200;
        objASPTextBoxENEx.height = 22;
        objASPTextBoxENEx.objQryRegionFldsEx = objQryRegionFldsEx;
        objASPControlENEx.arrSubAspControlLst2.push(objLabel);
        objASPControlENEx.arrSubAspControlLst2.push(objASPTextBoxENEx);
        break;
      case 'DropDownList':
        objASPDropDownListENEx = new ASPDropDownListEx();
        objASPDropDownListENEx.ctrlId = `ddl${objQryRegionFldsEx.objFieldTabENEx.fldName} q`;
        objASPDropDownListENEx.width = 200;
        objASPDropDownListENEx.height = 22;
        objASPDropDownListENEx.objQryRegionFldsEx = objQryRegionFldsEx;

        objASPDropDownListENEx.fldName = objQryRegionFldsEx.objFieldTabENEx.fldName;
        objASPDropDownListENEx.tabName = await objQryRegionFldsEx.tabName4GC();
        objASPDropDownListENEx.ddlItemsOptionId = objQryRegionFldsEx.ddlItemsOptionId;
        objASPDropDownListENEx.dsTabName = objQryRegionFldsEx.dsTabName;

        objASPControlENEx.arrSubAspControlLst2.push(objLabel);
        objASPControlENEx.arrSubAspControlLst2.push(objASPDropDownListENEx);
        break;
      default:
        strMsg = `查询区域字段转换成Asp控件时，类型:[${objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        throw new Error(strMsg);
    }

    return objASPControlENEx;
  }

  public static GetControl_Asp(
    objViewFeatureFldsEx: clsViewFeatureFldsENEx,
    strItemName4MultiModel = '',
  ): ASPControlEx {
    const strThisFuncName = this.GetControl_Asp.name;
    let strAdditionalCtrlId = '';
    switch (objViewFeatureFldsEx.featureId) {
      case enumPrjFeature.SetFieldValue_0148:
        strAdditionalCtrlId = 'SetFldValue';
        break;
    }
    let strMsg = '';
    let objASPCheckBoxENEx;
    let objASPTextBoxENEx;
    let objASPDropDownListENEx;
    switch (objViewFeatureFldsEx.objCtlType.ctlTypeName) {
      case 'CheckBox':
        objASPCheckBoxENEx = new ASPCheckBoxEx();
        //objASPCheckBoxENEx.is4PureHtml = bolIs4PureHtml;
        if (objViewFeatureFldsEx.ctrlId != '') {
          objASPCheckBoxENEx.ctrlId = `${objViewFeatureFldsEx.ctrlId} ${strAdditionalCtrlId}`;
        } else {
          objASPCheckBoxENEx.ctrlId = `chk${objViewFeatureFldsEx.objvFieldTab_SimENEx.fldName} ${strAdditionalCtrlId}`;
        }
        objASPCheckBoxENEx.class = 'form-control form-control-sm';
        objASPCheckBoxENEx.fldName = objASPCheckBoxENEx.ctrlId.substring(3);
        objASPCheckBoxENEx.itemName4MultiModel = strItemName4MultiModel;

        objASPCheckBoxENEx.csType = objViewFeatureFldsEx.csType;
        objASPCheckBoxENEx.caption = objViewFeatureFldsEx.caption;
        objASPCheckBoxENEx.orderNum = objViewFeatureFldsEx.seqNum;
        objASPCheckBoxENEx.groupName = objViewFeatureFldsEx.groupName;

        objASPCheckBoxENEx.width = 100;
        objASPCheckBoxENEx.height = 22;
        objASPCheckBoxENEx.text = objViewFeatureFldsEx.labelCaption;
        objASPCheckBoxENEx.objViewFeatureFldsENEx = objViewFeatureFldsEx;
        return objASPCheckBoxENEx;
      case 'TextBox':
        objASPTextBoxENEx = new ASPTextBoxEx();
        //objASPTextBoxENEx.is4PureHtml = bolIs4PureHtml;
        if (objViewFeatureFldsEx.ctrlId != '') {
          objASPTextBoxENEx.ctrlId = `${objViewFeatureFldsEx.ctrlId}${strAdditionalCtrlId}`;
        } else {
          objASPTextBoxENEx.ctrlId = `txt${objViewFeatureFldsEx.objvFieldTab_SimENEx.fldName} ${strAdditionalCtrlId} `;
        }
        objASPTextBoxENEx.class = 'form-control form-control-sm';
        objASPTextBoxENEx.fldName = objASPTextBoxENEx.ctrlId.substring(3);
        objASPTextBoxENEx.itemName4MultiModel = strItemName4MultiModel;

        objASPTextBoxENEx.csType = objViewFeatureFldsEx.csType;
        objASPTextBoxENEx.caption = objViewFeatureFldsEx.caption;

        objASPTextBoxENEx.width = 50;
        objASPTextBoxENEx.height = 22;
        objASPTextBoxENEx.orderNum = objViewFeatureFldsEx.seqNum;
        objASPTextBoxENEx.groupName = objViewFeatureFldsEx.groupName;

        objASPTextBoxENEx.objViewFeatureFldsENEx = objViewFeatureFldsEx;
        return objASPTextBoxENEx;
      case 'DropDownList':
        objASPDropDownListENEx = new ASPDropDownListEx();

        //objASPDropDownListENEx.is4PureHtml = bolIs4PureHtml;
        if (objViewFeatureFldsEx.ctrlId != '') {
          objASPDropDownListENEx.ctrlId = `${objViewFeatureFldsEx.ctrlId}${strAdditionalCtrlId}`;
        } else {
          objASPDropDownListENEx.ctrlId = `ddl${objViewFeatureFldsEx.objvFieldTab_SimENEx.fldName} $ { strAdditionalCtrlId }`;
        }
        objASPDropDownListENEx.class = 'form-control form-control-sm';
        objASPDropDownListENEx.fldName = objASPDropDownListENEx.ctrlId.substring(3);
        objASPDropDownListENEx.itemName4MultiModel = strItemName4MultiModel;

        objASPDropDownListENEx.csType = objViewFeatureFldsEx.csType;
        objASPDropDownListENEx.caption = objViewFeatureFldsEx.caption;

        objASPDropDownListENEx.tabName = objViewFeatureFldsEx.relaTabName;
        objASPDropDownListENEx.ddlItemsOptionId = objViewFeatureFldsEx.ddlItemsOptionId;
        objASPDropDownListENEx.dsTabName = objViewFeatureFldsEx.dsTabName;

        objASPDropDownListENEx.width = 50;
        objASPDropDownListENEx.height = 22;
        objASPDropDownListENEx.orderNum = objViewFeatureFldsEx.seqNum;
        objASPDropDownListENEx.groupName = objViewFeatureFldsEx.groupName;

        objASPDropDownListENEx.objViewFeatureFldsENEx = objViewFeatureFldsEx;
        return objASPDropDownListENEx;
      case 'DropDownList_Bool':
        objASPDropDownListENEx = new ASPDropDownListEx();

        //objASPDropDownListENEx.is4PureHtml = bolIs4PureHtml;
        if (objViewFeatureFldsEx.ctrlId != '') {
          objASPDropDownListENEx.ctrlId = `${objViewFeatureFldsEx.ctrlId}${strAdditionalCtrlId}`;
        } else {
          objASPDropDownListENEx.ctrlId = `ddl${objViewFeatureFldsEx.objvFieldTab_SimENEx.fldName} $ { strAdditionalCtrlId }`;
        }
        objASPDropDownListENEx.class = 'form-control form-control-sm';
        objASPDropDownListENEx.fldName = objASPDropDownListENEx.ctrlId.substring(3);
        objASPDropDownListENEx.itemName4MultiModel = strItemName4MultiModel;

        objASPDropDownListENEx.csType = objViewFeatureFldsEx.csType;
        objASPDropDownListENEx.caption = objViewFeatureFldsEx.caption;

        objASPDropDownListENEx.tabName = objViewFeatureFldsEx.relaTabName;
        objASPDropDownListENEx.ddlItemsOptionId = objViewFeatureFldsEx.ddlItemsOptionId;
        objASPDropDownListENEx.dsTabName = objViewFeatureFldsEx.dsTabName;

        objASPDropDownListENEx.width = 50;
        objASPDropDownListENEx.height = 22;
        objASPDropDownListENEx.orderNum = objViewFeatureFldsEx.seqNum;
        objASPDropDownListENEx.groupName = objViewFeatureFldsEx.groupName;

        objASPDropDownListENEx.objViewFeatureFldsENEx = objViewFeatureFldsEx;
        return objASPDropDownListENEx;

      case enumCtlType.GivenValue_35:
      case 'GivenValue':
      case 'Viewconstiable':
      case 'ViewVariable':
        return new ASPControlEx();

      default:
        strMsg = `界面功能字段转换成Asp控件时，类型:[${objViewFeatureFldsEx.objCtlType.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        throw new Error(strMsg);
    }

    //return objASPControlENEx;
  }

  /// <summary>
  /// 封装td
  /// </summary>
  /// <param name="objAspControl"></param>
  /// <returns></returns>
  public static PackageTd(objAspControl: ASPControlEx): ASPControlEx {
    const objCol: ASPColEx = clsASPColBLEx.GetEmptyTd();
    objCol.arrSubAspControlLst2.push(objAspControl);
    return objCol;
  }
}
