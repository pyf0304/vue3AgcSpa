/*-- -- -- -- -- -- -- -- -- -- --
类名:ASPBody
表名:ASPBody(00050215)
生成代码版本:2020.06.13.1
生成日期:2020/06/13 12:06:09
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
/// ASP主体(ASPBody)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPBody extends ASPControlEx {
  public static _CurrTabName = 'ASPBody'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspBodyId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspBodyId', 'AspBodyName'];
  //以下是属性变量

  private mstrAspBodyId = ''; //Asp主体Id
  private mstrAspBodyName = ''; //Asp主体名称

  /// <summary>
  /// Asp主体Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspBodyId() {
    return this.mstrAspBodyId;
  }
  /// <summary>
  /// Asp主体Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspBodyId(value: string) {
    this.mstrAspBodyId = value;
  }

  /// <summary>
  /// Asp主体名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspBodyName() {
    return this.mstrAspBodyName;
  }
  /// <summary>
  /// Asp主体名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspBodyName(value: string) {
    this.mstrAspBodyName = value;
  }

  /// <summary>
  /// 常量:"AspBodyId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspBodyId(): string {
    return 'AspBodyId';
  } //Asp主体Id

  /// <summary>
  /// 常量:"AspBodyName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspBodyName(): string {
    return 'AspBodyName';
  } //Asp主体名称
}
