/// <summary>
/// ASPNET复选框(ASPNETCheckBox)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6Cs_Business:A_GenBusinessLogicExCode)

import { ASPCheckBoxEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPCheckBoxENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
/// <summary>
/// ASPNET复选框(ASPNETCheckBox)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6Cs_Business:A_GenBusinessLogicExCode)
/// </summary>
export class clsASPCheckBoxBLEx {
  public static GeneHtmlControl(objASPCheckBoxENEx: ASPCheckBoxEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFun_getASPNETID();
    // let strKey = '';
    // if (objASPCheckBoxENEx.mKey == '') {
    //   strKey = '';
    // } else {
    //   strKey = `key="${objASPCheckBoxENEx.mKey}"`;
    // }

    if (objASPCheckBoxENEx.isCheckBox == true) {
      const objInputCheckBox0: HTMLInputElement = document.createElement('input');
      objInputCheckBox0.type = 'checkbox';
      if (IsNullOrEmpty(objASPCheckBoxENEx.keyId) == false) {
        objInputCheckBox0.setAttribute('keyId', objASPCheckBoxENEx.keyId);
      }
      objInputCheckBox0.id = `${objASPCheckBoxENEx.ctrlId}0`;
      objInputCheckBox0.name = objASPCheckBoxENEx.ctrlName;
      //objInputCheckBox.Value = objASPCheckBoxENEx.text;
      objContainer.appendChild(objInputCheckBox0);
      return;
    }
    if (objASPCheckBoxENEx.parentId != 0 && objASPCheckBoxENEx.GetParentObj().parentId != 0) {
      const strRowType = objASPCheckBoxENEx.GetParentObj().GetParentObj().rowType;
      let objSpan1;
      let strMsg;
      switch (strRowType) {
        case 'headrow':
          objSpan1 = document.createElement('span');
          objSpan1.setAttribute('class', objASPCheckBoxENEx.class);
          objSpan1.id = objASPCheckBoxENEx.ctrlId;
          objSpan1.innerHTML = objASPCheckBoxENEx.caption;
          if (IsNullOrEmpty(objASPCheckBoxENEx.keyId) == false) {
            objSpan1.setAttribute('keyId', objASPCheckBoxENEx.keyId);
          }
          objContainer.appendChild(objSpan1);
          return;
        case 'datarow':
          return;
        case '':
          break;
        default:
          strMsg = Format(
            '行类型:{0}在函数的Switch中没有被处理。(In clsASPCheckBoxBLEx.GeneHtmlControl)',
            strRowType,
          );
          throw new Error(strMsg);
      }
    }
    //<span class="form-control form-control-sm" style = "display:inline-block;width:350px;" >
    //    <input id="CheckBox8" type = "checkbox" name = "CheckBox8" >
    //    <label for= "CheckBox8" > Asp: CheckBox控件 - CheckBox8 < /label>
    //        < /span >

    const objSpan: HTMLSpanElement = document.createElement('span');
    objSpan.setAttribute('class', objASPCheckBoxENEx.class);
    //objSpan.id = objASPCheckBoxENEx.ctrlId;
    objSpan.style.display = 'inline-block';
    if (objASPCheckBoxENEx.width > 0) {
      objSpan.style.width = Format('{0}px', objASPCheckBoxENEx.width);
    }
    if (IsNullOrEmpty(objASPCheckBoxENEx.keyId) == false) {
      objSpan.setAttribute('keyId', objASPCheckBoxENEx.keyId);
    }
    const objInputCheckBox: HTMLInputElement = document.createElement('input');
    objInputCheckBox.type = 'checkbox';
    objInputCheckBox.id = objASPCheckBoxENEx.ctrlId;
    if (IsNullOrEmpty(objASPCheckBoxENEx.keyId) == false) {
      objInputCheckBox.setAttribute('keyId', objASPCheckBoxENEx.keyId);
    }
    objInputCheckBox.name = objASPCheckBoxENEx.ctrlId;

    objInputCheckBox.setAttribute('ctrlId', objASPCheckBoxENEx.ctrlId);

    objInputCheckBox.addEventListener('click', (e) => {
      console.log(e);
      // eval(objASPCheckBoxENEx.onClick4Html);
    });

    //const objLabel: HTMLLabelElement = document.createElement("Label");
    //const objLabel: HTMLLabelElement = new HTMLLabelElement();
    //HtmlGenericControl objLabel = new HtmlGenericControl("Label");

    const objLabel: HTMLElement = document.createElement('Label');
    objLabel.setAttribute('for', objASPCheckBoxENEx.ctrlId);
    objLabel.innerText = objASPCheckBoxENEx.text;
    objSpan.appendChild(objInputCheckBox);
    objSpan.appendChild(objLabel);

    objContainer.appendChild(objSpan);
  }

  public static GeneHtmlObj(objASPCheckBoxENEx: ASPCheckBoxEx): HTMLSpanElement {
    //<span class="form-control form-control-sm" style = "display:inline-block;width:350px;" >
    //    <input id="CheckBox8" type = "checkbox" name = "CheckBox8" >
    //    <label for= "CheckBox8" > Asp: CheckBox控件 - CheckBox8 < /label>
    // < /span >

    const objSpan: HTMLSpanElement = document.createElement('span');
    objSpan.setAttribute('class', objASPCheckBoxENEx.class);
    //objSpan.id = objASPCheckBoxENEx.ctrlId;
    objSpan.style.display = 'inline-block';
    if (objASPCheckBoxENEx.width > 0) {
      objSpan.style.width = Format('{0}px', objASPCheckBoxENEx.width);
    }
    const objInputCheckBox: HTMLInputElement = document.createElement('input');
    objInputCheckBox.type = 'checkbox';
    objInputCheckBox.id = objASPCheckBoxENEx.ctrlId;
    if (IsNullOrEmpty(objASPCheckBoxENEx.keyId) == false) {
      objInputCheckBox.setAttribute('keyId', objASPCheckBoxENEx.keyId);
    }
    objInputCheckBox.name = objASPCheckBoxENEx.ctrlId;

    objInputCheckBox.setAttribute('ctrlId', objASPCheckBoxENEx.ctrlId);

    objInputCheckBox.addEventListener('click', (e) => {
      console.log(e);
      // eval(objASPCheckBoxENEx.onClick4Html);
    });

    objInputCheckBox.checked = objASPCheckBoxENEx.isChecked;

    //const objLabel: HTMLLabelElement = document.createElement("Label");
    //const objLabel: HTMLLabelElement = new HTMLLabelElement();
    //HtmlGenericControl objLabel = new HtmlGenericControl("Label");

    const objLabel: HTMLElement = document.createElement('Label');
    objLabel.setAttribute('for', objASPCheckBoxENEx.ctrlId);
    objLabel.innerText = objASPCheckBoxENEx.text;
    objSpan.appendChild(objInputCheckBox);
    objSpan.appendChild(objLabel);
    //objLabel.appendChild(objInputCheckBox);
    return objSpan;
  }

  ///// <summary>
  ///// 生成字段变量定义的代码
  ///// </summary>
  ///// <param name="objASPCheckBoxENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static Gen_FieldconstDef(objASPCheckBoxENEx: ASPCheckBoxEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    strCodeForCs.AppendFormat("\r\n" + "private CheckBox {0};",
  //        objASPCheckBoxENEx.ctrlId);
  //}
  ///// <summary>
  ///// 生成字段变量定义与脚本的绑定
  ///// </summary>
  ///// <param name="objASPCheckBoxENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static Gen_FieldconstBind(objASPCheckBoxENEx: ASPCheckBoxEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    //txtExamTypeId = (EditText)findViewById(R.id.txtExamTypeId);
  //    strCodeForCs.AppendFormat("\r\n" + "{0} = (CheckBox)findViewById(R.id.{0}); ",
  //        objASPCheckBoxENEx.ctrlId);
  //}

  ///// <summary>
  ///// 生成字段变量定义与脚本的绑定
  ///// </summary>
  ///// <param name="objASPCheckBoxENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static Gen_FieldconstBind4ArrayView(objASPCheckBoxENEx: ASPCheckBoxEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    //txtExamTypeId = (EditText)findViewById(R.id.txtExamTypeId);
  //    strCodeForCs.AppendFormat("\r\n" + "{0} = (CheckBox)view.findViewById(R.id.{0}); ",
  //        objASPCheckBoxENEx.ctrlId);

  //}

  ///// <summary>
  ///// 生成字段控件的获取控件值(查询区字段)
  ///// </summary>
  ///// <param name="objASPCheckBoxENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static Gen_GetValue4FieldCtrl4Qry(objASPCheckBoxENEx: ASPCheckBoxEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    string strTemp = objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName;

  //    strCodeForCs.AppendFormat("\r\n /// ({0})", clsStackTrace1.GetCurrClassFunction());
  //    strCodeForCs.AppendFormat("\r\n //获取{0}({1})的值", objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.caption,
  //        objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName);
  //    strCodeForCs.AppendFormat("\r\n public {0} get{1}_q()", objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.objDataTypeAbbrEN.javaType,
  //        strTemp);
  //    strCodeForCs.Append("\r\n {");
  //    //strCodeForCs.AppendFormat("\r\n return {0}.getText().toString();", objASPCheckBoxENEx.ctrlId);
  //    strCodeForCs.AppendFormat("\r\n return {0}.isChecked();", objASPCheckBoxENEx.ctrlId);
  //    strCodeForCs.Append("\r\n }");

  //}

  ///// <summary>
  ///// 生成字段控件的获取控件值(编辑区字段)
  ///// </summary>
  ///// <param name="objASPCheckBoxENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static Gen_GetValue4FieldCtrl4Edit(objASPCheckBoxENEx: ASPCheckBoxEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    string strTemp = objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName;

  //    strCodeForCs.AppendFormat("\r\n /// ({0})", clsStackTrace1.GetCurrClassFunction());
  //    strCodeForCs.AppendFormat("\r\n //获取{0}({1})的值", objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.caption,
  //       objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName);
  //    strCodeForCs.AppendFormat("\r\n public {0} get{1}()",
  //        objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.objDataTypeAbbrEN.javaType, strTemp);
  //    strCodeForCs.Append("\r\n {");
  //    //            strCodeForCs.AppendFormat("\r\n return {0}.getText().toString();", objASPCheckBoxENEx.ctrlId);
  //    strCodeForCs.AppendFormat("\r\n return {0}.isChecked();", objASPCheckBoxENEx.ctrlId);
  //    strCodeForCs.Append("\r\n }");

  //}

  ///// <summary>
  ///// 生成字段控件的设置控件值(查询区字段)
  ///// </summary>
  ///// <param name="objASPCheckBoxENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static Gen_SetValue4FieldCtrl4Qry(objASPCheckBoxENEx: ASPCheckBoxEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    string strTemp = objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName;

  //    strCodeForCs.AppendFormat("\r\n /// ({0})", clsStackTrace1.GetCurrClassFunction());
  //    strCodeForCs.AppendFormat("\r\n //设置{0}({1})的值", objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.caption,
  //      objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName);

  //    strCodeForCs.AppendFormat("\r\n public void set{0}_q({1} value)", strTemp, objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.objDataTypeAbbrEN.javaType);
  //    strCodeForCs.Append("\r\n{");
  //    strCodeForCs.AppendFormat("\r\n {0}.setChecked({1});", objASPCheckBoxENEx.ctrlId, "value");

  //    strCodeForCs.Append("\r\n }");
  //}

  //    /// <summary>
  //    /// 生成字段控件的设置控件值(编辑区字段)
  //    /// </summary>
  //    /// <param name="objASPCheckBoxENEx"></param>
  //    /// <param name="strCodeForCs"></param>
  //    public static Gen_SetValue4FieldCtrl4Edit(objASPCheckBoxENEx: ASPCheckBoxEx,
  //        strCodeForCs: StringBuilder)
  //    {
  //        string strTemp = objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName;
  //        strCodeForCs.AppendFormat("\r\n /// ({0})", clsStackTrace1.GetCurrClassFunction());
  //        strCodeForCs.AppendFormat("\r\n //设置{0}({1})的值", objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.caption,
  //            objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName);

  //        strCodeForCs.AppendFormat("\r\n public void set{0}({1} value)", strTemp, objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.objDataTypeAbbrEN.javaType);
  //        strCodeForCs.Append("\r\n{");
  //        strCodeForCs.AppendFormat("\r\n {0}.setChecked({1});",
  //objASPCheckBoxENEx.ctrlId, "value");

  //        strCodeForCs.Append("\r\n }");
  //    }

  ///// <summary>
  ///// 生成字段控件的设置控件值(查询区字段)
  ///// </summary>
  ///// <param name="objASPCheckBoxENEx"></param>
  ///// <param name="objViewInfoENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static Gen_LvFieldAssignment(objASPCheckBoxENEx: ASPCheckBoxEx, objViewInfoENEx: clsViewInfoENEx,
  //    strCodeForCs: StringBuilder)
  //{

  //    strCodeForCs.AppendFormat("\r\n" + "{1}.setChecked(obj{0}EN.get{2}());",
  //       objViewInfoENEx.objOutRelaTab.tabName,
  //       objASPCheckBoxENEx.ctrlId, objASPCheckBoxENEx.objQryRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldName);

  //}
  ///// <summary>
  ///// 生成字段控件的清空代码(编辑区字段)
  ///// </summary>
  ///// <param name="objASPCheckBoxENEx"></param>
  ///// <param name="strCodeForCs"></param>
  //public static Gen_ClearFieldCtrl4Edit(objASPCheckBoxENEx: ASPCheckBoxEx, strCodeForCs: StringBuilder)
  //{
  //    strCodeForCs.AppendFormat("\r\n" + "{0}.setChecked(false);",
  //       objASPCheckBoxENEx.ctrlId);
  //    strCodeForCs.AppendFormat("// {0}", objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.caption);
  //    strCodeForCs.AppendFormat("" + "(说明:{3};字段类型:{0};字段长度:{1};,是否可空:{2})",
  //    objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.objDataTypeAbbrEN.dataTypeName,
  //    objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.fldLength,
  //    objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.isNull,
  //    objASPCheckBoxENEx.objEditRegionFldsEx.objFieldTabENEx.objFieldTabENEx.MemoInTab);

  //}
}

/// </summary>
export class clsASPCheckBoxBLEx_Static {}
