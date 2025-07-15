/**
 * 类名:clsvPrjConstraint_SimEN
 * 表名:vPrjConstraint_Sim(00050638)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/17 00:37:51
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * vPrjConstraint_Sim(vPrjConstraint_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvPrjConstraint_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vPrjConstraint_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PrjConstraintId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 6;
  public static AttributeName = [
    'prjConstraintId',
    'constraintName',
    'prjId',
    'tabId',
    'constraintTypeId',
    'inUse',
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
      case clsvPrjConstraint_SimEN.con_PrjConstraintId:
        return this.prjConstraintId;
      case clsvPrjConstraint_SimEN.con_ConstraintName:
        return this.constraintName;
      case clsvPrjConstraint_SimEN.con_PrjId:
        return this.prjId;
      case clsvPrjConstraint_SimEN.con_TabId:
        return this.tabId;
      case clsvPrjConstraint_SimEN.con_ConstraintTypeId:
        return this.constraintTypeId;
      case clsvPrjConstraint_SimEN.con_InUse:
        return this.inUse;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjConstraint_Sim]中不存在!`;
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
      case clsvPrjConstraint_SimEN.con_PrjConstraintId:
        this.prjConstraintId = strValue;
        break;
      case clsvPrjConstraint_SimEN.con_ConstraintName:
        this.constraintName = strValue;
        break;
      case clsvPrjConstraint_SimEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvPrjConstraint_SimEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvPrjConstraint_SimEN.con_ConstraintTypeId:
        this.constraintTypeId = strValue;
        break;
      case clsvPrjConstraint_SimEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjConstraint_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public prjConstraintId = ''; //约束表Id
  public constraintName = ''; //约束名
  public prjId = ''; //工程Id
  public tabId = ''; //表ID
  public constraintTypeId = ''; //约束类型Id
  public inUse = false; //是否在用

  /**
   * 常量:"PrjConstraintId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjConstraintId(): string {
    return 'prjConstraintId';
  } //约束表Id

  /**
   * 常量:"ConstraintName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ConstraintName(): string {
    return 'constraintName';
  } //约束名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"ConstraintTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ConstraintTypeId(): string {
    return 'constraintTypeId';
  } //约束类型Id

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

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
    //return propName in new clsvPrjConstraint_SimEN();
    const instance = new clsvPrjConstraint_SimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
