/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPBoundField
 表名:ASPBoundField(00050226)
 生成代码版本:2020.06.13.1
 生成日期:2020/06/13 12:06:09
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
/// ASP绑定字段(ASPBoundField)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPBoundField extends ASPControlEx {
  public static _CurrTabName = 'ASPBoundField'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspBoundFieldId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 5;
  public attributeName = [
    'AspBoundFieldId',
    'AspBoundFieldName',
    'DataField',
    'sortExpression',
    'headerText',
  ];
  //以下是属性变量

  private mstrAspBoundFieldId = ''; //Asp绑定字段Id
  private mstrAspBoundFieldName = ''; //Asp绑定字段名
  private mstrDataField = ''; //DataField
  private mstrSortExpression = ''; //sortExpression
  private mstrHeaderText = ''; //列头

  /// <summary>
  /// Asp绑定字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspBoundFieldId() {
    return this.mstrAspBoundFieldId;
  }
  /// <summary>
  /// Asp绑定字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspBoundFieldId(value: string) {
    this.mstrAspBoundFieldId = value;
  }

  /// <summary>
  /// Asp绑定字段名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspBoundFieldName() {
    return this.mstrAspBoundFieldName;
  }
  /// <summary>
  /// Asp绑定字段名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspBoundFieldName(value: string) {
    this.mstrAspBoundFieldName = value;
  }

  /// <summary>
  /// DataField(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get DataField() {
    return this.mstrDataField;
  }
  /// <summary>
  /// DataField(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set DataField(value: string) {
    this.mstrDataField = value;
  }

  /// <summary>
  /// sortExpression(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get sortExpression() {
    return this.mstrSortExpression;
  }
  /// <summary>
  /// sortExpression(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set sortExpression(value: string) {
    this.mstrSortExpression = value;
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
  /// 常量:"AspBoundFieldId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspBoundFieldId(): string {
    return 'AspBoundFieldId';
  } //Asp绑定字段Id

  /// <summary>
  /// 常量:"AspBoundFieldName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspBoundFieldName(): string {
    return 'AspBoundFieldName';
  } //Asp绑定字段名

  /// <summary>
  /// 常量:"DataField"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conDataField(): string {
    return 'DataField';
  } //DataField

  /// <summary>
  /// 常量:"sortExpression"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conSortExpression(): string {
    return 'sortExpression';
  } //sortExpression

  /// <summary>
  /// 常量:"headerText"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conHeaderText(): string {
    return 'headerText';
  } //列头
}
