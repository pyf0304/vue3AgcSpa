/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPH4
 表名:ASPH4(00050450)
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
/// ASPH4(ASPH4)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPH4 extends ASPControlEx {
  public static _CurrTabName = 'ASPH4'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspH4Id'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspH4Id', 'AspH4Name'];
  //以下是属性变量

  private mstrAspH4Id = ''; //AspH4Id
  private mstrAspH4Name = ''; //AspH4Name

  /// <summary>
  /// AspH4Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspH4Id() {
    return this.mstrAspH4Id;
  }
  /// <summary>
  /// AspH4Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspH4Id(value: string) {
    this.mstrAspH4Id = value;
  }

  /// <summary>
  /// AspH4Name(说明:;字段类型:varchar;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspH4Name() {
    return this.mstrAspH4Name;
  }
  /// <summary>
  /// AspH4Name(说明:;字段类型:varchar;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspH4Name(value: string) {
    this.mstrAspH4Name = value;
  }

  /// <summary>
  /// 常量:"AspH4Id"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspH4Id(): string {
    return 'AspH4Id';
  } //AspH4Id

  /// <summary>
  /// 常量:"AspH4Name"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspH4Name(): string {
    return 'AspH4Name';
  } //AspH4Name
}
