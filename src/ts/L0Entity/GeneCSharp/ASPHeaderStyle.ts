/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHeaderStyle
 表名:ASPHeaderStyle(00050232)
 生成代码版本:2020.06.17.1
 生成日期:2020/06/17 16:44:13
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
/// ASPHeaderStyle(ASPHeaderStyle)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHeaderStyle extends ASPControlEx {
  public static _CurrTabName = 'ASPHeaderStyle'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPHeaderStyleId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['ASPHeaderStyleId', 'ASPHeaderStyleName'];
  //以下是属性变量

  private mstrASPHeaderStyleId = ''; //ASPHeaderStyleId
  private mstrASPHeaderStyleName = ''; //ASPHeaderStyleName

  /// <summary>
  /// ASPHeaderStyleId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPHeaderStyleId() {
    return this.mstrASPHeaderStyleId;
  }
  /// <summary>
  /// ASPHeaderStyleId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPHeaderStyleId(value: string) {
    this.mstrASPHeaderStyleId = value;
  }

  /// <summary>
  /// ASPHeaderStyleName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPHeaderStyleName() {
    return this.mstrASPHeaderStyleName;
  }
  /// <summary>
  /// ASPHeaderStyleName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPHeaderStyleName(value: string) {
    this.mstrASPHeaderStyleName = value;
  }

  /// <summary>
  /// 常量:"ASPHeaderStyleId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPHeaderStyleId(): string {
    return 'ASPHeaderStyleId';
  } //ASPHeaderStyleId

  /// <summary>
  /// 常量:"ASPHeaderStyleName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPHeaderStyleName(): string {
    return 'ASPHeaderStyleName';
  } //ASPHeaderStyleName
}
