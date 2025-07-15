import { clsASPButtonBLEx } from './clsASPButtonBLEx';
import { clsASPColBLEx } from './clsASPColBLEx';
import { clsASPControlBLEx } from './clsASPControlBLEx';
import { clsASPDivBLEx } from './clsASPDivBLEx';
import { clsASPLiBLEx } from './clsASPLiBLEx';
import { clsASPRowBLEx } from './clsASPRowBLEx';
import { ASPControlEx } from '@/ts/L0Entity/GeneCSharp/ASPControlEx';
import { ASPButtonEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPButtonENEx';
import { ASPCheckBoxEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPCheckBoxENEx';
import { ASPColEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPColENEx';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { ASPDivEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDivENEx';
import { ASPLiEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLiENEx';
import { ASPRowEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPRowENEx';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';

import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET列(ASPNETControlGroup)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPControlGroupBLEx {
  public static GeneHtmlControl(
    objASPControlGroupENEx: ASPControlGroupEx,
    objContainer: HTMLElement,
  ) {
    //strCodeForCs.Append("\r\n" + "<td>");
    if (
      objASPControlGroupENEx.arrSubAspControlLst2.length > 1 &&
      objASPControlGroupENEx.groupName != ''
    ) {
      const objDiv: HTMLDivElement = document.createElement('div');
      objDiv.setAttribute('class', 'btn-group');
      objDiv.setAttribute('role', 'group');
      objDiv.setAttribute('aria-label', 'Basic example');
      if (IsNullOrEmpty(objASPControlGroupENEx.keyId) == false) {
        objDiv.setAttribute('keyId', objASPControlGroupENEx.keyId);
      }
      objContainer.appendChild(objDiv);
      //strCodeForCs.Append("\r\n" + "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">");
      for (const objSubASPControlENEx of objASPControlGroupENEx.arrSubAspControlLst2) {
        //               objSubASPControlENEx.GeneCode(strCodeForCs);
        clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objDiv);
        //objDiv.appendChild(objControl);
      }
      //return objDiv;
      //strCodeForCs.Append("\r\n" + "</div>");
    } else {
      for (const objSubASPControlENEx of objASPControlGroupENEx.arrSubAspControlLst2) {
        clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objContainer);
      }
    }
  }

  public static PackageLi(objGroup: ASPControlGroupEx): ASPControlGroupEx {
    // let objLiPrev: ASPLiEx;
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    objASPControlGroupENEx.colSpanCtrl = objGroup.colSpanCtrl;
    objASPControlGroupENEx.keyId = objGroup.keyId;
    objASPControlGroupENEx.colIndex = objGroup.colIndex;

    for (const objInfor of objGroup.arrSubAspControlLst2) {
      const objLi: ASPLiEx = clsASPLiBLEx.GetEmptyLi();
      objLi.isCaption = objInfor.isCaption;
      objLi.arrSubAspControlLst2.push(objInfor);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objLi);
      // objLiPrev = objLi;
    }
    return objASPControlGroupENEx;
  }

  public static PackageDiv(objGroup: ASPControlGroupEx): ASPControlGroupEx {
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    objASPControlGroupENEx.colSpanCtrl = objGroup.colSpanCtrl;
    objASPControlGroupENEx.keyId = objGroup.keyId;
    objASPControlGroupENEx.colIndex = objGroup.colIndex;
    let objDivPrev: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
    for (const objInfor of objGroup.arrSubAspControlLst2) {
      if (objInfor.isMergeToPreviousControl == true) {
        objDivPrev.arrSubAspControlLst2.push(objInfor);
        continue;
      }
      const objDiv: ASPDivEx = clsASPDivBLEx.GetEmptyDiv();
      objDiv.isCaption = objInfor.isCaption;
      objDiv.arrSubAspControlLst2.push(objInfor);
      if (objInfor.colSpanCtrl > 1) {
        objDiv.colSpanCtrl = objInfor.colSpanCtrl * 2 - 1;
      } else {
        if (objInfor.ctlTypeId == enumCtlType.CheckBox_02) {
          objDiv.colSpanCtrl = 2;
        } else {
          objDiv.colSpanCtrl = 1;
        }
      }

      objASPControlGroupENEx.arrSubAspControlLst2.push(objDiv);
      objDivPrev = objDiv;
    }
    return objASPControlGroupENEx;
  }

  public static PackageTd(objGroup: ASPControlGroupEx): ASPControlGroupEx {
    let objColPrev: ASPColEx = new ASPColEx();
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    objASPControlGroupENEx.colSpanCtrl = objGroup.colSpanCtrl;
    objASPControlGroupENEx.keyId = objGroup.keyId;
    objASPControlGroupENEx.colIndex = objGroup.colIndex;

    for (const objInfor of objGroup.arrSubAspControlLst2) {
      if (objInfor.isMergeToPreviousControl) {
        if (IsNullOrEmpty(objColPrev.ctrlId) == true) continue;
        objColPrev.arrSubAspControlLst2.push(objInfor);
        continue;
      }
      const objCol: ASPColEx = clsASPColBLEx.GetEmptyTd();
      if (objInfor.colSpanCtrl > 1) {
        objCol.colSpanCtrl = objInfor.colSpanCtrl * 2 - 1;
      } else {
        if (objInfor.ctlTypeId == enumCtlType.CheckBox_02) {
          objCol.colSpanCtrl = 2;
        } else {
          objCol.colSpanCtrl = 1;
        }
      }
      objCol.arrSubAspControlLst2.push(objInfor);
      if (objInfor.isCaption) {
        objCol.class = 'text-right';
        objCol.ctrlId = objGroup.ctrlId;
      } else {
        objCol.class = 'text-left';
        objCol.ctrlId = objGroup.ctrlId;
      }
      objASPControlGroupENEx.arrSubAspControlLst2.push(objCol);
      objColPrev = objCol;
    }
    return objASPControlGroupENEx;
  }
  public static PackageTdBak(objGroup: ASPControlGroupEx): ASPControlGroupEx {
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    for (const objInfor of objGroup.arrSubAspControlLst2) {
      const objCol: ASPColEx = clsASPColBLEx.GetEmptyTd();
      objCol.arrSubAspControlLst2.push(objInfor);
      objASPControlGroupENEx.arrSubAspControlLst2.push(objCol);
    }
    return objASPControlGroupENEx;
  }

  public static PackageTr(objGroup: ASPControlGroupEx): ASPControlGroupEx {
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    const objRow: ASPRowEx = clsASPRowBLEx.GetEmptyTr();
    objASPControlGroupENEx.arrSubAspControlLst2.push(objRow);

    for (const objInfor of objGroup.arrSubAspControlLst2) {
      const objCol: ASPColEx = clsASPColBLEx.GetEmptyTd();
      objCol.arrSubAspControlLst2.push(objInfor);
      objRow.arrSubAspControlLst2.push(objCol);
    }
    let intCount = objGroup.arrSubAspControlLst2.length;
    while (intCount <= 4) {
      const objCol: ASPColEx = clsASPColBLEx.GetEmptyTd();

      objRow.arrSubAspControlLst2.push(objCol);
      intCount++;
    }
    return objASPControlGroupENEx;
  }
  public static PackageTr4Wuc(objGroup: ASPControlGroupEx): ASPControlGroupEx {
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    const objRow: ASPRowEx = clsASPRowBLEx.GetEmptyTr();
    objASPControlGroupENEx.arrSubAspControlLst2.push(objRow);
    let intCount = 0;
    const arrClass: Array<string> = ['NameTD', 'ValueTD', '', ''];
    for (const objInfor of objGroup.arrSubAspControlLst2) {
      let objCol: ASPColEx = clsASPColBLEx.GetEmptyTd();
      objCol.class = arrClass[intCount++];

      if (typeof objInfor == typeof ASPCheckBoxEx) {
        objRow.arrSubAspControlLst2.push(objCol);

        objCol = clsASPColBLEx.GetEmptyTd();
        objCol.class = arrClass[intCount++];
        objCol.arrSubAspControlLst2.push(objInfor);
        objRow.arrSubAspControlLst2.push(objCol);
      } else {
        objCol.arrSubAspControlLst2.push(objInfor);
        objRow.arrSubAspControlLst2.push(objCol);
      }
    }
    //intCount = objGroup.arrSubAspControlLst2.length;
    while (intCount < 4) {
      const objCol: ASPColEx = clsASPColBLEx.GetEmptyTd();
      objCol.class = arrClass[intCount++];
      objRow.arrSubAspControlLst2.push(objCol);
    }
    return objASPControlGroupENEx;
  }

  /// <summary>
  /// 建立[空行td]
  /// </summary>
  /// <returns></returns>
  public static GetEmptyTd(): ASPControlGroupEx {
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    //objASPControlGroupENEx.ctrlId = "tr1";
    //objASPControlGroupENEx.style = "width: 100%; height: 32px; ";
    //objASPControlGroupENEx.class = "msgtable";
    return objASPControlGroupENEx;
  }

  public static GetbtnQuery(bolIs4Mvc = false, bolIs4Ajax = false): ASPControlGroupEx {
    const objASPButtonENEx: ASPButtonEx = clsASPButtonBLEx.GetbtnQuery(bolIs4Mvc, bolIs4Ajax);

    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    objASPControlGroupENEx.arrSubAspControlLst2.push(objASPButtonENEx);
    return objASPControlGroupENEx;
  }
  public static GetControlGroup(objASPButtonENEx: ASPControlEx): ASPControlGroupEx {
    const objASPControlGroupENEx: ASPControlGroupEx = new ASPControlGroupEx();
    objASPControlGroupENEx.orderNum = objASPButtonENEx.orderNum;
    objASPControlGroupENEx.groupName = objASPButtonENEx.groupName;

    objASPControlGroupENEx.arrSubAspControlLst2.push(objASPButtonENEx);
    return objASPControlGroupENEx;
  }
  /// <summary>
  /// 合并控件组，即把组名一样的控件，合并成一个组
  /// </summary>
  /// <param name="arrControlGroupLst"></param>
  /// <returns></returns>
  public static MergeControlGroup(
    arrControlGroupLst: Array<ASPControlGroupEx>,
  ): Array<ASPControlGroupEx> {
    const iLen = arrControlGroupLst.length;
    //在设置字段值的按钮前按需要添加一个输入控件，用于输入一个值
    //for (number i = 0; i < iLen; i++)
    //{
    //    const objInFor: ASPControlGroupEx =  arrControlGroupLst[i];
    //    objASPButtonENEx: ASPControlEx = objInFor.arrSubAspControlLst2[0] as ASPControlEx;
    //    if (objASPButtonENEx.featureId == enumPrjFeature.SetFieldValue_0148
    //      && objASPButtonENEx.valueGivingModeId == enumValueGivingMode.GivenValue02)
    //    {
    //        Array<clsvViewFeatureFldsENEx> arrViewFeatureFldsSub = arrvViewFeatureFlds.filter(x =>
    //        x.viewFeatureId == objASPButtonENEx.viewFeatureId);
    //        if (arrViewFeatureFldsSub.length > 0)
    //        {
    //            clsvViewFeatureFldsENEx objViewFeatureFlds = arrViewFeatureFldsSub[0];
    //            objASPDropDownListENEx: ASPDropDownListEx = clsASPDropDownListBLEx.GetDropDownLstAsp(objViewFeatureFlds);
    //            objInFor.arrSubAspControlLst2.Insert(0, objASPDropDownListENEx);
    //        }
    //    }
    //}
    for (let i = 0; i < iLen; i++) {
      const objInFor: ASPControlGroupEx = arrControlGroupLst[i];
      if (objInFor.StrTag == 'Delete') continue;
      if (objInFor.groupName != '') {
        for (let j = i + 1; j < iLen; j++) {
          const objInForJ: ASPControlGroupEx = arrControlGroupLst[j];
          if (objInForJ.groupName == objInFor.groupName) {
            if (objInForJ.orderNum > objInFor.orderNum) objInFor.orderNum = objInForJ.orderNum;
            for (const objInForSub of objInForJ.arrSubAspControlLst2) {
              objInFor.arrSubAspControlLst2.push(objInForSub);
            }
            objInForJ.StrTag = 'Delete';
          }
        }
      }
    }
    const arrControlGroupLstNew: Array<ASPControlGroupEx> = arrControlGroupLst
      .filter((x) => x.StrTag != 'Delete')
      .sort((x) => x.orderNum);
    return arrControlGroupLstNew;
  }
}
