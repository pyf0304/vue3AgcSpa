/// <summary>
/// ASPNET行(ASPNETRow)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6Cs_Business:A_GenBusinessLogicExCode)

import { clsASPControlBLEx } from './clsASPControlBLEx';

import { ASPRowEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPRowENEx';

/// <summary>
/// ASPNET行(ASPNETRow)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6Cs_Business:A_GenBusinessLogicExCode)
/// </summary>
export class clsASPRowBLEx {
  /// <summary>
  /// 生成该对象相关的代码
  /// </summary>
  /// <param name="objASPRowENEx">编辑文本框对象</param>
  public static GeneHtmlControl(objASPRowENEx: ASPRowEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFun_getASPNETID();

    const objTableRow: HTMLTableRowElement = document.createElement('tr');
    objTableRow.setAttribute('class', objASPRowENEx.class);
    objTableRow.id = objASPRowENEx.ctrlId;
    objContainer.appendChild(objTableRow);
    for (const objSubASPControlENEx of objASPRowENEx.arrSubAspControlLst2) {
      objSubASPControlENEx.parentId = objASPRowENEx.objId;
      clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objTableRow);
    }
    //return objTable;
  }
  /// <summary>
  /// 建立[空行tr]
  /// </summary>
  /// <returns></returns>
  public static GetEmptyTr(): ASPRowEx {
    const objASPRowENEx: ASPRowEx = new ASPRowEx();
    return objASPRowENEx;
  }
}
