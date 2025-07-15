/**
 * 类名:clsCodeTypeEN
 * 表名:CodeType(00050203)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:39
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 代码类型(CodeType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCodeTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CodeType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CodeTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 38;
  public static AttributeName = [
    'codeTypeId',
    'codeTypeName',
    'codeTypeSimName',
    'codeTypeENName',
    'groupName',
    'progLangTypeId',
    'regionTypeId',
    'prefix',
    'dependsOn',
    'frontOrBack',
    'sqlDsTypeId',
    'classNameFormat',
    'fileNameFormat',
    'classNamePattern',
    'isCSharp',
    'isJava',
    'isJavaScript',
    'isTypeScript',
    'isSilverLight',
    'isSwift',
    'isVB',
    'isTableFldConst',
    'isPubApp4WinWeb',
    'isWeb',
    'isAspMvc',
    'isWebSrvAccess',
    'isWin',
    'isMobileApp',
    'isExtend',
    'orderNum',
    'winOrWeb',
    'isDirByTabName',
    'isDefaultOverride',
    'inUse',
    'isAutoParseFile',
    'updDate',
    'updUser',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrCodeTypeId = ''; //代码类型Id
  private mstrCodeTypeName = ''; //代码类型名
  private mstrCodeTypeSimName = ''; //简称
  private mstrCodeTypeENName = ''; //代码类型英文名
  private mstrGroupName = ''; //组名
  private mstrProgLangTypeId = ''; //编程语言类型Id
  private mstrRegionTypeId = ''; //区域类型Id
  private mstrPrefix = ''; //前缀
  private mstrDependsOn = ''; //依赖于
  private mstrFrontOrBack = ''; //前台Or后台
  private mstrSqlDsTypeId = ''; //数据源类型Id
  private mstrClassNameFormat = ''; //类名格式
  private mstrFileNameFormat = ''; //文件名格式
  private mstrClassNamePattern = ''; //类名模式
  private mbolIsCSharp = false; //是否CSharp语言
  private mbolIsJava = false; //是否Java语言
  private mbolIsJavaScript = false; //是否JavaScript语言
  private mbolIsTypeScript = false; //是否TypeScript语言
  private mbolIsSilverLight = false; //是否SilverLight语言
  private mbolIsSwift = false; //是否Swift语言
  private mbolIsVB = false; //IsVB语言
  private mbolIsTableFldConst = false; //IsTableFldConst
  private mbolIsPubApp4WinWeb = false; //IsPubApp4WinWeb
  private mbolIsWeb = false; //是否Web应用
  private mbolIsAspMvc = false; //是否AspMvc
  private mbolIsWebSrvAccess = false; //IsWebSrvAccess
  private mbolIsWin = false; //是否Win应用
  private mbolIsMobileApp = false; //是否移动终端应用
  private mbolIsExtend = false; //是否扩展类
  private mintOrderNum = 0; //序号
  private mstrWinOrWeb = ''; //WinOrWeb
  private mbolIsDirByTabName = false; //是否用表名作为路径
  private mbolIsDefaultOverride = false; //是否默认覆盖
  private mbolInUse = false; //是否在用
  private mbolIsAutoParseFile = false; //是否自动分析文件
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 代码类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodeTypeId(value: string) {
    if (value != undefined) {
      this.codeTypeId = value;
      this.hmProperty['codeTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 代码类型名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodeTypeName(value: string) {
    if (value != undefined) {
      this.codeTypeName = value;
      this.hmProperty['codeTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 简称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodeTypeSimName(value: string) {
    if (value != undefined) {
      this.codeTypeSimName = value;
      this.hmProperty['codeTypeSimName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 代码类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodeTypeENName(value: string) {
    if (value != undefined) {
      this.codeTypeENName = value;
      this.hmProperty['codeTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 组名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGroupName(value: string) {
    if (value != undefined) {
      this.groupName = value;
      this.hmProperty['groupName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 编程语言类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId(value: string) {
    if (value != undefined) {
      this.progLangTypeId = value;
      this.hmProperty['progLangTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeId(value: string) {
    if (value != undefined) {
      this.regionTypeId = value;
      this.hmProperty['regionTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 前缀(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrefix(value: string) {
    if (value != undefined) {
      this.prefix = value;
      this.hmProperty['prefix'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 依赖于(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDependsOn(value: string) {
    if (value != undefined) {
      this.dependsOn = value;
      this.hmProperty['dependsOn'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 前台Or后台(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFrontOrBack(value: string) {
    if (value != undefined) {
      this.frontOrBack = value;
      this.hmProperty['frontOrBack'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlDsTypeId(value: string) {
    if (value != undefined) {
      this.sqlDsTypeId = value;
      this.hmProperty['sqlDsTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 类名格式(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClassNameFormat(value: string) {
    if (value != undefined) {
      this.classNameFormat = value;
      this.hmProperty['classNameFormat'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件名格式(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileNameFormat(value: string) {
    if (value != undefined) {
      this.fileNameFormat = value;
      this.hmProperty['fileNameFormat'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 类名模式(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClassNamePattern(value: string) {
    if (value != undefined) {
      this.classNamePattern = value;
      this.hmProperty['classNamePattern'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否CSharp语言(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsCSharp(value: boolean) {
    if (value != undefined) {
      this.isCSharp = value;
      this.hmProperty['isCSharp'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否Java语言(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsJava(value: boolean) {
    if (value != undefined) {
      this.isJava = value;
      this.hmProperty['isJava'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否JavaScript语言(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsJavaScript(value: boolean) {
    if (value != undefined) {
      this.isJavaScript = value;
      this.hmProperty['isJavaScript'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否TypeScript语言(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTypeScript(value: boolean) {
    if (value != undefined) {
      this.isTypeScript = value;
      this.hmProperty['isTypeScript'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否SilverLight语言(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSilverLight(value: boolean) {
    if (value != undefined) {
      this.isSilverLight = value;
      this.hmProperty['isSilverLight'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否Swift语言(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSwift(value: boolean) {
    if (value != undefined) {
      this.isSwift = value;
      this.hmProperty['isSwift'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsVB语言(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsVB(value: boolean) {
    if (value != undefined) {
      this.isVB = value;
      this.hmProperty['isVB'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsTableFldConst(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTableFldConst(value: boolean) {
    if (value != undefined) {
      this.isTableFldConst = value;
      this.hmProperty['isTableFldConst'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsPubApp4WinWeb(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsPubApp4WinWeb(value: boolean) {
    if (value != undefined) {
      this.isPubApp4WinWeb = value;
      this.hmProperty['isPubApp4WinWeb'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否Web应用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsWeb(value: boolean) {
    if (value != undefined) {
      this.isWeb = value;
      this.hmProperty['isWeb'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否AspMvc(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsAspMvc(value: boolean) {
    if (value != undefined) {
      this.isAspMvc = value;
      this.hmProperty['isAspMvc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsWebSrvAccess(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsWebSrvAccess(value: boolean) {
    if (value != undefined) {
      this.isWebSrvAccess = value;
      this.hmProperty['isWebSrvAccess'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否Win应用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsWin(value: boolean) {
    if (value != undefined) {
      this.isWin = value;
      this.hmProperty['isWin'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否移动终端应用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsMobileApp(value: boolean) {
    if (value != undefined) {
      this.isMobileApp = value;
      this.hmProperty['isMobileApp'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否扩展类(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsExtend(value: boolean) {
    if (value != undefined) {
      this.isExtend = value;
      this.hmProperty['isExtend'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * WinOrWeb(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWinOrWeb(value: string) {
    if (value != undefined) {
      this.winOrWeb = value;
      this.hmProperty['winOrWeb'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否用表名作为路径(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDirByTabName(value: boolean) {
    if (value != undefined) {
      this.isDirByTabName = value;
      this.hmProperty['isDirByTabName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否默认覆盖(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDefaultOverride(value: boolean) {
    if (value != undefined) {
      this.isDefaultOverride = value;
      this.hmProperty['isDefaultOverride'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInUse(value: boolean) {
    if (value != undefined) {
      this.inUse = value;
      this.hmProperty['inUse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否自动分析文件(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsAutoParseFile(value: boolean) {
    if (value != undefined) {
      this.isAutoParseFile = value;
      this.hmProperty['isAutoParseFile'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsCodeTypeEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsCodeTypeEN.con_CodeTypeName:
        return this.codeTypeName;
      case clsCodeTypeEN.con_CodeTypeSimName:
        return this.codeTypeSimName;
      case clsCodeTypeEN.con_CodeTypeENName:
        return this.codeTypeENName;
      case clsCodeTypeEN.con_GroupName:
        return this.groupName;
      case clsCodeTypeEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsCodeTypeEN.con_RegionTypeId:
        return this.regionTypeId;
      case clsCodeTypeEN.con_Prefix:
        return this.prefix;
      case clsCodeTypeEN.con_DependsOn:
        return this.dependsOn;
      case clsCodeTypeEN.con_FrontOrBack:
        return this.frontOrBack;
      case clsCodeTypeEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsCodeTypeEN.con_ClassNameFormat:
        return this.classNameFormat;
      case clsCodeTypeEN.con_FileNameFormat:
        return this.fileNameFormat;
      case clsCodeTypeEN.con_ClassNamePattern:
        return this.classNamePattern;
      case clsCodeTypeEN.con_IsCSharp:
        return this.isCSharp;
      case clsCodeTypeEN.con_IsJava:
        return this.isJava;
      case clsCodeTypeEN.con_IsJavaScript:
        return this.isJavaScript;
      case clsCodeTypeEN.con_IsTypeScript:
        return this.isTypeScript;
      case clsCodeTypeEN.con_IsSilverLight:
        return this.isSilverLight;
      case clsCodeTypeEN.con_IsSwift:
        return this.isSwift;
      case clsCodeTypeEN.con_IsVB:
        return this.isVB;
      case clsCodeTypeEN.con_IsTableFldConst:
        return this.isTableFldConst;
      case clsCodeTypeEN.con_IsPubApp4WinWeb:
        return this.isPubApp4WinWeb;
      case clsCodeTypeEN.con_IsWeb:
        return this.isWeb;
      case clsCodeTypeEN.con_IsAspMvc:
        return this.isAspMvc;
      case clsCodeTypeEN.con_IsWebSrvAccess:
        return this.isWebSrvAccess;
      case clsCodeTypeEN.con_IsWin:
        return this.isWin;
      case clsCodeTypeEN.con_IsMobileApp:
        return this.isMobileApp;
      case clsCodeTypeEN.con_IsExtend:
        return this.isExtend;
      case clsCodeTypeEN.con_OrderNum:
        return this.orderNum;
      case clsCodeTypeEN.con_WinOrWeb:
        return this.winOrWeb;
      case clsCodeTypeEN.con_IsDirByTabName:
        return this.isDirByTabName;
      case clsCodeTypeEN.con_IsDefaultOverride:
        return this.isDefaultOverride;
      case clsCodeTypeEN.con_InUse:
        return this.inUse;
      case clsCodeTypeEN.con_IsAutoParseFile:
        return this.isAutoParseFile;
      case clsCodeTypeEN.con_UpdDate:
        return this.updDate;
      case clsCodeTypeEN.con_UpdUser:
        return this.updUser;
      case clsCodeTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CodeType]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsCodeTypeEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        this.hmProperty['codeTypeId'] = true;
        break;
      case clsCodeTypeEN.con_CodeTypeName:
        this.codeTypeName = strValue;
        this.hmProperty['codeTypeName'] = true;
        break;
      case clsCodeTypeEN.con_CodeTypeSimName:
        this.codeTypeSimName = strValue;
        this.hmProperty['codeTypeSimName'] = true;
        break;
      case clsCodeTypeEN.con_CodeTypeENName:
        this.codeTypeENName = strValue;
        this.hmProperty['codeTypeENName'] = true;
        break;
      case clsCodeTypeEN.con_GroupName:
        this.groupName = strValue;
        this.hmProperty['groupName'] = true;
        break;
      case clsCodeTypeEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        this.hmProperty['progLangTypeId'] = true;
        break;
      case clsCodeTypeEN.con_RegionTypeId:
        this.regionTypeId = strValue;
        this.hmProperty['regionTypeId'] = true;
        break;
      case clsCodeTypeEN.con_Prefix:
        this.prefix = strValue;
        this.hmProperty['prefix'] = true;
        break;
      case clsCodeTypeEN.con_DependsOn:
        this.dependsOn = strValue;
        this.hmProperty['dependsOn'] = true;
        break;
      case clsCodeTypeEN.con_FrontOrBack:
        this.frontOrBack = strValue;
        this.hmProperty['frontOrBack'] = true;
        break;
      case clsCodeTypeEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        this.hmProperty['sqlDsTypeId'] = true;
        break;
      case clsCodeTypeEN.con_ClassNameFormat:
        this.classNameFormat = strValue;
        this.hmProperty['classNameFormat'] = true;
        break;
      case clsCodeTypeEN.con_FileNameFormat:
        this.fileNameFormat = strValue;
        this.hmProperty['fileNameFormat'] = true;
        break;
      case clsCodeTypeEN.con_ClassNamePattern:
        this.classNamePattern = strValue;
        this.hmProperty['classNamePattern'] = true;
        break;
      case clsCodeTypeEN.con_IsCSharp:
        this.isCSharp = Boolean(strValue);
        this.hmProperty['isCSharp'] = true;
        break;
      case clsCodeTypeEN.con_IsJava:
        this.isJava = Boolean(strValue);
        this.hmProperty['isJava'] = true;
        break;
      case clsCodeTypeEN.con_IsJavaScript:
        this.isJavaScript = Boolean(strValue);
        this.hmProperty['isJavaScript'] = true;
        break;
      case clsCodeTypeEN.con_IsTypeScript:
        this.isTypeScript = Boolean(strValue);
        this.hmProperty['isTypeScript'] = true;
        break;
      case clsCodeTypeEN.con_IsSilverLight:
        this.isSilverLight = Boolean(strValue);
        this.hmProperty['isSilverLight'] = true;
        break;
      case clsCodeTypeEN.con_IsSwift:
        this.isSwift = Boolean(strValue);
        this.hmProperty['isSwift'] = true;
        break;
      case clsCodeTypeEN.con_IsVB:
        this.isVB = Boolean(strValue);
        this.hmProperty['isVB'] = true;
        break;
      case clsCodeTypeEN.con_IsTableFldConst:
        this.isTableFldConst = Boolean(strValue);
        this.hmProperty['isTableFldConst'] = true;
        break;
      case clsCodeTypeEN.con_IsPubApp4WinWeb:
        this.isPubApp4WinWeb = Boolean(strValue);
        this.hmProperty['isPubApp4WinWeb'] = true;
        break;
      case clsCodeTypeEN.con_IsWeb:
        this.isWeb = Boolean(strValue);
        this.hmProperty['isWeb'] = true;
        break;
      case clsCodeTypeEN.con_IsAspMvc:
        this.isAspMvc = Boolean(strValue);
        this.hmProperty['isAspMvc'] = true;
        break;
      case clsCodeTypeEN.con_IsWebSrvAccess:
        this.isWebSrvAccess = Boolean(strValue);
        this.hmProperty['isWebSrvAccess'] = true;
        break;
      case clsCodeTypeEN.con_IsWin:
        this.isWin = Boolean(strValue);
        this.hmProperty['isWin'] = true;
        break;
      case clsCodeTypeEN.con_IsMobileApp:
        this.isMobileApp = Boolean(strValue);
        this.hmProperty['isMobileApp'] = true;
        break;
      case clsCodeTypeEN.con_IsExtend:
        this.isExtend = Boolean(strValue);
        this.hmProperty['isExtend'] = true;
        break;
      case clsCodeTypeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsCodeTypeEN.con_WinOrWeb:
        this.winOrWeb = strValue;
        this.hmProperty['winOrWeb'] = true;
        break;
      case clsCodeTypeEN.con_IsDirByTabName:
        this.isDirByTabName = Boolean(strValue);
        this.hmProperty['isDirByTabName'] = true;
        break;
      case clsCodeTypeEN.con_IsDefaultOverride:
        this.isDefaultOverride = Boolean(strValue);
        this.hmProperty['isDefaultOverride'] = true;
        break;
      case clsCodeTypeEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsCodeTypeEN.con_IsAutoParseFile:
        this.isAutoParseFile = Boolean(strValue);
        this.hmProperty['isAutoParseFile'] = true;
        break;
      case clsCodeTypeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCodeTypeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsCodeTypeEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CodeType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public codeTypeId = ''; //代码类型Id
  public codeTypeName = ''; //代码类型名
  public codeTypeSimName = ''; //简称
  public codeTypeENName = ''; //代码类型英文名
  public groupName = ''; //组名
  public progLangTypeId = ''; //编程语言类型Id
  public regionTypeId = ''; //区域类型Id
  public prefix = ''; //前缀
  public dependsOn = ''; //依赖于
  public frontOrBack = ''; //前台Or后台
  public sqlDsTypeId = ''; //数据源类型Id
  public classNameFormat = ''; //类名格式
  public fileNameFormat = ''; //文件名格式
  public classNamePattern = ''; //类名模式
  public isCSharp = false; //是否CSharp语言
  public isJava = false; //是否Java语言
  public isJavaScript = false; //是否JavaScript语言
  public isTypeScript = false; //是否TypeScript语言
  public isSilverLight = false; //是否SilverLight语言
  public isSwift = false; //是否Swift语言
  public isVB = false; //IsVB语言
  public isTableFldConst = false; //IsTableFldConst
  public isPubApp4WinWeb = false; //IsPubApp4WinWeb
  public isWeb = false; //是否Web应用
  public isAspMvc = false; //是否AspMvc
  public isWebSrvAccess = false; //IsWebSrvAccess
  public isWin = false; //是否Win应用
  public isMobileApp = false; //是否移动终端应用
  public isExtend = false; //是否扩展类
  public orderNum = 0; //序号
  public winOrWeb = ''; //WinOrWeb
  public isDirByTabName = false; //是否用表名作为路径
  public isDefaultOverride = false; //是否默认覆盖
  public inUse = false; //是否在用
  public isAutoParseFile = false; //是否自动分析文件
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"CodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

  /**
   * 常量:"CodeTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeName(): string {
    return 'codeTypeName';
  } //代码类型名

  /**
   * 常量:"CodeTypeSimName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeSimName(): string {
    return 'codeTypeSimName';
  } //简称

  /**
   * 常量:"CodeTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeENName(): string {
    return 'codeTypeENName';
  } //代码类型英文名

  /**
   * 常量:"GroupName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GroupName(): string {
    return 'groupName';
  } //组名

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"Prefix"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Prefix(): string {
    return 'prefix';
  } //前缀

  /**
   * 常量:"DependsOn"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DependsOn(): string {
    return 'dependsOn';
  } //依赖于

  /**
   * 常量:"FrontOrBack"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FrontOrBack(): string {
    return 'frontOrBack';
  } //前台Or后台

  /**
   * 常量:"SqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"ClassNameFormat"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClassNameFormat(): string {
    return 'classNameFormat';
  } //类名格式

  /**
   * 常量:"FileNameFormat"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FileNameFormat(): string {
    return 'fileNameFormat';
  } //文件名格式

  /**
   * 常量:"ClassNamePattern"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClassNamePattern(): string {
    return 'classNamePattern';
  } //类名模式

  /**
   * 常量:"IsCSharp"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsCSharp(): string {
    return 'isCSharp';
  } //是否CSharp语言

  /**
   * 常量:"IsJava"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsJava(): string {
    return 'isJava';
  } //是否Java语言

  /**
   * 常量:"IsJavaScript"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsJavaScript(): string {
    return 'isJavaScript';
  } //是否JavaScript语言

  /**
   * 常量:"IsTypeScript"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTypeScript(): string {
    return 'isTypeScript';
  } //是否TypeScript语言

  /**
   * 常量:"IsSilverLight"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsSilverLight(): string {
    return 'isSilverLight';
  } //是否SilverLight语言

  /**
   * 常量:"IsSwift"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsSwift(): string {
    return 'isSwift';
  } //是否Swift语言

  /**
   * 常量:"IsVB"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsVB(): string {
    return 'isVB';
  } //IsVB语言

  /**
   * 常量:"IsTableFldConst"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTableFldConst(): string {
    return 'isTableFldConst';
  } //IsTableFldConst

  /**
   * 常量:"IsPubApp4WinWeb"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsPubApp4WinWeb(): string {
    return 'isPubApp4WinWeb';
  } //IsPubApp4WinWeb

  /**
   * 常量:"IsWeb"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsWeb(): string {
    return 'isWeb';
  } //是否Web应用

  /**
   * 常量:"IsAspMvc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsAspMvc(): string {
    return 'isAspMvc';
  } //是否AspMvc

  /**
   * 常量:"IsWebSrvAccess"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsWebSrvAccess(): string {
    return 'isWebSrvAccess';
  } //IsWebSrvAccess

  /**
   * 常量:"IsWin"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsWin(): string {
    return 'isWin';
  } //是否Win应用

  /**
   * 常量:"IsMobileApp"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsMobileApp(): string {
    return 'isMobileApp';
  } //是否移动终端应用

  /**
   * 常量:"IsExtend"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExtend(): string {
    return 'isExtend';
  } //是否扩展类

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"WinOrWeb"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WinOrWeb(): string {
    return 'winOrWeb';
  } //WinOrWeb

  /**
   * 常量:"IsDirByTabName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsDirByTabName(): string {
    return 'isDirByTabName';
  } //是否用表名作为路径

  /**
   * 常量:"IsDefaultOverride"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsDefaultOverride(): string {
    return 'isDefaultOverride';
  } //是否默认覆盖

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"IsAutoParseFile"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsAutoParseFile(): string {
    return 'isAutoParseFile';
  } //是否自动分析文件

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsCodeTypeEN();
    const instance = new clsCodeTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumCodeType {
  /**
   * 未知(CS)
   **/
  static readonly Unknown_0000 = '0000';
  /**
   * 实体层(CS)
   **/
  static readonly EntityLayer_0001 = '0001';
  /**
   * 数据处理层(CS)
   **/
  static readonly DALCode_0002 = '0002';
  /**
   * 业务逻辑层(CS)
   **/
  static readonly BusinessLogic_0003 = '0003';
  /**
   * WEB界面前台脚本(Html)
   **/
  static readonly WebViewCode_0004 = '0004';
  /**
   * Web用户控件前台脚本(Html)
   **/
  static readonly WebCtlViewCode_0005 = '0005';
  /**
   * Win界面层_QD(CS)
   **/
  static readonly WinViewCode_QD_0006 = '0006';
  /**
   * WEB服务层(CS)
   **/
  static readonly WS_Srv_0009 = '0009';
  /**
   * WEB服务访问层(CS)
   **/
  static readonly WS_Access_0010 = '0010';
  /**
   * 简化实体层(CS)
   **/
  static readonly EntityLayer_Sim_0011 = '0011';
  /**
   * Web服务访问高层(JAVA)
   **/
  static readonly WS_AccessHigh_0012 = '0012';
  /**
   * App控制层(JAVA)
   **/
  static readonly AppController_0013 = '0013';
  /**
   * Web界面后台(CS)
   **/
  static readonly WebViewControlCode_0014 = '0014';
  /**
   * Web用户控件后台(CS)
   **/
  static readonly WebCtlControlCode_0015 = '0015';
  /**
   * Win界面层_UI(CS)
   **/
  static readonly WinViewCode_UI_0016 = '0016';
  /**
   * Web服务前台(CS)
   **/
  static readonly WS_Srv4Front_0017 = '0017';
  /**
   * Win界面层_QD_设计(CS)
   **/
  static readonly WinViewCode_QD_Design_0018 = '0018';
  /**
   * Win界面层_UI_设计(CS)
   **/
  static readonly WinViewCode_UI_Design_0019 = '0019';
  /**
   * 逻辑层公共函数类扩展(CS)
   **/
  static readonly CommFun4BL_0020 = '0020';
  /**
   * 业务逻辑扩展层(CS)
   **/
  static readonly BusinessLogicEx_0021 = '0021';
  /**
   * 数据处理扩展层(CS)
   **/
  static readonly DALExCode_0022 = '0022';
  /**
   * Mvc界面层(CS)
   **/
  static readonly Mvc_View_0023 = '0023';
  /**
   * Mvc控制层Base(CS)
   **/
  static readonly Mvc_ControllerBase_0024 = '0024';
  /**
   * App界面UT(JAVA)
   **/
  static readonly AppViewUnitTest_0025 = '0025';
  /**
   * App界面UT脚本(JAVA)
   **/
  static readonly AppViewUTScript_0026 = '0026';
  /**
   * App界面UT脚本后台(JAVA)
   **/
  static readonly AppViewUTScriptCS_0027 = '0027';
  /**
   * 条件实体层(CS)
   **/
  static readonly CondEntityLayer_0028 = '0028';
  /**
   * App界面脚本内容页(JAVA)
   **/
  static readonly AppViewScriptContent_0029 = '0029';
  /**
   * App界面脚本后台(JAVA)
   **/
  static readonly AppViewScriptCS_0030 = '0030';
  /**
   * App界面查询控件脚本(JAVA)
   **/
  static readonly AppViewQryScript_0031 = '0031';
  /**
   * App界面编辑控件脚本(JAVA)
   **/
  static readonly AppViewEdtScript_0032 = '0032';
  /**
   * Web用户Gv控件后台(CS)
   **/
  static readonly WebCtlControlCode4Gv_0033 = '0033';
  /**
   * Web用户Gv控件前台脚本(Html)
   **/
  static readonly WebCtlViewCode4Gv_0034 = '0034';
  /**
   * App界面脚本主页(JAVA)
   **/
  static readonly AppViewScriptMain_0035 = '0035';
  /**
   * App界面ListViewItem控件脚本(JAVA)
   **/
  static readonly AppViewLvItemScript_0036 = '0036';
  /**
   * App界面ListViewAdapter(JAVA)
   **/
  static readonly AppViewListViewAdapter_0037 = '0037';
  /**
   * App界面Ddl绑定(JAVA)
   **/
  static readonly AppViewDdlBind_0038 = '0038';
  /**
   * App界面Ddl适配器(JAVA)
   **/
  static readonly AppViewDdlAdapter_0039 = '0039';
  /**
   * App界面ListView头控件脚本(JAVA)
   **/
  static readonly AppViewLvHeadScript_0040 = '0040';
  /**
   * 表字段常量CSharp(CS)
   **/
  static readonly TableFldConst_0041 = '0041';
  /**
   * 实体扩展层(CS)
   **/
  static readonly EntityLayerEx_0042 = '0042';
  /**
   * App业务逻辑层(JAVA)
   **/
  static readonly AppBusiness_0043 = '0043';
  /**
   * WA_服务层(CS)
   **/
  static readonly WA_Srv_0044 = '0044';
  /**
   * WA_访问层(CS)
   **/
  static readonly WA_Access_0045 = '0045';
  /**
   * Mvc界面模型(CS)
   **/
  static readonly Mvc_Model_View_0046 = '0046';
  /**
   * Mvc查询区模型(CS)
   **/
  static readonly Mvc_Model_Query_0047 = '0047';
  /**
   * Mvc界面层Ajax(CS)
   **/
  static readonly Mvc_ViewAjax_0048 = '0048';
  /**
   * Mvc界面-列表Ajax(CS)
   **/
  static readonly Mvc_ViewLstAjax_0049 = '0049';
  /**
   * Mvc界面层Spa(CS)
   **/
  static readonly Mvc_ViewSpa_0050 = '0050';
  /**
   * 业务逻辑层4Mvc(CS)
   **/
  static readonly BusinessLogic4Mvc_0051 = '0051';
  /**
   * WA_界面UT(CS)
   **/
  static readonly WA_ViewUTScript_0052 = '0052';
  /**
   * WA_界面UT后台(CS)
   **/
  static readonly WA_ViewUTScriptCS_0053 = '0053';
  /**
   * WA_界面UT_TS(Html)
   **/
  static readonly WA_ViewUTScript_TS_0054 = '0054';
  /**
   * 实体层(JAVA)
   **/
  static readonly EntityLayer_0056 = '0056';
  /**
   * 数据处理层(JAVA)
   **/
  static readonly DALCode_0057 = '0057';
  /**
   * 业务逻辑层(JAVA)
   **/
  static readonly BusinessLogic_0058 = '0058';
  /**
   * WEB界面前台脚本(JAVA)
   **/
  static readonly WebViewCode_0059 = '0059';
  /**
   * Web用户控件前台脚本(JAVA)
   **/
  static readonly WebCtlViewCode_0060 = '0060';
  /**
   * Win界面层_QD(JAVA)
   **/
  static readonly WinViewCode_QD_0061 = '0061';
  /**
   * WEB服务访问层(JAVA)
   **/
  static readonly WS_Access_0062 = '0062';
  /**
   * Web服务访问高层(JS)
   **/
  static readonly WS_AccessHigh_0063 = '0063';
  /**
   * App控制层(JS)
   **/
  static readonly AppController_0064 = '0064';
  /**
   * Web界面后台2(JAVA)
   **/
  static readonly WebViewControlCode_0065 = '0065';
  /**
   * Web用户控件后台(JAVA)
   **/
  static readonly WebCtlControlCode_0066 = '0066';
  /**
   * App界面UT(JS)
   **/
  static readonly AppViewUnitTest_0067 = '0067';
  /**
   * App界面UT脚本(JS)
   **/
  static readonly AppViewUTScript_0068 = '0068';
  /**
   * App界面UT脚本后台(JS)
   **/
  static readonly AppViewUTScriptCS_0069 = '0069';
  /**
   * App界面脚本内容页(JS)
   **/
  static readonly AppViewScriptContent_0070 = '0070';
  /**
   * App界面脚本后台(JS)
   **/
  static readonly AppViewScriptCS_0071 = '0071';
  /**
   * App界面查询控件脚本(JS)
   **/
  static readonly AppViewQryScript_0072 = '0072';
  /**
   * App界面编辑控件脚本(JS)
   **/
  static readonly AppViewEdtScript_0073 = '0073';
  /**
   * Web用户Gv控件后台(JAVA)
   **/
  static readonly WebCtlControlCode4Gv_0074 = '0074';
  /**
   * Web用户Gv控件前台脚本(JAVA)
   **/
  static readonly WebCtlViewCode4Gv_0075 = '0075';
  /**
   * App界面脚本主页(JS)
   **/
  static readonly AppViewScriptMain_0076 = '0076';
  /**
   * App界面ListViewItem控件脚本(JS)
   **/
  static readonly AppViewLvItemScript_0077 = '0077';
  /**
   * App界面ListViewAdapter(JS)
   **/
  static readonly AppViewListViewAdapter_0078 = '0078';
  /**
   * App界面Ddl绑定(JS)
   **/
  static readonly AppViewDdlBind_0079 = '0079';
  /**
   * App界面Ddl适配器(JS)
   **/
  static readonly AppViewDdlAdapter_0080 = '0080';
  /**
   * App界面ListView头控件脚本(JS)
   **/
  static readonly AppViewLvHeadScript_0081 = '0081';
  /**
   * 表字段常量(JAVA)
   **/
  static readonly TableFldConst_0082 = '0082';
  /**
   * 实体扩展层(JAVA)
   **/
  static readonly EntityLayerEx_0083 = '0083';
  /**
   * App业务逻辑层(JS)
   **/
  static readonly AppBusiness_0084 = '0084';
  /**
   * WA_访问层(JAVA)
   **/
  static readonly WA_Access_0085 = '0085';
  /**
   * WA_界面UT(JAVA)
   **/
  static readonly WA_ViewUTScript_0086 = '0086';
  /**
   * WA_界面UT后台(JAVA)
   **/
  static readonly WA_ViewUTScriptCS_0087 = '0087';
  /**
   * WA_界面UT_TS(JAVA)
   **/
  static readonly WA_ViewUTScript_TS_0088 = '0088';
  /**
   * 实体层(JS)
   **/
  static readonly EntityLayer_0090 = '0090';
  /**
   * 业务逻辑层(JS)
   **/
  static readonly BusinessLogic_0091 = '0091';
  /**
   * WEB服务访问层(JS)
   **/
  static readonly WS_Access_0092 = '0092';
  /**
   * Web服务访问高层(Swift4)
   **/
  static readonly WS_AccessHigh_0093 = '0093';
  /**
   * App控制层(Swift4)
   **/
  static readonly AppController_0094 = '0094';
  /**
   * App界面UT(Swift4)
   **/
  static readonly AppViewUnitTest_0095 = '0095';
  /**
   * App界面UT脚本(Swift4)
   **/
  static readonly AppViewUTScript_0096 = '0096';
  /**
   * App界面UT脚本后台(Swift4)
   **/
  static readonly AppViewUTScriptCS_0097 = '0097';
  /**
   * App界面脚本内容页(Swift4)
   **/
  static readonly AppViewScriptContent_0098 = '0098';
  /**
   * App界面脚本后台(Swift4)
   **/
  static readonly AppViewScriptCS_0099 = '0099';
  /**
   * App界面查询控件脚本(Swift4)
   **/
  static readonly AppViewQryScript_0100 = '0100';
  /**
   * App界面编辑控件脚本(Swift4)
   **/
  static readonly AppViewEdtScript_0101 = '0101';
  /**
   * App界面脚本主页(Swift4)
   **/
  static readonly AppViewScriptMain_0102 = '0102';
  /**
   * App界面ListViewItem控件脚本(Swift4)
   **/
  static readonly AppViewLvItemScript_0103 = '0103';
  /**
   * App界面ListViewAdapter(Swift4)
   **/
  static readonly AppViewListViewAdapter_0104 = '0104';
  /**
   * App界面ListView头控件脚本(Swift4)
   **/
  static readonly AppViewLvHeadScript_0107 = '0107';
  /**
   * 表字段常量(JS)
   **/
  static readonly TableFldConst_0108 = '0108';
  /**
   * 实体扩展层(JS)
   **/
  static readonly EntityLayerEx_0109 = '0109';
  /**
   * App业务逻辑层(Swift4)
   **/
  static readonly AppBusiness_0110 = '0110';
  /**
   * WA_访问层(JS)
   **/
  static readonly WA_Access_0111 = '0111';
  /**
   * WA_界面UT(Html)
   **/
  static readonly WA_ViewUTScript_0112 = '0112';
  /**
   * WA_界面UT后台(JS)
   **/
  static readonly WA_ViewUTScriptCS_0113 = '0113';
  /**
   * 实体层(Swift4)
   **/
  static readonly EntityLayer_0116 = '0116';
  /**
   * 业务逻辑层(Swift4)
   **/
  static readonly BusinessLogic_0117 = '0117';
  /**
   * WEB服务访问层(Swift4)
   **/
  static readonly WS_Access_0118 = '0118';
  /**
   * 实体层(TS)
   **/
  static readonly EntityLayer_0121 = '0121';
  /**
   * 业务逻辑层(TS)
   **/
  static readonly BusinessLogic_0122 = '0122';
  /**
   * 表字段常量(Swift4)
   **/
  static readonly TableFldConst_0135 = '0135';
  /**
   * 实体扩展层(Swift4)
   **/
  static readonly EntityLayerEx_0136 = '0136';
  /**
   * WA_访问层(Swift4)
   **/
  static readonly WA_Access_0138 = '0138';
  /**
   * WA_界面UT(Swift4)
   **/
  static readonly WA_ViewUTScript_0139 = '0139';
  /**
   * WA_界面UT后台(Swift4)
   **/
  static readonly WA_ViewUTScriptCS_0140 = '0140';
  /**
   * WA_界面UT_TS(Swift4)
   **/
  static readonly WA_ViewUTScript_TS_0141 = '0141';
  /**
   * WEB服务访问层(Swift3)
   **/
  static readonly WS_Access_0143 = '0143';
  /**
   * WEB服务访问层(Swift)
   **/
  static readonly WS_Access_0144 = '0144';
  /**
   * WEB服务访问层(SL)
   **/
  static readonly WS_Access_0145 = '0145';
  /**
   * 业务逻辑层(Swift3)
   **/
  static readonly BusinessLogic_0146 = '0146';
  /**
   * 业务逻辑层(Swift)
   **/
  static readonly BusinessLogic_0147 = '0147';
  /**
   * 业务逻辑层(SL)
   **/
  static readonly BusinessLogic_0148 = '0148';
  /**
   * App控制层(Swift3)
   **/
  static readonly AppController_0149 = '0149';
  /**
   * App控制层(Swift)
   **/
  static readonly AppController_0150 = '0150';
  /**
   * App控制层(SL)
   **/
  static readonly AppController_0151 = '0151';
  /**
   * 实体层(Swift3)
   **/
  static readonly EntityLayer_0152 = '0152';
  /**
   * 实体层(Swift)
   **/
  static readonly EntityLayer_0153 = '0153';
  /**
   * 实体层(SL)
   **/
  static readonly EntityLayer_0154 = '0154';
  /**
   * WA_访问层(TS)
   **/
  static readonly WA_Access_0155 = '0155';
  /**
   * Web服务访问高层(Swift3)
   **/
  static readonly WS_AccessHigh_0157 = '0157';
  /**
   * Web服务访问高层(Swift)
   **/
  static readonly WS_AccessHigh_0158 = '0158';
  /**
   * Web服务访问高层(SL)
   **/
  static readonly WS_AccessHigh_0159 = '0159';
  /**
   * App界面UT(Swift3)
   **/
  static readonly AppViewUnitTest_0160 = '0160';
  /**
   * WA_界面UT后台_TS(TS)
   **/
  static readonly WA_ViewUTScriptCS_TS_0161 = '0161';
  /**
   * 简化实体层(JAVA)
   **/
  static readonly EntityLayer_Sim_0162 = '0162';
  /**
   * 简化实体层(Swift)
   **/
  static readonly EntityLayer_Sim_0163 = '0163';
  /**
   * 简化实体层(Swift3)
   **/
  static readonly EntityLayer_Sim_0164 = '0164';
  /**
   * 简化实体层(Swift4)
   **/
  static readonly EntityLayer_Sim_0165 = '0165';
  /**
   * 简化实体层(JS)
   **/
  static readonly EntityLayer_Sim_0166 = '0166';
  /**
   * 简化实体层(SL)
   **/
  static readonly EntityLayer_Sim_0167 = '0167';
  /**
   * Win界面层_QD_Gv(CS)
   **/
  static readonly WinViewCode_QD_Gv_0168 = '0168';
  /**
   * Win界面层_QD_Gv_设计(CS)
   **/
  static readonly WinViewCode_QD_Gv_Design_0169 = '0169';
  /**
   * WA_界面后台(老)_TS(TS)
   **/
  static readonly WA_ViewScriptCS_Old_TS_0170 = '0170';
  /**
   * WA_界面脚本_TS(Html)
   **/
  static readonly WA_ViewScript_TS_0171 = '0171';
  /**
   * WA_访问高层(JAVA)
   **/
  static readonly WA_AccessHigh_0172 = '0172';
  /**
   * WA_App控制层(JAVA)
   **/
  static readonly WA_AppController_0173 = '0173';
  /**
   * WA_App界面UT(JAVA)
   **/
  static readonly WA_AppViewUT_0174 = '0174';
  /**
   * WA_App界面UT脚本(JAVA)
   **/
  static readonly WA_AppViewUTScript_0175 = '0175';
  /**
   * WA_App界面UT脚本后台(JAVA)
   **/
  static readonly WA_AppViewUTScriptCS_0176 = '0176';
  /**
   * 简化实体层(TS)
   **/
  static readonly EntityLayer_Sim_0177 = '0177';
  /**
   * Mvc控制层(CS)
   **/
  static readonly Mvc_Controller_0178 = '0178';
  /**
   * Mvc界面-编辑区(CS)
   **/
  static readonly Mvc_View_Edit_0179 = '0179';
  /**
   * Mvc界面-查询区(CS)
   **/
  static readonly Mvc_View_Query_0180 = '0180';
  /**
   * Mvc界面-编辑区Ajax(CS)
   **/
  static readonly Mvc_View_EditAjax_0181 = '0181';
  /**
   * Mvc界面-查询区Ajax(CS)
   **/
  static readonly Mvc_View_QueryAjax_0182 = '0182';
  /**
   * Mvc列表模型(CS)
   **/
  static readonly Mvc_Model_List_0183 = '0183';
  /**
   * Mvc编辑模型(CS)
   **/
  static readonly Mvc_Model_Edit_0184 = '0184';
  /**
   * WA_服务扩展层(CS)
   **/
  static readonly WA_SrvEx_0185 = '0185';
  /**
   * WA_访问扩展层(CS)
   **/
  static readonly WA_AccessEx_0186 = '0186';
  /**
   * Mvc功能区模型(CS)
   **/
  static readonly Mvc_Model_Feature_0187 = '0187';
  /**
   * WA_界面后台模型_TS(CS)
   **/
  static readonly WA_ViewScriptCSModel_TS_0188 = '0188';
  /**
   * WA_界面后台Ex_TS(TS)
   **/
  static readonly WA_ViewScriptCSEx_TS_0189 = '0189';
  /**
   * WA_访问扩展层(TS)
   **/
  static readonly WA_AccessEx_0190 = '0190';
  /**
   * 实体扩展层(TS)
   **/
  static readonly EntityLayerEx_0191 = '0191';
  /**
   * 纯粹类(CS)
   **/
  static readonly PureClass_0192 = '0192';
  /**
   * 纯粹类处理层(CS)
   **/
  static readonly PureClassAccess_0193 = '0193';
  /**
   * 静态业务逻辑扩展层(CS)
   **/
  static readonly BusinessLogicEx_Static_0194 = '0194';
  /**
   * 静态业务逻辑层(CS)
   **/
  static readonly BusinessLogic_Static_0195 = '0195';
  /**
   * WA_访问层公共函数类扩展(CS)
   **/
  static readonly CommFun4WA_0196 = '0196';
  /**
   * 结点实体层(CS)
   **/
  static readonly NodeEntityLayer_0197 = '0197';
  /**
   * 结点数据处理层(CS)
   **/
  static readonly NodeDALCode_0198 = '0198';
  /**
   * 结点业务逻辑层(CS)
   **/
  static readonly NodeBusinessLogic_0199 = '0199';
  /**
   * 结点Web界面后台(CS)
   **/
  static readonly NodeWVCCode_0200 = '0200';
  /**
   * 结点WEB界面脚本(Html)
   **/
  static readonly NodeWVCode_0201 = '0201';
  /**
   * 关系Web用户控件前台脚本(Html)
   **/
  static readonly RelaWCVCode_0202 = '0202';
  /**
   * 结点Web用户控件后台(CS)
   **/
  static readonly NodeWCCCode_0203 = '0203';
  /**
   * 结点Web用户Gv控件前台脚本(Html)
   **/
  static readonly NodeWCVCode4Gv_0204 = '0204';
  /**
   * 结点Web用户Gv控件后台(CS)
   **/
  static readonly NodeWCCCode4Gv_0205 = '0205';
  /**
   * 结点实体扩展层(CS)
   **/
  static readonly NodeEntityLayerEx_0206 = '0206';
  /**
   * 结点数据处理扩展层(CS)
   **/
  static readonly NodeDALExCode_0207 = '0207';
  /**
   * 结点业务逻辑扩展层(CS)
   **/
  static readonly NodeBusinessLogicEx_0208 = '0208';
  /**
   * 结点WA_服务层(CS)
   **/
  static readonly NodeWA_Srv_0209 = '0209';
  /**
   * 结点WA_服务扩展层(CS)
   **/
  static readonly NodeWA_SrvEx_0210 = '0210';
  /**
   * 结点WA_访问层(CS)
   **/
  static readonly NodeWA_Access_0211 = '0211';
  /**
   * 结点WA_访问扩展层(CS)
   **/
  static readonly NodeWA_AccessEx_0212 = '0212';
  /**
   * 关系实体层(CS)
   **/
  static readonly RelaEntityLayer_0213 = '0213';
  /**
   * 关系实体扩展层(CS)
   **/
  static readonly RelaEntityLayerEx_0214 = '0214';
  /**
   * 关系数据处理层(CS)
   **/
  static readonly RelaDALCode_0215 = '0215';
  /**
   * 关系数据处理扩展层(CS)
   **/
  static readonly RelaDALExCode_0216 = '0216';
  /**
   * 关系业务逻辑层(CS)
   **/
  static readonly RelaBusinessLogic_0217 = '0217';
  /**
   * 关系业务逻辑扩展层(CS)
   **/
  static readonly RelaBusinessLogicEx_0218 = '0218';
  /**
   * 关系WA_服务层(CS)
   **/
  static readonly RelaWA_Srv_0219 = '0219';
  /**
   * 关系WA_服务扩展层(CS)
   **/
  static readonly RelaWA_SrvEx_0220 = '0220';
  /**
   * 关系WA_访问层(CS)
   **/
  static readonly RelaWA_Access_0221 = '0221';
  /**
   * 关系WA_访问扩展层(CS)
   **/
  static readonly RelaWA_AccessEx_0222 = '0222';
  /**
   * 关系WEB界面前台脚本(Html)
   **/
  static readonly RelaWVCode_0223 = '0223';
  /**
   * 关系Web界面后台(CS)
   **/
  static readonly RelaWVCCode_0224 = '0224';
  /**
   * 关系Web用户控件后台(CS)
   **/
  static readonly RelaWCCCode_0225 = '0225';
  /**
   * 关系Web用户Gv控件前台脚本(Html)
   **/
  static readonly RelaWCVCode4Gv_0226 = '0226';
  /**
   * 关系Web用户Gv控件后台(CS)
   **/
  static readonly RelaWCCCode4Gv_0227 = '0227';
  /**
   * 结点Web用户控件前台脚本(Html)
   **/
  static readonly NodeWCVCode_0228 = '0228';
  /**
   * WA_访问层公共函数类扩展(TS)
   **/
  static readonly CommFun4WA_0229 = '0229';
  /**
   * WA_访问扩展层(JS)
   **/
  static readonly WA_AccessEx_0230 = '0230';
  /**
   * WA_界面UT后台RJ(JS)
   **/
  static readonly WA_ViewUTScriptCSRJ_0231 = '0231';
  /**
   * WA_访问层RJ(JS)
   **/
  static readonly WA_AccessRJ_0232 = '0232';
  /**
   * 实体层RJ(JS)
   **/
  static readonly EntityLayerRJ_0233 = '0233';
  /**
   * 实体扩展层RJ(JS)
   **/
  static readonly EntityLayerRJEx_0234 = '0234';
  /**
   * 简化实体层RJ(JS)
   **/
  static readonly EntityLayerRJ_Sim_0235 = '0235';
  /**
   * 业务逻辑层RJ(JS)
   **/
  static readonly BusinessLogicRJ_0236 = '0236';
  /**
   * WA_访问公共函数扩展(JS)
   **/
  static readonly CommFun4WARJ_0237 = '0237';
  /**
   * WA_界面脚本_JS(Html)
   **/
  static readonly WA_ViewScript_JS_0238 = '0238';
  /**
   * WA_界面后台_JS(JS)
   **/
  static readonly WA_ViewScriptCS_JS_0239 = '0239';
  /**
   * WA_界面后台Ex_JS(JS)
   **/
  static readonly WA_ViewScriptCSEx_JS_0240 = '0240';
  /**
   * WA_访问扩展层RJ(JS)
   **/
  static readonly WA_AccessRJEx_0241 = '0241';
  /**
   * WA_编辑区_JS(Html)
   **/
  static readonly WA_ViewScript_Edit_JS_0242 = '0242';
  /**
   * WA_编辑区_TS(Html)
   **/
  static readonly WA_ViewScript_Edit_TS_0243 = '0243';
  /**
   * WA_详细信息_TS(Html)
   **/
  static readonly WA_ViewScript_Detail_TS_0244 = '0244';
  /**
   * 纯粹类(TS)
   **/
  static readonly PureClass_0245 = '0245';
  /**
   * 纯粹类处理层(TS)
   **/
  static readonly PureClassAccess_0246 = '0246';
  /**
   * Copy_纯粹类(TS)
   **/
  static readonly PureClass_0247 = '0247';
  /**
   * WA_编辑区后台_TS(TS)
   **/
  static readonly WA_ViewScript_EditCS_TS_0248 = '0248';
  /**
   * WA_编辑区后台Ex_TS(TS)
   **/
  static readonly WA_ViewScript_EditCSEx_TS_0249 = '0249';
  /**
   * WA_界面后台_TS(TS)
   **/
  static readonly WA_ViewScriptCS_TS_0250 = '0250';
  /**
   * WA_详细信息后台_TS(TS)
   **/
  static readonly WA_ViewScript_DetailCS_TS_0251 = '0251';
  /**
   * WA_详细信息后台Ex_TS(TS)
   **/
  static readonly WA_ViewScript_DetailCSEx_TS_0252 = '0252';
  /**
   * Vue_界面脚本_TS(Html)
   **/
  static readonly Vue_ViewScript_TS_0253 = '0253';
  /**
   * Vue_界面后台_TS(TS)
   **/
  static readonly Vue_ViewScriptCS_TS_0254 = '0254';
  /**
   * Vue_界面后台Ex_TS(TS)
   **/
  static readonly Vue_ViewScriptCSEx_TS_0255 = '0255';
  /**
   * Vue_编辑区_TS(Html)
   **/
  static readonly Vue_ViewScript_Edit_TS_0256 = '0256';
  /**
   * Vue_编辑区后台_TS(TS)
   **/
  static readonly Vue_ViewScript_EditCS_TS_0257 = '0257';
  /**
   * Vue_编辑区后台Ex_TS(TS)
   **/
  static readonly Vue_ViewScript_EditCSEx_TS_0258 = '0258';
  /**
   * Vue_详细信息_TS(Html)
   **/
  static readonly Vue_ViewScript_Detail_TS_0259 = '0259';
  /**
   * Vue_详细信息后台_TS(TS)
   **/
  static readonly Vue_ViewScript_DetailCS_TS_0260 = '0260';
  /**
   * Vue_详细信息后台Ex_TS(TS)
   **/
  static readonly Vue_ViewScript_DetailCSEx_TS_0261 = '0261';
  /**
   * 实体层Store(TS)
   **/
  static readonly StoreEntityLayer_0262 = '0262';
  /**
   * Vue_列表区_TS(Html)
   **/
  static readonly Vue_ViewScript_List_TS_0263 = '0263';
  /**
   * Vue共享(TS)
   **/
  static readonly Vue_Share_TS_0264 = '0264';
}
