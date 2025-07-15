/**
 * 类名:clsPrimaryTypeEN
 * 表名:PrimaryType(00050020)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:41
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
 * 主键类型(PrimaryType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPrimaryTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PrimaryType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PrimaryTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 5;
  public static AttributeName = [
    'primaryTypeId',
    'primaryTypeName',
    'primaryTypeENName',
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
  private mstrPrimaryTypeId = ''; //主键类型ID
  private mstrPrimaryTypeName = ''; //主键类型名
  private mstrPrimaryTypeENName = ''; //主键类型英文名
  private mintOrderNum = 0; //序号
  private mstrMemo = ''; //说明

  /**
   * 主键类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryTypeId(value: string) {
    if (value != undefined) {
      this.primaryTypeId = value;
      this.hmProperty['primaryTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主键类型名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryTypeName(value: string) {
    if (value != undefined) {
      this.primaryTypeName = value;
      this.hmProperty['primaryTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主键类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryTypeENName(value: string) {
    if (value != undefined) {
      this.primaryTypeENName = value;
      this.hmProperty['primaryTypeENName'] = true;
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
      case clsPrimaryTypeEN.con_PrimaryTypeId:
        return this.primaryTypeId;
      case clsPrimaryTypeEN.con_PrimaryTypeName:
        return this.primaryTypeName;
      case clsPrimaryTypeEN.con_PrimaryTypeENName:
        return this.primaryTypeENName;
      case clsPrimaryTypeEN.con_OrderNum:
        return this.orderNum;
      case clsPrimaryTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrimaryType]中不存在!`;
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
      case clsPrimaryTypeEN.con_PrimaryTypeId:
        this.primaryTypeId = strValue;
        this.hmProperty['primaryTypeId'] = true;
        break;
      case clsPrimaryTypeEN.con_PrimaryTypeName:
        this.primaryTypeName = strValue;
        this.hmProperty['primaryTypeName'] = true;
        break;
      case clsPrimaryTypeEN.con_PrimaryTypeENName:
        this.primaryTypeENName = strValue;
        this.hmProperty['primaryTypeENName'] = true;
        break;
      case clsPrimaryTypeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsPrimaryTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[PrimaryType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public primaryTypeId = ''; //主键类型ID
  public primaryTypeName = ''; //主键类型名
  public primaryTypeENName = ''; //主键类型英文名
  public orderNum = 0; //序号
  public memo = ''; //说明

  /**
   * 常量:"PrimaryTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryTypeId(): string {
    return 'primaryTypeId';
  } //主键类型ID

  /**
   * 常量:"PrimaryTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryTypeName(): string {
    return 'primaryTypeName';
  } //主键类型名

  /**
   * 常量:"PrimaryTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryTypeENName(): string {
    return 'primaryTypeENName';
  } //主键类型英文名

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
    //return propName in new clsPrimaryTypeEN();
    const instance = new clsPrimaryTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumPrimaryType {
  /**
   * 非关键字
   **/
  static readonly NonPrimaryKey_00 = '00';
  /**
   * 关键字
   **/
  static readonly PrimaryKey_01 = '01';
  /**
   * identity
   **/
  static readonly Identity_02 = '02';
  /**
   * 自增
   **/
  static readonly StringAutoAddPrimaryKey_03 = '03';
  /**
   * 整型
   **/
  static readonly IntegerPrimaryKey_04 = '04';
  /**
   * 外键型
   **/
  static readonly ForeignPrimaryKey_05 = '05';
  /**
   * 前缀自增
   **/
  static readonly StringAutoAddPrimaryKeyWithPrefix_06 = '06';
  /**
   * 复合主键
   **/
  static readonly CompositePrimaryKey_07 = '07';
}
