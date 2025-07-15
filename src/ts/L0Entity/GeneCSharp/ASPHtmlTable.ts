/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHtmlTable
 表名:ASPHtmlTable(00050218)
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
/// ASPHtml表(ASPHtmlTable)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHtmlTable extends ASPControlEx {
  public static _CurrTabName = 'ASPHtmlTable'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspHtmlTableId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 4;
  public attributeName = ['AspHtmlTableId', 'AspHtmlTableName', 'colNum', 'RowNum'];
  //以下是属性变量

  private mstrAspHtmlTableId = ''; //AspHtml表Id
  private mstrAspHtmlTableName = ''; //AspHtml表名
  private mintColNum = 0; //列数
  private mintRowNum = 0; //行数

  /// <summary>
  /// AspHtml表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlTableId() {
    return this.mstrAspHtmlTableId;
  }
  /// <summary>
  /// AspHtml表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlTableId(value: string) {
    this.mstrAspHtmlTableId = value;
  }

  /// <summary>
  /// AspHtml表名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHtmlTableName() {
    return this.mstrAspHtmlTableName;
  }
  /// <summary>
  /// AspHtml表名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHtmlTableName(value: string) {
    this.mstrAspHtmlTableName = value;
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
  /// 行数(说明:;字段类型:int;字段长度:4;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get RowNum() {
    return this.mintRowNum;
  }
  /// <summary>
  /// 行数(说明:;字段类型:int;字段长度:4;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set RowNum(value: number) {
    this.mintRowNum = value;
  }

  /// <summary>
  /// 常量:"AspHtmlTableId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlTableId(): string {
    return 'AspHtmlTableId';
  } //AspHtml表Id

  /// <summary>
  /// 常量:"AspHtmlTableName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHtmlTableName(): string {
    return 'AspHtmlTableName';
  } //AspHtml表名

  /// <summary>
  /// 常量:"colNum"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conColNum(): string {
    return 'colNum';
  } //列数

  /// <summary>
  /// 常量:"RowNum"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conRowNum(): string {
    return 'RowNum';
  } //行数
}
