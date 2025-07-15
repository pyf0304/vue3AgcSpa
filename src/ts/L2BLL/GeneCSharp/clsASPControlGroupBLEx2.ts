import { ASPControlEx } from '@/ts/L0Entity/GeneCSharp/ASPControlEx';
import { ASPCheckBoxEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPCheckBoxENEx';
import { ASPCompareValidatorEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPCompareValidatorENEx';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { ASPDropDownListEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDropDownListENEx';
import { ASPLabelEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLabelENEx';
import { ASPSpanEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPSpanENEx';
import { ASPTextAreaEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPTextAreaENEx';
import { ASPTextBoxEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPTextBoxENEx';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsDGRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx';
import { clsDetailRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsENEx';
import { clsDetailRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsENEx4GC';
import { clsEditRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsEN';
import { clsEditRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx';
import { clsEditRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx4GC';
import { clsExcelExportRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsENEx';
import { clsFeatureRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx';
import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
import { clsQryRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx';
import { clsQryRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx4GC';
import { clsASPControlBLEx } from '@/ts/L2BLL/GeneCSharp/clsASPControlBLEx';
import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

import { GetObjValueOfKey } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const ASPControlGroup_Controller = 'ASPControlGroup2';
export const ASPControlGroup_ConstructorName = 'ASPControlGroup2';

export function GetCtrlIdDG(objDGRegionFldsEx: clsDGRegionFldsENEx): string {
  const strThisFuncName = GetCtrlIdDG.name;
  let strFldName = objDGRegionFldsEx.fldName;
  if (objDGRegionFldsEx.isUseFunc == true) {
    if (IsNullOrEmpty(objDGRegionFldsEx.dataPropertyName) == false) {
      strFldName = objDGRegionFldsEx.dataPropertyName;
    }
  }
  let strCtrlId = '';
  let strMsg = '';
  switch (objDGRegionFldsEx.ctlTypeId) {
    case enumCtlType.Button_01:
      strCtrlId = `btn${strFldName}`;
      break;
    case enumCtlType.CheckBox_02:
      strCtrlId = `chk${strFldName}`;
      break;
    case enumCtlType.Label_10:
      strCtrlId = `lbl${strFldName}`;
      break;
    case enumCtlType.TextBox_16:
      strCtrlId = `txt${strFldName}`;
      break;
    case enumCtlType.TextArea_41:
      strCtrlId = `txt${strFldName}`;
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      strCtrlId = `ddl${strFldName}`;
      break;
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      break;
    default:
      strMsg = `列表区域获取字段名:[${strFldName}]的ctrlId时，类型: [${objDGRegionFldsEx.ctlTypeName}]没有处理！(in ${ASPControlGroup_Controller}.${strThisFuncName})`;
      console.error(strMsg);
      throw new Error(strMsg);
  }

  return strCtrlId;
}

export function GetCtrlIdQuery(objQryRegionFldsEx: clsQryRegionFldsENEx): string {
  let strFldName = objQryRegionFldsEx.fldName;
  if (objQryRegionFldsEx.isUseFunc && IsNullOrEmpty(objQryRegionFldsEx.dataPropertyName) == false) {
    strFldName = objQryRegionFldsEx.dataPropertyName;
  }
  let strCtrlId = '';
  if (IsNullOrEmpty(strFldName) == true) {
    const strMsg = `查询区域获取ctrlId时，类型: [${objQryRegionFldsEx.ctlTypeName}], fldId:[${objQryRegionFldsEx.fldId}]为空，请检查！`;
    console.error(strMsg);
    throw Error(strMsg);
  }
  let strMsg = '';
  switch (objQryRegionFldsEx.ctlTypeId) {
    case enumCtlType.CheckBox_02:
      strCtrlId = `chk${strFldName}q`;
      break;
    case enumCtlType.TextBox_16:
      strCtrlId = `txt${strFldName}q`;
      break;
    case enumCtlType.TextArea_41:
      strCtrlId = `txt${strFldName}q`;
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      strCtrlId = `ddl${strFldName}q`;
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;
    default:
      strMsg = `查询区域获取ctrlId时，类型: [${objQryRegionFldsEx.ctlTypeName}]没有处理！`;
      console.error(strMsg);
      throw Error(strMsg);
  }

  return strCtrlId;
}

export async function GetCtrlIdQueryV2(objQryRegionFlds: clsQryRegionFldsEN): Promise<string> {
  if (IsNullOrEmpty(objQryRegionFlds.fldId) == true) {
    const strMsg = `在获取ctrlId时，关键字不能为空！`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
  let objFieldTab;
  if (IsNullOrEmpty(objQryRegionFlds.outFldId) == false) {
    objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      objQryRegionFlds.outFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
  } else {
    objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      objQryRegionFlds.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
  }
  if (objFieldTab == null) return '';

  const strFldName = objFieldTab.fldName;
  let strCtrlId = '';
  let strMsg = '';
  let objCtlTypeAbbr;
  switch (objQryRegionFlds.ctlTypeId) {
    case enumCtlType.CheckBox_02:
      strCtrlId = `chk${strFldName}q`;
      break;
    case enumCtlType.TextBox_16:
      strCtrlId = `txt${strFldName}q`;
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      strCtrlId = `ddl${strFldName}q`;
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;
    default:
      objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objQryRegionFlds.ctlTypeId);
      if (objCtlTypeAbbr == null) {
        const strMsg = Format(
          '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
          enumCtlType.Button_01,
        );
        console.error(strMsg);
        alert(strMsg);
        return '';
      }
      strMsg = `查询区域获取ctrlId时，类型: [${objCtlTypeAbbr.ctlTypeName}]没有处理！`;
      throw new Error(strMsg);
  }

  return strCtrlId;
}
export function GetCtrlIdEdit(objEditRegionFldsEx: clsEditRegionFldsENEx): string {
  let strCtrlId = '';
  let strMsg = '';
  switch (objEditRegionFldsEx.ctlTypeId) {
    case enumCtlType.CheckBox_02:
      strCtrlId = `chk${objEditRegionFldsEx.fldName}`;
      break;
    case enumCtlType.TextBox_16:
      strCtrlId = `txt${objEditRegionFldsEx.fldName}`;
      break;
    case enumCtlType.TextArea_41:
      strCtrlId = `txt${objEditRegionFldsEx.fldName}`;
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      strCtrlId = `ddl${objEditRegionFldsEx.fldName}`;
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;
    default:
      strMsg = `编辑区域获取ctrlId时，类型: [${objEditRegionFldsEx.ctlTypeName}]没有处理！`;
      throw new Error(strMsg);
  }

  return strCtrlId;
}

export async function GetCtrlIdEditV2(objEditRegionFlds: clsEditRegionFldsEN): Promise<string> {
  if (IsNullOrEmpty(objEditRegionFlds.fldId) == true) {
    const strMsg = `在获取ctrlId时，关键字不能为空！`;
    console.error(strMsg);
    throw new Error(strMsg);
  }

  const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    objEditRegionFlds.fldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objFieldTab == null) return '';
  const strFldName = objFieldTab.fldName;
  let strCtrlId = '';
  let strMsg = '';
  let objCtlTypeAbbr;
  switch (objEditRegionFlds.ctlTypeId) {
    case enumCtlType.CheckBox_02:
      strCtrlId = `chk${strFldName}`;
      break;
    case enumCtlType.TextBox_16:
      strCtrlId = `txt${strFldName}`;
      break;
    case enumCtlType.TextArea_41:
      strCtrlId = `txt${strFldName}`;
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      strCtrlId = `ddl${strFldName}`;
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;
    default:
      objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objEditRegionFlds.ctlTypeId);
      if (objCtlTypeAbbr == null) {
        const strMsg = Format(
          '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
          enumCtlType.Button_01,
        );
        console.error(strMsg);
        alert(strMsg);
        return '';
      }
      strMsg = `编辑区域获取ctrlId时，类型: [${objCtlTypeAbbr.ctlTypeName}]没有处理！`;
      throw new Error(strMsg);
  }

  return strCtrlId;
}

export function GetCtrlIdDetail4GC(objDetailRegionFldsEx: clsDetailRegionFldsENEx4GC): string {
  let strFldName = objDetailRegionFldsEx.fldName;
  if (IsNullOrEmpty(objDetailRegionFldsEx.outFldId) == false) {
    if (IsNullOrEmpty(objDetailRegionFldsEx.dataPropertyName) == false) {
      strFldName = objDetailRegionFldsEx.dataPropertyName;
    }
  }
  let strCtrlId = '';
  let strMsg = '';
  switch (objDetailRegionFldsEx.ctlTypeId) {
    case enumCtlType.CheckBox_02:
      strCtrlId = `chk${strFldName}d`;
      break;
    case enumCtlType.Label_10:
      strCtrlId = `lbl${strFldName}d`;
      break;
    case enumCtlType.TextBox_16:
      strCtrlId = `txt${strFldName}d`;
      break;
    case enumCtlType.TextArea_41:
      strCtrlId = `txt${strFldName}d`;
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      strCtrlId = `ddl${strFldName}d`;
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;
    default:
      strMsg = `详细区域获取ctrlId时，类型: [${objDetailRegionFldsEx.ctlTypeName}]没有处理！`;
      throw new Error(strMsg);
  }

  return strCtrlId;
}
export function GetCtrlIdDetail(objDetailRegionFldsEx: clsDetailRegionFldsENEx): string {
  let strFldName = objDetailRegionFldsEx.fldName;
  if (objDetailRegionFldsEx.isUseFunc == true) {
    if (IsNullOrEmpty(objDetailRegionFldsEx.dataPropertyName) == false) {
      strFldName = objDetailRegionFldsEx.dataPropertyName;
    }
  }
  let strCtrlId = '';
  let strMsg = '';
  switch (objDetailRegionFldsEx.ctlTypeId) {
    case enumCtlType.CheckBox_02:
      strCtrlId = `chk${strFldName}d`;
      break;
    case enumCtlType.Label_10:
      strCtrlId = `lbl${strFldName}d`;
      break;
    case enumCtlType.TextBox_16:
      strCtrlId = `txt${strFldName}d`;
      break;
    case enumCtlType.TextArea_41:
      strCtrlId = `txt${strFldName}d`;
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      strCtrlId = `ddl${strFldName}d`;
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;
    default:
      strMsg = `详细区域获取ctrlId时，类型: [${objDetailRegionFldsEx.ctlTypeName}]没有处理！`;
      throw new Error(strMsg);
  }

  return strCtrlId;
}

export function GetCtrlIdExcelExport(
  objExcelExportRegionFldsEx: clsExcelExportRegionFldsENEx,
): string {
  let strFldName = objExcelExportRegionFldsEx.fldName;
  if (objExcelExportRegionFldsEx.isUseFunc == true) {
    if (IsNullOrEmpty(objExcelExportRegionFldsEx.dataPropertyName) == false) {
      strFldName = objExcelExportRegionFldsEx.dataPropertyName;
    }
  }
  const strCtrlId = `txt${strFldName}`;

  return strCtrlId;
}
export function GetCtrlIdFeature(objFeatureRegionFldsEx: clsFeatureRegionFldsENEx): string {
  let strCtrlId = '';
  let strMsg = '';
  switch (objFeatureRegionFldsEx.ctlTypeId) {
    case enumCtlType.Button_01:
      strCtrlId = objFeatureRegionFldsEx.buttonName;
      break;
    case enumCtlType.Label_10:
      strCtrlId = objFeatureRegionFldsEx.buttonName;
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;
    case '':
      strCtrlId = objFeatureRegionFldsEx.buttonName;
      break;
    default:
      if (IsNullOrEmpty(objFeatureRegionFldsEx.ctrlId) == false)
        return objFeatureRegionFldsEx.ctrlId;
      strMsg = `功能区域获取ctrlId时，类型: [${objFeatureRegionFldsEx.ctlTypeName}]没有处理！`;
      throw new Error(strMsg);
  }

  return strCtrlId;
}

export function GetJsCtrlTypeByCtlTypeId(strCtlTypeId: string): string {
  let strMsg = '';
  switch (strCtlTypeId) {
    case enumCtlType.Button_01:
      return 'input';
    case enumCtlType.CheckBox_02:
      return 'input';
    case enumCtlType.Label_10:
      return 'span';
    case enumCtlType.TextBox_16:
      return 'input';
    case enumCtlType.TextArea_41:
      return 'textarea';
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      return 'select';
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      return '';
    default:
      strMsg = `查询区域获取CtrlType时，类型: [${strCtlTypeId}]没有处理！`;
      console.error(strMsg);
      throw Error(strMsg);
  }
}

export function GetControlGroup_Asp_Detail(
  objDetailRegionFldsEx: clsDetailRegionFldsENEx4GC,
  strTabName: string,
  objDR: object,
): ASPControlGroupEx {
  if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
  const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
  objASPControlGroupENEx.ctrlId = Format('td{0}', objDetailRegionFldsEx.mId);
  const strFldName = objDetailRegionFldsEx.fldName;
  const objSpan: ASPSpanEx = new ASPSpanEx();
  //objSpan.is4PureHtml = bolIs4PureHtml;
  objSpan.isCaption = true;
  objSpan.colSpanCtrl = 1;

  objSpan.ctrlId = Format('spn{0}d', objDetailRegionFldsEx.fldName);
  if (ASPControlEx.objLabelStyleText == null) {
    objSpan.width = 100;
    objSpan.runat = 'client';
  } else {
    objSpan.width = ASPControlEx.objLabelStyleText.width;
    objSpan.runat = ASPControlEx.objLabelStyleText.runat;
  }
  //  objSpan.cssClass = "text-secondary text-right";
  objSpan.cssClass = 'col-form-label-sm text-right';

  //strCodeForCs.AppendFormat("\r\n" + "runat = \"{0}\" cssClass = \"text-secondary\">",
  //  objLabelStyle.runat);
  objSpan.text = objDetailRegionFldsEx.labelCaption;
  let strMsg = '';
  let objASPCheckBoxENEx;
  let objASPTextBoxENEx;
  let objASPTextAreaENEx;

  let objASPDropDownListENEx;
  let objASPLabelEx;
  switch (objDetailRegionFldsEx.ctlTypeId) {
    case enumCtlType.CheckBox_02:
      objASPCheckBoxENEx = new ASPCheckBoxEx();
      //objASPCheckBoxENEx.is4PureHtml = bolIs4PureHtml;
      objASPCheckBoxENEx.isCaption = false;
      objASPCheckBoxENEx.colSpanCtrl = objDetailRegionFldsEx.colSpan;
      objASPCheckBoxENEx.keyId = objDetailRegionFldsEx.mId.toString();
      objASPCheckBoxENEx.colIndex = objDetailRegionFldsEx.colIndex;
      objASPCheckBoxENEx.ctlTypeId = objDetailRegionFldsEx.ctlTypeId;
      //                objASPCheckBoxENEx.ctrlId = Format("chk{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);
      objASPCheckBoxENEx.ctrlId = GetCtrlIdDetail4GC(objDetailRegionFldsEx); // Format("chk{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);

      objASPCheckBoxENEx.width = 0;
      if (objDetailRegionFldsEx.width > 0) {
        objASPCheckBoxENEx.width = objDetailRegionFldsEx.width;
      }
      //objASPCheckBoxENEx.height = 22;
      objASPCheckBoxENEx.cssClass = 'form-control-sm';
      objASPCheckBoxENEx.text = objDetailRegionFldsEx.objFieldTabENEx.caption;
      objASPCheckBoxENEx.objDetailRegionFldsEx = objDetailRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPCheckBoxENEx);
      break;
    case enumCtlType.Label_10:
      objASPLabelEx = new ASPLabelEx();
      //objASPLabelEx.is4PureHtml = bolIs4PureHtml;
      objASPLabelEx.isCaption = false;
      objASPLabelEx.colSpanCtrl = objDetailRegionFldsEx.colSpan;
      objASPLabelEx.keyId = objDetailRegionFldsEx.mId.toString();
      objASPLabelEx.colIndex = objDetailRegionFldsEx.colIndex;
      objASPLabelEx.ctlTypeId = objDetailRegionFldsEx.ctlTypeId;

      //objASPLabelEx.ctrlId = Format("lbl{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);
      objASPLabelEx.ctrlId = GetCtrlIdDetail4GC(objDetailRegionFldsEx); // Format("chk{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);
      //console.error(1objASPLabelEx.ctrlId);
      objASPLabelEx.width = 0;
      if (objDetailRegionFldsEx.width > 0) {
        objASPLabelEx.width = objDetailRegionFldsEx.width;
      } else if (objASPLabelEx.colSpanCtrl > 1) {
        objASPLabelEx.width = 200 * objASPLabelEx.colSpanCtrl;
      }

      if (objDR != null) {
        const strValue = GetObjValueOfKey(objDR, strFldName);
        if (IsNullOrEmpty(strValue) == false) {
          objASPLabelEx.text = strValue.toString();
        }
      }

      if (IsNullOrEmpty(objASPLabelEx.text) == true) {
        objASPLabelEx.text = '[None]';
      }

      //objASPLabelEx.height = 22;
      objASPLabelEx.cssClass = 'text-primary';
      objASPLabelEx.objDetailRegionFldsEx = objDetailRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objSpan);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPLabelEx);
      break;

    case enumCtlType.TextBox_16:
      objASPTextBoxENEx = new ASPTextBoxEx();
      //objASPTextBoxENEx.is4PureHtml = bolIs4PureHtml;
      objASPTextBoxENEx.isCaption = false;
      objASPTextBoxENEx.colSpanCtrl = objDetailRegionFldsEx.colSpan;
      objASPTextBoxENEx.keyId = objDetailRegionFldsEx.mId.toString();
      objASPTextBoxENEx.colIndex = objDetailRegionFldsEx.colIndex;
      objASPTextBoxENEx.ctlTypeId = objDetailRegionFldsEx.ctlTypeId;

      //objASPTextBoxENEx.ctrlId = Format("txt{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);
      objASPTextBoxENEx.ctrlId = GetCtrlIdDetail4GC(objDetailRegionFldsEx); // Format("chk{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);

      objASPTextBoxENEx.width = 200;
      if (objDetailRegionFldsEx.width > 0) {
        objASPTextBoxENEx.width = objDetailRegionFldsEx.width;
      } else if (objASPTextBoxENEx.colSpanCtrl > 1) {
        objASPTextBoxENEx.width = 200 * objASPTextBoxENEx.colSpanCtrl;
      }
      //objASPTextBoxENEx.height = 22;
      objASPTextBoxENEx.cssClass = 'form-control-sm';
      objASPTextBoxENEx.objDetailRegionFldsEx = objDetailRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objSpan);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPTextBoxENEx);
      break;
    case enumCtlType.TextArea_41:
      objASPTextAreaENEx = new ASPTextAreaEx();
      //objASPTextAreaENEx.is4PureHtml = bolIs4PureHtml;
      objASPTextAreaENEx.isCaption = false;
      objASPTextAreaENEx.colSpanCtrl = objDetailRegionFldsEx.colSpan;
      objASPTextAreaENEx.keyId = objDetailRegionFldsEx.mId.toString();
      objASPTextAreaENEx.colIndex = objDetailRegionFldsEx.colIndex;
      objASPTextAreaENEx.ctlTypeId = objDetailRegionFldsEx.ctlTypeId;

      //objASPTextAreaENEx.ctrlId = Format("txt{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);
      objASPTextAreaENEx.ctrlId = GetCtrlIdDetail4GC(objDetailRegionFldsEx); // Format("chk{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);

      objASPTextAreaENEx.width = 200;
      if (objDetailRegionFldsEx.width > 0) {
        objASPTextAreaENEx.width = objDetailRegionFldsEx.width;
      } else if (objASPTextAreaENEx.colSpanCtrl > 1) {
        objASPTextAreaENEx.width = 200 * objASPTextAreaENEx.colSpanCtrl;
      }
      //objASPTextAreaENEx.height = 22;
      objASPTextAreaENEx.cssClass = 'form-control-sm';
      objASPTextAreaENEx.objDetailRegionFldsEx = objDetailRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objSpan);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPTextAreaENEx);
      break;
    case enumCtlType.DropDownList_06:
      objASPDropDownListENEx = new ASPLabelEx();
      //objASPDropDownListENEx.is4PureHtml = bolIs4PureHtml;
      objASPDropDownListENEx.isCaption = false;
      objASPDropDownListENEx.colSpanCtrl = objDetailRegionFldsEx.colSpan;
      objASPDropDownListENEx.keyId = objDetailRegionFldsEx.mId.toString();
      objASPDropDownListENEx.colIndex = objDetailRegionFldsEx.colIndex;
      objASPDropDownListENEx.ctlTypeId = objDetailRegionFldsEx.ctlTypeId;

      //                objASPDropDownListENEx.ctrlId = Format("ddl{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);
      objASPDropDownListENEx.ctrlId = GetCtrlIdDetail4GC(objDetailRegionFldsEx); // Format("chk{0}d", objDetailRegionFldsEx.objFieldTabENEx.fldName);

      objASPDropDownListENEx.width = 0;
      if (objDetailRegionFldsEx.width > 0) {
        objASPDropDownListENEx.width = objDetailRegionFldsEx.width;
      }
      //objASPDropDownListENEx.height = 22;
      objASPDropDownListENEx.cssClass = 'form-control-sm';
      objASPDropDownListENEx.objDetailRegionFldsEx = objDetailRegionFldsEx;
      objASPDropDownListENEx.fldName = objDetailRegionFldsEx.objFieldTabENEx.fldName;
      objASPDropDownListENEx.tabName = strTabName; //objDetailRegionFldsEx.tabName;

      objASPControlGroupENEx.arrSubAspControlLst2.push(objSpan);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPDropDownListENEx);
      break;
    // case enumCtlType.CacheClassifyField_37:
    //   break;
    case enumCtlType.GivenValue_35:
      break;

    default:
      strMsg = Format(
        '详细区域字段转换成Asp控件时，类型：[{0}]没有处理！',
        objDetailRegionFldsEx.objCtlTypeAbbr.ctlTypeName,
      );
      console.log('GetControlGroup_Asp_Detail:strMsg', strMsg);
      throw new Error(strMsg);
  }
  if (objDetailRegionFldsEx.ctlTypeId == enumCtlType.TextBox_16) {
    const objCompareValidator: ASPCompareValidatorEx = new ASPCompareValidatorEx();
    objCompareValidator.ctrlId = Format('ComValid{0}d', objDetailRegionFldsEx.fldName);
    objCompareValidator.isCaption = false;
    objCompareValidator.colSpanCtrl = 1;
    objCompareValidator.isMergeToPreviousControl = true;
    objCompareValidator.runat = 'server';
    objCompareValidator.cssClass = 'errMsg';
    objCompareValidator.ControlToValidate = objDetailRegionFldsEx.ctrlId;
    objCompareValidator.Operator = 'DataTypeCheck';
    objCompareValidator.EnableClientScript = 'false';
    //objCompareValidator.runat = "server";

    switch (objDetailRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType) {
      case 'int':
      case 'short':
      case 'long':
        objCompareValidator.type = 'Integer';
        objCompareValidator.ErrorMessage = '请输入整型数值!';
        objASPControlGroupENEx.arrSubAspControlLst2.push(objCompareValidator);
        //strCodeForCs.AppendFormat("\r\n" + "<asp:CompareValidator id = \"ComValid{0}\" runat = \"server\" cssClass = \"errMsg\" ErrorMessage = \"请输入整型数值!\" ControlToValidate = \"{1}\" ",
        //    objDetailRegionFldsEx.fldName(), objDetailRegionFldsEx.ctrlId());
        //strCodeForCs.AppendFormat("\r\n" + "Type = \"Integer\" Operator = \"DataTypeCheck\" EnableClientScript = \"false\">");
        //strCodeForCs.AppendFormat("\r\n" + "</asp:CompareValidator>");
        break;
      case 'DateTime':
        objCompareValidator.type = 'Date';
        objCompareValidator.ErrorMessage = '请输入日期型数值!';
        objASPControlGroupENEx.arrSubAspControlLst2.push(objCompareValidator);
        //strCodeForCs.AppendFormat("\r\n" + "<asp:CompareValidator id = \"ComValid{0}\" runat = \"server\" cssClass = \"errMsg\" ErrorMessage = \"请输入日期型数值!\" ControlToValidate = \"{1}\" ",
        //    objDetailRegionFldsEx.fldName(), objDetailRegionFldsEx.ctrlId());
        //strCodeForCs.AppendFormat("\r\n" + "Type = \"Date\" Operator = \"DataTypeCheck\" EnableClientScript = \"false\">");
        //strCodeForCs.AppendFormat("\r\n" + "</asp:CompareValidator>");
        break;
      case 'double':
        objCompareValidator.type = 'Double';
        objCompareValidator.ErrorMessage = '请输入浮点型数值!';
        objASPControlGroupENEx.arrSubAspControlLst2.push(objCompareValidator);
        //strCodeForCs.AppendFormat("\r\n" + "<asp:CompareValidator id = \"ComValid{0}\" runat = \"server\" cssClass = \"errMsg\" ErrorMessage = \"请输入浮点型数值!\" ControlToValidate = \"{1}\" ",
        //    objDetailRegionFldsEx.fldName(), objDetailRegionFldsEx.ctrlId());
        //strCodeForCs.AppendFormat("\r\n" + "Type = \"Double\" Operator = \"DataTypeCheck\" EnableClientScript = \"false\">");
        //strCodeForCs.AppendFormat("\r\n" + "</asp:CompareValidator>");
        break;

      case 'float':
        objCompareValidator.type = 'Double';
        objCompareValidator.ErrorMessage = '请输入浮点型数值!';
        objASPControlGroupENEx.arrSubAspControlLst2.push(objCompareValidator);
        //strCodeForCs.AppendFormat("\r\n" + "<asp:CompareValidator id = \"ComValid{0}\" runat = \"server\" cssClass = \"errMsg\" ErrorMessage = \"请输入浮点型数值!\" ControlToValidate = \"{1}\" ",
        //    objDetailRegionFldsEx.fldName(), objDetailRegionFldsEx.ctrlId());
        //strCodeForCs.AppendFormat("\r\n" + "Type = \"Double\" Operator = \"DataTypeCheck\" EnableClientScript = \"false\">");
        //strCodeForCs.AppendFormat("\r\n" + "</asp:CompareValidator>");
        break;
    }
  }
  return objASPControlGroupENEx;
}

export function GetControlGroup_Asp_Edit(
  objEditRegionFldsEx: clsEditRegionFldsENEx4GC,
  strTabName: string,
): ASPControlGroupEx {
  if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
  const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
  objASPControlGroupENEx.ctrlId = Format('td{0}', objEditRegionFldsEx.mId);
  objASPControlGroupENEx.keyId = objEditRegionFldsEx.mId.toString();
  const objLabel: ASPLabelEx = new ASPLabelEx();
  //objLabel.is4PureHtml = bolIs4PureHtml;
  objLabel.ctrlId = `lbl${objEditRegionFldsEx.fldName}`;

  objLabel.isCaption = true;
  objLabel.colSpanCtrl = 1;
  //objLabel.onClick4Html = Format("lblClick('{0}')", objLabel.ctrlId);
  objLabel.ctlTypeId = enumCtlType.Label_10;

  if (ASPControlEx.objLabelStyleText == null) {
    objLabel.width = 120;
    objLabel.runat = 'false';
  } else {
    objLabel.width = ASPControlEx.objLabelStyleText.width;
    objLabel.runat = ASPControlEx.objLabelStyleText.runat;
  }
  //objLabel.height = ASPControlEx.objLabelStyleText.height;
  //  objLabel.cssClass = "text-secondary text-right";
  objLabel.cssClass = 'col-form-label-sm text-right';

  //strCodeForCs.AppendFormat("\r\n" + "runat = \"{0}\" cssClass = \"text-secondary\">",
  //  objLabelStyle.runat);
  objLabel.text = objEditRegionFldsEx.labelCaption;
  let strMsg = '';
  let objASPCheckBoxENEx;
  let objASPTextBoxENEx;
  let objASPTextAreaENEx;
  let objASPDropDownListENEx;
  switch (objEditRegionFldsEx.objCtlTypeAbbr.ctlTypeId) {
    case '':
      break;
    case enumCtlType.CheckBox_02:
      objASPCheckBoxENEx = new ASPCheckBoxEx();
      //objASPCheckBoxENEx.is4PureHtml = bolIs4PureHtml;
      objASPCheckBoxENEx.ctrlId = `chk${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
      //objASPCheckBoxENEx.onClick4Html = Format("chkClick('{0}')", objASPCheckBoxENEx.ctrlId);
      objASPCheckBoxENEx.isCaption = false;
      objASPCheckBoxENEx.colSpanCtrl = objEditRegionFldsEx.colSpan;
      // if (objASPCheckBoxENEx.colSpanCtrl > 1) {
      //   const ss = '';
      // }
      objASPCheckBoxENEx.keyId = objEditRegionFldsEx.mId.toString();
      objASPCheckBoxENEx.ctlTypeId = objEditRegionFldsEx.ctlTypeId;

      objASPCheckBoxENEx.width = 200;
      if (objEditRegionFldsEx.width > 0) {
        objASPCheckBoxENEx.width = objEditRegionFldsEx.width;
      }
      //objASPCheckBoxENEx.height = 22;
      objASPCheckBoxENEx.cssClass = 'form-control-sm';
      objASPCheckBoxENEx.text = objEditRegionFldsEx.objFieldTabENEx.caption;
      objASPCheckBoxENEx.objEditRegionFldsEx = objEditRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPCheckBoxENEx);
      break;
    case enumCtlType.TextBox_16:
      objASPTextBoxENEx = new ASPTextBoxEx();
      //objASPTextBoxENEx.is4PureHtml = bolIs4PureHtml;
      objASPTextBoxENEx.ctrlId = `txt${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
      //objASPTextBoxENEx.onClick4Html = Format("txtClick('{0}')", objASPTextBoxENEx.ctrlId);
      objASPTextBoxENEx.isCaption = false;
      objASPTextBoxENEx.colSpanCtrl = objEditRegionFldsEx.colSpan;
      objASPTextBoxENEx.keyId = objEditRegionFldsEx.mId.toString();
      objASPTextBoxENEx.colIndex = objEditRegionFldsEx.colIndex;
      objASPTextBoxENEx.ctlTypeId = objEditRegionFldsEx.ctlTypeId;

      objASPTextBoxENEx.width = 200;
      if (objEditRegionFldsEx.width > 0) {
        objASPTextBoxENEx.width = objEditRegionFldsEx.width;
      }

      //objASPTextBoxENEx.height = 22;
      objASPTextBoxENEx.cssClass = 'form-control-sm';
      objASPTextBoxENEx.objEditRegionFldsEx = objEditRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objLabel);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPTextBoxENEx);
      break;
    case enumCtlType.TextArea_41:
      objASPTextAreaENEx = new ASPTextAreaEx();
      //objASPTextAreaENEx.is4PureHtml = bolIs4PureHtml;
      objASPTextAreaENEx.ctrlId = `txt${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
      //objASPTextAreaENEx.onClick4Html = Format("txtClick('{0}')", objASPTextAreaENEx.ctrlId);
      objASPTextAreaENEx.isCaption = false;
      objASPTextAreaENEx.colSpanCtrl = objEditRegionFldsEx.colSpan;
      objASPTextAreaENEx.keyId = objEditRegionFldsEx.mId.toString();
      objASPTextAreaENEx.colIndex = objEditRegionFldsEx.colIndex;
      objASPTextAreaENEx.ctlTypeId = objEditRegionFldsEx.ctlTypeId;

      objASPTextAreaENEx.width = 200;
      if (objEditRegionFldsEx.width > 0) {
        objASPTextAreaENEx.width = objEditRegionFldsEx.width;
      }

      //objASPTextAreaENEx.height = 22;
      objASPTextAreaENEx.cssClass = 'form-control-sm';
      objASPTextAreaENEx.objEditRegionFldsEx = objEditRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objLabel);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPTextAreaENEx);
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      objASPDropDownListENEx = new ASPDropDownListEx();
      //objASPDropDownListENEx.is4PureHtml = bolIs4PureHtml;
      objASPDropDownListENEx.ctrlId = `ddl${objEditRegionFldsEx.objFieldTabENEx.fldName}`;
      //objASPDropDownListENEx.onClick4Html = Format("ddlClick('{0}')", objASPDropDownListENEx.ctrlId);
      objASPDropDownListENEx.isCaption = false;
      objASPDropDownListENEx.colSpanCtrl = objEditRegionFldsEx.colSpan;
      objASPDropDownListENEx.keyId = objEditRegionFldsEx.mId.toString();
      objASPDropDownListENEx.colIndex = objEditRegionFldsEx.colIndex;
      objASPDropDownListENEx.ctlTypeId = objEditRegionFldsEx.ctlTypeId;
      objASPDropDownListENEx.width = 200;
      if (objEditRegionFldsEx.width > 0) {
        objASPDropDownListENEx.width = objEditRegionFldsEx.width;
      }

      //objASPDropDownListENEx.height = 22;
      objASPDropDownListENEx.cssClass = 'form-control-sm';
      objASPDropDownListENEx.objEditRegionFldsEx = objEditRegionFldsEx;
      objASPDropDownListENEx.fldName = objEditRegionFldsEx.objFieldTabENEx.fldName;
      objASPDropDownListENEx.tabName = strTabName;
      objASPDropDownListENEx.ddlItemsOptionId = objEditRegionFldsEx.ddlItemsOptionId;
      objASPDropDownListENEx.dsTabName = objEditRegionFldsEx.dsTabName;
      objASPDropDownListENEx.keyId = objEditRegionFldsEx.mId.toString();

      objASPControlGroupENEx.arrSubAspControlLst2.push(objLabel);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPDropDownListENEx);
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;

    default:
      strMsg = `编辑区域字段转换成Asp控件时，类型: [${objEditRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！`;
      throw new Error(strMsg);
  }
  const objCompareValidator: ASPCompareValidatorEx = new ASPCompareValidatorEx();
  objCompareValidator.ctrlId = `ComValid${objEditRegionFldsEx.fldName}`;
  objCompareValidator.runat = 'server';
  objCompareValidator.cssClass = 'errMsg';
  objCompareValidator.ControlToValidate = objEditRegionFldsEx.ctrlId;
  objCompareValidator.Operator = 'DataTypeCheck';
  objCompareValidator.EnableClientScript = 'false';
  //objCompareValidator.runat = "server";

  switch (objEditRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType) {
    case 'number':
    case 'short':
      objCompareValidator.type = 'Integer';
      objCompareValidator.ErrorMessage = '请输入整型数值!';
      objASPControlGroupENEx.arrSubAspControlLst2.push(objCompareValidator);
      //strCodeForCs.AppendFormat("\r\n" + "<asp:CompareValidator id = \"ComValid{0}\" runat = \"server\" cssClass = \"errMsg\" ErrorMessage = \"请输入整型数值!\" ControlToValidate = \"{1}\" ",
      //    objEditRegionFldsEx.fldName, objEditRegionFldsEx.ctrlId);
      //strCodeForCs.AppendFormat("\r\n" + "Type = \"Integer\" Operator = \"DataTypeCheck\" EnableClientScript = \"false\">");
      //strCodeForCs.AppendFormat("\r\n" + "</asp:CompareValidator>");
      break;
    case 'DateTime':
      objCompareValidator.type = 'Date';
      objCompareValidator.ErrorMessage = '请输入日期型数值!';
      objASPControlGroupENEx.arrSubAspControlLst2.push(objCompareValidator);
      //strCodeForCs.AppendFormat("\r\n" + "<asp:CompareValidator id = \"ComValid{0}\" runat = \"server\" cssClass = \"errMsg\" ErrorMessage = \"请输入日期型数值!\" ControlToValidate = \"{1}\" ",
      //    objEditRegionFldsEx.fldName, objEditRegionFldsEx.ctrlId);
      //strCodeForCs.AppendFormat("\r\n" + "Type = \"Date\" Operator = \"DataTypeCheck\" EnableClientScript = \"false\">");
      //strCodeForCs.AppendFormat("\r\n" + "</asp:CompareValidator>");
      break;
    case 'double':
      objCompareValidator.type = 'Double';
      objCompareValidator.ErrorMessage = '请输入浮点型数值!';
      objASPControlGroupENEx.arrSubAspControlLst2.push(objCompareValidator);
      //strCodeForCs.AppendFormat("\r\n" + "<asp:CompareValidator id = \"ComValid{0}\" runat = \"server\" cssClass = \"errMsg\" ErrorMessage = \"请输入浮点型数值!\" ControlToValidate = \"{1}\" ",
      //    objEditRegionFldsEx.fldName, objEditRegionFldsEx.ctrlId);
      //strCodeForCs.AppendFormat("\r\n" + "Type = \"Double\" Operator = \"DataTypeCheck\" EnableClientScript = \"false\">");
      //strCodeForCs.AppendFormat("\r\n" + "</asp:CompareValidator>");
      break;

    case 'float':
      objCompareValidator.type = 'Double';
      objCompareValidator.ErrorMessage = '请输入浮点型数值!';
      objASPControlGroupENEx.arrSubAspControlLst2.push(objCompareValidator);
      //strCodeForCs.AppendFormat("\r\n" + "<asp:CompareValidator id = \"ComValid{0}\" runat = \"server\" cssClass = \"errMsg\" ErrorMessage = \"请输入浮点型数值!\" ControlToValidate = \"{1}\" ",
      //    objEditRegionFldsEx.fldName, objEditRegionFldsEx.ctrlId);
      //strCodeForCs.AppendFormat("\r\n" + "Type = \"Double\" Operator = \"DataTypeCheck\" EnableClientScript = \"false\">");
      //strCodeForCs.AppendFormat("\r\n" + "</asp:CompareValidator>");
      break;
  }
  return objASPControlGroupENEx;
}

export function GetControlGroup_Asp_Query(
  objQryRegionFldsEx: clsQryRegionFldsENEx4GC,
  strTabName: string,
  strItemName4MultiModel = '',
  bolIs4PureHtml = false,
): ASPControlGroupEx {
  if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
  const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
  objASPControlGroupENEx.ctrlId = Format('td{0}', objQryRegionFldsEx.mId);
  const objLabel: ASPLabelEx = new ASPLabelEx();
  objLabel.is4PureHtml = bolIs4PureHtml;

  if (objQryRegionFldsEx.isForExtendClass) {
    objLabel.ctrlId = `lbl${objQryRegionFldsEx.dataPropertyName}q`;
    objLabel.fldName = objQryRegionFldsEx.dataPropertyName;
  } else {
    objLabel.ctrlId = `lbl${objQryRegionFldsEx.fldName}q`;
    objLabel.fldName = objQryRegionFldsEx.objFieldTabENEx.fldName;
  }
  objLabel.colSpanCtrl = 1;
  if (ASPControlEx.objLabelStyleText == null) {
    objLabel.width = 120;
    objLabel.runat = 'false';
  } else {
    objLabel.width = ASPControlEx.objLabelStyleText.width;
    objLabel.runat = ASPControlEx.objLabelStyleText.runat;
  }

  //objLabel.height = ASPControlEx.objLabelStyleText.height;

  objLabel.itemName4MultiModel = strItemName4MultiModel;

  objLabel.tabName = strTabName;

  objLabel.cssClass = 'col-form-label-sm text-right';
  objLabel.style = 'width:80px;';
  //strCodeForCs.AppendFormat("\r\n" + "runat = \"{0}\" cssClass = \"text-secondary\">",
  //  objLabelStyle.runat);
  objLabel.text = objQryRegionFldsEx.labelCaption;
  let strMsg = '';
  let objASPCheckBoxENEx;
  let objASPTextBoxENEx;
  let objASPTextAreaENEx;

  let objASPDropDownListENEx;
  switch (objQryRegionFldsEx.ctlTypeId) {
    case enumCtlType.CheckBox_02:
      objASPCheckBoxENEx = new ASPCheckBoxEx();
      objASPCheckBoxENEx.is4PureHtml = bolIs4PureHtml;
      if (objQryRegionFldsEx.isForExtendClass) {
        objASPCheckBoxENEx.ctrlId = `chk${objQryRegionFldsEx.dataPropertyName}q`;
        objASPCheckBoxENEx.fldName = objQryRegionFldsEx.dataPropertyName;
      } else {
        objASPCheckBoxENEx.ctrlId = `chk${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPCheckBoxENEx.fldName = objQryRegionFldsEx.objFieldTabENEx.fldName;
      }
      objASPCheckBoxENEx.colSpanCtrl = objQryRegionFldsEx.colSpan;
      //objASPCheckBoxENEx.onClick4Html = Format("chkClick('{0}')", objASPCheckBoxENEx.ctrlId);

      objASPCheckBoxENEx.itemName4MultiModel = strItemName4MultiModel;
      objASPCheckBoxENEx.keyId = objQryRegionFldsEx.mId.toString();

      objASPCheckBoxENEx.tabName = strTabName;

      objASPCheckBoxENEx.width = 200;
      if (objQryRegionFldsEx.width > 0) {
        objASPCheckBoxENEx.width = objQryRegionFldsEx.width;
      }
      //objASPCheckBoxENEx.height = 22;
      objASPCheckBoxENEx.cssClass = 'form-control-sm';

      objASPCheckBoxENEx.text = objQryRegionFldsEx.objFieldTabENEx.caption;
      objASPCheckBoxENEx.objQryRegionFldsEx = objQryRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPCheckBoxENEx);
      break;
    case enumCtlType.TextBox_16:
      objASPTextBoxENEx = new ASPTextBoxEx();
      objASPTextBoxENEx.is4PureHtml = bolIs4PureHtml;
      if (objQryRegionFldsEx.isForExtendClass) {
        objASPTextBoxENEx.ctrlId = `txt${objQryRegionFldsEx.dataPropertyName}q`;
        objASPTextBoxENEx.fldName = objQryRegionFldsEx.dataPropertyName;
      } else {
        objASPTextBoxENEx.ctrlId = `txt${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPTextBoxENEx.fldName = objQryRegionFldsEx.objFieldTabENEx.fldName;
      }
      objASPTextBoxENEx.colSpanCtrl = objQryRegionFldsEx.colSpan;
      //objASPTextBoxENEx.onClick4Html = Format("txtClick('{0}')", objASPTextBoxENEx.ctrlId);

      objASPTextBoxENEx.itemName4MultiModel = strItemName4MultiModel;
      objASPTextBoxENEx.keyId = objQryRegionFldsEx.mId.toString();

      objASPTextBoxENEx.tabName = strTabName;

      objASPTextBoxENEx.width = 200;
      if (objQryRegionFldsEx.width > 0) {
        objASPTextBoxENEx.width = objQryRegionFldsEx.width;
      }
      //objASPTextBoxENEx.height = 22;
      objASPTextBoxENEx.cssClass = 'form-control-sm';
      objASPTextBoxENEx.objQryRegionFldsEx = objQryRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objLabel);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPTextBoxENEx);
      break;
    case enumCtlType.TextArea_41:
      objASPTextAreaENEx = new ASPTextAreaEx();
      objASPTextAreaENEx.is4PureHtml = bolIs4PureHtml;
      if (objQryRegionFldsEx.isForExtendClass) {
        objASPTextAreaENEx.ctrlId = `txt${objQryRegionFldsEx.dataPropertyName}q`;
        objASPTextAreaENEx.fldName = objQryRegionFldsEx.dataPropertyName;
      } else {
        objASPTextAreaENEx.ctrlId = `txt${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPTextAreaENEx.fldName = objQryRegionFldsEx.objFieldTabENEx.fldName;
      }
      objASPTextAreaENEx.colSpanCtrl = objQryRegionFldsEx.colSpan;
      //objASPTextAreaENEx.onClick4Html = Format("txtClick('{0}')", objASPTextAreaENEx.ctrlId);

      objASPTextAreaENEx.itemName4MultiModel = strItemName4MultiModel;
      objASPTextAreaENEx.keyId = objQryRegionFldsEx.mId.toString();

      objASPTextAreaENEx.tabName = strTabName;

      objASPTextAreaENEx.width = 200;
      if (objQryRegionFldsEx.width > 0) {
        objASPTextAreaENEx.width = objQryRegionFldsEx.width;
      }
      //objASPTextAreaENEx.height = 22;
      objASPTextAreaENEx.cssClass = 'form-control-sm';
      objASPTextAreaENEx.objQryRegionFldsEx = objQryRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objLabel);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPTextAreaENEx);
      break;
    case enumCtlType.DropDownList_06:
    case enumCtlType.DropDownList_Bool_18:
      objASPDropDownListENEx = new ASPDropDownListEx();
      objASPDropDownListENEx.is4PureHtml = bolIs4PureHtml;
      if (objQryRegionFldsEx.isForExtendClass) {
        objASPDropDownListENEx.ctrlId = `ddl${objQryRegionFldsEx.dataPropertyName}q`;
        objASPDropDownListENEx.fldName = objQryRegionFldsEx.dataPropertyName;
      } else {
        objASPDropDownListENEx.ctrlId = `ddl${objQryRegionFldsEx.objFieldTabENEx.fldName}q`;
        objASPDropDownListENEx.fldName = objQryRegionFldsEx.objFieldTabENEx.fldName;
      }
      objASPDropDownListENEx.colSpanCtrl = objQryRegionFldsEx.colSpan;
      //objASPDropDownListENEx.onClick4Html = Format("ddlClick('{0}')", objASPDropDownListENEx.ctrlId);

      objASPDropDownListENEx.itemName4MultiModel = strItemName4MultiModel;
      objASPDropDownListENEx.keyId = objQryRegionFldsEx.mId.toString();

      objASPDropDownListENEx.tabName = strTabName;
      objASPDropDownListENEx.ddlItemsOptionId = objQryRegionFldsEx.ddlItemsOptionId;
      objASPDropDownListENEx.dsTabName = objQryRegionFldsEx.dsTabName;

      objASPDropDownListENEx.width = 200;
      if (objQryRegionFldsEx.width > 0) {
        objASPDropDownListENEx.width = objQryRegionFldsEx.width;
      }
      //objASPDropDownListENEx.height = 22;
      objASPDropDownListENEx.cssClass = 'form-control-sm';
      objASPDropDownListENEx.objQryRegionFldsEx = objQryRegionFldsEx;
      objASPControlGroupENEx.arrSubAspControlLst2.push(objLabel);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objASPDropDownListENEx);
      break;
    // case enumCtlType.CacheClassifyField_37:
    case enumCtlType.DefaultValue_36:
    case enumCtlType.GivenValue_35:
    case enumCtlType.ViewVariable_38:
      // case enumCtlType.sessionStorage_40:
      break;
    default:
      strMsg = `查询区域字段转换成Asp控件时，类型: [${objQryRegionFldsEx.objCtlTypeAbbr.ctlTypeName}]没有处理！`;
      throw new Error(strMsg);
  }

  return objASPControlGroupENEx;
}
