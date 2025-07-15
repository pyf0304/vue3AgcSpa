/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPRow
 表名:ASPRow(00050219)
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
/// ASP行(ASPRow)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPRow extends ASPControlEx {
  public static _CurrTabName = 'ASPRow'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspRowId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspRowId', 'AspRowName'];
  //以下是属性变量

  private mstrAspRowId = ''; //Asp行Id
  private mstrAspRowName = ''; //Asp行名

  /// <summary>
  /// Asp行Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspRowId() {
    return this.mstrAspRowId;
  }
  /// <summary>
  /// Asp行Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspRowId(value: string) {
    this.mstrAspRowId = value;
  }

  /// <summary>
  /// Asp行名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspRowName() {
    return this.mstrAspRowName;
  }
  /// <summary>
  /// Asp行名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspRowName(value: string) {
    this.mstrAspRowName = value;
  }

  /// <summary>
  /// 常量:"AspRowId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspRowId(): string {
    return 'AspRowId';
  } //Asp行Id

  /// <summary>
  /// 常量:"AspRowName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspRowName(): string {
    return 'AspRowName';
  } //Asp行名
}
