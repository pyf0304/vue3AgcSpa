/**
 * 类名:clsFieldTypeEN
 * 表名:FieldType(00050173)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/17 00:37:27
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
 * 字段类型(FieldType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsFieldTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'FieldType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FieldTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 5;
  public static AttributeName = [
    'fieldTypeId',
    'fieldTypeName',
    'fieldTypeENName',
    'orderNum',
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
  private mstrFieldTypeId = ''; //字段类型Id
  private mstrFieldTypeName = ''; //字段类型名
  private mstrFieldTypeENName = ''; //字段类型英文名
  private mintOrderNum = 0; //序号
  private mstrMemo = ''; //说明

  /**
   * 字段类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFieldTypeId(value: string) {
    if (value != undefined) {
      this.fieldTypeId = value;
      this.hmProperty['fieldTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段类型名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFieldTypeName(value: string) {
    if (value != undefined) {
      this.fieldTypeName = value;
      this.hmProperty['fieldTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段类型英文名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFieldTypeENName(value: string) {
    if (value != undefined) {
      this.fieldTypeENName = value;
      this.hmProperty['fieldTypeENName'] = true;
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
      case clsFieldTypeEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsFieldTypeEN.con_FieldTypeName:
        return this.fieldTypeName;
      case clsFieldTypeEN.con_FieldTypeENName:
        return this.fieldTypeENName;
      case clsFieldTypeEN.con_OrderNum:
        return this.orderNum;
      case clsFieldTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[FieldType]中不存在!`;
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
      case clsFieldTypeEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        this.hmProperty['fieldTypeId'] = true;
        break;
      case clsFieldTypeEN.con_FieldTypeName:
        this.fieldTypeName = strValue;
        this.hmProperty['fieldTypeName'] = true;
        break;
      case clsFieldTypeEN.con_FieldTypeENName:
        this.fieldTypeENName = strValue;
        this.hmProperty['fieldTypeENName'] = true;
        break;
      case clsFieldTypeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsFieldTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[FieldType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public fieldTypeId = ''; //字段类型Id
  public fieldTypeName = ''; //字段类型名
  public fieldTypeENName = ''; //字段类型英文名
  public orderNum = 0; //序号
  public memo = ''; //说明

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"FieldTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeName(): string {
    return 'fieldTypeName';
  } //字段类型名

  /**
   * 常量:"FieldTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeENName(): string {
    return 'fieldTypeENName';
  } //字段类型英文名

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

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
    //return propName in new clsFieldTypeEN();
    const instance = new clsFieldTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumFieldType {
  /**
   * 一般字段
   **/
  static readonly NormalField_01 = '01';
  /**
   * 关键字段
   **/
  static readonly KeyField_02 = '02';
  /**
   * 名称字段
   **/
  static readonly NameField_03 = '03';
  /**
   * 管理字段
   **/
  static readonly ManageField_04 = '04';
  /**
   * 英文名称字段
   **/
  static readonly EnglishNameFIeld_05 = '05';
  /**
   * 排序字段
   **/
  static readonly SortField_06 = '06';
  /**
   * 字符常量字段
   **/
  static readonly CharsConstField_07 = '07';
  /**
   * 同步字段
   **/
  static readonly SynField_08 = '08';
  /**
   * 序号字段
   **/
  static readonly OrderNumField_09 = '09';
  /**
   * 分类字段
   **/
  static readonly ClassificationField_10 = '10';
  /**
   * 计算列
   **/
  static readonly CalcField_11 = '11';
  /**
   * 删除标志字段
   **/
  static readonly DelSignField_12 = '12';
  /**
   * 日志-修改日期
   **/
  static readonly Log_UpdDate_13 = '13';
  /**
   * 日志-修改人
   **/
  static readonly Log_UpdUser_14 = '14';
  /**
   * 附加Copy字段
   **/
  static readonly AdditionalCopyField_15 = '15';
  /**
   * 条件字段
   **/
  static readonly ConditionField_16 = '16';
  /**
   * 设置字段
   **/
  static readonly SetField_17 = '17';
  /**
   * 暂时不用
   **/
  static readonly BeingNot_18 = '18';
  /**
   * 前缀字段
   **/
  static readonly PrefixField_19 = '19';
  /**
   * 显示单元(扩展)
   **/
  static readonly DisplayUnit_20 = '20';
}
