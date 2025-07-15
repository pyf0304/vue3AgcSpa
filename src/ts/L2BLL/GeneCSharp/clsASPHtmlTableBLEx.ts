/// <summary>
/// ASPNETHtml表(ASPNETHtmlTable)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
//export class clsASPHtmlTableBLExStatic {

import { clsASPControlBLEx } from './clsASPControlBLEx';
import { clsASPControlGroupBLEx } from './clsASPControlGroupBLEx';
import {
  DetailRegionFlds_GetObjBymIdAsync,
  DetailRegionFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsDetailRegionFldsWApi';
import {
  EditRegionFlds_GetObjBymIdAsync,
  EditRegionFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsEditRegionFldsWApi';
import { ASPHtmlTableEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlTableENEx';

import { ASPControlEx } from '@/ts/L0Entity/GeneCSharp/ASPControlEx';
import { ASPButtonEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPButtonENEx';
import { ASPColEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPColENEx';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { ASPDivEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDivENEx';
import { ASPLabelEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLabelENEx';
import { ASPRowEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPRowENEx';
import { ASPWebUserControlEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPWebUserControlENEx';
import { clsViewInfoENEx4GC } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx4GC';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNETHtml表(ASPNETHtmlTable)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPHtmlTableBLEx {
  static GeneHtmlControl(objASPHtmlTableEx: ASPHtmlTableEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFungetASPNETID();

    const objTable: HTMLTableElement = document.createElement('table');
    objTable.setAttribute('class', objASPHtmlTableEx.class);
    objTable.id = objASPHtmlTableEx.ctrlId;
    objContainer.appendChild(objTable);
    for (const objSubASPControlENEx of objASPHtmlTableEx.arrSubAspControlLst2) {
      objSubASPControlENEx.parentId = objASPHtmlTableEx.objId;
      clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objTable);
    }
  }
  public static CreateLayout(): ASPHtmlTableEx {
    const objASPHtmlTableENExLayout: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENExLayout.aspControlId = 'divLayout';
    objASPHtmlTableENExLayout.aspControlName = 'divLayout';

    const objASPRowENExTitle: ASPRowEx = new ASPRowEx();
    objASPRowENExTitle.aspControlId = 'trTitle';
    objASPRowENExTitle.aspControlName = 'trTitle';
    objASPHtmlTableENExLayout.arrSubAspControlLst2.push(objASPRowENExTitle);

    const objASPColENEx: ASPColEx = new ASPColEx();
    objASPColENEx.aspControlId = 'tdTitle';
    objASPColENEx.aspControlName = 'tdTitle';
    objASPRowENExTitle.arrSubAspControlLst2.push(objASPColENEx);

    const objASPDivENEx: ASPDivEx = new ASPDivEx();
    objASPDivENEx.aspControlName = 'divTitle';
    objASPColENEx.arrSubAspControlLst2.push(objASPDivENEx);

    const objASPLabelENExTitle: ASPLabelEx = new ASPLabelEx();
    objASPLabelENExTitle.aspControlId = 'lblViewTitle';
    objASPLabelENExTitle.aspControlName = 'lblViewTitle';

    objASPLabelENExTitle.text = '性别表维护';
    objASPLabelENExTitle.cssClass = 'PageTitleH1';
    objASPDivENEx.arrSubAspControlLst2.push(objASPLabelENExTitle);
    const objASPLabelENExMsgArray: ASPLabelEx = new ASPLabelEx();
    objASPLabelENExMsgArray.aspControlId = 'lblMsgArray';
    objASPLabelENExMsgArray.aspControlName = 'lblMsgArray';

    objASPLabelENExMsgArray.text = '';
    objASPLabelENExMsgArray.cssClass = 'errMsg';
    objASPDivENEx.arrSubAspControlLst2.push(objASPLabelENExMsgArray);

    return objASPHtmlTableENExLayout;
  }

  /// <summary>
  /// 生成编辑区域
  /// </summary>
  /// <param name = "objViewInfoENEx"></param>
  /// <returns></returns>
  public static CreateEditRegion(objViewInfoENEx: clsViewInfoENEx4GC): ASPHtmlTableEx {
    const objASPHtmlTableENExEdit: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENExEdit.aspControlId = `tabEdit${objViewInfoENEx.objMainPrjTab.tabName}Region`;
    objASPHtmlTableENExEdit.aspControlName = `tabEdit${objViewInfoENEx.objMainPrjTab.tabName}Region`;
    let objASPRowENEx: ASPRowEx = new ASPRowEx();
    objASPRowENEx.aspControlId = `trEditRow1`;
    objASPRowENEx.aspControlName = `trEditRow1`;
    objASPHtmlTableENExEdit.arrSubAspControlLst2.push(objASPRowENEx);
    let intCurrCol = 1;
    let objASPColENEx: ASPColEx = new ASPColEx();
    objASPColENEx.aspControlId = `tdEditCol${intCurrCol}`;
    objASPColENEx.aspControlName = `tdEditCol${intCurrCol}`;
    objASPRowENEx.arrSubAspControlLst2.push(objASPColENEx);
    let objASPLabelENEx: ASPLabelEx = new ASPLabelEx();
    objASPLabelENEx.aspControlId = `lblEdit${objViewInfoENEx.objMainPrjTab.tabName}`;
    objASPLabelENEx.aspControlName = `lblEdit${objViewInfoENEx.objMainPrjTab.tabName}`;
    objASPLabelENEx.cssClass = 'h6';
    objASPLabelENEx.text = `${objViewInfoENEx.objMainPrjTab.tabName}编辑区域`;
    objASPColENEx.arrSubAspControlLst2.push(objASPLabelENEx);

    intCurrCol++;
    //<asp:Label ID = "lblMsgEdit" style = "z-index: 105;" runat = "server" width = "208px" height = "16px"
    //               cssClass = "errMsg"></asp:Label>
    objASPColENEx = new ASPColEx();
    objASPColENEx.aspControlId = `tdEditCol${intCurrCol}`;
    objASPColENEx.aspControlName = `tdEditCol${intCurrCol}`;
    objASPRowENEx.arrSubAspControlLst2.push(objASPColENEx);

    objASPLabelENEx = new ASPLabelEx();
    objASPLabelENEx.aspControlId = `lblMsgEdit`;
    objASPLabelENEx.aspControlName = `lblMsgEdit`;
    objASPLabelENEx.cssClass = 'errMsg';
    objASPColENEx.arrSubAspControlLst2.push(objASPLabelENEx);

    intCurrCol++;
    //<asp:Label ID = "lblMsgEdit" style = "z-index: 105;" runat = "server" width = "208px" height = "16px"
    //               cssClass = "errMsg"></asp:Label>
    objASPColENEx = new ASPColEx();
    objASPColENEx.aspControlId = `tdEditCol${intCurrCol}`;
    objASPColENEx.aspControlName = `tdEditCol${intCurrCol}`;
    objASPRowENEx.arrSubAspControlLst2.push(objASPColENEx);
    let objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.aspControlId = `btnOKUpd`;
    objASPButtonENEx.aspControlName = `btnOKUpd`;

    objASPButtonENEx.text = `添加`;
    objASPButtonENEx.cssClass = 'btn btn-outline-info';
    objASPButtonENEx.onClick = 'btnOKUpdClick';

    objASPColENEx.arrSubAspControlLst2.push(objASPButtonENEx);

    intCurrCol++;
    //<asp:Label ID = "lblMsgEdit" style = "z-index: 105;" runat = "server" width = "208px" height = "16px"
    //               cssClass = "errMsg"></asp:Label>
    objASPColENEx = new ASPColEx();
    objASPColENEx.aspControlId = `tdEditCol${intCurrCol}`;
    objASPColENEx.aspControlName = `tdEditCol${intCurrCol}`;
    objASPRowENEx.arrSubAspControlLst2.push(objASPColENEx);
    objASPButtonENEx = new ASPButtonEx();
    objASPButtonENEx.aspControlId = `btnCancelSexEdit`;
    objASPButtonENEx.aspControlName = `btnCancelSexEdit`;

    objASPButtonENEx.text = `取消编辑`;
    objASPButtonENEx.cssClass = 'btn btn-outline-info';
    objASPButtonENEx.onClick = 'btnCancelSexEditClick';

    objASPColENEx.arrSubAspControlLst2.push(objASPButtonENEx);
    objASPRowENEx = new ASPRowEx();
    objASPRowENEx.aspControlId = `trEditRow2`;
    objASPRowENEx.aspControlName = `trEditRow2`;
    objASPHtmlTableENExEdit.arrSubAspControlLst2.push(objASPRowENEx);

    objASPColENEx = new ASPColEx();
    objASPColENEx.aspControlId = `tdEditCol${intCurrCol}`;
    objASPColENEx.aspControlName = `tdEditCol${intCurrCol}`;
    objASPColENEx.colSpanCtrl = 4;
    objASPRowENEx.arrSubAspControlLst2.push(objASPColENEx);

    const objASPWebUserControlENEx: ASPWebUserControlEx = new ASPWebUserControlEx();
    objASPWebUserControlENEx.aspControlId = `wuc${objViewInfoENEx.objMainPrjTab.tabName}B1`;
    objASPWebUserControlENEx.aspControlName = `wuc${objViewInfoENEx.objMainPrjTab.tabName}B1`;
    objASPWebUserControlENEx.wucClassName = `wuc${objViewInfoENEx.objMainPrjTab.tabName}B`;
    objASPWebUserControlENEx.TagPrefix = `uc1`;

    objASPColENEx.arrSubAspControlLst2.push(objASPWebUserControlENEx);
    return objASPHtmlTableENExEdit;
  }
  /// <summary>
  /// 建立[存放功能按钮的表]
  /// </summary>
  /// <returns></returns>
  public static GettabGridFunction(): ASPHtmlTableEx {
    const objASPHtmlTableENEx: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENEx.ctrlId = 'tabGridFunction';
    objASPHtmlTableENEx.style = 'width: 100%; height: 32px; ';
    objASPHtmlTableENEx.class = 'msgtable';
    return objASPHtmlTableENEx;
  }

  /// <summary>
  /// 建立[存放功能按钮的表]
  /// </summary>
  /// <returns></returns>
  public static GetObj4QueryRegion(): ASPHtmlTableEx {
    const objASPHtmlTableENEx: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENEx.ctrlId = 'tabQuery';
    objASPHtmlTableENEx.style = 'width: 70%; ';
    objASPHtmlTableENEx.class = 'table table-bordered table-hover table td table-sm';
    return objASPHtmlTableENEx;
  }

  public static GetObj4EditRegion(): ASPHtmlTableEx {
    const objASPHtmlTableENEx: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENEx.ctrlId = 'tabEdit';
    objASPHtmlTableENEx.style = 'width: 70%; ';
    objASPHtmlTableENEx.class = 'table table-bordered table-hover table td table-sm';
    return objASPHtmlTableENEx;
  }

  public static GetObj4DetailRegion(): ASPHtmlTableEx {
    const objASPHtmlTableENEx: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENEx.ctrlId = 'tabEdit';
    objASPHtmlTableENEx.style = 'width: 70%; ';
    objASPHtmlTableENEx.class = 'table table-bordered table-hover table td table-sm';
    return objASPHtmlTableENEx;
  }

  public static GetObj4ListRegion(): ASPHtmlTableEx {
    const objASPHtmlTableENEx: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENEx.ctrlId = 'tabList';
    objASPHtmlTableENEx.style = 'width: 100%; ';
    objASPHtmlTableENEx.class = 'table table-bordered table-hover table td table-sm';
    return objASPHtmlTableENEx;
  }
  public static GetObj4ExcelExportRegion(): ASPHtmlTableEx {
    const objASPHtmlTableENEx: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENEx.ctrlId = 'tabExcelExport';
    objASPHtmlTableENEx.style = 'width: 100%; ';
    objASPHtmlTableENEx.class = 'table table-bordered table-hover table td table-sm';
    return objASPHtmlTableENEx;
  }
  public static GetObj4EditRegion2(strTabName: string): ASPHtmlTableEx {
    //< table id = "tabwucXzMajor" style = "width: 600px; padding: 1px;" border = "0" >
    const objASPHtmlTableENEx: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENEx.ctrlId = `tabwuc${strTabName}`;
    objASPHtmlTableENEx.style = 'width: 600px; padding: 1px; border:0px';

    objASPHtmlTableENEx.class = 'table table-bordered table-hover';
    return objASPHtmlTableENEx;
  }

  public static GetEmptyTable(): ASPHtmlTableEx {
    const objASPHtmlTableENEx: ASPHtmlTableEx = new ASPHtmlTableEx();
    objASPHtmlTableENEx.ctrlId = 'tabTest';
    objASPHtmlTableENEx.style = 'width: 100%; ';
    objASPHtmlTableENEx.class = 'table';
    return objASPHtmlTableENEx;
  }
  public static PackageByTable3(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPHtmlTableEx {
    const objTable: ASPHtmlTableEx = clsASPHtmlTableBLEx.GetObj4QueryRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageTd,
    );
    let intCount = 0;
    let objRow: ASPRowEx = new ASPRowEx();

    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.groupName == '') {
        objInFor.arrSubAspControlLst2.forEach((x) => objRow.arrSubAspControlLst2.push(x));
        //                let l = objRow.arrSubAspControlLst2.push(objInFor.arrSubAspControlLst2);
      } else {
        objRow.arrSubAspControlLst2.push(objInFor);
      }
      if (objInFor.colSpanCtrl > 1) {
        intCount += objInFor.colSpanCtrl;
      } else {
        intCount++;
      }
      if (intCount >= intColNum && arrASPControlGroupObjLst.length - intCount > 1) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();
        intCount = 0;
      }
    }
    if (intCount > 0) {
      objTable.arrSubAspControlLst2.push(objRow);
    }
    return objTable;
  }

  public static async PackageByTable4EditRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ) {
    const objTable: ASPHtmlTableEx = clsASPHtmlTableBLEx.GetObj4EditRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageTd,
    );
    let intCount = 0;
    let objRow: ASPRowEx = new ASPRowEx();
    // const dicEditRegionFldColIndex = new DictionaryN<number>();
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;

      const intMaxColSpan = Math.max.apply(
        null,
        objInFor.arrSubAspControlLst2.map((x) => x.colSpanCtrl),
      );
      const intColSpan = Math.floor(intMaxColSpan / 2) + (intMaxColSpan % 2);
      if (intCount + intColSpan > intColNum) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();

        intCount = 0;
        if (objInFor.groupName == '') {
          objInFor.arrSubAspControlLst2.forEach((x) => objRow.arrSubAspControlLst2.push(x));
          //objRow.arrSubAspControlLst2.push(objInFor.arrSubAspControlLst2);
        } else {
          objRow.arrSubAspControlLst2.push(objInFor);
        }
        intCount += intColSpan;

        continue;
      } else {
        if (objInFor.groupName == '') {
          objInFor.arrSubAspControlLst2.forEach((x) => objRow.arrSubAspControlLst2.push(x));
          //objRow.arrSubAspControlLst2.push(objInFor.arrSubAspControlLst2);
        } else {
          objRow.arrSubAspControlLst2.push(objInFor);
        }
        intCount += intColSpan;
      }
      if (intCount >= intColNum && arrASPControlGroupObjLst.length - intCount > 1) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();
        intCount = 0;
      }
    }
    if (intCount > 0) {
      objTable.arrSubAspControlLst2.push(objRow);
    }
    return objTable;
  }

  public static async PackageByTable4EditRegion4Update(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ) {
    const strThisFuncName = this.PackageByTable4EditRegion4Update.name;

    const objTable: ASPHtmlTableEx = clsASPHtmlTableBLEx.GetObj4EditRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageTd,
    );
    let intCount = 0;
    let objRow: ASPRowEx = new ASPRowEx();
    // const dicEditRegionFldColIndex: DictionaryN<number> = new DictionaryN<number>();
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;

      const intMaxColSpan = Math.max.apply(
        null,
        objInFor.arrSubAspControlLst2.map((x) => x.colSpanCtrl),
      );
      const intColSpan = Math.floor(intMaxColSpan / 2) + (intMaxColSpan % 2);
      if (intCount + intColSpan > intColNum) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();

        intCount = 0;
        if (objInFor.groupName == '') {
          objInFor.arrSubAspControlLst2.forEach((x) => objRow.arrSubAspControlLst2.push(x));
          //objRow.arrSubAspControlLst2.push(objInFor.arrSubAspControlLst2);
        } else {
          objRow.arrSubAspControlLst2.push(objInFor);
        }
        if (IsNullOrEmpty(objInFor.keyId) == false) {
          if (objInFor.colIndex != intCount + 1) {
            const objEditRegionFlds = await EditRegionFlds_GetObjBymIdAsync(Number(objInFor.keyId));
            if (objEditRegionFlds == null) {
              const strMsg = Format(
                '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
                this.constructor.name,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            objEditRegionFlds.colIndex = intCount + 1;
            await EditRegionFlds_UpdateRecordAsync(objEditRegionFlds);

            //const intRecNum =  EditRegionFldsSetFldValue(clsEditRegionFldsEN._CurrTabName, clsEditRegionFldsEN.conColIndex, intCount + 1, `${clsEditRegionFldsEN.conmId}=${objInFor.keyId}`);
          }
        }
        intCount += intColSpan;

        continue;
      } else {
        if (objInFor.groupName == '') {
          objInFor.arrSubAspControlLst2.forEach((x) => objRow.arrSubAspControlLst2.push(x));
          //objRow.arrSubAspControlLst2.push(objInFor.arrSubAspControlLst2);
        } else {
          objRow.arrSubAspControlLst2.push(objInFor);
        }
        if (IsNullOrEmpty(objInFor.keyId) == false) {
          if (objInFor.colIndex != intCount + 1) {
            const objEditRegionFlds = await EditRegionFlds_GetObjBymIdAsync(Number(objInFor.keyId));
            if (objEditRegionFlds == null) {
              const strMsg = Format(
                '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
                this.constructor.name,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }

            objEditRegionFlds.colIndex = intCount + 1;
            await EditRegionFlds_UpdateRecordAsync(objEditRegionFlds);

            //const intRecNum =  EditRegionFldsSetFldValue(clsEditRegionFldsEN._CurrTabName, clsEditRegionFldsEN.conColIndex, intCount + 1, `${clsEditRegionFldsEN.conmId} = ${objInFor.keyId}`);
          }
        }
        intCount += intColSpan;
      }
      if (intCount >= intColNum && arrASPControlGroupObjLst.length - intCount > 1) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();
        intCount = 0;
      }
    }
    if (intCount > 0) {
      objTable.arrSubAspControlLst2.push(objRow);
    }
    return objTable;
  }
  public static async PackageByTable4DetailRegion(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ) {
    const strThisFuncName = this.PackageByTable4DetailRegion.name;
    const objTable: ASPHtmlTableEx = clsASPHtmlTableBLEx.GetObj4DetailRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageTd,
    );
    let intCount = 0;
    let objRow: ASPRowEx = new ASPRowEx();

    // const dicDetailRegionFldColIndex: DictionaryN<number> = new DictionaryN<number>();
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      const intMaxColSpan = Math.max.apply(
        null,
        objInFor.arrSubAspControlLst2.map((x) => x.colSpanCtrl),
      );
      const intColSpan = Math.floor(intMaxColSpan / 2) + (intMaxColSpan % 2);
      if (intCount + intColSpan > intColNum) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();

        intCount = 0;
        if (objInFor.groupName == '') {
          objInFor.arrSubAspControlLst2.forEach((x) => objRow.arrSubAspControlLst2.push(x));
          //objRow.arrSubAspControlLst2.push(objInFor.arrSubAspControlLst2);
        } else {
          objRow.arrSubAspControlLst2.push(objInFor);
        }
        if (IsNullOrEmpty(objInFor.keyId) == false) {
          if (objInFor.colIndex != intCount + 1) {
            const objDetailRegionFlds = await DetailRegionFlds_GetObjBymIdAsync(
              Number(objInFor.keyId),
            );
            if (objDetailRegionFlds == null) {
              const strMsg = Format(
                '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
                this.constructor.name,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            objDetailRegionFlds.colIndex = intCount + 1;
            await DetailRegionFlds_UpdateRecordAsync(objDetailRegionFlds);
          }
        }
        intCount += intColSpan;

        continue;
      } else {
        if (objInFor.groupName == '') {
          objInFor.arrSubAspControlLst2.forEach((x) => objRow.arrSubAspControlLst2.push(x));
        } else {
          objRow.arrSubAspControlLst2.push(objInFor);
        }
        if (IsNullOrEmpty(objInFor.keyId) == false) {
          if (objInFor.colIndex != intCount + 1) {
            const objDetailRegionFlds = await DetailRegionFlds_GetObjBymIdAsync(
              Number(objInFor.keyId),
            );
            if (objDetailRegionFlds == null) {
              const strMsg = Format(
                '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
                this.constructor.name,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }

            objDetailRegionFlds.colIndex = intCount + 1;
            await DetailRegionFlds_UpdateRecordAsync(objDetailRegionFlds);

            //const intRecNum =  DetailRegionFldsSetFldValue(clsDetailRegionFldsEN._CurrTabName, clsDetailRegionFldsEN.conColIndex, intCount + 1, `${clsDetailRegionFldsEN.conmId} = ${objInFor.keyId}`);
          }
        }
        intCount += intColSpan;
      }
      if (intCount >= intColNum && arrASPControlGroupObjLst.length - intCount > 1) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();
        intCount = 0;
      }
    }
    if (intCount > 0) {
      objTable.arrSubAspControlLst2.push(objRow);
    }
    return objTable;
  }

  public static async PackageByTable4FeatureLst(
    arrControl: Array<ASPControlEx>,
    intColNum: number,
  ) {
    const objTable: ASPHtmlTableEx = clsASPHtmlTableBLEx.GetObj4EditRegion();
    //封装Td
    const arrASPControlObjLst: Array<ASPControlEx> = arrControl.map(clsASPControlBLEx.PackageTd);
    let intCount = 0;
    let objRow: ASPRowEx = new ASPRowEx();

    for (const objInFor of arrASPControlObjLst) {
      const arrColSpan = objInFor.arrSubAspControlLst2.map((x) => x.colSpanCtrl);
      let intColSpan = 1;
      if (arrColSpan.length > 0) {
        const intMaxColSpan = Math.max.apply(null, arrColSpan);
        //const intColSpan =  1;// intMaxColSpan;

        intColSpan = Math.floor(intMaxColSpan / 2) + (intMaxColSpan % 2);
      }
      if (intCount + intColSpan > intColNum) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();

        intCount = 0;
        objRow.arrSubAspControlLst2.push(objInFor);
        intCount += intColSpan;

        continue;
      } else {
        objRow.arrSubAspControlLst2.push(objInFor);

        intCount += intColSpan;
      }
      if (intCount >= intColNum && arrASPControlObjLst.length - intCount > 1) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();
        intCount = 0;
      }
    }
    if (intCount > 0) {
      objTable.arrSubAspControlLst2.push(objRow);
    }
    return objTable;
  }

  public static async PackageByTable4QueryRegion(
    arrControl: Array<ASPControlEx>,
    intColNum: number,
  ) {
    const objTable: ASPHtmlTableEx = clsASPHtmlTableBLEx.GetObj4EditRegion();
    //封装Td
    const arrASPControlObjLst: Array<ASPControlEx> = arrControl.map(
      clsASPControlGroupBLEx.PackageTd,
    );
    let intCount = 0;
    let objRow: ASPRowEx = new ASPRowEx();

    for (const objInFor of arrASPControlObjLst) {
      const arrColSpan = objInFor.arrSubAspControlLst2.map((x) => x.colSpanCtrl);
      let intColSpan = 1;
      if (arrColSpan.length > 0) {
        const intMaxColSpan = Math.max.apply(null, arrColSpan);
        //const intColSpan =  1;// intMaxColSpan;

        intColSpan = Math.floor(intMaxColSpan / 2) + (intMaxColSpan % 2);
      }
      //if (intColSpan == 0) intColSpan = 1;
      //objInFor.colSpanCtrl = intColSpan;
      if (intCount + intColSpan > intColNum) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();

        intCount = 0;
        objRow.arrSubAspControlLst2.push(objInFor);
        intCount += intColSpan;

        continue;
      } else {
        objRow.arrSubAspControlLst2.push(objInFor);

        intCount += intColSpan;
      }
      if (intCount >= intColNum && arrASPControlObjLst.length - intCount > 1) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();
        intCount = 0;
      }
    }
    if (intCount > 0) {
      objTable.arrSubAspControlLst2.push(objRow);
    }
    return objTable;
  }
  public static async PackageByTable4QueryRegion4Update(
    arrControl: Array<ASPControlEx>,
    intColNum: number,
  ) {
    const strThisFuncName = this.PackageByTable4QueryRegion4Update.name;
    const objTable: ASPHtmlTableEx = clsASPHtmlTableBLEx.GetObj4EditRegion();
    //封装Td
    const arrASPControlObjLst: Array<ASPControlEx> = arrControl.map(
      clsASPControlGroupBLEx.PackageTd,
    );
    let intCount = 0;
    let objRow: ASPRowEx = new ASPRowEx();

    for (const objInFor of arrASPControlObjLst) {
      const arrColSpan = objInFor.arrSubAspControlLst2.map((x) => x.colSpanCtrl);
      let intColSpan = 1;
      if (arrColSpan.length > 0) {
        const intMaxColSpan = Math.max.apply(null, arrColSpan);
        //const intColSpan =  1;// intMaxColSpan;

        intColSpan = Math.floor(intMaxColSpan / 2) + (intMaxColSpan % 2);
      }
      //if (intColSpan == 0) intColSpan = 1;
      //objInFor.colSpanCtrl = intColSpan;
      if (intCount + intColSpan > intColNum) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();

        intCount = 0;
        if (objInFor.groupName == '') {
          objRow.arrSubAspControlLst2.push(objInFor);
        } else {
          objRow.arrSubAspControlLst2.push(objInFor);
        }
        if (IsNullOrEmpty(objInFor.keyId) == false) {
          if (objInFor.colIndex != intCount + 1) {
            const objEditRegionFlds = await EditRegionFlds_GetObjBymIdAsync(Number(objInFor.keyId));
            if (objEditRegionFlds == null) {
              const strMsg = Format(
                '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
                this.constructor.name,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            objEditRegionFlds.colIndex = intCount + 1;
            await EditRegionFlds_UpdateRecordAsync(objEditRegionFlds);

            //const intRecNum =  EditRegionFldsSetFldValue(clsEditRegionFldsEN._CurrTabName, clsEditRegionFldsEN.conColIndex, intCount + 1, `${clsEditRegionFldsEN.conmId}=${objInFor.keyId}`);
          }
        }
        intCount += intColSpan;

        continue;
      } else {
        objRow.arrSubAspControlLst2.push(objInFor);
        if (IsNullOrEmpty(objInFor.keyId) == false) {
          if (objInFor.colIndex != intCount + 1) {
            const objEditRegionFlds = await EditRegionFlds_GetObjBymIdAsync(Number(objInFor.keyId));
            if (objEditRegionFlds == null) {
              const strMsg = Format(
                '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
                this.constructor.name,
                strThisFuncName,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }

            objEditRegionFlds.colIndex = intCount + 1;
            await EditRegionFlds_UpdateRecordAsync(objEditRegionFlds);

            //const intRecNum =  EditRegionFldsSetFldValue(clsEditRegionFldsEN._CurrTabName, clsEditRegionFldsEN.conColIndex, intCount + 1, `${clsEditRegionFldsEN.conmId} = ${objInFor.keyId}`);
          }
        }
        intCount += intColSpan;
      }
      if (intCount >= intColNum && arrASPControlObjLst.length - intCount > 1) {
        objTable.arrSubAspControlLst2.push(objRow);
        objRow = new ASPRowEx();
        intCount = 0;
      }
    }
    if (intCount > 0) {
      objTable.arrSubAspControlLst2.push(objRow);
    }
    return objTable;
  }
}
