/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPDropDownList
 表名:ASPDropDownList(00050414)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:11
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
/// ASP下拉框(ASPDropDownList)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPDropDownList extends ASPControlEx {
  public static _CurrTabName = 'ASPDropDownList'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPNETDropDownListId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 3;
  public attributeName = ['ASPNETDropDownListId', 'ASPNETDropDownListName', 'entries'];
  //以下是属性变量

  private mstrASPNETDropDownListId = ''; //ASPNETDropDownListId
  private mstrASPNETDropDownListName = ''; //ASPNETDropDownListName
  private mstrentries = ''; //下拉项

  /// <summary>
  /// ASPNETDropDownListId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPNETDropDownListId() {
    return this.mstrASPNETDropDownListId;
  }
  /// <summary>
  /// ASPNETDropDownListId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPNETDropDownListId(value: string) {
    this.mstrASPNETDropDownListId = value;
  }

  /// <summary>
  /// ASPNETDropDownListName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPNETDropDownListName() {
    return this.mstrASPNETDropDownListName;
  }
  /// <summary>
  /// ASPNETDropDownListName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPNETDropDownListName(value: string) {
    this.mstrASPNETDropDownListName = value;
  }

  /// <summary>
  /// 下拉项(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get entries() {
    return this.mstrentries;
  }
  /// <summary>
  /// 下拉项(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set entries(value: string) {
    this.mstrentries = value;
  }

  /// <summary>
  /// 常量:"ASPNETDropDownListId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPNETDropDownListId(): string {
    return 'ASPNETDropDownListId';
  } //ASPNETDropDownListId

  /// <summary>
  /// 常量:"ASPNETDropDownListName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPNETDropDownListName(): string {
    return 'ASPNETDropDownListName';
  } //ASPNETDropDownListName

  /// <summary>
  /// 常量:"entries"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conentries(): string {
    return 'entries';
  } //下拉项
}
