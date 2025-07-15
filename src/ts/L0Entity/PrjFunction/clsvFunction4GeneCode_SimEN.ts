/**
 * 类名:clsvFunction4GeneCode_SimEN
 * 表名:vFunction4GeneCode_Sim(00050605)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/15 11:49:05
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * v函数4GC_Sim(vFunction4GeneCode_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFunction4GeneCode_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = 'UsedTimes>0'; //条件格式串
  public static _CurrTabName = 'vFunction4GeneCode_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncId4GC'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'funcId4GC',
    'funcName',
    'funcId4Code',
    'sqlDsTypeId',
    'featureId',
    'inUse',
    'funcGCTypeId',
    'templateNum',
    'progLangTypeId',
    'funcCodeTypeId',
    'usedTimes',
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
      case clsvFunction4GeneCode_SimEN.con_FuncId4GC:
        return this.funcId4GC;
      case clsvFunction4GeneCode_SimEN.con_FuncName:
        return this.funcName;
      case clsvFunction4GeneCode_SimEN.con_FuncId4Code:
        return this.funcId4Code;
      case clsvFunction4GeneCode_SimEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsvFunction4GeneCode_SimEN.con_FeatureId:
        return this.featureId;
      case clsvFunction4GeneCode_SimEN.con_InUse:
        return this.inUse;
      case clsvFunction4GeneCode_SimEN.con_FuncGCTypeId:
        return this.funcGCTypeId;
      case clsvFunction4GeneCode_SimEN.con_TemplateNum:
        return this.templateNum;
      case clsvFunction4GeneCode_SimEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId:
        return this.funcCodeTypeId;
      case clsvFunction4GeneCode_SimEN.con_UsedTimes:
        return this.usedTimes;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4GeneCode_Sim]中不存在!`;
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
      case clsvFunction4GeneCode_SimEN.con_FuncId4GC:
        this.funcId4GC = strValue;
        break;
      case clsvFunction4GeneCode_SimEN.con_FuncName:
        this.funcName = strValue;
        break;
      case clsvFunction4GeneCode_SimEN.con_FuncId4Code:
        this.funcId4Code = strValue;
        break;
      case clsvFunction4GeneCode_SimEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        break;
      case clsvFunction4GeneCode_SimEN.con_FeatureId:
        this.featureId = strValue;
        break;
      case clsvFunction4GeneCode_SimEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvFunction4GeneCode_SimEN.con_FuncGCTypeId:
        this.funcGCTypeId = strValue;
        break;
      case clsvFunction4GeneCode_SimEN.con_TemplateNum:
        this.templateNum = Number(strValue);
        break;
      case clsvFunction4GeneCode_SimEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId:
        this.funcCodeTypeId = strValue;
        break;
      case clsvFunction4GeneCode_SimEN.con_UsedTimes:
        this.usedTimes = Number(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4GeneCode_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public funcId4GC = ''; //函数ID
  public funcName = ''; //函数名
  public funcId4Code = ''; //函数Id4Code
  public sqlDsTypeId = ''; //数据源类型Id
  public featureId = ''; //功能Id
  public inUse = false; //是否在用
  public funcGCTypeId = ''; //函数生成代码类型Id
  public templateNum = 0; //TemplateNum
  public progLangTypeId = ''; //编程语言类型Id
  public funcCodeTypeId = ''; //函数代码类型Id
  public usedTimes = 0; //使用次数

  /**
   * 常量:"FuncId4GC"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncId4GC(): string {
    return 'funcId4GC';
  } //函数ID

  /**
   * 常量:"FuncName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"FuncId4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncId4Code(): string {
    return 'funcId4Code';
  } //函数Id4Code

  /**
   * 常量:"SqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"FeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
  } //功能Id

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"FuncGCTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncGCTypeId(): string {
    return 'funcGCTypeId';
  } //函数生成代码类型Id

  /**
   * 常量:"TemplateNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TemplateNum(): string {
    return 'templateNum';
  } //TemplateNum

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"FuncCodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncCodeTypeId(): string {
    return 'funcCodeTypeId';
  } //函数代码类型Id

  /**
   * 常量:"UsedTimes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UsedTimes(): string {
    return 'usedTimes';
  } //使用次数

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
