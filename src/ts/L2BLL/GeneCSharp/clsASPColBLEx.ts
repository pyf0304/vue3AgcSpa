/// <summary>
/// ASPNET列(ASPNETCol)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6Cs_Business:A_GenBusinessLogicExCode)

import { clsASPControlBLEx } from './clsASPControlBLEx';
import { ASPColEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPColENEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET列(ASPNETCol)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6Cs_Business:A_GenBusinessLogicExCode)
/// </summary>
export class clsASPColBLEx {
  /// <summary>
  /// 生成该对象相关的代码
  /// </summary>
  /// <param name="objASPColENEx">编辑文本框对象</param>
  public static GeneHtmlControl(objASPColENEx: ASPColEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFun_getASPNETID();

    const objTableCell = document.createElement('td');
    objTableCell.setAttribute('class', objASPColENEx.class);

    if (IsNullOrEmpty(objASPColENEx.class) == false) {
      objTableCell.className = objASPColENEx.class;
    } else {
      objTableCell.className = objASPColENEx.cssClass;
    }

    objTableCell.id = objASPColENEx.ctrlId;
    if (objASPColENEx.colSpanCtrl > 0) {
      objTableCell.colSpan = objASPColENEx.colSpanCtrl;
    }
    //if (objASPColENEx.rowSpan_Ctrl > 0) {
    //    objTableCell.rowSpan = objASPColENEx.rowSpan_Ctrl;
    //}

    objContainer.appendChild(objTableCell);
    for (const objSubASPControlENEx of objASPColENEx.arrSubAspControlLst2) {
      objSubASPControlENEx.parentId = objASPColENEx.objId;
      clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objTableCell);
    }
    //return objTableCell;
  }

  /// <summary>
  /// 建立[空行td]
  /// </summary>
  /// <returns></returns>
  public static GetEmptyTd(): ASPColEx {
    const objASPColENEx: ASPColEx = new ASPColEx();

    return objASPColENEx;
  }
}
