/// <summary>
/// ASPNET文本框(ASPNETTextArea)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)

import { ASPTextAreaEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPTextAreaENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET文本框(ASPNETTextArea)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPTextAreaBLEx {
  public static GeneHtmlControl(objASPTextAreaENEx: ASPTextAreaEx, objContainer: HTMLElement) {
    if (objASPTextAreaENEx.parentId != 0 && objASPTextAreaENEx.GetParentObj().parentId != 0) {
      let objSpan;
      switch (objASPTextAreaENEx.GetParentObj().GetParentObj().rowType) {
        case 'headrow':
          objSpan = document.createElement('span');

          if (IsNullOrEmpty(objASPTextAreaENEx.class) == false) {
            objSpan.className = objASPTextAreaENEx.class;
          } else {
            objSpan.className = objASPTextAreaENEx.cssClass;
          }
          if (IsNullOrEmpty(objASPTextAreaENEx.keyId) == false) {
            objSpan.setAttribute('keyId', objASPTextAreaENEx.keyId);
          }
          objSpan.id = objASPTextAreaENEx.ctrlId;
          objSpan.innerHTML = objASPTextAreaENEx.caption;

          objContainer.appendChild(objSpan);
          return;
        case 'datarow':
          return;
      }
    }
    const objHtmlInputText: HTMLTextAreaElement = document.createElement('textarea');
    objHtmlInputText.setAttribute('class', 'form-control-sm');
    objHtmlInputText.rows = 5;
    objHtmlInputText.cols = 5;
    objHtmlInputText.id = objASPTextAreaENEx.ctrlId;
    if (IsNullOrEmpty(objASPTextAreaENEx.keyId) == false) {
      objHtmlInputText.setAttribute('keyId', objASPTextAreaENEx.keyId);
    }
    if (objASPTextAreaENEx.width > 0) {
      objHtmlInputText.style.width = Format('{0}px', objASPTextAreaENEx.width);
    }

    if (IsNullOrEmpty(objASPTextAreaENEx.class) == false) {
      objHtmlInputText.className = objASPTextAreaENEx.class;
    } else {
      objHtmlInputText.className = objASPTextAreaENEx.cssClass;
    }
    if (IsNullOrEmpty(objASPTextAreaENEx.onClick4Html) == false) {
      objHtmlInputText.setAttribute('onclick', objASPTextAreaENEx.onClick4Html);
    }
    objHtmlInputText.setAttribute('ctrlId', objASPTextAreaENEx.ctrlId);
    objHtmlInputText.addEventListener('click', (e) => {
      console.error(e);
      // eval(objASPTextAreaENEx.onClick4Html);
    });
    objHtmlInputText.name = objASPTextAreaENEx.ctrlName;
    objHtmlInputText.value = objASPTextAreaENEx.text;
    objContainer.appendChild(objHtmlInputText);
  }
}
