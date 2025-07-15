// import { extend } from 'jquery';
import { clsQryRegionFldsEN } from '../RegionManage/clsQryRegionFldsEN';
import { clsEditRegionFldsEN } from '../RegionManage/clsEditRegionFldsEN';
import { clsDetailRegionFldsEN } from '../RegionManage/clsDetailRegionFldsEN';
import { clsDGRegionFldsEN } from '../RegionManage/clsDGRegionFldsEN';
import { clsExcelExportRegionFldsEN } from '../RegionManage/clsExcelExportRegionFldsEN';
import { clsPrjFeatureEN } from '../PrjFunction/clsPrjFeatureEN';
import { clsLabelStyleEN } from '../SysPara/clsLabelStyleEN';
import { clsGenCtlStyleEN } from '../ViewControlManage/clsGenCtlStyleEN';
import { clsCheckStyleEN } from '../ViewControlManage/clsCheckStyleEN';
import { clsButtonStyleEN } from '../SysPara/clsButtonStyleEN';
import { clsViewFeatureFldsENEx } from '../RegionManage/clsViewFeatureFldsENEx';
import { ASPControl } from './ASPControl';

export class ASPControlEx extends ASPControl {
  public static arrAspControlExLst: Array<ASPControlEx> = new Array<ASPControlEx>();
  public static maxObjId = 1;
  public controlType = '';
  /// <summary>
  /// 是否标题
  /// </summary>
  public isCaption = false;
  /// <summary>
  /// 合并到前一个控件
  /// </summary>
  public isMergeToPreviousControl = false;

  /// <summary>
  /// 跨列数
  /// </summary>
  public colSpanCtrl = 0;
  public is4Mvc = false;

  public arrSubAspControlLst2: Array<ASPControlEx> = new Array<ASPControlEx>();
  constructor() {
    super();
    this.controlType = 'ASPControlEx';
    this.objId = ASPControlEx.maxObjId;
    ASPControlEx.maxObjId++;
    ASPControlEx.arrAspControlExLst.push(this);
  }

  //public clsQryRegionFldsENEx4GC objQryRegionFldsEx = null;
  //public clsEditRegionFldsENEx4GC objEditRegionFldsEx = null;
  //public clsDGRegionFldsENEx objDGRegionFldsENEx = null;
  //public clsExcelExportRegionFldsENEx4GC objExcelExportRegionFldsENEx = null;
  //public clsvViewFeatureFldsENEx objViewFeatureFldsENEx = null;

  public objQryRegionFldsEx: clsQryRegionFldsEN = new clsQryRegionFldsEN();
  public objEditRegionFldsEx: clsEditRegionFldsEN = new clsEditRegionFldsEN();
  public objDetailRegionFldsEx: clsDetailRegionFldsEN = new clsDetailRegionFldsEN();
  public objDGRegionFldsENEx: clsDGRegionFldsEN = new clsDGRegionFldsEN();
  public objExcelExportRegionFldsENEx: clsExcelExportRegionFldsEN =
    new clsExcelExportRegionFldsEN();
  public objViewFeatureFldsENEx = new clsViewFeatureFldsENEx();
  public objPrjFeature: clsPrjFeatureEN = new clsPrjFeatureEN();

  public static objLabelStyleText: clsLabelStyleEN; //= null;// LabelStyleGetObjByLabelStyleId("0001");
  public static objGenCtlStyle: clsGenCtlStyleEN; //= null;// GenCtlStyleGetObjByGenCtlStyleId("0001");
  public static objCheckStyle: clsCheckStyleEN; //= null;// CheckStyleGetObjByCheckStyleId("0001");
  public static objButtonStyle: clsButtonStyleEN; //= null;// ButtonStyleGetObjByButtonStyleId("0001");
  public objDataRow: Object = new Object();
  /// <summary>
  /// 行类型
  /// </summary>
  public rowType = '';
  public caption = '';
  public csType = '';
  public itemName4MultiModel = '';
  /// <summary>
  /// 是否专用于纯Html
  /// </summary>
  public is4PureHtml = false;
  public fldName = '';
  public tabName = '';
  public keyId = '';
  public colIndex = 0;

  public name4MvcAjax = '';
  public onClick4MvcAjax = '';
  public onClick4Html = '';
  public viewFeatureId = '';
  public featureId = '';
  public valueGivingModeId = '';
  public parentId = 0;
  public objId = 0;
  public func4OnClick: (strCtrlId: string) => void = (strCtrlId: string) => {
    console.log(strCtrlId);
  };
  public isHasFunc4OnClick = false;

  public static GetObjById(intObjId: number): ASPControlEx {
    let myObj = ASPControlEx.arrAspControlExLst.find((x) => x.objId == intObjId);
    if (myObj != null) return myObj;
    myObj = new ASPControlEx();
    myObj.objId = 0;
    return myObj;
  }
  public GetParentObj(): ASPControlEx {
    let myObj: ASPControlEx;
    if (this.parentId == 0) {
      myObj = new ASPControlEx();
      myObj.objId = 0;
      return myObj;
    }
    const myObj2 = ASPControlEx.arrAspControlExLst.find((x) => x.objId == this.parentId);
    if (myObj2 != null) return myObj2;
    myObj = new ASPControlEx();
    myObj.objId = 0;
    return myObj;
  }
  /// <summary>
  /// 是否列头复选框
  /// </summary>
  public isCheckBox = false;

  public StrTag = '';
}
