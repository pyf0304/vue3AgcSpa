/**
 * 类名:clsvCodeTypeSimEN
 * 表名:vCodeType_Sim(00050623)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:22:13
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vCodeType_Sim(vCodeTypeSim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvCodeTypeSimEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vCodeTypeSim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CodeTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 16;
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
      case clsvCodeTypeSimEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsvCodeTypeSimEN.conCodeTypeName:
        return this.codeTypeName;
      case clsvCodeTypeSimEN.conCodeTypeENName:
        return this.codeTypeENName;
      case clsvCodeTypeSimEN.conGroupName:
        return this.groupName;
      case clsvCodeTypeSimEN.conDependsOn:
        return this.dependsOn;
      case clsvCodeTypeSimEN.conFrontOrBack:
        return this.frontOrBack;
      case clsvCodeTypeSimEN.con_OrderNum:
        return this.orderNum;
      case clsvCodeTypeSimEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvCodeTypeSimEN.conPrefix:
        return this.prefix;
      case clsvCodeTypeSimEN.conAppCount:
        return this.appCount;
      case clsvCodeTypeSimEN.conFuncCount:
        return this.funcCount;
      case clsvCodeTypeSimEN.conClassNameFormat:
        return this.classNameFormat;
      case clsvCodeTypeSimEN.conCodeTypeSimName:
        return this.codeTypeSimName;
      case clsvCodeTypeSimEN.conRegionTypeId:
        return this.regionTypeId;
      case clsvCodeTypeSimEN.conInUse:
        return this.inUse;
      case clsvCodeTypeSimEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vCodeTypeSim]中不存在！`;
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
      case clsvCodeTypeSimEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        break;
      case clsvCodeTypeSimEN.conCodeTypeName:
        this.codeTypeName = strValue;
        break;
      case clsvCodeTypeSimEN.conCodeTypeENName:
        this.codeTypeENName = strValue;
        break;
      case clsvCodeTypeSimEN.conGroupName:
        this.groupName = strValue;
        break;
      case clsvCodeTypeSimEN.conDependsOn:
        this.dependsOn = strValue;
        break;
      case clsvCodeTypeSimEN.conFrontOrBack:
        this.frontOrBack = strValue;
        break;
      case clsvCodeTypeSimEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvCodeTypeSimEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvCodeTypeSimEN.conPrefix:
        this.prefix = strValue;
        break;
      case clsvCodeTypeSimEN.conAppCount:
        this.appCount = Number(strValue);
        break;
      case clsvCodeTypeSimEN.conFuncCount:
        this.funcCount = Number(strValue);
        break;
      case clsvCodeTypeSimEN.conClassNameFormat:
        this.classNameFormat = strValue;
        break;
      case clsvCodeTypeSimEN.conCodeTypeSimName:
        this.codeTypeSimName = strValue;
        break;
      case clsvCodeTypeSimEN.conRegionTypeId:
        this.regionTypeId = strValue;
        break;
      case clsvCodeTypeSimEN.conInUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvCodeTypeSimEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vCodeTypeSim]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
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

  /**
   * 常量:"CodeTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

  /**
   * 常量:"CodeTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCodeTypeName(): string {
    return 'codeTypeName';
  } //代码类型名

  /**
   * 常量:"CodeTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCodeTypeENName(): string {
    return 'codeTypeENName';
  } //代码类型英文名

  /**
   * 常量:"GroupName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conGroupName(): string {
    return 'groupName';
  } //组名

  /**
   * 常量:"DependsOn"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDependsOn(): string {
    return 'dependsOn';
  } //依赖于

  /**
   * 常量:"FrontOrBack"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFrontOrBack(): string {
    return 'frontOrBack';
  } //前台Or后台

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"ProgLangTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"Prefix"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conPrefix(): string {
    return 'prefix';
  } //前缀

  /**
   * 常量:"AppCount"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conAppCount(): string {
    return 'appCount';
  } //应用数

  /**
   * 常量:"FuncCount"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFuncCount(): string {
    return 'funcCount';
  } //函数数目

  /**
   * 常量:"ClassNameFormat"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conClassNameFormat(): string {
    return 'classNameFormat';
  } //类名格式

  /**
   * 常量:"CodeTypeSimName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCodeTypeSimName(): string {
    return 'codeTypeSimName';
  } //简称

  /**
   * 常量:"RegionTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conRegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conInUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"SqlDsTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

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
}
