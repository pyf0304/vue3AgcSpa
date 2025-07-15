/// <summary>
/// ASPNETSpan标签(ASPNETSpan)
/// 数据源类型:SQL表
/// (AutoGCLib.BusinessLogicEx4CSharp:GeneCode)

import { clsASPControlBLEx } from './clsASPControlBLEx';
import { ASPSpanEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPSpanENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNETSpan标签(ASPNETSpan)
/// 数据源类型:SQL表
/// (AutoGCLib.BusinessLogicEx4CSharp:GeneCode)
/// </summary>
export class clsASPSpanBLEx {
  /// <summary>
  /// 生成该对象相关的代码
  /// </summary>
  /// <param name="objASPSpanENEx">编辑文本框对象</param>
  public static GeneHtmlControl(objASPSpanENEx: ASPSpanEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFungetASPNETID();

    const objSpan: HTMLSpanElement = document.createElement('span');
    objSpan.setAttribute('class', objASPSpanENEx.class);
    objSpan.id = objASPSpanENEx.ctrlId;
    if (IsNullOrEmpty(objASPSpanENEx.keyId) == false) {
      objSpan.setAttribute('keyId', objASPSpanENEx.keyId);
    }
    objSpan.innerHTML = objASPSpanENEx.text;
    objContainer.appendChild(objSpan);
    for (const objSubASPControlENEx of objASPSpanENEx.arrSubAspControlLst2) {
      clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objSpan);
    }
    //return objSpan;
  }

  /// <summary>
  /// 建立[存放功能按钮的表]
  /// </summary>
  /// <returns></returns>
  public static GetDataArrayTitle(strTabName: string, strTabCnName: string): ASPSpanEx {
    const objASPSpanENEx: ASPSpanEx = new ASPSpanEx();
    objASPSpanENEx.ctrlId = `lbl${strTabName}Array`;
    objASPSpanENEx.text = `${strTabCnName}列表`;
    //objASPSpanENEx.style = "z-index: 105; ";
    objASPSpanENEx.class = 'h6';
    objASPSpanENEx.width = 250;
    objASPSpanENEx.height = 0;
    return objASPSpanENEx;
  }

  public static GetDataArrayMsg(): ASPSpanEx {
    const objASPSpanENEx: ASPSpanEx = new ASPSpanEx();
    objASPSpanENEx.ctrlId = `spnMsgLst`;
    //objASPSpanENEx.style = "z-index: 105; ";
    objASPSpanENEx.class = 'text-warning';
    objASPSpanENEx.width = 0;
    objASPSpanENEx.height = 0;
    return objASPSpanENEx;
  }
  public static GetspnExportExcel(bolIs4Mvc = false): ASPSpanEx {
    const objASPSpanENEx: ASPSpanEx = new ASPSpanEx();
    objASPSpanENEx.is4Mvc = bolIs4Mvc;

    //  <input value="下移" id="btnDownMove" name="action:DownMove" type="submit" class="btn btn-default" />
    objASPSpanENEx.ctrlId = 'spnExportExcel';

    //objASPSpanENEx.onClick = "btnAddNewRec4GvClick";
    objASPSpanENEx.value = '';
    objASPSpanENEx.style = '';
    objASPSpanENEx.class = '';
    objASPSpanENEx.cssClass = '';

    return objASPSpanENEx;
  }

  public static GetEmptySpan(): ASPSpanEx {
    const objASPSpanENEx: ASPSpanEx = new ASPSpanEx();
    //objASPSpanENEx.ctrlId = "divFunction";

    return objASPSpanENEx;
  }

  /// <summary>
  /// 建立[存放功能按钮的表]
  /// </summary>
  /// <returns></returns>
  public static GetDataListTitle(strTabName: string, strTabCnName: string): ASPSpanEx {
    const objASPSpanENEx: ASPSpanEx = new ASPSpanEx();
    objASPSpanENEx.ctrlId = Format('lbl{0}List', strTabName);
    objASPSpanENEx.text = Format('{0}列表', strTabCnName);
    //objASPSpanENEx.style = "z-index: 105; ";
    objASPSpanENEx.class = 'h6';
    objASPSpanENEx.width = 250;
    objASPSpanENEx.height = 0;
    return objASPSpanENEx;
  }
  public static GetDataListMsg(strRegionId: string): ASPSpanEx {
    const objASPSpanENEx: ASPSpanEx = new ASPSpanEx();
    objASPSpanENEx.ctrlId = Format('spnMsgLst{0}', strRegionId);
    //objASPSpanENEx.style = "z-index: 105; ";
    objASPSpanENEx.class = 'text-warning';
    objASPSpanENEx.width = 0;
    objASPSpanENEx.height = 0;
    return objASPSpanENEx;
  }
}
