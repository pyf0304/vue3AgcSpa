import { ASPHtmlInputEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHtmlInputENEx';

/// <summary>
/// ASPHtmlInput(ASPHtmlInput)
/// 数据源类型:SQL表
/// (AutoGCLib.BusinessLogicEx4CSharp:GeneCode)
/// </summary>
export class clsASPHtmlInputBLEx {
  static GeneHtmlControl(objASPHtmlInputENEx: ASPHtmlInputEx, objContainer: HTMLElement) {
    console.error(objASPHtmlInputENEx, objContainer);
    throw new Error('Method not implemented.');
  }

  public static GetEmptyHtmlInput(): ASPHtmlInputEx {
    const objASPHtmlInputENEx: ASPHtmlInputEx = new ASPHtmlInputEx();
    return objASPHtmlInputENEx;
  }

  public static GetInputSubmit(): ASPHtmlInputEx {
    const objASPHtmlInputENEx: ASPHtmlInputEx = new ASPHtmlInputEx();
    objASPHtmlInputENEx.type = 'submit';
    return objASPHtmlInputENEx;
  }
}
