/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPPagerTemplate
 表名:ASPPagerTemplate(00050228)
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
/// ASP分页模板(ASPPagerTemplate)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPPagerTemplate extends ASPControlEx {
  public static _CurrTabName = 'ASPPagerTemplate'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPPagerTemplateId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['ASPPagerTemplateId', 'ASPPagerTemplateName'];
  //以下是属性变量

  private mstrASPPagerTemplateId = ''; //ASP分页模板Id
  private mstrASPPagerTemplateName = ''; //ASP分页模板名

  /// <summary>
  /// ASP分页模板Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPPagerTemplateId() {
    return this.mstrASPPagerTemplateId;
  }
  /// <summary>
  /// ASP分页模板Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPPagerTemplateId(value: string) {
    this.mstrASPPagerTemplateId = value;
  }

  /// <summary>
  /// ASP分页模板名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPPagerTemplateName() {
    return this.mstrASPPagerTemplateName;
  }
  /// <summary>
  /// ASP分页模板名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPPagerTemplateName(value: string) {
    this.mstrASPPagerTemplateName = value;
  }

  /// <summary>
  /// 常量:"ASPPagerTemplateId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPPagerTemplateId(): string {
    return 'ASPPagerTemplateId';
  } //ASP分页模板Id

  /// <summary>
  /// 常量:"ASPPagerTemplateName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPPagerTemplateName(): string {
    return 'ASPPagerTemplateName';
  } //ASP分页模板名
}
