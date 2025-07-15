/// <summary>
/// ASPNET标签(ASPNETLabel)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)

import { clsASPControlBLEx } from './clsASPControlBLEx';
import { ASPLabelEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLabelENEx';
import { clsViewInfoENEx4GC } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx4GC';
import { clsDGRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx4GC';
import { clsEditRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx4GC';
import { clsQryRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx4GC';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET标签(ASPNETLabel)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPLabelBLEx {
  /// <summary>
  /// 生成该对象相关的代码
  /// </summary>
  /// <param name="objASPLabelENEx">编辑文本框对象</param>
  public static GeneHtmlControl(objASPLabelENEx: ASPLabelEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFungetASPNETID();

    const objSpan: HTMLSpanElement = document.createElement('span');
    objSpan.setAttribute('class', objASPLabelENEx.class);
    objSpan.id = objASPLabelENEx.ctrlId;
    if (IsNullOrEmpty(objASPLabelENEx.keyId) == false) {
      objSpan.setAttribute('keyId', objASPLabelENEx.keyId);
    }
    if (IsNullOrEmpty(objASPLabelENEx.class) == false) {
      objSpan.className = objASPLabelENEx.class;
    } else {
      objSpan.className = objASPLabelENEx.cssClass;
    }
    objSpan.style.width = Format('{0}px', objASPLabelENEx.width);
    objSpan.innerHTML = objASPLabelENEx.text;
    objContainer.appendChild(objSpan);
    for (const objSubASPControlENEx of objASPLabelENEx.arrSubAspControlLst2) {
      clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objSpan);
    }
    //return objSpan;
  }

  /// <summary>
  /// 建立[存放功能按钮的表]
  /// </summary>
  /// <returns></returns>
  public static GetDataArrayTitle(
    objViewInfoENEx: clsViewInfoENEx4GC,
    bolIs4PureHtml = false,
  ): ASPLabelEx {
    const objASPLabelENEx: ASPLabelEx = new ASPLabelEx();
    objASPLabelENEx.is4PureHtml = bolIs4PureHtml;
    objASPLabelENEx.ctrlId = `lbl${objViewInfoENEx.objMainPrjTab.tabName}Array`;
    objASPLabelENEx.text = `${objViewInfoENEx.objInRelaTab.tabName}列表`;
    //objASPLabelENEx.style = "z-index: 105; ";
    objASPLabelENEx.cssClass = 'col-form-label-sm text-info';
    objASPLabelENEx.width = 250;
    objASPLabelENEx.height = 0;
    return objASPLabelENEx;
  }

  public static GetLabel4ErrMsg(strID: string, bolIs4PureHtml = false): ASPLabelEx {
    const objASPLabelENEx: ASPLabelEx = new ASPLabelEx();
    objASPLabelENEx.is4PureHtml = bolIs4PureHtml;
    objASPLabelENEx.ctrlId = `${strID}`;
    objASPLabelENEx.text = ``;
    //objASPLabelENEx.style = "z-index: 105; ";
    objASPLabelENEx.cssClass = 'text-warning';
    objASPLabelENEx.width = 250;
    objASPLabelENEx.height = 0;
    return objASPLabelENEx;
  }
  /// <summary>
  /// 建立[空行td]
  /// </summary>
  /// <returns></returns>
  public static GetEmptyLabel(): ASPLabelEx {
    const objASPLabelENEx: ASPLabelEx = new ASPLabelEx();

    return objASPLabelENEx;
  }

  /// <summary>
  /// 查询区域字段转换成安卓标签控件
  /// </summary>
  /// <param name="objDGRegionFldsEx">查询区域字段对象</param>
  /// <returns>转换成的安卓标签控件</returns>
  public static GetObjByDGFld(objDGRegionFldsEx: clsDGRegionFldsENEx4GC): ASPLabelEx {
    const objASPLabelENExTextBox: ASPLabelEx = new ASPLabelEx();
    objASPLabelENExTextBox.ctrlId = `tv${objDGRegionFldsEx.objFieldTabENEx.fldName}`;
    objASPLabelENExTextBox.style = 'tvStyle4ArrayItem';
    objASPLabelENExTextBox.width = 30;
    objASPLabelENExTextBox.height = 22;
    objASPLabelENExTextBox.text = objDGRegionFldsEx.objFieldTabENEx.caption;
    objASPLabelENExTextBox.objDGRegionFldsENEx = objDGRegionFldsEx;
    return objASPLabelENExTextBox;
  }

  /// <summary>
  /// 编辑区域字段转换成安卓标签控件
  /// </summary>
  /// <param name="objEditRegionFldsEx">查询区域字段对象</param>
  /// <returns>转换成的安卓标签控件</returns>
  public static GetObjByEditFld(objEditRegionFldsEx: clsEditRegionFldsENEx4GC): ASPLabelEx {
    const strThisFuncName = this.GetObjByEditFld.name;
    let objASPLabelENEx;
    let objASPLabelENExTextBox;
    let objASPLabelENExDropDownList;
    let strMsg;

    switch (objEditRegionFldsEx.objCtlTypeAbbr.ctlTypeName) {
      case 'CheckBox':
        objASPLabelENEx = new ASPLabelEx();
        objASPLabelENEx.ctrlId = `lbl${objEditRegionFldsEx.objFieldTabENEx.fldName}`;

        objASPLabelENEx.width = 100;
        objASPLabelENEx.height = 0;
        objASPLabelENEx.text = objEditRegionFldsEx.objFieldTabENEx.caption;
        objASPLabelENEx.objEditRegionFldsEx = objEditRegionFldsEx;
        return objASPLabelENEx;
      case 'TextBox':
        objASPLabelENExTextBox = new ASPLabelEx();
        objASPLabelENExTextBox.ctrlId = `lbl${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPLabelENExTextBox.width = 100;
        objASPLabelENExTextBox.height = 22;
        objASPLabelENExTextBox.text = objEditRegionFldsEx.objFieldTabENEx.caption;
        objASPLabelENExTextBox.objEditRegionFldsEx = objEditRegionFldsEx;
        return objASPLabelENExTextBox;

      case 'DropDownList':
        objASPLabelENExDropDownList = new ASPLabelEx();
        objASPLabelENExDropDownList.ctrlId = `lbl${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
        objASPLabelENExDropDownList.width = 100;
        objASPLabelENExDropDownList.height = 0;
        objASPLabelENExDropDownList.text = objEditRegionFldsEx.objFieldTabENEx.caption;
        objASPLabelENExDropDownList.objEditRegionFldsEx = objEditRegionFldsEx;
        return objASPLabelENExDropDownList;

      default:
        strMsg = `查询区域字段转换成安卓控件时，类型:[${objEditRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        throw new Error(strMsg);
    }
  }
  /// <summary>
  /// 查询区域字段转换成安卓标签控件
  /// </summary>
  /// <param name="objQryRegionFldsEx">查询区域字段对象</param>
  /// <returns>转换成的安卓标签控件</returns>
  public static GetObjByQryFld(objQryRegionFldsEx: clsQryRegionFldsENEx4GC): ASPLabelEx {
    const strThisFuncName = this.GetObjByQryFld.name;
    let objASPLabelENEx;
    let objASPLabelENExTextBox;
    let objASPLabelENExDropDownList;
    let strMsg;
    switch (objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName) {
      case 'CheckBox':
        objASPLabelENEx = new ASPLabelEx();
        objASPLabelENEx.ctrlId = `lbl${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;

        objASPLabelENEx.width = 100;
        objASPLabelENEx.height = 0;
        objASPLabelENEx.text = objQryRegionFldsEx.objFieldTabENEx.caption;
        objASPLabelENEx.objQryRegionFldsEx = objQryRegionFldsEx;
        return objASPLabelENEx;
      case 'TextBox':
        objASPLabelENExTextBox = new ASPLabelEx();
        objASPLabelENExTextBox.ctrlId = `lbl${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPLabelENExTextBox.width = 100;
        objASPLabelENExTextBox.height = 22;
        objASPLabelENExTextBox.text = objQryRegionFldsEx.objFieldTabENEx.caption;
        objASPLabelENExTextBox.objQryRegionFldsEx = objQryRegionFldsEx;
        return objASPLabelENExTextBox;

      case 'DropDownList':
        objASPLabelENExDropDownList = new ASPLabelEx();
        objASPLabelENExDropDownList.ctrlId = `lbl${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPLabelENExDropDownList.width = 100;
        objASPLabelENExDropDownList.height = 0;
        objASPLabelENExDropDownList.text = objQryRegionFldsEx.objFieldTabENEx.caption;
        objASPLabelENExDropDownList.objQryRegionFldsEx = objQryRegionFldsEx;

        return objASPLabelENExDropDownList;

      default:
        strMsg = `查询区域字段转换成安卓控件时，类型:[${objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！(${this.prototype.constructor.name}.${strThisFuncName})`;
        throw new Error(strMsg);
    }
  }
}
