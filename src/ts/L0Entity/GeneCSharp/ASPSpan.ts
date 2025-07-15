/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPSpan
 表名:ASPSpan(00050425)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:15
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
/// ASPSpan标签(ASPSpan)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPSpan extends ASPControlEx {
  public static _CurrTabName = 'ASPSpan'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPSpanId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['ASPSpanId', 'ASPSpanName'];
  //以下是属性变量

  private mstrASPSpanId = ''; //Asp标签Id
  private mstrASPSpanName = ''; //Asp标签名

  /// <summary>
  /// Asp标签Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPSpanId() {
    return this.mstrASPSpanId;
  }
  /// <summary>
  /// Asp标签Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPSpanId(value: string) {
    this.mstrASPSpanId = value;
  }

  /// <summary>
  /// Asp标签名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPSpanName() {
    return this.mstrASPSpanName;
  }
  /// <summary>
  /// Asp标签名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPSpanName(value: string) {
    this.mstrASPSpanName = value;
  }

  /// <summary>
  /// 常量:"ASPSpanId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPSpanId(): string {
    return 'ASPSpanId';
  } //Asp标签Id

  /// <summary>
  /// 常量:"ASPSpanName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPSpanName(): string {
    return 'ASPSpanName';
  } //Asp标签名
}
