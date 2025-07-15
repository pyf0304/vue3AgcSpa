/**
 * 类名:clsFldOperationTypeEN
 * 表名:FldOperationType(00050278)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 04:54:14
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
 * 字段操作类型(FldOperationType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsFldOperationTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'FldOperationType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FldOpTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = ['fldOpTypeId', 'fldOpTypeName', 'fldOpTypeENName', 'memo'];
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
  private mstrFldOpTypeId = ''; //字段操作类型Id
  private mstrFldOpTypeName = ''; //字段操作类型名称
  private mstrFldOpTypeENName = ''; //字段操作类型英文名
  private mstrMemo = ''; //说明

  /**
   * 字段操作类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldOpTypeId(value: string) {
    if (value != undefined) {
      this.fldOpTypeId = value;
      this.hmProperty['fldOpTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段操作类型名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldOpTypeName(value: string) {
    if (value != undefined) {
      this.fldOpTypeName = value;
      this.hmProperty['fldOpTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段操作类型英文名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldOpTypeENName(value: string) {
    if (value != undefined) {
      this.fldOpTypeENName = value;
      this.hmProperty['fldOpTypeENName'] = true;
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
      case clsFldOperationTypeEN.con_FldOpTypeId:
        return this.fldOpTypeId;
      case clsFldOperationTypeEN.con_FldOpTypeName:
        return this.fldOpTypeName;
      case clsFldOperationTypeEN.con_FldOpTypeENName:
        return this.fldOpTypeENName;
      case clsFldOperationTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[FldOperationType]中不存在!`;
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
      case clsFldOperationTypeEN.con_FldOpTypeId:
        this.fldOpTypeId = strValue;
        this.hmProperty['fldOpTypeId'] = true;
        break;
      case clsFldOperationTypeEN.con_FldOpTypeName:
        this.fldOpTypeName = strValue;
        this.hmProperty['fldOpTypeName'] = true;
        break;
      case clsFldOperationTypeEN.con_FldOpTypeENName:
        this.fldOpTypeENName = strValue;
        this.hmProperty['fldOpTypeENName'] = true;
        break;
      case clsFldOperationTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[FldOperationType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public fldOpTypeId = ''; //字段操作类型Id
  public fldOpTypeName = ''; //字段操作类型名称
  public fldOpTypeENName = ''; //字段操作类型英文名
  public memo = ''; //说明

  /**
   * 常量:"FldOpTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldOpTypeId(): string {
    return 'fldOpTypeId';
  } //字段操作类型Id

  /**
   * 常量:"FldOpTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldOpTypeName(): string {
    return 'fldOpTypeName';
  } //字段操作类型名称

  /**
   * 常量:"FldOpTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldOpTypeENName(): string {
    return 'fldOpTypeENName';
  } //字段操作类型英文名

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
    //return propName in new clsFldOperationTypeEN();
    const instance = new clsFldOperationTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumFldOperationType {
  /**
   * 未知
   **/
  static readonly UnKnown_0000 = '0000';
  /**
   * 可读写
   **/
  static readonly ReadWrite_0001 = '0001';
  /**
   * 只读
   **/
  static readonly OnlyRead_0002 = '0002';
  /**
   * 只写
   **/
  static readonly OnlyWrite_0003 = '0003';
  /**
   * 不可读写
   **/
  static readonly CannotReadWrite_0004 = '0004';
}
