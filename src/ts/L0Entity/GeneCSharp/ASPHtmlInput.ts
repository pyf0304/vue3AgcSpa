/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHtmlInput
 表名:ASPHtmlInput(00050449)
 生成代码版本:2020.06.17.1
 生成日期:2020/06/17 18:09:50
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
/// ASPHtmlInput(ASPHtmlInput)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHtmlInput extends ASPControlEx {
  public static _CurrTabName = 'ASPHtmlInput'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspHtmlInputId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspHtmlInputId', 'AspHtmlInputName'];
  //以下是属性变量

  private mstrAspHtmlInputId = ''; //AspHtmlInputId
  private mstrAspHtmlInputName = ''; //AspHtmlInputName

  /// <summary>
  /// AspHtmlInputId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlInputId() {
    return this.mstrAspHtmlInputId;
  }
  /// <summary>
  /// AspHtmlInputId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlInputId(value: string) {
    this.mstrAspHtmlInputId = value;
  }

  /// <summary>
  /// AspHtmlInputName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlInputName() {
    return this.mstrAspHtmlInputName;
  }
  /// <summary>
  /// AspHtmlInputName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlInputName(value: string) {
    this.mstrAspHtmlInputName = value;
  }

  /// <summary>
  /// 常量:"AspHtmlInputId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlInputId(): string {
    return 'AspHtmlInputId';
  } //AspHtmlInputId

  /// <summary>
  /// 常量:"AspHtmlInputName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlInputName(): string {
    return 'AspHtmlInputName';
  } //AspHtmlInputName
}
