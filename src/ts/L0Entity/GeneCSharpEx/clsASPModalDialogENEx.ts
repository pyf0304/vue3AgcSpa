import { ASPModalDialog } from '../GeneCSharp/ASPModalDialog';

export class ASPModalDialogEx extends ASPModalDialog {
  constructor() {
    super();
  }
  //public Func<string> ContentFunc = null;
  public ContentFunc: Function = () => {}; //函数
}
