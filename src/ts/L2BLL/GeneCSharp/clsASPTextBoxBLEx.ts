/// <summary>
/// ASPNET文本框(ASPNETTextBox)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)

import { ASPTextBoxEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPTextBoxENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET文本框(ASPNETTextBox)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPTextBoxBLEx {
  public static GeneHtmlControl(objASPTextBoxENEx: ASPTextBoxEx, objContainer: HTMLElement) {
    if (objASPTextBoxENEx.parentId != 0 && objASPTextBoxENEx.GetParentObj().parentId != 0) {
      let objSpan;
      switch (objASPTextBoxENEx.GetParentObj().GetParentObj().rowType) {
        case 'headrow':
          objSpan = document.createElement('span');

          if (IsNullOrEmpty(objASPTextBoxENEx.class) == false) {
            objSpan.className = objASPTextBoxENEx.class;
          } else {
            objSpan.className = objASPTextBoxENEx.cssClass;
          }
          if (IsNullOrEmpty(objASPTextBoxENEx.keyId) == false) {
            objSpan.setAttribute('keyId', objASPTextBoxENEx.keyId);
          }
          objSpan.id = objASPTextBoxENEx.ctrlId;
          objSpan.innerHTML = objASPTextBoxENEx.caption;

          objContainer.appendChild(objSpan);
          return;
        case 'datarow':
          return;
      }
    }
    const objHtmlInputText: HTMLInputElement = document.createElement('input');
    objHtmlInputText.setAttribute('class', 'form-control-sm');
    objHtmlInputText.size = 10;
    objHtmlInputText.id = objASPTextBoxENEx.ctrlId;
    objHtmlInputText.type = 'text';
    if (IsNullOrEmpty(objASPTextBoxENEx.keyId) == false) {
      objHtmlInputText.setAttribute('keyId', objASPTextBoxENEx.keyId);
    }
    if (objASPTextBoxENEx.width > 0) {
      objHtmlInputText.style.width = Format('{0}px', objASPTextBoxENEx.width);
    }

    if (IsNullOrEmpty(objASPTextBoxENEx.class) == false) {
      objHtmlInputText.className = objASPTextBoxENEx.class;
    } else {
      objHtmlInputText.className = objASPTextBoxENEx.cssClass;
    }
    if (IsNullOrEmpty(objASPTextBoxENEx.onClick4Html) == false) {
      objHtmlInputText.setAttribute('onclick', objASPTextBoxENEx.onClick4Html);
    }
    objHtmlInputText.setAttribute('ctrlId', objASPTextBoxENEx.ctrlId);
    objHtmlInputText.addEventListener('click', (e) => {
      console.error(e);
      // eval(objASPTextBoxENEx.onClick4Html);
    });
    objHtmlInputText.name = objASPTextBoxENEx.ctrlName;
    objHtmlInputText.value = objASPTextBoxENEx.text;
    objContainer.appendChild(objHtmlInputText);
  }
}
