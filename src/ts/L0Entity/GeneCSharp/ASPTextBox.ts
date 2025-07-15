/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPTextBox
 表名:ASPTextBox(00050224)
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
/// ASP文本框(ASPTextBox)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPTextBox extends ASPControlEx {
  constructor() {
    super();
  }
  public static _CurrTabName = 'ASPTextBox'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'aspTextBoxId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 3;
  public attributeName = ['aspTextBoxId', 'aspTextBoxName', 'placeholder'];
  //以下是属性变量

  private mstrAspTextBoxId = ''; //ASP文本框Id
  private mstrAspTextBoxName = ''; //ASP文本框名称
  private mstrplaceholder = ''; //placeholder

  /// <summary>
  /// ASP文本框Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aspTextBoxId() {
    return this.mstrAspTextBoxId;
  }
  /// <summary>
  /// ASP文本框Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aspTextBoxId(value: string) {
    this.mstrAspTextBoxId = value;
  }

  /// <summary>
  /// ASP文本框名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aspTextBoxName() {
    return this.mstrAspTextBoxName;
  }
  /// <summary>
  /// ASP文本框名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aspTextBoxName(value: string) {
    this.mstrAspTextBoxName = value;
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
  /// 常量:"aspTextBoxId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspTextBoxId(): string {
    return 'aspTextBoxId';
  } //ASP文本框Id

  /// <summary>
  /// 常量:"aspTextBoxName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspTextBoxName(): string {
    return 'aspTextBoxName';
  } //ASP文本框名称

  /// <summary>
  /// 常量:"placeholder"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conplaceholder(): string {
    return 'placeholder';
  } //placeholder
}
