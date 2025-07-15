/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPDiv
 表名:ASPDiv(00050221)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:10
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
/// ASP层(ASPDiv)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPDiv extends ASPControlEx {
  public static _CurrTabName = 'ASPDiv'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspDivId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspDivId', 'AspDivName'];
  //以下是属性变量

  private mstrAspDivId = ''; //ASP层Id
  private mstrAspDivName = ''; //ASP层名

  /// <summary>
  /// ASP层Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspDivId() {
    return this.mstrAspDivId;
  }
  /// <summary>
  /// ASP层Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspDivId(value: string) {
    this.mstrAspDivId = value;
  }

  /// <summary>
  /// ASP层名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspDivName() {
    return this.mstrAspDivName;
  }
  /// <summary>
  /// ASP层名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspDivName(value: string) {
    this.mstrAspDivName = value;
  }

  /// <summary>
  /// 常量:"AspDivId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspDivId(): string {
    return 'AspDivId';
  } //ASP层Id

  /// <summary>
  /// 常量:"AspDivName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspDivName(): string {
    return 'AspDivName';
  } //ASP层名
}
