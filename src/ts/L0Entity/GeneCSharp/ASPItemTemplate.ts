/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPItemTemplate
 表名:ASPItemTemplate(00050229)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:13
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
/// ASP项模板(ASPItemTemplate)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPItemTemplate extends ASPControlEx {
  public static _CurrTabName = 'ASPItemTemplate'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPItemTemplateId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['ASPItemTemplateId', 'ASPItemTemplateName'];
  //以下是属性变量

  private mstrASPItemTemplateId = ''; //ASP项模板Id
  private mstrASPItemTemplateName = ''; //ASP项模板名

  /// <summary>
  /// ASP项模板Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPItemTemplateId() {
    return this.mstrASPItemTemplateId;
  }
  /// <summary>
  /// ASP项模板Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPItemTemplateId(value: string) {
    this.mstrASPItemTemplateId = value;
  }

  /// <summary>
  /// ASP项模板名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPItemTemplateName() {
    return this.mstrASPItemTemplateName;
  }
  /// <summary>
  /// ASP项模板名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPItemTemplateName(value: string) {
    this.mstrASPItemTemplateName = value;
  }

  /// <summary>
  /// 常量:"ASPItemTemplateId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPItemTemplateId(): string {
    return 'ASPItemTemplateId';
  } //ASP项模板Id

  /// <summary>
  /// 常量:"ASPItemTemplateName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPItemTemplateName(): string {
    return 'ASPItemTemplateName';
  } //ASP项模板名
}
