/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPLinkButton
 表名:ASPLinkButton(00050230)
 生成代码版本:2020.06.17.1
 生成日期:2020/06/17 18:15:05
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
/// ASP链接按钮(ASPLinkButton)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPLinkButton extends ASPControlEx {
  public static _CurrTabName = 'ASPLinkButton'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPLinkButtonId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['ASPLinkButtonId', 'ASPLinkButtonName'];
  //以下是属性变量

  private mstrASPLinkButtonId = ''; //ASP链接按钮Id
  private mstrASPLinkButtonName = ''; //ASP链接按钮名

  /// <summary>
  /// ASP链接按钮Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPLinkButtonId() {
    return this.mstrASPLinkButtonId;
  }
  /// <summary>
  /// ASP链接按钮Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPLinkButtonId(value: string) {
    this.mstrASPLinkButtonId = value;
  }

  /// <summary>
  /// ASP链接按钮名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPLinkButtonName() {
    return this.mstrASPLinkButtonName;
  }
  /// <summary>
  /// ASP链接按钮名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPLinkButtonName(value: string) {
    this.mstrASPLinkButtonName = value;
  }

  /// <summary>
  /// 常量:"ASPLinkButtonId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPLinkButtonId(): string {
    return 'ASPLinkButtonId';
  } //ASP链接按钮Id

  /// <summary>
  /// 常量:"ASPLinkButtonName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPLinkButtonName(): string {
    return 'ASPLinkButtonName';
  } //ASP链接按钮名
}
