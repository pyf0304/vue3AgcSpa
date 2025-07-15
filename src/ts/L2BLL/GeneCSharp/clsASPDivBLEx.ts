/// <summary>
/// ASPNET层(ASPNETDiv)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6Cs_Business:A_GenBusinessLogicExCode)

import { clsASPControlGroupBLEx } from './clsASPControlGroupBLEx';
import { clsASPControlBLEx } from './clsASPControlBLEx';

import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { ASPDivEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDivENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { DictionaryN } from '@/ts/PubFun/tzDictionaryN';

/// </summary>

/// <summary>
/// ASPNET层(ASPNETDiv)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6Cs_Business:A_GenBusinessLogicExCode)
/// </summary>
export class clsASPDivBLEx {
  static GeneHtmlControl(objDivTable: ASPDivEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFun_getASPNETID();
    const objDiv: HTMLSpanElement = document.createElement('div');
    objDiv.id = objDivTable.ctrlId;
    if (IsNullOrEmpty(objDivTable.class) == false) {
      objDiv.className = objDivTable.class;
    } else {
      objDiv.className = objDivTable.cssClass;
    }
    if (objDivTable.width > 0) {
      objDiv.style.width = Format('{0}px', objDivTable.width);
    }

    if (IsNullOrEmpty(objDivTable.role) == false) {
      objDiv.setAttribute('role', objDivTable.role);
    }

    if (IsNullOrEmpty(objDivTable.aria_hidden) == false) {
      objDiv.setAttribute('aria-hidden', objDivTable.aria_hidden);
    }

    if (IsNullOrEmpty(objDivTable.aria_labelledby) == false) {
      objDiv.setAttribute('aria-labelledby', objDivTable.aria_labelledby);
    }
    if (IsNullOrEmpty(objDivTable.keyId) == false) {
      objDiv.setAttribute('keyId', objDivTable.keyId);
    }
    objDiv.innerHTML = objDivTable.text;
    objContainer.appendChild(objDiv);
    for (const objSubASPControlENEx of objDivTable.arrSubAspControlLst2) {
      clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objDiv);
    }
  }

  public static GetEmptyDiv(): ASPDivEx {
    const objASPDivENEx: ASPDivEx = new ASPDivEx();

    return objASPDivENEx;
  }

  public static GetRowDiv(): ASPDivEx {
    const objASPDivENEx: ASPDivEx = new ASPDivEx();
    objASPDivENEx.ctrlId = '';
    objASPDivENEx.class = 'row';

    return objASPDivENEx;
  }

  public static GetObj4DetailRegion(): ASPDivEx {
    const objASPDivENEx: ASPDivEx = new ASPDivEx();
    objASPDivENEx.ctrlId = '';
    objASPDivENEx.class = 'row';
    objASPDivENEx.style = 'width: 100%; ';
    return objASPDivENEx;
  }

  public static PackageByDivTable4DetailRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetObj4DetailRegion();

    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageDiv,
    );

    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      let strWidths = dicColNumWidth.getItem(intColNum);
      if (strWidths == undefined) strWidths = '3,9';
      const strwWidth: Array<string> = strWidths.split(',');
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objInFor2.class += Format(' col-{0} text-right', strwWidth[0]);
        } else {
          objInFor2.class += Format(' col-{0}', strwWidth[1]);
        }
        objDivTable.arrSubAspControlLst2.push(objInFor2);
      }
    }

    return objDivTable;
  }
  public static PackageByFormControl4DetailRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();

    //封装Td
    //Array<ASPControlGroupEx> arrASPControlGroupObjLst = arrControlGroups.map(clsASPControlGroupBLEx.PackageDiv).ToList();

    // const intCount = 0;
    //const objLi: ASPLiEx =new ASPLiEx();
    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrControlGroups) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      const objDiv: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
      objDiv.class = 'form-group';

      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[0]);
        } else {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[1]);
        }
      }
      objDivTable.arrSubAspControlLst2.push(objDiv);
    }

    return objDivTable;
  }

  public static PackageByFormInline4DetailRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
    objDivTable.class = 'form-inline';
    //封装Td
    //Array<ASPControlGroupEx> arrASPControlGroupObjLst = arrControlGroups.map(clsASPControlGroupBLEx.PackageDiv).ToList();

    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrControlGroups) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      const objDiv: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
      objDiv.class = 'form-group';

      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[0]);
        } else {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[1]);
        }
      }
      objDivTable.arrSubAspControlLst2.push(objDiv);
    }

    return objDivTable;
  }

  public static PackageByDivTable4QueryRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetObj4DetailRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageDiv,
    );

    // const intCount = 0;
    //const objLi: ASPLiEx =new ASPLiEx();
    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      let strWidths = dicColNumWidth.getItem(intColNum);
      if (strWidths == undefined) strWidths = '3,9';
      const strwWidth: Array<string> = strWidths.split(',');
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.colSpanCtrl > 1) {
          objInFor2.class += Format(' col-{0}', Number(strwWidth[0]) + Number(strwWidth[1]));
          objDivTable.arrSubAspControlLst2.push(objInFor2);
          continue;
        }
        if (objInFor2.isCaption == true) {
          objInFor2.class += Format(' col-{0} text-right', strwWidth[0]);
        } else {
          objInFor2.class += Format(' col-{0}', strwWidth[1]);
        }
        objDivTable.arrSubAspControlLst2.push(objInFor2);
      }
    }

    return objDivTable;
  }

  public static PackageByDivTable4EditRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetObj4DetailRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageDiv,
    );

    // const intCount = 0;
    //const objLi: ASPLiEx =new ASPLiEx();
    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      let strWidths = dicColNumWidth.getItem(intColNum);
      if (strWidths == undefined) strWidths = '3,9';
      const strwWidth: Array<string> = strWidths.split(',');
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.colSpanCtrl > 1) {
          objInFor2.class += Format(' col-{0}', Number(strwWidth[0]) + Number(strwWidth[1]));
          objDivTable.arrSubAspControlLst2.push(objInFor2);
          continue;
        }
        if (objInFor2.isCaption == true) {
          objInFor2.class += Format(' col-{0} text-right', strwWidth[0]);
        } else {
          objInFor2.class += Format(' col-{0}', strwWidth[1]);
        }
        objDivTable.arrSubAspControlLst2.push(objInFor2);
      }
    }

    return objDivTable;
  }
  public static PackageByFormControl4QueryRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
    //封装Td
    //Array<ASPControlGroupEx> arrASPControlGroupObjLst = arrControlGroups.map(clsASPControlGroupBLEx.PackageDiv).ToList();

    // const intCount = 0;
    //const objLi: ASPLiEx =new ASPLiEx();
    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrControlGroups) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      const objDiv: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
      objDiv.class = 'form-group';

      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[0]);
        } else {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[1]);
        }
      }
      objDivTable.arrSubAspControlLst2.push(objDiv);
    }

    return objDivTable;
  }
  public static PackageByFormControl4EditRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
    //封装Td
    //Array<ASPControlGroupEx> arrASPControlGroupObjLst = arrControlGroups.map(clsASPControlGroupBLEx.PackageDiv).ToList();

    // const intCount = 0;
    //const objLi: ASPLiEx =new ASPLiEx();
    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrControlGroups) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      const objDiv: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
      objDiv.class = 'form-group';

      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[0]);
        } else {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[1]);
        }
      }
      objDivTable.arrSubAspControlLst2.push(objDiv);
    }

    return objDivTable;
  }

  public static PackageByFormInline4EditRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
    objDivTable.class = 'form-inline';
    //封装Td
    //Array<ASPControlGroupEx> arrASPControlGroupObjLst = arrControlGroups.map(clsASPControlGroupBLEx.PackageDiv).ToList();

    // const intCount = 0;
    //const objLi: ASPLiEx =new ASPLiEx();
    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrControlGroups) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      const objDiv: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
      objDiv.class = 'form-group';

      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[0]);
        } else {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[1]);
        }
      }
      objDivTable.arrSubAspControlLst2.push(objDiv);
    }

    return objDivTable;
  }
  public static PackageByFormInline4QueryRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPDivEx {
    const objDivTable: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
    objDivTable.class = 'form-inline';
    //封装Td
    //Array<ASPControlGroupEx> arrASPControlGroupObjLst = arrControlGroups.map(clsASPControlGroupBLEx.PackageDiv).ToList();

    // const intCount = 0;
    //const objLi: ASPLiEx =new ASPLiEx();
    const dicColNumWidth: DictionaryN<string> = new DictionaryN<string>();
    dicColNumWidth.add(1, '3,9');
    dicColNumWidth.add(2, '2,4');
    dicColNumWidth.add(3, '1,3');
    dicColNumWidth.add(4, '1,2');
    if (intColNum > 4) intColNum = 4;
    for (const objInFor of arrControlGroups) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      const objDiv: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
      objDiv.class = 'form-group';

      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[0]);
        } else {
          objDiv.arrSubAspControlLst2.push(objInFor2);
          //objInFor2.class += Format(" col-{0}", strwWidth[1]);
        }
      }
      objDivTable.arrSubAspControlLst2.push(objDiv);
    }

    return objDivTable;
  }
}
