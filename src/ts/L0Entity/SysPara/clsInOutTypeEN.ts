/**
 * 类名:clsInOutTypeEN
 * 表名:InOutType(00050135)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 03:39:52
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * InOut类型(InOutType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsInOutTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'InOutType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'InOutTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = ['inOutTypeId', 'inOutTypeName', 'inOutTypeENName', 'memo'];
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
  private mstrInOutTypeId = ''; //INOUT类型ID
  private mstrInOutTypeName = ''; //INOUT类型名称
  private mstrInOutTypeENName = ''; //INOUT类型英文名
  private mstrMemo = ''; //说明

  /**
   * INOUT类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInOutTypeId(value: string) {
    if (value != undefined) {
      this.inOutTypeId = value;
      this.hmProperty['inOutTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * INOUT类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInOutTypeName(value: string) {
    if (value != undefined) {
      this.inOutTypeName = value;
      this.hmProperty['inOutTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * INOUT类型英文名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInOutTypeENName(value: string) {
    if (value != undefined) {
      this.inOutTypeENName = value;
      this.hmProperty['inOutTypeENName'] = true;
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
      case clsInOutTypeEN.con_InOutTypeId:
        return this.inOutTypeId;
      case clsInOutTypeEN.con_InOutTypeName:
        return this.inOutTypeName;
      case clsInOutTypeEN.con_InOutTypeENName:
        return this.inOutTypeENName;
      case clsInOutTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[InOutType]中不存在!`;
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
      case clsInOutTypeEN.con_InOutTypeId:
        this.inOutTypeId = strValue;
        this.hmProperty['inOutTypeId'] = true;
        break;
      case clsInOutTypeEN.con_InOutTypeName:
        this.inOutTypeName = strValue;
        this.hmProperty['inOutTypeName'] = true;
        break;
      case clsInOutTypeEN.con_InOutTypeENName:
        this.inOutTypeENName = strValue;
        this.hmProperty['inOutTypeENName'] = true;
        break;
      case clsInOutTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[InOutType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public inOutTypeId = ''; //INOUT类型ID
  public inOutTypeName = ''; //INOUT类型名称
  public inOutTypeENName = ''; //INOUT类型英文名
  public memo = ''; //说明

  /**
   * 常量:"InOutTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InOutTypeId(): string {
    return 'inOutTypeId';
  } //INOUT类型ID

  /**
   * 常量:"InOutTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InOutTypeName(): string {
    return 'inOutTypeName';
  } //INOUT类型名称

  /**
   * 常量:"InOutTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InOutTypeENName(): string {
    return 'inOutTypeENName';
  } //INOUT类型英文名

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
    //return propName in new clsInOutTypeEN();
    const instance = new clsInOutTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumInOutType {
  /**
   * OUT/IN
   **/
  static readonly OUT_IN_01 = '01';
  /**
   * IN
   **/
  static readonly IN_02 = '02';
  /**
   * OUT
   **/
  static readonly OUT_03 = '03';
  /**
   * NotOUT/IN
   **/
  static readonly NotOUT_IN_04 = '04';
}
