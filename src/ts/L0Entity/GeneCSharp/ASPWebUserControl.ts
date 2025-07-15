/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPWebUserControl
 表名:ASPWebUserControl(00050234)
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
/// ASPWeb用户控件(ASPWebUserControl)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPWebUserControl extends ASPControlEx {
  public static _CurrTabName = 'ASPWebUserControl'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ASPWebUserControlId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 4;
  public attributeName = [
    'ASPWebUserControlId',
    'ASPWebUserControlName',
    'TagPrefix',
    'wucClassName',
  ];
  //以下是属性变量

  private mstrASPWebUserControlId = ''; //ASPWeb用户控件Id
  private mstrASPWebUserControlName = ''; //ASPWeb用户控件名
  private mstrTagPrefix = ''; //标签前缀
  private mstrwucClassName = ''; //Web用户控件类名

  /// <summary>
  /// ASPWeb用户控件Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPWebUserControlId() {
    return this.mstrASPWebUserControlId;
  }
  /// <summary>
  /// ASPWeb用户控件Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPWebUserControlId(value: string) {
    this.mstrASPWebUserControlId = value;
  }

  /// <summary>
  /// ASPWeb用户控件名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ASPWebUserControlName() {
    return this.mstrASPWebUserControlName;
  }
  /// <summary>
  /// ASPWeb用户控件名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ASPWebUserControlName(value: string) {
    this.mstrASPWebUserControlName = value;
  }

  /// <summary>
  /// 标签前缀(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get TagPrefix() {
    return this.mstrTagPrefix;
  }
  /// <summary>
  /// 标签前缀(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set TagPrefix(value: string) {
    this.mstrTagPrefix = value;
  }

  /// <summary>
  /// Web用户控件类名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get wucClassName() {
    return this.mstrwucClassName;
  }
  /// <summary>
  /// Web用户控件类名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set wucClassName(value: string) {
    this.mstrwucClassName = value;
  }

  /// <summary>
  /// 常量:"ASPWebUserControlId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPWebUserControlId(): string {
    return 'ASPWebUserControlId';
  } //ASPWeb用户控件Id

  /// <summary>
  /// 常量:"ASPWebUserControlName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conASPWebUserControlName(): string {
    return 'ASPWebUserControlName';
  } //ASPWeb用户控件名

  /// <summary>
  /// 常量:"TagPrefix"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conTagPrefix(): string {
    return 'TagPrefix';
  } //标签前缀

  /// <summary>
  /// 常量:"wucClassName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conwucClassName(): string {
    return 'wucClassName';
  } //Web用户控件类名
}
