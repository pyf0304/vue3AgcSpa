import { IGetTabFieldObj } from '../PubClass/IGetTabFieldObj';
import { clsASPControlBLEx } from './clsASPControlBLEx';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

import { clsQryRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx4GC';
import { ASPControlEx } from '@/ts/L0Entity/GeneCSharp/ASPControlEx';
import { clsEditRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx4GC';
import { ASPDropDownListEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPDropDownListENEx';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export class clsASPDropDownListBLEx {
  public static GeneHtmlControl(
    objASPDropDownListENEx: ASPDropDownListEx,
    objContainer: HTMLElement,
  ) {
    const objSelect: HTMLSelectElement = document.createElement('select');
    objSelect.setAttribute('class', 'form-control-sm');
    if (IsNullOrEmpty(objASPDropDownListENEx.keyId) == false) {
      objSelect.setAttribute('keyId', objASPDropDownListENEx.keyId);
    }
    objSelect.id = objASPDropDownListENEx.ctrlId;
    objSelect.name = objASPDropDownListENEx.ctrlName;
    if (IsNullOrEmpty(objASPDropDownListENEx.class) == false) {
      objSelect.className = objASPDropDownListENEx.class;
    } else {
      objSelect.className = objASPDropDownListENEx.cssClass;
    }
    if (IsNullOrEmpty(objASPDropDownListENEx.onClick4Html) == false) {
      objSelect.setAttribute('onclick', objASPDropDownListENEx.onClick4Html);
    }

    objSelect.setAttribute('ctrlId', objASPDropDownListENEx.ctrlId);

    objSelect.addEventListener('click', () => {
      // eval(objASPDropDownListENEx.onClick4Html);
    });
    if (objASPDropDownListENEx.width > 0) {
      objSelect.style.width = Format('{0}px', objASPDropDownListENEx.width);
    }
    objContainer.appendChild(objSelect);
    return;
  }

  public static GetDropDownLst_Asp(
    objViewFeatureFldsEx: clsViewFeatureFldsENEx,
    objGetTabFieldObj: IGetTabFieldObj,
  ): ASPDropDownListEx {
    if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
    const objASPDropDownListENEx: ASPDropDownListEx = new ASPDropDownListEx();
    objASPDropDownListENEx.ctrlId = objViewFeatureFldsEx.ctrlId;
    objASPDropDownListENEx.width = 200;
    objASPDropDownListENEx.cssClass = 'form-control-sm';
    objASPDropDownListENEx.objViewFeatureFldsENEx = objViewFeatureFldsEx;
    objASPDropDownListENEx.csType =
      objViewFeatureFldsEx.objvFieldTab_SimENEx.objDataTypeAbbr.csType;
    if (objViewFeatureFldsEx.objvFieldTab_SimENEx.objDataTypeAbbr.csType == 'bool') {
      objASPDropDownListENEx.ds_TabName = 'TrueAndFalse';
    } else {
      objASPDropDownListENEx.objPrjTabCodeTab = objGetTabFieldObj.GetObjByTabId(
        objViewFeatureFldsEx.dsTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );

      objASPDropDownListENEx.ds_TabName = objASPDropDownListENEx.objPrjTabCodeTab.tabName;
    }
    return objASPDropDownListENEx;
  }
  public static GetDropDownLst_Asp4(
    objQryRegionFldsEx: clsQryRegionFldsENEx4GC,
    objGetTabFieldObj: IGetTabFieldObj,
  ): ASPDropDownListEx {
    if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
    const objASPDropDownListENEx: ASPDropDownListEx = new ASPDropDownListEx();
    objASPDropDownListENEx.ctrlId = objQryRegionFldsEx.ctrlId;
    objASPDropDownListENEx.width = 200;
    objASPDropDownListENEx.cssClass = 'form-control-sm';
    objASPDropDownListENEx.objQryRegionFldsEx = objQryRegionFldsEx;
    objASPDropDownListENEx.csType = objQryRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
    if (objQryRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType == 'bool') {
      objASPDropDownListENEx.ds_TabName = 'TrueAndFalse';
    } else {
      objASPDropDownListENEx.objPrjTabCodeTab = objGetTabFieldObj.GetObjByTabId(
        objQryRegionFldsEx.dsTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objASPDropDownListENEx.ds_TabName = objASPDropDownListENEx.objPrjTabCodeTab.tabName;
    }
    return objASPDropDownListENEx;
  }
  public static GetDropDownLst_Asp3(
    objEditRegionFldsEx: clsEditRegionFldsENEx4GC,
    objGetTabFieldObj: IGetTabFieldObj,
  ): ASPDropDownListEx {
    if (ASPControlEx.objCheckStyle == null) clsASPControlBLEx.InitStyleObj();
    const objASPDropDownListENEx: ASPDropDownListEx = new ASPDropDownListEx();
    objASPDropDownListENEx.ctrlId = objEditRegionFldsEx.ctrlId;
    objASPDropDownListENEx.width = 200;
    objASPDropDownListENEx.cssClass = 'form-control-sm';
    objASPDropDownListENEx.objEditRegionFldsEx = objEditRegionFldsEx;
    objASPDropDownListENEx.csType = objEditRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType;
    objASPDropDownListENEx.fldName = objEditRegionFldsEx.objFieldTabENEx.fldName;
    objASPDropDownListENEx.itemsString = objEditRegionFldsEx.itemsString;
    objASPDropDownListENEx.dsCondStr = objEditRegionFldsEx.dsCondStr;
    objASPDropDownListENEx.dsSqlStr = objEditRegionFldsEx.dsSqlStr;

    objASPDropDownListENEx.ddlItemsOptionId = objEditRegionFldsEx.ddlItemsOptionId;
    if (objEditRegionFldsEx.objFieldTabENEx.objDataTypeAbbr.csType != 'bool') {
      objASPDropDownListENEx.objPrjTabCodeTab = objGetTabFieldObj.GetObjByTabId(
        objEditRegionFldsEx.dsTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
    }
    return objASPDropDownListENEx;
  }
}
