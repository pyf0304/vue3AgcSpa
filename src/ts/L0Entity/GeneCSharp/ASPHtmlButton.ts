/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHtmlButton
 表名:ASPHtmlButton(00050416)
 生成代码版本:2020.06.17.1
 生成日期:2020/06/17 18:06:57
 生成者:
 工程名称:AGC
 工程ID:0005
 相关数据库:tzar.tpddns.cn,19433AGC_CS12
 prjDataBaseId:0213
 模块中文名:生成C#代码
 模块英文名:GeneCSharp
 框架-层名:纯粹类(PureClass)
 编程语言:TypeScript
 == == == == == == == == == == == == 
 */
/// <summary>
/// ASPHtml按钮(ASPHtmlButton)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHtmlButton extends ASPControlEx {
  public static _CurrTabName = 'ASPHtmlButton'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspHtmlButtonId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspHtmlButtonId', 'AspHtmlButtonName'];
  //以下是属性变量

  private mstrAspHtmlButtonId = ''; //AspHtmlButtonId
  private mstrAspHtmlButtonName = ''; //AspHtmlButtonName

  /// <summary>
  /// AspHtmlButtonId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlButtonId() {
    return this.mstrAspHtmlButtonId;
  }
  /// <summary>
  /// AspHtmlButtonId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlButtonId(value: string) {
    this.mstrAspHtmlButtonId = value;
  }

  /// <summary>
  /// AspHtmlButtonName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlButtonName() {
    return this.mstrAspHtmlButtonName;
  }
  /// <summary>
  /// AspHtmlButtonName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlButtonName(value: string) {
    this.mstrAspHtmlButtonName = value;
  }

  /// <summary>
  /// 常量:"AspHtmlButtonId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlButtonId(): string {
    return 'AspHtmlButtonId';
  } //AspHtmlButtonId

  /// <summary>
  /// 常量:"AspHtmlButtonName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlButtonName(): string {
    return 'AspHtmlButtonName';
  } //AspHtmlButtonName
}
