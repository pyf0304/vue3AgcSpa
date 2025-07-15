/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHeaderTemplate
 表名:ASPHeaderTemplate(00050231)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:12
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
/// ASP头模板(ASPHeaderTemplate)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHeaderTemplate extends ASPControlEx {
  public static _CurrTabName = 'ASPHeaderTemplate'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPHeaderTemplateId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['ASPHeaderTemplateId', 'ASPHeaderTemplateName'];
  //以下是属性变量

  private mstrASPHeaderTemplateId = ''; //ASP头模板Id
  private mstrASPHeaderTemplateName = ''; //ASP头模板名

  /// <summary>
  /// ASP头模板Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPHeaderTemplateId() {
    return this.mstrASPHeaderTemplateId;
  }
  /// <summary>
  /// ASP头模板Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPHeaderTemplateId(value: string) {
    this.mstrASPHeaderTemplateId = value;
  }

  /// <summary>
  /// ASP头模板名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPHeaderTemplateName() {
    return this.mstrASPHeaderTemplateName;
  }
  /// <summary>
  /// ASP头模板名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPHeaderTemplateName(value: string) {
    this.mstrASPHeaderTemplateName = value;
  }

  /// <summary>
  /// 常量:"ASPHeaderTemplateId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPHeaderTemplateId(): string {
    return 'ASPHeaderTemplateId';
  } //ASP头模板Id

  /// <summary>
  /// 常量:"ASPHeaderTemplateName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPHeaderTemplateName(): string {
    return 'ASPHeaderTemplateName';
  } //ASP头模板名
}
