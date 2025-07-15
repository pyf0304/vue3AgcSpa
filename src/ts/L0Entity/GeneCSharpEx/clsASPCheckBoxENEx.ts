import { ASPCheckBox } from '../GeneCSharp/ASPCheckBox';

export class ASPCheckBoxEx extends ASPCheckBox {
  constructor() {
    super();
    this.controlType = 'ASPCheckBoxEx';
  }
  public isChecked = false;
}
