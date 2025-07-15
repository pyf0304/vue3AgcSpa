/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPButton
 表名:ASPButton(00050223)
 生成代码版本:2020.06.17.1
 生成日期:2020/06/17 16:18:50
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
/// ASP按钮(ASPButton)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPButton extends ASPControlEx {
  public static _CurrTabName = 'ASPButton'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspButtonId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspButtonId', 'AspButtonName'];
  //以下是属性变量

  private mstrAspButtonId = ''; //Asp按钮Id
  private mstrAspButtonName = ''; //Asp按钮名称

  /// <summary>
  /// Asp按钮Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspButtonId() {
    return this.mstrAspButtonId;
  }
  /// <summary>
  /// Asp按钮Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspButtonId(value: string) {
    this.mstrAspButtonId = value;
  }

  /// <summary>
  /// Asp按钮名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspButtonName() {
    return this.mstrAspButtonName;
  }
  /// <summary>
  /// Asp按钮名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspButtonName(value: string) {
    this.mstrAspButtonName = value;
  }

  /// <summary>
  /// 常量:"AspButtonId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspButtonId(): string {
    return 'AspButtonId';
  } //Asp按钮Id

  /// <summary>
  /// 常量:"AspButtonName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspButtonName(): string {
    return 'AspButtonName';
  } //Asp按钮名称
}
