import { ASPTextArea } from '../GeneCSharp/ASPTextArea';

export class ASPTextAreaEx extends ASPTextArea {
  constructor() {
    super();
    this.controlType = 'ASPTextAreaEx';
  }
  /// <summary>
  /// 文本模式
  /// </summary>
  public textMode = '';
}
