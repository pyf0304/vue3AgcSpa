/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHtmlTr
 表名:ASPHtmlTr(00050441)
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
/// ASPHtml表行(ASPHtmlTr)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHtmlTr extends ASPControlEx {
  public static _CurrTabName = 'ASPHtmlTr'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspHtmlTrId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 3;
  public attributeName = ['AspHtmlTrId', 'AspHtmlTrName', 'colNum'];
  //以下是属性变量

  private mstrAspHtmlTrId = ''; //AspHtml表行Id
  private mstrAspHtmlTrName = ''; //AspHtml表行名
  private mintColNum = 0; //列数

  /// <summary>
  /// AspHtml表行Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlTrId() {
    return this.mstrAspHtmlTrId;
  }
  /// <summary>
  /// AspHtml表行Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlTrId(value: string) {
    this.mstrAspHtmlTrId = value;
  }

  /// <summary>
  /// AspHtml表行名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlTrName() {
    return this.mstrAspHtmlTrName;
  }
  /// <summary>
  /// AspHtml表行名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlTrName(value: string) {
    this.mstrAspHtmlTrName = value;
  }

  /// <summary>
  /// 列数(说明:;字段类型:int;字段长度:4;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get colNum() {
    return this.mintColNum;
  }
  /// <summary>
  /// 列数(说明:;字段类型:int;字段长度:4;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set colNum(value: number) {
    this.mintColNum = value;
  }

  /// <summary>
  /// 常量:"AspHtmlTrId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlTrId(): string {
    return 'AspHtmlTrId';
  } //AspHtml表行Id

  /// <summary>
  /// 常量:"AspHtmlTrName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlTrName(): string {
    return 'AspHtmlTrName';
  } //AspHtml表行名

  /// <summary>
  /// 常量:"colNum"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conColNum(): string {
    return 'colNum';
  } //列数
}
