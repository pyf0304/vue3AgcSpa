/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPGridView
 表名:ASPGridView(00050225)
 生成代码版本:2020.06.17.1
 生成日期:2020/06/17 18:14:25
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
/// ASP表格视图(ASPGridView)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPGridView extends ASPControlEx {
  public static _CurrTabName = 'ASPGridView'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPGVId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 12;
  public attributeName = [
    'ASPGVId',
    'ASPGVName',
    'AllowPaging',
    'AllowSorting',
    'AutoGenerateColumns',
    'IsInTab',
    'IsJumpPage',
    'PageSize',
    'IsRadio',
    'IsCheck',
    'fontSize',
    'fontName',
  ];
  //以下是属性变量

  private mstrASPGVId = ''; //Asp表格视图Id
  private mstrASPGVName = ''; //Asp表格视图名
  private mbolAllowPaging = false; //允许分页
  private mbolAllowSorting = false; //允许排序
  private mbolAutoGenerateColumns = false; //自动生成列
  private mbolIsInTab = false; //是否生成DG在表中
  private mbolIsJumpPage = false; //是否跳页
  private mintPageSize = 0; //页大小
  private mbolIsRadio = false; //是否单选框
  private mbolIsCheck = false; //是否复选框
  private mstrFontSize = ''; //字号
  private mstrFontName = ''; //字体

  /// <summary>
  /// Asp表格视图Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPGVId() {
    return this.mstrASPGVId;
  }
  /// <summary>
  /// Asp表格视图Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPGVId(value: string) {
    this.mstrASPGVId = value;
  }

  /// <summary>
  /// Asp表格视图名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPGVName() {
    return this.mstrASPGVName;
  }
  /// <summary>
  /// Asp表格视图名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPGVName(value: string) {
    this.mstrASPGVName = value;
  }

  /// <summary>
  /// 允许分页(说明:;字段类型:bit;字段长度:1;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AllowPaging() {
    return this.mbolAllowPaging;
  }
  /// <summary>
  /// 允许分页(说明:;字段类型:bit;字段长度:1;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AllowPaging(value: boolean) {
    this.mbolAllowPaging = value;
  }

  /// <summary>
  /// 允许排序(说明:;字段类型:bit;字段长度:1;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AllowSorting() {
    return this.mbolAllowSorting;
  }
  /// <summary>
  /// 允许排序(说明:;字段类型:bit;字段长度:1;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AllowSorting(value: boolean) {
    this.mbolAllowSorting = value;
  }

  /// <summary>
  /// 自动生成列(说明:;字段类型:bit;字段长度:1;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AutoGenerateColumns() {
    return this.mbolAutoGenerateColumns;
  }
  /// <summary>
  /// 自动生成列(说明:;字段类型:bit;字段长度:1;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AutoGenerateColumns(value: boolean) {
    this.mbolAutoGenerateColumns = value;
  }

  /// <summary>
  /// 是否生成DG在表中(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get IsInTab() {
    return this.mbolIsInTab;
  }
  /// <summary>
  /// 是否生成DG在表中(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set IsInTab(value: boolean) {
    this.mbolIsInTab = value;
  }

  /// <summary>
  /// 是否跳页(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get IsJumpPage() {
    return this.mbolIsJumpPage;
  }
  /// <summary>
  /// 是否跳页(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set IsJumpPage(value: boolean) {
    this.mbolIsJumpPage = value;
  }

  /// <summary>
  /// 页大小(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get pageSize() {
    return this.mintPageSize;
  }
  /// <summary>
  /// 页大小(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set PageSize(value: number) {
    this.mintPageSize = value;
  }

  /// <summary>
  /// 是否单选框(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get IsRadio() {
    return this.mbolIsRadio;
  }
  /// <summary>
  /// 是否单选框(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set IsRadio(value: boolean) {
    this.mbolIsRadio = value;
  }

  /// <summary>
  /// 是否复选框(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get IsCheck() {
    return this.mbolIsCheck;
  }
  /// <summary>
  /// 是否复选框(说明:;字段类型:bit;字段长度:1;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set IsCheck(value: boolean) {
    this.mbolIsCheck = value;
  }

  /// <summary>
  /// 字号(说明:;字段类型:varchar;字段长度:20;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get fontSize() {
    return this.mstrFontSize;
  }
  /// <summary>
  /// 字号(说明:;字段类型:varchar;字段长度:20;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set fontSize(value: string) {
    this.mstrFontSize = value;
  }

  /// <summary>
  /// 字体(说明:;字段类型:varchar;字段长度:20;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get fontName() {
    return this.mstrFontName;
  }
  /// <summary>
  /// 字体(说明:;字段类型:varchar;字段长度:20;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set fontName(value: string) {
    this.mstrFontName = value;
  }

  /// <summary>
  /// 常量:"ASPGVId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPGVId(): string {
    return 'ASPGVId';
  } //Asp表格视图Id

  /// <summary>
  /// 常量:"ASPGVName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPGVName(): string {
    return 'ASPGVName';
  } //Asp表格视图名

  /// <summary>
  /// 常量:"AllowPaging"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAllowPaging(): string {
    return 'AllowPaging';
  } //允许分页

  /// <summary>
  /// 常量:"AllowSorting"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAllowSorting(): string {
    return 'AllowSorting';
  } //允许排序

  /// <summary>
  /// 常量:"AutoGenerateColumns"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAutoGenerateColumns(): string {
    return 'AutoGenerateColumns';
  } //自动生成列

  /// <summary>
  /// 常量:"IsInTab"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conIsInTab(): string {
    return 'IsInTab';
  } //是否生成DG在表中

  /// <summary>
  /// 常量:"IsJumpPage"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conIsJumpPage(): string {
    return 'IsJumpPage';
  } //是否跳页

  /// <summary>
  /// 常量:"PageSize"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conPageSize(): string {
    return 'PageSize';
  } //页大小

  /// <summary>
  /// 常量:"IsRadio"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conIsRadio(): string {
    return 'IsRadio';
  } //是否单选框

  /// <summary>
  /// 常量:"IsCheck"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conIsCheck(): string {
    return 'IsCheck';
  } //是否复选框

  /// <summary>
  /// 常量:"fontSize"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conFontSize(): string {
    return 'fontSize';
  } //字号

  /// <summary>
  /// 常量:"fontName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conFontName(): string {
    return 'fontName';
  } //字体
}
