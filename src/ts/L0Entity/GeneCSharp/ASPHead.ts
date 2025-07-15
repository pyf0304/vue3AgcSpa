/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPHead
 表名:ASPHead(00050214)
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
/// ASP头(ASPHead)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPHead extends ASPControlEx {
  public static _CurrTabName = 'ASPHead'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspHeadId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 2;
  public attributeName = ['AspHeadId', 'AspHeadName'];
  //以下是属性变量

  private mstrAspHeadId = ''; //Asp头Id
  private mstrAspHeadName = ''; //Asp头名

  /// <summary>
  /// Asp头Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHeadId() {
    return this.mstrAspHeadId;
  }
  /// <summary>
  /// Asp头Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHeadId(value: string) {
    this.mstrAspHeadId = value;
  }

  /// <summary>
  /// Asp头名(说明:;字段类型:varchar;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspHeadName() {
    return this.mstrAspHeadName;
  }
  /// <summary>
  /// Asp头名(说明:;字段类型:varchar;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspHeadName(value: string) {
    this.mstrAspHeadName = value;
  }

  /// <summary>
  /// 常量:"AspHeadId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHeadId(): string {
    return 'AspHeadId';
  } //Asp头Id

  /// <summary>
  /// 常量:"AspHeadName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspHeadName(): string {
    return 'AspHeadName';
  } //Asp头名
}
