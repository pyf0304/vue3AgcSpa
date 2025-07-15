/**
 * 类名:clsvCodeType_SimEN
 * 表名:vCodeType_Sim(00050623)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 21:16:51
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
 * vCodeType_Sim(vCodeType_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvCodeType_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vCodeType_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CodeTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 20;
  public static AttributeName = [
    'codeTypeId',
    'codeTypeName',
    'codeTypeENName',
    'groupName',
    'dependsOn',
    'frontOrBack',
    'orderNum',
    'progLangTypeId',
    'prefix',
    'appCount',
    'funcCount',
    'classNameFormat',
    'codeTypeSimName',
    'regionTypeId',
    'inUse',
    'sqlDsTypeId',
    'isDefaultOverride',
    'isExtend',
    'isAutoParseFile',
    'fileNameFormat',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvCodeType_SimEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsvCodeType_SimEN.con_CodeTypeName:
        return this.codeTypeName;
      case clsvCodeType_SimEN.con_CodeTypeENName:
        return this.codeTypeENName;
      case clsvCodeType_SimEN.con_GroupName:
        return this.groupName;
      case clsvCodeType_SimEN.con_DependsOn:
        return this.dependsOn;
      case clsvCodeType_SimEN.con_FrontOrBack:
        return this.frontOrBack;
      case clsvCodeType_SimEN.con_OrderNum:
        return this.orderNum;
      case clsvCodeType_SimEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvCodeType_SimEN.con_Prefix:
        return this.prefix;
      case clsvCodeType_SimEN.con_AppCount:
        return this.appCount;
      case clsvCodeType_SimEN.con_FuncCount:
        return this.funcCount;
      case clsvCodeType_SimEN.con_ClassNameFormat:
        return this.classNameFormat;
      case clsvCodeType_SimEN.con_CodeTypeSimName:
        return this.codeTypeSimName;
      case clsvCodeType_SimEN.con_RegionTypeId:
        return this.regionTypeId;
      case clsvCodeType_SimEN.con_InUse:
        return this.inUse;
      case clsvCodeType_SimEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsvCodeType_SimEN.con_IsDefaultOverride:
        return this.isDefaultOverride;
      case clsvCodeType_SimEN.con_IsExtend:
        return this.isExtend;
      case clsvCodeType_SimEN.con_IsAutoParseFile:
        return this.isAutoParseFile;
      case clsvCodeType_SimEN.con_FileNameFormat:
        return this.fileNameFormat;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vCodeType_Sim]中不存在!`;
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
      case clsvCodeType_SimEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        break;
      case clsvCodeType_SimEN.con_CodeTypeName:
        this.codeTypeName = strValue;
        break;
      case clsvCodeType_SimEN.con_CodeTypeENName:
        this.codeTypeENName = strValue;
        break;
      case clsvCodeType_SimEN.con_GroupName:
        this.groupName = strValue;
        break;
      case clsvCodeType_SimEN.con_DependsOn:
        this.dependsOn = strValue;
        break;
      case clsvCodeType_SimEN.con_FrontOrBack:
        this.frontOrBack = strValue;
        break;
      case clsvCodeType_SimEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvCodeType_SimEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvCodeType_SimEN.con_Prefix:
        this.prefix = strValue;
        break;
      case clsvCodeType_SimEN.con_AppCount:
        this.appCount = Number(strValue);
        break;
      case clsvCodeType_SimEN.con_FuncCount:
        this.funcCount = Number(strValue);
        break;
      case clsvCodeType_SimEN.con_ClassNameFormat:
        this.classNameFormat = strValue;
        break;
      case clsvCodeType_SimEN.con_CodeTypeSimName:
        this.codeTypeSimName = strValue;
        break;
      case clsvCodeType_SimEN.con_RegionTypeId:
        this.regionTypeId = strValue;
        break;
      case clsvCodeType_SimEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvCodeType_SimEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        break;
      case clsvCodeType_SimEN.con_IsDefaultOverride:
        this.isDefaultOverride = Boolean(strValue);
        break;
      case clsvCodeType_SimEN.con_IsExtend:
        this.isExtend = Boolean(strValue);
        break;
      case clsvCodeType_SimEN.con_IsAutoParseFile:
        this.isAutoParseFile = Boolean(strValue);
        break;
      case clsvCodeType_SimEN.con_FileNameFormat:
        this.fileNameFormat = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vCodeType_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public codeTypeENName = ''; //代码类型英文名
  public groupName = ''; //组名
  public dependsOn = ''; //依赖于
  public frontOrBack = ''; //前台Or后台
  public orderNum = 0; //序号
  public progLangTypeId = ''; //编程语言类型Id
  public prefix = ''; //前缀
  public appCount = 0; //应用数
  public funcCount = 0; //函数数目
  public classNameFormat = ''; //类名格式
  public codeTypeSimName = ''; //简称
  public regionTypeId = ''; //区域类型Id
  public inUse = false; //是否在用
  public sqlDsTypeId = ''; //数据源类型Id
  public isDefaultOverride = false; //是否默认覆盖
  public isExtend = false; //是否扩展类
  public isAutoParseFile = false; //是否自动分析文件
  public fileNameFormat = ''; //文件名格式

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
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"Prefix"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Prefix(): string {
    return 'prefix';
  } //前缀

  /**
   * 常量:"AppCount"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AppCount(): string {
    return 'appCount';
  } //应用数

  /**
   * 常量:"FuncCount"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncCount(): string {
    return 'funcCount';
  } //函数数目

  /**
   * 常量:"ClassNameFormat"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClassNameFormat(): string {
    return 'classNameFormat';
  } //类名格式

  /**
   * 常量:"CodeTypeSimName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeSimName(): string {
    return 'codeTypeSimName';
  } //简称

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"SqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"IsDefaultOverride"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsDefaultOverride(): string {
    return 'isDefaultOverride';
  } //是否默认覆盖

  /**
   * 常量:"IsExtend"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExtend(): string {
    return 'isExtend';
  } //是否扩展类

  /**
   * 常量:"IsAutoParseFile"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsAutoParseFile(): string {
    return 'isAutoParseFile';
  } //是否自动分析文件

  /**
   * 常量:"FileNameFormat"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FileNameFormat(): string {
    return 'fileNameFormat';
  } //文件名格式

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
    //return propName in new clsvCodeType_SimEN();
    const instance = new clsvCodeType_SimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
