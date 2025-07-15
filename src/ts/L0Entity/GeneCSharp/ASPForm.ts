/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPForm
 表名:ASPForm(00050216)
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
/// ASP窗体(ASPForm)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPForm extends ASPControlEx {
  public static _CurrTabName = 'ASPForm'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspFormId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspFormId', 'AspFormName'];
  //以下是属性变量

  private mstrAspFormId = ''; //Asp窗体Id
  private mstrAspFormName = ''; //Asp窗体名称

  /// <summary>
  /// Asp窗体Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspFormId() {
    return this.mstrAspFormId;
  }
  /// <summary>
  /// Asp窗体Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspFormId(value: string) {
    this.mstrAspFormId = value;
  }

  /// <summary>
  /// Asp窗体名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspFormName() {
    return this.mstrAspFormName;
  }
  /// <summary>
  /// Asp窗体名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspFormName(value: string) {
    this.mstrAspFormName = value;
  }

  /// <summary>
  /// 常量:"AspFormId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspFormId(): string {
    return 'AspFormId';
  } //Asp窗体Id

  /// <summary>
  /// 常量:"AspFormName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspFormName(): string {
    return 'AspFormName';
  } //Asp窗体名称
}
