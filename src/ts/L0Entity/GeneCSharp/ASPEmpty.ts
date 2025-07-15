/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPEmpty
 表名:ASPEmpty(00050432)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:11
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
/// ASP空(ASPEmpty)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPEmpty extends ASPControlEx {
  public static _CurrTabName = 'ASPEmpty'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspEmptyId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspEmptyId', 'AspEmptyName'];
  //以下是属性变量

  private mstrAspEmptyId = ''; //ASP空Id
  private mstrAspEmptyName = ''; //ASP空名

  /// <summary>
  /// ASP空Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspEmptyId() {
    return this.mstrAspEmptyId;
  }
  /// <summary>
  /// ASP空Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspEmptyId(value: string) {
    this.mstrAspEmptyId = value;
  }

  /// <summary>
  /// ASP空名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspEmptyName() {
    return this.mstrAspEmptyName;
  }
  /// <summary>
  /// ASP空名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspEmptyName(value: string) {
    this.mstrAspEmptyName = value;
  }

  /// <summary>
  /// 常量:"AspEmptyId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspEmptyId(): string {
    return 'AspEmptyId';
  } //ASP空Id

  /// <summary>
  /// 常量:"AspEmptyName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspEmptyName(): string {
    return 'AspEmptyName';
  } //ASP空名
}
