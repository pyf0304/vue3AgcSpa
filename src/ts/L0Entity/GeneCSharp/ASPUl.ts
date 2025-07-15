/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPUl
 表名:ASPUl(00050434)
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
/// ASP无序列表(ASPUl)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPUl extends ASPControlEx {
  public static _CurrTabName = 'ASPUl'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspUlId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspUlId', 'AspUlName'];
  //以下是属性变量

  private mstrAspUlId = ''; //ASP无序列表Id
  private mstrAspUlName = ''; //ASP无序列表名

  /// <summary>
  /// ASP无序列表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspUlId() {
    return this.mstrAspUlId;
  }
  /// <summary>
  /// ASP无序列表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspUlId(value: string) {
    this.mstrAspUlId = value;
  }

  /// <summary>
  /// ASP无序列表名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspUlName() {
    return this.mstrAspUlName;
  }
  /// <summary>
  /// ASP无序列表名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspUlName(value: string) {
    this.mstrAspUlName = value;
  }

  /// <summary>
  /// 常量:"AspUlId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspUlId(): string {
    return 'AspUlId';
  } //ASP无序列表Id

  /// <summary>
  /// 常量:"AspUlName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspUlName(): string {
    return 'AspUlName';
  } //ASP无序列表名
}
