/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPTextArea
 表名:ASPTextArea(00050224)
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
/// ASP文本框(ASPTextArea)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPTextArea extends ASPControlEx {
  constructor() {
    super();
  }
  public static _CurrTabName = 'ASPTextArea'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'aspTextAreaId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 3;
  public attributeName = ['aspTextAreaId', 'aspTextAreaName', 'placeholder'];
  //以下是属性变量

  private mstrAspTextAreaId = ''; //ASP文本框Id
  private mstrAspTextAreaName = ''; //ASP文本框名称
  private mstrplaceholder = ''; //placeholder

  /// <summary>
  /// ASP文本框Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aspTextAreaId() {
    return this.mstrAspTextAreaId;
  }
  /// <summary>
  /// ASP文本框Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aspTextAreaId(value: string) {
    this.mstrAspTextAreaId = value;
  }

  /// <summary>
  /// ASP文本框名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aspTextAreaName() {
    return this.mstrAspTextAreaName;
  }
  /// <summary>
  /// ASP文本框名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aspTextAreaName(value: string) {
    this.mstrAspTextAreaName = value;
  }

  /// <summary>
  /// placeholder(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get placeholder() {
    return this.mstrplaceholder;
  }
  /// <summary>
  /// placeholder(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set placeholder(value: string) {
    this.mstrplaceholder = value;
  }

  /// <summary>
  /// 常量:"aspTextAreaId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspTextAreaId(): string {
    return 'aspTextAreaId';
  } //ASP文本框Id

  /// <summary>
  /// 常量:"aspTextAreaName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspTextAreaName(): string {
    return 'aspTextAreaName';
  } //ASP文本框名称

  /// <summary>
  /// 常量:"placeholder"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conplaceholder(): string {
    return 'placeholder';
  } //placeholder
}
