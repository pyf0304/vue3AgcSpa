/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPInterface
 表名:ASPInterface(00050213)
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
/// ASP界面(ASPInterface)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
import { ASPControlEx } from './ASPControlEx';
export class ASPInterface extends ASPControlEx {
  public static _CurrTabName = 'ASPInterface'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AspInterfaceId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 6;
  public attributeName = [
    'AspInterfaceId',
    'AspInterfaceName',
    'className',
    'fileName',
    'userId',
    'funcModuleName',
  ];
  //以下是属性变量

  private mstrAspInterfaceId = ''; //Asp界面Id
  private mstrAspInterfaceName = ''; //Asp界面名称
  private mstrClassName = ''; //类名
  private mstrFileName = ''; //文件名
  private mstrUserId = ''; //用户Id
  private mstrFuncModuleName = ''; //功能模块名称

  /// <summary>
  /// Asp界面Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspInterfaceId() {
    return this.mstrAspInterfaceId;
  }
  /// <summary>
  /// Asp界面Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspInterfaceId(value: string) {
    this.mstrAspInterfaceId = value;
  }

  /// <summary>
  /// Asp界面名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get AspInterfaceName() {
    return this.mstrAspInterfaceName;
  }
  /// <summary>
  /// Asp界面名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set AspInterfaceName(value: string) {
    this.mstrAspInterfaceName = value;
  }

  /// <summary>
  /// 类名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get clsName() {
    return this.mstrClassName;
  }
  /// <summary>
  /// 类名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set className(value: string) {
    this.mstrClassName = value;
  }

  /// <summary>
  /// 文件名(说明:;字段类型:varchar;字段长度:150;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get fileName() {
    return this.mstrFileName;
  }
  /// <summary>
  /// 文件名(说明:;字段类型:varchar;字段长度:150;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set fileName(value: string) {
    this.mstrFileName = value;
  }

  /// <summary>
  /// 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get userId() {
    return this.mstrUserId;
  }
  /// <summary>
  /// 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set userId(value: string) {
    this.mstrUserId = value;
  }

  /// <summary>
  /// 功能模块名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get funcModuleName() {
    return this.mstrFuncModuleName;
  }
  /// <summary>
  /// 功能模块名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set funcModuleName(value: string) {
    this.mstrFuncModuleName = value;
  }

  /// <summary>
  /// 常量:"AspInterfaceId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspInterfaceId(): string {
    return 'AspInterfaceId';
  } //Asp界面Id

  /// <summary>
  /// 常量:"AspInterfaceName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspInterfaceName(): string {
    return 'AspInterfaceName';
  } //Asp界面名称

  /// <summary>
  /// 常量:"className"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conClassName(): string {
    return 'className';
  } //类名

  /// <summary>
  /// 常量:"fileName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conFileName(): string {
    return 'fileName';
  } //文件名

  /// <summary>
  /// 常量:"userId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conUserId(): string {
    return 'userId';
  } //用户Id

  /// <summary>
  /// 常量:"funcModuleName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conFuncModuleName(): string {
    return 'funcModuleName';
  } //功能模块名称
}
