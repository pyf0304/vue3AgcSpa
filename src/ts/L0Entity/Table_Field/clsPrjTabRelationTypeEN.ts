/**
 * 类名:clsPrjTabRelationTypeEN
 * 表名:PrjTabRelationType(00050607)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:09
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
 * 工程表关系类型(PrjTabRelationType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPrjTabRelationTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PrjTabRelationType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PrjTabRelaTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = [
    'prjTabRelaTypeId',
    'tabRelationTypeName',
    'tabRelationTypeENName',
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
  private mstrPrjTabRelaTypeId = ''; //表关系类型Id
  private mstrTabRelationTypeName = ''; //表关系类型名
  private mstrTabRelationTypeENName = ''; //表关系类型英文名
  private mstrMemo = ''; //说明

  /**
   * 表关系类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjTabRelaTypeId(value: string) {
    if (value != undefined) {
      this.prjTabRelaTypeId = value;
      this.hmProperty['prjTabRelaTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表关系类型名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabRelationTypeName(value: string) {
    if (value != undefined) {
      this.tabRelationTypeName = value;
      this.hmProperty['tabRelationTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表关系类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabRelationTypeENName(value: string) {
    if (value != undefined) {
      this.tabRelationTypeENName = value;
      this.hmProperty['tabRelationTypeENName'] = true;
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
      case clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId:
        return this.prjTabRelaTypeId;
      case clsPrjTabRelationTypeEN.con_TabRelationTypeName:
        return this.tabRelationTypeName;
      case clsPrjTabRelationTypeEN.con_TabRelationTypeENName:
        return this.tabRelationTypeENName;
      case clsPrjTabRelationTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjTabRelationType]中不存在!`;
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
      case clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId:
        this.prjTabRelaTypeId = strValue;
        this.hmProperty['prjTabRelaTypeId'] = true;
        break;
      case clsPrjTabRelationTypeEN.con_TabRelationTypeName:
        this.tabRelationTypeName = strValue;
        this.hmProperty['tabRelationTypeName'] = true;
        break;
      case clsPrjTabRelationTypeEN.con_TabRelationTypeENName:
        this.tabRelationTypeENName = strValue;
        this.hmProperty['tabRelationTypeENName'] = true;
        break;
      case clsPrjTabRelationTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[PrjTabRelationType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public prjTabRelaTypeId = ''; //表关系类型Id
  public tabRelationTypeName = ''; //表关系类型名
  public tabRelationTypeENName = ''; //表关系类型英文名
  public memo = ''; //说明

  /**
   * 常量:"PrjTabRelaTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjTabRelaTypeId(): string {
    return 'prjTabRelaTypeId';
  } //表关系类型Id

  /**
   * 常量:"TabRelationTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabRelationTypeName(): string {
    return 'tabRelationTypeName';
  } //表关系类型名

  /**
   * 常量:"TabRelationTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabRelationTypeENName(): string {
    return 'tabRelationTypeENName';
  } //表关系类型英文名

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
    //return propName in new clsPrjTabRelationTypeEN();
    const instance = new clsPrjTabRelationTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumPrjTabRelationType {
  /**
   * 未知关系
   **/
  static readonly UnknownRelationship_00 = '00';
  /**
   * 父子关系
   **/
  static readonly FatherSonRelationship_01 = '01';
  /**
   * 引用关系
   **/
  static readonly ReferenceRelationship_02 = '02';
  /**
   * 子父关系
   **/
  static readonly SonFatherRelationship_03 = '03';
}
