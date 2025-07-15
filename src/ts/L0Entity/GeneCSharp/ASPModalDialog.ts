/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPModalDialog
 表名:ASPModalDialog(00050443)
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
/// ASP模态对话框(ASPModalDialog)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPModalDialog extends ASPControlEx {
  public static _CurrTabName = 'ASPModalDialog'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspModalDialogId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 3;
  public attributeName = ['AspModalDialogId', 'AspModalDialogName', 'modal_title'];
  //以下是属性变量

  private mstrAspModalDialogId = ''; //Asp对话框Id
  private mstrAspModalDialogName = ''; //Asp对话框名
  private mstrmodal_title = ''; //对话框标题

  /// <summary>
  /// Asp对话框Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspModalDialogId() {
    return this.mstrAspModalDialogId;
  }
  /// <summary>
  /// Asp对话框Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspModalDialogId(value: string) {
    this.mstrAspModalDialogId = value;
  }

  /// <summary>
  /// Asp对话框名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspModalDialogName() {
    return this.mstrAspModalDialogName;
  }
  /// <summary>
  /// Asp对话框名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspModalDialogName(value: string) {
    this.mstrAspModalDialogName = value;
  }

  /// <summary>
  /// 对话框标题(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get modal_title() {
    return this.mstrmodal_title;
  }
  /// <summary>
  /// 对话框标题(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set modal_title(value: string) {
    this.mstrmodal_title = value;
  }

  /// <summary>
  /// 常量:"AspModalDialogId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspModalDialogId(): string {
    return 'AspModalDialogId';
  } //Asp对话框Id

  /// <summary>
  /// 常量:"AspModalDialogName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspModalDialogName(): string {
    return 'AspModalDialogName';
  } //Asp对话框名

  /// <summary>
  /// 常量:"modal_title"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conmodal_title(): string {
    return 'modal_title';
  } //对话框标题
}
