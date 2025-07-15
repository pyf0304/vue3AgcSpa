/// <summary>
/// ASPNET下拉框(ASPNETDropDownList)
/// (AutoGCLib.AutoGC6Cs_M:A_GenEntityLayerCodeEx)

import { ASPDropDownList } from '../GeneCSharp/ASPDropDownList';
import { clsPrjTabEN } from '../Table_Field/clsPrjTabEN';
import { clsFieldTabEN } from '../Table_Field/clsFieldTabEN';

/// </summary>
export class ASPDropDownListEx extends ASPDropDownList {
  constructor() {
    super();

    this.controlType = 'ASPDropDownListEx';
  }
  /// <summary>
  /// 区域类型
  /// </summary>
  public regionTypeId = '';
  public ddlItemsOptionId = '';
  public itemsString = '';
  public dsCondStr = '';
  public dsSqlStr = '';
  public ds_TabName = '';
  public dsTabId = '';

  public objPrjTabCodeTab: clsPrjTabEN = new clsPrjTabEN();
  //public objFieldTab_ValueField: clsFieldTabEN = new clsFieldTabEN();
  //public objFieldTab_TextField: clsFieldTabEN = new clsFieldTabEN();
  //public objFieldTab_ConditionField: clsFieldTabEN = new clsFieldTabEN();
  public objFieldTabCacheClassify: clsFieldTabEN = new clsFieldTabEN();
}
