import { ASPButton } from '../GeneCSharp/ASPButton';
import { clsPrjFeatureEN } from '../PrjFunction/clsPrjFeatureEN';

export class ASPButtonEx extends ASPButton {
  //        public objFeatureRegionFldsENEx: clsFeatureRegionFldsENEx4GC = null;
  //    public objFeatureRegionFldsENEx: clsFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
  public objPrjFeature: clsPrjFeatureEN = new clsPrjFeatureEN();
  constructor() {
    super();

    this.cssClass = 'Button_Defa';
    this.controlType = 'ASPButtonEx';
  }
}
