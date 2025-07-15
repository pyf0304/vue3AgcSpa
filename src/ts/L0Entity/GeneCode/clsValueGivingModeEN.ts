/**
 * 类名:clsValueGivingModeEN
 * 表名:ValueGivingMode(00050462)
 * 版本:2025.05.11.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/12 14:48:36
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
 * 给值方式(ValueGivingMode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsValueGivingModeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ValueGivingMode'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ValueGivingModeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = [
    'valueGivingModeId',
    'valueGivingModeName',
    'valueGivingModeENName',
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
  private mstrValueGivingModeId = ''; //给值方式Id
  private mstrValueGivingModeName = ''; //给值方式名
  private mstrValueGivingModeENName = ''; //给值方式英文名
  private mstrMemo = ''; //说明

  /**
   * 给值方式Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetValueGivingModeId(value: string) {
    if (value != undefined) {
      this.valueGivingModeId = value;
      this.hmProperty['valueGivingModeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 给值方式名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetValueGivingModeName(value: string) {
    if (value != undefined) {
      this.valueGivingModeName = value;
      this.hmProperty['valueGivingModeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 给值方式英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetValueGivingModeENName(value: string) {
    if (value != undefined) {
      this.valueGivingModeENName = value;
      this.hmProperty['valueGivingModeENName'] = true;
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
      case clsValueGivingModeEN.con_ValueGivingModeId:
        return this.valueGivingModeId;
      case clsValueGivingModeEN.con_ValueGivingModeName:
        return this.valueGivingModeName;
      case clsValueGivingModeEN.con_ValueGivingModeENName:
        return this.valueGivingModeENName;
      case clsValueGivingModeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ValueGivingMode]中不存在!`;
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
      case clsValueGivingModeEN.con_ValueGivingModeId:
        this.valueGivingModeId = strValue;
        this.hmProperty['valueGivingModeId'] = true;
        break;
      case clsValueGivingModeEN.con_ValueGivingModeName:
        this.valueGivingModeName = strValue;
        this.hmProperty['valueGivingModeName'] = true;
        break;
      case clsValueGivingModeEN.con_ValueGivingModeENName:
        this.valueGivingModeENName = strValue;
        this.hmProperty['valueGivingModeENName'] = true;
        break;
      case clsValueGivingModeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[ValueGivingMode]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public valueGivingModeId = ''; //给值方式Id
  public valueGivingModeName = ''; //给值方式名
  public valueGivingModeENName = ''; //给值方式英文名
  public memo = ''; //说明

  /**
   * 常量:"ValueGivingModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ValueGivingModeId(): string {
    return 'valueGivingModeId';
  } //给值方式Id

  /**
   * 常量:"ValueGivingModeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ValueGivingModeName(): string {
    return 'valueGivingModeName';
  } //给值方式名

  /**
   * 常量:"ValueGivingModeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ValueGivingModeENName(): string {
    return 'valueGivingModeENName';
  } //给值方式英文名

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
    //return propName in new clsValueGivingModeEN();
    const instance = new clsValueGivingModeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumValueGivingMode {
  /**
   * 缺省值
   **/
  static readonly DefaultValue_01 = '01';
  /**
   * 给定值
   **/
  static readonly GivenValue_02 = '02';
}
