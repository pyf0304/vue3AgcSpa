/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHr
 表名:ASPHr(00050415)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:12
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
/// ASP水平线(ASPHr)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHr extends ASPControlEx {
  public static _CurrTabName = 'ASPHr'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspHrId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspHrId', 'AspHrName'];
  //以下是属性变量

  private mstrAspHrId = ''; //Asp水平线Id
  private mstrAspHrName = ''; //Asp水平线名

  /// <summary>
  /// Asp水平线Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHrId() {
    return this.mstrAspHrId;
  }
  /// <summary>
  /// Asp水平线Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHrId(value: string) {
    this.mstrAspHrId = value;
  }

  /// <summary>
  /// Asp水平线名(说明:;字段类型:varchar;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHrName() {
    return this.mstrAspHrName;
  }
  /// <summary>
  /// Asp水平线名(说明:;字段类型:varchar;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHrName(value: string) {
    this.mstrAspHrName = value;
  }

  /// <summary>
  /// 常量:"AspHrId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHrId(): string {
    return 'AspHrId';
  } //Asp水平线Id

  /// <summary>
  /// 常量:"AspHrName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHrName(): string {
    return 'AspHrName';
  } //Asp水平线名
}
