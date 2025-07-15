import { ASPTextBox } from '../GeneCSharp/ASPTextBox';

export class ASPTextBoxEx extends ASPTextBox {
  constructor() {
    super();
    this.controlType = 'ASPTextBoxEx';
  }
  /// <summary>
  /// 文本模式
  /// </summary>
  public textMode = '';
}
