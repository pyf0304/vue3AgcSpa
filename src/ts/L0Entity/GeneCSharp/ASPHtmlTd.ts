/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHtmlTd
 表名:ASPHtmlTd(00050442)
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
/// ASPHtml表单元格(ASPHtmlTd)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHtmlTd extends ASPControlEx {
  public static _CurrTabName = 'ASPHtmlTd'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspHtmlTdId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspHtmlTdId', 'AspHtmlTdName'];
  //以下是属性变量

  private mstrAspHtmlTdId = ''; //AspHtml表单元格Id
  private mstrAspHtmlTdName = ''; //AspHtml表单元格名

  /// <summary>
  /// AspHtml表单元格Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlTdId() {
    return this.mstrAspHtmlTdId;
  }
  /// <summary>
  /// AspHtml表单元格Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlTdId(value: string) {
    this.mstrAspHtmlTdId = value;
  }

  /// <summary>
  /// AspHtml表单元格名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlTdName() {
    return this.mstrAspHtmlTdName;
  }
  /// <summary>
  /// AspHtml表单元格名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlTdName(value: string) {
    this.mstrAspHtmlTdName = value;
  }

  /// <summary>
  /// 常量:"AspHtmlTdId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlTdId(): string {
    return 'AspHtmlTdId';
  } //AspHtml表单元格Id

  /// <summary>
  /// 常量:"AspHtmlTdName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlTdName(): string {
    return 'AspHtmlTdName';
  } //AspHtml表单元格名
}
