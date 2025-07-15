/// <summary>
/// ASPNETHtml按钮(ASPNETHtmlButton)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)

import { ASPHtmlButtonEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlButtonENEx';
/// <summary>
/// ASPNETHtml按钮(ASPNETHtmlButton)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPHtmlButtonBLEx {
  static GeneHtmlControl(objASPHtmlButtonENEx: ASPHtmlButtonEx, objContainer: HTMLElement) {
    console.error(objASPHtmlButtonENEx, objContainer);
    throw new Error('Method not implemented.');
  }

  /// <summary>
  /// 建立空按钮
  /// </summary>
  /// <returns></returns>
  public static GetEmptyButton(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    return objASPHtmlButtonENEx;
  }

  /// <summary>
  /// 建立修改按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnUpdate4Gv(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnUpdate4Gv';
    objASPHtmlButtonENEx.onClick = 'btnUpdate4GvClick()';
    objASPHtmlButtonENEx.value = '修改记录';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
  public static GetbtnUpdate(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnUpdateRecord';
    objASPHtmlButtonENEx.onClick = 'btnUpdateRecordClick()';
    objASPHtmlButtonENEx.value = '修改';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
  /// <summary>
  /// 建立修改按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnQuery(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnQuery';
    objASPHtmlButtonENEx.onClick = 'btnQueryClick()';
    objASPHtmlButtonENEx.value = '查询';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
  /// <summary>
  /// 建立详细信息按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnDetail4Gv(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnDetail4Gv';
    objASPHtmlButtonENEx.onClick = 'btnDetail4GvClick()';
    objASPHtmlButtonENEx.value = '详细信息';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }

  /// <summary>
  /// 建立删除按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnDelete4Gv(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnDelete4Gv';
    objASPHtmlButtonENEx.onClick = 'btnDelete4GvClick()';
    objASPHtmlButtonENEx.value = '删除记录';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
  public static GetbtnDelete(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnDelRecord';
    objASPHtmlButtonENEx.onClick = 'btnDelRecordClick()';
    objASPHtmlButtonENEx.value = '删除';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
  /// <summary>
  /// 建立添加记录按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnAddNewRec4Gv(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnAddNewRec4Gv';
    objASPHtmlButtonENEx.onClick = 'btnAddNewRec4GvClick()';
    objASPHtmlButtonENEx.value = '添加记录';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }

  public static GetbtnAddNewRec(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnAddNewRecord';
    objASPHtmlButtonENEx.onClick = 'btnAddNewRecordClick()';
    objASPHtmlButtonENEx.value = '添加';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
  //<td>
  //                    <asp:Button ID = "btnGoTop" runat="server" height="24px" style="z-index: 109; left: 616px;"
  //                        Text="移顶" width="48px" onClick="btnGoTopClick" cssClass="btn btn-outline-info" />
  //                </td>
  //                <td>
  //                    <asp:Button ID = "btnUpMove" runat="server" height="24px" onClick="btnUpMoveClick"
  //                        style="z-index: 109; left: 616px;" Text="上移" width="48px" cssClass="btn btn-outline-info" />
  //                </td>
  //                <td>
  //                    <asp:Button ID = "btnDownMove" runat="server" height="24px" onClick="btnDownMoveClick"
  //                        style="z-index: 110; left: 664px;" Text="下移" width="48px" cssClass="btn btn-outline-info" />
  //                </td>
  //                <td>
  //                    <asp:Button ID = "btnGoBottum" runat="server" height="24px" style="z-index: 110; left: 664px;"
  //                        Text="移底" width="48px" onClick="btnGoBottumClick" cssClass="btn btn-outline-info" />
  //                </td>
  //                <td>
  //                    <asp:Button ID = "btnReOrder" runat="server" height="24px" onClick="btnReOrderClick"
  //                        style="z-index: 111; left: 712px;" Text="重序" width="40px" cssClass="btn btn-outline-info" />
  //                </td>
  /// <summary>
  /// 建立[移顶]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnGoTop(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnGoTop';
    objASPHtmlButtonENEx.onClick = 'btnGoTopClick()';
    objASPHtmlButtonENEx.text = '移顶';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.cssClass = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 48;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }

  /// <summary>
  /// 建立[移底]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnGoBottum(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnGoBottum';
    objASPHtmlButtonENEx.onClick = 'btnGoBottumClick()';
    objASPHtmlButtonENEx.text = '移底';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.cssClass = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 48;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }

  /// <summary>
  /// 建立[重序]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnReOrder(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnReOrder';
    objASPHtmlButtonENEx.onClick = 'btnReOrderClick()';
    objASPHtmlButtonENEx.text = '重序';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.cssClass = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 48;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }

  /// <summary>
  /// 建立[上移]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnUpMove(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnUpMove';
    objASPHtmlButtonENEx.onClick = 'btnUpMoveClick()';
    objASPHtmlButtonENEx.text = '上移';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.cssClass = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 48;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }

  /// <summary>
  /// 建立[下移]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnDownMove(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnDownMove';
    objASPHtmlButtonENEx.onClick = 'btnDownMoveClick()';
    objASPHtmlButtonENEx.text = '下移';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.cssClass = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 48;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }

  /// <summary>
  /// 建立[导出Excel]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnExportExcel4Gv(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnExportExcel4Gv';
    objASPHtmlButtonENEx.onClick = 'btnExportExcel4GvClick()';
    objASPHtmlButtonENEx.value = '导出Excel';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 80;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
  public static GetbtnExportExcel(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnExportExcel';
    objASPHtmlButtonENEx.onClick = 'btnExportExcelClick()';
    objASPHtmlButtonENEx.value = '导出Excel';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.class = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 100;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
  /// <summary>
  /// 建立[导出Excel]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnSetExportExcel4User(): ASPHtmlButtonEx {
    const objASPHtmlButtonENEx: ASPHtmlButtonEx = new ASPHtmlButtonEx();
    objASPHtmlButtonENEx.ctrlId = 'btnSetExportExcel4User';
    objASPHtmlButtonENEx.onClick = 'btnSetExportExcel4UserClick()';
    objASPHtmlButtonENEx.text = '设置导出字段';
    objASPHtmlButtonENEx.style = 'z-index: 107;';
    objASPHtmlButtonENEx.cssClass = 'btn btn-outline-info';
    objASPHtmlButtonENEx.width = 100;
    objASPHtmlButtonENEx.height = 0;
    return objASPHtmlButtonENEx;
  }
}
/// </summary>
export class clsASPHtmlButtonBLExStatic {
  ///// <summary>
  ///// 生成该对象相关的代码
  ///// </summary>
  ///// <param name="objASPHtmlButtonENEx">按钮对象</param>
  ///// <param name="strCodeForCs">生成到这个对象中</param>
  //public static GeneCode(this ASPHtmlButtonEx objASPHtmlButtonENEx,
  //    strCodeForCs: StringBuilder)
  //{
  //    strActionId=  AgcPubFungetASPNETID();
  //    if (objASPHtmlButtonENEx.is4PureHtml == true)
  //    {
  //        strCodeForCs.AppendFormat("\r\n" + "<input type='button' ");
  //        clsASPControlBLEx.GC4Type(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的Id、Name
  //        clsASPControlBLEx.GC4IdName(objASPHtmlButtonENEx, strCodeForCs);
  //        clsASPControlBLEx.GC4Datadismiss(objASPHtmlButtonENEx, strCodeForCs);
  //        clsASPControlBLEx.GC4Arialabel(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的Tag
  //        clsASPControlBLEx.GC4Tag(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的样式
  //        clsASPControlBLEx.GC4Style(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的尺寸-高、宽
  //        //clsASPControlBLEx.GC4Size(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的边界尺寸-即与四周的距离
  //        clsASPControlBLEx.GC4Margin(objASPHtmlButtonENEx, strCodeForCs);
  //        if (objASPHtmlButtonENEx.onClick) == false)
  //        {
  //            strCodeForCs.AppendFormat(" onclick=\"{0}\"",
  //                objASPHtmlButtonENEx.onClick);
  //        }
  //        clsASPControlBLEx.GC4Tabindex(objASPHtmlButtonENEx, strCodeForCs);
  //        clsASPControlBLEx.GC4Arialabelledby(objASPHtmlButtonENEx, strCodeForCs);
  //        clsASPControlBLEx.GC4Ariahidden(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的样式
  //        //clsASPControlBLEx.GC4Text(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的约束-即与四周控件的约束关系
  //        //clsASPControlBLEx.GC4Constraint(objASPHtmlButtonENEx, strCodeForCs);
  //        if (objASPHtmlButtonENEx.value) == false)
  //        {
  //            strCodeForCs.AppendFormat(" value=\"{0}\" ",
  //                   objASPHtmlButtonENEx.value);
  //        }
  //        if (objASPHtmlButtonENEx.text) == false)
  //        {
  //            strCodeForCs.AppendFormat("{0}",
  //                   objASPHtmlButtonENEx.text);
  //        }
  //        strCodeForCs.Append(" />");
  //    }
  //    else
  //    {
  //        strCodeForCs.AppendFormat("\r\n" + "<button ");
  //        clsASPControlBLEx.GC4Type(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的Id、Name
  //        clsASPControlBLEx.GC4IdName(objASPHtmlButtonENEx, strCodeForCs);
  //        clsASPControlBLEx.GC4Datadismiss(objASPHtmlButtonENEx, strCodeForCs);
  //        clsASPControlBLEx.GC4Arialabel(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的Tag
  //        clsASPControlBLEx.GC4Tag(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的样式
  //        clsASPControlBLEx.GC4Style(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的尺寸-高、宽
  //        //clsASPControlBLEx.GC4Size(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的边界尺寸-即与四周的距离
  //        clsASPControlBLEx.GC4Margin(objASPHtmlButtonENEx, strCodeForCs);
  //        if (objASPHtmlButtonENEx.onClick) == false)
  //        {
  //            strCodeForCs.AppendFormat(" onclick=\"{0}\"",
  //                objASPHtmlButtonENEx.onClick);
  //        }
  //        clsASPControlBLEx.GC4Tabindex(objASPHtmlButtonENEx, strCodeForCs);
  //        clsASPControlBLEx.GC4Arialabelledby(objASPHtmlButtonENEx, strCodeForCs);
  //        clsASPControlBLEx.GC4Ariahidden(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的样式
  //        //clsASPControlBLEx.GC4Text(objASPHtmlButtonENEx, strCodeForCs);
  //        //生成控件的约束-即与四周控件的约束关系
  //        //clsASPControlBLEx.GC4Constraint(objASPHtmlButtonENEx, strCodeForCs);
  //        strCodeForCs.Append(">");
  //        if (objASPHtmlButtonENEx.value) == false)
  //        {
  //            strCodeForCs.AppendFormat("{0}",
  //                   objASPHtmlButtonENEx.value);
  //        }
  //        if (objASPHtmlButtonENEx.text) == false)
  //        {
  //            strCodeForCs.AppendFormat("{0}",
  //                   objASPHtmlButtonENEx.text);
  //        }
  //        for (const  objSubASPControlENEx of objASPHtmlButtonENEx.arrSubAspControlLst2)
  //        {
  //            //if (objSubASPControlENEx.ctlTypeId != enumCtlType.ASPNETAutoresizingMask) continue;
  //            objSubASPControlENEx.GeneCode(strCodeForCs);
  //        }
  //        strCodeForCs.AppendFormat("</button>");
  //    }
  //}
  //public static GeneCode4Mvc(this ASPHtmlButtonEx objASPHtmlButtonENEx,
  // strCodeForCs: StringBuilder)
  //{
  //    strActionId=  AgcPubFungetASPNETID();
  //    strCodeForCs.AppendFormat("\r\n" + "<button ");
  //    clsASPControlBLEx.GC4Type(objASPHtmlButtonENEx, strCodeForCs);
  //    //生成控件的Id、Name
  //    clsASPControlBLEx.GC4IdName(objASPHtmlButtonENEx, strCodeForCs);
  //    clsASPControlBLEx.GC4Datadismiss(objASPHtmlButtonENEx, strCodeForCs);
  //    clsASPControlBLEx.GC4Arialabel(objASPHtmlButtonENEx, strCodeForCs);
  //    //生成控件的Tag
  //    clsASPControlBLEx.GC4Tag(objASPHtmlButtonENEx, strCodeForCs);
  //    //生成控件的样式
  //    clsASPControlBLEx.GC4Style(objASPHtmlButtonENEx, strCodeForCs);
  //    //生成控件的尺寸-高、宽
  //    //clsASPControlBLEx.GC4Size(objASPHtmlButtonENEx, strCodeForCs);
  //    //生成控件的边界尺寸-即与四周的距离
  //    clsASPControlBLEx.GC4Margin(objASPHtmlButtonENEx, strCodeForCs);
  //    if (objASPHtmlButtonENEx.onClick) == false)
  //    {
  //        strCodeForCs.AppendFormat(" onclick=\"{0}\"",
  //            objASPHtmlButtonENEx.onClick);
  //    }
  //    if (objASPHtmlButtonENEx.value) == false)
  //    {
  //        strCodeForCs.AppendFormat(" value=\"{0}\"",
  //               objASPHtmlButtonENEx.value);
  //    }
  //    clsASPControlBLEx.GC4Tabindex(objASPHtmlButtonENEx, strCodeForCs);
  //    clsASPControlBLEx.GC4Arialabelledby(objASPHtmlButtonENEx, strCodeForCs);
  //    clsASPControlBLEx.GC4Ariahidden(objASPHtmlButtonENEx, strCodeForCs);
  //    //生成控件的样式
  //    //clsASPControlBLEx.GC4Text(objASPHtmlButtonENEx, strCodeForCs);
  //    //生成控件的约束-即与四周控件的约束关系
  //    //clsASPControlBLEx.GC4Constraint(objASPHtmlButtonENEx, strCodeForCs);
  //    if (objASPHtmlButtonENEx.text) == false)
  //    {
  //        strCodeForCs.AppendFormat(">{0}</button>",
  //               objASPHtmlButtonENEx.text);
  //    }
  //    else
  //    {
  //        if (objASPHtmlButtonENEx.arrSubAspControlLst2.length == 0)
  //        {
  //            strCodeForCs.AppendFormat("/>");
  //        }
  //        else
  //        {
  //            strCodeForCs.AppendFormat(">");
  //            for (const  objSubASPControlENEx of objASPHtmlButtonENEx.arrSubAspControlLst2)
  //            {
  //                //if (objSubASPControlENEx.ctlTypeId != enumCtlType.ASPNETAutoresizingMask) continue;
  //                objSubASPControlENEx.GeneCode(strCodeForCs);
  //            }
  //            strCodeForCs.AppendFormat("</button>");
  //        }
  //    }
  //}
}
