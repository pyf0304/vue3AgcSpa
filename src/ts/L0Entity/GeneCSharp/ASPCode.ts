/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPCode
 表名:ASPCode(00050433)
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
/// ASP代码(ASPCode)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPCode extends ASPControlEx {
  public static _CurrTabName = 'ASPCode'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspCodeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 4;
  public attributeName = ['AspCodeId', 'AspCodeName', 'CodeText', 'updDate'];
  //以下是属性变量

  private mstrAspCodeId = ''; //ASP代码Id
  private mstrAspCodeName = ''; //ASP代码名
  private mstrCodeText = ''; //代码文本
  private mstrUpdDate = ''; //修改日期

  /// <summary>
  /// ASP代码Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspCodeId() {
    return this.mstrAspCodeId;
  }
  /// <summary>
  /// ASP代码Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspCodeId(value: string) {
    this.mstrAspCodeId = value;
  }

  /// <summary>
  /// ASP代码名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspCodeName() {
    return this.mstrAspCodeName;
  }
  /// <summary>
  /// ASP代码名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspCodeName(value: string) {
    this.mstrAspCodeName = value;
  }

  /// <summary>
  /// 代码文本(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get CodeText() {
    return this.mstrCodeText;
  }
  /// <summary>
  /// 代码文本(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set CodeText(value: string) {
    this.mstrCodeText = value;
  }

  /// <summary>
  /// 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get updDate() {
    return this.mstrUpdDate;
  }
  /// <summary>
  /// 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set updDate(value: string) {
    this.mstrUpdDate = value;
  }

  /// <summary>
  /// 常量:"AspCodeId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspCodeId(): string {
    return 'AspCodeId';
  } //ASP代码Id

  /// <summary>
  /// 常量:"AspCodeName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspCodeName(): string {
    return 'AspCodeName';
  } //ASP代码名

  /// <summary>
  /// 常量:"CodeText"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conCodeText(): string {
    return 'CodeText';
  } //代码文本

  /// <summary>
  /// 常量:"updDate"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conUpdDate(): string {
    return 'updDate';
  } //修改日期
}
