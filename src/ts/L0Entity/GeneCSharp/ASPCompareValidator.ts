/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPCompareValidator
 表名:ASPCompareValidator(00050459)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 15:53:35
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
/// ASP校验(ASPCompareValidator)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPCompareValidator extends ASPControlEx {
  public static _CurrTabName = 'ASPCompareValidator'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspCompareValidatorId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 6;
  public attributeName = [
    'AspCompareValidatorId',
    'AspCompareValidatorName',
    'ControlToValidate',
    'ErrorMessage',
    'EnableClientScript',
    'Operator',
  ];
  //以下是属性变量

  private mstrAspCompareValidatorId = ''; //Asp校验Id
  private mstrAspCompareValidatorName = ''; //Asp校验名称
  private mstrControlToValidate = ''; //校验控件
  private mstrErrorMessage = ''; //错误信息
  private mstrEnableClientScript = ''; //可以使用客户端脚本
  private mstrOperator = ''; //操作

  /// <summary>
  /// Asp校验Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspCompareValidatorId() {
    return this.mstrAspCompareValidatorId;
  }
  /// <summary>
  /// Asp校验Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspCompareValidatorId(value: string) {
    this.mstrAspCompareValidatorId = value;
  }

  /// <summary>
  /// Asp校验名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspCompareValidatorName() {
    return this.mstrAspCompareValidatorName;
  }
  /// <summary>
  /// Asp校验名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspCompareValidatorName(value: string) {
    this.mstrAspCompareValidatorName = value;
  }

  /// <summary>
  /// 校验控件(说明:;字段类型:varchar;字段长度:100;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ControlToValidate() {
    return this.mstrControlToValidate;
  }
  /// <summary>
  /// 校验控件(说明:;字段类型:varchar;字段长度:100;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ControlToValidate(value: string) {
    this.mstrControlToValidate = value;
  }

  /// <summary>
  /// 错误信息(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ErrorMessage() {
    return this.mstrErrorMessage;
  }
  /// <summary>
  /// 错误信息(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ErrorMessage(value: string) {
    this.mstrErrorMessage = value;
  }

  /// <summary>
  /// 可以使用客户端脚本(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get EnableClientScript() {
    return this.mstrEnableClientScript;
  }
  /// <summary>
  /// 可以使用客户端脚本(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set EnableClientScript(value: string) {
    this.mstrEnableClientScript = value;
  }

  /// <summary>
  /// 操作(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get Operator() {
    return this.mstrOperator;
  }
  /// <summary>
  /// 操作(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set Operator(value: string) {
    this.mstrOperator = value;
  }

  /// <summary>
  /// 常量:"AspCompareValidatorId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspCompareValidatorId(): string {
    return 'AspCompareValidatorId';
  } //Asp校验Id

  /// <summary>
  /// 常量:"AspCompareValidatorName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspCompareValidatorName(): string {
    return 'AspCompareValidatorName';
  } //Asp校验名称

  /// <summary>
  /// 常量:"ControlToValidate"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conControlToValidate(): string {
    return 'ControlToValidate';
  } //校验控件

  /// <summary>
  /// 常量:"ErrorMessage"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conErrorMessage(): string {
    return 'ErrorMessage';
  } //错误信息

  /// <summary>
  /// 常量:"EnableClientScript"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conEnableClientScript(): string {
    return 'EnableClientScript';
  } //可以使用客户端脚本

  /// <summary>
  /// 常量:"Operator"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conOperator(): string {
    return 'Operator';
  } //操作
}
