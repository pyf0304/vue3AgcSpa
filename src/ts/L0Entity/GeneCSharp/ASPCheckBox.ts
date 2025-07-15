/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPCheckBox
 表名:ASPCheckBox(00050233)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/14 12:57:54
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
/// ASP复选框(ASPCheckBox)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPCheckBox extends ASPControlEx {
  public static _CurrTabName = 'ASPCheckBox'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPCheckBoxId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['ASPCheckBoxId', 'ASPCheckBoxName'];
  //以下是属性变量

  private mstrASPCheckBoxId = ''; //ASP复选框Id
  private mstrASPCheckBoxName = ''; //ASP复选框名

  /// <summary>
  /// ASP复选框Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPCheckBoxId() {
    return this.mstrASPCheckBoxId;
  }
  /// <summary>
  /// ASP复选框Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPCheckBoxId(value: string) {
    this.mstrASPCheckBoxId = value;
  }

  /// <summary>
  /// ASP复选框名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPCheckBoxName() {
    return this.mstrASPCheckBoxName;
  }
  /// <summary>
  /// ASP复选框名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPCheckBoxName(value: string) {
    this.mstrASPCheckBoxName = value;
  }

  /// <summary>
  /// 常量:"ASPCheckBoxId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPCheckBoxId(): string {
    return 'ASPCheckBoxId';
  } //ASP复选框Id

  /// <summary>
  /// 常量:"ASPCheckBoxName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPCheckBoxName(): string {
    return 'ASPCheckBoxName';
  } //ASP复选框名
}
