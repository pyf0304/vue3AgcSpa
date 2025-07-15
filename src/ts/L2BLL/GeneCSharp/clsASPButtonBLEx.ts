import { ButtonTab_GetObjByButtonIdCache } from '@/ts/L3ForWApi/PrjFunction/clsButtonTabWApi';
import { FeatureButtonRela_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsFeatureButtonRelaWApi';
import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { ASPButtonEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPButtonENEx';
import { clsButtonTabENEx } from '@/ts/L0Entity/PrjFunction/clsButtonTabENEx';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET按钮(ASPNETButton)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPButtonBLEx {
  public static GeneHtmlControl(objASPButtonENEx: ASPButtonEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFungetASPNETID();
    const objHtmlInputButton: HTMLInputElement = document.createElement('input');
    if (IsNullOrEmpty(objASPButtonENEx.keyId) == false) {
      objHtmlInputButton.setAttribute('keyId', objASPButtonENEx.keyId);
    }
    objHtmlInputButton.id = objASPButtonENEx.ctrlId;
    objHtmlInputButton.type = 'button';
    objHtmlInputButton.name = objASPButtonENEx.ctrlName;
    if (IsNullOrEmpty(objASPButtonENEx.class) == false) {
      objHtmlInputButton.className = objASPButtonENEx.class;
    } else {
      objHtmlInputButton.className = objASPButtonENEx.cssClass;
    }
    if (objASPButtonENEx.isHasFunc4OnClick == true) {
      objHtmlInputButton.addEventListener('click', (e) => {
        console.error(e);
        objASPButtonENEx.func4OnClick(objASPButtonENEx.ctrlId);
      });
    } else {
      objHtmlInputButton.addEventListener('click', (e) => {
        console.error(e);
        // eval(objASPButtonENEx.onClick4Html);
      });
    }
    objHtmlInputButton.value = objASPButtonENEx.value;
    if (objASPButtonENEx.is4Mvc == true) {
      objContainer.appendChild(objHtmlInputButton);
      return;
    } else {
      objHtmlInputButton.setAttribute('class', objASPButtonENEx.cssClass);
      objHtmlInputButton.value = objASPButtonENEx.text;
      objContainer.appendChild(objHtmlInputButton);
      return;
    }
  }

  /// <summary>
  /// 建立修改按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnUpdate4Gv(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      // <input value="修改" id="btnUpdate" name="action:Update" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnUpdate';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:UpdateAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:Update';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '修改';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnUpdate4Gv';
      objASPButtonENEx.onClick = 'btnUpdate4GvClick';
      objASPButtonENEx.text = '修改记录';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 80;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立详细信息按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnDetail4Gv(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      //  <input value="下移" id="btnDownMove" name="action:DownMove" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnDetail';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:DetailAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:Detail';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '详细';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnDetail4Gv';
      objASPButtonENEx.onClick = 'btnDetail4GvClick';
      objASPButtonENEx.text = '详细信息';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 80;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立删除按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnDelete4Gv(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      // <input value="删除" id="btnDelete" name="action:DelRecords" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnDeletes';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:DeletesAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:Deletes';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '删除';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnDelete4Gv';
      objASPButtonENEx.onClick = 'btnDelete4GvClick';
      objASPButtonENEx.text = '删除记录';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 80;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立删除按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnDeleteBySign(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      // <input value="删除" id="btnDelete" name="action:DelRecords" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnDeleteBySign';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:DeleteBySignAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:DeleteBySign';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '标志性删除';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnDeleteBySign';
      objASPButtonENEx.onClick = 'btnDeleteBySignClick';
      objASPButtonENEx.text = '标志性删除';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 90;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  public static GetbtnUnDeleteBySign(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      // <input value="删除" id="btnDelete" name="action:DelRecords" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnUnDeleteBySign';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:UnDeleteBySignAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:UnDeleteBySign';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '恢复删除';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnUnDeleteBySign';
      objASPButtonENEx.onClick = 'btnUnDeleteBySignClick';
      objASPButtonENEx.text = '恢复删除';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 80;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }
  /// <summary>
  /// 建立添加记录按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnAddNewRec4Gv(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      // <input value="添加" id="btnCreate" name="action:Create" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnCreate';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:CreateAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:Create';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '添加';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnAddNewRec4Gv';
      objASPButtonENEx.onClick = 'btnAddNewRec4GvClick';
      objASPButtonENEx.text = '添加记录';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 80;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }
  public static GetbtnQuery(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      // <input value="添加" id="btnCreate" name="action:Create" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnQuery';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:QueryAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:Query';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '查询';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-warning btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnQuery';
      objASPButtonENEx.onClick = 'btnQueryClick';
      objASPButtonENEx.text = '查询';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-warning btn-sm';
      //objASPButtonENEx.width = 80;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }
  public static GetbtnClone(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      // <input value="添加" id="btnCreate" name="action:Create" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnClone';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:CloneAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:Clone';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '复制';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnClone';
      objASPButtonENEx.onClick = 'btnCloneClick';
      objASPButtonENEx.text = '复制';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 80;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立[移顶]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnGoTop(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      // <input value="移顶" id="btnGoTop" name="action:GoTop" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnGoTop';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:GoTopAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:GoTop';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '移顶';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnGoTop';
      objASPButtonENEx.onClick = 'btnGoTopClick';
      objASPButtonENEx.text = '移顶';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 48;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立[移底]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnGoBottum(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      //<input value="移底" id="btnGoBottum" name="action:GoBottum" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnGoBottum';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:GoBottumAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:GoBottum';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '移底';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnGoBottum';
      objASPButtonENEx.onClick = 'btnGoBottumClick';
      objASPButtonENEx.text = '移底';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 48;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立[重序]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnReOrder(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      //<input value="重序" id="btnReOrder" name="action:ReOrder" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnReOrder';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:ReOrderAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:ReOrder';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '重序';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnReOrder';
      objASPButtonENEx.onClick = 'btnReOrderClick';
      objASPButtonENEx.text = '重序';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 48;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立[上移]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnUpMove(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      //<input value="上移" id="btnUpMove" name="action:UpMove" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnUpMove';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:UpMoveAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:UpMove';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '上移';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnUpMove';
      objASPButtonENEx.onClick = 'btnUpMoveClick';
      objASPButtonENEx.text = '上移';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 48;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立[下移]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnDownMove(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      //  <input value="下移" id="btnDownMove" name="action:DownMove" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnDownMove';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:DownMoveAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:DownMove';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '下移';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnDownMove';
      objASPButtonENEx.onClick = 'btnDownMoveClick';
      objASPButtonENEx.text = '下移';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 48;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }

  /// <summary>
  /// 建立[导出Excel]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnExportExcel4Gv(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      //  <input value="下移" id="btnDownMove" name="action:DownMove" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnExportExcel';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:ExportExcelAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:ExportExcel';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '导出';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-warning btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnExportExcel4Gv';
      objASPButtonENEx.onClick = 'btnExportExcel4GvClick';
      objASPButtonENEx.text = '导出Excel';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 80;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }
  /// <summary>
  /// 建立[导出Excel]按钮
  /// </summary>
  /// <returns></returns>
  public static GetbtnSetExportExcel4User(bolIs4Mvc = false, bolIs4Ajax = false): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    objASPButtonENEx.is4Mvc = bolIs4Mvc;
    if (bolIs4Mvc == true) {
      //  <input value="下移" id="btnDownMove" name="action:DownMove" type="submit" class="btn btn-outline-info" />
      objASPButtonENEx.ctrlId = 'btnSetExportExcel4User';
      if (bolIs4Ajax == true) {
        objASPButtonENEx.ctrlName = 'action:SetExportExcel4UserAjax';
      } else {
        objASPButtonENEx.ctrlName = 'action:SetExportExcel4User';
      }
      objASPButtonENEx.type = 'submit';
      objASPButtonENEx.onClick = 'OnClickInFeatureRegion()';

      //objASPButtonENEx.onClick = "btnAddNewRec4GvClick";
      objASPButtonENEx.value = '设置导出';
      objASPButtonENEx.style = '';
      objASPButtonENEx.class = 'btn btn-outline-info btn-sm text-nowrap';
      objASPButtonENEx.cssClass = '';
      //objASPButtonENEx.width = 80;
      //objASPButtonENEx.height = 0;
    } else {
      objASPButtonENEx.ctrlId = 'btnSetExportExcel4User';
      objASPButtonENEx.onClick = 'btnSetExportExcel4UserClick';
      objASPButtonENEx.text = '设置导出字段';
      objASPButtonENEx.style = 'z-index: 107;';
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
      objASPButtonENEx.width = 100;
      objASPButtonENEx.height = 0;
    }
    return objASPButtonENEx;
  }
  public static GetButton_ButtonTab(objButtonTabENEx: clsButtonTabENEx): ASPButtonEx {
    const objASPButtonENEx = new ASPButtonEx();
    //objASPButtonENEx.Is4PureHtml = bolIs4PureHtml;
    //objASPButtonENEx.Is4Mvc = bolIs4Mvc;
    //objASPButtonENEx.objButtonTabENEx = objButtonTabENEx;
    objASPButtonENEx.orderNum = objButtonTabENEx.seqNum;
    //objASPButtonENEx.featureId = objButtonTabENEx.featureId;
    //objASPButtonENEx.valueGivingModeId = objButtonTabENEx.ValueGivingModeId;
    //objASPButtonENEx.viewFeatureId = objButtonTabENEx.viewFeatureId;
    //objASPButtonENEx.groupName = objButtonTabENEx.groupName;
    objASPButtonENEx.commandName = objButtonTabENEx.commandName;
    objASPButtonENEx.keyId = objButtonTabENEx.keyId;

    objASPButtonENEx.ctrlId = objButtonTabENEx.buttonName;
    objASPButtonENEx.onClick = Format('{0}Click', objButtonTabENEx.buttonName);
    objASPButtonENEx.text = objButtonTabENEx.text; // "添加记录";

    if (objASPButtonENEx.text == '导出Excel') {
      objASPButtonENEx.cssClass = 'btn btn-outline-warning btn-sm text-nowrap';
    } else {
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm text-nowrap';
    }

    return objASPButtonENEx;
  }
  public static GetButton_PrjFeature(
    objPrjFeature: clsPrjFeatureEN,
    objCtlTypeAbbr: clsCtlTypeEN | null,
    strClass = '',
  ): ASPButtonEx {
    const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
    if (objCtlTypeAbbr == null) return objASPButtonENEx;
    //objASPButtonENEx.is4PureHtml = bolIs4PureHtml;
    //objASPButtonENEx.is4Mvc = bolIs4Mvc;
    objASPButtonENEx.objPrjFeature = objPrjFeature;
    objASPButtonENEx.orderNum = objPrjFeature.orderNum + 20;
    objASPButtonENEx.featureId = objPrjFeature.featureId;
    //objASPButtonENEx.valueGivingModeId = objPrjFeature.valueGivingModeId;
    //objASPButtonENEx.viewFeatureId = objPrjFeature.viewFeatureId;
    objASPButtonENEx.groupName = objPrjFeature.groupName;

    objASPButtonENEx.ctrlId = Format('{0}{1}', objCtlTypeAbbr.ctlTypeAbbr, objPrjFeature.featureId);
    objASPButtonENEx.onClick4Html = Format("btnSelClick('{0}')", objASPButtonENEx.ctrlId);

    objASPButtonENEx.onClick = Format(
      '{0}{1}Click',
      objCtlTypeAbbr.ctlTypeAbbr,
      objPrjFeature.featureENName,
    );
    //if (objPrjFeature.is4Visible == true)
    //{
    //    objASPButtonENEx.onClick4Html = string.Format("btnClick('{0}')", objASPButtonENEx.ctrlId);
    //}
    //else
    //{

    //}
    objASPButtonENEx.text = objPrjFeature.featureName; // "添加记录";
    if (objASPButtonENEx.text.length > 4) objASPButtonENEx.colSpanCtrl = 2;
    else objASPButtonENEx.colSpanCtrl = 1;
    //objASPButtonENEx.class = "btn btn-outline-info";
    if (IsNullOrEmpty(strClass) == true) {
      objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm';
    } else {
      objASPButtonENEx.cssClass = strClass;
    }
    //objASPButtonENEx.style = "z-index: 107;";

    //objASPButtonENEx.width = objPrjFeature.width;
    //objASPButtonENEx.height = 0;

    return objASPButtonENEx;
  }
  public static async GetButton(
    objPrjFeature: clsPrjFeatureEN,
    strViewFeatureId: string,
    intApplicationTypeId: number,
  ): Promise<Array<ASPButtonEx>> {
    const arrButton: Array<ASPButtonEx> = new Array<ASPButtonEx>();
    const arrFeatureButtonRela = await FeatureButtonRela_GetObjLstCache();
    const arrFeatureButtonRelaSel = arrFeatureButtonRela.filter(
      (x) => x.applicationTypeId == intApplicationTypeId && x.featureId == objPrjFeature.featureId,
    );
    for (const objInFor of arrFeatureButtonRelaSel) {
      const objButtonTab = await ButtonTab_GetObjByButtonIdCache(objInFor.buttonId);
      if (objButtonTab == null) continue;
      const objASPButtonENEx: ASPButtonEx = new ASPButtonEx();
      //objASPButtonENEx.is4PureHtml = bolIs4PureHtml;
      //objASPButtonENEx.is4Mvc = bolIs4Mvc;
      objASPButtonENEx.objPrjFeature = objPrjFeature;
      objASPButtonENEx.orderNum = objPrjFeature.orderNum + 20;
      objASPButtonENEx.featureId = objPrjFeature.featureId;
      //objASPButtonENEx.valueGivingModeId = objFeatureRegionFldsENEx.valueGivingModeId;
      //objASPButtonENEx.viewFeatureId = objFeatureRegionFldsENEx.viewFeatureId;
      objASPButtonENEx.groupName = objPrjFeature.groupName;
      objASPButtonENEx.keyId = strViewFeatureId;
      objASPButtonENEx.commandName = objButtonTab.commandName;

      const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(enumCtlType.Button_01);
      if (objCtlTypeAbbr == null) continue;

      objASPButtonENEx.ctrlId = Format(
        '{0}{1}',
        objCtlTypeAbbr.ctlTypeAbbr,
        objPrjFeature.featureId,
      );
      objASPButtonENEx.onClick4Html = Format("btnSelClick('{0}')", objASPButtonENEx.ctrlId);

      objASPButtonENEx.onClick = Format(
        '{0}{1}Click',
        objCtlTypeAbbr.ctlTypeAbbr,
        objPrjFeature.featureENName,
      );

      objASPButtonENEx.text = objPrjFeature.featureName; // "添加记录";

      if (objASPButtonENEx.text == '导出Excel') {
        objASPButtonENEx.cssClass = 'btn btn-outline-warning btn-sm text-nowrap';
      } else {
        objASPButtonENEx.cssClass = 'btn btn-outline-info btn-sm text-nowrap';
      }

      arrButton.push(objASPButtonENEx);
    }
    return arrButton;
  }
}
