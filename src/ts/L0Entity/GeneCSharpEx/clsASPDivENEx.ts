import { ASPDiv } from '../GeneCSharp/ASPDiv';

export class ASPDivEx extends ASPDiv {
  //public Function ContentFunc = null;
  public ContentFunc: Function = () => {}; //函数
  constructor() {
    super();
    this.controlType = 'ASPDivEx';
  }
}
