/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPCol
 表名:ASPCol(00050220)
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
/// ASP列(ASPCol)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPCol extends ASPControlEx {
  public static _CurrTabName = 'ASPCol'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspColId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 3;
  public attributeName = ['AspColId', 'AspColName', 'colSpan'];
  //以下是属性变量

  private mstrAspColId = ''; //Asp列Id
  private mstrAspColName = ''; //Asp列名
  private mintColSpan = 0; //跨列数

  /// <summary>
  /// Asp列Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspColId() {
    return this.mstrAspColId;
  }
  /// <summary>
  /// Asp列Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspColId(value: string) {
    this.mstrAspColId = value;
  }

  /// <summary>
  /// Asp列名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspColName() {
    return this.mstrAspColName;
  }
  /// <summary>
  /// Asp列名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspColName(value: string) {
    this.mstrAspColName = value;
  }

  /// <summary>
  /// 跨列数(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get colSpan() {
    return this.mintColSpan;
  }
  /// <summary>
  /// 跨列数(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set colSpan(value: number) {
    this.mintColSpan = value;
  }

  /// <summary>
  /// 常量:"AspColId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspColId(): string {
    return 'AspColId';
  } //Asp列Id

  /// <summary>
  /// 常量:"AspColName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspColName(): string {
    return 'AspColName';
  } //Asp列名

  /// <summary>
  /// 常量:"colSpan"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conColSpan(): string {
    return 'colSpan';
  } //跨列数
}
