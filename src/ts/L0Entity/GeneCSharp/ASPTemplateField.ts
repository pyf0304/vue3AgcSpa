/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPTemplateField
 表名:ASPTemplateField(00050227)
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
/// ASP模板字段(ASPTemplateField)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPTemplateField extends ASPControlEx {
  public static _CurrTabName = 'ASPTemplateField'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPTemplateFieldId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 3;
  public attributeName = ['ASPTemplateFieldId', 'ASPTemplateFieldName', 'headerText'];
  //以下是属性变量

  private mstrASPTemplateFieldId = ''; //ASP模板字段Id
  private mstrASPTemplateFieldName = ''; //ASP模板字段名
  private mstrHeaderText = ''; //列头

  /// <summary>
  /// ASP模板字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPTemplateFieldId() {
    return this.mstrASPTemplateFieldId;
  }
  /// <summary>
  /// ASP模板字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPTemplateFieldId(value: string) {
    this.mstrASPTemplateFieldId = value;
  }

  /// <summary>
  /// ASP模板字段名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPTemplateFieldName() {
    return this.mstrASPTemplateFieldName;
  }
  /// <summary>
  /// ASP模板字段名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPTemplateFieldName(value: string) {
    this.mstrASPTemplateFieldName = value;
  }

  /// <summary>
  /// 列头(说明:;字段类型:varchar;字段长度:100;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get headerText() {
    return this.mstrHeaderText;
  }
  /// <summary>
  /// 列头(说明:;字段类型:varchar;字段长度:100;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set headerText(value: string) {
    this.mstrHeaderText = value;
  }

  /// <summary>
  /// 常量:"ASPTemplateFieldId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPTemplateFieldId(): string {
    return 'ASPTemplateFieldId';
  } //ASP模板字段Id

  /// <summary>
  /// 常量:"ASPTemplateFieldName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPTemplateFieldName(): string {
    return 'ASPTemplateFieldName';
  } //ASP模板字段名

  /// <summary>
  /// 常量:"headerText"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conHeaderText(): string {
    return 'headerText';
  } //列头
}
