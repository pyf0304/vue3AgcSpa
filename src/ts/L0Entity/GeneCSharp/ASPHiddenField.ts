/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHiddenField
 表名:ASPHiddenField(00050417)
 生成代码版本:2020.06.17.1
 生成日期:2020/06/17 18:09:15
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
/// ASP隐藏字段(ASPHiddenField)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHiddenField extends ASPControlEx {
  public static _CurrTabName = 'ASPHiddenField'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspHiddenFieldId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspHiddenFieldId', 'AspHiddenFieldName'];
  //以下是属性变量

  private mstrAspHiddenFieldId = ''; //AspHiddenFieldId
  private mstrAspHiddenFieldName = ''; //AspHiddenFieldName

  /// <summary>
  /// AspHiddenFieldId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHiddenFieldId() {
    return this.mstrAspHiddenFieldId;
  }
  /// <summary>
  /// AspHiddenFieldId(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHiddenFieldId(value: string) {
    this.mstrAspHiddenFieldId = value;
  }

  /// <summary>
  /// AspHiddenFieldName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHiddenFieldName() {
    return this.mstrAspHiddenFieldName;
  }
  /// <summary>
  /// AspHiddenFieldName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHiddenFieldName(value: string) {
    this.mstrAspHiddenFieldName = value;
  }

  /// <summary>
  /// 常量:"AspHiddenFieldId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHiddenFieldId(): string {
    return 'AspHiddenFieldId';
  } //AspHiddenFieldId

  /// <summary>
  /// 常量:"AspHiddenFieldName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHiddenFieldName(): string {
    return 'AspHiddenFieldName';
  } //AspHiddenFieldName
}
