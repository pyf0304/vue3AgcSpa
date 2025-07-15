/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPLi
 表名:ASPLi(00050435)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:14
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
/// ASP列表项目(ASPLi)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPLi extends ASPControlEx {
  public static _CurrTabName = 'ASPLi'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspLiId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspLiId', 'AspLiName'];
  //以下是属性变量

  private mstrAspLiId = ''; //ASP列表项目Id
  private mstrAspLiName = ''; //ASP列表项目名

  /// <summary>
  /// ASP列表项目Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspLiId() {
    return this.mstrAspLiId;
  }
  /// <summary>
  /// ASP列表项目Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspLiId(value: string) {
    this.mstrAspLiId = value;
  }

  /// <summary>
  /// ASP列表项目名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspLiName() {
    return this.mstrAspLiName;
  }
  /// <summary>
  /// ASP列表项目名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspLiName(value: string) {
    this.mstrAspLiName = value;
  }

  /// <summary>
  /// 常量:"AspLiId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspLiId(): string {
    return 'AspLiId';
  } //ASP列表项目Id

  /// <summary>
  /// 常量:"AspLiName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspLiName(): string {
    return 'AspLiName';
  } //ASP列表项目名
}
